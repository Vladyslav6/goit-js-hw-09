var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");const i=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');function a(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}i.addEventListener("submit",(function(e){e.preventDefault();let o=d.valueAsNumber,t=u.valueAsNumber,n=l.valueAsNumber;for(let e=1;e<=o;e+=1)a(e,n).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),n+=t;document.querySelector(".form").reset()}));
//# sourceMappingURL=03-promises.938b06b6.js.map