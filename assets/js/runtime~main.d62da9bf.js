(()=>{"use strict";var e,t,r,o,n,i={},a={};function d(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=i,d.c=a,e=[],d.O=(t,r,o,n)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],n=e[s][2];for(var a=!0,u=0;u<r.length;u++)(!1&n||i>=n)&&Object.keys(d.O).every((e=>d.O[e](r[u])))?r.splice(u--,1):(a=!1,n<i&&(i=n));if(a){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,o,n]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);d.r(n);var i={};t=t||[null,r({}),r([]),r(r)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,d.d(n,i),n},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"assets/js/"+({85:"1f391b9e",217:"fb621ddb",668:"e7ce6630",761:"2e82b1e0",920:"1a4e3797"}[e]||e)+"."+{66:"56396458",85:"d623fd79",217:"a21145f5",426:"c60fb91a",460:"140501ef",668:"1805380f",761:"96fe9aac",894:"609d8689",920:"aa574868",945:"2f36002a"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="typescript-style-guide-website:",d.l=(e,t,r,i)=>{if(o[e])o[e].push(t);else{var a,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var c=l[s];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==n+r){a=c;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.setAttribute("data-webpack",n+r),a.src=e),o[e]=[t];var f=(t,r)=>{a.onerror=a.onload=null,clearTimeout(p);var n=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/typescript-style-guide/",d.gca=function(e){return e={"1f391b9e":"85",fb621ddb:"217",e7ce6630:"668","2e82b1e0":"761","1a4e3797":"920"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(t,r)=>{var o=d.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=d.p+d.u(t),a=new Error;d.l(i,(r=>{if(d.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,o[1](a)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,i=r[0],a=r[1],u=r[2],l=0;if(i.some((t=>0!==e[t]))){for(o in a)d.o(a,o)&&(d.m[o]=a[o]);if(u)var s=u(d)}for(t&&t(r);l<i.length;l++)n=i[l],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(s)},r=self.webpackChunktypescript_style_guide_website=self.webpackChunktypescript_style_guide_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();