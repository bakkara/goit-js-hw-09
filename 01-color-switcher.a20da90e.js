const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;function d(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){t.disabled=!0,n=setInterval(d,1e3),e.disabled=!1})),e.addEventListener("click",(function(){e.disabled=!0,clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.a20da90e.js.map