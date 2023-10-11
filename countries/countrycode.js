
asti = window.asti || {};
jQuery(document).ready(function($)
{
   // Get the country and language
   var iso3 = asti.config.iso3;
   var lang = asti.config.lang;
   var aid  = asti.config.aid;
   var dm = asti.data;

   var agencies = false;
   if($('#cp-root').attr('data-agencies'))
   {
      agencies = $('#cp-root').attr('data-agencies').split(',');
      for(var a in agencies) agencies[a] = +agencies[a];
   }

   var results = /[?&]lang(=([^&#]*)|&|#|$)/.exec(window.location.href);
   var langurl = results && results[2] ? decodeURIComponent(results[2].replace(/\+/g, " ")) : lang;

   if(lang != 'en')
   {
      mw.support.THOUSSEP = '.';
      mw.support.DECSEP = ',';
   }

   var map;
   var firstyear = 2000;
   var highlightlayer;
   var primaries = [];
   var secondaries = {};
   
   var multichart = {};
   var thresholds = {};

   // Special scoreboard chart
   function createScoreboard(node, iids, geoitems, options)
   {
      var gids = [ iso3 ];
      var year = options.year.value();
      var cats = node.getAttribute('data-categories').split(',');
      var vals = node.hasAttribute('data-values') ? node.getAttribute('data-values').split(',') : [];
      var bgs = node.hasAttribute('data-background') ? node.getAttribute('data-background').split(',') : [];

      var root = $('<div/>', {
         'class': 'scoreboard'
      }).appendTo(node);

      var tooltip = $('<div/>', {
         'class': 'map-tooltip map-hidden-tooltip'
      }).css('position', 'absolute').appendTo('body');

      var ttlabel = $('<div/>', {
         'class': 'value'
      });

      tooltip.append('<div class="map-tooltip-anchor"></div><div class="map-tooltip-tip"></div>', ttlabel);

      $(node).on('mouseenter', '.sb-bar', function(e) {
         var geo = e.target.getAttribute('data-geoitem');

         var iid1 = e.target.getAttribute('data-indicator');
         var val1 = mw.support.format(mw.chart.defaults.format, dm.indicators[iid1].values[geo][year]);
         var val2;

         if(node.hasAttribute('data-percentage'))
         {
            var iid2 = iid1.replace('.FTE', '.SHRE').replace('.HC', '.SHRE');
            val2 = mw.support.format(mw.chart.defaults.format, dm.indicators[iid2].values[geo][year]);
         }

         var pos = $(e.target).offset();
         ttlabel.html(val1 + (val2 ? ' (' + val2 + '%)' : ''));

         tooltip.css({ left: pos.left + 0.5 * $(e.target).width(), top: pos.top - tooltip.outerHeight() - 10 }).show();
      });

      $(node).on('mouseleave', '.sb-bar', function(e) {
         tooltip.hide();
      });

      function updateValues(updateaxis)
      {
         var max = 0;
         for(var i in iids)
            for(var g = 0; g < gids.length; g++)
            {
               var vals =  dm.indicators[iids[i]].values[gids[g]];
               if(vals)
                  max = Math.max(max, vals[year]);
            }

         var p = mw.support.prettify(0, max, 4);
         max = p[1];

         var bars = node.querySelectorAll('.sb-bar');
         for(var b = 0; b < bars.length; b++)
         {
            var iid = bars[b].getAttribute('data-indicator');
            var gid = bars[b].getAttribute('data-geoitem');
            var vals = dm.indicators[iid].values[gid];
            var value = vals ? vals[year] : 0;

            bars[b].style.width = (value / max) * 100 + '%';

            if(bars[b].hasAttribute('data-value'))
               bars[b].setAttribute('data-value', mw.support.format("%0.1f", value));
         }

         if(updateaxis)
         {
            var l = '';
            for(var v = -p[1]; v <= p[1]; v += p[2])
               l += '<span>' + mw.support.format('%f', Math.abs(v)) + '</span>';
            l += '</div>';
            node.querySelector('.sb-axis').innerHTML = l;
         }
      }

      function updateChart()
      {
         var code1 = iids[0].replace(cats[0] + '.', '');
         var code2 = iids[1].replace(cats[0] + '.', '');

         var r = '<div class="sb-chart-header"><div class="sb-half">' + (dm.meta[code1] || code1) + '</div><div class="sb-half">' + (dm.meta[code2] || code2) + '</div></div>';

         r += '<div class="sb-chart">';
         for(var c in cats)
         {
            var cat = cats[c], pos = false;
            var m = cat.match(/(\w+):([\d;]+)/);
            if(m)
            {
               cat = m[1];
               pos = m[2].split(';');
            }

            if(cat.match(/{.+}/))
            {
               cat = cat.substr(1, cat.length - 2);
               r += '<div class="sb-cat-header">' + (dm.meta[cat] || cat) + '</div>';
            }
            else
            {
               r += '<div class="sb-row-header">' + (dm.meta[cat] || cat) + '</div>';
               for(var g = 0; g < gids.length; g++)
               {
                  r += '<div class="sb-row">';
                  for(var i in iids)
                     if((!pos && iids[i].indexOf(cat) != -1) || (pos && pos.indexOf(i) > -1))
                     {
                        r += '<div class="sb-half">';

                        if(bgs.length)
                           r += '<div class="sb-bg sb-bar" data-indicator="' + bgs[i % 2] + '" data-geoitem="' + gids[g] + '"></div>';

                        r += '<div class="sb-bar" data-indicator="' + iids[i] + '" data-geoitem="' + gids[g] + '" style="background-color: ' + asti.config.scoreboard[g * 2 + (i % 2)] + '"';
                        if(vals.indexOf(iids[i]) != -1)
                           r += ' data-value';

                        r += '></div></div>';
                     }
                  r += '</div>';
               }
            }
         }
         r += '</div>';
         r += '<div class="sb-axis"></div>';

         r += '<div class="sb-legend chart-legend"><div class="chart-legend-items">';
         for(var g = 0; g < gids.length; g++)
         {
            r += '<div class="chart-legend-item">';
            r += '<div class="chart-legend-swatch chart-series-column" style="border-color: ' + asti.config.scoreboard[g * 2] +'"></div>';
            r += '<div class="chart-legend-swatch chart-series-column" style="border-color: ' + asti.config.scoreboard[g * 2 + 1] +'"></div>';
            r += '<div class="chart-legend-label">' + dm.geoitems[gids[g]].label + '</div>';
            r += '</div>';
         }
         r += '</div></div>';

         root.html(r);
         updateValues(true);
      }

      var me = {
         add: function(geo) {
            if(gids.indexOf(geo) == -1)
               gids.push(geo);

            updateChart();
         },
         remove: function(geo) {
            var pos = gids.indexOf(geo);
            if(pos !=-1)
               gids.splice(pos, 1);

            updateChart();
         },
         state: function() {
            return {
               data: function() {
                  return dm;
               }
            }
         },
         panes: function() {
            return node;
         },
         listen: function(key, callback) {
         },
         year: function(y) {
            year = y;
            updateValues(false);
         },
         destroy: function() {
            root.html('');
         },
         settings: function(key) {
            if(key == 'type')
               return 'scoreboard';
            else
               return key == 'geoitem' ? gids : iids;
         },
         'export': function(type, download, options) {
            options.download = download;
            options.renderer = 'http://www.ozuzo.net/~herman/mw/export/', //http://www.mappingworlds.nl/export/';
            options.format = type;
            options.content = node.outerHTML;

            mw.support.sendToServer(true, options.renderer, options);
         }
      }

      updateChart();
      options.year.init(me);

      return me;
   }

   function track(section, format)
   {
      if(window.ga)
      {
         var what = 'cp-' + (section || 'unknown') + '-' + format;
         ga('send', 'event', 'button', 'click', what);
      }
   }

   // Create a basic table
   function createTable(node, data)
   {
      var table = '';

      var meta = dm.meta;
      var data = meta[data];

      if(data)
      {
         var ltype = '';

         // Interate over some weird Drupal table format
         for(var r = 0; r < 999; r++)
         {
            var row = data['row_' + r];
            if(!row)
               break;

            var cols = [];
            for(var c = 0; c < 999; c++)
            {
               var col = row['col_' + c];
               if(col == undefined || col == "")
                  break;

               cols.push(col);
            }

            var type = cols[cols.length - 1];

            if(type.toLowerCase() == 'heading')
               table += '<h1><div>' + cols[0] + '</div></h1>';
            else if(type.toLowerCase() == 'date')
               table += '<h3>' + cols[0] + '</h3>';
            else
            {
               if(type !== ltype)// && meta[type])
                  table += '<h2>' + (meta[type] || type) + '</h2>';

               table += '<div class="cp-table-row">';
               for(var c = 0; c < cols.length - 1; c++)
               {
                  var cell = cols[c];
                  if(cell.match(/\u2022/))
                     cell = cell.replace(/\u2022/g, '<li>').replace('<li>', '<ul><li>');
                  cell = cell.replace(/<li>\s+/g, '<li>');
                  table += '<div class="cp-table-cell">' + cell + '</div>';
               }
               table += '</div>';

               ltype = type;
            }
         }
      }
      else
      {
         var parent = $(node).closest('.cp-tab');
         $('li[data-key="' + parent.attr('id') + '"]').hide();
      }

      $(node).html(table);
   }

   // Create a highcharts object
   function createChart(node, iid, geoitems)
   {
      var nid = node.parentNode.id || node.parentNode.parentNode.id;
      var threshold = thresholds[nid] || thresholds['data'] || 0;

      if(node.getAttribute('data-type') == 'multi')
      {
         iid = [];

         var sort = [], lastyear = -Infinity;
         var items = multichart[node.getAttribute('data-filter')] || [];
         for(var c = 0, ccnt = items.length; c < ccnt; c++)
         {
            var cid = items[c];
            var vals = dm.indicators[cid].values[geoitems];

            if(vals)
            {
               var ok = false;
               for(var y in vals)
               {
                  lastyear = Math.max(lastyear, y);

                  if(vals[y] >= threshold)
                     ok = true;
               }

               if(ok)
                  sort.push({ id: cid });
            }
         }

         for(var c = 0, ccnt = sort.length; c < ccnt; c++)
            sort[c].val = dm.indicators[sort[c].id].values[geoitems][lastyear] || 0;

         sort.sort(function(a, b) { return b.val - a.val });
         for(var s = 0, scnt = sort.length; s < scnt /*  && s < (threshold ? 10 : 1000) */; s++)
            iid.push(sort[s].id);

         if(iso3 === geoitems && items.length)
         {
            var unit = $(node).closest('[data-indicator]').find('.cp-indicator-unit');
            unit.append('<div class="cp-secondary-unit">' + dm.indicators[items[0]].unit + '</div>');
         }

         // Somehow a single-bar multi does not get drawn at all...
         if(iid.length == 1)
            iid.push(iid[0]);
      }

      var chart = asti.chart.create(node, iid, geoitems, firstyear);

      var buttons = $('<div class="cp-download-buttons"></div>');
      $(node).append(buttons);

      var label = $('<div data-format="xls" class="cp-download-button cp-chart-xls"></div>');
      $(buttons).append(label);

      label.on('click', function(e)
      {
         asti.chart.xls(e.target, chart);
         track($(node).closest('[id]').attr('id'), 'xls');
      });

      var label = $('<div data-format="png" class="cp-download-button cp-chart-png"></div>');
      $(buttons).append(label);

      label.on('click', function(e)
      {
         asti.chart.png(e.target, chart);
         track($(node).closest('[id]').attr('id'), 'png');
      });

      if(!node.hasAttribute('data-primary'))
         node.setAttribute('data-primary', primaries.length);
      return chart;
   }

   // Update the big current value number for key indicators
   function updateCurrent(node, iid)
   {
      if(!iid)
         return;

      var iids = iid.split(/\s*,\s*/);
      if(!dm.indicators[iids[0]])
         return;

      var v = 0, my = -Infinity;
      var current = agencies ? aid : iso3;

      var values = dm.indicators[iids[0]].values[current];
      for(var y in values)
         if(y > my)
            my = y;

      if(my > -Infinity)
      {
         for(var i = 0; i < iids.length; i++)
            if(dm.indicators[iids[i]].values[current])
               v += dm.indicators[iids[i]].values[current][my];

         if(v)
         {
            var vc = $(node).find('.value');
            vc.text(mw.support.format(vc.attr('data-format'), v));
            $(node).find('.year').text(my);
         }
      }
   }

   // Once all data is present, kickstart the dm and the map
   function kickstartMap()
   {
      var mopts = {
         map: {
            //url: asti.config.path + '/maps/' + (asti.config.map.region || 'world') + '.json',
            url: '/countries/world.json',
            highlight: function(id) {
               var profile = dm.geoitems[id] && dm.geoitems[id].profile;
               document.getElementById('map').style.cursor = profile ? 'pointer' : 'default';
               return asti.config.map.highlight[profile ? 'profile' : 'other']
            },
            padding: 10
         },
         data: dm,
         layers: [
            highlightlayer = new mw.map.layers.Highlight({
               template: function(e) {
                  return dm.geoitems[e.geoitem] ? '<div class="label">{GEOITEM}</div>' : false
               }
            })
         ],
         zoom:   {
            minimum: agencies ? 4 : 1,
            maximum: 10
         },
         events: {
            touch: 'click hover',
               click: true
         },
         color:  function(id) {
            var geoitem = dm.geoitems[id] || {};
            return asti.config.map.colors[iso3 == id ? 'current' : (geoitem.profile ? 'profile' : 'other')];
         }
      };

      if(agencies)
      {
         var infolayer = new mw.map.layers.Info({
            events: {
               hover: true
            }
         });

         var region = [];
         for(var a in dm.agencies)
         {
            var agency = dm.agencies[a];
            infolayer.add({
               id: 'pin-' + a,
               pin: '<div class="map-pin"></div>',
               position: {
                  lat: +agency.latitude,
                  lng: +agency.longitude
               }
            })

            if(agency.iso3 && region.indexOf(agency.iso3) == -1)
               region.push(agency.iso3);
         }

         infolayer.listen("hover", function(e) {
            if(e)
            {
               var agency = dm.agencies[e.pin.substr(4)];
               highlightlayer.show(e.x, e.y, '<div class="label">' + agency.label + '</div>');
            }
            else
               highlightlayer.hide();
         });

         infolayer.listen("click", function(id) {
            var agency = dm.agencies[id.substr(4)];
            window.location = agency.url;
         });

         var tilelayer = new mw.map.layers.Tiles({
            style: asti.config.path + '/maps/mapstyling.json',
            fade: false,
            visible: true
         });

         mopts.zoom.type = 'exponential';

         mopts.layers.push(infolayer);
         mopts.layers.push(tilelayer);
      }

      map = new mw.Map('map', mopts);

      map.listen('ready', function()
      {
         if(iso3)
            map.zoom(iso3, 0.01);
         else if(agencies)
         {
            map.region({ agencies: region });
            map.zoom('agencies', 0.01);
            setTimeout(function() {
               map.zoom(1);
            }, 250)
         }
      });

      map.listen('click', function(e)
      {
         if(agencies)
         {
            var clist = $('.cp-country-list');
            clist.children().removeClass('selected');

            var selected = clist.find('[data-gid="' + e.geoitem + '"]');
            if(selected.length)
               selected.addClass('selected').get(0).scrollIntoView(false);

            map.zoom(e.geoitem);
         }
         else if(dm.geoitems[e.geoitem].profile)
             window.location = dm.geoitems[e.geoitem].url;
      });
   }

   function kickstartCharts(root)
   {
      root.find('.cp-indicator-selector > div').on('click', function()
      {
         var iid = $(this).attr('data-indicator');
         var pid = $(this).closest('.cp-key-indicator').find('[data-primary]').attr('data-primary');

         $(this).siblings().removeClass('selected');
         $(this).addClass('selected');

         var geoitems = iid == "EXP.TOT.CONSTLCU.FTE" ? [ agencies ? aid : iso3 ] : primaries[pid].settings('geoitem');

         primaries[pid].destroy();
         primaries[pid] = createChart($(this).parent().next().get(0), iid, geoitems);

         iid = iid.split(',')[0];

         var div = $(this).closest('.cp-key-indicator');
         div.find('.cp-indicator-unit').html(dm.indicators[iid].unit || '')

         updateCurrent(div.find('.cp-current-value'), iid);

      }).each(function() {
         if($(this).index() == 0)
            $(this).addClass('selected').parent().parent().attr('data-indicator', $(this).attr('data-indicator'));

         if(!$(this).hasClass('drupal'))
            $(this).text(dm.indicators[$(this).attr('data-indicator')].label);
      });
     
      root.find('.cp-current-value').each(function()
      {
         updateCurrent(this, $(this).closest('[data-indicator]').attr('data-indicator'));
      });

      var geo = iso3 ? dm.geoitems[iso3].label : '';
      var agency = aid ? dm.agencies[aid].label : '';

      root.find('[data-indicator]').each(function()
      {
         var primary, iid = $(this).attr('data-indicator');
         if(iid == "")
            primary = dm.indicators[multichart[$(this).find('[data-filter]').attr('data-filter')][0]];
         else
            primary = dm.indicators[iid.split(',')[0]];
         
         if(primary)
         {
            $(this).find('.cp-indicator-unit').html(primary.unit);
            $(this).find('.cp-country-note').html(primary.notes[agencies ? aid : iso3] || '');
         }

         $(this).find('.cp-country-name').html(geo);
         $(this).find('.cp-agency-name').html(agency);
      });

      root.find('.cp-chart').each(function()
      {
         var iid = $(this).closest('[data-indicator]').attr('data-indicator');
         if(iid || $(this).attr('data-type') == 'multi')
            primaries.push(createChart(this, iid, agencies ? aid : iso3));
      });

      if(jQuery.placeholder)
         jQuery.placeholder.shim();
   }

   // Handler for auto-suggest list of geoitems
   function onSuggestion(request, response)
   {
      var r = [];

      var search = agencies ? dm.agencies : dm.geoitems;
      var current = agencies ? aid : iso3;
      var mapgeo = $('[data-gid].selected').attr('data-gid');

      var re = new RegExp((agencies ? '\\b' : '^') + request.term, 'i');
      for(var id in search)
      {
         var item = search[id];
         if(id == current || !item.label || secondaries[id])
            continue;

         if(!agencies && !item.profile)
            continue;
         else if(agencies && item.iso3 != mapgeo)
            continue;

         if(re.test(item.label))
            r.push({ label: item.label, value: id });
      }

      response(r);
   }

   // Remove a country from the comparison
   function removeComparison(geo)
   {
      for(var c = 0; c < primaries.length; c++)
      {
         if(!primaries[c])
            continue;

         var iid = primaries[c].settings('indicator');
         var type = primaries[c].settings('type');

         if(type == 'scoreboard' || !(iid instanceof Array))
            primaries[c].remove(geo);
      }

      for(var c = 0; c < secondaries[geo].charts.length; c++)
      {
         var chart = secondaries[geo].charts[c];
         if(chart)
            chart.destroy();

         if(secondaries[geo].nodes[c])
            secondaries[geo].nodes[c].remove();
      }

      delete secondaries[geo];

      $('#cp-root').attr('data-countries', +$('#cp-root').attr('data-countries') - 1);;
      $('#cp-root').attr('data-geoitems', $('#cp-root').attr('data-geoitems').replace(geo, ''));;
   }

   // Add a comparison country chart everywhere suitable
   function addComparison(event, ui)
   {
      var geo = ui.item.value;

      var div = $('<div/>', {
         'class':    'cp-secondary-country',
         'data-geo': geo,
         text:       dm.geoitems[geo].label
      }).on('click', function()
      {
         $(this).remove();
         removeComparison(geo);
      });

      $('#add-country').before(div);

      for(var c = 0; c < primaries.length; c++)
      {
         if(!primaries[c])
            continue;

         var iid = primaries[c].settings('indicator');
         var type = primaries[c].settings('type');
         if(type == 'scoreboard' || (!(iid instanceof Array) && iid != "FIN.EXP.TOTAL.CONSTANTLCU.FTE"))
            primaries[c].add(geo);
      }

      if(!secondaries[geo])
         secondaries[geo] = { nodes: [], charts: [] };

      var scnt = 0, first;
      for(var id in secondaries) scnt++;

      if(scnt == 5)
      {
         var oldest = $('#country-selector').find('.cp-secondary-country:first');

         removeComparison(oldest.attr('data-geo'));
         oldest.remove();
      }

      $('#cp-root').attr('data-countries', +$('#cp-root').attr('data-countries') + 1);;
      $('#cp-root').attr('data-geoitems', $('#cp-root').attr('data-geoitems') + ' ' + geo);;

      var notes = asti.config.path + '/excelexport/?content=notes&lang=' + lang + '&countries=' + iso3;
      for(var cid in secondaries)
         notes += ',' + cid;
      $('#download-notes').attr('href', notes);

      $('.cp-secondary-template').each(function()
      {
         var secondary = $('<div/>', {
            'class': 'cp-secondary'
         });

         $(this).children().each(function()
         {
            secondary.append($('<div/>', {
               'class':           this.className,
               'data-percentage': this.getAttribute('data-percentage'),
               'data-type':       this.getAttribute('data-type'),
               'data-filter':     this.getAttribute('data-filter'),
               'data-categories': this.getAttribute('data-categories')
            }));
         });

         $(this).after(secondary);

         secondary.find('.cp-chart').each(function()
         {
            var indic, iid = $(this).closest('[data-indicator]').attr('data-indicator');
            if(iid == "")
               indic = dm.indicators[multichart[$(this).find('[data-filter]').andSelf().filter('[data-filter]').attr('data-filter')][0]];
            else
               indic = dm.indicators[iid.split(',')[0]];

            secondaries[geo].charts.push(createChart(this, iid, geo));
            secondary.attr('data-geoitem', geo);

            if(indic)
               secondary.find('.cp-country-note').html(indic.notes[geo] || '');
         });

         secondary.find('.cp-country-name').html(dm.geoitems[geo].label);
         secondaries[geo].nodes.push(secondary);
      });
   }

   // Do something!
   // -> load available geoitems, indicators, and list of countries actually having a profile (country compare) or list of agencies (agency compare)

   var geoitems = [];
   var cnt = 3;

   function allDone()
   {
      cnt--;
      if(cnt == 0)
      {
         var years = [], now = new Date().getFullYear();
         for(var y = mw.chart.defaults.xaxis.range.minimum; y <= now + 1; y++)
            years.push(y);

         var clist = $('.cp-country-list');
         if(clist.length)
         {
            var items = [];
            var sub = agencies && clist[0].hasAttribute('data-agencies');
            for(var gid in dm.geoitems)
               if(dm.geoitems[gid].profile)
                  items.push({ id: gid, label: dm.geoitems[gid].label });

            items.sort(function(a, b) { return a.label < b.label ? -1 : 1});
            for(var i = 0; i < items.length; i++)
            {
               var div = $('<div/>', { 'data-gid': items[i].id }).html(items[i].label).appendTo(clist);
               if(sub)
               {
                  var subs = $('<div/>', { 'class': 'cp-country-list-sub' }).insertAfter(div);
                  for(var aid in dm.agencies)
                  {
                     if(dm.agencies[aid].iso3 == items[i].id)
                        $('<div/>', { 'data-aid': aid }).html(dm.agencies[aid].altlabel).appendTo(subs);
                  }
               }
            }

            var selected = clist.find('div[data-gid="' + iso3 + '"]');
            if(selected.length)
               selected.addClass('selected').get(0).scrollIntoView(false);

            clist.on('click', function(e) {
               if(e.target.hasAttribute('data-gid'))
               {
                  clist.children().removeClass('selected');
                  if(agencies)
                  {
                     e.target.className = 'selected';
                     map.zoom(iso3 = e.target.getAttribute('data-gid'));
                     map.redraw()
                  }
                  else
                     window.location = dm.geoitems[e.target.getAttribute('data-gid')].url;
               }
               else if(e.target.hasAttribute('data-aid'))
               {
                  var agency = dm.agencies[e.target.getAttribute('data-aid')];
                  window.location = agency.url;
               }
               else if($(e.target).hasClass('cp-country-list-sub'))
               {
                  $(e.target).toggleClass('opened');
               }
            })
         }

         // Find all referenced indicators in profile page
         $('.cp-tab').each(function()
         {
            var tab = $(this);
            var indicators = [];

            tab.find('[data-indicator]').each(function()
            {
               var iids = this.getAttribute('data-indicator');
               if(iids != '')
                  indicators.push.apply(indicators, iids.split(/\s*,\s*/));
            });

            if(tab.find('[data-type="multi"]').length)
               for(var f in multichart)
                  indicators = indicators.concat(multichart[f]);

            tab.find('.cp-table').each(function() {
               createTable(this, $(this).attr('data-data'));
            });

            if(!indicators.length)
               return;

            for(var i in indicators)
               if(!dm.indicators[indicators[i]])
                  dm.indicators[indicators[i]] = { label: indicators[i], values: {}, notes: {} };

            // Now load the indicator data for all used geoitems and all used indicators
            var iopts;
            if(agencies)
            {
               iopts = {
                  api: 'agency',
                  agencies: agencies.join(','),
                  indicators: indicators.join(','),
                  years: years.join(',')
               };
            }
            else
            {
               iopts = {
                  indicators: indicators,
                  countries: geoitems,
                  years: years
               }
            }

            asti.chart.load(agencies ? '/data' : '/indicators/data', iopts, function(r) {
               kickstartCharts(tab);
            });
         });

         if(document.getElementById('map'))
            kickstartMap();

         if(!agencies)
         {
            var url = $('#cp-root').attr('data-countries-url');
            if(url)
               url = (url[0] == '/' ? asti.config.json : asti.config.path + asti.config.tool + '/') + url + langurl;
            else
               url = asti.config.json + "/countries-urls?lang=" + langurl;

            // Kickstart loading the URLs to use for the click-throughs
            $.ajax({
               url:     url,
               data:    {},
               success: function(r) {
                  if(r instanceof Array)
                     r = r[0];

                  for(var geo in r)
                     if(dm.geoitems[geo])
                        dm.geoitems[geo].url = asti.config.map.click.replace('{NAME}', r[geo]).replace('{ISO3}', geo).replace('{LANG}', langurl);
               },
               error: function(xhr, s1, s2) { console.log("ERROR /countries-url", s1, s2) }
            });

            $('#primary').html(dm.geoitems[iso3].label);
            $('#l2-1').html(dm.geoitems[iso3].label);
         }
      }
   }

   // Get all geoitems, rename name to label for map

   asti.chart.load('/countries/list', {}, allDone);

   // Get all indicators, rename some properties for charts
   asti.chart.load(agencies ? '/indicators' : '/indicators/list', {
      api: agencies ? 'agency' : 'public'
   }, function() {
      var re = {};
      $('[data-filter]').each(function() {
         var filter = this.getAttribute('data-filter');

         re[filter] = new RegExp('^' + filter + '$');
         multichart[filter] = [];
      });

      for(var iid in dm.indicators)
      {
         for(var f in re)
         {
            if(iid.match(re[f]))
               multichart[f].push(iid);
         }
      }

      allDone();
   });

   var opts = {
      url: $('#cp-root').attr('data-countries-map'),
      success: function(r) {
         if(agencies)
         {
            for(var i in r['data'])
            {
               var agency = r['data'][i];
               if(agencies.indexOf(+agency.agencyid) != -1)
               {
                  agency.label = (agency.parent_organization ? agency.parent_organization + ' - ' : '') + agency.official_name;
                  agency.altlabel = (agency.parent_acronym ? agency.parent_acronym + ' - ' : '') + agency.official_name + (agency.parent_organization ? ' - '  + agency.parent_organization : '');

                  agency.url = asti.config.map.click.replace('{AID}', agency.agencyid).replace('{LANG}', langurl);

                  dm.agencies[agency.agencyid] = agency;
                  dm.geoitems[agency.iso3].profile = true;

               }
            }

            if(!dm.agencies[aid])
               dm.agencies[aid] = { label: aid };

            $('#primary').html(dm.agencies[aid].label);
         }
         else
         {
            // Mark all countries having profile as such (map coloring) and collect IDs so we can get all indicator data
            var r = r[0];
            if(r instanceof Array)
               r = r[0];

            for(var geo in r)
            {
               if(!dm.geoitems[geo])
                  dm.geoitems[geo] = {};

               dm.geoitems[geo].profile = r[geo];

               if(r[geo])
                  geoitems.push(geo);
            }
         }

         allDone();
      },
      error: function(xhr, s1, s2) { console.log("ERROR /newcountries", s1, s2) }
   };

   if(opts.url)
      opts.url = (opts.url[0] == '/' ? asti.config.json : asti.config.path + asti.config.tool + '/') + opts.url;
   else
   {
      if(agencies)
      {
         var api = asti.config.api['public'];
         opts.url = api.url + "/agencies/list?token=" + api.token + "&version=" + api.version;

         opts.data = { keyvalues: 0, agencies: agencies };
      }
      else
         opts.url = asti.config.json + "/newcountries?lang=" + lang;
   }

   mw.support.ajax(opts);

   // Add interactivity to tabs
   $('#cp-tabs').on('click', 'li', function(e)
   {
      $(e.target).siblings().removeClass('selected');
      $(e.target).addClass('selected');

      $('.cp-tab').removeClass('selected');
      $('#' + $(e.target).attr('data-key')).addClass('selected');

      $('#cp-root').attr('data-tab', $(e.target).attr('data-key'));
      $('#l1-1').html($(e.target).html());
   });

   // Add interactivity to "add country" input
   $('#add-country').autocomplete({
      appendTo: '.cp-tab-wrapper',
      close:    function(event, ui) {
         $('#add-country').val('')
      },
      source:   onSuggestion,
      change:   addComparison,
      select:   addComparison
   });

   // Modify the primary country label into an auto-suggest dropdown
   $('#primary').on('click', function()
   {
      if(!$('#primaryinput').length)
         return;

      function change(event, ui)
      {
         if(ui.item && ui.item.value != current)
         {
            document.body.innerHTML = '';
            window.location = search[ui.item.value].url;
         }
      }

      var current = agencies ? aid : iso3;
      var search = agencies ? dm.agencies : dm.geoitems;
      var input = $(this).next().val($(this).html());

      $(this).hide();

      if(agencies)
      {
         input.on('keyup', function() {
            if(this.value == '')
               $(this).autocomplete('search', 'a');
         });
      }

      input.autocomplete({
         appendTo: '.cp-wrapper',
         source: onSuggestion,
         change: change,
         select: change
      }).show().focus().select();

     $(this).siblings('input').on('blur', function() {
        $(this).hide();
        $(this).autocomplete('destroy');
        $('#primary').show();
     });
   });

   // Download
   $('#data-download').on('click', function()
   {
      var geo = '', indics = '';

      if($('#l2-1').prev().prop('checked'))
         geo += '&countries[]=' + iso3;
      else for(var id in dm.geoitems)
         if(dm.geoitems[id].profile)
            geo += '&countries[]=' + id;

      var nodes = $('#l1-1').prev().prop('checked') ? $('.cp-tab.selected') : $('.cp-tab');
      nodes.find('[data-indicator]').each(function()
      {
         var ids = $(this).attr('data-indicator').split(/\s*,\s*/);
         for(var i = 0; i < ids.length; i++)
            if(ids[i] != '')
               indics += '&indicators[]=' + ids[i];
      });

      var api = asti.config.api['public'];
      var url = api.url + "/indicators/export?token=" + api.token + "&version=" + api.version + "&format=excel&download=data_download" + geo + indics;
      window.open(url, '_blank');
   });

   $('#download-notes').attr('href', asti.config.path + '/excelexport/?content=notes&lang=' + lang + '&countries=' + iso3);

   // Load Drupal meta-data and insert where appropriate. Allow override through attribute in HTML of tool-root
   var url;
   if($('#cp-root').attr('data-labels-url'))
   {
      url = $('#cp-root').attr('data-labels-url');
      url = (url[0] == '/' ? asti.config.json : asti.config.path + asti.config.tool + '/') + url;
   }
   else
      url = asti.config.json + (agencies ? '/agencies?agency=' : '/countries?country=');

   url += agencies ? aid : iso3.toLowerCase();

   if(!agencies)
   {
      $('#cp-root').attr('data-countries', 1).attr('data-geoitems', iso3);
      $('.cp-secondary-template').attr('data-geoitem', iso3);
   }

   $.ajax({
      url: url + "&lang=" + lang + "&labels=" + langurl,
      data: {},
      success: function(r) {
         if(r instanceof Array)
            r = r[0];

         $('.drupal').each(function() {
            var s = r[$(this).attr('data-key')];
            $(this).html(s ? s : (this.hasAttribute('data-empty') ? '' : '{' + $(this).attr('data-key') + '}'));

            if(this.hasAttribute('data-empty') && s != '')
               this.removeAttribute('data-empty');
         });

         $('#add-country').attr('placeholder', r[$('#add-country').attr('data-key') || 'add-country']);

         for(var id in r)
         {
            if(id.match(/-threshold$/))
               thresholds[id.replace('crops-', 'data-').replace('-threshold', '')] = +r[id];
         }

         if(r['first-year'])
            firstyear = +r['first-year'];

         if(r['regional-title'])
            $('#cp-tabs').before('<a class="regional-comparison" href="' + r['regional-url'] + '">' + r['regional-title'] + '</a>');

         var img = $('#banner-image');
         if(r['image-caption'] instanceof Array)
         {
            var i = Math.floor(Math.random() * r['image-caption'].length) + 1;
            var t = r['image-caption'][i - 1];
            var a = r['image-credit'][i - 1];
            var l = r['image-link'][i - 1];
         }
         else
         {
            var i = 1;
            var t = r['image-caption'];
            var a = r['image-credit'];
            var l = r['image-link'];
         }

         img.attr('src', l);

         var div = img.next();
         div.find('a').attr('href', l);

         if(t == '')
            div.remove();
         else
         {
            div.find('.cp-image-title').html(t);
            div.find('.cp-image-attribution').html(a);
         }

         var links = $('.cp-download-links');
         for(var i in r['download-title'])
            if(!isNaN(parseInt(i)))
               links.append('<a class="drupal" href="' + r['download-url'][i] + '">' + r['download-title'][i] + '</a>');
         links.wrapInner('<div></div>');

         if(r['thumbnail-url'])
            links.append('<a href="' + r['download-url'][0] + '"><img src="' + r['thumbnail-url'] + '"/></a>');
         
         for(var n in r)
            dm.meta[n] = r[n];
      },
      error: function(xhr, s1, s2) { console.log("ERROR " + url, s1, s2) }
   });

   mw.chart.defaults.options.chart.animation = false;
});
