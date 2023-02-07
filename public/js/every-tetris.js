(()=>{"use strict";const e={tree:[[[1,0],[0,1],[1,1],[2,1]],[[1,0],[0,1],[1,1],[1,2]],[[2,1],[0,1],[1,1],[1,2]],[[2,1],[1,2],[1,1],[1,0]]],square:[[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]]],bar:[[[1,0],[2,0],[3,0],[4,0]],[[2,-1],[2,0],[2,1],[2,2]],[[1,0],[2,0],[3,0],[4,0]],[[2,-1],[2,0],[2,1],[2,2]]],zee:[[[0,0],[1,0],[1,1],[2,1]],[[0,1],[1,0],[1,1],[0,2]],[[0,0],[1,0],[1,1],[2,1]],[[0,1],[1,0],[1,1],[0,2]]],rightAngle:[[[2,0],[0,1],[1,1],[2,1]],[[0,0],[0,1],[0,2],[1,2]],[[0,0],[1,0],[2,0],[0,1]],[[0,0],[1,0],[1,1],[1,2]]],leftAngle:[[[0,0],[0,1],[1,1],[2,1]],[[1,0],[1,1],[1,2],[0,2]],[[0,1],[1,1],[2,1],[2,2]],[[1,0],[2,0],[1,1],[1,2]]]};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.src=n,this.volume=r,this.loop=o,this.audioDOM=null,this.finish=!1}var t,r;return t=e,(r=[{key:"init",value:function(){if(this.finish)return!1;var e=document.createElement("audio");e.src=this.src,e.hidden=!0,e.volume=this.volume,e.id=this.id,e.loop=this.loop,this.audioDOM=e,document.body.appendChild(this.audioDOM)}},{key:"startMusic",value:function(){this.audioDOM.play()}},{key:"pauseMusic",value:function(){this.audioDOM.pause()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=document.querySelector(".playground > ul"),a=document.querySelector(".gameOver"),l=document.querySelector(".score"),d=document.querySelector(".starWrapper"),f=document.querySelector(".gameOver > button"),m=document.querySelector(".on"),p=document.querySelector(".off"),y=Object.entries(e),v=20,h=10,b={easy:{duration:1e3},nomal:{duration:500},hard:{duration:200},hell:{duration:100}},g=20,L=30,w=40,O=new r("bgm","asset/bgm/dreams.mp3",.5,!0);m.addEventListener("click",(function(){O.pauseMusic(),m.classList.add("hidden"),p.classList.remove("hidden")})),p.addEventListener("click",(function(){O.startMusic(),p.classList.add("hidden"),m.classList.remove("hidden")})),O.init();var S,E,j="easy",k=0,P={type:"zee",direction:0,top:0,left:3};function M(){E=c({},P);for(var e=0;e<v;e++)q();A()}function T(){u.innerHTML="",a.style.display="none",j="easy",k=0,l.innerHTML=k,M()}function q(){for(var e=document.createElement("li"),t=document.createElement("ul"),n=0;n<h;n++){var r=document.createElement("li");t.prepend(r)}e.prepend(t),u.prepend(e)}function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=E,r=n.type,o=n.direction,i=n.top,s=n.left;document.querySelectorAll(".moving").forEach((function(e){e.classList.remove(r,"moving")})),e[r][o].some((function(e){var n=e[0]+s,o=e[1]+i,f=u.childNodes[o]?u.childNodes[o].childNodes[0].childNodes[n]:null,m=function(e){return!(!e||e.classList.contains("seized"))}(f);if(!m)return E=c({},P),"retry"===t&&(clearInterval(S),function(){a.style.display="flex";window.addEventListener("keydown",(function e(t){"Enter"===t.code&&(T(),window.removeEventListener("keydown",e))}))}()),setTimeout((function(){D("retry"),"top"===t&&(document.querySelectorAll(".moving").forEach((function(e){e.classList.remove("moving"),e.classList.add("seized")})),function(){var e=u.childNodes,t=0;if(e.forEach((function(e){var n=!0;e.children[0].childNodes.forEach((function(e){e.classList.contains("seized")||(n=!1)})),n&&(e.remove(),q(),t++)})),t){var n=function(e){return e<2?1:e<=3?2:5}(t);switch(k+=t*n,l.innerText=k,n){case 1:l.classList.add("mutiple1"),d.classList.remove("hidden"),setTimeout((function(){l.classList.remove("mutiple1")}),300),setTimeout((function(){d.classList.add("hidden")}),1200);break;case 2:l.classList.add("mutiple2"),d.classList.remove("hidden"),setTimeout((function(){l.classList.remove("mutiple2")}),300),setTimeout((function(){d.classList.add("hidden")}),1200);break;case 5:l.classList.add("mutiple5"),d.classList.remove("hidden"),setTimeout((function(){l.classList.remove("mutiple5")}),300),setTimeout((function(){d.classList.add("hidden")}),1200)}j=function(e){return e<g?"easy":e<L?"nomal":e<w?"hard":"hell"}(k)}A()}())}),0),!0;f.classList.add(r,"moving")})),P.left=s,P.top=i,P.direction=o}function A(){clearInterval(S),S=setInterval((function(){N("top",1)}),b[j].duration);var e=Math.floor(Math.random()*y.length);P.type=y[e][0],P.top=0,P.left=3,P.direction=0,E=c({},P),D()}function N(e,t){E[e]+=t,D(e)}M(),document.addEventListener("keydown",(function(e){switch(e.code){case"ArrowUp":3===E.direction?E.direction=0:E.direction+=1,D();break;case"ArrowRight":N("left",1);break;case"ArrowLeft":N("left",-1);break;case"ArrowDown":N("top",1);break;case"Space":clearInterval(S),S=setInterval((function(){N("top",1)}),10)}})),f.addEventListener("click",(function(){T()}))})();