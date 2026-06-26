function PI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function NI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uv={exports:{}},Vu={},Bv={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),bI=Symbol.for("react.portal"),DI=Symbol.for("react.fragment"),OI=Symbol.for("react.strict_mode"),VI=Symbol.for("react.profiler"),LI=Symbol.for("react.provider"),MI=Symbol.for("react.context"),jI=Symbol.for("react.forward_ref"),FI=Symbol.for("react.suspense"),UI=Symbol.for("react.memo"),BI=Symbol.for("react.lazy"),Qm=Symbol.iterator;function zI(t){return t===null||typeof t!="object"?null:(t=Qm&&t[Qm]||t["@@iterator"],typeof t=="function"?t:null)}var zv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$v=Object.assign,Wv={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||zv}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qv(){}qv.prototype=Ls.prototype;function sf(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||zv}var of=sf.prototype=new qv;of.constructor=sf;$v(of,Ls.prototype);of.isPureReactComponent=!0;var Xm=Array.isArray,Hv=Object.prototype.hasOwnProperty,af={current:null},Gv={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hv.call(e,r)&&!Gv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ea,type:t,key:s,ref:o,props:i,_owner:af.current}}function $I(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function WI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ym=/\/+/g;function zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WI(""+t.key):e.toString(36)}function Rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case bI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zc(o,0):r,Xm(i)?(n="",t!=null&&(n=t.replace(Ym,"$&/")+"/"),Rl(i,e,n,"",function(c){return c})):i!=null&&(lf(i)&&(i=$I(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ym,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Xm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+zc(s,l);o+=Rl(s,e,n,u,i)}else if(u=zI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+zc(s,l++),o+=Rl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function il(t,e,n){if(t==null)return t;var r=[],i=0;return Rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},kl={transition:null},HI={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:kl,ReactCurrentOwner:af};function Qv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ls;re.Fragment=DI;re.Profiler=VI;re.PureComponent=sf;re.StrictMode=OI;re.Suspense=FI;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HI;re.act=Qv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$v({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=af.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Hv.call(e,u)&&!Gv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ea,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:MI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:LI,_context:t},t.Consumer=t};re.createElement=Kv;re.createFactory=function(t){var e=Kv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:jI,render:t}};re.isValidElement=lf;re.lazy=function(t){return{$$typeof:BI,_payload:{_status:-1,_result:t},_init:qI}};re.memo=function(t,e){return{$$typeof:UI,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};re.unstable_act=Qv;re.useCallback=function(t,e){return Dt.current.useCallback(t,e)};re.useContext=function(t){return Dt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Dt.current.useEffect(t,e)};re.useId=function(){return Dt.current.useId()};re.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Dt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};re.useRef=function(t){return Dt.current.useRef(t)};re.useState=function(t){return Dt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Dt.current.useTransition()};re.version="18.3.1";Bv.exports=re;var O=Bv.exports;const Xv=NI(O),GI=PI({__proto__:null,default:Xv},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KI=O,QI=Symbol.for("react.element"),XI=Symbol.for("react.fragment"),YI=Object.prototype.hasOwnProperty,JI=KI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZI={key:!0,ref:!0,__self:!0,__source:!0};function Yv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)YI.call(e,r)&&!ZI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:QI,type:t,key:s,ref:o,props:i,_owner:JI.current}}Vu.Fragment=XI;Vu.jsx=Yv;Vu.jsxs=Yv;Uv.exports=Vu;var h=Uv.exports,Vd={},Jv={exports:{}},Jt={},Zv={exports:{}},e_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,q){var Y=z.length;z.push(q);e:for(;0<Y;){var fe=Y-1>>>1,ce=z[fe];if(0<i(ce,q))z[fe]=q,z[Y]=ce,Y=fe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],Y=z.pop();if(Y!==q){z[0]=Y;e:for(var fe=0,ce=z.length,Se=ce>>>1;fe<Se;){var It=2*(fe+1)-1,St=z[It],xt=It+1,K=z[xt];if(0>i(St,Y))xt<ce&&0>i(K,St)?(z[fe]=K,z[xt]=Y,fe=xt):(z[fe]=St,z[It]=Y,fe=It);else if(xt<ce&&0>i(K,Y))z[fe]=K,z[xt]=Y,fe=xt;else break e}}return q}function i(z,q){var Y=z.sortIndex-q.sortIndex;return Y!==0?Y:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,y=3,I=!1,A=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=z)r(c),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(c)}}function V(z){if(P=!1,x(z),!A)if(n(u)!==null)A=!0,Tt(R);else{var q=n(c);q!==null&&Ve(V,q.startTime-z)}}function R(z,q){A=!1,P&&(P=!1,S(g),g=-1),I=!0;var Y=y;try{for(x(q),m=n(u);m!==null&&(!(m.expirationTime>q)||z&&!k());){var fe=m.callback;if(typeof fe=="function"){m.callback=null,y=m.priorityLevel;var ce=fe(m.expirationTime<=q);q=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(u)&&r(u),x(q)}else r(u);m=n(u)}if(m!==null)var Se=!0;else{var It=n(c);It!==null&&Ve(V,It.startTime-q),Se=!1}return Se}finally{m=null,y=Y,I=!1}}var N=!1,_=null,g=-1,w=5,E=-1;function k(){return!(t.unstable_now()-E<w)}function b(){if(_!==null){var z=t.unstable_now();E=z;var q=!0;try{q=_(!0,z)}finally{q?C():(N=!1,_=null)}}else N=!1}var C;if(typeof T=="function")C=function(){T(b)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,we=le.port2;le.port1.onmessage=b,C=function(){we.postMessage(null)}}else C=function(){D(b,0)};function Tt(z){_=z,N||(N=!0,C())}function Ve(z,q){g=D(function(){z(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||I||(A=!0,Tt(R))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var Y=y;y=q;try{return z()}finally{y=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=y;y=z;try{return q()}finally{y=Y}},t.unstable_scheduleCallback=function(z,q,Y){var fe=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?fe+Y:fe):Y=fe,z){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Y+ce,z={id:f++,callback:q,priorityLevel:z,startTime:Y,expirationTime:ce,sortIndex:-1},Y>fe?(z.sortIndex=Y,e(c,z),n(u)===null&&z===n(c)&&(P?(S(g),g=-1):P=!0,Ve(V,Y-fe))):(z.sortIndex=ce,e(u,z),A||I||(A=!0,Tt(R))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var q=y;return function(){var Y=y;y=q;try{return z.apply(this,arguments)}finally{y=Y}}}})(e_);Zv.exports=e_;var eS=Zv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=O,Yt=eS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t_=new Set,zo={};function Ri(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(zo[t]=e,t=0;t<e.length;t++)t_.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ld=Object.prototype.hasOwnProperty,nS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jm={},Zm={};function rS(t){return Ld.call(Zm,t)?!0:Ld.call(Jm,t)?!1:nS.test(t)?Zm[t]=!0:(Jm[t]=!0,!1)}function iS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sS(t,e,n,r){if(e===null||typeof e>"u"||iS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,cf);ut[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,cf);ut[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,cf);ut[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function df(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sS(e,n,i,r)&&(n=null),r||i===null?rS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ur=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sl=Symbol.for("react.element"),Gi=Symbol.for("react.portal"),Ki=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),Md=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),r_=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Fd=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),i_=Symbol.for("react.offscreen"),eg=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=eg&&t[eg]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,$c;function _o(t){if($c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$c=e&&e[1]||""}return`
`+$c+t}var Wc=!1;function qc(t,e){if(!t||Wc)return"";Wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function oS(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=qc(t.type,!1),t;case 11:return t=qc(t.type.render,!1),t;case 1:return t=qc(t.type,!0),t;default:return""}}function Ud(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ki:return"Fragment";case Gi:return"Portal";case Md:return"Profiler";case hf:return"StrictMode";case jd:return"Suspense";case Fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r_:return(t.displayName||"Context")+".Consumer";case n_:return(t._context.displayName||"Context")+".Provider";case ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pf:return e=t.displayName||null,e!==null?e:Ud(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return Ud(t(e))}catch{}}return null}function aS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ud(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lS(t){var e=s_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ol(t){t._valueTracker||(t._valueTracker=lS(t))}function o_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=s_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bd(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a_(t,e){e=e.checked,e!=null&&df(t,"checked",e,!1)}function zd(t,e){a_(t,e);var n=Fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$d(t,e.type,n):e.hasOwnProperty("defaultValue")&&$d(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ng(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $d(t,e,n){(e!=="number"||Ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(wo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function l_(t,e){var n=Fr(e.value),r=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ig(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function u_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?u_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var al,c_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(al=al||document.createElement("div"),al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uS=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){uS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function d_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function h_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=d_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cS=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hd(t,e){if(e){if(cS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qd=null,as=null,ls=null;function sg(t){if(t=Sa(t)){if(typeof Qd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Uu(e),Qd(t.stateNode,t.type,e))}}function f_(t){as?ls?ls.push(t):ls=[t]:as=t}function p_(){if(as){var t=as,e=ls;if(ls=as=null,sg(t),e)for(t=0;t<e.length;t++)sg(e[t])}}function m_(t,e){return t(e)}function g_(){}var Hc=!1;function y_(t,e,n){if(Hc)return t(e,n);Hc=!0;try{return m_(t,e,n)}finally{Hc=!1,(as!==null||ls!==null)&&(g_(),p_())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var r=Uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Xd=!1;if(tr)try{var co={};Object.defineProperty(co,"passive",{get:function(){Xd=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Xd=!1}function dS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Po=!1,Xl=null,Yl=!1,Yd=null,hS={onError:function(t){Po=!0,Xl=t}};function fS(t,e,n,r,i,s,o,l,u){Po=!1,Xl=null,dS.apply(hS,arguments)}function pS(t,e,n,r,i,s,o,l,u){if(fS.apply(this,arguments),Po){if(Po){var c=Xl;Po=!1,Xl=null}else throw Error(B(198));Yl||(Yl=!0,Yd=c)}}function ki(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function og(t){if(ki(t)!==t)throw Error(B(188))}function mS(t){var e=t.alternate;if(!e){if(e=ki(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return og(i),t;if(s===r)return og(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function __(t){return t=mS(t),t!==null?w_(t):null}function w_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w_(t);if(e!==null)return e;t=t.sibling}return null}var E_=Yt.unstable_scheduleCallback,ag=Yt.unstable_cancelCallback,gS=Yt.unstable_shouldYield,yS=Yt.unstable_requestPaint,$e=Yt.unstable_now,vS=Yt.unstable_getCurrentPriorityLevel,gf=Yt.unstable_ImmediatePriority,T_=Yt.unstable_UserBlockingPriority,Jl=Yt.unstable_NormalPriority,_S=Yt.unstable_LowPriority,I_=Yt.unstable_IdlePriority,Lu=null,Dn=null;function wS(t){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(Lu,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:IS,ES=Math.log,TS=Math.LN2;function IS(t){return t>>>=0,t===0?32:31-(ES(t)/TS|0)|0}var ll=64,ul=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Eo(l):(s&=o,s!==0&&(r=Eo(s)))}else o=n&~i,o!==0?r=Eo(o):s!==0&&(r=Eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),i=1<<n,r|=t[n],e&=~i;return r}function SS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=SS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Jd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S_(){var t=ll;return ll<<=1,!(ll&4194240)&&(ll=64),t}function Gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function AS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function x_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var A_,vf,C_,R_,k_,Zd=!1,cl=[],kr=null,Pr=null,Nr=null,qo=new Map,Ho=new Map,_r=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lg(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function ho(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Sa(e),e!==null&&vf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RS(t,e,n,r,i){switch(e){case"focusin":return kr=ho(kr,t,e,n,r,i),!0;case"dragenter":return Pr=ho(Pr,t,e,n,r,i),!0;case"mouseover":return Nr=ho(Nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qo.set(s,ho(qo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,ho(Ho.get(s)||null,t,e,n,r,i)),!0}return!1}function P_(t){var e=ai(t.target);if(e!==null){var n=ki(e);if(n!==null){if(e=n.tag,e===13){if(e=v_(n),e!==null){t.blockedOn=e,k_(t.priority,function(){C_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kd=r,n.target.dispatchEvent(r),Kd=null}else return e=Sa(n),e!==null&&vf(e),t.blockedOn=n,!1;e.shift()}return!0}function ug(t,e,n){Pl(t)&&n.delete(e)}function kS(){Zd=!1,kr!==null&&Pl(kr)&&(kr=null),Pr!==null&&Pl(Pr)&&(Pr=null),Nr!==null&&Pl(Nr)&&(Nr=null),qo.forEach(ug),Ho.forEach(ug)}function fo(t,e){t.blockedOn===e&&(t.blockedOn=null,Zd||(Zd=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,kS)))}function Go(t){function e(i){return fo(i,t)}if(0<cl.length){fo(cl[0],t);for(var n=1;n<cl.length;n++){var r=cl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&fo(kr,t),Pr!==null&&fo(Pr,t),Nr!==null&&fo(Nr,t),qo.forEach(e),Ho.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)P_(n),n.blockedOn===null&&_r.shift()}var us=ur.ReactCurrentBatchConfig,eu=!0;function PS(t,e,n,r){var i=me,s=us.transition;us.transition=null;try{me=1,_f(t,e,n,r)}finally{me=i,us.transition=s}}function NS(t,e,n,r){var i=me,s=us.transition;us.transition=null;try{me=4,_f(t,e,n,r)}finally{me=i,us.transition=s}}function _f(t,e,n,r){if(eu){var i=eh(t,e,n,r);if(i===null)rd(t,e,r,tu,n),lg(t,r);else if(RS(i,t,e,n,r))r.stopPropagation();else if(lg(t,r),e&4&&-1<CS.indexOf(t)){for(;i!==null;){var s=Sa(i);if(s!==null&&A_(s),s=eh(t,e,n,r),s===null&&rd(t,e,r,tu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rd(t,e,r,null,n)}}var tu=null;function eh(t,e,n,r){if(tu=null,t=mf(r),t=ai(t),t!==null)if(e=ki(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tu=t,null}function N_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vS()){case gf:return 1;case T_:return 4;case Jl:case _S:return 16;case I_:return 536870912;default:return 16}default:return 16}}var xr=null,wf=null,Nl=null;function b_(){if(Nl)return Nl;var t,e=wf,n=e.length,r,i="value"in xr?xr.value:xr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Nl=i.slice(t,1<r?1-r:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function cg(){return!1}function Zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dl:cg,this.isPropagationStopped=cg,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=Zt(Ms),Ia=De({},Ms,{view:0,detail:0}),bS=Zt(Ia),Kc,Qc,po,Mu=De({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Kc=t.screenX-po.screenX,Qc=t.screenY-po.screenY):Qc=Kc=0,po=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),dg=Zt(Mu),DS=De({},Mu,{dataTransfer:0}),OS=Zt(DS),VS=De({},Ia,{relatedTarget:0}),Xc=Zt(VS),LS=De({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),MS=Zt(LS),jS=De({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FS=Zt(jS),US=De({},Ms,{data:0}),hg=Zt(US),BS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$S[t])?!!e[t]:!1}function Tf(){return WS}var qS=De({},Ia,{key:function(t){if(t.key){var e=BS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HS=Zt(qS),GS=De({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fg=Zt(GS),KS=De({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),QS=Zt(KS),XS=De({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),YS=Zt(XS),JS=De({},Mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZS=Zt(JS),ex=[9,13,27,32],If=tr&&"CompositionEvent"in window,No=null;tr&&"documentMode"in document&&(No=document.documentMode);var tx=tr&&"TextEvent"in window&&!No,D_=tr&&(!If||No&&8<No&&11>=No),pg=" ",mg=!1;function O_(t,e){switch(t){case"keyup":return ex.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qi=!1;function nx(t,e){switch(t){case"compositionend":return V_(e);case"keypress":return e.which!==32?null:(mg=!0,pg);case"textInput":return t=e.data,t===pg&&mg?null:t;default:return null}}function rx(t,e){if(Qi)return t==="compositionend"||!If&&O_(t,e)?(t=b_(),Nl=wf=xr=null,Qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D_&&e.locale!=="ko"?null:e.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ix[t.type]:e==="textarea"}function L_(t,e,n,r){f_(r),e=nu(e,"onChange"),0<e.length&&(n=new Ef("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var bo=null,Ko=null;function sx(t){G_(t,0)}function ju(t){var e=Ji(t);if(o_(e))return t}function ox(t,e){if(t==="change")return e}var M_=!1;if(tr){var Yc;if(tr){var Jc="oninput"in document;if(!Jc){var yg=document.createElement("div");yg.setAttribute("oninput","return;"),Jc=typeof yg.oninput=="function"}Yc=Jc}else Yc=!1;M_=Yc&&(!document.documentMode||9<document.documentMode)}function vg(){bo&&(bo.detachEvent("onpropertychange",j_),Ko=bo=null)}function j_(t){if(t.propertyName==="value"&&ju(Ko)){var e=[];L_(e,Ko,t,mf(t)),y_(sx,e)}}function ax(t,e,n){t==="focusin"?(vg(),bo=e,Ko=n,bo.attachEvent("onpropertychange",j_)):t==="focusout"&&vg()}function lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ju(Ko)}function ux(t,e){if(t==="click")return ju(e)}function cx(t,e){if(t==="input"||t==="change")return ju(e)}function dx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:dx;function Qo(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ld.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function _g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wg(t,e){var n=_g(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_g(n)}}function F_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?F_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U_(){for(var t=window,e=Ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ql(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hx(t){var e=U_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&F_(n.ownerDocument.documentElement,n)){if(r!==null&&Sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wg(n,s);var o=wg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fx=tr&&"documentMode"in document&&11>=document.documentMode,Xi=null,th=null,Do=null,nh=!1;function Eg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||Xi==null||Xi!==Ql(r)||(r=Xi,"selectionStart"in r&&Sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&Qo(Do,r)||(Do=r,r=nu(th,"onSelect"),0<r.length&&(e=new Ef("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xi)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yi={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Zc={},B_={};tr&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function Fu(t){if(Zc[t])return Zc[t];if(!Yi[t])return t;var e=Yi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in B_)return Zc[t]=e[n];return t}var z_=Fu("animationend"),$_=Fu("animationiteration"),W_=Fu("animationstart"),q_=Fu("transitionend"),H_=new Map,Tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){H_.set(t,e),Ri(e,[t])}for(var ed=0;ed<Tg.length;ed++){var td=Tg[ed],px=td.toLowerCase(),mx=td[0].toUpperCase()+td.slice(1);Wr(px,"on"+mx)}Wr(z_,"onAnimationEnd");Wr($_,"onAnimationIteration");Wr(W_,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(q_,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function Ig(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pS(r,e,void 0,t),t.currentTarget=null}function G_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Ig(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Ig(i,l,c),s=u}}}if(Yl)throw t=Yd,Yl=!1,Yd=null,t}function Ae(t,e){var n=e[ah];n===void 0&&(n=e[ah]=new Set);var r=t+"__bubble";n.has(r)||(K_(e,t,2,!1),n.add(r))}function nd(t,e,n){var r=0;e&&(r|=4),K_(n,t,r,e)}var fl="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[fl]){t[fl]=!0,t_.forEach(function(n){n!=="selectionchange"&&(gx.has(n)||nd(n,!1,t),nd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fl]||(e[fl]=!0,nd("selectionchange",!1,e))}}function K_(t,e,n,r){switch(N_(e)){case 1:var i=PS;break;case 4:i=NS;break;default:i=_f}n=i.bind(null,e,n,t),i=void 0,!Xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ai(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}y_(function(){var c=s,f=mf(n),m=[];e:{var y=H_.get(t);if(y!==void 0){var I=Ef,A=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":I=HS;break;case"focusin":A="focus",I=Xc;break;case"focusout":A="blur",I=Xc;break;case"beforeblur":case"afterblur":I=Xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=OS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=QS;break;case z_:case $_:case W_:I=MS;break;case q_:I=YS;break;case"scroll":I=bS;break;case"wheel":I=ZS;break;case"copy":case"cut":case"paste":I=FS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=fg}var P=(e&4)!==0,D=!P&&t==="scroll",S=P?y!==null?y+"Capture":null:y;P=[];for(var T=c,x;T!==null;){x=T;var V=x.stateNode;if(x.tag===5&&V!==null&&(x=V,S!==null&&(V=Wo(T,S),V!=null&&P.push(Yo(T,V,x)))),D)break;T=T.return}0<P.length&&(y=new I(y,A,null,n,f),m.push({event:y,listeners:P}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",y&&n!==Kd&&(A=n.relatedTarget||n.fromElement)&&(ai(A)||A[nr]))break e;if((I||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,I?(A=n.relatedTarget||n.toElement,I=c,A=A?ai(A):null,A!==null&&(D=ki(A),A!==D||A.tag!==5&&A.tag!==6)&&(A=null)):(I=null,A=c),I!==A)){if(P=dg,V="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(P=fg,V="onPointerLeave",S="onPointerEnter",T="pointer"),D=I==null?y:Ji(I),x=A==null?y:Ji(A),y=new P(V,T+"leave",I,n,f),y.target=D,y.relatedTarget=x,V=null,ai(f)===c&&(P=new P(S,T+"enter",A,n,f),P.target=x,P.relatedTarget=D,V=P),D=V,I&&A)t:{for(P=I,S=A,T=0,x=P;x;x=$i(x))T++;for(x=0,V=S;V;V=$i(V))x++;for(;0<T-x;)P=$i(P),T--;for(;0<x-T;)S=$i(S),x--;for(;T--;){if(P===S||S!==null&&P===S.alternate)break t;P=$i(P),S=$i(S)}P=null}else P=null;I!==null&&Sg(m,y,I,P,!1),A!==null&&D!==null&&Sg(m,D,A,P,!0)}}e:{if(y=c?Ji(c):window,I=y.nodeName&&y.nodeName.toLowerCase(),I==="select"||I==="input"&&y.type==="file")var R=ox;else if(gg(y))if(M_)R=cx;else{R=lx;var N=ax}else(I=y.nodeName)&&I.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(R=ux);if(R&&(R=R(t,c))){L_(m,R,n,f);break e}N&&N(t,y,c),t==="focusout"&&(N=y._wrapperState)&&N.controlled&&y.type==="number"&&$d(y,"number",y.value)}switch(N=c?Ji(c):window,t){case"focusin":(gg(N)||N.contentEditable==="true")&&(Xi=N,th=c,Do=null);break;case"focusout":Do=th=Xi=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,Eg(m,n,f);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":Eg(m,n,f)}var _;if(If)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Qi?O_(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(D_&&n.locale!=="ko"&&(Qi||g!=="onCompositionStart"?g==="onCompositionEnd"&&Qi&&(_=b_()):(xr=f,wf="value"in xr?xr.value:xr.textContent,Qi=!0)),N=nu(c,g),0<N.length&&(g=new hg(g,t,null,n,f),m.push({event:g,listeners:N}),_?g.data=_:(_=V_(n),_!==null&&(g.data=_)))),(_=tx?nx(t,n):rx(t,n))&&(c=nu(c,"onBeforeInput"),0<c.length&&(f=new hg("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=_))}G_(m,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wo(t,n),s!=null&&r.unshift(Yo(t,s,i)),s=Wo(t,e),s!=null&&r.push(Yo(t,s,i))),t=t.return}return r}function $i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Wo(n,s),u!=null&&o.unshift(Yo(n,u,l))):i||(u=Wo(n,s),u!=null&&o.push(Yo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yx=/\r\n?/g,vx=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(yx,`
`).replace(vx,"")}function pl(t,e,n){if(e=xg(e),xg(t)!==e&&n)throw Error(B(425))}function ru(){}var rh=null,ih=null;function sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,_x=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(t){return Ag.resolve(null).then(t).catch(Ex)}:oh;function Ex(t){setTimeout(function(){throw t})}function id(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Go(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),Nn="__reactFiber$"+js,Jo="__reactProps$"+js,nr="__reactContainer$"+js,ah="__reactEvents$"+js,Tx="__reactListeners$"+js,Ix="__reactHandles$"+js;function ai(t){var e=t[Nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cg(t);t!==null;){if(n=t[Nn])return n;t=Cg(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[Nn]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Uu(t){return t[Jo]||null}var lh=[],Zi=-1;function qr(t){return{current:t}}function Ce(t){0>Zi||(t.current=lh[Zi],lh[Zi]=null,Zi--)}function Ie(t,e){Zi++,lh[Zi]=t.current,t.current=e}var Ur={},wt=qr(Ur),Ft=qr(!1),gi=Ur;function ws(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(t){return t=t.childContextTypes,t!=null}function iu(){Ce(Ft),Ce(wt)}function Rg(t,e,n){if(wt.current!==Ur)throw Error(B(168));Ie(wt,e),Ie(Ft,n)}function Q_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,aS(t)||"Unknown",i));return De({},n,r)}function su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,gi=wt.current,Ie(wt,t),Ie(Ft,Ft.current),!0}function kg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=Q_(t,e,gi),r.__reactInternalMemoizedMergedChildContext=t,Ce(Ft),Ce(wt),Ie(wt,t)):Ce(Ft),Ie(Ft,n)}var qn=null,Bu=!1,sd=!1;function X_(t){qn===null?qn=[t]:qn.push(t)}function Sx(t){Bu=!0,X_(t)}function Hr(){if(!sd&&qn!==null){sd=!0;var t=0,e=me;try{var n=qn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,Bu=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),E_(gf,Hr),i}finally{me=e,sd=!1}}return null}var es=[],ts=0,ou=null,au=0,rn=[],sn=0,yi=null,Hn=1,Gn="";function ii(t,e){es[ts++]=au,es[ts++]=ou,ou=t,au=e}function Y_(t,e,n){rn[sn++]=Hn,rn[sn++]=Gn,rn[sn++]=yi,yi=t;var r=Hn;t=Gn;var i=32-vn(r)-1;r&=~(1<<i),n+=1;var s=32-vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-vn(e)+i|n<<i|r,Gn=s+t}else Hn=1<<s|n<<i|r,Gn=t}function xf(t){t.return!==null&&(ii(t,1),Y_(t,1,0))}function Af(t){for(;t===ou;)ou=es[--ts],es[ts]=null,au=es[--ts],es[ts]=null;for(;t===yi;)yi=rn[--sn],rn[sn]=null,Gn=rn[--sn],rn[sn]=null,Hn=rn[--sn],rn[sn]=null}var Xt=null,Kt=null,Re=!1,yn=null;function J_(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xt=t,Kt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xt=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yi!==null?{id:Hn,overflow:Gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xt=t,Kt=null,!0):!1;default:return!1}}function uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ch(t){if(Re){var e=Kt;if(e){var n=e;if(!Pg(t,e)){if(uh(t))throw Error(B(418));e=br(n.nextSibling);var r=Xt;e&&Pg(t,e)?J_(r,n):(t.flags=t.flags&-4097|2,Re=!1,Xt=t)}}else{if(uh(t))throw Error(B(418));t.flags=t.flags&-4097|2,Re=!1,Xt=t}}}function Ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xt=t}function ml(t){if(t!==Xt)return!1;if(!Re)return Ng(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sh(t.type,t.memoizedProps)),e&&(e=Kt)){if(uh(t))throw Z_(),Error(B(418));for(;e;)J_(t,e),e=br(e.nextSibling)}if(Ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Xt?br(t.stateNode.nextSibling):null;return!0}function Z_(){for(var t=Kt;t;)t=br(t.nextSibling)}function Es(){Kt=Xt=null,Re=!1}function Cf(t){yn===null?yn=[t]:yn.push(t)}var xx=ur.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function gl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bg(t){var e=t._init;return e(t._payload)}function ew(t){function e(S,T){if(t){var x=S.deletions;x===null?(S.deletions=[T],S.flags|=16):x.push(T)}}function n(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function i(S,T){return S=Lr(S,T),S.index=0,S.sibling=null,S}function s(S,T,x){return S.index=x,t?(x=S.alternate,x!==null?(x=x.index,x<T?(S.flags|=2,T):x):(S.flags|=2,T)):(S.flags|=1048576,T)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,T,x,V){return T===null||T.tag!==6?(T=hd(x,S.mode,V),T.return=S,T):(T=i(T,x),T.return=S,T)}function u(S,T,x,V){var R=x.type;return R===Ki?f(S,T,x.props.children,V,x.key):T!==null&&(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===yr&&bg(R)===T.type)?(V=i(T,x.props),V.ref=mo(S,T,x),V.return=S,V):(V=Fl(x.type,x.key,x.props,null,S.mode,V),V.ref=mo(S,T,x),V.return=S,V)}function c(S,T,x,V){return T===null||T.tag!==4||T.stateNode.containerInfo!==x.containerInfo||T.stateNode.implementation!==x.implementation?(T=fd(x,S.mode,V),T.return=S,T):(T=i(T,x.children||[]),T.return=S,T)}function f(S,T,x,V,R){return T===null||T.tag!==7?(T=fi(x,S.mode,V,R),T.return=S,T):(T=i(T,x),T.return=S,T)}function m(S,T,x){if(typeof T=="string"&&T!==""||typeof T=="number")return T=hd(""+T,S.mode,x),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case sl:return x=Fl(T.type,T.key,T.props,null,S.mode,x),x.ref=mo(S,null,T),x.return=S,x;case Gi:return T=fd(T,S.mode,x),T.return=S,T;case yr:var V=T._init;return m(S,V(T._payload),x)}if(wo(T)||uo(T))return T=fi(T,S.mode,x,null),T.return=S,T;gl(S,T)}return null}function y(S,T,x,V){var R=T!==null?T.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:l(S,T,""+x,V);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case sl:return x.key===R?u(S,T,x,V):null;case Gi:return x.key===R?c(S,T,x,V):null;case yr:return R=x._init,y(S,T,R(x._payload),V)}if(wo(x)||uo(x))return R!==null?null:f(S,T,x,V,null);gl(S,x)}return null}function I(S,T,x,V,R){if(typeof V=="string"&&V!==""||typeof V=="number")return S=S.get(x)||null,l(T,S,""+V,R);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case sl:return S=S.get(V.key===null?x:V.key)||null,u(T,S,V,R);case Gi:return S=S.get(V.key===null?x:V.key)||null,c(T,S,V,R);case yr:var N=V._init;return I(S,T,x,N(V._payload),R)}if(wo(V)||uo(V))return S=S.get(x)||null,f(T,S,V,R,null);gl(T,V)}return null}function A(S,T,x,V){for(var R=null,N=null,_=T,g=T=0,w=null;_!==null&&g<x.length;g++){_.index>g?(w=_,_=null):w=_.sibling;var E=y(S,_,x[g],V);if(E===null){_===null&&(_=w);break}t&&_&&E.alternate===null&&e(S,_),T=s(E,T,g),N===null?R=E:N.sibling=E,N=E,_=w}if(g===x.length)return n(S,_),Re&&ii(S,g),R;if(_===null){for(;g<x.length;g++)_=m(S,x[g],V),_!==null&&(T=s(_,T,g),N===null?R=_:N.sibling=_,N=_);return Re&&ii(S,g),R}for(_=r(S,_);g<x.length;g++)w=I(_,S,g,x[g],V),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?g:w.key),T=s(w,T,g),N===null?R=w:N.sibling=w,N=w);return t&&_.forEach(function(k){return e(S,k)}),Re&&ii(S,g),R}function P(S,T,x,V){var R=uo(x);if(typeof R!="function")throw Error(B(150));if(x=R.call(x),x==null)throw Error(B(151));for(var N=R=null,_=T,g=T=0,w=null,E=x.next();_!==null&&!E.done;g++,E=x.next()){_.index>g?(w=_,_=null):w=_.sibling;var k=y(S,_,E.value,V);if(k===null){_===null&&(_=w);break}t&&_&&k.alternate===null&&e(S,_),T=s(k,T,g),N===null?R=k:N.sibling=k,N=k,_=w}if(E.done)return n(S,_),Re&&ii(S,g),R;if(_===null){for(;!E.done;g++,E=x.next())E=m(S,E.value,V),E!==null&&(T=s(E,T,g),N===null?R=E:N.sibling=E,N=E);return Re&&ii(S,g),R}for(_=r(S,_);!E.done;g++,E=x.next())E=I(_,S,g,E.value,V),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?g:E.key),T=s(E,T,g),N===null?R=E:N.sibling=E,N=E);return t&&_.forEach(function(b){return e(S,b)}),Re&&ii(S,g),R}function D(S,T,x,V){if(typeof x=="object"&&x!==null&&x.type===Ki&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case sl:e:{for(var R=x.key,N=T;N!==null;){if(N.key===R){if(R=x.type,R===Ki){if(N.tag===7){n(S,N.sibling),T=i(N,x.props.children),T.return=S,S=T;break e}}else if(N.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===yr&&bg(R)===N.type){n(S,N.sibling),T=i(N,x.props),T.ref=mo(S,N,x),T.return=S,S=T;break e}n(S,N);break}else e(S,N);N=N.sibling}x.type===Ki?(T=fi(x.props.children,S.mode,V,x.key),T.return=S,S=T):(V=Fl(x.type,x.key,x.props,null,S.mode,V),V.ref=mo(S,T,x),V.return=S,S=V)}return o(S);case Gi:e:{for(N=x.key;T!==null;){if(T.key===N)if(T.tag===4&&T.stateNode.containerInfo===x.containerInfo&&T.stateNode.implementation===x.implementation){n(S,T.sibling),T=i(T,x.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else e(S,T);T=T.sibling}T=fd(x,S.mode,V),T.return=S,S=T}return o(S);case yr:return N=x._init,D(S,T,N(x._payload),V)}if(wo(x))return A(S,T,x,V);if(uo(x))return P(S,T,x,V);gl(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,T!==null&&T.tag===6?(n(S,T.sibling),T=i(T,x),T.return=S,S=T):(n(S,T),T=hd(x,S.mode,V),T.return=S,S=T),o(S)):n(S,T)}return D}var Ts=ew(!0),tw=ew(!1),lu=qr(null),uu=null,ns=null,Rf=null;function kf(){Rf=ns=uu=null}function Pf(t){var e=lu.current;Ce(lu),t._currentValue=e}function dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){uu=t,Rf=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(Rf!==t)if(t={context:t,memoizedValue:e,next:null},ns===null){if(uu===null)throw Error(B(308));ns=t,uu.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return e}var li=null;function Nf(t){li===null?li=[t]:li.push(t)}function nw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nf(e)):(n.next=i.next,i.next=n),e.interleaved=n,rr(t,r)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rr(t,n)}return i=r.interleaved,i===null?(e.next=e,Nf(r)):(e.next=i.next,i.next=e),r.interleaved=e,rr(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yf(t,n)}}function Dg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cu(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var y=l.lane,I=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,P=l;switch(y=e,I=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){m=A.call(I,m,y);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,y=typeof A=="function"?A.call(I,m,y):A,y==null)break e;m=De({},m,y);break e;case 2:vr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else I={eventTime:I,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=I,u=m):f=f.next=I,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_i|=o,t.lanes=o,t.memoizedState=m}}function Og(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var xa={},On=qr(xa),Zo=qr(xa),ea=qr(xa);function ui(t){if(t===xa)throw Error(B(174));return t}function Df(t,e){switch(Ie(ea,e),Ie(Zo,t),Ie(On,xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qd(e,t)}Ce(On),Ie(On,e)}function Is(){Ce(On),Ce(Zo),Ce(ea)}function iw(t){ui(ea.current);var e=ui(On.current),n=qd(e,t.type);e!==n&&(Ie(Zo,t),Ie(On,n))}function Of(t){Zo.current===t&&(Ce(On),Ce(Zo))}var Pe=qr(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var od=[];function Vf(){for(var t=0;t<od.length;t++)od[t]._workInProgressVersionPrimary=null;od.length=0}var Ol=ur.ReactCurrentDispatcher,ad=ur.ReactCurrentBatchConfig,vi=0,Ne=null,Qe=null,tt=null,hu=!1,Oo=!1,ta=0,Ax=0;function ft(){throw Error(B(321))}function Lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Mf(t,e,n,r,i,s){if(vi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?Px:Nx,t=n(r,i),Oo){s=0;do{if(Oo=!1,ta=0,25<=s)throw Error(B(301));s+=1,tt=Qe=null,e.updateQueue=null,Ol.current=bx,t=n(r,i)}while(Oo)}if(Ol.current=fu,e=Qe!==null&&Qe.next!==null,vi=0,tt=Qe=Ne=null,hu=!1,e)throw Error(B(300));return t}function jf(){var t=ta!==0;return ta=0,t}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Ne.memoizedState=tt=t:tt=tt.next=t,tt}function un(){if(Qe===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=tt===null?Ne.memoizedState:tt.next;if(e!==null)tt=e,Qe=t;else{if(t===null)throw Error(B(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},tt===null?Ne.memoizedState=tt=t:tt=tt.next=t}return tt}function na(t,e){return typeof e=="function"?e(t):e}function ld(t){var e=un(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((vi&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ne.lanes|=f,_i|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,wn(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,_i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ud(t){var e=un(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function sw(){}function ow(t,e){var n=Ne,r=un(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,Ff(uw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,ra(9,lw.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(B(349));vi&30||aw(n,e,i)}return i}function aw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lw(t,e,n,r){e.value=n,e.getSnapshot=r,cw(e)&&dw(t)}function uw(t,e,n){return n(function(){cw(e)&&dw(t)})}function cw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function dw(t){var e=rr(t,1);e!==null&&_n(e,t,1,-1)}function Vg(t){var e=Pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=kx.bind(null,Ne,t),[e.memoizedState,t]}function ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hw(){return un().memoizedState}function Vl(t,e,n,r){var i=Pn();Ne.flags|=t,i.memoizedState=ra(1|e,n,void 0,r===void 0?null:r)}function zu(t,e,n,r){var i=un();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&Lf(r,o.deps)){i.memoizedState=ra(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=ra(1|e,n,s,r)}function Lg(t,e){return Vl(8390656,8,t,e)}function Ff(t,e){return zu(2048,8,t,e)}function fw(t,e){return zu(4,2,t,e)}function pw(t,e){return zu(4,4,t,e)}function mw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gw(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,mw.bind(null,e,t),n)}function Uf(){}function yw(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vw(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _w(t,e,n){return vi&21?(wn(n,e)||(n=S_(),Ne.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function Cx(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=ad.transition;ad.transition={};try{t(!1),e()}finally{me=n,ad.transition=r}}function ww(){return un().memoizedState}function Rx(t,e,n){var r=Vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ew(t))Tw(e,n);else if(n=nw(t,e,n,r),n!==null){var i=kt();_n(n,t,r,i),Iw(n,e,r)}}function kx(t,e,n){var r=Vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ew(t))Tw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,wn(l,o)){var u=e.interleaved;u===null?(i.next=i,Nf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=nw(t,e,i,r),n!==null&&(i=kt(),_n(n,t,r,i),Iw(n,e,r))}}function Ew(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function Tw(t,e){Oo=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yf(t,n)}}var fu={readContext:ln,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},Px={readContext:ln,useCallback:function(t,e){return Pn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:Lg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,mw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=Pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Rx.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Pn();return t={current:t},e.memoizedState=t},useState:Vg,useDebugValue:Uf,useDeferredValue:function(t){return Pn().memoizedState=t},useTransition:function(){var t=Vg(!1),e=t[0];return t=Cx.bind(null,t[1]),Pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=Pn();if(Re){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),nt===null)throw Error(B(349));vi&30||aw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lg(uw.bind(null,r,s,t),[t]),r.flags|=2048,ra(9,lw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pn(),e=nt.identifierPrefix;if(Re){var n=Gn,r=Hn;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ax++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Nx={readContext:ln,useCallback:yw,useContext:ln,useEffect:Ff,useImperativeHandle:gw,useInsertionEffect:fw,useLayoutEffect:pw,useMemo:vw,useReducer:ld,useRef:hw,useState:function(){return ld(na)},useDebugValue:Uf,useDeferredValue:function(t){var e=un();return _w(e,Qe.memoizedState,t)},useTransition:function(){var t=ld(na)[0],e=un().memoizedState;return[t,e]},useMutableSource:sw,useSyncExternalStore:ow,useId:ww,unstable_isNewReconciler:!1},bx={readContext:ln,useCallback:yw,useContext:ln,useEffect:Ff,useImperativeHandle:gw,useInsertionEffect:fw,useLayoutEffect:pw,useMemo:vw,useReducer:ud,useRef:hw,useState:function(){return ud(na)},useDebugValue:Uf,useDeferredValue:function(t){var e=un();return Qe===null?e.memoizedState=t:_w(e,Qe.memoizedState,t)},useTransition:function(){var t=ud(na)[0],e=un().memoizedState;return[t,e]},useMutableSource:sw,useSyncExternalStore:ow,useId:ww,unstable_isNewReconciler:!1};function mn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $u={isMounted:function(t){return(t=t._reactInternals)?ki(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Vr(t),s=Yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,i),e!==null&&(_n(e,t,i,r),Dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Vr(t),s=Yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,i),e!==null&&(_n(e,t,i,r),Dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=Vr(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Dr(t,i,r),e!==null&&(_n(e,t,r,n),Dl(e,t,r))}};function Mg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qo(n,r)||!Qo(i,s):!0}function Sw(t,e,n){var r=!1,i=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(i=Ut(e)?gi:wt.current,r=e.contextTypes,s=(r=r!=null)?ws(t,i):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$u.enqueueReplaceState(e,e.state,null)}function fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},bf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ln(s):(s=Ut(e)?gi:wt.current,i.context=ws(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$u.enqueueReplaceState(i,i.state,null),cu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",r=e;do n+=oS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function xw(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mu||(mu=!0,Sh=r),ph(t,e)},n}function Aw(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ph(t,e),typeof r!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Dx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Gx.bind(null,t,e,n),e.then(t,t))}function Ug(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var Ox=ur.ReactCurrentOwner,jt=!1;function Rt(t,e,n,r){e.child=t===null?tw(e,null,n,r):Ts(e,t.child,n,r)}function zg(t,e,n,r,i){n=n.render;var s=e.ref;return cs(e,i),r=Mf(t,e,n,r,s,i),n=jf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Re&&n&&xf(e),e.flags|=1,Rt(t,e,r,i),e.child)}function $g(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cw(t,e,s,r,i)):(t=Fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(o,r)&&t.ref===e.ref)return ir(t,e,i)}return e.flags|=1,t=Lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Cw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qo(s,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,ir(t,e,i)}return mh(t,e,n,r,i)}function Rw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(is,Gt),Gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(is,Gt),Gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(is,Gt),Gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(is,Gt),Gt|=r;return Rt(t,e,i,n),e.child}function kw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mh(t,e,n,r,i){var s=Ut(n)?gi:wt.current;return s=ws(e,s),cs(e,i),n=Mf(t,e,n,r,s,i),r=jf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Re&&r&&xf(e),e.flags|=1,Rt(t,e,n,i),e.child)}function Wg(t,e,n,r,i){if(Ut(n)){var s=!0;su(e)}else s=!1;if(cs(e,i),e.stateNode===null)Ll(t,e),Sw(e,n,r),fh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ln(c):(c=Ut(n)?gi:wt.current,c=ws(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&jg(e,o,r,c),vr=!1;var y=e.memoizedState;o.state=y,cu(e,r,o,i),u=e.memoizedState,l!==r||y!==u||Ft.current||vr?(typeof f=="function"&&(hh(e,n,f,r),u=e.memoizedState),(l=vr||Mg(e,n,l,r,y,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:mn(e.type,l),o.props=c,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=ln(u):(u=Ut(n)?gi:wt.current,u=ws(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&jg(e,o,r,u),vr=!1,y=e.memoizedState,o.state=y,cu(e,r,o,i);var A=e.memoizedState;l!==m||y!==A||Ft.current||vr?(typeof I=="function"&&(hh(e,n,I,r),A=e.memoizedState),(c=vr||Mg(e,n,c,r,y,A,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return gh(t,e,n,r,s,i)}function gh(t,e,n,r,i,s){kw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&kg(e,n,!1),ir(t,e,s);r=e.stateNode,Ox.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,l,s)):Rt(t,e,l,s),e.memoizedState=r.state,i&&kg(e,n,!0),e.child}function Pw(t){var e=t.stateNode;e.pendingContext?Rg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rg(t,e.context,!1),Df(t,e.containerInfo)}function qg(t,e,n,r,i){return Es(),Cf(i),e.flags|=256,Rt(t,e,n,r),e.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nw(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Pe,i&1),t===null)return ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Hu(o,r,0,null),t=fi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vh(n),e.memoizedState=yh,t):Bf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Vx(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Lr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Lr(l,s):(s=fi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yh,r}return s=t.child,t=s.sibling,r=Lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bf(t,e){return e=Hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yl(t,e,n,r){return r!==null&&Cf(r),Ts(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cd(Error(B(422))),yl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Hu({mode:"visible",children:r.children},i,0,null),s=fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ts(e,t.child,null,o),e.child.memoizedState=vh(o),e.memoizedState=yh,s);if(!(e.mode&1))return yl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=cd(s,r,void 0),yl(t,e,o,r)}if(l=(o&t.childLanes)!==0,jt||l){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rr(t,i),_n(r,t,i,-1))}return Gf(),r=cd(Error(B(421))),yl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Kx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Kt=br(i.nextSibling),Xt=e,Re=!0,yn=null,t!==null&&(rn[sn++]=Hn,rn[sn++]=Gn,rn[sn++]=yi,Hn=t.id,Gn=t.overflow,yi=e),e=Bf(e,r.children),e.flags|=4096,e)}function Hg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dh(t.return,e,n)}function dd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function bw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hg(t,n,e);else if(t.tag===19)Hg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&du(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dd(e,!0,n,null,s);break;case"together":dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lx(t,e,n){switch(e.tag){case 3:Pw(e),Es();break;case 5:iw(e);break;case 1:Ut(e.type)&&su(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(lu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?Nw(t,e,n):(Ie(Pe,Pe.current&1),t=ir(t,e,n),t!==null?t.sibling:null);Ie(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Rw(t,e,n)}return ir(t,e,n)}var Dw,_h,Ow,Vw;Dw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_h=function(){};Ow=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ui(On.current);var s=null;switch(n){case"input":i=Bd(t,i),r=Bd(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=Wd(t,i),r=Wd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ru)}Hd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ae("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Vw=function(t,e,n,r){n!==r&&(e.flags|=4)};function go(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Mx(t,e,n){var r=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Ut(e.type)&&iu(),pt(e),null;case 3:return r=e.stateNode,Is(),Ce(Ft),Ce(wt),Vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(Ch(yn),yn=null))),_h(t,e),pt(e),null;case 5:Of(e);var i=ui(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)Ow(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return pt(e),null}if(t=ui(On.current),ml(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nn]=e,r[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<To.length;i++)Ae(To[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":tg(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":rg(r,s),Ae("invalid",r)}Hd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&pl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&pl(r.textContent,l,t),i=["children",""+l]):zo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":ol(r),ng(r,s,!0);break;case"textarea":ol(r),ig(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ru)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=u_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nn]=e,t[Jo]=r,Dw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gd(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<To.length;i++)Ae(To[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":tg(t,r),i=Bd(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":rg(t,r),i=Wd(t,r),Ae("invalid",t);break;default:i=r}Hd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?h_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&c_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$o(t,u):typeof u=="number"&&$o(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ae("scroll",t):u!=null&&df(t,s,u,o))}switch(n){case"input":ol(t),ng(t,r,!1);break;case"textarea":ol(t),ig(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?os(t,!!r.multiple,s,!1):r.defaultValue!=null&&os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ru)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)Vw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ui(ea.current),ui(On.current),ml(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nn]=e,(s=r.nodeValue!==n)&&(t=Xt,t!==null))switch(t.tag){case 3:pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nn]=e,e.stateNode=r}return pt(e),null;case 13:if(Ce(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Kt!==null&&e.mode&1&&!(e.flags&128))Z_(),Es(),e.flags|=98560,s=!1;else if(s=ml(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Nn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else yn!==null&&(Ch(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Je===0&&(Je=3):Gf())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Is(),_h(t,e),t===null&&Xo(e.stateNode.containerInfo),pt(e),null;case 10:return Pf(e.type._context),pt(e),null;case 17:return Ut(e.type)&&iu(),pt(e),null;case 19:if(Ce(Pe),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)go(s,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,go(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&$e()>xs&&(e.flags|=128,r=!0,go(s,!1),e.lanes=4194304)}else{if(!r)if(t=du(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return pt(e),null}else 2*$e()-s.renderingStartTime>xs&&n!==1073741824&&(e.flags|=128,r=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$e(),e.sibling=null,n=Pe.current,Ie(Pe,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return Hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Gt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function jx(t,e){switch(Af(e),e.tag){case 1:return Ut(e.type)&&iu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),Ce(Ft),Ce(wt),Vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Of(e),null;case 13:if(Ce(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Pe),null;case 4:return Is(),null;case 10:return Pf(e.type._context),null;case 22:case 23:return Hf(),null;case 24:return null;default:return null}}var vl=!1,yt=!1,Fx=typeof WeakSet=="function"?WeakSet:Set,H=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function wh(t,e,n){try{n()}catch(r){je(t,e,r)}}var Gg=!1;function Ux(t,e){if(rh=eu,t=U_(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,y=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)y=m,m=I;for(;;){if(m===t)break t;if(y===n&&++c===i&&(l=o),y===s&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:t,selectionRange:n},eu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,D=A.memoizedState,S=e.stateNode,T=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:mn(e.type,P),D);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(V){je(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return A=Gg,Gg=!1,A}function Vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wh(e,n,s)}i=i.next}while(i!==r)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lw(t){var e=t.alternate;e!==null&&(t.alternate=null,Lw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[Jo],delete e[ah],delete e[Tx],delete e[Ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mw(t){return t.tag===5||t.tag===3||t.tag===4}function Kg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ru));else if(r!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}var it=null,gn=!1;function pr(t,e,n){for(n=n.child;n!==null;)jw(t,e,n),n=n.sibling}function jw(t,e,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(Lu,n)}catch{}switch(n.tag){case 5:yt||rs(n,e);case 6:var r=it,i=gn;it=null,pr(t,e,n),it=r,gn=i,it!==null&&(gn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(gn?(t=it,n=n.stateNode,t.nodeType===8?id(t.parentNode,n):t.nodeType===1&&id(t,n),Go(t)):id(it,n.stateNode));break;case 4:r=it,i=gn,it=n.stateNode.containerInfo,gn=!0,pr(t,e,n),it=r,gn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wh(n,e,o),i=i.next}while(i!==r)}pr(t,e,n);break;case 1:if(!yt&&(rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,e,l)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,pr(t,e,n),yt=r):pr(t,e,n);break;default:pr(t,e,n)}}function Qg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fx),e.forEach(function(r){var i=Qx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,gn=!1;break e;case 3:it=l.stateNode.containerInfo,gn=!0;break e;case 4:it=l.stateNode.containerInfo,gn=!0;break e}l=l.return}if(it===null)throw Error(B(160));jw(s,o,i),it=null,gn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fw(e,t),e=e.sibling}function Fw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),kn(t),r&4){try{Vo(3,t,t.return),Wu(3,t)}catch(P){je(t,t.return,P)}try{Vo(5,t,t.return)}catch(P){je(t,t.return,P)}}break;case 1:fn(e,t),kn(t),r&512&&n!==null&&rs(n,n.return);break;case 5:if(fn(e,t),kn(t),r&512&&n!==null&&rs(n,n.return),t.flags&32){var i=t.stateNode;try{$o(i,"")}catch(P){je(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&a_(i,s),Gd(l,o);var c=Gd(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?h_(i,m):f==="dangerouslySetInnerHTML"?c_(i,m):f==="children"?$o(i,m):df(i,f,m,c)}switch(l){case"input":zd(i,s);break;case"textarea":l_(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?os(i,!!s.multiple,I,!1):y!==!!s.multiple&&(s.defaultValue!=null?os(i,!!s.multiple,s.defaultValue,!0):os(i,!!s.multiple,s.multiple?[]:"",!1))}i[Jo]=s}catch(P){je(t,t.return,P)}}break;case 6:if(fn(e,t),kn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){je(t,t.return,P)}}break;case 3:if(fn(e,t),kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(e.containerInfo)}catch(P){je(t,t.return,P)}break;case 4:fn(e,t),kn(t);break;case 13:fn(e,t),kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wf=$e())),r&4&&Qg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(c=yt)||f,fn(e,t),yt=c):fn(e,t),kn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(y=H,I=y.child,y.tag){case 0:case 11:case 14:case 15:Vo(4,y,y.return);break;case 1:rs(y,y.return);var A=y.stateNode;if(typeof A.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){je(r,n,P)}}break;case 5:rs(y,y.return);break;case 22:if(y.memoizedState!==null){Yg(m);continue}}I!==null?(I.return=y,H=I):Yg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=d_("display",o))}catch(P){je(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){je(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:fn(e,t),kn(t),r&4&&Qg(t);break;case 21:break;default:fn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($o(i,""),r.flags&=-33);var s=Kg(t);Ih(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Kg(t);Th(t,l,o);break;default:throw Error(B(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bx(t,e,n){H=t,Uw(t)}function Uw(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||yt;l=vl;var c=yt;if(vl=o,(yt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Jg(i):u!==null?(u.return=o,H=u):Jg(i);for(;s!==null;)H=s,Uw(s),s=s.sibling;H=i,vl=l,yt=c}Xg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Xg(t)}}function Xg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||Wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Og(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Og(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Go(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}yt||e.flags&512&&Eh(e)}catch(y){je(e,e.return,y)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Yg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Jg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){je(e,i,u)}}var s=e.return;try{Eh(e)}catch(u){je(e,s,u)}break;case 5:var o=e.return;try{Eh(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var zx=Math.ceil,pu=ur.ReactCurrentDispatcher,zf=ur.ReactCurrentOwner,an=ur.ReactCurrentBatchConfig,ue=0,nt=null,qe=null,at=0,Gt=0,is=qr(0),Je=0,ia=null,_i=0,qu=0,$f=0,Lo=null,Lt=null,Wf=0,xs=1/0,$n=null,mu=!1,Sh=null,Or=null,_l=!1,Ar=null,gu=0,Mo=0,xh=null,Ml=-1,jl=0;function kt(){return ue&6?$e():Ml!==-1?Ml:Ml=$e()}function Vr(t){return t.mode&1?ue&2&&at!==0?at&-at:xx.transition!==null?(jl===0&&(jl=S_()),jl):(t=me,t!==0||(t=window.event,t=t===void 0?16:N_(t.type)),t):1}function _n(t,e,n,r){if(50<Mo)throw Mo=0,xh=null,Error(B(185));Ta(t,n,r),(!(ue&2)||t!==nt)&&(t===nt&&(!(ue&2)&&(qu|=n),Je===4&&wr(t,at)),Bt(t,r),n===1&&ue===0&&!(e.mode&1)&&(xs=$e()+500,Bu&&Hr()))}function Bt(t,e){var n=t.callbackNode;xS(t,e);var r=Zl(t,t===nt?at:0);if(r===0)n!==null&&ag(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ag(n),e===1)t.tag===0?Sx(Zg.bind(null,t)):X_(Zg.bind(null,t)),wx(function(){!(ue&6)&&Hr()}),n=null;else{switch(x_(r)){case 1:n=gf;break;case 4:n=T_;break;case 16:n=Jl;break;case 536870912:n=I_;break;default:n=Jl}n=Kw(n,Bw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bw(t,e){if(Ml=-1,jl=0,ue&6)throw Error(B(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var r=Zl(t,t===nt?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yu(t,r);else{e=r;var i=ue;ue|=2;var s=$w();(nt!==t||at!==e)&&($n=null,xs=$e()+500,hi(t,e));do try{qx();break}catch(l){zw(t,l)}while(!0);kf(),pu.current=s,ue=i,qe!==null?e=0:(nt=null,at=0,e=Je)}if(e!==0){if(e===2&&(i=Jd(t),i!==0&&(r=i,e=Ah(t,i))),e===1)throw n=ia,hi(t,0),wr(t,r),Bt(t,$e()),n;if(e===6)wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!$x(i)&&(e=yu(t,r),e===2&&(s=Jd(t),s!==0&&(r=s,e=Ah(t,s))),e===1))throw n=ia,hi(t,0),wr(t,r),Bt(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:si(t,Lt,$n);break;case 3:if(wr(t,r),(r&130023424)===r&&(e=Wf+500-$e(),10<e)){if(Zl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=oh(si.bind(null,t,Lt,$n),e);break}si(t,Lt,$n);break;case 4:if(wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zx(r/1960))-r,10<r){t.timeoutHandle=oh(si.bind(null,t,Lt,$n),r);break}si(t,Lt,$n);break;case 5:si(t,Lt,$n);break;default:throw Error(B(329))}}}return Bt(t,$e()),t.callbackNode===n?Bw.bind(null,t):null}function Ah(t,e){var n=Lo;return t.current.memoizedState.isDehydrated&&(hi(t,e).flags|=256),t=yu(t,e),t!==2&&(e=Lt,Lt=n,e!==null&&Ch(e)),t}function Ch(t){Lt===null?Lt=t:Lt.push.apply(Lt,t)}function $x(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~$f,e&=~qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function Zg(t){if(ue&6)throw Error(B(327));ds();var e=Zl(t,0);if(!(e&1))return Bt(t,$e()),null;var n=yu(t,e);if(t.tag!==0&&n===2){var r=Jd(t);r!==0&&(e=r,n=Ah(t,r))}if(n===1)throw n=ia,hi(t,0),wr(t,e),Bt(t,$e()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,Lt,$n),Bt(t,$e()),null}function qf(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(xs=$e()+500,Bu&&Hr())}}function wi(t){Ar!==null&&Ar.tag===0&&!(ue&6)&&ds();var e=ue;ue|=1;var n=an.transition,r=me;try{if(an.transition=null,me=1,t)return t()}finally{me=r,an.transition=n,ue=e,!(ue&6)&&Hr()}}function Hf(){Gt=is.current,Ce(is)}function hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_x(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&iu();break;case 3:Is(),Ce(Ft),Ce(wt),Vf();break;case 5:Of(r);break;case 4:Is();break;case 13:Ce(Pe);break;case 19:Ce(Pe);break;case 10:Pf(r.type._context);break;case 22:case 23:Hf()}n=n.return}if(nt=t,qe=t=Lr(t.current,null),at=Gt=e,Je=0,ia=null,$f=qu=_i=0,Lt=Lo=null,li!==null){for(e=0;e<li.length;e++)if(n=li[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}li=null}return t}function zw(t,e){do{var n=qe;try{if(kf(),Ol.current=fu,hu){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hu=!1}if(vi=0,tt=Qe=Ne=null,Oo=!1,ta=0,zf.current=null,n===null||n.return===null){Je=1,ia=e,qe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=at,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=Ug(o);if(I!==null){I.flags&=-257,Bg(I,o,l,s,e),I.mode&1&&Fg(s,c,e),e=I,u=c;var A=e.updateQueue;if(A===null){var P=new Set;P.add(u),e.updateQueue=P}else A.add(u);break e}else{if(!(e&1)){Fg(s,c,e),Gf();break e}u=Error(B(426))}}else if(Re&&l.mode&1){var D=Ug(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Bg(D,o,l,s,e),Cf(Ss(u,l));break e}}s=u=Ss(u,l),Je!==4&&(Je=2),Lo===null?Lo=[s]:Lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=xw(s,u,e);Dg(s,S);break e;case 1:l=u;var T=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Or===null||!Or.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=Aw(s,l,e);Dg(s,V);break e}}s=s.return}while(s!==null)}qw(n)}catch(R){e=R,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function $w(){var t=pu.current;return pu.current=fu,t===null?fu:t}function Gf(){(Je===0||Je===3||Je===2)&&(Je=4),nt===null||!(_i&268435455)&&!(qu&268435455)||wr(nt,at)}function yu(t,e){var n=ue;ue|=2;var r=$w();(nt!==t||at!==e)&&($n=null,hi(t,e));do try{Wx();break}catch(i){zw(t,i)}while(!0);if(kf(),ue=n,pu.current=r,qe!==null)throw Error(B(261));return nt=null,at=0,Je}function Wx(){for(;qe!==null;)Ww(qe)}function qx(){for(;qe!==null&&!gS();)Ww(qe)}function Ww(t){var e=Gw(t.alternate,t,Gt);t.memoizedProps=t.pendingProps,e===null?qw(t):qe=e,zf.current=null}function qw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jx(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,qe=null;return}}else if(n=Mx(n,e,Gt),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Je===0&&(Je=5)}function si(t,e,n){var r=me,i=an.transition;try{an.transition=null,me=1,Hx(t,e,n,r)}finally{an.transition=i,me=r}return null}function Hx(t,e,n,r){do ds();while(Ar!==null);if(ue&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AS(t,s),t===nt&&(qe=nt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,Kw(Jl,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=an.transition,an.transition=null;var o=me;me=1;var l=ue;ue|=4,zf.current=null,Ux(t,n),Fw(n,t),hx(ih),eu=!!rh,ih=rh=null,t.current=n,Bx(n),yS(),ue=l,me=o,an.transition=s}else t.current=n;if(_l&&(_l=!1,Ar=t,gu=i),s=t.pendingLanes,s===0&&(Or=null),wS(n.stateNode),Bt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mu)throw mu=!1,t=Sh,Sh=null,t;return gu&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===xh?Mo++:(Mo=0,xh=t):Mo=0,Hr(),null}function ds(){if(Ar!==null){var t=x_(gu),e=an.transition,n=me;try{if(an.transition=null,me=16>t?16:t,Ar===null)var r=!1;else{if(t=Ar,Ar=null,gu=0,ue&6)throw Error(B(331));var i=ue;for(ue|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Vo(8,f,s)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var y=f.sibling,I=f.return;if(Lw(f),f===c){H=null;break}if(y!==null){y.return=I,H=y;break}H=I}}}var A=s.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vo(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,H=S;break e}H=s.return}}var T=t.current;for(H=T;H!==null;){o=H;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,H=x;else e:for(o=T;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wu(9,l)}}catch(R){je(l,l.return,R)}if(l===o){H=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,H=V;break e}H=l.return}}if(ue=i,Hr(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(Lu,t)}catch{}r=!0}return r}finally{me=n,an.transition=e}}return!1}function ey(t,e,n){e=Ss(n,e),e=xw(t,e,1),t=Dr(t,e,1),e=kt(),t!==null&&(Ta(t,1,e),Bt(t,e))}function je(t,e,n){if(t.tag===3)ey(t,t,n);else for(;e!==null;){if(e.tag===3){ey(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Or===null||!Or.has(r))){t=Ss(n,t),t=Aw(e,t,1),e=Dr(e,t,1),t=kt(),e!==null&&(Ta(e,1,t),Bt(e,t));break}}e=e.return}}function Gx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(at&n)===n&&(Je===4||Je===3&&(at&130023424)===at&&500>$e()-Wf?hi(t,0):$f|=n),Bt(t,e)}function Hw(t,e){e===0&&(t.mode&1?(e=ul,ul<<=1,!(ul&130023424)&&(ul=4194304)):e=1);var n=kt();t=rr(t,e),t!==null&&(Ta(t,e,n),Bt(t,n))}function Kx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hw(t,n)}function Qx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Hw(t,n)}var Gw;Gw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,Lx(t,e,n);jt=!!(t.flags&131072)}else jt=!1,Re&&e.flags&1048576&&Y_(e,au,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ll(t,e),t=e.pendingProps;var i=ws(e,wt.current);cs(e,n),i=Mf(null,e,r,t,i,n);var s=jf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(s=!0,su(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bf(e),i.updater=$u,e.stateNode=i,i._reactInternals=e,fh(e,r,t,n),e=gh(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&xf(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Yx(r),t=mn(r,t),i){case 0:e=mh(null,e,r,t,n);break e;case 1:e=Wg(null,e,r,t,n);break e;case 11:e=zg(null,e,r,t,n);break e;case 14:e=$g(null,e,r,mn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Wg(t,e,r,i,n);case 3:e:{if(Pw(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,rw(t,e),cu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ss(Error(B(423)),e),e=qg(t,e,r,n,i);break e}else if(r!==i){i=Ss(Error(B(424)),e),e=qg(t,e,r,n,i);break e}else for(Kt=br(e.stateNode.containerInfo.firstChild),Xt=e,Re=!0,yn=null,n=tw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),r===i){e=ir(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return iw(e),t===null&&ch(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,sh(r,i)?o=null:s!==null&&sh(r,s)&&(e.flags|=32),kw(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&ch(e),null;case 13:return Nw(t,e,n);case 4:return Df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ts(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),zg(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(lu,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Ft.current){e=ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Yn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),dh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),dh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,cs(e,n),i=ln(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),$g(t,e,r,i,n);case 15:return Cw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Ll(t,e),e.tag=1,Ut(r)?(t=!0,su(e)):t=!1,cs(e,n),Sw(e,r,i),fh(e,r,i,n),gh(null,e,r,!0,t,n);case 19:return bw(t,e,n);case 22:return Rw(t,e,n)}throw Error(B(156,e.tag))};function Kw(t,e){return E_(t,e)}function Xx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new Xx(t,e,n,r)}function Kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yx(t){if(typeof t=="function")return Kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ff)return 11;if(t===pf)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ki:return fi(n.children,i,s,e);case hf:o=8,i|=8;break;case Md:return t=on(12,n,e,i|2),t.elementType=Md,t.lanes=s,t;case jd:return t=on(13,n,e,i),t.elementType=jd,t.lanes=s,t;case Fd:return t=on(19,n,e,i),t.elementType=Fd,t.lanes=s,t;case i_:return Hu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n_:o=10;break e;case r_:o=9;break e;case ff:o=11;break e;case pf:o=14;break e;case yr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fi(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function Hu(t,e,n,r){return t=on(22,t,r,e),t.elementType=i_,t.lanes=n,t.stateNode={isHidden:!1},t}function hd(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function fd(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gc(0),this.expirationTimes=Gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qf(t,e,n,r,i,s,o,l,u){return t=new Jx(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bf(s),t}function Zx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qw(t){if(!t)return Ur;t=t._reactInternals;e:{if(ki(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Ut(n))return Q_(t,n,e)}return e}function Xw(t,e,n,r,i,s,o,l,u){return t=Qf(n,r,!0,t,i,s,o,l,u),t.context=Qw(null),n=t.current,r=kt(),i=Vr(n),s=Yn(r,i),s.callback=e??null,Dr(n,s,i),t.current.lanes=i,Ta(t,i,r),Bt(t,r),t}function Gu(t,e,n,r){var i=e.current,s=kt(),o=Vr(i);return n=Qw(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dr(i,e,o),t!==null&&(_n(t,i,o,s),Dl(t,i,o)),o}function vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xf(t,e){ty(t,e),(t=t.alternate)&&ty(t,e)}function eA(){return null}var Yw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yf(t){this._internalRoot=t}Ku.prototype.render=Yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Gu(t,e,null,null)};Ku.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){Gu(null,t,null,null)}),e[nr]=null}};function Ku(t){this._internalRoot=t}Ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=R_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&P_(t)}};function Jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ny(){}function tA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=vu(o);s.call(c)}}var o=Xw(e,r,t,0,null,!1,!1,"",ny);return t._reactRootContainer=o,t[nr]=o.current,Xo(t.nodeType===8?t.parentNode:t),wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=vu(u);l.call(c)}}var u=Qf(t,0,!1,null,null,!1,!1,"",ny);return t._reactRootContainer=u,t[nr]=u.current,Xo(t.nodeType===8?t.parentNode:t),wi(function(){Gu(e,u,n,r)}),u}function Xu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=vu(o);l.call(u)}}Gu(e,o,t,i)}else o=tA(n,e,t,i,r);return vu(o)}A_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(yf(e,n|1),Bt(e,$e()),!(ue&6)&&(xs=$e()+500,Hr()))}break;case 13:wi(function(){var r=rr(t,1);if(r!==null){var i=kt();_n(r,t,1,i)}}),Xf(t,1)}};vf=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=kt();_n(e,t,134217728,n)}Xf(t,134217728)}};C_=function(t){if(t.tag===13){var e=Vr(t),n=rr(t,e);if(n!==null){var r=kt();_n(n,t,e,r)}Xf(t,e)}};R_=function(){return me};k_=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Qd=function(t,e,n){switch(e){case"input":if(zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uu(r);if(!i)throw Error(B(90));o_(r),zd(r,i)}}}break;case"textarea":l_(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};m_=qf;g_=wi;var nA={usingClientEntryPoint:!1,Events:[Sa,Ji,Uu,f_,p_,qf]},yo={findFiberByHostInstance:ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rA={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=__(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||eA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{Lu=wl.inject(rA),Dn=wl}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nA;Jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(e))throw Error(B(200));return Zx(t,e,null,n)};Jt.createRoot=function(t,e){if(!Jf(t))throw Error(B(299));var n=!1,r="",i=Yw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qf(t,1,!1,null,null,n,!1,r,i),t[nr]=e.current,Xo(t.nodeType===8?t.parentNode:t),new Yf(e)};Jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=__(e),t=t===null?null:t.stateNode,t};Jt.flushSync=function(t){return wi(t)};Jt.hydrate=function(t,e,n){if(!Qu(e))throw Error(B(200));return Xu(null,t,e,!0,n)};Jt.hydrateRoot=function(t,e,n){if(!Jf(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Yw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xw(e,null,t,1,n??null,i,!1,s,o),t[nr]=e.current,Xo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ku(e)};Jt.render=function(t,e,n){if(!Qu(e))throw Error(B(200));return Xu(null,t,e,!1,n)};Jt.unmountComponentAtNode=function(t){if(!Qu(t))throw Error(B(40));return t._reactRootContainer?(wi(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Jt.unstable_batchedUpdates=qf;Jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qu(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Xu(t,e,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function Jw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jw)}catch(t){console.error(t)}}Jw(),Jv.exports=Jt;var iA=Jv.exports,ry=iA;Vd.createRoot=ry.createRoot,Vd.hydrateRoot=ry.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sa.apply(this,arguments)}var Cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Cr||(Cr={}));const iy="popstate";function sA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Rh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:eE(i)}return aA(e,n,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Zw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oA(){return Math.random().toString(36).substr(2,8)}function sy(t,e){return{usr:t.state,key:t.key,idx:e}}function Rh(t,e,n,r){return n===void 0&&(n=null),sa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fs(e):e,{state:n,key:e&&e.key||r||oA()})}function eE(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function aA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Cr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(sa({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=Cr.Pop;let D=f(),S=D==null?null:D-c;c=D,u&&u({action:l,location:P.location,delta:S})}function y(D,S){l=Cr.Push;let T=Rh(P.location,D,S);c=f()+1;let x=sy(T,c),V=P.createHref(T);try{o.pushState(x,"",V)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(V)}s&&u&&u({action:l,location:P.location,delta:1})}function I(D,S){l=Cr.Replace;let T=Rh(P.location,D,S);c=f();let x=sy(T,c),V=P.createHref(T);o.replaceState(x,"",V),s&&u&&u({action:l,location:P.location,delta:0})}function A(D){let S=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof D=="string"?D:eE(D);return T=T.replace(/ $/,"%20"),Ge(S,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,S)}let P={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(iy,m),u=D,()=>{i.removeEventListener(iy,m),u=null}},createHref(D){return e(i,D)},createURL:A,encodeLocation(D){let S=A(D);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:y,replace:I,go(D){return o.go(D)}};return P}var oy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(oy||(oy={}));function lA(t,e,n){return n===void 0&&(n="/"),uA(t,e,n)}function uA(t,e,n,r){let i=typeof e=="string"?Fs(e):e,s=rE(i.pathname||"/",n);if(s==null)return null;let o=tE(t);cA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=TA(s);l=_A(o[u],c)}return l}function tE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=pi([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),tE(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:yA(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of nE(s.path))i(s,o,u)}),e}function nE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=nE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function cA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dA=/^:[\w-]+$/,hA=3,fA=2,pA=1,mA=10,gA=-2,ay=t=>t==="*";function yA(t,e){let n=t.split("/"),r=n.length;return n.some(ay)&&(r+=gA),e&&(r+=fA),n.filter(i=>!ay(i)).reduce((i,s)=>i+(dA.test(s)?hA:s===""?pA:mA),r)}function vA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _A(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=wA({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),y=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:pi([s,m.pathname]),pathnameBase:AA(pi([s,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(s=pi([s,m.pathnameBase]))}return o}function wA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=EA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,m)=>{let{paramName:y,isOptional:I}=f;if(y==="*"){let P=l[m]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const A=l[m];return I&&!A?c[y]=void 0:c[y]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function EA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Zw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function TA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Zw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function IA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Fs(t):t;return{pathname:n?n.startsWith("/")?n:SA(n,e):e,search:CA(r),hash:RA(i)}}function SA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function iE(t,e){let n=xA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function sE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Fs(t):(i=sa({},t),Ge(!i.pathname||!i.pathname.includes("?"),pd("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),pd("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),pd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}l=m>=0?e[m]:"/"}let u=IA(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const pi=t=>t.join("/").replace(/\/\/+/g,"/"),AA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const oE=["post","put","patch","delete"];new Set(oE);const PA=["get",...oE];new Set(PA);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oa.apply(this,arguments)}const Zf=O.createContext(null),NA=O.createContext(null),Aa=O.createContext(null),Yu=O.createContext(null),Gr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),aE=O.createContext(null);function Ca(){return O.useContext(Yu)!=null}function Ju(){return Ca()||Ge(!1),O.useContext(Yu).location}function lE(t){O.useContext(Aa).static||O.useLayoutEffect(t)}function xn(){let{isDataRoute:t}=O.useContext(Gr);return t?WA():bA()}function bA(){Ca()||Ge(!1);let t=O.useContext(Zf),{basename:e,future:n,navigator:r}=O.useContext(Aa),{matches:i}=O.useContext(Gr),{pathname:s}=Ju(),o=JSON.stringify(iE(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return lE(()=>{l.current=!0}),O.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=sE(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:pi([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function Ra(){let{matches:t}=O.useContext(Gr),e=t[t.length-1];return e?e.params:{}}function DA(t,e){return OA(t,e)}function OA(t,e,n,r){Ca()||Ge(!1);let{navigator:i}=O.useContext(Aa),{matches:s}=O.useContext(Gr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ju(),f;if(e){var m;let D=typeof e=="string"?Fs(e):e;u==="/"||(m=D.pathname)!=null&&m.startsWith(u)||Ge(!1),f=D}else f=c;let y=f.pathname||"/",I=y;if(u!=="/"){let D=u.replace(/^\//,"").split("/");I="/"+y.replace(/^\//,"").split("/").slice(D.length).join("/")}let A=lA(t,{pathname:I}),P=FA(A&&A.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:pi([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:pi([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&P?O.createElement(Yu.Provider,{value:{location:oa({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Cr.Pop}},P):P}function VA(){let t=$A(),e=kA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const LA=O.createElement(VA,null);class MA extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Gr.Provider,{value:this.props.routeContext},O.createElement(aE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jA(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Zf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Gr.Provider,{value:e},r)}function FA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Ge(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:y,errors:I}=n,A=m.route.loader&&y[m.route.id]===void 0&&(!I||I[m.route.id]===void 0);if(m.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,m,y)=>{let I,A=!1,P=null,D=null;n&&(I=l&&m.route.id?l[m.route.id]:void 0,P=m.route.errorElement||LA,u&&(c<0&&y===0?(qA("route-fallback"),A=!0,D=null):c===y&&(A=!0,D=m.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,y+1)),T=()=>{let x;return I?x=P:A?x=D:m.route.Component?x=O.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=f,O.createElement(jA,{match:m,routeContext:{outlet:f,matches:S,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?O.createElement(MA,{location:n.location,revalidation:n.revalidation,component:P,error:I,children:T(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):T()},null)}var uE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(uE||{}),cE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cE||{});function UA(t){let e=O.useContext(Zf);return e||Ge(!1),e}function BA(t){let e=O.useContext(NA);return e||Ge(!1),e}function zA(t){let e=O.useContext(Gr);return e||Ge(!1),e}function dE(t){let e=zA(),n=e.matches[e.matches.length-1];return n.route.id||Ge(!1),n.route.id}function $A(){var t;let e=O.useContext(aE),n=BA(),r=dE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function WA(){let{router:t}=UA(uE.UseNavigateStable),e=dE(cE.UseNavigateStable),n=O.useRef(!1);return lE(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oa({fromRouteId:e},s)))},[t,e])}const ly={};function qA(t,e,n){ly[t]||(ly[t]=!0)}function HA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function GA(t){let{to:e,replace:n,state:r,relative:i}=t;Ca()||Ge(!1);let{future:s,static:o}=O.useContext(Aa),{matches:l}=O.useContext(Gr),{pathname:u}=Ju(),c=xn(),f=sE(e,iE(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return O.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function pn(t){Ge(!1)}function KA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Cr.Pop,navigator:s,static:o=!1,future:l}=t;Ca()&&Ge(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:oa({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Fs(r));let{pathname:f="/",search:m="",hash:y="",state:I=null,key:A="default"}=r,P=O.useMemo(()=>{let D=rE(f,u);return D==null?null:{location:{pathname:D,search:m,hash:y,state:I,key:A},navigationType:i}},[u,f,m,y,I,A,i]);return P==null?null:O.createElement(Aa.Provider,{value:c},O.createElement(Yu.Provider,{children:n,value:P}))}function QA(t){let{children:e,location:n}=t;return DA(kh(e),n)}new Promise(()=>{});function kh(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,kh(r.props.children,s));return}r.type!==pn&&Ge(!1),!r.props.index||!r.props.children||Ge(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=kh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const XA="6";try{window.__reactRouterVersion=XA}catch{}const YA="startTransition",uy=GI[YA];function JA(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=sA({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=O.useCallback(m=>{c&&uy?uy(()=>u(m)):u(m)},[u,c]);return O.useLayoutEffect(()=>o.listen(f),[o,f]),O.useEffect(()=>HA(r),[r]),O.createElement(KA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var cy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(cy||(cy={}));var dy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(dy||(dy={}));var hy={};/**
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
 */const hE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ZA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(y=64)),r.push(n[f],n[m],n[y],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new eC;const y=s<<2|l>>4;if(r.push(y),c!==64){const I=l<<4&240|c>>2;if(r.push(I),m!==64){const A=c<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tC=function(t){const e=hE(t);return fE.encodeByteArray(e,!0)},_u=function(t){return tC(t).replace(/\./g,"")},pE=function(t){try{return fE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rC=()=>nC().__FIREBASE_DEFAULTS__,iC=()=>{if(typeof process>"u"||typeof hy>"u")return;const t=hy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pE(t[1]);return e&&JSON.parse(e)},Zu=()=>{try{return rC()||iC()||sC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mE=t=>{var e,n;return(n=(e=Zu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gE=t=>{const e=mE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yE=()=>{var t;return(t=Zu())===null||t===void 0?void 0:t.config},vE=t=>{var e;return(e=Zu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class oC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function aC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_u(JSON.stringify(n)),_u(JSON.stringify(o)),""].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function uC(){var t;const e=(t=Zu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fC(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pC(){return!uC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _E(){try{return typeof indexedDB=="object"}catch{return!1}}function wE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function mC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const gC="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gC,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function yC(t,e){return t.replace(vC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vC=/\{\$([^}]+)}/g;function _C(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function aa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fy(s)&&fy(o)){if(!aa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fy(t){return t!==null&&typeof t=="object"}/**
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
 */function ka(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function So(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wC(t,e){const n=new EC(t,e);return n.subscribe.bind(n)}class EC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=md),i.error===void 0&&(i.error=md),i.complete===void 0&&(i.complete=md);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function md(){}/**
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
 */function _e(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const oi="[DEFAULT]";/**
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
 */class IC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xC(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SC(t){return t===oi?void 0:t}function xC(t){return t.instantiationMode==="EAGER"}/**
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
 */class AC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const CC={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},RC=oe.INFO,kC={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},PC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ep{constructor(e){this.name=e,this._logLevel=RC,this._logHandler=PC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const NC=(t,e)=>e.some(n=>t instanceof n);let py,my;function bC(){return py||(py=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DC(){return my||(my=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const EE=new WeakMap,Ph=new WeakMap,TE=new WeakMap,gd=new WeakMap,tp=new WeakMap;function OC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&EE.set(n,t)}).catch(()=>{}),tp.set(e,t),e}function VC(t){if(Ph.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ph.set(t,e)}let Nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||TE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LC(t){Nh=t(Nh)}function MC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yd(this),e,...n);return TE.set(r,e.sort?e.sort():[e]),Jn(r)}:DC().includes(t)?function(...e){return t.apply(yd(this),e),Jn(EE.get(this))}:function(...e){return Jn(t.apply(yd(this),e))}}function jC(t){return typeof t=="function"?MC(t):(t instanceof IDBTransaction&&VC(t),NC(t,bC())?new Proxy(t,Nh):t)}function Jn(t){if(t instanceof IDBRequest)return OC(t);if(gd.has(t))return gd.get(t);const e=jC(t);return e!==t&&(gd.set(t,e),tp.set(e,t)),e}const yd=t=>tp.get(t);function ec(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Jn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Jn(o.result),u.oldVersion,u.newVersion,Jn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function vd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Jn(n).then(()=>{})}const FC=["get","getKey","getAll","getAllKeys","count"],UC=["put","add","delete","clear"],_d=new Map;function gy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_d.get(e))return _d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=UC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return _d.set(e,s),s}LC(t=>({...t,get:(e,n,r)=>gy(e,n)||t.get(e,n,r),has:(e,n)=>!!gy(e,n)||t.has(e,n)}));/**
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
 */class BC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bh="@firebase/app",yy="0.10.13";/**
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
 */const sr=new ep("@firebase/app"),$C="@firebase/app-compat",WC="@firebase/analytics-compat",qC="@firebase/analytics",HC="@firebase/app-check-compat",GC="@firebase/app-check",KC="@firebase/auth",QC="@firebase/auth-compat",XC="@firebase/database",YC="@firebase/data-connect",JC="@firebase/database-compat",ZC="@firebase/functions",eR="@firebase/functions-compat",tR="@firebase/installations",nR="@firebase/installations-compat",rR="@firebase/messaging",iR="@firebase/messaging-compat",sR="@firebase/performance",oR="@firebase/performance-compat",aR="@firebase/remote-config",lR="@firebase/remote-config-compat",uR="@firebase/storage",cR="@firebase/storage-compat",dR="@firebase/firestore",hR="@firebase/vertexai-preview",fR="@firebase/firestore-compat",pR="firebase",mR="10.14.1";/**
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
 */const Dh="[DEFAULT]",gR={[bh]:"fire-core",[$C]:"fire-core-compat",[qC]:"fire-analytics",[WC]:"fire-analytics-compat",[GC]:"fire-app-check",[HC]:"fire-app-check-compat",[KC]:"fire-auth",[QC]:"fire-auth-compat",[XC]:"fire-rtdb",[YC]:"fire-data-connect",[JC]:"fire-rtdb-compat",[ZC]:"fire-fn",[eR]:"fire-fn-compat",[tR]:"fire-iid",[nR]:"fire-iid-compat",[rR]:"fire-fcm",[iR]:"fire-fcm-compat",[sR]:"fire-perf",[oR]:"fire-perf-compat",[aR]:"fire-rc",[lR]:"fire-rc-compat",[uR]:"fire-gcs",[cR]:"fire-gcs-compat",[dR]:"fire-fst",[fR]:"fire-fst-compat",[hR]:"fire-vertex","fire-js":"fire-js",[pR]:"fire-js-all"};/**
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
 */const wu=new Map,yR=new Map,Oh=new Map;function vy(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(Oh.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;Oh.set(e,t);for(const n of wu.values())vy(n,t);for(const n of yR.values())vy(n,t);return!0}function Ni(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bn(t){return t.settings!==void 0}/**
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
 */const vR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new Pi("app","Firebase",vR);/**
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
 */class _R{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
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
 */const Us=mR;function IE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Mr.create("bad-app-name",{appName:String(i)});if(n||(n=yE()),!n)throw Mr.create("no-options");const s=wu.get(i);if(s){if(aa(n,s.options)&&aa(r,s.config))return s;throw Mr.create("duplicate-app",{appName:i})}const o=new AC(i);for(const u of Oh.values())o.addComponent(u);const l=new _R(n,r,o);return wu.set(i,l),l}function tc(t=Dh){const e=wu.get(t);if(!e&&t===Dh&&yE())return IE();if(!e)throw Mr.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let i=(r=gR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(l.join(" "));return}En(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const wR="firebase-heartbeat-database",ER=1,la="firebase-heartbeat-store";let wd=null;function SE(){return wd||(wd=ec(wR,ER,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(la)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})})),wd}async function TR(t){try{const n=(await SE()).transaction(la),r=await n.objectStore(la).get(xE(t));return await n.done,r}catch(e){if(e instanceof An)sr.warn(e.message);else{const n=Mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function _y(t,e){try{const r=(await SE()).transaction(la,"readwrite");await r.objectStore(la).put(e,xE(t)),await r.done}catch(n){if(n instanceof An)sr.warn(n.message);else{const r=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function xE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IR=1024,SR=30*24*60*60*1e3;class xR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=SR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wy(),{heartbeatsToSend:r,unsentEntries:i}=AR(this._heartbeatsCache.heartbeats),s=_u(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return sr.warn(n),""}}}function wy(){return new Date().toISOString().substring(0,10)}function AR(t,e=IR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ey(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _E()?wE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ey(t){return _u(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RR(t){En(new cn("platform-logger",e=>new BC(e),"PRIVATE")),En(new cn("heartbeat",e=>new xR(e),"PRIVATE")),zt(bh,yy,t),zt(bh,yy,"esm2017"),zt("fire-js","")}RR("");function np(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function AE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kR=AE,CE=new Pi("auth","Firebase",AE());/**
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
 */const Eu=new ep("@firebase/auth");function PR(t,...e){Eu.logLevel<=oe.WARN&&Eu.warn(`Auth (${Us}): ${t}`,...e)}function Ul(t,...e){Eu.logLevel<=oe.ERROR&&Eu.error(`Auth (${Us}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw rp(t,...e)}function Vn(t,...e){return rp(t,...e)}function RE(t,e,n){const r=Object.assign(Object.assign({},kR()),{[e]:n});return new Pi("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return RE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return CE.create(t,...e)}function J(t,e,...n){if(!t)throw rp(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ul(e),new Error(e)}function or(t,e){t||Kn(e)}/**
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
 */function Vh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NR(){return Ty()==="http:"||Ty()==="https:"}function Ty(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NR()||dC()||"connection"in navigator)?navigator.onLine:!0}function DR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=lC()||hC()}get(){return bR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ip(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VR=new Pa(3e4,6e4);function Kr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qr(t,e,n,r,i={}){return PE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ka(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return cC()||(c.referrerPolicy="no-referrer"),kE.fetch()(NE(t,t.config.apiHost,n,l),c)})}async function PE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OR),e);try{const i=new MR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw El(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw El(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw El(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw RE(t,f,c);Tn(t,f)}}catch(i){if(i instanceof An)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function Na(t,e,n,r,i={}){const s=await Qr(t,e,n,r,i);return"mfaPendingCredential"in s&&Tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function NE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ip(t.config,i):`${t.config.apiScheme}://${i}`}function LR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vn(this.auth,"network-request-failed")),VR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function El(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vn(t,e,r);return i.customData._tokenResponse=n,i}function Iy(t){return t!==void 0&&t.enterprise!==void 0}class jR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return LR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function FR(t,e){return Qr(t,"GET","/v2/recaptchaConfig",Kr(t,e))}/**
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
 */async function UR(t,e){return Qr(t,"POST","/v1/accounts:delete",e)}async function bE(t,e){return Qr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BR(t,e=!1){const n=_e(t),r=await n.getIdToken(e),i=sp(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jo(Ed(i.auth_time)),issuedAtTime:jo(Ed(i.iat)),expirationTime:jo(Ed(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ed(t){return Number(t)*1e3}function sp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=pE(n);return i?JSON.parse(i):(Ul("Failed to decode base64 JWT payload"),null)}catch(i){return Ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sy(t){const e=sp(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ua(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&zR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $R{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ua(t,bE(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?DE(s.providerUserInfo):[],l=qR(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Lh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function WR(t){const e=_e(t);await Tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DE(t){return t.map(e=>{var{providerId:n}=e,r=np(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function HR(t,e){const n=await PE(t,{},async()=>{const r=ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=NE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",kE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GR(t,e){return Qr(t,"POST","/v2/accounts:revokeToken",Kr(t,e))}/**
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
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Sy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
 */function mr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=np(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $R(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ua(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BR(this,e)}reload(){return WR(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await ua(this,UR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:V,isAnonymous:R,providerData:N,stsTokenManager:_}=n;J(x&&_,e,"internal-error");const g=hs.fromJSON(this.name,_);J(typeof x=="string",e,"internal-error"),mr(m,e.name),mr(y,e.name),J(typeof V=="boolean",e,"internal-error"),J(typeof R=="boolean",e,"internal-error"),mr(I,e.name),mr(A,e.name),mr(P,e.name),mr(D,e.name),mr(S,e.name),mr(T,e.name);const w=new Qn({uid:x,auth:e,email:y,emailVerified:V,displayName:m,isAnonymous:R,photoURL:A,phoneNumber:I,tenantId:P,stsTokenManager:g,createdAt:S,lastLoginAt:T});return N&&Array.isArray(N)&&(w.providerData=N.map(E=>Object.assign({},E))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new Qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Tu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?DE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new hs;l.updateFromIdToken(r);const u=new Qn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const xy=new Map;function Xn(t){or(t instanceof Function,"Expected a class definition");let e=xy.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xy.set(t,e),e)}/**
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
 */class OE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OE.type="NONE";const Ay=OE;/**
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
 */function Bl(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(Xn(Ay),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xn(Ay);const o=Bl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const m=Qn._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new fs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fs(s,e,r))}}/**
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
 */function Cy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UE(e))return"Blackberry";if(BE(e))return"Webos";if(LE(e))return"Safari";if((e.includes("chrome/")||ME(e))&&!e.includes("edge/"))return"Chrome";if(FE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VE(t=Et()){return/firefox\//i.test(t)}function LE(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ME(t=Et()){return/crios\//i.test(t)}function jE(t=Et()){return/iemobile/i.test(t)}function FE(t=Et()){return/android/i.test(t)}function UE(t=Et()){return/blackberry/i.test(t)}function BE(t=Et()){return/webos/i.test(t)}function op(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KR(t=Et()){var e;return op(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QR(){return fC()&&document.documentMode===10}function zE(t=Et()){return op(t)||FE(t)||BE(t)||UE(t)||/windows phone/i.test(t)||jE(t)}/**
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
 */function $E(t,e=[]){let n;switch(t){case"Browser":n=Cy(Et());break;case"Worker":n=`${Cy(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${r}`}/**
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
 */class XR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function YR(t,e={}){return Qr(t,"GET","/v2/passwordPolicy",Kr(t,e))}/**
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
 */const JR=6;class ZR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:JR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ek{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ry(this),this.idTokenSubscription=new Ry(this),this.beforeStateQueue=new XR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bE(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(Zn(this));const n=e?_e(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YR(this),n=new ZR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$E(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&PR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bi(t){return _e(t)}class Ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=wC(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tk(t){nc=t}function WE(t){return nc.loadJS(t)}function nk(){return nc.recaptchaEnterpriseScript}function rk(){return nc.gapiScript}function ik(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sk="recaptcha-enterprise",ok="NO_RECAPTCHA";class ak{constructor(e){this.type=sk,this.auth=bi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{FR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new jR(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Iy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ok)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Iy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=nk();u.length!==0&&(u+=l),WE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function ky(t,e,n,r=!1){const i=new ak(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ky(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ky(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function lk(t,e){const n=Ni(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(aa(s,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function uk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ck(t,e,n){const r=bi(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=qE(e),{host:o,port:l}=dk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),hk()}function qE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dk(t){const e=qE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Py(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Py(o)}}}function Py(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ap{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function fk(t,e){return Qr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function pk(t,e){return Na(t,"POST","/v1/accounts:signInWithPassword",Kr(t,e))}/**
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
 */async function mk(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}async function gk(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}/**
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
 */class ca extends ap{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ca(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ca(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,n,"signInWithPassword",pk);case"emailLink":return mk(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,r,"signUpPassword",fk);case"emailLink":return gk(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ps(t,e){return Na(t,"POST","/v1/accounts:signInWithIdp",Kr(t,e))}/**
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
 */const yk="http://localhost";class Ei extends ap{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=np(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:yk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ka(n)}return e}}/**
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
 */function vk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _k(t){const e=Io(So(t)).link,n=e?Io(So(e)).deep_link_id:null,r=Io(So(t)).deep_link_id;return(r?Io(So(r)).link:null)||r||n||e||t}class lp{constructor(e){var n,r,i,s,o,l;const u=Io(So(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=vk((i=u.mode)!==null&&i!==void 0?i:null);J(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=_k(e);try{return new lp(n)}catch{return null}}}/**
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
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return ca._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=lp.parseLink(n);return J(r,"argument-error"),ca._fromEmailAndCode(e,r.code,r.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class HE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ba extends HE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Er extends ba{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
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
 */class Tr extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
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
 */class Ir extends ba{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
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
 */class Sr extends ba{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
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
 */async function wk(t,e){return Na(t,"POST","/v1/accounts:signUp",Kr(t,e))}/**
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
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qn._fromIdTokenResponse(e,r,i),o=Ny(r);return new Ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ny(r);return new Ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ny(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Iu extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Iu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Iu(e,n,r,i)}}function GE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Iu._fromErrorAndOperation(t,s,e,r):s})}async function Ek(t,e,n=!1){const r=await ua(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",r)}/**
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
 */async function Tk(t,e,n=!1){const{auth:r}=t;if(bn(r.app))return Promise.reject(Zn(r));const i="reauthenticate";try{const s=await ua(t,GE(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=sp(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),Ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),s}}/**
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
 */async function KE(t,e,n=!1){if(bn(t.app))return Promise.reject(Zn(t));const r="signIn",i=await GE(t,r,e),s=await Ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ik(t,e){return KE(bi(t),e)}/**
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
 */async function QE(t){const e=bi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Sk(t,e,n){if(bn(t.app))return Promise.reject(Zn(t));const r=bi(t),o=await Mh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&QE(t),u}),l=await Ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function xk(t,e,n){return bn(t.app)?Promise.reject(Zn(t)):Ik(_e(t),Bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&QE(t),r})}function Ak(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function Ck(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function Rk(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function kk(t){return _e(t).signOut()}const Su="__sak";/**
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
 */class XE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Su,"1"),this.storage.removeItem(Su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Pk=1e3,Nk=10;class YE extends XE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Nk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}YE.type="LOCAL";const bk=YE;/**
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
 */class JE extends XE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}JE.type="SESSION";const ZE=JE;/**
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
 */function Dk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Dk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
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
 */function up(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ok{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=up("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ln(){return window}function Vk(t){Ln().location.href=t}/**
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
 */function e0(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function Lk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jk(){return e0()?self:null}/**
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
 */const t0="firebaseLocalStorageDb",Fk=1,xu="firebaseLocalStorage",n0="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ic(t,e){return t.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function Uk(){const t=indexedDB.deleteDatabase(t0);return new Da(t).toPromise()}function jh(){const t=indexedDB.open(t0,Fk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xu,{keyPath:n0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xu)?e(r):(r.close(),await Uk(),e(await jh()))})})}async function by(t,e,n){const r=ic(t,!0).put({[n0]:e,value:n});return new Da(r).toPromise()}async function Bk(t,e){const n=ic(t,!1).get(e),r=await new Da(n).toPromise();return r===void 0?null:r.value}function Dy(t,e){const n=ic(t,!0).delete(e);return new Da(n).toPromise()}const zk=800,$k=3;class r0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$k)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(jk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Lk(),!this.activeServiceWorker)return;this.sender=new Ok(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jh();return await by(e,Su,"1"),await Dy(e,Su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>by(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Bk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ic(i,!1).getAll();return new Da(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}r0.type="LOCAL";const Wk=r0;new Pa(3e4,6e4);/**
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
 */function qk(t,e){return e?Xn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cp extends ap{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hk(t){return KE(t.auth,new cp(t),t.bypassAuthState)}function Gk(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Tk(n,new cp(t),t.bypassAuthState)}async function Kk(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Ek(n,new cp(t),t.bypassAuthState)}/**
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
 */class i0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hk;case"linkViaPopup":case"linkViaRedirect":return Kk;case"reauthViaPopup":case"reauthViaRedirect":return Gk;default:Tn(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qk=new Pa(2e3,1e4);class ss extends i0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ss.currentPopupAction&&ss.currentPopupAction.cancel(),ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qk.get())};e()}}ss.currentPopupAction=null;/**
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
 */const Xk="pendingRedirect",zl=new Map;class Yk extends i0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zl.get(this.auth._key());if(!e){try{const r=await Jk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zl.set(this.auth._key(),e)}return this.bypassAuthState||zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jk(t,e){const n=t1(e),r=e1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Zk(t,e){zl.set(t._key(),e)}function e1(t){return Xn(t._redirectPersistence)}function t1(t){return Bl(Xk,t.config.apiKey,t.name)}async function n1(t,e,n=!1){if(bn(t.app))return Promise.reject(Zn(t));const r=bi(t),i=qk(r,e),o=await new Yk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const r1=10*60*1e3;class i1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!s0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=r1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oy(e))}saveEventToCache(e){this.cachedEventUids.add(Oy(e)),this.lastProcessedEventTime=Date.now()}}function Oy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function s0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return s0(t);default:return!1}}/**
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
 */async function o1(t,e={}){return Qr(t,"GET","/v1/projects",e)}/**
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
 */const a1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,l1=/^https?/;async function u1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await o1(t);for(const n of e)try{if(c1(n))return}catch{}Tn(t,"unauthorized-domain")}function c1(t){const e=Vh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!l1.test(n))return!1;if(a1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const d1=new Pa(3e4,6e4);function Vy(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function h1(t){return new Promise((e,n)=>{var r,i,s;function o(){Vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vy(),n(Vn(t,"network-request-failed"))},timeout:d1.get()})}if(!((i=(r=Ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ln().gapi)===null||s===void 0)&&s.load)o();else{const l=ik("iframefcb");return Ln()[l]=()=>{gapi.load?o():n(Vn(t,"network-request-failed"))},WE(`${rk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw $l=null,e})}let $l=null;function f1(t){return $l=$l||h1(t),$l}/**
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
 */const p1=new Pa(5e3,15e3),m1="__/auth/iframe",g1="emulator/auth/iframe",y1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},v1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _1(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ip(e,g1):`https://${t.config.authDomain}/${m1}`,r={apiKey:e.apiKey,appName:t.name,v:Us},i=v1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ka(r).slice(1)}`}async function w1(t){const e=await f1(t),n=Ln().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:_1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:y1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vn(t,"network-request-failed"),l=Ln().setTimeout(()=>{s(o)},p1.get());function u(){Ln().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const E1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},T1=500,I1=600,S1="_blank",x1="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A1(t,e,n,r=T1,i=I1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},E1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Et().toLowerCase();n&&(l=ME(c)?S1:n),VE(c)&&(e=e||x1,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[I,A])=>`${y}${I}=${A},`,"");if(KR(c)&&l!=="_self")return C1(e||"",l),new Ly(null);const m=window.open(e||"",l,f);J(m,t,"popup-blocked");try{m.focus()}catch{}return new Ly(m)}function C1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const R1="__/auth/handler",k1="emulator/auth/handler",P1=encodeURIComponent("fac");async function My(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Us,eventId:i};if(e instanceof HE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_C(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ba){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${P1}=${encodeURIComponent(u)}`:"";return`${N1(t)}?${ka(l).slice(1)}${c}`}function N1({config:t}){return t.emulator?ip(t,k1):`https://${t.authDomain}/${R1}`}/**
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
 */const Td="webStorageSupport";class b1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZE,this._completeRedirectFn=n1,this._overrideRedirectResult=Zk}async _openPopup(e,n,r,i){var s;or((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await My(e,n,r,Vh(),i);return A1(e,o,up())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await My(e,n,r,Vh(),i);return Vk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await w1(e),r=new i1(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Td,{type:Td},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Td];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=u1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zE()||LE()||op()}}const D1=b1;var jy="@firebase/auth",Fy="1.7.9";/**
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
 */class O1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function V1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function L1(t){En(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$E(t)},c=new ek(r,i,s,u);return uk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new cn("auth-internal",e=>{const n=bi(e.getProvider("auth").getImmediate());return(r=>new O1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(jy,Fy,V1(t)),zt(jy,Fy,"esm2017")}/**
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
 */const M1=5*60,j1=vE("authIdTokenMaxAge")||M1;let Uy=null;const F1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>j1)return;const i=n==null?void 0:n.token;Uy!==i&&(Uy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function U1(t=tc()){const e=Ni(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lk(t,{popupRedirectResolver:D1,persistence:[Wk,bk,ZE]}),r=vE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=F1(s.toString());Ck(n,o,()=>o(n.currentUser)),Ak(n,l=>o(l))}}const i=mE("auth");return i&&ck(n,`http://${i}`),n}function B1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",B1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});L1("Browser");var By=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mi,o0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function w(){}w.prototype=g.prototype,_.D=g.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(E,k,b){for(var C=Array(arguments.length-2),le=2;le<arguments.length;le++)C[le-2]=arguments[le];return g.prototype[k].apply(E,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,w){w||(w=0);var E=Array(16);if(typeof g=="string")for(var k=0;16>k;++k)E[k]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(k=0;16>k;++k)E[k]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=_.g[0],w=_.g[1],k=_.g[2];var b=_.g[3],C=g+(b^w&(k^b))+E[0]+3614090360&4294967295;g=w+(C<<7&4294967295|C>>>25),C=b+(k^g&(w^k))+E[1]+3905402710&4294967295,b=g+(C<<12&4294967295|C>>>20),C=k+(w^b&(g^w))+E[2]+606105819&4294967295,k=b+(C<<17&4294967295|C>>>15),C=w+(g^k&(b^g))+E[3]+3250441966&4294967295,w=k+(C<<22&4294967295|C>>>10),C=g+(b^w&(k^b))+E[4]+4118548399&4294967295,g=w+(C<<7&4294967295|C>>>25),C=b+(k^g&(w^k))+E[5]+1200080426&4294967295,b=g+(C<<12&4294967295|C>>>20),C=k+(w^b&(g^w))+E[6]+2821735955&4294967295,k=b+(C<<17&4294967295|C>>>15),C=w+(g^k&(b^g))+E[7]+4249261313&4294967295,w=k+(C<<22&4294967295|C>>>10),C=g+(b^w&(k^b))+E[8]+1770035416&4294967295,g=w+(C<<7&4294967295|C>>>25),C=b+(k^g&(w^k))+E[9]+2336552879&4294967295,b=g+(C<<12&4294967295|C>>>20),C=k+(w^b&(g^w))+E[10]+4294925233&4294967295,k=b+(C<<17&4294967295|C>>>15),C=w+(g^k&(b^g))+E[11]+2304563134&4294967295,w=k+(C<<22&4294967295|C>>>10),C=g+(b^w&(k^b))+E[12]+1804603682&4294967295,g=w+(C<<7&4294967295|C>>>25),C=b+(k^g&(w^k))+E[13]+4254626195&4294967295,b=g+(C<<12&4294967295|C>>>20),C=k+(w^b&(g^w))+E[14]+2792965006&4294967295,k=b+(C<<17&4294967295|C>>>15),C=w+(g^k&(b^g))+E[15]+1236535329&4294967295,w=k+(C<<22&4294967295|C>>>10),C=g+(k^b&(w^k))+E[1]+4129170786&4294967295,g=w+(C<<5&4294967295|C>>>27),C=b+(w^k&(g^w))+E[6]+3225465664&4294967295,b=g+(C<<9&4294967295|C>>>23),C=k+(g^w&(b^g))+E[11]+643717713&4294967295,k=b+(C<<14&4294967295|C>>>18),C=w+(b^g&(k^b))+E[0]+3921069994&4294967295,w=k+(C<<20&4294967295|C>>>12),C=g+(k^b&(w^k))+E[5]+3593408605&4294967295,g=w+(C<<5&4294967295|C>>>27),C=b+(w^k&(g^w))+E[10]+38016083&4294967295,b=g+(C<<9&4294967295|C>>>23),C=k+(g^w&(b^g))+E[15]+3634488961&4294967295,k=b+(C<<14&4294967295|C>>>18),C=w+(b^g&(k^b))+E[4]+3889429448&4294967295,w=k+(C<<20&4294967295|C>>>12),C=g+(k^b&(w^k))+E[9]+568446438&4294967295,g=w+(C<<5&4294967295|C>>>27),C=b+(w^k&(g^w))+E[14]+3275163606&4294967295,b=g+(C<<9&4294967295|C>>>23),C=k+(g^w&(b^g))+E[3]+4107603335&4294967295,k=b+(C<<14&4294967295|C>>>18),C=w+(b^g&(k^b))+E[8]+1163531501&4294967295,w=k+(C<<20&4294967295|C>>>12),C=g+(k^b&(w^k))+E[13]+2850285829&4294967295,g=w+(C<<5&4294967295|C>>>27),C=b+(w^k&(g^w))+E[2]+4243563512&4294967295,b=g+(C<<9&4294967295|C>>>23),C=k+(g^w&(b^g))+E[7]+1735328473&4294967295,k=b+(C<<14&4294967295|C>>>18),C=w+(b^g&(k^b))+E[12]+2368359562&4294967295,w=k+(C<<20&4294967295|C>>>12),C=g+(w^k^b)+E[5]+4294588738&4294967295,g=w+(C<<4&4294967295|C>>>28),C=b+(g^w^k)+E[8]+2272392833&4294967295,b=g+(C<<11&4294967295|C>>>21),C=k+(b^g^w)+E[11]+1839030562&4294967295,k=b+(C<<16&4294967295|C>>>16),C=w+(k^b^g)+E[14]+4259657740&4294967295,w=k+(C<<23&4294967295|C>>>9),C=g+(w^k^b)+E[1]+2763975236&4294967295,g=w+(C<<4&4294967295|C>>>28),C=b+(g^w^k)+E[4]+1272893353&4294967295,b=g+(C<<11&4294967295|C>>>21),C=k+(b^g^w)+E[7]+4139469664&4294967295,k=b+(C<<16&4294967295|C>>>16),C=w+(k^b^g)+E[10]+3200236656&4294967295,w=k+(C<<23&4294967295|C>>>9),C=g+(w^k^b)+E[13]+681279174&4294967295,g=w+(C<<4&4294967295|C>>>28),C=b+(g^w^k)+E[0]+3936430074&4294967295,b=g+(C<<11&4294967295|C>>>21),C=k+(b^g^w)+E[3]+3572445317&4294967295,k=b+(C<<16&4294967295|C>>>16),C=w+(k^b^g)+E[6]+76029189&4294967295,w=k+(C<<23&4294967295|C>>>9),C=g+(w^k^b)+E[9]+3654602809&4294967295,g=w+(C<<4&4294967295|C>>>28),C=b+(g^w^k)+E[12]+3873151461&4294967295,b=g+(C<<11&4294967295|C>>>21),C=k+(b^g^w)+E[15]+530742520&4294967295,k=b+(C<<16&4294967295|C>>>16),C=w+(k^b^g)+E[2]+3299628645&4294967295,w=k+(C<<23&4294967295|C>>>9),C=g+(k^(w|~b))+E[0]+4096336452&4294967295,g=w+(C<<6&4294967295|C>>>26),C=b+(w^(g|~k))+E[7]+1126891415&4294967295,b=g+(C<<10&4294967295|C>>>22),C=k+(g^(b|~w))+E[14]+2878612391&4294967295,k=b+(C<<15&4294967295|C>>>17),C=w+(b^(k|~g))+E[5]+4237533241&4294967295,w=k+(C<<21&4294967295|C>>>11),C=g+(k^(w|~b))+E[12]+1700485571&4294967295,g=w+(C<<6&4294967295|C>>>26),C=b+(w^(g|~k))+E[3]+2399980690&4294967295,b=g+(C<<10&4294967295|C>>>22),C=k+(g^(b|~w))+E[10]+4293915773&4294967295,k=b+(C<<15&4294967295|C>>>17),C=w+(b^(k|~g))+E[1]+2240044497&4294967295,w=k+(C<<21&4294967295|C>>>11),C=g+(k^(w|~b))+E[8]+1873313359&4294967295,g=w+(C<<6&4294967295|C>>>26),C=b+(w^(g|~k))+E[15]+4264355552&4294967295,b=g+(C<<10&4294967295|C>>>22),C=k+(g^(b|~w))+E[6]+2734768916&4294967295,k=b+(C<<15&4294967295|C>>>17),C=w+(b^(k|~g))+E[13]+1309151649&4294967295,w=k+(C<<21&4294967295|C>>>11),C=g+(k^(w|~b))+E[4]+4149444226&4294967295,g=w+(C<<6&4294967295|C>>>26),C=b+(w^(g|~k))+E[11]+3174756917&4294967295,b=g+(C<<10&4294967295|C>>>22),C=k+(g^(b|~w))+E[2]+718787259&4294967295,k=b+(C<<15&4294967295|C>>>17),C=w+(b^(k|~g))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,_.g[2]=_.g[2]+k&4294967295,_.g[3]=_.g[3]+b&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var w=g-this.blockSize,E=this.B,k=this.h,b=0;b<g;){if(k==0)for(;b<=w;)i(this,_,b),b+=this.blockSize;if(typeof _=="string"){for(;b<g;)if(E[k++]=_.charCodeAt(b++),k==this.blockSize){i(this,E),k=0;break}}else for(;b<g;)if(E[k++]=_[b++],k==this.blockSize){i(this,E),k=0;break}}this.h=k,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var w=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=w&255,w/=256;for(this.u(_),_=Array(16),g=w=0;4>g;++g)for(var E=0;32>E;E+=8)_[w++]=this.g[g]>>>E&255;return _};function s(_,g){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=g(_)}function o(_,g){this.h=g;for(var w=[],E=!0,k=_.length-1;0<=k;k--){var b=_[k]|0;E&&b==g||(w[k]=b,E=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?s(_,function(g){return new o([g|0],0>g?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return m;if(0>_)return D(c(-_));for(var g=[],w=1,E=0;_>=w;E++)g[E]=_/w|0,w*=4294967296;return new o(g,0)}function f(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return D(f(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(g,8)),E=m,k=0;k<_.length;k+=8){var b=Math.min(8,_.length-k),C=parseInt(_.substring(k,k+b),g);8>b?(b=c(Math.pow(g,b)),E=E.j(b).add(c(C))):(E=E.j(w),E=E.add(c(C)))}return E}var m=u(0),y=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var _=0,g=1,w=0;w<this.g.length;w++){var E=this.i(w);_+=(0<=E?E:4294967296+E)*g,g*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A(this))return"0";if(P(this))return"-"+D(this).toString(_);for(var g=c(Math.pow(_,6)),w=this,E="";;){var k=V(w,g).g;w=S(w,k.j(g));var b=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=k,A(w))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function A(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function P(_){return _.h==-1}t.l=function(_){return _=S(this,_),P(_)?-1:A(_)?0:1};function D(_){for(var g=_.g.length,w=[],E=0;E<g;E++)w[E]=~_.g[E];return new o(w,~_.h).add(y)}t.abs=function(){return P(this)?D(this):this},t.add=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],E=0,k=0;k<=g;k++){var b=E+(this.i(k)&65535)+(_.i(k)&65535),C=(b>>>16)+(this.i(k)>>>16)+(_.i(k)>>>16);E=C>>>16,b&=65535,C&=65535,w[k]=C<<16|b}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(_,g){return _.add(D(g))}t.j=function(_){if(A(this)||A(_))return m;if(P(this))return P(_)?D(this).j(D(_)):D(D(this).j(_));if(P(_))return D(this.j(D(_)));if(0>this.l(I)&&0>_.l(I))return c(this.m()*_.m());for(var g=this.g.length+_.g.length,w=[],E=0;E<2*g;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var k=0;k<_.g.length;k++){var b=this.i(E)>>>16,C=this.i(E)&65535,le=_.i(k)>>>16,we=_.i(k)&65535;w[2*E+2*k]+=C*we,T(w,2*E+2*k),w[2*E+2*k+1]+=b*we,T(w,2*E+2*k+1),w[2*E+2*k+1]+=C*le,T(w,2*E+2*k+1),w[2*E+2*k+2]+=b*le,T(w,2*E+2*k+2)}for(E=0;E<g;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=g;E<2*g;E++)w[E]=0;return new o(w,0)};function T(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function x(_,g){this.g=_,this.h=g}function V(_,g){if(A(g))throw Error("division by zero");if(A(_))return new x(m,m);if(P(_))return g=V(D(_),g),new x(D(g.g),D(g.h));if(P(g))return g=V(_,D(g)),new x(D(g.g),g.h);if(30<_.g.length){if(P(_)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var w=y,E=g;0>=E.l(_);)w=R(w),E=R(E);var k=N(w,1),b=N(E,1);for(E=N(E,2),w=N(w,2);!A(E);){var C=b.add(E);0>=C.l(_)&&(k=k.add(w),b=C),E=N(E,1),w=N(w,1)}return g=S(_,k.j(g)),new x(k,g)}for(k=m;0<=_.l(g);){for(w=Math.max(1,Math.floor(_.m()/g.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=c(w),C=b.j(g);P(C)||0<C.l(_);)w-=E,b=c(w),C=b.j(g);A(b)&&(b=y),k=k.add(b),_=S(_,C)}return new x(k,_)}t.A=function(_){return V(this,_).h},t.and=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],E=0;E<g;E++)w[E]=this.i(E)&_.i(E);return new o(w,this.h&_.h)},t.or=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],E=0;E<g;E++)w[E]=this.i(E)|_.i(E);return new o(w,this.h|_.h)},t.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],E=0;E<g;E++)w[E]=this.i(E)^_.i(E);return new o(w,this.h^_.h)};function R(_){for(var g=_.g.length+1,w=[],E=0;E<g;E++)w[E]=_.i(E)<<1|_.i(E-1)>>>31;return new o(w,_.h)}function N(_,g){var w=g>>5;g%=32;for(var E=_.g.length-w,k=[],b=0;b<E;b++)k[b]=0<g?_.i(b+w)>>>g|_.i(b+w+1)<<32-g:_.i(b+w);return new o(k,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,mi=o}).apply(typeof By<"u"?By:typeof self<"u"?self:typeof window<"u"?window:{});var Tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var a0,xo,l0,Wl,Fh,u0,c0,d0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tl=="object"&&Tl];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var L=a[v];if(!(L in p))break e;p=p[L]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var p=0,v=!1,L={next:function(){if(!v&&p<a.length){var j=p++;return{value:d(j,a[j]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),a.apply(d,L)}}return function(){return a.apply(d,arguments)}}function y(a,d,p){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function I(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function A(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,L,j){for(var $=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)$[ve-2]=arguments[ve];return d.prototype[L].apply(v,$)}}function P(a){const d=a.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function D(a,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const L=a.length||0,j=v.length||0;a.length=L+j;for(let $=0;$<j;$++)a[L+$]=v[$]}else a.push(v)}}class S{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function T(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var R=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function N(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function _(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function g(a){const d={};for(const p in a)d[p]=a[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,d){let p,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(p in v)a[p]=v[p];for(let j=0;j<w.length;j++)p=w[j],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function k(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function C(){var a=q;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class le{constructor(){this.h=this.g=null}add(d,p){const v=we.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var we=new S(()=>new Tt,a=>a.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,z=!1,q=new le,Y=()=>{const a=l.Promise.resolve(void 0);Ve=()=>{a.then(fe)}};var fe=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(p){b(p)}var d=we;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}z=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var It=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function St(a,d){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(R){e:{try{V(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:xt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&St.aa.h.call(this)}}A(St,Se);var xt={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),At=0;function Un(a,d,p,v,L){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=L,this.key=++At,this.da=this.fa=!1}function Ke(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vt(a){this.src=a,this.g={},this.h=0}Vt.prototype.add=function(a,d,p,v,L){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var $=ke(a,d,v,L);return-1<$?(d=a[$],p||(d.fa=!1)):(d=new Un(d,this.src,j,!!v,L),d.fa=p,a.push(d)),d};function en(a,d){var p=d.type;if(p in a.g){var v=a.g[p],L=Array.prototype.indexOf.call(v,d,void 0),j;(j=0<=L)&&Array.prototype.splice.call(v,L,1),j&&(Ke(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function ke(a,d,p,v){for(var L=0;L<a.length;++L){var j=a[L];if(!j.da&&j.listener==d&&j.capture==!!p&&j.ha==v)return L}return-1}var Wt="closure_lm_"+(1e6*Math.random()|0),Cn={};function Ue(a,d,p,v,L){if(Array.isArray(d)){for(var j=0;j<d.length;j++)Ue(a,d[j],p,v,L);return null}return p=qt(p),a&&a[K]?a.K(d,p,c(v)?!!v.capture:!1,L):tn(a,d,p,!1,v,L)}function tn(a,d,p,v,L,j){if(!d)throw Error("Invalid event type");var $=c(L)?!!L.capture:!!L,ve=ye(a);if(ve||(a[Wt]=ve=new Vt(a)),p=ve.add(d,p,v,$,j),p.proxy)return p;if(v=Jr(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)It||(L=$),L===void 0&&(L=!1),a.addEventListener(d.toString(),v,L);else if(a.attachEvent)a.attachEvent(M(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Jr(){function a(p){return d.call(a.src,a.listener,p)}const d=ne;return a}function Li(a,d,p,v,L){if(Array.isArray(d))for(var j=0;j<d.length;j++)Li(a,d[j],p,v,L);else v=c(v)?!!v.capture:!!v,p=qt(p),a&&a[K]?(a=a.i,d=String(d).toString(),d in a.g&&(j=a.g[d],p=ke(j,p,v,L),-1<p&&(Ke(j[p]),Array.prototype.splice.call(j,p,1),j.length==0&&(delete a.g[d],a.h--)))):a&&(a=ye(a))&&(d=a.g[d.toString()],a=-1,d&&(a=ke(d,p,v,L)),(p=-1<a?d[a]:null)&&Zr(p))}function Zr(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[K])en(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(M(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=ye(d))?(en(p,a),p.h==0&&(p.src=null,d[Wt]=null)):Ke(a)}}}function M(a){return a in Cn?Cn[a]:Cn[a]="on"+a}function ne(a,d){if(a.da)a=!0;else{d=new St(d,this);var p=a.listener,v=a.ha||a.src;a.fa&&Zr(a),a=p.call(v,d)}return a}function ye(a){return a=a[Wt],a instanceof Vt?a:null}var pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function qt(a){return typeof a=="function"?a:(a[pe]||(a[pe]=function(d){return a.handleEvent(d)}),a[pe])}function Ee(){ce.call(this),this.i=new Vt(this),this.M=this,this.F=null}A(Ee,ce),Ee.prototype[K]=!0,Ee.prototype.removeEventListener=function(a,d,p,v){Li(this,a,d,p,v)};function Le(a,d){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new Se(d,a);else if(d instanceof Se)d.target=d.target||a;else{var L=d;d=new Se(v,a),E(d,L)}if(L=!0,p)for(var j=p.length-1;0<=j;j--){var $=d.g=p[j];L=Ze($,v,!0,d)&&L}if($=d.g=a,L=Ze($,v,!0,d)&&L,L=Ze($,v,!1,d)&&L,p)for(j=0;j<p.length;j++)$=d.g=p[j],L=Ze($,v,!1,d)&&L}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],v=0;v<p.length;v++)Ke(p[v]);delete a.g[d],a.h--}}this.F=null},Ee.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},Ee.prototype.L=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function Ze(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,j=0;j<d.length;++j){var $=d[j];if($&&!$.da&&$.capture==p){var ve=$.listener,rt=$.ha||$.src;$.fa&&en(a.i,$),L=ve.call(rt,v)!==!1&&L}}return L&&!v.defaultPrevented}function Rn(a,d,p){if(typeof a=="function")p&&(a=y(a,p));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Mi(a){a.g=Rn(()=>{a.g=null,a.i&&(a.i=!1,Mi(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class ji extends ce{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Mi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nn(a){ce.call(this),this.h=a,this.g={}}A(nn,ce);var Ks=[];function Qs(a){N(a.g,function(d,p){this.g.hasOwnProperty(p)&&Zr(d)},a),a.g={}}nn.prototype.N=function(){nn.aa.N.call(this),Qs(this)},nn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xs=l.JSON.stringify,sI=l.JSON.parse,oI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Cc(){}Cc.prototype.h=null;function im(a){return a.h||(a.h=a.i())}function sm(){}var Ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rc(){Se.call(this,"d")}A(Rc,Se);function kc(){Se.call(this,"c")}A(kc,Se);var ei={},om=null;function $a(){return om=om||new Ee}ei.La="serverreachability";function am(a){Se.call(this,ei.La,a)}A(am,Se);function Js(a){const d=$a();Le(d,new am(d))}ei.STAT_EVENT="statevent";function lm(a,d){Se.call(this,ei.STAT_EVENT,a),this.stat=d}A(lm,Se);function Ct(a){const d=$a();Le(d,new lm(d,a))}ei.Ma="timingevent";function um(a,d){Se.call(this,ei.Ma,a),this.size=d}A(um,Se);function Zs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function eo(){this.g=!0}eo.prototype.xa=function(){this.g=!1};function aI(a,d,p,v,L,j){a.info(function(){if(a.g)if(j)for(var $="",ve=j.split("&"),rt=0;rt<ve.length;rt++){var de=ve[rt].split("=");if(1<de.length){var dt=de[0];de=de[1];var ht=dt.split("_");$=2<=ht.length&&ht[1]=="type"?$+(dt+"="+de+"&"):$+(dt+"=redacted&")}}else $=null;else $=j;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+d+`
`+p+`
`+$})}function lI(a,d,p,v,L,j,$){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+d+`
`+p+`
`+j+" "+$})}function Fi(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+cI(a,p)+(v?" "+v:"")})}function uI(a,d){a.info(function(){return"TIMEOUT: "+d})}eo.prototype.info=function(){};function cI(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var $=1;$<L.length;$++)L[$]=""}}}}return Xs(p)}catch{return d}}var Wa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pc;function qa(){}A(qa,Cc),qa.prototype.g=function(){return new XMLHttpRequest},qa.prototype.i=function(){return{}},Pc=new qa;function dr(a,d,p,v){this.j=a,this.i=d,this.l=p,this.R=v||1,this.U=new nn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dm}function dm(){this.i=null,this.g="",this.h=!1}var hm={},Nc={};function bc(a,d,p){a.L=1,a.v=Qa(Bn(d)),a.m=p,a.P=!0,fm(a,null)}function fm(a,d){a.F=Date.now(),Ha(a),a.A=Bn(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Cm(p.i,"t",v),a.C=0,p=a.j.J,a.h=new dm,a.g=qm(a.j,p?d:null,!a.m),0<a.O&&(a.M=new ji(y(a.Y,a,a.g),a.O)),d=a.U,p=a.g,v=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Ks[0]=L.toString()),L=Ks);for(var j=0;j<L.length;j++){var $=Ue(p,L[j],v||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Js(),aI(a.i,a.u,a.A,a.l,a.R,a.m)}dr.prototype.ca=function(a){a=a.target;const d=this.M;d&&zn(a)==3?d.j():this.Y(a)},dr.prototype.Y=function(a){try{if(a==this.g)e:{const ht=zn(this.g);var d=this.g.Ba();const zi=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Om(this.g)))){this.J||ht!=4||d==7||(d==8||0>=zi?Js(3):Js(2)),Dc(this);var p=this.g.Z();this.X=p;t:if(pm(this)){var v=Om(this.g);a="";var L=v.length,j=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ti(this),to(this);var $="";break t}this.h.i=new l.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(j&&d==L-1)});v.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,lI(this.i,this.u,this.A,this.l,this.R,ht,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,rt=this.g;if((ve=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(ve)){var de=ve;break t}}de=null}if(p=de)Fi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oc(this,p);else{this.o=!1,this.s=3,Ct(12),ti(this),to(this);break e}}if(this.P){p=!0;let hn;for(;!this.J&&this.C<$.length;)if(hn=dI(this,$),hn==Nc){ht==4&&(this.s=4,Ct(14),p=!1),Fi(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==hm){this.s=4,Ct(15),Fi(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else Fi(this.i,this.l,hn,null),Oc(this,hn);if(pm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||$.length!=0||this.h.h||(this.s=1,Ct(16),p=!1),this.o=this.o&&p,!p)Fi(this.i,this.l,$,"[Invalid Chunked Response]"),ti(this),to(this);else if(0<$.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Uc(dt),dt.M=!0,Ct(11))}}else Fi(this.i,this.l,$,null),Oc(this,$);ht==4&&ti(this),this.o&&!this.J&&(ht==4?Bm(this.j,this):(this.o=!1,Ha(this)))}else RI(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),ti(this),to(this)}}}catch{}finally{}};function pm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function dI(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?Nc:(p=Number(d.substring(p,v)),isNaN(p)?hm:(v+=1,v+p>d.length?Nc:(d=d.slice(v,v+p),a.C=v+p,d)))}dr.prototype.cancel=function(){this.J=!0,ti(this)};function Ha(a){a.S=Date.now()+a.I,mm(a,a.I)}function mm(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zs(y(a.ba,a),d)}function Dc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}dr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(uI(this.i,this.A),this.L!=2&&(Js(),Ct(17)),ti(this),this.s=2,to(this)):mm(this,this.S-a)};function to(a){a.j.G==0||a.J||Bm(a.j,a)}function ti(a){Dc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Qs(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Oc(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||Vc(p.h,a))){if(!a.K&&Vc(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)tl(p),Za(p);else break e;Fc(p),Ct(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=Zs(y(p.Za,p),6e3));if(1>=vm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ri(p,11)}else if((a.K||p.g==a)&&tl(p),!T(d))for(L=p.Da.g.parse(d),d=0;d<L.length;d++){let de=L[d];if(p.T=de[0],de=de[1],p.G==2)if(de[0]=="c"){p.K=de[1],p.ia=de[2];const dt=de[3];dt!=null&&(p.la=dt,p.j.info("VER="+p.la));const ht=de[4];ht!=null&&(p.Aa=ht,p.j.info("SVER="+p.Aa));const zi=de[5];zi!=null&&typeof zi=="number"&&0<zi&&(v=1.5*zi,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const hn=a.g;if(hn){const rl=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rl){var j=v.h;j.g||rl.indexOf("spdy")==-1&&rl.indexOf("quic")==-1&&rl.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Lc(j,j.h),j.h=null))}if(v.D){const Bc=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(v.ya=Bc,xe(v.I,v.D,Bc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var $=a;if(v.qa=Wm(v,v.J?v.ia:null,v.W),$.K){_m(v.h,$);var ve=$,rt=v.L;rt&&(ve.I=rt),ve.B&&(Dc(ve),Ha(ve)),v.g=$}else Fm(v);0<p.i.length&&el(p)}else de[0]!="stop"&&de[0]!="close"||ri(p,7);else p.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?ri(p,7):jc(p):de[0]!="noop"&&p.l&&p.l.ta(de),p.v=0)}}Js(4)}catch{}}var hI=class{constructor(a,d){this.g=a,this.map=d}};function gm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ym(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vm(a){return a.h?1:a.g?a.g.size:0}function Vc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Lc(a,d){a.g?a.g.add(d):a.h=d}function _m(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}gm.prototype.cancel=function(){if(this.i=wm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return P(a.i)}function fI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,v=0;v<p;v++)d.push(a[v]);return d}d=[],p=0;for(v in a)d[p++]=a[v];return d}function pI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const v in a)d[p++]=v;return d}}}function Em(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=pI(a),v=fI(a),L=v.length,j=0;j<L;j++)d.call(void 0,v[j],p&&p[j],a)}var Tm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mI(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),L=null;if(0<=v){var j=a[p].substring(0,v);L=a[p].substring(v+1)}else j=a[p];d(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ni(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ni){this.h=a.h,Ga(this,a.j),this.o=a.o,this.g=a.g,Ka(this,a.s),this.l=a.l;var d=a.i,p=new io;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Im(this,p),this.m=a.m}else a&&(d=String(a).match(Tm))?(this.h=!1,Ga(this,d[1]||"",!0),this.o=no(d[2]||""),this.g=no(d[3]||"",!0),Ka(this,d[4]),this.l=no(d[5]||"",!0),Im(this,d[6]||"",!0),this.m=no(d[7]||"")):(this.h=!1,this.i=new io(null,this.h))}ni.prototype.toString=function(){var a=[],d=this.j;d&&a.push(ro(d,Sm,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(ro(d,Sm,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ro(p,p.charAt(0)=="/"?vI:yI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ro(p,wI)),a.join("")};function Bn(a){return new ni(a)}function Ga(a,d,p){a.j=p?no(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ka(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Im(a,d,p){d instanceof io?(a.i=d,EI(a.i,a.h)):(p||(d=ro(d,_I)),a.i=new io(d,a.h))}function xe(a,d,p){a.i.set(d,p)}function Qa(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function no(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ro(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,gI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function gI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sm=/[#\/\?@]/g,yI=/[#\?:]/g,vI=/[#\?]/g,_I=/[#\?@]/g,wI=/#/g;function io(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function hr(a){a.g||(a.g=new Map,a.h=0,a.i&&mI(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=io.prototype,t.add=function(a,d){hr(this),this.i=null,a=Ui(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function xm(a,d){hr(a),d=Ui(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Am(a,d){return hr(a),d=Ui(a,d),a.g.has(d)}t.forEach=function(a,d){hr(this),this.g.forEach(function(p,v){p.forEach(function(L){a.call(d,L,v,this)},this)},this)},t.na=function(){hr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const L=a[v];for(let j=0;j<L.length;j++)p.push(d[v])}return p},t.V=function(a){hr(this);let d=[];if(typeof a=="string")Am(this,a)&&(d=d.concat(this.g.get(Ui(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},t.set=function(a,d){return hr(this),this.i=null,a=Ui(this,a),Am(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Cm(a,d,p){xm(a,d),0<p.length&&(a.i=null,a.g.set(Ui(a,d),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const j=encodeURIComponent(String(v)),$=this.V(v);for(v=0;v<$.length;v++){var L=j;$[v]!==""&&(L+="="+encodeURIComponent(String($[v]))),a.push(L)}}return this.i=a.join("&")};function Ui(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function EI(a,d){d&&!a.j&&(hr(a),a.i=null,a.g.forEach(function(p,v){var L=v.toLowerCase();v!=L&&(xm(this,v),Cm(this,L,p))},a)),a.j=d}function TI(a,d){const p=new eo;if(l.Image){const v=new Image;v.onload=I(fr,p,"TestLoadImage: loaded",!0,d,v),v.onerror=I(fr,p,"TestLoadImage: error",!1,d,v),v.onabort=I(fr,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=I(fr,p,"TestLoadImage: timeout",!1,d,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function II(a,d){const p=new eo,v=new AbortController,L=setTimeout(()=>{v.abort(),fr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(j=>{clearTimeout(L),j.ok?fr(p,"TestPingServer: ok",!0,d):fr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),fr(p,"TestPingServer: error",!1,d)})}function fr(a,d,p,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(p)}catch{}}function SI(){this.g=new oI}function xI(a,d,p){const v=p||"";try{Em(a,function(L,j){let $=L;c(L)&&($=Xs(L)),d.push(v+j+"="+encodeURIComponent($))})}catch(L){throw d.push(v+"type="+encodeURIComponent("_badmap")),L}}function Xa(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Xa,Cc),Xa.prototype.g=function(){return new Ya(this.l,this.j)},Xa.prototype.i=function(a){return function(){return a}}({});function Ya(a,d){Ee.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ya,Ee),t=Ya.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,oo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,so(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,oo(this)),this.g&&(this.readyState=3,oo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?so(this):oo(this),this.readyState==3&&Rm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,so(this))},t.Qa=function(a){this.g&&(this.response=a,so(this))},t.ga=function(){this.g&&so(this)};function so(a){a.readyState=4,a.l=null,a.j=null,a.v=null,oo(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function oo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function km(a){let d="";return N(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function Mc(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=km(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):xe(a,d,p))}function Me(a){Ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Me,Ee);var AI=/^https?$/i,CI=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pc.g(),this.v=this.o?im(this.o):im(Pc),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){Pm(this,j);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)p.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const j of v.keys())p.set(j,v.get(j));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(CI,d,void 0))||v||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,$]of p)this.g.setRequestHeader(j,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dm(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){Pm(this,j)}};function Pm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Nm(a),Ja(a)}function Nm(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Le(this,"complete"),Le(this,"abort"),Ja(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ja(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?bm(this):this.bb())},t.bb=function(){bm(this)};function bm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||zn(a)!=4||a.Z()!=2)){if(a.u&&zn(a)==4)Rn(a.Ea,0,a);else if(Le(a,"readystatechange"),zn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=$===0){var L=String(a.D).match(Tm)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),v=!AI.test(L?L.toLowerCase():"")}p=v}if(p)Le(a,"complete"),Le(a,"success");else{a.m=6;try{var j=2<zn(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",Nm(a)}}finally{Ja(a)}}}}function Ja(a,d){if(a.g){Dm(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Le(a,"ready");try{p.onreadystatechange=v}catch{}}}function Dm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function zn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),sI(d)}};function Om(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function RI(a){const d={};a=(a.g&&2<=zn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(T(a[v]))continue;var p=k(a[v]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=d[L]||[];d[L]=j,j.push(p)}_(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ao(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Vm(a){this.Aa=0,this.i=[],this.j=new eo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ao("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ao("baseRetryDelayMs",5e3,a),this.cb=ao("retryDelaySeedMs",1e4,a),this.Wa=ao("forwardChannelMaxRetries",2,a),this.wa=ao("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new gm(a&&a.concurrentRequestLimit),this.Da=new SI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Vm.prototype,t.la=8,t.G=1,t.connect=function(a,d,p,v){Ct(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Wm(this,null,this.W),el(this)};function jc(a){if(Lm(a),a.G==3){var d=a.U++,p=Bn(a.I);if(xe(p,"SID",a.K),xe(p,"RID",d),xe(p,"TYPE","terminate"),lo(a,p),d=new dr(a,a.j,d),d.L=2,d.v=Qa(Bn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=qm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ha(d)}$m(a)}function Za(a){a.g&&(Uc(a),a.g.cancel(),a.g=null)}function Lm(a){Za(a),a.u&&(l.clearTimeout(a.u),a.u=null),tl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function el(a){if(!ym(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ve||Y(),z||(Ve(),z=!0),q.add(d,a),a.B=0}}function kI(a,d){return vm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zs(y(a.Ga,a,d),zm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new dr(this,this.j,a);let j=this.o;if(this.S&&(j?(j=g(j),E(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=jm(this,L,d),p=Bn(this.I),xe(p,"RID",a),xe(p,"CVER",22),this.D&&xe(p,"X-HTTP-Session-Id",this.D),lo(this,p),j&&(this.O?d="headers="+encodeURIComponent(String(km(j)))+"&"+d:this.m&&Mc(p,this.m,j)),Lc(this.h,L),this.Ua&&xe(p,"TYPE","init"),this.P?(xe(p,"$req",d),xe(p,"SID","null"),L.T=!0,bc(L,p,null)):bc(L,p,d),this.G=2}}else this.G==3&&(a?Mm(this,a):this.i.length==0||ym(this.h)||Mm(this))};function Mm(a,d){var p;d?p=d.l:p=a.U++;const v=Bn(a.I);xe(v,"SID",a.K),xe(v,"RID",p),xe(v,"AID",a.T),lo(a,v),a.m&&a.o&&Mc(v,a.m,a.o),p=new dr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=jm(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Lc(a.h,p),bc(p,v,d)}function lo(a,d){a.H&&N(a.H,function(p,v){xe(d,v,p)}),a.l&&Em({},function(p,v){xe(d,v,p)})}function jm(a,d,p){p=Math.min(a.i.length,p);var v=a.l?y(a.l.Na,a.l,a):null;e:{var L=a.i;let j=-1;for(;;){const $=["count="+p];j==-1?0<p?(j=L[0].g,$.push("ofs="+j)):j=0:$.push("ofs="+j);let ve=!0;for(let rt=0;rt<p;rt++){let de=L[rt].g;const dt=L[rt].map;if(de-=j,0>de)j=Math.max(0,L[rt].g-100),ve=!1;else try{xI(dt,$,"req"+de+"_")}catch{v&&v(dt)}}if(ve){v=$.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,v}function Fm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ve||Y(),z||(Ve(),z=!0),q.add(d,a),a.v=0}}function Fc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zs(y(a.Fa,a),zm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Um(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zs(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),Za(this),Um(this))};function Uc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Um(a){a.g=new dr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Bn(a.qa);xe(d,"RID","rpc"),xe(d,"SID",a.K),xe(d,"AID",a.T),xe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(d,"TO",a.ja),xe(d,"TYPE","xmlhttp"),lo(a,d),a.m&&a.o&&Mc(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Qa(Bn(d)),p.m=null,p.P=!0,fm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Za(this),Fc(this),Ct(19))};function tl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Bm(a,d){var p=null;if(a.g==d){tl(a),Uc(a),a.g=null;var v=2}else if(Vc(a.h,d))p=d.D,_m(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var L=a.B;v=$a(),Le(v,new um(v,p)),el(a)}else Fm(a);else if(L=d.s,L==3||L==0&&0<d.X||!(v==1&&kI(a,d)||v==2&&Fc(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),L){case 1:ri(a,5);break;case 4:ri(a,10);break;case 3:ri(a,6);break;default:ri(a,2)}}}function zm(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function ri(a,d){if(a.j.info("Error code "+d),d==2){var p=y(a.fb,a),v=a.Xa;const L=!v;v=new ni(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ga(v,"https"),Qa(v),L?TI(v.toString(),p):II(v.toString(),p)}else Ct(2);a.G=0,a.l&&a.l.sa(d),$m(a),Lm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function $m(a){if(a.G=0,a.ka=[],a.l){const d=wm(a.h);(d.length!=0||a.i.length!=0)&&(D(a.ka,d),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Wm(a,d,p){var v=p instanceof ni?Bn(p):new ni(p);if(v.g!="")d&&(v.g=d+"."+v.g),Ka(v,v.s);else{var L=l.location;v=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var j=new ni(null);v&&Ga(j,v),d&&(j.g=d),L&&Ka(j,L),p&&(j.l=p),v=j}return p=a.D,d=a.ya,p&&d&&xe(v,p,d),xe(v,"VER",a.la),lo(a,v),v}function qm(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Me(new Xa({eb:p})):new Me(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hm(){}t=Hm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function nl(){}nl.prototype.g=function(a,d){return new Ht(a,d)};function Ht(a,d){Ee.call(this),this.g=new Vm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!T(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Bi(this)}A(Ht,Ee),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){jc(this.g)},Ht.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Xs(a),a=p);d.i.push(new hI(d.Ya++,a)),d.G==3&&el(d)},Ht.prototype.N=function(){this.g.l=null,delete this.j,jc(this.g),delete this.g,Ht.aa.N.call(this)};function Gm(a){Rc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}A(Gm,Rc);function Km(){kc.call(this),this.status=1}A(Km,kc);function Bi(a){this.g=a}A(Bi,Hm),Bi.prototype.ua=function(){Le(this.g,"a")},Bi.prototype.ta=function(a){Le(this.g,new Gm(a))},Bi.prototype.sa=function(a){Le(this.g,new Km)},Bi.prototype.ra=function(){Le(this.g,"b")},nl.prototype.createWebChannel=nl.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,d0=function(){return new nl},c0=function(){return $a()},u0=ei,Fh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wa.NO_ERROR=0,Wa.TIMEOUT=8,Wa.HTTP_ERROR=6,Wl=Wa,cm.COMPLETE="complete",l0=cm,sm.EventType=Ys,Ys.OPEN="a",Ys.CLOSE="b",Ys.ERROR="c",Ys.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,xo=sm,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,a0=Me}).apply(typeof Tl<"u"?Tl:typeof self<"u"?self:typeof window<"u"?window:{});const zy="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let zs="10.14.0";/**
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
 */const Ii=new ep("@firebase/firestore");function vo(){return Ii.logLevel}function G(t,...e){if(Ii.logLevel<=oe.DEBUG){const n=e.map(dp);Ii.debug(`Firestore (${zs}): ${t}`,...n)}}function ar(t,...e){if(Ii.logLevel<=oe.ERROR){const n=e.map(dp);Ii.error(`Firestore (${zs}): ${t}`,...n)}}function As(t,...e){if(Ii.logLevel<=oe.WARN){const n=e.map(dp);Ii.warn(`Firestore (${zs}): ${t}`,...n)}}function dp(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+t;throw ar(e),new Error(e)}function ge(t,e){t||Z()}function te(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class h0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class $1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class W1{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new h0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new gt(e)}}class q1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class H1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new q1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class G1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new G1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Q1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class f0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Q1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Cs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new be(0,0))}static max(){return new ee(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class da{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return da.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof da?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends da{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const X1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends da{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return X1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Te.fromString(e))}static fromName(e){return new X(Te.fromString(e).popFirst(5))}static empty(){return new X(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Te(e.slice()))}}function Y1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new Br(i,X.empty(),e)}function J1(t){return new Br(t.readTime,t.key,-1)}class Br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Br(ee.min(),X.empty(),-1)}static max(){return new Br(ee.max(),X.empty(),-1)}}function Z1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const eP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Oa(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==eP)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Va(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class hp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}hp.oe=-1;function sc(t){return t==null}function Au(t){return t===0&&1/t==-1/0}function rP(t){return typeof t=="number"&&Number.isInteger(t)&&!Au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function $y(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function p0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}}class Il{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=s??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new st(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wy(this.data.getIterator())}getIteratorFrom(e){return new Wy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class Wy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new lt(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class m0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new m0("Invalid base64 string: "+s):s}}(e);return new ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const iP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(t){if(ge(!!t),typeof t=="string"){let e=0;const n=iP.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Si(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */function oc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fp(t){const e=t.mapValue.fields.__previous_value__;return oc(e)?fp(e):e}function ha(t){const e=zr(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class sP{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class fa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Sl={mapValue:{}};function xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?oc(t)?4:aP(t)?9007199254740991:oP(t)?10:11:Z()}function Fn(t,e){if(t===e)return!0;const n=xi(t);if(n!==xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=zr(i.timestampValue),l=zr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Si(i.bytesValue).isEqual(Si(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),l=ze(s.doubleValue);return o===l?Au(o)===Au(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if($y(o)!==$y(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Fn(o[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function pa(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=xi(t),r=xi(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return qy(t.timestampValue,e.timestampValue);case 4:return qy(ha(t),ha(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Si(s),u=Si(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=he(l[c],u[c]);if(f!==0)return f}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(ze(s.latitude),ze(o.latitude));return l!==0?l:he(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const m=s.fields||{},y=o.fields||{},I=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=(u=y.value)===null||u===void 0?void 0:u.arrayValue,P=he(((c=I==null?void 0:I.values)===null||c===void 0?void 0:c.length)||0,((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Hy(I,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Sl.mapValue&&o===Sl.mapValue)return 0;if(s===Sl.mapValue)return 1;if(o===Sl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=he(u[m],f[m]);if(y!==0)return y;const I=Rs(l[u[m]],c[f[m]]);if(I!==0)return I}return he(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z()}}function qy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=zr(t),r=zr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Hy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Rs(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function ks(t){return Uh(t)}function Uh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Si(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Uh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Uh(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Cu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bh(t){return!!t&&"integerValue"in t}function pp(t){return!!t&&"arrayValue"in t}function Gy(t){return!!t&&"nullValue"in t}function Ky(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ql(t){return!!t&&"mapValue"in t}function oP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ql(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fo(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Fo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ql(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ql(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(Fo(this.value))}}function g0(t){const e=[];return Di(t.fields,(n,r)=>{const i=new ot([n]);if(ql(r)){const s=g0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qt(e)}/**
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
 */class vt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,ee.min(),ee.min(),ee.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new vt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new vt(e,2,n,ee.min(),ee.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,ee.min(),ee.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ps{constructor(e,n){this.position=e,this.inclusive=n}}function Qy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ma{constructor(e,n="asc"){this.field=e,this.dir=n}}function lP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class y0{}class He extends y0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cP(e,n,r):n==="array-contains"?new fP(e,r):n==="in"?new pP(e,r):n==="not-in"?new mP(e,r):n==="array-contains-any"?new gP(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dP(e,r):new hP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&xi(this.value)===xi(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class In extends y0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new In(e,n)}matches(e){return v0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function v0(t){return t.op==="and"}function _0(t){return uP(t)&&v0(t)}function uP(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function zh(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(_0(t))return t.filters.map(e=>zh(e)).join(",");{const e=t.filters.map(n=>zh(n)).join(",");return`${t.op}(${e})`}}function w0(t,e){return t instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.field.isEqual(i.field)&&Fn(r.value,i.value)}(t,e):t instanceof In?function(r,i){return i instanceof In&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&w0(o,i.filters[l]),!0):!1}(t,e):void Z()}function E0(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${ks(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(E0).join(" ,")+"}"}(t):"Filter"}class cP extends He{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class dP extends He{constructor(e,n){super(e,"in",n),this.keys=T0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hP extends He{constructor(e,n){super(e,"not-in",n),this.keys=T0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class fP extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pp(n)&&pa(n.arrayValue,this.value)}}class pP extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pa(this.value.arrayValue,n)}}class mP extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pa(this.value.arrayValue,n)}}class gP extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pa(this.value.arrayValue,r))}}/**
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
 */class yP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Yy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yP(t,e,n,r,i,s,o)}function mp(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ks(r)).join(",")),e.ue=n}return e.ue}function gp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!w0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xy(t.startAt,e.startAt)&&Xy(t.endAt,e.endAt)}function $h(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Oi{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vP(t,e,n,r,i,s,o,l){return new Oi(t,e,n,r,i,s,o,l)}function yp(t){return new Oi(t)}function Jy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vp(t){return t.collectionGroup!==null}function ms(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new lt(ot.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ma(s,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new ma(ot.keyField(),r))}return e.ce}function Mn(t){const e=te(t);return e.le||(e.le=_P(e,ms(t))),e.le}function _P(t,e){if(t.limitType==="F")return Yy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ma(i.field,s)});const n=t.endAt?new Ps(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ps(t.startAt.position,t.startAt.inclusive):null;return Yy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wh(t,e){const n=t.filters.concat([e]);return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ru(t,e,n){return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return gp(Mn(t),Mn(e))&&t.limitType===e.limitType}function I0(t){return`${mp(Mn(t))}|lt:${t.limitType}`}function Wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>E0(i)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ks(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ks(i)).join(",")),`Target(${r})`}(Mn(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ms(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Qy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ms(r),i)||r.endAt&&!function(o,l,u){const c=Qy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ms(r),i))}(t,e)}function wP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function S0(t){return(e,n)=>{let r=!1;for(const i of ms(t)){const s=EP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EP(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Rs(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class $s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return p0(this.inner)}size(){return this.innerSize}}/**
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
 */const TP=new Oe(X.comparator);function lr(){return TP}const x0=new Oe(X.comparator);function Ao(...t){let e=x0;for(const n of t)e=e.insert(n.key,n);return e}function A0(t){let e=x0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ci(){return Uo()}function C0(){return Uo()}function Uo(){return new $s(t=>t.toString(),(t,e)=>t.isEqual(e))}const IP=new Oe(X.comparator),SP=new lt(X.comparator);function se(...t){let e=SP;for(const n of t)e=e.add(n);return e}const xP=new lt(he);function AP(){return xP}/**
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
 */function _p(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Au(e)?"-0":e}}function R0(t){return{integerValue:""+t}}function k0(t,e){return rP(e)?R0(e):_p(t,e)}/**
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
 */class uc{constructor(){this._=void 0}}function CP(t,e,n){return t instanceof ga?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&oc(s)&&(s=fp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ns?N0(t,e):t instanceof ya?b0(t,e):function(i,s){const o=P0(i,s),l=Zy(o)+Zy(i.Pe);return Bh(o)&&Bh(i.Pe)?R0(l):_p(i.serializer,l)}(t,e)}function RP(t,e,n){return t instanceof Ns?N0(t,e):t instanceof ya?b0(t,e):n}function P0(t,e){return t instanceof va?function(r){return Bh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ga extends uc{}class Ns extends uc{constructor(e){super(),this.elements=e}}function N0(t,e){const n=D0(e);for(const r of t.elements)n.some(i=>Fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ya extends uc{constructor(e){super(),this.elements=e}}function b0(t,e){let n=D0(e);for(const r of t.elements)n=n.filter(i=>!Fn(i,r));return{arrayValue:{values:n}}}class va extends uc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Zy(t){return ze(t.integerValue||t.doubleValue)}function D0(t){return pp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class wp{constructor(e,n){this.field=e,this.transform=n}}function kP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ns&&i instanceof Ns||r instanceof ya&&i instanceof ya?Cs(r.elements,i.elements,Fn):r instanceof va&&i instanceof va?Fn(r.Pe,i.Pe):r instanceof ga&&i instanceof ga}(t.transform,e.transform)}class PP{constructor(e,n){this.version=e,this.transformResults=n}}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function O0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dc(t.key,Pt.none()):new La(t.key,t.data,Pt.none());{const n=t.data,r=Mt.empty();let i=new lt(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(t.key,r,new Qt(i.toArray()),Pt.none())}}function NP(t,e,n){t instanceof La?function(i,s,o){const l=i.value.clone(),u=tv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(i,s,o){if(!Hl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=tv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(V0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bo(t,e,n,r){return t instanceof La?function(s,o,l,u){if(!Hl(s.precondition,o))return l;const c=s.value.clone(),f=nv(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(s,o,l,u){if(!Hl(s.precondition,o))return l;const c=nv(s.fieldTransforms,u,o),f=o.data;return f.setAll(V0(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Hl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function bP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=P0(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function ev(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Cs(r,i,(s,o)=>kP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends cc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends cc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function V0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function tv(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,RP(o,l,n[i]))}return r}function nv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,CP(s,o,e))}return r}class dc extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DP extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=C0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=O0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,(n,r)=>ev(n,r))&&Cs(this.baseMutations,e.baseMutations,(n,r)=>ev(n,r))}}class Ep{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return IP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ep(e,n,r,i)}}/**
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
 */class VP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var We,ae;function MP(t){switch(t){default:return Z();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function L0(t){if(t===void 0)return ar("GRPC error has no .code"),F.UNKNOWN;switch(t){case We.OK:return F.OK;case We.CANCELLED:return F.CANCELLED;case We.UNKNOWN:return F.UNKNOWN;case We.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case We.INTERNAL:return F.INTERNAL;case We.UNAVAILABLE:return F.UNAVAILABLE;case We.UNAUTHENTICATED:return F.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case We.NOT_FOUND:return F.NOT_FOUND;case We.ALREADY_EXISTS:return F.ALREADY_EXISTS;case We.PERMISSION_DENIED:return F.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case We.ABORTED:return F.ABORTED;case We.OUT_OF_RANGE:return F.OUT_OF_RANGE;case We.UNIMPLEMENTED:return F.UNIMPLEMENTED;case We.DATA_LOSS:return F.DATA_LOSS;default:return Z()}}(ae=We||(We={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jP(){return new TextEncoder}/**
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
 */const FP=new mi([4294967295,4294967295],0);function rv(t){const e=jP().encode(t),n=new o0;return n.update(e),new Uint8Array(n.digest())}function iv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new mi([n,r],0),new mi([i,s],0)]}class Tp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Co(`Invalid padding: ${n}`);if(r<0)throw new Co(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Co(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Co(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=mi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(mi.fromNumber(r)));return i.compare(FP)===1&&(i=new mi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=rv(e),[r,i]=iv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Tp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=rv(e),[r,i]=iv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Co extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(ee.min(),i,new Oe(he),lr(),se())}}class Ma{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ma(r,n,se(),se(),se())}}/**
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
 */class Gl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class M0{constructor(e,n){this.targetId=e,this.me=n}}class j0{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sv{constructor(){this.fe=0,this.ge=av(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Ma(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=av()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class UP{constructor(e){this.Le=e,this.Be=new Map,this.ke=lr(),this.qe=ov(),this.Qe=new Oe(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if($h(s))if(r===0){const o=new X(s.path);this.Ue(n,o,vt.newNoDocument(o,ee.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Si(r).toUint8Array()}catch(u){if(u instanceof m0)return As("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Tp(o,i,s)}catch(u){return As(u instanceof Co?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&$h(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,vt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new hc(e,n,this.Qe,this.ke,r);return this.ke=lr(),this.qe=ov(),this.Qe=new Oe(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new sv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new sv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ov(){return new Oe(X.comparator)}function av(){return new Oe(X.comparator)}const BP={asc:"ASCENDING",desc:"DESCENDING"},zP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$P={and:"AND",or:"OR"};class WP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qh(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qP(t,e){return ku(t,e.toTimestamp())}function jn(t){return ge(!!t),ee.fromTimestamp(function(n){const r=zr(n);return new be(r.seconds,r.nanos)}(t))}function Ip(t,e){return Hh(t,e).canonicalString()}function Hh(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function U0(t){const e=Te.fromString(t);return ge(q0(e)),e}function Gh(t,e){return Ip(t.databaseId,e.path)}function Id(t,e){const n=U0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(z0(n))}function B0(t,e){return Ip(t.databaseId,e)}function HP(t){const e=U0(t);return e.length===4?Te.emptyPath():z0(e)}function Kh(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function z0(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lv(t,e,n){return{name:Gh(t,e),fields:n.value.mapValue.fields}}function GP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ge(f===void 0||typeof f=="string"),ct.fromBase64String(f||"")):(ge(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ct.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?F.UNKNOWN:L0(c.code);return new W(f,c.message||"")}(o);n=new j0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Id(t,r.document.name),s=jn(r.document.updateTime),o=r.document.createTime?jn(r.document.createTime):ee.min(),l=new Mt({mapValue:{fields:r.document.fields}}),u=vt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Gl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Id(t,r.document),s=r.readTime?jn(r.readTime):ee.min(),o=vt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Gl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Id(t,r.document),s=r.removedTargetIds||[];n=new Gl([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new LP(i,s),l=r.targetId;n=new M0(l,o)}}return n}function KP(t,e){let n;if(e instanceof La)n={update:lv(t,e.key,e.value)};else if(e instanceof dc)n={delete:Gh(t,e.key)};else if(e instanceof Xr)n={update:lv(t,e.key,e.data),updateMask:rN(e.fieldMask)};else{if(!(e instanceof DP))return Z();n={verify:Gh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ga)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ya)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof va)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function QP(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?jn(i.updateTime):jn(s);return o.isEqual(ee.min())&&(o=jn(s)),new PP(o,i.transformResults||[])}(n,e))):[]}function XP(t,e){return{documents:[B0(t,e.path)]}}function YP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=B0(t,i);const s=function(c){if(c.length!==0)return W0(In.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(y){return{field:qi(y.field),direction:eN(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=qh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function JP(t){let e=HP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=$0(m);return y instanceof In&&_0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(A){return new ma(Hi(A.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,sc(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,I=m.values||[];return new Ps(I,y)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const y=!m.before,I=m.values||[];return new Ps(I,y)}(n.endAt)),vP(e,i,o,s,l,"F",u,c)}function ZP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hi(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Hi(n.unaryFilter.field);return He.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Hi(n.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hi(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>$0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function eN(t){return BP[t]}function tN(t){return zP[t]}function nN(t){return $P[t]}function qi(t){return{fieldPath:t.canonicalString()}}function Hi(t){return ot.fromServerFormat(t.fieldPath)}function W0(t){return t instanceof He?function(n){if(n.op==="=="){if(Ky(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NAN"}};if(Gy(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ky(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NOT_NAN"}};if(Gy(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qi(n.field),op:tN(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(i=>W0(i));return r.length===1?r[0]:{compositeFilter:{op:nN(n.op),filters:r}}}(t):Z()}function rN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function q0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Rr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=ct.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iN{constructor(e){this.ct=e}}function sN(t){const e=JP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ru(e,e.limit,"L"):e}/**
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
 */class oN{constructor(){this.un=new aN}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Br.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Br.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class aN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new lt(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt(Te.comparator)).toArray()}}/**
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
 */class bs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new bs(0)}static kn(){return new bs(-1)}}/**
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
 */class lN{constructor(){this.changes=new $s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class cN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bo(r.mutation,i,Qt.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ao();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=lr();const o=Uo(),l=function(){return Uo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Xr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Bo(f.mutation,c,f.mutation.getFieldMask(),be.now())):o.set(c.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var m;return l.set(c,new uN(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Uo();let i=new Oe((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Qt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=C0();f.forEach(y=>{if(!s.has(y)){const I=O0(n.get(y),r.get(y));I!==null&&m.set(y,I),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(ci());let l=-1,u=s;return o.next(c=>U.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(f=>({batchId:l,changes:A0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=Ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(m,y){return new Oi(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))});let l=Ao();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&Bo(f.mutation,c,Qt.empty(),be.now()),lc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class dN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:jn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:sN(i.bundledQuery),readTime:jn(i.readTime)}}(n)),U.resolve()}}/**
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
 */class hN{constructor(){this.overlays=new Oe(X.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ci();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=ci(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=ci(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=ci(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VP(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class fN{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Sp{constructor(){this.Tr=new lt(et.Er),this.dr=new lt(et.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new et(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Te([])),r=new et(n,e),i=new et(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Te([])),r=new et(n,e),i=new et(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new et(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
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
 */class pN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new lt(et.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new et(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(he);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new et(new X(s),0);let l=new lt(he);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new et(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mN{constructor(e){this.Mr=e,this.docs=function(){return new Oe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=lr();const o=n.path,l=new X(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Z1(J1(f),r)<=0||(i.has(f.key)||lc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gN(this)}getSize(e){return U.resolve(this.size)}}class gN extends lN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class yN{constructor(e){this.persistence=e,this.Nr=new $s(n=>mp(n),gp),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Sp,this.targetCount=0,this.kr=bs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class vN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new hp(0),this.Kr=!1,this.Kr=!0,this.$r=new fN,this.referenceDelegate=e(this),this.Ur=new yN(this),this.indexManager=new oN,this.remoteDocumentCache=function(i){return new mN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new iN(n),this.Gr=new dN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new pN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new _N(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class _N extends tP{constructor(e){super(),this.currentSequenceNumber=e}}class xp{constructor(e){this.persistence=e,this.Jr=new Sp,this.Yr=null}static Zr(e){return new xp(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Ap{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ap(e,n.fromCache,r,i)}}/**
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
 */class wN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class EN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return pC()?8:nP(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new wN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(vo()<=oe.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(vo()<=oe.DEBUG&&G("QueryEngine","Query:",Wi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(vo()<=oe.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):U.resolve())}Yi(e,n){if(Jy(n))return U.resolve(null);let r=Mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ru(n,null,"F"),r=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Ru(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Jy(n)||i.isEqual(ee.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(vo()<=oe.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wi(n)),this.rs(e,o,n,Y1(i,-1)).next(l=>l))})}ts(e,n){let r=new lt(S0(e));return n.forEach((i,s)=>{lc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return vo()<=oe.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Wi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Br.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class TN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Oe(he),this._s=new $s(s=>mp(s),gp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function IN(t,e,n,r){return new TN(t,e,n,r)}async function H0(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function SN(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,y=m.keys();let I=U.resolve();return y.forEach(A=>{I=I.next(()=>f.getEntry(u,A)).next(P=>{const D=c.docVersions.get(A);ge(D!==null),P.version.compareTo(D)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function G0(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function xN(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let I=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(ct.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(m,I),function(P,D,S){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,I,f)&&l.push(n.Ur.updateTargetData(s,I))});let u=lr(),c=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(AN(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(ee.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function AN(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=lr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function CN(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function RN(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Qh(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Va(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function uv(t,e,n){const r=te(t);let i=ee.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=te(u),y=m._s.get(f);return y!==void 0?U.resolve(m.os.get(y)):m.Ur.getTargetData(c,f)}(r,o,Mn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:se())).next(l=>(kN(r,wP(e),l),{documents:l,Ts:s})))}function kN(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class cv{constructor(){this.activeTargetIds=AP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PN{constructor(){this.so=new cv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new cv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NN{_o(e){}shutdown(){}}/**
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
 */class dv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xl=null;function Sd(){return xl===null?xl=function(){return 268435456+Math.round(2147483648*Math.random())}():xl++,"0x"+xl.toString(16)}/**
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
 */const bN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class DN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const mt="WebChannelConnection";class ON extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Sd(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(G("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw As("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=bN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Sd();return new Promise((o,l)=>{const u=new a0;u.setWithCredentials(!0),u.listenOnce(l0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Wl.NO_ERROR:const f=u.getResponseJson();G(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Wl.TIMEOUT:G(mt,`RPC '${e}' ${s} timed out`),l(new W(F.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const m=u.getStatus();if(G(mt,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const I=y==null?void 0:y.error;if(I&&I.status&&I.message){const A=function(D){const S=D.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(S)>=0?S:F.UNKNOWN}(I.status);l(new W(A,I.message))}else l(new W(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(F.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{G(mt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(mt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Sd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=d0(),l=c0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");G(mt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let y=!1,I=!1;const A=new DN({Io:D=>{I?G(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(y||(G(mt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),G(mt,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},To:()=>m.close()}),P=(D,S,T)=>{D.listen(S,x=>{try{T(x)}catch(V){setTimeout(()=>{throw V},0)}})};return P(m,xo.EventType.OPEN,()=>{I||(G(mt,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),P(m,xo.EventType.CLOSE,()=>{I||(I=!0,G(mt,`RPC '${e}' stream ${i} transport closed`),A.So())}),P(m,xo.EventType.ERROR,D=>{I||(I=!0,As(mt,`RPC '${e}' stream ${i} transport errored:`,D),A.So(new W(F.UNAVAILABLE,"The operation could not be completed")))}),P(m,xo.EventType.MESSAGE,D=>{var S;if(!I){const T=D.data[0];ge(!!T);const x=T,V=x.error||((S=x[0])===null||S===void 0?void 0:S.error);if(V){G(mt,`RPC '${e}' stream ${i} received error:`,V);const R=V.status;let N=function(w){const E=We[w];if(E!==void 0)return L0(E)}(R),_=V.message;N===void 0&&(N=F.INTERNAL,_="Unknown error status: "+R+" with message "+V.message),I=!0,A.So(new W(N,_)),m.close()}else G(mt,`RPC '${e}' stream ${i} received:`,T),A.bo(T)}}),P(l,u0.STAT_EVENT,D=>{D.stat===Fh.PROXY?G(mt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Fh.NOPROXY&&G(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function xd(){return typeof document<"u"?document:null}/**
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
 */function fc(t){return new WP(t,!0)}/**
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
 */class K0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Q0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new K0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VN extends Q0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=GP(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?jn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Kh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=$h(u)?{documents:XP(s,u)}:{query:YP(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=F0(s,o.resumeToken);const c=qh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=ku(s,o.snapshotVersion.toTimestamp());const c=qh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=ZP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Kh(this.serializer),n.removeTarget=e,this.a_(n)}}class LN extends Q0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=QP(e.writeResults,e.commitTime),r=jn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Kh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KP(this.serializer,r))};this.a_(n)}}/**
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
 */class MN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Hh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Hh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class jN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ar(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class FN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Vi(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.L_.add(4),await ja(c),c.q_.set("Unknown"),c.L_.delete(4),await pc(c)}(this))})}),this.q_=new jN(r,i)}}async function pc(t){if(Vi(t))for(const e of t.B_)await e(!0)}async function ja(t){for(const e of t.B_)await e(!1)}function X0(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Pp(n)?kp(n):Ws(n).r_()&&Rp(n,e))}function Cp(t,e){const n=te(t),r=Ws(n);n.N_.delete(e),r.r_()&&Y0(n,e),n.N_.size===0&&(r.r_()?r.o_():Vi(n)&&n.q_.set("Unknown"))}function Rp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).A_(e)}function Y0(t,e){t.Q_.xe(e),Ws(t).R_(e)}function kp(t){t.Q_=new UP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.q_.v_()}function Pp(t){return Vi(t)&&!Ws(t).n_()&&t.N_.size>0}function Vi(t){return te(t).L_.size===0}function J0(t){t.Q_=void 0}async function UN(t){t.q_.set("Online")}async function BN(t){t.N_.forEach((e,n)=>{Rp(t,e)})}async function zN(t,e){J0(t),Pp(t)?(t.q_.M_(e),kp(t)):t.q_.set("Unknown")}async function $N(t,e,n){if(t.q_.set("Online"),e instanceof j0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pu(t,r)}else if(e instanceof Gl?t.Q_.Ke(e):e instanceof M0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await G0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),Y0(s,u);const m=new Rr(f.target,u,c,f.sequenceNumber);Rp(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Pu(t,r)}}async function Pu(t,e,n){if(!Va(e))throw e;t.L_.add(1),await ja(t),t.q_.set("Offline"),n||(n=()=>G0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await pc(t)})}function Z0(t,e){return e().catch(n=>Pu(t,n,e))}async function mc(t){const e=te(t),n=$r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;WN(e);)try{const i=await CN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,qN(e,i)}catch(i){await Pu(e,i)}eT(e)&&tT(e)}function WN(t){return Vi(t)&&t.O_.length<10}function qN(t,e){t.O_.push(e);const n=$r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function eT(t){return Vi(t)&&!$r(t).n_()&&t.O_.length>0}function tT(t){$r(t).start()}async function HN(t){$r(t).p_()}async function GN(t){const e=$r(t);for(const n of t.O_)e.m_(n.mutations)}async function KN(t,e,n){const r=t.O_.shift(),i=Ep.from(r,e,n);await Z0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mc(t)}async function QN(t,e){e&&$r(t).V_&&await async function(r,i){if(function(o){return MP(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();$r(r).s_(),await Z0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mc(r)}}(t,e),eT(t)&&tT(t)}async function hv(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Vi(n);n.L_.add(3),await ja(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await pc(n)}async function XN(t,e){const n=te(t);e?(n.L_.delete(2),await pc(n)):e||(n.L_.add(2),await ja(n),n.q_.set("Unknown"))}function Ws(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new VN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:UN.bind(null,t),Ro:BN.bind(null,t),mo:zN.bind(null,t),d_:$N.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Pp(t)?kp(t):t.q_.set("Unknown")):(await t.K_.stop(),J0(t))})),t.K_}function $r(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new LN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:HN.bind(null,t),mo:QN.bind(null,t),f_:GN.bind(null,t),g_:KN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await mc(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Np{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Np(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bp(t,e){if(ar("AsyncQueue",`${e}: ${t}`),Va(t))return new W(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Ao(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class fv{constructor(){this.W_=new Oe(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ds{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ds(e,n,gs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class YN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class JN{constructor(){this.queries=pv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=pv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(F.ABORTED,"Firestore shutting down"))}}function pv(){return new $s(t=>I0(t),ac)}async function nT(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new YN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=bp(o,`Initialization of query '${Wi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Dp(n)}async function rT(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZN(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Dp(n)}function eb(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Dp(t){t.Y_.forEach(e=>{e.next()})}var Xh,mv;(mv=Xh||(Xh={})).ea="default",mv.Cache="cache";class iT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xh.Cache}}/**
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
 */class sT{constructor(e){this.key=e}}class oT{constructor(e){this.key=e}}class tb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=S0(e),this.Ra=new gs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new fv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),I=lc(this.query,m)?m:null,A=!!y&&this.mutatedKeys.has(y.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;y&&I?y.data.isEqual(I.data)?A!==P&&(r.track({type:3,doc:I}),D=!0):this.ga(y,I)||(r.track({type:2,doc:I}),D=!0,(u&&this.Aa(I,u)>0||c&&this.Aa(I,c)<0)&&(l=!0)):!y&&I?(r.track({type:0,doc:I}),D=!0):y&&!I&&(r.track({type:1,doc:y}),D=!0,(u||c)&&(l=!0)),D&&(I?(o=o.add(I),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(I,A){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return P(I)-P(A)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Ds(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new fv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new oT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new sT(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ds.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rb{constructor(e){this.key=e,this.va=!1}}class ib{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new $s(l=>I0(l),ac),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(X.comparator),this.Na=new Map,this.La=new Sp,this.Ba={},this.ka=new Map,this.qa=bs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sb(t,e,n=!0){const r=hT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await aT(r,e,n,!0),i}async function ob(t,e){const n=hT(t);await aT(n,e,!0,!1)}async function aT(t,e,n,r){const i=await RN(t.localStore,Mn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await ab(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&X0(t.remoteStore,i),l}async function ab(t,e,n,r,i){t.Ka=(m,y,I)=>async function(P,D,S,T){let x=D.view.ma(S);x.ns&&(x=await uv(P.localStore,D.query,!1).then(({documents:_})=>D.view.ma(_,x)));const V=T&&T.targetChanges.get(D.targetId),R=T&&T.targetMismatches.get(D.targetId)!=null,N=D.view.applyChanges(x,P.isPrimaryClient,V,R);return yv(P,D.targetId,N.wa),N.snapshot}(t,m,y,I);const s=await uv(t.localStore,e,!0),o=new tb(e,s.Ts),l=o.ma(s.documents),u=Ma.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);yv(t,n,c.wa);const f=new nb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function lb(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ac(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Cp(r.remoteStore,i.targetId),Yh(r,i.targetId)}).catch(Oa)):(Yh(r,i.targetId),await Qh(r.localStore,i.targetId,!0))}async function ub(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Cp(n.remoteStore,r.targetId))}async function cb(t,e,n){const r=yb(t);try{const i=await function(o,l){const u=te(o),c=be.now(),f=l.reduce((I,A)=>I.add(A.key),se());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=lr(),P=se();return u.cs.getEntries(I,f).next(D=>{A=D,A.forEach((S,T)=>{T.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,A)).next(D=>{m=D;const S=[];for(const T of l){const x=bP(T,m.get(T.key).overlayedDocument);x!=null&&S.push(new Xr(T.key,x,g0(x.value.mapValue),Pt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,S,l)}).next(D=>{y=D;const S=D.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(I,D.batchId,S)})}).then(()=>({batchId:y.batchId,changes:A0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Oe(he)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Fa(r,i.changes),await mc(r.remoteStore)}catch(i){const s=bp(i,"Failed to persist write");n.reject(s)}}async function lT(t,e){const n=te(t);try{const r=await xN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ge(o.va):i.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await Fa(n,r,e)}catch(r){await Oa(r)}}function gv(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(c=!0)}),c&&Dp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function db(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Oe(X.comparator);o=o.insert(s,vt.newNoDocument(s,ee.min()));const l=se().add(s),u=new hc(ee.min(),new Map,new Oe(he),o,l);await lT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Op(r)}else await Qh(r.localStore,e,!1).then(()=>Yh(r,e,n)).catch(Oa)}async function hb(t,e){const n=te(t),r=e.batch.batchId;try{const i=await SN(n.localStore,e);cT(n,r,null),uT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fa(n,i)}catch(i){await Oa(i)}}async function fb(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ge(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);cT(r,e,n),uT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fa(r,i)}catch(i){await Oa(i)}}function uT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function cT(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Yh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||dT(t,r)})}function dT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Cp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Op(t))}function yv(t,e,n){for(const r of n)r instanceof sT?(t.La.addReference(r.key,e),pb(t,r)):r instanceof oT?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||dT(t,r.key)):Z()}function pb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),Op(t))}function Op(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new rb(n)),t.Oa=t.Oa.insert(n,r),X0(t.remoteStore,new Rr(Mn(yp(n.path)),r,"TargetPurposeLimboResolution",hp.oe))}}async function Fa(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Ap.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(c,y=>U.forEach(y.$i,I=>f.persistence.referenceDelegate.addReference(m,y.targetId,I)).next(()=>U.forEach(y.Ui,I=>f.persistence.referenceDelegate.removeReference(m,y.targetId,I)))))}catch(m){if(!Va(m))throw m;G("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const y=m.targetId;if(!m.fromCache){const I=f.os.get(y),A=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(A);f.os=f.os.insert(y,P)}}}(r.localStore,s))}async function mb(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await H0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fa(n,r.hs)}}function gb(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function hT(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=db.bind(null,e),e.Ca.d_=ZN.bind(null,e.eventManager),e.Ca.$a=eb.bind(null,e.eventManager),e}function yb(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fb.bind(null,e),e}class Nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return IN(this.persistence,new EN,e.initialUser,this.serializer)}Ga(e){return new vN(xp.Zr,this.serializer)}Wa(e){return new PN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nu.provider={build:()=>new Nu};class Jh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mb.bind(null,this.syncEngine),await XN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JN}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=function(s){return new ON(s)}(e.databaseInfo);return function(s,o,l,u){return new MN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new FN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>gv(this.syncEngine,n,0),function(){return dv.D()?new dv:new NN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new ib(i,s,o,l,u,c);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ja(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jh.provider={build:()=>new Jh};/**
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
 */class fT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class vb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=f0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ad(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await H0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _b(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>hv(e.remoteStore,i)),t._onlineComponents=e}async function _b(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ad(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;As("Error using user provided cache. Falling back to memory cache: "+n),await Ad(t,new Nu)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Ad(t,new Nu);return t._offlineComponents}async function pT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await vv(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await vv(t,new Jh))),t._onlineComponents}function wb(t){return pT(t).then(e=>e.syncEngine)}async function mT(t){const e=await pT(t),n=e.eventManager;return n.onListen=sb.bind(null,e.syncEngine),n.onUnlisten=lb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ob.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ub.bind(null,e.syncEngine),n}function Eb(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new fT({next:y=>{f.Za(),o.enqueueAndForget(()=>rT(s,m));const I=y.docs.has(l);!I&&y.fromCache?c.reject(new W(F.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&y.fromCache&&u&&u.source==="server"?c.reject(new W(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(y)},error:y=>c.reject(y)}),m=new iT(yp(l.path),f,{includeMetadataChanges:!0,_a:!0});return nT(s,m)}(await mT(t),t.asyncQueue,e,n,r)),r.promise}function Tb(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new fT({next:y=>{f.Za(),o.enqueueAndForget(()=>rT(s,m)),y.fromCache&&u.source==="server"?c.reject(new W(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(y)},error:y=>c.reject(y)}),m=new iT(l,f,{includeMetadataChanges:!0,_a:!0});return nT(s,m)}(await mT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function gT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const _v=new Map;/**
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
 */function yT(t,e,n){if(!n)throw new W(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ib(t,e,n,r){if(e===!0&&r===!0)throw new W(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wv(t){if(!X.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ev(t){if(X.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gc(t);throw new W(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Sb(t,e){if(e<=0)throw new W(F.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Tv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ib("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new z1;switch(r.type){case"firstParty":return new H1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_v.get(n);r&&(G("ComponentProvider","Removing Datastore"),_v.delete(n),r.terminate())}(this),Promise.resolve()}}function xb(t,e,n,r={}){var i;const s=(t=dn(t,yc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&As("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=gt.MOCK_USER;else{l=aC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new gt(c)}t._authCredentials=new $1(new h0(l,u))}}/**
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
 */class cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cr(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class jr extends cr{constructor(e,n,r){super(e,n,yp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new X(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function Fe(t,e,...n){if(t=_e(t),yT("collection","path",e),t instanceof yc){const r=Te.fromString(e,...n);return Ev(r),new jr(t,null,r)}{if(!(t instanceof Nt||t instanceof jr))throw new W(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Ev(r),new jr(t.firestore,null,r)}}function ie(t,e,...n){if(t=_e(t),arguments.length===1&&(e=f0.newId()),yT("doc","path",e),t instanceof yc){const r=Te.fromString(e,...n);return wv(r),new Nt(t,null,new X(r))}{if(!(t instanceof Nt||t instanceof jr))throw new W(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return wv(r),new Nt(t.firestore,t instanceof jr?t.converter:null,new X(r))}}/**
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
 */class Iv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new K0(this,"async_queue_retry"),this.Vu=()=>{const r=xd();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=xd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=xd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new er;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Va(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw ar("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Np.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Yr extends yc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Iv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Iv(e),this._firestoreClient=void 0,await e}}}function Ab(t,e){const n=typeof t=="object"?t:tc(),r=typeof t=="string"?t:"(default)",i=Ni(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gE("firestore");s&&xb(i,...s)}return i}function vc(t){if(t._terminated)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Cb(t),t._firestoreClient}function Cb(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new sP(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,gT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new vb(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Os(ct.fromBase64String(e))}catch(n){throw new W(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Os(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ua{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qs{constructor(e){this._methodName=e}}/**
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
 */class Vp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */class Lp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const Rb=/^__.*__$/;class kb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}class vT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _T(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class _c{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new _c(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return bu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_T(this.Cu)&&Rb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Pb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}Qu(e,n,r,i=!1){return new _c({Cu:e,methodName:n,qu:r,path:ot.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hs(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new Pb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mp(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Bp("Data must be an object, but it was:",o,r);const l=IT(r,o);let u,c;if(s.merge)u=new Qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=Zh(e,m,n);if(!o.contains(y))throw new W(F.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);xT(f,y)||f.push(y)}u=new Qt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new kb(new Mt(l),u,c)}class Ba extends qs{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ba}}function Nb(t,e,n){return new _c({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class jp extends qs{_toFieldTransform(e){return new wp(e.path,new ga)}isEqual(e){return e instanceof jp}}class Fp extends qs{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=Nb(this,e,!0),r=this.Ku.map(s=>Gs(s,n)),i=new Ns(r);return new wp(e.path,i)}isEqual(e){return e instanceof Fp&&aa(this.Ku,e.Ku)}}class Up extends qs{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new va(e.serializer,k0(e.serializer,this.$u));return new wp(e.path,n)}isEqual(e){return e instanceof Up&&this.$u===e.$u}}function wT(t,e,n,r){const i=t.Qu(1,e,n);Bp("Data must be an object, but it was:",i,r);const s=[],o=Mt.empty();Di(r,(u,c)=>{const f=zp(e,u,n);c=_e(c);const m=i.Nu(f);if(c instanceof Ba)s.push(f);else{const y=Gs(c,m);y!=null&&(s.push(f),o.set(f,y))}});const l=new Qt(s);return new vT(o,l,i.fieldTransforms)}function ET(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Zh(e,r,n)],u=[i];if(s.length%2!=0)throw new W(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Zh(e,s[y])),u.push(s[y+1]);const c=[],f=Mt.empty();for(let y=l.length-1;y>=0;--y)if(!xT(c,l[y])){const I=l[y];let A=u[y];A=_e(A);const P=o.Nu(I);if(A instanceof Ba)c.push(I);else{const D=Gs(A,P);D!=null&&(c.push(I),f.set(I,D))}}const m=new Qt(c);return new vT(f,m,o.fieldTransforms)}function TT(t,e,n,r=!1){return Gs(n,t.Qu(r?4:3,e))}function Gs(t,e){if(ST(t=_e(t)))return Bp("Unsupported field value:",e,t),IT(t,e);if(t instanceof qs)return function(r,i){if(!_T(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Gs(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=_e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return k0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:ku(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ku(i.serializer,s)}}if(r instanceof Vp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Os)return{bytesValue:F0(i.serializer,r._byteString)};if(r instanceof Nt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ip(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Lp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return _p(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${gc(r)}`)}(t,e)}function IT(t,e){const n={};return p0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(t,(r,i)=>{const s=Gs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ST(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Vp||t instanceof Os||t instanceof Nt||t instanceof qs||t instanceof Lp)}function Bp(t,e,n){if(!ST(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Zh(t,e,n){if((e=_e(e))instanceof Ua)return e._internalPath;if(typeof e=="string")return zp(t,e);throw bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const bb=new RegExp("[~\\*/\\[\\]]");function zp(t,e,n){if(e.search(bb)>=0)throw bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ua(...e.split("."))._internalPath}catch{throw bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(F.INVALID_ARGUMENT,l+t+u)}function xT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $p{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Db(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Db extends $p{data(){return super.data()}}function wc(t,e){return typeof e=="string"?zp(t,e):e instanceof Ua?e._internalPath:e._delegate._internalPath}/**
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
 */function Ob(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wp{}class Ec extends Wp{}function Ye(t,e,...n){let r=[];e instanceof Wp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof qp).length,l=s.filter(u=>u instanceof Tc).length;if(o>1||o>0&&l>0)throw new W(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Tc extends Ec{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Tc(e,n,r)}_apply(e){const n=this._parse(e);return AT(e._query,n),new cr(e.firestore,e.converter,Wh(e._query,n))}_parse(e){const n=Hs(e.firestore);return function(s,o,l,u,c,f,m){let y;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){xv(m,f);const I=[];for(const A of m)I.push(Sv(u,s,A));y={arrayValue:{values:I}}}else y=Sv(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||xv(m,f),y=TT(l,o,m,f==="in"||f==="not-in");return He.create(c,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Be(t,e,n){const r=e,i=wc("where",t);return Tc._create(i,r,n)}class qp extends Wp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:In.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)AT(o,u),o=Wh(o,u)}(e._query,n),new cr(e.firestore,e.converter,Wh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hp extends Ec{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ma(s,o)}(e._query,this._field,this._direction);return new cr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Oi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ys(t,e="asc"){const n=e,r=wc("orderBy",t);return Hp._create(r,n)}class Gp extends Ec{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Gp(e,n,r)}_apply(e){return new cr(e.firestore,e.converter,Ru(e._query,this._limit,this._limitType))}}function ef(t){return Sb("limit",t),Gp._create("limit",t,"F")}class Kp extends Ec{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Kp(e,n,r)}_apply(e){const n=Lb(e,this.type,this._docOrFields,this._inclusive);return new cr(e.firestore,e.converter,function(i,s){return new Oi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Vb(...t){return Kp._create("startAfter",t,!1)}function Lb(t,e,n,r){if(n[0]=_e(n[0]),n[0]instanceof $p)return function(s,o,l,u,c){if(!u)throw new W(F.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const m of ms(s))if(m.field.isKeyField())f.push(Cu(o,u.key));else{const y=u.data.field(m.field);if(oc(y))throw new W(F.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(y===null){const I=m.field.canonicalString();throw new W(F.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${I}' (used as the orderBy) does not exist.`)}f.push(y)}return new Ps(f,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Hs(t.firestore);return function(o,l,u,c,f,m){const y=o.explicitOrderBy;if(f.length>y.length)throw new W(F.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const I=[];for(let A=0;A<f.length;A++){const P=f[A];if(y[A].field.isKeyField()){if(typeof P!="string")throw new W(F.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!vp(o)&&P.indexOf("/")!==-1)throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const D=o.path.child(Te.fromString(P));if(!X.isDocumentKey(D))throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const S=new X(D);I.push(Cu(l,S))}else{const D=TT(u,c,P);I.push(D)}}return new Ps(I,m)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Sv(t,e,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new W(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vp(e)&&n.indexOf("/")!==-1)throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!X.isDocumentKey(r))throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cu(t,new X(r))}if(n instanceof Nt)return Cu(t,n._key);throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gc(n)}.`)}function xv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Mb{convertValue(e,n="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ze(o.doubleValue));return new Lp(s)}convertGeoPoint(e){return new Vp(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const n=zr(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ge(q0(r));const i=new fa(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Qp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class CT extends $p{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Kl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Kl extends CT{data(e={}){return super.data(e)}}class jb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ro(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Kl(this._firestore,this._userDataWriter,r.key,r,new Ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Kl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ro(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Kl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ro(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Fb(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Fb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function Sn(t){t=dn(t,Nt);const e=dn(t.firestore,Yr);return Eb(vc(e),t._key).then(n=>Ub(e,t,n))}class RT extends Mb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Xe(t){t=dn(t,cr);const e=dn(t.firestore,Yr),n=vc(e),r=new RT(e);return Ob(t._query),Tb(n,t._query).then(i=>new jb(e,r,t,i))}function Ic(t,e,n){t=dn(t,Nt);const r=dn(t.firestore,Yr),i=Qp(t.converter,e,n);return za(r,[Mp(Hs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Pt.none())])}function bt(t,e,n,...r){t=dn(t,Nt);const i=dn(t.firestore,Yr),s=Hs(i);let o;return o=typeof(e=_e(e))=="string"||e instanceof Ua?ET(s,"updateDoc",t._key,e,n,r):wT(s,"updateDoc",t._key,e),za(i,[o.toMutation(t._key,Pt.exists(!0))])}function Cd(t){return za(dn(t.firestore,Yr),[new dc(t._key,Pt.none())])}function kT(t,e){const n=dn(t.firestore,Yr),r=ie(t),i=Qp(t.converter,e);return za(n,[Mp(Hs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Pt.exists(!1))]).then(()=>r)}function za(t,e){return function(r,i){const s=new er;return r.asyncQueue.enqueueAndForget(async()=>cb(await wb(r),i,s)),s.promise}(vc(t),e)}function Ub(t,e,n){const r=n.docs.get(e._key),i=new RT(t);return new CT(t,i,e._key,r,new Ro(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class Bb{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Hs(e)}set(e,n,r){this._verifyNotCommitted();const i=Rd(e,this._firestore),s=Qp(i.converter,n,r),o=Mp(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Pt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Rd(e,this._firestore);let o;return o=typeof(n=_e(n))=="string"||n instanceof Ua?ET(this._dataReader,"WriteBatch.update",s._key,n,r,i):wT(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Pt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Rd(e,this._firestore);return this._mutations=this._mutations.concat(new dc(n._key,Pt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(F.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Rd(t,e){if((t=_e(t)).firestore!==e)throw new W(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function Av(){return new Ba("deleteField")}function Cv(){return new jp("serverTimestamp")}function zb(...t){return new Fp("arrayUnion",t)}function $b(t){return new Up("increment",t)}/**
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
 */function kd(t){return vc(t=dn(t,Yr)),new Bb(t,e=>za(t,e))}(function(e,n=!0){(function(i){zs=i})(Us),En(new cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Yr(new W1(r.getProvider("auth-internal")),new K1(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fa(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),zt(zy,"4.7.3",e),zt(zy,"4.7.3","esm2017")})();var Wb="firebase",qb="10.14.1";/**
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
 */zt(Wb,qb,"app");/**
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
 */const Hb="type.googleapis.com/google.protobuf.Int64Value",Gb="type.googleapis.com/google.protobuf.UInt64Value";function PT(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function tf(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>tf(e));if(typeof t=="function"||typeof t=="object")return PT(t,e=>tf(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Du(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Hb:case Gb:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Du(e)):typeof t=="function"||typeof t=="object"?PT(t,e=>Du(e)):t}/**
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
 */const Xp="functions";/**
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
 */const Rv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class vs extends An{constructor(e,n,r){super(`${Xp}/${e}`,n||""),this.details=r}}function Kb(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Qb(t,e){let n=Kb(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!Rv[o])return new vs("internal","internal");n=Rv[o],r=o}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=Du(i))}}catch{}return n==="ok"?null:new vs(n,r,i)}/**
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
 */class Xb{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const nf="us-central1";function Yb(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new vs("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Jb{constructor(e,n,r,i,s=nf,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Xb(n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=nf}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function Zb(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function eD(t,e,n){return r=>nD(t,e,r,{})}async function tD(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function nD(t,e,n,r){const i=t._url(e);return rD(t,i,n,r)}async function rD(t,e,n,r){n=tf(n);const i={data:n},s={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const l=r.timeout||7e4,u=Yb(l),c=await Promise.race([tD(e,i,s,t.fetchImpl),u.promise,t.cancelAllRequests]);if(u.cancel(),!c)throw new vs("cancelled","Firebase Functions instance was deleted.");const f=Qb(c.status,c.json);if(f)throw f;if(!c.json)throw new vs("internal","Response is not valid JSON object.");let m=c.json.data;if(typeof m>"u"&&(m=c.json.result),typeof m>"u")throw new vs("internal","Response is missing data field.");return{data:Du(m)}}const kv="@firebase/functions",Pv="0.11.8";/**
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
 */const iD="auth-internal",sD="app-check-internal",oD="messaging-internal";function aD(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(iD),l=r.getProvider(oD),u=r.getProvider(sD);return new Jb(s,o,l,u,i,t)};En(new cn(Xp,n,"PUBLIC").setMultipleInstances(!0)),zt(kv,Pv,e),zt(kv,Pv,"esm2017")}/**
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
 */function lD(t=tc(),e=nf){const r=Ni(_e(t),Xp).getImmediate({identifier:e}),i=gE("functions");return i&&uD(r,...i),r}function uD(t,e,n){Zb(_e(t),e,n)}function cD(t,e,n){return eD(_e(t),e)}aD(fetch.bind(self));const NT="@firebase/installations",Yp="0.6.9";/**
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
 */const bT=1e4,DT=`w:${Yp}`,OT="FIS_v2",dD="https://firebaseinstallations.googleapis.com/v1",hD=60*60*1e3,fD="installations",pD="Installations";/**
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
 */const mD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ai=new Pi(fD,pD,mD);function VT(t){return t instanceof An&&t.code.includes("request-failed")}/**
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
 */function LT({projectId:t}){return`${dD}/projects/${t}/installations`}function MT(t){return{token:t.token,requestStatus:2,expiresIn:yD(t.expiresIn),creationTime:Date.now()}}async function jT(t,e){const r=(await e.json()).error;return Ai.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function FT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function gD(t,{refreshToken:e}){const n=FT(t);return n.append("Authorization",vD(e)),n}async function UT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function yD(t){return Number(t.replace("s","000"))}function vD(t){return`${OT} ${t}`}/**
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
 */async function _D({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=LT(t),i=FT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:OT,appId:t.appId,sdkVersion:DT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await UT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:MT(c.authToken)}}else throw await jT("Create Installation",u)}/**
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
 */function BT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function wD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ED=/^[cdef][\w-]{21}$/,rf="";function TD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ID(t);return ED.test(n)?n:rf}catch{return rf}}function ID(t){return wD(t).substr(0,22)}/**
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
 */function Sc(t){return`${t.appName}!${t.appId}`}/**
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
 */const zT=new Map;function $T(t,e){const n=Sc(t);WT(n,e),SD(n,e)}function WT(t,e){const n=zT.get(t);if(n)for(const r of n)r(e)}function SD(t,e){const n=xD();n&&n.postMessage({key:t,fid:e}),AD()}let di=null;function xD(){return!di&&"BroadcastChannel"in self&&(di=new BroadcastChannel("[Firebase] FID Change"),di.onmessage=t=>{WT(t.data.key,t.data.fid)}),di}function AD(){zT.size===0&&di&&(di.close(),di=null)}/**
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
 */const CD="firebase-installations-database",RD=1,Ci="firebase-installations-store";let Pd=null;function Jp(){return Pd||(Pd=ec(CD,RD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ci)}}})),Pd}async function Ou(t,e){const n=Sc(t),i=(await Jp()).transaction(Ci,"readwrite"),s=i.objectStore(Ci),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&$T(t,e.fid),e}async function qT(t){const e=Sc(t),r=(await Jp()).transaction(Ci,"readwrite");await r.objectStore(Ci).delete(e),await r.done}async function xc(t,e){const n=Sc(t),i=(await Jp()).transaction(Ci,"readwrite"),s=i.objectStore(Ci),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&$T(t,l.fid),l}/**
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
 */async function Zp(t){let e;const n=await xc(t.appConfig,r=>{const i=kD(r),s=PD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===rf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function kD(t){const e=t||{fid:TD(),registrationStatus:0};return HT(e)}function PD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ai.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ND(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bD(t)}:{installationEntry:e}}async function ND(t,e){try{const n=await _D(t,e);return Ou(t.appConfig,n)}catch(n){throw VT(n)&&n.customData.serverCode===409?await qT(t.appConfig):await Ou(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bD(t){let e=await Nv(t.appConfig);for(;e.registrationStatus===1;)await BT(100),e=await Nv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Zp(t);return r||n}return e}function Nv(t){return xc(t,e=>{if(!e)throw Ai.create("installation-not-found");return HT(e)})}function HT(t){return DD(t)?{fid:t.fid,registrationStatus:0}:t}function DD(t){return t.registrationStatus===1&&t.registrationTime+bT<Date.now()}/**
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
 */async function OD({appConfig:t,heartbeatServiceProvider:e},n){const r=VD(t,n),i=gD(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:DT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await UT(()=>fetch(r,l));if(u.ok){const c=await u.json();return MT(c)}else throw await jT("Generate Auth Token",u)}function VD(t,{fid:e}){return`${LT(t)}/${e}/authTokens:generate`}/**
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
 */async function em(t,e=!1){let n;const r=await xc(t.appConfig,s=>{if(!GT(s))throw Ai.create("not-registered");const o=s.authToken;if(!e&&jD(o))return s;if(o.requestStatus===1)return n=LD(t,e),s;{if(!navigator.onLine)throw Ai.create("app-offline");const l=UD(s);return n=MD(t,l),l}});return n?await n:r.authToken}async function LD(t,e){let n=await bv(t.appConfig);for(;n.authToken.requestStatus===1;)await BT(100),n=await bv(t.appConfig);const r=n.authToken;return r.requestStatus===0?em(t,e):r}function bv(t){return xc(t,e=>{if(!GT(e))throw Ai.create("not-registered");const n=e.authToken;return BD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function MD(t,e){try{const n=await OD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ou(t.appConfig,r),n}catch(n){if(VT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ou(t.appConfig,r)}throw n}}function GT(t){return t!==void 0&&t.registrationStatus===2}function jD(t){return t.requestStatus===2&&!FD(t)}function FD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hD}function UD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function BD(t){return t.requestStatus===1&&t.requestTime+bT<Date.now()}/**
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
 */async function zD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Zp(e);return r?r.catch(console.error):em(e).catch(console.error),n.fid}/**
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
 */async function $D(t,e=!1){const n=t;return await WD(n),(await em(n,e)).token}async function WD(t){const{registrationPromise:e}=await Zp(t);e&&await e}/**
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
 */function qD(t){if(!t||!t.options)throw Nd("App Configuration");if(!t.name)throw Nd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Nd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Nd(t){return Ai.create("missing-app-config-values",{valueName:t})}/**
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
 */const KT="installations",HD="installations-internal",GD=t=>{const e=t.getProvider("app").getImmediate(),n=qD(e),r=Ni(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},KD=t=>{const e=t.getProvider("app").getImmediate(),n=Ni(e,KT).getImmediate();return{getId:()=>zD(n),getToken:i=>$D(n,i)}};function QD(){En(new cn(KT,GD,"PUBLIC")),En(new cn(HD,KD,"PRIVATE"))}QD();zt(NT,Yp);zt(NT,Yp,"esm2017");/**
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
 */const XD="/firebase-messaging-sw.js",YD="/firebase-cloud-messaging-push-scope",QT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",JD="https://fcmregistrations.googleapis.com/v1",XT="google.c.a.c_id",ZD="google.c.a.c_l",e2="google.c.a.ts",t2="google.c.a.e";var Dv;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Dv||(Dv={}));/**
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
 */var _a;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(_a||(_a={}));/**
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
 */function Wn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function n2(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const bd="fcm_token_details_db",r2=5,Ov="fcm_token_object_Store";async function i2(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(bd))return null;let e=null;return(await ec(bd,r2,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(Ov))return;const u=o.objectStore(Ov),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const f=c;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Wn(f.vapidKey)}}}else if(i===3){const f=c;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Wn(f.auth),p256dh:Wn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Wn(f.vapidKey)}}}else if(i===4){const f=c;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Wn(f.auth),p256dh:Wn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Wn(f.vapidKey)}}}}}})).close(),await vd(bd),await vd("fcm_vapid_details_db"),await vd("undefined"),s2(e)?e:null}function s2(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const o2="firebase-messaging-database",a2=1,wa="firebase-messaging-store";let Dd=null;function YT(){return Dd||(Dd=ec(o2,a2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wa)}}})),Dd}async function l2(t){const e=JT(t),r=await(await YT()).transaction(wa).objectStore(wa).get(e);if(r)return r;{const i=await i2(t.appConfig.senderId);if(i)return await tm(t,i),i}}async function tm(t,e){const n=JT(t),i=(await YT()).transaction(wa,"readwrite");return await i.objectStore(wa).put(e,n),await i.done,e}function JT({appConfig:t}){return t.appId}/**
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
 */const u2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_t=new Pi("messaging","Messaging",u2);/**
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
 */async function c2(t,e){const n=await rm(t),r=ZT(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(nm(t.appConfig),i)).json()}catch(o){throw _t.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw _t.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw _t.create("token-subscribe-no-token");return s.token}async function d2(t,e){const n=await rm(t),r=ZT(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${nm(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw _t.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw _t.create("token-update-failed",{errorInfo:o})}if(!s.token)throw _t.create("token-update-no-token");return s.token}async function h2(t,e){const r={method:"DELETE",headers:await rm(t)};try{const s=await(await fetch(`${nm(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw _t.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw _t.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function nm({projectId:t}){return`${JD}/projects/${t}/registrations`}async function rm({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ZT({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==QT&&(i.web.applicationPubKey=r),i}/**
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
 */const f2=7*24*60*60*1e3;async function p2(t){const e=await g2(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Wn(e.getKey("auth")),p256dh:Wn(e.getKey("p256dh"))},r=await l2(t.firebaseDependencies);if(r){if(y2(r.subscriptionOptions,n))return Date.now()>=r.createTime+f2?m2(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await h2(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Vv(t.firebaseDependencies,n)}else return Vv(t.firebaseDependencies,n)}async function m2(t,e){try{const n=await d2(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await tm(t.firebaseDependencies,r),n}catch(n){throw n}}async function Vv(t,e){const r={token:await c2(t,e),createTime:Date.now(),subscriptionOptions:e};return await tm(t,r),r.token}async function g2(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n2(e)})}function y2(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function Lv(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return v2(e,t),_2(e,t),w2(e,t),e}function v2(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function _2(t,e){e.data&&(t.data=e.data)}function w2(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
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
 */function E2(t){return typeof t=="object"&&!!t&&XT in t}/**
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
 */function T2(t){if(!t||!t.options)throw Od("App Configuration Object");if(!t.name)throw Od("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Od(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Od(t){return _t.create("missing-app-config-values",{valueName:t})}/**
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
 */class I2{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=T2(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function S2(t){try{t.swRegistration=await navigator.serviceWorker.register(XD,{scope:YD}),t.swRegistration.update().catch(()=>{})}catch(e){throw _t.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function x2(t,e){if(!e&&!t.swRegistration&&await S2(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw _t.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function A2(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=QT)}/**
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
 */async function eI(t,e){if(!navigator)throw _t.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw _t.create("permission-blocked");return await A2(t,e==null?void 0:e.vapidKey),await x2(t,e==null?void 0:e.serviceWorkerRegistration),p2(t)}/**
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
 */async function C2(t,e,n){const r=R2(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[XT],message_name:n[ZD],message_time:n[e2],message_device_time:Math.floor(Date.now()/1e3)})}function R2(t){switch(t){case _a.NOTIFICATION_CLICKED:return"notification_open";case _a.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function k2(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===_a.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Lv(n)):t.onMessageHandler.next(Lv(n)));const r=n.data;E2(r)&&r[t2]==="1"&&await C2(t,n.messageType,r)}const Mv="@firebase/messaging",jv="0.12.12";/**
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
 */const P2=t=>{const e=new I2(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>k2(e,n)),e},N2=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>eI(e,r)}};function b2(){En(new cn("messaging",P2,"PUBLIC")),En(new cn("messaging-internal",N2,"PRIVATE")),zt(Mv,jv),zt(Mv,jv,"esm2017")}/**
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
 */async function D2(){try{await wE()}catch{return!1}return typeof window<"u"&&_E()&&mC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function O2(t,e){if(!navigator)throw _t.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function V2(t=tc()){return D2().then(e=>{if(!e)throw _t.create("unsupported-browser")},e=>{throw _t.create("indexed-db-unsupported")}),Ni(_e(t),"messaging").getImmediate()}async function L2(t,e){return t=_e(t),eI(t,e)}function M2(t,e){return t=_e(t),O2(t,e)}b2();const j2={apiKey:"AIzaSyAeugvkxFv7pk21juKWCeAMpsG2w-pGwzo",authDomain:"porreta-app.firebaseapp.com",projectId:"porreta-app",storageBucket:"porreta-app.firebasestorage.app",messagingSenderId:"377909387939",appId:"1:377909387939:web:1a7c43647046f4667dd516"},Ac=IE(j2),Al=U1(Ac),Q=Ab(Ac),F2=lD(Ac),tI=V2(Ac),U2="BG0owZ2spXe7RKBKEoDljfW0wF0YzqXCLBOhj1IVCATZKI-eAcihsw1ua2u1pF7iDbX_VSWbXzHbGcwEqGg0HTg";let Fv=!1;function Cl(){return"Notification"in window?Notification.permission:"unsupported"}async function B2(t){try{return console.log("Solicitando permiso de notificaciones..."),"Notification"in window?await Notification.requestPermission()!=="granted"?!1:(await $2(t),await nI(),!0):(console.warn("Este navegador no soporta notificaciones"),!1)}catch(e){return console.error("Error al solicitar permisos:",e),!1}}async function nI(){Fv||!("Notification"in window)||Notification.permission!=="granted"||(Fv=!0,M2(tI,async t=>{var i,s,o,l,u,c;console.log("📩 Mensaje recibido en primer plano:",t);const e=await navigator.serviceWorker.getRegistration("/Porreta/")||await navigator.serviceWorker.register("/Porreta/firebase-messaging-sw.js",{scope:"/Porreta/"}),n=((i=t.notification)==null?void 0:i.title)||((s=t.data)==null?void 0:s.title)||"Porreta",r=((o=t.notification)==null?void 0:o.body)||((l=t.data)==null?void 0:l.body)||"";await e.showNotification(n,{body:r,icon:"/Porreta/icon-192.png",badge:"/Porreta/icon-192.png",tag:((u=t.data)==null?void 0:u.roundId)||((c=t.data)==null?void 0:c.type)||"porreta",data:t.data})}))}async function z2(){return(await cD(F2,"sendTestNotification")()).data}async function $2(t){var e;try{const n=await navigator.serviceWorker.register("/Porreta/firebase-messaging-sw.js",{scope:"/Porreta/"});await navigator.serviceWorker.ready;const r=await L2(tI,{vapidKey:U2,serviceWorkerRegistration:n});if(r){console.log("✅ Token FCM obtenido");try{const i=ie(Q,"users",t);await Ic(i,{fcmTokens:zb(r)},{merge:!0}),console.log("💾 Token FCM guardado/actualizado en Firestore");const s=await Sn(i);if(s.exists()){const o=((e=s.data())==null?void 0:e.fcmTokens)||[];console.log("📊 Tokens actuales en Firestore:",o.length)}else console.error("❌ El documento de usuario no existe después de guardar")}catch(i){console.error("❌ Error guardando token en Firestore:",i)}}else console.warn("⚠️ No se pudo obtener el token FCM")}catch(n){throw console.error("Error al registrar token FCM:",n),n}}const rI=O.createContext(void 0),$t=()=>{const t=O.useContext(rI);if(!t)throw new Error("useAuth debe usarse dentro de AuthProvider");return t},W2=({children:t})=>{const[e,n]=O.useState(null),[r,i]=O.useState(null),[s,o]=O.useState(!0),l=async I=>{try{const A=await Sn(ie(Q,"users",I.uid));A.exists()&&i({uid:I.uid,...A.data()}),nI().catch(P=>{console.error("Error preparando notificaciones en primer plano:",P)})}catch(A){console.error("Error cargando datos usuario:",A)}},u=async()=>{e&&await l(e)};O.useEffect(()=>Rk(Al,async A=>{n(A),A?(await l(A),bt(ie(Q,"users",A.uid),{lastSeen:Cv()}).catch(P=>console.error("Error actualizando lastSeen:",P))):i(null),o(!1)}),[]),O.useEffect(()=>{const I=()=>{document.visibilityState==="visible"&&e&&bt(ie(Q,"users",e.uid),{lastSeen:Cv()}).catch(A=>console.error("Error actualizando lastSeen:",A))};return document.addEventListener("visibilitychange",I),()=>document.removeEventListener("visibilitychange",I)},[e]);const c=async(I,A,P)=>{const S=(await Sk(Al,I,A)).user;await Ic(ie(Q,"users",S.uid),{email:I,nick:P,createdAt:new Date,communities:{},notificationSettings:{newRounds:!0,deadlineReminders:!0,winnersAndBote:!0}}),await l(S)},f=async(I,A)=>{await xk(Al,I,A)},m=async()=>{await kk(Al)},y={currentUser:e,userData:r,loading:s,isSuperAdmin:(r==null?void 0:r.isSuperAdmin)===!0,signup:c,login:f,logout:m,refreshUserData:u};return h.jsx(rI.Provider,{value:y,children:t})},iI=O.createContext(void 0),q2=({children:t})=>{const[e,n]=O.useState(()=>{const i=localStorage.getItem("porreta-theme");return i==="dark"||i==="light"?i:"light"});O.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("porreta-theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")};return h.jsx(iI.Provider,{value:{theme:e,toggleTheme:r},children:t})},H2=()=>{const t=O.useContext(iI);if(t===void 0)throw new Error("useTheme debe usarse dentro de ThemeProvider");return t},G2=()=>{const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,s]=O.useState(""),[o,l]=O.useState(!1),{login:u,currentUser:c,loading:f}=$t(),m=xn();O.useEffect(()=>{!f&&c&&m("/communities",{replace:!0})},[c,f,m]);const y=async I=>{if(I.preventDefault(),!t||!n){s("Completa todos los campos");return}s(""),l(!0);try{await u(t,n),m("/communities",{replace:!0})}catch(A){s("Error al iniciar sesión: "+(A.message||"Error desconocido"))}finally{l(!1)}};return f?h.jsx("div",{className:"container",style:{textAlign:"center",marginTop:"100px"},children:h.jsx("p",{children:"Cargando..."})}):h.jsx("div",{className:"container",children:h.jsxs("div",{className:"card",style:{marginTop:"60px"},children:[h.jsx("h1",{style:{textAlign:"center",color:"#1976d2",marginTop:0},children:"Porreta"}),h.jsx("h2",{style:{textAlign:"center",marginTop:0,fontSize:"18px",color:"#666"},children:"Iniciar Sesión"}),h.jsxs("form",{onSubmit:y,children:[h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Correo electrónico"}),h.jsx("input",{type:"email",className:"input",value:t,onChange:I=>e(I.target.value),placeholder:"tu@email.com",disabled:o})]}),h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Contraseña"}),h.jsx("input",{type:"password",className:"input",value:n,onChange:I=>r(I.target.value),placeholder:"Tu contraseña",disabled:o})]}),i&&h.jsx("div",{className:"error",children:i}),h.jsx("button",{type:"submit",className:"button",disabled:o,children:o?"Iniciando...":"Iniciar Sesión"}),h.jsx("button",{type:"button",className:"button button-secondary",onClick:()=>m("/signup"),disabled:o,children:"Crear Cuenta Nueva"})]})]})})},K2=()=>{const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,s]=O.useState(""),[o,l]=O.useState(""),[u,c]=O.useState(""),[f,m]=O.useState(!1),[y,I]=O.useState(!1),[A,P]=O.useState(!0),{signup:D,currentUser:S,loading:T}=$t(),x=xn();O.useEffect(()=>{(async()=>{try{const N=await Sn(ie(Q,"config","global"));if(N.exists()){const _=N.data();I(!_.allowUserRegistration)}}catch(N){console.error("Error al verificar configuración:",N)}finally{P(!1)}})()},[]),O.useEffect(()=>{!T&&!A&&S&&x("/communities",{replace:!0})},[S,T,A,x]);const V=async R=>{if(R.preventDefault(),y){c("El registro de nuevos usuarios está temporalmente deshabilitado");return}if(!t||!n||!o){c("Completa todos los campos");return}if(n!==i){c("Las contraseñas no coinciden");return}if(n.length<6){c("La contraseña debe tener al menos 6 caracteres");return}c(""),m(!0);try{await D(t,n,o),x("/communities",{replace:!0})}catch(N){c("Error al crear cuenta: "+(N.message||"Error desconocido"))}finally{m(!1)}};return T||A?h.jsx("div",{className:"container",style:{textAlign:"center",marginTop:"100px"},children:h.jsx("p",{children:"Cargando..."})}):y?h.jsx("div",{className:"container",children:h.jsxs("div",{className:"card",style:{marginTop:"40px",textAlign:"center"},children:[h.jsx("h1",{style:{color:"#1976d2",marginTop:0},children:"Porreta"}),h.jsxs("div",{style:{padding:"30px",backgroundColor:"rgba(244, 67, 54, 0.1)",borderRadius:"8px",marginTop:"20px"},children:[h.jsx("h2",{style:{color:"#d32f2f",marginTop:0},children:"🚫 Registro Deshabilitado"}),h.jsxs("p",{style:{color:"var(--text-secondary)",lineHeight:"1.6"},children:["El registro de nuevos usuarios está temporalmente deshabilitado.",h.jsx("br",{}),"Por favor, contacta con el administrador para obtener acceso."]})]}),h.jsx("button",{onClick:()=>x("/",{replace:!0}),className:"button",style:{marginTop:"20px"},children:"Volver al Login"})]})}):h.jsx("div",{className:"container",children:h.jsxs("div",{className:"card",style:{marginTop:"40px"},children:[h.jsx("h1",{style:{textAlign:"center",color:"#1976d2",marginTop:0},children:"Porreta"}),h.jsx("h2",{style:{textAlign:"center",marginTop:0,fontSize:"18px",color:"#666"},children:"Crear Cuenta"}),h.jsxs("form",{onSubmit:V,children:[h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Nick / Apodo"}),h.jsx("input",{type:"text",className:"input",value:o,onChange:R=>l(R.target.value),placeholder:"Tu apodo",disabled:f})]}),h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Correo electrónico"}),h.jsx("input",{type:"email",className:"input",value:t,onChange:R=>e(R.target.value),placeholder:"tu@email.com",disabled:f})]}),h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Contraseña"}),h.jsx("input",{type:"password",className:"input",value:n,onChange:R=>r(R.target.value),placeholder:"Mínimo 6 caracteres",disabled:f})]}),h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Confirmar Contraseña"}),h.jsx("input",{type:"password",className:"input",value:i,onChange:R=>s(R.target.value),placeholder:"Repite la contraseña",disabled:f})]}),u&&h.jsx("div",{className:"error",children:u}),h.jsx("button",{type:"submit",className:"button",disabled:f,children:f?"Creando...":"Crear Cuenta"}),h.jsx("button",{type:"button",className:"button button-secondary",onClick:()=>x("/"),disabled:f,children:"Ya tengo cuenta"})]})]})})},Vs=({title:t="Porreta APP",message:e,type:n="info",onClose:r})=>{const i=()=>{switch(n){case"warning":return"⚠️";case"error":return"❌";case"success":return"✅";default:return"ℹ️"}},s=()=>{switch(n){case"warning":return"#ff9800";case"error":return"#f44336";case"success":return"#4caf50";default:return"#2196f3"}};return h.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,animation:"fadeIn 0.2s ease-out"},onClick:r,children:h.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),style:{maxWidth:"500px",maxHeight:"80vh",overflowY:"auto",animation:"scaleIn 0.3s ease-out"},children:[h.jsx("div",{style:{textAlign:"center",borderBottom:`3px solid ${s()}`,paddingBottom:"15px",marginBottom:"20px"},children:h.jsxs("h2",{style:{margin:0,color:"var(--text-primary)",fontSize:"20px",fontWeight:"bold"},children:[i()," ",t]})}),h.jsx("p",{style:{color:"var(--text-primary)",lineHeight:"1.6",textAlign:"center",margin:"20px 0",whiteSpace:"pre-line"},children:e}),h.jsx("button",{onClick:r,className:"button",style:{width:"100%",marginTop:"10px"},children:"Entendido"})]})})},Q2=()=>{const{userData:t,logout:e,isSuperAdmin:n}=$t(),{theme:r,toggleTheme:i}=H2(),s=xn(),[o,l]=O.useState([]),[u,c]=O.useState(!0),[f,m]=O.useState(!1),[y,I]=O.useState(!1),[A,P]=O.useState(!1),[D,S]=O.useState(null);O.useEffect(()=>{x(),T()},[t]);const T=async()=>{try{const N=await Sn(ie(Q,"config","global"));if(N.exists()){const _=N.data();P(!_.allowCommunityCreation)}}catch(N){console.error("Error al verificar configuración:",N)}},x=async()=>{if(t)try{const N=Object.keys(t.communities||{});if(N.length===0){l([]),c(!1);return}const _=[];for(const g of N)(await Xe(Ye(Fe(Q,"communities"),Be("__name__","==",g)))).forEach(E=>{const k={id:E.id,...E.data()};(n||k.isActive!==!1)&&_.push(k)});l(_)}catch(N){console.error("Error cargando comunidades:",N)}finally{c(!1)}},V=async()=>{try{await e(),s("/")}catch(N){console.error("Error cerrando sesión:",N)}},R={width:"38px",height:"38px",minWidth:"38px",padding:0,border:"1px solid rgba(255,255,255,0.75)",borderRadius:"6px",backgroundColor:"rgba(255,255,255,0.18)",color:"white",cursor:"pointer",fontSize:"17px",lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"};return u?h.jsx("div",{className:"loading",children:"Cargando..."}):h.jsxs("div",{children:[h.jsxs("div",{className:"header",children:[h.jsx("h1",{children:"Mis Comunidades"}),h.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n&&h.jsx("button",{onClick:()=>s("/super-admin"),style:R,title:"Panel de super administrador",children:"🔧"}),h.jsx("button",{onClick:()=>s("/notifications"),style:R,title:"Notificaciones",children:"🔔"}),h.jsx("button",{onClick:i,style:R,title:r==="light"?"Activar modo oscuro":"Activar modo claro",children:r==="light"?"🌙":"☀️"}),h.jsx("button",{onClick:V,style:{...R,fontSize:"13px",fontWeight:600},title:"Salir",children:"Salir"})]})]}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"card",children:[h.jsx("button",{className:"button",onClick:()=>{A?S({message:"La creación de nuevas comunidades está temporalmente deshabilitada por el administrador",type:"warning"}):m(!0)},style:{opacity:A?.6:1,cursor:A?"not-allowed":"pointer"},children:"Crear Nueva Comunidad"}),h.jsx("button",{className:"button button-secondary",onClick:()=>I(!0),children:"Unirse a Comunidad"})]}),o.length===0?h.jsxs("div",{className:"empty-state",children:[h.jsx("p",{children:"No perteneces a ninguna comunidad aún"}),h.jsx("p",{children:"Crea una nueva o únete usando una contraseña"})]}):h.jsx("div",{className:"card",children:o.map(N=>h.jsxs("div",{className:"list-item",onClick:()=>s(`/community/${N.id}`),children:[h.jsxs("h3",{style:{margin:"0 0 8px 0"},children:[N.name,N.isActive===!1&&h.jsx("span",{className:"badge badge-closed",style:{marginLeft:"8px"},children:"Desactivada"})]}),h.jsxs("p",{style:{margin:0,color:"#666",fontSize:"14px"},children:[N.membersCount," miembros",(t==null?void 0:t.communities[N.id])==="admin"&&h.jsx("span",{className:"badge badge-admin",children:"Admin"})]})]},N.id))})]}),f&&h.jsx(X2,{onClose:()=>m(!1),onCreated:x}),y&&h.jsx(Y2,{onClose:()=>I(!1),onJoined:x}),D&&h.jsx(Vs,{message:D.message,type:D.type,onClose:()=>S(null)})]})},X2=({onClose:t,onCreated:e})=>{const{currentUser:n,userData:r,refreshUserData:i}=$t(),[s,o]=O.useState(""),[l,u]=O.useState(""),[c,f]=O.useState(""),[m,y]=O.useState(!1),I=async A=>{if(A.preventDefault(),!s||!l){f("Completa todos los campos");return}if(!(!n||!r)){f(""),y(!0);try{const P=btoa(l),D=await kT(Fe(Q,"communities"),{name:s,passwordHash:P,createdBy:n.uid,createdAt:new Date,isActive:!0,membersCount:1}),S=ie(Q,"users",n.uid);await bt(S,{[`communities.${D.id}`]:"admin"}),await i(),e(),t()}catch(P){f("Error creando comunidad: "+(P.message||"Error desconocido"))}finally{y(!1)}}};return h.jsx("div",{className:"modal-overlay",onClick:t,children:h.jsxs("div",{className:"modal",onClick:A=>A.stopPropagation(),children:[h.jsx("h2",{children:"Crear Nueva Comunidad"}),h.jsxs("form",{onSubmit:I,children:[h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Nombre de la Comunidad"}),h.jsx("input",{type:"text",className:"input",value:s,onChange:A=>o(A.target.value),placeholder:"Ej: Amigos del Bar",disabled:m})]}),h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Contraseña (para que otros se unan)"}),h.jsx("input",{type:"text",className:"input",value:l,onChange:A=>u(A.target.value),placeholder:"Contraseña de acceso",disabled:m})]}),c&&h.jsx("div",{className:"error",children:c}),h.jsx("button",{type:"submit",className:"button",disabled:m,children:m?"Creando...":"Crear Comunidad"}),h.jsx("button",{type:"button",className:"button button-secondary",onClick:t,disabled:m,children:"Cancelar"})]})]})})},Y2=({onClose:t,onJoined:e})=>{const{currentUser:n,userData:r,refreshUserData:i}=$t(),[s,o]=O.useState(""),[l,u]=O.useState(""),[c,f]=O.useState(""),[m,y]=O.useState(!1),I=async A=>{if(A.preventDefault(),!s||!l){f("Completa todos los campos");return}if(!(!n||!r)){f(""),y(!0);try{const P=Ye(Fe(Q,"communities"),Be("name","==",s)),D=await Xe(P);if(D.empty){f("No se encontró la comunidad"),y(!1);return}const S=D.docs[0],T=S.data();if(T.isActive===!1){f("Esta comunidad está desactivada temporalmente"),y(!1);return}if(r.communities[S.id]){f("Ya eres miembro de esta comunidad"),y(!1);return}const x=btoa(l);if(T.passwordHash!==x){f("Contraseña incorrecta"),y(!1);return}const V=ie(Q,"users",n.uid);await bt(V,{[`communities.${S.id}`]:"member"});const R=ie(Q,"communities",S.id);await bt(R,{membersCount:$b(1)}),await i(),e(),t()}catch(P){f("Error uniéndose a comunidad: "+(P.message||"Error desconocido"))}finally{y(!1)}}};return h.jsx("div",{className:"modal-overlay",onClick:t,children:h.jsxs("div",{className:"modal",onClick:A=>A.stopPropagation(),children:[h.jsx("h2",{children:"Unirse a Comunidad"}),h.jsxs("form",{onSubmit:I,children:[h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Nombre de la Comunidad"}),h.jsx("input",{type:"text",className:"input",value:s,onChange:A=>o(A.target.value),placeholder:"Nombre exacto",disabled:m})]}),h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Contraseña"}),h.jsx("input",{type:"text",className:"input",value:l,onChange:A=>u(A.target.value),placeholder:"Contraseña de acceso",disabled:m})]}),c&&h.jsx("div",{className:"error",children:c}),h.jsx("button",{type:"submit",className:"button",disabled:m,children:m?"Uniéndose...":"Unirse"}),h.jsx("button",{type:"button",className:"button button-secondary",onClick:t,disabled:m,children:"Cancelar"})]})]})})},J2=({communityId:t})=>{const{currentUser:e}=$t(),[n,r]=O.useState([]),[i,s]=O.useState(!1);O.useEffect(()=>{l()},[t,e]);const o=async()=>{try{const c=new Audio("/Porreta/bote.mpeg");c.volume=.8,await c.play()}catch(c){console.log("No se pudo reproducir el sonido:",c)}navigator.vibrate&&navigator.vibrate([300,100,300,100,300])},l=async()=>{if(!(!e||!t))try{const f=(await Sn(ie(Q,"users",e.uid))).data(),m=(f==null?void 0:f.seenResults)||{},y=Ye(Fe(Q,"rounds"),Be("communityId","==",t),Be("status","==","results_posted")),I=await Xe(y),A=[];I.forEach(N=>{A.push({id:N.id,...N.data()})});const D=Date.now()-7*24*60*60*1e3,S=new Set,T=A.filter(N=>{if(!N.resultsPublishedAt)return!1;const g=N.resultsPublishedAt.toMillis()>D;return g&&S.add(N.id),g}),x={};let V=!1;if(Object.entries(m).forEach(([N,_])=>{const g=typeof _=="number"?_:0;S.has(N)?x[N]=g:V=!0}),V){await bt(ie(Q,"users",e.uid),{seenResults:x});const N=Object.keys(m).length-Object.keys(x).length;console.log(`🧹 Limpieza automática: ${N} rondas eliminadas`)}const R=T.filter(N=>!x[N.id]);R.length>0&&(r(R),s(!0),R.some(_=>_.winnerNick==="BOTE")&&o())}catch(c){console.error("Error verificando resultados:",c)}},u=async()=>{if(e){try{const f=(await Sn(ie(Q,"users",e.uid))).data(),m=(f==null?void 0:f.seenResults)||{},y=Date.now(),I={...m};n.forEach(A=>{I[A.id]=y}),await bt(ie(Q,"users",e.uid),{seenResults:I}),console.log(`✅ ${n.length} resultado(s) marcado(s) como visto(s)`)}catch(c){console.error("Error guardando resultados vistos:",c)}s(!1),r([])}};return!i||n.length===0?null:h.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:h.jsxs("div",{style:{backgroundColor:"var(--bg-secondary)",color:"var(--text-primary)",borderRadius:"8px",padding:"24px",maxWidth:"400px",width:"90%",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.3)"},children:[h.jsx("h2",{style:{marginTop:0,marginBottom:"16px",color:"#1976d2"},children:"🎉 ¡Resultados Publicados!"}),n.map(c=>{var I,A;const f=c.winnerNick==="BOTE",m=!f&&((I=c.winnerNick)==null?void 0:I.includes(",")),y=c.winnerId===(e==null?void 0:e.uid)||m&&((A=c.winnerNick)==null?void 0:A.includes((e==null?void 0:e.uid)||""));return h.jsxs("div",{style:{padding:"16px",marginBottom:"12px",backgroundColor:f?"rgba(255, 193, 7, 0.2)":"rgba(76, 175, 80, 0.2)",borderRadius:"4px",border:f?"2px solid #ffc107":"2px solid #4caf50"},children:[h.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",color:"var(--text-primary)"},children:c.name}),h.jsx("p",{style:{margin:0,fontSize:"18px",fontWeight:"bold",color:f?"#ffc107":"#4caf50"},children:f?"💰¡¡¡¡ BOOOOTEEEE !!!!":m?h.jsxs(h.Fragment,{children:[y&&"🏆 ¡FELICIDADES, HAS GANADO!",h.jsx("br",{}),"👑 Ganadores: ",c.winnerNick]}):y?"🏆 ¡FELICIDADES, HAS GANADO!":`👑 Ganador: ${c.winnerNick}`})]},c.id)}),h.jsx("button",{onClick:u,className:"button",style:{width:"100%",marginTop:"16px"},children:"Entendido"})]})})},Z2=t=>{const e=new Date,r=t.toDate().getTime()-e.getTime();if(r<=0)return{text:"Cerrada",color:"#999",icon:"🔒"};const i=Math.floor(r/(1e3*60)),s=Math.floor(r/(1e3*60*60)),o=Math.floor(r/(1e3*60*60*24));if(i<60)return{text:`¡Última hora! (${i} min)`,color:"#d32f2f",icon:"⚠️"};if(s<24)return{text:`Quedan ${s} horas`,color:"#f57c00",icon:"⏰"};const l=s%24;return o===1?{text:`Queda 1 día ${l}h`,color:"#388e3c",icon:"⏰"}:{text:`Quedan ${o} días ${l}h`,color:"#388e3c",icon:"⏰"}},eO=()=>{const{communityId:t}=Ra(),{userData:e,isSuperAdmin:n}=$t(),r=xn(),[i,s]=O.useState(null),[o,l]=O.useState([]),[u,c]=O.useState({}),[f,m]=O.useState({}),[y,I]=O.useState(!0),[A,P]=O.useState(!1),[D,S]=O.useState(""),[T,x]=O.useState(!1),[V,R]=O.useState("active"),[N,_]=O.useState(null),[g,w]=O.useState([]),[E,k]=O.useState(null),[b,C]=O.useState(!0),[le,we]=O.useState(!1),Tt=O.useRef(null),Ve=O.useRef(null),z=(e==null?void 0:e.communities[t||""])==="admin";O.useEffect(()=>{q()},[t]),O.useEffect(()=>{const K=()=>{q()};return window.addEventListener("focus",K),()=>window.removeEventListener("focus",K)},[t]);const q=async()=>{if(t){console.log("🔄 Cargando datos para comunidad:",t);try{const K=await Sn(ie(Q,"communities",t));if(K.exists()){const ke={id:K.id,...K.data()};if(ke.isActive===!1&&!n){_({message:"Esta comunidad está desactivada temporalmente",type:"warning"}),r("/communities",{replace:!0});return}s(ke),S(ke.description||"")}const At=Ye(Fe(Q,"rounds"),Be("communityId","==",t),ys("createdAt","desc")),Un=await Xe(At);console.log("📊 Rondas encontradas:",Un.size);let Ke=[];Un.forEach(ke=>{Ke.push({id:ke.id,...ke.data()})}),z||(Ke=Ke.filter(ke=>ke.isVisible!==!1)),Ke.sort((ke,Wt)=>ke.deadline.toMillis()-Wt.deadline.toMillis()),l(Ke);const Vt={},en={};for(const ke of Ke){const Wt=Ye(Fe(Q,"bets"),Be("roundId","==",ke.id)),Cn=await Xe(Wt);if(Vt[ke.id]=Cn.size,e!=null&&e.uid){const Ue=Ye(Fe(Q,"bets"),Be("roundId","==",ke.id),Be("userId","==",e.uid)),tn=await Xe(Ue);en[ke.id]=!tn.empty}}c(Vt),m(en)}catch(K){console.error("Error cargando datos:",K)}finally{I(!1)}}},Y=O.useCallback(async(K=!1)=>{if(!(!t||K&&!b||le)){we(!0);try{let Un=Ye(Fe(Q,"rounds"),Be("communityId","==",t),Be("status","==","results_posted"),ys("resultsPublishedAt","desc"),ef(10));K&&E&&(Un=Ye(Fe(Q,"rounds"),Be("communityId","==",t),Be("status","==","results_posted"),ys("resultsPublishedAt","desc"),Vb(E),ef(10)));const Ke=await Xe(Un);if(Ke.empty){C(!1),we(!1);return}const Vt=[];Ke.forEach(Ue=>{const tn={id:Ue.id,...Ue.data()};tn.resultsPublishedAt?(Date.now()-tn.resultsPublishedAt.toMillis())/864e5>=7&&Vt.push(tn):Vt.push(tn)});const en=z?Vt:Vt.filter(Ue=>Ue.isVisible!==!1);w(K?Ue=>[...Ue,...en]:en);const ke=Ke.docs[Ke.docs.length-1];k(ke),C(Ke.size===10);const Wt={...u},Cn={...f};for(const Ue of en)if(Wt[Ue.id]===void 0){const tn=Ye(Fe(Q,"bets"),Be("roundId","==",Ue.id)),Jr=await Xe(tn);Wt[Ue.id]=Jr.size;const Li=Jr.docs.some(Zr=>Zr.data().userId===(e==null?void 0:e.uid));Cn[Ue.id]=Li}c(Wt),m(Cn)}catch(At){console.error("Error cargando rondas finalizadas:",At)}finally{we(!1)}}},[t,E,b,le,z,e==null?void 0:e.uid,u,f]);O.useEffect(()=>{V==="finished"&&g.length===0&&!y&&Y(!1)},[V,y]),O.useEffect(()=>{if(!(V!=="finished"||!b))return Tt.current=new IntersectionObserver(K=>{K[0].isIntersecting&&!le&&Y(!0)},{threshold:.1}),Ve.current&&Tt.current.observe(Ve.current),()=>{Tt.current&&Tt.current.disconnect()}},[V,b,le,Y]);const fe=async()=>{if(!(!t||!z)){x(!0);try{await bt(ie(Q,"communities",t),{description:D}),i&&s({...i,description:D}),P(!1)}catch(K){console.error("Error al guardar descripción:",K),_({message:"Error al guardar la descripción",type:"error"})}finally{x(!1)}}},ce=K=>K.status==="results_posted"?h.jsx("span",{className:"badge badge-results",children:"Finalizada"}):K.status==="closed"?h.jsx("span",{className:"badge badge-closed",children:"Cerrada"}):new Date(K.deadline.toDate())<new Date?h.jsx("span",{className:"badge badge-closed",children:"Expirada"}):h.jsx("span",{className:"badge badge-open",children:"Abierta"}),Se=K=>f[K]?h.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",backgroundColor:"#4caf50",color:"white",fontWeight:"500"},children:"✅ Ya apostaste"}):h.jsx("span",{style:{fontSize:"11px",padding:"4px 8px",borderRadius:"12px",backgroundColor:"#ff9800",color:"white",fontWeight:"500"},children:"⚠️ Pendiente"}),It=V==="active"?o.filter(K=>K.status==="open"||K.status==="closed"?!0:K.status==="results_posted"&&K.resultsPublishedAt?(Date.now()-K.resultsPublishedAt.toMillis())/864e5<7:!1):g,St=o.filter(K=>K.status==="open"||K.status==="closed"?!0:K.status==="results_posted"&&K.resultsPublishedAt?(Date.now()-K.resultsPublishedAt.toMillis())/864e5<7:!1).length,xt=b?`${g.length}+`:g.length.toString();return y?h.jsx("div",{className:"loading",children:"Cargando..."}):i?h.jsxs("div",{children:[t&&h.jsx(J2,{communityId:t}),h.jsxs("div",{className:"header",children:[h.jsx("div",{children:h.jsx("h1",{children:i.name})}),h.jsx("button",{onClick:()=>r(-1),children:"Volver"})]}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"card",children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[h.jsx("h3",{style:{margin:0,fontSize:"16px",color:"#666"},children:"Información"}),z&&!A&&h.jsx("button",{className:"button button-secondary",onClick:()=>P(!0),style:{width:"auto",padding:"6px 12px",fontSize:"14px",marginTop:0},children:"Editar"})]}),A?h.jsxs("div",{children:[h.jsx("textarea",{className:"input",value:D,onChange:K=>S(K.target.value),placeholder:"Añade información para los miembros de la comunidad...",rows:4,style:{resize:"vertical",minHeight:"80px"}}),h.jsxs("div",{style:{display:"flex",gap:"8px"},children:[h.jsx("button",{className:"button",onClick:fe,disabled:T,style:{flex:1},children:T?"Guardando...":"Guardar"}),h.jsx("button",{className:"button button-secondary",onClick:()=>{S((i==null?void 0:i.description)||""),P(!1)},disabled:T,style:{flex:1},children:"Cancelar"})]})]}):h.jsx("p",{style:{margin:0,whiteSpace:"pre-wrap",fontSize:"14px",lineHeight:"1.5"},children:D||(z?'Haz clic en "Editar" para añadir información...':"Sin información")})]}),z&&h.jsx("div",{className:"card",children:h.jsx("button",{className:"button",onClick:()=>r(`/community/${t}/create-round`),children:"Crear Nueva Ronda"})}),h.jsx("div",{className:"card",style:{padding:"0",overflow:"hidden"},children:h.jsxs("div",{style:{display:"flex",borderBottom:"1px solid var(--border-color)"},children:[h.jsxs("button",{onClick:()=>R("active"),style:{flex:1,padding:"16px",border:"none",backgroundColor:V==="active"?"#1976d2":"transparent",color:V==="active"?"white":"var(--text-primary)",fontWeight:V==="active"?"bold":"normal",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease",borderBottom:V==="active"?"3px solid #1976d2":"3px solid transparent"},children:["📋 Activas (",St,")"]}),h.jsxs("button",{onClick:()=>R("finished"),style:{flex:1,padding:"16px",border:"none",backgroundColor:V==="finished"?"#1976d2":"transparent",color:V==="finished"?"white":"var(--text-primary)",fontWeight:V==="finished"?"bold":"normal",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease",borderBottom:V==="finished"?"3px solid #1976d2":"3px solid transparent"},children:["✅ Finalizadas (",xt,")"]})]})}),It.length===0?h.jsxs("div",{className:"empty-state",children:[h.jsx("p",{children:V==="active"?"No hay rondas activas":"No hay rondas finalizadas"}),V==="active"&&z&&h.jsx("p",{children:"Crea la primera ronda de apuestas"})]}):h.jsxs("div",{className:"card",children:[h.jsx("h2",{style:{marginTop:0},children:V==="active"?"Rondas Activas":"Rondas Finalizadas"}),It.map(K=>h.jsx("div",{className:"list-item",onClick:()=>r(`/community/${t}/round/${K.id}`),style:{borderLeft:K.isVisible===!1?"4px solid #FF9800":"none",opacity:K.isVisible===!1?.7:1},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{style:{flex:1},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",flexWrap:"wrap"},children:[h.jsx("h3",{style:{margin:0,fontSize:"18px"},children:K.name}),z&&K.isVisible===!1&&h.jsx("span",{style:{fontSize:"12px",padding:"2px 8px",borderRadius:"12px",backgroundColor:"#FF9800",color:"white",fontWeight:"normal"},children:"🔒 Oculta"})]}),h.jsx("p",{style:{margin:0,color:"#666",fontSize:"14px"},children:(()=>{const At=Z2(K.deadline);return h.jsxs("span",{style:{color:At.color,fontWeight:"500"},children:[At.icon," ",At.text]})})()}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"4px",flexWrap:"wrap"},children:[h.jsxs("p",{style:{margin:0,color:"#007bff",fontSize:"13px",fontWeight:"500"},children:[u[K.id]||0," ",(u[K.id]||0)===1?"apuesta":"apuestas"]}),Se(K.id)]})]}),ce(K)]})},K.id)),V==="finished"&&b&&h.jsx("div",{ref:Ve,style:{padding:"20px",textAlign:"center",color:"var(--text-secondary)"},children:le&&"⏳ Cargando más rondas..."}),V==="finished"&&!b&&g.length>0&&h.jsx("div",{style:{padding:"20px",textAlign:"center",color:"var(--text-secondary)",fontSize:"14px"},children:"✓ No hay más rondas finalizadas"})]})]}),N&&h.jsx(Vs,{message:N.message,type:N.type,onClose:()=>_(null)})]}):h.jsx("div",{className:"loading",children:"Comunidad no encontrada"})},tO=()=>{const{communityId:t}=Ra(),{currentUser:e}=$t(),n=xn(),[r,i]=O.useState(""),[s,o]=O.useState(""),[l,u]=O.useState(!0),[c,f]=O.useState([{homeTeam:"",awayTeam:"",type:"exact"}]),[m,y]=O.useState(""),[I,A]=O.useState(!1),P=(x,V,R)=>{const N=[...c];V==="type"?N[x].type=R:N[x][V]=R,f(N)},D=()=>{f([...c,{homeTeam:"",awayTeam:"",type:"exact"}])},S=x=>{if(c.length===1){y("La ronda debe tener al menos un partido");return}f(c.filter((V,R)=>R!==x))},T=async x=>{if(x.preventDefault(),!r.trim()){y("Debes poner un nombre a la ronda");return}if(!s){y("Debes establecer una hora límite");return}const V=new Date(s);if(V<=new Date){y("La hora límite debe ser en el futuro");return}if(c.length===0){y("Añade al menos un partido");return}for(const R of c)if(!R.homeTeam.trim()||!R.awayTeam.trim()){y("Completa todos los equipos");return}if(!(!e||!t)){y(""),A(!0);try{const R=await kT(Fe(Q,"rounds"),{communityId:t,createdBy:e.uid,createdAt:new Date,name:r.trim(),deadline:V,matches:c.map(N=>({...N,homeTeam:N.homeTeam.trim(),awayTeam:N.awayTeam.trim()})),status:"open",isVisible:l});console.log("✅ Ronda creada con ID:",R.id),console.log("📍 CommunityId:",t),n(`/community/${t}`,{replace:!0})}catch(R){y("Error creando ronda: "+(R.message||"Error desconocido"))}finally{A(!1)}}};return h.jsxs("div",{children:[h.jsxs("div",{className:"header",children:[h.jsx("h1",{children:"Crear Ronda"}),h.jsx("button",{onClick:()=>n(-1),children:"Volver"})]}),h.jsx("div",{className:"container",children:h.jsxs("form",{onSubmit:T,children:[h.jsxs("div",{className:"card",children:[h.jsx("h2",{style:{marginTop:0},children:"Información de la Ronda"}),h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Nombre de la Ronda"}),h.jsx("input",{type:"text",className:"input",placeholder:"Ej: Jornada 10, Ronda Navidad, etc.",value:r,onChange:x=>i(x.target.value),disabled:I})]}),h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Hora Límite"}),h.jsx("input",{type:"datetime-local",className:"input",value:s,onChange:x=>o(x.target.value),disabled:I})]}),h.jsxs("div",{style:{marginTop:"16px"},children:[h.jsxs("label",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:[h.jsx("input",{type:"checkbox",checked:l,onChange:x=>u(x.target.checked),disabled:I,style:{marginRight:"8px",width:"18px",height:"18px"}}),h.jsx("span",{style:{fontSize:"14px"},children:l?"👁️ Ronda visible para todos los usuarios":"🔒 Ronda oculta (solo admins)"})]}),h.jsx("p",{style:{margin:"8px 0 0 26px",fontSize:"13px",color:"#666"},children:l?"Los usuarios podrán ver y apostar en esta ronda inmediatamente.":"La ronda estará oculta para los usuarios. Solo tú (admin) podrás verla y hacerla visible más tarde."})]})]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px",flexWrap:"nowrap"},children:[h.jsxs("h2",{style:{marginTop:0,marginBottom:0,whiteSpace:"nowrap"},children:["Partidos (",c.length,")"]}),h.jsx("button",{type:"button",className:"button button-secondary",onClick:D,disabled:I,style:{width:"auto",padding:"8px 12px",fontSize:"14px",whiteSpace:"nowrap"},children:"Añadir Partido"})]}),h.jsx("p",{style:{fontSize:"14px",color:"#666",marginTop:"8px"},children:"Puedes crear jornadas con cualquier número de partidos y elegir el tipo de apuesta de cada uno."}),c.map((x,V)=>h.jsxs("div",{style:{marginBottom:"18px",paddingBottom:"18px",borderBottom:V<c.length-1?"1px solid var(--border-color)":"none"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"12px",marginBottom:"8px"},children:[h.jsxs("h3",{style:{fontSize:"16px",margin:0},children:["Partido ",V+1]}),h.jsx("button",{type:"button",className:"button button-secondary",onClick:()=>S(V),disabled:I||c.length===1,style:{width:"auto",padding:"8px 12px"},children:"Quitar"})]}),h.jsx("label",{className:"label",children:"Tipo de apuesta"}),h.jsxs("select",{className:"input",value:x.type,onChange:R=>P(V,"type",R.target.value),disabled:I,children:[h.jsx("option",{value:"exact",children:"Resultado Exacto"}),h.jsx("option",{value:"1X2",children:"1 X 2"})]}),h.jsx("input",{type:"text",className:"input",placeholder:"Equipo Local",value:x.homeTeam,onChange:R=>P(V,"homeTeam",R.target.value),disabled:I}),h.jsx("input",{type:"text",className:"input",placeholder:"Equipo Visitante",value:x.awayTeam,onChange:R=>P(V,"awayTeam",R.target.value),disabled:I})]},V)),m&&h.jsx("div",{className:"error",children:m}),h.jsx("button",{type:"submit",className:"button",disabled:I,children:I?"Creando...":"Crear Ronda"})]})]})})]})},nO=()=>{const{communityId:t,roundId:e}=Ra(),{currentUser:n,userData:r}=$t(),i=xn(),s=Ju(),[o,l]=O.useState(null),[u,c]=O.useState([]),[f,m]=O.useState(!0),[y,I]=O.useState(null),A=(r==null?void 0:r.communities[t||""])==="admin";O.useEffect(()=>{P()},[e,s.state]),O.useEffect(()=>{const R=()=>{P()};return window.addEventListener("focus",R),()=>window.removeEventListener("focus",R)},[e]);const P=async()=>{if(e)try{const R=await Sn(ie(Q,"rounds",e));if(R.exists()){const w={id:R.id,...R.data()};l(w)}else console.error("❌ Ronda no encontrada");const N=Ye(Fe(Q,"bets"),Be("roundId","==",e)),_=await Xe(N),g=[];_.forEach(w=>{const E=w.data();g.push({id:w.id,...E})}),c(g)}catch(R){console.error("❌ Error cargando datos:",R)}finally{m(!1)}},D=u.find(R=>R.userId===(n==null?void 0:n.uid)),S=o&&new Date(o.deadline.toDate())>new Date,T=R=>{if(!(o!=null&&o.liveResults)||o.liveResults.length===0)return{isAlive:!0,points:0};let N=0,_=!1;return o.liveResults.forEach((g,w)=>{if(g.status==="pending")return;const E=R.predictions[w];g.type==="exact"?g.homeGoals!==void 0&&g.awayGoals!==void 0&&(g.status==="final"?E.homeGoals===g.homeGoals&&E.awayGoals===g.awayGoals?N++:_=!0:g.status==="live"&&(E.homeGoals===g.homeGoals&&E.awayGoals===g.awayGoals?N++:(E.homeGoals!==void 0&&g.homeGoals>E.homeGoals||E.awayGoals!==void 0&&g.awayGoals>E.awayGoals)&&(_=!0))):g.type==="1X2"&&g.status==="final"&&g.result&&(E.pick===g.result?N++:_=!0)}),{isAlive:!_,points:N}},x=[...u].sort((R,N)=>{const _=T(R),g=T(N);return _.isAlive&&!g.isAlive?-1:!_.isAlive&&g.isAlive?1:g.points-_.points}),V=R=>R.type==="exact"?`${R.homeGoals} - ${R.awayGoals}`:R.pick==="1"?"Local":R.pick==="X"?"Empate":"Visitante";return f?h.jsx("div",{className:"loading",children:"Cargando..."}):o?h.jsxs("div",{children:[h.jsxs("div",{className:"header",children:[h.jsx("h1",{children:"Detalle Ronda"}),h.jsxs("div",{style:{display:"flex",gap:"8px"},children:[h.jsx("button",{onClick:()=>P(),children:"🔄 Recargar"}),h.jsx("button",{onClick:()=>i(-1),children:"Volver"})]})]}),h.jsxs("div",{className:"container",children:[A&&h.jsxs("div",{className:"card",style:{borderLeft:"4px solid #FF9800",opacity:.95},children:[h.jsx("h3",{style:{marginTop:0,color:"#FF9800"},children:"🔧 Opciones de Administrador"}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[h.jsx("label",{style:{fontSize:"14px",fontWeight:"500"},children:"Visibilidad de la ronda:"}),h.jsxs("label",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:[h.jsx("input",{type:"checkbox",checked:o.isVisible!==!1,onChange:async R=>{const N=R.target.checked;try{await bt(ie(Q,"rounds",o.id),{isVisible:N}),l({...o,isVisible:N}),I({message:N?"Ronda visible para todos los usuarios":"Ronda oculta (solo visible para admins)",type:"success"})}catch(_){console.error("Error cambiando visibilidad:",_),I({message:"Error al cambiar la visibilidad",type:"error"})}},style:{marginRight:"8px",width:"18px",height:"18px"}}),h.jsx("span",{style:{fontSize:"14px"},children:o.isVisible!==!1?"👁️ Visible para todos":"🔒 Oculta (solo admins)"})]})]})]}),h.jsxs("div",{className:"card",children:[h.jsx("h2",{style:{marginTop:0},children:o.name}),o.matches.map((R,N)=>h.jsxs("div",{style:{marginBottom:"12px",paddingBottom:"12px",borderBottom:N<o.matches.length-1?"1px solid #eee":"none"},children:[h.jsxs("p",{style:{margin:"0 0 4px 0",fontWeight:"500"},children:[R.homeTeam," vs ",R.awayTeam]}),h.jsxs("p",{style:{margin:0,fontSize:"14px",color:"#666"},children:["Tipo: ",R.type==="exact"?"Resultado Exacto":"1 X 2"]})]},N)),h.jsx("p",{style:{marginTop:"16px",marginBottom:"4px",fontWeight:"500"},children:"Hora límite:"}),h.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666"},children:new Date(o.deadline.toDate()).toLocaleString()})]}),S&&h.jsx("div",{className:"card",children:h.jsx("button",{className:"button",onClick:()=>i(`/community/${t}/round/${e}/bet`),children:D?"Modificar Mi Apuesta":"Hacer Mi Apuesta"})}),A&&!S&&o.status!=="results_posted"&&h.jsx("div",{className:"card",children:h.jsx("button",{className:"button",onClick:()=>i(`/community/${t}/round/${e}/results`),children:"📊 Actualizar Resultados"})}),o.liveResults&&o.liveResults.some(R=>R.status!=="pending")&&h.jsxs("div",{className:"card",style:{borderLeft:"4px solid #FF9800",opacity:.95},children:[h.jsx("h3",{style:{marginTop:0,color:"#FF9800"},children:"🔴 Resultados En Vivo"}),h.jsxs("p",{style:{fontSize:"14px",color:"var(--text-secondary)",marginBottom:"15px"},children:["El admin está actualizando resultados. Las apuestas en ",h.jsx("strong",{style:{color:"#4CAF50"},children:"verde"})," siguen vivas, las de ",h.jsx("strong",{style:{color:"#f44336"},children:"rojo"})," ya no pueden ganar."]}),o.liveResults.map((R,N)=>R.status!=="pending"&&h.jsxs("p",{style:{margin:"8px 0",fontSize:"14px"},children:[h.jsxs("strong",{children:[o.matches[N].homeTeam," vs ",o.matches[N].awayTeam,":"]})," ",R.type==="exact"?`${R.homeGoals} - ${R.awayGoals}`:R.result==="1"?"Local":R.result==="X"?"Empate":"Visitante",R.status==="final"?" ✅":" 🔴"]},N))]}),h.jsxs("div",{className:"card",children:[h.jsxs("h2",{style:{marginTop:0},children:["Apuestas (",u.length,")"]}),u.length===0?h.jsx("div",{className:"empty-state",children:"No hay apuestas todavía"}):x.map(R=>{const N=T(R),_=o.liveResults&&o.liveResults.some(g=>g.status!=="pending");return h.jsxs("div",{style:{border:"1px solid var(--border-color)",padding:"12px",marginBottom:"12px",backgroundColor:R.userId===(n==null?void 0:n.uid)?"rgba(33, 150, 243, 0.1)":_?N.isAlive?"rgba(76, 175, 80, 0.1)":"rgba(244, 67, 54, 0.1)":"var(--bg-secondary)",borderRadius:"4px",borderLeft:_?`4px solid ${N.isAlive?"#4CAF50":"#f44336"}`:R.userId===(n==null?void 0:n.uid)?"4px solid #2196F3":"none"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("p",{style:{margin:"0 0 8px 0",fontWeight:"500"},children:[R.userNick,R.userId===(n==null?void 0:n.uid)&&" (Tú)"]}),_&&h.jsx("span",{style:{fontSize:"12px",fontWeight:"bold",padding:"4px 8px",borderRadius:"12px",backgroundColor:N.isAlive?"#4CAF50":"#f44336",color:"white"},children:N.isAlive?`🟢 Vivo (${N.points} ${N.points===1?"acierto":"aciertos"})`:"🔴 Eliminado"})]}),R.predictions.map((g,w)=>h.jsxs("p",{style:{margin:"4px 0",fontSize:"14px"},children:[o.matches[w].homeTeam," vs ",o.matches[w].awayTeam,":"," ",h.jsx("strong",{children:V(g)})]},w))]},R.id)})]}),o.status==="results_posted"&&o.results&&h.jsxs("div",{className:"card",children:[h.jsx("h2",{style:{marginTop:0},children:"Resultados Reales"}),o.results.map((R,N)=>h.jsxs("p",{style:{margin:"8px 0"},children:[o.matches[N].homeTeam," vs ",o.matches[N].awayTeam,":"," ",h.jsx("strong",{children:R.type==="exact"?`${R.homeGoals} - ${R.awayGoals}`:R.result==="1"?"Local":R.result==="X"?"Empate":"Visitante"})]},N))]})]}),y&&h.jsx(Vs,{message:y.message,type:y.type,onClose:()=>I(null)})]}):h.jsx("div",{className:"loading",children:"Ronda no encontrada"})},rO=()=>{const{communityId:t,roundId:e}=Ra(),{currentUser:n,userData:r}=$t(),i=xn(),[s,o]=O.useState(null),[l,u]=O.useState(null),[c,f]=O.useState([{type:"exact",homeGoals:void 0,awayGoals:void 0},{type:"exact",homeGoals:void 0,awayGoals:void 0},{type:"1X2",pick:"1"}]),[m,y]=O.useState(""),[I,A]=O.useState(!0),[P,D]=O.useState(!1),[S,T]=O.useState(!1),x=(g,w=[])=>g.matches.map((E,k)=>{const b=w[k];return(b==null?void 0:b.type)===E.type?b:E.type==="exact"?{type:"exact",homeGoals:void 0,awayGoals:void 0}:{type:"1X2",pick:"1"}});O.useEffect(()=>{V()},[e]);const V=async()=>{if(!(!e||!n))try{const g=await Sn(ie(Q,"rounds",e));if(g.exists()){const w={id:g.id,...g.data()};o(w);const E=Ye(Fe(Q,"bets"),Be("roundId","==",e),Be("userId","==",n.uid)),k=await Xe(E);if(k.empty)f(x(w));else{const b={id:k.docs[0].id,...k.docs[0].data()};u(b),f(x(w,b.predictions))}}}catch(g){console.error("Error cargando datos:",g)}finally{A(!1)}},R=(g,w,E)=>{const k=[...c];k[g][w]=E,f(k)},N=async()=>{if(!e)return!1;try{const g=Ye(Fe(Q,"bets"),Be("roundId","==",e)),w=await Xe(g);for(const E of w.docs){if(E.id===(l==null?void 0:l.id))continue;const k=E.data();if(k.predictions.length!==c.length)continue;if(k.predictions.every((C,le)=>{const we=c[le];return!we||C.type!==we.type?!1:C.type==="exact"?C.homeGoals===we.homeGoals&&C.awayGoals===we.awayGoals:C.pick===we.pick}))return!0}}catch(g){console.error("Error verificando duplicados:",g)}return!1},_=async(g,w=!1)=>{if(g.preventDefault(),!P&&!(!s||!n||!r||!t||!e)){for(let E=0;E<c.length;E++){const k=c[E];if(k.type==="exact"&&(k.homeGoals===void 0||k.awayGoals===void 0)){y(`Por favor, completa el resultado del partido ${E+1}`);return}}if(new Date(s.deadline.toDate())<=new Date){y("El plazo para apostar ha expirado");return}if(y(""),D(!0),!w&&await N()){D(!1),T(!0);return}try{const E={roundId:e,communityId:t,userId:n.uid,userNick:r.nick,predictions:c,duplicateWarningShown:w,updatedAt:new Date},k=(l==null?void 0:l.id)??`${e}_${n.uid}`;await Ic(ie(Q,"bets",k),{...E,...l?{}:{createdAt:new Date}},{merge:!0}),console.log("✅ Apuesta guardada para roundId:",e),i(`/community/${t}/round/${e}`,{replace:!0,state:{refresh:!0,timestamp:Date.now()}})}catch(E){y("Error guardando apuesta: "+(E.message||"Error desconocido"))}finally{D(!1)}}};return I?h.jsx("div",{className:"loading",children:"Cargando..."}):s?h.jsxs("div",{children:[h.jsxs("div",{className:"header",children:[h.jsx("h1",{children:l?"Modificar Apuesta":"Hacer Apuesta"}),h.jsx("button",{onClick:()=>i(-1),children:"Volver"})]}),h.jsx("div",{className:"container",children:h.jsx("form",{onSubmit:g=>_(g,!1),children:h.jsxs("div",{className:"card",children:[h.jsx("h2",{style:{marginTop:0},children:"Tus Pronósticos"}),s.matches.map((g,w)=>h.jsxs("div",{style:{marginBottom:"20px"},children:[h.jsxs("h3",{style:{fontSize:"16px",marginBottom:"8px"},children:[g.homeTeam," vs ",g.awayTeam]}),h.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"8px"},children:g.type==="exact"?"Resultado Exacto":"1/X/2"}),g.type==="exact"?h.jsxs("div",{className:"match-input-group",children:[h.jsx("input",{type:"number",min:"0",className:"input",value:c[w].homeGoals===void 0?"":c[w].homeGoals,onChange:E=>R(w,"homeGoals",E.target.value===""?void 0:parseInt(E.target.value)),disabled:P,placeholder:"0"}),h.jsx("span",{children:"-"}),h.jsx("input",{type:"number",min:"0",className:"input",value:c[w].awayGoals===void 0?"":c[w].awayGoals,onChange:E=>R(w,"awayGoals",E.target.value===""?void 0:parseInt(E.target.value)),disabled:P,placeholder:"0"})]}):h.jsxs("select",{className:"input",value:c[w].pick||"1",onChange:E=>R(w,"pick",E.target.value),disabled:P,children:[h.jsxs("option",{value:"1",children:["1 - Local (",g.homeTeam,")"]}),h.jsx("option",{value:"X",children:"X - Empate"}),h.jsxs("option",{value:"2",children:["2 - Visitante (",g.awayTeam,")"]})]})]},w)),m&&h.jsx("div",{className:"error",children:m}),h.jsx("button",{type:"submit",className:"button",disabled:P,children:P?"Guardando...":l?"Actualizar Apuesta":"Enviar Apuesta"})]})})}),S&&h.jsx("div",{className:"modal-overlay",children:h.jsxs("div",{className:"modal",children:[h.jsx("h2",{children:"Apuesta Duplicada"}),h.jsx("p",{children:"Ya existe una apuesta idéntica a la tuya. ¿Quieres enviarla de todas formas?"}),h.jsx("button",{className:"button",onClick:g=>{T(!1),_(g,!0)},children:"Sí, Enviar de Todas Formas"}),h.jsx("button",{className:"button button-secondary",onClick:()=>T(!1),children:"Cancelar"})]})})]}):h.jsx("div",{className:"loading",children:"Ronda no encontrada"})},iO=()=>{const{communityId:t,roundId:e}=Ra(),n=xn(),{userData:r,isSuperAdmin:i}=$t(),[s,o]=O.useState(null),[l,u]=O.useState([]),[c,f]=O.useState(!0),[m,y]=O.useState(!1),[I,A]=O.useState(null);O.useEffect(()=>{P()},[e]);const P=async()=>{if(e)try{const R=await Sn(ie(Q,"rounds",e));if(R.exists()){const N={id:R.id,...R.data()};if(o(N),N.liveResults&&N.liveResults.length>0)u(N.liveResults);else{const _=N.matches.map((g,w)=>({matchIndex:w,status:"pending",type:g.type,homeGoals:void 0,awayGoals:void 0,result:void 0}));u(_)}}}catch(R){console.error("Error al cargar la ronda:",R),A({message:"Error al cargar la ronda",type:"error"})}finally{f(!1)}},D=(R,N,_)=>{const g=[...l];N==="status"?g[R].status=_:N==="homeGoals"?g[R].homeGoals=_===""?void 0:parseInt(_):N==="awayGoals"?g[R].awayGoals=_===""?void 0:parseInt(_):N==="result"&&(g[R].result=_),u(g)},S=async()=>{if(!(!e||!s)){for(let R=0;R<l.length;R++){const N=l[R];if(N.status!=="pending"){if(N.type==="exact"){if(N.homeGoals===void 0||N.awayGoals===void 0){A({message:`El partido ${R+1} está marcado como "${N.status}" pero no tiene goles definidos`,type:"warning"});return}}else if(N.type==="1X2"&&!N.result){A({message:`El partido ${R+1} está marcado como "${N.status}" pero no tiene resultado 1X2 definido`,type:"warning"});return}}}try{if(y(!0),x())await T();else{const R=l.map(_=>({matchIndex:_.matchIndex,status:_.status,type:_.type,..._.type==="exact"&&{homeGoals:_.homeGoals??0,awayGoals:_.awayGoals??0},..._.type==="1X2"&&{result:_.result??"1"}})),N=ie(Q,"rounds",e);await bt(N,{liveResults:R}),A({message:"Resultados actualizados correctamente",type:"success"}),setTimeout(()=>n(`/community/${t}/round/${e}`),1500)}}catch(R){console.error("Error guardando resultados:",R),A({message:"Error al guardar los resultados",type:"error"})}finally{y(!1)}}},T=async()=>{if(!(!s||!e||!t))try{const R=l.map(C=>{const le={type:C.type};return C.type==="exact"?(le.homeGoals=C.homeGoals??0,le.awayGoals=C.awayGoals??0):C.type==="1X2"&&(le.result=C.result??"1"),le}),N=Ye(Fe(Q,"bets"),Be("roundId","==",e)),_=await Xe(N),g=[];_.forEach(C=>{g.push({id:C.id,...C.data()})});let w=null,E=null,k=[];g.forEach(C=>{let le=0;C.predictions.forEach((we,Tt)=>{const Ve=R[Tt];we.type==="exact"&&Ve.type==="exact"?we.homeGoals===Ve.homeGoals&&we.awayGoals===Ve.awayGoals&&(le+=1):we.type==="1X2"&&Ve.type==="1X2"&&we.pick===Ve.result&&(le+=1)}),console.log("📊 Apuesta evaluada:",{userNick:C.userNick,correctPredictions:le,totalMatches:C.predictions.length}),le===C.predictions.length&&k.push(C)}),console.log("🏆 Resultado final:",{winnersCount:k.length}),k.length===1?(w=k[0].userId,E=k[0].userNick):k.length>1?(w=null,E=k.map(C=>C.userNick).join(", ")):(w=null,E="BOTE"),console.log("🏆 Ganador calculado:",{winnerId:w,winnerNick:E});const b={results:R,status:"results_posted",winnerId:w,winnerNick:E,resultsPublishedAt:be.now()};b.liveResults=[],await bt(ie(Q,"rounds",e),b),A({message:"🏆 ¡Resultados oficiales publicados!",type:"success"}),setTimeout(()=>n(`/community/${t}/round/${e}`,{replace:!0}),1500)}catch(R){throw console.error("Error publicando resultados:",R),R}},x=()=>l.every(R=>R.status==="final");return c?h.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"Cargando..."}):s?!((r==null?void 0:r.communities[t||""])==="admin")&&!i?h.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"No tienes permisos de administrador"}):h.jsxs("div",{children:[h.jsxs("div",{className:"header",children:[h.jsx("h1",{children:"Actualizar Resultados"}),h.jsx("button",{onClick:()=>n(-1),children:"← Volver"})]}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"card",children:[h.jsx("h2",{style:{marginTop:0},children:s.name}),h.jsx("p",{style:{color:"#666",fontSize:"14px",marginBottom:0},children:'Actualiza los resultados a medida que se van conociendo. Cuando todos estén marcados como "Terminado", se publicarán automáticamente los resultados oficiales.'})]}),x()&&h.jsx("div",{style:{backgroundColor:"#4CAF50",color:"white",padding:"15px",borderRadius:"8px",marginBottom:"20px",textAlign:"center",fontWeight:"bold"},children:"✅ Todos los partidos están TERMINADOS. Al guardar, se publicarán automáticamente los resultados oficiales y se calculará el ganador."}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:s.matches.map((R,N)=>{const _=l[N];return h.jsxs("div",{className:"card",style:{border:"2px solid #ddd",borderRadius:"8px",padding:"20px",opacity:_.status==="final"?1:_.status==="live"?.95:.9},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"},children:[h.jsxs("h3",{style:{margin:0},children:["Partido ",N+1,": ",R.homeTeam," vs ",R.awayTeam]}),h.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"bold",backgroundColor:R.type==="exact"?"#2196F3":"#FF9800",color:"white"},children:R.type==="exact"?"Resultado Exacto":"1X2"})]}),h.jsxs("div",{style:{marginBottom:"15px"},children:[h.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"bold"},children:"Estado del partido:"}),h.jsxs("select",{value:_.status,onChange:g=>D(N,"status",g.target.value),style:{padding:"10px",fontSize:"16px",width:"100%",borderRadius:"4px",border:"1px solid var(--border-color)",backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},children:[h.jsx("option",{value:"pending",children:"⏳ Pendiente (sin resultado)"}),h.jsx("option",{value:"live",children:"🔴 En Vivo (puede cambiar)"}),h.jsx("option",{value:"final",children:"✅ Final (confirmado)"})]})]}),_.status!=="pending"&&h.jsx("div",{children:R.type==="exact"?h.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center"},children:[h.jsxs("div",{style:{flex:1},children:[h.jsxs("label",{style:{display:"block",marginBottom:"5px",fontSize:"14px"},children:["Goles ",R.homeTeam,":"]}),h.jsx("input",{type:"number",min:"0",value:_.homeGoals??"",onChange:g=>D(N,"homeGoals",g.target.value),style:{padding:"10px",fontSize:"18px",width:"100%",borderRadius:"4px",border:"1px solid var(--border-color)",backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},placeholder:"0"})]}),h.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",marginTop:"20px"},children:"-"}),h.jsxs("div",{style:{flex:1},children:[h.jsxs("label",{style:{display:"block",marginBottom:"5px",fontSize:"14px"},children:["Goles ",R.awayTeam,":"]}),h.jsx("input",{type:"number",min:"0",value:_.awayGoals??"",onChange:g=>D(N,"awayGoals",g.target.value),style:{padding:"10px",fontSize:"18px",width:"100%",borderRadius:"4px",border:"1px solid var(--border-color)",backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},placeholder:"0"})]})]}):h.jsxs("div",{children:[h.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"bold"},children:"Resultado:"}),h.jsx("div",{style:{display:"flex",gap:"10px"},children:["1","X","2"].map(g=>h.jsx("button",{onClick:()=>D(N,"result",g),style:{flex:1,padding:"15px",fontSize:"18px",fontWeight:"bold",backgroundColor:_.result===g?"#4CAF50":"var(--bg-secondary)",color:_.result===g?"white":"var(--text-primary)",border:`1px solid ${_.result===g?"#4CAF50":"var(--border-color)"}`,borderRadius:"4px",cursor:"pointer"},children:g==="1"?`Victoria ${R.homeTeam}`:g==="X"?"Empate":`Victoria ${R.awayTeam}`},g))})]})})]},N)})}),h.jsx("div",{className:"card",children:h.jsx("button",{onClick:S,disabled:m,className:"button",style:{width:"100%",backgroundColor:x()?"#FF5722":"#4CAF50",cursor:m?"not-allowed":"pointer"},children:m?"Guardando...":x()?"🏆 Guardar y Publicar Resultados Oficiales":"💾 Guardar Resultados"})})]}),I&&h.jsx(Vs,{message:I.message,type:I.type,onClose:()=>A(null)})]}):h.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"Ronda no encontrada"})},sO=({title:t="Porreta APP",message:e,confirmText:n="Confirmar",cancelText:r="Cancelar",onConfirm:i,onCancel:s})=>h.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1001,animation:"fadeIn 0.2s ease-out"},onClick:s,children:h.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),style:{maxWidth:"400px",animation:"scaleIn 0.3s ease-out"},children:[h.jsx("div",{style:{textAlign:"center",borderBottom:"3px solid #f44336",paddingBottom:"15px",marginBottom:"20px"},children:h.jsxs("h2",{style:{margin:0,color:"var(--text-primary)",fontSize:"20px",fontWeight:"bold"},children:["⚠️ ",t]})}),h.jsx("p",{style:{color:"var(--text-primary)",lineHeight:"1.6",textAlign:"center",margin:"20px 0",whiteSpace:"pre-line"},children:e}),h.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"20px"},children:[h.jsx("button",{onClick:s,className:"button button-secondary",style:{flex:1},children:r}),h.jsx("button",{onClick:i,className:"button",style:{flex:1,backgroundColor:"#f44336"},children:n})]})]})}),oO=()=>{const t=xn(),{isSuperAdmin:e}=$t(),[n,r]=O.useState([]),[i,s]=O.useState(null),[o,l]=O.useState([]),[u,c]=O.useState([]),[f,m]=O.useState(!1),[y,I]=O.useState(!0),[A,P]=O.useState(null),[D,S]=O.useState(""),[T,x]=O.useState(""),[V,R]=O.useState(null),[N,_]=O.useState(""),[g,w]=O.useState(""),[E,k]=O.useState([]),[b,C]=O.useState(!0),[le,we]=O.useState(!0),[Tt,Ve]=O.useState(!1),[z,q]=O.useState(null),[Y,fe]=O.useState(null);O.useEffect(()=>{if(!e){t("/communities");return}St(),Se(),ce()},[e,t]);const ce=async()=>{try{m(!0);const M=Ye(Fe(Q,"notificationLogs"),ys("createdAt","desc"),ef(50)),ye=(await Xe(M)).docs.map(pe=>({id:pe.id,...pe.data()}));c(ye)}catch(M){console.error("Error cargando logs de notificaciones:",M),q({message:"Error al cargar logs de notificaciones",type:"error"})}finally{m(!1)}},Se=async()=>{try{const M=await Sn(ie(Q,"config","global"));if(M.exists()){const ne=M.data();C(ne.allowUserRegistration??!0),we(ne.allowCommunityCreation??!0)}}catch(M){console.error("Error cargando configuración:",M)}},It=async(M,ne)=>{Ve(!0);try{await Ic(ie(Q,"config","global"),{[M]:ne},{merge:!0}),M==="allowUserRegistration"?C(ne):we(ne)}catch(ye){console.error("Error guardando configuración:",ye),q({message:"Error al guardar la configuración",type:"error"})}finally{Ve(!1)}},St=async()=>{try{I(!0);const M=Ye(Fe(Q,"communities"),ys("createdAt","desc")),ye=(await Xe(M)).docs.map(pe=>({id:pe.id,...pe.data()}));r(ye)}catch(M){console.error("Error al cargar comunidades:",M),q({message:"Error al cargar comunidades",type:"error"})}finally{I(!1)}},xt=async M=>{try{const ne=Ye(Fe(Q,"rounds"),ys("createdAt","desc")),qt=(await Xe(ne)).docs.map(Ee=>({id:Ee.id,...Ee.data()})).filter(Ee=>Ee.communityId===M);l(qt),s(M)}catch(ne){console.error("Error cargando rondas:",ne),q({message:"Error al cargar rondas",type:"error"})}},K=M=>{P(M),S(M.name),x(M.description||"")},At=async()=>{if(A){if(!D.trim()){q({message:"El nombre no puede estar vacío",type:"warning"});return}try{const M=ie(Q,"communities",A.id);await bt(M,{name:D.trim(),description:T.trim()}),q({message:"Comunidad actualizada correctamente",type:"success"}),P(null),St()}catch(M){console.error("Error actualizando comunidad:",M),q({message:"Error al actualizar la comunidad",type:"error"})}}},Un=async M=>{const ne=M.isActive===!1;try{await bt(ie(Q,"communities",M.id),{isActive:ne,deactivatedAt:ne?Av():be.now()}),r(ye=>ye.map(pe=>pe.id===M.id?{...pe,isActive:ne,deactivatedAt:ne?void 0:be.now()}:pe)),(A==null?void 0:A.id)===M.id&&P({...A,isActive:ne}),q({message:ne?"Comunidad activada correctamente":"Comunidad desactivada correctamente",type:"success"})}catch(ye){console.error("Error cambiando estado de comunidad:",ye),q({message:"Error al cambiar el estado de la comunidad",type:"error"})}},Ke=M=>{R(M),_(M.name);const ne=M.deadline.toDate(),pe=new Date(ne.getTime()-ne.getTimezoneOffset()*6e4).toISOString().slice(0,16);w(pe),k(M.matches)},Vt=async()=>{if(V){if(!N.trim()){q({message:"El nombre no puede estar vacío",type:"warning"});return}if(!g){q({message:"La fecha límite es obligatoria",type:"warning"});return}try{const M=ie(Q,"rounds",V.id);await bt(M,{name:N.trim(),deadline:be.fromDate(new Date(g)),matches:E}),q({message:"Ronda actualizada correctamente",type:"success"}),R(null),i&&xt(i)}catch(M){console.error("Error actualizando ronda:",M),q({message:"Error al actualizar la ronda",type:"error"})}}},en=async M=>{fe({message:`¿Estás seguro de que quieres eliminar la comunidad "${M.name}"?

ADVERTENCIA: Esto eliminará PERMANENTEMENTE:
- La comunidad
- Todas sus rondas
- Todas las apuestas de esas rondas

Esta acción NO se puede deshacer.`,onConfirm:async()=>{fe(null),await ke(M)}})},ke=async M=>{try{let ne=0,ye=0;const pe=Ye(Fe(Q,"rounds"),Be("communityId","==",M.id)),qt=await Xe(pe);console.log(`Eliminando ${qt.size} rondas...`);for(const Ze of qt.docs){const Rn=Ye(Fe(Q,"bets"),Be("roundId","==",Ze.id)),Mi=await Xe(Rn);console.log(`Ronda ${Ze.id}: ${Mi.size} apuestas`);const ji=Mi.docs;for(let nn=0;nn<ji.length;nn+=500){const Ks=kd(Q),Qs=ji.slice(nn,nn+500);Qs.forEach(Xs=>{Ks.delete(ie(Q,"bets",Xs.id))}),await Ks.commit(),ne+=Qs.length}await Cd(ie(Q,"rounds",Ze.id))}const Ee=await Xe(Fe(Q,"users")),Le=[];Ee.docs.forEach(Ze=>{const Rn=Ze.data();Rn.communities&&Rn.communities[M.id]&&Le.push(Ze.id)}),console.log(`Eliminando referencias de ${Le.length} usuarios...`);for(let Ze=0;Ze<Le.length;Ze+=500){const Rn=kd(Q);Le.slice(Ze,Ze+500).forEach(ji=>{const nn=ie(Q,"users",ji);Rn.update(nn,{[`communities.${M.id}`]:Av()})}),await Rn.commit()}ye=Le.length,await Cd(ie(Q,"communities",M.id)),q({message:`Comunidad eliminada correctamente.

Rondas eliminadas: ${qt.size}
Apuestas eliminadas: ${ne}
Usuarios actualizados: ${ye}`,type:"success"}),St(),i===M.id&&(s(null),l([]))}catch(ne){console.error("Error al eliminar comunidad:",ne),q({message:`Error al eliminar la comunidad:

`+(ne.message||ne.toString()),type:"error"})}},Wt=async M=>{fe({message:`¿Estás seguro de que quieres eliminar la ronda "${M.name}"?

ADVERTENCIA: Esto eliminará PERMANENTEMENTE:
- La ronda
- Todas las apuestas de esta ronda

Esta acción NO se puede deshacer.`,onConfirm:async()=>{fe(null),await Cn(M)}})},Cn=async M=>{try{const ne=Ye(Fe(Q,"bets"),Be("roundId","==",M.id)),ye=await Xe(ne);console.log(`Eliminando ${ye.size} apuestas de la ronda ${M.id}...`);const pe=ye.docs;for(let qt=0;qt<pe.length;qt+=500){const Ee=kd(Q);pe.slice(qt,qt+500).forEach(Ze=>{Ee.delete(ie(Q,"bets",Ze.id))}),await Ee.commit()}await Cd(ie(Q,"rounds",M.id)),q({message:`Ronda eliminada correctamente.

Apuestas eliminadas: ${ye.size}`,type:"success"}),i&&xt(i)}catch(ne){console.error("Error al eliminar ronda:",ne),q({message:`Error al eliminar la ronda:

`+(ne.message||ne.toString()),type:"error"})}},Ue=M=>M.toDate().toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),tn=M=>M?Ue(M):"Sin fecha",Jr=M=>M==="new_round_visible"?"Nueva ronda":M==="deadline_reminder"?"Recordatorio":M==="test_notification"?"Prueba":M,Li=M=>M==="success"?"Éxito":M==="partial"?"Parcial":M==="failure"?"Fallo":"Omitido",Zr=M=>M==="success"?"#4CAF50":M==="partial"?"#FF9800":M==="failure"?"#f44336":"#9E9E9E";return y?h.jsx("div",{className:"loading",children:"Cargando..."}):h.jsxs("div",{children:[h.jsxs("div",{className:"header",children:[h.jsx("h1",{children:"🔧 Panel de Super Administrador"}),h.jsx("button",{onClick:()=>t("/communities"),children:"← Volver"})]}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"card",style:{marginBottom:"24px",backgroundColor:"rgba(255, 152, 0, 0.1)",borderLeft:"4px solid #ff9800"},children:[h.jsx("h2",{style:{marginTop:0,marginBottom:"20px",color:"var(--text-primary)"},children:"⚙️ Configuración Global de Acceso"}),h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[h.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"12px",cursor:"pointer",padding:"12px",backgroundColor:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",transition:"all 0.2s ease"},children:[h.jsx("input",{type:"checkbox",checked:b,onChange:M=>It("allowUserRegistration",M.target.checked),disabled:Tt,style:{width:"20px",height:"20px",cursor:"pointer"}}),h.jsxs("div",{style:{flex:1},children:[h.jsx("div",{style:{fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:"👤 Permitir registro de nuevos usuarios"}),h.jsx("div",{style:{fontSize:"13px",color:"var(--text-secondary)"},children:b?"✅ Los usuarios pueden crear nuevas cuentas":"🚫 Registro de usuarios deshabilitado"})]})]}),h.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"12px",cursor:"pointer",padding:"12px",backgroundColor:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",transition:"all 0.2s ease"},children:[h.jsx("input",{type:"checkbox",checked:le,onChange:M=>It("allowCommunityCreation",M.target.checked),disabled:Tt,style:{width:"20px",height:"20px",cursor:"pointer"}}),h.jsxs("div",{style:{flex:1},children:[h.jsx("div",{style:{fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:"🏘️ Permitir creación de nuevas comunidades"}),h.jsx("div",{style:{fontSize:"13px",color:"var(--text-secondary)"},children:le?"✅ Los usuarios pueden crear comunidades":"🚫 Creación de comunidades deshabilitada"})]})]})]}),h.jsxs("div",{style:{marginTop:"12px",padding:"12px",backgroundColor:"rgba(255, 193, 7, 0.1)",borderRadius:"6px",fontSize:"13px",color:"var(--text-secondary)"},children:["💡 ",h.jsx("strong",{children:"Nota:"})," Estos ajustes controlan el acceso a nivel global de la aplicación. Úsalos para mantener la app privada y controlar quién puede registrarse o crear comunidades."]})]}),h.jsxs("div",{className:"card",style:{marginBottom:"24px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[h.jsxs("div",{children:[h.jsx("h2",{style:{marginTop:0,marginBottom:"6px"},children:"Logs de Notificaciones"}),h.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"13px",margin:0},children:"Últimos 50 intentos de envío. No se guardan tokens, solo totales y errores."})]}),h.jsx("button",{type:"button",className:"button button-secondary",onClick:ce,disabled:f,style:{width:"auto",padding:"8px 12px",margin:0},children:f?"Cargando...":"Actualizar"})]}),u.length===0?h.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px"},children:f?"Cargando logs...":"Todavía no hay logs de notificaciones."}):h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"16px"},children:u.map(M=>h.jsxs("div",{style:{padding:"12px",border:"1px solid var(--border-color)",borderRadius:"8px",backgroundColor:"var(--bg-secondary)"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"10px",flexWrap:"wrap",marginBottom:"6px"},children:[h.jsx("strong",{children:Jr(M.type)}),h.jsx("span",{style:{color:Zr(M.status),fontWeight:600},children:Li(M.status)})]}),h.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"13px",lineHeight:1.5},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Fecha:"})," ",tn(M.createdAt)]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Usuario:"})," ",M.userNick||M.userId||"Desconocido"]}),(M.communityName||M.roundName)&&h.jsxs("div",{children:[h.jsx("strong",{children:"Contexto:"})," ",[M.communityName,M.roundName].filter(Boolean).join(" / ")]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Mensaje:"})," ",M.title," - ",M.body]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Tokens:"})," ",M.tokenCount," · ",h.jsx("strong",{children:"OK:"})," ",M.successCount," · ",h.jsx("strong",{children:"Fallos:"})," ",M.failureCount]}),M.error&&h.jsxs("div",{children:[h.jsx("strong",{children:"Error:"})," ",M.error]})]})]},M.id))})]}),A&&h.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},children:h.jsxs("div",{className:"modal",children:[h.jsx("h3",{children:"Editar Comunidad"}),h.jsxs("div",{style:{marginBottom:"15px"},children:[h.jsx("label",{className:"label",children:"Nombre:"}),h.jsx("input",{type:"text",className:"input",value:D,onChange:M=>S(M.target.value)})]}),h.jsxs("div",{style:{marginBottom:"20px"},children:[h.jsx("label",{className:"label",children:"Descripción:"}),h.jsx("textarea",{className:"input",value:T,onChange:M=>x(M.target.value),rows:4})]}),h.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[h.jsx("button",{onClick:()=>P(null),style:{padding:"10px 20px",border:"1px solid var(--border-color)",borderRadius:"4px",backgroundColor:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:"Cancelar"}),h.jsx("button",{onClick:At,style:{padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Guardar"})]})]})}),V&&h.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,overflow:"auto",padding:"20px"},children:h.jsxs("div",{className:"modal",style:{maxHeight:"90vh",overflow:"auto"},children:[h.jsx("h3",{children:"Editar Ronda"}),h.jsxs("div",{style:{marginBottom:"15px"},children:[h.jsx("label",{className:"label",children:"Nombre:"}),h.jsx("input",{type:"text",className:"input",value:N,onChange:M=>_(M.target.value)})]}),h.jsxs("div",{style:{marginBottom:"20px"},children:[h.jsx("label",{className:"label",children:"Fecha límite:"}),h.jsx("input",{type:"datetime-local",className:"input",value:g,onChange:M=>w(M.target.value)})]}),h.jsxs("div",{style:{marginBottom:"20px"},children:[h.jsxs("h4",{children:["Partidos (",E.length,")"]}),E.map((M,ne)=>h.jsxs("div",{style:{marginBottom:"15px",padding:"15px",border:"1px solid var(--border-color)",borderRadius:"4px"},children:[h.jsxs("div",{style:{marginBottom:"10px"},children:[h.jsx("label",{className:"label",children:"Equipo Local:"}),h.jsx("input",{type:"text",className:"input",value:M.homeTeam,onChange:ye=>{const pe=[...E];pe[ne].homeTeam=ye.target.value,k(pe)}})]}),h.jsxs("div",{style:{marginBottom:"10px"},children:[h.jsx("label",{className:"label",children:"Equipo Visitante:"}),h.jsx("input",{type:"text",className:"input",value:M.awayTeam,onChange:ye=>{const pe=[...E];pe[ne].awayTeam=ye.target.value,k(pe)}})]}),h.jsxs("div",{children:[h.jsx("label",{className:"label",children:"Tipo de Apuesta:"}),h.jsxs("select",{className:"input",value:M.type,onChange:ye=>{const pe=[...E];pe[ne].type=ye.target.value,k(pe)},children:[h.jsx("option",{value:"exact",children:"Resultado Exacto"}),h.jsx("option",{value:"1X2",children:"1 X 2"})]})]})]},ne))]}),h.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[h.jsx("button",{onClick:()=>R(null),style:{padding:"10px 20px",border:"1px solid var(--border-color)",borderRadius:"4px",backgroundColor:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:"Cancelar"}),h.jsx("button",{onClick:Vt,style:{padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Guardar"})]})]})}),h.jsxs("div",{className:"card",children:[h.jsxs("h2",{style:{marginTop:0},children:["Todas las Comunidades (",n.length,")"]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"15px",marginTop:"15px"},children:n.map(M=>h.jsxs("div",{className:"card",style:{border:"1px solid #ddd",borderRadius:"8px",padding:"15px",opacity:i===M.id?1:.85},children:[h.jsxs("h3",{style:{marginTop:0},children:[M.name,h.jsx("span",{className:M.isActive===!1?"badge badge-closed":"badge badge-open",style:{marginLeft:"8px"},children:M.isActive===!1?"Desactivada":"Activa"})]}),M.description&&h.jsx("p",{style:{fontSize:"14px",color:"var(--text-secondary)",marginBottom:"10px"},children:M.description}),h.jsxs("p",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"10px"},children:["Creada: ",Ue(M.createdAt)]}),h.jsxs("p",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"15px"},children:["Miembros: ",M.membersCount]}),h.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[h.jsx("button",{onClick:()=>xt(M.id),style:{padding:"8px 12px",backgroundColor:"#2196F3",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:"Ver Rondas"}),h.jsx("button",{onClick:()=>K(M),style:{padding:"8px 12px",backgroundColor:"#FF9800",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:"Editar"}),h.jsx("button",{onClick:()=>Un(M),style:{padding:"8px 12px",backgroundColor:M.isActive===!1?"#4CAF50":"#9E9E9E",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:M.isActive===!1?"Activar":"Desactivar"}),h.jsx("button",{onClick:()=>en(M),style:{padding:"8px 12px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"13px"},children:"Eliminar"})]})]},M.id))})]}),i&&h.jsxs("div",{className:"card",children:[h.jsxs("h2",{style:{marginTop:0},children:["Rondas de la Comunidad (",o.length,")"]}),o.length===0?h.jsx("p",{style:{color:"#999"},children:"No hay rondas en esta comunidad"}):h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px",marginTop:"15px"},children:o.map(M=>h.jsx("div",{className:"card",style:{border:"1px solid #ddd",borderRadius:"8px",padding:"15px"},children:h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[h.jsxs("div",{style:{flex:1},children:[h.jsx("h3",{style:{marginTop:0,marginBottom:"10px"},children:M.name}),h.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"5px"},children:[h.jsx("strong",{children:"Estado:"})," ",M.status==="open"?"🟢 Abierta":M.status==="closed"?"🔴 Cerrada":"✅ Resultados Publicados"]}),h.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"5px"},children:[h.jsx("strong",{children:"Fecha límite:"})," ",Ue(M.deadline)]}),h.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"5px"},children:[h.jsx("strong",{children:"Creada:"})," ",Ue(M.createdAt)]}),h.jsxs("p",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"10px"},children:[h.jsx("strong",{children:"Partidos:"})," ",M.matches.length]}),M.status==="results_posted"&&M.winnerNick&&h.jsxs("p",{style:{fontSize:"14px",fontWeight:"bold",color:"#4CAF50"},children:["🏆 Ganador: ",M.winnerNick]})]}),h.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[h.jsx("button",{onClick:()=>t(`/community/${M.communityId}/round/${M.id}/results`),style:{padding:"8px 12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",whiteSpace:"nowrap",flex:"1 1 auto"},children:"Editar Resultados"}),h.jsx("button",{onClick:()=>Ke(M),style:{padding:"8px 12px",backgroundColor:"#2196F3",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",whiteSpace:"nowrap",flex:"1 1 auto"},children:"Editar Ronda"}),h.jsx("button",{onClick:()=>Wt(M),style:{padding:"8px 12px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",whiteSpace:"nowrap",flex:"1 1 auto"},children:"Eliminar Ronda"})]})]})},M.id))})]}),z&&h.jsx(Vs,{message:z.message,type:z.type,onClose:()=>q(null)}),Y&&h.jsx(sO,{message:Y.message,confirmText:"Eliminar",cancelText:"Cancelar",onConfirm:Y.onConfirm,onCancel:()=>fe(null)}),z&&h.jsx(Vs,{message:z.message,type:z.type,onClose:()=>q(null)})]})]})},aO={newRounds:!0,deadlineReminders:!0,winnersAndBote:!0},lO=()=>{const t=xn(),{currentUser:e,userData:n,refreshUserData:r}=$t(),[i,s]=O.useState({...aO,...(n==null?void 0:n.notificationSettings)||{}}),[o,l]=O.useState(!1),[u,c]=O.useState(!1),[f,m]=O.useState(!1),[y,I]=O.useState(Cl()),[A,P]=O.useState(""),D=y==="granted";O.useEffect(()=>{const g=()=>I(Cl());return window.addEventListener("focus",g),()=>window.removeEventListener("focus",g)},[]);const S=async(g,w)=>{if(!e)return;const E={...i,[g]:w};s(E),l(!0);try{await bt(ie(Q,"users",e.uid),{notificationSettings:E}),await r(),P("Preferencias guardadas")}catch(k){console.error("Error guardando preferencias de notificación:",k),s(i),P("Error al guardar las preferencias")}finally{l(!1)}},T=async()=>{if(!e)return;const g=Cl();if(I(g),g==="unsupported"){P("Este navegador no soporta notificaciones push. Prueba con Chrome, Edge o Safari actualizado.");return}if(g==="denied"){P("Las notificaciones están bloqueadas. Cambia el permiso en los ajustes del navegador o del sitio, recarga Porreta y pulsa Reactivar notificaciones.");return}c(!0),P("");try{const w=await B2(e.uid);I(Cl()),P(w?"Notificaciones activadas en este dispositivo":"No se concedió permiso de notificaciones")}catch(w){console.error("Error activando notificaciones:",w),P("Error al activar notificaciones")}finally{c(!1)}},x=async()=>{m(!0),P("");try{const g=await z2();P(g.successCount>0?"Notificación de prueba enviada":"No se pudo enviar la prueba. Activa las notificaciones primero.")}catch(g){console.error("Error enviando notificación de prueba:",g),P("Error al enviar la notificación de prueba")}finally{m(!1)}},V=y==="granted"?"Notificaciones permitidas":y==="denied"?"Notificaciones bloqueadas":y==="unsupported"?"Notificaciones no soportadas":"Notificaciones pendientes de activar",R=y==="granted"?"Este dispositivo ya puede recibir avisos. Si cambiaste de móvil, navegador o reinstalaste la app, pulsa Reactivar notificaciones para volver a guardar este dispositivo.":y==="denied"?"El navegador tiene las notificaciones bloqueadas. Por seguridad, Porreta no puede volver a mostrar el aviso de permiso automáticamente: tienes que desbloquearlo manualmente.":y==="unsupported"?"Este navegador o modo de navegación no permite notificaciones push. Prueba con la app instalada, Chrome, Edge o Safari actualizado.":"Pulsa Activar notificaciones. El móvil o navegador mostrará un aviso propio; debes aceptar ese aviso para que podamos guardar este dispositivo.",N=u?"Activando...":y==="granted"?"Reactivar notificaciones":y==="denied"?"Ver cómo desbloquear":y==="unsupported"?"No soportado":"Activar notificaciones",_=[{key:"newRounds",title:"Nuevas rondas",description:"Avisarme cuando haya una ronda visible para apostar."},{key:"deadlineReminders",title:"Recordatorios antes del cierre",description:"Avisarme cada 2 horas el día del cierre si son más de las 10:00 y todavía no he apostado."},{key:"winnersAndBote",title:"Ganador o bote",description:"Avisarme cuando haya ganador o bote."}];return h.jsxs("div",{children:[h.jsxs("div",{className:"header",children:[h.jsx("h1",{children:"Notificaciones"}),h.jsx("button",{onClick:()=>t("/communities"),children:"Volver"})]}),h.jsx("div",{className:"container",children:h.jsxs("div",{className:"card",children:[h.jsx("h2",{style:{marginTop:0},children:"Preferencias"}),h.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px",marginTop:0},children:"Configura qué avisos quieres recibir en este dispositivo y usuario."}),h.jsxs("div",{style:{padding:"12px",border:"1px solid var(--border-color)",borderRadius:"8px",backgroundColor:y==="denied"?"rgba(244, 67, 54, 0.08)":"var(--bg-secondary)",marginBottom:"16px"},children:[h.jsx("strong",{style:{display:"block",marginBottom:"6px"},children:V}),h.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"13px",margin:0},children:R}),y==="denied"&&h.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"13px",marginTop:"10px"},children:[h.jsx("p",{style:{margin:"0 0 6px 0"},children:h.jsx("strong",{children:"Para desbloquearlo:"})}),h.jsx("p",{style:{margin:"0 0 4px 0"},children:"Android/Chrome: abre el candado o ajustes del sitio, entra en Permisos y permite Notificaciones."}),h.jsx("p",{style:{margin:"0 0 4px 0"},children:"iPhone/iPad: revisa Ajustes del sistema y los ajustes de Safari o de la app instalada."}),h.jsx("p",{style:{margin:0},children:"Ordenador: pulsa el candado junto a la dirección web, permite Notificaciones, recarga Porreta y vuelve a pulsar Reactivar."})]})]}),h.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:"16px"},children:[h.jsx("button",{type:"button",className:"button",onClick:T,disabled:u||y==="unsupported",style:{width:"auto",padding:"10px 14px",margin:0},children:N}),h.jsx("button",{type:"button",className:"button button-secondary",onClick:x,disabled:f||!D,style:{width:"auto",padding:"10px 14px",margin:0},children:f?"Enviando...":"Enviar prueba"})]}),!D&&y!=="denied"&&y!=="unsupported"&&h.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"13px",marginTop:"-6px"},children:"El navegador todavía no tiene permiso para mostrar notificaciones en este dispositivo."}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:_.map(g=>h.jsxs("label",{style:{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px",border:"1px solid var(--border-color)",borderRadius:"8px",backgroundColor:"var(--bg-secondary)",cursor:o?"wait":"pointer"},children:[h.jsx("input",{type:"checkbox",checked:i[g.key],disabled:o,onChange:w=>S(g.key,w.target.checked),style:{width:"20px",height:"20px",marginTop:"2px"}}),h.jsxs("span",{style:{flex:1},children:[h.jsx("strong",{style:{display:"block",marginBottom:"4px"},children:g.title}),h.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"13px"},children:g.description})]})]},g.key))}),A&&h.jsx("p",{style:{margin:"14px 0 0 0",color:"var(--text-secondary)",fontSize:"13px"},children:o?"Guardando...":A})]})})]})},gr=({children:t})=>{const{currentUser:e,loading:n}=$t();return n?h.jsx("div",{className:"loading",children:"Cargando..."}):e?h.jsx(h.Fragment,{children:t}):h.jsx(GA,{to:"/"})};function uO(){return h.jsx(q2,{children:h.jsx(W2,{children:h.jsx(JA,{basename:"/Porreta",children:h.jsxs(QA,{children:[h.jsx(pn,{path:"/",element:h.jsx(G2,{})}),h.jsx(pn,{path:"/signup",element:h.jsx(K2,{})}),h.jsx(pn,{path:"/communities",element:h.jsx(gr,{children:h.jsx(Q2,{})})}),h.jsx(pn,{path:"/community/:communityId",element:h.jsx(gr,{children:h.jsx(eO,{})})}),h.jsx(pn,{path:"/community/:communityId/create-round",element:h.jsx(gr,{children:h.jsx(tO,{})})}),h.jsx(pn,{path:"/community/:communityId/round/:roundId",element:h.jsx(gr,{children:h.jsx(nO,{})})}),h.jsx(pn,{path:"/community/:communityId/round/:roundId/bet",element:h.jsx(gr,{children:h.jsx(rO,{})})}),h.jsx(pn,{path:"/community/:communityId/round/:roundId/results",element:h.jsx(gr,{children:h.jsx(iO,{})})}),h.jsx(pn,{path:"/notifications",element:h.jsx(gr,{children:h.jsx(lO,{})})}),h.jsx(pn,{path:"/super-admin",element:h.jsx(gr,{children:h.jsx(oO,{})})})]})})})})}Vd.createRoot(document.getElementById("root")).render(h.jsx(Xv.StrictMode,{children:h.jsx(uO,{})}));
