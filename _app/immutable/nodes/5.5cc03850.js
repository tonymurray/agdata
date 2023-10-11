import{s as we,n as Y,o as xe}from"../chunks/scheduler.e108d1fd.js";import{S as Me,i as Ne,g as Z,s as se,h as $,c as de,x as ze,k as H,a as U,f as q}from"../chunks/index.5ae4157e.js";import{j as Ce}from"../chunks/jquery.5af47638.js";import{l as ce}from"../chunks/loadscript.5be5f31a.js";function _e(ee){let s,h,e,m,N,R='<div id="bm-root" class="bm-wrapper" data-region-code="ssa-a"><div class="bm-header"><div class="bm-selector"><div class="bm-current-indicator default drupal" data-key="select-country"></div> <div id="indic-selector" class="bm-selector-list"></div></div> <div class="bm-selector"><div class="bm-current-country"> </div> <div id="geo-selector" class="bm-selector-list"></div></div></div> <div class="bm-content svelte-114yz4p"><div id="ranking-container" class="svelte-114yz4p"><div id="ranking-title" class="bm-group-header drupal" data-key="ranking"></div> <div class="bm-sort-container"><div class="drupal" data-key="sort-by"></div> <input id="a-z" type="radio" name="sort" value="label"/><label for="a-z" class="drupal" data-key="a-z"></label> <div id="sort-numerics"></div></div> <div id="ranking" class="bm-ranking svelte-114yz4p"></div></div> <div class="bm-map svelte-114yz4p"><div id="map" class="svelte-114yz4p"></div></div> <div id="groups" class="bm-indicators svelte-114yz4p"><div class="bm-group"><div class="bm-group-header drupal svelte-114yz4p" data-key="g1-caption"></div> <div id="g1" class="bm-group-indicators"></div></div> <div class="bm-group"><div class="bm-group-header drupal svelte-114yz4p" data-key="g2-caption"></div> <div id="g2" class="bm-group-indicators"></div></div> <div class="drupal groups-description" data-empty="" data-key="groups-description"></div></div></div> <div class="bm-content svelte-114yz4p"><div class="bm-indicator-info svelte-114yz4p"><div class="bm-header drupal" data-key="indicator-info"></div> <div class="bm-indicator-title bm-subheader"></div> <div class="bm-indicator-description"></div> <div class="bm-disclaimer drupal disclaimer-note" data-key="disclaimer"></div></div> <div class="bm-data-download svelte-114yz4p"><div class="bm-header drupal" data-key="data"></div> <div class="data-download"><div class="bm-download-group"><input type="radio" id="d1-1" name="d1" checked=""/><label for="d1-1" id="l1-1"></label> <input type="radio" id="d1-2" name="d1"/><label class="drupal" data-key="all-indicators" for="d1-2"></label></div> <div class="bm-download-group"><input type="radio" id="d2-1" name="d2"/><label for="d2-1" id="l2-1"></label> <input type="radio" id="d2-2" name="d2" checked=""/><label class="drupal" data-key="all-countries" for="d2-2"></label></div> <div class="bt-download-buttons"><button id="data-download" class="bm-download-button drupal" data-key="download-excel"></button> <p class="bt-full-download drupal" data-key="download-tool"></p> <p class="bt-full-download"><a class="drupal" id="download-notes" data-key="download-notes"></a></p></div></div></div> <div class="bm-country-info svelte-114yz4p"><div id="country-page"><div class="bm-header drupal" data-key="country-page"></div> <div class="bm-country-page bm-subheader"></div> <div class="bm-country-page-note drupal" data-key="country-page-note"></div></div> <div id="country-note"><div class="bm-header drupal" data-key="country-note"></div> <div class="bm-country-note"></div></div></div></div></div>';return{c(){s=Z("link"),h=se(),e=Z("link"),m=se(),N=Z("div"),N.innerHTML=R,this.h()},l(u){s=$(u,"LINK",{rel:!0,type:!0,href:!0}),h=de(u),e=$(u,"LINK",{rel:!0,type:!0,href:!0}),m=de(u),N=$(u,"DIV",{class:!0,"data-svelte-h":!0}),ze(N)!=="svelte-1ris7yj"&&(N.innerHTML=R),this.h()},h(){H(s,"rel","stylesheet"),H(s,"type","text/css"),H(s,"href","/benchmarking/benchmarktool.css"),H(e,"rel","stylesheet"),H(e,"type","text/css"),H(e,"href","/benchmarking/benchmarktool2.css"),H(N,"class","wrapper svelte-114yz4p")},m(u,g){U(u,s,g),U(u,h,g),U(u,e,g),U(u,m,g),U(u,N,g)},p:Y,i:Y,o:Y,d(u){u&&(q(s),q(h),q(e),q(m),q(N))}}}function Ie(ee){const s={config:{iso3:"",lang:"en",root:"/",site:"/benchmarking/",file:"/",json:"/benchmarking/",benchmark_meta:"https://dataportal.asti.cgiar.org/json/benchmarking?region=ssa-a&lang=en",tool:"",path:"",api:{public:{token:"public",url:"https://dataportal.asti.cgiar.org/api/public",language:"en",version:2}},map:{click:"https://www.asti.cgiar.org/{NAME}?country={ISO3}&lang={LANG}"}}};let h;return xe(async()=>{await ce("/common/mw.js"),await ce("/common/tinycolor.js"),Ce(document).ready(function(e){var m=s.config.iso3,N=s.config.lang,R=document.getElementById("bm-root").getAttribute("data-region-code"),u,g,k,O="value0",B=-1,Q=1,ve=s.config.benchmarking&&s.config.benchmarking["dmp-override"]?s.config.benchmarking["dmp-override"]:{geoitems:{},indicators:{}},n=new mw.DataManager({data:ve});function pe(t,a){return a.replace("{ISO3}",t).replace("{LANG}",N).replace("{NAME}",n.geoitems[t].url)}function ue(t){return t.indexOf("?")==-1,e.ajax({url:s.config.benchmark_meta,data:{}})}function ae(t,a,i){var v=a&&a.api?a.api:"public",l=mw.support.extend(s.config.api[v],{}),z=l.url;return delete l.url,a&&delete a.api,t=="/indicators/data"&&(navigator.userAgent.match(/Trident/g)||navigator.userAgent.match(/MSIE/g))&&(i="POST"),e.ajax({url:z+t,type:i||"GET",data:mw.support.extend(a||{},l),dataType:"json",error(d,b,S){console.log("ERROR "+z+t,b,S)}})}function me(t){var a=n.geoitems[t];if(!a||a.type=="map-inactive")return"#ededed";if(a.type=="region-inactive"||!k||!k.current||k.current[t]==null)return"#d8d8d8";var i=k.current,v=k.min,l=k.max,z=(i[t]-v)/(l-v)-.5;return z>0?tinycolor(k.color).darken(20*z).toString():tinycolor(k.color).lighten(-40*z).toString()}function ge(t){var a=n.geoitems[t.geoitem];if(a&&a.type!="map-inactive"){var i='<div class="label">{GEOITEM}</div>';return k&&k.current[t.geoitem]!=null&&(i+='<div class="value">'+mw.support.format(k.format,k.current[t.geoitem])+"</div>"),i}else return!1}function te(t){e("#bm-root").attr("data-country-code",t);var a=n.geoitems[t]||{};if(e(".bm-current-country").html(a.label||n.meta["select-country"]).toggleClass("default",!a.label),e("#l2-1").toggle(a.hasOwnProperty("label")).html(a.label),!a.hasOwnProperty("label")&&e("#l2-1").prev().prop("checked")&&e("#l2-1").next().prop("checked",!0),e(".rank-indicator").removeClass("selected"),e('.rank-indicator[code="'+t+'"]').addClass("selected"),e("#country-page").toggleClass("hidden",a.url==null||a.url==""),a.url!=null&&a.url!=""){var i='<a href="'+pe(t,s.config.map.click)+'">'+a.label+"</a>";e("#country-page .bm-subheader").html(i),e("#country-page .bm-country-page-note").html(n.meta["country-page-note"].replace("{CPURL}",i))}fe(t),ie(t)}function D(t,a){var i=n.indicators[t];if(e(".bm-current-indicator").html(i.grouplabel+" / "+i.label),e(".bm-indicator-title").html(i.label),e(".bm-indicator-description").html(i.description),!a){e(".group-indicator").removeClass("selected"),e('.group-indicator[code="'+t+'"]').addClass("selected"),e("#l1-1").html(i.label);for(var v="",l=0;l<i.siblings.length;l++)n.indicators[i.siblings[l]],v+='<input id="s123-'+l+'" type="radio" name="sort" value="value'+l+'"',O=="value"+l&&(v+=" checked"),v+='/><label for="s123-'+l+'">'+i.sort[l]+"</label>";e("#sort-numerics").html(v)}e("#ranking-container").attr("data-group",i.group),re(t,a),ie(m),k=i,h.color()}function ie(t){var a=n.geoitems[t];e("#country-note").toggleClass("hidden",!a||!a.note),a&&a.note&&e(".bm-country-note").html(a.note)}function re(t,a){var i=n.indicators[t],v=[];for(var l in n.geoitems){var z=n.geoitems[l];if(z.url){for(var d={label:n.geoitems[l].label,code:l},b=0;b<i.siblings.length;b++)d["value"+b]=n.indicators[i.siblings[b]].current[l];v.push(d)}}if(a){for(var p=e("#ranking").children(),S=[],C=0,F=p.length;C<F;C++)S.push(p[C].getAttribute("code"));v.sort(function(T,W){return S.indexOf(T.code)<S.indexOf(W.code)?-1:1})}else v.sort(function(V,T){return V[O]<T[O]||V[O]===void 0?-B:B});var p=e("#ranking").children();i.siblings.length==1&&i.min;for(var C=0,F=p.length;C<F;C++){var j=p[C],d=v[C],E=i.siblings.length==1?i.max:100;j.setAttribute("code",d.code),j.childNodes[0].innerHTML=d.label,d.value0==null?j.childNodes[2].innerHTML="":j.childNodes[2].innerHTML=mw.support.format(i.format,d.value0);for(var b=0;b<Q;b++){var f=j.childNodes[1].childNodes[b],y=d["value"+b];if(y==null)f.style.width=0,f.style.left=0,f.classList.remove("cropped");else{var G=Math.ceil(Math.abs(y)/E*125);f.style.width=G+"px",f.style.left=(y<0?-G:0)+"px",f.classList.toggle("cropped",Math.abs(y)>E)}}}O!="label"&&(e(".rank-indicator").removeClass("selected"),e('.rank-indicator[code="'+m+'"]').addClass("selected"))}function fe(t){e(".group-indicator").each(function(){var a=n.indicators[this.getAttribute("code")],i=a.current[t],v=a.max/205;if(i==null)this.childNodes[1].style.width=0,this.childNodes[1].style.left=0,this.childNodes[2].innerHTML="";else{var l=Math.ceil(Math.abs(i)/v);this.childNodes[1].style.width=l+"px",this.childNodes[1].style.left=(i<0?-l:0)+"px",this.childNodes[2].innerHTML=mw.support.format(a.format,i)}})}function he(t){O==e(this).val()?B*=-1:(O=e(this).val(),B=O=="label"?1:-1),re(g,!1)}var ne="./benchmarking?region=";s.config.benchmarking&&s.config.benchmarking["labels-url"]&&(ne=s.config.benchmarking["labels-url"]),n.listen("ready",function(){console.log(s.config.path);const t=window.location.hostname+"";console.log("MW location",ne+R),e.when(e.ajax("https://"+t+"/benchmarking/"+R+".json"),ae("/countries/list"),ue("benchmarking.html")).done(function(a,i,v){var l=a[0],z=i[0],d=n.meta=v[0][0];e(".drupal").each(function(){var o=d[e(this).attr("data-key")];e(this).html(o||(this.hasAttribute("data-empty")?"":"{"+e(this).attr("data-key")+"}"))});var b=[],S=[];console.log("m1 color"+C);for(var C=e('<div id="map1-color"/>').appendTo("body").css("color"),F=e('<div id="map2-color"/>').appendTo("body").css("color"),p=1;p<=2;p++){var j=e("#g"+p),E=d["g"+p+"-codes"];E&&E.length?e("#indic-selector").append('<div class="bm-selector-header">'+d["g"+p+"-caption"]+"</div>"):e('[data-key="g'+p+'-caption"]').hide();for(var f in E){var y=E[f].split(","),G=d["g"+p+"-labels"][f];y.length>Q&&(Q=y.length);for(var V in y){var T=y[V],W=n.indicators[T]||{code:T,label:G,values:{}};n.indicators[T]=mw.support.extend({group:p,color:p=="1"?C:F,format:d["g"+p+"-formats"][f],description:d["g"+p+"-info"][f],grouplabel:d["g"+p+"-caption"],sort:d["g"+p+"-sort"][f]?d["g"+p+"-sort"][f].split(","):[],min:1/0,max:-1/0,siblings:y,current:{}},W),b.push(T)}var L=e("<div/>",{class:"group-indicator",code:y[0],"data-indicator":y.join(",")}).on("click",function(){e("#s123-0:not(:checked)").click(),g=e(this).attr("code"),D(g,!1)}).on("mouseenter",function(){D(e(this).attr("code"),!0)}).on("mouseleave",function(){D(g,!0)});L.append('<div class="group-label">'+G+"</div>"),L.append('<div class="group-bar" style="width: 0"></div>'),L.append('<div class="group-value"></div>'),j.append(L),e("#indic-selector").append('<div code="'+y[0]+'">'+G+"</div>"),g||(g=y[0])}}var J=new Array(Q+1);J=J.join("<div></div>");for(var X=v[0][1]["chart-countries"],be=v[0][2]["region-inactive"],ye=v[0][3]["map-inactive"],f=0,ke=z.data.length;f<ke;f++){var _=z.data[f],x=_.iso3||_.ISO3;l.items[x]&&(_.label=_.name,n.geoitems[x]=_)}var oe=s.config.path+"/excelexport/?content=notes&lang="+N+"&countries=";for(var x in X)oe+=x+",";e("#download-notes").attr("href",oe);for(var x in n.geoitems){var _=n.geoitems[x];if(S.push(x),ye.indexOf(x)!=-1)_.type="map-inactive";else if(be.indexOf(x)!=-1)_.type="region-inactive";else if(X[x]){_.url=X[x];var L=e("<div/>",{class:"rank-indicator"}).on("click",function(){m=e(this).attr("code"),h.highlight(m)}).on("mouseenter",function(){h.highlight(e(this).attr("code"))}).on("mouseleave",function(){h.highlight(m)});L.append('<div class="rank-label"></div>'),L.append('<div class="rank-bar">'+J+"</div>"),L.append('<div class="rank-value"></div>'),e("#ranking").append(L),e("#geo-selector").append('<div code="'+x+'">'+_.label+"</div>")}}e("#ranking-container").height(Math.max(e("#groups").height(),e(".bm-map").height())),navigator.userAgent.indexOf("MSIE 9.0")!=-1&&e("#ranking").height(e("#groups").height()-78),h=new mw.Map("map",{map:{url:l,padding:10},data:n,layers:[new mw.map.layers.Highlight({template:ge})],zoom:!1,events:{touch:"click hover",click:!0},color:me}),h.listen("hover",function(o){if(o){var r=n.geoitems[o.geoitem];te(r&&r.type!="map-inactive"?o.geoitem:m)}else te(m)}),h.listen("click",function(o){var r=n.geoitems[o.geoitem];r&&!r.type&&(m=o.geoitem,h.highlight(o.geoitem))}),e("body").on("click",'input[name="sort"]',he),e(".bm-selector").on("mouseenter",function(){e(this).addClass("opened")}),e(".bm-selector").on("mouseleave",function(){e(this).removeClass("opened")}),e("#geo-selector").on("click","div[code]",function(o){m=e(o.target).attr("code"),h.highlight(m),e(this).closest(".bm-selector").removeClass("opened")}),e("#indic-selector").on("click","div[code]",function(o){e("#s123-0:not(:checked)").click(),g=e(o.target).attr("code"),D(g,!1),e(this).closest(".bm-selector").removeClass("opened")}),e("#data-download").on("click",function(){var o="",r="";if(e("#l2-1").prev().prop("checked"))o+="&countries[]="+m;else for(var M in n.geoitems)n.geoitems[M].url&&(o+="&countries[]="+M);if(e("#l1-1").prev().prop("checked"))r+="&indicators[]="+g;else for(var M in n.indicators)r+="&indicators[]="+M;var w=s.config.path+"/excelexport/?years=latest"+o+r;window.open(w,"_blank")}),u=e("<div/>",{class:"chart-tooltip"}).css("position","absolute").appendTo("body"),e("#ranking").on("mouseenter",".rank-bar div",function(o){if(o.target.previousSibling){for(var r=n.indicators[g],M=r.siblings,w=o.target.parentNode.parentNode.getAttribute("code"),I=0,P=o.target;P=P.previousSibling;I++);if(I<r.siblings.length){var c=n.indicators[M[I]];u.html(r.sort[I]+": "+mw.support.format(r.format,c.current[w]));var A=e(o.target).offset();u.css({left:A.left+.5*e(o.target).width(),top:A.top}).show()}}}),e("#ranking").on("mouseleave",".rank-bar div",function(o){u.hide()}),ae("/indicators/data",{indicators:b,countries:S}).done(function(o){var r=n.indicators,M=o.data.series;for(var w in M){var I=M[w].iso3||M[w].ISO3,P=M[w].results;for(var o in P){var c=P[o].indicator,A=P[o].data;r[c]&&(r[c].values[I]=A)}n.geoitems[I].note=M[w].note}for(var c in r)if(r[c].current){for(var I in r[c].values){var A=r[c].values[I],le=-1/0;for(var K in A)A[K]=parseFloat(A[K]),K>le&&(le=K,r[c].current[I]=A[K])}for(var w in r[c].current)r[c].current[w]>r[c].max&&(r[c].max=r[c].current[w]),r[c].current[w]<r[c].min&&(r[c].min=r[c].current[w])}for(var c in r)d["indicator-limits"]&&d["indicator-limits"][c]&&(r[c].max=+d["indicator-limits"][c]);h.highlight(m),D(g,!1)})})})})}),[]}class Te extends Me{constructor(s){super(),Ne(this,s,Ie,_e,we,{})}}export{Te as component};
