(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1466:function(e,t,o){"use strict";o.r(t),o.d(t,"register",(function(){return f})),o.d(t,"setFocusTrapTest",(function(){return h})),o.d(t,"unregister",(function(){return l}));var n=["text","search","url","password","tel"],r=["checkbox","radio"],i=void 0,a="a[href], area[href], input, select, textarea, button, iframe, object, embed, [contenteditable], [tabindex], video[controls], audio[controls], summary";function c(){for(var e=document.activeElement;e.shadowRoot;)e=e.shadowRoot.activeElement;return e}function s(e,t,o){var n={acceptNode:function(e){return e===t||e.shadowRoot||(o=e).matches(a)&&!o.disabled&&!/^-/.test(o.getAttribute("tabindex")||"")&&!o.hasAttribute("inert")&&(o.offsetWidth>0||o.offsetHeight>0)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;var o}},r="undefined"!=typeof ShadowRoot&&("polyfill"in ShadowRoot||!ShadowRoot.toString().includes("[native code]"))&&e instanceof ShadowRoot?function(e,t,o,n){var r=Array.prototype.slice.call(e.querySelectorAll("*")),i=r.indexOf(t);o?r=r.slice(i+1):(-1===i&&(i=r.length),(r=r.slice(0,i)).reverse());for(var a=0;a<r.length;a++){var c=r[a];if(c instanceof HTMLElement&&n.acceptNode(c)===NodeFilter.FILTER_ACCEPT)return c}}(e,t,o,n):function(e,t,o,n){var r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n);return t&&(r.currentNode=t),o?r.nextNode():t?r.previousNode():r.lastChild()}(e,t,o,n);return r&&r.shadowRoot?s(r.shadowRoot,null,o):!r&&e.host?s(e.host.getRootNode(),e.host,o):r}function u(e,t){var o=c(),r="ArrowRight"===t;if(!function(e,t){var o,r,i,a=e.tagName,c="TEXTAREA"===a,s="INPUT"===a&&-1!==n.indexOf(e.getAttribute("type").toLowerCase()),u=e.hasAttribute("contenteditable");if(!c&&!s&&!u)return!1;if(u){var d=getSelection();o=d.anchorOffset,r=d.focusOffset,i=e.textContent.length}else o=e.selectionStart,r=e.selectionEnd,i=e.value.length;return!(!t&&o===r&&0===o||t&&o===r&&o===i)}(o,r)){var a=s(function(e){if(i)for(var t=e.parentElement;t;){if(i(t))return t;t=t.parentElement}}(o)||o.getRootNode(),o,r);a&&a!==o&&(a.focus(),e.preventDefault())}}function d(e){if(!(e.altKey||e.metaKey||e.ctrlKey)){var t=e.key;switch(t){case"ArrowLeft":case"ArrowRight":u(e,t);break;case"Enter":!function(e){var t=c();"INPUT"===t.tagName&&-1!==r.indexOf(t.getAttribute("type").toLowerCase())&&(t.click(),e.preventDefault())}(e)}}}function f(){addEventListener("keydown",d)}function l(){removeEventListener("keydown",d)}function h(e){i=e}}}]);
//# sourceMappingURL=arrow-key-navigation-d0bc5514fe79edd78f0c.chunk.js.map