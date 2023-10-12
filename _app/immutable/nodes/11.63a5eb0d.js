import{s as ye,n as X,o as ke}from"../chunks/scheduler.e108d1fd.js";import{S as we,i as xe,g as Y,s as oe,h as Z,c as le,x as Me,k as P,a as K,f as U}from"../chunks/index.5ae4157e.js";import{j as Ne}from"../chunks/jquery.5af47638.js";import{l as se}from"../chunks/loadscript.5be5f31a.js";function Ce($){let s,h,e,m,C,q='<div id="bm-root" class="bm-wrapper" data-region-code="asi-e"><div class="bm-header"><div class="bm-selector"><div class="bm-current-indicator default drupal" data-key="select-country"></div> <div id="indic-selector" class="bm-selector-list"></div></div> <div class="bm-selector"><div class="bm-current-country"> </div> <div id="geo-selector" class="bm-selector-list"></div></div></div> <div class="bm-content svelte-1p1994b"><div id="ranking-container" class="svelte-1p1994b"><div id="ranking-title" class="bm-group-header drupal" data-key="ranking"></div> <div class="bm-sort-container"><div class="drupal" data-key="sort-by"></div> <input id="a-z" type="radio" name="sort" value="label"/><label for="a-z" class="drupal" data-key="a-z"></label> <div id="sort-numerics"></div></div> <div id="ranking" class="bm-ranking svelte-1p1994b"></div></div> <div class="bm-map svelte-1p1994b"><div id="map" class="svelte-1p1994b"></div></div> <div id="groups" class="bm-indicators svelte-1p1994b"><div class="bm-group"><div class="bm-group-header drupal svelte-1p1994b" data-key="g1-caption"></div> <div id="g1" class="bm-group-indicators"></div></div> <div class="bm-group"><div class="bm-group-header drupal svelte-1p1994b" data-key="g2-caption"></div> <div id="g2" class="bm-group-indicators"></div></div> <div class="drupal groups-description" data-empty="" data-key="groups-description"></div></div></div> <div class="bm-content svelte-1p1994b"><div class="bm-indicator-info svelte-1p1994b"><div class="bm-header drupal" data-key="indicator-info"></div> <div class="bm-indicator-title bm-subheader"></div> <div class="bm-indicator-description"></div> <div class="bm-disclaimer drupal disclaimer-note" data-key="disclaimer"></div></div> <div class="bm-data-download svelte-1p1994b"><div class="bm-header drupal" data-key="data"></div> <div class="data-download"><div class="bm-download-group"><input type="radio" id="d1-1" name="d1" checked=""/><label for="d1-1" id="l1-1"></label> <input type="radio" id="d1-2" name="d1"/><label class="drupal" data-key="all-indicators" for="d1-2"></label></div> <div class="bm-download-group"><input type="radio" id="d2-1" name="d2"/><label for="d2-1" id="l2-1"></label> <input type="radio" id="d2-2" name="d2" checked=""/><label class="drupal" data-key="all-countries" for="d2-2"></label></div> <div class="bt-download-buttons"><button id="data-download" class="bm-download-button drupal" data-key="download-excel"></button> <p class="bt-full-download drupal" data-key="download-tool"></p> <p class="bt-full-download"><a class="drupal" id="download-notes" data-key="download-notes"></a></p></div></div></div> <div class="bm-country-info svelte-1p1994b"><div id="country-page"><div class="bm-header drupal" data-key="country-page"></div> <div class="bm-country-page bm-subheader"></div> <div class="bm-country-page-note drupal" data-key="country-page-note"></div></div> <div id="country-note"><div class="bm-header drupal" data-key="country-note"></div> <div class="bm-country-note"></div></div></div></div></div>';return{c(){s=Y("link"),h=oe(),e=Y("link"),m=oe(),C=Y("div"),C.innerHTML=q,this.h()},l(p){s=Z(p,"LINK",{rel:!0,type:!0,href:!0}),h=le(p),e=Z(p,"LINK",{rel:!0,type:!0,href:!0}),m=le(p),C=Z(p,"DIV",{class:!0,"data-svelte-h":!0}),Me(C)!=="svelte-5d8l19"&&(C.innerHTML=q),this.h()},h(){P(s,"rel","stylesheet"),P(s,"type","text/css"),P(s,"href","/benchmarking/benchmarktool.css"),P(e,"rel","stylesheet"),P(e,"type","text/css"),P(e,"href","/benchmarking/benchmarktool2.css"),P(C,"class","wrapper svelte-1p1994b")},m(p,g){K(p,s,g),K(p,h,g),K(p,e,g),K(p,m,g),K(p,C,g)},p:X,i:X,o:X,d(p){p&&(U(s),U(h),U(e),U(m),U(C))}}}function _e($){const s={config:{iso3:"",lang:"en",root:"/",site:"/benchmarking/",file:"/",json:"/benchmarking/",benchmark_meta:"https://dataportal.asti.cgiar.org/json/benchmarking?region=asi-e&lang=en",tool:"",path:"",legacyasti:"https://www.asti.cgiar.org/sites/all/libraries/mw",api:{public:{token:"public",url:"https://dataportal.asti.cgiar.org/api/public",language:"en",version:2}},map:{click:"https://www.asti.cgiar.org/{NAME}?country={ISO3}&lang={LANG}"}}};let h;return ke(async()=>{await se("/common/mw.js"),await se("/common/tinycolor.js"),Ne(document).ready(function(e){var m=s.config.iso3,C=s.config.lang,q=document.getElementById("bm-root").getAttribute("data-region-code"),p,g,y,T="value0",B=-1,Q=1,de=s.config.benchmarking&&s.config.benchmarking["dmp-override"]?s.config.benchmarking["dmp-override"]:{geoitems:{},indicators:{}},n=new mw.DataManager({data:de});function ce(i,a){return a.replace("{ISO3}",i).replace("{LANG}",C).replace("{NAME}",n.geoitems[i].url)}function ve(i){return i.indexOf("?")==-1,e.ajax({url:s.config.benchmark_meta,data:{}})}function ee(i,a,t){var v=a&&a.api?a.api:"public",l=mw.support.extend(s.config.api[v],{}),c=l.url;return delete l.url,a&&delete a.api,i=="/indicators/data"&&(navigator.userAgent.match(/Trident/g)||navigator.userAgent.match(/MSIE/g))&&(t="POST"),e.ajax({url:c+i,type:t||"GET",data:mw.support.extend(a||{},l),dataType:"json",error(x,b,E){console.log("ERROR "+c+i,b,E)}})}function pe(i){var a=n.geoitems[i];if(!a||a.type=="map-inactive")return"#ededed";if(a.type=="region-inactive"||!y||!y.current||y.current[i]==null)return"#d8d8d8";var t=y.current,v=y.min,l=y.max,c=(t[i]-v)/(l-v)-.5;return c>0?tinycolor(y.color).darken(20*c).toString():tinycolor(y.color).lighten(-40*c).toString()}function ue(i){var a=n.geoitems[i.geoitem];if(a&&a.type!="map-inactive"){var t='<div class="label">{GEOITEM}</div>';return y&&y.current[i.geoitem]!=null&&(t+='<div class="value">'+mw.support.format(y.format,y.current[i.geoitem])+"</div>"),t}else return!1}function ae(i){e("#bm-root").attr("data-country-code",i);var a=n.geoitems[i]||{};if(e(".bm-current-country").html(a.label||n.meta["select-country"]).toggleClass("default",!a.label),e("#l2-1").toggle(a.hasOwnProperty("label")).html(a.label),!a.hasOwnProperty("label")&&e("#l2-1").prev().prop("checked")&&e("#l2-1").next().prop("checked",!0),e(".rank-indicator").removeClass("selected"),e('.rank-indicator[code="'+i+'"]').addClass("selected"),e("#country-page").toggleClass("hidden",a.url==null||a.url==""),a.url!=null&&a.url!=""){var t='<a href="'+ce(i,s.config.map.click)+'">'+a.label+"</a>";e("#country-page .bm-subheader").html(t),e("#country-page .bm-country-page-note").html(n.meta["country-page-note"].replace("{CPURL}",t))}me(i),te(i)}function z(i,a){var t=n.indicators[i];if(e(".bm-current-indicator").html(t.grouplabel+" / "+t.label),e(".bm-indicator-title").html(t.label),e(".bm-indicator-description").html(t.description),!a){e(".group-indicator").removeClass("selected"),e('.group-indicator[code="'+i+'"]').addClass("selected"),e("#l1-1").html(t.label);for(var v="",l=0;l<t.siblings.length;l++)n.indicators[t.siblings[l]],v+='<input id="s123-'+l+'" type="radio" name="sort" value="value'+l+'"',T=="value"+l&&(v+=" checked"),v+='/><label for="s123-'+l+'">'+t.sort[l]+"</label>";e("#sort-numerics").html(v)}e("#ranking-container").attr("data-group",t.group),ie(i,a),te(m),y=t,h.color()}function te(i){var a=n.geoitems[i];e("#country-note").toggleClass("hidden",!a||!a.note),a&&a.note&&e(".bm-country-note").html(a.note)}function ie(i,a){var t=n.indicators[i],v=[];for(var l in n.geoitems){var c=n.geoitems[l];if(c.url){for(var x={label:n.geoitems[l].label,code:l},b=0;b<t.siblings.length;b++)x["value"+b]=n.indicators[t.siblings[b]].current[l];v.push(x)}}if(a){for(var H=e("#ranking").children(),E=[],I=0,u=H.length;I<u;I++)E.push(H[I].getAttribute("code"));v.sort(function(D,_){return E.indexOf(D.code)<E.indexOf(_.code)?-1:1})}else v.sort(function(G,D){return G[T]<D[T]||G[T]===void 0?-B:B});var H=e("#ranking").children();t.siblings.length==1&&t.min;for(var I=0,u=H.length;I<u;I++){var A=H[I],x=v[I],k=t.siblings.length==1?t.max:100;A.setAttribute("code",x.code),A.childNodes[0].innerHTML=x.label,x.value0==null?A.childNodes[2].innerHTML="":A.childNodes[2].innerHTML=mw.support.format(t.format,x.value0);for(var b=0;b<Q;b++){var f=A.childNodes[1].childNodes[b],j=x["value"+b];if(j==null)f.style.width=0,f.style.left=0,f.classList.remove("cropped");else{var V=Math.ceil(Math.abs(j)/k*125);f.style.width=V+"px",f.style.left=(j<0?-V:0)+"px",f.classList.toggle("cropped",Math.abs(j)>k)}}}T!="label"&&(e(".rank-indicator").removeClass("selected"),e('.rank-indicator[code="'+m+'"]').addClass("selected"))}function me(i){e(".group-indicator").each(function(){var a=n.indicators[this.getAttribute("code")],t=a.current[i],v=a.max/205;if(t==null)this.childNodes[1].style.width=0,this.childNodes[1].style.left=0,this.childNodes[2].innerHTML="";else{var l=Math.ceil(Math.abs(t)/v);this.childNodes[1].style.width=l+"px",this.childNodes[1].style.left=(t<0?-l:0)+"px",this.childNodes[2].innerHTML=mw.support.format(a.format,t)}})}function ge(i){T==e(this).val()?B*=-1:(T=e(this).val(),B=T=="label"?1:-1),ie(g,!1)}s.config.benchmarking&&s.config.benchmarking["labels-url"]&&s.config.benchmarking["labels-url"],n.listen("ready",function(){e.when(e.ajax(s.config.json+q+".json"),ee("/countries/list"),ve("benchmarking.html")).done(function(i,a,t){var v=i[0],l=a[0],c=n.meta=t[0][0];e(".drupal").each(function(){var o=c[e(this).attr("data-key")];e(this).html(o||(this.hasAttribute("data-empty")?"":"{"+e(this).attr("data-key")+"}"))});for(var x=[],b=[],E=e('<div id="map1-color"/>').appendTo("body").css("color"),I=e('<div id="map2-color"/>').appendTo("body").css("color"),u=1;u<=2;u++){var H=e("#g"+u),A=c["g"+u+"-codes"];A&&A.length?e("#indic-selector").append('<div class="bm-selector-header">'+c["g"+u+"-caption"]+"</div>"):e('[data-key="g'+u+'-caption"]').hide();for(var k in A){var f=A[k].split(","),j=c["g"+u+"-labels"][k];f.length>Q&&(Q=f.length);for(var V in f){var G=f[V],D=n.indicators[G]||{code:G,label:j,values:{}};n.indicators[G]=mw.support.extend({group:u,color:u=="1"?E:I,format:c["g"+u+"-formats"][k],description:c["g"+u+"-info"][k],grouplabel:c["g"+u+"-caption"],sort:c["g"+u+"-sort"][k]?c["g"+u+"-sort"][k].split(","):[],min:1/0,max:-1/0,siblings:f,current:{}},D),x.push(G)}var _=e("<div/>",{class:"group-indicator",code:f[0],"data-indicator":f.join(",")}).on("click",function(){e("#s123-0:not(:checked)").click(),g=e(this).attr("code"),z(g,!1)}).on("mouseenter",function(){z(e(this).attr("code"),!0)}).on("mouseleave",function(){z(g,!0)});_.append('<div class="group-label">'+j+"</div>"),_.append('<div class="group-bar" style="width: 0"></div>'),_.append('<div class="group-value"></div>'),H.append(_),e("#indic-selector").append('<div code="'+f[0]+'">'+j+"</div>"),g||(g=f[0])}}var J=new Array(Q+1);J=J.join("<div></div>");for(var W=t[0][1]["chart-countries"],fe=t[0][2]["region-inactive"],he=t[0][3]["map-inactive"],k=0,be=l.data.length;k<be;k++){var L=l.data[k],M=L.iso3||L.ISO3;v.items[M]&&(L.label=L.name,n.geoitems[M]=L)}var re=s.config.legacyasti+"/excelexport/?content=notes&lang="+C+"&countries=";for(var M in W)re+=M+",";e("#download-notes").attr("href",re);for(var M in n.geoitems){var L=n.geoitems[M];if(b.push(M),he.indexOf(M)!=-1)L.type="map-inactive";else if(fe.indexOf(M)!=-1)L.type="region-inactive";else if(W[M]){L.url=W[M];var _=e("<div/>",{class:"rank-indicator"}).on("click",function(){m=e(this).attr("code"),h.highlight(m)}).on("mouseenter",function(){h.highlight(e(this).attr("code"))}).on("mouseleave",function(){h.highlight(m)});_.append('<div class="rank-label"></div>'),_.append('<div class="rank-bar">'+J+"</div>"),_.append('<div class="rank-value"></div>'),e("#ranking").append(_),e("#geo-selector").append('<div code="'+M+'">'+L.label+"</div>")}}e("#ranking-container").height(Math.max(e("#groups").height(),e(".bm-map").height())),navigator.userAgent.indexOf("MSIE 9.0")!=-1&&e("#ranking").height(e("#groups").height()-78),h=new mw.Map("map",{map:{url:v,padding:10},data:n,layers:[new mw.map.layers.Highlight({template:ue})],zoom:!1,events:{touch:"click hover",click:!0},color:pe}),h.listen("hover",function(o){if(o){var r=n.geoitems[o.geoitem];ae(r&&r.type!="map-inactive"?o.geoitem:m)}else ae(m)}),h.listen("click",function(o){var r=n.geoitems[o.geoitem];r&&!r.type&&(m=o.geoitem,h.highlight(o.geoitem))}),e("body").on("click",'input[name="sort"]',ge),e(".bm-selector").on("mouseenter",function(){e(this).addClass("opened")}),e(".bm-selector").on("mouseleave",function(){e(this).removeClass("opened")}),e("#geo-selector").on("click","div[code]",function(o){m=e(o.target).attr("code"),h.highlight(m),e(this).closest(".bm-selector").removeClass("opened")}),e("#indic-selector").on("click","div[code]",function(o){e("#s123-0:not(:checked)").click(),g=e(o.target).attr("code"),z(g,!1),e(this).closest(".bm-selector").removeClass("opened")}),e("#data-download").on("click",function(){var o="",r="";if(e("#l2-1").prev().prop("checked"))o+="&countries[]="+m;else for(var N in n.geoitems)n.geoitems[N].url&&(o+="&countries[]="+N);if(e("#l1-1").prev().prop("checked"))r+="&indicators[]="+g;else for(var N in n.indicators)r+="&indicators[]="+N;var w=s.config.legacyasti+"/excelexport/?years=latest"+o+r;window.open(w,"_blank")}),p=e("<div/>",{class:"chart-tooltip"}).css("position","absolute").appendTo("body"),e("#ranking").on("mouseenter",".rank-bar div",function(o){if(o.target.previousSibling){for(var r=n.indicators[g],N=r.siblings,w=o.target.parentNode.parentNode.getAttribute("code"),O=0,R=o.target;R=R.previousSibling;O++);if(O<r.siblings.length){var d=n.indicators[N[O]];p.html(r.sort[O]+": "+mw.support.format(r.format,d.current[w]));var S=e(o.target).offset();p.css({left:S.left+.5*e(o.target).width(),top:S.top}).show()}}}),e("#ranking").on("mouseleave",".rank-bar div",function(o){p.hide()}),ee("/indicators/data",{indicators:x,countries:b}).done(function(o){var r=n.indicators,N=o.data.series;for(var w in N){var O=N[w].iso3||N[w].ISO3,R=N[w].results;for(var o in R){var d=R[o].indicator,S=R[o].data;r[d]&&(r[d].values[O]=S)}n.geoitems[O].note=N[w].note}for(var d in r)if(r[d].current){for(var O in r[d].values){var S=r[d].values[O],ne=-1/0;for(var F in S)S[F]=parseFloat(S[F]),F>ne&&(ne=F,r[d].current[O]=S[F])}for(var w in r[d].current)r[d].current[w]>r[d].max&&(r[d].max=r[d].current[w]),r[d].current[w]<r[d].min&&(r[d].min=r[d].current[w])}for(var d in r)c["indicator-limits"]&&c["indicator-limits"][d]&&(r[d].max=+c["indicator-limits"][d]);h.highlight(m),z(g,!1)})})})})}),[]}class Se extends we{constructor(s){super(),xe(this,s,_e,Ce,ye,{})}}export{Se as component};