(()=>{"use strict";var t={83:(t,e,n)=>{n.d(e,{A:()=>a});var o=n(601),r=n.n(o),i=n(314),s=n.n(i)()(r());s.push([t.id,".container {\n\tbackground-color: rgb(255, 0, 255);\n\twidth: 500px;\n\tpadding: 10px;\n\tfont-weight: 400;\n\tfont-style: normal;\n\tborder-radius: 10px;\n\tmargin: 25px;\n}\n\n.info-container {\n\twidth: 100%;\n}\n\n.info-container p {\n\tmax-width: 100%;\n\toverflow-wrap: break-word;\n}\n",""]);const a=s},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<t.length;u++){var h=[].concat(t[u]);o&&s[h[0]]||(void 0!==i&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=i),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),r&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=r):h[4]="".concat(r)),e.push(h))}},e}},601:t=>{t.exports=function(t){return t[1]}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t=function(t){return e=this,n=void 0,r=function*(){try{return(yield fetch("https://rickandmortyapi.com/api/character").then((t=>t.json()))).results.slice(0,t)}catch(t){console.log(t)}},new((o=void 0)||(o=Promise))((function(t,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(s,a)}c((r=r.apply(e,n||[])).next())}));var e,n,o,r};var e,o=n(83);!function(t){t.image="image",t.name="name",t.status="status",t.species="species",t.type="type",t.origin="origin",t.episode="episode"}(e||(e={}));class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,name:null,status:null,species:null,type:null,origin:null,episode:null})}connectedCallback(){this.render()}attributeChangedCallback(t,e,n){this[t]=n,this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="./src/components/Character/Character.css">\n            <section class="container">\n            <img src="${this.image}"></img>\n            <h1>${this.name}</h1>\n\t\t\t\t\t\t<div class='info-container'>\n            <p><b>Status: </b>${this.status}</p>\n            <p><b>Species:</b> ${this.species}</p>\n            <p><b>Type: </b> ${this.type?this.type:"Normal"}</p>\n            <p><b>Origin:</b> ${this.origin}</p>\n            <p><b>Episodes:</b>  ${this.episode}</p>\n\t\t\t\t\t\t</div>\n            </section>`);const e=this.ownerDocument.createElement("style");e.innerHTML=o.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("my-characters",r);class i extends HTMLElement{constructor(){super(),this.characters=[],this.number=0,this.attachShadow({mode:"open"})}connectedCallback(){return n=this,o=void 0,i=function*(){var n;try{const n=yield t(10);null==n||n.forEach((t=>{const n=this.ownerDocument.createElement("my-characters");n.setAttribute(e.image,t.image),n.setAttribute(e.name,t.name),n.setAttribute(e.status,t.status),n.setAttribute(e.species,t.species),n.setAttribute(e.type,t.type),n.setAttribute(e.origin,t.origin.name),n.setAttribute(e.episode,t.episode),this.characters.push(n),this.render()}))}catch(t){console.log("error")}const o=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".hola");null==o||o.addEventListener("change",(t=>{this.number=t.target.value,this.render()}))},new((r=void 0)||(r=Promise))((function(t,e){function s(t){try{c(i.next(t))}catch(t){e(t)}}function a(t){try{c(i.throw(t))}catch(t){e(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(s,a)}c((i=i.apply(n,o||[])).next())}));var n,o,r,i}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='<input class="input-numero" type="number"/>',this.characters.slice(0,this.number).forEach((t=>{var e;null===(e=this.shadowRoot)||void 0===e||e.appendChild(t.cloneNode(!0))})))}}customElements.define("app-container",i)})()})();