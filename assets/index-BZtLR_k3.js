function fI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function pI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cv={exports:{}},Cu={},xv={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),mI=Symbol.for("react.portal"),gI=Symbol.for("react.fragment"),yI=Symbol.for("react.strict_mode"),vI=Symbol.for("react.profiler"),_I=Symbol.for("react.provider"),wI=Symbol.for("react.context"),EI=Symbol.for("react.forward_ref"),TI=Symbol.for("react.suspense"),II=Symbol.for("react.memo"),SI=Symbol.for("react.lazy"),Um=Symbol.iterator;function AI(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var Rv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kv=Object.assign,Pv={};function xs(t,e,n){this.props=t,this.context=e,this.refs=Pv,this.updater=n||Rv}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nv(){}Nv.prototype=xs.prototype;function Wh(t,e,n){this.props=t,this.context=e,this.refs=Pv,this.updater=n||Rv}var qh=Wh.prototype=new Nv;qh.constructor=Wh;kv(qh,xs.prototype);qh.isPureReactComponent=!0;var Bm=Array.isArray,bv=Object.prototype.hasOwnProperty,Gh={current:null},Dv={key:!0,ref:!0,__self:!0,__source:!0};function Ov(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bv.call(e,r)&&!Dv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ca,type:t,key:s,ref:o,props:i,_owner:Gh.current}}function CI(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function xI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zm=/\/+/g;function Nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xI(""+t.key):e.toString(36)}function _l(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case mI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Nc(o,0):r,Bm(i)?(n="",t!=null&&(n=t.replace(zm,"$&/")+"/"),_l(i,e,n,"",function(c){return c})):i!=null&&(Hh(i)&&(i=CI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Bm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Nc(s,l);o+=_l(s,e,n,u,i)}else if(u=AI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Nc(s,l++),o+=_l(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var r=[],i=0;return _l(t,r,"","",function(s){return e.call(n,s,i++)}),r}function RI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},wl={transition:null},kI={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:wl,ReactCurrentOwner:Gh};function Vv(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!Hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=xs;ie.Fragment=gI;ie.Profiler=vI;ie.PureComponent=Wh;ie.StrictMode=yI;ie.Suspense=TI;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kI;ie.act=Vv;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)bv.call(e,u)&&!Dv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ca,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:wI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_I,_context:t},t.Consumer=t};ie.createElement=Ov;ie.createFactory=function(t){var e=Ov.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:EI,render:t}};ie.isValidElement=Hh;ie.lazy=function(t){return{$$typeof:SI,_payload:{_status:-1,_result:t},_init:RI}};ie.memo=function(t,e){return{$$typeof:II,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};ie.unstable_act=Vv;ie.useCallback=function(t,e){return Pt.current.useCallback(t,e)};ie.useContext=function(t){return Pt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Pt.current.useEffect(t,e)};ie.useId=function(){return Pt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Pt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Pt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Pt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Pt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Pt.current.useReducer(t,e,n)};ie.useRef=function(t){return Pt.current.useRef(t)};ie.useState=function(t){return Pt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Pt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Pt.current.useTransition()};ie.version="18.3.1";xv.exports=ie;var O=xv.exports;const Lv=pI(O),PI=fI({__proto__:null,default:Lv},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NI=O,bI=Symbol.for("react.element"),DI=Symbol.for("react.fragment"),OI=Object.prototype.hasOwnProperty,VI=NI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LI={key:!0,ref:!0,__self:!0,__source:!0};function Mv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)OI.call(e,r)&&!LI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bI,type:t,key:s,ref:o,props:i,_owner:VI.current}}Cu.Fragment=DI;Cu.jsx=Mv;Cu.jsxs=Mv;Cv.exports=Cu;var p=Cv.exports,Sd={},jv={exports:{}},Gt={},Fv={exports:{}},Uv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Y){var Z=W.length;W.push(Y);e:for(;0<Z;){var ge=Z-1>>>1,pe=W[ge];if(0<i(pe,Y))W[ge]=Y,W[Z]=pe,Z=ge;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Y=W[0],Z=W.pop();if(Z!==Y){W[0]=Z;e:for(var ge=0,pe=W.length,Te=pe>>>1;ge<Te;){var jt=2*(ge+1)-1,Ft=W[jt],H=jt+1,ke=W[H];if(0>i(Ft,Z))H<pe&&0>i(ke,Ft)?(W[ge]=ke,W[H]=Z,ge=H):(W[ge]=Ft,W[jt]=Z,ge=jt);else if(H<pe&&0>i(ke,Z))W[ge]=ke,W[H]=Z,ge=H;else break e}}return Y}function i(W,Y){var Z=W.sortIndex-Y.sortIndex;return Z!==0?Z:W.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,m=null,y=3,I=!1,x=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(W){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=W)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function L(W){if(P=!1,S(W),!x)if(n(u)!==null)x=!0,Tt(R);else{var Y=n(c);Y!==null&&fe(L,Y.startTime-W)}}function R(W,Y){x=!1,P&&(P=!1,E(g),g=-1),I=!0;var Z=y;try{for(S(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||W&&!k());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,y=m.priorityLevel;var pe=ge(m.expirationTime<=Y);Y=t.unstable_now(),typeof pe=="function"?m.callback=pe:m===n(u)&&r(u),S(Y)}else r(u);m=n(u)}if(m!==null)var Te=!0;else{var jt=n(c);jt!==null&&fe(L,jt.startTime-Y),Te=!1}return Te}finally{m=null,y=Z,I=!1}}var N=!1,v=null,g=-1,w=5,A=-1;function k(){return!(t.unstable_now()-A<w)}function D(){if(v!==null){var W=t.unstable_now();A=W;var Y=!0;try{Y=v(!0,W)}finally{Y?C():(N=!1,v=null)}}else N=!1}var C;if(typeof T=="function")C=function(){T(D)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,oe=re.port2;re.port1.onmessage=D,C=function(){oe.postMessage(null)}}else C=function(){b(D,0)};function Tt(W){v=W,N||(N=!0,C())}function fe(W,Y){g=b(function(){W(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){x||I||(x=!0,Tt(R))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(y){case 1:case 2:case 3:var Y=3;break;default:Y=y}var Z=y;y=Y;try{return W()}finally{y=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Y){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Z=y;y=W;try{return Y()}finally{y=Z}},t.unstable_scheduleCallback=function(W,Y,Z){var ge=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ge+Z:ge):Z=ge,W){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=Z+pe,W={id:h++,callback:Y,priorityLevel:W,startTime:Z,expirationTime:pe,sortIndex:-1},Z>ge?(W.sortIndex=Z,e(c,W),n(u)===null&&W===n(c)&&(P?(E(g),g=-1):P=!0,fe(L,Z-ge))):(W.sortIndex=pe,e(u,W),x||I||(x=!0,Tt(R))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var Y=y;return function(){var Z=y;y=Y;try{return W.apply(this,arguments)}finally{y=Z}}}})(Uv);Fv.exports=Uv;var MI=Fv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jI=O,qt=MI;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bv=new Set,bo={};function Ii(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(bo[t]=e,t=0;t<e.length;t++)Bv.add(e[t])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ad=Object.prototype.hasOwnProperty,FI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$m={},Wm={};function UI(t){return Ad.call(Wm,t)?!0:Ad.call($m,t)?!1:FI.test(t)?Wm[t]=!0:($m[t]=!0,!1)}function BI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zI(t,e,n,r){if(e===null||typeof e>"u"||BI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new Nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new Nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new Nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new Nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new Nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new Nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new Nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new Nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new Nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kh=/[\-:]([a-z])/g;function Qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kh,Qh);at[e]=new Nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kh,Qh);at[e]=new Nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kh,Qh);at[e]=new Nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new Nt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new Nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xh(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zI(e,n,i,r)&&(n=null),r||i===null?UI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=jI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),$v=Symbol.for("react.context"),Jh=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),Rd=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Wv=Symbol.for("react.offscreen"),qm=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=qm&&t[qm]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,bc;function ao(t){if(bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bc=e&&e[1]||""}return`
`+bc+t}var Dc=!1;function Oc(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function $I(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function kd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case Ui:return"Portal";case Cd:return"Profiler";case Yh:return"StrictMode";case xd:return"Suspense";case Rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $v:return(t.displayName||"Context")+".Consumer";case zv:return(t._context.displayName||"Context")+".Provider";case Jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:kd(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return kd(t(e))}catch{}}return null}function WI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kd(e);case 8:return e===Yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qI(t){var e=qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=qI(t))}function Gv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pd(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hv(t,e){e=e.checked,e!=null&&Xh(t,"checked",e,!1)}function Nd(t,e){Hv(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bd(t,e.type,n):e.hasOwnProperty("defaultValue")&&bd(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bd(t,e,n){(e!=="number"||Ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Dd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(lo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function Kv(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,Xv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GI=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){GI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function Yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function Jv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HI=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vd(t,e){if(e){if(HI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Ld(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jd=null,es=null,ts=null;function Xm(t){if(t=fa(t)){if(typeof jd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Nu(e),jd(t.stateNode,t.type,e))}}function Zv(t){es?ts?ts.push(t):ts=[t]:es=t}function e_(){if(es){var t=es,e=ts;if(ts=es=null,Xm(t),e)for(t=0;t<e.length;t++)Xm(e[t])}}function t_(t,e){return t(e)}function n_(){}var Vc=!1;function r_(t,e,n){if(Vc)return t(e,n);Vc=!0;try{return t_(t,e,n)}finally{Vc=!1,(es!==null||ts!==null)&&(n_(),e_())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var r=Nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Fd=!1;if(Qn)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){Fd=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{Fd=!1}function KI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var _o=!1,Bl=null,zl=!1,Ud=null,QI={onError:function(t){_o=!0,Bl=t}};function XI(t,e,n,r,i,s,o,l,u){_o=!1,Bl=null,KI.apply(QI,arguments)}function YI(t,e,n,r,i,s,o,l,u){if(XI.apply(this,arguments),_o){if(_o){var c=Bl;_o=!1,Bl=null}else throw Error(B(198));zl||(zl=!0,Ud=c)}}function Si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ym(t){if(Si(t)!==t)throw Error(B(188))}function JI(t){var e=t.alternate;if(!e){if(e=Si(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ym(i),t;if(s===r)return Ym(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function s_(t){return t=JI(t),t!==null?o_(t):null}function o_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o_(t);if(e!==null)return e;t=t.sibling}return null}var a_=qt.unstable_scheduleCallback,Jm=qt.unstable_cancelCallback,ZI=qt.unstable_shouldYield,eS=qt.unstable_requestPaint,Be=qt.unstable_now,tS=qt.unstable_getCurrentPriorityLevel,tf=qt.unstable_ImmediatePriority,l_=qt.unstable_UserBlockingPriority,$l=qt.unstable_NormalPriority,nS=qt.unstable_LowPriority,u_=qt.unstable_IdlePriority,xu=null,Sn=null;function rS(t){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(xu,t,void 0,(t.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:oS,iS=Math.log,sS=Math.LN2;function oS(t){return t>>>=0,t===0?32:31-(iS(t)/sS|0)|0}var el=64,tl=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=uo(l):(s&=o,s!==0&&(r=uo(s)))}else o=n&~i,o!==0?r=uo(o):s!==0&&(r=uo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-hn(e),i=1<<n,r|=t[n],e&=~i;return r}function aS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-hn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=aS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function c_(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hn(e),t[e]=n}function uS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-hn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-hn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function d_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h_,rf,f_,p_,m_,zd=!1,nl=[],Ir=null,Sr=null,Ar=null,Vo=new Map,Lo=new Map,fr=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zm(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function eo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fa(e),e!==null&&rf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dS(t,e,n,r,i){switch(e){case"focusin":return Ir=eo(Ir,t,e,n,r,i),!0;case"dragenter":return Sr=eo(Sr,t,e,n,r,i),!0;case"mouseover":return Ar=eo(Ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vo.set(s,eo(Vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Lo.set(s,eo(Lo.get(s)||null,t,e,n,r,i)),!0}return!1}function g_(t){var e=ni(t.target);if(e!==null){var n=Si(e);if(n!==null){if(e=n.tag,e===13){if(e=i_(n),e!==null){t.blockedOn=e,m_(t.priority,function(){f_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Md=r,n.target.dispatchEvent(r),Md=null}else return e=fa(n),e!==null&&rf(e),t.blockedOn=n,!1;e.shift()}return!0}function eg(t,e,n){El(t)&&n.delete(e)}function hS(){zd=!1,Ir!==null&&El(Ir)&&(Ir=null),Sr!==null&&El(Sr)&&(Sr=null),Ar!==null&&El(Ar)&&(Ar=null),Vo.forEach(eg),Lo.forEach(eg)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,zd||(zd=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,hS)))}function Mo(t){function e(i){return to(i,t)}if(0<nl.length){to(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&to(Ir,t),Sr!==null&&to(Sr,t),Ar!==null&&to(Ar,t),Vo.forEach(e),Lo.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)g_(n),n.blockedOn===null&&fr.shift()}var ns=rr.ReactCurrentBatchConfig,ql=!0;function fS(t,e,n,r){var i=ye,s=ns.transition;ns.transition=null;try{ye=1,sf(t,e,n,r)}finally{ye=i,ns.transition=s}}function pS(t,e,n,r){var i=ye,s=ns.transition;ns.transition=null;try{ye=4,sf(t,e,n,r)}finally{ye=i,ns.transition=s}}function sf(t,e,n,r){if(ql){var i=$d(t,e,n,r);if(i===null)Gc(t,e,r,Gl,n),Zm(t,r);else if(dS(i,t,e,n,r))r.stopPropagation();else if(Zm(t,r),e&4&&-1<cS.indexOf(t)){for(;i!==null;){var s=fa(i);if(s!==null&&h_(s),s=$d(t,e,n,r),s===null&&Gc(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gc(t,e,r,null,n)}}var Gl=null;function $d(t,e,n,r){if(Gl=null,t=ef(r),t=ni(t),t!==null)if(e=Si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function y_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tS()){case tf:return 1;case l_:return 4;case $l:case nS:return 16;case u_:return 536870912;default:return 16}default:return 16}}var _r=null,of=null,Tl=null;function v_(){if(Tl)return Tl;var t,e=of,n=e.length,r,i="value"in _r?_r.value:_r.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tl=i.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function tg(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:tg,this.isPropagationStopped=tg,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Ht(Rs),ha=be({},Rs,{view:0,detail:0}),mS=Ht(ha),Mc,jc,no,Ru=be({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Mc=t.screenX-no.screenX,jc=t.screenY-no.screenY):jc=Mc=0,no=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),ng=Ht(Ru),gS=be({},Ru,{dataTransfer:0}),yS=Ht(gS),vS=be({},ha,{relatedTarget:0}),Fc=Ht(vS),_S=be({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),wS=Ht(_S),ES=be({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TS=Ht(ES),IS=be({},Rs,{data:0}),rg=Ht(IS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CS[t])?!!e[t]:!1}function lf(){return xS}var RS=be({},ha,{key:function(t){if(t.key){var e=SS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kS=Ht(RS),PS=be({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=Ht(PS),NS=be({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),bS=Ht(NS),DS=be({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=Ht(DS),VS=be({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LS=Ht(VS),MS=[9,13,27,32],uf=Qn&&"CompositionEvent"in window,wo=null;Qn&&"documentMode"in document&&(wo=document.documentMode);var jS=Qn&&"TextEvent"in window&&!wo,__=Qn&&(!uf||wo&&8<wo&&11>=wo),sg=" ",og=!1;function w_(t,e){switch(t){case"keyup":return MS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function FS(t,e){switch(t){case"compositionend":return E_(e);case"keypress":return e.which!==32?null:(og=!0,sg);case"textInput":return t=e.data,t===sg&&og?null:t;default:return null}}function US(t,e){if(zi)return t==="compositionend"||!uf&&w_(t,e)?(t=v_(),Tl=of=_r=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return __&&e.locale!=="ko"?null:e.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BS[t.type]:e==="textarea"}function T_(t,e,n,r){Zv(r),e=Hl(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Eo=null,jo=null;function zS(t){D_(t,0)}function ku(t){var e=qi(t);if(Gv(e))return t}function $S(t,e){if(t==="change")return e}var I_=!1;if(Qn){var Uc;if(Qn){var Bc="oninput"in document;if(!Bc){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),Bc=typeof lg.oninput=="function"}Uc=Bc}else Uc=!1;I_=Uc&&(!document.documentMode||9<document.documentMode)}function ug(){Eo&&(Eo.detachEvent("onpropertychange",S_),jo=Eo=null)}function S_(t){if(t.propertyName==="value"&&ku(jo)){var e=[];T_(e,jo,t,ef(t)),r_(zS,e)}}function WS(t,e,n){t==="focusin"?(ug(),Eo=e,jo=n,Eo.attachEvent("onpropertychange",S_)):t==="focusout"&&ug()}function qS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ku(jo)}function GS(t,e){if(t==="click")return ku(e)}function HS(t,e){if(t==="input"||t==="change")return ku(e)}function KS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pn=typeof Object.is=="function"?Object.is:KS;function Fo(t,e){if(pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ad.call(e,i)||!pn(t[i],e[i]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dg(t,e){var n=cg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cg(n)}}function A_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C_(){for(var t=window,e=Ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ul(t.document)}return e}function cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function QS(t){var e=C_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A_(n.ownerDocument.documentElement,n)){if(r!==null&&cf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dg(n,s);var o=dg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XS=Qn&&"documentMode"in document&&11>=document.documentMode,$i=null,Wd=null,To=null,qd=!1;function hg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qd||$i==null||$i!==Ul(r)||(r=$i,"selectionStart"in r&&cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),To&&Fo(To,r)||(To=r,r=Hl(Wd,"onSelect"),0<r.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$i)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},zc={},x_={};Qn&&(x_=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function Pu(t){if(zc[t])return zc[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x_)return zc[t]=e[n];return t}var R_=Pu("animationend"),k_=Pu("animationiteration"),P_=Pu("animationstart"),N_=Pu("transitionend"),b_=new Map,fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){b_.set(t,e),Ii(e,[t])}for(var $c=0;$c<fg.length;$c++){var Wc=fg[$c],YS=Wc.toLowerCase(),JS=Wc[0].toUpperCase()+Wc.slice(1);jr(YS,"on"+JS)}jr(R_,"onAnimationEnd");jr(k_,"onAnimationIteration");jr(P_,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(N_,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function pg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YI(r,e,void 0,t),t.currentTarget=null}function D_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;pg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;pg(i,l,c),s=u}}}if(zl)throw t=Ud,zl=!1,Ud=null,t}function Ce(t,e){var n=e[Xd];n===void 0&&(n=e[Xd]=new Set);var r=t+"__bubble";n.has(r)||(O_(e,t,2,!1),n.add(r))}function qc(t,e,n){var r=0;e&&(r|=4),O_(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[sl]){t[sl]=!0,Bv.forEach(function(n){n!=="selectionchange"&&(ZS.has(n)||qc(n,!1,t),qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,qc("selectionchange",!1,e))}}function O_(t,e,n,r){switch(y_(e)){case 1:var i=fS;break;case 4:i=pS;break;default:i=sf}n=i.bind(null,e,n,t),i=void 0,!Fd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ni(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}r_(function(){var c=s,h=ef(n),m=[];e:{var y=b_.get(t);if(y!==void 0){var I=af,x=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":I=kS;break;case"focusin":x="focus",I=Fc;break;case"focusout":x="blur",I=Fc;break;case"beforeblur":case"afterblur":I=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=yS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=bS;break;case R_:case k_:case P_:I=wS;break;case N_:I=OS;break;case"scroll":I=mS;break;case"wheel":I=LS;break;case"copy":case"cut":case"paste":I=TS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=ig}var P=(e&4)!==0,b=!P&&t==="scroll",E=P?y!==null?y+"Capture":null:y;P=[];for(var T=c,S;T!==null;){S=T;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,E!==null&&(L=Oo(T,E),L!=null&&P.push(Bo(T,L,S)))),b)break;T=T.return}0<P.length&&(y=new I(y,x,null,n,h),m.push({event:y,listeners:P}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",y&&n!==Md&&(x=n.relatedTarget||n.fromElement)&&(ni(x)||x[Xn]))break e;if((I||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,I?(x=n.relatedTarget||n.toElement,I=c,x=x?ni(x):null,x!==null&&(b=Si(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(I=null,x=c),I!==x)){if(P=ng,L="onMouseLeave",E="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(P=ig,L="onPointerLeave",E="onPointerEnter",T="pointer"),b=I==null?y:qi(I),S=x==null?y:qi(x),y=new P(L,T+"leave",I,n,h),y.target=b,y.relatedTarget=S,L=null,ni(h)===c&&(P=new P(E,T+"enter",x,n,h),P.target=S,P.relatedTarget=b,L=P),b=L,I&&x)t:{for(P=I,E=x,T=0,S=P;S;S=Li(S))T++;for(S=0,L=E;L;L=Li(L))S++;for(;0<T-S;)P=Li(P),T--;for(;0<S-T;)E=Li(E),S--;for(;T--;){if(P===E||E!==null&&P===E.alternate)break t;P=Li(P),E=Li(E)}P=null}else P=null;I!==null&&mg(m,y,I,P,!1),x!==null&&b!==null&&mg(m,b,x,P,!0)}}e:{if(y=c?qi(c):window,I=y.nodeName&&y.nodeName.toLowerCase(),I==="select"||I==="input"&&y.type==="file")var R=$S;else if(ag(y))if(I_)R=HS;else{R=qS;var N=WS}else(I=y.nodeName)&&I.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(R=GS);if(R&&(R=R(t,c))){T_(m,R,n,h);break e}N&&N(t,y,c),t==="focusout"&&(N=y._wrapperState)&&N.controlled&&y.type==="number"&&bd(y,"number",y.value)}switch(N=c?qi(c):window,t){case"focusin":(ag(N)||N.contentEditable==="true")&&($i=N,Wd=c,To=null);break;case"focusout":To=Wd=$i=null;break;case"mousedown":qd=!0;break;case"contextmenu":case"mouseup":case"dragend":qd=!1,hg(m,n,h);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":hg(m,n,h)}var v;if(uf)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else zi?w_(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(__&&n.locale!=="ko"&&(zi||g!=="onCompositionStart"?g==="onCompositionEnd"&&zi&&(v=v_()):(_r=h,of="value"in _r?_r.value:_r.textContent,zi=!0)),N=Hl(c,g),0<N.length&&(g=new rg(g,t,null,n,h),m.push({event:g,listeners:N}),v?g.data=v:(v=E_(n),v!==null&&(g.data=v)))),(v=jS?FS(t,n):US(t,n))&&(c=Hl(c,"onBeforeInput"),0<c.length&&(h=new rg("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=v))}D_(m,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oo(t,n),s!=null&&r.unshift(Bo(t,s,i)),s=Oo(t,e),s!=null&&r.push(Bo(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Oo(n,s),u!=null&&o.unshift(Bo(n,u,l))):i||(u=Oo(n,s),u!=null&&o.push(Bo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eA=/\r\n?/g,tA=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(eA,`
`).replace(tA,"")}function ol(t,e,n){if(e=gg(e),gg(t)!==e&&n)throw Error(B(425))}function Kl(){}var Gd=null,Hd=null;function Kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qd=typeof setTimeout=="function"?setTimeout:void 0,nA=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,rA=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(t){return yg.resolve(null).then(t).catch(iA)}:Qd;function iA(t){setTimeout(function(){throw t})}function Hc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Tn="__reactFiber$"+ks,zo="__reactProps$"+ks,Xn="__reactContainer$"+ks,Xd="__reactEvents$"+ks,sA="__reactListeners$"+ks,oA="__reactHandles$"+ks;function ni(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vg(t);t!==null;){if(n=t[Tn])return n;t=vg(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[Tn]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Nu(t){return t[zo]||null}var Yd=[],Gi=-1;function Fr(t){return{current:t}}function xe(t){0>Gi||(t.current=Yd[Gi],Yd[Gi]=null,Gi--)}function Se(t,e){Gi++,Yd[Gi]=t.current,t.current=e}var Or={},wt=Fr(Or),Vt=Fr(!1),di=Or;function ds(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Lt(t){return t=t.childContextTypes,t!=null}function Ql(){xe(Vt),xe(wt)}function _g(t,e,n){if(wt.current!==Or)throw Error(B(168));Se(wt,e),Se(Vt,n)}function V_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,WI(t)||"Unknown",i));return be({},n,r)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,di=wt.current,Se(wt,t),Se(Vt,Vt.current),!0}function wg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=V_(t,e,di),r.__reactInternalMemoizedMergedChildContext=t,xe(Vt),xe(wt),Se(wt,t)):xe(Vt),Se(Vt,n)}var Fn=null,bu=!1,Kc=!1;function L_(t){Fn===null?Fn=[t]:Fn.push(t)}function aA(t){bu=!0,L_(t)}function Ur(){if(!Kc&&Fn!==null){Kc=!0;var t=0,e=ye;try{var n=Fn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fn=null,bu=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(t+1)),a_(tf,Ur),i}finally{ye=e,Kc=!1}}return null}var Hi=[],Ki=0,Yl=null,Jl=0,Yt=[],Jt=0,hi=null,Un=1,Bn="";function Zr(t,e){Hi[Ki++]=Jl,Hi[Ki++]=Yl,Yl=t,Jl=e}function M_(t,e,n){Yt[Jt++]=Un,Yt[Jt++]=Bn,Yt[Jt++]=hi,hi=t;var r=Un;t=Bn;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var s=32-hn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Un=1<<32-hn(e)+i|n<<i|r,Bn=s+t}else Un=1<<s|n<<i|r,Bn=t}function df(t){t.return!==null&&(Zr(t,1),M_(t,1,0))}function hf(t){for(;t===Yl;)Yl=Hi[--Ki],Hi[Ki]=null,Jl=Hi[--Ki],Hi[Ki]=null;for(;t===hi;)hi=Yt[--Jt],Yt[Jt]=null,Bn=Yt[--Jt],Yt[Jt]=null,Un=Yt[--Jt],Yt[Jt]=null}var Wt=null,zt=null,Re=!1,dn=null;function j_(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,zt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hi!==null?{id:Un,overflow:Bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,zt=null,!0):!1;default:return!1}}function Jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zd(t){if(Re){var e=zt;if(e){var n=e;if(!Eg(t,e)){if(Jd(t))throw Error(B(418));e=Cr(n.nextSibling);var r=Wt;e&&Eg(t,e)?j_(r,n):(t.flags=t.flags&-4097|2,Re=!1,Wt=t)}}else{if(Jd(t))throw Error(B(418));t.flags=t.flags&-4097|2,Re=!1,Wt=t}}}function Tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function al(t){if(t!==Wt)return!1;if(!Re)return Tg(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kd(t.type,t.memoizedProps)),e&&(e=zt)){if(Jd(t))throw F_(),Error(B(418));for(;e;)j_(t,e),e=Cr(e.nextSibling)}if(Tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Wt?Cr(t.stateNode.nextSibling):null;return!0}function F_(){for(var t=zt;t;)t=Cr(t.nextSibling)}function hs(){zt=Wt=null,Re=!1}function ff(t){dn===null?dn=[t]:dn.push(t)}var lA=rr.ReactCurrentBatchConfig;function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ig(t){var e=t._init;return e(t._payload)}function U_(t){function e(E,T){if(t){var S=E.deletions;S===null?(E.deletions=[T],E.flags|=16):S.push(T)}}function n(E,T){if(!t)return null;for(;T!==null;)e(E,T),T=T.sibling;return null}function r(E,T){for(E=new Map;T!==null;)T.key!==null?E.set(T.key,T):E.set(T.index,T),T=T.sibling;return E}function i(E,T){return E=Pr(E,T),E.index=0,E.sibling=null,E}function s(E,T,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<T?(E.flags|=2,T):S):(E.flags|=2,T)):(E.flags|=1048576,T)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,T,S,L){return T===null||T.tag!==6?(T=td(S,E.mode,L),T.return=E,T):(T=i(T,S),T.return=E,T)}function u(E,T,S,L){var R=S.type;return R===Bi?h(E,T,S.props.children,L,S.key):T!==null&&(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===dr&&Ig(R)===T.type)?(L=i(T,S.props),L.ref=ro(E,T,S),L.return=E,L):(L=Pl(S.type,S.key,S.props,null,E.mode,L),L.ref=ro(E,T,S),L.return=E,L)}function c(E,T,S,L){return T===null||T.tag!==4||T.stateNode.containerInfo!==S.containerInfo||T.stateNode.implementation!==S.implementation?(T=nd(S,E.mode,L),T.return=E,T):(T=i(T,S.children||[]),T.return=E,T)}function h(E,T,S,L,R){return T===null||T.tag!==7?(T=li(S,E.mode,L,R),T.return=E,T):(T=i(T,S),T.return=E,T)}function m(E,T,S){if(typeof T=="string"&&T!==""||typeof T=="number")return T=td(""+T,E.mode,S),T.return=E,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ya:return S=Pl(T.type,T.key,T.props,null,E.mode,S),S.ref=ro(E,null,T),S.return=E,S;case Ui:return T=nd(T,E.mode,S),T.return=E,T;case dr:var L=T._init;return m(E,L(T._payload),S)}if(lo(T)||Js(T))return T=li(T,E.mode,S,null),T.return=E,T;ll(E,T)}return null}function y(E,T,S,L){var R=T!==null?T.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return R!==null?null:l(E,T,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:return S.key===R?u(E,T,S,L):null;case Ui:return S.key===R?c(E,T,S,L):null;case dr:return R=S._init,y(E,T,R(S._payload),L)}if(lo(S)||Js(S))return R!==null?null:h(E,T,S,L,null);ll(E,S)}return null}function I(E,T,S,L,R){if(typeof L=="string"&&L!==""||typeof L=="number")return E=E.get(S)||null,l(T,E,""+L,R);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ya:return E=E.get(L.key===null?S:L.key)||null,u(T,E,L,R);case Ui:return E=E.get(L.key===null?S:L.key)||null,c(T,E,L,R);case dr:var N=L._init;return I(E,T,S,N(L._payload),R)}if(lo(L)||Js(L))return E=E.get(S)||null,h(T,E,L,R,null);ll(T,L)}return null}function x(E,T,S,L){for(var R=null,N=null,v=T,g=T=0,w=null;v!==null&&g<S.length;g++){v.index>g?(w=v,v=null):w=v.sibling;var A=y(E,v,S[g],L);if(A===null){v===null&&(v=w);break}t&&v&&A.alternate===null&&e(E,v),T=s(A,T,g),N===null?R=A:N.sibling=A,N=A,v=w}if(g===S.length)return n(E,v),Re&&Zr(E,g),R;if(v===null){for(;g<S.length;g++)v=m(E,S[g],L),v!==null&&(T=s(v,T,g),N===null?R=v:N.sibling=v,N=v);return Re&&Zr(E,g),R}for(v=r(E,v);g<S.length;g++)w=I(v,E,g,S[g],L),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?g:w.key),T=s(w,T,g),N===null?R=w:N.sibling=w,N=w);return t&&v.forEach(function(k){return e(E,k)}),Re&&Zr(E,g),R}function P(E,T,S,L){var R=Js(S);if(typeof R!="function")throw Error(B(150));if(S=R.call(S),S==null)throw Error(B(151));for(var N=R=null,v=T,g=T=0,w=null,A=S.next();v!==null&&!A.done;g++,A=S.next()){v.index>g?(w=v,v=null):w=v.sibling;var k=y(E,v,A.value,L);if(k===null){v===null&&(v=w);break}t&&v&&k.alternate===null&&e(E,v),T=s(k,T,g),N===null?R=k:N.sibling=k,N=k,v=w}if(A.done)return n(E,v),Re&&Zr(E,g),R;if(v===null){for(;!A.done;g++,A=S.next())A=m(E,A.value,L),A!==null&&(T=s(A,T,g),N===null?R=A:N.sibling=A,N=A);return Re&&Zr(E,g),R}for(v=r(E,v);!A.done;g++,A=S.next())A=I(v,E,g,A.value,L),A!==null&&(t&&A.alternate!==null&&v.delete(A.key===null?g:A.key),T=s(A,T,g),N===null?R=A:N.sibling=A,N=A);return t&&v.forEach(function(D){return e(E,D)}),Re&&Zr(E,g),R}function b(E,T,S,L){if(typeof S=="object"&&S!==null&&S.type===Bi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:e:{for(var R=S.key,N=T;N!==null;){if(N.key===R){if(R=S.type,R===Bi){if(N.tag===7){n(E,N.sibling),T=i(N,S.props.children),T.return=E,E=T;break e}}else if(N.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===dr&&Ig(R)===N.type){n(E,N.sibling),T=i(N,S.props),T.ref=ro(E,N,S),T.return=E,E=T;break e}n(E,N);break}else e(E,N);N=N.sibling}S.type===Bi?(T=li(S.props.children,E.mode,L,S.key),T.return=E,E=T):(L=Pl(S.type,S.key,S.props,null,E.mode,L),L.ref=ro(E,T,S),L.return=E,E=L)}return o(E);case Ui:e:{for(N=S.key;T!==null;){if(T.key===N)if(T.tag===4&&T.stateNode.containerInfo===S.containerInfo&&T.stateNode.implementation===S.implementation){n(E,T.sibling),T=i(T,S.children||[]),T.return=E,E=T;break e}else{n(E,T);break}else e(E,T);T=T.sibling}T=nd(S,E.mode,L),T.return=E,E=T}return o(E);case dr:return N=S._init,b(E,T,N(S._payload),L)}if(lo(S))return x(E,T,S,L);if(Js(S))return P(E,T,S,L);ll(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,T!==null&&T.tag===6?(n(E,T.sibling),T=i(T,S),T.return=E,E=T):(n(E,T),T=td(S,E.mode,L),T.return=E,E=T),o(E)):n(E,T)}return b}var fs=U_(!0),B_=U_(!1),Zl=Fr(null),eu=null,Qi=null,pf=null;function mf(){pf=Qi=eu=null}function gf(t){var e=Zl.current;xe(Zl),t._currentValue=e}function eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){eu=t,pf=Qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(pf!==t)if(t={context:t,memoizedValue:e,next:null},Qi===null){if(eu===null)throw Error(B(308));Qi=t,eu.dependencies={lanes:0,firstContext:t}}else Qi=Qi.next=t;return e}var ri=null;function yf(t){ri===null?ri=[t]:ri.push(t)}function z_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yn(t,n)}return i=r.interleaved,i===null?(e.next=e,yf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yn(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nf(t,n)}}function Sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tu(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,h=c=u=null,l=s;do{var y=l.lane,I=l.eventTime;if((r&y)===y){h!==null&&(h=h.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,P=l;switch(y=e,I=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){m=x.call(I,m,y);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,y=typeof x=="function"?x.call(I,m,y):x,y==null)break e;m=be({},m,y);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else I={eventTime:I,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=I,u=m):h=h.next=I,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pi|=o,t.lanes=o,t.memoizedState=m}}function Ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var pa={},An=Fr(pa),$o=Fr(pa),Wo=Fr(pa);function ii(t){if(t===pa)throw Error(B(174));return t}function _f(t,e){switch(Se(Wo,e),Se($o,t),Se(An,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Od(e,t)}xe(An),Se(An,e)}function ps(){xe(An),xe($o),xe(Wo)}function W_(t){ii(Wo.current);var e=ii(An.current),n=Od(e,t.type);e!==n&&(Se($o,t),Se(An,n))}function wf(t){$o.current===t&&(xe(An),xe($o))}var Pe=Fr(0);function nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function Ef(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var Al=rr.ReactCurrentDispatcher,Xc=rr.ReactCurrentBatchConfig,fi=0,Ne=null,He=null,Xe=null,ru=!1,Io=!1,qo=0,uA=0;function pt(){throw Error(B(321))}function Tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pn(t[n],e[n]))return!1;return!0}function If(t,e,n,r,i,s){if(fi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?fA:pA,t=n(r,i),Io){s=0;do{if(Io=!1,qo=0,25<=s)throw Error(B(301));s+=1,Xe=He=null,e.updateQueue=null,Al.current=mA,t=n(r,i)}while(Io)}if(Al.current=iu,e=He!==null&&He.next!==null,fi=0,Xe=He=Ne=null,ru=!1,e)throw Error(B(300));return t}function Sf(){var t=qo!==0;return qo=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ne.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function rn(){if(He===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Xe===null?Ne.memoizedState:Xe.next;if(e!==null)Xe=e,He=t;else{if(t===null)throw Error(B(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Xe===null?Ne.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Go(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=rn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((fi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ne.lanes|=h,pi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,pn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=rn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function q_(){}function G_(t,e){var n=Ne,r=rn(),i=e(),s=!pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Af(Q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Ho(9,K_.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(B(349));fi&30||H_(n,e,i)}return i}function H_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function K_(t,e,n,r){e.value=n,e.getSnapshot=r,X_(e)&&Y_(t)}function Q_(t,e,n){return n(function(){X_(e)&&Y_(t)})}function X_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pn(t,n)}catch{return!0}}function Y_(t){var e=Yn(t,1);e!==null&&fn(e,t,1,-1)}function Cg(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=hA.bind(null,Ne,t),[e.memoizedState,t]}function Ho(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function J_(){return rn().memoizedState}function Cl(t,e,n,r){var i=En();Ne.flags|=t,i.memoizedState=Ho(1|e,n,void 0,r===void 0?null:r)}function Du(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&Tf(r,o.deps)){i.memoizedState=Ho(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Ho(1|e,n,s,r)}function xg(t,e){return Cl(8390656,8,t,e)}function Af(t,e){return Du(2048,8,t,e)}function Z_(t,e){return Du(4,2,t,e)}function ew(t,e){return Du(4,4,t,e)}function tw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nw(t,e,n){return n=n!=null?n.concat([t]):null,Du(4,4,tw.bind(null,e,t),n)}function Cf(){}function rw(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function iw(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sw(t,e,n){return fi&21?(pn(n,e)||(n=c_(),Ne.lanes|=n,pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function cA(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Xc.transition;Xc.transition={};try{t(!1),e()}finally{ye=n,Xc.transition=r}}function ow(){return rn().memoizedState}function dA(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aw(t))lw(e,n);else if(n=z_(t,e,n,r),n!==null){var i=Ct();fn(n,t,r,i),uw(n,e,r)}}function hA(t,e,n){var r=kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aw(t))lw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pn(l,o)){var u=e.interleaved;u===null?(i.next=i,yf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=z_(t,e,i,r),n!==null&&(i=Ct(),fn(n,t,r,i),uw(n,e,r))}}function aw(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function lw(t,e){Io=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nf(t,n)}}var iu={readContext:nn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},fA={readContext:nn,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:xg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,tw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dA.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:Cg,useDebugValue:Cf,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=Cg(!1),e=t[0];return t=cA.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=En();if(Re){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Ze===null)throw Error(B(349));fi&30||H_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xg(Q_.bind(null,r,s,t),[t]),r.flags|=2048,Ho(9,K_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=Ze.identifierPrefix;if(Re){var n=Bn,r=Un;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pA={readContext:nn,useCallback:rw,useContext:nn,useEffect:Af,useImperativeHandle:nw,useInsertionEffect:Z_,useLayoutEffect:ew,useMemo:iw,useReducer:Yc,useRef:J_,useState:function(){return Yc(Go)},useDebugValue:Cf,useDeferredValue:function(t){var e=rn();return sw(e,He.memoizedState,t)},useTransition:function(){var t=Yc(Go)[0],e=rn().memoizedState;return[t,e]},useMutableSource:q_,useSyncExternalStore:G_,useId:ow,unstable_isNewReconciler:!1},mA={readContext:nn,useCallback:rw,useContext:nn,useEffect:Af,useImperativeHandle:nw,useInsertionEffect:Z_,useLayoutEffect:ew,useMemo:iw,useReducer:Jc,useRef:J_,useState:function(){return Jc(Go)},useDebugValue:Cf,useDeferredValue:function(t){var e=rn();return He===null?e.memoizedState=t:sw(e,He.memoizedState,t)},useTransition:function(){var t=Jc(Go)[0],e=rn().memoizedState;return[t,e]},useMutableSource:q_,useSyncExternalStore:G_,useId:ow,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function th(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ou={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=kr(t),s=qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(fn(e,t,i,r),Sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=kr(t),s=qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(fn(e,t,i,r),Sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=kr(t),i=qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=xr(t,i,r),e!==null&&(fn(e,t,r,n),Sl(e,t,r))}};function Rg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,r)||!Fo(i,s):!0}function cw(t,e,n){var r=!1,i=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Lt(e)?di:wt.current,r=e.contextTypes,s=(r=r!=null)?ds(t,i):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ou,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ou.enqueueReplaceState(e,e.state,null)}function nh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},vf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Lt(e)?di:wt.current,i.context=ds(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(th(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ou.enqueueReplaceState(i,i.state,null),tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",r=e;do n+=$I(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gA=typeof WeakMap=="function"?WeakMap:Map;function dw(t,e,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ou||(ou=!0,fh=r),rh(t,e)},n}function hw(t,e,n){n=qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rh(t,e),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=PA.bind(null,t,e,n),e.then(t,t))}function Ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qn(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var yA=rr.ReactCurrentOwner,Ot=!1;function At(t,e,n,r){e.child=t===null?B_(e,null,n,r):fs(e,t.child,n,r)}function Dg(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=If(t,e,n,r,s,i),n=Sf(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Re&&n&&df(e),e.flags|=1,At(t,e,r,i),e.child)}function Og(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fw(t,e,s,r,i)):(t=Pl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,r)&&t.ref===e.ref)return Jn(t,e,i)}return e.flags|=1,t=Pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function fw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fo(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,Jn(t,e,i)}return ih(t,e,n,r,i)}function pw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Yi,Bt),Bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(Yi,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(Yi,Bt),Bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(Yi,Bt),Bt|=r;return At(t,e,i,n),e.child}function mw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ih(t,e,n,r,i){var s=Lt(n)?di:wt.current;return s=ds(e,s),rs(e,i),n=If(t,e,n,r,s,i),r=Sf(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Re&&r&&df(e),e.flags|=1,At(t,e,n,i),e.child)}function Vg(t,e,n,r,i){if(Lt(n)){var s=!0;Xl(e)}else s=!1;if(rs(e,i),e.stateNode===null)xl(t,e),cw(e,n,r),nh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=nn(c):(c=Lt(n)?di:wt.current,c=ds(e,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&kg(e,o,r,c),hr=!1;var y=e.memoizedState;o.state=y,tu(e,r,o,i),u=e.memoizedState,l!==r||y!==u||Vt.current||hr?(typeof h=="function"&&(th(e,n,h,r),u=e.memoizedState),(l=hr||Rg(e,n,l,r,y,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:un(e.type,l),o.props=c,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=nn(u):(u=Lt(n)?di:wt.current,u=ds(e,u));var I=n.getDerivedStateFromProps;(h=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&kg(e,o,r,u),hr=!1,y=e.memoizedState,o.state=y,tu(e,r,o,i);var x=e.memoizedState;l!==m||y!==x||Vt.current||hr?(typeof I=="function"&&(th(e,n,I,r),x=e.memoizedState),(c=hr||Rg(e,n,c,r,y,x,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return sh(t,e,n,r,s,i)}function sh(t,e,n,r,i,s){mw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wg(e,n,!1),Jn(t,e,s);r=e.stateNode,yA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,l,s)):At(t,e,l,s),e.memoizedState=r.state,i&&wg(e,n,!0),e.child}function gw(t){var e=t.stateNode;e.pendingContext?_g(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_g(t,e.context,!1),_f(t,e.containerInfo)}function Lg(t,e,n,r,i){return hs(),ff(i),e.flags|=256,At(t,e,n,r),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function yw(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Pe,i&1),t===null)return Zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mu(o,r,0,null),t=li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ah(n),e.memoizedState=oh,t):xf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return vA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Pr(l,s):(s=li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=oh,r}return s=t.child,t=s.sibling,r=Pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xf(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&ff(r),fs(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zc(Error(B(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Mu({mode:"visible",children:r.children},i,0,null),s=li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=ah(o),e.memoizedState=oh,s);if(!(e.mode&1))return ul(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=Zc(s,r,void 0),ul(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ot||l){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yn(t,i),fn(r,t,i,-1))}return Df(),r=Zc(Error(B(421))),ul(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=NA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=Cr(i.nextSibling),Wt=e,Re=!0,dn=null,t!==null&&(Yt[Jt++]=Un,Yt[Jt++]=Bn,Yt[Jt++]=hi,Un=t.id,Bn=t.overflow,hi=e),e=xf(e,r.children),e.flags|=4096,e)}function Mg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),eh(t.return,e,n)}function ed(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,n,e);else if(t.tag===19)Mg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ed(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ed(e,!0,n,null,s);break;case"together":ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _A(t,e,n){switch(e.tag){case 3:gw(e),hs();break;case 5:W_(e);break;case 1:Lt(e.type)&&Xl(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(Zl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?yw(t,e,n):(Se(Pe,Pe.current&1),t=Jn(t,e,n),t!==null?t.sibling:null);Se(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,pw(t,e,n)}return Jn(t,e,n)}var _w,lh,ww,Ew;_w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lh=function(){};ww=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ii(An.current);var s=null;switch(n){case"input":i=Pd(t,i),r=Pd(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=Dd(t,i),r=Dd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kl)}Vd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ce("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ew=function(t,e,n,r){n!==r&&(e.flags|=4)};function io(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wA(t,e,n){var r=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Lt(e.type)&&Ql(),mt(e),null;case 3:return r=e.stateNode,ps(),xe(Vt),xe(wt),Ef(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(gh(dn),dn=null))),lh(t,e),mt(e),null;case 5:wf(e);var i=ii(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)ww(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return mt(e),null}if(t=ii(An.current),al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tn]=e,r[zo]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)Ce(co[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Gm(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":Km(r,s),Ce("invalid",r)}Vd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),i=["children",""+l]):bo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Ja(r),Hm(r,s,!0);break;case"textarea":Ja(r),Qm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Kl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tn]=e,t[zo]=r,_w(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ld(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)Ce(co[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":Gm(t,r),i=Pd(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":Km(t,r),i=Dd(t,r),Ce("invalid",t);break;default:i=r}Vd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Jv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Do(t,u):typeof u=="number"&&Do(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ce("scroll",t):u!=null&&Xh(t,s,u,o))}switch(n){case"input":Ja(t),Hm(t,r,!1);break;case"textarea":Ja(t),Qm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)Ew(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ii(Wo.current),ii(An.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return mt(e),null;case 13:if(xe(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&zt!==null&&e.mode&1&&!(e.flags&128))F_(),hs(),e.flags|=98560,s=!1;else if(s=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Tn]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else dn!==null&&(gh(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ke===0&&(Ke=3):Df())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return ps(),lh(t,e),t===null&&Uo(e.stateNode.containerInfo),mt(e),null;case 10:return gf(e.type._context),mt(e),null;case 17:return Lt(e.type)&&Ql(),mt(e),null;case 19:if(xe(Pe),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)io(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nu(t),o!==null){for(e.flags|=128,io(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>gs&&(e.flags|=128,r=!0,io(s,!1),e.lanes=4194304)}else{if(!r)if(t=nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return mt(e),null}else 2*Be()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,r=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=Pe.current,Se(Pe,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return bf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function EA(t,e){switch(hf(e),e.tag){case 1:return Lt(e.type)&&Ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),xe(Vt),xe(wt),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(xe(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Pe),null;case 4:return ps(),null;case 10:return gf(e.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var cl=!1,vt=!1,TA=typeof WeakSet=="function"?WeakSet:Set,q=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function uh(t,e,n){try{n()}catch(r){Le(t,e,r)}}var jg=!1;function IA(t,e){if(Gd=ql,t=C_(),cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,m=t,y=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)y=m,m=I;for(;;){if(m===t)break t;if(y===n&&++c===i&&(l=o),y===s&&++h===r&&(u=o),(I=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hd={focusedElem:t,selectionRange:n},ql=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,b=x.memoizedState,E=e.stateNode,T=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:un(e.type,P),b);E.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(L){Le(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return x=jg,jg=!1,x}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&uh(e,n,s)}i=i.next}while(i!==r)}}function Vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tw(t){var e=t.alternate;e!==null&&(t.alternate=null,Tw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[zo],delete e[Xd],delete e[sA],delete e[oA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iw(t){return t.tag===5||t.tag===3||t.tag===4}function Fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kl));else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}function hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hh(t,e,n),t=t.sibling;t!==null;)hh(t,e,n),t=t.sibling}var nt=null,cn=!1;function ur(t,e,n){for(n=n.child;n!==null;)Sw(t,e,n),n=n.sibling}function Sw(t,e,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(xu,n)}catch{}switch(n.tag){case 5:vt||Xi(n,e);case 6:var r=nt,i=cn;nt=null,ur(t,e,n),nt=r,cn=i,nt!==null&&(cn?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(cn?(t=nt,n=n.stateNode,t.nodeType===8?Hc(t.parentNode,n):t.nodeType===1&&Hc(t,n),Mo(t)):Hc(nt,n.stateNode));break;case 4:r=nt,i=cn,nt=n.stateNode.containerInfo,cn=!0,ur(t,e,n),nt=r,cn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uh(n,e,o),i=i.next}while(i!==r)}ur(t,e,n);break;case 1:if(!vt&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Le(n,e,l)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,ur(t,e,n),vt=r):ur(t,e,n);break;default:ur(t,e,n)}}function Ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TA),e.forEach(function(r){var i=bA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,cn=!1;break e;case 3:nt=l.stateNode.containerInfo,cn=!0;break e;case 4:nt=l.stateNode.containerInfo,cn=!0;break e}l=l.return}if(nt===null)throw Error(B(160));Sw(s,o,i),nt=null,cn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Aw(e,t),e=e.sibling}function Aw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),_n(t),r&4){try{So(3,t,t.return),Vu(3,t)}catch(P){Le(t,t.return,P)}try{So(5,t,t.return)}catch(P){Le(t,t.return,P)}}break;case 1:ln(e,t),_n(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(ln(e,t),_n(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var i=t.stateNode;try{Do(i,"")}catch(P){Le(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hv(i,s),Ld(l,o);var c=Ld(l,s);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?Jv(i,m):h==="dangerouslySetInnerHTML"?Xv(i,m):h==="children"?Do(i,m):Xh(i,h,m,c)}switch(l){case"input":Nd(i,s);break;case"textarea":Kv(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Zi(i,!!s.multiple,I,!1):y!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[zo]=s}catch(P){Le(t,t.return,P)}}break;case 6:if(ln(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Le(t,t.return,P)}}break;case 3:if(ln(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(P){Le(t,t.return,P)}break;case 4:ln(e,t),_n(t);break;case 13:ln(e,t),_n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pf=Be())),r&4&&Ug(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(c=vt)||h,ln(e,t),vt=c):ln(e,t),_n(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(m=q=h;q!==null;){switch(y=q,I=y.child,y.tag){case 0:case 11:case 14:case 15:So(4,y,y.return);break;case 1:Xi(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){Le(r,n,P)}}break;case 5:Xi(y,y.return);break;case 22:if(y.memoizedState!==null){zg(m);continue}}I!==null?(I.return=y,q=I):zg(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Yv("display",o))}catch(P){Le(t,t.return,P)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Le(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ln(e,t),_n(t),r&4&&Ug(t);break;case 21:break;default:ln(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Do(i,""),r.flags&=-33);var s=Fg(t);hh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Fg(t);dh(t,l,o);break;default:throw Error(B(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SA(t,e,n){q=t,Cw(t)}function Cw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||vt;l=cl;var c=vt;if(cl=o,(vt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?$g(i):u!==null?(u.return=o,q=u):$g(i);for(;s!==null;)q=s,Cw(s),s=s.sibling;q=i,cl=l,vt=c}Bg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Bg(t)}}function Bg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ag(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ag(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Mo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}vt||e.flags&512&&ch(e)}catch(y){Le(e,e.return,y)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function zg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function $g(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vu(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Le(e,i,u)}}var s=e.return;try{ch(e)}catch(u){Le(e,s,u)}break;case 5:var o=e.return;try{ch(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var AA=Math.ceil,su=rr.ReactCurrentDispatcher,Rf=rr.ReactCurrentOwner,en=rr.ReactCurrentBatchConfig,ue=0,Ze=null,We=null,st=0,Bt=0,Yi=Fr(0),Ke=0,Ko=null,pi=0,Lu=0,kf=0,Ao=null,bt=null,Pf=0,gs=1/0,Mn=null,ou=!1,fh=null,Rr=null,dl=!1,wr=null,au=0,Co=0,ph=null,Rl=-1,kl=0;function Ct(){return ue&6?Be():Rl!==-1?Rl:Rl=Be()}function kr(t){return t.mode&1?ue&2&&st!==0?st&-st:lA.transition!==null?(kl===0&&(kl=c_()),kl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:y_(t.type)),t):1}function fn(t,e,n,r){if(50<Co)throw Co=0,ph=null,Error(B(185));da(t,n,r),(!(ue&2)||t!==Ze)&&(t===Ze&&(!(ue&2)&&(Lu|=n),Ke===4&&pr(t,st)),Mt(t,r),n===1&&ue===0&&!(e.mode&1)&&(gs=Be()+500,bu&&Ur()))}function Mt(t,e){var n=t.callbackNode;lS(t,e);var r=Wl(t,t===Ze?st:0);if(r===0)n!==null&&Jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jm(n),e===1)t.tag===0?aA(Wg.bind(null,t)):L_(Wg.bind(null,t)),rA(function(){!(ue&6)&&Ur()}),n=null;else{switch(d_(r)){case 1:n=tf;break;case 4:n=l_;break;case 16:n=$l;break;case 536870912:n=u_;break;default:n=$l}n=Ow(n,xw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xw(t,e){if(Rl=-1,kl=0,ue&6)throw Error(B(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=Wl(t,t===Ze?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lu(t,r);else{e=r;var i=ue;ue|=2;var s=kw();(Ze!==t||st!==e)&&(Mn=null,gs=Be()+500,ai(t,e));do try{RA();break}catch(l){Rw(t,l)}while(!0);mf(),su.current=s,ue=i,We!==null?e=0:(Ze=null,st=0,e=Ke)}if(e!==0){if(e===2&&(i=Bd(t),i!==0&&(r=i,e=mh(t,i))),e===1)throw n=Ko,ai(t,0),pr(t,r),Mt(t,Be()),n;if(e===6)pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!CA(i)&&(e=lu(t,r),e===2&&(s=Bd(t),s!==0&&(r=s,e=mh(t,s))),e===1))throw n=Ko,ai(t,0),pr(t,r),Mt(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ei(t,bt,Mn);break;case 3:if(pr(t,r),(r&130023424)===r&&(e=Pf+500-Be(),10<e)){if(Wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qd(ei.bind(null,t,bt,Mn),e);break}ei(t,bt,Mn);break;case 4:if(pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-hn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*AA(r/1960))-r,10<r){t.timeoutHandle=Qd(ei.bind(null,t,bt,Mn),r);break}ei(t,bt,Mn);break;case 5:ei(t,bt,Mn);break;default:throw Error(B(329))}}}return Mt(t,Be()),t.callbackNode===n?xw.bind(null,t):null}function mh(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(ai(t,e).flags|=256),t=lu(t,e),t!==2&&(e=bt,bt=n,e!==null&&gh(e)),t}function gh(t){bt===null?bt=t:bt.push.apply(bt,t)}function CA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~kf,e&=~Lu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hn(e),r=1<<n;t[n]=-1,e&=~r}}function Wg(t){if(ue&6)throw Error(B(327));is();var e=Wl(t,0);if(!(e&1))return Mt(t,Be()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var r=Bd(t);r!==0&&(e=r,n=mh(t,r))}if(n===1)throw n=Ko,ai(t,0),pr(t,e),Mt(t,Be()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ei(t,bt,Mn),Mt(t,Be()),null}function Nf(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(gs=Be()+500,bu&&Ur())}}function mi(t){wr!==null&&wr.tag===0&&!(ue&6)&&is();var e=ue;ue|=1;var n=en.transition,r=ye;try{if(en.transition=null,ye=1,t)return t()}finally{ye=r,en.transition=n,ue=e,!(ue&6)&&Ur()}}function bf(){Bt=Yi.current,xe(Yi)}function ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nA(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ql();break;case 3:ps(),xe(Vt),xe(wt),Ef();break;case 5:wf(r);break;case 4:ps();break;case 13:xe(Pe);break;case 19:xe(Pe);break;case 10:gf(r.type._context);break;case 22:case 23:bf()}n=n.return}if(Ze=t,We=t=Pr(t.current,null),st=Bt=e,Ke=0,Ko=null,kf=Lu=pi=0,bt=Ao=null,ri!==null){for(e=0;e<ri.length;e++)if(n=ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ri=null}return t}function Rw(t,e){do{var n=We;try{if(mf(),Al.current=iu,ru){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ru=!1}if(fi=0,Xe=He=Ne=null,Io=!1,qo=0,Rf.current=null,n===null||n.return===null){Ke=1,Ko=e,We=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var I=Ng(o);if(I!==null){I.flags&=-257,bg(I,o,l,s,e),I.mode&1&&Pg(s,c,e),e=I,u=c;var x=e.updateQueue;if(x===null){var P=new Set;P.add(u),e.updateQueue=P}else x.add(u);break e}else{if(!(e&1)){Pg(s,c,e),Df();break e}u=Error(B(426))}}else if(Re&&l.mode&1){var b=Ng(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),bg(b,o,l,s,e),ff(ms(u,l));break e}}s=u=ms(u,l),Ke!==4&&(Ke=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=dw(s,u,e);Sg(s,E);break e;case 1:l=u;var T=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Rr===null||!Rr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=hw(s,l,e);Sg(s,L);break e}}s=s.return}while(s!==null)}Nw(n)}catch(R){e=R,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function kw(){var t=su.current;return su.current=iu,t===null?iu:t}function Df(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ze===null||!(pi&268435455)&&!(Lu&268435455)||pr(Ze,st)}function lu(t,e){var n=ue;ue|=2;var r=kw();(Ze!==t||st!==e)&&(Mn=null,ai(t,e));do try{xA();break}catch(i){Rw(t,i)}while(!0);if(mf(),ue=n,su.current=r,We!==null)throw Error(B(261));return Ze=null,st=0,Ke}function xA(){for(;We!==null;)Pw(We)}function RA(){for(;We!==null&&!ZI();)Pw(We)}function Pw(t){var e=Dw(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?Nw(t):We=e,Rf.current=null}function Nw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=EA(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,We=null;return}}else if(n=wA(n,e,Bt),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Ke===0&&(Ke=5)}function ei(t,e,n){var r=ye,i=en.transition;try{en.transition=null,ye=1,kA(t,e,n,r)}finally{en.transition=i,ye=r}return null}function kA(t,e,n,r){do is();while(wr!==null);if(ue&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uS(t,s),t===Ze&&(We=Ze=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,Ow($l,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=ye;ye=1;var l=ue;ue|=4,Rf.current=null,IA(t,n),Aw(n,t),QS(Hd),ql=!!Gd,Hd=Gd=null,t.current=n,SA(n),eS(),ue=l,ye=o,en.transition=s}else t.current=n;if(dl&&(dl=!1,wr=t,au=i),s=t.pendingLanes,s===0&&(Rr=null),rS(n.stateNode),Mt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ou)throw ou=!1,t=fh,fh=null,t;return au&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===ph?Co++:(Co=0,ph=t):Co=0,Ur(),null}function is(){if(wr!==null){var t=d_(au),e=en.transition,n=ye;try{if(en.transition=null,ye=16>t?16:t,wr===null)var r=!1;else{if(t=wr,wr=null,au=0,ue&6)throw Error(B(331));var i=ue;for(ue|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:So(8,h,s)}var m=h.child;if(m!==null)m.return=h,q=m;else for(;q!==null;){h=q;var y=h.sibling,I=h.return;if(Tw(h),h===c){q=null;break}if(y!==null){y.return=I,q=y;break}q=I}}}var x=s.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,q=E;break e}q=s.return}}var T=t.current;for(q=T;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=T;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vu(9,l)}}catch(R){Le(l,l.return,R)}if(l===o){q=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,q=L;break e}q=l.return}}if(ue=i,Ur(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(xu,t)}catch{}r=!0}return r}finally{ye=n,en.transition=e}}return!1}function qg(t,e,n){e=ms(n,e),e=dw(t,e,1),t=xr(t,e,1),e=Ct(),t!==null&&(da(t,1,e),Mt(t,e))}function Le(t,e,n){if(t.tag===3)qg(t,t,n);else for(;e!==null;){if(e.tag===3){qg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){t=ms(n,t),t=hw(e,t,1),e=xr(e,t,1),t=Ct(),e!==null&&(da(e,1,t),Mt(e,t));break}}e=e.return}}function PA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(st&n)===n&&(Ke===4||Ke===3&&(st&130023424)===st&&500>Be()-Pf?ai(t,0):kf|=n),Mt(t,e)}function bw(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=Ct();t=Yn(t,e),t!==null&&(da(t,e,n),Mt(t,n))}function NA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bw(t,n)}function bA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),bw(t,n)}var Dw;Dw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,_A(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Re&&e.flags&1048576&&M_(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xl(t,e),t=e.pendingProps;var i=ds(e,wt.current);rs(e,n),i=If(null,e,r,t,i,n);var s=Sf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(s=!0,Xl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vf(e),i.updater=Ou,e.stateNode=i,i._reactInternals=e,nh(e,r,t,n),e=sh(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&df(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=OA(r),t=un(r,t),i){case 0:e=ih(null,e,r,t,n);break e;case 1:e=Vg(null,e,r,t,n);break e;case 11:e=Dg(null,e,r,t,n);break e;case 14:e=Og(null,e,r,un(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Vg(t,e,r,i,n);case 3:e:{if(gw(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$_(t,e),tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ms(Error(B(423)),e),e=Lg(t,e,r,n,i);break e}else if(r!==i){i=ms(Error(B(424)),e),e=Lg(t,e,r,n,i);break e}else for(zt=Cr(e.stateNode.containerInfo.firstChild),Wt=e,Re=!0,dn=null,n=B_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),r===i){e=Jn(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return W_(e),t===null&&Zd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Kd(r,i)?o=null:s!==null&&Kd(r,s)&&(e.flags|=32),mw(t,e),At(t,e,o,n),e.child;case 6:return t===null&&Zd(e),null;case 13:return yw(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fs(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Dg(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(Zl,r._currentValue),r._currentValue=o,s!==null)if(pn(s.value,o)){if(s.children===i.children&&!Vt.current){e=Jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=qn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),eh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=nn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),Og(t,e,r,i,n);case 15:return fw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),xl(t,e),e.tag=1,Lt(r)?(t=!0,Xl(e)):t=!1,rs(e,n),cw(e,r,i),nh(e,r,i,n),sh(null,e,r,!0,t,n);case 19:return vw(t,e,n);case 22:return pw(t,e,n)}throw Error(B(156,e.tag))};function Ow(t,e){return a_(t,e)}function DA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new DA(t,e,n,r)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OA(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jh)return 11;if(t===Zh)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return li(n.children,i,s,e);case Yh:o=8,i|=8;break;case Cd:return t=Zt(12,n,e,i|2),t.elementType=Cd,t.lanes=s,t;case xd:return t=Zt(13,n,e,i),t.elementType=xd,t.lanes=s,t;case Rd:return t=Zt(19,n,e,i),t.elementType=Rd,t.lanes=s,t;case Wv:return Mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zv:o=10;break e;case $v:o=9;break e;case Jh:o=11;break e;case Zh:o=14;break e;case dr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function li(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Mu(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=Wv,t.lanes=n,t.stateNode={isHidden:!1},t}function td(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function nd(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vf(t,e,n,r,i,s,o,l,u){return t=new VA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(s),t}function LA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Vw(t){if(!t)return Or;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Lt(n))return V_(t,n,e)}return e}function Lw(t,e,n,r,i,s,o,l,u){return t=Vf(n,r,!0,t,i,s,o,l,u),t.context=Vw(null),n=t.current,r=Ct(),i=kr(n),s=qn(r,i),s.callback=e??null,xr(n,s,i),t.current.lanes=i,da(t,i,r),Mt(t,r),t}function ju(t,e,n,r){var i=e.current,s=Ct(),o=kr(i);return n=Vw(n),e.context===null?e.context=n:e.pendingContext=n,e=qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xr(i,e,o),t!==null&&(fn(t,i,o,s),Sl(t,i,o)),o}function uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lf(t,e){Gg(t,e),(t=t.alternate)&&Gg(t,e)}function MA(){return null}var Mw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mf(t){this._internalRoot=t}Fu.prototype.render=Mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));ju(t,e,null,null)};Fu.prototype.unmount=Mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mi(function(){ju(null,t,null,null)}),e[Xn]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=p_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&g_(t)}};function jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function jA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=uu(o);s.call(c)}}var o=Lw(e,r,t,0,null,!1,!1,"",Hg);return t._reactRootContainer=o,t[Xn]=o.current,Uo(t.nodeType===8?t.parentNode:t),mi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=uu(u);l.call(c)}}var u=Vf(t,0,!1,null,null,!1,!1,"",Hg);return t._reactRootContainer=u,t[Xn]=u.current,Uo(t.nodeType===8?t.parentNode:t),mi(function(){ju(e,u,n,r)}),u}function Bu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=uu(o);l.call(u)}}ju(e,o,t,i)}else o=jA(n,e,t,i,r);return uu(o)}h_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(nf(e,n|1),Mt(e,Be()),!(ue&6)&&(gs=Be()+500,Ur()))}break;case 13:mi(function(){var r=Yn(t,1);if(r!==null){var i=Ct();fn(r,t,1,i)}}),Lf(t,1)}};rf=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=Ct();fn(e,t,134217728,n)}Lf(t,134217728)}};f_=function(t){if(t.tag===13){var e=kr(t),n=Yn(t,e);if(n!==null){var r=Ct();fn(n,t,e,r)}Lf(t,e)}};p_=function(){return ye};m_=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};jd=function(t,e,n){switch(e){case"input":if(Nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nu(r);if(!i)throw Error(B(90));Gv(r),Nd(r,i)}}}break;case"textarea":Kv(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};t_=Nf;n_=mi;var FA={usingClientEntryPoint:!1,Events:[fa,qi,Nu,Zv,e_,Nf]},so={findFiberByHostInstance:ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},UA={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=s_(t),t===null?null:t.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||MA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{xu=hl.inject(UA),Sn=hl}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FA;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(e))throw Error(B(200));return LA(t,e,null,n)};Gt.createRoot=function(t,e){if(!jf(t))throw Error(B(299));var n=!1,r="",i=Mw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vf(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,Uo(t.nodeType===8?t.parentNode:t),new Mf(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=s_(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return mi(t)};Gt.hydrate=function(t,e,n){if(!Uu(e))throw Error(B(200));return Bu(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!jf(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Mw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lw(e,null,t,1,n??null,i,!1,s,o),t[Xn]=e.current,Uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fu(e)};Gt.render=function(t,e,n){if(!Uu(e))throw Error(B(200));return Bu(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!Uu(t))throw Error(B(40));return t._reactRootContainer?(mi(function(){Bu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};Gt.unstable_batchedUpdates=Nf;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Uu(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Bu(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function jw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jw)}catch(t){console.error(t)}}jw(),jv.exports=Gt;var BA=jv.exports,Kg=BA;Sd.createRoot=Kg.createRoot,Sd.hydrateRoot=Kg.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(this,arguments)}var Er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Er||(Er={}));const Qg="popstate";function zA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return yh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uw(i)}return WA(e,n,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Fw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $A(){return Math.random().toString(36).substr(2,8)}function Xg(t,e){return{usr:t.state,key:t.key,idx:e}}function yh(t,e,n,r){return n===void 0&&(n=null),Qo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ps(e):e,{state:n,key:e&&e.key||r||$A()})}function Uw(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function WA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Er.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Qo({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){l=Er.Pop;let b=h(),E=b==null?null:b-c;c=b,u&&u({action:l,location:P.location,delta:E})}function y(b,E){l=Er.Push;let T=yh(P.location,b,E);c=h()+1;let S=Xg(T,c),L=P.createHref(T);try{o.pushState(S,"",L)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(L)}s&&u&&u({action:l,location:P.location,delta:1})}function I(b,E){l=Er.Replace;let T=yh(P.location,b,E);c=h();let S=Xg(T,c),L=P.createHref(T);o.replaceState(S,"",L),s&&u&&u({action:l,location:P.location,delta:0})}function x(b){let E=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof b=="string"?b:Uw(b);return T=T.replace(/ $/,"%20"),Ge(E,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,E)}let P={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Qg,m),u=b,()=>{i.removeEventListener(Qg,m),u=null}},createHref(b){return e(i,b)},createURL:x,encodeLocation(b){let E=x(b);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:y,replace:I,go(b){return o.go(b)}};return P}var Yg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yg||(Yg={}));function qA(t,e,n){return n===void 0&&(n="/"),GA(t,e,n)}function GA(t,e,n,r){let i=typeof e=="string"?Ps(e):e,s=$w(i.pathname||"/",n);if(s==null)return null;let o=Bw(t);HA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=sC(s);l=nC(o[u],c)}return l}function Bw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ui([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Bw(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:eC(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of zw(s.path))i(s,o,u)}),e}function zw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function HA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const KA=/^:[\w-]+$/,QA=3,XA=2,YA=1,JA=10,ZA=-2,Jg=t=>t==="*";function eC(t,e){let n=t.split("/"),r=n.length;return n.some(Jg)&&(r+=ZA),e&&(r+=XA),n.filter(i=>!Jg(i)).reduce((i,s)=>i+(KA.test(s)?QA:s===""?YA:JA),r)}function tC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function nC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",m=rC({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),y=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:ui([s,m.pathname]),pathnameBase:uC(ui([s,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(s=ui([s,m.pathnameBase]))}return o}function rC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=iC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:y,isOptional:I}=h;if(y==="*"){let P=l[m]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const x=l[m];return I&&!x?c[y]=void 0:c[y]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function iC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Fw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $w(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function oC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ps(t):t;return{pathname:n?n.startsWith("/")?n:aC(n,e):e,search:cC(r),hash:dC(i)}}function aC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ww(t,e){let n=lC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ps(t):(i=Qo({},t),Ge(!i.pathname||!i.pathname.includes("?"),rd("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),rd("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),rd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}l=m>=0?e[m]:"/"}let u=oC(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const ui=t=>t.join("/").replace(/\/\/+/g,"/"),uC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function hC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Gw=["post","put","patch","delete"];new Set(Gw);const fC=["get",...Gw];new Set(fC);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xo.apply(this,arguments)}const Ff=O.createContext(null),pC=O.createContext(null),ma=O.createContext(null),zu=O.createContext(null),Br=O.createContext({outlet:null,matches:[],isDataRoute:!1}),Hw=O.createContext(null);function ga(){return O.useContext(zu)!=null}function $u(){return ga()||Ge(!1),O.useContext(zu).location}function Kw(t){O.useContext(ma).static||O.useLayoutEffect(t)}function bn(){let{isDataRoute:t}=O.useContext(Br);return t?xC():mC()}function mC(){ga()||Ge(!1);let t=O.useContext(Ff),{basename:e,future:n,navigator:r}=O.useContext(ma),{matches:i}=O.useContext(Br),{pathname:s}=$u(),o=JSON.stringify(Ww(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return Kw(()=>{l.current=!0}),O.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=qw(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:ui([e,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[e,r,o,s,t])}function ya(){let{matches:t}=O.useContext(Br),e=t[t.length-1];return e?e.params:{}}function gC(t,e){return yC(t,e)}function yC(t,e,n,r){ga()||Ge(!1);let{navigator:i}=O.useContext(ma),{matches:s}=O.useContext(Br),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=$u(),h;if(e){var m;let b=typeof e=="string"?Ps(e):e;u==="/"||(m=b.pathname)!=null&&m.startsWith(u)||Ge(!1),h=b}else h=c;let y=h.pathname||"/",I=y;if(u!=="/"){let b=u.replace(/^\//,"").split("/");I="/"+y.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=qA(t,{pathname:I}),P=TC(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:ui([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:ui([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&P?O.createElement(zu.Provider,{value:{location:Xo({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Er.Pop}},P):P}function vC(){let t=CC(),e=hC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const _C=O.createElement(vC,null);class wC extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Br.Provider,{value:this.props.routeContext},O.createElement(Hw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function EC(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Ff);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Br.Provider,{value:e},r)}function TC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);h>=0||Ge(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:y,errors:I}=n,x=m.route.loader&&y[m.route.id]===void 0&&(!I||I[m.route.id]===void 0);if(m.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,y)=>{let I,x=!1,P=null,b=null;n&&(I=l&&m.route.id?l[m.route.id]:void 0,P=m.route.errorElement||_C,u&&(c<0&&y===0?(RC("route-fallback"),x=!0,b=null):c===y&&(x=!0,b=m.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,y+1)),T=()=>{let S;return I?S=P:x?S=b:m.route.Component?S=O.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=h,O.createElement(EC,{match:m,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:S})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?O.createElement(wC,{location:n.location,revalidation:n.revalidation,component:P,error:I,children:T(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):T()},null)}var Qw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Qw||{}),Xw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Xw||{});function IC(t){let e=O.useContext(Ff);return e||Ge(!1),e}function SC(t){let e=O.useContext(pC);return e||Ge(!1),e}function AC(t){let e=O.useContext(Br);return e||Ge(!1),e}function Yw(t){let e=AC(),n=e.matches[e.matches.length-1];return n.route.id||Ge(!1),n.route.id}function CC(){var t;let e=O.useContext(Hw),n=SC(),r=Yw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xC(){let{router:t}=IC(Qw.UseNavigateStable),e=Yw(Xw.UseNavigateStable),n=O.useRef(!1);return Kw(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Xo({fromRouteId:e},s)))},[t,e])}const Zg={};function RC(t,e,n){Zg[t]||(Zg[t]=!0)}function kC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function PC(t){let{to:e,replace:n,state:r,relative:i}=t;ga()||Ge(!1);let{future:s,static:o}=O.useContext(ma),{matches:l}=O.useContext(Br),{pathname:u}=$u(),c=bn(),h=qw(e,Ww(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return O.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function wn(t){Ge(!1)}function NC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Er.Pop,navigator:s,static:o=!1,future:l}=t;ga()&&Ge(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:Xo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ps(r));let{pathname:h="/",search:m="",hash:y="",state:I=null,key:x="default"}=r,P=O.useMemo(()=>{let b=$w(h,u);return b==null?null:{location:{pathname:b,search:m,hash:y,state:I,key:x},navigationType:i}},[u,h,m,y,I,x,i]);return P==null?null:O.createElement(ma.Provider,{value:c},O.createElement(zu.Provider,{children:n,value:P}))}function bC(t){let{children:e,location:n}=t;return gC(vh(e),n)}new Promise(()=>{});function vh(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,vh(r.props.children,s));return}r.type!==wn&&Ge(!1),!r.props.index||!r.props.children||Ge(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=vh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const DC="6";try{window.__reactRouterVersion=DC}catch{}const OC="startTransition",ey=PI[OC];function VC(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=zA({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=O.useCallback(m=>{c&&ey?ey(()=>u(m)):u(m)},[u,c]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.useEffect(()=>kC(r),[r]),O.createElement(NC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var ty;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ty||(ty={}));var ny;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ny||(ny={}));var ry={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},LC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(y=64)),r.push(n[h],n[m],n[y],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new MC;const y=s<<2|l>>4;if(r.push(y),c!==64){const I=l<<4&240|c>>2;if(r.push(I),m!==64){const x=c<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jC=function(t){const e=Jw(t);return Zw.encodeByteArray(e,!0)},cu=function(t){return jC(t).replace(/\./g,"")},eE=function(t){try{return Zw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=()=>FC().__FIREBASE_DEFAULTS__,BC=()=>{if(typeof process>"u"||typeof ry>"u")return;const t=ry.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eE(t[1]);return e&&JSON.parse(e)},Wu=()=>{try{return UC()||BC()||zC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tE=t=>{var e,n;return(n=(e=Wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$C=t=>{const e=tE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nE=()=>{var t;return(t=Wu())===null||t===void 0?void 0:t.config},rE=t=>{var e;return(e=Wu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cu(JSON.stringify(n)),cu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function HC(){var t;const e=(t=Wu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YC(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JC(){return!HC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iE(){try{return typeof indexedDB=="object"}catch{return!1}}function sE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ZC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ex,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,l,r)}}function tx(t,e){return t.replace(nx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nx=/\{\$([^}]+)}/g;function rx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(iy(s)&&iy(o)){if(!Yo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function iy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ho(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ix(t,e){const n=new sx(t,e);return n.subscribe.bind(n)}class sx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ox(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=id),i.error===void 0&&(i.error=id),i.complete===void 0&&(i.complete=id);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ox(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function id(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ux(e))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ti){return this.instances.has(e)}getOptions(e=ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ti){return this.component?this.component.multipleInstances?e:ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lx(t){return t===ti?void 0:t}function ux(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ax(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const dx={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},hx=ae.INFO,fx={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},px=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uf{constructor(e){this.name=e,this._logLevel=hx,this._logHandler=px,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const mx=(t,e)=>e.some(n=>t instanceof n);let sy,oy;function gx(){return sy||(sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yx(){return oy||(oy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oE=new WeakMap,_h=new WeakMap,aE=new WeakMap,sd=new WeakMap,Bf=new WeakMap;function vx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oE.set(n,t)}).catch(()=>{}),Bf.set(e,t),e}function _x(t){if(_h.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_h.set(t,e)}let wh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wx(t){wh=t(wh)}function Ex(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(od(this),e,...n);return aE.set(r,e.sort?e.sort():[e]),Gn(r)}:yx().includes(t)?function(...e){return t.apply(od(this),e),Gn(oE.get(this))}:function(...e){return Gn(t.apply(od(this),e))}}function Tx(t){return typeof t=="function"?Ex(t):(t instanceof IDBTransaction&&_x(t),mx(t,gx())?new Proxy(t,wh):t)}function Gn(t){if(t instanceof IDBRequest)return vx(t);if(sd.has(t))return sd.get(t);const e=Tx(t);return e!==t&&(sd.set(t,e),Bf.set(e,t)),e}const od=t=>Bf.get(t);function qu(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Gn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Gn(o.result),u.oldVersion,u.newVersion,Gn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function ad(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Gn(n).then(()=>{})}const Ix=["get","getKey","getAll","getAllKeys","count"],Sx=["put","add","delete","clear"],ld=new Map;function ay(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ld.get(e))return ld.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Sx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ix.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ld.set(e,s),s}wx(t=>({...t,get:(e,n,r)=>ay(e,n)||t.get(e,n,r),has:(e,n)=>!!ay(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eh="@firebase/app",ly="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Uf("@firebase/app"),xx="@firebase/app-compat",Rx="@firebase/analytics-compat",kx="@firebase/analytics",Px="@firebase/app-check-compat",Nx="@firebase/app-check",bx="@firebase/auth",Dx="@firebase/auth-compat",Ox="@firebase/database",Vx="@firebase/data-connect",Lx="@firebase/database-compat",Mx="@firebase/functions",jx="@firebase/functions-compat",Fx="@firebase/installations",Ux="@firebase/installations-compat",Bx="@firebase/messaging",zx="@firebase/messaging-compat",$x="@firebase/performance",Wx="@firebase/performance-compat",qx="@firebase/remote-config",Gx="@firebase/remote-config-compat",Hx="@firebase/storage",Kx="@firebase/storage-compat",Qx="@firebase/firestore",Xx="@firebase/vertexai-preview",Yx="@firebase/firestore-compat",Jx="firebase",Zx="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="[DEFAULT]",eR={[Eh]:"fire-core",[xx]:"fire-core-compat",[kx]:"fire-analytics",[Rx]:"fire-analytics-compat",[Nx]:"fire-app-check",[Px]:"fire-app-check-compat",[bx]:"fire-auth",[Dx]:"fire-auth-compat",[Ox]:"fire-rtdb",[Vx]:"fire-data-connect",[Lx]:"fire-rtdb-compat",[Mx]:"fire-fn",[jx]:"fire-fn-compat",[Fx]:"fire-iid",[Ux]:"fire-iid-compat",[Bx]:"fire-fcm",[zx]:"fire-fcm-compat",[$x]:"fire-perf",[Wx]:"fire-perf-compat",[qx]:"fire-rc",[Gx]:"fire-rc-compat",[Hx]:"fire-gcs",[Kx]:"fire-gcs-compat",[Qx]:"fire-fst",[Yx]:"fire-fst-compat",[Xx]:"fire-vertex","fire-js":"fire-js",[Jx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=new Map,tR=new Map,Ih=new Map;function uy(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pn(t){const e=t.name;if(Ih.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Ih.set(e,t);for(const n of du.values())uy(n,t);for(const n of tR.values())uy(n,t);return!0}function Ns(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function In(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Ai("app","Firebase",nR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=Zx;function lE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Th,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=nE()),!n)throw Nr.create("no-options");const s=du.get(i);if(s){if(Yo(n,s.options)&&Yo(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new cx(i);for(const u of Ih.values())o.addComponent(u);const l=new rR(n,r,o);return du.set(i,l),l}function zf(t=Th){const e=du.get(t);if(!e&&t===Th&&nE())return lE();if(!e)throw Nr.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let i=(r=eR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(l.join(" "));return}Pn(new mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="firebase-heartbeat-database",sR=1,Jo="firebase-heartbeat-store";let ud=null;function uE(){return ud||(ud=qu(iR,sR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),ud}async function oR(t){try{const n=(await uE()).transaction(Jo),r=await n.objectStore(Jo).get(cE(t));return await n.done,r}catch(e){if(e instanceof Dn)Zn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function cy(t,e){try{const r=(await uE()).transaction(Jo,"readwrite");await r.objectStore(Jo).put(e,cE(t)),await r.done}catch(n){if(n instanceof Dn)Zn.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function cE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=1024,lR=30*24*60*60*1e3;class uR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=lR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dy(),{heartbeatsToSend:r,unsentEntries:i}=cR(this._heartbeatsCache.heartbeats),s=cu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zn.warn(n),""}}}function dy(){return new Date().toISOString().substring(0,10)}function cR(t,e=aR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iE()?sE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hy(t){return cu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){Pn(new mn("platform-logger",e=>new Ax(e),"PRIVATE")),Pn(new mn("heartbeat",e=>new uR(e),"PRIVATE")),tn(Eh,ly,t),tn(Eh,ly,"esm2017"),tn("fire-js","")}hR("");function $f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fR=dE,hE=new Ai("auth","Firebase",dE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new Uf("@firebase/auth");function pR(t,...e){hu.logLevel<=ae.WARN&&hu.warn(`Auth (${bs}): ${t}`,...e)}function Nl(t,...e){hu.logLevel<=ae.ERROR&&hu.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw Wf(t,...e)}function Cn(t,...e){return Wf(t,...e)}function fE(t,e,n){const r=Object.assign(Object.assign({},fR()),{[e]:n});return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return fE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hE.create(t,...e)}function J(t,e,...n){if(!t)throw Wf(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nl(e),new Error(e)}function er(t,e){t||zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mR(){return fy()==="http:"||fy()==="https:"}function fy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mR()||QC()||"connection"in navigator)?navigator.onLine:!0}function yR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=GC()||XC()}get(){return gR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new _a(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $r(t,e,n,r,i={}){return mE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=va(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return KC()||(c.referrerPolicy="no-referrer"),pE.fetch()(gE(t,t.config.apiHost,n,l),c)})}async function mE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vR),e);try{const i=new ER(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw fl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fE(t,h,c);gn(t,h)}}catch(i){if(i instanceof Dn)throw i;gn(t,"network-request-failed",{message:String(i)})}}async function wa(t,e,n,r,i={}){const s=await $r(t,e,n,r,i);return"mfaPendingCredential"in s&&gn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qf(t.config,i):`${t.config.apiScheme}://${i}`}function wR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ER{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),_R.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(t,e,r);return i.customData._tokenResponse=n,i}function py(t){return t!==void 0&&t.enterprise!==void 0}class TR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function IR(t,e){return $r(t,"GET","/v2/recaptchaConfig",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function yE(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AR(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=Gf(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xo(cd(i.auth_time)),issuedAtTime:xo(cd(i.iat)),expirationTime:xo(cd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cd(t){return Number(t)*1e3}function Gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=eE(n);return i?JSON.parse(i):(Nl("Failed to decode base64 JWT payload"),null)}catch(i){return Nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function my(t){const e=Gf(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&CR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zo(t,yE(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vE(s.providerUserInfo):[],l=kR(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ah(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function RR(t){const e=De(t);await fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vE(t){return t.map(e=>{var{providerId:n}=e,r=$f(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e){const n=await mE(t,{},async()=>{const r=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",pE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NR(t,e){return $r(t,"POST","/v2/accounts:revokeToken",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):my(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=my(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ss;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ah(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AR(this,e)}reload(){return RR(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await Zo(this,SR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:L,isAnonymous:R,providerData:N,stsTokenManager:v}=n;J(S&&v,e,"internal-error");const g=ss.fromJSON(this.name,v);J(typeof S=="string",e,"internal-error"),cr(m,e.name),cr(y,e.name),J(typeof L=="boolean",e,"internal-error"),J(typeof R=="boolean",e,"internal-error"),cr(I,e.name),cr(x,e.name),cr(P,e.name),cr(b,e.name),cr(E,e.name),cr(T,e.name);const w=new $n({uid:S,auth:e,email:y,emailVerified:L,displayName:m,isAnonymous:R,photoURL:x,phoneNumber:I,tenantId:P,stsTokenManager:g,createdAt:E,lastLoginAt:T});return N&&Array.isArray(N)&&(w.providerData=N.map(A=>Object.assign({},A))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ss;i.updateFromServerResponse(n);const s=new $n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ss;l.updateFromIdToken(r);const u=new $n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ah(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=new Map;function Wn(t){er(t instanceof Function,"Expected a class definition");let e=gy.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_E.type="NONE";const yy=_E;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(Wn(yy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Wn(yy);const o=bl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const m=$n._fromJSON(e,h);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new os(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new os(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(AE(e))return"Blackberry";if(CE(e))return"Webos";if(EE(e))return"Safari";if((e.includes("chrome/")||TE(e))&&!e.includes("edge/"))return"Chrome";if(SE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wE(t=Et()){return/firefox\//i.test(t)}function EE(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TE(t=Et()){return/crios\//i.test(t)}function IE(t=Et()){return/iemobile/i.test(t)}function SE(t=Et()){return/android/i.test(t)}function AE(t=Et()){return/blackberry/i.test(t)}function CE(t=Et()){return/webos/i.test(t)}function Hf(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bR(t=Et()){var e;return Hf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DR(){return YC()&&document.documentMode===10}function xE(t=Et()){return Hf(t)||SE(t)||CE(t)||AE(t)||/windows phone/i.test(t)||IE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e=[]){let n;switch(t){case"Browser":n=vy(Et());break;case"Worker":n=`${vy(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(t,e={}){return $r(t,"GET","/v2/passwordPolicy",zr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=6;class MR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _y(this),this.idTokenSubscription=new _y(this),this.beforeStateQueue=new OR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yE(this,{idToken:e}),r=await $n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(In(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(Hn(this));const n=e?De(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VR(this),n=new MR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=RE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ci(t){return De(t)}class _y{constructor(e){this.auth=e,this.observer=null,this.addObserver=ix(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FR(t){Gu=t}function kE(t){return Gu.loadJS(t)}function UR(){return Gu.recaptchaEnterpriseScript}function BR(){return Gu.gapiScript}function zR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $R="recaptcha-enterprise",WR="NO_RECAPTCHA";class qR{constructor(e){this.type=$R,this.auth=Ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{IR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new TR(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;py(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(WR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&py(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=UR();u.length!==0&&(u+=l),kE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function wy(t,e,n,r=!1){const i=new qR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ch(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await wy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await wy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t,e){const n=Ns(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yo(s,e??{}))return i;gn(i,"already-initialized")}return n.initialize({options:e})}function HR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KR(t,e,n){const r=Ci(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=PE(e),{host:o,port:l}=QR(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),XR()}function PE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QR(t){const e=PE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ey(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ey(o)}}}function Ey(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function YR(t,e){return $r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(t,e){return wa(t,"POST","/v1/accounts:signInWithPassword",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}async function ek(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Kf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ch(e,n,"signInWithPassword",JR);case"emailLink":return ZR(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ch(e,r,"signUpPassword",YR);case"emailLink":return ek(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return wa(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="http://localhost";class gi extends Kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$f(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:tk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rk(t){const e=ho(fo(t)).link,n=e?ho(fo(e)).deep_link_id:null,r=ho(fo(t)).deep_link_id;return(r?ho(fo(r)).link:null)||r||n||e||t}class Qf{constructor(e){var n,r,i,s,o,l;const u=ho(fo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,m=nk((i=u.mode)!==null&&i!==void 0?i:null);J(c&&h&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=rk(e);try{return new Qf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.providerId=Ds.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qf.parseLink(n);return J(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}Ds.PROVIDER_ID="password";Ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends NE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ea{constructor(){super("facebook.com")}static credential(e){return gi._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gi._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ea{constructor(){super("github.com")}static credential(e){return gi._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.GITHUB_SIGN_IN_METHOD="github.com";yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ea{constructor(){super("twitter.com")}static credential(e,n){return gi._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(t,e){return wa(t,"POST","/v1/accounts:signUp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $n._fromIdTokenResponse(e,r,i),o=Ty(r);return new yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ty(r);return new yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ty(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends Dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pu(e,n,r,i)}}function bE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pu._fromErrorAndOperation(t,s,e,r):s})}async function sk(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(t,e,n=!1){const{auth:r}=t;if(In(r.app))return Promise.reject(Hn(r));const i="reauthenticate";try{const s=await Zo(t,bE(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=Gf(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(t,e,n=!1){if(In(t.app))return Promise.reject(Hn(t));const r="signIn",i=await bE(t,r,e),s=await yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ak(t,e){return DE(Ci(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(t){const e=Ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lk(t,e,n){if(In(t.app))return Promise.reject(Hn(t));const r=Ci(t),o=await Ch(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ik).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&OE(t),u}),l=await yi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function uk(t,e,n){return In(t.app)?Promise.reject(Hn(t)):ak(De(t),Ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&OE(t),r})}function ck(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function dk(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function hk(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function fk(t){return De(t).signOut()}const mu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mu,"1"),this.storage.removeItem(mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=1e3,mk=10;class LE extends VE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LE.type="LOCAL";const gk=LE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME extends VE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ME.type="SESSION";const jE=ME;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await yk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Xf("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function _k(t){xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function wk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ek(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tk(){return FE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="firebaseLocalStorageDb",Ik=1,gu="firebaseLocalStorage",BE="fbase_key";class Ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ku(t,e){return t.transaction([gu],e?"readwrite":"readonly").objectStore(gu)}function Sk(){const t=indexedDB.deleteDatabase(UE);return new Ta(t).toPromise()}function xh(){const t=indexedDB.open(UE,Ik);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gu,{keyPath:BE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gu)?e(r):(r.close(),await Sk(),e(await xh()))})})}async function Iy(t,e,n){const r=Ku(t,!0).put({[BE]:e,value:n});return new Ta(r).toPromise()}async function Ak(t,e){const n=Ku(t,!1).get(e),r=await new Ta(n).toPromise();return r===void 0?null:r.value}function Sy(t,e){const n=Ku(t,!0).delete(e);return new Ta(n).toPromise()}const Ck=800,xk=3;class zE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hu._getInstance(Tk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wk(),!this.activeServiceWorker)return;this.sender=new vk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ek()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xh();return await Iy(e,mu,"1"),await Sy(e,mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Iy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ak(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ku(i,!1).getAll();return new Ta(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zE.type="LOCAL";const Rk=zE;new _a(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t,e){return e?Wn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf extends Kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pk(t){return DE(t.auth,new Yf(t),t.bypassAuthState)}function Nk(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),ok(n,new Yf(t),t.bypassAuthState)}async function bk(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),sk(n,new Yf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pk;case"linkViaPopup":case"linkViaRedirect":return bk;case"reauthViaPopup":case"reauthViaRedirect":return Nk;default:gn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=new _a(2e3,1e4);class Ji extends $E{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=Xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dk.get())};e()}}Ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="pendingRedirect",Dl=new Map;class Vk extends $E{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dl.get(this.auth._key());if(!e){try{const r=await Lk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dl.set(this.auth._key(),e)}return this.bypassAuthState||Dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lk(t,e){const n=Fk(e),r=jk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Mk(t,e){Dl.set(t._key(),e)}function jk(t){return Wn(t._redirectPersistence)}function Fk(t){return bl(Ok,t.config.apiKey,t.name)}async function Uk(t,e,n=!1){if(In(t.app))return Promise.reject(Hn(t));const r=Ci(t),i=kk(r,e),o=await new Vk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=10*60*1e3;class zk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$k(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ay(e))}saveEventToCache(e){this.cachedEventUids.add(Ay(e)),this.lastProcessedEventTime=Date.now()}}function Ay(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $k(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gk=/^https?/;async function Hk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wk(t);for(const n of e)try{if(Kk(n))return}catch{}gn(t,"unauthorized-domain")}function Kk(t){const e=Sh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gk.test(n))return!1;if(qk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=new _a(3e4,6e4);function Cy(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xk(t){return new Promise((e,n)=>{var r,i,s;function o(){Cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cy(),n(Cn(t,"network-request-failed"))},timeout:Qk.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const l=zR("iframefcb");return xn()[l]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},kE(`${BR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ol=null,e})}let Ol=null;function Yk(t){return Ol=Ol||Xk(t),Ol}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=new _a(5e3,15e3),Zk="__/auth/iframe",e1="emulator/auth/iframe",t1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r1(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qf(e,e1):`https://${t.config.authDomain}/${Zk}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=n1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${va(r).slice(1)}`}async function i1(t){const e=await Yk(t),n=xn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:r1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),l=xn().setTimeout(()=>{s(o)},Jk.get());function u(){xn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o1=500,a1=600,l1="_blank",u1="http://localhost";class xy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function c1(t,e,n,r=o1,i=a1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},s1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Et().toLowerCase();n&&(l=TE(c)?l1:n),wE(c)&&(e=e||u1,u.scrollbars="yes");const h=Object.entries(u).reduce((y,[I,x])=>`${y}${I}=${x},`,"");if(bR(c)&&l!=="_self")return d1(e||"",l),new xy(null);const m=window.open(e||"",l,h);J(m,t,"popup-blocked");try{m.focus()}catch{}return new xy(m)}function d1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="__/auth/handler",f1="emulator/auth/handler",p1=encodeURIComponent("fac");async function Ry(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof NE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Ea){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${p1}=${encodeURIComponent(u)}`:"";return`${m1(t)}?${va(l).slice(1)}${c}`}function m1({config:t}){return t.emulator?qf(t,f1):`https://${t.authDomain}/${h1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="webStorageSupport";class g1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jE,this._completeRedirectFn=Uk,this._overrideRedirectResult=Mk}async _openPopup(e,n,r,i){var s;er((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ry(e,n,r,Sh(),i);return c1(e,o,Xf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ry(e,n,r,Sh(),i);return _k(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(er(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await i1(e),r=new zk(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dd,{type:dd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dd];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xE()||EE()||Hf()}}const y1=g1;var ky="@firebase/auth",Py="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function w1(t){Pn(new mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:RE(t)},c=new jR(r,i,s,u);return HR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new mn("auth-internal",e=>{const n=Ci(e.getProvider("auth").getImmediate());return(r=>new v1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(ky,Py,_1(t)),tn(ky,Py,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=5*60,T1=rE("authIdTokenMaxAge")||E1;let Ny=null;const I1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>T1)return;const i=n==null?void 0:n.token;Ny!==i&&(Ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function S1(t=zf()){const e=Ns(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GR(t,{popupRedirectResolver:y1,persistence:[Rk,gk,jE]}),r=rE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=I1(s.toString());dk(n,o,()=>o(n.currentUser)),ck(n,l=>o(l))}}const i=tE("auth");return i&&KR(n,`http://${i}`),n}function A1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}FR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",A1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});w1("Browser");var by=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ci,qE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function w(){}w.prototype=g.prototype,v.D=g.prototype,v.prototype=new w,v.prototype.constructor=v,v.C=function(A,k,D){for(var C=Array(arguments.length-2),re=2;re<arguments.length;re++)C[re-2]=arguments[re];return g.prototype[k].apply(A,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,w){w||(w=0);var A=Array(16);if(typeof g=="string")for(var k=0;16>k;++k)A[k]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(k=0;16>k;++k)A[k]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=v.g[0],w=v.g[1],k=v.g[2];var D=v.g[3],C=g+(D^w&(k^D))+A[0]+3614090360&4294967295;g=w+(C<<7&4294967295|C>>>25),C=D+(k^g&(w^k))+A[1]+3905402710&4294967295,D=g+(C<<12&4294967295|C>>>20),C=k+(w^D&(g^w))+A[2]+606105819&4294967295,k=D+(C<<17&4294967295|C>>>15),C=w+(g^k&(D^g))+A[3]+3250441966&4294967295,w=k+(C<<22&4294967295|C>>>10),C=g+(D^w&(k^D))+A[4]+4118548399&4294967295,g=w+(C<<7&4294967295|C>>>25),C=D+(k^g&(w^k))+A[5]+1200080426&4294967295,D=g+(C<<12&4294967295|C>>>20),C=k+(w^D&(g^w))+A[6]+2821735955&4294967295,k=D+(C<<17&4294967295|C>>>15),C=w+(g^k&(D^g))+A[7]+4249261313&4294967295,w=k+(C<<22&4294967295|C>>>10),C=g+(D^w&(k^D))+A[8]+1770035416&4294967295,g=w+(C<<7&4294967295|C>>>25),C=D+(k^g&(w^k))+A[9]+2336552879&4294967295,D=g+(C<<12&4294967295|C>>>20),C=k+(w^D&(g^w))+A[10]+4294925233&4294967295,k=D+(C<<17&4294967295|C>>>15),C=w+(g^k&(D^g))+A[11]+2304563134&4294967295,w=k+(C<<22&4294967295|C>>>10),C=g+(D^w&(k^D))+A[12]+1804603682&4294967295,g=w+(C<<7&4294967295|C>>>25),C=D+(k^g&(w^k))+A[13]+4254626195&4294967295,D=g+(C<<12&4294967295|C>>>20),C=k+(w^D&(g^w))+A[14]+2792965006&4294967295,k=D+(C<<17&4294967295|C>>>15),C=w+(g^k&(D^g))+A[15]+1236535329&4294967295,w=k+(C<<22&4294967295|C>>>10),C=g+(k^D&(w^k))+A[1]+4129170786&4294967295,g=w+(C<<5&4294967295|C>>>27),C=D+(w^k&(g^w))+A[6]+3225465664&4294967295,D=g+(C<<9&4294967295|C>>>23),C=k+(g^w&(D^g))+A[11]+643717713&4294967295,k=D+(C<<14&4294967295|C>>>18),C=w+(D^g&(k^D))+A[0]+3921069994&4294967295,w=k+(C<<20&4294967295|C>>>12),C=g+(k^D&(w^k))+A[5]+3593408605&4294967295,g=w+(C<<5&4294967295|C>>>27),C=D+(w^k&(g^w))+A[10]+38016083&4294967295,D=g+(C<<9&4294967295|C>>>23),C=k+(g^w&(D^g))+A[15]+3634488961&4294967295,k=D+(C<<14&4294967295|C>>>18),C=w+(D^g&(k^D))+A[4]+3889429448&4294967295,w=k+(C<<20&4294967295|C>>>12),C=g+(k^D&(w^k))+A[9]+568446438&4294967295,g=w+(C<<5&4294967295|C>>>27),C=D+(w^k&(g^w))+A[14]+3275163606&4294967295,D=g+(C<<9&4294967295|C>>>23),C=k+(g^w&(D^g))+A[3]+4107603335&4294967295,k=D+(C<<14&4294967295|C>>>18),C=w+(D^g&(k^D))+A[8]+1163531501&4294967295,w=k+(C<<20&4294967295|C>>>12),C=g+(k^D&(w^k))+A[13]+2850285829&4294967295,g=w+(C<<5&4294967295|C>>>27),C=D+(w^k&(g^w))+A[2]+4243563512&4294967295,D=g+(C<<9&4294967295|C>>>23),C=k+(g^w&(D^g))+A[7]+1735328473&4294967295,k=D+(C<<14&4294967295|C>>>18),C=w+(D^g&(k^D))+A[12]+2368359562&4294967295,w=k+(C<<20&4294967295|C>>>12),C=g+(w^k^D)+A[5]+4294588738&4294967295,g=w+(C<<4&4294967295|C>>>28),C=D+(g^w^k)+A[8]+2272392833&4294967295,D=g+(C<<11&4294967295|C>>>21),C=k+(D^g^w)+A[11]+1839030562&4294967295,k=D+(C<<16&4294967295|C>>>16),C=w+(k^D^g)+A[14]+4259657740&4294967295,w=k+(C<<23&4294967295|C>>>9),C=g+(w^k^D)+A[1]+2763975236&4294967295,g=w+(C<<4&4294967295|C>>>28),C=D+(g^w^k)+A[4]+1272893353&4294967295,D=g+(C<<11&4294967295|C>>>21),C=k+(D^g^w)+A[7]+4139469664&4294967295,k=D+(C<<16&4294967295|C>>>16),C=w+(k^D^g)+A[10]+3200236656&4294967295,w=k+(C<<23&4294967295|C>>>9),C=g+(w^k^D)+A[13]+681279174&4294967295,g=w+(C<<4&4294967295|C>>>28),C=D+(g^w^k)+A[0]+3936430074&4294967295,D=g+(C<<11&4294967295|C>>>21),C=k+(D^g^w)+A[3]+3572445317&4294967295,k=D+(C<<16&4294967295|C>>>16),C=w+(k^D^g)+A[6]+76029189&4294967295,w=k+(C<<23&4294967295|C>>>9),C=g+(w^k^D)+A[9]+3654602809&4294967295,g=w+(C<<4&4294967295|C>>>28),C=D+(g^w^k)+A[12]+3873151461&4294967295,D=g+(C<<11&4294967295|C>>>21),C=k+(D^g^w)+A[15]+530742520&4294967295,k=D+(C<<16&4294967295|C>>>16),C=w+(k^D^g)+A[2]+3299628645&4294967295,w=k+(C<<23&4294967295|C>>>9),C=g+(k^(w|~D))+A[0]+4096336452&4294967295,g=w+(C<<6&4294967295|C>>>26),C=D+(w^(g|~k))+A[7]+1126891415&4294967295,D=g+(C<<10&4294967295|C>>>22),C=k+(g^(D|~w))+A[14]+2878612391&4294967295,k=D+(C<<15&4294967295|C>>>17),C=w+(D^(k|~g))+A[5]+4237533241&4294967295,w=k+(C<<21&4294967295|C>>>11),C=g+(k^(w|~D))+A[12]+1700485571&4294967295,g=w+(C<<6&4294967295|C>>>26),C=D+(w^(g|~k))+A[3]+2399980690&4294967295,D=g+(C<<10&4294967295|C>>>22),C=k+(g^(D|~w))+A[10]+4293915773&4294967295,k=D+(C<<15&4294967295|C>>>17),C=w+(D^(k|~g))+A[1]+2240044497&4294967295,w=k+(C<<21&4294967295|C>>>11),C=g+(k^(w|~D))+A[8]+1873313359&4294967295,g=w+(C<<6&4294967295|C>>>26),C=D+(w^(g|~k))+A[15]+4264355552&4294967295,D=g+(C<<10&4294967295|C>>>22),C=k+(g^(D|~w))+A[6]+2734768916&4294967295,k=D+(C<<15&4294967295|C>>>17),C=w+(D^(k|~g))+A[13]+1309151649&4294967295,w=k+(C<<21&4294967295|C>>>11),C=g+(k^(w|~D))+A[4]+4149444226&4294967295,g=w+(C<<6&4294967295|C>>>26),C=D+(w^(g|~k))+A[11]+3174756917&4294967295,D=g+(C<<10&4294967295|C>>>22),C=k+(g^(D|~w))+A[2]+718787259&4294967295,k=D+(C<<15&4294967295|C>>>17),C=w+(D^(k|~g))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+D&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var w=g-this.blockSize,A=this.B,k=this.h,D=0;D<g;){if(k==0)for(;D<=w;)i(this,v,D),D+=this.blockSize;if(typeof v=="string"){for(;D<g;)if(A[k++]=v.charCodeAt(D++),k==this.blockSize){i(this,A),k=0;break}}else for(;D<g;)if(A[k++]=v[D++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var w=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=w&255,w/=256;for(this.u(v),v=Array(16),g=w=0;4>g;++g)for(var A=0;32>A;A+=8)v[w++]=this.g[g]>>>A&255;return v};function s(v,g){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=g(v)}function o(v,g){this.h=g;for(var w=[],A=!0,k=v.length-1;0<=k;k--){var D=v[k]|0;A&&D==g||(w[k]=D,A=!1)}this.g=w}var l={};function u(v){return-128<=v&&128>v?s(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return b(c(-v));for(var g=[],w=1,A=0;v>=w;A++)g[A]=v/w|0,w*=4294967296;return new o(g,0)}function h(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return b(h(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(g,8)),A=m,k=0;k<v.length;k+=8){var D=Math.min(8,v.length-k),C=parseInt(v.substring(k,k+D),g);8>D?(D=c(Math.pow(g,D)),A=A.j(D).add(c(C))):(A=A.j(w),A=A.add(c(C)))}return A}var m=u(0),y=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var v=0,g=1,w=0;w<this.g.length;w++){var A=this.i(w);v+=(0<=A?A:4294967296+A)*g,g*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(P(this))return"-"+b(this).toString(v);for(var g=c(Math.pow(v,6)),w=this,A="";;){var k=L(w,g).g;w=E(w,k.j(g));var D=((0<w.g.length?w.g[0]:w.h)>>>0).toString(v);if(w=k,x(w))return D+A;for(;6>D.length;)D="0"+D;A=D+A}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function P(v){return v.h==-1}t.l=function(v){return v=E(this,v),P(v)?-1:x(v)?0:1};function b(v){for(var g=v.g.length,w=[],A=0;A<g;A++)w[A]=~v.g[A];return new o(w,~v.h).add(y)}t.abs=function(){return P(this)?b(this):this},t.add=function(v){for(var g=Math.max(this.g.length,v.g.length),w=[],A=0,k=0;k<=g;k++){var D=A+(this.i(k)&65535)+(v.i(k)&65535),C=(D>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);A=C>>>16,D&=65535,C&=65535,w[k]=C<<16|D}return new o(w,w[w.length-1]&-2147483648?-1:0)};function E(v,g){return v.add(b(g))}t.j=function(v){if(x(this)||x(v))return m;if(P(this))return P(v)?b(this).j(b(v)):b(b(this).j(v));if(P(v))return b(this.j(b(v)));if(0>this.l(I)&&0>v.l(I))return c(this.m()*v.m());for(var g=this.g.length+v.g.length,w=[],A=0;A<2*g;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<v.g.length;k++){var D=this.i(A)>>>16,C=this.i(A)&65535,re=v.i(k)>>>16,oe=v.i(k)&65535;w[2*A+2*k]+=C*oe,T(w,2*A+2*k),w[2*A+2*k+1]+=D*oe,T(w,2*A+2*k+1),w[2*A+2*k+1]+=C*re,T(w,2*A+2*k+1),w[2*A+2*k+2]+=D*re,T(w,2*A+2*k+2)}for(A=0;A<g;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=g;A<2*g;A++)w[A]=0;return new o(w,0)};function T(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function S(v,g){this.g=v,this.h=g}function L(v,g){if(x(g))throw Error("division by zero");if(x(v))return new S(m,m);if(P(v))return g=L(b(v),g),new S(b(g.g),b(g.h));if(P(g))return g=L(v,b(g)),new S(b(g.g),g.h);if(30<v.g.length){if(P(v)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var w=y,A=g;0>=A.l(v);)w=R(w),A=R(A);var k=N(w,1),D=N(A,1);for(A=N(A,2),w=N(w,2);!x(A);){var C=D.add(A);0>=C.l(v)&&(k=k.add(w),D=C),A=N(A,1),w=N(w,1)}return g=E(v,k.j(g)),new S(k,g)}for(k=m;0<=v.l(g);){for(w=Math.max(1,Math.floor(v.m()/g.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),D=c(w),C=D.j(g);P(C)||0<C.l(v);)w-=A,D=c(w),C=D.j(g);x(D)&&(D=y),k=k.add(D),v=E(v,C)}return new S(k,v)}t.A=function(v){return L(this,v).h},t.and=function(v){for(var g=Math.max(this.g.length,v.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)&v.i(A);return new o(w,this.h&v.h)},t.or=function(v){for(var g=Math.max(this.g.length,v.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)|v.i(A);return new o(w,this.h|v.h)},t.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)^v.i(A);return new o(w,this.h^v.h)};function R(v){for(var g=v.g.length+1,w=[],A=0;A<g;A++)w[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(w,v.h)}function N(v,g){var w=g>>5;g%=32;for(var A=v.g.length-w,k=[],D=0;D<A;D++)k[D]=0<g?v.i(D+w)>>>g|v.i(D+w+1)<<32-g:v.i(D+w);return new o(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ci=o}).apply(typeof by<"u"?by:typeof self<"u"?self:typeof window<"u"?window:{});var pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var GE,po,HE,Vl,Rh,KE,QE,XE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof pl=="object"&&pl];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var V=a[_];if(!(V in f))break e;f=f[V]}a=a[a.length-1],_=f[a],d=d(_),d!=_&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var f=0,_=!1,V={next:function(){if(!_&&f<a.length){var M=f++;return{value:d(M,a[M]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function m(a,d,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),a.apply(d,V)}}return function(){return a.apply(d,arguments)}}function y(a,d,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,y.apply(null,arguments)}function I(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function x(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,V,M){for(var z=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)z[Ee-2]=arguments[Ee];return d.prototype[V].apply(_,z)}}function P(a){const d=a.length;if(0<d){const f=Array(d);for(let _=0;_<d;_++)f[_]=a[_];return f}return[]}function b(a,d){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(u(_)){const V=a.length||0,M=_.length||0;a.length=V+M;for(let z=0;z<M;z++)a[V+z]=_[z]}else a.push(_)}}class E{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function T(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var R=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function N(a,d,f){for(const _ in a)d.call(f,a[_],_,a)}function v(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function g(a){const d={};for(const f in a)d[f]=a[f];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,d){let f,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(f in _)a[f]=_[f];for(let M=0;M<w.length;M++)f=w[M],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function k(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function D(a){l.setTimeout(()=>{throw a},0)}function C(){var a=Y;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class re{constructor(){this.h=this.g=null}add(d,f){const _=oe.get();_.set(d,f),this.h?this.h.next=_:this.g=_,this.h=_}}var oe=new E(()=>new Tt,a=>a.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,W=!1,Y=new re,Z=()=>{const a=l.Promise.resolve(void 0);fe=()=>{a.then(ge)}};var ge=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(f){D(f)}var d=oe;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}W=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var jt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function Ft(a,d){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(R){e:{try{L(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:H[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ft.aa.h.call(this)}}x(Ft,Te);var H={2:"touch",3:"pen",4:"mouse"};Ft.prototype.h=function(){Ft.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ke="closure_listenable_"+(1e6*Math.random()|0),On=0;function ut(a,d,f,_,V){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!_,this.ha=V,this.key=++On,this.da=this.fa=!1}function ct(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function F(a){this.src=a,this.g={},this.h=0}F.prototype.add=function(a,d,f,_,V){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var z=me(a,d,_,V);return-1<z?(d=a[z],f||(d.fa=!1)):(d=new ut(d,this.src,M,!!_,V),d.fa=f,a.push(d)),d};function X(a,d){var f=d.type;if(f in a.g){var _=a.g[f],V=Array.prototype.indexOf.call(_,d,void 0),M;(M=0<=V)&&Array.prototype.splice.call(_,V,1),M&&(ct(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function me(a,d,f,_){for(var V=0;V<a.length;++V){var M=a[V];if(!M.da&&M.listener==d&&M.capture==!!f&&M.ha==_)return V}return-1}var _e="closure_lm_"+(1e6*Math.random()|0),we={};function je(a,d,f,_,V){if(Array.isArray(d)){for(var M=0;M<d.length;M++)je(a,d[M],f,_,V);return null}return f=Da(f),a&&a[ke]?a.K(d,f,c(_)?!!_.capture:!1,V):Qt(a,d,f,!1,_,V)}function Qt(a,d,f,_,V,M){if(!d)throw Error("Invalid event type");var z=c(V)?!!V.capture:!!V,Ee=Pi(a);if(Ee||(a[_e]=Ee=new F(a)),f=Ee.add(d,f,_,z,M),f.proxy)return f;if(_=et(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)jt||(V=z),V===void 0&&(V=!1),a.addEventListener(d.toString(),_,V);else if(a.attachEvent)a.attachEvent(Hr(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function et(){function a(f){return d.call(a.src,a.listener,f)}const d=sr;return a}function Xt(a,d,f,_,V){if(Array.isArray(d))for(var M=0;M<d.length;M++)Xt(a,d[M],f,_,V);else _=c(_)?!!_.capture:!!_,f=Da(f),a&&a[ke]?(a=a.i,d=String(d).toString(),d in a.g&&(M=a.g[d],f=me(M,f,_,V),-1<f&&(ct(M[f]),Array.prototype.splice.call(M,f,1),M.length==0&&(delete a.g[d],a.h--)))):a&&(a=Pi(a))&&(d=a.g[d.toString()],a=-1,d&&(a=me(d,f,_,V)),(f=-1<a?d[a]:null)&&Gr(f))}function Gr(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[ke])X(d.i,a);else{var f=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(f,_,a.capture):d.detachEvent?d.detachEvent(Hr(f),_):d.addListener&&d.removeListener&&d.removeListener(_),(f=Pi(d))?(X(f,a),f.h==0&&(f.src=null,d[_e]=null)):ct(a)}}}function Hr(a){return a in we?we[a]:we[a]="on"+a}function sr(a,d){if(a.da)a=!0;else{d=new Ft(d,this);var f=a.listener,_=a.ha||a.src;a.fa&&Gr(a),a=f.call(_,d)}return a}function Pi(a){return a=a[_e],a instanceof F?a:null}var Ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function Da(a){return typeof a=="function"?a:(a[Ni]||(a[Ni]=function(d){return a.handleEvent(d)}),a[Ni])}function dt(){pe.call(this),this.i=new F(this),this.M=this,this.F=null}x(dt,pe),dt.prototype[ke]=!0,dt.prototype.removeEventListener=function(a,d,f,_){Xt(this,a,d,f,_)};function It(a,d){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new Te(d,a);else if(d instanceof Te)d.target=d.target||a;else{var V=d;d=new Te(_,a),A(d,V)}if(V=!0,f)for(var M=f.length-1;0<=M;M--){var z=d.g=f[M];V=Oa(z,_,!0,d)&&V}if(z=d.g=a,V=Oa(z,_,!0,d)&&V,V=Oa(z,_,!1,d)&&V,f)for(M=0;M<f.length;M++)z=d.g=f[M],V=Oa(z,_,!1,d)&&V}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],_=0;_<f.length;_++)ct(f[_]);delete a.g[d],a.h--}}this.F=null},dt.prototype.K=function(a,d,f,_){return this.i.add(String(a),d,!1,f,_)},dt.prototype.L=function(a,d,f,_){return this.i.add(String(a),d,!0,f,_)};function Oa(a,d,f,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,M=0;M<d.length;++M){var z=d[M];if(z&&!z.da&&z.capture==f){var Ee=z.listener,tt=z.ha||z.src;z.fa&&X(a.i,z),V=Ee.call(tt,_)!==!1&&V}}return V&&!_.defaultPrevented}function qp(a,d,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Gp(a){a.g=qp(()=>{a.g=null,a.i&&(a.i=!1,Gp(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class BT extends pe{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Gp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(a){pe.call(this),this.h=a,this.g={}}x(Fs,pe);var Hp=[];function Kp(a){N(a.g,function(d,f){this.g.hasOwnProperty(f)&&Gr(d)},a),a.g={}}Fs.prototype.N=function(){Fs.aa.N.call(this),Kp(this)},Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mc=l.JSON.stringify,zT=l.JSON.parse,$T=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function gc(){}gc.prototype.h=null;function Qp(a){return a.h||(a.h=a.i())}function Xp(){}var Us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yc(){Te.call(this,"d")}x(yc,Te);function vc(){Te.call(this,"c")}x(vc,Te);var Kr={},Yp=null;function Va(){return Yp=Yp||new dt}Kr.La="serverreachability";function Jp(a){Te.call(this,Kr.La,a)}x(Jp,Te);function Bs(a){const d=Va();It(d,new Jp(d))}Kr.STAT_EVENT="statevent";function Zp(a,d){Te.call(this,Kr.STAT_EVENT,a),this.stat=d}x(Zp,Te);function St(a){const d=Va();It(d,new Zp(d,a))}Kr.Ma="timingevent";function em(a,d){Te.call(this,Kr.Ma,a),this.size=d}x(em,Te);function zs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function $s(){this.g=!0}$s.prototype.xa=function(){this.g=!1};function WT(a,d,f,_,V,M){a.info(function(){if(a.g)if(M)for(var z="",Ee=M.split("&"),tt=0;tt<Ee.length;tt++){var ce=Ee[tt].split("=");if(1<ce.length){var ht=ce[0];ce=ce[1];var ft=ht.split("_");z=2<=ft.length&&ft[1]=="type"?z+(ht+"="+ce+"&"):z+(ht+"=redacted&")}}else z=null;else z=M;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+d+`
`+f+`
`+z})}function qT(a,d,f,_,V,M,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+d+`
`+f+`
`+M+" "+z})}function bi(a,d,f,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+HT(a,f)+(_?" "+_:"")})}function GT(a,d){a.info(function(){return"TIMEOUT: "+d})}$s.prototype.info=function(){};function HT(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var M=V[0];if(M!="noop"&&M!="stop"&&M!="close")for(var z=1;z<V.length;z++)V[z]=""}}}}return mc(f)}catch{return d}}var La={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_c;function Ma(){}x(Ma,gc),Ma.prototype.g=function(){return new XMLHttpRequest},Ma.prototype.i=function(){return{}},_c=new Ma;function or(a,d,f,_){this.j=a,this.i=d,this.l=f,this.R=_||1,this.U=new Fs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nm}function nm(){this.i=null,this.g="",this.h=!1}var rm={},wc={};function Ec(a,d,f){a.L=1,a.v=Ba(Vn(d)),a.m=f,a.P=!0,im(a,null)}function im(a,d){a.F=Date.now(),ja(a),a.A=Vn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),vm(f.i,"t",_),a.C=0,f=a.j.J,a.h=new nm,a.g=Lm(a.j,f?d:null,!a.m),0<a.O&&(a.M=new BT(y(a.Y,a,a.g),a.O)),d=a.U,f=a.g,_=a.ca;var V="readystatechange";Array.isArray(V)||(V&&(Hp[0]=V.toString()),V=Hp);for(var M=0;M<V.length;M++){var z=je(f,V[M],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Bs(),WT(a.i,a.u,a.A,a.l,a.R,a.m)}or.prototype.ca=function(a){a=a.target;const d=this.M;d&&Ln(a)==3?d.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const ft=Ln(this.g);var d=this.g.Ba();const Vi=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Am(this.g)))){this.J||ft!=4||d==7||(d==8||0>=Vi?Bs(3):Bs(2)),Tc(this);var f=this.g.Z();this.X=f;t:if(sm(this)){var _=Am(this.g);a="";var V=_.length,M=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),Ws(this);var z="";break t}this.h.i=new l.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,a+=this.h.i.decode(_[d],{stream:!(M&&d==V-1)});_.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,qT(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,tt=this.g;if((Ee=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(Ee)){var ce=Ee;break t}}ce=null}if(f=ce)bi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ic(this,f);else{this.o=!1,this.s=3,St(12),Qr(this),Ws(this);break e}}if(this.P){f=!0;let an;for(;!this.J&&this.C<z.length;)if(an=KT(this,z),an==wc){ft==4&&(this.s=4,St(14),f=!1),bi(this.i,this.l,null,"[Incomplete Response]");break}else if(an==rm){this.s=4,St(15),bi(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else bi(this.i,this.l,an,null),Ic(this,an);if(sm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||z.length!=0||this.h.h||(this.s=1,St(16),f=!1),this.o=this.o&&f,!f)bi(this.i,this.l,z,"[Invalid Chunked Response]"),Qr(this),Ws(this);else if(0<z.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),kc(ht),ht.M=!0,St(11))}}else bi(this.i,this.l,z,null),Ic(this,z);ft==4&&Qr(this),this.o&&!this.J&&(ft==4?bm(this.j,this):(this.o=!1,ja(this)))}else dI(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Qr(this),Ws(this)}}}catch{}finally{}};function sm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function KT(a,d){var f=a.C,_=d.indexOf(`
`,f);return _==-1?wc:(f=Number(d.substring(f,_)),isNaN(f)?rm:(_+=1,_+f>d.length?wc:(d=d.slice(_,_+f),a.C=_+f,d)))}or.prototype.cancel=function(){this.J=!0,Qr(this)};function ja(a){a.S=Date.now()+a.I,om(a,a.I)}function om(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zs(y(a.ba,a),d)}function Tc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}or.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(GT(this.i,this.A),this.L!=2&&(Bs(),St(17)),Qr(this),this.s=2,Ws(this)):om(this,this.S-a)};function Ws(a){a.j.G==0||a.J||bm(a.j,a)}function Qr(a){Tc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Kp(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Ic(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Sc(f.h,a))){if(!a.K&&Sc(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ha(f),qa(f);else break e;Rc(f),St(18)}}else f.za=V[1],0<f.za-f.T&&37500>V[2]&&f.F&&f.v==0&&!f.C&&(f.C=zs(y(f.Za,f),6e3));if(1>=um(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Yr(f,11)}else if((a.K||f.g==a)&&Ha(f),!T(d))for(V=f.Da.g.parse(d),d=0;d<V.length;d++){let ce=V[d];if(f.T=ce[0],ce=ce[1],f.G==2)if(ce[0]=="c"){f.K=ce[1],f.ia=ce[2];const ht=ce[3];ht!=null&&(f.la=ht,f.j.info("VER="+f.la));const ft=ce[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const Vi=ce[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(_=1.5*Vi,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const an=a.g;if(an){const Qa=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qa){var M=_.h;M.g||Qa.indexOf("spdy")==-1&&Qa.indexOf("quic")==-1&&Qa.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Ac(M,M.h),M.h=null))}if(_.D){const Pc=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(_.ya=Pc,Ae(_.I,_.D,Pc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var z=a;if(_.qa=Vm(_,_.J?_.ia:null,_.W),z.K){cm(_.h,z);var Ee=z,tt=_.L;tt&&(Ee.I=tt),Ee.B&&(Tc(Ee),ja(Ee)),_.g=z}else Pm(_);0<f.i.length&&Ga(f)}else ce[0]!="stop"&&ce[0]!="close"||Yr(f,7);else f.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Yr(f,7):xc(f):ce[0]!="noop"&&f.l&&f.l.ta(ce),f.v=0)}}Bs(4)}catch{}}var QT=class{constructor(a,d){this.g=a,this.map=d}};function am(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function um(a){return a.h?1:a.g?a.g.size:0}function Sc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Ac(a,d){a.g?a.g.add(d):a.h=d}function cm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}am.prototype.cancel=function(){if(this.i=dm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function dm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return P(a.i)}function XT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],f=a.length,_=0;_<f;_++)d.push(a[_]);return d}d=[],f=0;for(_ in a)d[f++]=a[_];return d}function YT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const _ in a)d[f++]=_;return d}}}function hm(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=YT(a),_=XT(a),V=_.length,M=0;M<V;M++)d.call(void 0,_[M],f&&f[M],a)}var fm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JT(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),V=null;if(0<=_){var M=a[f].substring(0,_);V=a[f].substring(_+1)}else M=a[f];d(M,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Xr){this.h=a.h,Fa(this,a.j),this.o=a.o,this.g=a.g,Ua(this,a.s),this.l=a.l;var d=a.i,f=new Hs;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),pm(this,f),this.m=a.m}else a&&(d=String(a).match(fm))?(this.h=!1,Fa(this,d[1]||"",!0),this.o=qs(d[2]||""),this.g=qs(d[3]||"",!0),Ua(this,d[4]),this.l=qs(d[5]||"",!0),pm(this,d[6]||"",!0),this.m=qs(d[7]||"")):(this.h=!1,this.i=new Hs(null,this.h))}Xr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Gs(d,mm,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Gs(d,mm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Gs(f,f.charAt(0)=="/"?tI:eI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Gs(f,rI)),a.join("")};function Vn(a){return new Xr(a)}function Fa(a,d,f){a.j=f?qs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ua(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function pm(a,d,f){d instanceof Hs?(a.i=d,iI(a.i,a.h)):(f||(d=Gs(d,nI)),a.i=new Hs(d,a.h))}function Ae(a,d,f){a.i.set(d,f)}function Ba(a){return Ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gs(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,ZT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ZT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mm=/[#\/\?@]/g,eI=/[#\?:]/g,tI=/[#\?]/g,nI=/[#\?@]/g,rI=/#/g;function Hs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function ar(a){a.g||(a.g=new Map,a.h=0,a.i&&JT(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Hs.prototype,t.add=function(a,d){ar(this),this.i=null,a=Di(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function gm(a,d){ar(a),d=Di(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function ym(a,d){return ar(a),d=Di(a,d),a.g.has(d)}t.forEach=function(a,d){ar(this),this.g.forEach(function(f,_){f.forEach(function(V){a.call(d,V,_,this)},this)},this)},t.na=function(){ar(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let _=0;_<d.length;_++){const V=a[_];for(let M=0;M<V.length;M++)f.push(d[_])}return f},t.V=function(a){ar(this);let d=[];if(typeof a=="string")ym(this,a)&&(d=d.concat(this.g.get(Di(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return ar(this),this.i=null,a=Di(this,a),ym(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function vm(a,d,f){gm(a,d),0<f.length&&(a.i=null,a.g.set(Di(a,d),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var _=d[f];const M=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var V=M;z[_]!==""&&(V+="="+encodeURIComponent(String(z[_]))),a.push(V)}}return this.i=a.join("&")};function Di(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function iI(a,d){d&&!a.j&&(ar(a),a.i=null,a.g.forEach(function(f,_){var V=_.toLowerCase();_!=V&&(gm(this,_),vm(this,V,f))},a)),a.j=d}function sI(a,d){const f=new $s;if(l.Image){const _=new Image;_.onload=I(lr,f,"TestLoadImage: loaded",!0,d,_),_.onerror=I(lr,f,"TestLoadImage: error",!1,d,_),_.onabort=I(lr,f,"TestLoadImage: abort",!1,d,_),_.ontimeout=I(lr,f,"TestLoadImage: timeout",!1,d,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function oI(a,d){const f=new $s,_=new AbortController,V=setTimeout(()=>{_.abort(),lr(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(M=>{clearTimeout(V),M.ok?lr(f,"TestPingServer: ok",!0,d):lr(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),lr(f,"TestPingServer: error",!1,d)})}function lr(a,d,f,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(f)}catch{}}function aI(){this.g=new $T}function lI(a,d,f){const _=f||"";try{hm(a,function(V,M){let z=V;c(V)&&(z=mc(V)),d.push(_+M+"="+encodeURIComponent(z))})}catch(V){throw d.push(_+"type="+encodeURIComponent("_badmap")),V}}function za(a){this.l=a.Ub||null,this.j=a.eb||!1}x(za,gc),za.prototype.g=function(){return new $a(this.l,this.j)},za.prototype.i=function(a){return function(){return a}}({});function $a(a,d){dt.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x($a,dt),t=$a.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Qs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qs(this)),this.g&&(this.readyState=3,Qs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_m(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function _m(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ks(this):Qs(this),this.readyState==3&&_m(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ks(this))},t.Qa=function(a){this.g&&(this.response=a,Ks(this))},t.ga=function(){this.g&&Ks(this)};function Ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qs(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Qs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty($a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wm(a){let d="";return N(a,function(f,_){d+=_,d+=":",d+=f,d+=`\r
`}),d}function Cc(a,d,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=wm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ae(a,d,f))}function Ve(a){dt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ve,dt);var uI=/^https?$/i,cI=["POST","PUT"];t=Ve.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_c.g(),this.v=this.o?Qp(this.o):Qp(_c),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(M){Em(this,M);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)f.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())f.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),V=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(cI,d,void 0))||_||V||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of f)this.g.setRequestHeader(M,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sm(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){Em(this,M)}};function Em(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Tm(a),Wa(a)}function Tm(a){a.A||(a.A=!0,It(a,"complete"),It(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,It(this,"complete"),It(this,"abort"),Wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wa(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Im(this):this.bb())},t.bb=function(){Im(this)};function Im(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)qp(a.Ea,0,a);else if(It(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var _;if(_=z===0){var V=String(a.D).match(fm)[1]||null;!V&&l.self&&l.self.location&&(V=l.self.location.protocol.slice(0,-1)),_=!uI.test(V?V.toLowerCase():"")}f=_}if(f)It(a,"complete"),It(a,"success");else{a.m=6;try{var M=2<Ln(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",Tm(a)}}finally{Wa(a)}}}}function Wa(a,d){if(a.g){Sm(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||It(a,"ready");try{f.onreadystatechange=_}catch{}}}function Sm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),zT(d)}};function Am(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dI(a){const d={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(T(a[_]))continue;var f=k(a[_]);const V=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=d[V]||[];d[V]=M,M.push(f)}v(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xs(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Cm(a){this.Aa=0,this.i=[],this.j=new $s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xs("baseRetryDelayMs",5e3,a),this.cb=Xs("retryDelaySeedMs",1e4,a),this.Wa=Xs("forwardChannelMaxRetries",2,a),this.wa=Xs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new am(a&&a.concurrentRequestLimit),this.Da=new aI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cm.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,_){St(0),this.W=a,this.H=d||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=Vm(this,null,this.W),Ga(this)};function xc(a){if(xm(a),a.G==3){var d=a.U++,f=Vn(a.I);if(Ae(f,"SID",a.K),Ae(f,"RID",d),Ae(f,"TYPE","terminate"),Ys(a,f),d=new or(a,a.j,d),d.L=2,d.v=Ba(Vn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Lm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ja(d)}Om(a)}function qa(a){a.g&&(kc(a),a.g.cancel(),a.g=null)}function xm(a){qa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ha(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ga(a){if(!lm(a.h)&&!a.s){a.s=!0;var d=a.Ga;fe||Z(),W||(fe(),W=!0),Y.add(d,a),a.B=0}}function hI(a,d){return um(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zs(y(a.Ga,a,d),Dm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const V=new or(this,this.j,a);let M=this.o;if(this.S&&(M?(M=g(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(V.H=M,M=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=km(this,V,d),f=Vn(this.I),Ae(f,"RID",a),Ae(f,"CVER",22),this.D&&Ae(f,"X-HTTP-Session-Id",this.D),Ys(this,f),M&&(this.O?d="headers="+encodeURIComponent(String(wm(M)))+"&"+d:this.m&&Cc(f,this.m,M)),Ac(this.h,V),this.Ua&&Ae(f,"TYPE","init"),this.P?(Ae(f,"$req",d),Ae(f,"SID","null"),V.T=!0,Ec(V,f,null)):Ec(V,f,d),this.G=2}}else this.G==3&&(a?Rm(this,a):this.i.length==0||lm(this.h)||Rm(this))};function Rm(a,d){var f;d?f=d.l:f=a.U++;const _=Vn(a.I);Ae(_,"SID",a.K),Ae(_,"RID",f),Ae(_,"AID",a.T),Ys(a,_),a.m&&a.o&&Cc(_,a.m,a.o),f=new or(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=km(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ac(a.h,f),Ec(f,_,d)}function Ys(a,d){a.H&&N(a.H,function(f,_){Ae(d,_,f)}),a.l&&hm({},function(f,_){Ae(d,_,f)})}function km(a,d,f){f=Math.min(a.i.length,f);var _=a.l?y(a.l.Na,a.l,a):null;e:{var V=a.i;let M=-1;for(;;){const z=["count="+f];M==-1?0<f?(M=V[0].g,z.push("ofs="+M)):M=0:z.push("ofs="+M);let Ee=!0;for(let tt=0;tt<f;tt++){let ce=V[tt].g;const ht=V[tt].map;if(ce-=M,0>ce)M=Math.max(0,V[tt].g-100),Ee=!1;else try{lI(ht,z,"req"+ce+"_")}catch{_&&_(ht)}}if(Ee){_=z.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,_}function Pm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;fe||Z(),W||(fe(),W=!0),Y.add(d,a),a.v=0}}function Rc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zs(y(a.Fa,a),Dm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Nm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zs(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),qa(this),Nm(this))};function kc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Nm(a){a.g=new or(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Vn(a.qa);Ae(d,"RID","rpc"),Ae(d,"SID",a.K),Ae(d,"AID",a.T),Ae(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ae(d,"TO",a.ja),Ae(d,"TYPE","xmlhttp"),Ys(a,d),a.m&&a.o&&Cc(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ba(Vn(d)),f.m=null,f.P=!0,im(f,a)}t.Za=function(){this.C!=null&&(this.C=null,qa(this),Rc(this),St(19))};function Ha(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function bm(a,d){var f=null;if(a.g==d){Ha(a),kc(a),a.g=null;var _=2}else if(Sc(a.h,d))f=d.D,cm(a.h,d),_=1;else return;if(a.G!=0){if(d.o)if(_==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var V=a.B;_=Va(),It(_,new em(_,f)),Ga(a)}else Pm(a);else if(V=d.s,V==3||V==0&&0<d.X||!(_==1&&hI(a,d)||_==2&&Rc(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),V){case 1:Yr(a,5);break;case 4:Yr(a,10);break;case 3:Yr(a,6);break;default:Yr(a,2)}}}function Dm(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function Yr(a,d){if(a.j.info("Error code "+d),d==2){var f=y(a.fb,a),_=a.Xa;const V=!_;_=new Xr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fa(_,"https"),Ba(_),V?sI(_.toString(),f):oI(_.toString(),f)}else St(2);a.G=0,a.l&&a.l.sa(d),Om(a),xm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Om(a){if(a.G=0,a.ka=[],a.l){const d=dm(a.h);(d.length!=0||a.i.length!=0)&&(b(a.ka,d),b(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Vm(a,d,f){var _=f instanceof Xr?Vn(f):new Xr(f);if(_.g!="")d&&(_.g=d+"."+_.g),Ua(_,_.s);else{var V=l.location;_=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var M=new Xr(null);_&&Fa(M,_),d&&(M.g=d),V&&Ua(M,V),f&&(M.l=f),_=M}return f=a.D,d=a.ya,f&&d&&Ae(_,f,d),Ae(_,"VER",a.la),Ys(a,_),_}function Lm(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ve(new za({eb:f})):new Ve(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mm(){}t=Mm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ka(){}Ka.prototype.g=function(a,d){return new Ut(a,d)};function Ut(a,d){dt.call(this),this.g=new Cm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!T(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Oi(this)}x(Ut,dt),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){xc(this.g)},Ut.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=mc(a),a=f);d.i.push(new QT(d.Ya++,a)),d.G==3&&Ga(d)},Ut.prototype.N=function(){this.g.l=null,delete this.j,xc(this.g),delete this.g,Ut.aa.N.call(this)};function jm(a){yc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}x(jm,yc);function Fm(){vc.call(this),this.status=1}x(Fm,vc);function Oi(a){this.g=a}x(Oi,Mm),Oi.prototype.ua=function(){It(this.g,"a")},Oi.prototype.ta=function(a){It(this.g,new jm(a))},Oi.prototype.sa=function(a){It(this.g,new Fm)},Oi.prototype.ra=function(){It(this.g,"b")},Ka.prototype.createWebChannel=Ka.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,XE=function(){return new Ka},QE=function(){return Va()},KE=Kr,Rh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},La.NO_ERROR=0,La.TIMEOUT=8,La.HTTP_ERROR=6,Vl=La,tm.COMPLETE="complete",HE=tm,Xp.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",dt.prototype.listen=dt.prototype.K,po=Xp,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,GE=Ve}).apply(typeof pl<"u"?pl:typeof self<"u"?self:typeof window<"u"?window:{});const Dy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Uf("@firebase/firestore");function oo(){return vi.logLevel}function G(t,...e){if(vi.logLevel<=ae.DEBUG){const n=e.map(Jf);vi.debug(`Firestore (${Os}): ${t}`,...n)}}function tr(t,...e){if(vi.logLevel<=ae.ERROR){const n=e.map(Jf);vi.error(`Firestore (${Os}): ${t}`,...n)}}function ys(t,...e){if(vi.logLevel<=ae.WARN){const n=e.map(Jf);vi.warn(`Firestore (${Os}): ${t}`,...n)}}function Jf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw tr(e),new Error(e)}function ve(t,e){t||ee()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class x1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class R1{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new YE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new yt(e)}}class k1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class P1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new k1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ve(this.o===void 0);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new N1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=D1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new ze(0,0))}static max(){return new te(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends ta{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const O1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends ta{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return O1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ie.fromString(e))}static fromName(e){return new Q(Ie.fromString(e).popFirst(5))}static empty(){return new Q(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ie(e.slice()))}}function V1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new Vr(i,Q.empty(),e)}function L1(t){return new Vr(t.readTime,t.key,-1)}class Vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vr(te.min(),Q.empty(),-1)}static max(){return new Vr(te.max(),Q.empty(),-1)}}function M1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class F1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==j1)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function U1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Sa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zf.oe=-1;function Qu(t){return t==null}function yu(t){return t===0&&1/t==-1/0}function B1(t){return typeof t=="number"&&Number.isInteger(t)&&!yu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ZE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ml(this.root,e,this.comparator,!0)}}class ml{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vy(this.data.getIterator())}getIteratorFrom(e){return new Vy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Vy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new $t([])}unionWith(e){let n=new ot(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new e0("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const z1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(ve(!!t),typeof t=="string"){let e=0;const n=z1.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ep(t){const e=t.mapValue.fields.__previous_value__;return Xu(e)?ep(e):e}function na(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl={mapValue:{}};function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xu(t)?4:q1(t)?9007199254740991:W1(t)?10:11:ee()}function Nn(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),l=Lr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _i(i.bytesValue).isEqual(_i(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),l=Ue(s.doubleValue);return o===l?yu(o)===yu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Oy(o)!==Oy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Nn(o[u],l[u])))return!1;return!0}(t,e);default:return ee()}}function ia(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ue(s.integerValue||s.doubleValue),u=Ue(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ly(t.timestampValue,e.timestampValue);case 4:return Ly(na(t),na(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const l=_i(s),u=_i(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=de(l[c],u[c]);if(h!==0)return h}return de(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=de(Ue(s.latitude),Ue(o.latitude));return l!==0?l:de(Ue(s.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return My(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,h;const m=s.fields||{},y=o.fields||{},I=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=(u=y.value)===null||u===void 0?void 0:u.arrayValue,P=de(((c=I==null?void 0:I.values)===null||c===void 0?void 0:c.length)||0,((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:My(I,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===gl.mapValue&&o===gl.mapValue)return 0;if(s===gl.mapValue)return 1;if(o===gl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let m=0;m<u.length&&m<h.length;++m){const y=de(u[m],h[m]);if(y!==0)return y;const I=_s(l[u[m]],c[h[m]]);if(I!==0)return I}return de(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Lr(t),r=Lr(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function My(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=_s(n[i],r[i]);if(s)return s}return de(n.length,r.length)}function ws(t){return kh(t)}function kh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _i(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kh(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function vu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ph(t){return!!t&&"integerValue"in t}function tp(t){return!!t&&"arrayValue"in t}function jy(t){return!!t&&"nullValue"in t}function Fy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ll(t){return!!t&&"mapValue"in t}function W1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ro(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ro(t.arrayValue.values[n]);return e}return Object.assign({},t)}function q1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ro(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ro(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(Ro(this.value))}}function t0(t){const e=[];return xi(t.fields,(n,r)=>{const i=new it([n]);if(Ll(r)){const s=t0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,te.min(),te.min(),te.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,te.min(),te.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,te.min(),te.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.position=e,this.inclusive=n}}function Uy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function By(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function G1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{}class qe extends n0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new K1(e,n,r):n==="array-contains"?new Y1(e,r):n==="in"?new J1(e,r):n==="not-in"?new Z1(e,r):n==="array-contains-any"?new eP(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Q1(e,r):new X1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends n0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yn(e,n)}matches(e){return r0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function r0(t){return t.op==="and"}function i0(t){return H1(t)&&r0(t)}function H1(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Nh(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(i0(t))return t.filters.map(e=>Nh(e)).join(",");{const e=t.filters.map(n=>Nh(n)).join(",");return`${t.op}(${e})`}}function s0(t,e){return t instanceof qe?function(r,i){return i instanceof qe&&r.op===i.op&&r.field.isEqual(i.field)&&Nn(r.value,i.value)}(t,e):t instanceof yn?function(r,i){return i instanceof yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&s0(o,i.filters[l]),!0):!1}(t,e):void ee()}function o0(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(o0).join(" ,")+"}"}(t):"Filter"}class K1 extends qe{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Q1 extends qe{constructor(e,n){super(e,"in",n),this.keys=a0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class X1 extends qe{constructor(e,n){super(e,"not-in",n),this.keys=a0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class Y1 extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tp(n)&&ia(n.arrayValue,this.value)}}class J1 extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class Z1 extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ia(this.value.arrayValue,n)}}class eP extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function zy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new tP(t,e,n,r,i,s,o)}function np(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ws(r)).join(",")),e.ue=n}return e.ue}function rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!G1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!s0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!By(t.startAt,e.startAt)&&By(t.endAt,e.endAt)}function bh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nP(t,e,n,r,i,s,o,l){return new Ri(t,e,n,r,i,s,o,l)}function ip(t){return new Ri(t)}function $y(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sp(t){return t.collectionGroup!==null}function ls(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new sa(s,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new sa(it.keyField(),r))}return e.ce}function Rn(t){const e=ne(t);return e.le||(e.le=rP(e,ls(t))),e.le}function rP(t,e){if(t.limitType==="F")return zy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sa(i.field,s)});const n=t.endAt?new Es(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Es(t.startAt.position,t.startAt.inclusive):null;return zy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dh(t,e){const n=t.filters.concat([e]);return new Ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _u(t,e,n){return new Ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yu(t,e){return rp(Rn(t),Rn(e))&&t.limitType===e.limitType}function l0(t){return`${np(Rn(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>o0(i)).join(", ")}]`),Qu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ws(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ws(i)).join(",")),`Target(${r})`}(Rn(t))}; limitType=${t.limitType})`}function Ju(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Uy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ls(r),i)||r.endAt&&!function(o,l,u){const c=Uy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ls(r),i))}(t,e)}function iP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function u0(t){return(e,n)=>{let r=!1;for(const i of ls(t)){const s=sP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function sP(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?_s(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ZE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=new Oe(Q.comparator);function nr(){return oP}const c0=new Oe(Q.comparator);function mo(...t){let e=c0;for(const n of t)e=e.insert(n.key,n);return e}function d0(t){let e=c0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function si(){return ko()}function h0(){return ko()}function ko(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const aP=new Oe(Q.comparator),lP=new ot(Q.comparator);function se(...t){let e=lP;for(const n of t)e=e.add(n);return e}const uP=new ot(de);function cP(){return uP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yu(e)?"-0":e}}function f0(t){return{integerValue:""+t}}function p0(t,e){return B1(e)?f0(e):op(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this._=void 0}}function dP(t,e,n){return t instanceof wu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xu(s)&&(s=ep(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ts?g0(t,e):t instanceof oa?y0(t,e):function(i,s){const o=m0(i,s),l=Wy(o)+Wy(i.Pe);return Ph(o)&&Ph(i.Pe)?f0(l):op(i.serializer,l)}(t,e)}function hP(t,e,n){return t instanceof Ts?g0(t,e):t instanceof oa?y0(t,e):n}function m0(t,e){return t instanceof aa?function(r){return Ph(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wu extends Zu{}class Ts extends Zu{constructor(e){super(),this.elements=e}}function g0(t,e){const n=v0(e);for(const r of t.elements)n.some(i=>Nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class oa extends Zu{constructor(e){super(),this.elements=e}}function y0(t,e){let n=v0(e);for(const r of t.elements)n=n.filter(i=>!Nn(i,r));return{arrayValue:{values:n}}}class aa extends Zu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Wy(t){return Ue(t.integerValue||t.doubleValue)}function v0(t){return tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n){this.field=e,this.transform=n}}function fP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ts&&i instanceof Ts||r instanceof oa&&i instanceof oa?vs(r.elements,i.elements,Nn):r instanceof aa&&i instanceof aa?Nn(r.Pe,i.Pe):r instanceof wu&&i instanceof wu}(t.transform,e.transform)}class pP{constructor(e,n){this.version=e,this.transformResults=n}}class xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ec{}function w0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tc(t.key,xt.none()):new Aa(t.key,t.data,xt.none());{const n=t.data,r=Dt.empty();let i=new ot(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wr(t.key,r,new $t(i.toArray()),xt.none())}}function mP(t,e,n){t instanceof Aa?function(i,s,o){const l=i.value.clone(),u=Gy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Wr?function(i,s,o){if(!Ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Gy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(E0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,r){return t instanceof Aa?function(s,o,l,u){if(!Ml(s.precondition,o))return l;const c=s.value.clone(),h=Hy(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wr?function(s,o,l,u){if(!Ml(s.precondition,o))return l;const c=Hy(s.fieldTransforms,u,o),h=o.data;return h.setAll(E0(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function gP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=m0(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function qy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vs(r,i,(s,o)=>fP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends ec{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wr extends ec{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function E0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gy(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,hP(o,l,n[i]))}return r}function Hy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,dP(s,o,e))}return r}class tc extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yP extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=h0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=w0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,(n,r)=>qy(n,r))&&vs(this.baseMutations,e.baseMutations,(n,r)=>qy(n,r))}}class ap{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=function(){return aP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ap(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,le;function EP(t){switch(t){default:return ee();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function T0(t){if(t===void 0)return tr("GRPC error has no .code"),j.UNKNOWN;switch(t){case $e.OK:return j.OK;case $e.CANCELLED:return j.CANCELLED;case $e.UNKNOWN:return j.UNKNOWN;case $e.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case $e.INTERNAL:return j.INTERNAL;case $e.UNAVAILABLE:return j.UNAVAILABLE;case $e.UNAUTHENTICATED:return j.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case $e.NOT_FOUND:return j.NOT_FOUND;case $e.ALREADY_EXISTS:return j.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return j.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case $e.ABORTED:return j.ABORTED;case $e.OUT_OF_RANGE:return j.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return j.UNIMPLEMENTED;case $e.DATA_LOSS:return j.DATA_LOSS;default:return ee()}}(le=$e||($e={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=new ci([4294967295,4294967295],0);function Ky(t){const e=TP().encode(t),n=new qE;return n.update(e),new Uint8Array(n.digest())}function Qy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ci([n,r],0),new ci([i,s],0)]}class lp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ci.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ci.fromNumber(r)));return i.compare(IP)===1&&(i=new ci([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ky(e),[r,i]=Qy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new lp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ky(e),[r,i]=Qy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ca.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nc(te.min(),i,new Oe(de),nr(),se())}}class Ca{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ca(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class I0{constructor(e,n){this.targetId=e,this.me=n}}class S0{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xy{constructor(){this.fe=0,this.ge=Jy(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Ca(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Jy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class SP{constructor(e){this.Le=e,this.Be=new Map,this.ke=nr(),this.qe=Yy(),this.Qe=new Oe(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(bh(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,_t.newNoDocument(o,te.min()))}else ve(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=_i(r).toUint8Array()}catch(u){if(u instanceof e0)return ys("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new lp(o,i,s)}catch(u){return ys(u instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&bh(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_t.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new nc(e,n,this.Qe,this.ke,r);return this.ke=nr(),this.qe=Yy(),this.Qe=new Oe(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Xy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Xy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Yy(){return new Oe(Q.comparator)}function Jy(){return new Oe(Q.comparator)}const AP={asc:"ASCENDING",desc:"DESCENDING"},CP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xP={and:"AND",or:"OR"};class RP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Oh(t,e){return t.useProto3Json||Qu(e)?e:{value:e}}function Eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function A0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kP(t,e){return Eu(t,e.toTimestamp())}function kn(t){return ve(!!t),te.fromTimestamp(function(n){const r=Lr(n);return new ze(r.seconds,r.nanos)}(t))}function up(t,e){return Vh(t,e).canonicalString()}function Vh(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function C0(t){const e=Ie.fromString(t);return ve(N0(e)),e}function Lh(t,e){return up(t.databaseId,e.path)}function hd(t,e){const n=C0(e);if(n.get(1)!==t.databaseId.projectId)throw new $(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(R0(n))}function x0(t,e){return up(t.databaseId,e)}function PP(t){const e=C0(t);return e.length===4?Ie.emptyPath():R0(e)}function Mh(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function R0(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zy(t,e,n){return{name:Lh(t,e),fields:n.value.mapValue.fields}}function NP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ve(h===void 0||typeof h=="string"),lt.fromBase64String(h||"")):(ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),lt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?j.UNKNOWN:T0(c.code);return new $(h,c.message||"")}(o);n=new S0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hd(t,r.document.name),s=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):te.min(),l=new Dt({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new jl(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hd(t,r.document),s=r.readTime?kn(r.readTime):te.min(),o=_t.newNoDocument(i,s),l=r.removedTargetIds||[];n=new jl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hd(t,r.document),s=r.removedTargetIds||[];n=new jl([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wP(i,s),l=r.targetId;n=new I0(l,o)}}return n}function bP(t,e){let n;if(e instanceof Aa)n={update:Zy(t,e.key,e.value)};else if(e instanceof tc)n={delete:Lh(t,e.key)};else if(e instanceof Wr)n={update:Zy(t,e.key,e.data),updateMask:BP(e.fieldMask)};else{if(!(e instanceof yP))return ee();n={verify:Lh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof wu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ts)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof aa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:kP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function DP(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?kn(i.updateTime):kn(s);return o.isEqual(te.min())&&(o=kn(s)),new pP(o,i.transformResults||[])}(n,e))):[]}function OP(t,e){return{documents:[x0(t,e.path)]}}function VP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=x0(t,i);const s=function(c){if(c.length!==0)return P0(yn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(y){return{field:ji(y.field),direction:jP(y.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Oh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function LP(t){let e=PP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(m){const y=k0(m);return y instanceof yn&&i0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(x){return new sa(Fi(x.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Qu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,I=m.values||[];return new Es(I,y)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const y=!m.before,I=m.values||[];return new Es(I,y)}(n.endAt)),nP(e,i,o,s,l,"F",u,c)}function MP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function k0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fi(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fi(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fi(n.unaryFilter.field);return qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fi(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Fi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>k0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function jP(t){return AP[t]}function FP(t){return CP[t]}function UP(t){return xP[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Fi(t){return it.fromServerFormat(t.fieldPath)}function P0(t){return t instanceof qe?function(n){if(n.op==="=="){if(Fy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NAN"}};if(jy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NAN"}};if(jy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(n.field),op:FP(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(i=>P0(i));return r.length===1?r[0]:{compositeFilter:{op:UP(n.op),filters:r}}}(t):ee()}function BP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function N0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,i,s=te.min(),o=te.min(),l=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.ct=e}}function $P(t){const e=LP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_u(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this.un=new qP}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Vr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class qP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ot(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ot(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Is(0)}static kn(){return new Is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Po(r.mutation,i,$t.empty(),ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=mo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=nr();const o=ko(),l=function(){return ko()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Wr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Po(h.mutation,c,h.mutation.getFieldMask(),ze.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var m;return l.set(c,new HP(h,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new Oe((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||$t.empty();h=l.applyToLocalView(c,h),r.set(u,h);const m=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,m=h0();h.forEach(y=>{if(!s.has(y)){const I=w0(n.get(y),r.get(y));I!==null&&m.set(y,I),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(si());let l=-1,u=s;return o.next(c=>U.forEach(c,(h,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(y=>{u=u.insert(h,y)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(h=>({batchId:l,changes:d0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=mo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(m,y){return new Ri(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,_t.newInvalidDocument(h)))});let l=mo();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Po(h.mutation,c,$t.empty(),ze.now()),Ju(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:kn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:$P(i.bundledQuery),readTime:kn(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(){this.overlays=new Oe(Q.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=si();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=si(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=si(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=si(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _P(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.Tr=new ot(Qe.Er),this.dr=new ot(Qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Qe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new Ie([])),r=new Qe(n,e),i=new Qe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new Ie([])),r=new Qe(n,e),i=new Qe(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Qe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||de(e.wr,n.wr)}static Ar(e,n){return de(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ot(Qe.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Qe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),i=new Qe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(de);return n.forEach(i=>{const s=new Qe(i,0),o=new Qe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Qe(new Q(s),0);let l=new ot(de);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new Qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Qe(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.Mr=e,this.docs=function(){return new Oe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nr();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||M1(L1(h),r)<=0||(i.has(h.key)||Ju(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eN(this)}getSize(e){return U.resolve(this.size)}}class eN extends GP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.persistence=e,this.Nr=new Vs(n=>np(n),rp),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new cp,this.targetCount=0,this.kr=Is.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Is(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Zf(0),this.Kr=!1,this.Kr=!0,this.$r=new YP,this.referenceDelegate=e(this),this.Ur=new tN(this),this.indexManager=new WP,this.remoteDocumentCache=function(i){return new ZP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new zP(n),this.Gr=new QP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new JP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new rN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class rN extends F1{constructor(e){super(),this.currentSequenceNumber=e}}class dp{constructor(e){this.persistence=e,this.Jr=new cp,this.Yr=null}static Zr(e){return new dp(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return JC()?8:U1(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new iN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(oo()<=ae.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(oo()<=ae.DEBUG&&G("QueryEngine","Query:",Mi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(oo()<=ae.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):U.resolve())}Yi(e,n){if($y(n))return U.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_u(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,_u(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return $y(n)||i.isEqual(te.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(oo()<=ae.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mi(n)),this.rs(e,o,n,V1(i,-1)).next(l=>l))})}ts(e,n){let r=new ot(u0(e));return n.forEach((i,s)=>{Ju(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return oo()<=ae.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Vr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Oe(de),this._s=new Vs(s=>np(s),rp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function aN(t,e,n,r){return new oN(t,e,n,r)}async function b0(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function lN(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const m=c.batch,y=m.keys();let I=U.resolve();return y.forEach(x=>{I=I.next(()=>h.getEntry(u,x)).next(P=>{const b=c.docVersions.get(x);ve(b!==null),P.version.compareTo(b)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function D0(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function uN(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((h,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,m)));let I=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(lt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(h.resumeToken,r)),i=i.insert(m,I),function(P,b,E){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(y,I,h)&&l.push(n.Ur.updateTargetData(s,I))});let u=nr(),c=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(cN(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(te.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function cN(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=nr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function dN(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hN(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function jh(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sa(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function ev(t,e,n){const r=ne(t);let i=te.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const m=ne(u),y=m._s.get(h);return y!==void 0?U.resolve(m.os.get(y)):m.Ur.getTargetData(c,h)}(r,o,Rn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:se())).next(l=>(fN(r,iP(e),l),{documents:l,Ts:s})))}function fN(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class tv{constructor(){this.activeTargetIds=cP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pN{constructor(){this.so=new tv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new tv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl=null;function fd(){return yl===null?yl=function(){return 268435456+Math.round(2147483648*Math.random())}():yl++,"0x"+yl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class vN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=fd(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(G("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw ys("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=gN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=fd();return new Promise((o,l)=>{const u=new GE;u.setWithCredentials(!0),u.listenOnce(HE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Vl.NO_ERROR:const h=u.getResponseJson();G(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Vl.TIMEOUT:G(gt,`RPC '${e}' ${s} timed out`),l(new $(j.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const m=u.getStatus();if(G(gt,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const I=y==null?void 0:y.error;if(I&&I.status&&I.message){const x=function(b){const E=b.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(E)>=0?E:j.UNKNOWN}(I.status);l(new $(x,I.message))}else l(new $(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(j.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{G(gt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(gt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=fd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XE(),l=QE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");G(gt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const m=o.createWebChannel(h,u);let y=!1,I=!1;const x=new yN({Io:b=>{I?G(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(y||(G(gt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),G(gt,`RPC '${e}' stream ${i} sending:`,b),m.send(b))},To:()=>m.close()}),P=(b,E,T)=>{b.listen(E,S=>{try{T(S)}catch(L){setTimeout(()=>{throw L},0)}})};return P(m,po.EventType.OPEN,()=>{I||(G(gt,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),P(m,po.EventType.CLOSE,()=>{I||(I=!0,G(gt,`RPC '${e}' stream ${i} transport closed`),x.So())}),P(m,po.EventType.ERROR,b=>{I||(I=!0,ys(gt,`RPC '${e}' stream ${i} transport errored:`,b),x.So(new $(j.UNAVAILABLE,"The operation could not be completed")))}),P(m,po.EventType.MESSAGE,b=>{var E;if(!I){const T=b.data[0];ve(!!T);const S=T,L=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(L){G(gt,`RPC '${e}' stream ${i} received error:`,L);const R=L.status;let N=function(w){const A=$e[w];if(A!==void 0)return T0(A)}(R),v=L.message;N===void 0&&(N=j.INTERNAL,v="Unknown error status: "+R+" with message "+L.message),I=!0,x.So(new $(N,v)),m.close()}else G(gt,`RPC '${e}' stream ${i} received:`,T),x.bo(T)}}),P(l,KE.STAT_EVENT,b=>{b.stat===Rh.PROXY?G(gt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Rh.NOPROXY&&G(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function pd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t){return new RP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new O0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _N extends V0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=NP(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?kn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Mh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=bh(u)?{documents:OP(s,u)}:{query:VP(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=A0(s,o.resumeToken);const c=Oh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Eu(s,o.snapshotVersion.toTimestamp());const c=Oh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=MP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Mh(this.serializer),n.removeTarget=e,this.a_(n)}}class wN extends V0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=DP(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Mh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bP(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Vh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Vh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class TN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(tr(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ki(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.L_.add(4),await xa(c),c.q_.set("Unknown"),c.L_.delete(4),await ic(c)}(this))})}),this.q_=new TN(r,i)}}async function ic(t){if(ki(t))for(const e of t.B_)await e(!0)}async function xa(t){for(const e of t.B_)await e(!1)}function L0(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),gp(n)?mp(n):Ls(n).r_()&&pp(n,e))}function fp(t,e){const n=ne(t),r=Ls(n);n.N_.delete(e),r.r_()&&M0(n,e),n.N_.size===0&&(r.r_()?r.o_():ki(n)&&n.q_.set("Unknown"))}function pp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ls(t).A_(e)}function M0(t,e){t.Q_.xe(e),Ls(t).R_(e)}function mp(t){t.Q_=new SP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ls(t).start(),t.q_.v_()}function gp(t){return ki(t)&&!Ls(t).n_()&&t.N_.size>0}function ki(t){return ne(t).L_.size===0}function j0(t){t.Q_=void 0}async function SN(t){t.q_.set("Online")}async function AN(t){t.N_.forEach((e,n)=>{pp(t,e)})}async function CN(t,e){j0(t),gp(t)?(t.q_.M_(e),mp(t)):t.q_.set("Unknown")}async function xN(t,e,n){if(t.q_.set("Online"),e instanceof S0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tu(t,r)}else if(e instanceof jl?t.Q_.Ke(e):e instanceof I0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await D0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(lt.EMPTY_BYTE_STRING,h.snapshotVersion)),M0(s,u);const m=new Tr(h.target,u,c,h.sequenceNumber);pp(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Tu(t,r)}}async function Tu(t,e,n){if(!Sa(e))throw e;t.L_.add(1),await xa(t),t.q_.set("Offline"),n||(n=()=>D0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ic(t)})}function F0(t,e){return e().catch(n=>Tu(t,n,e))}async function sc(t){const e=ne(t),n=Mr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;RN(e);)try{const i=await dN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,kN(e,i)}catch(i){await Tu(e,i)}U0(e)&&B0(e)}function RN(t){return ki(t)&&t.O_.length<10}function kN(t,e){t.O_.push(e);const n=Mr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function U0(t){return ki(t)&&!Mr(t).n_()&&t.O_.length>0}function B0(t){Mr(t).start()}async function PN(t){Mr(t).p_()}async function NN(t){const e=Mr(t);for(const n of t.O_)e.m_(n.mutations)}async function bN(t,e,n){const r=t.O_.shift(),i=ap.from(r,e,n);await F0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sc(t)}async function DN(t,e){e&&Mr(t).V_&&await async function(r,i){if(function(o){return EP(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Mr(r).s_(),await F0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await sc(r)}}(t,e),U0(t)&&B0(t)}async function rv(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=ki(n);n.L_.add(3),await xa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ic(n)}async function ON(t,e){const n=ne(t);e?(n.L_.delete(2),await ic(n)):e||(n.L_.add(2),await xa(n),n.q_.set("Unknown"))}function Ls(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new _N(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:SN.bind(null,t),Ro:AN.bind(null,t),mo:CN.bind(null,t),d_:xN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),gp(t)?mp(t):t.q_.set("Unknown")):(await t.K_.stop(),j0(t))})),t.K_}function Mr(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new wN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:PN.bind(null,t),mo:DN.bind(null,t),f_:NN.bind(null,t),g_:bN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await sc(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new yp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vp(t,e){if(tr("AsyncQueue",`${e}: ${t}`),Sa(t))return new $(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=mo(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.W_=new Oe(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ss{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ss(e,n,us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class LN{constructor(){this.queries=sv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=sv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(j.ABORTED,"Firestore shutting down"))}}function sv(){return new Vs(t=>l0(t),Yu)}async function z0(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new VN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=vp(o,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&_p(n)}async function $0(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MN(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&_p(n)}function jN(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function _p(t){t.Y_.forEach(e=>{e.next()})}var Fh,ov;(ov=Fh||(Fh={})).ea="default",ov.Cache="cache";class W0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Fh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.key=e}}class G0{constructor(e){this.key=e}}class FN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=u0(e),this.Ra=new us(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new iv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,m)=>{const y=i.get(h),I=Ju(this.query,m)?m:null,x=!!y&&this.mutatedKeys.has(y.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let b=!1;y&&I?y.data.isEqual(I.data)?x!==P&&(r.track({type:3,doc:I}),b=!0):this.ga(y,I)||(r.track({type:2,doc:I}),b=!0,(u&&this.Aa(I,u)>0||c&&this.Aa(I,c)<0)&&(l=!0)):!y&&I?(r.track({type:0,doc:I}),b=!0):y&&!I&&(r.track({type:1,doc:y}),b=!0,(u||c)&&(l=!0)),b&&(I?(o=o.add(I),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,m)=>function(I,x){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return P(I)-P(x)}(h.type,m.type)||this.Aa(h.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Ss(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new iv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new G0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new q0(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ss.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class UN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BN{constructor(e){this.key=e,this.va=!1}}class zN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vs(l=>l0(l),Yu),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(Q.comparator),this.Na=new Map,this.La=new cp,this.Ba={},this.ka=new Map,this.qa=Is.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $N(t,e,n=!0){const r=J0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await H0(r,e,n,!0),i}async function WN(t,e){const n=J0(t);await H0(n,e,!0,!1)}async function H0(t,e,n,r){const i=await hN(t.localStore,Rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await qN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&L0(t.remoteStore,i),l}async function qN(t,e,n,r,i){t.Ka=(m,y,I)=>async function(P,b,E,T){let S=b.view.ma(E);S.ns&&(S=await ev(P.localStore,b.query,!1).then(({documents:v})=>b.view.ma(v,S)));const L=T&&T.targetChanges.get(b.targetId),R=T&&T.targetMismatches.get(b.targetId)!=null,N=b.view.applyChanges(S,P.isPrimaryClient,L,R);return lv(P,b.targetId,N.wa),N.snapshot}(t,m,y,I);const s=await ev(t.localStore,e,!0),o=new FN(e,s.Ts),l=o.ma(s.documents),u=Ca.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);lv(t,n,c.wa);const h=new UN(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function GN(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Yu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await jh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&fp(r.remoteStore,i.targetId),Uh(r,i.targetId)}).catch(Ia)):(Uh(r,i.targetId),await jh(r.localStore,i.targetId,!0))}async function HN(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fp(n.remoteStore,r.targetId))}async function KN(t,e,n){const r=tb(t);try{const i=await function(o,l){const u=ne(o),c=ze.now(),h=l.reduce((I,x)=>I.add(x.key),se());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=nr(),P=se();return u.cs.getEntries(I,h).next(b=>{x=b,x.forEach((E,T)=>{T.isValidDocument()||(P=P.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,x)).next(b=>{m=b;const E=[];for(const T of l){const S=gP(T,m.get(T.key).overlayedDocument);S!=null&&E.push(new Wr(T.key,S,t0(S.value.mapValue),xt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,E,l)}).next(b=>{y=b;const E=b.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(I,b.batchId,E)})}).then(()=>({batchId:y.batchId,changes:d0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Oe(de)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ra(r,i.changes),await sc(r.remoteStore)}catch(i){const s=vp(i,"Failed to persist write");n.reject(s)}}async function K0(t,e){const n=ne(t);try{const r=await uN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ve(o.va):i.removedDocuments.size>0&&(ve(o.va),o.va=!1))}),await Ra(n,r,e)}catch(r){await Ia(r)}}function av(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let c=!1;u.queries.forEach((h,m)=>{for(const y of m.j_)y.Z_(l)&&(c=!0)}),c&&_p(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QN(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Oe(Q.comparator);o=o.insert(s,_t.newNoDocument(s,te.min()));const l=se().add(s),u=new nc(te.min(),new Map,new Oe(de),o,l);await K0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),wp(r)}else await jh(r.localStore,e,!1).then(()=>Uh(r,e,n)).catch(Ia)}async function XN(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await lN(n.localStore,e);X0(n,r,null),Q0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ra(n,i)}catch(i){await Ia(i)}}async function YN(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ve(m!==null),h=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);X0(r,e,n),Q0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ra(r,i)}catch(i){await Ia(i)}}function Q0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function X0(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Uh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Y0(t,r)})}function Y0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(fp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),wp(t))}function lv(t,e,n){for(const r of n)r instanceof q0?(t.La.addReference(r.key,e),JN(t,r)):r instanceof G0?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Y0(t,r.key)):ee()}function JN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),wp(t))}function wp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(Ie.fromString(e)),r=t.qa.next();t.Na.set(r,new BN(n)),t.Oa=t.Oa.insert(n,r),L0(t.remoteStore,new Tr(Rn(ip(n.path)),r,"TargetPurposeLimboResolution",Zf.oe))}}async function Ra(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=hp.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(c,y=>U.forEach(y.$i,I=>h.persistence.referenceDelegate.addReference(m,y.targetId,I)).next(()=>U.forEach(y.Ui,I=>h.persistence.referenceDelegate.removeReference(m,y.targetId,I)))))}catch(m){if(!Sa(m))throw m;G("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const y=m.targetId;if(!m.fromCache){const I=h.os.get(y),x=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(x);h.os=h.os.insert(y,P)}}}(r.localStore,s))}async function ZN(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await b0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ra(n,r.hs)}}function eb(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function J0(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=K0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QN.bind(null,e),e.Ca.d_=MN.bind(null,e.eventManager),e.Ca.$a=jN.bind(null,e.eventManager),e}function tb(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YN.bind(null,e),e}class Iu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return aN(this.persistence,new sN,e.initialUser,this.serializer)}Ga(e){return new nN(dp.Zr,this.serializer)}Wa(e){return new pN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Iu.provider={build:()=>new Iu};class Bh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>av(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZN.bind(null,this.syncEngine),await ON(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LN}()}createDatastore(e){const n=rc(e.databaseInfo.databaseId),r=function(s){return new vN(s)}(e.databaseInfo);return function(s,o,l,u){return new EN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new IN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>av(this.syncEngine,n,0),function(){return nv.D()?new nv:new mN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const m=new zN(i,s,o,l,u,c);return h&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await xa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Bh.provider={build:()=>new Bh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=JE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function md(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await b0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function uv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rb(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>rv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>rv(e.remoteStore,i)),t._onlineComponents=e}async function rb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await md(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ys("Error using user provided cache. Falling back to memory cache: "+n),await md(t,new Iu)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await md(t,new Iu);return t._offlineComponents}async function eT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await uv(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await uv(t,new Bh))),t._onlineComponents}function ib(t){return eT(t).then(e=>e.syncEngine)}async function tT(t){const e=await eT(t),n=e.eventManager;return n.onListen=$N.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HN.bind(null,e.syncEngine),n}function sb(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new Z0({next:y=>{h.Za(),o.enqueueAndForget(()=>$0(s,m));const I=y.docs.has(l);!I&&y.fromCache?c.reject(new $(j.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&y.fromCache&&u&&u.source==="server"?c.reject(new $(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(y)},error:y=>c.reject(y)}),m=new W0(ip(l.path),h,{includeMetadataChanges:!0,_a:!0});return z0(s,m)}(await tT(t),t.asyncQueue,e,n,r)),r.promise}function ob(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new Z0({next:y=>{h.Za(),o.enqueueAndForget(()=>$0(s,m)),y.fromCache&&u.source==="server"?c.reject(new $(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(y)},error:y=>c.reject(y)}),m=new W0(l,h,{includeMetadataChanges:!0,_a:!0});return z0(s,m)}(await tT(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e,n){if(!n)throw new $(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ab(t,e,n,r){if(e===!0&&r===!0)throw new $(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dv(t){if(!Q.isDocumentKey(t))throw new $(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hv(t){if(Q.isDocumentKey(t))throw new $(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oc(t);throw new $(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ab("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ac{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new C1;switch(r.type){case"firstParty":return new P1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=cv.get(n);r&&(G("ComponentProvider","Removing Datastore"),cv.delete(n),r.terminate())}(this),Promise.resolve()}}function lb(t,e,n,r={}){var i;const s=(t=sn(t,ac))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=yt.MOCK_USER;else{l=qC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(c)}t._authCredentials=new x1(new YE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ir(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class br extends ir{constructor(e,n,r){super(e,n,ip(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new Q(e))}withConverter(e){return new br(this.firestore,e,this._path)}}function Me(t,e,...n){if(t=De(t),rT("collection","path",e),t instanceof ac){const r=Ie.fromString(e,...n);return hv(r),new br(t,null,r)}{if(!(t instanceof Rt||t instanceof br))throw new $(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return hv(r),new br(t.firestore,null,r)}}function he(t,e,...n){if(t=De(t),arguments.length===1&&(e=JE.newId()),rT("doc","path",e),t instanceof ac){const r=Ie.fromString(e,...n);return dv(r),new Rt(t,null,new Q(r))}{if(!(t instanceof Rt||t instanceof br))throw new $(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return dv(r),new Rt(t.firestore,t instanceof br?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new O0(this,"async_queue_retry"),this.Vu=()=>{const r=pd();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=pd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=pd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Kn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Sa(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=yp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class qr extends ac{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new pv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pv(e),this._firestoreClient=void 0,await e}}}function ub(t,e){const n=typeof t=="object"?t:zf(),r=typeof t=="string"?t:"(default)",i=Ns(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$C("firestore");s&&lb(i,...s)}return i}function lc(t){if(t._terminated)throw new $(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cb(t),t._firestoreClient}function cb(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new $1(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,nT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new nb(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this._byteString=e}static fromBase64String(e){try{return new As(lt.fromBase64String(e))}catch(n){throw new $(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new As(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=/^__.*__$/;class hb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class iT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class uc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new uc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Su(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(sT(this.Cu)&&db.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class fb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rc(e)}Qu(e,n,r,i=!1){return new uc({Cu:e,methodName:n,qu:r,path:it.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ms(t){const e=t._freezeSettings(),n=rc(t._databaseId);return new fb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ip(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Cp("Data must be an object, but it was:",o,r);const l=uT(r,o);let u,c;if(s.merge)u=new $t(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const m of s.mergeFields){const y=zh(e,m,n);if(!o.contains(y))throw new $(j.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);dT(h,y)||h.push(y)}u=new $t(h),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new hb(new Dt(l),u,c)}class Na extends Pa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Na}}function pb(t,e,n){return new uc({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sp extends Pa{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=pb(this,e,!0),r=this.Ku.map(s=>js(s,n)),i=new Ts(r);return new _0(e.path,i)}isEqual(e){return e instanceof Sp&&Yo(this.Ku,e.Ku)}}class Ap extends Pa{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new aa(e.serializer,p0(e.serializer,this.$u));return new _0(e.path,n)}isEqual(e){return e instanceof Ap&&this.$u===e.$u}}function oT(t,e,n,r){const i=t.Qu(1,e,n);Cp("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();xi(r,(u,c)=>{const h=xp(e,u,n);c=De(c);const m=i.Nu(h);if(c instanceof Na)s.push(h);else{const y=js(c,m);y!=null&&(s.push(h),o.set(h,y))}});const l=new $t(s);return new iT(o,l,i.fieldTransforms)}function aT(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[zh(e,r,n)],u=[i];if(s.length%2!=0)throw new $(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(zh(e,s[y])),u.push(s[y+1]);const c=[],h=Dt.empty();for(let y=l.length-1;y>=0;--y)if(!dT(c,l[y])){const I=l[y];let x=u[y];x=De(x);const P=o.Nu(I);if(x instanceof Na)c.push(I);else{const b=js(x,P);b!=null&&(c.push(I),h.set(I,b))}}const m=new $t(c);return new iT(h,m,o.fieldTransforms)}function lT(t,e,n,r=!1){return js(n,t.Qu(r?4:3,e))}function js(t,e){if(cT(t=De(t)))return Cp("Unsupported field value:",e,t),uT(t,e);if(t instanceof Pa)return function(r,i){if(!sT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=js(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return p0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ze.fromDate(r);return{timestampValue:Eu(i.serializer,s)}}if(r instanceof ze){const s=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eu(i.serializer,s)}}if(r instanceof Ep)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof As)return{bytesValue:A0(i.serializer,r._byteString)};if(r instanceof Rt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:up(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Tp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return op(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${oc(r)}`)}(t,e)}function uT(t,e){const n={};return ZE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(r,i)=>{const s=js(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Ep||t instanceof As||t instanceof Rt||t instanceof Pa||t instanceof Tp)}function Cp(t,e,n){if(!cT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=oc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function zh(t,e,n){if((e=De(e))instanceof ka)return e._internalPath;if(typeof e=="string")return xp(t,e);throw Su("Field path arguments must be of type string or ",t,!1,void 0,n)}const mb=new RegExp("[~\\*/\\[\\]]");function xp(t,e,n){if(e.search(mb)>=0)throw Su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ka(...e.split("."))._internalPath}catch{throw Su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Su(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(j.INVALID_ARGUMENT,l+t+u)}function dT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gb extends Rp{data(){return super.data()}}function cc(t,e){return typeof e=="string"?xp(t,e):e instanceof ka?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kp{}class dc extends kp{}function Ye(t,e,...n){let r=[];e instanceof kp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Pp).length,l=s.filter(u=>u instanceof hc).length;if(o>1||o>0&&l>0)throw new $(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class hc extends dc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hc(e,n,r)}_apply(e){const n=this._parse(e);return hT(e._query,n),new ir(e.firestore,e.converter,Dh(e._query,n))}_parse(e){const n=Ms(e.firestore);return function(s,o,l,u,c,h,m){let y;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){yv(m,h);const I=[];for(const x of m)I.push(gv(u,s,x));y={arrayValue:{values:I}}}else y=gv(u,s,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||yv(m,h),y=lT(l,o,m,h==="in"||h==="not-in");return qe.create(c,h,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Fe(t,e,n){const r=e,i=cc("where",t);return hc._create(i,r,n)}class Pp extends kp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)hT(o,u),o=Dh(o,u)}(e._query,n),new ir(e.firestore,e.converter,Dh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Np extends dc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Np(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sa(s,o)}(e._query,this._field,this._direction);return new ir(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ri(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function No(t,e="asc"){const n=e,r=cc("orderBy",t);return Np._create(r,n)}class bp extends dc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new bp(e,n,r)}_apply(e){return new ir(e.firestore,e.converter,_u(e._query,this._limit,this._limitType))}}function mv(t){return bp._create("limit",t,"F")}class Dp extends dc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Dp(e,n,r)}_apply(e){const n=_b(e,this.type,this._docOrFields,this._inclusive);return new ir(e.firestore,e.converter,function(i,s){return new Ri(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function vb(...t){return Dp._create("startAfter",t,!1)}function _b(t,e,n,r){if(n[0]=De(n[0]),n[0]instanceof Rp)return function(s,o,l,u,c){if(!u)throw new $(j.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const h=[];for(const m of ls(s))if(m.field.isKeyField())h.push(vu(o,u.key));else{const y=u.data.field(m.field);if(Xu(y))throw new $(j.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(y===null){const I=m.field.canonicalString();throw new $(j.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${I}' (used as the orderBy) does not exist.`)}h.push(y)}return new Es(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ms(t.firestore);return function(o,l,u,c,h,m){const y=o.explicitOrderBy;if(h.length>y.length)throw new $(j.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const I=[];for(let x=0;x<h.length;x++){const P=h[x];if(y[x].field.isKeyField()){if(typeof P!="string")throw new $(j.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!sp(o)&&P.indexOf("/")!==-1)throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const b=o.path.child(Ie.fromString(P));if(!Q.isDocumentKey(b))throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const E=new Q(b);I.push(vu(l,E))}else{const b=lT(u,c,P);I.push(b)}}return new Es(I,m)}(t._query,t.firestore._databaseId,i,e,n,r)}}function gv(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new $(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sp(e)&&n.indexOf("/")!==-1)throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!Q.isDocumentKey(r))throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vu(t,new Q(r))}if(n instanceof Rt)return vu(t,n._key);throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oc(n)}.`)}function yv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wb{convertValue(e,n="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ue(o.doubleValue));return new Tp(s)}convertGeoPoint(e){return new Ep(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ep(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ve(N0(r));const i=new ra(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fT extends Rp{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fl extends fT{data(e={}){return super.data(e)}}class Eb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new yo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fl(this._firestore,this._userDataWriter,r.key,r,new yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Fl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Fl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:Tb(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Tb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){t=sn(t,Rt);const e=sn(t.firestore,qr);return sb(lc(e),t._key).then(n=>Ib(e,t,n))}class pT extends wb{constructor(e){super(),this.firestore=e}convertBytes(e){return new As(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function Je(t){t=sn(t,ir);const e=sn(t.firestore,qr),n=lc(e),r=new pT(e);return yb(t._query),ob(n,t._query).then(i=>new Eb(e,r,t,i))}function Vp(t,e,n){t=sn(t,Rt);const r=sn(t.firestore,qr),i=Op(t.converter,e,n);return ba(r,[Ip(Ms(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xt.none())])}function on(t,e,n,...r){t=sn(t,Rt);const i=sn(t.firestore,qr),s=Ms(i);let o;return o=typeof(e=De(e))=="string"||e instanceof ka?aT(s,"updateDoc",t._key,e,n,r):oT(s,"updateDoc",t._key,e),ba(i,[o.toMutation(t._key,xt.exists(!0))])}function gd(t){return ba(sn(t.firestore,qr),[new tc(t._key,xt.none())])}function Lp(t,e){const n=sn(t.firestore,qr),r=he(t),i=Op(t.converter,e);return ba(n,[Ip(Ms(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function ba(t,e){return function(r,i){const s=new Kn;return r.asyncQueue.enqueueAndForget(async()=>KN(await ib(r),i,s)),s.promise}(lc(t),e)}function Ib(t,e,n){const r=n.docs.get(e._key),i=new pT(t);return new fT(t,i,e._key,r,new yo(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ms(e)}set(e,n,r){this._verifyNotCommitted();const i=yd(e,this._firestore),s=Op(i.converter,n,r),o=Ip(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,xt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=yd(e,this._firestore);let o;return o=typeof(n=De(n))=="string"||n instanceof ka?aT(this._dataReader,"WriteBatch.update",s._key,n,r,i):oT(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,xt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=yd(e,this._firestore);return this._mutations=this._mutations.concat(new tc(n._key,xt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new $(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function yd(t,e){if((t=De(t)).firestore!==e)throw new $(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(){return new Na("deleteField")}function Cb(...t){return new Sp("arrayUnion",t)}function xb(t){return new Ap("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){return lc(t=sn(t,qr)),new Sb(t,e=>ba(t,e))}(function(e,n=!0){(function(i){Os=i})(bs),Pn(new mn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new qr(new R1(r.getProvider("auth-internal")),new b1(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),tn(Dy,"4.7.3",e),tn(Dy,"4.7.3","esm2017")})();var Rb="firebase",kb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(Rb,kb,"app");const mT="@firebase/installations",Mp="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=1e4,yT=`w:${Mp}`,vT="FIS_v2",Pb="https://firebaseinstallations.googleapis.com/v1",Nb=60*60*1e3,bb="installations",Db="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ei=new Ai(bb,Db,Ob);function _T(t){return t instanceof Dn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT({projectId:t}){return`${Pb}/projects/${t}/installations`}function ET(t){return{token:t.token,requestStatus:2,expiresIn:Lb(t.expiresIn),creationTime:Date.now()}}async function TT(t,e){const r=(await e.json()).error;return Ei.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function IT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Vb(t,{refreshToken:e}){const n=IT(t);return n.append("Authorization",Mb(e)),n}async function ST(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Lb(t){return Number(t.replace("s","000"))}function Mb(t){return`${vT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=wT(t),i=IT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:vT,appId:t.appId,sdkVersion:yT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await ST(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ET(c.authToken)}}else throw await TT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=/^[cdef][\w-]{21}$/,$h="";function Bb(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zb(t);return Ub.test(n)?n:$h}catch{return $h}}function zb(t){return Fb(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Map;function xT(t,e){const n=fc(t);RT(n,e),$b(n,e)}function RT(t,e){const n=CT.get(t);if(n)for(const r of n)r(e)}function $b(t,e){const n=Wb();n&&n.postMessage({key:t,fid:e}),qb()}let oi=null;function Wb(){return!oi&&"BroadcastChannel"in self&&(oi=new BroadcastChannel("[Firebase] FID Change"),oi.onmessage=t=>{RT(t.data.key,t.data.fid)}),oi}function qb(){CT.size===0&&oi&&(oi.close(),oi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="firebase-installations-database",Hb=1,Ti="firebase-installations-store";let _d=null;function jp(){return _d||(_d=qu(Gb,Hb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ti)}}})),_d}async function Au(t,e){const n=fc(t),i=(await jp()).transaction(Ti,"readwrite"),s=i.objectStore(Ti),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&xT(t,e.fid),e}async function kT(t){const e=fc(t),r=(await jp()).transaction(Ti,"readwrite");await r.objectStore(Ti).delete(e),await r.done}async function pc(t,e){const n=fc(t),i=(await jp()).transaction(Ti,"readwrite"),s=i.objectStore(Ti),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&xT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(t){let e;const n=await pc(t.appConfig,r=>{const i=Kb(r),s=Qb(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===$h?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Kb(t){const e=t||{fid:Bb(),registrationStatus:0};return PT(e)}function Qb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ei.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Xb(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Yb(t)}:{installationEntry:e}}async function Xb(t,e){try{const n=await jb(t,e);return Au(t.appConfig,n)}catch(n){throw _T(n)&&n.customData.serverCode===409?await kT(t.appConfig):await Au(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Yb(t){let e=await vv(t.appConfig);for(;e.registrationStatus===1;)await AT(100),e=await vv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Fp(t);return r||n}return e}function vv(t){return pc(t,e=>{if(!e)throw Ei.create("installation-not-found");return PT(e)})}function PT(t){return Jb(t)?{fid:t.fid,registrationStatus:0}:t}function Jb(t){return t.registrationStatus===1&&t.registrationTime+gT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb({appConfig:t,heartbeatServiceProvider:e},n){const r=eD(t,n),i=Vb(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:yT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await ST(()=>fetch(r,l));if(u.ok){const c=await u.json();return ET(c)}else throw await TT("Generate Auth Token",u)}function eD(t,{fid:e}){return`${wT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Up(t,e=!1){let n;const r=await pc(t.appConfig,s=>{if(!NT(s))throw Ei.create("not-registered");const o=s.authToken;if(!e&&rD(o))return s;if(o.requestStatus===1)return n=tD(t,e),s;{if(!navigator.onLine)throw Ei.create("app-offline");const l=sD(s);return n=nD(t,l),l}});return n?await n:r.authToken}async function tD(t,e){let n=await _v(t.appConfig);for(;n.authToken.requestStatus===1;)await AT(100),n=await _v(t.appConfig);const r=n.authToken;return r.requestStatus===0?Up(t,e):r}function _v(t){return pc(t,e=>{if(!NT(e))throw Ei.create("not-registered");const n=e.authToken;return oD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function nD(t,e){try{const n=await Zb(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Au(t.appConfig,r),n}catch(n){if(_T(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Au(t.appConfig,r)}throw n}}function NT(t){return t!==void 0&&t.registrationStatus===2}function rD(t){return t.requestStatus===2&&!iD(t)}function iD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Nb}function sD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function oD(t){return t.requestStatus===1&&t.requestTime+gT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Fp(e);return r?r.catch(console.error):Up(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lD(t,e=!1){const n=t;return await uD(n),(await Up(n,e)).token}async function uD(t){const{registrationPromise:e}=await Fp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t){if(!t||!t.options)throw wd("App Configuration");if(!t.name)throw wd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wd(t){return Ei.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="installations",dD="installations-internal",hD=t=>{const e=t.getProvider("app").getImmediate(),n=cD(e),r=Ns(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},fD=t=>{const e=t.getProvider("app").getImmediate(),n=Ns(e,bT).getImmediate();return{getId:()=>aD(n),getToken:i=>lD(n,i)}};function pD(){Pn(new mn(bT,hD,"PUBLIC")),Pn(new mn(dD,fD,"PRIVATE"))}pD();tn(mT,Mp);tn(mT,Mp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD="/firebase-messaging-sw.js",gD="/firebase-cloud-messaging-push-scope",DT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",yD="https://fcmregistrations.googleapis.com/v1",OT="google.c.a.c_id",vD="google.c.a.c_l",_D="google.c.a.ts",wD="google.c.a.e";var wv;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(wv||(wv={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var la;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(la||(la={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ED(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="fcm_token_details_db",TD=5,Ev="fcm_token_object_Store";async function ID(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Ed))return null;let e=null;return(await qu(Ed,TD,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(Ev))return;const u=o.objectStore(Ev),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(l=h.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:jn(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:jn(h.auth),p256dh:jn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:jn(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:jn(h.auth),p256dh:jn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:jn(h.vapidKey)}}}}}})).close(),await ad(Ed),await ad("fcm_vapid_details_db"),await ad("undefined"),SD(e)?e:null}function SD(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD="firebase-messaging-database",CD=1,ua="firebase-messaging-store";let Td=null;function VT(){return Td||(Td=qu(AD,CD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ua)}}})),Td}async function xD(t){const e=LT(t),r=await(await VT()).transaction(ua).objectStore(ua).get(e);if(r)return r;{const i=await ID(t.appConfig.senderId);if(i)return await Bp(t,i),i}}async function Bp(t,e){const n=LT(t),i=(await VT()).transaction(ua,"readwrite");return await i.objectStore(ua).put(e,n),await i.done,e}function LT({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},kt=new Ai("messaging","Messaging",RD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(t,e){const n=await $p(t),r=MT(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(zp(t.appConfig),i)).json()}catch(o){throw kt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw kt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw kt.create("token-subscribe-no-token");return s.token}async function PD(t,e){const n=await $p(t),r=MT(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${zp(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw kt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw kt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw kt.create("token-update-no-token");return s.token}async function ND(t,e){const r={method:"DELETE",headers:await $p(t)};try{const s=await(await fetch(`${zp(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw kt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw kt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function zp({projectId:t}){return`${yD}/projects/${t}/registrations`}async function $p({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function MT({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==DT&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=7*24*60*60*1e3;async function DD(t){const e=await VD(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:jn(e.getKey("auth")),p256dh:jn(e.getKey("p256dh"))},r=await xD(t.firebaseDependencies);if(r){if(LD(r.subscriptionOptions,n))return Date.now()>=r.createTime+bD?OD(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ND(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Tv(t.firebaseDependencies,n)}else return Tv(t.firebaseDependencies,n)}async function OD(t,e){try{const n=await PD(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Bp(t.firebaseDependencies,r),n}catch(n){throw n}}async function Tv(t,e){const r={token:await kD(t,e),createTime:Date.now(),subscriptionOptions:e};return await Bp(t,r),r.token}async function VD(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ED(e)})}function LD(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return MD(e,t),jD(e,t),FD(e,t),e}function MD(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function jD(t,e){e.data&&(t.data=e.data)}function FD(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(t){return typeof t=="object"&&!!t&&OT in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){if(!t||!t.options)throw Id("App Configuration Object");if(!t.name)throw Id("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Id(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Id(t){return kt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=BD(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D(t){try{t.swRegistration=await navigator.serviceWorker.register(mD,{scope:gD}),t.swRegistration.update().catch(()=>{})}catch(e){throw kt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD(t,e){if(!e&&!t.swRegistration&&await $D(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw kt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qD(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=DT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e){if(!navigator)throw kt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw kt.create("permission-blocked");return await qD(t,e==null?void 0:e.vapidKey),await WD(t,e==null?void 0:e.serviceWorkerRegistration),DD(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(t,e,n){const r=HD(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[OT],message_name:n[vD],message_time:n[_D],message_device_time:Math.floor(Date.now()/1e3)})}function HD(t){switch(t){case la.NOTIFICATION_CLICKED:return"notification_open";case la.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KD(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===la.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Iv(n)):t.onMessageHandler.next(Iv(n)));const r=n.data;UD(r)&&r[wD]==="1"&&await GD(t,n.messageType,r)}const Sv="@firebase/messaging",Av="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=t=>{const e=new zD(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>KD(e,n)),e},XD=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>jT(e,r)}};function YD(){Pn(new mn("messaging",QD,"PUBLIC")),Pn(new mn("messaging-internal",XD,"PRIVATE")),tn(Sv,Av),tn(Sv,Av,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(){try{await sE()}catch{return!1}return typeof window<"u"&&iE()&&ZC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t=zf()){return JD().then(e=>{if(!e)throw kt.create("unsupported-browser")},e=>{throw kt.create("indexed-db-unsupported")}),Ns(De(t),"messaging").getImmediate()}async function e2(t,e){return t=De(t),jT(t,e)}YD();const t2={apiKey:"AIzaSyAeugvkxFv7pk21juKWCeAMpsG2w-pGwzo",authDomain:"porreta-app.firebaseapp.com",projectId:"porreta-app",storageBucket:"porreta-app.firebasestorage.app",messagingSenderId:"377909387939",appId:"1:377909387939:web:1a7c43647046f4667dd516"},Wp=lE(t2),vl=S1(Wp),K=ub(Wp),n2=ZD(Wp),r2="BG0owZ2spXe7RKBKEoDljfW0wF0YzqXCLBOhj1IVCATZKI-eAcihsw1ua2u1pF7iDbX_VSWbXzHbGcwEqGg0HTg";async function i2(t){try{if(console.log("Solicitando permiso de notificaciones..."),!("Notification"in window))return console.warn("Este navegador no soporta notificaciones"),!1;const e=await Notification.requestPermission();return console.log("Permiso de notificaciones:",e),e!=="granted"?(console.log("Permiso de notificaciones denegado"),!1):(await s2(t),!0)}catch(e){return console.error("Error al solicitar permisos:",e),!1}}async function s2(t){var e;try{const n=await navigator.serviceWorker.register("/Porreta/firebase-messaging-sw.js",{scope:"/Porreta/"});console.log("Service Worker registrado:",n),await navigator.serviceWorker.ready;const r=await e2(n2,{vapidKey:r2,serviceWorkerRegistration:n});if(r){console.log("✅ Token FCM obtenido:",r);try{const i=he(K,"users",t);await Vp(i,{fcmTokens:Cb(r)},{merge:!0}),console.log("💾 Token FCM guardado/actualizado en Firestore");const s=await vn(i);if(s.exists()){const o=((e=s.data())==null?void 0:e.fcmTokens)||[];console.log("📊 Tokens actuales en Firestore:",o.length,o)}else console.error("❌ El documento de usuario no existe después de guardar")}catch(i){console.error("❌ Error guardando token en Firestore:",i)}}else console.warn("⚠️ No se pudo obtener el token FCM")}catch(n){throw console.error("Error al registrar token FCM:",n),n}}const FT=O.createContext(void 0),Kt=()=>{const t=O.useContext(FT);if(!t)throw new Error("useAuth debe usarse dentro de AuthProvider");return t},o2=({children:t})=>{const[e,n]=O.useState(null),[r,i]=O.useState(null),[s,o]=O.useState(!0),l=async I=>{try{const x=await vn(he(K,"users",I.uid));x.exists()&&i({uid:I.uid,...x.data()}),setTimeout(()=>{i2(I.uid).catch(P=>{console.error("Error solicitando permisos de notificación:",P)})},1e3)}catch(x){console.error("Error cargando datos usuario:",x)}},u=async()=>{e&&await l(e)};O.useEffect(()=>hk(vl,async x=>{n(x),x?await l(x):i(null),o(!1)}),[]);const c=async(I,x,P)=>{const E=(await lk(vl,I,x)).user;await Vp(he(K,"users",E.uid),{email:I,nick:P,createdAt:new Date,communities:{}}),await l(E)},h=async(I,x)=>{await uk(vl,I,x)},m=async()=>{await fk(vl)},y={currentUser:e,userData:r,loading:s,isSuperAdmin:(r==null?void 0:r.isSuperAdmin)===!0,signup:c,login:h,logout:m,refreshUserData:u};return p.jsx(FT.Provider,{value:y,children:t})},UT=O.createContext(void 0),a2=({children:t})=>{const[e,n]=O.useState(()=>{const i=localStorage.getItem("porreta-theme");return i==="dark"||i==="light"?i:"light"});O.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("porreta-theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")};return p.jsx(UT.Provider,{value:{theme:e,toggleTheme:r},children:t})},l2=()=>{const t=O.useContext(UT);if(t===void 0)throw new Error("useTheme debe usarse dentro de ThemeProvider");return t},u2=()=>{const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,s]=O.useState(""),[o,l]=O.useState(!1),{login:u,currentUser:c,loading:h}=Kt(),m=bn();O.useEffect(()=>{!h&&c&&m("/communities",{replace:!0})},[c,h,m]);const y=async I=>{if(I.preventDefault(),!t||!n){s("Completa todos los campos");return}s(""),l(!0);try{await u(t,n),m("/communities",{replace:!0})}catch(x){s("Error al iniciar sesión: "+(x.message||"Error desconocido"))}finally{l(!1)}};return h?p.jsx("div",{className:"container",style:{textAlign:"center",marginTop:"100px"},children:p.jsx("p",{children:"Cargando..."})}):p.jsx("div",{className:"container",children:p.jsxs("div",{className:"card",style:{marginTop:"60px"},children:[p.jsx("h1",{style:{textAlign:"center",color:"#1976d2",marginTop:0},children:"Porreta"}),p.jsx("h2",{style:{textAlign:"center",marginTop:0,fontSize:"18px",color:"#666"},children:"Iniciar Sesión"}),p.jsxs("form",{onSubmit:y,children:[p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Correo electrónico"}),p.jsx("input",{type:"email",className:"input",value:t,onChange:I=>e(I.target.value),placeholder:"tu@email.com",disabled:o})]}),p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Contraseña"}),p.jsx("input",{type:"password",className:"input",value:n,onChange:I=>r(I.target.value),placeholder:"Tu contraseña",disabled:o})]}),i&&p.jsx("div",{className:"error",children:i}),p.jsx("button",{type:"submit",className:"button",disabled:o,children:o?"Iniciando...":"Iniciar Sesión"}),p.jsx("button",{type:"button",className:"button button-secondary",onClick:()=>m("/signup"),disabled:o,children:"Crear Cuenta Nueva"})]})]})})},c2=()=>{const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,s]=O.useState(""),[o,l]=O.useState(""),[u,c]=O.useState(""),[h,m]=O.useState(!1),[y,I]=O.useState(!1),[x,P]=O.useState(!0),{signup:b,currentUser:E,loading:T}=Kt(),S=bn();O.useEffect(()=>{(async()=>{try{const N=await vn(he(K,"config","global"));if(N.exists()){const v=N.data();I(!v.allowUserRegistration)}}catch(N){console.error("Error al verificar configuración:",N)}finally{P(!1)}})()},[]),O.useEffect(()=>{!T&&!x&&E&&S("/communities",{replace:!0})},[E,T,x,S]);const L=async R=>{if(R.preventDefault(),y){c("El registro de nuevos usuarios está temporalmente deshabilitado");return}if(!t||!n||!o){c("Completa todos los campos");return}if(n!==i){c("Las contraseñas no coinciden");return}if(n.length<6){c("La contraseña debe tener al menos 6 caracteres");return}c(""),m(!0);try{await b(t,n,o),S("/communities",{replace:!0})}catch(N){c("Error al crear cuenta: "+(N.message||"Error desconocido"))}finally{m(!1)}};return T||x?p.jsx("div",{className:"container",style:{textAlign:"center",marginTop:"100px"},children:p.jsx("p",{children:"Cargando..."})}):y?p.jsx("div",{className:"container",children:p.jsxs("div",{className:"card",style:{marginTop:"40px",textAlign:"center"},children:[p.jsx("h1",{style:{color:"#1976d2",marginTop:0},children:"Porreta"}),p.jsxs("div",{style:{padding:"30px",backgroundColor:"rgba(244, 67, 54, 0.1)",borderRadius:"8px",marginTop:"20px"},children:[p.jsx("h2",{style:{color:"#d32f2f",marginTop:0},children:"🚫 Registro Deshabilitado"}),p.jsxs("p",{style:{color:"var(--text-secondary)",lineHeight:"1.6"},children:["El registro de nuevos usuarios está temporalmente deshabilitado.",p.jsx("br",{}),"Por favor, contacta con el administrador para obtener acceso."]})]}),p.jsx("button",{onClick:()=>S("/",{replace:!0}),className:"button",style:{marginTop:"20px"},children:"Volver al Login"})]})}):p.jsx("div",{className:"container",children:p.jsxs("div",{className:"card",style:{marginTop:"40px"},children:[p.jsx("h1",{style:{textAlign:"center",color:"#1976d2",marginTop:0},children:"Porreta"}),p.jsx("h2",{style:{textAlign:"center",marginTop:0,fontSize:"18px",color:"#666"},children:"Crear Cuenta"}),p.jsxs("form",{onSubmit:L,children:[p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Nick / Apodo"}),p.jsx("input",{type:"text",className:"input",value:o,onChange:R=>l(R.target.value),placeholder:"Tu apodo",disabled:h})]}),p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Correo electrónico"}),p.jsx("input",{type:"email",className:"input",value:t,onChange:R=>e(R.target.value),placeholder:"tu@email.com",disabled:h})]}),p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Contraseña"}),p.jsx("input",{type:"password",className:"input",value:n,onChange:R=>r(R.target.value),placeholder:"Mínimo 6 caracteres",disabled:h})]}),p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Confirmar Contraseña"}),p.jsx("input",{type:"password",className:"input",value:i,onChange:R=>s(R.target.value),placeholder:"Repite la contraseña",disabled:h})]}),u&&p.jsx("div",{className:"error",children:u}),p.jsx("button",{type:"submit",className:"button",disabled:h,children:h?"Creando...":"Crear Cuenta"}),p.jsx("button",{type:"button",className:"button button-secondary",onClick:()=>S("/"),disabled:h,children:"Ya tengo cuenta"})]})]})})},Cs=({title:t="Porreta APP",message:e,type:n="info",onClose:r})=>{const i=()=>{switch(n){case"warning":return"⚠️";case"error":return"❌";case"success":return"✅";default:return"ℹ️"}},s=()=>{switch(n){case"warning":return"#ff9800";case"error":return"#f44336";case"success":return"#4caf50";default:return"#2196f3"}};return p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,animation:"fadeIn 0.2s ease-out"},onClick:r,children:p.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),style:{maxWidth:"500px",maxHeight:"80vh",overflowY:"auto",animation:"scaleIn 0.3s ease-out"},children:[p.jsx("div",{style:{textAlign:"center",borderBottom:`3px solid ${s()}`,paddingBottom:"15px",marginBottom:"20px"},children:p.jsxs("h2",{style:{margin:0,color:"var(--text-primary)",fontSize:"20px",fontWeight:"bold"},children:[i()," ",t]})}),p.jsx("p",{style:{color:"var(--text-primary)",lineHeight:"1.6",textAlign:"center",margin:"20px 0",whiteSpace:"pre-line"},children:e}),p.jsx("button",{onClick:r,className:"button",style:{width:"100%",marginTop:"10px"},children:"Entendido"})]})})},d2=()=>{const{userData:t,logout:e,isSuperAdmin:n}=Kt(),{theme:r,toggleTheme:i}=l2(),s=bn(),[o,l]=O.useState([]),[u,c]=O.useState(!0),[h,m]=O.useState(!1),[y,I]=O.useState(!1),[x,P]=O.useState(!1),[b,E]=O.useState(null);O.useEffect(()=>{S(),T()},[t]);const T=async()=>{try{const R=await vn(he(K,"config","global"));if(R.exists()){const N=R.data();P(!N.allowCommunityCreation)}}catch(R){console.error("Error al verificar configuración:",R)}},S=async()=>{if(t)try{const R=Object.keys(t.communities||{});if(R.length===0){l([]),c(!1);return}const N=[];for(const v of R)(await Je(Ye(Me(K,"communities"),Fe("__name__","==",v)))).forEach(w=>{N.push({id:w.id,...w.data()})});l(N)}catch(R){console.error("Error cargando comunidades:",R)}finally{c(!1)}},L=async()=>{try{await e(),s("/")}catch(R){console.error("Error cerrando sesión:",R)}};return u?p.jsx("div",{className:"loading",children:"Cargando..."}):p.jsxs("div",{children:[p.jsxs("div",{className:"header",children:[p.jsx("h1",{children:"Mis Comunidades"}),p.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[n&&p.jsx("button",{onClick:()=>s("/super-admin"),style:{backgroundColor:"#607D8B",color:"white",padding:"10px 20px",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",opacity:.85},children:"🔧"}),p.jsx("button",{onClick:i,style:{backgroundColor:"rgba(255,255,255,0.2)",color:"white",padding:"10px 16px",border:"1px solid white",borderRadius:"4px",cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center"},title:r==="light"?"Activar modo oscuro":"Activar modo claro",children:r==="light"?"🌙":"☀️"}),p.jsx("button",{onClick:L,children:"Salir"})]})]}),p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"card",children:[p.jsx("button",{className:"button",onClick:()=>{x?E({message:"La creación de nuevas comunidades está temporalmente deshabilitada por el administrador",type:"warning"}):m(!0)},style:{opacity:x?.6:1,cursor:x?"not-allowed":"pointer"},children:"Crear Nueva Comunidad"}),p.jsx("button",{className:"button button-secondary",onClick:()=>I(!0),children:"Unirse a Comunidad"})]}),o.length===0?p.jsxs("div",{className:"empty-state",children:[p.jsx("p",{children:"No perteneces a ninguna comunidad aún"}),p.jsx("p",{children:"Crea una nueva o únete usando una contraseña"})]}):p.jsx("div",{className:"card",children:o.map(R=>p.jsxs("div",{className:"list-item",onClick:()=>s(`/community/${R.id}`),children:[p.jsx("h3",{style:{margin:"0 0 8px 0"},children:R.name}),p.jsxs("p",{style:{margin:0,color:"#666",fontSize:"14px"},children:[R.membersCount," miembros",(t==null?void 0:t.communities[R.id])==="admin"&&p.jsx("span",{className:"badge badge-admin",children:"Admin"})]})]},R.id))})]}),h&&p.jsx(h2,{onClose:()=>m(!1),onCreated:S}),y&&p.jsx(f2,{onClose:()=>I(!1),onJoined:S}),b&&p.jsx(Cs,{message:b.message,type:b.type,onClose:()=>E(null)})]})},h2=({onClose:t,onCreated:e})=>{const{currentUser:n,userData:r,refreshUserData:i}=Kt(),[s,o]=O.useState(""),[l,u]=O.useState(""),[c,h]=O.useState(""),[m,y]=O.useState(!1),I=async x=>{if(x.preventDefault(),!s||!l){h("Completa todos los campos");return}if(!(!n||!r)){h(""),y(!0);try{const P=btoa(l),b=await Lp(Me(K,"communities"),{name:s,passwordHash:P,createdBy:n.uid,createdAt:new Date,membersCount:1}),E=he(K,"users",n.uid);await on(E,{[`communities.${b.id}`]:"admin"}),await i(),e(),t()}catch(P){h("Error creando comunidad: "+(P.message||"Error desconocido"))}finally{y(!1)}}};return p.jsx("div",{className:"modal-overlay",onClick:t,children:p.jsxs("div",{className:"modal",onClick:x=>x.stopPropagation(),children:[p.jsx("h2",{children:"Crear Nueva Comunidad"}),p.jsxs("form",{onSubmit:I,children:[p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Nombre de la Comunidad"}),p.jsx("input",{type:"text",className:"input",value:s,onChange:x=>o(x.target.value),placeholder:"Ej: Amigos del Bar",disabled:m})]}),p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Contraseña (para que otros se unan)"}),p.jsx("input",{type:"text",className:"input",value:l,onChange:x=>u(x.target.value),placeholder:"Contraseña de acceso",disabled:m})]}),c&&p.jsx("div",{className:"error",children:c}),p.jsx("button",{type:"submit",className:"button",disabled:m,children:m?"Creando...":"Crear Comunidad"}),p.jsx("button",{type:"button",className:"button button-secondary",onClick:t,disabled:m,children:"Cancelar"})]})]})})},f2=({onClose:t,onJoined:e})=>{const{currentUser:n,userData:r,refreshUserData:i}=Kt(),[s,o]=O.useState(""),[l,u]=O.useState(""),[c,h]=O.useState(""),[m,y]=O.useState(!1),I=async x=>{if(x.preventDefault(),!s||!l){h("Completa todos los campos");return}if(!(!n||!r)){h(""),y(!0);try{const P=Ye(Me(K,"communities"),Fe("name","==",s)),b=await Je(P);if(b.empty){h("No se encontró la comunidad"),y(!1);return}const E=b.docs[0],T=E.data();if(r.communities[E.id]){h("Ya eres miembro de esta comunidad"),y(!1);return}const S=btoa(l);if(T.passwordHash!==S){h("Contraseña incorrecta"),y(!1);return}const L=he(K,"users",n.uid);await on(L,{[`communities.${E.id}`]:"member"});const R=he(K,"communities",E.id);await on(R,{membersCount:xb(1)}),await i(),e(),t()}catch(P){h("Error uniéndose a comunidad: "+(P.message||"Error desconocido"))}finally{y(!1)}}};return p.jsx("div",{className:"modal-overlay",onClick:t,children:p.jsxs("div",{className:"modal",onClick:x=>x.stopPropagation(),children:[p.jsx("h2",{children:"Unirse a Comunidad"}),p.jsxs("form",{onSubmit:I,children:[p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Nombre de la Comunidad"}),p.jsx("input",{type:"text",className:"input",value:s,onChange:x=>o(x.target.value),placeholder:"Nombre exacto",disabled:m})]}),p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Contraseña"}),p.jsx("input",{type:"text",className:"input",value:l,onChange:x=>u(x.target.value),placeholder:"Contraseña de acceso",disabled:m})]}),c&&p.jsx("div",{className:"error",children:c}),p.jsx("button",{type:"submit",className:"button",disabled:m,children:m?"Uniéndose...":"Unirse"}),p.jsx("button",{type:"button",className:"button button-secondary",onClick:t,disabled:m,children:"Cancelar"})]})]})})},p2=({communityId:t})=>{const{currentUser:e}=Kt(),[n,r]=O.useState([]),[i,s]=O.useState(!1);O.useEffect(()=>{l()},[t,e]);const o=async()=>{try{const c=new Audio("/Porreta/bote.mpeg");c.volume=.8,await c.play()}catch(c){console.log("No se pudo reproducir el sonido:",c)}navigator.vibrate&&navigator.vibrate([300,100,300,100,300])},l=async()=>{if(!(!e||!t))try{const h=(await vn(he(K,"users",e.uid))).data(),m=(h==null?void 0:h.seenResults)||{},y=Ye(Me(K,"rounds"),Fe("communityId","==",t),Fe("status","==","results_posted")),I=await Je(y),x=[];I.forEach(N=>{x.push({id:N.id,...N.data()})});const P=Date.now(),b=P-7*24*60*60*1e3,E=new Set;console.log("🔍 DEBUG - Verificando rondas:",{totalRondas:x.length,sevenDaysAgo:new Date(b).toISOString(),seenResultsActuales:Object.keys(m)});const T=x.filter(N=>{if(!N.resultsPublishedAt)return console.log(`⚠️ Ronda ${N.id} sin resultsPublishedAt`),!1;const v=N.resultsPublishedAt.toMillis(),g=v>b;return console.log(`📊 Ronda ${N.name} (${N.id}):`,{publicado:new Date(v).toISOString(),diasDesdePublicacion:((P-v)/(1e3*60*60*24)).toFixed(1),esActiva:g}),g&&E.add(N.id),g});console.log("✅ Rondas activas encontradas:",Array.from(E));const S={};let L=!1;console.log("🧹 Iniciando limpieza de seenResults..."),Object.entries(m).forEach(([N,v])=>{const g=typeof v=="number"?v:0,w=E.has(N);console.log(`   - ${N}: ${w?"✅ MANTENER (activa)":"❌ ELIMINAR (histórico)"}`),w?S[N]=g:L=!0}),console.log("🧹 Resultado limpieza:",{necesitaLimpieza:L,antes:Object.keys(m).length,despues:Object.keys(S).length}),L&&(await on(he(K,"users",e.uid),{seenResults:S}),console.log("🧹 Limpieza automática:",{eliminados:Object.keys(m).length-Object.keys(S).length,restantes:Object.keys(S).length,rondasActivas:E.size}));const R=T.filter(N=>!S[N.id]);R.length>0&&(r(R),s(!0),R.some(v=>v.winnerNick==="BOTE")&&o())}catch(c){console.error("Error verificando resultados:",c)}},u=async()=>{if(e){try{const h=(await vn(he(K,"users",e.uid))).data(),m=(h==null?void 0:h.seenResults)||{},y=Date.now(),I={...m};n.forEach(x=>{I[x.id]=y}),await on(he(K,"users",e.uid),{seenResults:I}),console.log("✅ Resultados marcados como vistos:",{nuevosVistos:n.length,totalGuardados:Object.keys(I).length})}catch(c){console.error("Error guardando resultados vistos:",c)}s(!1),r([])}};return!i||n.length===0?null:p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:p.jsxs("div",{style:{backgroundColor:"var(--bg-secondary)",color:"var(--text-primary)",borderRadius:"8px",padding:"24px",maxWidth:"400px",width:"90%",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.3)"},children:[p.jsx("h2",{style:{marginTop:0,marginBottom:"16px",color:"#1976d2"},children:"🎉 ¡Resultados Publicados!"}),n.map(c=>{var I,x;const h=c.winnerNick==="BOTE",m=!h&&((I=c.winnerNick)==null?void 0:I.includes(",")),y=c.winnerId===(e==null?void 0:e.uid)||m&&((x=c.winnerNick)==null?void 0:x.includes((e==null?void 0:e.uid)||""));return p.jsxs("div",{style:{padding:"16px",marginBottom:"12px",backgroundColor:h?"rgba(255, 193, 7, 0.2)":"rgba(76, 175, 80, 0.2)",borderRadius:"4px",border:h?"2px solid #ffc107":"2px solid #4caf50"},children:[p.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",color:"var(--text-primary)"},children:c.name}),p.jsx("p",{style:{margin:0,fontSize:"18px",fontWeight:"bold",color:h?"#ffc107":"#4caf50"},children:h?"💰¡¡¡¡ BOOOOTEEEE !!!!":m?p.jsxs(p.Fragment,{children:[y&&"🏆 ¡FELICIDADES, HAS GANADO!",p.jsx("br",{}),"👑 Ganadores: ",c.winnerNick]}):y?"🏆 ¡FELICIDADES, HAS GANADO!":`👑 Ganador: ${c.winnerNick}`})]},c.id)}),p.jsx("button",{onClick:u,className:"button",style:{width:"100%",marginTop:"16px"},children:"Entendido"})]})})},m2=t=>{const e=new Date,r=t.toDate().getTime()-e.getTime();if(r<=0)return{text:"Cerrada",color:"#999",icon:"🔒"};const i=Math.floor(r/(1e3*60)),s=Math.floor(r/(1e3*60*60)),o=Math.floor(r/(1e3*60*60*24));if(i<60)return{text:`¡Última hora! (${i} min)`,color:"#d32f2f",icon:"⚠️"};if(s<24)return{text:`Quedan ${s} horas`,color:"#f57c00",icon:"⏰"};const l=s%24;return o===1?{text:`Queda 1 día ${l}h`,color:"#388e3c",icon:"⏰"}:{text:`Quedan ${o} días ${l}h`,color:"#388e3c",icon:"⏰"}},g2=()=>{const{communityId:t}=ya(),{userData:e}=Kt(),n=bn(),[r,i]=O.useState(null),[s,o]=O.useState([]),[l,u]=O.useState({}),[c,h]=O.useState({}),[m,y]=O.useState(!0),[I,x]=O.useState(!1),[P,b]=O.useState(""),[E,T]=O.useState(!1),[S,L]=O.useState("active"),[R,N]=O.useState(null),[v,g]=O.useState([]),[w,A]=O.useState(null),[k,D]=O.useState(!0),[C,re]=O.useState(!1),oe=O.useRef(null),Tt=O.useRef(null),fe=(e==null?void 0:e.communities[t||""])==="admin";O.useEffect(()=>{W()},[t]),O.useEffect(()=>{const H=()=>{W()};return window.addEventListener("focus",H),()=>window.removeEventListener("focus",H)},[t]);const W=async()=>{if(t){console.log("🔄 Cargando datos para comunidad:",t);try{const H=await vn(he(K,"communities",t));if(H.exists()){const X={id:H.id,...H.data()};i(X),b(X.description||"")}const ke=Ye(Me(K,"rounds"),Fe("communityId","==",t),No("createdAt","desc")),On=await Je(ke);console.log("📊 Rondas encontradas:",On.size);let ut=[];On.forEach(X=>{console.log("✅ Ronda:",X.id,X.data()),ut.push({id:X.id,...X.data()})}),fe||(ut=ut.filter(X=>X.isVisible!==!1)),ut.sort((X,me)=>X.deadline.toMillis()-me.deadline.toMillis()),o(ut);const ct={},F={};for(const X of ut){const me=Ye(Me(K,"bets"),Fe("roundId","==",X.id)),_e=await Je(me);if(ct[X.id]=_e.size,e!=null&&e.uid){const we=Ye(Me(K,"bets"),Fe("roundId","==",X.id),Fe("userId","==",e.uid)),je=await Je(we);F[X.id]=!je.empty}}u(ct),h(F)}catch(H){console.error("Error cargando datos:",H)}finally{y(!1)}}},Y=O.useCallback(async(H=!1)=>{if(!(!t||H&&!k||C)){re(!0);try{let On=Ye(Me(K,"rounds"),Fe("communityId","==",t),Fe("status","==","results_posted"),No("resultsPublishedAt","desc"),mv(10));H&&w&&(On=Ye(Me(K,"rounds"),Fe("communityId","==",t),Fe("status","==","results_posted"),No("resultsPublishedAt","desc"),vb(w),mv(10)));const ut=await Je(On);if(ut.empty){D(!1),re(!1);return}const ct=[];ut.forEach(we=>{const je={id:we.id,...we.data()};je.resultsPublishedAt?(Date.now()-je.resultsPublishedAt.toMillis())/864e5>=7&&ct.push(je):ct.push(je)});const F=fe?ct:ct.filter(we=>we.isVisible!==!1);g(H?we=>[...we,...F]:F);const X=ut.docs[ut.docs.length-1];A(X),D(ut.size===10);const me={...l},_e={...c};for(const we of F)if(me[we.id]===void 0){const je=Ye(Me(K,"bets"),Fe("roundId","==",we.id)),Qt=await Je(je);me[we.id]=Qt.size;const et=Qt.docs.some(Xt=>Xt.data().userId===(e==null?void 0:e.uid));_e[we.id]=et}u(me),h(_e)}catch(ke){console.error("Error cargando rondas finalizadas:",ke)}finally{re(!1)}}},[t,w,k,C,fe,e==null?void 0:e.uid,l,c]);O.useEffect(()=>{S==="finished"&&v.length===0&&!m&&Y(!1)},[S,m]),O.useEffect(()=>{if(!(S!=="finished"||!k))return oe.current=new IntersectionObserver(H=>{H[0].isIntersecting&&!C&&Y(!0)},{threshold:.1}),Tt.current&&oe.current.observe(Tt.current),()=>{oe.current&&oe.current.disconnect()}},[S,k,C,Y]);const Z=async()=>{if(!(!t||!fe)){T(!0);try{await on(he(K,"communities",t),{description:P}),r&&i({...r,description:P}),x(!1)}catch(H){console.error("Error al guardar descripción:",H),N({message:"Error al guardar la descripción",type:"error"})}finally{T(!1)}}},ge=H=>H.status==="results_posted"?p.jsx("span",{className:"badge badge-results",children:"Finalizada"}):H.status==="closed"?p.jsx("span",{className:"badge badge-closed",children:"Cerrada"}):new Date(H.deadline.toDate())<new Date?p.jsx("span",{className:"badge badge-closed",children:"Expirada"}):p.jsx("span",{className:"badge badge-open",children:"Abierta"}),pe=H=>c[H]?p.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",backgroundColor:"#4caf50",color:"white",fontWeight:"500"},children:"✅ Ya apostaste"}):p.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",backgroundColor:"#ff9800",color:"white",fontWeight:"500"},children:"⚠️ Pendiente"}),Te=S==="active"?s.filter(H=>H.status==="open"||H.status==="closed"?!0:H.status==="results_posted"&&H.resultsPublishedAt?(Date.now()-H.resultsPublishedAt.toMillis())/864e5<7:!1):v,jt=s.filter(H=>H.status==="open"||H.status==="closed"?!0:H.status==="results_posted"&&H.resultsPublishedAt?(Date.now()-H.resultsPublishedAt.toMillis())/864e5<7:!1).length,Ft=k?`${v.length}+`:v.length.toString();return m?p.jsx("div",{className:"loading",children:"Cargando..."}):r?p.jsxs("div",{children:[t&&p.jsx(p2,{communityId:t}),p.jsxs("div",{className:"header",children:[p.jsx("div",{children:p.jsx("h1",{children:r.name})}),p.jsx("button",{onClick:()=>n(-1),children:"Volver"})]}),p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"card",children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[p.jsx("h3",{style:{margin:0,fontSize:"16px",color:"#666"},children:"Información"}),fe&&!I&&p.jsx("button",{className:"button button-secondary",onClick:()=>x(!0),style:{width:"auto",padding:"6px 12px",fontSize:"14px",marginTop:0},children:"Editar"})]}),I?p.jsxs("div",{children:[p.jsx("textarea",{className:"input",value:P,onChange:H=>b(H.target.value),placeholder:"Añade información para los miembros de la comunidad...",rows:4,style:{resize:"vertical",minHeight:"80px"}}),p.jsxs("div",{style:{display:"flex",gap:"8px"},children:[p.jsx("button",{className:"button",onClick:Z,disabled:E,style:{flex:1},children:E?"Guardando...":"Guardar"}),p.jsx("button",{className:"button button-secondary",onClick:()=>{b((r==null?void 0:r.description)||""),x(!1)},disabled:E,style:{flex:1},children:"Cancelar"})]})]}):p.jsx("p",{style:{margin:0,whiteSpace:"pre-wrap",fontSize:"14px",lineHeight:"1.5"},children:P||(fe?'Haz clic en "Editar" para añadir información...':"Sin información")})]}),fe&&p.jsx("div",{className:"card",children:p.jsx("button",{className:"button",onClick:()=>n(`/community/${t}/create-round`),children:"Crear Nueva Ronda"})}),p.jsx("div",{className:"card",style:{padding:"0",overflow:"hidden"},children:p.jsxs("div",{style:{display:"flex",borderBottom:"1px solid var(--border-color)"},children:[p.jsxs("button",{onClick:()=>L("active"),style:{flex:1,padding:"16px",border:"none",backgroundColor:S==="active"?"#1976d2":"transparent",color:S==="active"?"white":"var(--text-primary)",fontWeight:S==="active"?"bold":"normal",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease",borderBottom:S==="active"?"3px solid #1976d2":"3px solid transparent"},children:["📋 Activas (",jt,")"]}),p.jsxs("button",{onClick:()=>L("finished"),style:{flex:1,padding:"16px",border:"none",backgroundColor:S==="finished"?"#1976d2":"transparent",color:S==="finished"?"white":"var(--text-primary)",fontWeight:S==="finished"?"bold":"normal",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease",borderBottom:S==="finished"?"3px solid #1976d2":"3px solid transparent"},children:["✅ Finalizadas (",Ft,")"]})]})}),Te.length===0?p.jsxs("div",{className:"empty-state",children:[p.jsx("p",{children:S==="active"?"No hay rondas activas":"No hay rondas finalizadas"}),S==="active"&&fe&&p.jsx("p",{children:"Crea la primera ronda de apuestas"})]}):p.jsxs("div",{className:"card",children:[p.jsx("h2",{style:{marginTop:0},children:S==="active"?"Rondas Activas":"Rondas Finalizadas"}),Te.map(H=>p.jsx("div",{className:"list-item",onClick:()=>n(`/community/${t}/round/${H.id}`),style:{borderLeft:H.isVisible===!1?"4px solid #FF9800":"none",opacity:H.isVisible===!1?.7:1},children:p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{style:{flex:1},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",flexWrap:"wrap"},children:[p.jsx("h3",{style:{margin:0,fontSize:"18px"},children:H.name}),fe&&H.isVisible===!1&&p.jsx("span",{style:{fontSize:"12px",padding:"2px 8px",borderRadius:"12px",backgroundColor:"#FF9800",color:"white",fontWeight:"normal"},children:"🔒 Oculta"})]}),p.jsx("p",{style:{margin:0,color:"#666",fontSize:"14px"},children:(()=>{const ke=m2(H.deadline);return p.jsxs("span",{style:{color:ke.color,fontWeight:"500"},children:[ke.icon," ",ke.text]})})()}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"4px",flexWrap:"wrap"},children:[p.jsxs("p",{style:{margin:0,color:"#007bff",fontSize:"13px",fontWeight:"500"},children:[l[H.id]||0," ",(l[H.id]||0)===1?"apuesta":"apuestas"]}),pe(H.id)]})]}),ge(H)]})},H.id)),S==="finished"&&k&&p.jsx("div",{ref:Tt,style:{padding:"20px",textAlign:"center",color:"var(--text-secondary)"},children:C&&"⏳ Cargando más rondas..."}),S==="finished"&&!k&&v.length>0&&p.jsx("div",{style:{padding:"20px",textAlign:"center",color:"var(--text-secondary)",fontSize:"14px"},children:"✓ No hay más rondas finalizadas"})]})]}),R&&p.jsx(Cs,{message:R.message,type:R.type,onClose:()=>N(null)})]}):p.jsx("div",{className:"loading",children:"Comunidad no encontrada"})},y2=()=>{const{communityId:t}=ya(),{currentUser:e}=Kt(),n=bn(),[r,i]=O.useState(""),[s,o]=O.useState(""),[l,u]=O.useState(!0),[c,h]=O.useState([{homeTeam:"",awayTeam:"",type:"exact"},{homeTeam:"",awayTeam:"",type:"exact"},{homeTeam:"",awayTeam:"",type:"1X2"}]),[m,y]=O.useState(""),[I,x]=O.useState(!1),P=(E,T,S)=>{const L=[...c];L[E][T]=S,h(L)},b=async E=>{if(E.preventDefault(),!r.trim()){y("Debes poner un nombre a la ronda");return}if(!s){y("Debes establecer una hora límite");return}const T=new Date(s);if(T<=new Date){y("La hora límite debe ser en el futuro");return}for(const S of c)if(!S.homeTeam||!S.awayTeam){y("Completa todos los equipos");return}if(!(!e||!t)){y(""),x(!0);try{const S=await Lp(Me(K,"rounds"),{communityId:t,createdBy:e.uid,createdAt:new Date,name:r.trim(),deadline:T,matches:c,status:"open",isVisible:l});console.log("✅ Ronda creada con ID:",S.id),console.log("📍 CommunityId:",t),n(`/community/${t}`,{replace:!0})}catch(S){y("Error creando ronda: "+(S.message||"Error desconocido"))}finally{x(!1)}}};return p.jsxs("div",{children:[p.jsxs("div",{className:"header",children:[p.jsx("h1",{children:"Crear Ronda"}),p.jsx("button",{onClick:()=>n(-1),children:"Volver"})]}),p.jsx("div",{className:"container",children:p.jsxs("form",{onSubmit:b,children:[p.jsxs("div",{className:"card",children:[p.jsx("h2",{style:{marginTop:0},children:"Información de la Ronda"}),p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Nombre de la Ronda"}),p.jsx("input",{type:"text",className:"input",placeholder:"Ej: Jornada 10, Ronda Navidad, etc.",value:r,onChange:E=>i(E.target.value),disabled:I})]}),p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Hora Límite"}),p.jsx("input",{type:"datetime-local",className:"input",value:s,onChange:E=>o(E.target.value),disabled:I})]}),p.jsxs("div",{style:{marginTop:"16px"},children:[p.jsxs("label",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:[p.jsx("input",{type:"checkbox",checked:l,onChange:E=>u(E.target.checked),disabled:I,style:{marginRight:"8px",width:"18px",height:"18px"}}),p.jsx("span",{style:{fontSize:"14px"},children:l?"👁️ Ronda visible para todos los usuarios":"🔒 Ronda oculta (solo admins)"})]}),p.jsx("p",{style:{margin:"8px 0 0 26px",fontSize:"13px",color:"#666"},children:l?"Los usuarios podrán ver y apostar en esta ronda inmediatamente.":"La ronda estará oculta para los usuarios. Solo tú (admin) podrás verla y hacerla visible más tarde."})]})]}),p.jsxs("div",{className:"card",children:[p.jsx("h2",{style:{marginTop:0},children:"Partidos"}),p.jsx("h3",{style:{fontSize:"16px",marginBottom:"8px"},children:"Partido 1 (Resultado Exacto)"}),p.jsxs("div",{style:{marginBottom:"16px"},children:[p.jsx("input",{type:"text",className:"input",placeholder:"Equipo Local",value:c[0].homeTeam,onChange:E=>P(0,"homeTeam",E.target.value),disabled:I}),p.jsx("input",{type:"text",className:"input",placeholder:"Equipo Visitante",value:c[0].awayTeam,onChange:E=>P(0,"awayTeam",E.target.value),disabled:I})]}),p.jsx("h3",{style:{fontSize:"16px",marginBottom:"8px"},children:"Partido 2 (Resultado Exacto)"}),p.jsxs("div",{style:{marginBottom:"16px"},children:[p.jsx("input",{type:"text",className:"input",placeholder:"Equipo Local",value:c[1].homeTeam,onChange:E=>P(1,"homeTeam",E.target.value),disabled:I}),p.jsx("input",{type:"text",className:"input",placeholder:"Equipo Visitante",value:c[1].awayTeam,onChange:E=>P(1,"awayTeam",E.target.value),disabled:I})]}),p.jsx("h3",{style:{fontSize:"16px",marginBottom:"8px"},children:"Partido 3 (1 X 2)"}),p.jsxs("div",{style:{marginBottom:"16px"},children:[p.jsx("input",{type:"text",className:"input",placeholder:"Equipo Local",value:c[2].homeTeam,onChange:E=>P(2,"homeTeam",E.target.value),disabled:I}),p.jsx("input",{type:"text",className:"input",placeholder:"Equipo Visitante",value:c[2].awayTeam,onChange:E=>P(2,"awayTeam",E.target.value),disabled:I})]}),m&&p.jsx("div",{className:"error",children:m}),p.jsx("button",{type:"submit",className:"button",disabled:I,children:I?"Creando...":"Crear Ronda"})]})]})})]})},v2=()=>{const{communityId:t,roundId:e}=ya(),{currentUser:n,userData:r}=Kt(),i=bn(),s=$u(),[o,l]=O.useState(null),[u,c]=O.useState([]),[h,m]=O.useState(!0),[y,I]=O.useState(null),x=(r==null?void 0:r.communities[t||""])==="admin";O.useEffect(()=>{P()},[e,s.state]),O.useEffect(()=>{const R=()=>{P()};return window.addEventListener("focus",R),()=>window.removeEventListener("focus",R)},[e]);const P=async()=>{if(e){console.log("🔄 Cargando ronda:",e),console.log("👤 Usuario actual:",n==null?void 0:n.uid);try{const R=await vn(he(K,"rounds",e));if(R.exists()){const w={id:R.id,...R.data()};console.log("📋 Ronda cargada:",{id:w.id,name:w.name,communityId:w.communityId}),l(w)}else console.error("❌ Ronda no encontrada");console.log("🔍 Buscando apuestas para roundId:",e);const N=Ye(Me(K,"bets"),Fe("roundId","==",e)),v=await Je(N);console.log("📊 Apuestas encontradas:",v.size);const g=[];v.forEach(w=>{const A=w.data();console.log("✅ Apuesta encontrada:",{id:w.id,userId:A.userId,userNick:A.userNick,roundId:A.roundId}),g.push({id:w.id,...A})}),console.log("📦 Total apuestas cargadas:",g.length),c(g)}catch(R){console.error("❌ Error cargando datos:",R)}finally{m(!1)}}},b=u.find(R=>R.userId===(n==null?void 0:n.uid)),E=o&&new Date(o.deadline.toDate())>new Date,T=R=>{if(!(o!=null&&o.liveResults)||o.liveResults.length===0)return{isAlive:!0,points:0};let N=0,v=!1;return o.liveResults.forEach((g,w)=>{if(g.status==="pending")return;const A=R.predictions[w];g.type==="exact"?g.homeGoals!==void 0&&g.awayGoals!==void 0&&(g.status==="final"?A.homeGoals===g.homeGoals&&A.awayGoals===g.awayGoals?N++:v=!0:g.status==="live"&&(A.homeGoals===g.homeGoals&&A.awayGoals===g.awayGoals?N++:(A.homeGoals!==void 0&&g.homeGoals>A.homeGoals||A.awayGoals!==void 0&&g.awayGoals>A.awayGoals)&&(v=!0))):g.type==="1X2"&&g.status==="final"&&g.result&&(A.pick===g.result?N++:v=!0)}),{isAlive:!v,points:N}},S=[...u].sort((R,N)=>{const v=T(R),g=T(N);return v.isAlive&&!g.isAlive?-1:!v.isAlive&&g.isAlive?1:g.points-v.points}),L=R=>R.type==="exact"?`${R.homeGoals} - ${R.awayGoals}`:R.pick==="1"?"Local":R.pick==="X"?"Empate":"Visitante";return h?p.jsx("div",{className:"loading",children:"Cargando..."}):o?p.jsxs("div",{children:[p.jsxs("div",{className:"header",children:[p.jsx("h1",{children:"Detalle Ronda"}),p.jsxs("div",{style:{display:"flex",gap:"8px"},children:[p.jsx("button",{onClick:()=>P(),children:"🔄 Recargar"}),p.jsx("button",{onClick:()=>i(-1),children:"Volver"})]})]}),p.jsxs("div",{className:"container",children:[x&&p.jsxs("div",{className:"card",style:{borderLeft:"4px solid #FF9800",opacity:.95},children:[p.jsx("h3",{style:{marginTop:0,color:"#FF9800"},children:"🔧 Opciones de Administrador"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[p.jsx("label",{style:{fontSize:"14px",fontWeight:"500"},children:"Visibilidad de la ronda:"}),p.jsxs("label",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:[p.jsx("input",{type:"checkbox",checked:o.isVisible!==!1,onChange:async R=>{const N=R.target.checked;try{await on(he(K,"rounds",o.id),{isVisible:N}),l({...o,isVisible:N}),I({message:N?"Ronda visible para todos los usuarios":"Ronda oculta (solo visible para admins)",type:"success"})}catch(v){console.error("Error cambiando visibilidad:",v),I({message:"Error al cambiar la visibilidad",type:"error"})}},style:{marginRight:"8px",width:"18px",height:"18px"}}),p.jsx("span",{style:{fontSize:"14px"},children:o.isVisible!==!1?"👁️ Visible para todos":"🔒 Oculta (solo admins)"})]})]})]}),p.jsxs("div",{className:"card",children:[p.jsx("h2",{style:{marginTop:0},children:o.name}),o.matches.map((R,N)=>p.jsxs("div",{style:{marginBottom:"12px",paddingBottom:"12px",borderBottom:N<o.matches.length-1?"1px solid #eee":"none"},children:[p.jsxs("p",{style:{margin:"0 0 4px 0",fontWeight:"500"},children:[R.homeTeam," vs ",R.awayTeam]}),p.jsxs("p",{style:{margin:0,fontSize:"14px",color:"#666"},children:["Tipo: ",R.type==="exact"?"Resultado Exacto":"1 X 2"]})]},N)),p.jsx("p",{style:{marginTop:"16px",marginBottom:"4px",fontWeight:"500"},children:"Hora límite:"}),p.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666"},children:new Date(o.deadline.toDate()).toLocaleString()})]}),E&&p.jsx("div",{className:"card",children:p.jsx("button",{className:"button",onClick:()=>i(`/community/${t}/round/${e}/bet`),children:b?"Modificar Mi Apuesta":"Hacer Mi Apuesta"})}),x&&!E&&o.status!=="results_posted"&&p.jsx("div",{className:"card",children:p.jsx("button",{className:"button",onClick:()=>i(`/community/${t}/round/${e}/results`),children:"📊 Actualizar Resultados"})}),o.liveResults&&o.liveResults.some(R=>R.status!=="pending")&&p.jsxs("div",{className:"card",style:{borderLeft:"4px solid #FF9800",opacity:.95},children:[p.jsx("h3",{style:{marginTop:0,color:"#FF9800"},children:"🔴 Resultados En Vivo"}),p.jsxs("p",{style:{fontSize:"14px",color:"var(--text-secondary)",marginBottom:"15px"},children:["El admin está actualizando resultados. Las apuestas en ",p.jsx("strong",{style:{color:"#4CAF50"},children:"verde"})," siguen vivas, las de ",p.jsx("strong",{style:{color:"#f44336"},children:"rojo"})," ya no pueden ganar."]}),o.liveResults.map((R,N)=>R.status!=="pending"&&p.jsxs("p",{style:{margin:"8px 0",fontSize:"14px"},children:[p.jsxs("strong",{children:[o.matches[N].homeTeam," vs ",o.matches[N].awayTeam,":"]})," ",R.type==="exact"?`${R.homeGoals} - ${R.awayGoals}`:R.result==="1"?"Local":R.result==="X"?"Empate":"Visitante",R.status==="final"?" ✅":" 🔴"]},N))]}),p.jsxs("div",{className:"card",children:[p.jsxs("h2",{style:{marginTop:0},children:["Apuestas (",u.length,")"]}),u.length===0?p.jsx("div",{className:"empty-state",children:"No hay apuestas todavía"}):S.map(R=>{const N=T(R),v=o.liveResults&&o.liveResults.some(g=>g.status!=="pending");return p.jsxs("div",{style:{border:"1px solid var(--border-color)",padding:"12px",marginBottom:"12px",backgroundColor:R.userId===(n==null?void 0:n.uid)?"rgba(33, 150, 243, 0.1)":v?N.isAlive?"rgba(76, 175, 80, 0.1)":"rgba(244, 67, 54, 0.1)":"var(--bg-secondary)",borderRadius:"4px",borderLeft:v?`4px solid ${N.isAlive?"#4CAF50":"#f44336"}`:R.userId===(n==null?void 0:n.uid)?"4px solid #2196F3":"none"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("p",{style:{margin:"0 0 8px 0",fontWeight:"500"},children:[R.userNick,R.userId===(n==null?void 0:n.uid)&&" (Tú)"]}),v&&p.jsx("span",{style:{fontSize:"12px",fontWeight:"bold",padding:"4px 8px",borderRadius:"12px",backgroundColor:N.isAlive?"#4CAF50":"#f44336",color:"white"},children:N.isAlive?`🟢 Vivo (${N.points} ${N.points===1?"acierto":"aciertos"})`:"🔴 Eliminado"})]}),R.predictions.map((g,w)=>p.jsxs("p",{style:{margin:"4px 0",fontSize:"14px"},children:[o.matches[w].homeTeam," vs ",o.matches[w].awayTeam,":"," ",p.jsx("strong",{children:L(g)})]},w))]},R.id)})]}),o.status==="results_posted"&&o.results&&p.jsxs("div",{className:"card",children:[p.jsx("h2",{style:{marginTop:0},children:"Resultados Reales"}),o.results.map((R,N)=>p.jsxs("p",{style:{margin:"8px 0"},children:[o.matches[N].homeTeam," vs ",o.matches[N].awayTeam,":"," ",p.jsx("strong",{children:R.type==="exact"?`${R.homeGoals} - ${R.awayGoals}`:R.result==="1"?"Local":R.result==="X"?"Empate":"Visitante"})]},N))]})]}),y&&p.jsx(Cs,{message:y.message,type:y.type,onClose:()=>I(null)})]}):p.jsx("div",{className:"loading",children:"Ronda no encontrada"})},_2=()=>{const{communityId:t,roundId:e}=ya(),{currentUser:n,userData:r}=Kt(),i=bn(),[s,o]=O.useState(null),[l,u]=O.useState(null),[c,h]=O.useState([{type:"exact",homeGoals:void 0,awayGoals:void 0},{type:"exact",homeGoals:void 0,awayGoals:void 0},{type:"1X2",pick:"1"}]),[m,y]=O.useState(""),[I,x]=O.useState(!0),[P,b]=O.useState(!1),[E,T]=O.useState(!1);O.useEffect(()=>{S()},[e]);const S=async()=>{if(!(!e||!n))try{const v=await vn(he(K,"rounds",e));if(v.exists()){const g={id:v.id,...v.data()};o(g);const w=Ye(Me(K,"bets"),Fe("roundId","==",e),Fe("userId","==",n.uid)),A=await Je(w);if(A.empty){const k=g.matches.map(D=>D.type==="exact"?{type:"exact",homeGoals:void 0,awayGoals:void 0}:{type:"1X2",pick:"1"});h(k)}else{const k={id:A.docs[0].id,...A.docs[0].data()};u(k),h(k.predictions)}}}catch(v){console.error("Error cargando datos:",v)}finally{x(!1)}},L=(v,g,w)=>{const A=[...c];A[v][g]=w,h(A)},R=async()=>{if(!e)return!1;try{const v=Ye(Me(K,"bets"),Fe("roundId","==",e)),g=await Je(v);for(const w of g.docs){if(w.id===(l==null?void 0:l.id))continue;if(w.data().predictions.every((D,C)=>{const re=c[C];return D.type==="exact"?D.homeGoals===re.homeGoals&&D.awayGoals===re.awayGoals:D.pick===re.pick}))return!0}}catch(v){console.error("Error verificando duplicados:",v)}return!1},N=async(v,g=!1)=>{if(v.preventDefault(),!(!s||!n||!r||!t||!e)){for(let w=0;w<c.length;w++){const A=c[w];if(A.type==="exact"&&(A.homeGoals===void 0||A.awayGoals===void 0)){y(`Por favor, completa el resultado del partido ${w+1}`);return}}if(new Date(s.deadline.toDate())<=new Date){y("El plazo para apostar ha expirado");return}if(y(""),!g&&await R()){T(!0);return}b(!0);try{const w={roundId:e,communityId:t,userId:n.uid,userNick:r.nick,predictions:c,duplicateWarningShown:g,updatedAt:new Date};if(console.log("💾 Guardando apuesta con datos:",{roundId:e,communityId:t,userId:n.uid,userNick:r.nick}),l)await on(he(K,"bets",l.id),w),console.log("✅ Apuesta actualizada, ID:",l.id);else{const A=await Lp(Me(K,"bets"),{...w,createdAt:new Date});console.log("✅ Apuesta creada con ID:",A.id)}console.log("✅ Apuesta guardada para roundId:",e),i(`/community/${t}/round/${e}`,{replace:!0,state:{refresh:!0,timestamp:Date.now()}})}catch(w){y("Error guardando apuesta: "+(w.message||"Error desconocido"))}finally{b(!1)}}};return I?p.jsx("div",{className:"loading",children:"Cargando..."}):s?p.jsxs("div",{children:[p.jsxs("div",{className:"header",children:[p.jsx("h1",{children:l?"Modificar Apuesta":"Hacer Apuesta"}),p.jsx("button",{onClick:()=>i(-1),children:"Volver"})]}),p.jsx("div",{className:"container",children:p.jsx("form",{onSubmit:v=>N(v,!1),children:p.jsxs("div",{className:"card",children:[p.jsx("h2",{style:{marginTop:0},children:"Tus Pronósticos"}),s.matches.map((v,g)=>p.jsxs("div",{style:{marginBottom:"20px"},children:[p.jsxs("h3",{style:{fontSize:"16px",marginBottom:"8px"},children:[v.homeTeam," vs ",v.awayTeam]}),p.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"8px"},children:v.type==="exact"?"Resultado Exacto":"1/X/2"}),v.type==="exact"?p.jsxs("div",{className:"match-input-group",children:[p.jsx("input",{type:"number",min:"0",className:"input",value:c[g].homeGoals===void 0?"":c[g].homeGoals,onChange:w=>L(g,"homeGoals",w.target.value===""?void 0:parseInt(w.target.value)),disabled:P,placeholder:"0"}),p.jsx("span",{children:"-"}),p.jsx("input",{type:"number",min:"0",className:"input",value:c[g].awayGoals===void 0?"":c[g].awayGoals,onChange:w=>L(g,"awayGoals",w.target.value===""?void 0:parseInt(w.target.value)),disabled:P,placeholder:"0"})]}):p.jsxs("select",{className:"input",value:c[g].pick||"1",onChange:w=>L(g,"pick",w.target.value),disabled:P,children:[p.jsxs("option",{value:"1",children:["1 - Local (",v.homeTeam,")"]}),p.jsx("option",{value:"X",children:"X - Empate"}),p.jsxs("option",{value:"2",children:["2 - Visitante (",v.awayTeam,")"]})]})]},g)),m&&p.jsx("div",{className:"error",children:m}),p.jsx("button",{type:"submit",className:"button",disabled:P,children:P?"Guardando...":l?"Actualizar Apuesta":"Enviar Apuesta"})]})})}),E&&p.jsx("div",{className:"modal-overlay",children:p.jsxs("div",{className:"modal",children:[p.jsx("h2",{children:"Apuesta Duplicada"}),p.jsx("p",{children:"Ya existe una apuesta idéntica a la tuya. ¿Quieres enviarla de todas formas?"}),p.jsx("button",{className:"button",onClick:v=>{T(!1),N(v,!0)},children:"Sí, Enviar de Todas Formas"}),p.jsx("button",{className:"button button-secondary",onClick:()=>T(!1),children:"Cancelar"})]})})]}):p.jsx("div",{className:"loading",children:"Ronda no encontrada"})},w2=()=>{const{communityId:t,roundId:e}=ya(),n=bn(),{userData:r,isSuperAdmin:i}=Kt(),[s,o]=O.useState(null),[l,u]=O.useState([]),[c,h]=O.useState(!0),[m,y]=O.useState(!1),[I,x]=O.useState(null);O.useEffect(()=>{P()},[e]);const P=async()=>{if(e)try{const R=await vn(he(K,"rounds",e));if(R.exists()){const N={id:R.id,...R.data()};if(o(N),N.liveResults&&N.liveResults.length>0)u(N.liveResults);else{const v=N.matches.map((g,w)=>({matchIndex:w,status:"pending",type:g.type,homeGoals:void 0,awayGoals:void 0,result:void 0}));u(v)}}}catch(R){console.error("Error al cargar la ronda:",R),x({message:"Error al cargar la ronda",type:"error"})}finally{h(!1)}},b=(R,N,v)=>{const g=[...l];N==="status"?g[R].status=v:N==="homeGoals"?g[R].homeGoals=v===""?void 0:parseInt(v):N==="awayGoals"?g[R].awayGoals=v===""?void 0:parseInt(v):N==="result"&&(g[R].result=v),u(g)},E=async()=>{if(!(!e||!s)){for(let R=0;R<l.length;R++){const N=l[R];if(N.status!=="pending"){if(N.type==="exact"){if(N.homeGoals===void 0||N.awayGoals===void 0){x({message:`El partido ${R+1} está marcado como "${N.status}" pero no tiene goles definidos`,type:"warning"});return}}else if(N.type==="1X2"&&!N.result){x({message:`El partido ${R+1} está marcado como "${N.status}" pero no tiene resultado 1X2 definido`,type:"warning"});return}}}try{if(y(!0),S())await T();else{const R=l.map(v=>({matchIndex:v.matchIndex,status:v.status,type:v.type,...v.type==="exact"&&{homeGoals:v.homeGoals??0,awayGoals:v.awayGoals??0},...v.type==="1X2"&&{result:v.result??"1"}})),N=he(K,"rounds",e);await on(N,{liveResults:R}),x({message:"Resultados actualizados correctamente",type:"success"}),setTimeout(()=>n(`/community/${t}/round/${e}`),1500)}}catch(R){console.error("Error guardando resultados:",R),x({message:"Error al guardar los resultados",type:"error"})}finally{y(!1)}}},T=async()=>{if(!(!s||!e||!t))try{const R=l.map(C=>{const re={type:C.type};return C.type==="exact"?(re.homeGoals=C.homeGoals??0,re.awayGoals=C.awayGoals??0):C.type==="1X2"&&(re.result=C.result??"1"),re}),N=Ye(Me(K,"bets"),Fe("roundId","==",e)),v=await Je(N),g=[];v.forEach(C=>{g.push({id:C.id,...C.data()})});let w=null,A=null,k=[];g.forEach(C=>{let re=0;C.predictions.forEach((oe,Tt)=>{const fe=R[Tt];oe.type==="exact"&&fe.type==="exact"?oe.homeGoals===fe.homeGoals&&oe.awayGoals===fe.awayGoals&&(re+=1):oe.type==="1X2"&&fe.type==="1X2"&&oe.pick===fe.result&&(re+=1)}),console.log("📊 Apuesta evaluada:",{userNick:C.userNick,correctPredictions:re,totalMatches:C.predictions.length}),re===C.predictions.length&&k.push(C)}),console.log("🏆 Resultado final:",{winnersCount:k.length}),k.length===1?(w=k[0].userId,A=k[0].userNick):k.length>1?(w=null,A=k.map(C=>C.userNick).join(", ")):(w=null,A="BOTE"),console.log("🏆 Ganador calculado:",{winnerId:w,winnerNick:A});const D={results:R,status:"results_posted",winnerId:w,winnerNick:A,resultsPublishedAt:ze.now()};D.liveResults=[],await on(he(K,"rounds",e),D),x({message:"🏆 ¡Resultados oficiales publicados!",type:"success"}),setTimeout(()=>n(`/community/${t}/round/${e}`,{replace:!0}),1500)}catch(R){throw console.error("Error publicando resultados:",R),R}},S=()=>l.every(R=>R.status==="final");return c?p.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"Cargando..."}):s?!((r==null?void 0:r.communities[t||""])==="admin")&&!i?p.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"No tienes permisos de administrador"}):p.jsxs("div",{children:[p.jsxs("div",{className:"header",children:[p.jsx("h1",{children:"Actualizar Resultados"}),p.jsx("button",{onClick:()=>n(-1),children:"← Volver"})]}),p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"card",children:[p.jsx("h2",{style:{marginTop:0},children:s.name}),p.jsx("p",{style:{color:"#666",fontSize:"14px",marginBottom:0},children:'Actualiza los resultados a medida que se van conociendo. Cuando todos estén marcados como "Terminado", se publicarán automáticamente los resultados oficiales.'})]}),S()&&p.jsx("div",{style:{backgroundColor:"#4CAF50",color:"white",padding:"15px",borderRadius:"8px",marginBottom:"20px",textAlign:"center",fontWeight:"bold"},children:"✅ Todos los partidos están TERMINADOS. Al guardar, se publicarán automáticamente los resultados oficiales y se calculará el ganador."}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:s.matches.map((R,N)=>{const v=l[N];return p.jsxs("div",{className:"card",style:{border:"2px solid #ddd",borderRadius:"8px",padding:"20px",opacity:v.status==="final"?1:v.status==="live"?.95:.9},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"},children:[p.jsxs("h3",{style:{margin:0},children:["Partido ",N+1,": ",R.homeTeam," vs ",R.awayTeam]}),p.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"bold",backgroundColor:R.type==="exact"?"#2196F3":"#FF9800",color:"white"},children:R.type==="exact"?"Resultado Exacto":"1X2"})]}),p.jsxs("div",{style:{marginBottom:"15px"},children:[p.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"bold"},children:"Estado del partido:"}),p.jsxs("select",{value:v.status,onChange:g=>b(N,"status",g.target.value),style:{padding:"10px",fontSize:"16px",width:"100%",borderRadius:"4px",border:"1px solid var(--border-color)",backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},children:[p.jsx("option",{value:"pending",children:"⏳ Pendiente (sin resultado)"}),p.jsx("option",{value:"live",children:"🔴 En Vivo (puede cambiar)"}),p.jsx("option",{value:"final",children:"✅ Final (confirmado)"})]})]}),v.status!=="pending"&&p.jsx("div",{children:R.type==="exact"?p.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center"},children:[p.jsxs("div",{style:{flex:1},children:[p.jsxs("label",{style:{display:"block",marginBottom:"5px",fontSize:"14px"},children:["Goles ",R.homeTeam,":"]}),p.jsx("input",{type:"number",min:"0",value:v.homeGoals??"",onChange:g=>b(N,"homeGoals",g.target.value),style:{padding:"10px",fontSize:"18px",width:"100%",borderRadius:"4px",border:"1px solid var(--border-color)",backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},placeholder:"0"})]}),p.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",marginTop:"20px"},children:"-"}),p.jsxs("div",{style:{flex:1},children:[p.jsxs("label",{style:{display:"block",marginBottom:"5px",fontSize:"14px"},children:["Goles ",R.awayTeam,":"]}),p.jsx("input",{type:"number",min:"0",value:v.awayGoals??"",onChange:g=>b(N,"awayGoals",g.target.value),style:{padding:"10px",fontSize:"18px",width:"100%",borderRadius:"4px",border:"1px solid var(--border-color)",backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},placeholder:"0"})]})]}):p.jsxs("div",{children:[p.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"bold"},children:"Resultado:"}),p.jsx("div",{style:{display:"flex",gap:"10px"},children:["1","X","2"].map(g=>p.jsx("button",{onClick:()=>b(N,"result",g),style:{flex:1,padding:"15px",fontSize:"18px",fontWeight:"bold",backgroundColor:v.result===g?"#4CAF50":"var(--bg-secondary)",color:v.result===g?"white":"var(--text-primary)",border:`1px solid ${v.result===g?"#4CAF50":"var(--border-color)"}`,borderRadius:"4px",cursor:"pointer"},children:g==="1"?`Victoria ${R.homeTeam}`:g==="X"?"Empate":`Victoria ${R.awayTeam}`},g))})]})})]},N)})}),p.jsx("div",{className:"card",children:p.jsx("button",{onClick:E,disabled:m,className:"button",style:{width:"100%",backgroundColor:S()?"#FF5722":"#4CAF50",cursor:m?"not-allowed":"pointer"},children:m?"Guardando...":S()?"🏆 Guardar y Publicar Resultados Oficiales":"💾 Guardar Resultados"})})]}),I&&p.jsx(Cs,{message:I.message,type:I.type,onClose:()=>x(null)})]}):p.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"Ronda no encontrada"})},E2=({title:t="Porreta APP",message:e,confirmText:n="Confirmar",cancelText:r="Cancelar",onConfirm:i,onCancel:s})=>p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1001,animation:"fadeIn 0.2s ease-out"},onClick:s,children:p.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),style:{maxWidth:"400px",animation:"scaleIn 0.3s ease-out"},children:[p.jsx("div",{style:{textAlign:"center",borderBottom:"3px solid #f44336",paddingBottom:"15px",marginBottom:"20px"},children:p.jsxs("h2",{style:{margin:0,color:"var(--text-primary)",fontSize:"20px",fontWeight:"bold"},children:["⚠️ ",t]})}),p.jsx("p",{style:{color:"var(--text-primary)",lineHeight:"1.6",textAlign:"center",margin:"20px 0",whiteSpace:"pre-line"},children:e}),p.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"20px"},children:[p.jsx("button",{onClick:s,className:"button button-secondary",style:{flex:1},children:r}),p.jsx("button",{onClick:i,className:"button",style:{flex:1,backgroundColor:"#f44336"},children:n})]})]})}),T2=()=>{const t=bn(),{isSuperAdmin:e}=Kt(),[n,r]=O.useState([]),[i,s]=O.useState(null),[o,l]=O.useState([]),[u,c]=O.useState(!0),[h,m]=O.useState(null),[y,I]=O.useState(""),[x,P]=O.useState(""),[b,E]=O.useState(null),[T,S]=O.useState(""),[L,R]=O.useState(""),[N,v]=O.useState([]),[g,w]=O.useState(!0),[A,k]=O.useState(!0),[D,C]=O.useState(!1),[re,oe]=O.useState(null),[Tt,fe]=O.useState(null);O.useEffect(()=>{if(!e){t("/communities");return}Z(),W()},[e,t]);const W=async()=>{try{const F=await vn(he(K,"config","global"));if(F.exists()){const X=F.data();w(X.allowUserRegistration??!0),k(X.allowCommunityCreation??!0)}}catch(F){console.error("Error cargando configuración:",F)}},Y=async(F,X)=>{C(!0);try{await Vp(he(K,"config","global"),{[F]:X},{merge:!0}),F==="allowUserRegistration"?w(X):k(X)}catch(me){console.error("Error guardando configuración:",me),oe({message:"Error al guardar la configuración",type:"error"})}finally{C(!1)}},Z=async()=>{try{c(!0);const F=Ye(Me(K,"communities"),No("createdAt","desc")),me=(await Je(F)).docs.map(_e=>({id:_e.id,..._e.data()}));r(me)}catch(F){console.error("Error al cargar comunidades:",F),oe({message:"Error al cargar comunidades",type:"error"})}finally{c(!1)}},ge=async F=>{try{const X=Ye(Me(K,"rounds"),No("createdAt","desc")),we=(await Je(X)).docs.map(je=>({id:je.id,...je.data()})).filter(je=>je.communityId===F);l(we),s(F)}catch(X){console.error("Error cargando rondas:",X),oe({message:"Error al cargar rondas",type:"error"})}},pe=F=>{m(F),I(F.name),P(F.description||"")},Te=async()=>{if(h){if(!y.trim()){oe({message:"El nombre no puede estar vacío",type:"warning"});return}try{const F=he(K,"communities",h.id);await on(F,{name:y.trim(),description:x.trim()}),oe({message:"Comunidad actualizada correctamente",type:"success"}),m(null),Z()}catch(F){console.error("Error actualizando comunidad:",F),oe({message:"Error al actualizar la comunidad",type:"error"})}}},jt=F=>{E(F),S(F.name);const X=F.deadline.toDate(),_e=new Date(X.getTime()-X.getTimezoneOffset()*6e4).toISOString().slice(0,16);R(_e),v(F.matches)},Ft=async()=>{if(b){if(!T.trim()){oe({message:"El nombre no puede estar vacío",type:"warning"});return}if(!L){oe({message:"La fecha límite es obligatoria",type:"warning"});return}try{const F=he(K,"rounds",b.id);await on(F,{name:T.trim(),deadline:ze.fromDate(new Date(L)),matches:N}),oe({message:"Ronda actualizada correctamente",type:"success"}),E(null),i&&ge(i)}catch(F){console.error("Error actualizando ronda:",F),oe({message:"Error al actualizar la ronda",type:"error"})}}},H=async F=>{fe({message:`¿Estás seguro de que quieres eliminar la comunidad "${F.name}"?

ADVERTENCIA: Esto eliminará PERMANENTEMENTE:
- La comunidad
- Todas sus rondas
- Todas las apuestas de esas rondas

Esta acción NO se puede deshacer.`,onConfirm:async()=>{fe(null),await ke(F)}})},ke=async F=>{try{let X=0,me=0;const _e=Ye(Me(K,"rounds"),Fe("communityId","==",F.id)),we=await Je(_e);console.log(`Eliminando ${we.size} rondas...`);for(const et of we.docs){const Xt=Ye(Me(K,"bets"),Fe("roundId","==",et.id)),Gr=await Je(Xt);console.log(`Ronda ${et.id}: ${Gr.size} apuestas`);const Hr=Gr.docs;for(let sr=0;sr<Hr.length;sr+=500){const Pi=vd(K),Ni=Hr.slice(sr,sr+500);Ni.forEach(Da=>{Pi.delete(he(K,"bets",Da.id))}),await Pi.commit(),X+=Ni.length}await gd(he(K,"rounds",et.id))}const je=await Je(Me(K,"users")),Qt=[];je.docs.forEach(et=>{const Xt=et.data();Xt.communities&&Xt.communities[F.id]&&Qt.push(et.id)}),console.log(`Eliminando referencias de ${Qt.length} usuarios...`);for(let et=0;et<Qt.length;et+=500){const Xt=vd(K);Qt.slice(et,et+500).forEach(Hr=>{const sr=he(K,"users",Hr);Xt.update(sr,{[`communities.${F.id}`]:Ab()})}),await Xt.commit()}me=Qt.length,await gd(he(K,"communities",F.id)),oe({message:`Comunidad eliminada correctamente.

Rondas eliminadas: ${we.size}
Apuestas eliminadas: ${X}
Usuarios actualizados: ${me}`,type:"success"}),Z(),i===F.id&&(s(null),l([]))}catch(X){console.error("Error al eliminar comunidad:",X),oe({message:`Error al eliminar la comunidad:

`+(X.message||X.toString()),type:"error"})}},On=async F=>{fe({message:`¿Estás seguro de que quieres eliminar la ronda "${F.name}"?

ADVERTENCIA: Esto eliminará PERMANENTEMENTE:
- La ronda
- Todas las apuestas de esta ronda

Esta acción NO se puede deshacer.`,onConfirm:async()=>{fe(null),await ut(F)}})},ut=async F=>{try{const X=Ye(Me(K,"bets"),Fe("roundId","==",F.id)),me=await Je(X);console.log(`Eliminando ${me.size} apuestas de la ronda ${F.id}...`);const _e=me.docs;for(let we=0;we<_e.length;we+=500){const je=vd(K);_e.slice(we,we+500).forEach(et=>{je.delete(he(K,"bets",et.id))}),await je.commit()}await gd(he(K,"rounds",F.id)),oe({message:`Ronda eliminada correctamente.

Apuestas eliminadas: ${me.size}`,type:"success"}),i&&ge(i)}catch(X){console.error("Error al eliminar ronda:",X),oe({message:`Error al eliminar la ronda:

`+(X.message||X.toString()),type:"error"})}},ct=F=>F.toDate().toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return u?p.jsx("div",{className:"loading",children:"Cargando..."}):p.jsxs("div",{children:[p.jsxs("div",{className:"header",children:[p.jsx("h1",{children:"🔧 Panel de Super Administrador"}),p.jsx("button",{onClick:()=>t("/communities"),children:"← Volver"})]}),p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"card",style:{marginBottom:"24px",backgroundColor:"rgba(255, 152, 0, 0.1)",borderLeft:"4px solid #ff9800"},children:[p.jsx("h2",{style:{marginTop:0,marginBottom:"20px",color:"var(--text-primary)"},children:"⚙️ Configuración Global de Acceso"}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[p.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"12px",cursor:"pointer",padding:"12px",backgroundColor:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",transition:"all 0.2s ease"},children:[p.jsx("input",{type:"checkbox",checked:g,onChange:F=>Y("allowUserRegistration",F.target.checked),disabled:D,style:{width:"20px",height:"20px",cursor:"pointer"}}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:"👤 Permitir registro de nuevos usuarios"}),p.jsx("div",{style:{fontSize:"13px",color:"var(--text-secondary)"},children:g?"✅ Los usuarios pueden crear nuevas cuentas":"🚫 Registro de usuarios deshabilitado"})]})]}),p.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"12px",cursor:"pointer",padding:"12px",backgroundColor:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",transition:"all 0.2s ease"},children:[p.jsx("input",{type:"checkbox",checked:A,onChange:F=>Y("allowCommunityCreation",F.target.checked),disabled:D,style:{width:"20px",height:"20px",cursor:"pointer"}}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:"🏘️ Permitir creación de nuevas comunidades"}),p.jsx("div",{style:{fontSize:"13px",color:"var(--text-secondary)"},children:A?"✅ Los usuarios pueden crear comunidades":"🚫 Creación de comunidades deshabilitada"})]})]})]}),p.jsxs("div",{style:{marginTop:"12px",padding:"12px",backgroundColor:"rgba(255, 193, 7, 0.1)",borderRadius:"6px",fontSize:"13px",color:"var(--text-secondary)"},children:["💡 ",p.jsx("strong",{children:"Nota:"})," Estos ajustes controlan el acceso a nivel global de la aplicación. Úsalos para mantener la app privada y controlar quién puede registrarse o crear comunidades."]})]}),h&&p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},children:p.jsxs("div",{className:"modal",children:[p.jsx("h3",{children:"Editar Comunidad"}),p.jsxs("div",{style:{marginBottom:"15px"},children:[p.jsx("label",{className:"label",children:"Nombre:"}),p.jsx("input",{type:"text",className:"input",value:y,onChange:F=>I(F.target.value)})]}),p.jsxs("div",{style:{marginBottom:"20px"},children:[p.jsx("label",{className:"label",children:"Descripción:"}),p.jsx("textarea",{className:"input",value:x,onChange:F=>P(F.target.value),rows:4})]}),p.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[p.jsx("button",{onClick:()=>m(null),style:{padding:"10px 20px",border:"1px solid var(--border-color)",borderRadius:"4px",backgroundColor:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:"Cancelar"}),p.jsx("button",{onClick:Te,style:{padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Guardar"})]})]})}),b&&p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,overflow:"auto",padding:"20px"},children:p.jsxs("div",{className:"modal",style:{maxHeight:"90vh",overflow:"auto"},children:[p.jsx("h3",{children:"Editar Ronda"}),p.jsxs("div",{style:{marginBottom:"15px"},children:[p.jsx("label",{className:"label",children:"Nombre:"}),p.jsx("input",{type:"text",className:"input",value:T,onChange:F=>S(F.target.value)})]}),p.jsxs("div",{style:{marginBottom:"20px"},children:[p.jsx("label",{className:"label",children:"Fecha límite:"}),p.jsx("input",{type:"datetime-local",className:"input",value:L,onChange:F=>R(F.target.value)})]}),p.jsxs("div",{style:{marginBottom:"20px"},children:[p.jsxs("h4",{children:["Partidos (",N.length,")"]}),N.map((F,X)=>p.jsxs("div",{style:{marginBottom:"15px",padding:"15px",border:"1px solid var(--border-color)",borderRadius:"4px"},children:[p.jsxs("div",{style:{marginBottom:"10px"},children:[p.jsx("label",{className:"label",children:"Equipo Local:"}),p.jsx("input",{type:"text",className:"input",value:F.homeTeam,onChange:me=>{const _e=[...N];_e[X].homeTeam=me.target.value,v(_e)}})]}),p.jsxs("div",{style:{marginBottom:"10px"},children:[p.jsx("label",{className:"label",children:"Equipo Visitante:"}),p.jsx("input",{type:"text",className:"input",value:F.awayTeam,onChange:me=>{const _e=[...N];_e[X].awayTeam=me.target.value,v(_e)}})]}),p.jsxs("div",{children:[p.jsx("label",{className:"label",children:"Tipo de Apuesta:"}),p.jsxs("select",{className:"input",value:F.type,onChange:me=>{const _e=[...N];_e[X].type=me.target.value,v(_e)},children:[p.jsx("option",{value:"exact",children:"Resultado Exacto"}),p.jsx("option",{value:"1X2",children:"1 X 2"})]})]})]},X))]}),p.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[p.jsx("button",{onClick:()=>E(null),style:{padding:"10px 20px",border:"1px solid var(--border-color)",borderRadius:"4px",backgroundColor:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:"Cancelar"}),p.jsx("button",{onClick:Ft,style:{padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Guardar"})]})]})}),p.jsxs("div",{className:"card",children:[p.jsxs("h2",{style:{marginTop:0},children:["Todas las Comunidades (",n.length,")"]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"15px",marginTop:"15px"},children:n.map(F=>p.jsxs("div",{className:"card",style:{border:"1px solid #ddd",borderRadius:"8px",padding:"15px",opacity:i===F.id?1:.85},children:[p.jsx("h3",{style:{marginTop:0},children:F.name}),F.description&&p.jsx("p",{style:{fontSize:"14px",color:"var(--text-secondary)",marginBottom:"10px"},children:F.description}),p.jsxs("p",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"10px"},children:["Creada: ",ct(F.createdAt)]}),p.jsxs("p",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"15px"},children:["Miembros: ",F.membersCount]}),p.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[p.jsx("button",{onClick:()=>ge(F.id),style:{padding:"8px 12px",backgroundColor:"#2196F3",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:"Ver Rondas"}),p.jsx("button",{onClick:()=>pe(F),style:{padding:"8px 12px",backgroundColor:"#FF9800",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:"Editar"}),p.jsx("button",{onClick:()=>H(F),style:{padding:"8px 12px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:"Eliminar"})]})]},F.id))})]}),i&&p.jsxs("div",{className:"card",children:[p.jsxs("h2",{style:{marginTop:0},children:["Rondas de la Comunidad (",o.length,")"]}),o.length===0?p.jsx("p",{style:{color:"#999"},children:"No hay rondas en esta comunidad"}):p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px",marginTop:"15px"},children:o.map(F=>p.jsx("div",{className:"card",style:{border:"1px solid #ddd",borderRadius:"8px",padding:"15px"},children:p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("h3",{style:{marginTop:0,marginBottom:"10px"},children:F.name}),p.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"5px"},children:[p.jsx("strong",{children:"Estado:"})," ",F.status==="open"?"🟢 Abierta":F.status==="closed"?"🔴 Cerrada":"✅ Resultados Publicados"]}),p.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"5px"},children:[p.jsx("strong",{children:"Fecha límite:"})," ",ct(F.deadline)]}),p.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"5px"},children:[p.jsx("strong",{children:"Creada:"})," ",ct(F.createdAt)]}),p.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"10px"},children:[p.jsx("strong",{children:"Partidos:"})," ",F.matches.length]}),F.status==="results_posted"&&F.winnerNick&&p.jsxs("p",{style:{fontSize:"14px",fontWeight:"bold",color:"#4CAF50"},children:["🏆 Ganador: ",F.winnerNick]})]}),p.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[p.jsx("button",{onClick:()=>t(`/community/${F.communityId}/round/${F.id}/results`),style:{padding:"8px 12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",whiteSpace:"nowrap",flex:"1 1 auto"},children:"Editar Resultados"}),p.jsx("button",{onClick:()=>jt(F),style:{padding:"8px 12px",backgroundColor:"#2196F3",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",whiteSpace:"nowrap",flex:"1 1 auto"},children:"Editar Ronda"}),p.jsx("button",{onClick:()=>On(F),style:{padding:"8px 12px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",whiteSpace:"nowrap",flex:"1 1 auto"},children:"Eliminar Ronda"})]})]})},F.id))})]}),re&&p.jsx(Cs,{message:re.message,type:re.type,onClose:()=>oe(null)}),Tt&&p.jsx(E2,{message:Tt.message,confirmText:"Eliminar",cancelText:"Cancelar",onConfirm:Tt.onConfirm,onCancel:()=>fe(null)}),re&&p.jsx(Cs,{message:re.message,type:re.type,onClose:()=>oe(null)})]})]})},Jr=({children:t})=>{const{currentUser:e,loading:n}=Kt();return n?p.jsx("div",{className:"loading",children:"Cargando..."}):e?p.jsx(p.Fragment,{children:t}):p.jsx(PC,{to:"/"})};function I2(){return p.jsx(a2,{children:p.jsx(o2,{children:p.jsx(VC,{basename:"/Porreta",children:p.jsxs(bC,{children:[p.jsx(wn,{path:"/",element:p.jsx(u2,{})}),p.jsx(wn,{path:"/signup",element:p.jsx(c2,{})}),p.jsx(wn,{path:"/communities",element:p.jsx(Jr,{children:p.jsx(d2,{})})}),p.jsx(wn,{path:"/community/:communityId",element:p.jsx(Jr,{children:p.jsx(g2,{})})}),p.jsx(wn,{path:"/community/:communityId/create-round",element:p.jsx(Jr,{children:p.jsx(y2,{})})}),p.jsx(wn,{path:"/community/:communityId/round/:roundId",element:p.jsx(Jr,{children:p.jsx(v2,{})})}),p.jsx(wn,{path:"/community/:communityId/round/:roundId/bet",element:p.jsx(Jr,{children:p.jsx(_2,{})})}),p.jsx(wn,{path:"/community/:communityId/round/:roundId/results",element:p.jsx(Jr,{children:p.jsx(w2,{})})}),p.jsx(wn,{path:"/super-admin",element:p.jsx(Jr,{children:p.jsx(T2,{})})})]})})})})}Sd.createRoot(document.getElementById("root")).render(p.jsx(Lv.StrictMode,{children:p.jsx(I2,{})}));
