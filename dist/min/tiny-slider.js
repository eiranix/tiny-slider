var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=k.style.overflow,e.style.background="",e.style.overflow=k.style.overflow="hidden",k.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),k.style.overflow=t,k.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function d(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function f(e,t){return e.className.indexOf(t)>=0}function v(e,t){f(e,t)||(e.className+=" "+t)}function h(e,t){f(e,t)&&(e.className=e.className.replace(t,""))}function p(e,t){return e.hasAttribute(t)}function m(e,t){return e.getAttribute(t)}function y(e){return void 0!==e.item}function g(e,t){if(e=y(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function x(e,t){e=y(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function b(e){p(e,"hidden")||g(e,{hidden:""})}function T(e){p(e,"hidden")&&x(e,"hidden")}function E(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function C(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function w(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function D(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&I;e.addEventListener(n,t[n],i)}}function O(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&I;e.removeEventListener(n,t[n],i)}}function N(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function A(e,t,n,i,a,r,o){function s(){r-=l,u+=d,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var k=document.documentElement,P=!1;try{var M=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,M)}catch(e){}var I=!!P&&{passive:!0},W=navigator.userAgent,S=!0,L=localStorage;try{L.tnsApp?L.tnsApp!==W&&(L.tnsApp=W,["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){L.removeItem(e)})):L.tnsApp=W}catch(e){S=!1}var H=document,R=window,B={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},z=t(L.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),S),j=t(L.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),S),q=t(L.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),S),G=t(L.tTf)||n("tTf",C(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),S),F=t(L.tTDu)||n("tTDu",C(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),S),U=t(L.tTDe)||n("tTDe",C(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),S),V=t(L.tADu)||n("tADu",C(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),S),X=t(L.tADe)||n("tADe",C(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),S),K=t(L.tTE)||n("tTE",w(F,"Transition"),S),Y=t(L.tAE)||n("tAE",w(V,"Animation"),S);return q||(j=!1),function(t){function n(e){var n=t[e];return!n&&st&&ot.indexOf(e)>=0&&st.forEach(function(t){rt[t][e]&&(n=!0)}),n}function a(e,n){n=n?n:at;var i;if("items"===e&&a("fixedWidth"))i=Math.floor(n/(a("fixedWidth")+a("gutter")));else if("slideBy"!==e||Ve)if("edgePadding"!==e||Ve)if("autoHeight"!==e||Ve&&"outer"!==mt){if(i=t[e],st&&ot.indexOf(e)>=0)for(var r=0,o=st.length;r<o;r++){var s=st[r];if(!(n>=s))break;e in rt[s]&&(i=rt[s][e])}}else i=!0;else i=!1;else i="page";return"items"===e&&(i=Math.max(1,Math.min(it,i))),"slideBy"===e&&"page"===i&&(i=a("items")),i}function r(e){return z?z+"("+100*e+"% / "+kt+")":100*e/kt+"%"}function o(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(at%(n+t)+t)/2+"px":Ze?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r=Ze?"right":"bottom";i="margin-"+r+": -"+t+"px;"}return i}function y(e,t,n){n=Math.min(it,n);return e?(e+t)*kt+"px":z?z+"("+100*kt+"% / "+n+")":100*kt/n+"%"}function C(e,t,n){n=Math.min(it,n);var i="";if(Ze){if(i="width:",e)i+=e+t+"px";else{var a=Ve?kt:Math.min(it,n);i+=z?z+"(100% / "+a+")":100/a+"%"}i+=Yt+";"}return i}function w(e){var t="";if(e!==!1){t=(Ze?"padding-":"margin-")+(Ze?"right":"bottom")+": "+e+"px;"}return t}function k(e){e=e||R.event,clearTimeout(ft),ft=setTimeout(function(){at!==$e.clientWidth&&(P(),"outer"===mt&&Gt.emit("outerResized",je(e)))},100)}function P(){var e=lt,n=Lt,i=ht,r=Kt;if(at=$e.clientWidth,Je=_e.clientWidth,st&&(lt=M()),e!==lt||xt){var s=bt,u=wt,d=xt,f=gt,v=yt,h=Xt,p=lt>0?rt[st[lt-1]]:t;if(ht=a("items"),pt=a("slideBy"),Xt=a("disable"),Kt=!!Xt||it<=ht,ht!==i&&(zt=kt-ht-Rt,Vn()),Xt!==h&&W(Xt),Kt!==r&&Kt&&(Lt=Ve?At:0),e!==lt&&(Tt=p.speed||a("speed"),gt=p.edgePadding||a("edgePadding"),yt=p.gutter||a("gutter"),xt=p.fixedWidth||a("fixedWidth"),Xt||xt===d||ue(),(wt=a("autoHeight"))!==u&&(wt||(_e.style.height=""))),bt=!Kt&&(p.arrowKeys||a("arrowKeys")),bt!==s&&(bt?D(H,_t):O(H,_t)),nn){var m=vn,g=hn;vn=!Kt&&(p.controls||a("controls")),hn=p.controlsText||a("controlsText"),vn!==m&&(vn?T(pn):b(pn)),hn!==g&&(cn.innerHTML=hn[0],un.innerHTML=hn[1])}if(an){var x=yn;yn=!Kt&&(p.nav||a("nav")),yn!==x&&(yn?(T(gn),ze()):b(gn))}if(on){var E=jn;jn=!Kt&&(p.touch||a("touch")),jn!==E&&Ve&&(jn?D(et,en):O(et,en))}if(sn){var N=Fn;Fn=!Kt&&(p.mouseDrag||a("mouseDrag")),Fn!==N&&Ve&&(Fn?D(et,tn):O(et,tn))}if(rn){var A=On,k=Pn,P=Ln,S=kn;if(Kt?On=Pn=Ln=!1:(On=p.autoplay||a("autoplay"),On?(Pn=p.autoplayHoverPause||a("autoplayHoverPause"),Ln=p.autoplayResetOnVisibility||a("autoplayResetOnVisibility")):Pn=Ln=!1),kn=p.autoplayText||a("autoplayText"),Nn=p.autoplayTimeout||a("autoplayTimeout"),On!==A&&(On?(Mn&&T(Mn),In||be()):(Mn&&b(Mn),In&&Te())),Pn!==k&&(Pn?D(et,Zt):O(et,Zt)),Ln!==P&&(Ln?D(H,$t):O(H,$t)),Mn&&kn!==S){var L=On?1:0,R=Mn.innerHTML,B=R.length-S[L].length;R.substring(B)===S[L]&&(Mn.innerHTML=R.substring(0,B)+kn[L])}}if(!q){gt===f&&yt===v||(_e.style.cssText=o(gt,yt,xt)),Ve&&Ze&&(xt!==d||yt!==v||ht!==i)&&(et.style.width=y(xt,yt,ht));var z=C(xt,yt,ht);yt!==v&&(z+=w(yt)),z.length>0&&(Dt.removeRule(c(Dt)-1),l(Dt,"#"+Vt+" > .tns-item",z,c(Dt))),xt||Lt!==n||fe(0)}Lt!==n&&(Gt.emit("indexChanged",je()),fe(0),Ht=Lt),ht!==i&&($(),J(),navigator.msMaxTouchPoints&&te())}Ze||Xt||(ee(),Re(),ue()),I(),J()}function M(){return lt=0,st.forEach(function(e,t){at>=e&&(lt=t+ct)}),lt}function I(){if(xt&&At){var e="tns-transparent";if(Kt){if(!f(nt[0],e)){gt&&(_e.style.margin="0");for(var t=At;t--;)v(nt[t],e),v(nt[kt-t-1],e)}}else if(gt&&(at<=xt+yt?"0px"!==_e.style.margin&&(_e.style.margin="0"):_e.style.cssText=o(gt,yt,xt)),f(nt[0],e))for(var t=At;t--;)h(nt[t],e),h(nt[kt-t-1],e)}}function W(e){var t=nt.length;if(e){if(Dt.disabled=!0,et.className=et.className.replace(Ut.substring(1),""),et.style="",Ct)for(var n=At;n--;)Ve&&b(nt[n]),b(nt[t-n-1]);if(Ze&&Ve||(_e.style=""),!Ve)for(var i=Lt;i<Lt+it;i++){var a=nt[i];a.style="",h(a,Xe),h(a,Qe)}}else{if(Dt.disabled=!1,et.className+=Ut,Ze||ee(),ue(),Ct)for(var n=At;n--;)Ve&&T(nt[n]),T(nt[t-n-1]);if(!Ve)for(var i=Lt;i<Lt+it;i++){var a=nt[i],r=i<Lt+ht?Xe:Qe;a.style.left=100*(i-Lt)/ht+"%",v(a,r)}}}function S(){In&&(Te(),Wn=!0)}function L(){!In&&Wn&&(be(),Wn=!1)}function Q(){if(Ot&&!Xt){var e=Lt,t=Lt+ht;for(gt&&(e-=1,t+=1);e<t;e++)[].forEach.call(nt[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[K]=function(e){e.stopPropagation()},D(e,t),f(e,"loaded")||(e.src=m(e,"data-src"),v(e,"loaded"))})}}function J(){if(wt&&!Xt){for(var e=[],t=Lt;t<Lt+ht;t++)[].forEach.call(nt[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?_():Z(e)}}function Z(e){e.forEach(function(t,n){E(t)&&e.splice(n,1)}),0===e.length?_():setTimeout(function(){Z(e)},16)}function $(){Q(),ne(),se(),ze(),ie()}function _(){for(var e,t=[],n=Lt;n<Lt+ht;n++)t.push(nt[n].offsetHeight);e=Math.max.apply(null,t),_e.style.height!==e&&(F&&le(Tt),_e.style.height=e+"px")}function ee(){dt=[0];for(var e,t=nt[0].getBoundingClientRect().top,n=1;n<kt;n++)e=nt[n].getBoundingClientRect().top,dt.push(e-t)}function te(){$e.style.msScrollSnapPointsX="snapInterval(0%, "+100/ht+"%)"}function ne(){for(var e=kt;e--;){var t=nt[e];e>=Lt&&e<Lt+ht?p(t,"tabindex")&&(g(t,{"aria-hidden":"false"}),x(t,["tabindex"]),v(t,ln)):(p(t,"tabindex")||g(t,{"aria-hidden":"true",tabindex:"-1"}),f(t,ln)&&h(t,ln))}}function ie(){if(yn&&(En=Tn!==-1?Tn:(Lt-Rt)%it,Tn=-1,En!==Cn)){var e=mn[Cn],t=mn[En];g(e,{tabindex:"-1","aria-selected":"false"}),g(t,{tabindex:"0","aria-selected":"true"}),h(e,wn),v(t,wn)}}function ae(e){return"button"===e.nodeName.toLowerCase()}function re(e){return"true"===e.getAttribute("aria-disabled")}function oe(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function se(){if(vn&&!Ct){var e=dn?cn.disabled:re(cn),t=fn?un.disabled:re(un),n=Lt===Bt,i=!Et&&Lt===zt;n&&!e&&oe(dn,cn,!0),!n&&e&&oe(dn,cn,!1),i&&!t&&oe(fn,un,!0),!i&&t&&oe(fn,un,!1)}}function le(e,t){e=e?e/1e3+"s":"",t=t||et,t.style[F]=e,Ve||(t.style[V]=e),Ze||(_e.style[F]=e)}function ce(){var e;if(Ze)if(xt)e=-(xt+yt)*Lt+"px";else{var t=G?kt:ht;e=100*-Lt/t+"%"}else e=-dt[Lt]+"px";return e}function ue(e){e||(e=ce()),et.style[It]=Wt+e+St}function de(e,t,n,i){for(var a=e,r=e+ht;a<r;a++){var o=nt[a];i||(o.style.left=100*(a-Lt)/ht+"%"),F&&le(Tt,o),Ye&&U&&(o.style[U]=o.style[X]=Ye*(a-e)/1e3+"s"),h(o,t),v(o,n),i&&Nt.push(o)}}function fe(e,t){void 0===e&&(e=Tt),F&&le(e),Xn(e,t)}function ve(){Mt&&Vn(),Lt!==Ht&&(Gt.emit("indexChanged",je()),Gt.emit("transitionStart",je()),jt=!0,fe())}function he(e){return e.toLowerCase().replace(/-/g,"")}function pe(e){if(Ve||jt){if(Gt.emit("transitionEnd",je(e)),!Ve&&Nt.length>0)for(var t=0;t<ht;t++){var n=Nt[t];n.style.left="",F&&le(0,n),Ye&&U&&(n.style[U]=n.style[X]=""),h(n,Ke),v(n,Qe)}if(!e||!Ve&&e.target.parentNode===et||e.target===et&&he(e.propertyName)===he(It)){if(!Mt){var i=Lt;Vn(),Lt!==i&&(Gt.emit("indexChanged",je()),F&&le(0),ue())}J(),"inner"===mt&&Gt.emit("innerLoaded",je()),jt=!1,Cn=En,Ht=Lt}}}function me(e){if(!Kt)if("prev"===e)ye(null,-1);else if("next"===e)ye(null,1);else if(!jt){var t=Lt%it,i=0;if(!Ct&&n("edgePadding")&&t--,t<0&&(t+=it),"first"===e)i=-t;else if("last"===e)i=it-ht-t;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%it;a<0&&(a+=it),!Ct&&gt&&(a+=1),i=a-t}Lt+=i,Lt%it!=Ht%it&&ve()}}function ye(e,t){if(!jt){if(!t){e=e||R.event;for(var n=e.target||e.srcElement;n!==pn&&[cn,un].indexOf(n)<0;)n=n.parentNode;n===cn?t=-1:n===un&&(t=1)}t===-1?Lt-=pt:1===t&&(Et&&Lt===zt?me(0):Lt+=pt),ve()}}function ge(e){if(!jt){e=e||R.event;for(var t,n=e.target||e.srcElement;n!==gn&&!p(n,"data-nav");)n=n.parentNode;p(n,"data-nav")&&(t=Tn=[].indexOf.call(mn,n),me(t))}}function xe(e,t){g(Mn,{"data-action":e}),Mn.innerHTML=Sn[0]+e+Sn[1]+t}function be(){Ce(),Mn&&xe("stop",kn[1]),In=!0}function Te(){Ee(),Mn&&xe("start",kn[0]),In=!1}function Ee(){In="paused",clearInterval(Dn)}function Ce(){In!==!0&&(clearInterval(Dn),Dn=setInterval(function(){ye(null,An)},Nn))}function we(){In?Te():be()}function De(){Hn!=H.hidden&&In!==!1&&(H.hidden?Ee():Ce()),Hn=H.hidden}function Oe(e){switch(e=e||R.event,e.keyCode){case B.LEFT:ye(null,-1);break;case B.RIGHT:ye(null,1)}}function Ne(e){switch(e=e||R.event,e.keyCode){case B.LEFT:case B.UP:case B.PAGEUP:cn.disabled||ye(null,-1);break;case B.RIGHT:case B.DOWN:case B.PAGEDOWN:un.disabled||ye(null,1);break;case B.HOME:me(0);break;case B.END:me(it-1)}}function Ae(e){e.focus()}function ke(e){function n(e){return t.navContainer?e:xn[e]}var i=H.activeElement;if(p(i,"data-nav")){e=e||R.event;var a=e.keyCode,r=[].indexOf.call(mn,i),o=xn.length,s=xn.indexOf(r);switch(t.navContainer&&(o=it,s=r),a){case B.LEFT:case B.PAGEUP:s>0&&Ae(mn[n(s-1)]);break;case B.UP:case B.HOME:s>0&&Ae(mn[n(0)]);break;case B.RIGHT:case B.PAGEDOWN:s<o-1&&Ae(mn[n(s+1)]);break;case B.DOWN:case B.END:s<o-1&&Ae(mn[n(o-1)]);break;case B.ENTER:case B.SPACE:Tn=r,me(r)}}}function Pe(){fe(0,et.scrollLeft()),Ht=Lt}function Me(e){return e.target||e.srcElement}function Ie(e){return e.type.indexOf("touch")>=0}function We(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Se(e){if(!jt){e=e||R.event;var t;Ie(e)?(t=e.changedTouches[0],Gt.emit("touchStart",je(e))):(t=e,We(e),Gt.emit("dragStart",je(e))),qn=parseInt(t.clientX),Gn=parseInt(t.clientY),Rn=parseFloat(et.style[It].replace(Wt,"").replace(St,""))}}function Le(e){if(!jt&&(e=e||R.event,null!==qn)){var n;if(Ie(e)?n=e.changedTouches[0]:(n=e,We(e)),Bn=parseInt(n.clientX)-qn,zn=parseInt(n.clientY)-Gn,d(u(zn,Bn),15)===t.axis&&Bn){Ie(e)?Gt.emit("touchMove",je(e)):(Un||(Un=!0),Gt.emit("dragMove",je(e))),vt||(vt=!0);var i=Rn;if(Ze)if(xt)i+=Bn,i+="px";else{var a=G?Bn*ht*100/(Je*kt):100*Bn/Je;i+=a,i+="%"}else i+=zn,i+="px";G&&le(0),et.style[It]=Wt+i+St}}}function He(e){if(!jt&&(e=e||R.event,vt)){vt=!1;var t;if(Ie(e)?(t=e.changedTouches[0],Gt.emit("touchEnd",je(e))):(t=e,Gt.emit("dragEnd",je(e))),Bn=parseInt(t.clientX)-qn,zn=parseInt(t.clientY)-Gn,qn=Gn=null,Ze){var n=-Bn*ht/Je;n=Bn>0?Math.floor(n):Math.ceil(n),Lt+=n}else{var i=-(Rn+zn);if(i<=0)Lt=Bt;else if(i>=dt[dt.length-1])Lt=zt;else{var a=0;do{a++,Lt=zn<0?a+1:a}while(a<kt&&i>=dt[a+1])}}if(ve(),Un){Un=!1;var r=Me(e);D(r,{click:function e(t){We(t),O(r,{click:e})}})}}}function Re(){_e.style.height=dt[Lt+ht]-dt[Lt]+"px"}function Be(){xn=[];for(var e=!Ct&&gt?Lt-1:Lt,t=e%it%ht;t<it;)!Ct&&t+ht>it&&(t=it-ht),xn.push(t),t+=ht;(Ct&&xn.length*ht<it||!Ct&&xn[0]>0)&&xn.unshift(0)}function ze(){yn&&!t.navContainer&&xn.indexOf(Lt%it)<0&&(Be(),xn!==bn&&(bn.length>0&&bn.forEach(function(e){b(mn[e])}),xn.length>0&&xn.forEach(function(e){T(mn[e])}),bn=xn))}function je(e){return{container:et,slideItems:nt,navContainer:gn,navItems:mn,controlsContainer:pn,prevButton:cn,nextButton:un,items:ht,slideBy:pt,cloneCount:At,slideCount:it,slideCountNew:kt,index:Lt,indexCached:Ht,navCurrentIndex:En,navCurrentIndexCached:Cn,visibleNavIndexes:xn,visibleNavIndexesCached:bn,event:e||{}}}if(t=e({container:H.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=H.querySelector(t[e]))}),t.container&&t.container.nodeName&&!(t.container.children.length<2)){if(t.responsive){var qe={},Ge=t.responsive;for(var Fe in Ge){var Ue=Ge[Fe];qe[Fe]="number"==typeof Ue?{items:Ue}:Ue}t.responsive=qe,qe=null}var Ve="carousel"===t.mode;if(!Ve){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var Xe="tns-fadeIn",Ke="tns-fadeOut",Ye=!1,Qe=t.animateNormal||"tns-normal";K&&Y&&(Xe=t.animateIn||Xe,Ke=t.animateOut||Ke,Ye=t.animateDelay||Ye)}var Je,Ze="horizontal"===t.axis,$e=H.createElement("div"),_e=H.createElement("div"),et=t.container,tt=et.parentNode,nt=et.children,it=nt.length,at=tt.clientWidth,rt=t.responsive,ot=[],st=!1,lt=0,ct=0;if(rt){st=Object.keys(rt).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),st.indexOf(0)<0&&(ct=1),st.forEach(function(e){ot=ot.concat(Object.keys(rt[e]))});var ut=[];ot.forEach(function(e){ut.indexOf(e)<0&&ut.push(e)}),ot=ut,lt=M()}var dt,ft,vt,ht=a("items"),pt="page"===a("slideBy")?ht:a("slideBy"),mt=t.nested,yt=a("gutter"),gt=a("edgePadding"),xt=a("fixedWidth"),bt=a("arrowKeys"),Tt=a("speed"),Et=t.rewind,Ct=!Et&&t.loop,wt=a("autoHeight"),Dt=s(),Ot=t.lazyload,Nt=[],At=Ct?2*it:n("edgePadding")?1:0,kt=Ve?it+2*At:it+At,Pt=!(!xt||Ct||gt),Mt=!Ve||!Ct,It=Ze?"left":"top",Wt="",St="",Lt=Ve?At:0,Ht=Lt,Rt=!Ct&&n("edgePadding")?1:0,Bt=Rt,zt=kt-ht-Rt,jt=!1,qt=t.onInit,Gt=new N,Ft=et.id,Ut=" tns-slider tns-"+t.mode,Vt=et.id||i(),Xt=a("disable"),Kt=!!Xt||it<=ht,Yt="inner"===mt?" !important":"",Qt={click:ye,keydown:Ne},Jt={click:ge,keydown:ke},Zt={mouseover:S,mouseout:L},$t={visibilitychange:De},_t={keydown:Oe},en={touchstart:Se,touchmove:Le,touchend:He,touchcancel:He},tn={mousedown:Se,mousemove:Le,mouseup:He,mouseleave:He},nn=n("controls"),an=n("nav"),rn=n("autoplay"),on=n("touch"),sn=n("mouseDrag"),ln="tns-slide-active";if(nn)var cn,un,dn,fn,vn=a("controls"),hn=a("controlsText"),pn=t.controlsContainer;if(an)var mn,yn=a("nav"),gn=t.navContainer,xn=[],bn=xn,Tn=-1,En=0,Cn=0,wn="tns-nav-active";if(rn)var Dn,On=a("autoplay"),Nn=a("autoplayTimeout"),An="forward"===t.autoplayDirection?1:-1,kn=a("autoplayText"),Pn=a("autoplayHoverPause"),Mn=t.autoplayButton,In=!1,Wn=!1,Sn=["<span class='tns-visually-hidden'>"," animation</span>"],Ln=a("autoplayResetOnVisibility"),Hn=!1;if(on)var Rn,Bn,zn,jn=a("touch"),qn=null,Gn=null;if(sn)var Fn=a("mouseDrag"),Un=!1;Kt&&(vn=yn=jn=Fn=bt=On=Pn=Ln=!1),G&&(It=G,Wt="translate",Wt+=Ze?"X(":"Y(",St=")"),function(){$e.appendChild(_e),tt.insertBefore($e,et),_e.appendChild(et),Je=_e.clientWidth;var e="tns-outer",i="tns-inner";if(Ve?Ze&&(n("edgePadding")||n("gutter")&&!t.fixedWidth)?e+=" tns-ovh":i+=" tns-ovh":n("gutter")&&(e+=" tns-ovh"),$e.className=e,_e.className=i,_e.id=Vt+"-iw",wt&&(_e.className+=" tns-ah",_e.style[F]=Tt/1e3+"s"),""===et.id&&(et.id=Vt),Ut+=j?" tns-subpixel":" tns-no-subpixel",Ut+=z?" tns-calc":" tns-no-calc",Ve&&(Ut+=" tns-"+t.axis),et.className+=Ut,Ve&&K){var s={};s[K]=pe,D(et,s)}e=i=null;for(var u=0;u<it;u++){var d=nt[u];d.id||(d.id=Vt+"-item"+u),v(d,"tns-item"),!Ve&&Qe&&v(d,Qe),g(d,{"aria-hidden":"true",tabindex:"-1"})}if(Ct||gt){for(var f=H.createDocumentFragment(),p=H.createDocumentFragment(),m=At;m--;){var T=m%it,E=nt[T].cloneNode(!0);if(x(E,"id"),p.insertBefore(E,p.firstChild),Ve){var O=nt[it-1-T].cloneNode(!0);x(O,"id"),f.appendChild(O)}}et.insertBefore(f,et.firstChild),et.appendChild(p),nt=et.children}for(var N=Lt;N<Lt+ht;N++){var d=nt[N];g(d,{"aria-hidden":"false"}),x(d,["tabindex"]),v(d,ln),Ve||(d.style.left=100*(N-Lt)/ht+"%",v(d,Xe),h(d,Qe))}if(Ve&&Ze)if(j){var A=R.getComputedStyle(nt[0]).fontSize;A.indexOf("em")>0&&(A=16*parseFloat(A)+"px"),l(Dt,"#"+Vt,"font-size:0;",c(Dt)),l(Dt,"#"+Vt+" > .tns-item","font-size:"+A+";",c(Dt))}else[].forEach.call(nt,function(e,t){e.style.marginLeft=r(t)});if(q){var M=o(t.edgePadding,t.gutter,t.fixedWidth);l(Dt,"#"+Vt+"-iw",M,c(Dt)),Ve&&Ze&&(M="width:"+y(t.fixedWidth,t.gutter,t.items),l(Dt,"#"+Vt,M,c(Dt))),(Ze||t.gutter)&&(M=C(t.fixedWidth,t.gutter,t.items)+w(t.gutter),l(Dt,"#"+Vt+" > .tns-item",M,c(Dt)))}else if(_e.style.cssText=o(gt,yt,xt),Ve&&Ze&&(et.style.width=y(xt,yt,ht)),Ze||yt){var M=C(xt,yt,ht)+w(yt);l(Dt,"#"+Vt+" > .tns-item",M,c(Dt))}if(Ze||Xt||(ee(),Re()),rt&&q&&st.forEach(function(e){var t=rt[e],i="",r="",s="",l="",c=a("items",e),u=a("fixedWidth",e),d=a("edgePadding",e),f=a("gutter",e);("edgePadding"in t||"gutter"in t)&&(r="#"+Vt+"-iw{"+o(d,f,u)+"}"),Ve&&Ze&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(s="#"+Vt+"{width:"+y(u,f,c)+"}"),("fixedWidth"in t||n("fixedWidth")&&"gutter"in t||!Ve&&"items"in t)&&(l+=C(u,f,c)),"gutter"in t&&(l+=w(f)),l.length>0&&(l="#"+Vt+" > .tns-item{"+l+"}"),i=r+s+l,i.length>0&&Dt.insertRule("@media (min-width: "+e/16+"em) {"+i+"}",Dt.cssRules.length)}),Ve&&!Xt&&ue(),navigator.msMaxTouchPoints&&(v($e,"ms-touch"),D($e,{scroll:Pe}),te()),an){var S=Ve?At:0;if(gn)g(gn,{"aria-label":"Carousel Pagination"}),mn=gn.children,[].forEach.call(mn,function(e,t){g(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":nt[S+t].id})});else{for(var L="",N=0;N<it;N++)L+='<button data-nav="'+N+'" tabindex="-1" aria-selected="false" aria-controls="'+nt[S+N].id+'" hidden type="button"></button>';L='<div class="tns-nav" aria-label="Carousel Pagination">'+L+"</div>",$e.insertAdjacentHTML("afterbegin",L),gn=$e.querySelector(".tns-nav"),mn=gn.children,ze()}if(F){var B=F.substring(0,F.length-18).toLowerCase(),M="transition: all "+Tt/1e3+"s";B&&(M="-"+B+"-"+M),l(Dt,"[aria-controls^="+Vt+"-item]",M,c(Dt))}g(mn[0],{tabindex:"0","aria-selected":"true"}),v(mn[0],wn),D(gn,Jt),yn||b(gn)}if(rn){var G=On?"stop":"start";Mn?g(Mn,{"data-action":G}):t.autoplayButtonOutput&&(_e.insertAdjacentHTML("beforebegin",'<button data-action="'+G+'" type="button">'+Sn[0]+G+Sn[1]+kn[0]+"</button>"),Mn=$e.querySelector("[data-action]")),Mn&&D(Mn,{click:we}),On?(be(),Pn&&D(et,Zt),Ln&&D(et,$t)):Mn&&b(Mn)}nn&&(pn?(cn=pn.children[0],un=pn.children[1],g(pn,{"aria-label":"Carousel Navigation",tabindex:"0"}),g(cn,{"data-controls":"prev"}),g(un,{"data-controls":"next"}),g(pn.children,{"aria-controls":Vt,tabindex:"-1"})):($e.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Vt+'" type="button">'+hn[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Vt+'" type="button">'+hn[1]+"</button></div>"),pn=$e.querySelector(".tns-controls"),cn=pn.children[0],un=pn.children[1]),dn=ae(cn),fn=ae(un),Ct||oe(dn,cn,!0),D(pn,Qt),vn||b(pn)),jn&&D(et,en),Fn&&D(et,tn),bt&&D(H,_t),"inner"===mt?Gt.on("outerResized",function(){P(),Gt.emit("innerLoaded",je())}):(D(R,{resize:k}),"outer"===mt&&Gt.on("innerLoaded",J)),Q(),J(),I(),Gt.on("indexChanged",$),"function"==typeof qt&&qt(je()),"inner"===mt&&Gt.emit("innerLoaded",je()),Xt&&W(!0)}();var Vn=function(){return Ct?function(){var e=Bt+pt,t=zt-pt,n=yt?yt:0;if(xt&&at%(xt+n)>n&&(t-=1),Lt>t)for(;Lt>=e+it;)Lt-=it;else if(Lt<e)for(;Lt<=t-it;)Lt+=it}:function(){Lt=Math.max(Bt,Math.min(zt,Lt))}}(),Xn=function(){return Ve?function(e,t){if(t||(t=ce()),Pt&&Lt===zt){var n=G?100*-((kt-ht)/kt):100*-(kt/ht-1);t=Math.max(parseFloat(t),n)+"%"}F||!e?(ue(t),0===Tt&&pe()):A(et,It,Wt,St,t,Tt,pe),Ze||Re()}:function(){Nt=[];var e={};e[K]=e[Y]=pe,O(nt[Ht],e),D(nt[Lt],e),de(Ht,Xe,Ke,!0),de(Lt,Qe,Xe),K&&Y&&0!==Tt||setTimeout(pe,0)}}();return{getInfo:je,events:Gt,goTo:me,destroy:function(){if(Dt.disabled=!0,Ct)for(var e=At;e--;)nt[0].remove(),nt[nt.length-1].remove();for(var n=it;n--;){var i=nt[n];i.id.indexOf(Vt+"-item")>=0&&(i.id=""),i.classList.remove("tns-item")}if(x(nt,["style","aria-hidden","tabindex"]),nt=Vt=it=kt=At=null,vn&&(O(pn,Qt),t.controlsContainer&&(x(pn,["aria-label","tabindex"]),x(pn.children,["aria-controls","aria-disabled","tabindex"])),pn=cn=un=null),yn&&(O(gn,Jt),t.navContainer&&(x(gn,["aria-label"]),x(mn,["aria-selected","aria-controls","tabindex"])),gn=mn=null),On&&(clearInterval(Dn),Mn&&O(Mn,{click:we}),O(et,Zt),O(et,$t),t.autoplayButton&&x(Mn,["data-action"])),et.id=Ft||"",et.className=et.className.replace(Ut,""),et.style="",Ve&&K){var a={};a[K]=pe,O(et,a)}O(et,en),O(et,tn),tt.insertBefore(et,$e),$e.remove(),$e=_e=et=null,O(H,_t),O(R,{resize:k})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
