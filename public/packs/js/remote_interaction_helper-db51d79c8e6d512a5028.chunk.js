(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{1098:function(t,e,n){"use strict";n.r(e);n(143),n(126);var i=n(142);const o=t=>{var e;return null===(e=((t,e)=>"object"==typeof e&&null!==e&&"links"in e&&e.links instanceof Array?e.links.find((e=>(t=>!("object"!=typeof t||null===t||!("rel"in t)||"string"!=typeof t.rel||"template"in t&&"string"!=typeof t.template||"href"in t&&"string"!=typeof t.href))(e)&&e.rel===t)):void 0)("http://ostatus.org/schema/1.0/subscribe",t))||void 0===e?void 0:e.template},a=(t,e)=>{window.parent.postMessage({type:"fetchInteractionURL-success",uri_or_domain:t,template:e},window.origin)},r=()=>{window.parent.postMessage({type:"fetchInteractionURL-failure"},window.origin)},s=t=>{const e=`https://${t}/authorize_interaction?uri={uri}`;i.a.get(`https://${t}/.well-known/webfinger`,{params:{resource:`https://${t}`}}).then((n=>{let{data:i}=n;const r=o(i);a(t,null!=r?r:e)})).catch((()=>{a(t,e)}))},c=t=>{const e=(t=t.replace(/^@/,"")).split("@");if(2!==e.length||!e[0]||!(t=>{const e=new URL("https:///path");return e.hostname=t,e.hostname===t})(e[1]))return void r();const n=e[1],c=`https://${n}/authorize_interaction?uri={uri}`;i.a.get(`https://${n}/.well-known/webfinger`,{params:{resource:`acct:${t}`}}).then((e=>{let{data:n}=e;const i=o(n);a(t,null!=i?i:c)})).catch((()=>{s(n)}))},p=t=>{""===t?r():/^https?:\/\//.test(t)?(t=>{const e=new URL(t).host,n=`https://${e}/authorize_interaction?uri={uri}`;i.a.get(`https://${e}/.well-known/webfinger`,{params:{resource:t}}).then((e=>{let{data:i}=e;const r=o(i);a(t,null!=r?r:n)})).catch((()=>{s(e)}))})(t):t.includes("@")?c(t):s(t)};window.addEventListener("message",(t=>{window.origin&&window.parent===t.source&&t.origin===window.origin&&t.data&&"object"==typeof t.data&&"type"in t.data&&"fetchInteractionURL"===t.data.type&&"uri_or_domain"in t.data&&"string"==typeof t.data.uri_or_domain&&p(t.data.uri_or_domain)}))}},[[1098,0]]]);
//# sourceMappingURL=remote_interaction_helper-db51d79c8e6d512a5028.chunk.js.map