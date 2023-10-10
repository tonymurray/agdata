import{s as we,n as Y,o as xe}from"../chunks/scheduler.e108d1fd.js";import{S as Me,i as Ne,g as Z,s as se,h as $,c as de,x as Ce,k as G,a as U,f as q}from"../chunks/index.5ae4157e.js";import{j as _e}from"../chunks/jquery.5af47638.js";import{l as ce}from"../chunks/loadscript.5be5f31a.js";function Ie(ee){let s,f,e,m,N,z='<div id="bm-root" class="bm-wrapper" data-region-code="lac"><div class="bm-header"><div class="bm-selector"><div class="bm-current-indicator default drupal" data-key="select-country"></div> <div id="indic-selector" class="bm-selector-list"></div></div> <div class="bm-selector"><div class="bm-current-country"> </div> <div id="geo-selector" class="bm-selector-list"></div></div></div> <div class="bm-content svelte-1p1994b"><div id="ranking-container" class="svelte-1p1994b"><div id="ranking-title" class="bm-group-header drupal" data-key="ranking"></div> <div class="bm-sort-container"><div class="drupal" data-key="sort-by"></div> <input id="a-z" type="radio" name="sort" value="label"/><label for="a-z" class="drupal" data-key="a-z"></label> <div id="sort-numerics"></div></div> <div id="ranking" class="bm-ranking svelte-1p1994b"></div></div> <div class="bm-map svelte-1p1994b"><div id="map" class="svelte-1p1994b"></div></div> <div id="groups" class="bm-indicators svelte-1p1994b"><div class="bm-group"><div class="bm-group-header drupal svelte-1p1994b" data-key="g1-caption"></div> <div id="g1" class="bm-group-indicators"></div></div> <div class="bm-group"><div class="bm-group-header drupal svelte-1p1994b" data-key="g2-caption"></div> <div id="g2" class="bm-group-indicators"></div></div> <div class="drupal groups-description" data-empty="" data-key="groups-description"></div></div></div> <div class="bm-content svelte-1p1994b"><div class="bm-indicator-info svelte-1p1994b"><div class="bm-header drupal" data-key="indicator-info"></div> <div class="bm-indicator-title bm-subheader"></div> <div class="bm-indicator-description"></div> <div class="bm-disclaimer drupal disclaimer-note" data-key="disclaimer"></div></div> <div class="bm-data-download svelte-1p1994b"><div class="bm-header drupal" data-key="data"></div> <div class="data-download"><div class="bm-download-group"><input type="radio" id="d1-1" name="d1" checked=""/><label for="d1-1" id="l1-1"></label> <input type="radio" id="d1-2" name="d1"/><label class="drupal" data-key="all-indicators" for="d1-2"></label></div> <div class="bm-download-group"><input type="radio" id="d2-1" name="d2"/><label for="d2-1" id="l2-1"></label> <input type="radio" id="d2-2" name="d2" checked=""/><label class="drupal" data-key="all-countries" for="d2-2"></label></div> <div class="bt-download-buttons"><button id="data-download" class="bm-download-button drupal" data-key="download-excel"></button> <p class="bt-full-download drupal" data-key="download-tool"></p> <p class="bt-full-download"><a class="drupal" id="download-notes" data-key="download-notes"></a></p></div></div></div> <div class="bm-country-info svelte-1p1994b"><div id="country-page"><div class="bm-header drupal" data-key="country-page"></div> <div class="bm-country-page bm-subheader"></div> <div class="bm-country-page-note drupal" data-key="country-page-note"></div></div> <div id="country-note"><div class="bm-header drupal" data-key="country-note"></div> <div class="bm-country-note"></div></div></div></div></div>';return{c(){s=Z("link"),f=se(),e=Z("link"),m=se(),N=Z("div"),N.innerHTML=z,this.h()},l(u){s=$(u,"LINK",{rel:!0,type:!0,href:!0}),f=de(u),e=$(u,"LINK",{rel:!0,type:!0,href:!0}),m=de(u),N=$(u,"DIV",{class:!0,"data-svelte-h":!0}),Ce(N)!=="svelte-1vetjx2"&&(N.innerHTML=z),this.h()},h(){G(s,"rel","stylesheet"),G(s,"type","text/css"),G(s,"href","/benchmarking/benchmarktool.css"),G(e,"rel","stylesheet"),G(e,"type","text/css"),G(e,"href","/benchmarking/benchmarktool2.css"),G(N,"class","wrapper svelte-1p1994b")},m(u,g){U(u,s,g),U(u,f,g),U(u,e,g),U(u,m,g),U(u,N,g)},p:Y,i:Y,o:Y,d(u){u&&(q(s),q(f),q(e),q(m),q(N))}}}function Le(ee){const s={config:{iso3:"",lang:"en",root:"https://localhost/",site:"https://localhost/benchmarking/",file:"/",json:"/benchmarking/",benchmark_meta:"https://dataportal.asti.cgiar.org/json/benchmarking?region=lac&lang=en",tool:"",path:"",api:{public:{token:"public",url:"https://dataportal.asti.cgiar.org/api/public",language:"en",version:2}},map:{click:"https://www.asti.cgiar.org/{NAME}?country={ISO3}&lang={LANG}"}}};let f;return xe(async()=>{await ce("/common/mw.js"),await ce("/common/tinycolor.js"),_e(document).ready(function(e){var m=s.config.iso3,N=s.config.lang,z=document.getElementById("bm-root").getAttribute("data-region-code"),u,g,k,S="value0",B=-1,Q=1,ve=s.config.benchmarking&&s.config.benchmarking["dmp-override"]?s.config.benchmarking["dmp-override"]:{geoitems:{},indicators:{}},n=new mw.DataManager({data:ve});function pe(t,a){return a.replace("{ISO3}",t).replace("{LANG}",N).replace("{NAME}",n.geoitems[t].url)}function ue(t){return t.indexOf("?")==-1,e.ajax({url:s.config.benchmark_meta,data:{}})}function ae(t,a,i){var v=a&&a.api?a.api:"public",l=mw.support.extend(s.config.api[v],{}),C=l.url;return delete l.url,a&&delete a.api,t=="/indicators/data"&&(navigator.userAgent.match(/Trident/g)||navigator.userAgent.match(/MSIE/g))&&(i="POST"),e.ajax({url:C+t,type:i||"GET",data:mw.support.extend(a||{},l),dataType:"json",error(d,b,T){console.log("ERROR "+C+t,b,T)}})}function me(t){var a=n.geoitems[t];if(!a||a.type=="map-inactive")return"#ededed";if(a.type=="region-inactive"||!k||!k.current||k.current[t]==null)return"#d8d8d8";var i=k.current,v=k.min,l=k.max,C=(i[t]-v)/(l-v)-.5;return C>0?tinycolor(k.color).darken(20*C).toString():tinycolor(k.color).lighten(-40*C).toString()}function ge(t){var a=n.geoitems[t.geoitem];if(a&&a.type!="map-inactive"){var i='<div class="label">{GEOITEM}</div>';return k&&k.current[t.geoitem]!=null&&(i+='<div class="value">'+mw.support.format(k.format,k.current[t.geoitem])+"</div>"),i}else return!1}function te(t){e("#bm-root").attr("data-country-code",t);var a=n.geoitems[t]||{};if(e(".bm-current-country").html(a.label||n.meta["select-country"]).toggleClass("default",!a.label),e("#l2-1").toggle(a.hasOwnProperty("label")).html(a.label),!a.hasOwnProperty("label")&&e("#l2-1").prev().prop("checked")&&e("#l2-1").next().prop("checked",!0),e(".rank-indicator").removeClass("selected"),e('.rank-indicator[code="'+t+'"]').addClass("selected"),e("#country-page").toggleClass("hidden",a.url==null||a.url==""),a.url!=null&&a.url!=""){var i='<a href="'+pe(t,s.config.map.click)+'">'+a.label+"</a>";e("#country-page .bm-subheader").html(i),e("#country-page .bm-country-page-note").html(n.meta["country-page-note"].replace("{CPURL}",i))}he(t),ie(t)}function D(t,a){var i=n.indicators[t];if(e(".bm-current-indicator").html(i.grouplabel+" / "+i.label),e(".bm-indicator-title").html(i.label),e(".bm-indicator-description").html(i.description),!a){e(".group-indicator").removeClass("selected"),e('.group-indicator[code="'+t+'"]').addClass("selected"),e("#l1-1").html(i.label);for(var v="",l=0;l<i.siblings.length;l++)n.indicators[i.siblings[l]],v+='<input id="s123-'+l+'" type="radio" name="sort" value="value'+l+'"',S=="value"+l&&(v+=" checked"),v+='/><label for="s123-'+l+'">'+i.sort[l]+"</label>";e("#sort-numerics").html(v)}e("#ranking-container").attr("data-group",i.group),re(t,a),ie(m),k=i,f.color()}function ie(t){var a=n.geoitems[t];e("#country-note").toggleClass("hidden",!a||!a.note),a&&a.note&&e(".bm-country-note").html(a.note)}function re(t,a){var i=n.indicators[t],v=[];for(var l in n.geoitems){var C=n.geoitems[l];if(C.url){for(var d={label:n.geoitems[l].label,code:l},b=0;b<i.siblings.length;b++)d["value"+b]=n.indicators[i.siblings[b]].current[l];v.push(d)}}if(a){for(var p=e("#ranking").children(),T=[],_=0,F=p.length;_<F;_++)T.push(p[_].getAttribute("code"));v.sort(function(j,W){return T.indexOf(j.code)<T.indexOf(W.code)?-1:1})}else v.sort(function(V,j){return V[S]<j[S]||V[S]===void 0?-B:B});var p=e("#ranking").children();i.siblings.length==1&&i.min;for(var _=0,F=p.length;_<F;_++){var E=p[_],d=v[_],H=i.siblings.length==1?i.max:100;E.setAttribute("code",d.code),E.childNodes[0].innerHTML=d.label,d.value0==null?E.childNodes[2].innerHTML="":E.childNodes[2].innerHTML=mw.support.format(i.format,d.value0);for(var b=0;b<Q;b++){var h=E.childNodes[1].childNodes[b],y=d["value"+b];if(y==null)h.style.width=0,h.style.left=0,h.classList.remove("cropped");else{var P=Math.ceil(Math.abs(y)/H*125);h.style.width=P+"px",h.style.left=(y<0?-P:0)+"px",h.classList.toggle("cropped",Math.abs(y)>H)}}}S!="label"&&(e(".rank-indicator").removeClass("selected"),e('.rank-indicator[code="'+m+'"]').addClass("selected"))}function he(t){e(".group-indicator").each(function(){var a=n.indicators[this.getAttribute("code")],i=a.current[t],v=a.max/205;if(i==null)this.childNodes[1].style.width=0,this.childNodes[1].style.left=0,this.childNodes[2].innerHTML="";else{var l=Math.ceil(Math.abs(i)/v);this.childNodes[1].style.width=l+"px",this.childNodes[1].style.left=(i<0?-l:0)+"px",this.childNodes[2].innerHTML=mw.support.format(a.format,i)}})}function fe(t){S==e(this).val()?B*=-1:(S=e(this).val(),B=S=="label"?1:-1),re(g,!1)}var ne="./benchmarking?region=";s.config.benchmarking&&s.config.benchmarking["labels-url"]&&(ne=s.config.benchmarking["labels-url"]),n.listen("ready",function(){console.log(s.config.path);const t=window.location.hostname+"";console.log("MW location",ne+z),e.when(e.ajax("https://"+t+"/benchmarking/"+z+".json"),ae("/countries/list"),ue("benchmarking.html")).done(function(a,i,v){var l=a[0],C=i[0],d=n.meta=v[0][0];e(".drupal").each(function(){var o=d[e(this).attr("data-key")];e(this).html(o||(this.hasAttribute("data-empty")?"":"{"+e(this).attr("data-key")+"}"))});var b=[],T=[];console.log("m1 color"+_);for(var _=e('<div id="map1-color"/>').appendTo("body").css("color"),F=e('<div id="map2-color"/>').appendTo("body").css("color"),p=1;p<=2;p++){var E=e("#g"+p),H=d["g"+p+"-codes"];H&&H.length?e("#indic-selector").append('<div class="bm-selector-header">'+d["g"+p+"-caption"]+"</div>"):e('[data-key="g'+p+'-caption"]').hide();for(var h in H){var y=H[h].split(","),P=d["g"+p+"-labels"][h];y.length>Q&&(Q=y.length);for(var V in y){var j=y[V],W=n.indicators[j]||{code:j,label:P,values:{}};n.indicators[j]=mw.support.extend({group:p,color:p=="1"?_:F,format:d["g"+p+"-formats"][h],description:d["g"+p+"-info"][h],grouplabel:d["g"+p+"-caption"],sort:d["g"+p+"-sort"][h]?d["g"+p+"-sort"][h].split(","):[],min:1/0,max:-1/0,siblings:y,current:{}},W),b.push(j)}var A=e("<div/>",{class:"group-indicator",code:y[0],"data-indicator":y.join(",")}).on("click",function(){e("#s123-0:not(:checked)").click(),g=e(this).attr("code"),D(g,!1)}).on("mouseenter",function(){D(e(this).attr("code"),!0)}).on("mouseleave",function(){D(g,!0)});A.append('<div class="group-label">'+P+"</div>"),A.append('<div class="group-bar" style="width: 0"></div>'),A.append('<div class="group-value"></div>'),E.append(A),e("#indic-selector").append('<div code="'+y[0]+'">'+P+"</div>"),g||(g=y[0])}}var J=new Array(Q+1);J=J.join("<div></div>");for(var X=v[0][1]["chart-countries"],be=v[0][2]["region-inactive"],ye=v[0][3]["map-inactive"],h=0,ke=C.data.length;h<ke;h++){var I=C.data[h],x=I.iso3||I.ISO3;l.items[x]&&(I.label=I.name,n.geoitems[x]=I)}var oe=s.config.path+"/excelexport/?content=notes&lang="+N+"&countries=";for(var x in X)oe+=x+",";e("#download-notes").attr("href",oe);for(var x in n.geoitems){var I=n.geoitems[x];if(T.push(x),ye.indexOf(x)!=-1)I.type="map-inactive";else if(be.indexOf(x)!=-1)I.type="region-inactive";else if(X[x]){I.url=X[x];var A=e("<div/>",{class:"rank-indicator"}).on("click",function(){m=e(this).attr("code"),f.highlight(m)}).on("mouseenter",function(){f.highlight(e(this).attr("code"))}).on("mouseleave",function(){f.highlight(m)});A.append('<div class="rank-label"></div>'),A.append('<div class="rank-bar">'+J+"</div>"),A.append('<div class="rank-value"></div>'),e("#ranking").append(A),e("#geo-selector").append('<div code="'+x+'">'+I.label+"</div>")}}e("#ranking-container").height(Math.max(e("#groups").height(),e(".bm-map").height())),navigator.userAgent.indexOf("MSIE 9.0")!=-1&&e("#ranking").height(e("#groups").height()-78),f=new mw.Map("map",{map:{url:l,padding:10},data:n,layers:[new mw.map.layers.Highlight({template:ge})],zoom:!1,events:{touch:"click hover",click:!0},color:me}),f.listen("hover",function(o){if(o){var r=n.geoitems[o.geoitem];te(r&&r.type!="map-inactive"?o.geoitem:m)}else te(m)}),f.listen("click",function(o){var r=n.geoitems[o.geoitem];r&&!r.type&&(m=o.geoitem,f.highlight(o.geoitem))}),e("body").on("click",'input[name="sort"]',fe),e(".bm-selector").on("mouseenter",function(){e(this).addClass("opened")}),e(".bm-selector").on("mouseleave",function(){e(this).removeClass("opened")}),e("#geo-selector").on("click","div[code]",function(o){m=e(o.target).attr("code"),f.highlight(m),e(this).closest(".bm-selector").removeClass("opened")}),e("#indic-selector").on("click","div[code]",function(o){e("#s123-0:not(:checked)").click(),g=e(o.target).attr("code"),D(g,!1),e(this).closest(".bm-selector").removeClass("opened")}),e("#data-download").on("click",function(){var o="",r="";if(e("#l2-1").prev().prop("checked"))o+="&countries[]="+m;else for(var M in n.geoitems)n.geoitems[M].url&&(o+="&countries[]="+M);if(e("#l1-1").prev().prop("checked"))r+="&indicators[]="+g;else for(var M in n.indicators)r+="&indicators[]="+M;var w=s.config.path+"/excelexport/?years=latest"+o+r;window.open(w,"_blank")}),u=e("<div/>",{class:"chart-tooltip"}).css("position","absolute").appendTo("body"),e("#ranking").on("mouseenter",".rank-bar div",function(o){if(o.target.previousSibling){for(var r=n.indicators[g],M=r.siblings,w=o.target.parentNode.parentNode.getAttribute("code"),L=0,R=o.target;R=R.previousSibling;L++);if(L<r.siblings.length){var c=n.indicators[M[L]];u.html(r.sort[L]+": "+mw.support.format(r.format,c.current[w]));var O=e(o.target).offset();u.css({left:O.left+.5*e(o.target).width(),top:O.top}).show()}}}),e("#ranking").on("mouseleave",".rank-bar div",function(o){u.hide()}),ae("/indicators/data",{indicators:b,countries:T}).done(function(o){var r=n.indicators,M=o.data.series;for(var w in M){var L=M[w].iso3||M[w].ISO3,R=M[w].results;for(var o in R){var c=R[o].indicator,O=R[o].data;r[c]&&(r[c].values[L]=O)}n.geoitems[L].note=M[w].note}for(var c in r)if(r[c].current){for(var L in r[c].values){var O=r[c].values[L],le=-1/0;for(var K in O)O[K]=parseFloat(O[K]),K>le&&(le=K,r[c].current[L]=O[K])}for(var w in r[c].current)r[c].current[w]>r[c].max&&(r[c].max=r[c].current[w]),r[c].current[w]<r[c].min&&(r[c].min=r[c].current[w])}for(var c in r)d["indicator-limits"]&&d["indicator-limits"][c]&&(r[c].max=+d["indicator-limits"][c]);f.highlight(m),D(g,!1)})})})})}),[]}class je extends Me{constructor(s){super(),Ne(this,s,Le,Ie,we,{})}}export{je as component};
