var ECL=function(e){"use strict";var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))};return e.dialogs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.triggerElementsSelector,i=void 0===n?"[data-ecl-dialog]":n,r=e.dialogWindowId,d=void 0===r?"ecl-dialog":r,c=e.dialogOverlayId,l=void 0===c?"ecl-overlay":c;if(!("querySelector"in document&&"addEventListener"in window))return null;var a=t(i),o=document.getElementById(d),u=document.getElementById(l);if(!u){var s=document.createElement("div");s.setAttribute("id","ecl-overlay"),s.setAttribute("class","ecl-dialog__overlay"),s.setAttribute("aria-hidden","true"),document.body.appendChild(s),u=s}var v=[].slice.call(t('\n        a[href],\n        area[href],\n        input:not([disabled]),\n        select:not([disabled]),\n        textarea:not([disabled]),\n        button:not([disabled]),\n        [tabindex="0"]\n      ',o)),f=null,m=v[0],b=v[v.length-1];function h(e){e.preventDefault(),o.setAttribute("aria-hidden",!0),u.setAttribute("aria-hidden",!0),f&&f.focus(),document.querySelector("body").classList.remove("ecl-u-disablescroll")}function E(e){switch(e.keyCode){case 9:if(1===v.length){e.preventDefault();break}e.shiftKey?document.activeElement===m&&(e.preventDefault(),b.focus()):document.activeElement===b&&(e.preventDefault(),m.focus());break;case 27:h()}}function g(e){e.preventDefault(),o.setAttribute("aria-hidden",!1),u.setAttribute("aria-hidden",!1),f=document.activeElement,m.focus(),u.addEventListener("click",h),o.addEventListener("keydown",E),document.querySelector("body").classList.add("ecl-u-disablescroll")}function y(){a.length&&(a.forEach(function(e){return e.addEventListener("click",g)}),t(".ecl-message__dismiss").forEach(function(e){e.addEventListener("click",h)}))}return y(),{init:y,destroy:function(){a.forEach(function(e){return e.removeEventListener("click",g)}),t(".ecl-message__dismiss").forEach(function(e){e.removeEventListener("click",h)})}}},e}({});
