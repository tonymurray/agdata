import{s as r,n as t,o as v}from"../chunks/scheduler.e108d1fd.js";import{S as n,i as p,g as o,h as u,x as E,k as T,a as y,f as S}from"../chunks/index.5ae4157e.js";import{l as i}from"../chunks/loadscript.5be5f31a.js";function R(l){let a,s='<div class="astiCountriesWrapper"><div id="astimenuCtrl" class="astimenuCtrl hidden"><a href="#" class="ic menu" tabindex="1"><span class="line"></span> <span class="line"></span> <span class="line"></span></a> <a href="#" class="ic close"></a></div> <div id="cp-root" class="cp-wrapper ASTI-countries"><div class="countryInnerWrapper"><div class="countryCol1"><div class="cp-banner"><div class="cp-column-1 cp-image-wrapper"><img id="banner-image"/> <div class="cp-image-caption"><a target="_blank"><div class="cp-image-title"></div> <div class="cp-image-attribution"></div></a></div></div> <div class="cp-column-1"><div id="map"></div></div> <div class="cp-column-1 cp-download-links"></div></div> <div id="keyTrendsSection"><h2 class="cp-key-trends">Key Trends</h2> <section class="keyTrendsDivs"><div class="cp-column-1 drupal" data-key="country-intro-1"></div> <div class="cp-column-1 drupal" data-key="country-intro-2"></div> <div class="cp-column-1 drupal" data-key="country-intro-3"></div></section></div> <div class="cp-primary-selector"><div id="primary" class="cp-header"></div> <input placeholder="Select country" type="text"/></div> <div class="cp-tab-wrapper"><ul id="cp-tabs" class="cp-tab-menu"><li data-key="key-indicators" class="cp-tab-item drupal selected"></li> <li data-key="financial-resources" class="cp-tab-item drupal"></li> <li data-key="researcher-profile" class="cp-tab-item drupal"></li> <li data-key="research-focus" class="cp-tab-item drupal"></li> <li data-key="country-profile" class="cp-tab-item drupal"></li></ul> <div class="cp-comparison-wrapper"><label class="drupal" data-key="compare"></label> <div id="country-selector" class="cp-country-selector"><input id="add-country" class="cp-add-country"/></div></div> <div id="key-indicators" class="cp-tab selected"><div id="chart1" class="cp-key-indicator"><h1 class="drupal" data-key="KEY.FIN"></h1> <div class="cp-column-1"><div class="drupal" data-key="KEY.FIN.DESC"></div> <div class="cp-country-note"></div></div> <div class="cp-current-value"><div class="value" data-format="%0.1f"></div> <div><span class="cp-indicator-unit"></span></div></div> <div class="cp-indicator-selector-header drupal" data-key="KEY.FIN.SUB"></div> <div class="cp-indicator-selector"><div data-indicator="EXP.TOT.PPP.FTE"></div> <div data-indicator="EXP.TOT.USD.FTE"></div> <div data-indicator="EXP.TOT.CONSTLCU.FTE"></div></div> <div data-type="line" class="cp-chart"></div></div> <div id="chart2" class="cp-key-indicator" data-indicator="RES.TOT.FTE"><h1 class="drupal" data-key="KEY.HR"></h1> <div class="cp-column-1"><div class="drupal" data-key="KEY.HR.DESC"></div> <div class="cp-country-note"></div></div> <div class="cp-current-value"><div class="value" data-format="%0.1f"></div> <div><span class="cp-indicator-unit"></span></div></div> <div class="drupal cp-chart-title" data-key="KEY.HR.RES.TOTAL.FTE.CHART"></div> <div data-type="column" class="cp-chart"></div></div> <div id="chart3" class="cp-key-indicator" data-indicator="EXP.TOT.ARI.AGGDP"><h1 class="drupal" data-key="KEY.EXP.SHARE"></h1> <div class="cp-column-1"><div class="drupal" data-key="KEY.EXP.SHARE.DESC"></div> <div class="cp-country-note"></div></div> <div class="cp-current-value"><div class="value" data-format="%0.2f%%"></div> <div><span class="cp-indicator-unit"></span></div></div> <div class="drupal cp-chart-title" data-key="KEY.FIN.EXP.TOTAL.ARI.CHART"></div> <div id="chart4" data-type="line" data-format="%0.2f" class="cp-chart"></div> <div id="chart5" data-indicator="RES.TOT.ARI.FARMERS"><div class="cp-current-value"><div class="value" data-format="%0.1f"></div> <div><span class="cp-indicator-unit"></span></div></div> <div class="drupal cp-chart-title sub-chart" data-key="KEY.HR.RES.TOTAL.ARI.CHART"></div> <div data-type="line" class="cp-chart"></div></div></div> <div id="chart13" class="cp-key-indicator" data-indicator="RES.GOV.SHRE,RES.HE.SHRE,RES.NP.SHRE"><h1 class="drupal" data-key="KEY.IP"></h1> <div class="cp-column-1"><div class="drupal" data-key="KEY.IP.DESC"></div></div> <div class="drupal cp-chart-title" data-key="KEY.IP.CHART"></div> <div class="cp-secondary-template"><div class="cp-country-name"></div> <div class="cp-country-note"></div> <div data-type="stacked-column" class="cp-chart"></div></div></div></div> <div id="financial-resources" class="cp-tab"><div id="chart6" class="cp-key-indicator" data-indicator="EXP.SALARIES.TOT.SHRE,EXP.OPERAT.TOT.SHRE,EXP.CAP.TOT.SHRE"><h1 class="drupal" data-key="FCL.EXP.SHARE"></h1> <div class="cp-column-1"><div class="drupal" data-key="FCL.EXP.SHARE.DESC"></div></div> <div class="drupal cp-chart-title" data-key="FCL.EXP.SHARE.CHART"></div> <div class="cp-secondary-template"><div class="cp-country-name"></div> <div class="cp-country-note"></div> <div data-type="stacked-column" class="cp-chart"></div></div></div> <div id="chart7" class="cp-key-indicator" data-indicator="FUND.GOVTOT.TOT.SHRE,FUND.DONORLOANS.TOT.SHRE,FUND.COMPROD.TOT.SHRE,FUND.SALES.TOT.SHRE,FUND.OTH.TOT.SHRE"><h1 class="drupal" data-key="FCL.FIN.FUND"></h1> <div class="cp-column-1"><div class="drupal" data-key="FCL.FIN.FUND.DESC"></div></div> <div class="drupal cp-chart-title" data-key="FCL.FIN.FUND.CHART"></div> <div class="cp-secondary-template"><div class="cp-country-name"></div> <div class="cp-country-note"></div> <div data-type="stacked-column" class="cp-chart"></div></div></div></div> <div id="researcher-profile" class="cp-tab"><div id="chart8" class="cp-key-indicator" data-indicator="RES.BSC.TOT.FTE,RES.MSC.TOT.FTE,RES.PHD.TOT.FTE"><h1 class="drupal" data-key="PRO.EDU"></h1> <div class="cp-column-1"><div class="drupal" data-key="PRO.EDU.DESC"></div></div> <div class="drupal cp-chart-title" data-key="PRO.EDU.CHART"></div> <div class="cp-secondary-template"><div class="cp-country-name"></div> <div class="cp-country-note"></div> <div data-type="line" data-percentage="" class="cp-chart"></div></div></div> <div id="chart9" class="cp-key-indicator" data-indicator="RES.MALE.TOT.FTE,RES.FEMALE.TOT.FTE,RES.MALE.BSC.TOT.FTE,RES.FEMALE.BSC.TOT.FTE,RES.MALE.MSC.TOT.FTE,RES.FEMALE.MSC.TOT.FTE,RES.MALE.PHD.TOT.FTE,RES.FEMALE.PHD.TOT.FTE"><h1 class="drupal" data-key="PRO.GEN"></h1> <div class="cp-column-1"><div class="drupal" data-key="PRO.GEN.DESC"></div></div> <div class="drupal cp-chart-title" data-key="PRO.GEN.CHART"></div> <div class="cp-secondary-template"><div class="cp-country-note"></div> <div data-type="scoreboard" data-categories="E.TOT,BSC.TOT,MSC.TOT,PHD.TOT" data-percentage="" class="cp-chart"></div></div></div> <div class="hidden" data-indicator="RES.MALE.TOT.SHRE,RES.FEMALE.TOT.SHRE,RES.FEMALE.BSC.TOT.SHRE,RES.MALE.BSC.TOT.SHRE,RES.FEMALE.MSC.TOT.SHRE,RES.MALE.MSC.TOT.SHRE,RES.FEMALE.PHD.TOT.SHRE,RES.MALE.PHD.TOT.SHRE"></div> <div id="chart10" class="cp-key-indicator" data-indicator="RES.UNDER31.TOT.SHRE,RES.31_40.TOT.SHRE,RES.41_50.TOT.SHRE,RES.51_60.TOT.SHRE,RES.OVER60.TOT.SHRE"><h1 class="drupal" data-key="PRO.AGE"></h1> <div class="cp-column-1"><div class="drupal" data-key="PRO.AGE.DESC"></div></div> <div class="drupal cp-chart-title" data-key="PRO.AGE.CHART"></div> <div class="cp-secondary-template"><div class="cp-country-name"></div> <div class="cp-country-note"></div> <div data-type="donut" class="cp-chart"></div></div></div> <div id="cp-disc" class="cp-key-indicator" data-indicator=""><h1 class="drupal" data-key="PRO.DISC"></h1> <div class="cp-column-1"><div class="drupal" data-key="PRO.DISC.DESC"></div></div> <div class="drupal cp-chart-title" data-key="PRO.DISC.CHART"></div> <div class="cp-secondary-template"><div class="cp-country-name"></div> <div class="cp-country-note"></div> <div data-type="multi" data-filter="RES.DISC((.(?!PHD|BSC|MSC)[^.]+)2|.FISHAQUA|.FOREST).TOT.FTE" class="cp-chart"></div></div></div> <div class="hidden" data-indicator="RES.BSC.TOT.SHRE,RES.MSC.TOT.SHRE,RES.PHD.TOT.SHRE"></div></div> <div id="research-focus" class="cp-tab"><div id="chart11" class="cp-key-indicator" data-indicator="RES.COM.TOTCRP.TOT.SHRE,RES.COM.LIVEST.TOT.SHRE,RES.COM.FISH.TOT.SHRE,RES.COM.FORESTRY.TOT.SHRE,RES.COM.NATRES.TOT.SHRE,RES.COM.SOCIOECON.TOT.SHRE,RES.COM.MISC.TOT.SHRE"><h1 class="drupal" data-key="FOC.COM"></h1> <div class="cp-column-1"><div class="drupal" data-key="FOC.COM.DESC"></div></div> <div class="drupal cp-chart-title" data-key="FOC.COM.CHART"></div> <div class="cp-secondary-template"><div class="cp-country-name"></div> <div class="cp-country-note"></div> <div data-type="donut" class="cp-chart"></div></div></div> <div id="cp-crop" class="cp-key-indicator" data-indicator=""><h1 class="drupal" data-key="FOC.CROP"></h1> <div class="cp-column-1"><div class="drupal" data-key="FOC.CROP.DESC"></div></div> <div class="drupal cp-chart-title" data-key="FOC.CROP.CHART"></div> <div class="cp-secondary-template"><div class="cp-country-name"></div> <div class="cp-country-note"></div> <div data-type="multi" data-filter="RES.CROP..*.TOT.SHRE" class="cp-chart"></div></div></div></div> <div id="country-profile" class="cp-tab"><div id="table1" class="cp-table" data-data="qualitative-data"></div></div></div> <div class="drupal disclaimer-note" data-key="disclaimer"></div> <div style="padding-top: 3px"><a id="download-notes"><span style="padding: 0 1px 0 0; height: auto" class="cp-download-button"></span> <span class="drupal" data-key="download-notes"></span></a></div></div></div></div></div> <div class="countryCol2"><h2 class="cp-key-trends">Key Trends</h2> <div class="cp-column-1 drupal" data-key="country-intro-1"></div> <div class="cp-column-1 drupal" data-key="country-intro-2"></div> <div class="cp-column-1 drupal" data-key="country-intro-3"></div></div>';return{c(){a=o("div"),a.innerHTML=s,this.h()},l(d){a=u(d,"DIV",{class:!0,"data-svelte-h":!0}),E(a)!=="svelte-b1nbu0"&&(a.innerHTML=s),this.h()},h(){T(a,"class","astiSiteGrid countriesPage")},m(d,c){y(d,a,c)},p:t,i:t,o:t,d(d){d&&S(a)}}}function O(l){let a="CRI";return v(async()=>{const d=new URL(window.location.href).searchParams;let c=d.get("lang");if(d.get("country")&&(a=d.get("country")),a=a&&a!==""?a.slice(0,3):"CRI",c=c&&c!==""?c.slice(0,2):"en",e===void 0)var e=window;e.asti={config:{iso3:a,lang:"en",root:"/",site:"/",file:"/",json:"https://dataportal.asti.cgiar.org/json",tool:"/",path:"/",legacyasti:"https://www.asti.cgiar.org/sites/all/libraries/mw",api:{public:{token:"public",url:"https://dataportal.asti.cgiar.org/api/public",language:"en",version:2}},scoreboard:["#00A3C6","#6472AD"],map:{colors:{current:"#134894",profile:"#959dc1",other:"#bdc0d1"},highlight:{profile:"#134894",other:"#bdc0d1"},click:"/countries?country={ISO3}&lang={LANG}"}}},await i("/common/jquery-3.6.0.min.js"),window.Highcharts||await i("/countries/highcharts.js"),await Promise.all([i("/countries/modernizr.min.js"),i("/countries/jquery-migrate-3.3.2.js"),i("/countries/jquery-ui-site.min.js"),i("/common/tinycolor.js"),i("/common/mw.js")]),await i("/countries/charts.js"),await i("/countries/countrycode.js")}),[]}class k extends n{constructor(a){super(),p(this,a,O,R,r,{})}}export{k as component};
