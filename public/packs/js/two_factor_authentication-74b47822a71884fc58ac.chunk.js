(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{1111:function(t,e,r){"use strict";function n(t){const e="==".slice(0,(4-t.length%4)%4),r=t.replace(/-/g,"+").replace(/_/g,"/")+e,n=atob(r),o=new ArrayBuffer(n.length),i=new Uint8Array(o);for(let t=0;t<n.length;t++)i[t]=n.charCodeAt(t);return o}function o(t){const e=new Uint8Array(t);let r="";for(const t of e)r+=String.fromCharCode(t);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}r.r(e);var i="copy",a="convert";function c(t,e,r){if(e===i)return r;if(e===a)return t(r);if(e instanceof Array)return r.map((r=>c(t,e[0],r)));if(e instanceof Object){const n={};for(const[o,i]of Object.entries(e)){if(i.derive){const t=i.derive(r);void 0!==t&&(r[o]=t)}if(o in r)null!=r[o]?n[o]=c(t,i.schema,r[o]):n[o]=null;else if(i.required)throw new Error(`Missing key: ${o}`)}return n}}function s(t,e){return{required:!0,schema:t,derive:e}}function u(t){return{required:!0,schema:t}}function l(t){return{required:!1,schema:t}}var h={type:u(i),id:u(a),transports:l(i)},f={appid:l(i),appidExclude:l(i),credProps:l(i)},d={appid:l(i),appidExclude:l(i),credProps:l(i)},p={publicKey:u({rp:u(i),user:u({id:u(a),name:u(i),displayName:u(i)}),challenge:u(a),pubKeyCredParams:u(i),timeout:l(i),excludeCredentials:l([h]),authenticatorSelection:l(i),attestation:l(i),extensions:l(f)}),signal:l(i)},y={type:u(i),id:u(i),rawId:u(a),authenticatorAttachment:l(i),response:u({clientDataJSON:u(a),attestationObject:u(a),transports:s(i,(t=>{var e;return(null==(e=t.getTransports)?void 0:e.call(t))||[]}))}),clientExtensionResults:s(d,(t=>t.getClientExtensionResults()))},g={mediation:l(i),publicKey:u({challenge:u(a),timeout:l(i),rpId:l(i),allowCredentials:l([h]),userVerification:l(i),extensions:l(f)}),signal:l(i)},m={type:u(i),id:u(i),rawId:u(a),authenticatorAttachment:l(i),response:u({clientDataJSON:u(a),authenticatorData:u(a),signature:u(a),userHandle:u(a)}),clientExtensionResults:s(d,(t=>t.getClientExtensionResults()))};async function v(t){const e=await navigator.credentials.create(function(t){return c(n,p,t)}(t));return function(t){return c(o,y,t)}(e)}async function w(t){const e=await navigator.credentials.get(function(t){return c(n,g,t)}(t));return function(t){return c(o,m,t)}(e)}var b=r(126),E=r(42);r(890);function L(){Array.from(document.getElementsByClassName("flash-message")).forEach((function(t){t.classList.add("hidden")}))}function x(t,e){var r;b.a.post(t,JSON.stringify(e),{headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRF-Token":(r=document.querySelector('meta[name="csrf-token"]'),r?r.getAttribute("content"):null)},credentials:"same-origin"}).then((function(t){window.location.replace(t.data.redirect_path)})).catch((function(t){if(422===t.response.status){document.getElementById("security-key-error-message").classList.remove("hidden"),console.error(t.response.data.error)}else console.error(t)}))}Object(E.a)((()=>{if(!(navigator.credentials&&navigator.credentials.create&&navigator.credentials.get&&window.PublicKeyCredential)){const t=document.getElementById("unsupported-browser-message");t&&(t.classList.remove("hidden"),document.querySelector(".btn.js-webauthn").disabled=!0)}const t=document.getElementById("new_webauthn_credential");t&&t.addEventListener("submit",(t=>{t.preventDefault();var e=t.target.querySelector('input[name="new_webauthn_credential[nickname]"]');e.value?b.a.get("/settings/security_keys/options").then((t=>{v({publicKey:t.data}).then((t=>{x("/settings/security_keys",{credential:t,nickname:e.value})})).catch((t=>{document.getElementById("security-key-error-message").classList.remove("hidden"),console.error(t)}))})).catch((t=>{console.error(t.response.data.error)})):e.focus()}));const e=document.getElementById("webauthn-form");if(e){e.addEventListener("submit",(t=>{t.preventDefault(),b.a.get("sessions/security_key_options").then((t=>{w({publicKey:t.data}).then((t=>{x("sign_in",{user:{credential:t}})})).catch((t=>{document.getElementById("security-key-error-message").classList.remove("hidden"),console.error(t)}))})).catch((t=>{console.error(t.response.data.error)}))}));const t=document.getElementById("otp-authentication-form");document.getElementById("link-to-otp").addEventListener("click",(()=>{e.classList.add("hidden"),t.classList.remove("hidden"),L()}));document.getElementById("link-to-webauthn").addEventListener("click",(()=>{t.classList.add("hidden"),e.classList.remove("hidden"),L()}))}}))},890:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",d="suspendedYield",p="executing",y="completed",g={};function m(){}function v(){}function w(){}var b={};u(b,a,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(A([])));L&&L!==r&&n.call(L,a)&&(b=L);var x=w.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(t,r,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=h(t,r,n);if("normal"===u.type){if(o=n.done?y:d,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function A(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=w,o(x,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=u(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(k.prototype),u(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},[[1111,0]]]);
//# sourceMappingURL=two_factor_authentication-74b47822a71884fc58ac.chunk.js.map