function gI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kv={exports:{}},xu={},Pv={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),vI=Symbol.for("react.portal"),_I=Symbol.for("react.fragment"),wI=Symbol.for("react.strict_mode"),EI=Symbol.for("react.profiler"),TI=Symbol.for("react.provider"),II=Symbol.for("react.context"),SI=Symbol.for("react.forward_ref"),AI=Symbol.for("react.suspense"),xI=Symbol.for("react.memo"),CI=Symbol.for("react.lazy"),Bm=Symbol.iterator;function RI(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var Nv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bv=Object.assign,Dv={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=Dv,this.updater=n||Nv}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ov(){}Ov.prototype=Cs.prototype;function qh(t,e,n){this.props=t,this.context=e,this.refs=Dv,this.updater=n||Nv}var Hh=qh.prototype=new Ov;Hh.constructor=qh;bv(Hh,Cs.prototype);Hh.isPureReactComponent=!0;var zm=Array.isArray,Vv=Object.prototype.hasOwnProperty,Gh={current:null},Lv={key:!0,ref:!0,__self:!0,__source:!0};function Mv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Vv.call(e,r)&&!Lv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fa,type:t,key:s,ref:o,props:i,_owner:Gh.current}}function kI(t,e){return{$$typeof:fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kh(t){return typeof t=="object"&&t!==null&&t.$$typeof===fa}function PI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $m=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PI(""+t.key):e.toString(36)}function wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fa:case vI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bc(o,0):r,zm(i)?(n="",t!=null&&(n=t.replace($m,"$&/")+"/"),wl(i,e,n,"",function(c){return c})):i!=null&&(Kh(i)&&(i=kI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($m,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+bc(s,l);o+=wl(s,e,n,u,i)}else if(u=RI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+bc(s,l++),o+=wl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function NI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},El={transition:null},bI={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:El,ReactCurrentOwner:Gh};function jv(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Kh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Cs;se.Fragment=_I;se.Profiler=EI;se.PureComponent=qh;se.StrictMode=wI;se.Suspense=AI;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bI;se.act=jv;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Vv.call(e,u)&&!Lv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:fa,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:II,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:TI,_context:t},t.Consumer=t};se.createElement=Mv;se.createFactory=function(t){var e=Mv.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:SI,render:t}};se.isValidElement=Kh;se.lazy=function(t){return{$$typeof:CI,_payload:{_status:-1,_result:t},_init:NI}};se.memo=function(t,e){return{$$typeof:xI,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};se.unstable_act=jv;se.useCallback=function(t,e){return Nt.current.useCallback(t,e)};se.useContext=function(t){return Nt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Nt.current.useEffect(t,e)};se.useId=function(){return Nt.current.useId()};se.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Nt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};se.useRef=function(t){return Nt.current.useRef(t)};se.useState=function(t){return Nt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Nt.current.useTransition()};se.version="18.3.1";Pv.exports=se;var V=Pv.exports;const Fv=yI(V),DI=gI({__proto__:null,default:Fv},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OI=V,VI=Symbol.for("react.element"),LI=Symbol.for("react.fragment"),MI=Object.prototype.hasOwnProperty,jI=OI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FI={key:!0,ref:!0,__self:!0,__source:!0};function Uv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)MI.call(e,r)&&!FI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VI,type:t,key:s,ref:o,props:i,_owner:jI.current}}xu.Fragment=LI;xu.jsx=Uv;xu.jsxs=Uv;kv.exports=xu;var f=kv.exports,Ad={},Bv={exports:{}},Xt={},zv={exports:{}},$v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var J=z.length;z.push(Y);e:for(;0<J;){var ge=J-1>>>1,me=z[ge];if(0<i(me,Y))z[ge]=Y,z[J]=me,J=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],J=z.pop();if(J!==Y){z[0]=J;e:for(var ge=0,me=z.length,Se=me>>>1;ge<Se;){var Dt=2*(ge+1)-1,Bt=z[Dt],zt=Dt+1,K=z[zt];if(0>i(Bt,J))zt<me&&0>i(K,Bt)?(z[ge]=K,z[zt]=J,ge=zt):(z[ge]=Bt,z[Dt]=J,ge=Dt);else if(zt<me&&0>i(K,J))z[ge]=K,z[zt]=J,ge=zt;else break e}}return Y}function i(z,Y){var J=z.sortIndex-Y.sortIndex;return J!==0?J:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,m=null,y=3,I=!1,C=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=z)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function O(z){if(N=!1,A(z),!C)if(n(u)!==null)C=!0,ct(R);else{var Y=n(c);Y!==null&&Ie(O,Y.startTime-z)}}function R(z,Y){C=!1,N&&(N=!1,S(g),g=-1),I=!0;var J=y;try{for(A(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||z&&!k());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,y=m.priorityLevel;var me=ge(m.expirationTime<=Y);Y=t.unstable_now(),typeof me=="function"?m.callback=me:m===n(u)&&r(u),A(Y)}else r(u);m=n(u)}if(m!==null)var Se=!0;else{var Dt=n(c);Dt!==null&&Ie(O,Dt.startTime-Y),Se=!1}return Se}finally{m=null,y=J,I=!1}}var P=!1,_=null,g=-1,w=5,E=-1;function k(){return!(t.unstable_now()-E<w)}function b(){if(_!==null){var z=t.unstable_now();E=z;var Y=!0;try{Y=_(!0,z)}finally{Y?x():(P=!1,_=null)}}else P=!1}var x;if(typeof T=="function")x=function(){T(b)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,re=ie.port2;ie.port1.onmessage=b,x=function(){re.postMessage(null)}}else x=function(){D(b,0)};function ct(z){_=z,P||(P=!0,x())}function Ie(z,Y){g=D(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||I||(C=!0,ct(R))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Y=3;break;default:Y=y}var J=y;y=Y;try{return z()}finally{y=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=y;y=z;try{return Y()}finally{y=J}},t.unstable_scheduleCallback=function(z,Y,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,z){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=J+me,z={id:h++,callback:Y,priorityLevel:z,startTime:J,expirationTime:me,sortIndex:-1},J>ge?(z.sortIndex=J,e(c,z),n(u)===null&&z===n(c)&&(N?(S(g),g=-1):N=!0,Ie(O,J-ge))):(z.sortIndex=me,e(u,z),C||I||(C=!0,ct(R))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var Y=y;return function(){var J=y;y=Y;try{return z.apply(this,arguments)}finally{y=J}}}})($v);zv.exports=$v;var UI=zv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=V,Qt=UI;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wv=new Set,Oo={};function Ti(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(Oo[t]=e,t=0;t<e.length;t++)Wv.add(e[t])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xd=Object.prototype.hasOwnProperty,zI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},qm={};function $I(t){return xd.call(qm,t)?!0:xd.call(Wm,t)?!1:zI.test(t)?qm[t]=!0:(Wm[t]=!0,!1)}function WI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qI(t,e,n,r){if(e===null||typeof e>"u"||WI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function Xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,Xh);lt[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,Xh);lt[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,Xh);lt[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yh(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qI(e,n,i,r)&&(n=null),r||i===null?$I(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),Jh=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),Zh=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),kd=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Gv=Symbol.for("react.offscreen"),Hm=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Dc;function uo(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Oc=!1;function Vc(t,e){if(!t||Oc)return"";Oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function HI(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=Vc(t.type,!1),t;case 11:return t=Vc(t.type.render,!1),t;case 1:return t=Vc(t.type,!0),t;default:return""}}function Pd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case Ui:return"Portal";case Cd:return"Profiler";case Jh:return"StrictMode";case Rd:return"Suspense";case kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hv:return(t.displayName||"Context")+".Consumer";case qv:return(t._context.displayName||"Context")+".Provider";case Zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ef:return e=t.displayName||null,e!==null?e:Pd(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return Pd(t(e))}catch{}}return null}function GI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pd(e);case 8:return e===Jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KI(t){var e=Kv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=KI(t))}function Qv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nd(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xv(t,e){e=e.checked,e!=null&&Yh(t,"checked",e,!1)}function bd(t,e){Xv(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dd(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Km(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dd(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Od(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(co(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function Yv(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var el,Zv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=el.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QI=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(t){QI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wo[e]=wo[t]})});function e_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wo.hasOwnProperty(t)&&wo[t]?(""+e).trim():e+"px"}function t_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=e_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XI=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ld(t,e){if(e){if(XI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Md(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jd=null;function tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fd=null,es=null,ts=null;function Ym(t){if(t=ga(t)){if(typeof Fd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Nu(e),Fd(t.stateNode,t.type,e))}}function n_(t){es?ts?ts.push(t):ts=[t]:es=t}function r_(){if(es){var t=es,e=ts;if(ts=es=null,Ym(t),e)for(t=0;t<e.length;t++)Ym(e[t])}}function i_(t,e){return t(e)}function s_(){}var Lc=!1;function o_(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return i_(t,e,n)}finally{Lc=!1,(es!==null||ts!==null)&&(s_(),r_())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Ud=!1;if(Yn)try{var to={};Object.defineProperty(to,"passive",{get:function(){Ud=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Ud=!1}function YI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Eo=!1,zl=null,$l=!1,Bd=null,JI={onError:function(t){Eo=!0,zl=t}};function ZI(t,e,n,r,i,s,o,l,u){Eo=!1,zl=null,YI.apply(JI,arguments)}function eS(t,e,n,r,i,s,o,l,u){if(ZI.apply(this,arguments),Eo){if(Eo){var c=zl;Eo=!1,zl=null}else throw Error(B(198));$l||($l=!0,Bd=c)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function a_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jm(t){if(Ii(t)!==t)throw Error(B(188))}function tS(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jm(i),t;if(s===r)return Jm(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function l_(t){return t=tS(t),t!==null?u_(t):null}function u_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u_(t);if(e!==null)return e;t=t.sibling}return null}var c_=Qt.unstable_scheduleCallback,Zm=Qt.unstable_cancelCallback,nS=Qt.unstable_shouldYield,rS=Qt.unstable_requestPaint,Fe=Qt.unstable_now,iS=Qt.unstable_getCurrentPriorityLevel,nf=Qt.unstable_ImmediatePriority,d_=Qt.unstable_UserBlockingPriority,Wl=Qt.unstable_NormalPriority,sS=Qt.unstable_LowPriority,h_=Qt.unstable_IdlePriority,Cu=null,Cn=null;function oS(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:uS,aS=Math.log,lS=Math.LN2;function uS(t){return t>>>=0,t===0?32:31-(aS(t)/lS|0)|0}var tl=64,nl=4194304;function ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ho(l):(s&=o,s!==0&&(r=ho(s)))}else o=n&~i,o!==0?r=ho(o):s!==0&&(r=ho(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function cS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=cS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f_(){var t=tl;return tl<<=1,!(tl&4194240)&&(tl=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function hS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function p_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m_,sf,g_,y_,v_,$d=!1,rl=[],Ar=null,xr=null,Cr=null,Mo=new Map,jo=new Map,mr=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eg(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function no(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ga(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pS(t,e,n,r,i){switch(e){case"focusin":return Ar=no(Ar,t,e,n,r,i),!0;case"dragenter":return xr=no(xr,t,e,n,r,i),!0;case"mouseover":return Cr=no(Cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Mo.set(s,no(Mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jo.set(s,no(jo.get(s)||null,t,e,n,r,i)),!0}return!1}function __(t){var e=ti(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=a_(n),e!==null){t.blockedOn=e,v_(t.priority,function(){g_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jd=r,n.target.dispatchEvent(r),jd=null}else return e=ga(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function tg(t,e,n){Tl(t)&&n.delete(e)}function mS(){$d=!1,Ar!==null&&Tl(Ar)&&(Ar=null),xr!==null&&Tl(xr)&&(xr=null),Cr!==null&&Tl(Cr)&&(Cr=null),Mo.forEach(tg),jo.forEach(tg)}function ro(t,e){t.blockedOn===e&&(t.blockedOn=null,$d||($d=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,mS)))}function Fo(t){function e(i){return ro(i,t)}if(0<rl.length){ro(rl[0],t);for(var n=1;n<rl.length;n++){var r=rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&ro(Ar,t),xr!==null&&ro(xr,t),Cr!==null&&ro(Cr,t),Mo.forEach(e),jo.forEach(e),n=0;n<mr.length;n++)r=mr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)__(n),n.blockedOn===null&&mr.shift()}var ns=sr.ReactCurrentBatchConfig,Hl=!0;function gS(t,e,n,r){var i=ye,s=ns.transition;ns.transition=null;try{ye=1,of(t,e,n,r)}finally{ye=i,ns.transition=s}}function yS(t,e,n,r){var i=ye,s=ns.transition;ns.transition=null;try{ye=4,of(t,e,n,r)}finally{ye=i,ns.transition=s}}function of(t,e,n,r){if(Hl){var i=Wd(t,e,n,r);if(i===null)Gc(t,e,r,Gl,n),eg(t,r);else if(pS(i,t,e,n,r))r.stopPropagation();else if(eg(t,r),e&4&&-1<fS.indexOf(t)){for(;i!==null;){var s=ga(i);if(s!==null&&m_(s),s=Wd(t,e,n,r),s===null&&Gc(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gc(t,e,r,null,n)}}var Gl=null;function Wd(t,e,n,r){if(Gl=null,t=tf(r),t=ti(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=a_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function w_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iS()){case nf:return 1;case d_:return 4;case Wl:case sS:return 16;case h_:return 536870912;default:return 16}default:return 16}}var Er=null,af=null,Il=null;function E_(){if(Il)return Il;var t,e=af,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Il=i.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function ng(){return!1}function Yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:ng,this.isPropagationStopped=ng,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=Yt(Rs),ma=be({},Rs,{view:0,detail:0}),vS=Yt(ma),jc,Fc,io,Ru=be({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(jc=t.screenX-io.screenX,Fc=t.screenY-io.screenY):Fc=jc=0,io=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),rg=Yt(Ru),_S=be({},Ru,{dataTransfer:0}),wS=Yt(_S),ES=be({},ma,{relatedTarget:0}),Uc=Yt(ES),TS=be({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),IS=Yt(TS),SS=be({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AS=Yt(SS),xS=be({},Rs,{data:0}),ig=Yt(xS),CS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kS[t])?!!e[t]:!1}function uf(){return PS}var NS=be({},ma,{key:function(t){if(t.key){var e=CS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bS=Yt(NS),DS=be({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sg=Yt(DS),OS=be({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),VS=Yt(OS),LS=be({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),MS=Yt(LS),jS=be({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FS=Yt(jS),US=[9,13,27,32],cf=Yn&&"CompositionEvent"in window,To=null;Yn&&"documentMode"in document&&(To=document.documentMode);var BS=Yn&&"TextEvent"in window&&!To,T_=Yn&&(!cf||To&&8<To&&11>=To),og=" ",ag=!1;function I_(t,e){switch(t){case"keyup":return US.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function zS(t,e){switch(t){case"compositionend":return S_(e);case"keypress":return e.which!==32?null:(ag=!0,og);case"textInput":return t=e.data,t===og&&ag?null:t;default:return null}}function $S(t,e){if(zi)return t==="compositionend"||!cf&&I_(t,e)?(t=E_(),Il=af=Er=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T_&&e.locale!=="ko"?null:e.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WS[t.type]:e==="textarea"}function A_(t,e,n,r){n_(r),e=Kl(e,"onChange"),0<e.length&&(n=new lf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Io=null,Uo=null;function qS(t){L_(t,0)}function ku(t){var e=qi(t);if(Qv(e))return t}function HS(t,e){if(t==="change")return e}var x_=!1;if(Yn){var Bc;if(Yn){var zc="oninput"in document;if(!zc){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),zc=typeof ug.oninput=="function"}Bc=zc}else Bc=!1;x_=Bc&&(!document.documentMode||9<document.documentMode)}function cg(){Io&&(Io.detachEvent("onpropertychange",C_),Uo=Io=null)}function C_(t){if(t.propertyName==="value"&&ku(Uo)){var e=[];A_(e,Uo,t,tf(t)),o_(qS,e)}}function GS(t,e,n){t==="focusin"?(cg(),Io=e,Uo=n,Io.attachEvent("onpropertychange",C_)):t==="focusout"&&cg()}function KS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ku(Uo)}function QS(t,e){if(t==="click")return ku(e)}function XS(t,e){if(t==="input"||t==="change")return ku(e)}function YS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:YS;function Bo(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xd.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,e){var n=dg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dg(n)}}function R_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k_(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JS(t){var e=k_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R_(n.ownerDocument.documentElement,n)){if(r!==null&&df(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hg(n,s);var o=hg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZS=Yn&&"documentMode"in document&&11>=document.documentMode,$i=null,qd=null,So=null,Hd=!1;function fg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hd||$i==null||$i!==Bl(r)||(r=$i,"selectionStart"in r&&df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&Bo(So,r)||(So=r,r=Kl(qd,"onSelect"),0<r.length&&(e=new lf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$i)))}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},$c={},P_={};Yn&&(P_=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function Pu(t){if($c[t])return $c[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P_)return $c[t]=e[n];return t}var N_=Pu("animationend"),b_=Pu("animationiteration"),D_=Pu("animationstart"),O_=Pu("transitionend"),V_=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){V_.set(t,e),Ti(e,[t])}for(var Wc=0;Wc<pg.length;Wc++){var qc=pg[Wc],eA=qc.toLowerCase(),tA=qc[0].toUpperCase()+qc.slice(1);Ur(eA,"on"+tA)}Ur(N_,"onAnimationEnd");Ur(b_,"onAnimationIteration");Ur(D_,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(O_,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nA=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function mg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eS(r,e,void 0,t),t.currentTarget=null}function L_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;mg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;mg(i,l,c),s=u}}}if($l)throw t=Bd,$l=!1,Bd=null,t}function xe(t,e){var n=e[Yd];n===void 0&&(n=e[Yd]=new Set);var r=t+"__bubble";n.has(r)||(M_(e,t,2,!1),n.add(r))}function Hc(t,e,n){var r=0;e&&(r|=4),M_(n,t,r,e)}var ol="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[ol]){t[ol]=!0,Wv.forEach(function(n){n!=="selectionchange"&&(nA.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ol]||(e[ol]=!0,Hc("selectionchange",!1,e))}}function M_(t,e,n,r){switch(w_(e)){case 1:var i=gS;break;case 4:i=yS;break;default:i=of}n=i.bind(null,e,n,t),i=void 0,!Ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ti(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}o_(function(){var c=s,h=tf(n),m=[];e:{var y=V_.get(t);if(y!==void 0){var I=lf,C=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":I=bS;break;case"focusin":C="focus",I=Uc;break;case"focusout":C="blur",I=Uc;break;case"beforeblur":case"afterblur":I=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=wS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=VS;break;case N_:case b_:case D_:I=IS;break;case O_:I=MS;break;case"scroll":I=vS;break;case"wheel":I=FS;break;case"copy":case"cut":case"paste":I=AS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=sg}var N=(e&4)!==0,D=!N&&t==="scroll",S=N?y!==null?y+"Capture":null:y;N=[];for(var T=c,A;T!==null;){A=T;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,S!==null&&(O=Lo(T,S),O!=null&&N.push($o(T,O,A)))),D)break;T=T.return}0<N.length&&(y=new I(y,C,null,n,h),m.push({event:y,listeners:N}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",y&&n!==jd&&(C=n.relatedTarget||n.fromElement)&&(ti(C)||C[Jn]))break e;if((I||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,I?(C=n.relatedTarget||n.toElement,I=c,C=C?ti(C):null,C!==null&&(D=Ii(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(I=null,C=c),I!==C)){if(N=rg,O="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(N=sg,O="onPointerLeave",S="onPointerEnter",T="pointer"),D=I==null?y:qi(I),A=C==null?y:qi(C),y=new N(O,T+"leave",I,n,h),y.target=D,y.relatedTarget=A,O=null,ti(h)===c&&(N=new N(S,T+"enter",C,n,h),N.target=A,N.relatedTarget=D,O=N),D=O,I&&C)t:{for(N=I,S=C,T=0,A=N;A;A=Li(A))T++;for(A=0,O=S;O;O=Li(O))A++;for(;0<T-A;)N=Li(N),T--;for(;0<A-T;)S=Li(S),A--;for(;T--;){if(N===S||S!==null&&N===S.alternate)break t;N=Li(N),S=Li(S)}N=null}else N=null;I!==null&&gg(m,y,I,N,!1),C!==null&&D!==null&&gg(m,D,C,N,!0)}}e:{if(y=c?qi(c):window,I=y.nodeName&&y.nodeName.toLowerCase(),I==="select"||I==="input"&&y.type==="file")var R=HS;else if(lg(y))if(x_)R=XS;else{R=KS;var P=GS}else(I=y.nodeName)&&I.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(R=QS);if(R&&(R=R(t,c))){A_(m,R,n,h);break e}P&&P(t,y,c),t==="focusout"&&(P=y._wrapperState)&&P.controlled&&y.type==="number"&&Dd(y,"number",y.value)}switch(P=c?qi(c):window,t){case"focusin":(lg(P)||P.contentEditable==="true")&&($i=P,qd=c,So=null);break;case"focusout":So=qd=$i=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,fg(m,n,h);break;case"selectionchange":if(ZS)break;case"keydown":case"keyup":fg(m,n,h)}var _;if(cf)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else zi?I_(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(T_&&n.locale!=="ko"&&(zi||g!=="onCompositionStart"?g==="onCompositionEnd"&&zi&&(_=E_()):(Er=h,af="value"in Er?Er.value:Er.textContent,zi=!0)),P=Kl(c,g),0<P.length&&(g=new ig(g,t,null,n,h),m.push({event:g,listeners:P}),_?g.data=_:(_=S_(n),_!==null&&(g.data=_)))),(_=BS?zS(t,n):$S(t,n))&&(c=Kl(c,"onBeforeInput"),0<c.length&&(h=new ig("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=_))}L_(m,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(t,n),s!=null&&r.unshift($o(t,s,i)),s=Lo(t,e),s!=null&&r.push($o(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Lo(n,s),u!=null&&o.unshift($o(n,u,l))):i||(u=Lo(n,s),u!=null&&o.push($o(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rA=/\r\n?/g,iA=/\u0000|\uFFFD/g;function yg(t){return(typeof t=="string"?t:""+t).replace(rA,`
`).replace(iA,"")}function al(t,e,n){if(e=yg(e),yg(t)!==e&&n)throw Error(B(425))}function Ql(){}var Gd=null,Kd=null;function Qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xd=typeof setTimeout=="function"?setTimeout:void 0,sA=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,oA=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(t){return vg.resolve(null).then(t).catch(aA)}:Xd;function aA(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fo(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _g(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),An="__reactFiber$"+ks,Wo="__reactProps$"+ks,Jn="__reactContainer$"+ks,Yd="__reactEvents$"+ks,lA="__reactListeners$"+ks,uA="__reactHandles$"+ks;function ti(t){var e=t[An];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[An]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_g(t);t!==null;){if(n=t[An])return n;t=_g(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[An]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Nu(t){return t[Wo]||null}var Jd=[],Hi=-1;function Br(t){return{current:t}}function Ce(t){0>Hi||(t.current=Jd[Hi],Jd[Hi]=null,Hi--)}function Te(t,e){Hi++,Jd[Hi]=t.current,t.current=e}var Lr={},wt=Br(Lr),Mt=Br(!1),ci=Lr;function ds(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function Xl(){Ce(Mt),Ce(wt)}function wg(t,e,n){if(wt.current!==Lr)throw Error(B(168));Te(wt,e),Te(Mt,n)}function j_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,GI(t)||"Unknown",i));return be({},n,r)}function Yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,ci=wt.current,Te(wt,t),Te(Mt,Mt.current),!0}function Eg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=j_(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,Ce(Mt),Ce(wt),Te(wt,t)):Ce(Mt),Te(Mt,n)}var Bn=null,bu=!1,Qc=!1;function F_(t){Bn===null?Bn=[t]:Bn.push(t)}function cA(t){bu=!0,F_(t)}function zr(){if(!Qc&&Bn!==null){Qc=!0;var t=0,e=ye;try{var n=Bn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,bu=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),c_(nf,zr),i}finally{ye=e,Qc=!1}}return null}var Gi=[],Ki=0,Jl=null,Zl=0,Zt=[],en=0,di=null,zn=1,$n="";function Jr(t,e){Gi[Ki++]=Zl,Gi[Ki++]=Jl,Jl=t,Zl=e}function U_(t,e,n){Zt[en++]=zn,Zt[en++]=$n,Zt[en++]=di,di=t;var r=zn;t=$n;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-pn(e)+i|n<<i|r,$n=s+t}else zn=1<<s|n<<i|r,$n=t}function hf(t){t.return!==null&&(Jr(t,1),U_(t,1,0))}function ff(t){for(;t===Jl;)Jl=Gi[--Ki],Gi[Ki]=null,Zl=Gi[--Ki],Gi[Ki]=null;for(;t===di;)di=Zt[--en],Zt[en]=null,$n=Zt[--en],Zt[en]=null,zn=Zt[--en],Zt[en]=null}var Kt=null,Ht=null,Re=!1,fn=null;function B_(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:zn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Ht=null,!0):!1;default:return!1}}function Zd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function eh(t){if(Re){var e=Ht;if(e){var n=e;if(!Tg(t,e)){if(Zd(t))throw Error(B(418));e=Rr(n.nextSibling);var r=Kt;e&&Tg(t,e)?B_(r,n):(t.flags=t.flags&-4097|2,Re=!1,Kt=t)}}else{if(Zd(t))throw Error(B(418));t.flags=t.flags&-4097|2,Re=!1,Kt=t}}}function Ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function ll(t){if(t!==Kt)return!1;if(!Re)return Ig(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qd(t.type,t.memoizedProps)),e&&(e=Ht)){if(Zd(t))throw z_(),Error(B(418));for(;e;)B_(t,e),e=Rr(e.nextSibling)}if(Ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Kt?Rr(t.stateNode.nextSibling):null;return!0}function z_(){for(var t=Ht;t;)t=Rr(t.nextSibling)}function hs(){Ht=Kt=null,Re=!1}function pf(t){fn===null?fn=[t]:fn.push(t)}var dA=sr.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sg(t){var e=t._init;return e(t._payload)}function $_(t){function e(S,T){if(t){var A=S.deletions;A===null?(S.deletions=[T],S.flags|=16):A.push(T)}}function n(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function i(S,T){return S=br(S,T),S.index=0,S.sibling=null,S}function s(S,T,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<T?(S.flags|=2,T):A):(S.flags|=2,T)):(S.flags|=1048576,T)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,T,A,O){return T===null||T.tag!==6?(T=nd(A,S.mode,O),T.return=S,T):(T=i(T,A),T.return=S,T)}function u(S,T,A,O){var R=A.type;return R===Bi?h(S,T,A.props.children,O,A.key):T!==null&&(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===fr&&Sg(R)===T.type)?(O=i(T,A.props),O.ref=so(S,T,A),O.return=S,O):(O=Nl(A.type,A.key,A.props,null,S.mode,O),O.ref=so(S,T,A),O.return=S,O)}function c(S,T,A,O){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=rd(A,S.mode,O),T.return=S,T):(T=i(T,A.children||[]),T.return=S,T)}function h(S,T,A,O,R){return T===null||T.tag!==7?(T=ai(A,S.mode,O,R),T.return=S,T):(T=i(T,A),T.return=S,T)}function m(S,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return T=nd(""+T,S.mode,A),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ja:return A=Nl(T.type,T.key,T.props,null,S.mode,A),A.ref=so(S,null,T),A.return=S,A;case Ui:return T=rd(T,S.mode,A),T.return=S,T;case fr:var O=T._init;return m(S,O(T._payload),A)}if(co(T)||eo(T))return T=ai(T,S.mode,A,null),T.return=S,T;ul(S,T)}return null}function y(S,T,A,O){var R=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return R!==null?null:l(S,T,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ja:return A.key===R?u(S,T,A,O):null;case Ui:return A.key===R?c(S,T,A,O):null;case fr:return R=A._init,y(S,T,R(A._payload),O)}if(co(A)||eo(A))return R!==null?null:h(S,T,A,O,null);ul(S,A)}return null}function I(S,T,A,O,R){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(A)||null,l(T,S,""+O,R);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ja:return S=S.get(O.key===null?A:O.key)||null,u(T,S,O,R);case Ui:return S=S.get(O.key===null?A:O.key)||null,c(T,S,O,R);case fr:var P=O._init;return I(S,T,A,P(O._payload),R)}if(co(O)||eo(O))return S=S.get(A)||null,h(T,S,O,R,null);ul(T,O)}return null}function C(S,T,A,O){for(var R=null,P=null,_=T,g=T=0,w=null;_!==null&&g<A.length;g++){_.index>g?(w=_,_=null):w=_.sibling;var E=y(S,_,A[g],O);if(E===null){_===null&&(_=w);break}t&&_&&E.alternate===null&&e(S,_),T=s(E,T,g),P===null?R=E:P.sibling=E,P=E,_=w}if(g===A.length)return n(S,_),Re&&Jr(S,g),R;if(_===null){for(;g<A.length;g++)_=m(S,A[g],O),_!==null&&(T=s(_,T,g),P===null?R=_:P.sibling=_,P=_);return Re&&Jr(S,g),R}for(_=r(S,_);g<A.length;g++)w=I(_,S,g,A[g],O),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?g:w.key),T=s(w,T,g),P===null?R=w:P.sibling=w,P=w);return t&&_.forEach(function(k){return e(S,k)}),Re&&Jr(S,g),R}function N(S,T,A,O){var R=eo(A);if(typeof R!="function")throw Error(B(150));if(A=R.call(A),A==null)throw Error(B(151));for(var P=R=null,_=T,g=T=0,w=null,E=A.next();_!==null&&!E.done;g++,E=A.next()){_.index>g?(w=_,_=null):w=_.sibling;var k=y(S,_,E.value,O);if(k===null){_===null&&(_=w);break}t&&_&&k.alternate===null&&e(S,_),T=s(k,T,g),P===null?R=k:P.sibling=k,P=k,_=w}if(E.done)return n(S,_),Re&&Jr(S,g),R;if(_===null){for(;!E.done;g++,E=A.next())E=m(S,E.value,O),E!==null&&(T=s(E,T,g),P===null?R=E:P.sibling=E,P=E);return Re&&Jr(S,g),R}for(_=r(S,_);!E.done;g++,E=A.next())E=I(_,S,g,E.value,O),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?g:E.key),T=s(E,T,g),P===null?R=E:P.sibling=E,P=E);return t&&_.forEach(function(b){return e(S,b)}),Re&&Jr(S,g),R}function D(S,T,A,O){if(typeof A=="object"&&A!==null&&A.type===Bi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ja:e:{for(var R=A.key,P=T;P!==null;){if(P.key===R){if(R=A.type,R===Bi){if(P.tag===7){n(S,P.sibling),T=i(P,A.props.children),T.return=S,S=T;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===fr&&Sg(R)===P.type){n(S,P.sibling),T=i(P,A.props),T.ref=so(S,P,A),T.return=S,S=T;break e}n(S,P);break}else e(S,P);P=P.sibling}A.type===Bi?(T=ai(A.props.children,S.mode,O,A.key),T.return=S,S=T):(O=Nl(A.type,A.key,A.props,null,S.mode,O),O.ref=so(S,T,A),O.return=S,S=O)}return o(S);case Ui:e:{for(P=A.key;T!==null;){if(T.key===P)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){n(S,T.sibling),T=i(T,A.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else e(S,T);T=T.sibling}T=rd(A,S.mode,O),T.return=S,S=T}return o(S);case fr:return P=A._init,D(S,T,P(A._payload),O)}if(co(A))return C(S,T,A,O);if(eo(A))return N(S,T,A,O);ul(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,T!==null&&T.tag===6?(n(S,T.sibling),T=i(T,A),T.return=S,S=T):(n(S,T),T=nd(A,S.mode,O),T.return=S,S=T),o(S)):n(S,T)}return D}var fs=$_(!0),W_=$_(!1),eu=Br(null),tu=null,Qi=null,mf=null;function gf(){mf=Qi=tu=null}function yf(t){var e=eu.current;Ce(eu),t._currentValue=e}function th(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){tu=t,mf=Qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(mf!==t)if(t={context:t,memoizedValue:e,next:null},Qi===null){if(tu===null)throw Error(B(308));Qi=t,tu.dependencies={lanes:0,firstContext:t}}else Qi=Qi.next=t;return e}var ni=null;function vf(t){ni===null?ni=[t]:ni.push(t)}function q_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zn(t,r)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zn(t,n)}return i=r.interleaved,i===null?(e.next=e,vf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zn(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rf(t,n)}}function Ag(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,r){var i=t.updateQueue;pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,h=c=u=null,l=s;do{var y=l.lane,I=l.eventTime;if((r&y)===y){h!==null&&(h=h.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(y=e,I=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){m=C.call(I,m,y);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,y=typeof C=="function"?C.call(I,m,y):C,y==null)break e;m=be({},m,y);break e;case 2:pr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else I={eventTime:I,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=I,u=m):h=h.next=I,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fi|=o,t.lanes=o,t.memoizedState=m}}function xg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var ya={},Rn=Br(ya),qo=Br(ya),Ho=Br(ya);function ri(t){if(t===ya)throw Error(B(174));return t}function wf(t,e){switch(Te(Ho,e),Te(qo,t),Te(Rn,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vd(e,t)}Ce(Rn),Te(Rn,e)}function ps(){Ce(Rn),Ce(qo),Ce(Ho)}function G_(t){ri(Ho.current);var e=ri(Rn.current),n=Vd(e,t.type);e!==n&&(Te(qo,t),Te(Rn,n))}function Ef(t){qo.current===t&&(Ce(Rn),Ce(qo))}var ke=Br(0);function ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xc=[];function Tf(){for(var t=0;t<Xc.length;t++)Xc[t]._workInProgressVersionPrimary=null;Xc.length=0}var xl=sr.ReactCurrentDispatcher,Yc=sr.ReactCurrentBatchConfig,hi=0,Pe=null,Ge=null,Je=null,iu=!1,Ao=!1,Go=0,hA=0;function pt(){throw Error(B(321))}function If(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,r,i,s){if(hi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?gA:yA,t=n(r,i),Ao){s=0;do{if(Ao=!1,Go=0,25<=s)throw Error(B(301));s+=1,Je=Ge=null,e.updateQueue=null,xl.current=vA,t=n(r,i)}while(Ao)}if(xl.current=su,e=Ge!==null&&Ge.next!==null,hi=0,Je=Ge=Pe=null,iu=!1,e)throw Error(B(300));return t}function Af(){var t=Go!==0;return Go=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Pe.memoizedState=Je=t:Je=Je.next=t,Je}function on(){if(Ge===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Je===null?Pe.memoizedState:Je.next;if(e!==null)Je=e,Ge=t;else{if(t===null)throw Error(B(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Je===null?Pe.memoizedState=Je=t:Je=Je.next=t}return Je}function Ko(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=on(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((hi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Pe.lanes|=h,fi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,gn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=on(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function K_(){}function Q_(t,e){var n=Pe,r=on(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,xf(J_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Qo(9,Y_.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(B(349));hi&30||X_(n,e,i)}return i}function X_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y_(t,e,n,r){e.value=n,e.getSnapshot=r,Z_(e)&&ew(t)}function J_(t,e,n){return n(function(){Z_(e)&&ew(t)})}function Z_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function ew(t){var e=Zn(t,1);e!==null&&mn(e,t,1,-1)}function Cg(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},e.queue=t,t=t.dispatch=mA.bind(null,Pe,t),[e.memoizedState,t]}function Qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tw(){return on().memoizedState}function Cl(t,e,n,r){var i=Sn();Pe.flags|=t,i.memoizedState=Qo(1|e,n,void 0,r===void 0?null:r)}function Du(t,e,n,r){var i=on();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&If(r,o.deps)){i.memoizedState=Qo(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Qo(1|e,n,s,r)}function Rg(t,e){return Cl(8390656,8,t,e)}function xf(t,e){return Du(2048,8,t,e)}function nw(t,e){return Du(4,2,t,e)}function rw(t,e){return Du(4,4,t,e)}function iw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sw(t,e,n){return n=n!=null?n.concat([t]):null,Du(4,4,iw.bind(null,e,t),n)}function Cf(){}function ow(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&If(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aw(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&If(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lw(t,e,n){return hi&21?(gn(n,e)||(n=f_(),Pe.lanes|=n,fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function fA(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Yc.transition;Yc.transition={};try{t(!1),e()}finally{ye=n,Yc.transition=r}}function uw(){return on().memoizedState}function pA(t,e,n){var r=Nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cw(t))dw(e,n);else if(n=q_(t,e,n,r),n!==null){var i=xt();mn(n,t,r,i),hw(n,e,r)}}function mA(t,e,n){var r=Nr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cw(t))dw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,o)){var u=e.interleaved;u===null?(i.next=i,vf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=q_(t,e,i,r),n!==null&&(i=xt(),mn(n,t,r,i),hw(n,e,r))}}function cw(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function dw(t,e){Ao=iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rf(t,n)}}var su={readContext:sn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},gA={readContext:sn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,iw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pA.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:Cg,useDebugValue:Cf,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Cg(!1),e=t[0];return t=fA.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Sn();if(Re){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),tt===null)throw Error(B(349));hi&30||X_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rg(J_.bind(null,r,s,t),[t]),r.flags|=2048,Qo(9,Y_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=tt.identifierPrefix;if(Re){var n=$n,r=zn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yA={readContext:sn,useCallback:ow,useContext:sn,useEffect:xf,useImperativeHandle:sw,useInsertionEffect:nw,useLayoutEffect:rw,useMemo:aw,useReducer:Jc,useRef:tw,useState:function(){return Jc(Ko)},useDebugValue:Cf,useDeferredValue:function(t){var e=on();return lw(e,Ge.memoizedState,t)},useTransition:function(){var t=Jc(Ko)[0],e=on().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:Q_,useId:uw,unstable_isNewReconciler:!1},vA={readContext:sn,useCallback:ow,useContext:sn,useEffect:xf,useImperativeHandle:sw,useInsertionEffect:nw,useLayoutEffect:rw,useMemo:aw,useReducer:Zc,useRef:tw,useState:function(){return Zc(Ko)},useDebugValue:Cf,useDeferredValue:function(t){var e=on();return Ge===null?e.memoizedState=t:lw(e,Ge.memoizedState,t)},useTransition:function(){var t=Zc(Ko)[0],e=on().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:Q_,useId:uw,unstable_isNewReconciler:!1};function dn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ou={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),i=Nr(t),s=Gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(mn(e,t,i,r),Al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),i=Nr(t),s=Gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(mn(e,t,i,r),Al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=Nr(t),i=Gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=kr(t,i,r),e!==null&&(mn(e,t,r,n),Al(e,t,r))}};function kg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bo(n,r)||!Bo(i,s):!0}function fw(t,e,n){var r=!1,i=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=jt(e)?ci:wt.current,r=e.contextTypes,s=(r=r!=null)?ds(t,i):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ou,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ou.enqueueReplaceState(e,e.state,null)}function rh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_f(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=jt(e)?ci:wt.current,i.context=ds(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ou.enqueueReplaceState(i,i.state,null),nu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",r=e;do n+=HI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ed(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ih(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _A=typeof WeakMap=="function"?WeakMap:Map;function pw(t,e,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){au||(au=!0,ph=r),ih(t,e)},n}function mw(t,e,n){n=Gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ih(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ih(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _A;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DA.bind(null,t,e,n),e.then(t,t))}function bg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var wA=sr.ReactCurrentOwner,Lt=!1;function At(t,e,n,r){e.child=t===null?W_(e,null,n,r):fs(e,t.child,n,r)}function Og(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=Sf(t,e,n,r,s,i),n=Af(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Re&&n&&hf(e),e.flags|=1,At(t,e,r,i),e.child)}function Vg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gw(t,e,s,r,i)):(t=Nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(o,r)&&t.ref===e.ref)return er(t,e,i)}return e.flags|=1,t=br(s,r),t.ref=e.ref,t.return=e,e.child=t}function gw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bo(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,er(t,e,i)}return sh(t,e,n,r,i)}function yw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Yi,qt),qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(Yi,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(Yi,qt),qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(Yi,qt),qt|=r;return At(t,e,i,n),e.child}function vw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sh(t,e,n,r,i){var s=jt(n)?ci:wt.current;return s=ds(e,s),rs(e,i),n=Sf(t,e,n,r,s,i),r=Af(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Re&&r&&hf(e),e.flags|=1,At(t,e,n,i),e.child)}function Lg(t,e,n,r,i){if(jt(n)){var s=!0;Yl(e)}else s=!1;if(rs(e,i),e.stateNode===null)Rl(t,e),fw(e,n,r),rh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=sn(c):(c=jt(n)?ci:wt.current,c=ds(e,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Pg(e,o,r,c),pr=!1;var y=e.memoizedState;o.state=y,nu(e,r,o,i),u=e.memoizedState,l!==r||y!==u||Mt.current||pr?(typeof h=="function"&&(nh(e,n,h,r),u=e.memoizedState),(l=pr||kg(e,n,l,r,y,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:dn(e.type,l),o.props=c,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=sn(u):(u=jt(n)?ci:wt.current,u=ds(e,u));var I=n.getDerivedStateFromProps;(h=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&Pg(e,o,r,u),pr=!1,y=e.memoizedState,o.state=y,nu(e,r,o,i);var C=e.memoizedState;l!==m||y!==C||Mt.current||pr?(typeof I=="function"&&(nh(e,n,I,r),C=e.memoizedState),(c=pr||kg(e,n,c,r,y,C,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return oh(t,e,n,r,s,i)}function oh(t,e,n,r,i,s){vw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Eg(e,n,!1),er(t,e,s);r=e.stateNode,wA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,l,s)):At(t,e,l,s),e.memoizedState=r.state,i&&Eg(e,n,!0),e.child}function _w(t){var e=t.stateNode;e.pendingContext?wg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wg(t,e.context,!1),wf(t,e.containerInfo)}function Mg(t,e,n,r,i){return hs(),pf(i),e.flags|=256,At(t,e,n,r),e.child}var ah={dehydrated:null,treeContext:null,retryLane:0};function lh(t){return{baseLanes:t,cachePool:null,transitions:null}}function ww(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(ke,i&1),t===null)return eh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mu(o,r,0,null),t=ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lh(n),e.memoizedState=ah,t):Rf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return EA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=br(l,s):(s=ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?lh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ah,r}return s=t.child,t=s.sibling,r=br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rf(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,r){return r!==null&&pf(r),fs(e,t.child,null,n),t=Rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ed(Error(B(422))),cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Mu({mode:"visible",children:r.children},i,0,null),s=ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=lh(o),e.memoizedState=ah,s);if(!(e.mode&1))return cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=ed(s,r,void 0),cl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Lt||l){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zn(t,i),mn(r,t,i,-1))}return Of(),r=ed(Error(B(421))),cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=OA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=Rr(i.nextSibling),Kt=e,Re=!0,fn=null,t!==null&&(Zt[en++]=zn,Zt[en++]=$n,Zt[en++]=di,zn=t.id,$n=t.overflow,di=e),e=Rf(e,r.children),e.flags|=4096,e)}function jg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),th(t.return,e,n)}function td(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ew(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jg(t,n,e);else if(t.tag===19)jg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ru(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),td(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ru(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}td(e,!0,n,null,s);break;case"together":td(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TA(t,e,n){switch(e.tag){case 3:_w(e),hs();break;case 5:G_(e);break;case 1:jt(e.type)&&Yl(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(eu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?ww(t,e,n):(Te(ke,ke.current&1),t=er(t,e,n),t!==null?t.sibling:null);Te(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ew(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,yw(t,e,n)}return er(t,e,n)}var Tw,uh,Iw,Sw;Tw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uh=function(){};Iw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(Rn.current);var s=null;switch(n){case"input":i=Nd(t,i),r=Nd(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=Od(t,i),r=Od(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ql)}Ld(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&xe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sw=function(t,e,n,r){n!==r&&(e.flags|=4)};function oo(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IA(t,e,n){var r=e.pendingProps;switch(ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return jt(e.type)&&Xl(),mt(e),null;case 3:return r=e.stateNode,ps(),Ce(Mt),Ce(wt),Tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(yh(fn),fn=null))),uh(t,e),mt(e),null;case 5:Ef(e);var i=ri(Ho.current);if(n=e.type,t!==null&&e.stateNode!=null)Iw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return mt(e),null}if(t=ri(Rn.current),ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[An]=e,r[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)xe(fo[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Gm(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":Qm(r,s),xe("invalid",r)}Ld(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&al(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&al(r.textContent,l,t),i=["children",""+l]):Oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Za(r),Km(r,s,!0);break;case"textarea":Za(r),Xm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ql)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[An]=e,t[Wo]=r,Tw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Md(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)xe(fo[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":Gm(t,r),i=Nd(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),xe("invalid",t);break;case"textarea":Qm(t,r),i=Od(t,r),xe("invalid",t);break;default:i=r}Ld(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?t_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Zv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vo(t,u):typeof u=="number"&&Vo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&xe("scroll",t):u!=null&&Yh(t,s,u,o))}switch(n){case"input":Za(t),Km(t,r,!1);break;case"textarea":Za(t),Xm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)Sw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ri(Ho.current),ri(Rn.current),ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[An]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:al(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&al(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=e,e.stateNode=r}return mt(e),null;case 13:if(Ce(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Ht!==null&&e.mode&1&&!(e.flags&128))z_(),hs(),e.flags|=98560,s=!1;else if(s=ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[An]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else fn!==null&&(yh(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ke===0&&(Ke=3):Of())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return ps(),uh(t,e),t===null&&zo(e.stateNode.containerInfo),mt(e),null;case 10:return yf(e.type._context),mt(e),null;case 17:return jt(e.type)&&Xl(),mt(e),null;case 19:if(Ce(ke),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oo(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ru(t),o!==null){for(e.flags|=128,oo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>gs&&(e.flags|=128,r=!0,oo(s,!1),e.lanes=4194304)}else{if(!r)if(t=ru(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return mt(e),null}else 2*Fe()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,r=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=ke.current,Te(ke,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Df(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function SA(t,e){switch(ff(e),e.tag){case 1:return jt(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),Ce(Mt),Ce(wt),Tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ef(e),null;case 13:if(Ce(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(ke),null;case 4:return ps(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var dl=!1,vt=!1,AA=typeof WeakSet=="function"?WeakSet:Set,q=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function ch(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Fg=!1;function xA(t,e){if(Gd=Hl,t=k_(),df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,m=t,y=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)y=m,m=I;for(;;){if(m===t)break t;if(y===n&&++c===i&&(l=o),y===s&&++h===r&&(u=o),(I=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:t,selectionRange:n},Hl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,D=C.memoizedState,S=e.stateNode,T=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:dn(e.type,N),D);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(O){Le(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return C=Fg,Fg=!1,C}function xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ch(e,n,s)}i=i.next}while(i!==r)}}function Vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Aw(t){var e=t.alternate;e!==null&&(t.alternate=null,Aw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[An],delete e[Wo],delete e[Yd],delete e[lA],delete e[uA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xw(t){return t.tag===5||t.tag===3||t.tag===4}function Ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(r!==4&&(t=t.child,t!==null))for(hh(t,e,n),t=t.sibling;t!==null;)hh(t,e,n),t=t.sibling}function fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}var rt=null,hn=!1;function cr(t,e,n){for(n=n.child;n!==null;)Cw(t,e,n),n=n.sibling}function Cw(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:vt||Xi(n,e);case 6:var r=rt,i=hn;rt=null,cr(t,e,n),rt=r,hn=i,rt!==null&&(hn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(hn?(t=rt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),Fo(t)):Kc(rt,n.stateNode));break;case 4:r=rt,i=hn,rt=n.stateNode.containerInfo,hn=!0,cr(t,e,n),rt=r,hn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ch(n,e,o),i=i.next}while(i!==r)}cr(t,e,n);break;case 1:if(!vt&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Le(n,e,l)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,cr(t,e,n),vt=r):cr(t,e,n);break;default:cr(t,e,n)}}function Bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AA),e.forEach(function(r){var i=VA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,hn=!1;break e;case 3:rt=l.stateNode.containerInfo,hn=!0;break e;case 4:rt=l.stateNode.containerInfo,hn=!0;break e}l=l.return}if(rt===null)throw Error(B(160));Cw(s,o,i),rt=null,hn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rw(e,t),e=e.sibling}function Rw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),In(t),r&4){try{xo(3,t,t.return),Vu(3,t)}catch(N){Le(t,t.return,N)}try{xo(5,t,t.return)}catch(N){Le(t,t.return,N)}}break;case 1:un(e,t),In(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(un(e,t),In(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var i=t.stateNode;try{Vo(i,"")}catch(N){Le(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Xv(i,s),Md(l,o);var c=Md(l,s);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?t_(i,m):h==="dangerouslySetInnerHTML"?Zv(i,m):h==="children"?Vo(i,m):Yh(i,h,m,c)}switch(l){case"input":bd(i,s);break;case"textarea":Yv(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Zi(i,!!s.multiple,I,!1):y!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wo]=s}catch(N){Le(t,t.return,N)}}break;case 6:if(un(e,t),In(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Le(t,t.return,N)}}break;case 3:if(un(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(e.containerInfo)}catch(N){Le(t,t.return,N)}break;case 4:un(e,t),In(t);break;case 13:un(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nf=Fe())),r&4&&Bg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(c=vt)||h,un(e,t),vt=c):un(e,t),In(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(m=q=h;q!==null;){switch(y=q,I=y.child,y.tag){case 0:case 11:case 14:case 15:xo(4,y,y.return);break;case 1:Xi(y,y.return);var C=y.stateNode;if(typeof C.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Le(r,n,N)}}break;case 5:Xi(y,y.return);break;case 22:if(y.memoizedState!==null){$g(m);continue}}I!==null?(I.return=y,q=I):$g(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=e_("display",o))}catch(N){Le(t,t.return,N)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(N){Le(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:un(e,t),In(t),r&4&&Bg(t);break;case 21:break;default:un(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vo(i,""),r.flags&=-33);var s=Ug(t);fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ug(t);hh(t,l,o);break;default:throw Error(B(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CA(t,e,n){q=t,kw(t)}function kw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||dl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||vt;l=dl;var c=vt;if(dl=o,(vt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Wg(i):u!==null?(u.return=o,q=u):Wg(i);for(;s!==null;)q=s,kw(s),s=s.sibling;q=i,dl=l,vt=c}zg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):zg(t)}}function zg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Fo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}vt||e.flags&512&&dh(e)}catch(y){Le(e,e.return,y)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function $g(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Wg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vu(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Le(e,i,u)}}var s=e.return;try{dh(e)}catch(u){Le(e,s,u)}break;case 5:var o=e.return;try{dh(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var RA=Math.ceil,ou=sr.ReactCurrentDispatcher,kf=sr.ReactCurrentOwner,nn=sr.ReactCurrentBatchConfig,de=0,tt=null,$e=null,ot=0,qt=0,Yi=Br(0),Ke=0,Xo=null,fi=0,Lu=0,Pf=0,Co=null,Ot=null,Nf=0,gs=1/0,Fn=null,au=!1,ph=null,Pr=null,hl=!1,Tr=null,lu=0,Ro=0,mh=null,kl=-1,Pl=0;function xt(){return de&6?Fe():kl!==-1?kl:kl=Fe()}function Nr(t){return t.mode&1?de&2&&ot!==0?ot&-ot:dA.transition!==null?(Pl===0&&(Pl=f_()),Pl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:w_(t.type)),t):1}function mn(t,e,n,r){if(50<Ro)throw Ro=0,mh=null,Error(B(185));pa(t,n,r),(!(de&2)||t!==tt)&&(t===tt&&(!(de&2)&&(Lu|=n),Ke===4&&gr(t,ot)),Ft(t,r),n===1&&de===0&&!(e.mode&1)&&(gs=Fe()+500,bu&&zr()))}function Ft(t,e){var n=t.callbackNode;dS(t,e);var r=ql(t,t===tt?ot:0);if(r===0)n!==null&&Zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zm(n),e===1)t.tag===0?cA(qg.bind(null,t)):F_(qg.bind(null,t)),oA(function(){!(de&6)&&zr()}),n=null;else{switch(p_(r)){case 1:n=nf;break;case 4:n=d_;break;case 16:n=Wl;break;case 536870912:n=h_;break;default:n=Wl}n=Mw(n,Pw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pw(t,e){if(kl=-1,Pl=0,de&6)throw Error(B(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=ql(t,t===tt?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uu(t,r);else{e=r;var i=de;de|=2;var s=bw();(tt!==t||ot!==e)&&(Fn=null,gs=Fe()+500,oi(t,e));do try{NA();break}catch(l){Nw(t,l)}while(!0);gf(),ou.current=s,de=i,$e!==null?e=0:(tt=null,ot=0,e=Ke)}if(e!==0){if(e===2&&(i=zd(t),i!==0&&(r=i,e=gh(t,i))),e===1)throw n=Xo,oi(t,0),gr(t,r),Ft(t,Fe()),n;if(e===6)gr(t,r);else{if(i=t.current.alternate,!(r&30)&&!kA(i)&&(e=uu(t,r),e===2&&(s=zd(t),s!==0&&(r=s,e=gh(t,s))),e===1))throw n=Xo,oi(t,0),gr(t,r),Ft(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Zr(t,Ot,Fn);break;case 3:if(gr(t,r),(r&130023424)===r&&(e=Nf+500-Fe(),10<e)){if(ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xd(Zr.bind(null,t,Ot,Fn),e);break}Zr(t,Ot,Fn);break;case 4:if(gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RA(r/1960))-r,10<r){t.timeoutHandle=Xd(Zr.bind(null,t,Ot,Fn),r);break}Zr(t,Ot,Fn);break;case 5:Zr(t,Ot,Fn);break;default:throw Error(B(329))}}}return Ft(t,Fe()),t.callbackNode===n?Pw.bind(null,t):null}function gh(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(oi(t,e).flags|=256),t=uu(t,e),t!==2&&(e=Ot,Ot=n,e!==null&&yh(e)),t}function yh(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function kA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~Pf,e&=~Lu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function qg(t){if(de&6)throw Error(B(327));is();var e=ql(t,0);if(!(e&1))return Ft(t,Fe()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var r=zd(t);r!==0&&(e=r,n=gh(t,r))}if(n===1)throw n=Xo,oi(t,0),gr(t,e),Ft(t,Fe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,Ot,Fn),Ft(t,Fe()),null}function bf(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(gs=Fe()+500,bu&&zr())}}function pi(t){Tr!==null&&Tr.tag===0&&!(de&6)&&is();var e=de;de|=1;var n=nn.transition,r=ye;try{if(nn.transition=null,ye=1,t)return t()}finally{ye=r,nn.transition=n,de=e,!(de&6)&&zr()}}function Df(){qt=Yi.current,Ce(Yi)}function oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sA(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xl();break;case 3:ps(),Ce(Mt),Ce(wt),Tf();break;case 5:Ef(r);break;case 4:ps();break;case 13:Ce(ke);break;case 19:Ce(ke);break;case 10:yf(r.type._context);break;case 22:case 23:Df()}n=n.return}if(tt=t,$e=t=br(t.current,null),ot=qt=e,Ke=0,Xo=null,Pf=Lu=fi=0,Ot=Co=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function Nw(t,e){do{var n=$e;try{if(gf(),xl.current=su,iu){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}iu=!1}if(hi=0,Je=Ge=Pe=null,Ao=!1,Go=0,kf.current=null,n===null||n.return===null){Ke=1,Xo=e,$e=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ot,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var I=bg(o);if(I!==null){I.flags&=-257,Dg(I,o,l,s,e),I.mode&1&&Ng(s,c,e),e=I,u=c;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){Ng(s,c,e),Of();break e}u=Error(B(426))}}else if(Re&&l.mode&1){var D=bg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Dg(D,o,l,s,e),pf(ms(u,l));break e}}s=u=ms(u,l),Ke!==4&&(Ke=2),Co===null?Co=[s]:Co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=pw(s,u,e);Ag(s,S);break e;case 1:l=u;var T=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Pr===null||!Pr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=mw(s,l,e);Ag(s,O);break e}}s=s.return}while(s!==null)}Ow(n)}catch(R){e=R,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function bw(){var t=ou.current;return ou.current=su,t===null?su:t}function Of(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),tt===null||!(fi&268435455)&&!(Lu&268435455)||gr(tt,ot)}function uu(t,e){var n=de;de|=2;var r=bw();(tt!==t||ot!==e)&&(Fn=null,oi(t,e));do try{PA();break}catch(i){Nw(t,i)}while(!0);if(gf(),de=n,ou.current=r,$e!==null)throw Error(B(261));return tt=null,ot=0,Ke}function PA(){for(;$e!==null;)Dw($e)}function NA(){for(;$e!==null&&!nS();)Dw($e)}function Dw(t){var e=Lw(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?Ow(t):$e=e,kf.current=null}function Ow(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SA(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,$e=null;return}}else if(n=IA(n,e,qt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Ke===0&&(Ke=5)}function Zr(t,e,n){var r=ye,i=nn.transition;try{nn.transition=null,ye=1,bA(t,e,n,r)}finally{nn.transition=i,ye=r}return null}function bA(t,e,n,r){do is();while(Tr!==null);if(de&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hS(t,s),t===tt&&($e=tt=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,Mw(Wl,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=ye;ye=1;var l=de;de|=4,kf.current=null,xA(t,n),Rw(n,t),JS(Kd),Hl=!!Gd,Kd=Gd=null,t.current=n,CA(n),rS(),de=l,ye=o,nn.transition=s}else t.current=n;if(hl&&(hl=!1,Tr=t,lu=i),s=t.pendingLanes,s===0&&(Pr=null),oS(n.stateNode),Ft(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(au)throw au=!1,t=ph,ph=null,t;return lu&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===mh?Ro++:(Ro=0,mh=t):Ro=0,zr(),null}function is(){if(Tr!==null){var t=p_(lu),e=nn.transition,n=ye;try{if(nn.transition=null,ye=16>t?16:t,Tr===null)var r=!1;else{if(t=Tr,Tr=null,lu=0,de&6)throw Error(B(331));var i=de;for(de|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:xo(8,h,s)}var m=h.child;if(m!==null)m.return=h,q=m;else for(;q!==null;){h=q;var y=h.sibling,I=h.return;if(Aw(h),h===c){q=null;break}if(y!==null){y.return=I,q=y;break}q=I}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}var T=t.current;for(q=T;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=T;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vu(9,l)}}catch(R){Le(l,l.return,R)}if(l===o){q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,q=O;break e}q=l.return}}if(de=i,zr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Cu,t)}catch{}r=!0}return r}finally{ye=n,nn.transition=e}}return!1}function Hg(t,e,n){e=ms(n,e),e=pw(t,e,1),t=kr(t,e,1),e=xt(),t!==null&&(pa(t,1,e),Ft(t,e))}function Le(t,e,n){if(t.tag===3)Hg(t,t,n);else for(;e!==null;){if(e.tag===3){Hg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=ms(n,t),t=mw(e,t,1),e=kr(e,t,1),t=xt(),e!==null&&(pa(e,1,t),Ft(e,t));break}}e=e.return}}function DA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ot&n)===n&&(Ke===4||Ke===3&&(ot&130023424)===ot&&500>Fe()-Nf?oi(t,0):Pf|=n),Ft(t,e)}function Vw(t,e){e===0&&(t.mode&1?(e=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):e=1);var n=xt();t=Zn(t,e),t!==null&&(pa(t,e,n),Ft(t,n))}function OA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vw(t,n)}function VA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Vw(t,n)}var Lw;Lw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,TA(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Re&&e.flags&1048576&&U_(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Rl(t,e),t=e.pendingProps;var i=ds(e,wt.current);rs(e,n),i=Sf(null,e,r,t,i,n);var s=Af();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,Yl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_f(e),i.updater=Ou,e.stateNode=i,i._reactInternals=e,rh(e,r,t,n),e=oh(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&hf(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=MA(r),t=dn(r,t),i){case 0:e=sh(null,e,r,t,n);break e;case 1:e=Lg(null,e,r,t,n);break e;case 11:e=Og(null,e,r,t,n);break e;case 14:e=Vg(null,e,r,dn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),sh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Lg(t,e,r,i,n);case 3:e:{if(_w(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,H_(t,e),nu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ms(Error(B(423)),e),e=Mg(t,e,r,n,i);break e}else if(r!==i){i=ms(Error(B(424)),e),e=Mg(t,e,r,n,i);break e}else for(Ht=Rr(e.stateNode.containerInfo.firstChild),Kt=e,Re=!0,fn=null,n=W_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),r===i){e=er(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return G_(e),t===null&&eh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qd(r,i)?o=null:s!==null&&Qd(r,s)&&(e.flags|=32),vw(t,e),At(t,e,o,n),e.child;case 6:return t===null&&eh(e),null;case 13:return ww(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fs(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Og(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(eu,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Mt.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Gn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),th(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),th(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=sn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),Vg(t,e,r,i,n);case 15:return gw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Rl(t,e),e.tag=1,jt(r)?(t=!0,Yl(e)):t=!1,rs(e,n),fw(e,r,i),rh(e,r,i,n),oh(null,e,r,!0,t,n);case 19:return Ew(t,e,n);case 22:return yw(t,e,n)}throw Error(B(156,e.tag))};function Mw(t,e){return c_(t,e)}function LA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new LA(t,e,n,r)}function Vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MA(t){if(typeof t=="function")return Vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zh)return 11;if(t===ef)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return ai(n.children,i,s,e);case Jh:o=8,i|=8;break;case Cd:return t=tn(12,n,e,i|2),t.elementType=Cd,t.lanes=s,t;case Rd:return t=tn(13,n,e,i),t.elementType=Rd,t.lanes=s,t;case kd:return t=tn(19,n,e,i),t.elementType=kd,t.lanes=s,t;case Gv:return Mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qv:o=10;break e;case Hv:o=9;break e;case Zh:o=11;break e;case ef:o=14;break e;case fr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ai(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function Mu(t,e,n,r){return t=tn(22,t,r,e),t.elementType=Gv,t.lanes=n,t.stateNode={isHidden:!1},t}function nd(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function rd(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lf(t,e,n,r,i,s,o,l,u){return t=new jA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(s),t}function FA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jw(t){if(!t)return Lr;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(jt(n))return j_(t,n,e)}return e}function Fw(t,e,n,r,i,s,o,l,u){return t=Lf(n,r,!0,t,i,s,o,l,u),t.context=jw(null),n=t.current,r=xt(),i=Nr(n),s=Gn(r,i),s.callback=e??null,kr(n,s,i),t.current.lanes=i,pa(t,i,r),Ft(t,r),t}function ju(t,e,n,r){var i=e.current,s=xt(),o=Nr(i);return n=jw(n),e.context===null?e.context=n:e.pendingContext=n,e=Gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(i,e,o),t!==null&&(mn(t,i,o,s),Al(t,i,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mf(t,e){Gg(t,e),(t=t.alternate)&&Gg(t,e)}function UA(){return null}var Uw=typeof reportError=="function"?reportError:function(t){console.error(t)};function jf(t){this._internalRoot=t}Fu.prototype.render=jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));ju(t,e,null,null)};Fu.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){ju(null,t,null,null)}),e[Jn]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=y_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&__(t)}};function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kg(){}function BA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=cu(o);s.call(c)}}var o=Fw(e,r,t,0,null,!1,!1,"",Kg);return t._reactRootContainer=o,t[Jn]=o.current,zo(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=cu(u);l.call(c)}}var u=Lf(t,0,!1,null,null,!1,!1,"",Kg);return t._reactRootContainer=u,t[Jn]=u.current,zo(t.nodeType===8?t.parentNode:t),pi(function(){ju(e,u,n,r)}),u}function Bu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=cu(o);l.call(u)}}ju(e,o,t,i)}else o=BA(n,e,t,i,r);return cu(o)}m_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ho(e.pendingLanes);n!==0&&(rf(e,n|1),Ft(e,Fe()),!(de&6)&&(gs=Fe()+500,zr()))}break;case 13:pi(function(){var r=Zn(t,1);if(r!==null){var i=xt();mn(r,t,1,i)}}),Mf(t,1)}};sf=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=xt();mn(e,t,134217728,n)}Mf(t,134217728)}};g_=function(t){if(t.tag===13){var e=Nr(t),n=Zn(t,e);if(n!==null){var r=xt();mn(n,t,e,r)}Mf(t,e)}};y_=function(){return ye};v_=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Fd=function(t,e,n){switch(e){case"input":if(bd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nu(r);if(!i)throw Error(B(90));Qv(r),bd(r,i)}}}break;case"textarea":Yv(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};i_=bf;s_=pi;var zA={usingClientEntryPoint:!1,Events:[ga,qi,Nu,n_,r_,bf]},ao={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$A={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l_(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||UA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Cu=fl.inject($A),Cn=fl}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zA;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(e))throw Error(B(200));return FA(t,e,null,n)};Xt.createRoot=function(t,e){if(!Ff(t))throw Error(B(299));var n=!1,r="",i=Uw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lf(t,1,!1,null,null,n,!1,r,i),t[Jn]=e.current,zo(t.nodeType===8?t.parentNode:t),new jf(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=l_(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return pi(t)};Xt.hydrate=function(t,e,n){if(!Uu(e))throw Error(B(200));return Bu(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!Ff(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Uw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fw(e,null,t,1,n??null,i,!1,s,o),t[Jn]=e.current,zo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fu(e)};Xt.render=function(t,e,n){if(!Uu(e))throw Error(B(200));return Bu(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!Uu(t))throw Error(B(40));return t._reactRootContainer?(pi(function(){Bu(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};Xt.unstable_batchedUpdates=bf;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Uu(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Bu(t,e,n,!1,r)};Xt.version="18.3.1-next-f1338f8080-20240426";function Bw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bw)}catch(t){console.error(t)}}Bw(),Bv.exports=Xt;var WA=Bv.exports,Qg=WA;Ad.createRoot=Qg.createRoot,Ad.hydrateRoot=Qg.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yo.apply(this,arguments)}var Ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ir||(Ir={}));const Xg="popstate";function qA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return vh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$w(i)}return GA(e,n,null,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function HA(){return Math.random().toString(36).substr(2,8)}function Yg(t,e){return{usr:t.state,key:t.key,idx:e}}function vh(t,e,n,r){return n===void 0&&(n=null),Yo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ps(e):e,{state:n,key:e&&e.key||r||HA()})}function $w(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function GA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Ir.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Yo({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){l=Ir.Pop;let D=h(),S=D==null?null:D-c;c=D,u&&u({action:l,location:N.location,delta:S})}function y(D,S){l=Ir.Push;let T=vh(N.location,D,S);c=h()+1;let A=Yg(T,c),O=N.createHref(T);try{o.pushState(A,"",O)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(O)}s&&u&&u({action:l,location:N.location,delta:1})}function I(D,S){l=Ir.Replace;let T=vh(N.location,D,S);c=h();let A=Yg(T,c),O=N.createHref(T);o.replaceState(A,"",O),s&&u&&u({action:l,location:N.location,delta:0})}function C(D){let S=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof D=="string"?D:$w(D);return T=T.replace(/ $/,"%20"),qe(S,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,S)}let N={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Xg,m),u=D,()=>{i.removeEventListener(Xg,m),u=null}},createHref(D){return e(i,D)},createURL:C,encodeLocation(D){let S=C(D);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:y,replace:I,go(D){return o.go(D)}};return N}var Jg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jg||(Jg={}));function KA(t,e,n){return n===void 0&&(n="/"),QA(t,e,n)}function QA(t,e,n,r){let i=typeof e=="string"?Ps(e):e,s=Hw(i.pathname||"/",n);if(s==null)return null;let o=Ww(t);XA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=lx(s);l=sx(o[u],c)}return l}function Ww(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=li([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ww(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:rx(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of qw(s.path))i(s,o,u)}),e}function qw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function XA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ix(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YA=/^:[\w-]+$/,JA=3,ZA=2,ex=1,tx=10,nx=-2,Zg=t=>t==="*";function rx(t,e){let n=t.split("/"),r=n.length;return n.some(Zg)&&(r+=nx),e&&(r+=ZA),n.filter(i=>!Zg(i)).reduce((i,s)=>i+(YA.test(s)?JA:s===""?ex:tx),r)}function ix(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function sx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",m=ox({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),y=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:li([s,m.pathname]),pathnameBase:hx(li([s,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(s=li([s,m.pathnameBase]))}return o}function ox(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ax(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:y,isOptional:I}=h;if(y==="*"){let N=l[m]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const C=l[m];return I&&!C?c[y]=void 0:c[y]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function ax(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ux(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ps(t):t;return{pathname:n?n.startsWith("/")?n:cx(n,e):e,search:fx(r),hash:px(i)}}function cx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function id(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gw(t,e){let n=dx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Kw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ps(t):(i=Yo({},t),qe(!i.pathname||!i.pathname.includes("?"),id("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),id("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),id("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}l=m>=0?e[m]:"/"}let u=ux(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const li=t=>t.join("/").replace(/\/\/+/g,"/"),hx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,px=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qw=["post","put","patch","delete"];new Set(Qw);const gx=["get",...Qw];new Set(gx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jo.apply(this,arguments)}const Uf=V.createContext(null),yx=V.createContext(null),va=V.createContext(null),zu=V.createContext(null),$r=V.createContext({outlet:null,matches:[],isDataRoute:!1}),Xw=V.createContext(null);function _a(){return V.useContext(zu)!=null}function $u(){return _a()||qe(!1),V.useContext(zu).location}function Yw(t){V.useContext(va).static||V.useLayoutEffect(t)}function En(){let{isDataRoute:t}=V.useContext($r);return t?Px():vx()}function vx(){_a()||qe(!1);let t=V.useContext(Uf),{basename:e,future:n,navigator:r}=V.useContext(va),{matches:i}=V.useContext($r),{pathname:s}=$u(),o=JSON.stringify(Gw(i,n.v7_relativeSplatPath)),l=V.useRef(!1);return Yw(()=>{l.current=!0}),V.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=Kw(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:li([e,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[e,r,o,s,t])}function wa(){let{matches:t}=V.useContext($r),e=t[t.length-1];return e?e.params:{}}function _x(t,e){return wx(t,e)}function wx(t,e,n,r){_a()||qe(!1);let{navigator:i}=V.useContext(va),{matches:s}=V.useContext($r),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=$u(),h;if(e){var m;let D=typeof e=="string"?Ps(e):e;u==="/"||(m=D.pathname)!=null&&m.startsWith(u)||qe(!1),h=D}else h=c;let y=h.pathname||"/",I=y;if(u!=="/"){let D=u.replace(/^\//,"").split("/");I="/"+y.replace(/^\//,"").split("/").slice(D.length).join("/")}let C=KA(t,{pathname:I}),N=Ax(C&&C.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:li([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:li([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&N?V.createElement(zu.Provider,{value:{location:Jo({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ir.Pop}},N):N}function Ex(){let t=kx(),e=mx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const Tx=V.createElement(Ex,null);class Ix extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement($r.Provider,{value:this.props.routeContext},V.createElement(Xw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sx(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(Uf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement($r.Provider,{value:e},r)}function Ax(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);h>=0||qe(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:y,errors:I}=n,C=m.route.loader&&y[m.route.id]===void 0&&(!I||I[m.route.id]===void 0);if(m.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,y)=>{let I,C=!1,N=null,D=null;n&&(I=l&&m.route.id?l[m.route.id]:void 0,N=m.route.errorElement||Tx,u&&(c<0&&y===0?(Nx("route-fallback"),C=!0,D=null):c===y&&(C=!0,D=m.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,y+1)),T=()=>{let A;return I?A=N:C?A=D:m.route.Component?A=V.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=h,V.createElement(Sx,{match:m,routeContext:{outlet:h,matches:S,isDataRoute:n!=null},children:A})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?V.createElement(Ix,{location:n.location,revalidation:n.revalidation,component:N,error:I,children:T(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):T()},null)}var Jw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Jw||{}),Zw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zw||{});function xx(t){let e=V.useContext(Uf);return e||qe(!1),e}function Cx(t){let e=V.useContext(yx);return e||qe(!1),e}function Rx(t){let e=V.useContext($r);return e||qe(!1),e}function eE(t){let e=Rx(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function kx(){var t;let e=V.useContext(Xw),n=Cx(),r=eE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Px(){let{router:t}=xx(Jw.UseNavigateStable),e=eE(Zw.UseNavigateStable),n=V.useRef(!1);return Yw(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Jo({fromRouteId:e},s)))},[t,e])}const ey={};function Nx(t,e,n){ey[t]||(ey[t]=!0)}function bx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Dx(t){let{to:e,replace:n,state:r,relative:i}=t;_a()||qe(!1);let{future:s,static:o}=V.useContext(va),{matches:l}=V.useContext($r),{pathname:u}=$u(),c=En(),h=Kw(e,Gw(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return V.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function cn(t){qe(!1)}function Ox(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ir.Pop,navigator:s,static:o=!1,future:l}=t;_a()&&qe(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:s,static:o,future:Jo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ps(r));let{pathname:h="/",search:m="",hash:y="",state:I=null,key:C="default"}=r,N=V.useMemo(()=>{let D=Hw(h,u);return D==null?null:{location:{pathname:D,search:m,hash:y,state:I,key:C},navigationType:i}},[u,h,m,y,I,C,i]);return N==null?null:V.createElement(va.Provider,{value:c},V.createElement(zu.Provider,{children:n,value:N}))}function Vx(t){let{children:e,location:n}=t;return _x(_h(e),n)}new Promise(()=>{});function _h(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,_h(r.props.children,s));return}r.type!==cn&&qe(!1),!r.props.index||!r.props.children||qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_h(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Lx="6";try{window.__reactRouterVersion=Lx}catch{}const Mx="startTransition",ty=DI[Mx];function jx(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=qA({window:i,v5Compat:!0}));let o=s.current,[l,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=V.useCallback(m=>{c&&ty?ty(()=>u(m)):u(m)},[u,c]);return V.useLayoutEffect(()=>o.listen(h),[o,h]),V.useEffect(()=>bx(r),[r]),V.createElement(Ox,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var ny;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ny||(ny={}));var ry;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ry||(ry={}));var iy={};/**
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
 */const tE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(y=64)),r.push(n[h],n[m],n[y],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new Ux;const y=s<<2|l>>4;if(r.push(y),c!==64){const I=l<<4&240|c>>2;if(r.push(I),m!==64){const C=c<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ux extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bx=function(t){const e=tE(t);return nE.encodeByteArray(e,!0)},du=function(t){return Bx(t).replace(/\./g,"")},rE=function(t){try{return nE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $x=()=>zx().__FIREBASE_DEFAULTS__,Wx=()=>{if(typeof process>"u"||typeof iy>"u")return;const t=iy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rE(t[1]);return e&&JSON.parse(e)},Wu=()=>{try{return $x()||Wx()||qx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iE=t=>{var e,n;return(n=(e=Wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hx=t=>{const e=iE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sE=()=>{var t;return(t=Wu())===null||t===void 0?void 0:t.config},oE=t=>{var e;return(e=Wu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Gx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Kx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[du(JSON.stringify(n)),du(JSON.stringify(o)),""].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function Xx(){var t;const e=(t=Wu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eC(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tC(){return!Xx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aE(){try{return typeof indexedDB=="object"}catch{return!1}}function lE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function nC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const rC="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rC,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?iC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,l,r)}}function iC(t,e){return t.replace(sC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sC=/\{\$([^}]+)}/g;function oC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sy(s)&&sy(o)){if(!Zo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function mo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function aC(t,e){const n=new lC(t,e);return n.subscribe.bind(n)}class lC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sd),i.error===void 0&&(i.error=sd),i.complete===void 0&&(i.complete=sd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sd(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ei="[DEFAULT]";/**
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
 */class cC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hC(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dC(t){return t===ei?void 0:t}function hC(t){return t.instantiationMode==="EAGER"}/**
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
 */class fC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const pC={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},mC=le.INFO,gC={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},yC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bf{constructor(e){this.name=e,this._logLevel=mC,this._logHandler=yC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const vC=(t,e)=>e.some(n=>t instanceof n);let oy,ay;function _C(){return oy||(oy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wC(){return ay||(ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uE=new WeakMap,wh=new WeakMap,cE=new WeakMap,od=new WeakMap,zf=new WeakMap;function EC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uE.set(n,t)}).catch(()=>{}),zf.set(e,t),e}function TC(t){if(wh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wh.set(t,e)}let Eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IC(t){Eh=t(Eh)}function SC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ad(this),e,...n);return cE.set(r,e.sort?e.sort():[e]),Kn(r)}:wC().includes(t)?function(...e){return t.apply(ad(this),e),Kn(uE.get(this))}:function(...e){return Kn(t.apply(ad(this),e))}}function AC(t){return typeof t=="function"?SC(t):(t instanceof IDBTransaction&&TC(t),vC(t,_C())?new Proxy(t,Eh):t)}function Kn(t){if(t instanceof IDBRequest)return EC(t);if(od.has(t))return od.get(t);const e=AC(t);return e!==t&&(od.set(t,e),zf.set(e,t)),e}const ad=t=>zf.get(t);function qu(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Kn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Kn(o.result),u.oldVersion,u.newVersion,Kn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function ld(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Kn(n).then(()=>{})}const xC=["get","getKey","getAll","getAllKeys","count"],CC=["put","add","delete","clear"],ud=new Map;function ly(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ud.get(e))return ud.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ud.set(e,s),s}IC(t=>({...t,get:(e,n,r)=>ly(e,n)||t.get(e,n,r),has:(e,n)=>!!ly(e,n)||t.has(e,n)}));/**
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
 */class RC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Th="@firebase/app",uy="0.10.13";/**
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
 */const tr=new Bf("@firebase/app"),PC="@firebase/app-compat",NC="@firebase/analytics-compat",bC="@firebase/analytics",DC="@firebase/app-check-compat",OC="@firebase/app-check",VC="@firebase/auth",LC="@firebase/auth-compat",MC="@firebase/database",jC="@firebase/data-connect",FC="@firebase/database-compat",UC="@firebase/functions",BC="@firebase/functions-compat",zC="@firebase/installations",$C="@firebase/installations-compat",WC="@firebase/messaging",qC="@firebase/messaging-compat",HC="@firebase/performance",GC="@firebase/performance-compat",KC="@firebase/remote-config",QC="@firebase/remote-config-compat",XC="@firebase/storage",YC="@firebase/storage-compat",JC="@firebase/firestore",ZC="@firebase/vertexai-preview",eR="@firebase/firestore-compat",tR="firebase",nR="10.14.1";/**
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
 */const Ih="[DEFAULT]",rR={[Th]:"fire-core",[PC]:"fire-core-compat",[bC]:"fire-analytics",[NC]:"fire-analytics-compat",[OC]:"fire-app-check",[DC]:"fire-app-check-compat",[VC]:"fire-auth",[LC]:"fire-auth-compat",[MC]:"fire-rtdb",[jC]:"fire-data-connect",[FC]:"fire-rtdb-compat",[UC]:"fire-fn",[BC]:"fire-fn-compat",[zC]:"fire-iid",[$C]:"fire-iid-compat",[WC]:"fire-fcm",[qC]:"fire-fcm-compat",[HC]:"fire-perf",[GC]:"fire-perf-compat",[KC]:"fire-rc",[QC]:"fire-rc-compat",[XC]:"fire-gcs",[YC]:"fire-gcs-compat",[JC]:"fire-fst",[eR]:"fire-fst-compat",[ZC]:"fire-vertex","fire-js":"fire-js",[tR]:"fire-js-all"};/**
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
 */const hu=new Map,iR=new Map,Sh=new Map;function cy(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Sh.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;Sh.set(e,t);for(const n of hu.values())cy(n,t);for(const n of iR.values())cy(n,t);return!0}function Ns(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xn(t){return t.settings!==void 0}/**
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
 */const sR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new Si("app","Firebase",sR);/**
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
 */class oR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=nR;function dE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ih,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Dr.create("bad-app-name",{appName:String(i)});if(n||(n=sE()),!n)throw Dr.create("no-options");const s=hu.get(i);if(s){if(Zo(n,s.options)&&Zo(r,s.config))return s;throw Dr.create("duplicate-app",{appName:i})}const o=new fC(i);for(const u of Sh.values())o.addComponent(u);const l=new oR(n,r,o);return hu.set(i,l),l}function $f(t=Ih){const e=hu.get(t);if(!e&&t===Ih&&sE())return dE();if(!e)throw Dr.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let i=(r=rR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(l.join(" "));return}Dn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aR="firebase-heartbeat-database",lR=1,ea="firebase-heartbeat-store";let cd=null;function hE(){return cd||(cd=qu(aR,lR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),cd}async function uR(t){try{const n=(await hE()).transaction(ea),r=await n.objectStore(ea).get(fE(t));return await n.done,r}catch(e){if(e instanceof Vn)tr.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(n.message)}}}async function dy(t,e){try{const r=(await hE()).transaction(ea,"readwrite");await r.objectStore(ea).put(e,fE(t)),await r.done}catch(n){if(n instanceof Vn)tr.warn(n.message);else{const r=Dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(r.message)}}}function fE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cR=1024,dR=30*24*60*60*1e3;class hR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=dR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){tr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hy(),{heartbeatsToSend:r,unsentEntries:i}=fR(this._heartbeatsCache.heartbeats),s=du(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return tr.warn(n),""}}}function hy(){return new Date().toISOString().substring(0,10)}function fR(t,e=cR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aE()?lE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fy(t){return du(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mR(t){Dn(new yn("platform-logger",e=>new RC(e),"PRIVATE")),Dn(new yn("heartbeat",e=>new hR(e),"PRIVATE")),rn(Th,uy,t),rn(Th,uy,"esm2017"),rn("fire-js","")}mR("");function Wf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function pE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gR=pE,mE=new Si("auth","Firebase",pE());/**
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
 */const fu=new Bf("@firebase/auth");function yR(t,...e){fu.logLevel<=le.WARN&&fu.warn(`Auth (${bs}): ${t}`,...e)}function bl(t,...e){fu.logLevel<=le.ERROR&&fu.error(`Auth (${bs}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw qf(t,...e)}function kn(t,...e){return qf(t,...e)}function gE(t,e,n){const r=Object.assign(Object.assign({},gR()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function Qn(t){return gE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mE.create(t,...e)}function Z(t,e,...n){if(!t)throw qf(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function nr(t,e){t||Wn(e)}/**
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
 */function Ah(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vR(){return py()==="http:"||py()==="https:"}function py(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _R(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vR()||Jx()||"connection"in navigator)?navigator.onLine:!0}function wR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=Qx()||Zx()}get(){return _R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hf(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ER={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TR=new Ta(3e4,6e4);function Wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qr(t,e,n,r,i={}){return vE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ea(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Yx()||(c.referrerPolicy="no-referrer"),yE.fetch()(_E(t,t.config.apiHost,n,l),c)})}async function vE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ER),e);try{const i=new SR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw gE(t,h,c);vn(t,h)}}catch(i){if(i instanceof Vn)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function Ia(t,e,n,r,i={}){const s=await qr(t,e,n,r,i);return"mfaPendingCredential"in s&&vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _E(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hf(t.config,i):`${t.config.apiScheme}://${i}`}function IR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),TR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kn(t,e,r);return i.customData._tokenResponse=n,i}function my(t){return t!==void 0&&t.enterprise!==void 0}class AR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return IR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function xR(t,e){return qr(t,"GET","/v2/recaptchaConfig",Wr(t,e))}/**
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
 */async function CR(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function wE(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RR(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=Gf(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ko(dd(i.auth_time)),issuedAtTime:ko(dd(i.iat)),expirationTime:ko(dd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dd(t){return Number(t)*1e3}function Gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=rE(n);return i?JSON.parse(i):(bl("Failed to decode base64 JWT payload"),null)}catch(i){return bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gy(t){const e=Gf(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&kR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class PR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ko(this.lastLoginAt),this.creationTime=ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ta(t,wE(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?EE(s.providerUserInfo):[],l=bR(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new xh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function NR(t){const e=De(t);await pu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function EE(t){return t.map(e=>{var{providerId:n}=e,r=Wf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function DR(t,e){const n=await vE(t,{},async()=>{const r=Ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_E(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",yE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OR(t,e){return qr(t,"POST","/v2/accounts:revokeToken",Wr(t,e))}/**
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
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=gy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ss;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
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
 */function dr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ta(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RR(this,e)}reload(){return NR(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await ta(this,CR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:O,isAnonymous:R,providerData:P,stsTokenManager:_}=n;Z(A&&_,e,"internal-error");const g=ss.fromJSON(this.name,_);Z(typeof A=="string",e,"internal-error"),dr(m,e.name),dr(y,e.name),Z(typeof O=="boolean",e,"internal-error"),Z(typeof R=="boolean",e,"internal-error"),dr(I,e.name),dr(C,e.name),dr(N,e.name),dr(D,e.name),dr(S,e.name),dr(T,e.name);const w=new qn({uid:A,auth:e,email:y,emailVerified:O,displayName:m,isAnonymous:R,photoURL:C,phoneNumber:I,tenantId:N,stsTokenManager:g,createdAt:S,lastLoginAt:T});return P&&Array.isArray(P)&&(w.providerData=P.map(E=>Object.assign({},E))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ss;i.updateFromServerResponse(n);const s=new qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?EE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ss;l.updateFromIdToken(r);const u=new qn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const yy=new Map;function Hn(t){nr(t instanceof Function,"Expected a class definition");let e=yy.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yy.set(t,e),e)}/**
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
 */class TE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}TE.type="NONE";const vy=TE;/**
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
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(Hn(vy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Hn(vy);const o=Dl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const m=qn._fromJSON(e,h);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new os(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new os(s,e,r))}}/**
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
 */function _y(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(IE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RE(e))return"Blackberry";if(kE(e))return"Webos";if(SE(e))return"Safari";if((e.includes("chrome/")||AE(e))&&!e.includes("edge/"))return"Chrome";if(CE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function IE(t=Et()){return/firefox\//i.test(t)}function SE(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AE(t=Et()){return/crios\//i.test(t)}function xE(t=Et()){return/iemobile/i.test(t)}function CE(t=Et()){return/android/i.test(t)}function RE(t=Et()){return/blackberry/i.test(t)}function kE(t=Et()){return/webos/i.test(t)}function Kf(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VR(t=Et()){var e;return Kf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LR(){return eC()&&document.documentMode===10}function PE(t=Et()){return Kf(t)||CE(t)||kE(t)||RE(t)||/windows phone/i.test(t)||xE(t)}/**
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
 */function NE(t,e=[]){let n;switch(t){case"Browser":n=_y(Et());break;case"Worker":n=`${_y(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
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
 */class MR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jR(t,e={}){return qr(t,"GET","/v2/passwordPolicy",Wr(t,e))}/**
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
 */const FR=6;class UR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class BR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wy(this),this.idTokenSubscription=new wy(this),this.beforeStateQueue=new MR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wE(this,{idToken:e}),r=await qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(Qn(this));const n=e?De(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jR(this),n=new UR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ai(t){return De(t)}class wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=aC(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zR(t){Hu=t}function bE(t){return Hu.loadJS(t)}function $R(){return Hu.recaptchaEnterpriseScript}function WR(){return Hu.gapiScript}function qR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const HR="recaptcha-enterprise",GR="NO_RECAPTCHA";class KR{constructor(e){this.type=HR,this.auth=Ai(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{xR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new AR(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;my(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(GR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&my(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=$R();u.length!==0&&(u+=l),bE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ey(t,e,n,r=!1){const i=new KR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ch(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ey(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ey(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function QR(t,e){const n=Ns(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zo(s,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function XR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YR(t,e,n){const r=Ai(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=DE(e),{host:o,port:l}=JR(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ZR()}function DE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JR(t){const e=DE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ty(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ty(o)}}}function Ty(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function ek(t,e){return qr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function tk(t,e){return Ia(t,"POST","/v1/accounts:signInWithPassword",Wr(t,e))}/**
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
 */async function nk(t,e){return Ia(t,"POST","/v1/accounts:signInWithEmailLink",Wr(t,e))}async function rk(t,e){return Ia(t,"POST","/v1/accounts:signInWithEmailLink",Wr(t,e))}/**
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
 */class na extends Qf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new na(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new na(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ch(e,n,"signInWithPassword",tk);case"emailLink":return nk(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ch(e,r,"signUpPassword",ek);case"emailLink":return rk(e,{idToken:n,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function as(t,e){return Ia(t,"POST","/v1/accounts:signInWithIdp",Wr(t,e))}/**
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
 */const ik="http://localhost";class mi extends Qf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:ik,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ea(n)}return e}}/**
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
 */function sk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ok(t){const e=po(mo(t)).link,n=e?po(mo(e)).deep_link_id:null,r=po(mo(t)).deep_link_id;return(r?po(mo(r)).link:null)||r||n||e||t}class Xf{constructor(e){var n,r,i,s,o,l;const u=po(mo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,m=sk((i=u.mode)!==null&&i!==void 0?i:null);Z(c&&h&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ok(e);try{return new Xf(n)}catch{return null}}}/**
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
 */class Ds{constructor(){this.providerId=Ds.PROVIDER_ID}static credential(e,n){return na._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xf.parseLink(n);return Z(r,"argument-error"),na._fromEmailAndCode(e,r.code,r.tenantId)}}Ds.PROVIDER_ID="password";Ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class OE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sa extends OE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yr extends Sa{constructor(){super("facebook.com")}static credential(e){return mi._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
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
 */class vr extends Sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mi._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
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
 */class _r extends Sa{constructor(){super("github.com")}static credential(e){return mi._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
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
 */class wr extends Sa{constructor(){super("twitter.com")}static credential(e,n){return mi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
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
 */async function ak(t,e){return Ia(t,"POST","/v1/accounts:signUp",Wr(t,e))}/**
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
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qn._fromIdTokenResponse(e,r,i),o=Iy(r);return new gi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Iy(r);return new gi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Iy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mu extends Vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new mu(e,n,r,i)}}function VE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mu._fromErrorAndOperation(t,s,e,r):s})}async function lk(t,e,n=!1){const r=await ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gi._forOperation(t,"link",r)}/**
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
 */async function uk(t,e,n=!1){const{auth:r}=t;if(xn(r.app))return Promise.reject(Qn(r));const i="reauthenticate";try{const s=await ta(t,VE(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Gf(s.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),gi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),s}}/**
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
 */async function LE(t,e,n=!1){if(xn(t.app))return Promise.reject(Qn(t));const r="signIn",i=await VE(t,r,e),s=await gi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ck(t,e){return LE(Ai(t),e)}/**
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
 */async function ME(t){const e=Ai(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dk(t,e,n){if(xn(t.app))return Promise.reject(Qn(t));const r=Ai(t),o=await Ch(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ak).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ME(t),u}),l=await gi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function hk(t,e,n){return xn(t.app)?Promise.reject(Qn(t)):ck(De(t),Ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ME(t),r})}function fk(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function pk(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function mk(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function gk(t){return De(t).signOut()}const gu="__sak";/**
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
 */class jE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gu,"1"),this.storage.removeItem(gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yk=1e3,vk=10;class FE extends jE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=PE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);LR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}FE.type="LOCAL";const _k=FE;/**
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
 */class UE extends jE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}UE.type="SESSION";const BE=UE;/**
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
 */function wk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await wk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gu.receivers=[];/**
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
 */function Yf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ek{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Yf("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pn(){return window}function Tk(t){Pn().location.href=t}/**
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
 */function zE(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function Ik(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ak(){return zE()?self:null}/**
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
 */const $E="firebaseLocalStorageDb",xk=1,yu="firebaseLocalStorage",WE="fbase_key";class Aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ku(t,e){return t.transaction([yu],e?"readwrite":"readonly").objectStore(yu)}function Ck(){const t=indexedDB.deleteDatabase($E);return new Aa(t).toPromise()}function Rh(){const t=indexedDB.open($E,xk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yu,{keyPath:WE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yu)?e(r):(r.close(),await Ck(),e(await Rh()))})})}async function Sy(t,e,n){const r=Ku(t,!0).put({[WE]:e,value:n});return new Aa(r).toPromise()}async function Rk(t,e){const n=Ku(t,!1).get(e),r=await new Aa(n).toPromise();return r===void 0?null:r.value}function Ay(t,e){const n=Ku(t,!0).delete(e);return new Aa(n).toPromise()}const kk=800,Pk=3;class qE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gu._getInstance(Ak()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ik(),!this.activeServiceWorker)return;this.sender=new Ek(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rh();return await Sy(e,gu,"1"),await Ay(e,gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ay(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ku(i,!1).getAll();return new Aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qE.type="LOCAL";const Nk=qE;new Ta(3e4,6e4);/**
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
 */function bk(t,e){return e?Hn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jf extends Qf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Dk(t){return LE(t.auth,new Jf(t),t.bypassAuthState)}function Ok(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),uk(n,new Jf(t),t.bypassAuthState)}async function Vk(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),lk(n,new Jf(t),t.bypassAuthState)}/**
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
 */class HE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dk;case"linkViaPopup":case"linkViaRedirect":return Vk;case"reauthViaPopup":case"reauthViaRedirect":return Ok;default:vn(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Lk=new Ta(2e3,1e4);class Ji extends HE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=Yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lk.get())};e()}}Ji.currentPopupAction=null;/**
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
 */const Mk="pendingRedirect",Ol=new Map;class jk extends HE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await Fk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fk(t,e){const n=zk(e),r=Bk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Uk(t,e){Ol.set(t._key(),e)}function Bk(t){return Hn(t._redirectPersistence)}function zk(t){return Dl(Mk,t.config.apiKey,t.name)}async function $k(t,e,n=!1){if(xn(t.app))return Promise.reject(Qn(t));const r=Ai(t),i=bk(r,e),o=await new jk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Wk=10*60*1e3;class qk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!GE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wk&&this.cachedEventUids.clear(),this.cachedEventUids.has(xy(e))}saveEventToCache(e){this.cachedEventUids.add(xy(e)),this.lastProcessedEventTime=Date.now()}}function xy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function GE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GE(t);default:return!1}}/**
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
 */async function Gk(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
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
 */const Kk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qk=/^https?/;async function Xk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gk(t);for(const n of e)try{if(Yk(n))return}catch{}vn(t,"unauthorized-domain")}function Yk(t){const e=Ah(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Qk.test(n))return!1;if(Kk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Jk=new Ta(3e4,6e4);function Cy(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Zk(t){return new Promise((e,n)=>{var r,i,s;function o(){Cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cy(),n(kn(t,"network-request-failed"))},timeout:Jk.get()})}if(!((i=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pn().gapi)===null||s===void 0)&&s.load)o();else{const l=qR("iframefcb");return Pn()[l]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},bE(`${WR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Vl=null,e})}let Vl=null;function e1(t){return Vl=Vl||Zk(t),Vl}/**
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
 */const t1=new Ta(5e3,15e3),n1="__/auth/iframe",r1="emulator/auth/iframe",i1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},s1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function o1(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hf(e,r1):`https://${t.config.authDomain}/${n1}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=s1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ea(r).slice(1)}`}async function a1(t){const e=await e1(t),n=Pn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:o1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:i1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),l=Pn().setTimeout(()=>{s(o)},t1.get());function u(){Pn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const l1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u1=500,c1=600,d1="_blank",h1="http://localhost";class Ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function f1(t,e,n,r=u1,i=c1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},l1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Et().toLowerCase();n&&(l=AE(c)?d1:n),IE(c)&&(e=e||h1,u.scrollbars="yes");const h=Object.entries(u).reduce((y,[I,C])=>`${y}${I}=${C},`,"");if(VR(c)&&l!=="_self")return p1(e||"",l),new Ry(null);const m=window.open(e||"",l,h);Z(m,t,"popup-blocked");try{m.focus()}catch{}return new Ry(m)}function p1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const m1="__/auth/handler",g1="emulator/auth/handler",y1=encodeURIComponent("fac");async function ky(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof OE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Sa){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${y1}=${encodeURIComponent(u)}`:"";return`${v1(t)}?${Ea(l).slice(1)}${c}`}function v1({config:t}){return t.emulator?Hf(t,g1):`https://${t.authDomain}/${m1}`}/**
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
 */const hd="webStorageSupport";class _1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BE,this._completeRedirectFn=$k,this._overrideRedirectResult=Uk}async _openPopup(e,n,r,i){var s;nr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ky(e,n,r,Ah(),i);return f1(e,o,Yf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ky(e,n,r,Ah(),i);return Tk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await a1(e),r=new qk(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hd,{type:hd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hd];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return PE()||SE()||Kf()}}const w1=_1;var Py="@firebase/auth",Ny="1.7.9";/**
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
 */class E1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function T1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function I1(t){Dn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NE(t)},c=new BR(r,i,s,u);return XR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new yn("auth-internal",e=>{const n=Ai(e.getProvider("auth").getImmediate());return(r=>new E1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Py,Ny,T1(t)),rn(Py,Ny,"esm2017")}/**
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
 */const S1=5*60,A1=oE("authIdTokenMaxAge")||S1;let by=null;const x1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>A1)return;const i=n==null?void 0:n.token;by!==i&&(by=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function C1(t=$f()){const e=Ns(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QR(t,{popupRedirectResolver:w1,persistence:[Nk,_k,BE]}),r=oE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=x1(s.toString());pk(n,o,()=>o(n.currentUser)),fk(n,l=>o(l))}}const i=iE("auth");return i&&YR(n,`http://${i}`),n}function R1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",R1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});I1("Browser");var Dy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,KE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function w(){}w.prototype=g.prototype,_.D=g.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(E,k,b){for(var x=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)x[ie-2]=arguments[ie];return g.prototype[k].apply(E,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,w){w||(w=0);var E=Array(16);if(typeof g=="string")for(var k=0;16>k;++k)E[k]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(k=0;16>k;++k)E[k]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=_.g[0],w=_.g[1],k=_.g[2];var b=_.g[3],x=g+(b^w&(k^b))+E[0]+3614090360&4294967295;g=w+(x<<7&4294967295|x>>>25),x=b+(k^g&(w^k))+E[1]+3905402710&4294967295,b=g+(x<<12&4294967295|x>>>20),x=k+(w^b&(g^w))+E[2]+606105819&4294967295,k=b+(x<<17&4294967295|x>>>15),x=w+(g^k&(b^g))+E[3]+3250441966&4294967295,w=k+(x<<22&4294967295|x>>>10),x=g+(b^w&(k^b))+E[4]+4118548399&4294967295,g=w+(x<<7&4294967295|x>>>25),x=b+(k^g&(w^k))+E[5]+1200080426&4294967295,b=g+(x<<12&4294967295|x>>>20),x=k+(w^b&(g^w))+E[6]+2821735955&4294967295,k=b+(x<<17&4294967295|x>>>15),x=w+(g^k&(b^g))+E[7]+4249261313&4294967295,w=k+(x<<22&4294967295|x>>>10),x=g+(b^w&(k^b))+E[8]+1770035416&4294967295,g=w+(x<<7&4294967295|x>>>25),x=b+(k^g&(w^k))+E[9]+2336552879&4294967295,b=g+(x<<12&4294967295|x>>>20),x=k+(w^b&(g^w))+E[10]+4294925233&4294967295,k=b+(x<<17&4294967295|x>>>15),x=w+(g^k&(b^g))+E[11]+2304563134&4294967295,w=k+(x<<22&4294967295|x>>>10),x=g+(b^w&(k^b))+E[12]+1804603682&4294967295,g=w+(x<<7&4294967295|x>>>25),x=b+(k^g&(w^k))+E[13]+4254626195&4294967295,b=g+(x<<12&4294967295|x>>>20),x=k+(w^b&(g^w))+E[14]+2792965006&4294967295,k=b+(x<<17&4294967295|x>>>15),x=w+(g^k&(b^g))+E[15]+1236535329&4294967295,w=k+(x<<22&4294967295|x>>>10),x=g+(k^b&(w^k))+E[1]+4129170786&4294967295,g=w+(x<<5&4294967295|x>>>27),x=b+(w^k&(g^w))+E[6]+3225465664&4294967295,b=g+(x<<9&4294967295|x>>>23),x=k+(g^w&(b^g))+E[11]+643717713&4294967295,k=b+(x<<14&4294967295|x>>>18),x=w+(b^g&(k^b))+E[0]+3921069994&4294967295,w=k+(x<<20&4294967295|x>>>12),x=g+(k^b&(w^k))+E[5]+3593408605&4294967295,g=w+(x<<5&4294967295|x>>>27),x=b+(w^k&(g^w))+E[10]+38016083&4294967295,b=g+(x<<9&4294967295|x>>>23),x=k+(g^w&(b^g))+E[15]+3634488961&4294967295,k=b+(x<<14&4294967295|x>>>18),x=w+(b^g&(k^b))+E[4]+3889429448&4294967295,w=k+(x<<20&4294967295|x>>>12),x=g+(k^b&(w^k))+E[9]+568446438&4294967295,g=w+(x<<5&4294967295|x>>>27),x=b+(w^k&(g^w))+E[14]+3275163606&4294967295,b=g+(x<<9&4294967295|x>>>23),x=k+(g^w&(b^g))+E[3]+4107603335&4294967295,k=b+(x<<14&4294967295|x>>>18),x=w+(b^g&(k^b))+E[8]+1163531501&4294967295,w=k+(x<<20&4294967295|x>>>12),x=g+(k^b&(w^k))+E[13]+2850285829&4294967295,g=w+(x<<5&4294967295|x>>>27),x=b+(w^k&(g^w))+E[2]+4243563512&4294967295,b=g+(x<<9&4294967295|x>>>23),x=k+(g^w&(b^g))+E[7]+1735328473&4294967295,k=b+(x<<14&4294967295|x>>>18),x=w+(b^g&(k^b))+E[12]+2368359562&4294967295,w=k+(x<<20&4294967295|x>>>12),x=g+(w^k^b)+E[5]+4294588738&4294967295,g=w+(x<<4&4294967295|x>>>28),x=b+(g^w^k)+E[8]+2272392833&4294967295,b=g+(x<<11&4294967295|x>>>21),x=k+(b^g^w)+E[11]+1839030562&4294967295,k=b+(x<<16&4294967295|x>>>16),x=w+(k^b^g)+E[14]+4259657740&4294967295,w=k+(x<<23&4294967295|x>>>9),x=g+(w^k^b)+E[1]+2763975236&4294967295,g=w+(x<<4&4294967295|x>>>28),x=b+(g^w^k)+E[4]+1272893353&4294967295,b=g+(x<<11&4294967295|x>>>21),x=k+(b^g^w)+E[7]+4139469664&4294967295,k=b+(x<<16&4294967295|x>>>16),x=w+(k^b^g)+E[10]+3200236656&4294967295,w=k+(x<<23&4294967295|x>>>9),x=g+(w^k^b)+E[13]+681279174&4294967295,g=w+(x<<4&4294967295|x>>>28),x=b+(g^w^k)+E[0]+3936430074&4294967295,b=g+(x<<11&4294967295|x>>>21),x=k+(b^g^w)+E[3]+3572445317&4294967295,k=b+(x<<16&4294967295|x>>>16),x=w+(k^b^g)+E[6]+76029189&4294967295,w=k+(x<<23&4294967295|x>>>9),x=g+(w^k^b)+E[9]+3654602809&4294967295,g=w+(x<<4&4294967295|x>>>28),x=b+(g^w^k)+E[12]+3873151461&4294967295,b=g+(x<<11&4294967295|x>>>21),x=k+(b^g^w)+E[15]+530742520&4294967295,k=b+(x<<16&4294967295|x>>>16),x=w+(k^b^g)+E[2]+3299628645&4294967295,w=k+(x<<23&4294967295|x>>>9),x=g+(k^(w|~b))+E[0]+4096336452&4294967295,g=w+(x<<6&4294967295|x>>>26),x=b+(w^(g|~k))+E[7]+1126891415&4294967295,b=g+(x<<10&4294967295|x>>>22),x=k+(g^(b|~w))+E[14]+2878612391&4294967295,k=b+(x<<15&4294967295|x>>>17),x=w+(b^(k|~g))+E[5]+4237533241&4294967295,w=k+(x<<21&4294967295|x>>>11),x=g+(k^(w|~b))+E[12]+1700485571&4294967295,g=w+(x<<6&4294967295|x>>>26),x=b+(w^(g|~k))+E[3]+2399980690&4294967295,b=g+(x<<10&4294967295|x>>>22),x=k+(g^(b|~w))+E[10]+4293915773&4294967295,k=b+(x<<15&4294967295|x>>>17),x=w+(b^(k|~g))+E[1]+2240044497&4294967295,w=k+(x<<21&4294967295|x>>>11),x=g+(k^(w|~b))+E[8]+1873313359&4294967295,g=w+(x<<6&4294967295|x>>>26),x=b+(w^(g|~k))+E[15]+4264355552&4294967295,b=g+(x<<10&4294967295|x>>>22),x=k+(g^(b|~w))+E[6]+2734768916&4294967295,k=b+(x<<15&4294967295|x>>>17),x=w+(b^(k|~g))+E[13]+1309151649&4294967295,w=k+(x<<21&4294967295|x>>>11),x=g+(k^(w|~b))+E[4]+4149444226&4294967295,g=w+(x<<6&4294967295|x>>>26),x=b+(w^(g|~k))+E[11]+3174756917&4294967295,b=g+(x<<10&4294967295|x>>>22),x=k+(g^(b|~w))+E[2]+718787259&4294967295,k=b+(x<<15&4294967295|x>>>17),x=w+(b^(k|~g))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,_.g[2]=_.g[2]+k&4294967295,_.g[3]=_.g[3]+b&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var w=g-this.blockSize,E=this.B,k=this.h,b=0;b<g;){if(k==0)for(;b<=w;)i(this,_,b),b+=this.blockSize;if(typeof _=="string"){for(;b<g;)if(E[k++]=_.charCodeAt(b++),k==this.blockSize){i(this,E),k=0;break}}else for(;b<g;)if(E[k++]=_[b++],k==this.blockSize){i(this,E),k=0;break}}this.h=k,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var w=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=w&255,w/=256;for(this.u(_),_=Array(16),g=w=0;4>g;++g)for(var E=0;32>E;E+=8)_[w++]=this.g[g]>>>E&255;return _};function s(_,g){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=g(_)}function o(_,g){this.h=g;for(var w=[],E=!0,k=_.length-1;0<=k;k--){var b=_[k]|0;E&&b==g||(w[k]=b,E=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?s(_,function(g){return new o([g|0],0>g?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return m;if(0>_)return D(c(-_));for(var g=[],w=1,E=0;_>=w;E++)g[E]=_/w|0,w*=4294967296;return new o(g,0)}function h(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return D(h(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(g,8)),E=m,k=0;k<_.length;k+=8){var b=Math.min(8,_.length-k),x=parseInt(_.substring(k,k+b),g);8>b?(b=c(Math.pow(g,b)),E=E.j(b).add(c(x))):(E=E.j(w),E=E.add(c(x)))}return E}var m=u(0),y=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var _=0,g=1,w=0;w<this.g.length;w++){var E=this.i(w);_+=(0<=E?E:4294967296+E)*g,g*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(C(this))return"0";if(N(this))return"-"+D(this).toString(_);for(var g=c(Math.pow(_,6)),w=this,E="";;){var k=O(w,g).g;w=S(w,k.j(g));var b=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=k,C(w))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function C(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function N(_){return _.h==-1}t.l=function(_){return _=S(this,_),N(_)?-1:C(_)?0:1};function D(_){for(var g=_.g.length,w=[],E=0;E<g;E++)w[E]=~_.g[E];return new o(w,~_.h).add(y)}t.abs=function(){return N(this)?D(this):this},t.add=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],E=0,k=0;k<=g;k++){var b=E+(this.i(k)&65535)+(_.i(k)&65535),x=(b>>>16)+(this.i(k)>>>16)+(_.i(k)>>>16);E=x>>>16,b&=65535,x&=65535,w[k]=x<<16|b}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(_,g){return _.add(D(g))}t.j=function(_){if(C(this)||C(_))return m;if(N(this))return N(_)?D(this).j(D(_)):D(D(this).j(_));if(N(_))return D(this.j(D(_)));if(0>this.l(I)&&0>_.l(I))return c(this.m()*_.m());for(var g=this.g.length+_.g.length,w=[],E=0;E<2*g;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var k=0;k<_.g.length;k++){var b=this.i(E)>>>16,x=this.i(E)&65535,ie=_.i(k)>>>16,re=_.i(k)&65535;w[2*E+2*k]+=x*re,T(w,2*E+2*k),w[2*E+2*k+1]+=b*re,T(w,2*E+2*k+1),w[2*E+2*k+1]+=x*ie,T(w,2*E+2*k+1),w[2*E+2*k+2]+=b*ie,T(w,2*E+2*k+2)}for(E=0;E<g;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=g;E<2*g;E++)w[E]=0;return new o(w,0)};function T(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function A(_,g){this.g=_,this.h=g}function O(_,g){if(C(g))throw Error("division by zero");if(C(_))return new A(m,m);if(N(_))return g=O(D(_),g),new A(D(g.g),D(g.h));if(N(g))return g=O(_,D(g)),new A(D(g.g),g.h);if(30<_.g.length){if(N(_)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var w=y,E=g;0>=E.l(_);)w=R(w),E=R(E);var k=P(w,1),b=P(E,1);for(E=P(E,2),w=P(w,2);!C(E);){var x=b.add(E);0>=x.l(_)&&(k=k.add(w),b=x),E=P(E,1),w=P(w,1)}return g=S(_,k.j(g)),new A(k,g)}for(k=m;0<=_.l(g);){for(w=Math.max(1,Math.floor(_.m()/g.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=c(w),x=b.j(g);N(x)||0<x.l(_);)w-=E,b=c(w),x=b.j(g);C(b)&&(b=y),k=k.add(b),_=S(_,x)}return new A(k,_)}t.A=function(_){return O(this,_).h},t.and=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],E=0;E<g;E++)w[E]=this.i(E)&_.i(E);return new o(w,this.h&_.h)},t.or=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],E=0;E<g;E++)w[E]=this.i(E)|_.i(E);return new o(w,this.h|_.h)},t.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],E=0;E<g;E++)w[E]=this.i(E)^_.i(E);return new o(w,this.h^_.h)};function R(_){for(var g=_.g.length+1,w=[],E=0;E<g;E++)w[E]=_.i(E)<<1|_.i(E-1)>>>31;return new o(w,_.h)}function P(_,g){var w=g>>5;g%=32;for(var E=_.g.length-w,k=[],b=0;b<E;b++)k[b]=0<g?_.i(b+w)>>>g|_.i(b+w+1)<<32-g:_.i(b+w);return new o(k,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,KE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ui=o}).apply(typeof Dy<"u"?Dy:typeof self<"u"?self:typeof window<"u"?window:{});var ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var QE,go,XE,Ll,kh,YE,JE,ZE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ml=="object"&&ml];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var L=a[v];if(!(L in p))break e;p=p[L]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var p=0,v=!1,L={next:function(){if(!v&&p<a.length){var M=p++;return{value:d(M,a[M]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),a.apply(d,L)}}return function(){return a.apply(d,arguments)}}function y(a,d,p){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,y.apply(null,arguments)}function I(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function C(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,L,M){for(var $=Array(arguments.length-2),we=2;we<arguments.length;we++)$[we-2]=arguments[we];return d.prototype[L].apply(v,$)}}function N(a){const d=a.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function D(a,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const L=a.length||0,M=v.length||0;a.length=L+M;for(let $=0;$<M;$++)a[L+$]=v[$]}else a.push(v)}}class S{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function T(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var R=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function P(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function _(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function g(a){const d={};for(const p in a)d[p]=a[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,d){let p,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(p in v)a[p]=v[p];for(let M=0;M<w.length;M++)p=w[M],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function k(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function x(){var a=Y;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class ie{constructor(){this.h=this.g=null}add(d,p){const v=re.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var re=new S(()=>new ct,a=>a.reset());class ct{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,z=!1,Y=new ie,J=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(ge)}};var ge=()=>{for(var a;a=x();){try{a.h.call(a.g)}catch(p){b(p)}var d=re;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}z=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var Dt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function Bt(a,d){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(R){e:{try{O(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:zt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Bt.aa.h.call(this)}}C(Bt,Se);var zt={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),Tt=0;function Ln(a,d,p,v,L){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=L,this.key=++Tt,this.da=this.fa=!1}function He(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function dt(a){this.src=a,this.g={},this.h=0}dt.prototype.add=function(a,d,p,v,L){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var $=G(a,d,v,L);return-1<$?(d=a[$],p||(d.fa=!1)):(d=new Ln(d,this.src,M,!!v,L),d.fa=p,a.push(d)),d};function F(a,d){var p=d.type;if(p in a.g){var v=a.g[p],L=Array.prototype.indexOf.call(v,d,void 0),M;(M=0<=L)&&Array.prototype.splice.call(v,L,1),M&&(He(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function G(a,d,p,v){for(var L=0;L<a.length;++L){var M=a[L];if(!M.da&&M.listener==d&&M.capture==!!p&&M.ha==v)return L}return-1}var ue="closure_lm_"+(1e6*Math.random()|0),he={};function _e(a,d,p,v,L){if(Array.isArray(d)){for(var M=0;M<d.length;M++)_e(a,d[M],p,v,L);return null}return p=Us(p),a&&a[K]?a.K(d,p,c(v)?!!v.capture:!1,L):Be(a,d,p,!1,v,L)}function Be(a,d,p,v,L,M){if(!d)throw Error("Invalid event type");var $=c(L)?!!L.capture:!!L,we=Tn(a);if(we||(a[ue]=we=new dt(a)),p=we.add(d,p,v,$,M),p.proxy)return p;if(v=Jt(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)Dt||(L=$),L===void 0&&(L=!1),a.addEventListener(d.toString(),v,L);else if(a.attachEvent)a.attachEvent(ki(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Jt(){function a(p){return d.call(a.src,a.listener,p)}const d=Pi;return a}function Qe(a,d,p,v,L){if(Array.isArray(d))for(var M=0;M<d.length;M++)Qe(a,d[M],p,v,L);else v=c(v)?!!v.capture:!!v,p=Us(p),a&&a[K]?(a=a.i,d=String(d).toString(),d in a.g&&(M=a.g[d],p=G(M,p,v,L),-1<p&&(He(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete a.g[d],a.h--)))):a&&(a=Tn(a))&&(d=a.g[d.toString()],a=-1,d&&(a=G(d,p,v,L)),(p=-1<a?d[a]:null)&&$t(p))}function $t(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[K])F(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(ki(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=Tn(d))?(F(p,a),p.h==0&&(p.src=null,d[ue]=null)):He(a)}}}function ki(a){return a in he?he[a]:he[a]="on"+a}function Pi(a,d){if(a.da)a=!0;else{d=new Bt(d,this);var p=a.listener,v=a.ha||a.src;a.fa&&$t(a),a=p.call(v,d)}return a}function Tn(a){return a=a[ue],a instanceof dt?a:null}var Ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function Us(a){return typeof a=="function"?a:(a[Ni]||(a[Ni]=function(d){return a.handleEvent(d)}),a[Ni])}function Xe(){me.call(this),this.i=new dt(this),this.M=this,this.F=null}C(Xe,me),Xe.prototype[K]=!0,Xe.prototype.removeEventListener=function(a,d,p,v){Qe(this,a,d,p,v)};function It(a,d){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new Se(d,a);else if(d instanceof Se)d.target=d.target||a;else{var L=d;d=new Se(v,a),E(d,L)}if(L=!0,p)for(var M=p.length-1;0<=M;M--){var $=d.g=p[M];L=Va($,v,!0,d)&&L}if($=d.g=a,L=Va($,v,!0,d)&&L,L=Va($,v,!1,d)&&L,p)for(M=0;M<p.length;M++)$=d.g=p[M],L=Va($,v,!1,d)&&L}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],v=0;v<p.length;v++)He(p[v]);delete a.g[d],a.h--}}this.F=null},Xe.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},Xe.prototype.L=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function Va(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,M=0;M<d.length;++M){var $=d[M];if($&&!$.da&&$.capture==p){var we=$.listener,nt=$.ha||$.src;$.fa&&F(a.i,$),L=we.call(nt,v)!==!1&&L}}return L&&!v.defaultPrevented}function Hp(a,d,p){if(typeof a=="function")p&&(a=y(a,p));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Gp(a){a.g=Hp(()=>{a.g=null,a.i&&(a.i=!1,Gp(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class WT extends me{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Gp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bs(a){me.call(this),this.h=a,this.g={}}C(Bs,me);var Kp=[];function Qp(a){P(a.g,function(d,p){this.g.hasOwnProperty(p)&&$t(d)},a),a.g={}}Bs.prototype.N=function(){Bs.aa.N.call(this),Qp(this)},Bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gc=l.JSON.stringify,qT=l.JSON.parse,HT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function yc(){}yc.prototype.h=null;function Xp(a){return a.h||(a.h=a.i())}function Yp(){}var zs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vc(){Se.call(this,"d")}C(vc,Se);function _c(){Se.call(this,"c")}C(_c,Se);var Kr={},Jp=null;function La(){return Jp=Jp||new Xe}Kr.La="serverreachability";function Zp(a){Se.call(this,Kr.La,a)}C(Zp,Se);function $s(a){const d=La();It(d,new Zp(d))}Kr.STAT_EVENT="statevent";function em(a,d){Se.call(this,Kr.STAT_EVENT,a),this.stat=d}C(em,Se);function St(a){const d=La();It(d,new em(d,a))}Kr.Ma="timingevent";function tm(a,d){Se.call(this,Kr.Ma,a),this.size=d}C(tm,Se);function Ws(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function qs(){this.g=!0}qs.prototype.xa=function(){this.g=!1};function GT(a,d,p,v,L,M){a.info(function(){if(a.g)if(M)for(var $="",we=M.split("&"),nt=0;nt<we.length;nt++){var fe=we[nt].split("=");if(1<fe.length){var ht=fe[0];fe=fe[1];var ft=ht.split("_");$=2<=ft.length&&ft[1]=="type"?$+(ht+"="+fe+"&"):$+(ht+"=redacted&")}}else $=null;else $=M;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+d+`
`+p+`
`+$})}function KT(a,d,p,v,L,M,$){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+d+`
`+p+`
`+M+" "+$})}function bi(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+XT(a,p)+(v?" "+v:"")})}function QT(a,d){a.info(function(){return"TIMEOUT: "+d})}qs.prototype.info=function(){};function XT(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var M=L[0];if(M!="noop"&&M!="stop"&&M!="close")for(var $=1;$<L.length;$++)L[$]=""}}}}return gc(p)}catch{return d}}var Ma={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wc;function ja(){}C(ja,yc),ja.prototype.g=function(){return new XMLHttpRequest},ja.prototype.i=function(){return{}},wc=new ja;function ar(a,d,p,v){this.j=a,this.i=d,this.l=p,this.R=v||1,this.U=new Bs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rm}function rm(){this.i=null,this.g="",this.h=!1}var im={},Ec={};function Tc(a,d,p){a.L=1,a.v=za(Mn(d)),a.m=p,a.P=!0,sm(a,null)}function sm(a,d){a.F=Date.now(),Fa(a),a.A=Mn(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),_m(p.i,"t",v),a.C=0,p=a.j.J,a.h=new rm,a.g=Mm(a.j,p?d:null,!a.m),0<a.O&&(a.M=new WT(y(a.Y,a,a.g),a.O)),d=a.U,p=a.g,v=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Kp[0]=L.toString()),L=Kp);for(var M=0;M<L.length;M++){var $=_e(p,L[M],v||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),$s(),GT(a.i,a.u,a.A,a.l,a.R,a.m)}ar.prototype.ca=function(a){a=a.target;const d=this.M;d&&jn(a)==3?d.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const ft=jn(this.g);var d=this.g.Ba();const Vi=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||xm(this.g)))){this.J||ft!=4||d==7||(d==8||0>=Vi?$s(3):$s(2)),Ic(this);var p=this.g.Z();this.X=p;t:if(om(this)){var v=xm(this.g);a="";var L=v.length,M=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),Hs(this);var $="";break t}this.h.i=new l.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(M&&d==L-1)});v.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,KT(this.i,this.u,this.A,this.l,this.R,ft,p),this.o){if(this.T&&!this.K){t:{if(this.g){var we,nt=this.g;if((we=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(we)){var fe=we;break t}}fe=null}if(p=fe)bi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sc(this,p);else{this.o=!1,this.s=3,St(12),Qr(this),Hs(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<$.length;)if(ln=YT(this,$),ln==Ec){ft==4&&(this.s=4,St(14),p=!1),bi(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==im){this.s=4,St(15),bi(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else bi(this.i,this.l,ln,null),Sc(this,ln);if(om(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||$.length!=0||this.h.h||(this.s=1,St(16),p=!1),this.o=this.o&&p,!p)bi(this.i,this.l,$,"[Invalid Chunked Response]"),Qr(this),Hs(this);else if(0<$.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Pc(ht),ht.M=!0,St(11))}}else bi(this.i,this.l,$,null),Sc(this,$);ft==4&&Qr(this),this.o&&!this.J&&(ft==4?Dm(this.j,this):(this.o=!1,Fa(this)))}else pI(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Qr(this),Hs(this)}}}catch{}finally{}};function om(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function YT(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?Ec:(p=Number(d.substring(p,v)),isNaN(p)?im:(v+=1,v+p>d.length?Ec:(d=d.slice(v,v+p),a.C=v+p,d)))}ar.prototype.cancel=function(){this.J=!0,Qr(this)};function Fa(a){a.S=Date.now()+a.I,am(a,a.I)}function am(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ws(y(a.ba,a),d)}function Ic(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ar.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(QT(this.i,this.A),this.L!=2&&($s(),St(17)),Qr(this),this.s=2,Hs(this)):am(this,this.S-a)};function Hs(a){a.j.G==0||a.J||Dm(a.j,a)}function Qr(a){Ic(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Qp(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Sc(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||Ac(p.h,a))){if(!a.K&&Ac(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ka(p),Ha(p);else break e;kc(p),St(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ws(y(p.Za,p),6e3));if(1>=cm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yr(p,11)}else if((a.K||p.g==a)&&Ka(p),!T(d))for(L=p.Da.g.parse(d),d=0;d<L.length;d++){let fe=L[d];if(p.T=fe[0],fe=fe[1],p.G==2)if(fe[0]=="c"){p.K=fe[1],p.ia=fe[2];const ht=fe[3];ht!=null&&(p.la=ht,p.j.info("VER="+p.la));const ft=fe[4];ft!=null&&(p.Aa=ft,p.j.info("SVER="+p.Aa));const Vi=fe[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(v=1.5*Vi,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const ln=a.g;if(ln){const Xa=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xa){var M=v.h;M.g||Xa.indexOf("spdy")==-1&&Xa.indexOf("quic")==-1&&Xa.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(xc(M,M.h),M.h=null))}if(v.D){const Nc=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Nc&&(v.ya=Nc,Ae(v.I,v.D,Nc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var $=a;if(v.qa=Lm(v,v.J?v.ia:null,v.W),$.K){dm(v.h,$);var we=$,nt=v.L;nt&&(we.I=nt),we.B&&(Ic(we),Fa(we)),v.g=$}else Nm(v);0<p.i.length&&Ga(p)}else fe[0]!="stop"&&fe[0]!="close"||Yr(p,7);else p.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Yr(p,7):Rc(p):fe[0]!="noop"&&p.l&&p.l.ta(fe),p.v=0)}}$s(4)}catch{}}var JT=class{constructor(a,d){this.g=a,this.map=d}};function lm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function um(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function cm(a){return a.h?1:a.g?a.g.size:0}function Ac(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function xc(a,d){a.g?a.g.add(d):a.h=d}function dm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}lm.prototype.cancel=function(){if(this.i=hm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return N(a.i)}function ZT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,v=0;v<p;v++)d.push(a[v]);return d}d=[],p=0;for(v in a)d[p++]=a[v];return d}function eI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const v in a)d[p++]=v;return d}}}function fm(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=eI(a),v=ZT(a),L=v.length,M=0;M<L;M++)d.call(void 0,v[M],p&&p[M],a)}var pm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tI(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),L=null;if(0<=v){var M=a[p].substring(0,v);L=a[p].substring(v+1)}else M=a[p];d(M,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Xr){this.h=a.h,Ua(this,a.j),this.o=a.o,this.g=a.g,Ba(this,a.s),this.l=a.l;var d=a.i,p=new Qs;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),mm(this,p),this.m=a.m}else a&&(d=String(a).match(pm))?(this.h=!1,Ua(this,d[1]||"",!0),this.o=Gs(d[2]||""),this.g=Gs(d[3]||"",!0),Ba(this,d[4]),this.l=Gs(d[5]||"",!0),mm(this,d[6]||"",!0),this.m=Gs(d[7]||"")):(this.h=!1,this.i=new Qs(null,this.h))}Xr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Ks(d,gm,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Ks(d,gm,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ks(p,p.charAt(0)=="/"?iI:rI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ks(p,oI)),a.join("")};function Mn(a){return new Xr(a)}function Ua(a,d,p){a.j=p?Gs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ba(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function mm(a,d,p){d instanceof Qs?(a.i=d,aI(a.i,a.h)):(p||(d=Ks(d,sI)),a.i=new Qs(d,a.h))}function Ae(a,d,p){a.i.set(d,p)}function za(a){return Ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ks(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,nI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gm=/[#\/\?@]/g,rI=/[#\?:]/g,iI=/[#\?]/g,sI=/[#\?@]/g,oI=/#/g;function Qs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function lr(a){a.g||(a.g=new Map,a.h=0,a.i&&tI(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Qs.prototype,t.add=function(a,d){lr(this),this.i=null,a=Di(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function ym(a,d){lr(a),d=Di(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function vm(a,d){return lr(a),d=Di(a,d),a.g.has(d)}t.forEach=function(a,d){lr(this),this.g.forEach(function(p,v){p.forEach(function(L){a.call(d,L,v,this)},this)},this)},t.na=function(){lr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const L=a[v];for(let M=0;M<L.length;M++)p.push(d[v])}return p},t.V=function(a){lr(this);let d=[];if(typeof a=="string")vm(this,a)&&(d=d.concat(this.g.get(Di(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},t.set=function(a,d){return lr(this),this.i=null,a=Di(this,a),vm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function _m(a,d,p){ym(a,d),0<p.length&&(a.i=null,a.g.set(Di(a,d),N(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const M=encodeURIComponent(String(v)),$=this.V(v);for(v=0;v<$.length;v++){var L=M;$[v]!==""&&(L+="="+encodeURIComponent(String($[v]))),a.push(L)}}return this.i=a.join("&")};function Di(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function aI(a,d){d&&!a.j&&(lr(a),a.i=null,a.g.forEach(function(p,v){var L=v.toLowerCase();v!=L&&(ym(this,v),_m(this,L,p))},a)),a.j=d}function lI(a,d){const p=new qs;if(l.Image){const v=new Image;v.onload=I(ur,p,"TestLoadImage: loaded",!0,d,v),v.onerror=I(ur,p,"TestLoadImage: error",!1,d,v),v.onabort=I(ur,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=I(ur,p,"TestLoadImage: timeout",!1,d,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function uI(a,d){const p=new qs,v=new AbortController,L=setTimeout(()=>{v.abort(),ur(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(M=>{clearTimeout(L),M.ok?ur(p,"TestPingServer: ok",!0,d):ur(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),ur(p,"TestPingServer: error",!1,d)})}function ur(a,d,p,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(p)}catch{}}function cI(){this.g=new HT}function dI(a,d,p){const v=p||"";try{fm(a,function(L,M){let $=L;c(L)&&($=gc(L)),d.push(v+M+"="+encodeURIComponent($))})}catch(L){throw d.push(v+"type="+encodeURIComponent("_badmap")),L}}function $a(a){this.l=a.Ub||null,this.j=a.eb||!1}C($a,yc),$a.prototype.g=function(){return new Wa(this.l,this.j)},$a.prototype.i=function(a){return function(){return a}}({});function Wa(a,d){Xe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Wa,Xe),t=Wa.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function wm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Xs(this):Ys(this),this.readyState==3&&wm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Xs(this))},t.Qa=function(a){this.g&&(this.response=a,Xs(this))},t.ga=function(){this.g&&Xs(this)};function Xs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ys(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Em(a){let d="";return P(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function Cc(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Em(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ae(a,d,p))}function Ve(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ve,Xe);var hI=/^https?$/i,fI=["POST","PUT"];t=Ve.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wc.g(),this.v=this.o?Xp(this.o):Xp(wc),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(M){Tm(this,M);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)p.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())p.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fI,d,void 0))||v||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of p)this.g.setRequestHeader(M,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Am(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){Tm(this,M)}};function Tm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Im(a),qa(a)}function Im(a){a.A||(a.A=!0,It(a,"complete"),It(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,It(this,"complete"),It(this,"abort"),qa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qa(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Sm(this):this.bb())},t.bb=function(){Sm(this)};function Sm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||jn(a)!=4||a.Z()!=2)){if(a.u&&jn(a)==4)Hp(a.Ea,0,a);else if(It(a,"readystatechange"),jn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=$===0){var L=String(a.D).match(pm)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),v=!hI.test(L?L.toLowerCase():"")}p=v}if(p)It(a,"complete"),It(a,"success");else{a.m=6;try{var M=2<jn(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",Im(a)}}finally{qa(a)}}}}function qa(a,d){if(a.g){Am(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||It(a,"ready");try{p.onreadystatechange=v}catch{}}}function Am(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function jn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),qT(d)}};function xm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pI(a){const d={};a=(a.g&&2<=jn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(T(a[v]))continue;var p=k(a[v]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=d[L]||[];d[L]=M,M.push(p)}_(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Cm(a){this.Aa=0,this.i=[],this.j=new qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Js("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Js("baseRetryDelayMs",5e3,a),this.cb=Js("retryDelaySeedMs",1e4,a),this.Wa=Js("forwardChannelMaxRetries",2,a),this.wa=Js("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new lm(a&&a.concurrentRequestLimit),this.Da=new cI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cm.prototype,t.la=8,t.G=1,t.connect=function(a,d,p,v){St(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Lm(this,null,this.W),Ga(this)};function Rc(a){if(Rm(a),a.G==3){var d=a.U++,p=Mn(a.I);if(Ae(p,"SID",a.K),Ae(p,"RID",d),Ae(p,"TYPE","terminate"),Zs(a,p),d=new ar(a,a.j,d),d.L=2,d.v=za(Mn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=Mm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Fa(d)}Vm(a)}function Ha(a){a.g&&(Pc(a),a.g.cancel(),a.g=null)}function Rm(a){Ha(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ga(a){if(!um(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ie||J(),z||(Ie(),z=!0),Y.add(d,a),a.B=0}}function mI(a,d){return cm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ws(y(a.Ga,a,d),Om(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new ar(this,this.j,a);let M=this.o;if(this.S&&(M?(M=g(M),E(M,this.S)):M=this.S),this.m!==null||this.O||(L.H=M,M=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Pm(this,L,d),p=Mn(this.I),Ae(p,"RID",a),Ae(p,"CVER",22),this.D&&Ae(p,"X-HTTP-Session-Id",this.D),Zs(this,p),M&&(this.O?d="headers="+encodeURIComponent(String(Em(M)))+"&"+d:this.m&&Cc(p,this.m,M)),xc(this.h,L),this.Ua&&Ae(p,"TYPE","init"),this.P?(Ae(p,"$req",d),Ae(p,"SID","null"),L.T=!0,Tc(L,p,null)):Tc(L,p,d),this.G=2}}else this.G==3&&(a?km(this,a):this.i.length==0||um(this.h)||km(this))};function km(a,d){var p;d?p=d.l:p=a.U++;const v=Mn(a.I);Ae(v,"SID",a.K),Ae(v,"RID",p),Ae(v,"AID",a.T),Zs(a,v),a.m&&a.o&&Cc(v,a.m,a.o),p=new ar(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Pm(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),xc(a.h,p),Tc(p,v,d)}function Zs(a,d){a.H&&P(a.H,function(p,v){Ae(d,v,p)}),a.l&&fm({},function(p,v){Ae(d,v,p)})}function Pm(a,d,p){p=Math.min(a.i.length,p);var v=a.l?y(a.l.Na,a.l,a):null;e:{var L=a.i;let M=-1;for(;;){const $=["count="+p];M==-1?0<p?(M=L[0].g,$.push("ofs="+M)):M=0:$.push("ofs="+M);let we=!0;for(let nt=0;nt<p;nt++){let fe=L[nt].g;const ht=L[nt].map;if(fe-=M,0>fe)M=Math.max(0,L[nt].g-100),we=!1;else try{dI(ht,$,"req"+fe+"_")}catch{v&&v(ht)}}if(we){v=$.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,v}function Nm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ie||J(),z||(Ie(),z=!0),Y.add(d,a),a.v=0}}function kc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ws(y(a.Fa,a),Om(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,bm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ws(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Ha(this),bm(this))};function Pc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function bm(a){a.g=new ar(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Mn(a.qa);Ae(d,"RID","rpc"),Ae(d,"SID",a.K),Ae(d,"AID",a.T),Ae(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ae(d,"TO",a.ja),Ae(d,"TYPE","xmlhttp"),Zs(a,d),a.m&&a.o&&Cc(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=za(Mn(d)),p.m=null,p.P=!0,sm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Ha(this),kc(this),St(19))};function Ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Dm(a,d){var p=null;if(a.g==d){Ka(a),Pc(a),a.g=null;var v=2}else if(Ac(a.h,d))p=d.D,dm(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var L=a.B;v=La(),It(v,new tm(v,p)),Ga(a)}else Nm(a);else if(L=d.s,L==3||L==0&&0<d.X||!(v==1&&mI(a,d)||v==2&&kc(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),L){case 1:Yr(a,5);break;case 4:Yr(a,10);break;case 3:Yr(a,6);break;default:Yr(a,2)}}}function Om(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function Yr(a,d){if(a.j.info("Error code "+d),d==2){var p=y(a.fb,a),v=a.Xa;const L=!v;v=new Xr(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ua(v,"https"),za(v),L?lI(v.toString(),p):uI(v.toString(),p)}else St(2);a.G=0,a.l&&a.l.sa(d),Vm(a),Rm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Vm(a){if(a.G=0,a.ka=[],a.l){const d=hm(a.h);(d.length!=0||a.i.length!=0)&&(D(a.ka,d),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Lm(a,d,p){var v=p instanceof Xr?Mn(p):new Xr(p);if(v.g!="")d&&(v.g=d+"."+v.g),Ba(v,v.s);else{var L=l.location;v=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var M=new Xr(null);v&&Ua(M,v),d&&(M.g=d),L&&Ba(M,L),p&&(M.l=p),v=M}return p=a.D,d=a.ya,p&&d&&Ae(v,p,d),Ae(v,"VER",a.la),Zs(a,v),v}function Mm(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ve(new $a({eb:p})):new Ve(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jm(){}t=jm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qa(){}Qa.prototype.g=function(a,d){return new Wt(a,d)};function Wt(a,d){Xe.call(this),this.g=new Cm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!T(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Oi(this)}C(Wt,Xe),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Rc(this.g)},Wt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=gc(a),a=p);d.i.push(new JT(d.Ya++,a)),d.G==3&&Ga(d)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Rc(this.g),delete this.g,Wt.aa.N.call(this)};function Fm(a){vc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}C(Fm,vc);function Um(){_c.call(this),this.status=1}C(Um,_c);function Oi(a){this.g=a}C(Oi,jm),Oi.prototype.ua=function(){It(this.g,"a")},Oi.prototype.ta=function(a){It(this.g,new Fm(a))},Oi.prototype.sa=function(a){It(this.g,new Um)},Oi.prototype.ra=function(){It(this.g,"b")},Qa.prototype.createWebChannel=Qa.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,ZE=function(){return new Qa},JE=function(){return La()},YE=Kr,kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ma.NO_ERROR=0,Ma.TIMEOUT=8,Ma.HTTP_ERROR=6,Ll=Ma,nm.COMPLETE="complete",XE=nm,Yp.EventType=zs,zs.OPEN="a",zs.CLOSE="b",zs.ERROR="c",zs.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,go=Yp,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,QE=Ve}).apply(typeof ml<"u"?ml:typeof self<"u"?self:typeof window<"u"?window:{});const Oy="@firebase/firestore";/**
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
 */const yi=new Bf("@firebase/firestore");function lo(){return yi.logLevel}function H(t,...e){if(yi.logLevel<=le.DEBUG){const n=e.map(Zf);yi.debug(`Firestore (${Os}): ${t}`,...n)}}function rr(t,...e){if(yi.logLevel<=le.ERROR){const n=e.map(Zf);yi.error(`Firestore (${Os}): ${t}`,...n)}}function ys(t,...e){if(yi.logLevel<=le.WARN){const n=e.map(Zf);yi.warn(`Firestore (${Os}): ${t}`,...n)}}function Zf(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw rr(e),new Error(e)}function ve(t,e){t||ee()}function ne(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class e0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class P1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class N1{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Xn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new e0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new yt(e)}}class b1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class D1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new b1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ve(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new O1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function L1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class t0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=L1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ne(0,0))}static max(){return new te(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ra{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ra.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ra?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends ra{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const M1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends ra{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return M1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ee.fromString(e))}static fromName(e){return new X(Ee.fromString(e).popFirst(5))}static empty(){return new X(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ee(e.slice()))}}function j1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new Mr(i,X.empty(),e)}function F1(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(te.min(),X.empty(),-1)}static max(){return new Mr(te.max(),X.empty(),-1)}}function U1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const B1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class z1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xa(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==B1)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ca(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ep{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ep.oe=-1;function Qu(t){return t==null}function vu(t){return t===0&&1/t==-1/0}function W1(t){return typeof t=="number"&&Number.isInteger(t)&&!vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function n0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new at(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class r0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new r0("Invalid base64 string: "+s):s}}(e);return new ut(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const q1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(ve(!!t),typeof t=="string"){let e=0;const n=q1.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vi(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function Xu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tp(t){const e=t.mapValue.fields.__previous_value__;return Xu(e)?tp(e):e}function ia(t){const e=jr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class H1{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class sa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yl={mapValue:{}};function _i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xu(t)?4:K1(t)?9007199254740991:G1(t)?10:11:ee()}function On(t,e){if(t===e)return!0;const n=_i(t);if(n!==_i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ia(t).isEqual(ia(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jr(i.timestampValue),l=jr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return vi(i.bytesValue).isEqual(vi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=je(i.doubleValue),l=je(s.doubleValue);return o===l?vu(o)===vu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Vy(o)!==Vy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!On(o[u],l[u])))return!1;return!0}(t,e);default:return ee()}}function oa(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=_i(t),r=_i(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=je(s.integerValue||s.doubleValue),u=je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return My(t.timestampValue,e.timestampValue);case 4:return My(ia(t),ia(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=vi(s),u=vi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=pe(l[c],u[c]);if(h!==0)return h}return pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=pe(je(s.latitude),je(o.latitude));return l!==0?l:pe(je(s.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return jy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,h;const m=s.fields||{},y=o.fields||{},I=(l=m.value)===null||l===void 0?void 0:l.arrayValue,C=(u=y.value)===null||u===void 0?void 0:u.arrayValue,N=pe(((c=I==null?void 0:I.values)===null||c===void 0?void 0:c.length)||0,((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0);return N!==0?N:jy(I,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===yl.mapValue&&o===yl.mapValue)return 0;if(s===yl.mapValue)return 1;if(o===yl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let m=0;m<u.length&&m<h.length;++m){const y=pe(u[m],h[m]);if(y!==0)return y;const I=_s(l[u[m]],c[h[m]]);if(I!==0)return I}return pe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ee()}}function My(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=jr(t),r=jr(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function jy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=_s(n[i],r[i]);if(s)return s}return pe(n.length,r.length)}function ws(t){return Ph(t)}function Ph(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ph(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ph(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function _u(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nh(t){return!!t&&"integerValue"in t}function np(t){return!!t&&"arrayValue"in t}function Fy(t){return!!t&&"nullValue"in t}function Uy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ml(t){return!!t&&"mapValue"in t}function G1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function K1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(n)}setAll(e){let n=st.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Po(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(Po(this.value))}}function i0(t){const e=[];return xi(t.fields,(n,r)=>{const i=new st([n]);if(Ml(r)){const s=i0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,te.min(),te.min(),te.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,te.min(),te.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,te.min(),te.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Es{constructor(e,n){this.position=e,this.inclusive=n}}function By(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function Q1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class s0{}class We extends s0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Y1(e,n,r):n==="array-contains"?new eP(e,r):n==="in"?new tP(e,r):n==="not-in"?new nP(e,r):n==="array-contains-any"?new rP(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new J1(e,r):new Z1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&_i(this.value)===_i(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends s0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new _n(e,n)}matches(e){return o0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function o0(t){return t.op==="and"}function a0(t){return X1(t)&&o0(t)}function X1(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function bh(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(a0(t))return t.filters.map(e=>bh(e)).join(",");{const e=t.filters.map(n=>bh(n)).join(",");return`${t.op}(${e})`}}function l0(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(t,e):t instanceof _n?function(r,i){return i instanceof _n&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&l0(o,i.filters[l]),!0):!1}(t,e):void ee()}function u0(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(u0).join(" ,")+"}"}(t):"Filter"}class Y1 extends We{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class J1 extends We{constructor(e,n){super(e,"in",n),this.keys=c0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Z1 extends We{constructor(e,n){super(e,"not-in",n),this.keys=c0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function c0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class eP extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return np(n)&&oa(n.arrayValue,this.value)}}class tP extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oa(this.value.arrayValue,n)}}class nP extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(oa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oa(this.value.arrayValue,n)}}class rP extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!np(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>oa(this.value.arrayValue,r))}}/**
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
 */class iP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function $y(t,e=null,n=[],r=[],i=null,s=null,o=null){return new iP(t,e,n,r,i,s,o)}function rp(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ws(r)).join(",")),e.ue=n}return e.ue}function ip(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Q1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!l0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zy(t.startAt,e.startAt)&&zy(t.endAt,e.endAt)}function Dh(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ci{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sP(t,e,n,r,i,s,o,l){return new Ci(t,e,n,r,i,s,o,l)}function sp(t){return new Ci(t)}function Wy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function op(t){return t.collectionGroup!==null}function ls(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(st.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new aa(s,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new aa(st.keyField(),r))}return e.ce}function Nn(t){const e=ne(t);return e.le||(e.le=oP(e,ls(t))),e.le}function oP(t,e){if(t.limitType==="F")return $y(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new aa(i.field,s)});const n=t.endAt?new Es(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Es(t.startAt.position,t.startAt.inclusive):null;return $y(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oh(t,e){const n=t.filters.concat([e]);return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wu(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yu(t,e){return ip(Nn(t),Nn(e))&&t.limitType===e.limitType}function d0(t){return`${rp(Nn(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>u0(i)).join(", ")}]`),Qu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ws(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ws(i)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function Ju(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=By(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ls(r),i)||r.endAt&&!function(o,l,u){const c=By(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ls(r),i))}(t,e)}function aP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function h0(t){return(e,n)=>{let r=!1;for(const i of ls(t)){const s=lP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lP(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?_s(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return n0(this.inner)}size(){return this.innerSize}}/**
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
 */const uP=new Oe(X.comparator);function ir(){return uP}const f0=new Oe(X.comparator);function yo(...t){let e=f0;for(const n of t)e=e.insert(n.key,n);return e}function p0(t){let e=f0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ii(){return No()}function m0(){return No()}function No(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const cP=new Oe(X.comparator),dP=new at(X.comparator);function ae(...t){let e=dP;for(const n of t)e=e.add(n);return e}const hP=new at(pe);function fP(){return hP}/**
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
 */function ap(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vu(e)?"-0":e}}function g0(t){return{integerValue:""+t}}function y0(t,e){return W1(e)?g0(e):ap(t,e)}/**
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
 */class Zu{constructor(){this._=void 0}}function pP(t,e,n){return t instanceof la?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xu(s)&&(s=tp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ts?_0(t,e):t instanceof ua?w0(t,e):function(i,s){const o=v0(i,s),l=qy(o)+qy(i.Pe);return Nh(o)&&Nh(i.Pe)?g0(l):ap(i.serializer,l)}(t,e)}function mP(t,e,n){return t instanceof Ts?_0(t,e):t instanceof ua?w0(t,e):n}function v0(t,e){return t instanceof ca?function(r){return Nh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class la extends Zu{}class Ts extends Zu{constructor(e){super(),this.elements=e}}function _0(t,e){const n=E0(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class ua extends Zu{constructor(e){super(),this.elements=e}}function w0(t,e){let n=E0(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class ca extends Zu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function qy(t){return je(t.integerValue||t.doubleValue)}function E0(t){return np(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class lp{constructor(e,n){this.field=e,this.transform=n}}function gP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ts&&i instanceof Ts||r instanceof ua&&i instanceof ua?vs(r.elements,i.elements,On):r instanceof ca&&i instanceof ca?On(r.Pe,i.Pe):r instanceof la&&i instanceof la}(t.transform,e.transform)}class yP{constructor(e,n){this.version=e,this.transformResults=n}}class Ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ec{}function T0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tc(t.key,Ct.none()):new Ra(t.key,t.data,Ct.none());{const n=t.data,r=Vt.empty();let i=new at(st.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hr(t.key,r,new Gt(i.toArray()),Ct.none())}}function vP(t,e,n){t instanceof Ra?function(i,s,o){const l=i.value.clone(),u=Gy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(i,s,o){if(!jl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Gy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(I0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof Ra?function(s,o,l,u){if(!jl(s.precondition,o))return l;const c=s.value.clone(),h=Ky(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(s,o,l,u){if(!jl(s.precondition,o))return l;const c=Ky(s.fieldTransforms,u,o),h=o.data;return h.setAll(I0(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return jl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function _P(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=v0(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function Hy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vs(r,i,(s,o)=>gP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends ec{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends ec{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function I0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gy(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,mP(o,l,n[i]))}return r}function Ky(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,pP(s,o,e))}return r}class tc extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wP extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class EP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=m0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=T0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,(n,r)=>Hy(n,r))&&vs(this.baseMutations,e.baseMutations,(n,r)=>Hy(n,r))}}class up{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=function(){return cP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new up(e,n,r,i)}}/**
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
 */class TP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ce;function SP(t){switch(t){default:return ee();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function S0(t){if(t===void 0)return rr("GRPC error has no .code"),j.UNKNOWN;switch(t){case ze.OK:return j.OK;case ze.CANCELLED:return j.CANCELLED;case ze.UNKNOWN:return j.UNKNOWN;case ze.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case ze.INTERNAL:return j.INTERNAL;case ze.UNAVAILABLE:return j.UNAVAILABLE;case ze.UNAUTHENTICATED:return j.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case ze.NOT_FOUND:return j.NOT_FOUND;case ze.ALREADY_EXISTS:return j.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return j.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case ze.ABORTED:return j.ABORTED;case ze.OUT_OF_RANGE:return j.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return j.UNIMPLEMENTED;case ze.DATA_LOSS:return j.DATA_LOSS;default:return ee()}}(ce=ze||(ze={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function AP(){return new TextEncoder}/**
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
 */const xP=new ui([4294967295,4294967295],0);function Qy(t){const e=AP().encode(t),n=new KE;return n.update(e),new Uint8Array(n.digest())}function Xy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ui([n,r],0),new ui([i,s],0)]}class cp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vo(`Invalid padding: ${n}`);if(r<0)throw new vo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ui.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ui.fromNumber(r)));return i.compare(xP)===1&&(i=new ui([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Qy(e),[r,i]=Xy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new cp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Qy(e),[r,i]=Xy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ka.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nc(te.min(),i,new Oe(pe),ir(),ae())}}class ka{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ka(r,n,ae(),ae(),ae())}}/**
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
 */class Fl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class A0{constructor(e,n){this.targetId=e,this.me=n}}class x0{constructor(e,n,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Yy{constructor(){this.fe=0,this.ge=Zy(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ae(),n=ae(),r=ae();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new ka(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Zy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class CP{constructor(e){this.Le=e,this.Be=new Map,this.ke=ir(),this.qe=Jy(),this.Qe=new Oe(pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Dh(s))if(r===0){const o=new X(s.path);this.Ue(n,o,_t.newNoDocument(o,te.min()))}else ve(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=vi(r).toUint8Array()}catch(u){if(u instanceof r0)return ys("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new cp(o,i,s)}catch(u){return ys(u instanceof vo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Dh(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_t.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ae();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new nc(e,n,this.Qe,this.ke,r);return this.ke=ir(),this.qe=Jy(),this.Qe=new Oe(pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Yy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Yy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Jy(){return new Oe(X.comparator)}function Zy(){return new Oe(X.comparator)}const RP={asc:"ASCENDING",desc:"DESCENDING"},kP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PP={and:"AND",or:"OR"};class NP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vh(t,e){return t.useProto3Json||Qu(e)?e:{value:e}}function Eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bP(t,e){return Eu(t,e.toTimestamp())}function bn(t){return ve(!!t),te.fromTimestamp(function(n){const r=jr(n);return new Ne(r.seconds,r.nanos)}(t))}function dp(t,e){return Lh(t,e).canonicalString()}function Lh(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function R0(t){const e=Ee.fromString(t);return ve(D0(e)),e}function Mh(t,e){return dp(t.databaseId,e.path)}function fd(t,e){const n=R0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(P0(n))}function k0(t,e){return dp(t.databaseId,e)}function DP(t){const e=R0(t);return e.length===4?Ee.emptyPath():P0(e)}function jh(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function P0(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ev(t,e,n){return{name:Mh(t,e),fields:n.value.mapValue.fields}}function OP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ve(h===void 0||typeof h=="string"),ut.fromBase64String(h||"")):(ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ut.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?j.UNKNOWN:S0(c.code);return new W(h,c.message||"")}(o);n=new x0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fd(t,r.document.name),s=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):te.min(),l=new Vt({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Fl(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fd(t,r.document),s=r.readTime?bn(r.readTime):te.min(),o=_t.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fd(t,r.document),s=r.removedTargetIds||[];n=new Fl([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new IP(i,s),l=r.targetId;n=new A0(l,o)}}return n}function VP(t,e){let n;if(e instanceof Ra)n={update:ev(t,e.key,e.value)};else if(e instanceof tc)n={delete:Mh(t,e.key)};else if(e instanceof Hr)n={update:ev(t,e.key,e.data),updateMask:WP(e.fieldMask)};else{if(!(e instanceof wP))return ee();n={verify:Mh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof la)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ts)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ua)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:bP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function LP(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?bn(i.updateTime):bn(s);return o.isEqual(te.min())&&(o=bn(s)),new yP(o,i.transformResults||[])}(n,e))):[]}function MP(t,e){return{documents:[k0(t,e.path)]}}function jP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k0(t,i);const s=function(c){if(c.length!==0)return b0(_n.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(y){return{field:ji(y.field),direction:BP(y.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function FP(t){let e=DP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(m){const y=N0(m);return y instanceof _n&&a0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(C){return new aa(Fi(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Qu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,I=m.values||[];return new Es(I,y)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const y=!m.before,I=m.values||[];return new Es(I,y)}(n.endAt)),sP(e,i,o,s,l,"F",u,c)}function UP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function N0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fi(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fi(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fi(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fi(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Fi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>N0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function BP(t){return RP[t]}function zP(t){return kP[t]}function $P(t){return PP[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Fi(t){return st.fromServerFormat(t.fieldPath)}function b0(t){return t instanceof We?function(n){if(n.op==="=="){if(Uy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NAN"}};if(Fy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NAN"}};if(Fy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(n.field),op:zP(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(i=>b0(i));return r.length===1?r[0]:{compositeFilter:{op:$P(n.op),filters:r}}}(t):ee()}function WP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function D0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Sr{constructor(e,n,r,i,s=te.min(),o=te.min(),l=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qP{constructor(e){this.ct=e}}function HP(t){const e=FP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wu(e,e.limit,"L"):e}/**
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
 */class GP{constructor(){this.un=new KP}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Mr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class KP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new at(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new at(Ee.comparator)).toArray()}}/**
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
 */class QP{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class YP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bo(r.mutation,i,Gt.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=ii();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=yo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ii();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=ir();const o=No(),l=function(){return No()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Hr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),bo(h.mutation,c,h.mutation.getFieldMask(),Ne.now())):o.set(c.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var m;return l.set(c,new XP(h,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=No();let i=new Oe((o,l)=>o-l),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Gt.empty();h=l.applyToLocalView(c,h),r.set(u,h);const m=(i.get(l.batchId)||ae()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,m=m0();h.forEach(y=>{if(!s.has(y)){const I=T0(n.get(y),r.get(y));I!==null&&m.set(y,I),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):op(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(ii());let l=-1,u=s;return o.next(c=>U.forEach(c,(h,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(y=>{u=u.insert(h,y)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ae())).next(h=>({batchId:l,changes:p0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=yo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=yo();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(m,y){return new Ci(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,_t.newInvalidDocument(h)))});let l=yo();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&bo(h.mutation,c,Gt.empty(),Ne.now()),Ju(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class JP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:HP(i.bundledQuery),readTime:bn(i.readTime)}}(n)),U.resolve()}}/**
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
 */class ZP{constructor(){this.overlays=new Oe(X.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ii();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=ii(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ii(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=ii(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TP(n,r));let s=this.Ir.get(n);s===void 0&&(s=ae(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class eN{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class hp{constructor(){this.Tr=new at(Ye.Er),this.dr=new at(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Ee([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Ee([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=ae();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||pe(e.wr,n.wr)}static Ar(e,n){return pe(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
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
 */class tN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Ye.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(pe);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new X(s),0);let l=new at(pe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nN{constructor(e){this.Mr=e,this.docs=function(){return new Oe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=ir();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ir();const o=n.path,l=new X(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||U1(F1(h),r)<=0||(i.has(h.key)||Ju(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rN(this)}getSize(e){return U.resolve(this.size)}}class rN extends QP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class iN{constructor(e){this.persistence=e,this.Nr=new Vs(n=>rp(n),ip),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hp,this.targetCount=0,this.kr=Is.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Is(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class sN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ep(0),this.Kr=!1,this.Kr=!0,this.$r=new eN,this.referenceDelegate=e(this),this.Ur=new iN(this),this.indexManager=new GP,this.remoteDocumentCache=function(i){return new nN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qP(n),this.Gr=new JP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new tN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new oN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class oN extends z1{constructor(e){super(),this.currentSequenceNumber=e}}class fp{constructor(e){this.persistence=e,this.Jr=new hp,this.Yr=null}static Zr(e){return new fp(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class pp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new pp(e,n.fromCache,r,i)}}/**
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
 */class aN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return tC()?8:$1(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new aN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(lo()<=le.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(lo()<=le.DEBUG&&H("QueryEngine","Query:",Mi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(lo()<=le.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):U.resolve())}Yi(e,n){if(Wy(n))return U.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wu(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,wu(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Wy(n)||i.isEqual(te.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(lo()<=le.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mi(n)),this.rs(e,o,n,j1(i,-1)).next(l=>l))})}ts(e,n){let r=new at(h0(e));return n.forEach((i,s)=>{Ju(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return lo()<=le.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Mr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class uN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Oe(pe),this._s=new Vs(s=>rp(s),ip),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function cN(t,e,n,r){return new uN(t,e,n,r)}async function O0(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ae();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function dN(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const m=c.batch,y=m.keys();let I=U.resolve();return y.forEach(C=>{I=I.next(()=>h.getEntry(u,C)).next(N=>{const D=c.docVersions.get(C);ve(D!==null),N.version.compareTo(D)<0&&(m.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),h.addEntry(N)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function V0(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function hN(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((h,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,m)));let I=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(ut.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(h.resumeToken,r)),i=i.insert(m,I),function(N,D,S){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,I,h)&&l.push(n.Ur.updateTargetData(s,I))});let u=ir(),c=ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(fN(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(te.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function fN(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ir();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function pN(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mN(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Fh(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ca(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function tv(t,e,n){const r=ne(t);let i=te.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const m=ne(u),y=m._s.get(h);return y!==void 0?U.resolve(m.os.get(y)):m.Ur.getTargetData(c,h)}(r,o,Nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:ae())).next(l=>(gN(r,aP(e),l),{documents:l,Ts:s})))}function gN(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class nv{constructor(){this.activeTargetIds=fP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yN{constructor(){this.so=new nv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new nv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vN{_o(e){}shutdown(){}}/**
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
 */class rv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vl=null;function pd(){return vl===null?vl=function(){return 268435456+Math.round(2147483648*Math.random())}():vl++,"0x"+vl.toString(16)}/**
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
 */const _N={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const gt="WebChannelConnection";class EN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=pd(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw ys("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=_N[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=pd();return new Promise((o,l)=>{const u=new QE;u.setWithCredentials(!0),u.listenOnce(XE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ll.NO_ERROR:const h=u.getResponseJson();H(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Ll.TIMEOUT:H(gt,`RPC '${e}' ${s} timed out`),l(new W(j.DEADLINE_EXCEEDED,"Request time out"));break;case Ll.HTTP_ERROR:const m=u.getStatus();if(H(gt,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const I=y==null?void 0:y.error;if(I&&I.status&&I.message){const C=function(D){const S=D.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(S)>=0?S:j.UNKNOWN}(I.status);l(new W(C,I.message))}else l(new W(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(j.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H(gt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(gt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=pd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZE(),l=JE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");H(gt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const m=o.createWebChannel(h,u);let y=!1,I=!1;const C=new wN({Io:D=>{I?H(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(y||(H(gt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),H(gt,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},To:()=>m.close()}),N=(D,S,T)=>{D.listen(S,A=>{try{T(A)}catch(O){setTimeout(()=>{throw O},0)}})};return N(m,go.EventType.OPEN,()=>{I||(H(gt,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),N(m,go.EventType.CLOSE,()=>{I||(I=!0,H(gt,`RPC '${e}' stream ${i} transport closed`),C.So())}),N(m,go.EventType.ERROR,D=>{I||(I=!0,ys(gt,`RPC '${e}' stream ${i} transport errored:`,D),C.So(new W(j.UNAVAILABLE,"The operation could not be completed")))}),N(m,go.EventType.MESSAGE,D=>{var S;if(!I){const T=D.data[0];ve(!!T);const A=T,O=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(O){H(gt,`RPC '${e}' stream ${i} received error:`,O);const R=O.status;let P=function(w){const E=ze[w];if(E!==void 0)return S0(E)}(R),_=O.message;P===void 0&&(P=j.INTERNAL,_="Unknown error status: "+R+" with message "+O.message),I=!0,C.So(new W(P,_)),m.close()}else H(gt,`RPC '${e}' stream ${i} received:`,T),C.bo(T)}}),N(l,YE.STAT_EVENT,D=>{D.stat===kh.PROXY?H(gt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===kh.NOPROXY&&H(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function md(){return typeof document<"u"?document:null}/**
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
 */function rc(t){return new NP(t,!0)}/**
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
 */class L0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class M0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new L0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TN extends M0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=OP(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?bn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Dh(u)?{documents:MP(s,u)}:{query:jP(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=C0(s,o.resumeToken);const c=Vh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Eu(s,o.snapshotVersion.toTimestamp());const c=Vh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=UP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jh(this.serializer),n.removeTarget=e,this.a_(n)}}class IN extends M0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=LP(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>VP(this.serializer,r))};this.a_(n)}}/**
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
 */class SN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Lh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Lh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class AN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(rr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class xN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ri(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.L_.add(4),await Pa(c),c.q_.set("Unknown"),c.L_.delete(4),await ic(c)}(this))})}),this.q_=new AN(r,i)}}async function ic(t){if(Ri(t))for(const e of t.B_)await e(!0)}async function Pa(t){for(const e of t.B_)await e(!1)}function j0(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),vp(n)?yp(n):Ls(n).r_()&&gp(n,e))}function mp(t,e){const n=ne(t),r=Ls(n);n.N_.delete(e),r.r_()&&F0(n,e),n.N_.size===0&&(r.r_()?r.o_():Ri(n)&&n.q_.set("Unknown"))}function gp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ls(t).A_(e)}function F0(t,e){t.Q_.xe(e),Ls(t).R_(e)}function yp(t){t.Q_=new CP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ls(t).start(),t.q_.v_()}function vp(t){return Ri(t)&&!Ls(t).n_()&&t.N_.size>0}function Ri(t){return ne(t).L_.size===0}function U0(t){t.Q_=void 0}async function CN(t){t.q_.set("Online")}async function RN(t){t.N_.forEach((e,n)=>{gp(t,e)})}async function kN(t,e){U0(t),vp(t)?(t.q_.M_(e),yp(t)):t.q_.set("Unknown")}async function PN(t,e,n){if(t.q_.set("Online"),e instanceof x0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tu(t,r)}else if(e instanceof Fl?t.Q_.Ke(e):e instanceof A0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await V0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(ut.EMPTY_BYTE_STRING,h.snapshotVersion)),F0(s,u);const m=new Sr(h.target,u,c,h.sequenceNumber);gp(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Tu(t,r)}}async function Tu(t,e,n){if(!Ca(e))throw e;t.L_.add(1),await Pa(t),t.q_.set("Offline"),n||(n=()=>V0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ic(t)})}function B0(t,e){return e().catch(n=>Tu(t,n,e))}async function sc(t){const e=ne(t),n=Fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;NN(e);)try{const i=await pN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,bN(e,i)}catch(i){await Tu(e,i)}z0(e)&&$0(e)}function NN(t){return Ri(t)&&t.O_.length<10}function bN(t,e){t.O_.push(e);const n=Fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function z0(t){return Ri(t)&&!Fr(t).n_()&&t.O_.length>0}function $0(t){Fr(t).start()}async function DN(t){Fr(t).p_()}async function ON(t){const e=Fr(t);for(const n of t.O_)e.m_(n.mutations)}async function VN(t,e,n){const r=t.O_.shift(),i=up.from(r,e,n);await B0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sc(t)}async function LN(t,e){e&&Fr(t).V_&&await async function(r,i){if(function(o){return SP(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Fr(r).s_(),await B0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await sc(r)}}(t,e),z0(t)&&$0(t)}async function iv(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Ri(n);n.L_.add(3),await Pa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ic(n)}async function MN(t,e){const n=ne(t);e?(n.L_.delete(2),await ic(n)):e||(n.L_.add(2),await Pa(n),n.q_.set("Unknown"))}function Ls(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new TN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:CN.bind(null,t),Ro:RN.bind(null,t),mo:kN.bind(null,t),d_:PN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),vp(t)?yp(t):t.q_.set("Unknown")):(await t.K_.stop(),U0(t))})),t.K_}function Fr(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new IN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DN.bind(null,t),mo:LN.bind(null,t),f_:ON.bind(null,t),g_:VN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await sc(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class _p{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new _p(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wp(t,e){if(rr("AsyncQueue",`${e}: ${t}`),Ca(t))return new W(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=yo(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class sv{constructor(){this.W_=new Oe(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ss{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ss(e,n,us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class FN{constructor(){this.queries=ov(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=ov(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(j.ABORTED,"Firestore shutting down"))}}function ov(){return new Vs(t=>d0(t),Yu)}async function W0(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new jN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=wp(o,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Ep(n)}async function q0(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UN(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Ep(n)}function BN(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Ep(t){t.Y_.forEach(e=>{e.next()})}var Uh,av;(av=Uh||(Uh={})).ea="default",av.Cache="cache";class H0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Uh.Cache}}/**
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
 */class G0{constructor(e){this.key=e}}class K0{constructor(e){this.key=e}}class zN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ae(),this.mutatedKeys=ae(),this.Aa=h0(e),this.Ra=new us(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new sv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,m)=>{const y=i.get(h),I=Ju(this.query,m)?m:null,C=!!y&&this.mutatedKeys.has(y.key),N=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;y&&I?y.data.isEqual(I.data)?C!==N&&(r.track({type:3,doc:I}),D=!0):this.ga(y,I)||(r.track({type:2,doc:I}),D=!0,(u&&this.Aa(I,u)>0||c&&this.Aa(I,c)<0)&&(l=!0)):!y&&I?(r.track({type:0,doc:I}),D=!0):y&&!I&&(r.track({type:1,doc:y}),D=!0,(u||c)&&(l=!0)),D&&(I?(o=o.add(I),s=N?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,m)=>function(I,C){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return N(I)-N(C)}(h.type,m.type)||this.Aa(h.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Ss(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new sv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ae(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new K0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new G0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ae();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ss.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class $N{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class WN{constructor(e){this.key=e,this.va=!1}}class qN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vs(l=>d0(l),Yu),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(X.comparator),this.Na=new Map,this.La=new hp,this.Ba={},this.ka=new Map,this.qa=Is.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function HN(t,e,n=!0){const r=eT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Q0(r,e,n,!0),i}async function GN(t,e){const n=eT(t);await Q0(n,e,!0,!1)}async function Q0(t,e,n,r){const i=await mN(t.localStore,Nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await KN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&j0(t.remoteStore,i),l}async function KN(t,e,n,r,i){t.Ka=(m,y,I)=>async function(N,D,S,T){let A=D.view.ma(S);A.ns&&(A=await tv(N.localStore,D.query,!1).then(({documents:_})=>D.view.ma(_,A)));const O=T&&T.targetChanges.get(D.targetId),R=T&&T.targetMismatches.get(D.targetId)!=null,P=D.view.applyChanges(A,N.isPrimaryClient,O,R);return uv(N,D.targetId,P.wa),P.snapshot}(t,m,y,I);const s=await tv(t.localStore,e,!0),o=new zN(e,s.Ts),l=o.ma(s.documents),u=ka.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);uv(t,n,c.wa);const h=new $N(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function QN(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Yu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&mp(r.remoteStore,i.targetId),Bh(r,i.targetId)}).catch(xa)):(Bh(r,i.targetId),await Fh(r.localStore,i.targetId,!0))}async function XN(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mp(n.remoteStore,r.targetId))}async function YN(t,e,n){const r=ib(t);try{const i=await function(o,l){const u=ne(o),c=Ne.now(),h=l.reduce((I,C)=>I.add(C.key),ae());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=ir(),N=ae();return u.cs.getEntries(I,h).next(D=>{C=D,C.forEach((S,T)=>{T.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,C)).next(D=>{m=D;const S=[];for(const T of l){const A=_P(T,m.get(T.key).overlayedDocument);A!=null&&S.push(new Hr(T.key,A,i0(A.value.mapValue),Ct.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,S,l)}).next(D=>{y=D;const S=D.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(I,D.batchId,S)})}).then(()=>({batchId:y.batchId,changes:p0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Oe(pe)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Na(r,i.changes),await sc(r.remoteStore)}catch(i){const s=wp(i,"Failed to persist write");n.reject(s)}}async function X0(t,e){const n=ne(t);try{const r=await hN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ve(o.va):i.removedDocuments.size>0&&(ve(o.va),o.va=!1))}),await Na(n,r,e)}catch(r){await xa(r)}}function lv(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let c=!1;u.queries.forEach((h,m)=>{for(const y of m.j_)y.Z_(l)&&(c=!0)}),c&&Ep(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JN(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Oe(X.comparator);o=o.insert(s,_t.newNoDocument(s,te.min()));const l=ae().add(s),u=new nc(te.min(),new Map,new Oe(pe),o,l);await X0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Tp(r)}else await Fh(r.localStore,e,!1).then(()=>Bh(r,e,n)).catch(xa)}async function ZN(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await dN(n.localStore,e);J0(n,r,null),Y0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Na(n,i)}catch(i){await xa(i)}}async function eb(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ve(m!==null),h=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);J0(r,e,n),Y0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Na(r,i)}catch(i){await xa(i)}}function Y0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function J0(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Bh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Z0(t,r)})}function Z0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(mp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Tp(t))}function uv(t,e,n){for(const r of n)r instanceof G0?(t.La.addReference(r.key,e),tb(t,r)):r instanceof K0?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Z0(t,r.key)):ee()}function tb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Tp(t))}function Tp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new WN(n)),t.Oa=t.Oa.insert(n,r),j0(t.remoteStore,new Sr(Nn(sp(n.path)),r,"TargetPurposeLimboResolution",ep.oe))}}async function Na(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=pp.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(c,y=>U.forEach(y.$i,I=>h.persistence.referenceDelegate.addReference(m,y.targetId,I)).next(()=>U.forEach(y.Ui,I=>h.persistence.referenceDelegate.removeReference(m,y.targetId,I)))))}catch(m){if(!Ca(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const y=m.targetId;if(!m.fromCache){const I=h.os.get(y),C=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(C);h.os=h.os.insert(y,N)}}}(r.localStore,s))}async function nb(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await O0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Na(n,r.hs)}}function rb(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return ae().add(r.key);{let i=ae();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function eT(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=X0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JN.bind(null,e),e.Ca.d_=UN.bind(null,e.eventManager),e.Ca.$a=BN.bind(null,e.eventManager),e}function ib(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eb.bind(null,e),e}class Iu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return cN(this.persistence,new lN,e.initialUser,this.serializer)}Ga(e){return new sN(fp.Zr,this.serializer)}Wa(e){return new yN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Iu.provider={build:()=>new Iu};class zh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nb.bind(null,this.syncEngine),await MN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FN}()}createDatastore(e){const n=rc(e.databaseInfo.databaseId),r=function(s){return new EN(s)}(e.databaseInfo);return function(s,o,l,u){return new SN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new xN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>lv(this.syncEngine,n,0),function(){return rv.D()?new rv:new vN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const m=new qN(i,s,o,l,u,c);return h&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Pa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}zh.provider={build:()=>new zh};/**
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
 */class tT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class sb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=t0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gd(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await O0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ob(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>iv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>iv(e.remoteStore,i)),t._onlineComponents=e}async function ob(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ys("Error using user provided cache. Falling back to memory cache: "+n),await gd(t,new Iu)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await gd(t,new Iu);return t._offlineComponents}async function nT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await cv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await cv(t,new zh))),t._onlineComponents}function ab(t){return nT(t).then(e=>e.syncEngine)}async function rT(t){const e=await nT(t),n=e.eventManager;return n.onListen=HN.bind(null,e.syncEngine),n.onUnlisten=QN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=XN.bind(null,e.syncEngine),n}function lb(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new tT({next:y=>{h.Za(),o.enqueueAndForget(()=>q0(s,m));const I=y.docs.has(l);!I&&y.fromCache?c.reject(new W(j.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&y.fromCache&&u&&u.source==="server"?c.reject(new W(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(y)},error:y=>c.reject(y)}),m=new H0(sp(l.path),h,{includeMetadataChanges:!0,_a:!0});return W0(s,m)}(await rT(t),t.asyncQueue,e,n,r)),r.promise}function ub(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new tT({next:y=>{h.Za(),o.enqueueAndForget(()=>q0(s,m)),y.fromCache&&u.source==="server"?c.reject(new W(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(y)},error:y=>c.reject(y)}),m=new H0(l,h,{includeMetadataChanges:!0,_a:!0});return W0(s,m)}(await rT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function iT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dv=new Map;/**
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
 */function sT(t,e,n){if(!n)throw new W(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cb(t,e,n,r){if(e===!0&&r===!0)throw new W(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hv(t){if(!X.isDocumentKey(t))throw new W(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fv(t){if(X.isDocumentKey(t))throw new W(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oc(t);throw new W(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class pv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ac{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new k1;switch(r.type){case"firstParty":return new D1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dv.get(n);r&&(H("ComponentProvider","Removing Datastore"),dv.delete(n),r.terminate())}(this),Promise.resolve()}}function db(t,e,n,r={}){var i;const s=(t=an(t,ac))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=yt.MOCK_USER;else{l=Kx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(c)}t._authCredentials=new P1(new e0(l,u))}}/**
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
 */class or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new or(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class Or extends or{constructor(e,n,r){super(e,n,sp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new X(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function Ue(t,e,...n){if(t=De(t),sT("collection","path",e),t instanceof ac){const r=Ee.fromString(e,...n);return fv(r),new Or(t,null,r)}{if(!(t instanceof Rt||t instanceof Or))throw new W(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return fv(r),new Or(t.firestore,null,r)}}function oe(t,e,...n){if(t=De(t),arguments.length===1&&(e=t0.newId()),sT("doc","path",e),t instanceof ac){const r=Ee.fromString(e,...n);return hv(r),new Rt(t,null,new X(r))}{if(!(t instanceof Rt||t instanceof Or))throw new W(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return hv(r),new Rt(t.firestore,t instanceof Or?t.converter:null,new X(r))}}/**
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
 */class mv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new L0(this,"async_queue_retry"),this.Vu=()=>{const r=md();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=md();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=md();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Xn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ca(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=_p.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Gr extends ac{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new mv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mv(e),this._firestoreClient=void 0,await e}}}function hb(t,e){const n=typeof t=="object"?t:$f(),r=typeof t=="string"?t:"(default)",i=Ns(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Hx("firestore");s&&db(i,...s)}return i}function lc(t){if(t._terminated)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fb(t),t._firestoreClient}function fb(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new H1(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,iT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new sb(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class As{constructor(e){this._byteString=e}static fromBase64String(e){try{return new As(ut.fromBase64String(e))}catch(n){throw new W(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new As(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ba{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ms{constructor(e){this._methodName=e}}/**
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
 */class Ip{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */class Sp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const pb=/^__.*__$/;class mb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}class oT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class uc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new uc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Su(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(aT(this.Cu)&&pb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class gb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rc(e)}Qu(e,n,r,i=!1){return new uc({Cu:e,methodName:n,qu:r,path:st.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function js(t){const e=t._freezeSettings(),n=rc(t._databaseId);return new gb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ap(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);kp("Data must be an object, but it was:",o,r);const l=dT(r,o);let u,c;if(s.merge)u=new Gt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const m of s.mergeFields){const y=$h(e,m,n);if(!o.contains(y))throw new W(j.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);fT(h,y)||h.push(y)}u=new Gt(h),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new mb(new Vt(l),u,c)}class Da extends Ms{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Da}}function yb(t,e,n){return new uc({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class xp extends Ms{_toFieldTransform(e){return new lp(e.path,new la)}isEqual(e){return e instanceof xp}}class Cp extends Ms{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=yb(this,e,!0),r=this.Ku.map(s=>Fs(s,n)),i=new Ts(r);return new lp(e.path,i)}isEqual(e){return e instanceof Cp&&Zo(this.Ku,e.Ku)}}class Rp extends Ms{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new ca(e.serializer,y0(e.serializer,this.$u));return new lp(e.path,n)}isEqual(e){return e instanceof Rp&&this.$u===e.$u}}function lT(t,e,n,r){const i=t.Qu(1,e,n);kp("Data must be an object, but it was:",i,r);const s=[],o=Vt.empty();xi(r,(u,c)=>{const h=Pp(e,u,n);c=De(c);const m=i.Nu(h);if(c instanceof Da)s.push(h);else{const y=Fs(c,m);y!=null&&(s.push(h),o.set(h,y))}});const l=new Gt(s);return new oT(o,l,i.fieldTransforms)}function uT(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[$h(e,r,n)],u=[i];if(s.length%2!=0)throw new W(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push($h(e,s[y])),u.push(s[y+1]);const c=[],h=Vt.empty();for(let y=l.length-1;y>=0;--y)if(!fT(c,l[y])){const I=l[y];let C=u[y];C=De(C);const N=o.Nu(I);if(C instanceof Da)c.push(I);else{const D=Fs(C,N);D!=null&&(c.push(I),h.set(I,D))}}const m=new Gt(c);return new oT(h,m,o.fieldTransforms)}function cT(t,e,n,r=!1){return Fs(n,t.Qu(r?4:3,e))}function Fs(t,e){if(hT(t=De(t)))return kp("Unsupported field value:",e,t),dT(t,e);if(t instanceof Ms)return function(r,i){if(!aT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Fs(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return y0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:Eu(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eu(i.serializer,s)}}if(r instanceof Ip)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof As)return{bytesValue:C0(i.serializer,r._byteString)};if(r instanceof Rt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:dp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Sp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ap(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${oc(r)}`)}(t,e)}function dT(t,e){const n={};return n0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(r,i)=>{const s=Fs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof Ip||t instanceof As||t instanceof Rt||t instanceof Ms||t instanceof Sp)}function kp(t,e,n){if(!hT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=oc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function $h(t,e,n){if((e=De(e))instanceof ba)return e._internalPath;if(typeof e=="string")return Pp(t,e);throw Su("Field path arguments must be of type string or ",t,!1,void 0,n)}const vb=new RegExp("[~\\*/\\[\\]]");function Pp(t,e,n){if(e.search(vb)>=0)throw Su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ba(...e.split("."))._internalPath}catch{throw Su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Su(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(j.INVALID_ARGUMENT,l+t+u)}function fT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Np{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _b(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _b extends Np{data(){return super.data()}}function cc(t,e){return typeof e=="string"?Pp(t,e):e instanceof ba?e._internalPath:e._delegate._internalPath}/**
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
 */function wb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bp{}class dc extends bp{}function Ze(t,e,...n){let r=[];e instanceof bp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Dp).length,l=s.filter(u=>u instanceof hc).length;if(o>1||o>0&&l>0)throw new W(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class hc extends dc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hc(e,n,r)}_apply(e){const n=this._parse(e);return pT(e._query,n),new or(e.firestore,e.converter,Oh(e._query,n))}_parse(e){const n=js(e.firestore);return function(s,o,l,u,c,h,m){let y;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){vv(m,h);const I=[];for(const C of m)I.push(yv(u,s,C));y={arrayValue:{values:I}}}else y=yv(u,s,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||vv(m,h),y=cT(l,o,m,h==="in"||h==="not-in");return We.create(c,h,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Me(t,e,n){const r=e,i=cc("where",t);return hc._create(i,r,n)}class Dp extends bp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Dp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)pT(o,u),o=Oh(o,u)}(e._query,n),new or(e.firestore,e.converter,Oh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Op extends dc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Op(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new aa(s,o)}(e._query,this._field,this._direction);return new or(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ci(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Do(t,e="asc"){const n=e,r=cc("orderBy",t);return Op._create(r,n)}class Vp extends dc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Vp(e,n,r)}_apply(e){return new or(e.firestore,e.converter,wu(e._query,this._limit,this._limitType))}}function gv(t){return Vp._create("limit",t,"F")}class Lp extends dc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Lp(e,n,r)}_apply(e){const n=Tb(e,this.type,this._docOrFields,this._inclusive);return new or(e.firestore,e.converter,function(i,s){return new Ci(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Eb(...t){return Lp._create("startAfter",t,!1)}function Tb(t,e,n,r){if(n[0]=De(n[0]),n[0]instanceof Np)return function(s,o,l,u,c){if(!u)throw new W(j.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const h=[];for(const m of ls(s))if(m.field.isKeyField())h.push(_u(o,u.key));else{const y=u.data.field(m.field);if(Xu(y))throw new W(j.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(y===null){const I=m.field.canonicalString();throw new W(j.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${I}' (used as the orderBy) does not exist.`)}h.push(y)}return new Es(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=js(t.firestore);return function(o,l,u,c,h,m){const y=o.explicitOrderBy;if(h.length>y.length)throw new W(j.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const I=[];for(let C=0;C<h.length;C++){const N=h[C];if(y[C].field.isKeyField()){if(typeof N!="string")throw new W(j.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof N}`);if(!op(o)&&N.indexOf("/")!==-1)throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${N}' contains a slash.`);const D=o.path.child(Ee.fromString(N));if(!X.isDocumentKey(D))throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const S=new X(D);I.push(_u(l,S))}else{const D=cT(u,c,N);I.push(D)}}return new Es(I,m)}(t._query,t.firestore._databaseId,i,e,n,r)}}function yv(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new W(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!op(e)&&n.indexOf("/")!==-1)throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!X.isDocumentKey(r))throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _u(t,new X(r))}if(n instanceof Rt)return _u(t,n._key);throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oc(n)}.`)}function vv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Ib{convertValue(e,n="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>je(o.doubleValue));return new Sp(s)}convertGeoPoint(e){return new Ip(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ia(e));default:return null}}convertTimestamp(e){const n=jr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ve(D0(r));const i=new sa(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||rr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Mp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class _o{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mT extends Np{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ul extends mT{data(e={}){return super.data(e)}}class Sb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _o(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new _o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new _o(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new _o(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:Ab(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ab(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function wn(t){t=an(t,Rt);const e=an(t.firestore,Gr);return lb(lc(e),t._key).then(n=>xb(e,t,n))}class gT extends Ib{constructor(e){super(),this.firestore=e}convertBytes(e){return new As(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function et(t){t=an(t,or);const e=an(t.firestore,Gr),n=lc(e),r=new gT(e);return wb(t._query),ub(n,t._query).then(i=>new Sb(e,r,t,i))}function fc(t,e,n){t=an(t,Rt);const r=an(t.firestore,Gr),i=Mp(t.converter,e,n);return Oa(r,[Ap(js(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ct.none())])}function kt(t,e,n,...r){t=an(t,Rt);const i=an(t.firestore,Gr),s=js(i);let o;return o=typeof(e=De(e))=="string"||e instanceof ba?uT(s,"updateDoc",t._key,e,n,r):lT(s,"updateDoc",t._key,e),Oa(i,[o.toMutation(t._key,Ct.exists(!0))])}function yd(t){return Oa(an(t.firestore,Gr),[new tc(t._key,Ct.none())])}function yT(t,e){const n=an(t.firestore,Gr),r=oe(t),i=Mp(t.converter,e);return Oa(n,[Ap(js(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ct.exists(!1))]).then(()=>r)}function Oa(t,e){return function(r,i){const s=new Xn;return r.asyncQueue.enqueueAndForget(async()=>YN(await ab(r),i,s)),s.promise}(lc(t),e)}function xb(t,e,n){const r=n.docs.get(e._key),i=new gT(t);return new mT(t,i,e._key,r,new _o(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class Cb{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=js(e)}set(e,n,r){this._verifyNotCommitted();const i=vd(e,this._firestore),s=Mp(i.converter,n,r),o=Ap(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ct.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=vd(e,this._firestore);let o;return o=typeof(n=De(n))=="string"||n instanceof ba?uT(this._dataReader,"WriteBatch.update",s._key,n,r,i):lT(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ct.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=vd(e,this._firestore);return this._mutations=this._mutations.concat(new tc(n._key,Ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vd(t,e){if((t=De(t)).firestore!==e)throw new W(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function _v(){return new Da("deleteField")}function wv(){return new xp("serverTimestamp")}function Rb(...t){return new Cp("arrayUnion",t)}function kb(t){return new Rp("increment",t)}/**
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
 */function _d(t){return lc(t=an(t,Gr)),new Cb(t,e=>Oa(t,e))}(function(e,n=!0){(function(i){Os=i})(bs),Dn(new yn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Gr(new N1(r.getProvider("auth-internal")),new V1(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),rn(Oy,"4.7.3",e),rn(Oy,"4.7.3","esm2017")})();var Pb="firebase",Nb="10.14.1";/**
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
 */rn(Pb,Nb,"app");const vT="@firebase/installations",jp="0.6.9";/**
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
 */const _T=1e4,wT=`w:${jp}`,ET="FIS_v2",bb="https://firebaseinstallations.googleapis.com/v1",Db=60*60*1e3,Ob="installations",Vb="Installations";/**
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
 */const Lb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},wi=new Si(Ob,Vb,Lb);function TT(t){return t instanceof Vn&&t.code.includes("request-failed")}/**
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
 */function IT({projectId:t}){return`${bb}/projects/${t}/installations`}function ST(t){return{token:t.token,requestStatus:2,expiresIn:jb(t.expiresIn),creationTime:Date.now()}}async function AT(t,e){const r=(await e.json()).error;return wi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function xT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Mb(t,{refreshToken:e}){const n=xT(t);return n.append("Authorization",Fb(e)),n}async function CT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function jb(t){return Number(t.replace("s","000"))}function Fb(t){return`${ET} ${t}`}/**
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
 */async function Ub({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=IT(t),i=xT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:ET,appId:t.appId,sdkVersion:wT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await CT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ST(c.authToken)}}else throw await AT("Create Installation",u)}/**
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
 */function RT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Bb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zb=/^[cdef][\w-]{21}$/,Wh="";function $b(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Wb(t);return zb.test(n)?n:Wh}catch{return Wh}}function Wb(t){return Bb(t).substr(0,22)}/**
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
 */function pc(t){return`${t.appName}!${t.appId}`}/**
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
 */const kT=new Map;function PT(t,e){const n=pc(t);NT(n,e),qb(n,e)}function NT(t,e){const n=kT.get(t);if(n)for(const r of n)r(e)}function qb(t,e){const n=Hb();n&&n.postMessage({key:t,fid:e}),Gb()}let si=null;function Hb(){return!si&&"BroadcastChannel"in self&&(si=new BroadcastChannel("[Firebase] FID Change"),si.onmessage=t=>{NT(t.data.key,t.data.fid)}),si}function Gb(){kT.size===0&&si&&(si.close(),si=null)}/**
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
 */const Kb="firebase-installations-database",Qb=1,Ei="firebase-installations-store";let wd=null;function Fp(){return wd||(wd=qu(Kb,Qb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ei)}}})),wd}async function Au(t,e){const n=pc(t),i=(await Fp()).transaction(Ei,"readwrite"),s=i.objectStore(Ei),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&PT(t,e.fid),e}async function bT(t){const e=pc(t),r=(await Fp()).transaction(Ei,"readwrite");await r.objectStore(Ei).delete(e),await r.done}async function mc(t,e){const n=pc(t),i=(await Fp()).transaction(Ei,"readwrite"),s=i.objectStore(Ei),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&PT(t,l.fid),l}/**
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
 */async function Up(t){let e;const n=await mc(t.appConfig,r=>{const i=Xb(r),s=Yb(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Wh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Xb(t){const e=t||{fid:$b(),registrationStatus:0};return DT(e)}function Yb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(wi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Jb(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Zb(t)}:{installationEntry:e}}async function Jb(t,e){try{const n=await Ub(t,e);return Au(t.appConfig,n)}catch(n){throw TT(n)&&n.customData.serverCode===409?await bT(t.appConfig):await Au(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Zb(t){let e=await Ev(t.appConfig);for(;e.registrationStatus===1;)await RT(100),e=await Ev(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Up(t);return r||n}return e}function Ev(t){return mc(t,e=>{if(!e)throw wi.create("installation-not-found");return DT(e)})}function DT(t){return eD(t)?{fid:t.fid,registrationStatus:0}:t}function eD(t){return t.registrationStatus===1&&t.registrationTime+_T<Date.now()}/**
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
 */async function tD({appConfig:t,heartbeatServiceProvider:e},n){const r=nD(t,n),i=Mb(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:wT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await CT(()=>fetch(r,l));if(u.ok){const c=await u.json();return ST(c)}else throw await AT("Generate Auth Token",u)}function nD(t,{fid:e}){return`${IT(t)}/${e}/authTokens:generate`}/**
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
 */async function Bp(t,e=!1){let n;const r=await mc(t.appConfig,s=>{if(!OT(s))throw wi.create("not-registered");const o=s.authToken;if(!e&&sD(o))return s;if(o.requestStatus===1)return n=rD(t,e),s;{if(!navigator.onLine)throw wi.create("app-offline");const l=aD(s);return n=iD(t,l),l}});return n?await n:r.authToken}async function rD(t,e){let n=await Tv(t.appConfig);for(;n.authToken.requestStatus===1;)await RT(100),n=await Tv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Bp(t,e):r}function Tv(t){return mc(t,e=>{if(!OT(e))throw wi.create("not-registered");const n=e.authToken;return lD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function iD(t,e){try{const n=await tD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Au(t.appConfig,r),n}catch(n){if(TT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Au(t.appConfig,r)}throw n}}function OT(t){return t!==void 0&&t.registrationStatus===2}function sD(t){return t.requestStatus===2&&!oD(t)}function oD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Db}function aD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function lD(t){return t.requestStatus===1&&t.requestTime+_T<Date.now()}/**
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
 */async function uD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Up(e);return r?r.catch(console.error):Bp(e).catch(console.error),n.fid}/**
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
 */async function cD(t,e=!1){const n=t;return await dD(n),(await Bp(n,e)).token}async function dD(t){const{registrationPromise:e}=await Up(t);e&&await e}/**
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
 */function hD(t){if(!t||!t.options)throw Ed("App Configuration");if(!t.name)throw Ed("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ed(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ed(t){return wi.create("missing-app-config-values",{valueName:t})}/**
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
 */const VT="installations",fD="installations-internal",pD=t=>{const e=t.getProvider("app").getImmediate(),n=hD(e),r=Ns(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},mD=t=>{const e=t.getProvider("app").getImmediate(),n=Ns(e,VT).getImmediate();return{getId:()=>uD(n),getToken:i=>cD(n,i)}};function gD(){Dn(new yn(VT,pD,"PUBLIC")),Dn(new yn(fD,mD,"PRIVATE"))}gD();rn(vT,jp);rn(vT,jp,"esm2017");/**
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
 */const yD="/firebase-messaging-sw.js",vD="/firebase-cloud-messaging-push-scope",LT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",_D="https://fcmregistrations.googleapis.com/v1",MT="google.c.a.c_id",wD="google.c.a.c_l",ED="google.c.a.ts",TD="google.c.a.e";var Iv;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Iv||(Iv={}));/**
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
 */var da;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(da||(da={}));/**
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
 */function Un(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ID(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Td="fcm_token_details_db",SD=5,Sv="fcm_token_object_Store";async function AD(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Td))return null;let e=null;return(await qu(Td,SD,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(Sv))return;const u=o.objectStore(Sv),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(l=h.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:Un(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Un(h.auth),p256dh:Un(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Un(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Un(h.auth),p256dh:Un(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Un(h.vapidKey)}}}}}})).close(),await ld(Td),await ld("fcm_vapid_details_db"),await ld("undefined"),xD(e)?e:null}function xD(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const CD="firebase-messaging-database",RD=1,ha="firebase-messaging-store";let Id=null;function jT(){return Id||(Id=qu(CD,RD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ha)}}})),Id}async function kD(t){const e=FT(t),r=await(await jT()).transaction(ha).objectStore(ha).get(e);if(r)return r;{const i=await AD(t.appConfig.senderId);if(i)return await zp(t,i),i}}async function zp(t,e){const n=FT(t),i=(await jT()).transaction(ha,"readwrite");return await i.objectStore(ha).put(e,n),await i.done,e}function FT({appConfig:t}){return t.appId}/**
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
 */const PD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Pt=new Si("messaging","Messaging",PD);/**
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
 */async function ND(t,e){const n=await Wp(t),r=UT(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch($p(t.appConfig),i)).json()}catch(o){throw Pt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Pt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Pt.create("token-subscribe-no-token");return s.token}async function bD(t,e){const n=await Wp(t),r=UT(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${$p(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Pt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Pt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Pt.create("token-update-no-token");return s.token}async function DD(t,e){const r={method:"DELETE",headers:await Wp(t)};try{const s=await(await fetch(`${$p(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Pt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Pt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function $p({projectId:t}){return`${_D}/projects/${t}/registrations`}async function Wp({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function UT({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==LT&&(i.web.applicationPubKey=r),i}/**
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
 */const OD=7*24*60*60*1e3;async function VD(t){const e=await MD(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Un(e.getKey("auth")),p256dh:Un(e.getKey("p256dh"))},r=await kD(t.firebaseDependencies);if(r){if(jD(r.subscriptionOptions,n))return Date.now()>=r.createTime+OD?LD(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await DD(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Av(t.firebaseDependencies,n)}else return Av(t.firebaseDependencies,n)}async function LD(t,e){try{const n=await bD(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await zp(t.firebaseDependencies,r),n}catch(n){throw n}}async function Av(t,e){const r={token:await ND(t,e),createTime:Date.now(),subscriptionOptions:e};return await zp(t,r),r.token}async function MD(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ID(e)})}function jD(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function xv(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return FD(e,t),UD(e,t),BD(e,t),e}function FD(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function UD(t,e){e.data&&(t.data=e.data)}function BD(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
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
 */function zD(t){return typeof t=="object"&&!!t&&MT in t}/**
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
 */function $D(t){if(!t||!t.options)throw Sd("App Configuration Object");if(!t.name)throw Sd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Sd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Sd(t){return Pt.create("missing-app-config-values",{valueName:t})}/**
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
 */class WD{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=$D(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function qD(t){try{t.swRegistration=await navigator.serviceWorker.register(yD,{scope:vD}),t.swRegistration.update().catch(()=>{})}catch(e){throw Pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function HD(t,e){if(!e&&!t.swRegistration&&await qD(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Pt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function GD(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=LT)}/**
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
 */async function BT(t,e){if(!navigator)throw Pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Pt.create("permission-blocked");return await GD(t,e==null?void 0:e.vapidKey),await HD(t,e==null?void 0:e.serviceWorkerRegistration),VD(t)}/**
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
 */async function KD(t,e,n){const r=QD(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[MT],message_name:n[wD],message_time:n[ED],message_device_time:Math.floor(Date.now()/1e3)})}function QD(t){switch(t){case da.NOTIFICATION_CLICKED:return"notification_open";case da.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function XD(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===da.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(xv(n)):t.onMessageHandler.next(xv(n)));const r=n.data;zD(r)&&r[TD]==="1"&&await KD(t,n.messageType,r)}const Cv="@firebase/messaging",Rv="0.12.12";/**
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
 */const YD=t=>{const e=new WD(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>XD(e,n)),e},JD=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>BT(e,r)}};function ZD(){Dn(new yn("messaging",YD,"PUBLIC")),Dn(new yn("messaging-internal",JD,"PRIVATE")),rn(Cv,Rv),rn(Cv,Rv,"esm2017")}/**
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
 */async function e2(){try{await lE()}catch{return!1}return typeof window<"u"&&aE()&&nC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function t2(t=$f()){return e2().then(e=>{if(!e)throw Pt.create("unsupported-browser")},e=>{throw Pt.create("indexed-db-unsupported")}),Ns(De(t),"messaging").getImmediate()}async function n2(t,e){return t=De(t),BT(t,e)}ZD();const r2={apiKey:"AIzaSyAeugvkxFv7pk21juKWCeAMpsG2w-pGwzo",authDomain:"porreta-app.firebaseapp.com",projectId:"porreta-app",storageBucket:"porreta-app.firebasestorage.app",messagingSenderId:"377909387939",appId:"1:377909387939:web:1a7c43647046f4667dd516"},qp=dE(r2),_l=C1(qp),Q=hb(qp),i2=t2(qp),s2="BG0owZ2spXe7RKBKEoDljfW0wF0YzqXCLBOhj1IVCATZKI-eAcihsw1ua2u1pF7iDbX_VSWbXzHbGcwEqGg0HTg";async function o2(t){try{return console.log("Solicitando permiso de notificaciones..."),"Notification"in window?await Notification.requestPermission()!=="granted"?!1:(await a2(t),!0):(console.warn("Este navegador no soporta notificaciones"),!1)}catch(e){return console.error("Error al solicitar permisos:",e),!1}}async function a2(t){var e;try{const n=await navigator.serviceWorker.register("/Porreta/firebase-messaging-sw.js",{scope:"/Porreta/"});await navigator.serviceWorker.ready;const r=await n2(i2,{vapidKey:s2,serviceWorkerRegistration:n});if(r){console.log("✅ Token FCM obtenido");try{const i=oe(Q,"users",t);await fc(i,{fcmTokens:Rb(r)},{merge:!0}),console.log("💾 Token FCM guardado/actualizado en Firestore");const s=await wn(i);if(s.exists()){const o=((e=s.data())==null?void 0:e.fcmTokens)||[];console.log("📊 Tokens actuales en Firestore:",o.length)}else console.error("❌ El documento de usuario no existe después de guardar")}catch(i){console.error("❌ Error guardando token en Firestore:",i)}}else console.warn("⚠️ No se pudo obtener el token FCM")}catch(n){throw console.error("Error al registrar token FCM:",n),n}}const zT=V.createContext(void 0),Ut=()=>{const t=V.useContext(zT);if(!t)throw new Error("useAuth debe usarse dentro de AuthProvider");return t},l2=({children:t})=>{const[e,n]=V.useState(null),[r,i]=V.useState(null),[s,o]=V.useState(!0),l=async I=>{try{const C=await wn(oe(Q,"users",I.uid));C.exists()&&i({uid:I.uid,...C.data()}),setTimeout(()=>{o2(I.uid).catch(N=>{console.error("Error solicitando permisos de notificación:",N)})},1e3)}catch(C){console.error("Error cargando datos usuario:",C)}},u=async()=>{e&&await l(e)};V.useEffect(()=>mk(_l,async C=>{n(C),C?(await l(C),kt(oe(Q,"users",C.uid),{lastSeen:wv()}).catch(N=>console.error("Error actualizando lastSeen:",N))):i(null),o(!1)}),[]),V.useEffect(()=>{const I=()=>{document.visibilityState==="visible"&&e&&kt(oe(Q,"users",e.uid),{lastSeen:wv()}).catch(C=>console.error("Error actualizando lastSeen:",C))};return document.addEventListener("visibilitychange",I),()=>document.removeEventListener("visibilitychange",I)},[e]);const c=async(I,C,N)=>{const S=(await dk(_l,I,C)).user;await fc(oe(Q,"users",S.uid),{email:I,nick:N,createdAt:new Date,communities:{},notificationSettings:{newRounds:!0,deadlineReminders:!0,resultsPublished:!0,winnersAndBote:!0}}),await l(S)},h=async(I,C)=>{await hk(_l,I,C)},m=async()=>{await gk(_l)},y={currentUser:e,userData:r,loading:s,isSuperAdmin:(r==null?void 0:r.isSuperAdmin)===!0,signup:c,login:h,logout:m,refreshUserData:u};return f.jsx(zT.Provider,{value:y,children:t})},$T=V.createContext(void 0),u2=({children:t})=>{const[e,n]=V.useState(()=>{const i=localStorage.getItem("porreta-theme");return i==="dark"||i==="light"?i:"light"});V.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("porreta-theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")};return f.jsx($T.Provider,{value:{theme:e,toggleTheme:r},children:t})},c2=()=>{const t=V.useContext($T);if(t===void 0)throw new Error("useTheme debe usarse dentro de ThemeProvider");return t},d2=()=>{const[t,e]=V.useState(""),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,l]=V.useState(!1),{login:u,currentUser:c,loading:h}=Ut(),m=En();V.useEffect(()=>{!h&&c&&m("/communities",{replace:!0})},[c,h,m]);const y=async I=>{if(I.preventDefault(),!t||!n){s("Completa todos los campos");return}s(""),l(!0);try{await u(t,n),m("/communities",{replace:!0})}catch(C){s("Error al iniciar sesión: "+(C.message||"Error desconocido"))}finally{l(!1)}};return h?f.jsx("div",{className:"container",style:{textAlign:"center",marginTop:"100px"},children:f.jsx("p",{children:"Cargando..."})}):f.jsx("div",{className:"container",children:f.jsxs("div",{className:"card",style:{marginTop:"60px"},children:[f.jsx("h1",{style:{textAlign:"center",color:"#1976d2",marginTop:0},children:"Porreta"}),f.jsx("h2",{style:{textAlign:"center",marginTop:0,fontSize:"18px",color:"#666"},children:"Iniciar Sesión"}),f.jsxs("form",{onSubmit:y,children:[f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Correo electrónico"}),f.jsx("input",{type:"email",className:"input",value:t,onChange:I=>e(I.target.value),placeholder:"tu@email.com",disabled:o})]}),f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Contraseña"}),f.jsx("input",{type:"password",className:"input",value:n,onChange:I=>r(I.target.value),placeholder:"Tu contraseña",disabled:o})]}),i&&f.jsx("div",{className:"error",children:i}),f.jsx("button",{type:"submit",className:"button",disabled:o,children:o?"Iniciando...":"Iniciar Sesión"}),f.jsx("button",{type:"button",className:"button button-secondary",onClick:()=>m("/signup"),disabled:o,children:"Crear Cuenta Nueva"})]})]})})},h2=()=>{const[t,e]=V.useState(""),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,l]=V.useState(""),[u,c]=V.useState(""),[h,m]=V.useState(!1),[y,I]=V.useState(!1),[C,N]=V.useState(!0),{signup:D,currentUser:S,loading:T}=Ut(),A=En();V.useEffect(()=>{(async()=>{try{const P=await wn(oe(Q,"config","global"));if(P.exists()){const _=P.data();I(!_.allowUserRegistration)}}catch(P){console.error("Error al verificar configuración:",P)}finally{N(!1)}})()},[]),V.useEffect(()=>{!T&&!C&&S&&A("/communities",{replace:!0})},[S,T,C,A]);const O=async R=>{if(R.preventDefault(),y){c("El registro de nuevos usuarios está temporalmente deshabilitado");return}if(!t||!n||!o){c("Completa todos los campos");return}if(n!==i){c("Las contraseñas no coinciden");return}if(n.length<6){c("La contraseña debe tener al menos 6 caracteres");return}c(""),m(!0);try{await D(t,n,o),A("/communities",{replace:!0})}catch(P){c("Error al crear cuenta: "+(P.message||"Error desconocido"))}finally{m(!1)}};return T||C?f.jsx("div",{className:"container",style:{textAlign:"center",marginTop:"100px"},children:f.jsx("p",{children:"Cargando..."})}):y?f.jsx("div",{className:"container",children:f.jsxs("div",{className:"card",style:{marginTop:"40px",textAlign:"center"},children:[f.jsx("h1",{style:{color:"#1976d2",marginTop:0},children:"Porreta"}),f.jsxs("div",{style:{padding:"30px",backgroundColor:"rgba(244, 67, 54, 0.1)",borderRadius:"8px",marginTop:"20px"},children:[f.jsx("h2",{style:{color:"#d32f2f",marginTop:0},children:"🚫 Registro Deshabilitado"}),f.jsxs("p",{style:{color:"var(--text-secondary)",lineHeight:"1.6"},children:["El registro de nuevos usuarios está temporalmente deshabilitado.",f.jsx("br",{}),"Por favor, contacta con el administrador para obtener acceso."]})]}),f.jsx("button",{onClick:()=>A("/",{replace:!0}),className:"button",style:{marginTop:"20px"},children:"Volver al Login"})]})}):f.jsx("div",{className:"container",children:f.jsxs("div",{className:"card",style:{marginTop:"40px"},children:[f.jsx("h1",{style:{textAlign:"center",color:"#1976d2",marginTop:0},children:"Porreta"}),f.jsx("h2",{style:{textAlign:"center",marginTop:0,fontSize:"18px",color:"#666"},children:"Crear Cuenta"}),f.jsxs("form",{onSubmit:O,children:[f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Nick / Apodo"}),f.jsx("input",{type:"text",className:"input",value:o,onChange:R=>l(R.target.value),placeholder:"Tu apodo",disabled:h})]}),f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Correo electrónico"}),f.jsx("input",{type:"email",className:"input",value:t,onChange:R=>e(R.target.value),placeholder:"tu@email.com",disabled:h})]}),f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Contraseña"}),f.jsx("input",{type:"password",className:"input",value:n,onChange:R=>r(R.target.value),placeholder:"Mínimo 6 caracteres",disabled:h})]}),f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Confirmar Contraseña"}),f.jsx("input",{type:"password",className:"input",value:i,onChange:R=>s(R.target.value),placeholder:"Repite la contraseña",disabled:h})]}),u&&f.jsx("div",{className:"error",children:u}),f.jsx("button",{type:"submit",className:"button",disabled:h,children:h?"Creando...":"Crear Cuenta"}),f.jsx("button",{type:"button",className:"button button-secondary",onClick:()=>A("/"),disabled:h,children:"Ya tengo cuenta"})]})]})})},xs=({title:t="Porreta APP",message:e,type:n="info",onClose:r})=>{const i=()=>{switch(n){case"warning":return"⚠️";case"error":return"❌";case"success":return"✅";default:return"ℹ️"}},s=()=>{switch(n){case"warning":return"#ff9800";case"error":return"#f44336";case"success":return"#4caf50";default:return"#2196f3"}};return f.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,animation:"fadeIn 0.2s ease-out"},onClick:r,children:f.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),style:{maxWidth:"500px",maxHeight:"80vh",overflowY:"auto",animation:"scaleIn 0.3s ease-out"},children:[f.jsx("div",{style:{textAlign:"center",borderBottom:`3px solid ${s()}`,paddingBottom:"15px",marginBottom:"20px"},children:f.jsxs("h2",{style:{margin:0,color:"var(--text-primary)",fontSize:"20px",fontWeight:"bold"},children:[i()," ",t]})}),f.jsx("p",{style:{color:"var(--text-primary)",lineHeight:"1.6",textAlign:"center",margin:"20px 0",whiteSpace:"pre-line"},children:e}),f.jsx("button",{onClick:r,className:"button",style:{width:"100%",marginTop:"10px"},children:"Entendido"})]})})},f2=()=>{const{userData:t,logout:e,isSuperAdmin:n}=Ut(),{theme:r,toggleTheme:i}=c2(),s=En(),[o,l]=V.useState([]),[u,c]=V.useState(!0),[h,m]=V.useState(!1),[y,I]=V.useState(!1),[C,N]=V.useState(!1),[D,S]=V.useState(null);V.useEffect(()=>{A(),T()},[t]);const T=async()=>{try{const P=await wn(oe(Q,"config","global"));if(P.exists()){const _=P.data();N(!_.allowCommunityCreation)}}catch(P){console.error("Error al verificar configuración:",P)}},A=async()=>{if(t)try{const P=Object.keys(t.communities||{});if(P.length===0){l([]),c(!1);return}const _=[];for(const g of P)(await et(Ze(Ue(Q,"communities"),Me("__name__","==",g)))).forEach(E=>{const k={id:E.id,...E.data()};(n||k.isActive!==!1)&&_.push(k)});l(_)}catch(P){console.error("Error cargando comunidades:",P)}finally{c(!1)}},O=async()=>{try{await e(),s("/")}catch(P){console.error("Error cerrando sesión:",P)}},R={width:"38px",height:"38px",minWidth:"38px",padding:0,border:"1px solid rgba(255,255,255,0.75)",borderRadius:"6px",backgroundColor:"rgba(255,255,255,0.18)",color:"white",cursor:"pointer",fontSize:"17px",lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"};return u?f.jsx("div",{className:"loading",children:"Cargando..."}):f.jsxs("div",{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:"Mis Comunidades"}),f.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n&&f.jsx("button",{onClick:()=>s("/super-admin"),style:R,title:"Panel de super administrador",children:"🔧"}),f.jsx("button",{onClick:()=>s("/notifications"),style:R,title:"Notificaciones",children:"🔔"}),f.jsx("button",{onClick:i,style:R,title:r==="light"?"Activar modo oscuro":"Activar modo claro",children:r==="light"?"🌙":"☀️"}),f.jsx("button",{onClick:O,style:{...R,fontSize:"13px",fontWeight:600},title:"Salir",children:"Salir"})]})]}),f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"card",children:[f.jsx("button",{className:"button",onClick:()=>{C?S({message:"La creación de nuevas comunidades está temporalmente deshabilitada por el administrador",type:"warning"}):m(!0)},style:{opacity:C?.6:1,cursor:C?"not-allowed":"pointer"},children:"Crear Nueva Comunidad"}),f.jsx("button",{className:"button button-secondary",onClick:()=>I(!0),children:"Unirse a Comunidad"})]}),o.length===0?f.jsxs("div",{className:"empty-state",children:[f.jsx("p",{children:"No perteneces a ninguna comunidad aún"}),f.jsx("p",{children:"Crea una nueva o únete usando una contraseña"})]}):f.jsx("div",{className:"card",children:o.map(P=>f.jsxs("div",{className:"list-item",onClick:()=>s(`/community/${P.id}`),children:[f.jsxs("h3",{style:{margin:"0 0 8px 0"},children:[P.name,P.isActive===!1&&f.jsx("span",{className:"badge badge-closed",style:{marginLeft:"8px"},children:"Desactivada"})]}),f.jsxs("p",{style:{margin:0,color:"#666",fontSize:"14px"},children:[P.membersCount," miembros",(t==null?void 0:t.communities[P.id])==="admin"&&f.jsx("span",{className:"badge badge-admin",children:"Admin"})]})]},P.id))})]}),h&&f.jsx(p2,{onClose:()=>m(!1),onCreated:A}),y&&f.jsx(m2,{onClose:()=>I(!1),onJoined:A}),D&&f.jsx(xs,{message:D.message,type:D.type,onClose:()=>S(null)})]})},p2=({onClose:t,onCreated:e})=>{const{currentUser:n,userData:r,refreshUserData:i}=Ut(),[s,o]=V.useState(""),[l,u]=V.useState(""),[c,h]=V.useState(""),[m,y]=V.useState(!1),I=async C=>{if(C.preventDefault(),!s||!l){h("Completa todos los campos");return}if(!(!n||!r)){h(""),y(!0);try{const N=btoa(l),D=await yT(Ue(Q,"communities"),{name:s,passwordHash:N,createdBy:n.uid,createdAt:new Date,isActive:!0,membersCount:1}),S=oe(Q,"users",n.uid);await kt(S,{[`communities.${D.id}`]:"admin"}),await i(),e(),t()}catch(N){h("Error creando comunidad: "+(N.message||"Error desconocido"))}finally{y(!1)}}};return f.jsx("div",{className:"modal-overlay",onClick:t,children:f.jsxs("div",{className:"modal",onClick:C=>C.stopPropagation(),children:[f.jsx("h2",{children:"Crear Nueva Comunidad"}),f.jsxs("form",{onSubmit:I,children:[f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Nombre de la Comunidad"}),f.jsx("input",{type:"text",className:"input",value:s,onChange:C=>o(C.target.value),placeholder:"Ej: Amigos del Bar",disabled:m})]}),f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Contraseña (para que otros se unan)"}),f.jsx("input",{type:"text",className:"input",value:l,onChange:C=>u(C.target.value),placeholder:"Contraseña de acceso",disabled:m})]}),c&&f.jsx("div",{className:"error",children:c}),f.jsx("button",{type:"submit",className:"button",disabled:m,children:m?"Creando...":"Crear Comunidad"}),f.jsx("button",{type:"button",className:"button button-secondary",onClick:t,disabled:m,children:"Cancelar"})]})]})})},m2=({onClose:t,onJoined:e})=>{const{currentUser:n,userData:r,refreshUserData:i}=Ut(),[s,o]=V.useState(""),[l,u]=V.useState(""),[c,h]=V.useState(""),[m,y]=V.useState(!1),I=async C=>{if(C.preventDefault(),!s||!l){h("Completa todos los campos");return}if(!(!n||!r)){h(""),y(!0);try{const N=Ze(Ue(Q,"communities"),Me("name","==",s)),D=await et(N);if(D.empty){h("No se encontró la comunidad"),y(!1);return}const S=D.docs[0],T=S.data();if(T.isActive===!1){h("Esta comunidad está desactivada temporalmente"),y(!1);return}if(r.communities[S.id]){h("Ya eres miembro de esta comunidad"),y(!1);return}const A=btoa(l);if(T.passwordHash!==A){h("Contraseña incorrecta"),y(!1);return}const O=oe(Q,"users",n.uid);await kt(O,{[`communities.${S.id}`]:"member"});const R=oe(Q,"communities",S.id);await kt(R,{membersCount:kb(1)}),await i(),e(),t()}catch(N){h("Error uniéndose a comunidad: "+(N.message||"Error desconocido"))}finally{y(!1)}}};return f.jsx("div",{className:"modal-overlay",onClick:t,children:f.jsxs("div",{className:"modal",onClick:C=>C.stopPropagation(),children:[f.jsx("h2",{children:"Unirse a Comunidad"}),f.jsxs("form",{onSubmit:I,children:[f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Nombre de la Comunidad"}),f.jsx("input",{type:"text",className:"input",value:s,onChange:C=>o(C.target.value),placeholder:"Nombre exacto",disabled:m})]}),f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Contraseña"}),f.jsx("input",{type:"text",className:"input",value:l,onChange:C=>u(C.target.value),placeholder:"Contraseña de acceso",disabled:m})]}),c&&f.jsx("div",{className:"error",children:c}),f.jsx("button",{type:"submit",className:"button",disabled:m,children:m?"Uniéndose...":"Unirse"}),f.jsx("button",{type:"button",className:"button button-secondary",onClick:t,disabled:m,children:"Cancelar"})]})]})})},g2=({communityId:t})=>{const{currentUser:e}=Ut(),[n,r]=V.useState([]),[i,s]=V.useState(!1);V.useEffect(()=>{l()},[t,e]);const o=async()=>{try{const c=new Audio("/Porreta/bote.mpeg");c.volume=.8,await c.play()}catch(c){console.log("No se pudo reproducir el sonido:",c)}navigator.vibrate&&navigator.vibrate([300,100,300,100,300])},l=async()=>{if(!(!e||!t))try{const h=(await wn(oe(Q,"users",e.uid))).data(),m=(h==null?void 0:h.seenResults)||{},y=Ze(Ue(Q,"rounds"),Me("communityId","==",t),Me("status","==","results_posted")),I=await et(y),C=[];I.forEach(P=>{C.push({id:P.id,...P.data()})});const D=Date.now()-7*24*60*60*1e3,S=new Set,T=C.filter(P=>{if(!P.resultsPublishedAt)return!1;const g=P.resultsPublishedAt.toMillis()>D;return g&&S.add(P.id),g}),A={};let O=!1;if(Object.entries(m).forEach(([P,_])=>{const g=typeof _=="number"?_:0;S.has(P)?A[P]=g:O=!0}),O){await kt(oe(Q,"users",e.uid),{seenResults:A});const P=Object.keys(m).length-Object.keys(A).length;console.log(`🧹 Limpieza automática: ${P} rondas eliminadas`)}const R=T.filter(P=>!A[P.id]);R.length>0&&(r(R),s(!0),R.some(_=>_.winnerNick==="BOTE")&&o())}catch(c){console.error("Error verificando resultados:",c)}},u=async()=>{if(e){try{const h=(await wn(oe(Q,"users",e.uid))).data(),m=(h==null?void 0:h.seenResults)||{},y=Date.now(),I={...m};n.forEach(C=>{I[C.id]=y}),await kt(oe(Q,"users",e.uid),{seenResults:I}),console.log(`✅ ${n.length} resultado(s) marcado(s) como visto(s)`)}catch(c){console.error("Error guardando resultados vistos:",c)}s(!1),r([])}};return!i||n.length===0?null:f.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:f.jsxs("div",{style:{backgroundColor:"var(--bg-secondary)",color:"var(--text-primary)",borderRadius:"8px",padding:"24px",maxWidth:"400px",width:"90%",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.3)"},children:[f.jsx("h2",{style:{marginTop:0,marginBottom:"16px",color:"#1976d2"},children:"🎉 ¡Resultados Publicados!"}),n.map(c=>{var I,C;const h=c.winnerNick==="BOTE",m=!h&&((I=c.winnerNick)==null?void 0:I.includes(",")),y=c.winnerId===(e==null?void 0:e.uid)||m&&((C=c.winnerNick)==null?void 0:C.includes((e==null?void 0:e.uid)||""));return f.jsxs("div",{style:{padding:"16px",marginBottom:"12px",backgroundColor:h?"rgba(255, 193, 7, 0.2)":"rgba(76, 175, 80, 0.2)",borderRadius:"4px",border:h?"2px solid #ffc107":"2px solid #4caf50"},children:[f.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",color:"var(--text-primary)"},children:c.name}),f.jsx("p",{style:{margin:0,fontSize:"18px",fontWeight:"bold",color:h?"#ffc107":"#4caf50"},children:h?"💰¡¡¡¡ BOOOOTEEEE !!!!":m?f.jsxs(f.Fragment,{children:[y&&"🏆 ¡FELICIDADES, HAS GANADO!",f.jsx("br",{}),"👑 Ganadores: ",c.winnerNick]}):y?"🏆 ¡FELICIDADES, HAS GANADO!":`👑 Ganador: ${c.winnerNick}`})]},c.id)}),f.jsx("button",{onClick:u,className:"button",style:{width:"100%",marginTop:"16px"},children:"Entendido"})]})})},y2=t=>{const e=new Date,r=t.toDate().getTime()-e.getTime();if(r<=0)return{text:"Cerrada",color:"#999",icon:"🔒"};const i=Math.floor(r/(1e3*60)),s=Math.floor(r/(1e3*60*60)),o=Math.floor(r/(1e3*60*60*24));if(i<60)return{text:`¡Última hora! (${i} min)`,color:"#d32f2f",icon:"⚠️"};if(s<24)return{text:`Quedan ${s} horas`,color:"#f57c00",icon:"⏰"};const l=s%24;return o===1?{text:`Queda 1 día ${l}h`,color:"#388e3c",icon:"⏰"}:{text:`Quedan ${o} días ${l}h`,color:"#388e3c",icon:"⏰"}},v2=()=>{const{communityId:t}=wa(),{userData:e,isSuperAdmin:n}=Ut(),r=En(),[i,s]=V.useState(null),[o,l]=V.useState([]),[u,c]=V.useState({}),[h,m]=V.useState({}),[y,I]=V.useState(!0),[C,N]=V.useState(!1),[D,S]=V.useState(""),[T,A]=V.useState(!1),[O,R]=V.useState("active"),[P,_]=V.useState(null),[g,w]=V.useState([]),[E,k]=V.useState(null),[b,x]=V.useState(!0),[ie,re]=V.useState(!1),ct=V.useRef(null),Ie=V.useRef(null),z=(e==null?void 0:e.communities[t||""])==="admin";V.useEffect(()=>{Y()},[t]),V.useEffect(()=>{const K=()=>{Y()};return window.addEventListener("focus",K),()=>window.removeEventListener("focus",K)},[t]);const Y=async()=>{if(t){console.log("🔄 Cargando datos para comunidad:",t);try{const K=await wn(oe(Q,"communities",t));if(K.exists()){const G={id:K.id,...K.data()};if(G.isActive===!1&&!n){_({message:"Esta comunidad está desactivada temporalmente",type:"warning"}),r("/communities",{replace:!0});return}s(G),S(G.description||"")}const Tt=Ze(Ue(Q,"rounds"),Me("communityId","==",t),Do("createdAt","desc")),Ln=await et(Tt);console.log("📊 Rondas encontradas:",Ln.size);let He=[];Ln.forEach(G=>{He.push({id:G.id,...G.data()})}),z||(He=He.filter(G=>G.isVisible!==!1)),He.sort((G,ue)=>G.deadline.toMillis()-ue.deadline.toMillis()),l(He);const dt={},F={};for(const G of He){const ue=Ze(Ue(Q,"bets"),Me("roundId","==",G.id)),he=await et(ue);if(dt[G.id]=he.size,e!=null&&e.uid){const _e=Ze(Ue(Q,"bets"),Me("roundId","==",G.id),Me("userId","==",e.uid)),Be=await et(_e);F[G.id]=!Be.empty}}c(dt),m(F)}catch(K){console.error("Error cargando datos:",K)}finally{I(!1)}}},J=V.useCallback(async(K=!1)=>{if(!(!t||K&&!b||ie)){re(!0);try{let Ln=Ze(Ue(Q,"rounds"),Me("communityId","==",t),Me("status","==","results_posted"),Do("resultsPublishedAt","desc"),gv(10));K&&E&&(Ln=Ze(Ue(Q,"rounds"),Me("communityId","==",t),Me("status","==","results_posted"),Do("resultsPublishedAt","desc"),Eb(E),gv(10)));const He=await et(Ln);if(He.empty){x(!1),re(!1);return}const dt=[];He.forEach(_e=>{const Be={id:_e.id,..._e.data()};Be.resultsPublishedAt?(Date.now()-Be.resultsPublishedAt.toMillis())/864e5>=7&&dt.push(Be):dt.push(Be)});const F=z?dt:dt.filter(_e=>_e.isVisible!==!1);w(K?_e=>[..._e,...F]:F);const G=He.docs[He.docs.length-1];k(G),x(He.size===10);const ue={...u},he={...h};for(const _e of F)if(ue[_e.id]===void 0){const Be=Ze(Ue(Q,"bets"),Me("roundId","==",_e.id)),Jt=await et(Be);ue[_e.id]=Jt.size;const Qe=Jt.docs.some($t=>$t.data().userId===(e==null?void 0:e.uid));he[_e.id]=Qe}c(ue),m(he)}catch(Tt){console.error("Error cargando rondas finalizadas:",Tt)}finally{re(!1)}}},[t,E,b,ie,z,e==null?void 0:e.uid,u,h]);V.useEffect(()=>{O==="finished"&&g.length===0&&!y&&J(!1)},[O,y]),V.useEffect(()=>{if(!(O!=="finished"||!b))return ct.current=new IntersectionObserver(K=>{K[0].isIntersecting&&!ie&&J(!0)},{threshold:.1}),Ie.current&&ct.current.observe(Ie.current),()=>{ct.current&&ct.current.disconnect()}},[O,b,ie,J]);const ge=async()=>{if(!(!t||!z)){A(!0);try{await kt(oe(Q,"communities",t),{description:D}),i&&s({...i,description:D}),N(!1)}catch(K){console.error("Error al guardar descripción:",K),_({message:"Error al guardar la descripción",type:"error"})}finally{A(!1)}}},me=K=>K.status==="results_posted"?f.jsx("span",{className:"badge badge-results",children:"Finalizada"}):K.status==="closed"?f.jsx("span",{className:"badge badge-closed",children:"Cerrada"}):new Date(K.deadline.toDate())<new Date?f.jsx("span",{className:"badge badge-closed",children:"Expirada"}):f.jsx("span",{className:"badge badge-open",children:"Abierta"}),Se=K=>h[K]?f.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",backgroundColor:"#4caf50",color:"white",fontWeight:"500"},children:"✅ Ya apostaste"}):f.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",backgroundColor:"#ff9800",color:"white",fontWeight:"500"},children:"⚠️ Pendiente"}),Dt=O==="active"?o.filter(K=>K.status==="open"||K.status==="closed"?!0:K.status==="results_posted"&&K.resultsPublishedAt?(Date.now()-K.resultsPublishedAt.toMillis())/864e5<7:!1):g,Bt=o.filter(K=>K.status==="open"||K.status==="closed"?!0:K.status==="results_posted"&&K.resultsPublishedAt?(Date.now()-K.resultsPublishedAt.toMillis())/864e5<7:!1).length,zt=b?`${g.length}+`:g.length.toString();return y?f.jsx("div",{className:"loading",children:"Cargando..."}):i?f.jsxs("div",{children:[t&&f.jsx(g2,{communityId:t}),f.jsxs("div",{className:"header",children:[f.jsx("div",{children:f.jsx("h1",{children:i.name})}),f.jsx("button",{onClick:()=>r(-1),children:"Volver"})]}),f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"card",children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[f.jsx("h3",{style:{margin:0,fontSize:"16px",color:"#666"},children:"Información"}),z&&!C&&f.jsx("button",{className:"button button-secondary",onClick:()=>N(!0),style:{width:"auto",padding:"6px 12px",fontSize:"14px",marginTop:0},children:"Editar"})]}),C?f.jsxs("div",{children:[f.jsx("textarea",{className:"input",value:D,onChange:K=>S(K.target.value),placeholder:"Añade información para los miembros de la comunidad...",rows:4,style:{resize:"vertical",minHeight:"80px"}}),f.jsxs("div",{style:{display:"flex",gap:"8px"},children:[f.jsx("button",{className:"button",onClick:ge,disabled:T,style:{flex:1},children:T?"Guardando...":"Guardar"}),f.jsx("button",{className:"button button-secondary",onClick:()=>{S((i==null?void 0:i.description)||""),N(!1)},disabled:T,style:{flex:1},children:"Cancelar"})]})]}):f.jsx("p",{style:{margin:0,whiteSpace:"pre-wrap",fontSize:"14px",lineHeight:"1.5"},children:D||(z?'Haz clic en "Editar" para añadir información...':"Sin información")})]}),z&&f.jsx("div",{className:"card",children:f.jsx("button",{className:"button",onClick:()=>r(`/community/${t}/create-round`),children:"Crear Nueva Ronda"})}),f.jsx("div",{className:"card",style:{padding:"0",overflow:"hidden"},children:f.jsxs("div",{style:{display:"flex",borderBottom:"1px solid var(--border-color)"},children:[f.jsxs("button",{onClick:()=>R("active"),style:{flex:1,padding:"16px",border:"none",backgroundColor:O==="active"?"#1976d2":"transparent",color:O==="active"?"white":"var(--text-primary)",fontWeight:O==="active"?"bold":"normal",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease",borderBottom:O==="active"?"3px solid #1976d2":"3px solid transparent"},children:["📋 Activas (",Bt,")"]}),f.jsxs("button",{onClick:()=>R("finished"),style:{flex:1,padding:"16px",border:"none",backgroundColor:O==="finished"?"#1976d2":"transparent",color:O==="finished"?"white":"var(--text-primary)",fontWeight:O==="finished"?"bold":"normal",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease",borderBottom:O==="finished"?"3px solid #1976d2":"3px solid transparent"},children:["✅ Finalizadas (",zt,")"]})]})}),Dt.length===0?f.jsxs("div",{className:"empty-state",children:[f.jsx("p",{children:O==="active"?"No hay rondas activas":"No hay rondas finalizadas"}),O==="active"&&z&&f.jsx("p",{children:"Crea la primera ronda de apuestas"})]}):f.jsxs("div",{className:"card",children:[f.jsx("h2",{style:{marginTop:0},children:O==="active"?"Rondas Activas":"Rondas Finalizadas"}),Dt.map(K=>f.jsx("div",{className:"list-item",onClick:()=>r(`/community/${t}/round/${K.id}`),style:{borderLeft:K.isVisible===!1?"4px solid #FF9800":"none",opacity:K.isVisible===!1?.7:1},children:f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("div",{style:{flex:1},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",flexWrap:"wrap"},children:[f.jsx("h3",{style:{margin:0,fontSize:"18px"},children:K.name}),z&&K.isVisible===!1&&f.jsx("span",{style:{fontSize:"12px",padding:"2px 8px",borderRadius:"12px",backgroundColor:"#FF9800",color:"white",fontWeight:"normal"},children:"🔒 Oculta"})]}),f.jsx("p",{style:{margin:0,color:"#666",fontSize:"14px"},children:(()=>{const Tt=y2(K.deadline);return f.jsxs("span",{style:{color:Tt.color,fontWeight:"500"},children:[Tt.icon," ",Tt.text]})})()}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"4px",flexWrap:"wrap"},children:[f.jsxs("p",{style:{margin:0,color:"#007bff",fontSize:"13px",fontWeight:"500"},children:[u[K.id]||0," ",(u[K.id]||0)===1?"apuesta":"apuestas"]}),Se(K.id)]})]}),me(K)]})},K.id)),O==="finished"&&b&&f.jsx("div",{ref:Ie,style:{padding:"20px",textAlign:"center",color:"var(--text-secondary)"},children:ie&&"⏳ Cargando más rondas..."}),O==="finished"&&!b&&g.length>0&&f.jsx("div",{style:{padding:"20px",textAlign:"center",color:"var(--text-secondary)",fontSize:"14px"},children:"✓ No hay más rondas finalizadas"})]})]}),P&&f.jsx(xs,{message:P.message,type:P.type,onClose:()=>_(null)})]}):f.jsx("div",{className:"loading",children:"Comunidad no encontrada"})},_2=()=>{const{communityId:t}=wa(),{currentUser:e}=Ut(),n=En(),[r,i]=V.useState(""),[s,o]=V.useState(""),[l,u]=V.useState(!0),[c,h]=V.useState([{homeTeam:"",awayTeam:"",type:"exact"}]),[m,y]=V.useState(""),[I,C]=V.useState(!1),N=(A,O,R)=>{const P=[...c];O==="type"?P[A].type=R:P[A][O]=R,h(P)},D=()=>{h([...c,{homeTeam:"",awayTeam:"",type:"exact"}])},S=A=>{if(c.length===1){y("La ronda debe tener al menos un partido");return}h(c.filter((O,R)=>R!==A))},T=async A=>{if(A.preventDefault(),!r.trim()){y("Debes poner un nombre a la ronda");return}if(!s){y("Debes establecer una hora límite");return}const O=new Date(s);if(O<=new Date){y("La hora límite debe ser en el futuro");return}if(c.length===0){y("Añade al menos un partido");return}for(const R of c)if(!R.homeTeam.trim()||!R.awayTeam.trim()){y("Completa todos los equipos");return}if(!(!e||!t)){y(""),C(!0);try{const R=await yT(Ue(Q,"rounds"),{communityId:t,createdBy:e.uid,createdAt:new Date,name:r.trim(),deadline:O,matches:c.map(P=>({...P,homeTeam:P.homeTeam.trim(),awayTeam:P.awayTeam.trim()})),status:"open",isVisible:l});console.log("✅ Ronda creada con ID:",R.id),console.log("📍 CommunityId:",t),n(`/community/${t}`,{replace:!0})}catch(R){y("Error creando ronda: "+(R.message||"Error desconocido"))}finally{C(!1)}}};return f.jsxs("div",{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:"Crear Ronda"}),f.jsx("button",{onClick:()=>n(-1),children:"Volver"})]}),f.jsx("div",{className:"container",children:f.jsxs("form",{onSubmit:T,children:[f.jsxs("div",{className:"card",children:[f.jsx("h2",{style:{marginTop:0},children:"Información de la Ronda"}),f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Nombre de la Ronda"}),f.jsx("input",{type:"text",className:"input",placeholder:"Ej: Jornada 10, Ronda Navidad, etc.",value:r,onChange:A=>i(A.target.value),disabled:I})]}),f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Hora Límite"}),f.jsx("input",{type:"datetime-local",className:"input",value:s,onChange:A=>o(A.target.value),disabled:I})]}),f.jsxs("div",{style:{marginTop:"16px"},children:[f.jsxs("label",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:[f.jsx("input",{type:"checkbox",checked:l,onChange:A=>u(A.target.checked),disabled:I,style:{marginRight:"8px",width:"18px",height:"18px"}}),f.jsx("span",{style:{fontSize:"14px"},children:l?"👁️ Ronda visible para todos los usuarios":"🔒 Ronda oculta (solo admins)"})]}),f.jsx("p",{style:{margin:"8px 0 0 26px",fontSize:"13px",color:"#666"},children:l?"Los usuarios podrán ver y apostar en esta ronda inmediatamente.":"La ronda estará oculta para los usuarios. Solo tú (admin) podrás verla y hacerla visible más tarde."})]})]}),f.jsxs("div",{className:"card",children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px",flexWrap:"nowrap"},children:[f.jsxs("h2",{style:{marginTop:0,marginBottom:0,whiteSpace:"nowrap"},children:["Partidos (",c.length,")"]}),f.jsx("button",{type:"button",className:"button button-secondary",onClick:D,disabled:I,style:{width:"auto",padding:"8px 12px",fontSize:"14px",whiteSpace:"nowrap"},children:"Añadir Partido"})]}),f.jsx("p",{style:{fontSize:"14px",color:"#666",marginTop:"8px"},children:"Puedes crear jornadas con cualquier número de partidos y elegir el tipo de apuesta de cada uno."}),c.map((A,O)=>f.jsxs("div",{style:{marginBottom:"18px",paddingBottom:"18px",borderBottom:O<c.length-1?"1px solid var(--border-color)":"none"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"12px",marginBottom:"8px"},children:[f.jsxs("h3",{style:{fontSize:"16px",margin:0},children:["Partido ",O+1]}),f.jsx("button",{type:"button",className:"button button-secondary",onClick:()=>S(O),disabled:I||c.length===1,style:{width:"auto",padding:"8px 12px"},children:"Quitar"})]}),f.jsx("label",{className:"label",children:"Tipo de apuesta"}),f.jsxs("select",{className:"input",value:A.type,onChange:R=>N(O,"type",R.target.value),disabled:I,children:[f.jsx("option",{value:"exact",children:"Resultado Exacto"}),f.jsx("option",{value:"1X2",children:"1 X 2"})]}),f.jsx("input",{type:"text",className:"input",placeholder:"Equipo Local",value:A.homeTeam,onChange:R=>N(O,"homeTeam",R.target.value),disabled:I}),f.jsx("input",{type:"text",className:"input",placeholder:"Equipo Visitante",value:A.awayTeam,onChange:R=>N(O,"awayTeam",R.target.value),disabled:I})]},O)),m&&f.jsx("div",{className:"error",children:m}),f.jsx("button",{type:"submit",className:"button",disabled:I,children:I?"Creando...":"Crear Ronda"})]})]})})]})},w2=()=>{const{communityId:t,roundId:e}=wa(),{currentUser:n,userData:r}=Ut(),i=En(),s=$u(),[o,l]=V.useState(null),[u,c]=V.useState([]),[h,m]=V.useState(!0),[y,I]=V.useState(null),C=(r==null?void 0:r.communities[t||""])==="admin";V.useEffect(()=>{N()},[e,s.state]),V.useEffect(()=>{const R=()=>{N()};return window.addEventListener("focus",R),()=>window.removeEventListener("focus",R)},[e]);const N=async()=>{if(e)try{const R=await wn(oe(Q,"rounds",e));if(R.exists()){const w={id:R.id,...R.data()};l(w)}else console.error("❌ Ronda no encontrada");const P=Ze(Ue(Q,"bets"),Me("roundId","==",e)),_=await et(P),g=[];_.forEach(w=>{const E=w.data();g.push({id:w.id,...E})}),c(g)}catch(R){console.error("❌ Error cargando datos:",R)}finally{m(!1)}},D=u.find(R=>R.userId===(n==null?void 0:n.uid)),S=o&&new Date(o.deadline.toDate())>new Date,T=R=>{if(!(o!=null&&o.liveResults)||o.liveResults.length===0)return{isAlive:!0,points:0};let P=0,_=!1;return o.liveResults.forEach((g,w)=>{if(g.status==="pending")return;const E=R.predictions[w];g.type==="exact"?g.homeGoals!==void 0&&g.awayGoals!==void 0&&(g.status==="final"?E.homeGoals===g.homeGoals&&E.awayGoals===g.awayGoals?P++:_=!0:g.status==="live"&&(E.homeGoals===g.homeGoals&&E.awayGoals===g.awayGoals?P++:(E.homeGoals!==void 0&&g.homeGoals>E.homeGoals||E.awayGoals!==void 0&&g.awayGoals>E.awayGoals)&&(_=!0))):g.type==="1X2"&&g.status==="final"&&g.result&&(E.pick===g.result?P++:_=!0)}),{isAlive:!_,points:P}},A=[...u].sort((R,P)=>{const _=T(R),g=T(P);return _.isAlive&&!g.isAlive?-1:!_.isAlive&&g.isAlive?1:g.points-_.points}),O=R=>R.type==="exact"?`${R.homeGoals} - ${R.awayGoals}`:R.pick==="1"?"Local":R.pick==="X"?"Empate":"Visitante";return h?f.jsx("div",{className:"loading",children:"Cargando..."}):o?f.jsxs("div",{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:"Detalle Ronda"}),f.jsxs("div",{style:{display:"flex",gap:"8px"},children:[f.jsx("button",{onClick:()=>N(),children:"🔄 Recargar"}),f.jsx("button",{onClick:()=>i(-1),children:"Volver"})]})]}),f.jsxs("div",{className:"container",children:[C&&f.jsxs("div",{className:"card",style:{borderLeft:"4px solid #FF9800",opacity:.95},children:[f.jsx("h3",{style:{marginTop:0,color:"#FF9800"},children:"🔧 Opciones de Administrador"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[f.jsx("label",{style:{fontSize:"14px",fontWeight:"500"},children:"Visibilidad de la ronda:"}),f.jsxs("label",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:[f.jsx("input",{type:"checkbox",checked:o.isVisible!==!1,onChange:async R=>{const P=R.target.checked;try{await kt(oe(Q,"rounds",o.id),{isVisible:P}),l({...o,isVisible:P}),I({message:P?"Ronda visible para todos los usuarios":"Ronda oculta (solo visible para admins)",type:"success"})}catch(_){console.error("Error cambiando visibilidad:",_),I({message:"Error al cambiar la visibilidad",type:"error"})}},style:{marginRight:"8px",width:"18px",height:"18px"}}),f.jsx("span",{style:{fontSize:"14px"},children:o.isVisible!==!1?"👁️ Visible para todos":"🔒 Oculta (solo admins)"})]})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h2",{style:{marginTop:0},children:o.name}),o.matches.map((R,P)=>f.jsxs("div",{style:{marginBottom:"12px",paddingBottom:"12px",borderBottom:P<o.matches.length-1?"1px solid #eee":"none"},children:[f.jsxs("p",{style:{margin:"0 0 4px 0",fontWeight:"500"},children:[R.homeTeam," vs ",R.awayTeam]}),f.jsxs("p",{style:{margin:0,fontSize:"14px",color:"#666"},children:["Tipo: ",R.type==="exact"?"Resultado Exacto":"1 X 2"]})]},P)),f.jsx("p",{style:{marginTop:"16px",marginBottom:"4px",fontWeight:"500"},children:"Hora límite:"}),f.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666"},children:new Date(o.deadline.toDate()).toLocaleString()})]}),S&&f.jsx("div",{className:"card",children:f.jsx("button",{className:"button",onClick:()=>i(`/community/${t}/round/${e}/bet`),children:D?"Modificar Mi Apuesta":"Hacer Mi Apuesta"})}),C&&!S&&o.status!=="results_posted"&&f.jsx("div",{className:"card",children:f.jsx("button",{className:"button",onClick:()=>i(`/community/${t}/round/${e}/results`),children:"📊 Actualizar Resultados"})}),o.liveResults&&o.liveResults.some(R=>R.status!=="pending")&&f.jsxs("div",{className:"card",style:{borderLeft:"4px solid #FF9800",opacity:.95},children:[f.jsx("h3",{style:{marginTop:0,color:"#FF9800"},children:"🔴 Resultados En Vivo"}),f.jsxs("p",{style:{fontSize:"14px",color:"var(--text-secondary)",marginBottom:"15px"},children:["El admin está actualizando resultados. Las apuestas en ",f.jsx("strong",{style:{color:"#4CAF50"},children:"verde"})," siguen vivas, las de ",f.jsx("strong",{style:{color:"#f44336"},children:"rojo"})," ya no pueden ganar."]}),o.liveResults.map((R,P)=>R.status!=="pending"&&f.jsxs("p",{style:{margin:"8px 0",fontSize:"14px"},children:[f.jsxs("strong",{children:[o.matches[P].homeTeam," vs ",o.matches[P].awayTeam,":"]})," ",R.type==="exact"?`${R.homeGoals} - ${R.awayGoals}`:R.result==="1"?"Local":R.result==="X"?"Empate":"Visitante",R.status==="final"?" ✅":" 🔴"]},P))]}),f.jsxs("div",{className:"card",children:[f.jsxs("h2",{style:{marginTop:0},children:["Apuestas (",u.length,")"]}),u.length===0?f.jsx("div",{className:"empty-state",children:"No hay apuestas todavía"}):A.map(R=>{const P=T(R),_=o.liveResults&&o.liveResults.some(g=>g.status!=="pending");return f.jsxs("div",{style:{border:"1px solid var(--border-color)",padding:"12px",marginBottom:"12px",backgroundColor:R.userId===(n==null?void 0:n.uid)?"rgba(33, 150, 243, 0.1)":_?P.isAlive?"rgba(76, 175, 80, 0.1)":"rgba(244, 67, 54, 0.1)":"var(--bg-secondary)",borderRadius:"4px",borderLeft:_?`4px solid ${P.isAlive?"#4CAF50":"#f44336"}`:R.userId===(n==null?void 0:n.uid)?"4px solid #2196F3":"none"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("p",{style:{margin:"0 0 8px 0",fontWeight:"500"},children:[R.userNick,R.userId===(n==null?void 0:n.uid)&&" (Tú)"]}),_&&f.jsx("span",{style:{fontSize:"12px",fontWeight:"bold",padding:"4px 8px",borderRadius:"12px",backgroundColor:P.isAlive?"#4CAF50":"#f44336",color:"white"},children:P.isAlive?`🟢 Vivo (${P.points} ${P.points===1?"acierto":"aciertos"})`:"🔴 Eliminado"})]}),R.predictions.map((g,w)=>f.jsxs("p",{style:{margin:"4px 0",fontSize:"14px"},children:[o.matches[w].homeTeam," vs ",o.matches[w].awayTeam,":"," ",f.jsx("strong",{children:O(g)})]},w))]},R.id)})]}),o.status==="results_posted"&&o.results&&f.jsxs("div",{className:"card",children:[f.jsx("h2",{style:{marginTop:0},children:"Resultados Reales"}),o.results.map((R,P)=>f.jsxs("p",{style:{margin:"8px 0"},children:[o.matches[P].homeTeam," vs ",o.matches[P].awayTeam,":"," ",f.jsx("strong",{children:R.type==="exact"?`${R.homeGoals} - ${R.awayGoals}`:R.result==="1"?"Local":R.result==="X"?"Empate":"Visitante"})]},P))]})]}),y&&f.jsx(xs,{message:y.message,type:y.type,onClose:()=>I(null)})]}):f.jsx("div",{className:"loading",children:"Ronda no encontrada"})},E2=()=>{const{communityId:t,roundId:e}=wa(),{currentUser:n,userData:r}=Ut(),i=En(),[s,o]=V.useState(null),[l,u]=V.useState(null),[c,h]=V.useState([{type:"exact",homeGoals:void 0,awayGoals:void 0},{type:"exact",homeGoals:void 0,awayGoals:void 0},{type:"1X2",pick:"1"}]),[m,y]=V.useState(""),[I,C]=V.useState(!0),[N,D]=V.useState(!1),[S,T]=V.useState(!1),A=(g,w=[])=>g.matches.map((E,k)=>{const b=w[k];return(b==null?void 0:b.type)===E.type?b:E.type==="exact"?{type:"exact",homeGoals:void 0,awayGoals:void 0}:{type:"1X2",pick:"1"}});V.useEffect(()=>{O()},[e]);const O=async()=>{if(!(!e||!n))try{const g=await wn(oe(Q,"rounds",e));if(g.exists()){const w={id:g.id,...g.data()};o(w);const E=Ze(Ue(Q,"bets"),Me("roundId","==",e),Me("userId","==",n.uid)),k=await et(E);if(k.empty)h(A(w));else{const b={id:k.docs[0].id,...k.docs[0].data()};u(b),h(A(w,b.predictions))}}}catch(g){console.error("Error cargando datos:",g)}finally{C(!1)}},R=(g,w,E)=>{const k=[...c];k[g][w]=E,h(k)},P=async()=>{if(!e)return!1;try{const g=Ze(Ue(Q,"bets"),Me("roundId","==",e)),w=await et(g);for(const E of w.docs){if(E.id===(l==null?void 0:l.id))continue;const k=E.data();if(k.predictions.length!==c.length)continue;if(k.predictions.every((x,ie)=>{const re=c[ie];return!re||x.type!==re.type?!1:x.type==="exact"?x.homeGoals===re.homeGoals&&x.awayGoals===re.awayGoals:x.pick===re.pick}))return!0}}catch(g){console.error("Error verificando duplicados:",g)}return!1},_=async(g,w=!1)=>{if(g.preventDefault(),!N&&!(!s||!n||!r||!t||!e)){for(let E=0;E<c.length;E++){const k=c[E];if(k.type==="exact"&&(k.homeGoals===void 0||k.awayGoals===void 0)){y(`Por favor, completa el resultado del partido ${E+1}`);return}}if(new Date(s.deadline.toDate())<=new Date){y("El plazo para apostar ha expirado");return}if(y(""),D(!0),!w&&await P()){D(!1),T(!0);return}try{const E={roundId:e,communityId:t,userId:n.uid,userNick:r.nick,predictions:c,duplicateWarningShown:w,updatedAt:new Date},k=(l==null?void 0:l.id)??`${e}_${n.uid}`;await fc(oe(Q,"bets",k),{...E,...l?{}:{createdAt:new Date}},{merge:!0}),console.log("✅ Apuesta guardada para roundId:",e),i(`/community/${t}/round/${e}`,{replace:!0,state:{refresh:!0,timestamp:Date.now()}})}catch(E){y("Error guardando apuesta: "+(E.message||"Error desconocido"))}finally{D(!1)}}};return I?f.jsx("div",{className:"loading",children:"Cargando..."}):s?f.jsxs("div",{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:l?"Modificar Apuesta":"Hacer Apuesta"}),f.jsx("button",{onClick:()=>i(-1),children:"Volver"})]}),f.jsx("div",{className:"container",children:f.jsx("form",{onSubmit:g=>_(g,!1),children:f.jsxs("div",{className:"card",children:[f.jsx("h2",{style:{marginTop:0},children:"Tus Pronósticos"}),s.matches.map((g,w)=>f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsxs("h3",{style:{fontSize:"16px",marginBottom:"8px"},children:[g.homeTeam," vs ",g.awayTeam]}),f.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"8px"},children:g.type==="exact"?"Resultado Exacto":"1/X/2"}),g.type==="exact"?f.jsxs("div",{className:"match-input-group",children:[f.jsx("input",{type:"number",min:"0",className:"input",value:c[w].homeGoals===void 0?"":c[w].homeGoals,onChange:E=>R(w,"homeGoals",E.target.value===""?void 0:parseInt(E.target.value)),disabled:N,placeholder:"0"}),f.jsx("span",{children:"-"}),f.jsx("input",{type:"number",min:"0",className:"input",value:c[w].awayGoals===void 0?"":c[w].awayGoals,onChange:E=>R(w,"awayGoals",E.target.value===""?void 0:parseInt(E.target.value)),disabled:N,placeholder:"0"})]}):f.jsxs("select",{className:"input",value:c[w].pick||"1",onChange:E=>R(w,"pick",E.target.value),disabled:N,children:[f.jsxs("option",{value:"1",children:["1 - Local (",g.homeTeam,")"]}),f.jsx("option",{value:"X",children:"X - Empate"}),f.jsxs("option",{value:"2",children:["2 - Visitante (",g.awayTeam,")"]})]})]},w)),m&&f.jsx("div",{className:"error",children:m}),f.jsx("button",{type:"submit",className:"button",disabled:N,children:N?"Guardando...":l?"Actualizar Apuesta":"Enviar Apuesta"})]})})}),S&&f.jsx("div",{className:"modal-overlay",children:f.jsxs("div",{className:"modal",children:[f.jsx("h2",{children:"Apuesta Duplicada"}),f.jsx("p",{children:"Ya existe una apuesta idéntica a la tuya. ¿Quieres enviarla de todas formas?"}),f.jsx("button",{className:"button",onClick:g=>{T(!1),_(g,!0)},children:"Sí, Enviar de Todas Formas"}),f.jsx("button",{className:"button button-secondary",onClick:()=>T(!1),children:"Cancelar"})]})})]}):f.jsx("div",{className:"loading",children:"Ronda no encontrada"})},T2=()=>{const{communityId:t,roundId:e}=wa(),n=En(),{userData:r,isSuperAdmin:i}=Ut(),[s,o]=V.useState(null),[l,u]=V.useState([]),[c,h]=V.useState(!0),[m,y]=V.useState(!1),[I,C]=V.useState(null);V.useEffect(()=>{N()},[e]);const N=async()=>{if(e)try{const R=await wn(oe(Q,"rounds",e));if(R.exists()){const P={id:R.id,...R.data()};if(o(P),P.liveResults&&P.liveResults.length>0)u(P.liveResults);else{const _=P.matches.map((g,w)=>({matchIndex:w,status:"pending",type:g.type,homeGoals:void 0,awayGoals:void 0,result:void 0}));u(_)}}}catch(R){console.error("Error al cargar la ronda:",R),C({message:"Error al cargar la ronda",type:"error"})}finally{h(!1)}},D=(R,P,_)=>{const g=[...l];P==="status"?g[R].status=_:P==="homeGoals"?g[R].homeGoals=_===""?void 0:parseInt(_):P==="awayGoals"?g[R].awayGoals=_===""?void 0:parseInt(_):P==="result"&&(g[R].result=_),u(g)},S=async()=>{if(!(!e||!s)){for(let R=0;R<l.length;R++){const P=l[R];if(P.status!=="pending"){if(P.type==="exact"){if(P.homeGoals===void 0||P.awayGoals===void 0){C({message:`El partido ${R+1} está marcado como "${P.status}" pero no tiene goles definidos`,type:"warning"});return}}else if(P.type==="1X2"&&!P.result){C({message:`El partido ${R+1} está marcado como "${P.status}" pero no tiene resultado 1X2 definido`,type:"warning"});return}}}try{if(y(!0),A())await T();else{const R=l.map(_=>({matchIndex:_.matchIndex,status:_.status,type:_.type,..._.type==="exact"&&{homeGoals:_.homeGoals??0,awayGoals:_.awayGoals??0},..._.type==="1X2"&&{result:_.result??"1"}})),P=oe(Q,"rounds",e);await kt(P,{liveResults:R}),C({message:"Resultados actualizados correctamente",type:"success"}),setTimeout(()=>n(`/community/${t}/round/${e}`),1500)}}catch(R){console.error("Error guardando resultados:",R),C({message:"Error al guardar los resultados",type:"error"})}finally{y(!1)}}},T=async()=>{if(!(!s||!e||!t))try{const R=l.map(x=>{const ie={type:x.type};return x.type==="exact"?(ie.homeGoals=x.homeGoals??0,ie.awayGoals=x.awayGoals??0):x.type==="1X2"&&(ie.result=x.result??"1"),ie}),P=Ze(Ue(Q,"bets"),Me("roundId","==",e)),_=await et(P),g=[];_.forEach(x=>{g.push({id:x.id,...x.data()})});let w=null,E=null,k=[];g.forEach(x=>{let ie=0;x.predictions.forEach((re,ct)=>{const Ie=R[ct];re.type==="exact"&&Ie.type==="exact"?re.homeGoals===Ie.homeGoals&&re.awayGoals===Ie.awayGoals&&(ie+=1):re.type==="1X2"&&Ie.type==="1X2"&&re.pick===Ie.result&&(ie+=1)}),console.log("📊 Apuesta evaluada:",{userNick:x.userNick,correctPredictions:ie,totalMatches:x.predictions.length}),ie===x.predictions.length&&k.push(x)}),console.log("🏆 Resultado final:",{winnersCount:k.length}),k.length===1?(w=k[0].userId,E=k[0].userNick):k.length>1?(w=null,E=k.map(x=>x.userNick).join(", ")):(w=null,E="BOTE"),console.log("🏆 Ganador calculado:",{winnerId:w,winnerNick:E});const b={results:R,status:"results_posted",winnerId:w,winnerNick:E,resultsPublishedAt:Ne.now()};b.liveResults=[],await kt(oe(Q,"rounds",e),b),C({message:"🏆 ¡Resultados oficiales publicados!",type:"success"}),setTimeout(()=>n(`/community/${t}/round/${e}`,{replace:!0}),1500)}catch(R){throw console.error("Error publicando resultados:",R),R}},A=()=>l.every(R=>R.status==="final");return c?f.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"Cargando..."}):s?!((r==null?void 0:r.communities[t||""])==="admin")&&!i?f.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"No tienes permisos de administrador"}):f.jsxs("div",{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:"Actualizar Resultados"}),f.jsx("button",{onClick:()=>n(-1),children:"← Volver"})]}),f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"card",children:[f.jsx("h2",{style:{marginTop:0},children:s.name}),f.jsx("p",{style:{color:"#666",fontSize:"14px",marginBottom:0},children:'Actualiza los resultados a medida que se van conociendo. Cuando todos estén marcados como "Terminado", se publicarán automáticamente los resultados oficiales.'})]}),A()&&f.jsx("div",{style:{backgroundColor:"#4CAF50",color:"white",padding:"15px",borderRadius:"8px",marginBottom:"20px",textAlign:"center",fontWeight:"bold"},children:"✅ Todos los partidos están TERMINADOS. Al guardar, se publicarán automáticamente los resultados oficiales y se calculará el ganador."}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:s.matches.map((R,P)=>{const _=l[P];return f.jsxs("div",{className:"card",style:{border:"2px solid #ddd",borderRadius:"8px",padding:"20px",opacity:_.status==="final"?1:_.status==="live"?.95:.9},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"},children:[f.jsxs("h3",{style:{margin:0},children:["Partido ",P+1,": ",R.homeTeam," vs ",R.awayTeam]}),f.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"bold",backgroundColor:R.type==="exact"?"#2196F3":"#FF9800",color:"white"},children:R.type==="exact"?"Resultado Exacto":"1X2"})]}),f.jsxs("div",{style:{marginBottom:"15px"},children:[f.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"bold"},children:"Estado del partido:"}),f.jsxs("select",{value:_.status,onChange:g=>D(P,"status",g.target.value),style:{padding:"10px",fontSize:"16px",width:"100%",borderRadius:"4px",border:"1px solid var(--border-color)",backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},children:[f.jsx("option",{value:"pending",children:"⏳ Pendiente (sin resultado)"}),f.jsx("option",{value:"live",children:"🔴 En Vivo (puede cambiar)"}),f.jsx("option",{value:"final",children:"✅ Final (confirmado)"})]})]}),_.status!=="pending"&&f.jsx("div",{children:R.type==="exact"?f.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center"},children:[f.jsxs("div",{style:{flex:1},children:[f.jsxs("label",{style:{display:"block",marginBottom:"5px",fontSize:"14px"},children:["Goles ",R.homeTeam,":"]}),f.jsx("input",{type:"number",min:"0",value:_.homeGoals??"",onChange:g=>D(P,"homeGoals",g.target.value),style:{padding:"10px",fontSize:"18px",width:"100%",borderRadius:"4px",border:"1px solid var(--border-color)",backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},placeholder:"0"})]}),f.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",marginTop:"20px"},children:"-"}),f.jsxs("div",{style:{flex:1},children:[f.jsxs("label",{style:{display:"block",marginBottom:"5px",fontSize:"14px"},children:["Goles ",R.awayTeam,":"]}),f.jsx("input",{type:"number",min:"0",value:_.awayGoals??"",onChange:g=>D(P,"awayGoals",g.target.value),style:{padding:"10px",fontSize:"18px",width:"100%",borderRadius:"4px",border:"1px solid var(--border-color)",backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},placeholder:"0"})]})]}):f.jsxs("div",{children:[f.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"bold"},children:"Resultado:"}),f.jsx("div",{style:{display:"flex",gap:"10px"},children:["1","X","2"].map(g=>f.jsx("button",{onClick:()=>D(P,"result",g),style:{flex:1,padding:"15px",fontSize:"18px",fontWeight:"bold",backgroundColor:_.result===g?"#4CAF50":"var(--bg-secondary)",color:_.result===g?"white":"var(--text-primary)",border:`1px solid ${_.result===g?"#4CAF50":"var(--border-color)"}`,borderRadius:"4px",cursor:"pointer"},children:g==="1"?`Victoria ${R.homeTeam}`:g==="X"?"Empate":`Victoria ${R.awayTeam}`},g))})]})})]},P)})}),f.jsx("div",{className:"card",children:f.jsx("button",{onClick:S,disabled:m,className:"button",style:{width:"100%",backgroundColor:A()?"#FF5722":"#4CAF50",cursor:m?"not-allowed":"pointer"},children:m?"Guardando...":A()?"🏆 Guardar y Publicar Resultados Oficiales":"💾 Guardar Resultados"})})]}),I&&f.jsx(xs,{message:I.message,type:I.type,onClose:()=>C(null)})]}):f.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"Ronda no encontrada"})},I2=({title:t="Porreta APP",message:e,confirmText:n="Confirmar",cancelText:r="Cancelar",onConfirm:i,onCancel:s})=>f.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1001,animation:"fadeIn 0.2s ease-out"},onClick:s,children:f.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),style:{maxWidth:"400px",animation:"scaleIn 0.3s ease-out"},children:[f.jsx("div",{style:{textAlign:"center",borderBottom:"3px solid #f44336",paddingBottom:"15px",marginBottom:"20px"},children:f.jsxs("h2",{style:{margin:0,color:"var(--text-primary)",fontSize:"20px",fontWeight:"bold"},children:["⚠️ ",t]})}),f.jsx("p",{style:{color:"var(--text-primary)",lineHeight:"1.6",textAlign:"center",margin:"20px 0",whiteSpace:"pre-line"},children:e}),f.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"20px"},children:[f.jsx("button",{onClick:s,className:"button button-secondary",style:{flex:1},children:r}),f.jsx("button",{onClick:i,className:"button",style:{flex:1,backgroundColor:"#f44336"},children:n})]})]})}),S2=()=>{const t=En(),{isSuperAdmin:e}=Ut(),[n,r]=V.useState([]),[i,s]=V.useState(null),[o,l]=V.useState([]),[u,c]=V.useState(!0),[h,m]=V.useState(null),[y,I]=V.useState(""),[C,N]=V.useState(""),[D,S]=V.useState(null),[T,A]=V.useState(""),[O,R]=V.useState(""),[P,_]=V.useState([]),[g,w]=V.useState(!0),[E,k]=V.useState(!0),[b,x]=V.useState(!1),[ie,re]=V.useState(null),[ct,Ie]=V.useState(null);V.useEffect(()=>{if(!e){t("/communities");return}J(),z()},[e,t]);const z=async()=>{try{const F=await wn(oe(Q,"config","global"));if(F.exists()){const G=F.data();w(G.allowUserRegistration??!0),k(G.allowCommunityCreation??!0)}}catch(F){console.error("Error cargando configuración:",F)}},Y=async(F,G)=>{x(!0);try{await fc(oe(Q,"config","global"),{[F]:G},{merge:!0}),F==="allowUserRegistration"?w(G):k(G)}catch(ue){console.error("Error guardando configuración:",ue),re({message:"Error al guardar la configuración",type:"error"})}finally{x(!1)}},J=async()=>{try{c(!0);const F=Ze(Ue(Q,"communities"),Do("createdAt","desc")),ue=(await et(F)).docs.map(he=>({id:he.id,...he.data()}));r(ue)}catch(F){console.error("Error al cargar comunidades:",F),re({message:"Error al cargar comunidades",type:"error"})}finally{c(!1)}},ge=async F=>{try{const G=Ze(Ue(Q,"rounds"),Do("createdAt","desc")),_e=(await et(G)).docs.map(Be=>({id:Be.id,...Be.data()})).filter(Be=>Be.communityId===F);l(_e),s(F)}catch(G){console.error("Error cargando rondas:",G),re({message:"Error al cargar rondas",type:"error"})}},me=F=>{m(F),I(F.name),N(F.description||"")},Se=async()=>{if(h){if(!y.trim()){re({message:"El nombre no puede estar vacío",type:"warning"});return}try{const F=oe(Q,"communities",h.id);await kt(F,{name:y.trim(),description:C.trim()}),re({message:"Comunidad actualizada correctamente",type:"success"}),m(null),J()}catch(F){console.error("Error actualizando comunidad:",F),re({message:"Error al actualizar la comunidad",type:"error"})}}},Dt=async F=>{const G=F.isActive===!1;try{await kt(oe(Q,"communities",F.id),{isActive:G,deactivatedAt:G?_v():Ne.now()}),r(ue=>ue.map(he=>he.id===F.id?{...he,isActive:G,deactivatedAt:G?void 0:Ne.now()}:he)),(h==null?void 0:h.id)===F.id&&m({...h,isActive:G}),re({message:G?"Comunidad activada correctamente":"Comunidad desactivada correctamente",type:"success"})}catch(ue){console.error("Error cambiando estado de comunidad:",ue),re({message:"Error al cambiar el estado de la comunidad",type:"error"})}},Bt=F=>{S(F),A(F.name);const G=F.deadline.toDate(),he=new Date(G.getTime()-G.getTimezoneOffset()*6e4).toISOString().slice(0,16);R(he),_(F.matches)},zt=async()=>{if(D){if(!T.trim()){re({message:"El nombre no puede estar vacío",type:"warning"});return}if(!O){re({message:"La fecha límite es obligatoria",type:"warning"});return}try{const F=oe(Q,"rounds",D.id);await kt(F,{name:T.trim(),deadline:Ne.fromDate(new Date(O)),matches:P}),re({message:"Ronda actualizada correctamente",type:"success"}),S(null),i&&ge(i)}catch(F){console.error("Error actualizando ronda:",F),re({message:"Error al actualizar la ronda",type:"error"})}}},K=async F=>{Ie({message:`¿Estás seguro de que quieres eliminar la comunidad "${F.name}"?

ADVERTENCIA: Esto eliminará PERMANENTEMENTE:
- La comunidad
- Todas sus rondas
- Todas las apuestas de esas rondas

Esta acción NO se puede deshacer.`,onConfirm:async()=>{Ie(null),await Tt(F)}})},Tt=async F=>{try{let G=0,ue=0;const he=Ze(Ue(Q,"rounds"),Me("communityId","==",F.id)),_e=await et(he);console.log(`Eliminando ${_e.size} rondas...`);for(const Qe of _e.docs){const $t=Ze(Ue(Q,"bets"),Me("roundId","==",Qe.id)),ki=await et($t);console.log(`Ronda ${Qe.id}: ${ki.size} apuestas`);const Pi=ki.docs;for(let Tn=0;Tn<Pi.length;Tn+=500){const Ni=_d(Q),Us=Pi.slice(Tn,Tn+500);Us.forEach(Xe=>{Ni.delete(oe(Q,"bets",Xe.id))}),await Ni.commit(),G+=Us.length}await yd(oe(Q,"rounds",Qe.id))}const Be=await et(Ue(Q,"users")),Jt=[];Be.docs.forEach(Qe=>{const $t=Qe.data();$t.communities&&$t.communities[F.id]&&Jt.push(Qe.id)}),console.log(`Eliminando referencias de ${Jt.length} usuarios...`);for(let Qe=0;Qe<Jt.length;Qe+=500){const $t=_d(Q);Jt.slice(Qe,Qe+500).forEach(Pi=>{const Tn=oe(Q,"users",Pi);$t.update(Tn,{[`communities.${F.id}`]:_v()})}),await $t.commit()}ue=Jt.length,await yd(oe(Q,"communities",F.id)),re({message:`Comunidad eliminada correctamente.

Rondas eliminadas: ${_e.size}
Apuestas eliminadas: ${G}
Usuarios actualizados: ${ue}`,type:"success"}),J(),i===F.id&&(s(null),l([]))}catch(G){console.error("Error al eliminar comunidad:",G),re({message:`Error al eliminar la comunidad:

`+(G.message||G.toString()),type:"error"})}},Ln=async F=>{Ie({message:`¿Estás seguro de que quieres eliminar la ronda "${F.name}"?

ADVERTENCIA: Esto eliminará PERMANENTEMENTE:
- La ronda
- Todas las apuestas de esta ronda

Esta acción NO se puede deshacer.`,onConfirm:async()=>{Ie(null),await He(F)}})},He=async F=>{try{const G=Ze(Ue(Q,"bets"),Me("roundId","==",F.id)),ue=await et(G);console.log(`Eliminando ${ue.size} apuestas de la ronda ${F.id}...`);const he=ue.docs;for(let _e=0;_e<he.length;_e+=500){const Be=_d(Q);he.slice(_e,_e+500).forEach(Qe=>{Be.delete(oe(Q,"bets",Qe.id))}),await Be.commit()}await yd(oe(Q,"rounds",F.id)),re({message:`Ronda eliminada correctamente.

Apuestas eliminadas: ${ue.size}`,type:"success"}),i&&ge(i)}catch(G){console.error("Error al eliminar ronda:",G),re({message:`Error al eliminar la ronda:

`+(G.message||G.toString()),type:"error"})}},dt=F=>F.toDate().toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return u?f.jsx("div",{className:"loading",children:"Cargando..."}):f.jsxs("div",{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:"🔧 Panel de Super Administrador"}),f.jsx("button",{onClick:()=>t("/communities"),children:"← Volver"})]}),f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"card",style:{marginBottom:"24px",backgroundColor:"rgba(255, 152, 0, 0.1)",borderLeft:"4px solid #ff9800"},children:[f.jsx("h2",{style:{marginTop:0,marginBottom:"20px",color:"var(--text-primary)"},children:"⚙️ Configuración Global de Acceso"}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[f.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"12px",cursor:"pointer",padding:"12px",backgroundColor:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",transition:"all 0.2s ease"},children:[f.jsx("input",{type:"checkbox",checked:g,onChange:F=>Y("allowUserRegistration",F.target.checked),disabled:b,style:{width:"20px",height:"20px",cursor:"pointer"}}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:"👤 Permitir registro de nuevos usuarios"}),f.jsx("div",{style:{fontSize:"13px",color:"var(--text-secondary)"},children:g?"✅ Los usuarios pueden crear nuevas cuentas":"🚫 Registro de usuarios deshabilitado"})]})]}),f.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"12px",cursor:"pointer",padding:"12px",backgroundColor:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",transition:"all 0.2s ease"},children:[f.jsx("input",{type:"checkbox",checked:E,onChange:F=>Y("allowCommunityCreation",F.target.checked),disabled:b,style:{width:"20px",height:"20px",cursor:"pointer"}}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:"🏘️ Permitir creación de nuevas comunidades"}),f.jsx("div",{style:{fontSize:"13px",color:"var(--text-secondary)"},children:E?"✅ Los usuarios pueden crear comunidades":"🚫 Creación de comunidades deshabilitada"})]})]})]}),f.jsxs("div",{style:{marginTop:"12px",padding:"12px",backgroundColor:"rgba(255, 193, 7, 0.1)",borderRadius:"6px",fontSize:"13px",color:"var(--text-secondary)"},children:["💡 ",f.jsx("strong",{children:"Nota:"})," Estos ajustes controlan el acceso a nivel global de la aplicación. Úsalos para mantener la app privada y controlar quién puede registrarse o crear comunidades."]})]}),h&&f.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},children:f.jsxs("div",{className:"modal",children:[f.jsx("h3",{children:"Editar Comunidad"}),f.jsxs("div",{style:{marginBottom:"15px"},children:[f.jsx("label",{className:"label",children:"Nombre:"}),f.jsx("input",{type:"text",className:"input",value:y,onChange:F=>I(F.target.value)})]}),f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{className:"label",children:"Descripción:"}),f.jsx("textarea",{className:"input",value:C,onChange:F=>N(F.target.value),rows:4})]}),f.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[f.jsx("button",{onClick:()=>m(null),style:{padding:"10px 20px",border:"1px solid var(--border-color)",borderRadius:"4px",backgroundColor:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:"Cancelar"}),f.jsx("button",{onClick:Se,style:{padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Guardar"})]})]})}),D&&f.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,overflow:"auto",padding:"20px"},children:f.jsxs("div",{className:"modal",style:{maxHeight:"90vh",overflow:"auto"},children:[f.jsx("h3",{children:"Editar Ronda"}),f.jsxs("div",{style:{marginBottom:"15px"},children:[f.jsx("label",{className:"label",children:"Nombre:"}),f.jsx("input",{type:"text",className:"input",value:T,onChange:F=>A(F.target.value)})]}),f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{className:"label",children:"Fecha límite:"}),f.jsx("input",{type:"datetime-local",className:"input",value:O,onChange:F=>R(F.target.value)})]}),f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsxs("h4",{children:["Partidos (",P.length,")"]}),P.map((F,G)=>f.jsxs("div",{style:{marginBottom:"15px",padding:"15px",border:"1px solid var(--border-color)",borderRadius:"4px"},children:[f.jsxs("div",{style:{marginBottom:"10px"},children:[f.jsx("label",{className:"label",children:"Equipo Local:"}),f.jsx("input",{type:"text",className:"input",value:F.homeTeam,onChange:ue=>{const he=[...P];he[G].homeTeam=ue.target.value,_(he)}})]}),f.jsxs("div",{style:{marginBottom:"10px"},children:[f.jsx("label",{className:"label",children:"Equipo Visitante:"}),f.jsx("input",{type:"text",className:"input",value:F.awayTeam,onChange:ue=>{const he=[...P];he[G].awayTeam=ue.target.value,_(he)}})]}),f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Tipo de Apuesta:"}),f.jsxs("select",{className:"input",value:F.type,onChange:ue=>{const he=[...P];he[G].type=ue.target.value,_(he)},children:[f.jsx("option",{value:"exact",children:"Resultado Exacto"}),f.jsx("option",{value:"1X2",children:"1 X 2"})]})]})]},G))]}),f.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[f.jsx("button",{onClick:()=>S(null),style:{padding:"10px 20px",border:"1px solid var(--border-color)",borderRadius:"4px",backgroundColor:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:"Cancelar"}),f.jsx("button",{onClick:zt,style:{padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Guardar"})]})]})}),f.jsxs("div",{className:"card",children:[f.jsxs("h2",{style:{marginTop:0},children:["Todas las Comunidades (",n.length,")"]}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"15px",marginTop:"15px"},children:n.map(F=>f.jsxs("div",{className:"card",style:{border:"1px solid #ddd",borderRadius:"8px",padding:"15px",opacity:i===F.id?1:.85},children:[f.jsxs("h3",{style:{marginTop:0},children:[F.name,f.jsx("span",{className:F.isActive===!1?"badge badge-closed":"badge badge-open",style:{marginLeft:"8px"},children:F.isActive===!1?"Desactivada":"Activa"})]}),F.description&&f.jsx("p",{style:{fontSize:"14px",color:"var(--text-secondary)",marginBottom:"10px"},children:F.description}),f.jsxs("p",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"10px"},children:["Creada: ",dt(F.createdAt)]}),f.jsxs("p",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"15px"},children:["Miembros: ",F.membersCount]}),f.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[f.jsx("button",{onClick:()=>ge(F.id),style:{padding:"8px 12px",backgroundColor:"#2196F3",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:"Ver Rondas"}),f.jsx("button",{onClick:()=>me(F),style:{padding:"8px 12px",backgroundColor:"#FF9800",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:"Editar"}),f.jsx("button",{onClick:()=>Dt(F),style:{padding:"8px 12px",backgroundColor:F.isActive===!1?"#4CAF50":"#9E9E9E",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:F.isActive===!1?"Activar":"Desactivar"}),f.jsx("button",{onClick:()=>K(F),style:{padding:"8px 12px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:"Eliminar"})]})]},F.id))})]}),i&&f.jsxs("div",{className:"card",children:[f.jsxs("h2",{style:{marginTop:0},children:["Rondas de la Comunidad (",o.length,")"]}),o.length===0?f.jsx("p",{style:{color:"#999"},children:"No hay rondas en esta comunidad"}):f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px",marginTop:"15px"},children:o.map(F=>f.jsx("div",{className:"card",style:{border:"1px solid #ddd",borderRadius:"8px",padding:"15px"},children:f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[f.jsxs("div",{style:{flex:1},children:[f.jsx("h3",{style:{marginTop:0,marginBottom:"10px"},children:F.name}),f.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"5px"},children:[f.jsx("strong",{children:"Estado:"})," ",F.status==="open"?"🟢 Abierta":F.status==="closed"?"🔴 Cerrada":"✅ Resultados Publicados"]}),f.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"5px"},children:[f.jsx("strong",{children:"Fecha límite:"})," ",dt(F.deadline)]}),f.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"5px"},children:[f.jsx("strong",{children:"Creada:"})," ",dt(F.createdAt)]}),f.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"10px"},children:[f.jsx("strong",{children:"Partidos:"})," ",F.matches.length]}),F.status==="results_posted"&&F.winnerNick&&f.jsxs("p",{style:{fontSize:"14px",fontWeight:"bold",color:"#4CAF50"},children:["🏆 Ganador: ",F.winnerNick]})]}),f.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[f.jsx("button",{onClick:()=>t(`/community/${F.communityId}/round/${F.id}/results`),style:{padding:"8px 12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",whiteSpace:"nowrap",flex:"1 1 auto"},children:"Editar Resultados"}),f.jsx("button",{onClick:()=>Bt(F),style:{padding:"8px 12px",backgroundColor:"#2196F3",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",whiteSpace:"nowrap",flex:"1 1 auto"},children:"Editar Ronda"}),f.jsx("button",{onClick:()=>Ln(F),style:{padding:"8px 12px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",whiteSpace:"nowrap",flex:"1 1 auto"},children:"Eliminar Ronda"})]})]})},F.id))})]}),ie&&f.jsx(xs,{message:ie.message,type:ie.type,onClose:()=>re(null)}),ct&&f.jsx(I2,{message:ct.message,confirmText:"Eliminar",cancelText:"Cancelar",onConfirm:ct.onConfirm,onCancel:()=>Ie(null)}),ie&&f.jsx(xs,{message:ie.message,type:ie.type,onClose:()=>re(null)})]})]})},A2={newRounds:!0,deadlineReminders:!0,resultsPublished:!0,winnersAndBote:!0},x2=()=>{const t=En(),{currentUser:e,userData:n,refreshUserData:r}=Ut(),[i,s]=V.useState({...A2,...(n==null?void 0:n.notificationSettings)||{}}),[o,l]=V.useState(!1),[u,c]=V.useState(""),h=async(y,I)=>{if(!e)return;const C={...i,[y]:I};s(C),l(!0);try{await kt(oe(Q,"users",e.uid),{notificationSettings:C}),await r(),c("Preferencias guardadas")}catch(N){console.error("Error guardando preferencias de notificación:",N),s(i),c("Error al guardar las preferencias")}finally{l(!1)}},m=[{key:"newRounds",title:"Nuevas rondas",description:"Avisarme cuando haya una ronda visible para apostar."},{key:"deadlineReminders",title:"Recordatorios antes del cierre",description:"Avisarme si queda poco tiempo y todavía no he apostado."},{key:"resultsPublished",title:"Resultados publicados",description:"Avisarme cuando se publiquen resultados oficiales."},{key:"winnersAndBote",title:"Ganador o bote",description:"Avisarme cuando haya ganador, empate de ganadores o bote."}];return f.jsxs("div",{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:"Notificaciones"}),f.jsx("button",{onClick:()=>t("/communities"),children:"Volver"})]}),f.jsx("div",{className:"container",children:f.jsxs("div",{className:"card",children:[f.jsx("h2",{style:{marginTop:0},children:"Preferencias"}),f.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px",marginTop:0},children:"Configura qué avisos quieres recibir en este dispositivo y usuario."}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:m.map(y=>f.jsxs("label",{style:{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px",border:"1px solid var(--border-color)",borderRadius:"8px",backgroundColor:"var(--bg-secondary)",cursor:o?"wait":"pointer"},children:[f.jsx("input",{type:"checkbox",checked:i[y.key],disabled:o,onChange:I=>h(y.key,I.target.checked),style:{width:"20px",height:"20px",marginTop:"2px"}}),f.jsxs("span",{style:{flex:1},children:[f.jsx("strong",{style:{display:"block",marginBottom:"4px"},children:y.title}),f.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"13px"},children:y.description})]})]},y.key))}),u&&f.jsx("p",{style:{margin:"14px 0 0 0",color:"var(--text-secondary)",fontSize:"13px"},children:o?"Guardando...":u})]})})]})},hr=({children:t})=>{const{currentUser:e,loading:n}=Ut();return n?f.jsx("div",{className:"loading",children:"Cargando..."}):e?f.jsx(f.Fragment,{children:t}):f.jsx(Dx,{to:"/"})};function C2(){return f.jsx(u2,{children:f.jsx(l2,{children:f.jsx(jx,{basename:"/Porreta",children:f.jsxs(Vx,{children:[f.jsx(cn,{path:"/",element:f.jsx(d2,{})}),f.jsx(cn,{path:"/signup",element:f.jsx(h2,{})}),f.jsx(cn,{path:"/communities",element:f.jsx(hr,{children:f.jsx(f2,{})})}),f.jsx(cn,{path:"/community/:communityId",element:f.jsx(hr,{children:f.jsx(v2,{})})}),f.jsx(cn,{path:"/community/:communityId/create-round",element:f.jsx(hr,{children:f.jsx(_2,{})})}),f.jsx(cn,{path:"/community/:communityId/round/:roundId",element:f.jsx(hr,{children:f.jsx(w2,{})})}),f.jsx(cn,{path:"/community/:communityId/round/:roundId/bet",element:f.jsx(hr,{children:f.jsx(E2,{})})}),f.jsx(cn,{path:"/community/:communityId/round/:roundId/results",element:f.jsx(hr,{children:f.jsx(T2,{})})}),f.jsx(cn,{path:"/notifications",element:f.jsx(hr,{children:f.jsx(x2,{})})}),f.jsx(cn,{path:"/super-admin",element:f.jsx(hr,{children:f.jsx(S2,{})})})]})})})})}Ad.createRoot(document.getElementById("root")).render(f.jsx(Fv.StrictMode,{children:f.jsx(C2,{})}));
