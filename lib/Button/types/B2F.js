!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],e):"object"==typeof exports?exports.quark=e(require("react"),require("prop-types")):t.quark=e(t.React,t.PropTypes)}(this,function(t,e){return function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=94)}({0:function(e,r){e.exports=t},1:function(t,r){t.exports=e},2:function(t,e){function r(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var a=o(n);return[r].concat(n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"})).concat([a]).join("\n")}return[r].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=r(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(o[a]=!0)}for(n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},3:function(t,e,r){function o(t,e){for(var r=0;r<t.length;r++){var o=t[r],n=s[o.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](o.parts[a]);for(;a<o.parts.length;a++)n.parts.push(l(o.parts[a],e))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(l(o.parts[a],e));s[o.id]={id:o.id,refs:1,parts:i}}}}function n(t,e){for(var r=[],o={},n=0;n<t.length;n++){var a=t[n],i=e.base?a[0]+e.base:a[0],u=a[1],d=a[2],b=a[3],l={css:u,media:d,sourceMap:b};o[i]?o[i].parts.push(l):r.push(o[i]={id:i,parts:[l]})}return r}function a(t,e){var r=m(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=_[_.length-1];if("top"===t.insertAt)o?o.nextSibling?r.insertBefore(e,o.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),_.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=_.indexOf(t);e>=0&&_.splice(e,1)}function u(t){var e=document.createElement("style");return t.attrs.type="text/css",b(e,t.attrs),a(t,e),e}function d(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",b(e,t.attrs),a(t,e),e}function b(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function l(t,e){var r,o,n,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var b=k++;r=h||(h=u(e)),o=f.bind(null,r,b,!1),n=f.bind(null,r,b,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=d(e),o=g.bind(null,r,e),n=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=u(e),o=c.bind(null,r),n=function(){i(r)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}function f(t,e,r,o){var n=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,n);else{var a=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function c(t,e){var r=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function g(t,e,r){var o=r.css,n=r.sourceMap,a=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||a)&&(o=v(o)),n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([o],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}var s={},p=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(r){return void 0===e[r]&&(e[r]=t.call(this,r)),e[r]}}(function(t){return document.querySelector(t)}),h=null,k=0,_=[],v=r(5);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=p()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=n(t,e);return o(r,e),function(t){for(var a=[],i=0;i<r.length;i++){var u=r[i],d=s[u.id];d.refs--,a.push(d)}t&&o(n(t,e),e);for(var i=0;i<a.length;i++){var d=a[i];if(0===d.refs){for(var b=0;b<d.parts.length;b++)d.parts[b]();delete s[d.id]}}}};var w=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},4:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){var r={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},i=r(0),u=o(i),d=r(1),b=o(d);r(6);var l=function(t){var e=t.widthType,r=t.heightType,o=t.roundedType,i=t.bgType,d=t.icon,b=t.className,l=t.type,f=t.disabled,c=t.children,g=n(t,["widthType","heightType","roundedType","bgType","icon","className","type","disabled","children"]),s="tm-quark-button_width_"+e,p="tm-quark-button_height_"+r,m="tm-quark-button_rounded_"+o,h=f?"":"tm-quark-button_bg_"+i,k=("tm-quark-button "+s+" "+p+" "+m+" "+h+" "+b).trim(),_=d?"tm-quark-button__icon tm-quark-button__icon-"+d+" icon icon-"+d:"",v=_.length>0?u.default.createElement("i",{className:_}):null;return"link"===l?u.default.createElement("a",a({},g,{className:k}),v,c):"text"===l?u.default.createElement("span",a({},g,{className:k}),v,c):u.default.createElement("button",a({},g,{type:l,className:k}),v,c)};l.propTypes={widthType:b.default.oneOf(["square","auto","full"]).isRequired,heightType:b.default.oneOf(["medium","large"]).isRequired,roundedType:b.default.oneOf(["all","bottom"]).isRequired,bgType:b.default.oneOf(["facebook","twitter","google-plus","pinterest","vk","1","2","3"]).isRequired,icon:b.default.string,className:b.default.string,type:b.default.oneOf(["button","submit","reset","link","text"]),disabled:b.default.bool,children:b.default.node},l.defaultProps={icon:"",className:"",type:"button",disabled:!1,children:null},e.default=l},5:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,o=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(n))return t;var a;return a=0===n.indexOf("//")?n:0===n.indexOf("/")?r+n:o+n.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},6:function(t,e,r){var o=r(7);"string"==typeof o&&(o=[[t.i,o,""]]);var n={};n.transform=void 0,r(3)(o,n),o.locals&&(t.exports=o.locals)},7:function(t,e,r){e=t.exports=r(2)(void 0),e.push([t.i,".tm-quark-button{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;margin:0;overflow:hidden;padding-bottom:0;padding-top:0;-webkit-text-decoration-skip:objects;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-touch-action:manipulation;touch-action:manipulation;text-align:center}.tm-quark-button *,.tm-quark-button :after,.tm-quark-button :before{-webkit-box-sizing:inherit;box-sizing:inherit}.tm-quark-button:focus,.tm-quark-button:hover{color:#fff}.tm-quark-button:active,.tm-quark-button:focus{outline:none;-moz-outline-style:none}.tm-quark-button::-moz-focus-inner{border-style:none;padding:0}.tm-quark-button[type=button]:-moz-focusring{outline:0}.tm-quark-button::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.tm-quark-button:active{padding-top:1px}.tm-quark-button__icon{display:inline-block;height:20px;position:relative;vertical-align:top;width:20px}.tm-quark-button_width_auto .tm-quark-button__icon,.tm-quark-button_width_full .tm-quark-button__icon{margin-right:10px}.tm-quark-button_height_medium .tm-quark-button__icon{margin-top:10px}.tm-quark-button_height_medium:disabled .tm-quark-button__icon{margin-top:8px}.tm-quark-button_height_large .tm-quark-button__icon{margin-top:20px}.tm-quark-button_height_large:disabled .tm-quark-button__icon{margin-top:18px}.tm-quark-button__icon:before{content:\"\";height:100%;position:absolute;left:0;top:0;width:100%}.tm-quark-button__icon-facebook:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='%23fff'%3E%3Cpath d='M1.1 0C.5 0 0 .5 0 1.1v17.8c0 .6.5 1.1 1.1 1.1h9.6v-7.7H8.1V9.2h2.6V7c0-2.6 1.6-4 3.9-4 1.1 0 2 .1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 3.1h-2.6V20h5.1c.6 0 1.1-.5 1.1-1.1V1.1c0-.6-.5-1.1-1.1-1.1H1.1z'/%3E%3C/svg%3E\")}.tm-quark-button__icon-google-plus:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='%23fff'%3E%3Cpath d='M10 8.6V12h5.7c-.2 1.5-1.7 4.3-5.7 4.3-3.4 0-6.2-2.8-6.2-6.3S6.6 3.7 10 3.7c1.9 0 3.2.8 4 1.5l2.7-2.6C15 1 12.7 0 10 0 4.5 0 0 4.5 0 10s4.5 10 10 10c5.8 0 9.6-4.1 9.6-9.8 0-.6-.1-1.1-.2-1.6H10z'/%3E%3C/svg%3E\")}.tm-quark-button__icon-twitter:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='17' viewBox='0 0 20 17' fill='%23fff'%3E%3Cpath d='M20 1.9c-.7.4-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.7.5-1.6.8-2.6 1C16.1.5 15 0 13.8 0c-2.2 0-4.1 1.8-4.1 4.1 0 .3.1.6.1.9C6.4 4.9 3.4 3.2 1.4.8c-.4.6-.6 1.3-.6 2 0 1.4.8 2.7 1.9 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.4.1-.7.1-1.1.1h-.8c.6 1.6 2.1 2.8 3.9 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.4 0-.7-.1-1-.1 1.8 1.2 4 1.9 6.3 1.9C13.8 16.3 18 10 18 4.6V4c.8-.5 1.4-1.2 2-2.1z'/%3E%3C/svg%3E\")}.tm-quark-button__icon-pinterest:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='%23fff'%3E%3Cpath d='M10 0C4.5 0 0 4.5 0 10c0 4.2 2.6 7.9 6.4 9.3-.1-.8-.2-2 0-2.9.2-.7 1.2-4.9 1.2-4.9s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.8 0 1.2.6 1.2 1.4 0 .8-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-1.9 3.1-4.6 0-2.4-1.7-4-4.1-4-2.9 0-4.6 2.1-4.6 4.3 0 .9.4 1.8.8 2.3.1.1.1.2.1.3-.1.3-.3 1-.3 1.1-.1.2-.2.2-.4.1-1.2-.5-2-2.4-2-3.8 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1l-.6 2.3c-.2.9-.9 2-1.3 2.7 1 .2 2 .4 3 .4 5.5 0 10-4.5 10-10S15.5 0 10 0z'/%3E%3C/svg%3E\")}.tm-quark-button__icon-vk:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12' fill='%23fff'%3E%3Cpath d='M11 11.7c.5 0 .7-.4.7-.8 0-1.6.6-2.5 1.7-1.3 1.2 1.2 1.5 2.1 3 2.1h2.7c.6 0 .9-.3.9-.6 0-.7-1.2-2-2.2-2.9-1.4-1.3-1.4-1.4-.2-2.9 1.5-2 3.4-4.5 1.7-4.5H16c-.7 0-.7.4-1 .9-.8 2-2.4 4.5-3 4.1-.6-.4-.3-2-.2-4.3 0-.7 0-1.1-1-1.3-.5-.1-1-.2-1.5-.2-1.9 0-3.2.8-2.5.9 1.3.3 1.2 3.1.9 4.3-.5 2.2-2.5-1.7-3.3-3.6-.3-.4-.3-.8-1-.8H.7C.2.8 0 1 0 1.3c0 .5 2.5 5.6 4.8 8.1s4.6 2.3 6.2 2.3z'/%3E%3C/svg%3E\")}.tm-quark-button_width_square{color:transparent}.tm-quark-button_width_square.tm-quark-button_height_medium{font-size:0;width:40px}.tm-quark-button_width_square.tm-quark-button_height_large{font-size:0;width:60px}.tm-quark-button_width_auto{width:auto}.tm-quark-button_width_full{width:100%}.tm-quark-button_height_medium{font-size:14px;height:40px;line-height:40px}.tm-quark-button_height_medium.tm-quark-button_width_auto,.tm-quark-button_height_medium.tm-quark-button_width_full{padding-left:20px;padding-right:20px}.tm-quark-button_height_medium.tm-quark-button_width_auto:disabled,.tm-quark-button_height_medium.tm-quark-button_width_full:disabled{line-height:36px;padding-left:18px;padding-right:18px}.tm-quark-button_height_large{font-size:16px;height:60px;line-height:60px}.tm-quark-button_height_large.tm-quark-button_width_auto,.tm-quark-button_height_large.tm-quark-button_width_full{padding-left:30px;padding-right:30px}.tm-quark-button_height_large.tm-quark-button_width_auto:disabled,.tm-quark-button_height_large.tm-quark-button_width_full:disabled{line-height:56px;padding-left:28px;padding-right:28px}.tm-quark-button_rounded_all{border-radius:3px}.tm-quark-button_rounded_bottom{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:0;border-top-right-radius:0}.tm-quark-button_bg_1{background:-webkit-gradient(linear,left top,left bottom,from(#f4511e),to(#d84315));background:linear-gradient(180deg,#f4511e 0,#d84315)}.tm-quark-button_bg_1:focus,.tm-quark-button_bg_1:hover{background:-webkit-gradient(linear,left top,left bottom,from(#d84315),to(#bf360c));background:linear-gradient(180deg,#d84315 0,#bf360c)}.tm-quark-button_bg_1:active{background:-webkit-gradient(linear,left top,left bottom,from(#9c2500),to(#bf360c));background:linear-gradient(180deg,#9c2500 0,#bf360c)}.tm-quark-button_bg_2{background:-webkit-gradient(linear,left top,left bottom,from(#42a5f5),to(#2196f3));background:linear-gradient(180deg,#42a5f5 0,#2196f3)}.tm-quark-button_bg_2:focus,.tm-quark-button_bg_2:hover{background:-webkit-gradient(linear,left top,left bottom,from(#2196f3),to(#1976d2));background:linear-gradient(180deg,#2196f3 0,#1976d2)}.tm-quark-button_bg_2:active{background:-webkit-gradient(linear,left top,left bottom,from(#0d47a1),to(#1976d2));background:linear-gradient(180deg,#0d47a1 0,#1976d2)}.tm-quark-button_bg_3{background:-webkit-gradient(linear,left top,left bottom,from(#90a4ae),to(#78909c));background:linear-gradient(180deg,#90a4ae 0,#78909c)}.tm-quark-button_bg_3:focus,.tm-quark-button_bg_3:hover{background:-webkit-gradient(linear,left top,left bottom,from(#78909c),to(#546e7a));background:linear-gradient(180deg,#78909c 0,#546e7a)}.tm-quark-button_bg_3:active{background:-webkit-gradient(linear,left top,left bottom,from(#455a64),to(#546e7a));background:linear-gradient(180deg,#455a64 0,#546e7a)}.tm-quark-button_bg_facebook{background:-webkit-gradient(linear,left top,left bottom,from(#4f69a3),to(#415b93));background:linear-gradient(180deg,#4f69a3 0,#415b93)}.tm-quark-button_bg_facebook:focus,.tm-quark-button_bg_facebook:hover{background:-webkit-gradient(linear,left top,left bottom,from(#415b93),to(#324d89));background:linear-gradient(180deg,#415b93 0,#324d89)}.tm-quark-button_bg_facebook:active{background:-webkit-gradient(linear,left top,left bottom,from(#24407d),to(#324d89));background:linear-gradient(180deg,#24407d 0,#324d89)}.tm-quark-button_bg_google-plus{background:-webkit-gradient(linear,left top,left bottom,from(#db4937),to(#c43a2e));background:linear-gradient(180deg,#db4937 0,#c43a2e)}.tm-quark-button_bg_google-plus:focus,.tm-quark-button_bg_google-plus:hover{background:-webkit-gradient(linear,left top,left bottom,from(#c43a2e),to(#ba2b1f));background:linear-gradient(180deg,#c43a2e 0,#ba2b1f)}.tm-quark-button_bg_google-plus:active{background:-webkit-gradient(linear,left top,left bottom,from(#a91e13),to(#ba2b1f));background:linear-gradient(180deg,#a91e13 0,#ba2b1f)}.tm-quark-button_bg_twitter{background:-webkit-gradient(linear,left top,left bottom,from(#56acee),to(#4f9fdb));background:linear-gradient(180deg,#56acee 0,#4f9fdb)}.tm-quark-button_bg_twitter:focus,.tm-quark-button_bg_twitter:hover{background:-webkit-gradient(linear,left top,left bottom,from(#4f9fdb),to(#3a8ece));background:linear-gradient(180deg,#4f9fdb 0,#3a8ece)}.tm-quark-button_bg_twitter:active{background:-webkit-gradient(linear,left top,left bottom,from(#227abe),to(#3a8ece));background:linear-gradient(180deg,#227abe 0,#3a8ece)}.tm-quark-button_bg_pinterest{background:-webkit-gradient(linear,left top,left bottom,from(#e3262d),to(#cb2026));background:linear-gradient(180deg,#e3262d 0,#cb2026)}.tm-quark-button_bg_pinterest:focus,.tm-quark-button_bg_pinterest:hover{background:-webkit-gradient(linear,left top,left bottom,from(#cb2026),to(#b70f15));background:linear-gradient(180deg,#cb2026 0,#b70f15)}.tm-quark-button_bg_pinterest:active{background:-webkit-gradient(linear,left top,left bottom,from(#9f0006),to(#b70f15));background:linear-gradient(180deg,#9f0006 0,#b70f15)}.tm-quark-button_bg_vk{background:-webkit-gradient(linear,left top,left bottom,from(#5b7fa6),to(#346184));background:linear-gradient(180deg,#5b7fa6 0,#346184)}.tm-quark-button_bg_vk:focus,.tm-quark-button_bg_vk:hover{background:-webkit-gradient(linear,left top,left bottom,from(#346184),to(#1d4b6e));background:linear-gradient(180deg,#346184 0,#1d4b6e)}.tm-quark-button_bg_vk:active{background:-webkit-gradient(linear,left top,left bottom,from(#113b5a),to(#1d4b6e));background:linear-gradient(180deg,#113b5a 0,#1d4b6e)}.tm-quark-button:disabled{background:transparent;border:2px solid #b0bec5;cursor:not-allowed}.tm-quark-button:disabled:not(.tm-quark-button_width_square){color:#b0bec5}.tm-quark-button:disabled .tm-quark-button__icon-facebook:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='%23b0bec5'%3E%3Cpath d='M1.1 0C.5 0 0 .5 0 1.1v17.8c0 .6.5 1.1 1.1 1.1h9.6v-7.7H8.1V9.2h2.6V7c0-2.6 1.6-4 3.9-4 1.1 0 2 .1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 3.1h-2.6V20h5.1c.6 0 1.1-.5 1.1-1.1V1.1c0-.6-.5-1.1-1.1-1.1H1.1z'/%3E%3C/svg%3E\")}",""])},94:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},a=r(0),i=o(a),u=r(4),d=o(u),b=function(t){return i.default.createElement(d.default,n({widthType:"auto",heightType:"large",roundedType:"all",bgType:"2"},t))};e.default=b}})});