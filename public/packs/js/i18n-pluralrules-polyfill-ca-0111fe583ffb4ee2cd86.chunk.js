(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{496:function(a,e){Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({data:{categories:{cardinal:["one","many","other"],ordinal:["one","two","few","other"]},fn:function(a,e){var n=String(a),o=n.split(/[ce]/),t=o[1]||0,l=String(t?Number(o[0])*Math.pow(10,t):n).split("."),r=l[0],c=!l[1],i=r.slice(-6);return e?1==a||3==a?"one":2==a?"two":4==a?"few":"other":1==a&&c?"one":0==t&&0!=r&&0==i&&c||t<0||t>5?"many":"other"}},locale:"ca"})}}]);
//# sourceMappingURL=i18n-pluralrules-polyfill-ca-0111fe583ffb4ee2cd86.chunk.js.map