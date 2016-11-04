var tns=function(){"use strict";function t(t){function f(){return"gallery"===Ot||"page"===t.slideBy?jt:t.slideBy}function m(){if(Rt<=jt){Yt=!1;var n;yn="gallery"===Ot?0:an,yn!==n&&T.emit("indexChanged",gt()),fn&&c(fn),un&&c(un),It&&c(It)}else Yt=t.arrowKeys,dn&&u(fn),ln&&u(un),Cn&&u(It)}function y(){if(o(Ht,{"data-tns-role":"wrapper"}),o(qt,{"data-tns-role":"content-wrapper"}),"vertical"===Wt?o(qt,{"data-tns-hidden":"y"}):o(Ht,{"data-tns-hidden":"x"}),"carousel"===Ot){var t=Kt&&Xt?q():Xt?Xt+Ut:0;qt.style.cssText="horizontal"===Wt?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+Xt+"px; height: "+R()+"px;"}}function E(){Dt=qn(),jt=On(),At=rn-jt-bn,"horizontal"!==Wt||Kt||(nn=Wn()),Et=Hn(),Ft=f()}function A(){""===Bt.id&&(Bt.id=tn);var t="";if(Wt&&(t+=Wt+" "),Zt&&(t+="autoheight"),o(Bt,{"data-tns-role":"content","data-tns-mode":Ot,"data-tns-features":t}),"carousel"===Ot)if("horizontal"===Wt){var n="width: "+(nn+1)*rn+"px; ",e=-yn*nn,a=p?p+": translate3d("+e+"px, 0px, 0px)":"left: "+e+"px";Bt.style.cssText+=n+a}else{var i=-wt[yn];Bt.style.cssText+=p?p+": translate3d(0px, "+i+"px, 0px)":"top: "+i+"px"}}function D(){navigator.msMaxTouchPoints&&(Ht.classList.add("ms-touch"),h(Ht,["scroll",ct]))}function k(){for(var t=0;t<Rt;t++){var n=Gt[t];n.id=tn+"-item"+t,"gallery"===Ot&&Sn&&n.classList.add(Sn),o(n,{"aria-hidden":"true"});var e="horizontal"===Wt?"right":"bottom",a="";"carousel"===Ot&&(a="margin-"+e+": "+Ut+"px;"),"horizontal"===Wt&&(a="width: "+(nn-Ut)+"px; "+a),n.style.cssText+=a}if(Qt||Xt){for(var i=document.createDocumentFragment(),r=document.createDocumentFragment(),l=an;l--;){var c=l%Rt,u=Gt[c].cloneNode(!0);if(s(u,"id"),r.insertBefore(u,r.firstChild),"carousel"===Ot){var d=Gt[Rt-1-c].cloneNode(!0);s(d,"id"),i.appendChild(d)}}Bt.insertBefore(i,Bt.firstChild),Bt.appendChild(r),Gt=Bt.children}}function I(){ln&&(t.controlsContainer||(gn.append(Ht,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+tn+'" type="button">'+cn[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+tn+'" type="button">'+cn[1]+"</button></div>"),un=Ht.querySelector('[data-tns-role="controls"]')),Ct=un.querySelector('[data-controls="prev"]'),Mt=un.querySelector('[data-controls="next"]'),i(un,"tabindex")||(o(un,{"aria-label":"Carousel Navigation"}),o(un.children,{"aria-controls":tn,tabindex:"-1"})))}function L(){if(dn){if(!t.navContainer){for(var n="",e=0;e<Rt;e++)n+='<button data-slide="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+tn+"-item"+e+'" type="button"></button>';Cn&&(n+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+En[0]+"</button>"),n='<div data-tns-role="nav" aria-label="Carousel Pagination">'+n+"</div>",gn.append(Ht,n),fn=Ht.querySelector('[data-tns-role="nav"]')}if(Tt=fn.querySelectorAll("[data-slide]"),!i(fn,"aria-label")){o(fn,{"aria-label":"Carousel Pagination"});for(var a=0;a<Rt;a++)o(Tt[a],{tabindex:"-1","aria-selected":"false","aria-controls":tn+"-item"+a})}for(var r=Et;r<Rt;r++)o(Tt[r],{hidden:""});hn=Et}}function N(){Cn&&(fn||(gn.append(Ht,'<div data-tns-role="nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+En[0]+"</button></div>"),fn=Ht.querySelector('[data-tns-role="nav"]')),It=fn.querySelector("[data-action]"),nt())}function S(){for(var t=yn;t<yn+jt;t++){var n=Gt[t];o(n,{"aria-hidden":"false"}),"gallery"===Ot&&(n.style.marginLeft=nn*(t-yn)+"px",n.classList.remove(Sn),n.classList.add(Ln))}ln&&(o(Mt,{tabindex:"0"}),(yn===wn&&!Qt||Jt)&&(Ct.disabled=!0)),dn&&o(Tt[0],{tabindex:"0","aria-selected":"true"})}function z(){if("carousel"===Ot&&(b&&h(Bt,[b,J]),Dn&&h(Bt,[["touchstart",ut],["touchmove",dt],["touchend",ft],["touchcancel",ft]])),dn)for(var t=0;t<Rt;t++)h(Tt[t],[["click",tt],["keydown",lt]]);if(ln&&(h(Ct,[["click",$],["keydown",st]]),h(Mt,[["click",_],["keydown",st]])),Cn&&(h(It,["click",at]),ln&&(h(Ct,["click",it]),h(Mt,["click",it])),dn))for(var n=Rt;n--;)h(Tt[n],["click",it]);Yt&&h(document,["keydown",rt]),h(window,[["resize",xt],["scroll",bt]])}function P(){if(_t&&gn.isInViewport(Bt)){for(var t=[],n=yn-1;n<yn+jt+1;n++){for(var e=Gt[n].querySelectorAll('[data-tns-role="lazy-img"]'),a=e.length;a--;t.unshift(e[a]));t.unshift()}for(var i=t.length;i--;){var o=t[i];o.classList.contains("loaded")||(o.src=r(o,"data-src"),o.classList.add("loaded"))}}}function O(){if(Zt){for(var t=[],n=yn;n<yn+jt;n++)for(var e=Gt[n].querySelectorAll("img"),a=e.length;a--;)t.push(e[a]);0===t.length?B():W(t)}}function W(t){for(var n=t.length;n--;)d(t[n])&&t.splice(n,1);0===t.length?B():setTimeout(function(){W(t)},16)}function H(){gn.wrap(Bt,qt),gn.wrap(qt,Ht),E(),k(),"vertical"===Wt&&G(),y(),A(),D(),I(),L(),N(),S(),z(),m(),P(),O(),T.emit("initialized",gt())}function q(){return(Dt%Kt+Ut)/2}function B(){for(var t,n=[],e=yn;e<yn+jt;e++)n.push(Gt[e].offsetHeight);t=Math.max.apply(null,n),Bt.style.height!==t&&(g&&K(1),Bt.style.height=t+"px")}function G(){wt=[0];for(var t,n=Gt[0].getBoundingClientRect().top,e=1;e<rn;e++)t=Gt[e].getBoundingClientRect().top,wt.push(t-n)}function R(){return wt[yn+jt]-wt[yn]}function j(){Ht.style.msScrollSnapPointsX="snapInterval(0%, "+nn+")"}function F(){var t,n,e,a;yn!==xn&&(yn>xn?(t=xn,n=Math.min(xn+jt,yn),e=Math.max(xn+jt,yn),a=yn+jt):(t=Math.max(yn+jt,xn),n=xn+jt,e=yn,a=Math.min(yn+jt,xn))),Ft%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),a=Math.round(a));for(var i=t;i<n;i++)o(Gt[i],{"aria-hidden":"true"});for(var r=e;r<a;r++)o(Gt[r],{"aria-hidden":"false"})}function U(){dn&&(vn===-1?t.navContainer?pn=yn%Rt:(pn=Math.floor(yn%Rt/jt),Qt||Rt%jt===0||yn!==At||(pn+=1)):(pn=vn,vn=-1),pn!==mn&&(o(Tt[mn],{tabindex:"-1","aria-selected":"false"}),o(Tt[pn],{tabindex:"0","aria-selected":"true"}),mn=pn))}function X(){if(ln&&!Qt)if(yn===wn||!Jt&&yn===At){var t=yn===wn?Ct:Mt,n=yn===wn?Mt:Ct;ot(t,n),t.disabled=!0,o(t,{tabindex:"-1"}),n.disabled=!1,o(n,{tabindex:"0"})}else Ct.disabled=!1,Mt.disabled=!1}function K(t,n){t=0===t?"":Vt/1e3+"s",n=n||Bt,n.style[g]=t,"gallery"===Ot&&(n.style[w]=t),"vertical"===Wt&&(qt.style[g]=t)}function Y(t,n){g&&K(t),Bn(n)}function V(){o(Bt,{"aria-busy":"true"}),sn&&Gn(),yn!==xn&&T.emit("indexChanged",gt()),p&&T.emit("transitionStart",gt()),Y(),b||J()}function J(t){if(b&&T.emit("transitionEnd",gt(t)),"gallery"===Ot&&en.length>0)for(var n=0;n<jt;n++){var e=en[n];g&&K(0,e),zn&&x&&(e.style[x]=e.style[C]=""),e.classList.remove(Nn),e.classList.add(Sn),e.style.marginLeft=""}if(!b||t&&"height"!==t.propertyName){if(!sn){var a=yn;Gn(),yn!==a&&(Y(0),T.emit("indexChanged",gt()))}F(),U(),X(),P(),O(),s(Bt,"aria-busy"),Q()}}function Q(){xn=yn}function Z(t){"true"!==r(Bt,"aria-busy")&&(yn+=t*Ft,V())}function $(){Z(-1)}function _(){Z(Jt&&yn===At?-(At-wn)/Ft:1)}function tt(n){if("true"!==r(Bt,"aria-busy")){for(var e,a=n.target||n.srcElement;gn.indexOf(Tt,a)===-1;)a=a.parentNode;e=vn=Number(r(a,"data-slide")),yn=t.navContainer?e+an:e*jt+an,V()}}function nt(){kt=setInterval(function(){Z(Tn)},Mn),It.setAttribute("data-action","stop"),It.innerHTML="<span hidden>Stop Animation</span>"+En[1],An=!0}function et(){clearInterval(kt),It.setAttribute("data-action","start"),It.innerHTML="<span hidden>Stop Animation</span>"+En[0],An=!1}function at(){An?et():nt()}function it(){An&&et()}function rt(t){switch(t=t||window.event,t.keyCode){case M.LEFT:$();break;case M.RIGHT:_()}}function ot(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function st(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case M.LEFT:case M.UP:case M.HOME:case M.PAGEUP:e!==Ct&&Ct.disabled!==!0&&ot(e,Ct);break;case M.RIGHT:case M.DOWN:case M.END:case M.PAGEDOWN:e!==Mt&&Mt.disabled!==!0&&ot(e,Mt);break;case M.ENTER:case M.SPACE:e===Mt?_():$()}}function lt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,a=r(e,"data-slide");switch(n){case M.LEFT:case M.PAGEUP:a>0&&ot(e,e.previousElementSibling);break;case M.UP:case M.HOME:0!==a&&ot(e,Tt[0]);break;case M.RIGHT:case M.PAGEDOWN:a<Et-1&&ot(e,e.nextElementSibling);break;case M.DOWN:case M.END:a<Et-1&&ot(e,Tt[Et-1]);break;case M.ENTER:case M.SPACE:tt(t)}}function ct(){Y(0,Bt.scrollLeft()),Q()}function ut(t){var n=t.changedTouches[0];kn=parseInt(n.clientX),In=parseInt(n.clientY);var e="horizontal"===Wt?[12,-13]:[17,-8];Lt=Number(Bt.style[p].slice(e[0],e[1])),T.emit("touchStart",gt(t))}function dt(t){var n=t.changedTouches[0];if(Nt=parseInt(n.clientX)-kn,St=parseInt(n.clientY)-In,a(e(St,Nt),15)===Wt){zt=!0,t.preventDefault(),T.emit("touchMove",gt(t));var i=0,r=0;"horizontal"===Wt?i=Lt+Nt:r=Lt+St,K(0),Bt.style[p]="translate3d("+i+"px, "+r+"px, 0px"}}function ft(t){var n=t.changedTouches[0];if(Nt=parseInt(n.clientX)-kn,St=parseInt(n.clientY)-In,T.emit("touchEnd",gt(t)),zt){if(zt=!1,t.preventDefault(),"horizontal"===Wt)yn=-(Lt+Nt)/nn,yn=Nt>0?Math.floor(yn):Math.ceil(yn);else{var e=-(Lt+St);if(e<=0)yn=wn;else if(e>=wt[wt.length-1])yn=At;else{var a=0;do a++,yn=St<0?a+1:a;while(a<rn&&e>=Math.round(wt[a+1]))}}V()}}function ht(){Bt.style.width=(nn+1)*rn+"px";for(var t=rn;t--;)Gt[t].style.width=nn-Ut+"px"}function vt(){for(var t=yn+1,n=yn+jt;t<n;t++)Gt[t].style.marginLeft=nn*(t-yn)+"px"}function pt(){qt.style.cssText="margin: 0px "+q()+"px"}function mt(){qt.style.height=R()+"px"}function yt(){if(Et!==hn)if(Et>hn)for(var t=hn;t<Et;t++)s(Tt[t],"hidden");else for(var n=Et;n<hn;n++)o(Tt[n],{hidden:""});hn=Et}function gt(t){return{container:Bt,slideItems:Gt,navItems:Tt,prevButton:Ct,nextButton:Mt,items:jt,index:yn,indexCached:xn,navCurrent:pn,navCurrentCached:mn,slideCount:Rt,cloneCount:an,slideCountNew:rn,event:t||{}}}function xt(){clearTimeout(Pt),Pt=setTimeout(function(){if(Dt!==qn()){var n=yn,e=jt;E(),m(),Gn(),"horizontal"===Wt?Kt&&Xt?pt():(ht(),"gallery"===Ot&&vt()):(G(),mt()),yn!==n&&(T.emit("indexChanged",gt()),F(),Qt||X()),jt===e||t.navContainer||(yt(),U()),(yn!==n||"carousel"===Ot&&!Kt)&&Y(0),yn===n&&jt===e&&"gallery"!==Ot||(O(),P()),navigator.msMaxTouchPoints&&j()}},100)}function bt(){Pn||window.requestAnimationFrame(function(){P(),Pn=!1}),Pn=!0}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","pause"],animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{destory:function(){},events:T};var wt,Ct,Mt,Tt,Et,At,Dt,kt,It,Lt,Nt,St,zt,Pt,Ot=t.mode,Wt=t.axis,Ht=document.createElement("div"),qt=document.createElement("div"),Bt=t.container,Gt=Bt.children,Rt=Gt.length,jt=t.items,Ft=f(),Ut=t.gutter,Xt="gallery"!==Ot&&t.edgePadding,Kt=t.fixedWidth,Yt=t.arrowKeys,Vt=t.speed,Jt=t.rewind,Qt="gallery"===Ot||!t.rewind&&t.loop,Zt="gallery"===Ot||t.autoHeight,$t=!Kt&&t.responsive,_t=t.lazyload,tn=Bt.id||n(),nn=Kt||0,en=[],an=Qt?2*Rt:Xt?1:0,rn="gallery"===Ot?Rt+an:Rt+2*an,on=!(!Kt||Qt||Xt),sn="gallery"===Ot||!Qt,ln=t.controls,cn=t.controlsText,un=!!t.controlsContainer&&t.controlsContainer,dn=t.nav,fn=!!t.navContainer&&t.navContainer,hn=Rt,vn=-1,pn=0,mn=0,yn="gallery"===Ot?0:an,xn=yn,bn=Xt?1:0,wn=bn,Cn=t.autoplay,Mn=t.autoplayTimeout,Tn="forward"===t.autoplayDirection?1:-1,En=t.autoplayText,An=!1,Dn=t.touch,kn=0,In=0,Ln=w?t.animateIn:"tns-fadeIn",Nn=w?t.animateOut:"tns-fadeOut",Sn=w?t.animateNormal:"tns-normal",zn=!!w&&t.animateDelay,Pn=!1,On=function(){return Kt?function(){return Math.max(1,Math.min(Rt,Math.floor(Dt/Kt)))}:function(){var n=t.items,e="object"==typeof $t&&Object.keys($t);if(e)for(var a=0;a<e.length;a++)Dt>=e[a]&&(n=$t[e[a]]);return Math.max(1,Math.min(Rt,n))}}(),Wn=function(){return navigator.appVersion.indexOf("MSIE 8")>0?function(){return Math.round((Dt+Ut)/jt)}:function(){return(Dt+Ut)/jt}}(),Hn=function(){return t.navContainer?function(){return Rt}:function(){return Math.ceil(Rt/jt)}}(),qn=function(){return"horizontal"===Wt&&!Kt&&Xt?function(){return Ht.clientWidth-2*(Xt+Ut)}:function(){return Ht.clientWidth}}();H();var Bn=function(){return"carousel"===Ot?function(t){t||(t="horizontal"===Wt?-nn*yn:-wt[yn]),on&&yn===At&&(t=Math.max(t,-rn*nn+Dt+Ut));var n="translate3d(",e={x:[p,n,t,"px, 0px, 0px)"],y:[p,n+"0px, ",t,"px, 0px)"],l:["left","",t,"px"],t:["top","",t,"px"]},a="horizontal"===Wt?p?"x":"l":p?"y":"t";Bt.style[e[a][0]]=e[a][1]+e[a][2]+e[a][3],"vertical"===Wt&&(qt.style.height=R()+"px")}:function(){en=[],v(Gt[xn],[b,J]),h(Gt[yn],[b,J]),function(){for(var t=xn,n=xn+jt;t<n;t++){var e=Gt[t];if(g&&K(1,e),zn&&x){var a=zn*(t-xn)/1e3;e.style[x]=a+"s",e.style[C]=a+"s"}e.classList.remove(Ln),e.classList.add(Nn),en.push(e)}}(),function(){for(var t=yn,n=yn+jt;t<n;t++){var e=Gt[t];if(g&&K(1,e),zn&&x){var a=zn*(t-yn)/1e3;e.style[x]=a+"s",e.style[C]=a+"s"}e.classList.remove(Sn),e.classList.add(Ln),t>yn&&(e.style.marginLeft=(t-yn)*nn+"px")}}()}}(),Gn=function(){return Qt?function(){var t="carousel"===Ot?Ft+wn:wn,n="carousel"===Ot?At-Ft:At;if(yn>n)for(;yn>=t+Rt;)yn-=Rt;else if(yn<t)for(;yn<=n-Rt;)yn+=Rt}:function(){yn=Math.max(wn,Math.min(At,yn))}}();return{getInfo:gt,events:T,destory:function(){if(gn.unwrap(Ht),gn.unwrap(qt),Ht=qt=null,s(Bt,["id","style","data-tns-role","data-tns-features"]),Qt)for(var n=an;n--;)Gt[0].remove(),Gt[Gt.length-1].remove();s(Gt,["id","style","aria-hidden"]),tn=Rt=null,ln&&(t.controlsContainer?(s(un,["aria-label"]),s(un.children,["aria-controls","tabindex"]),l(un)):(un.remove(),un=Ct=Mt=null)),dn&&(t.navContainer?(s(fn,["aria-label"]),s(Tt,["aria-selected","aria-controls","tabindex"]),l(fn)):(fn.remove(),fn=null),Tt=null),Cn&&(t.navContainer||null===fn?l(It):(fn.remove(),fn=null)),l(Bt),Yt&&v(document,["keydown",rt]),v(window,[["resize",xt],["scroll",bt]])}}}function n(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function a(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function i(t,n){return t.hasAttribute(n)}function r(t,n){return t.getAttribute(n)}function o(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var a in n)t[e].setAttribute(a,n[a])}function s(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,a=t.length;a--;)for(var i=e;i--;)t[a].removeAttribute(n[i])}function l(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function c(t){i(t,"hidden")||o(t,{hidden:""})}function u(t){i(t,"hidden")&&s(t,"hidden")}function d(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(t){var n,e=document.createElement("fakeelement");for(n in t)if(void 0!==e.style[n])return[n,t[n][0],t[n][1]];return!1}function h(t,n){function e(n){t.addEventListener(n[0],n[1],!1)}if(Array.isArray(n))if(Array.isArray(n[0]))for(var a=n.length;a--;)e(n[a]);else e(n)}function v(t,n){function e(n){t.removeEventListener(n[0],n[1],!1)}if(Array.isArray(n))if(Array.isArray(n[0]))for(var a=n.length;a--;)e(n[a]);else e(n)}var p=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),m={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","oTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","webkitTransitionEnd"]},y={animationDuration:["animationDelay"],WebkitAnimationDuration:["WebkitAnimationDelay"],MozAnimationDuration:["MozAnimationDelay"],OAnimationDuration:["OAnimationDelay"]},g=f(m)[0],x=f(m)[1],b=f(m)[2],w=f(y)[0],C=f(y)[1],M={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},T={events:{},on:function(t,n){this.events[t]=this.events[t]||[],this.events[t].push(n)},off:function(t,n){if(this.events[t])for(var e=0;e<this.events[t].length;e++)if(this.events[t][e]===n){this.events[t].splice(e,1);break}},emit:function(t,n){this.events[t]&&this.events[t].forEach(function(t){t(n)})}};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
