const t=document.querySelector("button[data-start]"),e=document.body;t.addEventListener("click",(()=>{t.setAttribute("disabled",""),d.removeAttribute("disabled",""),timerId=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)}));const d=document.querySelector("button[data-stop]");d.setAttribute("disabled",""),d.addEventListener("click",(()=>{clearInterval(timerId),t.removeAttribute("disabled",""),d.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.e55d81be.js.map