var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector(".feedback-form"),n=t.querySelector("input"),r=t.querySelector("textarea");var o={},i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function y(e){return l=e,u=setTimeout(j,t),c?v(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function j(){var e=p();if(h(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function S(e){return u=void 0,d&&r?v(e):(r=o=void 0,a)}function w(){var e=p(),n=h(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return y(f);if(s)return u=setTimeout(j,t),v(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=T(t)||0,b(n)&&(c=!!n.leading,i=(s="maxWait"in n)?g(T(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},w.flush=function(){return void 0===u?a:S(p())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}o=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};let h=localStorage.getItem("feedback-form-state"),j={};try{null!==h&&(j=JSON.parse(h))}catch(e){console.log(e.name),console.log(e.message)}void 0!==j.email&&(n.value=j.email),void 0!==j.message&&(r.value=j.message),t.addEventListener("input",o((e=>{"INPUT"===e.target.nodeName&&(j.email=e.target.value),"TEXTAREA"===e.target.nodeName&&(j.message=e.target.value);let t=JSON.stringify(j);localStorage.setItem("feedback-form-state",t)}),500)),t.addEventListener("submit",(e=>{e.preventDefault(),""!==n.value&&""!==r.value&&(e.currentTarget.reset(),localStorage.clear(),console.log(j))}));
//# sourceMappingURL=03-feedback.221b36c4.js.map