import{s as xa,n as Ea,o as Ta}from"../chunks/scheduler.e108d1fd.js";import{S as La,i as _a,g as R,s as O,m as Aa,h as k,c as j,j as V,f as _,n as Ha,x as ca,k as l,a as va,y as v,o as Ma}from"../chunks/index.5ae4157e.js";import{j as Oa}from"../chunks/jquery.5af47638.js";import{l as ia}from"../chunks/loadscript.5be5f31a.js";function ja(na){let B,Q,c,F,I,q,y,Y,a,w,W,P,J,h,X='<label class="drupal" data-key="filter-by"></label> <label for="agencytype" class="drupal" data-key="agency-type"></label> <select id="agencytype" class="ap-dropdown"></select> <label for="country" class="drupal" data-key="country"></label> <select id="iso3" class="ap-dropdown"></select> <label for="researchfocus" class="drupal" data-key="research-focus"></label> <select id="researchfocus" class="ap-dropdown"></select> <button id="clear-filters" class="drupal clear-filters" data-key="clear-filters"></button>',G,g,m='<div id="ap-map" class="ap-map svelte-19cbur6"></div> <div id="tooltip" class="map-hidden-tooltip map-tooltip"><div class="map-tooltip-anchor"></div><div class="map-tooltip-tip"></div> <div data-role="acronym"></div> <div data-role="name"></div> <div data-role="parent"></div></div> <div id="spinner" class="ap-spinner"><div class="bounce1"></div> <div class="bounce2"></div> <div class="bounce3"></div></div>',Z,N,K,A,S,C,$,H,M='<label class="drupal" data-key="sort-by"></label> <button class="drupal" data-sort-key="name" data-key="agency-name"></button>',D,x,aa='<div id="ap-container" class="ap-boxes"><div class="ap-column"></div> <div class="ap-column"></div> <div class="ap-column"></div> <div class="ap-box"><div class="ap-btn-toggle-wrap"><div class="ap-btn-plus ap-btn-toggle"></div> <div class="ap-btn-minus ap-btn-toggle"></div></div> <div class="ap-box-header ap-border-bottom"><span data-property="country"></span> <span data-property="acronym" class="ap-box-agency-country"></span> <div class="ap-box-names"><h3 data-property="name" data-class="agencytype" class="ap-box-agency-name"></h3> <h4 data-property="parent_organization" class="ap-box-supervising-name"></h4></div></div> <div class="ap-box-content"><div class="ap-box-address ap-border-bottom"><div><span data-optional="" data-property="state"></span></div> <div><span class="drupal" data-key="first-year"></span><span data-property="firstresearchyear"></span></div></div> <div class="ap-box-data ap-border-bottom"><div data-indicator="RES.FTE,RES.PHD.SHRE,RES.FEMALE.SHRE,RES.OVER50.SHRE" class="ap-data-row"><div class="ap-data-label"><strong data-indicator-property="value"></strong> <span data-indicator-property="label"></span> <span data-indicator-property="year"></span></div> <div class="ap-data-bar"><div data-indicator-property="bar"></div></div></div></div> <div class="ap-commodity-header"><span class="drupal" data-key="commodity-focus"></span> <span data-indicator-property="focus-year"></span></div> <div class="ap-commodity-data"><div data-indicator="RES.COM.TOTCRP.SHRE,RES.COM.FISH.SHRE,RES.COM.FORESTRY.SHRE,RES.COM.LIVEST.SHRE,RES.COM.NATRES.SHRE,RES.COM.SOCIOECON.SHRE,RES.COM.MISC.SHRE" class="ap-commodity"><span title="" data-indicator-property="value"></span></div></div> <div class="ap-buttons"><button id="viewAgency" class="drupal" data-key="view-agency"></button></div></div></div></div> <div class="ap-buttons"><button id="show-more" class="drupal" data-key="show-more"></button></div>';return{c(){B=R("link"),Q=O(),c=R("div"),F=R("div"),I=R("h1"),q=O(),y=R("h1"),Y=Aa(na[0]),a=O(),w=R("div"),W=O(),P=R("select"),J=O(),h=R("div"),h.innerHTML=X,G=O(),g=R("div"),g.innerHTML=m,Z=O(),N=R("button"),K=O(),A=R("button"),S=O(),C=R("div"),$=O(),H=R("div"),H.innerHTML=M,D=O(),x=R("div"),x.innerHTML=aa,this.h()},l(b){B=k(b,"LINK",{rel:!0,type:!0,href:!0}),Q=j(b),c=k(b,"DIV",{id:!0,class:!0,"data-role":!0,"data-country":!0,"data-tile-limit":!0});var u=V(c);F=k(u,"DIV",{class:!0});var d=V(F);I=k(d,"H1",{id:!0,class:!0,"data-key":!0}),V(I).forEach(_),q=j(d),y=k(d,"H1",{id:!0,class:!0});var oa=V(y);Y=Ha(oa,na[0]),oa.forEach(_),d.forEach(_),a=j(u),w=k(u,"DIV",{class:!0,"data-role":!0,"data-key":!0}),V(w).forEach(_),W=j(u),P=k(u,"SELECT",{id:!0,class:!0,"data-role":!0}),V(P).forEach(_),J=j(u),h=k(u,"DIV",{class:!0,"data-role":!0,"data-svelte-h":!0}),ca(h)!=="svelte-14tm6fr"&&(h.innerHTML=X),G=j(u),g=k(u,"DIV",{class:!0,"data-svelte-h":!0}),ca(g)!=="svelte-15e05j8"&&(g.innerHTML=m),Z=j(u),N=k(u,"BUTTON",{class:!0,"data-key":!0,"data-role":!0}),V(N).forEach(_),K=j(u),A=k(u,"BUTTON",{class:!0,"data-key":!0,"data-role":!0}),V(A).forEach(_),S=j(u),C=k(u,"DIV",{id:!0,class:!0,"data-key":!0,"data-role":!0}),V(C).forEach(_),$=j(u),H=k(u,"DIV",{class:!0,"data-role":!0,"data-svelte-h":!0}),ca(H)!=="svelte-wcicpd"&&(H.innerHTML=M),D=j(u),x=k(u,"DIV",{class:!0,"data-role":!0,"data-svelte-h":!0}),ca(x)!=="svelte-1wfyoqn"&&(x.innerHTML=aa),u.forEach(_),this.h()},h(){l(B,"rel","stylesheet"),l(B,"type","text/css"),l(B,"href","/agencies/agencypool.css"),l(I,"id","agencyHeader"),l(I,"class","drupal initial1 svelte-19cbur6"),l(I,"data-key","title"),l(y,"id","agencyHeaderCountry"),l(y,"class","agencyHeader svelte-19cbur6"),l(F,"class","headerHeadings svelte-19cbur6"),l(w,"class","drupal initial1"),l(w,"data-role","landing"),l(w,"data-key","subtitle"),l(P,"id","country-selector"),l(P,"class","ap-country-selector"),l(P,"data-role","landing"),l(h,"class","ap-filters svelte-19cbur6"),l(h,"data-role","details"),l(g,"class","ap-map-container"),l(N,"class","ap-view-button drupal"),l(N,"data-key","list-view"),l(N,"data-role","details"),l(A,"class","active ap-view-button drupal"),l(A,"data-key","tile-view"),l(A,"data-role","details"),l(C,"id","ap-count"),l(C,"class","ap-agencies-count drupal"),l(C,"data-key","loading"),l(C,"data-role","details"),l(H,"class","ap-sort"),l(H,"data-role","details"),l(x,"class","tile-view ap-content"),l(x,"data-role","details"),l(c,"id","ap-root"),l(c,"class","ap-wrapper svelte-19cbur6"),l(c,"data-role","landing"),l(c,"data-country",""),l(c,"data-tile-limit","")},m(b,u){va(b,B,u),va(b,Q,u),va(b,c,u),v(c,F),v(F,I),v(F,q),v(F,y),v(y,Y),v(c,a),v(c,w),v(c,W),v(c,P),v(c,J),v(c,h),v(c,G),v(c,g),v(c,Z),v(c,N),v(c,K),v(c,A),v(c,S),v(c,C),v(c,$),v(c,H),v(c,D),v(c,x)},p(b,[u]){u&1&&Ma(Y,b[0])},i:Ea,o:Ea,d(b){b&&(_(B),_(Q),_(c))}}}function Ba(na,B,Q){let c="";return Ta(async()=>{await ia("/common/jquery-3.6.0.min.js"),await ia("https://maps.googleapis.com/maps/api/js?key=TBD&callback=Function.prototype"),await Promise.all([ia("/agencies/jquery-ui.min.js"),ia("/agencies/jquery.xdomainrequest.min.js"),ia("/agencies/markerclusterer.js"),ia("/common/mw.js")]);const I=new URL(window.location.href).searchParams;let q=I.get("lang"),y=I.get("country");if(y=y&&y!==""?y.slice(0,3):"",q=q&&q!==""?q.slice(0,2):"en",Y===void 0)var Y=window;if(Y.asti={config:{enablemap:!0,iso3:y,lang:"en",root:"https://localhost/",site:"https://localhost/",file:"/var/www/asti.cgiar.org/htdocs/sites/all/libraries/mw/",json:"https://dataportal.asti.cgiar.org/json",astilegacy:"https://www.asti.cgiar.org/",tool:"agencies",path:"/",api:{public:{token:"public",url:"https://dataportal.asti.cgiar.org/api/public",language:"en",version:2}}}},!asti.config.enablemap){const a=document.querySelector(".ap-map");a&&a.classList.add("mapdisabled")}Oa(document).ready(function(a){var w=asti.config.lang;w!="en"&&(mw.support.THOUSSEP=".",mw.support.DECSEP=",");var W=asti.config.astilegacy+"/directory/{COUNTRY}/{PARENTABBR}/{ABBR}";w=="fr"&&(W=asti.config.astilegacy+"fr/directory/{COUNTRY}/{PARENTABBR}/{ABBR}"),w=="es"&&(W=asti.config.astilegacy+"es/directory/{COUNTRY}/{PARENTABBR}/{ABBR}");var P=20,J=50,h,X;if(asti.config.enablemap){var G=new google.maps.OverlayView;G.draw=function(){};var g=[]}var m={},Z=[],N,K={},A=P,S,C=[],$=!0,H=5,M={agencytype:{},iso3:{},researchfocus:{}},D={},x="name",aa={},b,u={path:"M0,0m-8,0a8,8 0 1,0 16,0a8,8 0 1,0 -16,0",fillColor:"#ff7f00",fillOpacity:1,strokeColor:"#fff",strokeWeight:1,scale:1},d=new mw.DataManager({data:{geoitems:{},indicators:{}}});fa(y);function oa(r,n){var s=m[r];return s.country===void 0?"https://www.asti.cgiar.org/directory":n.replace("{AID}",r).replace("{LANG}",w).replace("{COUNTRY}",s.country.toLowerCase()).replace("{PARENTABBR}",s.parent_acronym).replace("{PARENT}",s.parent_organization).replace("{ABBR}",s.official_acronym).replace("{NAME}",s.official_name)}function Ra(r){var n=r.indexOf("?")==-1?"?":"&";return a.ajax({url:asti.config.json+r+n+"lang="+w,data:{}})}function pa(r,n,s){var i=n&&n.api?n.api:"public",e=mw.support.extend(asti.config.api[i],{}),t=e.url;return delete e.url,n&&delete n.api,a.ajax({url:t+r,type:s||"GET",data:mw.support.extend(n||{},e),contentType:"application/json",dataType:"json"})}function ha(){ra(!0)}function ra(r){if(S=0,asti.config.enablemap){for(var n=h.getBounds(),s=new google.maps.LatLngBounds,i=0,e=g.length;i<e;i++){var t=g[i].id,o=m[t],p=o instanceof Object;if(p)for(var f in D){var T=D[f];if(T!=""&&T!=null&&o[f]!==T&&!o[f][T]){p=!1;break}}r&&p&&!n.contains(g[i].position)&&(p=!1),o&&m[t]&&typeof m[t]=="object"&&(m[t].visible=p),r||(g[i].setVisible(p),p&&s.extend(g[i].position)),p&&S++}asti.config.enablemap&&S&&!r&&(X.remove(),google.maps.event.addListenerOnce(h,"idle",function(){X=h.addListener("idle",ha)}),h.fitBounds(s)),b&&b.repaint()}a("#ap-count").html(mw.support.format(d.meta["agencies-found"],S)),setTimeout(function(){a("#ap-map").css("opacity",1)},0),ua()}function ua(){var r=a("[data-sort-key].selected"),n=r.attr("data-sort-key"),s=r.hasClass("down"),i=d.indicators[n];Z.sort(function(sa,z){var wa=m[sa],Ca=m[z],la,da;return i?(la=+i.current[wa.agencyid],da=+i.current[Ca.agencyid]):(la=wa[n].toLowerCase(),da=Ca[n].toLowerCase()),s?la<da?1:-1:la<da?-1:1});var e=S<J?S:Math.min(A,S),t=document.getElementById("ap-container"),o=t.offsetWidth>900?3:t.offsetWidth>600?2:1,p=["","",""];if(asti.config.enablemap)for(var f=0,T=0,E=g.length,ta=e;f<E;f++){var L=Z[f],U=m[L];if(!(!U||U.visible===!1)){var ea=K[L];if(ea.find("[data-indicator]").removeClass("selected"),n!="name"?ea.find('[data-indicator="'+n+'"]').addClass("selected"):ea.find("[data-indicator]:first").addClass("selected"),p[T++]+=ea.prop("outerHTML"),T==o&&(T=0),--ta==0)break}}x=n;for(var f=0;f<3;f++)t.children[f].innerHTML=p[f];a("#show-more").toggle(e<S)}function ka(r){var n=N.clone();return n.attr("id","a-"+r.agencyid).addClass("is-closed"),n.find("[data-class]").each(function(){var s=this.getAttribute("data-class"),i=r[s];i&&this.classList.add(i.toLowerCase().replace(/[^\w]/g,""))}),n.find("[data-property]").each(function(){var s=this.getAttribute("data-property"),i=r[s];if((!i||i=="0000")&&!this.hasAttribute("data-optional"))i='<span class="no-data">'+d.meta["no-data"]+"</span>";else if(s=="website"){var e=i;e.match(/^https?:../)||(e="http://"+e),e=e.replace("window.location.host",""),i='<a href="'+e+'" target="_blank">'+i.replace(/^https?:../,"")+"</a>"}this.innerHTML=i}),n.find("[data-indicator]").each(function(){var s,i,e=this.getAttribute("data-indicator").split(",");e.length>1&&(i=a(this).parent(),s=a(this).detach());for(var t=0;t<e.length;t++){var o=e[t],p=s?s.clone():a(this);p.hide(),s&&(p.attr("data-indicator",o),i.append(p),p.hasClass("ap-commodity")&&p.attr("title",d.meta["focus-indicators"][o]))}}),n}function ga(r){if(asti.config.enablemap){var n=new google.maps.LatLng(+r.latitude,+r.longitude),s=new google.maps.Marker({position:n,draggable:!1,id:r.agencyid,icon:u});s.addListener("mouseover",function(){var i=m[this.id];d.indicators["RES.FTE"];var e=a("#tooltip");e.find('[data-role="name"]').html(i.name||i),e.find('[data-role="acronym"]').html(i.acronym||""),e.find('[data-role="parent"]').html(i.parent_organization||"");var t=G.getProjection(),o=t.fromLatLngToContainerPixel(this.getPosition());e.css({left:o.x,top:o.y-e.height()-15}).removeClass("map-hidden-tooltip")}),s.addListener("mouseout",function(){a("#tooltip").addClass("map-hidden-tooltip")}),g.push(s)}}function ya(){b=new MarkerClusterer(h,g,{gridSize:50,maxZoom:15,styles:[{url:asti.config.path+asti.config.tool+"/css/circle24.png",height:24,width:24,anchor:[0,0],textColor:"#fff",textSize:10},{url:asti.config.path+asti.config.tool+"/css/circle30.png",height:30,width:30,anchor:[0,0],textColor:"#fff",textSize:12}]})}function ma(){for(var r in M){var n=[];for(var s in M[r])n.push({label:M[r][s],value:s});n.sort(function(p,f){return p.label<f.label?-1:1});for(var i=a("#"+r),e="",t=0;t<n.length;t++)e+='<option value="'+n[t].value+'"',n[t].value==D[r]&&(e+=" selected"),e+=">"+n[t].label+"</option>";var o=d.meta["select."+r]?d.meta["select."+r]:d.meta.select;if(i.html('<option value="">'+o+"</option>"+e).off("change").on("change",function(p){D[this.id]=this.value,this.id=="iso3"&&!aa[this.value]?ba(this.value):ra(!1)}),r=="iso3"){var i=a("#country-selector");i.html('<option value="">'+d.meta["select-country"]+"</option>"+e).off("change").on("change",function(T){this.value!=""&&fa(this.value)}),document.querySelector("#agencyHeader")&&d.geoitems[y]&&Q(0,c=d.geoitems[y].label)}}}function Sa(r){a("#spinner").show(),a.when(pa("/agencies/geo")).done(function(n){a("#spinner").hide();for(var s=0,i=n.data.length;s<i;s++){var e=n.data[s];e.latitude==0||e.longitude==0||e.latitude==null||e.longitude==null||(asti.config.enablemap&&ga(e),m[e.agencyid]=e.official_name)}asti.config.enablemap?ya():console.log("Map is disabled"),r&&r()})}function fa(r){D.iso3!=r&&(a("#ap-root").attr("data-role","details"),D.iso3=r,aa[r]?ra(!1):ba(r))}function ba(r){a("#spinner").show(),a("#ap-count").html(d.meta.loading),a(".ap-column").empty();var n={keyvalues:1};r&&(n.countries=[r]),a.when(pa("/agencies/list",n)).done(function(s){a("#spinner").hide();for(var i=0,e=s.data.length;i<e;i++){var t=s.data[i];if(!(t.latitude==0||t.longitude==0||t.latitude==null||t.longitude==null)){var o=t.agencyid,p=K[o];t.name=t.official_name==""?"(unknown)":t.official_name,t.acronym=(t.parent_acronym!=null&&t.parent_acronym!=""?t.parent_acronym+"-":"")+t.official_acronym,t.researchfocus={};for(var f in M)f=="agencytype"&&(M[f][t[f]]=t[f]);m.hasOwnProperty(o)||ga(t),p||(Z.push(o),K[o]=p=ka(t)),p.find("[data-indicator]").each(function(){var E=this.getAttribute("data-indicator"),ta=d.meta["focus-indicators"][E],L=t.keyvalues[E],U=-1/0;d.indicators[E]||(d.indicators[E]={current:{}});var ea=d.meta["key-indicators"][E]||d.meta["sort-indicators"][E],sa;if(L){for(var z in L)ta&&(L[z]*=100),L[z]=parseFloat(L[z]),z>U&&(U=z,d.indicators[E].current[o]=L[z]);ta&&L[U]<H?this.parentNode.removeChild(this):(sa=mw.support.format(E.match(".SHRE$")?"%0.1f%%":"%0.1f",L[U]),a(this).find('[data-indicator-property="bar"]').css("width",L[U]+"%"),a(this).find('[data-indicator-property="year"]').html(U),ta&&(t.researchfocus[E]=!0,a(this).closest(".ap-box-content").find('[data-indicator-property="focus-year"]').html(U)))}else d.indicators[E].current[o]="",ta?this.parentNode.removeChild(this):(sa='<span class="no-data">'+d.meta["no-data"]+"</span>",a(this).find('[data-indicator-property="year"]').hide());a(this).find('[data-indicator-property="label"]').html(ea),a(this).find('[data-indicator-property="value"]').html(sa),a(this).toggleClass("selected",x==E||x=="name"&&E=="RES.FTE").attr("style","")});var T=p.find(".ap-commodity-data");T.children().length==0&&T.append('<span class="no-data">'+d.meta["no-data"]+"</span>"),m[o]=t,a("#a-"+o).html(p.html())}}if($){$=!1;for(var f in d.meta["sort-indicators"])a(".ap-sort").append('<button data-sort-key="'+f+'">'+d.meta["sort-indicators"][f]+"</button>")}asti.config.enablemap&&ya(),ma(),ra(!1)}),aa[r]=!0}a.when(pa("/countries/list"),a.ajax(asti.config.json+"/newcountries?lang="+w)).done(function(r,n){for(var o=r[0],s=0,i=o.data.length;s<i;s++){var e=o.data[s],t=e.iso3||e.ISO3;e.label=e.name,d.geoitems[t]=e}var o=n[0];o instanceof Array&&(o=o[0]);for(var p in o){var e=d.geoitems[p];e&&(e.profile=o[p],e.profile&&(M.iso3[p]=e.label))}var f=a("#ap-root").attr("data-country");f&&a("#ap-root").find("h1").append(" - "+d.geoitems[f].label),ma()}),a.when(Ra("/directory-agency"),a.ajax({url:"/agencies/mapstyles.json",contentType:"application/json"})).done(function(r,n){a("#ap-root").attr("data-tile-limit")&&(J=+a("#ap-root").attr("data-tile-limit"));var s=d.meta=r[0];a(".drupal").each(function(){var t=s[this.getAttribute("data-key")];this.hasAttribute("data-attribute")?a(this).attr(this.getAttribute("data-attribute"),t||"{"+this.getAttribute("data-key")+"}"):a(this).html(t||"{"+this.getAttribute("data-key")+"}")}),s.hasOwnProperty("focus-threshold")&&(H=+s["focus-threshold"]),asti.config.enablemap&&(h=new google.maps.Map(document.getElementById("ap-map"),{center:{lat:0,lng:0},disableDefaultUI:!0,zoomControl:!0,minZoom:2,maxZoom:13,zoom:2}),G.setMap(h),h.mapTypes.set("custom",new google.maps.StyledMapType(n[0],{name:"Custom"})),h.setMapTypeId("custom"),X=h.addListener("idle",ha)),N=a(".ap-box").detach(),a("body").on("click",".ap-box",function(t){a(this).toggleClass("is-closed"),a(this).toggleClass("is-open"),t.preventDefault()}),a("#show-more").on("click",function(){A=Math.min(A+P,g.length),ua()}),a("body").on("click",".ap-box button",function(t){var o=a(t.target).closest(".ap-box");const p=oa(o.attr("id").substr(2),W);window.open(p,"_blank")}),a("#clear-filters").on("click",function(){for(var t in M)a("#"+t).val("");ra(!1)}),a("body").on("click","[data-sort-key]",function(t){var o=a(t.target);o.hasClass("up")?o.removeClass("up").addClass("down"):o.hasClass("down")?o.removeClass("down").addClass("up"):(a("[data-sort-key]").removeClass("down up selected"),o.addClass("selected").addClass(o.attr("data-sort-key")=="name"?"up":"down")),ua()}),a("[data-sort-key]:first").addClass("selected up"),a(".ap-view-button").on("click",function(){a(".ap-view-button").removeClass("active"),a(this).addClass("active"),a(".ap-content").removeClass("tile-view list-view").addClass(this.getAttribute("data-key"))});for(var i in d.meta["key-indicators"])C.push(i);for(i in d.meta["sort-indicators"])C.indexOf(i)==-1&&C.push(i);for(var i in d.meta["focus-indicators"])C.indexOf(i)==-1&&C.push(i),M.researchfocus[i]=d.meta["focus-indicators"][i];var e=a("#ap-root").attr("data-country");e?(a("#ap-map").css("opacity",0),fa(e)):Sa()})})}),[c]}class Ua extends La{constructor(B){super(),_a(this,B,Ba,ja,xa,{})}}export{Ua as component};