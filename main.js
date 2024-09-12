(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(601),o=n.n(r),a=n(314),c=n.n(a),i=n(417),s=n.n(i),l=new URL(n(222),n.b),d=c()(o()),u=s()(l);d.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n    background-image: url(${u});\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\nheader {\n    padding-block: 2rem;\n    background-color: rgb(0, 0, 0, 0.6);\n    margin-bottom: 2rem;\n\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n}\n\nbutton {\n    background-color: rgb(0, 0, 0, 0);\n    padding: 1rem 3rem;\n    border: 3px solid white;\n    border-radius: 50px;\n    color: white;\n    cursor: pointer;\n}\n\nbutton:hover,\n.selected {\n    background-color: white;\n    color: black;\n}\n\n#content {\n    color: white;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#content section {\n    background-color: rgb(0, 0, 0, 0.5);\n    padding: 2rem;\n}\n\n#content section > *:is(:not(:last-child)) {\n    margin-bottom: 2rem;\n}`,""]);const p=d},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},222:(e,t,n)=>{e.exports=n.p+"63dc82e7d076a950a60f.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),c=n.n(a),i=n(659),s=n.n(i),l=n(56),d=n.n(l),u=n(540),p=n.n(u),m=n(113),f=n.n(m),h=n(208),g={};function v(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("section"),n=document.createElement("h2");n.textContent="Welcome to My Dynamic Page!";const r=document.createElement("p");r.textContent="This content was dynamically generated using JavaScript. Below you will find a list, and a button for more interaction!";const o=document.createElement("ul");["Dynamically generated list item 1","Dynamically generated list item 2","Dynamically generated list item 3"].forEach((e=>{const t=document.createElement("li");t.textContent=e,o.appendChild(t)}));const a=document.createElement("button");a.textContent="Click Me!",a.addEventListener("click",(()=>{alert("Button was clicked!")})),t.appendChild(n),t.appendChild(r),t.appendChild(o),t.appendChild(a),e.appendChild(t)}function y(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("section"),n=document.createElement("h2");n.textContent="Our Menu";const r=document.createElement("p");r.textContent="This content was dynamically generated using JavaScript. Below you will find a list of menu items";const o=document.createElement("ul");["Dynamically generated Pizza","Dynamically generated Spaghetti","Dynamically generated Cheesecake"].forEach((e=>{const t=document.createElement("li");t.textContent=e,o.appendChild(t)})),t.appendChild(n),t.appendChild(r),t.appendChild(o),e.appendChild(t)}function b(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("section"),n=document.createElement("h2");n.textContent="About Us";const r=document.createElement("p");r.textContent="We are an artificial JavaScript code restaurant. We actually don't exist!";const o=document.createElement("p");o.textContent="Call us at 123456789",t.appendChild(n),t.appendChild(r),t.appendChild(o),e.appendChild(t)}g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=p(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals,v();const C=document.getElementById("home"),x=document.getElementById("menu"),E=document.getElementById("about");let w=C;function T(e,t){t.target!==w&&(e(),w.classList.remove("selected"),w=t.target,w.classList.add("selected"))}C.addEventListener("click",(e=>T(v,e))),x.addEventListener("click",(e=>T(y,e))),E.addEventListener("click",(e=>T(b,e)))})();