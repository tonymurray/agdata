asti = window.asti || {};

(function() {
   // Special scoreboard chart
   function createScoreboard(node, iids, geoitems, options)
   {
      var dm = asti.data;
      var gids = [geoitems];

      var axismax = 0;

      var year = options.year.value();
      var cats = node.getAttribute('data-categories').split(',');
      var vals = node.hasAttribute('data-values') ? node.getAttribute('data-values').split(',') : [];
      var bgs = node.hasAttribute('data-background') ? node.getAttribute('data-background').split(',') : [];

      var root = document.createElement('div');
      root.className = 'sb-wrapper';
      node.appendChild(root);

      var tooltip = document.createElement('div');
      tooltip.className = 'map-tooltip map-hidden-tooltip';
      tooltip.style.position = 'absolute';
      document.body.appendChild(tooltip);

      var ttlabel = document.createElement('div');
      ttlabel.className = 'value';

      var ttanchor = document.createElement('div');
      ttanchor.className = 'map-tooltip-anchor';

      var tttip = document.createElement('div');
      tttip.className = 'map-tooltip-tip';

      tooltip.appendChild(ttanchor);
      tooltip.appendChild(tttip);
      tooltip.appendChild(ttlabel);

      node.addEventListener('mouseover', function(e) {
         if(e.target.className != 'sb-bar')
            return;

         var geo = e.target.getAttribute('data-geoitem');

         var iid1 = e.target.getAttribute('data-indicator');
         var val1 = mw.support.format(mw.chart.defaults.format, dm.indicators[iid1].values[geo][year]);
         var val2;

         if(node.hasAttribute('data-percentage'))
         {
            var iid2 = iid1.replace('.FTE', '.SHRE').replace('.HC', '.SHRE');
            val2 = mw.support.format(mw.chart.defaults.format, dm.indicators[iid2].values[geo][year]);
         }

         var sx = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
         var sy = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

         var pos = mw.support.offset(e.target);
         var tx = pos.left + sx;
         var ty = pos.top + sy;

         ttlabel.innerHTML = val1 + (val2 ? ' (' + val2 + '%)' : '');

         var style = getComputedStyle(tooltip);
         tooltip.style.left = (tx + 0.5 * e.target.offsetWidth - parseInt(style.marginLeft)) + 'px';
         tooltip.style.display = 'block';

         var height = tooltip.offsetHeight;
         height += parseInt(style.marginTop) + parseInt(style.marginBottom);
         tooltip.style.top = (ty - height - 110) + 'px';
      });

      node.addEventListener('mouseout', function(e) {
         tooltip.style.display = 'none';
      });

      function updateValues(updateaxis)
      {
         if(updateaxis)
         {
            axismax = 0;
            for(var i in iids)
               for(var g = 0; g < gids.length; g++)
               {
                  var vals = dm.indicators[iids[i]].values[gids[g]];
                  if(vals)
                     for(var y in vals)
                        axismax = Math.max(axismax, vals[y] || 0);
               }

            var p = mw.support.prettify(0, axismax, 4);
            axismax = p[1];
         }

         var bars = node.querySelectorAll('.sb-bar');
         for(var b = 0; b < bars.length; b++)
         {
            var iid = bars[b].getAttribute('data-indicator');
            var gid = bars[b].getAttribute('data-geoitem');
            var vals = dm.indicators[iid].values[gid];
            var value = vals ? vals[year] : 0;

            bars[b].style.width = value == undefined || axismax == 0 ? 0 : (value / axismax) * 100 + '%';

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

         var r = '<div class="scoreboard">';
         r += '<div class="sb-chart-header"><div class="sb-half">' + (dm.meta[code1] || code1) + '</div><div class="sb-half">' + (dm.meta[code2] || code2) + '</div></div>';

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
         r += '</div>';

         r += '<div class="sb-legend chart-legend"><div class="chart-legend-items">';
         for(var g = 0; g < gids.length; g++)
         {
            var label = dm.agencies && dm.agencies[gids[g]] ? dm.agencies[gids[g]].label : dm.geoitems[gids[g]].label;
            r += '<div class="chart-legend-item">';
            r += '<div class="chart-legend-swatch chart-series-column" style="border-color: ' + asti.config.scoreboard[g * 2] + '"></div>';
            r += '<div class="chart-legend-swatch chart-series-column" style="border-color: ' + asti.config.scoreboard[g * 2 + 1] + '"></div>';
            r += '<div class="chart-legend-label">' + label + '</div>';
            r += '</div>';
         }
         r += '</div></div>';

         root.innerHTML = r;
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
            if(pos != -1)
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
            return root;
         },
         listen: function(key, callback) {
         },
         year: function(y) {
            year = y;
            updateValues(false);
         },
         destroy: function() {
            root.innerHTML = '';
         },
         settings: function(key) {
            if(key == 'type')
               return 'scoreboard';
            else
               return key == 'geoitem' ? gids : iids;
         },
         'export': function(type, download, options) {
            options.download = download;
            options.format = type;
            options.content = node.outerHTML;

            mw.support.sendToServer(true, 'https://www.mappingworlds.nl/export/', options);
         }
      }

      updateChart();
      options.year.init(me);

      return me;
   }

   if(window.parent && window.parent.asti && window.parent.asti.preload)
      asti.data = new mw.DataManager({ data: window.parent.asti.preload });
   else if(!asti.data)
      asti.data = new mw.DataManager({ data: { geoitems: {}, indicators: {}, agencies: {} } });

   asti.chart = {
      meta: function(callback) {
         var cnt, data = [ '/countries/list', '/indicators/list' ];

         for(cnt = 0; cnt < data.length; cnt++)
         {
            asti.chart.load(data[cnt], {}, function() {
               cnt--;
               if(cnt == 0)
                  callback();
            })
         }
      },

      load: function(url, args, callback) {
         var method = 'GET';
         var api = args && args.api ? args.api : 'public';
         var data = mw.support.extend(asti.config.api[api], {});
         var base = data.url;

         var range = args.range || { min: 0, max: 9999 };

         delete data.url;
         if(args)
            delete args.api;

         if(url == '/indicators/data' && (args.indicators.length > 50 || !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g)))
            method = 'POST';

         return mw.support.ajax({
            url: base + url,
            type: method,
            data: (mw.support.extend(args || {}, data)),
            dataType: 'json',
            success: function(r) {
               if(url == '/countries/list')
               {
                  var items = asti.data.geoitems;
                  for(var i = 0, rcnt = r.data.length; i < rcnt; i++)
                  {
                     var item = r.data[i];
                     var code = item.iso3 || item.ISO3;

                     if(!items[code])
                        items[code] = {};

                     items[code].label = item.name;
                  }
               }
               else if(url == '/indicators/list' || url == '/indicators')
               {
                  var items = asti.data.indicators;
                  for(var i = 0, rcnt = r.data.length; i < rcnt; i++)
                  {
                     var item = r.data[i];

                     item.label = item.legend_label == "NULL"  || item.legend_label == "" ? item.code : item.legend_label;
                     if(item.label)
                       item.label = item.label.replace('&amp;', '&');
                     item.unit = item.download_unit_label;
                     item.values = {};
                     item.notes = {};

                     items[item.code] = item;
                  }
               }
               else if(url == '/data' || url == '/indicators/data')
               {
                  var indics = asti.data.indicators;
                  var series = r.data.series;

                  if(series)
                  {
                     for(var g in series)
                     {
                        var cid = series[g].iso3 || series[g].ISO3;
                        var results = series[g].results;
                        for(var r in results)
                        {
                           var iid = results[r].indicator;
                           var vals = results[r].data;
                           var avals = {};

                           for(var y in vals)
                              if(vals[y] && (!range.min || y >= range.min) && (!range.max || y <= range.max))
                                 avals[y] = parseFloat(vals[y]);

                           indics[iid].values[cid] = avals;
                           indics[iid].notes[cid] = results[r].note;
                        }
                     }
                  }
                  else
                  {
                     for(var i in r.data)
                     {
                        var d = r.data[i];
                        var indic = indics[d.code];

                        var avals = indic.values[d.agencyid];
                        if(!avals)
                           avals = indic.values[d.agencyid] = {};

                        // FIXME: data comes as fraction, not percentages
                        if(d.code.match(/^RES.COM/))
                           d.value *= 100;
 
                        if((!range.min || +d.year >= range.min) && (!range.max || +d.year <= range.max))
                           avals[+d.year] = +d.value;
                     }

                     if(r.notes)
                     {
                        for(var i in r.notes)
                        {
                           var d = r.notes[i];
                           var indic = indics[d.code];

                           indics[d.code].notes[d.agencyid] = d.note;
                        }
                     }
                  }
               }

               if(callback)
                  callback(r);
            },
            error: function(xhr, s1, s2) {
               console.log("ERROR " + base + url, xhr, s1, s2)
            }
         });
      },

      // Create a highcharts object
      create: function(node, iid, geoitems, firstyear, currentyear) {
         firstyear = firstyear || 1900;

         var dm = asti.data;
         var type = node.getAttribute('data-type');

         if(type == 'geoitems' && !(geoitems instanceof Array))
         {
            geoitems = [];
            for(var gid in dm.geoitems)
               if(dm.geoitems[gid].profile)
                  geoitems.push(gid);

            var iids = iid.split(/\s*,\s*/);
            if(iids.length > 1)
               iid = iids;
         }
         else
         {
            if(iid instanceof Array)
            {
               if(iid.length > 1 && geoitems instanceof Array)
                  geoitems = geoitems[0];
               else if(type != 'multi')
                  iid = iid[0];
            }
            else
            {
               var iids = iid.split(/\s*,\s*/);
               if(iids.length > 1)
                  iid = iids;
               else if(!(geoitems instanceof Array))
                  geoitems = [ geoitems ];
            }
         }

         var options = {
            type: type,
            geoitem: geoitems,
            xaxis: { multiples: true },
            yaxis: {},
            state: {
               geoitem: iids && iids.length == 1,
               indicator: false,
               manager: new mw.StateManager({ data: dm })
            },
            legend: { interactive: false },
            indicator: iid
         };

         if(node.hasAttribute('data-percentage'))
            options.addperclabel = true;

         if(node.hasAttribute('data-format'))
         {
            options.format = node.getAttribute('data-format');
            options.yaxis.format = options.format;
         }

         if(options.type == 'multi')
         {
            options.state.geoitem = false;
            options.background = '#fff';
            options.type = 'bar';
            options.legend = false;
            options.stacked = true;
            options.xaxis = { type: 'indicator' };
            options.geoitem = [options.geoitem];
            options.xaxis.overlap = 'show';
            options.yaxis.labels = false;

            var llen = 0;
            for(var i in iid)
               llen = Math.max(llen, (dm.indicators[iid[i]].label || '').length);
            options.yaxis.width = Math.max(llen * 7, 150);

            var ch = parseInt(window.getComputedStyle(node).height);
            node.style.height = Math.max(ch, (iid.length * 15) + 20) + 'px';

            if(iid.length == 0)
               return;
         }

         if(options.type == 'stacked-column')
         {
            var miny = Infinity, maxy = -Infinity;
            var values = dm.indicators[iid[0]].values[geoitems];
            for(var y in values)
            {
               if(y > maxy) maxy = y;
               if(y < miny) miny = y;
            }

            options.type = 'column';
            options.stacked = true;

            options.xaxis.labels = 1;
         }

         if(options.type == 'stacked-column' || options.type == 'stacked-category' || (options.type == 'geoitems' && iid instanceof Array))
         {
            if(iid[0].indexOf('SHRE') > 0 || iid[0].indexOf('DIS') > 0)
               options.yaxis.range = { minimum: 0, maximum: 100 };
         }

         if(options.type == 'donut')
         {
            options.percentage = iid[0].indexOf('SHRE') > -1;
            options.background = '#fff';
         }

         if(window.innerWidth < 600 && (options.type == 'column' || options.type == 'stacked-column'))
            options.options = { chart: { spacingBottom: 35 }};

         var labels = {}, minyear = Infinity, maxyear = -Infinity;
         var iids = iid instanceof Array ? iid : [iid];
         for(var i in iids)
         {
            var all = options.type == 'geoitems' ? geoitems : [geoitems];
            for(var g in all)
            {
               var values = dm.indicators[iids[i]].values[all[g]];
               for(var y in values)
               {
                  minyear = Math.min(minyear, y);
                  maxyear = Math.max(maxyear, y);
                  labels[y] = y;
               }
            }
         }

         if(minyear < firstyear)
            options.xaxis.range = { minimum: firstyear };

         if(options.type == 'donut' || options.type == 'bar' || options.type == 'stacked-category' || options.type == 'scoreboard' || options.type == 'geoitems')
         {
            node.setAttribute('data-slider', '');

            options.year = new mw.map.layers.Slider({
               play: node.hasAttribute('data-play') ? 0.3 : false,
               value: currentyear || maxyear,
               padding: {
                  before: 19
               },
               range: {
                  minimum: minyear,
                  maximum: maxyear
               },
               labels: {
                  values: labels
               }
            });
         }

         if(options.type == 'geoitems')
         {
            var xlmax = 0;
            for(var g = 0; g < options.geoitem.length; g++)
               if(dm.geoitems[options.geoitem[g]] && dm.geoitems[options.geoitem[g]].label)
                  xlmax = Math.max(dm.geoitems[options.geoitem[g]].label.length, xlmax);

            options.type = 'column';
            options.xaxis = { type: 'geoitem', overlap: 'rotate' };

            if(iid instanceof Array) 
               options.stacked = true;

            options.options = {
               chart: {
                  marginBottom: (xlmax || 10) * 6,
                  marginRight: 50
               }
            };
         }

         if(options.type == 'stacked-category')
         {
            var cats = node.getAttribute('data-categories').split(',');
            var icnt = iid.length / cats.length;

            options.type = 'column';
            options.stacked = true;
            options.xaxis = { type: 'geoitem', labels: {} };
            options.indicator = iid.slice(0, icnt);
            options.legend.override = {};

            var values = {};
            for(var c in cats)
            {
               values[cats[c]] = {};
               options.xaxis.labels[cats[c]] = dm.meta[cats[c]];

               for(var i in iid)
               {
                  if(iid[i].indexOf('.' + cats[c] + '.') != -1)
                  {
                     var code = iid[i].replace(cats[c] + '.', '');
                     options.legend.override[iid[i]] = { label: dm.meta[code] || code };
                     values[cats[c]][iid[i % icnt]] = dm.indicators[iid[i]].values[geoitems];
                  }
               }
            }

            options.geoitem = cats;
            options.values = values;

            node.setAttribute('data-geoitem', geoitems);
         }

         if(type == 'scoreboard')
            return createScoreboard(node, iid, geoitems, options);
         else
            return new mw.Chart(node, options);
      },

      png: function(node, chart) {
         for(var container = node; container; container = container.parentNode)
            if(container.hasAttribute('data-indicator'))
               break;

         for(var template = node; template !== container; template = template.parentNode)
            if(template.className.indexOf('cp-secondary-template') != -1)
               break;

         var ctitle;
         if(container.previousElementSibling && container.previousElementSibling.nodeName == 'H1')
            ctitle = container.previousElementSibling;
         else
            ctitle = container.querySelector('.cp-chart-title');

         if(ctitle)
            ctitle = ctitle.innerHTML;
         else
         {
            ctitle = container.querySelector('.cp-indicator-selector-header');
            if(ctitle)
            {
               ctitle = ctitle.innerHTML;

               var sel = container.querySelector('.selected');
               if(sel)
                  ctitle += '<br/>' + sel.innerHTML;
            }
            else
               ctitle = '';
         }

         if(template.querySelectorAll('.cp-country-name').length == 1)
         {
            var cname = template.querySelector('.cp-country-name').innerHTML;
            if(cname != '')
               ctitle += ', ' + cname;
         }

         var ctype = template.querySelector('.cp-chart').getAttribute('data-type');
         var notes = template.querySelector('.cp-country-note');

         var cc = template.querySelector('.chart-container') || template.querySelector('.scoreboard');
         chart.export('png', true, {
            size:       (cc.clientWidth * 4) + '@4',
            template:   'asti-dt-chart',
            parameters: {
               title:    '<b>' + ctitle + '</b>',
               lang:     asti.config.lang,
               notes:    '<div class="indicator-notes">' + (notes ? notes.innerHTML : '') + '</div>',
               swatches: ''
            }
         });
      },

      xls: function(node, chart) {
         var url = asti.config.path + '/excelexport/';
         var c = chart.settings('geoitem');
         var i = chart.settings('indicator');

         for(var cn = node; cn; cn = cn.parentNode)
            if(cn.className.indexOf('cp-chart') != -1)
               break;

         if(cn.getAttribute('data-type') == 'stacked-category')
         {
            for(varndb = cn; dn; dn = dn.parentNode)
               if(dn.hasAttribute('data-indicator'))
                  break;

            c = cn.getAttribute('data-geoitem');
            i = dn.getAttribute('data-indicator').split(',');
         }

         if(i instanceof Array)
         {
            if(c instanceof Array)
               url += "?countries[]=" + c.join('&countries[]=') + "&indicators[]=" + i.join('&indicators[]=');
            else
               url += "?countries[]=" + c + "&indicators[]=" + i.join('&indicators[]=');
         }
         else
            url += "?indicators[]=" + i + "&countries[]=" + c.join('&countries[]=');

         window.open(url + '&lang=' + asti.config.lang, '_blank');
      }
   }

   mw.chart.defaults = {
      colors: ['#00A3C6', '#6472AD', '#96C120', '#E86546', '#DCA161', '#936037', '#a59d9d', '#66852C', '#F28A3D', '#B56191', '#633C27' ],
      options: {
         chart: {
            animation: true
         },
         yAxis: {
            reversedStacks: false
         },
         plotOptions: {
            column: {
               pointPadding: 0.05,
               groupPadding: 0.1,
               minPointLength: 2
            },
            bar: {
               pointPadding: 0.1,
               groupPadding: 0.1,
               minPointLength: 2
            }
         }
      },
      text: {
         charwidth: 7,
         color: '#1c1c1c',
         size: '12px',
         font: 'Open Sans'
      },
      format: '%0.1f',
      background: '#f6f8f6',
      grid: {
         horizontal: { first: false, last: false, major: { color: 'transparent' } },
         vertical: { first: false, last: false, major: { color: 'transparent' } }
      },
      state: {
         indicator: false
      },
      hover: function(e) {
         var s = e.target.settings();
         var h = e.target.height() - e.y;
         var g = asti.data.geoitems[e.geoitem] !== undefined;
         var k = s.indicator instanceof Array ? "INDICATOR" : "GEOITEM";

         var r = "<div class='label'>";
         r += k == "GEOITEM" || g ? "{" + k + "}" : s.legend.override[e.indicator].label;
         r += "</div><div class='value'>";
         r += mw.support.format(s.format, e.point.y);

         if(s.addperclabel)
            r += '&#160;({' + e.indicator.replace(/\.(FTE|HC|CONSTUSD|CURNTUSD)$/, '.SHRE') + '}%)';
         r += "</div>";

         if(s.type == 'line')
            r += "<div style='height: " + (h - 30) + "px' class='connector'></div>";
         if(s.type == 'bar')
         {
            if(s.xaxis.type != 'indicator')
               r += "<div style='left: " + (-e.x) + "px' class='left key'>{YEAR}</div>";
         }
         else if(s.type != 'donut')
            r += "<div style='top: " + h + "px' class='key'>{YEAR}</div>";

         if(s.type == 'column')
            e.y += 5;

         return r;
      },
      line: {
         marker: 'disc',
         width: 1.5,
         radius: 2,
         hover: {
            marker: 'circle',
            radius: 3
         }
      },
      column: {
         hover: false
      },
      bar: {
         hover: false
      },
      xaxis: {
         labels: 1,
         range: {
            extend: false
         }
      },
      yaxis: {
         format: '%.1f'
      }
   };
})();
