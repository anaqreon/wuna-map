function scrollFunction(){mybutton=document.getElementById("scroll"),document.body.scrollTop>50||document.documentElement.scrollTop>50?mybutton.style.display="block":mybutton.style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.matchMedia=window.matchMedia||function(e,t){var n,i=e.documentElement,s=i.firstElementChild||i.firstChild,o=e.createElement("body"),a=e.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(a),function(e){return a.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',i.insertBefore(o,s),n=42==a.offsetWidth,i.removeChild(o),{matches:n,media:e}}}(document),function(e){if(e.respond={},respond.update=function(){},respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,!respond.mediaQueriesSupported){var t,n,i,s=e.document,o=s.documentElement,a=[],r=[],l=[],d={},m=s.getElementsByTagName("head")[0]||o,c=s.getElementsByTagName("base")[0],u=m.getElementsByTagName("link"),h=[],p=function(){for(var t,n,i,s,o=u,a=o.length,r=0;r<a;r++)n=(t=o[r]).href,i=t.media,s=t.rel&&"stylesheet"===t.rel.toLowerCase(),n&&s&&!d[n]&&(t.styleSheet&&t.styleSheet.rawCssText?(g(t.styleSheet.rawCssText,n,i),d[n]=!0):(/^([a-zA-Z:]*\/\/)/.test(n)||c)&&n.replace(RegExp.$1,"").split("/")[0]!==e.location.host||h.push({href:n,media:i}));v()},v=function(){if(h.length){var e=h.shift();E(e.href,function(t){g(t,e.href,e.media),d[e.href]=!0,v()})}},g=function(e,t,n){var i,s,o,l,d,m=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),c=m&&m.length||0,u=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},h=!c&&n,p=0;for((t=t.substring(0,t.lastIndexOf("/"))).length&&(t+="/"),h&&(c=1);p<c;p++)for(i=0,h?(s=n,r.push(u(e))):(s=m[p].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,r.push(RegExp.$2&&u(RegExp.$2))),d=(l=s.split(",")).length;i<d;i++)o=l[i],a.push({media:o.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:r.length-1,hasquery:o.indexOf("(")>-1,minw:o.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:o.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")});y()},f=function(){var e,t=s.createElement("div"),n=s.body,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||((n=a=s.createElement("body")).style.background="none"),n.appendChild(t),o.insertBefore(n,o.firstChild),e=t.offsetWidth,a?o.removeChild(n):n.removeChild(t),e=i=parseFloat(e)},y=function(e){var d=o.clientWidth,c="CSS1Compat"===s.compatMode&&d||s.body.clientWidth||d,h={},p=u[u.length-1],v=(new Date).getTime();if(e&&t&&v-t<30)return clearTimeout(n),void(n=setTimeout(y,30));for(var g in t=v,a){var E=a[g],w=E.minw,x=E.maxw,b=null===w,T=null===x;w&&(w=parseFloat(w)*(w.indexOf("em")>-1?i||f():1)),x&&(x=parseFloat(x)*(x.indexOf("em")>-1?i||f():1)),E.hasquery&&(b&&T||!(b||c>=w)||!(T||c<=x))||(h[E.media]||(h[E.media]=[]),h[E.media].push(r[E.rules]))}for(var g in l)l[g]&&l[g].parentNode===m&&m.removeChild(l[g]);for(var g in h){var C=s.createElement("style"),B=h[g].join("\n");C.type="text/css",C.media=g,m.insertBefore(C,p.nextSibling),C.styleSheet?C.styleSheet.cssText=B:C.appendChild(s.createTextNode(B)),l.push(C)}},E=function(e,t){var n=w();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!=n.readyState||200!=n.status&&304!=n.status||t(n.responseText)},4!=n.readyState&&n.send(null))},w=function(){var e=!1;try{e=new XMLHttpRequest}catch(t){e=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}();p(),respond.update=p,e.addEventListener?e.addEventListener("resize",x,!1):e.attachEvent&&e.attachEvent("onresize",x)}function x(){y(!0)}}(this),window.addEventListener("scroll",scrollFunction);var slideOpen=!0,heightChecked=!1,initHeight=0,intval=null;function slideToggle(){window.clearInterval(intval);var e=document.getElementById("main-nav");if(heightChecked||(initHeight=e.offsetHeight,heightChecked=!0),slideOpen){var t=initHeight;slideOpen=!1,intval=setInterval(function(){t--,e.style.height=t+"px",t<=0&&window.clearInterval(intval)},1)}else{t=0;slideOpen=!0,intval=setInterval(function(){t++,e.style.height=t+"px",t>=initHeight&&window.clearInterval(intval)},1)}}!function(){var e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,n=navigator.userAgent.toLowerCase().indexOf("msie")>-1;if((e||t||n)&&void 0!==document.getElementById){var i=window.addEventListener?"addEventListener":"attachEvent";window[i]("hashchange",function(){var e=document.getElementById(location.hash.substring(1));e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1)}}(),function(){var e,t,n=document.getElementsByClassName("responsive-header"),i=document.getElementsByClassName("main-nav");(i=i[0]).insertAdjacentHTML("beforeend",'<a id="responsive_menu_button"></a>'),i.insertAdjacentHTML("afterbegin",'<div id="responsive_current_menu_item">Home</div>'),n&&(e=document.getElementById("responsive_menu_button"),t=i.getElementsByTagName("ul")[0],e&&(t&&t.childNodes.length||(e.style.display="none"),window.addEventListener("resize",function(){screen.width>650&&(document.getElementById("responsive_menu_button").classList.remove("responsive-toggle-open"),document.querySelector(".js .main-nav .menu").style.display="block");screen.width<650&&(document.querySelector(".js .main-nav .menu").style.display="none")}),document.getElementById("responsive_menu_button").addEventListener("click",function(){-1===t.className.indexOf("menu")&&(t.className="menu"),-1!==document.getElementById("responsive_menu_button").className.indexOf("responsive-toggle-open")?(document.getElementById("responsive_menu_button").classList.remove("responsive-toggle-open"),document.querySelector(".js .main-nav .menu").style.display="none"):(document.getElementById("responsive_menu_button").classList.add("responsive-toggle-open"),document.querySelector(".js .main-nav .menu").style.display="block")})))}();
