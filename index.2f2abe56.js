var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},t=e.parcelRequirec771;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){a[e]=r},e.parcelRequirec771=t);var n,o=(n=t("6XWwP"))&&n.__esModule?n:{default:n},l=t("bijrG"),i={};Object.defineProperty(i,"__esModule",{value:!0}),i.torosYvacas=function(e,r,a){var t=new u.default(e,a),n=new u.default(r),o="";if(void 0===n.getcodigolength())return 0;for(var l=0;l<n.getcodigolength();l++)if(t.separarClave()[l]===n.separarClave()[l]&&(o+="!"),parseInt(t.separarClave()[l])===parseInt(n.separarClave()[l])-1||parseInt(t.separarClave()[l])===parseInt(n.separarClave()[l])+1)o+="#";else for(var i=0;i<n.getcodigolength();i++)t.separarClave()[l]===n.separarClave()[i]&&(o+="*");return o},i.victoria=function(e){if("!!!!"===e)return!0};var u=function(e){return e&&e.__esModule?e:{default:e}}(t("6XWwP"));var d=document.querySelector("#codigoIntento"),s=document.querySelector("#formAdivinar"),f=document.querySelector("#resultado-div2");s.addEventListener("submit",(function(e){e.preventDefault();new o.default(d.value);f.innerHTML="<p>Muestra resultado"+l.CSG.getClave()+"</p>"}));
//# sourceMappingURL=index.2f2abe56.js.map
