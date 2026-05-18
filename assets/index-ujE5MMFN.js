(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(c){if(c.ep)return;c.ep=!0;const p=i(c);fetch(c.href,p)}})();function V0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zd={exports:{}},bi={},Fd={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function Nx(){if(Jf)return De;Jf=1;var r=Symbol.for("react.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),f=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function b(M){return M===null||typeof M!="object"?null:(M=_&&M[_]||M["@@iterator"],typeof M=="function"?M:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,I={};function N(M,D,re){this.props=M,this.context=D,this.refs=I,this.updater=re||L}N.prototype.isReactComponent={},N.prototype.setState=function(M,D){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,D,"setState")},N.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function C(){}C.prototype=N.prototype;function T(M,D,re){this.props=M,this.context=D,this.refs=I,this.updater=re||L}var k=T.prototype=new C;k.constructor=T,E(k,N.prototype),k.isPureReactComponent=!0;var j=Array.isArray,$=Object.prototype.hasOwnProperty,F={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function B(M,D,re){var J,G={},te=null,ae=null;if(D!=null)for(J in D.ref!==void 0&&(ae=D.ref),D.key!==void 0&&(te=""+D.key),D)$.call(D,J)&&!z.hasOwnProperty(J)&&(G[J]=D[J]);var be=arguments.length-2;if(be===1)G.children=re;else if(1<be){for(var Me=Array(be),Ve=0;Ve<be;Ve++)Me[Ve]=arguments[Ve+2];G.children=Me}if(M&&M.defaultProps)for(J in be=M.defaultProps,be)G[J]===void 0&&(G[J]=be[J]);return{$$typeof:r,type:M,key:te,ref:ae,props:G,_owner:F.current}}function le(M,D){return{$$typeof:r,type:M.type,key:D,ref:M.ref,props:M.props,_owner:M._owner}}function ce(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function X(M){var D={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(re){return D[re]})}var q=/\/+/g;function Q(M,D){return typeof M=="object"&&M!==null&&M.key!=null?X(""+M.key):D.toString(36)}function ge(M,D,re,J,G){var te=typeof M;(te==="undefined"||te==="boolean")&&(M=null);var ae=!1;if(M===null)ae=!0;else switch(te){case"string":case"number":ae=!0;break;case"object":switch(M.$$typeof){case r:case s:ae=!0}}if(ae)return ae=M,G=G(ae),M=J===""?"."+Q(ae,0):J,j(G)?(re="",M!=null&&(re=M.replace(q,"$&/")+"/"),ge(G,D,re,"",function(Ve){return Ve})):G!=null&&(ce(G)&&(G=le(G,re+(!G.key||ae&&ae.key===G.key?"":(""+G.key).replace(q,"$&/")+"/")+M)),D.push(G)),1;if(ae=0,J=J===""?".":J+":",j(M))for(var be=0;be<M.length;be++){te=M[be];var Me=J+Q(te,be);ae+=ge(te,D,re,Me,G)}else if(Me=b(M),typeof Me=="function")for(M=Me.call(M),be=0;!(te=M.next()).done;)te=te.value,Me=J+Q(te,be++),ae+=ge(te,D,re,Me,G);else if(te==="object")throw D=String(M),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return ae}function Y(M,D,re){if(M==null)return M;var J=[],G=0;return ge(M,J,"","",function(te){return D.call(re,te,G++)}),J}function Z(M){if(M._status===-1){var D=M._result;D=D(),D.then(function(re){(M._status===0||M._status===-1)&&(M._status=1,M._result=re)},function(re){(M._status===0||M._status===-1)&&(M._status=2,M._result=re)}),M._status===-1&&(M._status=0,M._result=D)}if(M._status===1)return M._result.default;throw M._result}var se={current:null},V={transition:null},H={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function P(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:Y,forEach:function(M,D,re){Y(M,function(){D.apply(this,arguments)},re)},count:function(M){var D=0;return Y(M,function(){D++}),D},toArray:function(M){return Y(M,function(D){return D})||[]},only:function(M){if(!ce(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},De.Component=N,De.Fragment=i,De.Profiler=c,De.PureComponent=T,De.StrictMode=l,De.Suspense=g,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,De.act=P,De.cloneElement=function(M,D,re){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var J=E({},M.props),G=M.key,te=M.ref,ae=M._owner;if(D!=null){if(D.ref!==void 0&&(te=D.ref,ae=F.current),D.key!==void 0&&(G=""+D.key),M.type&&M.type.defaultProps)var be=M.type.defaultProps;for(Me in D)$.call(D,Me)&&!z.hasOwnProperty(Me)&&(J[Me]=D[Me]===void 0&&be!==void 0?be[Me]:D[Me])}var Me=arguments.length-2;if(Me===1)J.children=re;else if(1<Me){be=Array(Me);for(var Ve=0;Ve<Me;Ve++)be[Ve]=arguments[Ve+2];J.children=be}return{$$typeof:r,type:M.type,key:G,ref:te,props:J,_owner:ae}},De.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:p,_context:M},M.Consumer=M},De.createElement=B,De.createFactory=function(M){var D=B.bind(null,M);return D.type=M,D},De.createRef=function(){return{current:null}},De.forwardRef=function(M){return{$$typeof:v,render:M}},De.isValidElement=ce,De.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:Z}},De.memo=function(M,D){return{$$typeof:w,type:M,compare:D===void 0?null:D}},De.startTransition=function(M){var D=V.transition;V.transition={};try{M()}finally{V.transition=D}},De.unstable_act=P,De.useCallback=function(M,D){return se.current.useCallback(M,D)},De.useContext=function(M){return se.current.useContext(M)},De.useDebugValue=function(){},De.useDeferredValue=function(M){return se.current.useDeferredValue(M)},De.useEffect=function(M,D){return se.current.useEffect(M,D)},De.useId=function(){return se.current.useId()},De.useImperativeHandle=function(M,D,re){return se.current.useImperativeHandle(M,D,re)},De.useInsertionEffect=function(M,D){return se.current.useInsertionEffect(M,D)},De.useLayoutEffect=function(M,D){return se.current.useLayoutEffect(M,D)},De.useMemo=function(M,D){return se.current.useMemo(M,D)},De.useReducer=function(M,D,re){return se.current.useReducer(M,D,re)},De.useRef=function(M){return se.current.useRef(M)},De.useState=function(M){return se.current.useState(M)},De.useSyncExternalStore=function(M,D,re){return se.current.useSyncExternalStore(M,D,re)},De.useTransition=function(){return se.current.useTransition()},De.version="18.3.1",De}var eh;function Pu(){return eh||(eh=1,Fd.exports=Nx()),Fd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th;function Lx(){if(th)return bi;th=1;var r=Pu(),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function f(v,g,w){var y,_={},b=null,L=null;w!==void 0&&(b=""+w),g.key!==void 0&&(b=""+g.key),g.ref!==void 0&&(L=g.ref);for(y in g)l.call(g,y)&&!p.hasOwnProperty(y)&&(_[y]=g[y]);if(v&&v.defaultProps)for(y in g=v.defaultProps,g)_[y]===void 0&&(_[y]=g[y]);return{$$typeof:s,type:v,key:b,ref:L,props:_,_owner:c.current}}return bi.Fragment=i,bi.jsx=f,bi.jsxs=f,bi}var nh;function Tx(){return nh||(nh=1,zd.exports=Lx()),zd.exports}var t=Tx(),x=Pu();const Tn=V0(x);var tl={},Bd={exports:{}},rn={},Od={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh;function Ax(){return rh||(rh=1,(function(r){function s(V,H){var P=V.length;V.push(H);e:for(;0<P;){var M=P-1>>>1,D=V[M];if(0<c(D,H))V[M]=H,V[P]=D,P=M;else break e}}function i(V){return V.length===0?null:V[0]}function l(V){if(V.length===0)return null;var H=V[0],P=V.pop();if(P!==H){V[0]=P;e:for(var M=0,D=V.length,re=D>>>1;M<re;){var J=2*(M+1)-1,G=V[J],te=J+1,ae=V[te];if(0>c(G,P))te<D&&0>c(ae,G)?(V[M]=ae,V[te]=P,M=te):(V[M]=G,V[J]=P,M=J);else if(te<D&&0>c(ae,P))V[M]=ae,V[te]=P,M=te;else break e}}return H}function c(V,H){var P=V.sortIndex-H.sortIndex;return P!==0?P:V.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var f=Date,v=f.now();r.unstable_now=function(){return f.now()-v}}var g=[],w=[],y=1,_=null,b=3,L=!1,E=!1,I=!1,N=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(V){for(var H=i(w);H!==null;){if(H.callback===null)l(w);else if(H.startTime<=V)l(w),H.sortIndex=H.expirationTime,s(g,H);else break;H=i(w)}}function j(V){if(I=!1,k(V),!E)if(i(g)!==null)E=!0,Z($);else{var H=i(w);H!==null&&se(j,H.startTime-V)}}function $(V,H){E=!1,I&&(I=!1,C(B),B=-1),L=!0;var P=b;try{for(k(H),_=i(g);_!==null&&(!(_.expirationTime>H)||V&&!X());){var M=_.callback;if(typeof M=="function"){_.callback=null,b=_.priorityLevel;var D=M(_.expirationTime<=H);H=r.unstable_now(),typeof D=="function"?_.callback=D:_===i(g)&&l(g),k(H)}else l(g);_=i(g)}if(_!==null)var re=!0;else{var J=i(w);J!==null&&se(j,J.startTime-H),re=!1}return re}finally{_=null,b=P,L=!1}}var F=!1,z=null,B=-1,le=5,ce=-1;function X(){return!(r.unstable_now()-ce<le)}function q(){if(z!==null){var V=r.unstable_now();ce=V;var H=!0;try{H=z(!0,V)}finally{H?Q():(F=!1,z=null)}}else F=!1}var Q;if(typeof T=="function")Q=function(){T(q)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Y=ge.port2;ge.port1.onmessage=q,Q=function(){Y.postMessage(null)}}else Q=function(){N(q,0)};function Z(V){z=V,F||(F=!0,Q())}function se(V,H){B=N(function(){V(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){E||L||(E=!0,Z($))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return i(g)},r.unstable_next=function(V){switch(b){case 1:case 2:case 3:var H=3;break;default:H=b}var P=b;b=H;try{return V()}finally{b=P}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,H){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var P=b;b=V;try{return H()}finally{b=P}},r.unstable_scheduleCallback=function(V,H,P){var M=r.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?M+P:M):P=M,V){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=P+D,V={id:y++,callback:H,priorityLevel:V,startTime:P,expirationTime:D,sortIndex:-1},P>M?(V.sortIndex=P,s(w,V),i(g)===null&&V===i(w)&&(I?(C(B),B=-1):I=!0,se(j,P-M))):(V.sortIndex=D,s(g,V),E||L||(E=!0,Z($))),V},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(V){var H=b;return function(){var P=b;b=H;try{return V.apply(this,arguments)}finally{b=P}}}})(Hd)),Hd}var oh;function Ex(){return oh||(oh=1,Od.exports=Ax()),Od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh;function $x(){if(sh)return rn;sh=1;var r=Pu(),s=Ex();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function p(e,n){f(e,n),f(e+"Capture",n)}function f(e,n){for(c[e]=n,e=0;e<n.length;e++)l.add(n[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function b(e){return g.call(_,e)?!0:g.call(y,e)?!1:w.test(e)?_[e]=!0:(y[e]=!0,!1)}function L(e,n,o,a){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,n,o,a){if(n===null||typeof n>"u"||L(e,n,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function I(e,n,o,a,d,u,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=u,this.removeEmptyString=m}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];N[n]=new I(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(C,T);N[n]=new I(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(C,T);N[n]=new I(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(C,T);N[n]=new I(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function k(e,n,o,a){var d=N.hasOwnProperty(n)?N[n]:null;(d!==null?d.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(E(n,o,d,a)&&(o=null),a||d===null?b(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):d.mustUseProperty?e[d.propertyName]=o===null?d.type===3?!1:"":o:(n=d.attributeName,a=d.attributeNamespace,o===null?e.removeAttribute(n):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?e.setAttributeNS(a,n,o):e.setAttribute(n,o))))}var j=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),F=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),X=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),V=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,M;function D(e){if(M===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||""}return`
`+M+e}var re=!1;function J(e,n){if(!e||re)return"";re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(U){var a=U}Reflect.construct(e,[],n)}else{try{n.call()}catch(U){a=U}e.call(n.prototype)}else{try{throw Error()}catch(U){a=U}e()}}catch(U){if(U&&a&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),u=a.stack.split(`
`),m=d.length-1,S=u.length-1;1<=m&&0<=S&&d[m]!==u[S];)S--;for(;1<=m&&0<=S;m--,S--)if(d[m]!==u[S]){if(m!==1||S!==1)do if(m--,S--,0>S||d[m]!==u[S]){var A=`
`+d[m].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=m&&0<=S);break}}}finally{re=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?D(e):""}function G(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case F:return"Portal";case le:return"Profiler";case B:return"StrictMode";case Q:return"Suspense";case ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X:return(e.displayName||"Context")+".Consumer";case ce:return(e._context.displayName||"Context")+".Provider";case q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return n=e.displayName||null,n!==null?n:te(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return te(e(n))}catch{}}return null}function ae(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(n);case 8:return n===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ve(e){var n=Me(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,u=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xe(e){e._valueTracker||(e._valueTracker=Ve(e))}function Se(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),a="";return e&&(a=Me(e)?e.checked?"true":"false":e.value),e=a,e!==o?(n.setValue(e),!0):!1}function Te(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Be(e,n){var o=n.checked;return P({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ke(e,n){var o=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;o=be(n.value!=null?n.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ut(e,n){n=n.checked,n!=null&&k(e,"checked",n,!1)}function pt(e,n){ut(e,n);var o=be(n.value),a=n.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ye(e,n.type,o):n.hasOwnProperty("defaultValue")&&Ye(e,n.type,be(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ft(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Ye(e,n,o){(n!=="number"||Te(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var oe=Array.isArray;function de(e,n,o,a){if(e=e.options,n){n={};for(var d=0;d<o.length;d++)n["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=n.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&a&&(e[o].defaultSelected=!0)}else{for(o=""+be(o),n=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function Ae(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return P({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ye(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(oe(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:be(o)}}function je(e,n){var o=be(n.value),a=be(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function ke(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Je(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function et(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Je(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qe,Ft=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,a,d){MSApp.execUnsafeLocalFunction(function(){return e(n,o,a,d)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qe=qe||document.createElement("div"),qe.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function lr(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var Pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eo=["Webkit","ms","Moz","O"];Object.keys(Pn).forEach(function(e){eo.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Pn[n]=Pn[e]})});function Oo(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Pn.hasOwnProperty(e)&&Pn[e]?(""+n).trim():n+"px"}function Le(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=Oo(o,n[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,d):e[o]=d}}var it=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(e,n){if(n){if(it[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function $t(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qn=null;function zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,Ho=null,Wo=null;function mp(e){if(e=ai(e)){if(typeof Fs!="function")throw Error(i(280));var n=e.stateNode;n&&(n=ga(n),Fs(e.stateNode,e.type,n))}}function gp(e){Ho?Wo?Wo.push(e):Wo=[e]:Ho=e}function xp(){if(Ho){var e=Ho,n=Wo;if(Wo=Ho=null,mp(e),n)for(e=0;e<n.length;e++)mp(n[e])}}function vp(e,n){return e(n)}function yp(){}var tc=!1;function wp(e,n,o){if(tc)return e(n,o);tc=!0;try{return vp(e,n,o)}finally{tc=!1,(Ho!==null||Wo!==null)&&(yp(),xp())}}function Bs(e,n){var o=e.stateNode;if(o===null)return null;var a=ga(o);if(a===null)return null;o=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var nc=!1;if(v)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){nc=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{nc=!1}function Pg(e,n,o,a,d,u,m,S,A){var U=Array.prototype.slice.call(arguments,3);try{n.apply(o,U)}catch(ne){this.onError(ne)}}var Hs=!1,Zi=null,Yi=!1,rc=null,Rg={onError:function(e){Hs=!0,Zi=e}};function Dg(e,n,o,a,d,u,m,S,A){Hs=!1,Zi=null,Pg.apply(Rg,arguments)}function zg(e,n,o,a,d,u,m,S,A){if(Dg.apply(this,arguments),Hs){if(Hs){var U=Zi;Hs=!1,Zi=null}else throw Error(i(198));Yi||(Yi=!0,rc=U)}}function to(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function jp(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function bp(e){if(to(e)!==e)throw Error(i(188))}function Fg(e){var n=e.alternate;if(!n){if(n=to(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,a=n;;){var d=o.return;if(d===null)break;var u=d.alternate;if(u===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===u.child){for(u=d.child;u;){if(u===o)return bp(d),e;if(u===a)return bp(d),n;u=u.sibling}throw Error(i(188))}if(o.return!==a.return)o=d,a=u;else{for(var m=!1,S=d.child;S;){if(S===o){m=!0,o=d,a=u;break}if(S===a){m=!0,a=d,o=u;break}S=S.sibling}if(!m){for(S=u.child;S;){if(S===o){m=!0,o=u,a=d;break}if(S===a){m=!0,a=u,o=d;break}S=S.sibling}if(!m)throw Error(i(189))}}if(o.alternate!==a)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function kp(e){return e=Fg(e),e!==null?_p(e):null}function _p(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=_p(e);if(n!==null)return n;e=e.sibling}return null}var Cp=s.unstable_scheduleCallback,Sp=s.unstable_cancelCallback,Bg=s.unstable_shouldYield,Og=s.unstable_requestPaint,Ct=s.unstable_now,Hg=s.unstable_getCurrentPriorityLevel,oc=s.unstable_ImmediatePriority,Mp=s.unstable_UserBlockingPriority,Ki=s.unstable_NormalPriority,Wg=s.unstable_LowPriority,Ip=s.unstable_IdlePriority,Qi=null,Xn=null;function Ug(e){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Qi,e,void 0,(e.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:qg,Vg=Math.log,Gg=Math.LN2;function qg(e){return e>>>=0,e===0?32:31-(Vg(e)/Gg|0)|0}var Xi=64,Ji=4194304;function Ws(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ea(e,n){var o=e.pendingLanes;if(o===0)return 0;var a=0,d=e.suspendedLanes,u=e.pingedLanes,m=o&268435455;if(m!==0){var S=m&~d;S!==0?a=Ws(S):(u&=m,u!==0&&(a=Ws(u)))}else m=o&~d,m!==0?a=Ws(m):u!==0&&(a=Ws(u));if(a===0)return 0;if(n!==0&&n!==a&&(n&d)===0&&(d=a&-a,u=n&-n,d>=u||d===16&&(u&4194240)!==0))return n;if((a&4)!==0&&(a|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)o=31-Rn(n),d=1<<o,a|=e[o],n&=~d;return a}function Zg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yg(e,n){for(var o=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,u=e.pendingLanes;0<u;){var m=31-Rn(u),S=1<<m,A=d[m];A===-1?((S&o)===0||(S&a)!==0)&&(d[m]=Zg(S,n)):A<=n&&(e.expiredLanes|=S),u&=~S}}function sc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Np(){var e=Xi;return Xi<<=1,(Xi&4194240)===0&&(Xi=64),e}function ic(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function Us(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Rn(n),e[n]=o}function Kg(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<o;){var d=31-Rn(o),u=1<<d;n[d]=0,a[d]=-1,e[d]=-1,o&=~u}}function ac(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var a=31-Rn(o),d=1<<a;d&n|e[a]&n&&(e[a]|=n),o&=~d}}var Qe=0;function Lp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Tp,lc,Ap,Ep,$p,cc=!1,ta=[],Cr=null,Sr=null,Mr=null,Vs=new Map,Gs=new Map,Ir=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(e,n){switch(e){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Vs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(n.pointerId)}}function qs(e,n,o,a,d,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:o,eventSystemFlags:a,nativeEvent:u,targetContainers:[d]},n!==null&&(n=ai(n),n!==null&&lc(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function Xg(e,n,o,a,d){switch(n){case"focusin":return Cr=qs(Cr,e,n,o,a,d),!0;case"dragenter":return Sr=qs(Sr,e,n,o,a,d),!0;case"mouseover":return Mr=qs(Mr,e,n,o,a,d),!0;case"pointerover":var u=d.pointerId;return Vs.set(u,qs(Vs.get(u)||null,e,n,o,a,d)),!0;case"gotpointercapture":return u=d.pointerId,Gs.set(u,qs(Gs.get(u)||null,e,n,o,a,d)),!0}return!1}function Rp(e){var n=no(e.target);if(n!==null){var o=to(n);if(o!==null){if(n=o.tag,n===13){if(n=jp(o),n!==null){e.blockedOn=n,$p(e.priority,function(){Ap(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function na(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=uc(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);Qn=a,o.target.dispatchEvent(a),Qn=null}else return n=ai(o),n!==null&&lc(n),e.blockedOn=o,!1;n.shift()}return!0}function Dp(e,n,o){na(e)&&o.delete(n)}function Jg(){cc=!1,Cr!==null&&na(Cr)&&(Cr=null),Sr!==null&&na(Sr)&&(Sr=null),Mr!==null&&na(Mr)&&(Mr=null),Vs.forEach(Dp),Gs.forEach(Dp)}function Zs(e,n){e.blockedOn===n&&(e.blockedOn=null,cc||(cc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Jg)))}function Ys(e){function n(d){return Zs(d,e)}if(0<ta.length){Zs(ta[0],e);for(var o=1;o<ta.length;o++){var a=ta[o];a.blockedOn===e&&(a.blockedOn=null)}}for(Cr!==null&&Zs(Cr,e),Sr!==null&&Zs(Sr,e),Mr!==null&&Zs(Mr,e),Vs.forEach(n),Gs.forEach(n),o=0;o<Ir.length;o++)a=Ir[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<Ir.length&&(o=Ir[0],o.blockedOn===null);)Rp(o),o.blockedOn===null&&Ir.shift()}var Uo=j.ReactCurrentBatchConfig,ra=!0;function e2(e,n,o,a){var d=Qe,u=Uo.transition;Uo.transition=null;try{Qe=1,dc(e,n,o,a)}finally{Qe=d,Uo.transition=u}}function t2(e,n,o,a){var d=Qe,u=Uo.transition;Uo.transition=null;try{Qe=4,dc(e,n,o,a)}finally{Qe=d,Uo.transition=u}}function dc(e,n,o,a){if(ra){var d=uc(e,n,o,a);if(d===null)Ic(e,n,a,oa,o),Pp(e,a);else if(Xg(d,e,n,o,a))a.stopPropagation();else if(Pp(e,a),n&4&&-1<Qg.indexOf(e)){for(;d!==null;){var u=ai(d);if(u!==null&&Tp(u),u=uc(e,n,o,a),u===null&&Ic(e,n,a,oa,o),u===d)break;d=u}d!==null&&a.stopPropagation()}else Ic(e,n,a,null,o)}}var oa=null;function uc(e,n,o,a){if(oa=null,e=zs(a),e=no(e),e!==null)if(n=to(e),n===null)e=null;else if(o=n.tag,o===13){if(e=jp(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return oa=e,null}function zp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hg()){case oc:return 1;case Mp:return 4;case Ki:case Wg:return 16;case Ip:return 536870912;default:return 16}default:return 16}}var Nr=null,pc=null,sa=null;function Fp(){if(sa)return sa;var e,n=pc,o=n.length,a,d="value"in Nr?Nr.value:Nr.textContent,u=d.length;for(e=0;e<o&&n[e]===d[e];e++);var m=o-e;for(a=1;a<=m&&n[o-a]===d[u-a];a++);return sa=d.slice(e,1<a?1-a:void 0)}function ia(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function aa(){return!0}function Bp(){return!1}function un(e){function n(o,a,d,u,m){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(o=e[S],this[S]=o?o(u):u[S]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?aa:Bp,this.isPropagationStopped=Bp,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),n}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=un(Vo),Ks=P({},Vo,{view:0,detail:0}),n2=un(Ks),hc,mc,Qs,la=P({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(hc=e.screenX-Qs.screenX,mc=e.screenY-Qs.screenY):mc=hc=0,Qs=e),hc)},movementY:function(e){return"movementY"in e?e.movementY:mc}}),Op=un(la),r2=P({},la,{dataTransfer:0}),o2=un(r2),s2=P({},Ks,{relatedTarget:0}),gc=un(s2),i2=P({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),a2=un(i2),l2=P({},Vo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c2=un(l2),d2=P({},Vo,{data:0}),Hp=un(d2),u2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h2(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=f2[e])?!!n[e]:!1}function xc(){return h2}var m2=P({},Ks,{key:function(e){if(e.key){var n=u2[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(e){return e.type==="keypress"?ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g2=un(m2),x2=P({},la,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=un(x2),v2=P({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),y2=un(v2),w2=P({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),j2=un(w2),b2=P({},la,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k2=un(b2),_2=[9,13,27,32],vc=v&&"CompositionEvent"in window,Xs=null;v&&"documentMode"in document&&(Xs=document.documentMode);var C2=v&&"TextEvent"in window&&!Xs,Up=v&&(!vc||Xs&&8<Xs&&11>=Xs),Vp=" ",Gp=!1;function qp(e,n){switch(e){case"keyup":return _2.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Go=!1;function S2(e,n){switch(e){case"compositionend":return Zp(n);case"keypress":return n.which!==32?null:(Gp=!0,Vp);case"textInput":return e=n.data,e===Vp&&Gp?null:e;default:return null}}function M2(e,n){if(Go)return e==="compositionend"||!vc&&qp(e,n)?(e=Fp(),sa=pc=Nr=null,Go=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Up&&n.locale!=="ko"?null:n.data;default:return null}}var I2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!I2[e.type]:n==="textarea"}function Kp(e,n,o,a){gp(a),n=fa(n,"onChange"),0<n.length&&(o=new fc("onChange","change",null,o,a),e.push({event:o,listeners:n}))}var Js=null,ei=null;function N2(e){h1(e,0)}function ca(e){var n=Qo(e);if(Se(n))return e}function L2(e,n){if(e==="change")return n}var Qp=!1;if(v){var yc;if(v){var wc="oninput"in document;if(!wc){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),wc=typeof Xp.oninput=="function"}yc=wc}else yc=!1;Qp=yc&&(!document.documentMode||9<document.documentMode)}function Jp(){Js&&(Js.detachEvent("onpropertychange",e1),ei=Js=null)}function e1(e){if(e.propertyName==="value"&&ca(ei)){var n=[];Kp(n,ei,e,zs(e)),wp(N2,n)}}function T2(e,n,o){e==="focusin"?(Jp(),Js=n,ei=o,Js.attachEvent("onpropertychange",e1)):e==="focusout"&&Jp()}function A2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ca(ei)}function E2(e,n){if(e==="click")return ca(n)}function $2(e,n){if(e==="input"||e==="change")return ca(n)}function P2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Dn=typeof Object.is=="function"?Object.is:P2;function ti(e,n){if(Dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!g.call(n,d)||!Dn(e[d],n[d]))return!1}return!0}function t1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function n1(e,n){var o=t1(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=n&&a>=n)return{node:o,offset:n-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=t1(o)}}function r1(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?r1(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function o1(){for(var e=window,n=Te();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=Te(e.document)}return n}function jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function R2(e){var n=o1(),o=e.focusedElem,a=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&r1(o.ownerDocument.documentElement,o)){if(a!==null&&jc(o)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=o.textContent.length,u=Math.min(a.start,d);a=a.end===void 0?u:Math.min(a.end,d),!e.extend&&u>a&&(d=a,a=u,u=d),d=n1(o,u);var m=n1(o,a);d&&m&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),u>a?(e.addRange(n),e.extend(m.node,m.offset)):(n.setEnd(m.node,m.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var D2=v&&"documentMode"in document&&11>=document.documentMode,qo=null,bc=null,ni=null,kc=!1;function s1(e,n,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;kc||qo==null||qo!==Te(a)||(a=qo,"selectionStart"in a&&jc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ni&&ti(ni,a)||(ni=a,a=fa(bc,"onSelect"),0<a.length&&(n=new fc("onSelect","select",null,n,o),e.push({event:n,listeners:a}),n.target=qo)))}function da(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var Zo={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},_c={},i1={};v&&(i1=document.createElement("div").style,"AnimationEvent"in window||(delete Zo.animationend.animation,delete Zo.animationiteration.animation,delete Zo.animationstart.animation),"TransitionEvent"in window||delete Zo.transitionend.transition);function ua(e){if(_c[e])return _c[e];if(!Zo[e])return e;var n=Zo[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in i1)return _c[e]=n[o];return e}var a1=ua("animationend"),l1=ua("animationiteration"),c1=ua("animationstart"),d1=ua("transitionend"),u1=new Map,p1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,n){u1.set(e,n),p(n,[e])}for(var Cc=0;Cc<p1.length;Cc++){var Sc=p1[Cc],z2=Sc.toLowerCase(),F2=Sc[0].toUpperCase()+Sc.slice(1);Lr(z2,"on"+F2)}Lr(a1,"onAnimationEnd"),Lr(l1,"onAnimationIteration"),Lr(c1,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(d1,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B2=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function f1(e,n,o){var a=e.type||"unknown-event";e.currentTarget=o,zg(a,n,void 0,e),e.currentTarget=null}function h1(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],d=a.event;a=a.listeners;e:{var u=void 0;if(n)for(var m=a.length-1;0<=m;m--){var S=a[m],A=S.instance,U=S.currentTarget;if(S=S.listener,A!==u&&d.isPropagationStopped())break e;f1(d,S,U),u=A}else for(m=0;m<a.length;m++){if(S=a[m],A=S.instance,U=S.currentTarget,S=S.listener,A!==u&&d.isPropagationStopped())break e;f1(d,S,U),u=A}}}if(Yi)throw e=rc,Yi=!1,rc=null,e}function lt(e,n){var o=n[$c];o===void 0&&(o=n[$c]=new Set);var a=e+"__bubble";o.has(a)||(m1(n,e,2,!1),o.add(a))}function Mc(e,n,o){var a=0;n&&(a|=4),m1(o,e,a,n)}var pa="_reactListening"+Math.random().toString(36).slice(2);function oi(e){if(!e[pa]){e[pa]=!0,l.forEach(function(o){o!=="selectionchange"&&(B2.has(o)||Mc(o,!1,e),Mc(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[pa]||(n[pa]=!0,Mc("selectionchange",!1,n))}}function m1(e,n,o,a){switch(zp(n)){case 1:var d=e2;break;case 4:d=t2;break;default:d=dc}o=d.bind(null,n,o,e),d=void 0,!nc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(n,o,{capture:!0,passive:d}):e.addEventListener(n,o,!0):d!==void 0?e.addEventListener(n,o,{passive:d}):e.addEventListener(n,o,!1)}function Ic(e,n,o,a,d){var u=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var S=a.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(m===4)for(m=a.return;m!==null;){var A=m.tag;if((A===3||A===4)&&(A=m.stateNode.containerInfo,A===d||A.nodeType===8&&A.parentNode===d))return;m=m.return}for(;S!==null;){if(m=no(S),m===null)return;if(A=m.tag,A===5||A===6){a=u=m;continue e}S=S.parentNode}}a=a.return}wp(function(){var U=u,ne=zs(o),ie=[];e:{var ee=u1.get(e);if(ee!==void 0){var fe=fc,me=e;switch(e){case"keypress":if(ia(o)===0)break e;case"keydown":case"keyup":fe=g2;break;case"focusin":me="focus",fe=gc;break;case"focusout":me="blur",fe=gc;break;case"beforeblur":case"afterblur":fe=gc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=o2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=y2;break;case a1:case l1:case c1:fe=a2;break;case d1:fe=j2;break;case"scroll":fe=n2;break;case"wheel":fe=k2;break;case"copy":case"cut":case"paste":fe=c2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Wp}var ve=(n&4)!==0,St=!ve&&e==="scroll",O=ve?ee!==null?ee+"Capture":null:ee;ve=[];for(var R=U,W;R!==null;){W=R;var ue=W.stateNode;if(W.tag===5&&ue!==null&&(W=ue,O!==null&&(ue=Bs(R,O),ue!=null&&ve.push(si(R,ue,W)))),St)break;R=R.return}0<ve.length&&(ee=new fe(ee,me,null,o,ne),ie.push({event:ee,listeners:ve}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",ee&&o!==Qn&&(me=o.relatedTarget||o.fromElement)&&(no(me)||me[cr]))break e;if((fe||ee)&&(ee=ne.window===ne?ne:(ee=ne.ownerDocument)?ee.defaultView||ee.parentWindow:window,fe?(me=o.relatedTarget||o.toElement,fe=U,me=me?no(me):null,me!==null&&(St=to(me),me!==St||me.tag!==5&&me.tag!==6)&&(me=null)):(fe=null,me=U),fe!==me)){if(ve=Op,ue="onMouseLeave",O="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(ve=Wp,ue="onPointerLeave",O="onPointerEnter",R="pointer"),St=fe==null?ee:Qo(fe),W=me==null?ee:Qo(me),ee=new ve(ue,R+"leave",fe,o,ne),ee.target=St,ee.relatedTarget=W,ue=null,no(ne)===U&&(ve=new ve(O,R+"enter",me,o,ne),ve.target=W,ve.relatedTarget=St,ue=ve),St=ue,fe&&me)t:{for(ve=fe,O=me,R=0,W=ve;W;W=Yo(W))R++;for(W=0,ue=O;ue;ue=Yo(ue))W++;for(;0<R-W;)ve=Yo(ve),R--;for(;0<W-R;)O=Yo(O),W--;for(;R--;){if(ve===O||O!==null&&ve===O.alternate)break t;ve=Yo(ve),O=Yo(O)}ve=null}else ve=null;fe!==null&&g1(ie,ee,fe,ve,!1),me!==null&&St!==null&&g1(ie,St,me,ve,!0)}}e:{if(ee=U?Qo(U):window,fe=ee.nodeName&&ee.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ee.type==="file")var we=L2;else if(Yp(ee))if(Qp)we=$2;else{we=A2;var _e=T2}else(fe=ee.nodeName)&&fe.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(we=E2);if(we&&(we=we(e,U))){Kp(ie,we,o,ne);break e}_e&&_e(e,ee,U),e==="focusout"&&(_e=ee._wrapperState)&&_e.controlled&&ee.type==="number"&&Ye(ee,"number",ee.value)}switch(_e=U?Qo(U):window,e){case"focusin":(Yp(_e)||_e.contentEditable==="true")&&(qo=_e,bc=U,ni=null);break;case"focusout":ni=bc=qo=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,s1(ie,o,ne);break;case"selectionchange":if(D2)break;case"keydown":case"keyup":s1(ie,o,ne)}var Ce;if(vc)e:{switch(e){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Go?qp(e,o)&&(Ie="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Ie="onCompositionStart");Ie&&(Up&&o.locale!=="ko"&&(Go||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Go&&(Ce=Fp()):(Nr=ne,pc="value"in Nr?Nr.value:Nr.textContent,Go=!0)),_e=fa(U,Ie),0<_e.length&&(Ie=new Hp(Ie,e,null,o,ne),ie.push({event:Ie,listeners:_e}),Ce?Ie.data=Ce:(Ce=Zp(o),Ce!==null&&(Ie.data=Ce)))),(Ce=C2?S2(e,o):M2(e,o))&&(U=fa(U,"onBeforeInput"),0<U.length&&(ne=new Hp("onBeforeInput","beforeinput",null,o,ne),ie.push({event:ne,listeners:U}),ne.data=Ce))}h1(ie,n)})}function si(e,n,o){return{instance:e,listener:n,currentTarget:o}}function fa(e,n){for(var o=n+"Capture",a=[];e!==null;){var d=e,u=d.stateNode;d.tag===5&&u!==null&&(d=u,u=Bs(e,o),u!=null&&a.unshift(si(e,u,d)),u=Bs(e,n),u!=null&&a.push(si(e,u,d))),e=e.return}return a}function Yo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function g1(e,n,o,a,d){for(var u=n._reactName,m=[];o!==null&&o!==a;){var S=o,A=S.alternate,U=S.stateNode;if(A!==null&&A===a)break;S.tag===5&&U!==null&&(S=U,d?(A=Bs(o,u),A!=null&&m.unshift(si(o,A,S))):d||(A=Bs(o,u),A!=null&&m.push(si(o,A,S)))),o=o.return}m.length!==0&&e.push({event:n,listeners:m})}var O2=/\r\n?/g,H2=/\u0000|\uFFFD/g;function x1(e){return(typeof e=="string"?e:""+e).replace(O2,`
`).replace(H2,"")}function ha(e,n,o){if(n=x1(n),x1(e)!==n&&o)throw Error(i(425))}function ma(){}var Nc=null,Lc=null;function Tc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,W2=typeof clearTimeout=="function"?clearTimeout:void 0,v1=typeof Promise=="function"?Promise:void 0,U2=typeof queueMicrotask=="function"?queueMicrotask:typeof v1<"u"?function(e){return v1.resolve(null).then(e).catch(V2)}:Ac;function V2(e){setTimeout(function(){throw e})}function Ec(e,n){var o=n,a=0;do{var d=o.nextSibling;if(e.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){e.removeChild(d),Ys(n);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);Ys(n)}function Tr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function y1(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Ko,ii="__reactProps$"+Ko,cr="__reactContainer$"+Ko,$c="__reactEvents$"+Ko,G2="__reactListeners$"+Ko,q2="__reactHandles$"+Ko;function no(e){var n=e[Jn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[cr]||o[Jn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=y1(e);e!==null;){if(o=e[Jn])return o;e=y1(e)}return n}e=o,o=e.parentNode}return null}function ai(e){return e=e[Jn]||e[cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function ga(e){return e[ii]||null}var Pc=[],Xo=-1;function Ar(e){return{current:e}}function ct(e){0>Xo||(e.current=Pc[Xo],Pc[Xo]=null,Xo--)}function at(e,n){Xo++,Pc[Xo]=e.current,e.current=n}var Er={},Wt=Ar(Er),Xt=Ar(!1),ro=Er;function Jo(e,n){var o=e.type.contextTypes;if(!o)return Er;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var d={},u;for(u in o)d[u]=n[u];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(e){return e=e.childContextTypes,e!=null}function xa(){ct(Xt),ct(Wt)}function w1(e,n,o){if(Wt.current!==Er)throw Error(i(168));at(Wt,n),at(Xt,o)}function j1(e,n,o){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in n))throw Error(i(108,ae(e)||"Unknown",d));return P({},o,a)}function va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Er,ro=Wt.current,at(Wt,e),at(Xt,Xt.current),!0}function b1(e,n,o){var a=e.stateNode;if(!a)throw Error(i(169));o?(e=j1(e,n,ro),a.__reactInternalMemoizedMergedChildContext=e,ct(Xt),ct(Wt),at(Wt,e)):ct(Xt),at(Xt,o)}var dr=null,ya=!1,Rc=!1;function k1(e){dr===null?dr=[e]:dr.push(e)}function Z2(e){ya=!0,k1(e)}function $r(){if(!Rc&&dr!==null){Rc=!0;var e=0,n=Qe;try{var o=dr;for(Qe=1;e<o.length;e++){var a=o[e];do a=a(!0);while(a!==null)}dr=null,ya=!1}catch(d){throw dr!==null&&(dr=dr.slice(e+1)),Cp(oc,$r),d}finally{Qe=n,Rc=!1}}return null}var es=[],ts=0,wa=null,ja=0,wn=[],jn=0,oo=null,ur=1,pr="";function so(e,n){es[ts++]=ja,es[ts++]=wa,wa=e,ja=n}function _1(e,n,o){wn[jn++]=ur,wn[jn++]=pr,wn[jn++]=oo,oo=e;var a=ur;e=pr;var d=32-Rn(a)-1;a&=~(1<<d),o+=1;var u=32-Rn(n)+d;if(30<u){var m=d-d%5;u=(a&(1<<m)-1).toString(32),a>>=m,d-=m,ur=1<<32-Rn(n)+d|o<<d|a,pr=u+e}else ur=1<<u|o<<d|a,pr=e}function Dc(e){e.return!==null&&(so(e,1),_1(e,1,0))}function zc(e){for(;e===wa;)wa=es[--ts],es[ts]=null,ja=es[--ts],es[ts]=null;for(;e===oo;)oo=wn[--jn],wn[jn]=null,pr=wn[--jn],wn[jn]=null,ur=wn[--jn],wn[jn]=null}var pn=null,fn=null,ht=!1,zn=null;function C1(e,n){var o=Cn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function S1(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,pn=e,fn=Tr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,pn=e,fn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=oo!==null?{id:ur,overflow:pr}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Cn(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,pn=e,fn=null,!0):!1;default:return!1}}function Fc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bc(e){if(ht){var n=fn;if(n){var o=n;if(!S1(e,n)){if(Fc(e))throw Error(i(418));n=Tr(o.nextSibling);var a=pn;n&&S1(e,n)?C1(a,o):(e.flags=e.flags&-4097|2,ht=!1,pn=e)}}else{if(Fc(e))throw Error(i(418));e.flags=e.flags&-4097|2,ht=!1,pn=e}}}function M1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pn=e}function ba(e){if(e!==pn)return!1;if(!ht)return M1(e),ht=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Tc(e.type,e.memoizedProps)),n&&(n=fn)){if(Fc(e))throw I1(),Error(i(418));for(;n;)C1(e,n),n=Tr(n.nextSibling)}if(M1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){fn=Tr(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}fn=null}}else fn=pn?Tr(e.stateNode.nextSibling):null;return!0}function I1(){for(var e=fn;e;)e=Tr(e.nextSibling)}function ns(){fn=pn=null,ht=!1}function Oc(e){zn===null?zn=[e]:zn.push(e)}var Y2=j.ReactCurrentBatchConfig;function li(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var a=o.stateNode}if(!a)throw Error(i(147,e));var d=a,u=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(m){var S=d.refs;m===null?delete S[u]:S[u]=m},n._stringRef=u,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function ka(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function N1(e){var n=e._init;return n(e._payload)}function L1(e){function n(O,R){if(e){var W=O.deletions;W===null?(O.deletions=[R],O.flags|=16):W.push(R)}}function o(O,R){if(!e)return null;for(;R!==null;)n(O,R),R=R.sibling;return null}function a(O,R){for(O=new Map;R!==null;)R.key!==null?O.set(R.key,R):O.set(R.index,R),R=R.sibling;return O}function d(O,R){return O=Hr(O,R),O.index=0,O.sibling=null,O}function u(O,R,W){return O.index=W,e?(W=O.alternate,W!==null?(W=W.index,W<R?(O.flags|=2,R):W):(O.flags|=2,R)):(O.flags|=1048576,R)}function m(O){return e&&O.alternate===null&&(O.flags|=2),O}function S(O,R,W,ue){return R===null||R.tag!==6?(R=Ad(W,O.mode,ue),R.return=O,R):(R=d(R,W),R.return=O,R)}function A(O,R,W,ue){var we=W.type;return we===z?ne(O,R,W.props.children,ue,W.key):R!==null&&(R.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Z&&N1(we)===R.type)?(ue=d(R,W.props),ue.ref=li(O,R,W),ue.return=O,ue):(ue=qa(W.type,W.key,W.props,null,O.mode,ue),ue.ref=li(O,R,W),ue.return=O,ue)}function U(O,R,W,ue){return R===null||R.tag!==4||R.stateNode.containerInfo!==W.containerInfo||R.stateNode.implementation!==W.implementation?(R=Ed(W,O.mode,ue),R.return=O,R):(R=d(R,W.children||[]),R.return=O,R)}function ne(O,R,W,ue,we){return R===null||R.tag!==7?(R=ho(W,O.mode,ue,we),R.return=O,R):(R=d(R,W),R.return=O,R)}function ie(O,R,W){if(typeof R=="string"&&R!==""||typeof R=="number")return R=Ad(""+R,O.mode,W),R.return=O,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case $:return W=qa(R.type,R.key,R.props,null,O.mode,W),W.ref=li(O,null,R),W.return=O,W;case F:return R=Ed(R,O.mode,W),R.return=O,R;case Z:var ue=R._init;return ie(O,ue(R._payload),W)}if(oe(R)||H(R))return R=ho(R,O.mode,W,null),R.return=O,R;ka(O,R)}return null}function ee(O,R,W,ue){var we=R!==null?R.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return we!==null?null:S(O,R,""+W,ue);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case $:return W.key===we?A(O,R,W,ue):null;case F:return W.key===we?U(O,R,W,ue):null;case Z:return we=W._init,ee(O,R,we(W._payload),ue)}if(oe(W)||H(W))return we!==null?null:ne(O,R,W,ue,null);ka(O,W)}return null}function fe(O,R,W,ue,we){if(typeof ue=="string"&&ue!==""||typeof ue=="number")return O=O.get(W)||null,S(R,O,""+ue,we);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case $:return O=O.get(ue.key===null?W:ue.key)||null,A(R,O,ue,we);case F:return O=O.get(ue.key===null?W:ue.key)||null,U(R,O,ue,we);case Z:var _e=ue._init;return fe(O,R,W,_e(ue._payload),we)}if(oe(ue)||H(ue))return O=O.get(W)||null,ne(R,O,ue,we,null);ka(R,ue)}return null}function me(O,R,W,ue){for(var we=null,_e=null,Ce=R,Ie=R=0,Dt=null;Ce!==null&&Ie<W.length;Ie++){Ce.index>Ie?(Dt=Ce,Ce=null):Dt=Ce.sibling;var Ge=ee(O,Ce,W[Ie],ue);if(Ge===null){Ce===null&&(Ce=Dt);break}e&&Ce&&Ge.alternate===null&&n(O,Ce),R=u(Ge,R,Ie),_e===null?we=Ge:_e.sibling=Ge,_e=Ge,Ce=Dt}if(Ie===W.length)return o(O,Ce),ht&&so(O,Ie),we;if(Ce===null){for(;Ie<W.length;Ie++)Ce=ie(O,W[Ie],ue),Ce!==null&&(R=u(Ce,R,Ie),_e===null?we=Ce:_e.sibling=Ce,_e=Ce);return ht&&so(O,Ie),we}for(Ce=a(O,Ce);Ie<W.length;Ie++)Dt=fe(Ce,O,Ie,W[Ie],ue),Dt!==null&&(e&&Dt.alternate!==null&&Ce.delete(Dt.key===null?Ie:Dt.key),R=u(Dt,R,Ie),_e===null?we=Dt:_e.sibling=Dt,_e=Dt);return e&&Ce.forEach(function(Wr){return n(O,Wr)}),ht&&so(O,Ie),we}function ve(O,R,W,ue){var we=H(W);if(typeof we!="function")throw Error(i(150));if(W=we.call(W),W==null)throw Error(i(151));for(var _e=we=null,Ce=R,Ie=R=0,Dt=null,Ge=W.next();Ce!==null&&!Ge.done;Ie++,Ge=W.next()){Ce.index>Ie?(Dt=Ce,Ce=null):Dt=Ce.sibling;var Wr=ee(O,Ce,Ge.value,ue);if(Wr===null){Ce===null&&(Ce=Dt);break}e&&Ce&&Wr.alternate===null&&n(O,Ce),R=u(Wr,R,Ie),_e===null?we=Wr:_e.sibling=Wr,_e=Wr,Ce=Dt}if(Ge.done)return o(O,Ce),ht&&so(O,Ie),we;if(Ce===null){for(;!Ge.done;Ie++,Ge=W.next())Ge=ie(O,Ge.value,ue),Ge!==null&&(R=u(Ge,R,Ie),_e===null?we=Ge:_e.sibling=Ge,_e=Ge);return ht&&so(O,Ie),we}for(Ce=a(O,Ce);!Ge.done;Ie++,Ge=W.next())Ge=fe(Ce,O,Ie,Ge.value,ue),Ge!==null&&(e&&Ge.alternate!==null&&Ce.delete(Ge.key===null?Ie:Ge.key),R=u(Ge,R,Ie),_e===null?we=Ge:_e.sibling=Ge,_e=Ge);return e&&Ce.forEach(function(Ix){return n(O,Ix)}),ht&&so(O,Ie),we}function St(O,R,W,ue){if(typeof W=="object"&&W!==null&&W.type===z&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case $:e:{for(var we=W.key,_e=R;_e!==null;){if(_e.key===we){if(we=W.type,we===z){if(_e.tag===7){o(O,_e.sibling),R=d(_e,W.props.children),R.return=O,O=R;break e}}else if(_e.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Z&&N1(we)===_e.type){o(O,_e.sibling),R=d(_e,W.props),R.ref=li(O,_e,W),R.return=O,O=R;break e}o(O,_e);break}else n(O,_e);_e=_e.sibling}W.type===z?(R=ho(W.props.children,O.mode,ue,W.key),R.return=O,O=R):(ue=qa(W.type,W.key,W.props,null,O.mode,ue),ue.ref=li(O,R,W),ue.return=O,O=ue)}return m(O);case F:e:{for(_e=W.key;R!==null;){if(R.key===_e)if(R.tag===4&&R.stateNode.containerInfo===W.containerInfo&&R.stateNode.implementation===W.implementation){o(O,R.sibling),R=d(R,W.children||[]),R.return=O,O=R;break e}else{o(O,R);break}else n(O,R);R=R.sibling}R=Ed(W,O.mode,ue),R.return=O,O=R}return m(O);case Z:return _e=W._init,St(O,R,_e(W._payload),ue)}if(oe(W))return me(O,R,W,ue);if(H(W))return ve(O,R,W,ue);ka(O,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,R!==null&&R.tag===6?(o(O,R.sibling),R=d(R,W),R.return=O,O=R):(o(O,R),R=Ad(W,O.mode,ue),R.return=O,O=R),m(O)):o(O,R)}return St}var rs=L1(!0),T1=L1(!1),_a=Ar(null),Ca=null,os=null,Hc=null;function Wc(){Hc=os=Ca=null}function Uc(e){var n=_a.current;ct(_a),e._currentValue=n}function Vc(e,n,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===o)break;e=e.return}}function ss(e,n){Ca=e,Hc=os=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(en=!0),e.firstContext=null)}function bn(e){var n=e._currentValue;if(Hc!==e)if(e={context:e,memoizedValue:n,next:null},os===null){if(Ca===null)throw Error(i(308));os=e,Ca.dependencies={lanes:0,firstContext:e}}else os=os.next=e;return n}var io=null;function Gc(e){io===null?io=[e]:io.push(e)}function A1(e,n,o,a){var d=n.interleaved;return d===null?(o.next=o,Gc(n)):(o.next=d.next,d.next=o),n.interleaved=o,fr(e,a)}function fr(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Pr=!1;function qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E1(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Rr(e,n,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ue&2)!==0){var d=a.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),a.pending=n,fr(e,o)}return d=a.interleaved,d===null?(n.next=n,Gc(a)):(n.next=d.next,d.next=n),a.interleaved=n,fr(e,o)}function Sa(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,o|=a,n.lanes=o,ac(e,o)}}function $1(e,n){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,u=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};u===null?d=u=m:u=u.next=m,o=o.next}while(o!==null);u===null?d=u=n:u=u.next=n}else d=u=n;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:u,shared:a.shared,effects:a.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Ma(e,n,o,a){var d=e.updateQueue;Pr=!1;var u=d.firstBaseUpdate,m=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var A=S,U=A.next;A.next=null,m===null?u=U:m.next=U,m=A;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,S=ne.lastBaseUpdate,S!==m&&(S===null?ne.firstBaseUpdate=U:S.next=U,ne.lastBaseUpdate=A))}if(u!==null){var ie=d.baseState;m=0,ne=U=A=null,S=u;do{var ee=S.lane,fe=S.eventTime;if((a&ee)===ee){ne!==null&&(ne=ne.next={eventTime:fe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var me=e,ve=S;switch(ee=n,fe=o,ve.tag){case 1:if(me=ve.payload,typeof me=="function"){ie=me.call(fe,ie,ee);break e}ie=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ve.payload,ee=typeof me=="function"?me.call(fe,ie,ee):me,ee==null)break e;ie=P({},ie,ee);break e;case 2:Pr=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,ee=d.effects,ee===null?d.effects=[S]:ee.push(S))}else fe={eventTime:fe,lane:ee,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ne===null?(U=ne=fe,A=ie):ne=ne.next=fe,m|=ee;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;ee=S,S=ee.next,ee.next=null,d.lastBaseUpdate=ee,d.shared.pending=null}}while(!0);if(ne===null&&(A=ie),d.baseState=A,d.firstBaseUpdate=U,d.lastBaseUpdate=ne,n=d.shared.interleaved,n!==null){d=n;do m|=d.lane,d=d.next;while(d!==n)}else u===null&&(d.shared.lanes=0);co|=m,e.lanes=m,e.memoizedState=ie}}function P1(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(i(191,d));d.call(a)}}}var ci={},er=Ar(ci),di=Ar(ci),ui=Ar(ci);function ao(e){if(e===ci)throw Error(i(174));return e}function Zc(e,n){switch(at(ui,n),at(di,e),at(er,ci),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:et(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=et(n,e)}ct(er),at(er,n)}function is(){ct(er),ct(di),ct(ui)}function R1(e){ao(ui.current);var n=ao(er.current),o=et(n,e.type);n!==o&&(at(di,e),at(er,o))}function Yc(e){di.current===e&&(ct(er),ct(di))}var vt=Ar(0);function Ia(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Kc=[];function Qc(){for(var e=0;e<Kc.length;e++)Kc[e]._workInProgressVersionPrimary=null;Kc.length=0}var Na=j.ReactCurrentDispatcher,Xc=j.ReactCurrentBatchConfig,lo=0,yt=null,Tt=null,Pt=null,La=!1,pi=!1,fi=0,K2=0;function Ut(){throw Error(i(321))}function Jc(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!Dn(e[o],n[o]))return!1;return!0}function ed(e,n,o,a,d,u){if(lo=u,yt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Na.current=e===null||e.memoizedState===null?ex:tx,e=o(a,d),pi){u=0;do{if(pi=!1,fi=0,25<=u)throw Error(i(301));u+=1,Pt=Tt=null,n.updateQueue=null,Na.current=nx,e=o(a,d)}while(pi)}if(Na.current=Ea,n=Tt!==null&&Tt.next!==null,lo=0,Pt=Tt=yt=null,La=!1,n)throw Error(i(300));return e}function td(){var e=fi!==0;return fi=0,e}function tr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?yt.memoizedState=Pt=e:Pt=Pt.next=e,Pt}function kn(){if(Tt===null){var e=yt.alternate;e=e!==null?e.memoizedState:null}else e=Tt.next;var n=Pt===null?yt.memoizedState:Pt.next;if(n!==null)Pt=n,Tt=e;else{if(e===null)throw Error(i(310));Tt=e,e={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Pt===null?yt.memoizedState=Pt=e:Pt=Pt.next=e}return Pt}function hi(e,n){return typeof n=="function"?n(e):n}function nd(e){var n=kn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var a=Tt,d=a.baseQueue,u=o.pending;if(u!==null){if(d!==null){var m=d.next;d.next=u.next,u.next=m}a.baseQueue=d=u,o.pending=null}if(d!==null){u=d.next,a=a.baseState;var S=m=null,A=null,U=u;do{var ne=U.lane;if((lo&ne)===ne)A!==null&&(A=A.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),a=U.hasEagerState?U.eagerState:e(a,U.action);else{var ie={lane:ne,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};A===null?(S=A=ie,m=a):A=A.next=ie,yt.lanes|=ne,co|=ne}U=U.next}while(U!==null&&U!==u);A===null?m=a:A.next=S,Dn(a,n.memoizedState)||(en=!0),n.memoizedState=a,n.baseState=m,n.baseQueue=A,o.lastRenderedState=a}if(e=o.interleaved,e!==null){d=e;do u=d.lane,yt.lanes|=u,co|=u,d=d.next;while(d!==e)}else d===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function rd(e){var n=kn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var a=o.dispatch,d=o.pending,u=n.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do u=e(u,m.action),m=m.next;while(m!==d);Dn(u,n.memoizedState)||(en=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),o.lastRenderedState=u}return[u,a]}function D1(){}function z1(e,n){var o=yt,a=kn(),d=n(),u=!Dn(a.memoizedState,d);if(u&&(a.memoizedState=d,en=!0),a=a.queue,od(O1.bind(null,o,a,e),[e]),a.getSnapshot!==n||u||Pt!==null&&Pt.memoizedState.tag&1){if(o.flags|=2048,mi(9,B1.bind(null,o,a,d,n),void 0,null),Rt===null)throw Error(i(349));(lo&30)!==0||F1(o,n,d)}return d}function F1(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=yt.updateQueue,n===null?(n={lastEffect:null,stores:null},yt.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function B1(e,n,o,a){n.value=o,n.getSnapshot=a,H1(n)&&W1(e)}function O1(e,n,o){return o(function(){H1(n)&&W1(e)})}function H1(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!Dn(e,o)}catch{return!0}}function W1(e){var n=fr(e,1);n!==null&&Hn(n,e,1,-1)}function U1(e){var n=tr();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hi,lastRenderedState:e},n.queue=e,e=e.dispatch=J2.bind(null,yt,e),[n.memoizedState,e]}function mi(e,n,o,a){return e={tag:e,create:n,destroy:o,deps:a,next:null},n=yt.updateQueue,n===null?(n={lastEffect:null,stores:null},yt.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,n.lastEffect=e)),e}function V1(){return kn().memoizedState}function Ta(e,n,o,a){var d=tr();yt.flags|=e,d.memoizedState=mi(1|n,o,void 0,a===void 0?null:a)}function Aa(e,n,o,a){var d=kn();a=a===void 0?null:a;var u=void 0;if(Tt!==null){var m=Tt.memoizedState;if(u=m.destroy,a!==null&&Jc(a,m.deps)){d.memoizedState=mi(n,o,u,a);return}}yt.flags|=e,d.memoizedState=mi(1|n,o,u,a)}function G1(e,n){return Ta(8390656,8,e,n)}function od(e,n){return Aa(2048,8,e,n)}function q1(e,n){return Aa(4,2,e,n)}function Z1(e,n){return Aa(4,4,e,n)}function Y1(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function K1(e,n,o){return o=o!=null?o.concat([e]):null,Aa(4,4,Y1.bind(null,n,e),o)}function sd(){}function Q1(e,n){var o=kn();n=n===void 0?null:n;var a=o.memoizedState;return a!==null&&n!==null&&Jc(n,a[1])?a[0]:(o.memoizedState=[e,n],e)}function X1(e,n){var o=kn();n=n===void 0?null:n;var a=o.memoizedState;return a!==null&&n!==null&&Jc(n,a[1])?a[0]:(e=e(),o.memoizedState=[e,n],e)}function J1(e,n,o){return(lo&21)===0?(e.baseState&&(e.baseState=!1,en=!0),e.memoizedState=o):(Dn(o,n)||(o=Np(),yt.lanes|=o,co|=o,e.baseState=!0),n)}function Q2(e,n){var o=Qe;Qe=o!==0&&4>o?o:4,e(!0);var a=Xc.transition;Xc.transition={};try{e(!1),n()}finally{Qe=o,Xc.transition=a}}function ef(){return kn().memoizedState}function X2(e,n,o){var a=Br(e);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},tf(e))nf(n,o);else if(o=A1(e,n,o,a),o!==null){var d=Kt();Hn(o,e,a,d),rf(o,n,a)}}function J2(e,n,o){var a=Br(e),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(tf(e))nf(n,d);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var m=n.lastRenderedState,S=u(m,o);if(d.hasEagerState=!0,d.eagerState=S,Dn(S,m)){var A=n.interleaved;A===null?(d.next=d,Gc(n)):(d.next=A.next,A.next=d),n.interleaved=d;return}}catch{}finally{}o=A1(e,n,d,a),o!==null&&(d=Kt(),Hn(o,e,a,d),rf(o,n,a))}}function tf(e){var n=e.alternate;return e===yt||n!==null&&n===yt}function nf(e,n){pi=La=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function rf(e,n,o){if((o&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,o|=a,n.lanes=o,ac(e,o)}}var Ea={readContext:bn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},ex={readContext:bn,useCallback:function(e,n){return tr().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:G1,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,Ta(4194308,4,Y1.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Ta(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ta(4,2,e,n)},useMemo:function(e,n){var o=tr();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var a=tr();return n=o!==void 0?o(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=X2.bind(null,yt,e),[a.memoizedState,e]},useRef:function(e){var n=tr();return e={current:e},n.memoizedState=e},useState:U1,useDebugValue:sd,useDeferredValue:function(e){return tr().memoizedState=e},useTransition:function(){var e=U1(!1),n=e[0];return e=Q2.bind(null,e[1]),tr().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var a=yt,d=tr();if(ht){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),Rt===null)throw Error(i(349));(lo&30)!==0||F1(a,n,o)}d.memoizedState=o;var u={value:o,getSnapshot:n};return d.queue=u,G1(O1.bind(null,a,u,e),[e]),a.flags|=2048,mi(9,B1.bind(null,a,u,o,n),void 0,null),o},useId:function(){var e=tr(),n=Rt.identifierPrefix;if(ht){var o=pr,a=ur;o=(a&~(1<<32-Rn(a)-1)).toString(32)+o,n=":"+n+"R"+o,o=fi++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=K2++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tx={readContext:bn,useCallback:Q1,useContext:bn,useEffect:od,useImperativeHandle:K1,useInsertionEffect:q1,useLayoutEffect:Z1,useMemo:X1,useReducer:nd,useRef:V1,useState:function(){return nd(hi)},useDebugValue:sd,useDeferredValue:function(e){var n=kn();return J1(n,Tt.memoizedState,e)},useTransition:function(){var e=nd(hi)[0],n=kn().memoizedState;return[e,n]},useMutableSource:D1,useSyncExternalStore:z1,useId:ef,unstable_isNewReconciler:!1},nx={readContext:bn,useCallback:Q1,useContext:bn,useEffect:od,useImperativeHandle:K1,useInsertionEffect:q1,useLayoutEffect:Z1,useMemo:X1,useReducer:rd,useRef:V1,useState:function(){return rd(hi)},useDebugValue:sd,useDeferredValue:function(e){var n=kn();return Tt===null?n.memoizedState=e:J1(n,Tt.memoizedState,e)},useTransition:function(){var e=rd(hi)[0],n=kn().memoizedState;return[e,n]},useMutableSource:D1,useSyncExternalStore:z1,useId:ef,unstable_isNewReconciler:!1};function Fn(e,n){if(e&&e.defaultProps){n=P({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function id(e,n,o,a){n=e.memoizedState,o=o(a,n),o=o==null?n:P({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var $a={isMounted:function(e){return(e=e._reactInternals)?to(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var a=Kt(),d=Br(e),u=hr(a,d);u.payload=n,o!=null&&(u.callback=o),n=Rr(e,u,d),n!==null&&(Hn(n,e,d,a),Sa(n,e,d))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var a=Kt(),d=Br(e),u=hr(a,d);u.tag=1,u.payload=n,o!=null&&(u.callback=o),n=Rr(e,u,d),n!==null&&(Hn(n,e,d,a),Sa(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=Kt(),a=Br(e),d=hr(o,a);d.tag=2,n!=null&&(d.callback=n),n=Rr(e,d,a),n!==null&&(Hn(n,e,a,o),Sa(n,e,a))}};function of(e,n,o,a,d,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,m):n.prototype&&n.prototype.isPureReactComponent?!ti(o,a)||!ti(d,u):!0}function sf(e,n,o){var a=!1,d=Er,u=n.contextType;return typeof u=="object"&&u!==null?u=bn(u):(d=Jt(n)?ro:Wt.current,a=n.contextTypes,u=(a=a!=null)?Jo(e,d):Er),n=new n(o,u),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=$a,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=u),n}function af(e,n,o,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,a),n.state!==e&&$a.enqueueReplaceState(n,n.state,null)}function ad(e,n,o,a){var d=e.stateNode;d.props=o,d.state=e.memoizedState,d.refs={},qc(e);var u=n.contextType;typeof u=="object"&&u!==null?d.context=bn(u):(u=Jt(n)?ro:Wt.current,d.context=Jo(e,u)),d.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(id(e,n,u,o),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&$a.enqueueReplaceState(d,d.state,null),Ma(e,o,d,a),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function as(e,n){try{var o="",a=n;do o+=G(a),a=a.return;while(a);var d=o}catch(u){d=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:n,stack:d,digest:null}}function ld(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function cd(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var rx=typeof WeakMap=="function"?WeakMap:Map;function lf(e,n,o){o=hr(-1,o),o.tag=3,o.payload={element:null};var a=n.value;return o.callback=function(){Oa||(Oa=!0,_d=a),cd(e,n)},o}function cf(e,n,o){o=hr(-1,o),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var d=n.value;o.payload=function(){return a(d)},o.callback=function(){cd(e,n)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(o.callback=function(){cd(e,n),typeof a!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})}),o}function df(e,n,o){var a=e.pingCache;if(a===null){a=e.pingCache=new rx;var d=new Set;a.set(n,d)}else d=a.get(n),d===void 0&&(d=new Set,a.set(n,d));d.has(o)||(d.add(o),e=xx.bind(null,e,n,o),n.then(e,e))}function uf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function pf(e,n,o,a,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=hr(-1,1),n.tag=2,Rr(o,n,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var ox=j.ReactCurrentOwner,en=!1;function Yt(e,n,o,a){n.child=e===null?T1(n,null,o,a):rs(n,e.child,o,a)}function ff(e,n,o,a,d){o=o.render;var u=n.ref;return ss(n,d),a=ed(e,n,o,a,u,d),o=td(),e!==null&&!en?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,mr(e,n,d)):(ht&&o&&Dc(n),n.flags|=1,Yt(e,n,a,d),n.child)}function hf(e,n,o,a,d){if(e===null){var u=o.type;return typeof u=="function"&&!Td(u)&&u.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=u,mf(e,n,u,a,d)):(e=qa(o.type,null,a,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,(e.lanes&d)===0){var m=u.memoizedProps;if(o=o.compare,o=o!==null?o:ti,o(m,a)&&e.ref===n.ref)return mr(e,n,d)}return n.flags|=1,e=Hr(u,a),e.ref=n.ref,e.return=n,n.child=e}function mf(e,n,o,a,d){if(e!==null){var u=e.memoizedProps;if(ti(u,a)&&e.ref===n.ref)if(en=!1,n.pendingProps=a=u,(e.lanes&d)!==0)(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,mr(e,n,d)}return dd(e,n,o,a,d)}function gf(e,n,o){var a=n.pendingProps,d=a.children,u=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(cs,hn),hn|=o;else{if((o&1073741824)===0)return e=u!==null?u.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,at(cs,hn),hn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=u!==null?u.baseLanes:o,at(cs,hn),hn|=a}else u!==null?(a=u.baseLanes|o,n.memoizedState=null):a=o,at(cs,hn),hn|=a;return Yt(e,n,d,o),n.child}function xf(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function dd(e,n,o,a,d){var u=Jt(o)?ro:Wt.current;return u=Jo(n,u),ss(n,d),o=ed(e,n,o,a,u,d),a=td(),e!==null&&!en?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,mr(e,n,d)):(ht&&a&&Dc(n),n.flags|=1,Yt(e,n,o,d),n.child)}function vf(e,n,o,a,d){if(Jt(o)){var u=!0;va(n)}else u=!1;if(ss(n,d),n.stateNode===null)Ra(e,n),sf(n,o,a),ad(n,o,a,d),a=!0;else if(e===null){var m=n.stateNode,S=n.memoizedProps;m.props=S;var A=m.context,U=o.contextType;typeof U=="object"&&U!==null?U=bn(U):(U=Jt(o)?ro:Wt.current,U=Jo(n,U));var ne=o.getDerivedStateFromProps,ie=typeof ne=="function"||typeof m.getSnapshotBeforeUpdate=="function";ie||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==a||A!==U)&&af(n,m,a,U),Pr=!1;var ee=n.memoizedState;m.state=ee,Ma(n,a,m,d),A=n.memoizedState,S!==a||ee!==A||Xt.current||Pr?(typeof ne=="function"&&(id(n,o,ne,a),A=n.memoizedState),(S=Pr||of(n,o,S,a,ee,A,U))?(ie||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=A),m.props=a,m.state=A,m.context=U,a=S):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{m=n.stateNode,E1(e,n),S=n.memoizedProps,U=n.type===n.elementType?S:Fn(n.type,S),m.props=U,ie=n.pendingProps,ee=m.context,A=o.contextType,typeof A=="object"&&A!==null?A=bn(A):(A=Jt(o)?ro:Wt.current,A=Jo(n,A));var fe=o.getDerivedStateFromProps;(ne=typeof fe=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==ie||ee!==A)&&af(n,m,a,A),Pr=!1,ee=n.memoizedState,m.state=ee,Ma(n,a,m,d);var me=n.memoizedState;S!==ie||ee!==me||Xt.current||Pr?(typeof fe=="function"&&(id(n,o,fe,a),me=n.memoizedState),(U=Pr||of(n,o,U,a,ee,me,A)||!1)?(ne||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,me,A),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,me,A)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=me),m.props=a,m.state=me,m.context=A,a=U):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),a=!1)}return ud(e,n,o,a,u,d)}function ud(e,n,o,a,d,u){xf(e,n);var m=(n.flags&128)!==0;if(!a&&!m)return d&&b1(n,o,!1),mr(e,n,u);a=n.stateNode,ox.current=n;var S=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&m?(n.child=rs(n,e.child,null,u),n.child=rs(n,null,S,u)):Yt(e,n,S,u),n.memoizedState=a.state,d&&b1(n,o,!0),n.child}function yf(e){var n=e.stateNode;n.pendingContext?w1(e,n.pendingContext,n.pendingContext!==n.context):n.context&&w1(e,n.context,!1),Zc(e,n.containerInfo)}function wf(e,n,o,a,d){return ns(),Oc(d),n.flags|=256,Yt(e,n,o,a),n.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function fd(e){return{baseLanes:e,cachePool:null,transitions:null}}function jf(e,n,o){var a=n.pendingProps,d=vt.current,u=!1,m=(n.flags&128)!==0,S;if((S=m)||(S=e!==null&&e.memoizedState===null?!1:(d&2)!==0),S?(u=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),at(vt,d&1),e===null)return Bc(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(m=a.children,e=a.fallback,u?(a=n.mode,u=n.child,m={mode:"hidden",children:m},(a&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=m):u=Za(m,a,0,null),e=ho(e,a,o,null),u.return=n,e.return=n,u.sibling=e,n.child=u,n.child.memoizedState=fd(o),n.memoizedState=pd,e):hd(n,m));if(d=e.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return sx(e,n,m,a,S,d,o);if(u){u=a.fallback,m=n.mode,d=e.child,S=d.sibling;var A={mode:"hidden",children:a.children};return(m&1)===0&&n.child!==d?(a=n.child,a.childLanes=0,a.pendingProps=A,n.deletions=null):(a=Hr(d,A),a.subtreeFlags=d.subtreeFlags&14680064),S!==null?u=Hr(S,u):(u=ho(u,m,o,null),u.flags|=2),u.return=n,a.return=n,a.sibling=u,n.child=a,a=u,u=n.child,m=e.child.memoizedState,m=m===null?fd(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},u.memoizedState=m,u.childLanes=e.childLanes&~o,n.memoizedState=pd,a}return u=e.child,e=u.sibling,a=Hr(u,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=o),a.return=n,a.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=a,n.memoizedState=null,a}function hd(e,n){return n=Za({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Pa(e,n,o,a){return a!==null&&Oc(a),rs(n,e.child,null,o),e=hd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sx(e,n,o,a,d,u,m){if(o)return n.flags&256?(n.flags&=-257,a=ld(Error(i(422))),Pa(e,n,m,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(u=a.fallback,d=n.mode,a=Za({mode:"visible",children:a.children},d,0,null),u=ho(u,d,m,null),u.flags|=2,a.return=n,u.return=n,a.sibling=u,n.child=a,(n.mode&1)!==0&&rs(n,e.child,null,m),n.child.memoizedState=fd(m),n.memoizedState=pd,u);if((n.mode&1)===0)return Pa(e,n,m,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var S=a.dgst;return a=S,u=Error(i(419)),a=ld(u,a,void 0),Pa(e,n,m,a)}if(S=(m&e.childLanes)!==0,en||S){if(a=Rt,a!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|m))!==0?0:d,d!==0&&d!==u.retryLane&&(u.retryLane=d,fr(e,d),Hn(a,e,d,-1))}return Ld(),a=ld(Error(i(421))),Pa(e,n,m,a)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=vx.bind(null,e),d._reactRetry=n,null):(e=u.treeContext,fn=Tr(d.nextSibling),pn=n,ht=!0,zn=null,e!==null&&(wn[jn++]=ur,wn[jn++]=pr,wn[jn++]=oo,ur=e.id,pr=e.overflow,oo=n),n=hd(n,a.children),n.flags|=4096,n)}function bf(e,n,o){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Vc(e.return,n,o)}function md(e,n,o,a,d){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=o,u.tailMode=d)}function kf(e,n,o){var a=n.pendingProps,d=a.revealOrder,u=a.tail;if(Yt(e,n,a.children,o),a=vt.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bf(e,o,n);else if(e.tag===19)bf(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(at(vt,a),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(o=n.child,d=null;o!==null;)e=o.alternate,e!==null&&Ia(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=n.child,n.child=null):(d=o.sibling,o.sibling=null),md(n,!1,d,o,u);break;case"backwards":for(o=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Ia(e)===null){n.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}md(n,!0,o,null,u);break;case"together":md(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ra(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function mr(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),co|=n.lanes,(o&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=Hr(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=Hr(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function ix(e,n,o){switch(n.tag){case 3:yf(n),ns();break;case 5:R1(n);break;case 1:Jt(n.type)&&va(n);break;case 4:Zc(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,d=n.memoizedProps.value;at(_a,a._currentValue),a._currentValue=d;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(at(vt,vt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?jf(e,n,o):(at(vt,vt.current&1),e=mr(e,n,o),e!==null?e.sibling:null);at(vt,vt.current&1);break;case 19:if(a=(o&n.childLanes)!==0,(e.flags&128)!==0){if(a)return kf(e,n,o);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),at(vt,vt.current),a)break;return null;case 22:case 23:return n.lanes=0,gf(e,n,o)}return mr(e,n,o)}var _f,gd,Cf,Sf;_f=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},gd=function(){},Cf=function(e,n,o,a){var d=e.memoizedProps;if(d!==a){e=n.stateNode,ao(er.current);var u=null;switch(o){case"input":d=Be(e,d),a=Be(e,a),u=[];break;case"select":d=P({},d,{value:void 0}),a=P({},a,{value:void 0}),u=[];break;case"textarea":d=Ae(e,d),a=Ae(e,a),u=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ma)}xt(o,a);var m;o=null;for(U in d)if(!a.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(m in S)S.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(c.hasOwnProperty(U)?u||(u=[]):(u=u||[]).push(U,null));for(U in a){var A=a[U];if(S=d!=null?d[U]:void 0,a.hasOwnProperty(U)&&A!==S&&(A!=null||S!=null))if(U==="style")if(S){for(m in S)!S.hasOwnProperty(m)||A&&A.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in A)A.hasOwnProperty(m)&&S[m]!==A[m]&&(o||(o={}),o[m]=A[m])}else o||(u||(u=[]),u.push(U,o)),o=A;else U==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,S=S?S.__html:void 0,A!=null&&S!==A&&(u=u||[]).push(U,A)):U==="children"?typeof A!="string"&&typeof A!="number"||(u=u||[]).push(U,""+A):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(c.hasOwnProperty(U)?(A!=null&&U==="onScroll"&&lt("scroll",e),u||S===A||(u=[])):(u=u||[]).push(U,A))}o&&(u=u||[]).push("style",o);var U=u;(n.updateQueue=U)&&(n.flags|=4)}},Sf=function(e,n,o,a){o!==a&&(n.flags|=4)};function gi(e,n){if(!ht)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Vt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(n)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=o,n}function ax(e,n,o){var a=n.pendingProps;switch(zc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(n),null;case 1:return Jt(n.type)&&xa(),Vt(n),null;case 3:return a=n.stateNode,is(),ct(Xt),ct(Wt),Qc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ba(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zn!==null&&(Md(zn),zn=null))),gd(e,n),Vt(n),null;case 5:Yc(n);var d=ao(ui.current);if(o=n.type,e!==null&&n.stateNode!=null)Cf(e,n,o,a,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(i(166));return Vt(n),null}if(e=ao(er.current),ba(n)){a=n.stateNode,o=n.type;var u=n.memoizedProps;switch(a[Jn]=n,a[ii]=u,e=(n.mode&1)!==0,o){case"dialog":lt("cancel",a),lt("close",a);break;case"iframe":case"object":case"embed":lt("load",a);break;case"video":case"audio":for(d=0;d<ri.length;d++)lt(ri[d],a);break;case"source":lt("error",a);break;case"img":case"image":case"link":lt("error",a),lt("load",a);break;case"details":lt("toggle",a);break;case"input":Ke(a,u),lt("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!u.multiple},lt("invalid",a);break;case"textarea":ye(a,u),lt("invalid",a)}xt(o,u),d=null;for(var m in u)if(u.hasOwnProperty(m)){var S=u[m];m==="children"?typeof S=="string"?a.textContent!==S&&(u.suppressHydrationWarning!==!0&&ha(a.textContent,S,e),d=["children",S]):typeof S=="number"&&a.textContent!==""+S&&(u.suppressHydrationWarning!==!0&&ha(a.textContent,S,e),d=["children",""+S]):c.hasOwnProperty(m)&&S!=null&&m==="onScroll"&&lt("scroll",a)}switch(o){case"input":xe(a),ft(a,u,!0);break;case"textarea":xe(a),ke(a);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(a.onclick=ma)}a=d,n.updateQueue=a,a!==null&&(n.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Je(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=m.createElement(o,{is:a.is}):(e=m.createElement(o),o==="select"&&(m=e,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):e=m.createElementNS(e,o),e[Jn]=n,e[ii]=a,_f(e,n,!1,!1),n.stateNode=e;e:{switch(m=$t(o,a),o){case"dialog":lt("cancel",e),lt("close",e),d=a;break;case"iframe":case"object":case"embed":lt("load",e),d=a;break;case"video":case"audio":for(d=0;d<ri.length;d++)lt(ri[d],e);d=a;break;case"source":lt("error",e),d=a;break;case"img":case"image":case"link":lt("error",e),lt("load",e),d=a;break;case"details":lt("toggle",e),d=a;break;case"input":Ke(e,a),d=Be(e,a),lt("invalid",e);break;case"option":d=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},d=P({},a,{value:void 0}),lt("invalid",e);break;case"textarea":ye(e,a),d=Ae(e,a),lt("invalid",e);break;default:d=a}xt(o,d),S=d;for(u in S)if(S.hasOwnProperty(u)){var A=S[u];u==="style"?Le(e,A):u==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Ft(e,A)):u==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&lr(e,A):typeof A=="number"&&lr(e,""+A):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?A!=null&&u==="onScroll"&&lt("scroll",e):A!=null&&k(e,u,A,m))}switch(o){case"input":xe(e),ft(e,a,!1);break;case"textarea":xe(e),ke(e);break;case"option":a.value!=null&&e.setAttribute("value",""+be(a.value));break;case"select":e.multiple=!!a.multiple,u=a.value,u!=null?de(e,!!a.multiple,u,!1):a.defaultValue!=null&&de(e,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=ma)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Vt(n),null;case 6:if(e&&n.stateNode!=null)Sf(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(i(166));if(o=ao(ui.current),ao(er.current),ba(n)){if(a=n.stateNode,o=n.memoizedProps,a[Jn]=n,(u=a.nodeValue!==o)&&(e=pn,e!==null))switch(e.tag){case 3:ha(a.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ha(a.nodeValue,o,(e.mode&1)!==0)}u&&(n.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Jn]=n,n.stateNode=a}return Vt(n),null;case 13:if(ct(vt),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ht&&fn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)I1(),ns(),n.flags|=98560,u=!1;else if(u=ba(n),a!==null&&a.dehydrated!==null){if(e===null){if(!u)throw Error(i(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(i(317));u[Jn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Vt(n),u=!1}else zn!==null&&(Md(zn),zn=null),u=!0;if(!u)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(vt.current&1)!==0?At===0&&(At=3):Ld())),n.updateQueue!==null&&(n.flags|=4),Vt(n),null);case 4:return is(),gd(e,n),e===null&&oi(n.stateNode.containerInfo),Vt(n),null;case 10:return Uc(n.type._context),Vt(n),null;case 17:return Jt(n.type)&&xa(),Vt(n),null;case 19:if(ct(vt),u=n.memoizedState,u===null)return Vt(n),null;if(a=(n.flags&128)!==0,m=u.rendering,m===null)if(a)gi(u,!1);else{if(At!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(m=Ia(e),m!==null){for(n.flags|=128,gi(u,!1),a=m.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=o,o=n.child;o!==null;)u=o,e=a,u.flags&=14680066,m=u.alternate,m===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=m.childLanes,u.lanes=m.lanes,u.child=m.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=m.memoizedProps,u.memoizedState=m.memoizedState,u.updateQueue=m.updateQueue,u.type=m.type,e=m.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return at(vt,vt.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ct()>ds&&(n.flags|=128,a=!0,gi(u,!1),n.lanes=4194304)}else{if(!a)if(e=Ia(m),e!==null){if(n.flags|=128,a=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),gi(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!ht)return Vt(n),null}else 2*Ct()-u.renderingStartTime>ds&&o!==1073741824&&(n.flags|=128,a=!0,gi(u,!1),n.lanes=4194304);u.isBackwards?(m.sibling=n.child,n.child=m):(o=u.last,o!==null?o.sibling=m:n.child=m,u.last=m)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ct(),n.sibling=null,o=vt.current,at(vt,a?o&1|2:o&1),n):(Vt(n),null);case 22:case 23:return Nd(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(hn&1073741824)!==0&&(Vt(n),n.subtreeFlags&6&&(n.flags|=8192)):Vt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function lx(e,n){switch(zc(n),n.tag){case 1:return Jt(n.type)&&xa(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return is(),ct(Xt),ct(Wt),Qc(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Yc(n),null;case 13:if(ct(vt),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ct(vt),null;case 4:return is(),null;case 10:return Uc(n.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var Da=!1,Gt=!1,cx=typeof WeakSet=="function"?WeakSet:Set,he=null;function ls(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){_t(e,n,a)}else o.current=null}function xd(e,n,o){try{o()}catch(a){_t(e,n,a)}}var Mf=!1;function dx(e,n){if(Nc=ra,e=o1(),jc(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{o.nodeType,u.nodeType}catch{o=null;break e}var m=0,S=-1,A=-1,U=0,ne=0,ie=e,ee=null;t:for(;;){for(var fe;ie!==o||d!==0&&ie.nodeType!==3||(S=m+d),ie!==u||a!==0&&ie.nodeType!==3||(A=m+a),ie.nodeType===3&&(m+=ie.nodeValue.length),(fe=ie.firstChild)!==null;)ee=ie,ie=fe;for(;;){if(ie===e)break t;if(ee===o&&++U===d&&(S=m),ee===u&&++ne===a&&(A=m),(fe=ie.nextSibling)!==null)break;ie=ee,ee=ie.parentNode}ie=fe}o=S===-1||A===-1?null:{start:S,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(Lc={focusedElem:e,selectionRange:o},ra=!1,he=n;he!==null;)if(n=he,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,he=e;else for(;he!==null;){n=he;try{var me=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ve=me.memoizedProps,St=me.memoizedState,O=n.stateNode,R=O.getSnapshotBeforeUpdate(n.elementType===n.type?ve:Fn(n.type,ve),St);O.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var W=n.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ue){_t(n,n.return,ue)}if(e=n.sibling,e!==null){e.return=n.return,he=e;break}he=n.return}return me=Mf,Mf=!1,me}function xi(e,n,o){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&e)===e){var u=d.destroy;d.destroy=void 0,u!==void 0&&xd(n,o,u)}d=d.next}while(d!==a)}}function za(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==n)}}function vd(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function If(e){var n=e.alternate;n!==null&&(e.alternate=null,If(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Jn],delete n[ii],delete n[$c],delete n[G2],delete n[q2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nf(e){return e.tag===5||e.tag===3||e.tag===4}function Lf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yd(e,n,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=ma));else if(a!==4&&(e=e.child,e!==null))for(yd(e,n,o),e=e.sibling;e!==null;)yd(e,n,o),e=e.sibling}function wd(e,n,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(wd(e,n,o),e=e.sibling;e!==null;)wd(e,n,o),e=e.sibling}var Bt=null,Bn=!1;function Dr(e,n,o){for(o=o.child;o!==null;)Tf(e,n,o),o=o.sibling}function Tf(e,n,o){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Qi,o)}catch{}switch(o.tag){case 5:Gt||ls(o,n);case 6:var a=Bt,d=Bn;Bt=null,Dr(e,n,o),Bt=a,Bn=d,Bt!==null&&(Bn?(e=Bt,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Bt.removeChild(o.stateNode));break;case 18:Bt!==null&&(Bn?(e=Bt,o=o.stateNode,e.nodeType===8?Ec(e.parentNode,o):e.nodeType===1&&Ec(e,o),Ys(e)):Ec(Bt,o.stateNode));break;case 4:a=Bt,d=Bn,Bt=o.stateNode.containerInfo,Bn=!0,Dr(e,n,o),Bt=a,Bn=d;break;case 0:case 11:case 14:case 15:if(!Gt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var u=d,m=u.destroy;u=u.tag,m!==void 0&&((u&2)!==0||(u&4)!==0)&&xd(o,n,m),d=d.next}while(d!==a)}Dr(e,n,o);break;case 1:if(!Gt&&(ls(o,n),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(S){_t(o,n,S)}Dr(e,n,o);break;case 21:Dr(e,n,o);break;case 22:o.mode&1?(Gt=(a=Gt)||o.memoizedState!==null,Dr(e,n,o),Gt=a):Dr(e,n,o);break;default:Dr(e,n,o)}}function Af(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new cx),n.forEach(function(a){var d=yx.bind(null,e,a);o.has(a)||(o.add(a),a.then(d,d))})}}function On(e,n){var o=n.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var u=e,m=n,S=m;e:for(;S!==null;){switch(S.tag){case 5:Bt=S.stateNode,Bn=!1;break e;case 3:Bt=S.stateNode.containerInfo,Bn=!0;break e;case 4:Bt=S.stateNode.containerInfo,Bn=!0;break e}S=S.return}if(Bt===null)throw Error(i(160));Tf(u,m,d),Bt=null,Bn=!1;var A=d.alternate;A!==null&&(A.return=null),d.return=null}catch(U){_t(d,n,U)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ef(n,e),n=n.sibling}function Ef(e,n){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(On(n,e),nr(e),a&4){try{xi(3,e,e.return),za(3,e)}catch(ve){_t(e,e.return,ve)}try{xi(5,e,e.return)}catch(ve){_t(e,e.return,ve)}}break;case 1:On(n,e),nr(e),a&512&&o!==null&&ls(o,o.return);break;case 5:if(On(n,e),nr(e),a&512&&o!==null&&ls(o,o.return),e.flags&32){var d=e.stateNode;try{lr(d,"")}catch(ve){_t(e,e.return,ve)}}if(a&4&&(d=e.stateNode,d!=null)){var u=e.memoizedProps,m=o!==null?o.memoizedProps:u,S=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{S==="input"&&u.type==="radio"&&u.name!=null&&ut(d,u),$t(S,m);var U=$t(S,u);for(m=0;m<A.length;m+=2){var ne=A[m],ie=A[m+1];ne==="style"?Le(d,ie):ne==="dangerouslySetInnerHTML"?Ft(d,ie):ne==="children"?lr(d,ie):k(d,ne,ie,U)}switch(S){case"input":pt(d,u);break;case"textarea":je(d,u);break;case"select":var ee=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!u.multiple;var fe=u.value;fe!=null?de(d,!!u.multiple,fe,!1):ee!==!!u.multiple&&(u.defaultValue!=null?de(d,!!u.multiple,u.defaultValue,!0):de(d,!!u.multiple,u.multiple?[]:"",!1))}d[ii]=u}catch(ve){_t(e,e.return,ve)}}break;case 6:if(On(n,e),nr(e),a&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,u=e.memoizedProps;try{d.nodeValue=u}catch(ve){_t(e,e.return,ve)}}break;case 3:if(On(n,e),nr(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Ys(n.containerInfo)}catch(ve){_t(e,e.return,ve)}break;case 4:On(n,e),nr(e);break;case 13:On(n,e),nr(e),d=e.child,d.flags&8192&&(u=d.memoizedState!==null,d.stateNode.isHidden=u,!u||d.alternate!==null&&d.alternate.memoizedState!==null||(kd=Ct())),a&4&&Af(e);break;case 22:if(ne=o!==null&&o.memoizedState!==null,e.mode&1?(Gt=(U=Gt)||ne,On(n,e),Gt=U):On(n,e),nr(e),a&8192){if(U=e.memoizedState!==null,(e.stateNode.isHidden=U)&&!ne&&(e.mode&1)!==0)for(he=e,ne=e.child;ne!==null;){for(ie=he=ne;he!==null;){switch(ee=he,fe=ee.child,ee.tag){case 0:case 11:case 14:case 15:xi(4,ee,ee.return);break;case 1:ls(ee,ee.return);var me=ee.stateNode;if(typeof me.componentWillUnmount=="function"){a=ee,o=ee.return;try{n=a,me.props=n.memoizedProps,me.state=n.memoizedState,me.componentWillUnmount()}catch(ve){_t(a,o,ve)}}break;case 5:ls(ee,ee.return);break;case 22:if(ee.memoizedState!==null){Rf(ie);continue}}fe!==null?(fe.return=ee,he=fe):Rf(ie)}ne=ne.sibling}e:for(ne=null,ie=e;;){if(ie.tag===5){if(ne===null){ne=ie;try{d=ie.stateNode,U?(u=d.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(S=ie.stateNode,A=ie.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null,S.style.display=Oo("display",m))}catch(ve){_t(e,e.return,ve)}}}else if(ie.tag===6){if(ne===null)try{ie.stateNode.nodeValue=U?"":ie.memoizedProps}catch(ve){_t(e,e.return,ve)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===e)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===e)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===e)break e;ne===ie&&(ne=null),ie=ie.return}ne===ie&&(ne=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:On(n,e),nr(e),a&4&&Af(e);break;case 21:break;default:On(n,e),nr(e)}}function nr(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(Nf(o)){var a=o;break e}o=o.return}throw Error(i(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(lr(d,""),a.flags&=-33);var u=Lf(e);wd(e,u,d);break;case 3:case 4:var m=a.stateNode.containerInfo,S=Lf(e);yd(e,S,m);break;default:throw Error(i(161))}}catch(A){_t(e,e.return,A)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ux(e,n,o){he=e,$f(e)}function $f(e,n,o){for(var a=(e.mode&1)!==0;he!==null;){var d=he,u=d.child;if(d.tag===22&&a){var m=d.memoizedState!==null||Da;if(!m){var S=d.alternate,A=S!==null&&S.memoizedState!==null||Gt;S=Da;var U=Gt;if(Da=m,(Gt=A)&&!U)for(he=d;he!==null;)m=he,A=m.child,m.tag===22&&m.memoizedState!==null?Df(d):A!==null?(A.return=m,he=A):Df(d);for(;u!==null;)he=u,$f(u),u=u.sibling;he=d,Da=S,Gt=U}Pf(e)}else(d.subtreeFlags&8772)!==0&&u!==null?(u.return=d,he=u):Pf(e)}}function Pf(e){for(;he!==null;){var n=he;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Gt||za(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Gt)if(o===null)a.componentDidMount();else{var d=n.elementType===n.type?o.memoizedProps:Fn(n.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&P1(n,u,a);break;case 3:var m=n.updateQueue;if(m!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}P1(n,m,o)}break;case 5:var S=n.stateNode;if(o===null&&n.flags&4){o=S;var A=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var U=n.alternate;if(U!==null){var ne=U.memoizedState;if(ne!==null){var ie=ne.dehydrated;ie!==null&&Ys(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Gt||n.flags&512&&vd(n)}catch(ee){_t(n,n.return,ee)}}if(n===e){he=null;break}if(o=n.sibling,o!==null){o.return=n.return,he=o;break}he=n.return}}function Rf(e){for(;he!==null;){var n=he;if(n===e){he=null;break}var o=n.sibling;if(o!==null){o.return=n.return,he=o;break}he=n.return}}function Df(e){for(;he!==null;){var n=he;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{za(4,n)}catch(A){_t(n,o,A)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var d=n.return;try{a.componentDidMount()}catch(A){_t(n,d,A)}}var u=n.return;try{vd(n)}catch(A){_t(n,u,A)}break;case 5:var m=n.return;try{vd(n)}catch(A){_t(n,m,A)}}}catch(A){_t(n,n.return,A)}if(n===e){he=null;break}var S=n.sibling;if(S!==null){S.return=n.return,he=S;break}he=n.return}}var px=Math.ceil,Fa=j.ReactCurrentDispatcher,jd=j.ReactCurrentOwner,_n=j.ReactCurrentBatchConfig,Ue=0,Rt=null,It=null,Ot=0,hn=0,cs=Ar(0),At=0,vi=null,co=0,Ba=0,bd=0,yi=null,tn=null,kd=0,ds=1/0,gr=null,Oa=!1,_d=null,zr=null,Ha=!1,Fr=null,Wa=0,wi=0,Cd=null,Ua=-1,Va=0;function Kt(){return(Ue&6)!==0?Ct():Ua!==-1?Ua:Ua=Ct()}function Br(e){return(e.mode&1)===0?1:(Ue&2)!==0&&Ot!==0?Ot&-Ot:Y2.transition!==null?(Va===0&&(Va=Np()),Va):(e=Qe,e!==0||(e=window.event,e=e===void 0?16:zp(e.type)),e)}function Hn(e,n,o,a){if(50<wi)throw wi=0,Cd=null,Error(i(185));Us(e,o,a),((Ue&2)===0||e!==Rt)&&(e===Rt&&((Ue&2)===0&&(Ba|=o),At===4&&Or(e,Ot)),nn(e,a),o===1&&Ue===0&&(n.mode&1)===0&&(ds=Ct()+500,ya&&$r()))}function nn(e,n){var o=e.callbackNode;Yg(e,n);var a=ea(e,e===Rt?Ot:0);if(a===0)o!==null&&Sp(o),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(o!=null&&Sp(o),n===1)e.tag===0?Z2(Ff.bind(null,e)):k1(Ff.bind(null,e)),U2(function(){(Ue&6)===0&&$r()}),o=null;else{switch(Lp(a)){case 1:o=oc;break;case 4:o=Mp;break;case 16:o=Ki;break;case 536870912:o=Ip;break;default:o=Ki}o=qf(o,zf.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function zf(e,n){if(Ua=-1,Va=0,(Ue&6)!==0)throw Error(i(327));var o=e.callbackNode;if(us()&&e.callbackNode!==o)return null;var a=ea(e,e===Rt?Ot:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=Ga(e,a);else{n=a;var d=Ue;Ue|=2;var u=Of();(Rt!==e||Ot!==n)&&(gr=null,ds=Ct()+500,po(e,n));do try{mx();break}catch(S){Bf(e,S)}while(!0);Wc(),Fa.current=u,Ue=d,It!==null?n=0:(Rt=null,Ot=0,n=At)}if(n!==0){if(n===2&&(d=sc(e),d!==0&&(a=d,n=Sd(e,d))),n===1)throw o=vi,po(e,0),Or(e,a),nn(e,Ct()),o;if(n===6)Or(e,a);else{if(d=e.current.alternate,(a&30)===0&&!fx(d)&&(n=Ga(e,a),n===2&&(u=sc(e),u!==0&&(a=u,n=Sd(e,u))),n===1))throw o=vi,po(e,0),Or(e,a),nn(e,Ct()),o;switch(e.finishedWork=d,e.finishedLanes=a,n){case 0:case 1:throw Error(i(345));case 2:fo(e,tn,gr);break;case 3:if(Or(e,a),(a&130023424)===a&&(n=kd+500-Ct(),10<n)){if(ea(e,0)!==0)break;if(d=e.suspendedLanes,(d&a)!==a){Kt(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Ac(fo.bind(null,e,tn,gr),n);break}fo(e,tn,gr);break;case 4:if(Or(e,a),(a&4194240)===a)break;for(n=e.eventTimes,d=-1;0<a;){var m=31-Rn(a);u=1<<m,m=n[m],m>d&&(d=m),a&=~u}if(a=d,a=Ct()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*px(a/1960))-a,10<a){e.timeoutHandle=Ac(fo.bind(null,e,tn,gr),a);break}fo(e,tn,gr);break;case 5:fo(e,tn,gr);break;default:throw Error(i(329))}}}return nn(e,Ct()),e.callbackNode===o?zf.bind(null,e):null}function Sd(e,n){var o=yi;return e.current.memoizedState.isDehydrated&&(po(e,n).flags|=256),e=Ga(e,n),e!==2&&(n=tn,tn=o,n!==null&&Md(n)),e}function Md(e){tn===null?tn=e:tn.push.apply(tn,e)}function fx(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],u=d.getSnapshot;d=d.value;try{if(!Dn(u(),d))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Or(e,n){for(n&=~bd,n&=~Ba,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-Rn(n),a=1<<o;e[o]=-1,n&=~a}}function Ff(e){if((Ue&6)!==0)throw Error(i(327));us();var n=ea(e,0);if((n&1)===0)return nn(e,Ct()),null;var o=Ga(e,n);if(e.tag!==0&&o===2){var a=sc(e);a!==0&&(n=a,o=Sd(e,a))}if(o===1)throw o=vi,po(e,0),Or(e,n),nn(e,Ct()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,fo(e,tn,gr),nn(e,Ct()),null}function Id(e,n){var o=Ue;Ue|=1;try{return e(n)}finally{Ue=o,Ue===0&&(ds=Ct()+500,ya&&$r())}}function uo(e){Fr!==null&&Fr.tag===0&&(Ue&6)===0&&us();var n=Ue;Ue|=1;var o=_n.transition,a=Qe;try{if(_n.transition=null,Qe=1,e)return e()}finally{Qe=a,_n.transition=o,Ue=n,(Ue&6)===0&&$r()}}function Nd(){hn=cs.current,ct(cs)}function po(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,W2(o)),It!==null)for(o=It.return;o!==null;){var a=o;switch(zc(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&xa();break;case 3:is(),ct(Xt),ct(Wt),Qc();break;case 5:Yc(a);break;case 4:is();break;case 13:ct(vt);break;case 19:ct(vt);break;case 10:Uc(a.type._context);break;case 22:case 23:Nd()}o=o.return}if(Rt=e,It=e=Hr(e.current,null),Ot=hn=n,At=0,vi=null,bd=Ba=co=0,tn=yi=null,io!==null){for(n=0;n<io.length;n++)if(o=io[n],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,u=o.pending;if(u!==null){var m=u.next;u.next=d,a.next=m}o.pending=a}io=null}return e}function Bf(e,n){do{var o=It;try{if(Wc(),Na.current=Ea,La){for(var a=yt.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}La=!1}if(lo=0,Pt=Tt=yt=null,pi=!1,fi=0,jd.current=null,o===null||o.return===null){At=1,vi=n,It=null;break}e:{var u=e,m=o.return,S=o,A=n;if(n=Ot,S.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var U=A,ne=S,ie=ne.tag;if((ne.mode&1)===0&&(ie===0||ie===11||ie===15)){var ee=ne.alternate;ee?(ne.updateQueue=ee.updateQueue,ne.memoizedState=ee.memoizedState,ne.lanes=ee.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var fe=uf(m);if(fe!==null){fe.flags&=-257,pf(fe,m,S,u,n),fe.mode&1&&df(u,U,n),n=fe,A=U;var me=n.updateQueue;if(me===null){var ve=new Set;ve.add(A),n.updateQueue=ve}else me.add(A);break e}else{if((n&1)===0){df(u,U,n),Ld();break e}A=Error(i(426))}}else if(ht&&S.mode&1){var St=uf(m);if(St!==null){(St.flags&65536)===0&&(St.flags|=256),pf(St,m,S,u,n),Oc(as(A,S));break e}}u=A=as(A,S),At!==4&&(At=2),yi===null?yi=[u]:yi.push(u),u=m;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var O=lf(u,A,n);$1(u,O);break e;case 1:S=A;var R=u.type,W=u.stateNode;if((u.flags&128)===0&&(typeof R.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(zr===null||!zr.has(W)))){u.flags|=65536,n&=-n,u.lanes|=n;var ue=cf(u,S,n);$1(u,ue);break e}}u=u.return}while(u!==null)}Wf(o)}catch(we){n=we,It===o&&o!==null&&(It=o=o.return);continue}break}while(!0)}function Of(){var e=Fa.current;return Fa.current=Ea,e===null?Ea:e}function Ld(){(At===0||At===3||At===2)&&(At=4),Rt===null||(co&268435455)===0&&(Ba&268435455)===0||Or(Rt,Ot)}function Ga(e,n){var o=Ue;Ue|=2;var a=Of();(Rt!==e||Ot!==n)&&(gr=null,po(e,n));do try{hx();break}catch(d){Bf(e,d)}while(!0);if(Wc(),Ue=o,Fa.current=a,It!==null)throw Error(i(261));return Rt=null,Ot=0,At}function hx(){for(;It!==null;)Hf(It)}function mx(){for(;It!==null&&!Bg();)Hf(It)}function Hf(e){var n=Gf(e.alternate,e,hn);e.memoizedProps=e.pendingProps,n===null?Wf(e):It=n,jd.current=null}function Wf(e){var n=e;do{var o=n.alternate;if(e=n.return,(n.flags&32768)===0){if(o=ax(o,n,hn),o!==null){It=o;return}}else{if(o=lx(o,n),o!==null){o.flags&=32767,It=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{At=6,It=null;return}}if(n=n.sibling,n!==null){It=n;return}It=n=e}while(n!==null);At===0&&(At=5)}function fo(e,n,o){var a=Qe,d=_n.transition;try{_n.transition=null,Qe=1,gx(e,n,o,a)}finally{_n.transition=d,Qe=a}return null}function gx(e,n,o,a){do us();while(Fr!==null);if((Ue&6)!==0)throw Error(i(327));o=e.finishedWork;var d=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var u=o.lanes|o.childLanes;if(Kg(e,u),e===Rt&&(It=Rt=null,Ot=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ha||(Ha=!0,qf(Ki,function(){return us(),null})),u=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||u){u=_n.transition,_n.transition=null;var m=Qe;Qe=1;var S=Ue;Ue|=4,jd.current=null,dx(e,o),Ef(o,e),R2(Lc),ra=!!Nc,Lc=Nc=null,e.current=o,ux(o),Og(),Ue=S,Qe=m,_n.transition=u}else e.current=o;if(Ha&&(Ha=!1,Fr=e,Wa=d),u=e.pendingLanes,u===0&&(zr=null),Ug(o.stateNode),nn(e,Ct()),n!==null)for(a=e.onRecoverableError,o=0;o<n.length;o++)d=n[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(Oa)throw Oa=!1,e=_d,_d=null,e;return(Wa&1)!==0&&e.tag!==0&&us(),u=e.pendingLanes,(u&1)!==0?e===Cd?wi++:(wi=0,Cd=e):wi=0,$r(),null}function us(){if(Fr!==null){var e=Lp(Wa),n=_n.transition,o=Qe;try{if(_n.transition=null,Qe=16>e?16:e,Fr===null)var a=!1;else{if(e=Fr,Fr=null,Wa=0,(Ue&6)!==0)throw Error(i(331));var d=Ue;for(Ue|=4,he=e.current;he!==null;){var u=he,m=u.child;if((he.flags&16)!==0){var S=u.deletions;if(S!==null){for(var A=0;A<S.length;A++){var U=S[A];for(he=U;he!==null;){var ne=he;switch(ne.tag){case 0:case 11:case 15:xi(8,ne,u)}var ie=ne.child;if(ie!==null)ie.return=ne,he=ie;else for(;he!==null;){ne=he;var ee=ne.sibling,fe=ne.return;if(If(ne),ne===U){he=null;break}if(ee!==null){ee.return=fe,he=ee;break}he=fe}}}var me=u.alternate;if(me!==null){var ve=me.child;if(ve!==null){me.child=null;do{var St=ve.sibling;ve.sibling=null,ve=St}while(ve!==null)}}he=u}}if((u.subtreeFlags&2064)!==0&&m!==null)m.return=u,he=m;else e:for(;he!==null;){if(u=he,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:xi(9,u,u.return)}var O=u.sibling;if(O!==null){O.return=u.return,he=O;break e}he=u.return}}var R=e.current;for(he=R;he!==null;){m=he;var W=m.child;if((m.subtreeFlags&2064)!==0&&W!==null)W.return=m,he=W;else e:for(m=R;he!==null;){if(S=he,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:za(9,S)}}catch(we){_t(S,S.return,we)}if(S===m){he=null;break e}var ue=S.sibling;if(ue!==null){ue.return=S.return,he=ue;break e}he=S.return}}if(Ue=d,$r(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Qi,e)}catch{}a=!0}return a}finally{Qe=o,_n.transition=n}}return!1}function Uf(e,n,o){n=as(o,n),n=lf(e,n,1),e=Rr(e,n,1),n=Kt(),e!==null&&(Us(e,1,n),nn(e,n))}function _t(e,n,o){if(e.tag===3)Uf(e,e,o);else for(;n!==null;){if(n.tag===3){Uf(n,e,o);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zr===null||!zr.has(a))){e=as(o,e),e=cf(n,e,1),n=Rr(n,e,1),e=Kt(),n!==null&&(Us(n,1,e),nn(n,e));break}}n=n.return}}function xx(e,n,o){var a=e.pingCache;a!==null&&a.delete(n),n=Kt(),e.pingedLanes|=e.suspendedLanes&o,Rt===e&&(Ot&o)===o&&(At===4||At===3&&(Ot&130023424)===Ot&&500>Ct()-kd?po(e,0):bd|=o),nn(e,n)}function Vf(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ji,Ji<<=1,(Ji&130023424)===0&&(Ji=4194304)));var o=Kt();e=fr(e,n),e!==null&&(Us(e,n,o),nn(e,o))}function vx(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Vf(e,o)}function yx(e,n){var o=0;switch(e.tag){case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(n),Vf(e,o)}var Gf;Gf=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Xt.current)en=!0;else{if((e.lanes&o)===0&&(n.flags&128)===0)return en=!1,ix(e,n,o);en=(e.flags&131072)!==0}else en=!1,ht&&(n.flags&1048576)!==0&&_1(n,ja,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Ra(e,n),e=n.pendingProps;var d=Jo(n,Wt.current);ss(n,o),d=ed(null,n,a,e,d,o);var u=td();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Jt(a)?(u=!0,va(n)):u=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,qc(n),d.updater=$a,n.stateNode=d,d._reactInternals=n,ad(n,a,e,o),n=ud(null,n,a,!0,u,o)):(n.tag=0,ht&&u&&Dc(n),Yt(null,n,d,o),n=n.child),n;case 16:a=n.elementType;e:{switch(Ra(e,n),e=n.pendingProps,d=a._init,a=d(a._payload),n.type=a,d=n.tag=jx(a),e=Fn(a,e),d){case 0:n=dd(null,n,a,e,o);break e;case 1:n=vf(null,n,a,e,o);break e;case 11:n=ff(null,n,a,e,o);break e;case 14:n=hf(null,n,a,Fn(a.type,e),o);break e}throw Error(i(306,a,""))}return n;case 0:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Fn(a,d),dd(e,n,a,d,o);case 1:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Fn(a,d),vf(e,n,a,d,o);case 3:e:{if(yf(n),e===null)throw Error(i(387));a=n.pendingProps,u=n.memoizedState,d=u.element,E1(e,n),Ma(n,a,null,o);var m=n.memoizedState;if(a=m.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){d=as(Error(i(423)),n),n=wf(e,n,a,o,d);break e}else if(a!==d){d=as(Error(i(424)),n),n=wf(e,n,a,o,d);break e}else for(fn=Tr(n.stateNode.containerInfo.firstChild),pn=n,ht=!0,zn=null,o=T1(n,null,a,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ns(),a===d){n=mr(e,n,o);break e}Yt(e,n,a,o)}n=n.child}return n;case 5:return R1(n),e===null&&Bc(n),a=n.type,d=n.pendingProps,u=e!==null?e.memoizedProps:null,m=d.children,Tc(a,d)?m=null:u!==null&&Tc(a,u)&&(n.flags|=32),xf(e,n),Yt(e,n,m,o),n.child;case 6:return e===null&&Bc(n),null;case 13:return jf(e,n,o);case 4:return Zc(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=rs(n,null,a,o):Yt(e,n,a,o),n.child;case 11:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Fn(a,d),ff(e,n,a,d,o);case 7:return Yt(e,n,n.pendingProps,o),n.child;case 8:return Yt(e,n,n.pendingProps.children,o),n.child;case 12:return Yt(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(a=n.type._context,d=n.pendingProps,u=n.memoizedProps,m=d.value,at(_a,a._currentValue),a._currentValue=m,u!==null)if(Dn(u.value,m)){if(u.children===d.children&&!Xt.current){n=mr(e,n,o);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var S=u.dependencies;if(S!==null){m=u.child;for(var A=S.firstContext;A!==null;){if(A.context===a){if(u.tag===1){A=hr(-1,o&-o),A.tag=2;var U=u.updateQueue;if(U!==null){U=U.shared;var ne=U.pending;ne===null?A.next=A:(A.next=ne.next,ne.next=A),U.pending=A}}u.lanes|=o,A=u.alternate,A!==null&&(A.lanes|=o),Vc(u.return,o,n),S.lanes|=o;break}A=A.next}}else if(u.tag===10)m=u.type===n.type?null:u.child;else if(u.tag===18){if(m=u.return,m===null)throw Error(i(341));m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Vc(m,o,n),m=u.sibling}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===n){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}Yt(e,n,d.children,o),n=n.child}return n;case 9:return d=n.type,a=n.pendingProps.children,ss(n,o),d=bn(d),a=a(d),n.flags|=1,Yt(e,n,a,o),n.child;case 14:return a=n.type,d=Fn(a,n.pendingProps),d=Fn(a.type,d),hf(e,n,a,d,o);case 15:return mf(e,n,n.type,n.pendingProps,o);case 17:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Fn(a,d),Ra(e,n),n.tag=1,Jt(a)?(e=!0,va(n)):e=!1,ss(n,o),sf(n,a,d),ad(n,a,d,o),ud(null,n,a,!0,e,o);case 19:return kf(e,n,o);case 22:return gf(e,n,o)}throw Error(i(156,n.tag))};function qf(e,n){return Cp(e,n)}function wx(e,n,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,n,o,a){return new wx(e,n,o,a)}function Td(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jx(e){if(typeof e=="function")return Td(e)?1:0;if(e!=null){if(e=e.$$typeof,e===q)return 11;if(e===Y)return 14}return 2}function Hr(e,n){var o=e.alternate;return o===null?(o=Cn(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function qa(e,n,o,a,d,u){var m=2;if(a=e,typeof e=="function")Td(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case z:return ho(o.children,d,u,n);case B:m=8,d|=8;break;case le:return e=Cn(12,o,n,d|2),e.elementType=le,e.lanes=u,e;case Q:return e=Cn(13,o,n,d),e.elementType=Q,e.lanes=u,e;case ge:return e=Cn(19,o,n,d),e.elementType=ge,e.lanes=u,e;case se:return Za(o,d,u,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:m=10;break e;case X:m=9;break e;case q:m=11;break e;case Y:m=14;break e;case Z:m=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=Cn(m,o,n,d),n.elementType=e,n.type=a,n.lanes=u,n}function ho(e,n,o,a){return e=Cn(7,e,a,n),e.lanes=o,e}function Za(e,n,o,a){return e=Cn(22,e,a,n),e.elementType=se,e.lanes=o,e.stateNode={isHidden:!1},e}function Ad(e,n,o){return e=Cn(6,e,null,n),e.lanes=o,e}function Ed(e,n,o){return n=Cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function bx(e,n,o,a,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $d(e,n,o,a,d,u,m,S,A){return e=new bx(e,n,o,S,A),n===1?(n=1,u===!0&&(n|=8)):n=0,u=Cn(3,null,null,n),e.current=u,u.stateNode=e,u.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(u),e}function kx(e,n,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:a==null?null:""+a,children:e,containerInfo:n,implementation:o}}function Zf(e){if(!e)return Er;e=e._reactInternals;e:{if(to(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Jt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Jt(o))return j1(e,o,n)}return n}function Yf(e,n,o,a,d,u,m,S,A){return e=$d(o,a,!0,e,d,u,m,S,A),e.context=Zf(null),o=e.current,a=Kt(),d=Br(o),u=hr(a,d),u.callback=n??null,Rr(o,u,d),e.current.lanes=d,Us(e,d,a),nn(e,a),e}function Ya(e,n,o,a){var d=n.current,u=Kt(),m=Br(d);return o=Zf(o),n.context===null?n.context=o:n.pendingContext=o,n=hr(u,m),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=Rr(d,n,m),e!==null&&(Hn(e,d,m,u),Sa(e,d,m)),m}function Ka(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function Pd(e,n){Kf(e,n),(e=e.alternate)&&Kf(e,n)}function _x(){return null}var Qf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rd(e){this._internalRoot=e}Qa.prototype.render=Rd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));Ya(e,n,null,null)},Qa.prototype.unmount=Rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;uo(function(){Ya(null,e,null,null)}),n[cr]=null}};function Qa(e){this._internalRoot=e}Qa.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ep();e={blockedOn:null,target:e,priority:n};for(var o=0;o<Ir.length&&n!==0&&n<Ir[o].priority;o++);Ir.splice(o,0,e),o===0&&Rp(e)}};function Dd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xf(){}function Cx(e,n,o,a,d){if(d){if(typeof a=="function"){var u=a;a=function(){var U=Ka(m);u.call(U)}}var m=Yf(n,a,e,0,null,!1,!1,"",Xf);return e._reactRootContainer=m,e[cr]=m.current,oi(e.nodeType===8?e.parentNode:e),uo(),m}for(;d=e.lastChild;)e.removeChild(d);if(typeof a=="function"){var S=a;a=function(){var U=Ka(A);S.call(U)}}var A=$d(e,0,!1,null,null,!1,!1,"",Xf);return e._reactRootContainer=A,e[cr]=A.current,oi(e.nodeType===8?e.parentNode:e),uo(function(){Ya(n,A,o,a)}),A}function Ja(e,n,o,a,d){var u=o._reactRootContainer;if(u){var m=u;if(typeof d=="function"){var S=d;d=function(){var A=Ka(m);S.call(A)}}Ya(n,m,e,d)}else m=Cx(o,n,e,d,a);return Ka(m)}Tp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=Ws(n.pendingLanes);o!==0&&(ac(n,o|1),nn(n,Ct()),(Ue&6)===0&&(ds=Ct()+500,$r()))}break;case 13:uo(function(){var a=fr(e,1);if(a!==null){var d=Kt();Hn(a,e,1,d)}}),Pd(e,1)}},lc=function(e){if(e.tag===13){var n=fr(e,134217728);if(n!==null){var o=Kt();Hn(n,e,134217728,o)}Pd(e,134217728)}},Ap=function(e){if(e.tag===13){var n=Br(e),o=fr(e,n);if(o!==null){var a=Kt();Hn(o,e,n,a)}Pd(e,n)}},Ep=function(){return Qe},$p=function(e,n){var o=Qe;try{return Qe=e,n()}finally{Qe=o}},Fs=function(e,n,o){switch(n){case"input":if(pt(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var a=o[n];if(a!==e&&a.form===e.form){var d=ga(a);if(!d)throw Error(i(90));Se(a),pt(a,d)}}}break;case"textarea":je(e,o);break;case"select":n=o.value,n!=null&&de(e,!!o.multiple,n,!1)}},vp=Id,yp=uo;var Sx={usingClientEntryPoint:!1,Events:[ai,Qo,ga,gp,xp,Id]},ji={findFiberByHostInstance:no,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mx={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kp(e),e===null?null:e.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||_x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Qi=el.inject(Mx),Xn=el}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx,rn.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(n))throw Error(i(200));return kx(e,n,null,o)},rn.createRoot=function(e,n){if(!Dd(e))throw Error(i(299));var o=!1,a="",d=Qf;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=$d(e,1,!1,null,null,o,!1,a,d),e[cr]=n.current,oi(e.nodeType===8?e.parentNode:e),new Rd(n)},rn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=kp(n),e=e===null?null:e.stateNode,e},rn.flushSync=function(e){return uo(e)},rn.hydrate=function(e,n,o){if(!Xa(n))throw Error(i(200));return Ja(null,e,n,!0,o)},rn.hydrateRoot=function(e,n,o){if(!Dd(e))throw Error(i(405));var a=o!=null&&o.hydratedSources||null,d=!1,u="",m=Qf;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(u=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),n=Yf(n,null,e,1,o??null,d,!1,u,m),e[cr]=n.current,oi(e),a)for(e=0;e<a.length;e++)o=a[e],d=o._getVersion,d=d(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,d]:n.mutableSourceEagerHydrationData.push(o,d);return new Qa(n)},rn.render=function(e,n,o){if(!Xa(n))throw Error(i(200));return Ja(null,e,n,!1,o)},rn.unmountComponentAtNode=function(e){if(!Xa(e))throw Error(i(40));return e._reactRootContainer?(uo(function(){Ja(null,null,e,!1,function(){e._reactRootContainer=null,e[cr]=null})}),!0):!1},rn.unstable_batchedUpdates=Id,rn.unstable_renderSubtreeIntoContainer=function(e,n,o,a){if(!Xa(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Ja(e,n,o,!1,a)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var ih;function G0(){if(ih)return Bd.exports;ih=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Bd.exports=$x(),Bd.exports}var ah;function Px(){if(ah)return tl;ah=1;var r=G0();return tl.createRoot=r.createRoot,tl.hydrateRoot=r.hydrateRoot,tl}var Rx=Px();const Dx=V0(Rx);function q0(r){var s,i,l="";if(typeof r=="string"||typeof r=="number")l+=r;else if(typeof r=="object")if(Array.isArray(r)){var c=r.length;for(s=0;s<c;s++)r[s]&&(i=q0(r[s]))&&(l&&(l+=" "),l+=i)}else for(i in r)r[i]&&(l&&(l+=" "),l+=i);return l}function K(){for(var r,s,i=0,l="",c=arguments.length;i<c;i++)(r=arguments[i])&&(s=q0(r))&&(l&&(l+=" "),l+=s);return l}const zl=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M12 5V19M5 12H19",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};zl.displayName="PlusIcon";const zx="_root_ly4d2_13",Fx="_sm_ly4d2_75",Bx="_md_ly4d2_81",Ox="_lg_ly4d2_87",Hx="_horizontal_ly4d2_100",Wx="_alignStart_ly4d2_114",Ux="_vertical_ly4d2_118",Vx="_inner_ly4d2_124",Gx="_iconSlot_ly4d2_139",qx="_label_ly4d2_156",mo={root:zx,sm:Fx,md:Bx,lg:Ox,horizontal:Hx,alignStart:Wx,vertical:Ux,inner:Vx,iconSlot:Gx,label:qx};function lh(r){return typeof r=="number"?`${r}px`:r}const Zx=x.forwardRef(({size:r="md",layout:s="horizontal",align:i="center",label:l="Add",hideLabel:c=!1,icon:p,height:f,borderRadius:v,className:g,style:w,disabled:y,type:_="button",...b},L)=>{const E=p??t.jsx(zl,{size:"100%"}),I={};return f!==void 0&&(I["--area-min-height"]=lh(f)),v!==void 0&&(I["--area-radius"]=lh(v)),t.jsx("button",{ref:L,type:_,className:K(mo.root,mo[r],mo[s],i==="start"&&mo.alignStart,g),disabled:y,"data-size":r,"data-layout":s,style:{...I,...w},...b,children:t.jsxs("span",{className:mo.inner,children:[t.jsx("span",{className:mo.iconSlot,"aria-hidden":"true",children:E}),!c&&l&&t.jsx("span",{className:mo.label,children:l})]})})});Zx.displayName="AreaButton";const Yx="_root_uqz3u_7",Kx={root:Yx},Zn=x.forwardRef(({as:r="span",className:s,children:i,...l},c)=>t.jsx(r,{ref:c,className:K(Kx.root,s),...l,children:i}));Zn.displayName="Eyebrow";const Qx="_root_1brpy_12",Xx="_ghost_1brpy_27",Jx="_path_1brpy_32",ki={root:Qx,"ai-spin":"_ai-spin_1brpy_1",ghost:Xx,"ai-morph":"_ai-morph_1brpy_1",path:Jx,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},ev={xs:16,sm:24,md:32,lg:48,xl:64},tv={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},ch="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",nl=r=>r==="inverse"||r==="inverse-light",nv=r=>r==="stroke"||r==="stroke-light",Ui=x.forwardRef(({size:r="md",variant:s="gradient-fill",state:i="loading",className:l,style:c,"aria-label":p,...f},v)=>{const g=x.useId().replace(/[^a-z0-9]/gi,""),w=`aigrad-${g}`,y=`aiglow-${g}`,_=typeof r=="string",b=_?ev[r]:r,L=_?tv[r]:b<=16?1.75:b<=24?1.5:b<=32?1.25:1.1,E=s==="gradient-fill"?`url(#${w})`:nl(s)?"currentColor":"none",I=nl(s)?"none":nv(s)?"currentColor":`url(#${w})`,N="currentColor",C=s!=="stroke"&&s!=="stroke-light"&&!nl(s);return t.jsxs("svg",{ref:v,width:b,height:b,viewBox:"0 0 24 24",fill:"none",className:K(ki.root,ki[`variant-${s}`],ki[`state-${i}`],l),style:c,"data-state":i,"aria-label":p??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...f,children:[!nl(s)&&t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:w,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[t.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),t.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),t.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),t.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[t.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),t.jsxs("feMerge",{children:[t.jsx("feMergeNode",{in:"blur"}),t.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),t.jsx("path",{d:ch,stroke:N,strokeWidth:L*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:ki.ghost}),t.jsx("path",{d:ch,fill:E,stroke:I==="none"?void 0:I,strokeWidth:I==="none"?void 0:L,strokeLinecap:"round",strokeLinejoin:"round",filter:C?`url(#${y})`:void 0,className:ki.path})]})});Ui.displayName="AILoader";const rv="_root_10act_14",ov="_hovered_10act_68",sv="_loading_10act_69",iv="_sm_10act_90",av="_md_10act_98",lv="_lg_10act_106",cv="_dark_10act_116",dv="_icon_10act_122",ps={root:rv,hovered:ov,loading:sv,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:iv,md:av,lg:lv,dark:cv,icon:dv},dh={sm:12,md:14,lg:18};function uv({size:r,light:s}){return t.jsxs("svg",{width:r,height:r,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!s&&t.jsx("defs",{children:t.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#8C4FE2"}),t.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),t.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),t.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:s?"white":"url(#ai-core-btn-sparkle)"})]})}const Z0=x.forwardRef(({size:r="md",dark:s,loading:i,className:l,onMouseEnter:c,onMouseLeave:p,...f},v)=>{const[g,w]=x.useState(!1);return t.jsx("button",{ref:v,className:K(ps.root,ps[r],s&&ps.dark,i?ps.loading:g&&ps.hovered,l),"aria-busy":i||void 0,onMouseEnter:y=>{w(!0),c==null||c(y)},onMouseLeave:y=>{w(!1),p==null||p(y)},...f,children:t.jsx("span",{className:ps.icon,children:i?t.jsx(Ui,{size:dh[r],variant:s?"inverse-light":"gradient-fill"}):t.jsx(uv,{size:dh[r],light:s})})})});Z0.displayName="AICoreButton";const pv="_root_1qx4u_9",fv="_star_1qx4u_34",Wd={root:pv,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:fv},hv="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Y0=x.forwardRef(({size:r="sm",className:s,...i},l)=>t.jsx("span",{ref:l,"data-size":r,"aria-hidden":"true",className:K(Wd.root,Wd[`size-${r}`],s),...i,children:t.jsx("svg",{viewBox:"0 0 24 24",className:Wd.star,fill:"none","aria-hidden":"true",children:t.jsx("path",{d:hv,fill:"currentColor"})})}));Y0.displayName="AIAvatar";const mv="_shell_i6bl5_21",gv="_wrapper_i6bl5_46",xv="_card_i6bl5_51",vv="_cardClip_i6bl5_80",yv="_textarea_i6bl5_146",wv="_actions_i6bl5_189",ys={shell:mv,wrapper:gv,card:xv,cardClip:vv,textarea:yv,actions:wv},K0=x.forwardRef(({className:r,children:s,...i},l)=>t.jsx("div",{ref:l,className:K(ys.shell,r),...i,children:s}));K0.displayName="AIComposer";function jv(r,s){typeof r=="function"?r(s):r&&(r.current=s)}const Q0=x.forwardRef(({value:r,onChange:s,onSubmit:i,maxRows:l=5,placeholder:c="Ask AI anything…",className:p,onKeyDown:f,disabled:v,children:g,style:w,...y},_)=>{const b=x.useRef(null);x.useEffect(()=>{const C=b.current;C&&(C.style.height="auto",C.style.height=`${C.scrollHeight}px`)},[r]);const L=x.useCallback(C=>s(C.target.value),[s]),E=x.useCallback(C=>{f==null||f(C),!C.defaultPrevented&&C.key==="Enter"&&!C.shiftKey&&i&&(C.preventDefault(),i())},[f,i]),I=x.useCallback(C=>{b.current=C,jv(_,C)},[_]),N={...w??{},"--ai-composer-max-rows":l};return t.jsx("div",{className:K(ys.wrapper,p),children:t.jsx("div",{className:ys.card,children:t.jsxs("div",{className:ys.cardClip,children:[t.jsx("textarea",{...y,ref:I,className:ys.textarea,rows:1,value:r,onChange:L,onKeyDown:E,placeholder:c,disabled:v,style:N}),g!=null&&t.jsx("div",{className:ys.actions,children:g})]})})})});Q0.displayName="AIComposerInput";const bv="_fadeFrame_1l0ib_19",kv="_scroller_1l0ib_32",_v="_content_1l0ib_89",Cv="_messageBlock_1l0ib_108",Sv="_messageBlockAi_1l0ib_116",Mv="_inboundBlock_1l0ib_128",Iv="_inboundLoader_1l0ib_136",Nv="_inboundLoaderLabel_1l0ib_146",Lv="_outboundBlock_1l0ib_153",Tv="_outboundHeader_1l0ib_161",Av="_messageBlockUser_1l0ib_168",Ev="_aiThreadOutboundIn_1l0ib_1",$v="_messageBody_1l0ib_182",Pv="_messageBodyAi_1l0ib_193",Rv="_messageBodyUser_1l0ib_200",Dv="_label_1l0ib_159",zv="_labelAi_1l0ib_221",Fv="_labelUser_1l0ib_159",Bv="_labelAvatar_1l0ib_224",Ov="_labelText_1l0ib_237",Hv="_timestamp_1l0ib_244",Wv="_timestampAi_1l0ib_259",Uv="_timestampUser_1l0ib_260",Vv="_timestampInline_1l0ib_270",Gv="_aiThreadOutboundFadeIn_1l0ib_1",ze={fadeFrame:bv,scroller:kv,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:_v,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:Cv,messageBlockAi:Sv,inboundBlock:Mv,inboundLoader:Iv,inboundLoaderLabel:Nv,outboundBlock:Lv,outboundHeader:Tv,messageBlockUser:Av,aiThreadOutboundIn:Ev,messageBody:$v,messageBodyAi:Pv,messageBodyUser:Rv,label:Dv,labelAi:zv,labelUser:Fv,labelAvatar:Bv,labelText:Ov,timestamp:Hv,timestampAi:Wv,timestampUser:Uv,timestampInline:Vv,aiThreadOutboundFadeIn:Gv},uh=8;function qv(r,s){typeof r=="function"?r(s):r&&(r.current=s)}const X0=x.forwardRef(({density:r="comfortable",padding:s="md",autoScroll:i=!0,autoScrollThreshold:l=80,className:c,children:p,...f},v)=>{const g=x.useRef(null),w=x.useRef(null),y=x.useRef(!0),[_,b]=x.useState(!1),[L,E]=x.useState(!1),I=x.useCallback(N=>{g.current=N,qv(v,N)},[v]);return x.useEffect(()=>{const N=g.current,C=w.current;if(!N||!C)return;const T=()=>{const{scrollTop:z,scrollHeight:B,clientHeight:le}=N;return B-z-le<l},k=z=>{N.scrollTo({top:N.scrollHeight,behavior:z?"smooth":"auto"})},j=()=>{const{scrollTop:z,scrollHeight:B,clientHeight:le}=N,ce=z>uh,X=B-z-le>uh;b(q=>q===ce?q:ce),E(q=>q===X?q:X)};i&&(k(!1),y.current=!0),j();const $=()=>{y.current=T(),j()};N.addEventListener("scroll",$,{passive:!0});const F=new ResizeObserver(()=>{i&&y.current&&k(!0),j()});return F.observe(C),F.observe(N),()=>{N.removeEventListener("scroll",$),F.disconnect()}},[i,l]),t.jsx("div",{className:ze.fadeFrame,"data-fade-top":_,"data-fade-bottom":L,children:t.jsx("div",{ref:I,className:K(ze.scroller,ze[`padding-${s}`],c),...f,children:t.jsx("div",{ref:w,className:K(ze.content,ze[`density-${r}`]),children:p})})})});X0.displayName="AIThread";const Fl=x.forwardRef(({align:r="ai",avatar:s,className:i,children:l,...c},p)=>t.jsxs("div",{ref:p,className:K(ze.label,r==="user"?ze.labelUser:ze.labelAi,i),...c,children:[s!=null&&t.jsx("span",{className:ze.labelAvatar,children:s}),t.jsx("span",{className:ze.labelText,children:l})]}));Fl.displayName="AILabel";const Zv=r=>r.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function Yv(r,s){if(typeof r=="string")return{text:r};const i=r instanceof Date?r:new Date(r);return Number.isNaN(i.getTime())?null:{text:s(i),iso:i.toISOString()}}const Vi=x.forwardRef(({value:r,align:s="ai",format:i=Zv,inline:l=!1,className:c,...p},f)=>{const v=x.useMemo(()=>Yv(r,i),[r,i]);return v?t.jsx("time",{ref:f,className:K(ze.timestamp,l?ze.timestampInline:s==="user"?ze.timestampUser:ze.timestampAi,c),dateTime:v.iso,...p,children:v.text}):null});Vi.displayName="AITimestamp";function Kv(r){return r==null?null:typeof r=="string"||typeof r=="number"||r instanceof Date?t.jsx(Vi,{align:"ai",value:r}):r}function Qv(r){return r==null?null:typeof r=="string"||typeof r=="number"?t.jsx(Fl,{align:"ai",children:r}):r}const vl=x.forwardRef(({label:r,time:s,className:i,children:l,...c},p)=>t.jsxs("div",{ref:p,"data-author":"ai",className:K(ze.messageBlock,ze.messageBlockAi,i),...c,children:[Qv(r),t.jsx("div",{className:K(ze.messageBody,ze.messageBodyAi),children:l}),Kv(s)]}));vl.displayName="AIAssistantMessage";function Xv(r){return r==null?null:typeof r=="string"||typeof r=="number"||r instanceof Date?t.jsx(Vi,{align:"user",value:r}):r}function Jv(r){return r==null?null:typeof r=="string"||typeof r=="number"?t.jsx(Fl,{align:"user",children:r}):r}const J0=x.forwardRef(({label:r,time:s,className:i,children:l,...c},p)=>t.jsxs("div",{ref:p,"data-author":"user",className:K(ze.messageBlock,ze.messageBlockUser,i),...c,children:[Jv(r),t.jsx("div",{className:K(ze.messageBody,ze.messageBodyUser),children:l}),Xv(s)]}));J0.displayName="AIUserMessage";function ey(r){return r===!1?null:r==null||r===!0?t.jsx(Y0,{size:"sm"}):r}function ty(r,s){return r==null&&s==null?null:typeof r=="string"||typeof r=="number"||r==null?t.jsx(Fl,{align:"ai",avatar:s,children:r}):r}const ny=x.forwardRef(({avatar:r,label:s="Teambridge AI",activity:i,actions:l,loading:c=!1,loaderLabel:p="Thinking…",className:f,children:v,...g},w)=>{const y=ey(r),_=ty(s,y);return t.jsxs("div",{ref:w,"data-author":"ai",className:K(ze.messageBlock,ze.messageBlockAi,ze.inboundBlock,f),...g,children:[_,i,v!=null&&t.jsx("div",{className:K(ze.messageBody,ze.messageBodyAi),children:v}),c&&t.jsxs("div",{className:ze.inboundLoader,"aria-live":"polite",children:[t.jsx(Ui,{size:"xs"}),p!=null&&t.jsx("span",{className:ze.inboundLoaderLabel,children:p})]}),l]})});ny.displayName="AIInboundMessage";function ry(r){return r instanceof Date||typeof r=="number"||typeof r=="string"}const oy=x.forwardRef(({label:r="You",time:s,timeFormat:i,className:l,children:c,...p},f)=>{const v=s==null?null:ry(s)?t.jsx(Vi,{value:s,format:i,inline:!0}):s,g=r==null?null:typeof r=="string"||typeof r=="number"?t.jsx("span",{className:ze.labelText,children:r}):r,w=g!=null||v!=null;return t.jsxs("div",{ref:f,"data-author":"user",className:K(ze.messageBlock,ze.messageBlockUser,ze.outboundBlock,l),...p,children:[w&&t.jsxs("div",{className:K(ze.label,ze.labelUser,ze.outboundHeader),children:[g,v]}),t.jsx("div",{className:K(ze.messageBody,ze.messageBodyUser),children:c})]})});oy.displayName="AIOutboundMessage";const An=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M6 9L12 15L18 9",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};An.displayName="ChevronDownIcon";const sy="_root_1poj2_8",iy="_header_1poj2_17",ay="_headerSummary_1poj2_53",ly="_aiTrailSummaryFade_1poj2_1",cy="_aiTrailSummaryFlow_1poj2_1",dy="_headerCurrent_1poj2_118",uy="_aiTrailHeaderType_1poj2_1",py="_headerChevron_1poj2_155",fy="_headerChevronExpanded_1poj2_169",hy="_body_1poj2_183",my="_bodyExpanded_1poj2_196",gy="_bodyCollapsed_1poj2_197",xy="_bodyInner_1poj2_199",vy="_bodyContent_1poj2_183",yy="_step_1poj2_221",wy="_stepIcon_1poj2_238",jy="_stepAnimating_1poj2_252",by="_aiTrailStepPulse_1poj2_1",ky="_stepBody_1poj2_263",_y="_stepHead_1poj2_278",Cy="_stepLabel_1poj2_282",Sy="_stepSeparator_1poj2_284",My="_stepDetail_1poj2_288",Iy="_subToggle_1poj2_298",Ny="_subToggleCount_1poj2_331",Ly="_subToggleChevron_1poj2_335",Ty="_subActivityWrap_1poj2_354",Ay="_subActivityExpanded_1poj2_360",Ey="_subActivityCollapsed_1poj2_361",$y="_subActivityClip_1poj2_363",Py="_subActivityList_1poj2_374",Ry="_subActivity_1poj2_354",Dy="_aiTrailSubActivityType_1poj2_1",zy="_aiTrailSubActivityFade_1poj2_1",Xe={root:sy,header:iy,headerSummary:ay,aiTrailSummaryFade:ly,aiTrailSummaryFlow:cy,headerCurrent:dy,aiTrailHeaderType:uy,headerChevron:py,headerChevronExpanded:fy,body:hy,bodyExpanded:my,bodyCollapsed:gy,bodyInner:xy,bodyContent:vy,step:yy,"step-pending":"_step-pending_1poj2_232","step-active":"_step-active_1poj2_233","step-done":"_step-done_1poj2_234","step-error":"_step-error_1poj2_235",stepIcon:wy,stepAnimating:jy,aiTrailStepPulse:by,stepBody:ky,stepHead:_y,stepLabel:Cy,stepSeparator:Sy,stepDetail:My,subToggle:Iy,subToggleCount:Ny,subToggleChevron:Ly,subActivityWrap:Ty,subActivityExpanded:Ay,subActivityCollapsed:Ey,subActivityClip:$y,subActivityList:Py,subActivity:Ry,aiTrailSubActivityType:Dy,aiTrailSubActivityFade:zy},em=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};em.displayName="MessageDotsSquareIcon";function tm({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}tm.displayName="SearchMdIcon";function Gn({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}const nm=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};nm.displayName="Globe01Icon";const rm=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};rm.displayName="Code02Icon";function om({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}om.displayName="Tool01Icon";const br=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M20 6L9 17L4 12",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})},Ms=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:s}),t.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Ms.displayName="AlertCircleIcon";const Fy={thinking:t.jsx(em,{size:14}),tool:t.jsx(om,{size:14}),search:t.jsx(tm,{size:14}),file:t.jsx(Gn,{size:14}),web:t.jsx(nm,{size:14}),code:t.jsx(rm,{size:14}),content:t.jsx(br,{size:14})},Ai=x.forwardRef(({type:r,status:s="done",detail:i,icon:l,subActivities:c,groupState:p="done",className:f,children:v,...g},w)=>{const y=s==="active"&&p==="live",_=s==="active"&&p==="live",b=s==="active"||s==="error",[L,E]=x.useState(null),I=L!==null?L:b;x.useEffect(()=>{E(null)},[s]);const N=x.useCallback(()=>E(!I),[I]),C=!!c&&c.length>0,T=(c==null?void 0:c.length)??0,k=s==="error"?t.jsx(Ms,{size:14}):l??Fy[r];return t.jsxs("div",{ref:w,"data-step-type":r,"data-step-status":s,className:K(Xe.step,Xe[`step-${s}`],y&&Xe.stepAnimating,f),...g,children:[t.jsx("span",{className:Xe.stepIcon,"aria-hidden":!0,children:k}),t.jsxs("span",{className:Xe.stepBody,children:[t.jsxs("span",{className:Xe.stepHead,children:[t.jsx("span",{className:Xe.stepLabel,children:v}),i!=null&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:Xe.stepSeparator,"aria-hidden":!0,children:" · "}),t.jsx("span",{className:Xe.stepDetail,children:i})]}),C&&t.jsxs("button",{type:"button",className:Xe.subToggle,onClick:N,"aria-expanded":I,"aria-label":I?`Collapse ${T} sub-steps`:`Expand ${T} sub-steps`,"data-expanded":I||void 0,children:[t.jsx("span",{className:Xe.subToggleCount,children:T}),t.jsx("span",{className:Xe.subToggleChevron,"aria-hidden":!0,children:t.jsx(An,{size:10})})]})]}),C&&t.jsx(t.Fragment,{children:t.jsx("div",{className:K(Xe.subActivityWrap,I?Xe.subActivityExpanded:Xe.subActivityCollapsed),"aria-hidden":!I,children:t.jsx("div",{className:Xe.subActivityClip,children:t.jsx("ul",{className:Xe.subActivityList,"data-animating":_||void 0,children:c.map((j,$)=>t.jsx("li",{className:Xe.subActivity,children:j},$))})})})})]})]})});Ai.displayName="AIActivityStep";function ph(r){return r==="error"}function By(r,s,i,l,c,p){let f;if(r==="live"?f="Working":r==="error"?f="Stopped":f=p?`Thought for ${p}`:"Thought",i.length===0){const v=s===1?"1 step":`${s} steps`;return`${f} · ${v}`}return r==="live"?t.jsxs(t.Fragment,{children:[f," · ",t.jsx("span",{className:c,children:i[l]??i[i.length-1]},l)]}):t.jsxs(t.Fragment,{children:[f,i.map((v,g)=>t.jsxs(x.Fragment,{children:[" · ",v]},g))]})}const sm=x.forwardRef(({state:r="live",expanded:s,defaultExpanded:i,onToggle:l,duration:c,summary:p,className:f,children:v,...g},w)=>{const y=s!==void 0,[_,b]=x.useState(i??ph(r)),[L,E]=x.useState(!1);x.useEffect(()=>{y||L||b(ph(r))},[r,y,L]);const I=y?!!s:_,N=x.useCallback(()=>{const F=!I;y||(b(F),E(!0)),l==null||l(F)},[I,y,l]),{enhancedChildren:C,stepCount:T,stepLabels:k,currentLabelIdx:j}=x.useMemo(()=>{let F=0;const z=[];let B=-1;return{enhancedChildren:x.Children.map(v,ce=>{if(!x.isValidElement(ce))return ce;const X=ce.props;if(!("type"in X||"status"in X))return ce;F+=1;const Q=X.status??"done";return Q==="pending"?null:(X.children!=null&&(z.push(X.children),Q==="active"&&(B=z.length-1)),Oy(ce,r))}),stepCount:F,stepLabels:z,currentLabelIdx:B>=0?B:z.length-1}},[v,r]),$=p??By(r,T,k,j,Xe.headerCurrent,c);return t.jsxs("div",{ref:w,"data-state":r,"data-expanded":I,className:K(Xe.root,f),...g,children:[t.jsxs("button",{type:"button",className:Xe.header,onClick:N,"aria-expanded":I,"aria-label":I?"Collapse activity trail":"Expand activity trail",children:[t.jsx("span",{className:Xe.headerSummary,children:$},r),t.jsx("span",{className:K(Xe.headerChevron,I&&Xe.headerChevronExpanded),"aria-hidden":!0,children:t.jsx(An,{size:14})})]}),t.jsx("div",{className:K(Xe.body,I?Xe.bodyExpanded:Xe.bodyCollapsed),"aria-hidden":!I,children:t.jsx("div",{className:Xe.bodyInner,children:t.jsxs("div",{className:Xe.bodyContent,children:[C,r==="done"&&t.jsx(Ai,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});sm.displayName="AIActivityTrail";function Oy(r,s){return x.cloneElement(r,{groupState:s})}var Ru=G0();const Hy="_wrapper_3tqlm_10",Wy="_tooltip_3tqlm_22",Uy="_portal_3tqlm_23",Vy="_top_3tqlm_61",Gy="_bottom_3tqlm_71",qy="_left_3tqlm_81",Zy="_right_3tqlm_91",rl={wrapper:Hy,tooltip:Wy,portal:Uy,top:Vy,bottom:Gy,left:qy,right:Zy},Is=({content:r,placement:s="top",delay:i=0,disabled:l=!1,maxWidth:c=280,offset:p=0,children:f})=>{const[v,g]=x.useState(!1),[w,y]=x.useState({top:0,left:0}),_=x.useRef(null),b=x.useRef(),L=x.useId(),E=x.useCallback(()=>{if(!_.current)return;const k=_.current.getBoundingClientRect(),j=6+p;let $=0,F=0;switch(s){case"top":$=k.top-j,F=k.left+k.width/2;break;case"bottom":$=k.bottom+j,F=k.left+k.width/2;break;case"left":$=k.top+k.height/2,F=k.left-j;break;case"right":$=k.top+k.height/2,F=k.right+j;break}y({top:$,left:F})},[s,p]),I=x.useCallback(()=>{l||(E(),clearTimeout(b.current),i>0?b.current=setTimeout(()=>g(!0),i):g(!0))},[l,i,E]),N=x.useCallback(()=>{clearTimeout(b.current),g(!1)},[]);x.useEffect(()=>{if(!v)return;const k=()=>E();return window.addEventListener("scroll",k,!0),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k,!0),window.removeEventListener("resize",k)}},[v,E]);const C=Tn.cloneElement(f,{"aria-describedby":v?L:void 0}),T=t.jsx("span",{id:L,role:"tooltip",className:K(rl.tooltip,rl[s],rl.portal),"data-visible":v||void 0,style:{top:w.top,left:w.left,maxWidth:c!==void 0?c:void 0},children:r});return t.jsxs("span",{ref:_,className:rl.wrapper,onMouseEnter:I,onMouseLeave:N,onFocus:I,onBlur:N,children:[C,Ru.createPortal(T,document.body)]})};Is.displayName="Tooltip";const Yy="_root_v8mqg_9",Ky="_hover_v8mqg_21",Ud={root:Yy,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:Ky};function Qy(r){return r instanceof Date||typeof r=="number"||typeof r=="string"}const im=x.forwardRef(({visibility:r="always",align:s="start",time:i,timeFormat:l,className:c,children:p,...f},v)=>{const g=i==null?null:Qy(i)?t.jsx(Vi,{value:i,format:l,inline:!0}):i,w=_=>{if(!x.isValidElement(_))return _;const b=_;if(b.type===Is)return b;const L=b.props["aria-label"];return L?t.jsx(Is,{content:L,placement:"top",delay:150,children:b}):b},y=x.Children.map(p,_=>{if(x.isValidElement(_)&&_.type===x.Fragment){const b=_.props.children;return x.Children.map(b,w)}return w(_)});return t.jsxs("div",{ref:v,"data-visibility":r,"data-align":s,className:K(Ud.root,Ud[`align-${s}`],r==="hover"&&Ud.hover,c),...f,children:[y,g]})});im.displayName="AIMessageActions";const Xy="_root_ghwhu_10",Jy="_badge_ghwhu_27",e3="_badgeIcon_ghwhu_38",t3="_green_ghwhu_59",n3="_yellow_ghwhu_60",r3="_matcha_ghwhu_61",o3="_purple_ghwhu_62",s3="_blue_ghwhu_63",i3="_azure_ghwhu_64",a3="_red_ghwhu_65",l3="_orange_ghwhu_66",c3="_pink_ghwhu_67",d3="_slate_ghwhu_68",u3="_content_ghwhu_73",p3="_label_ghwhu_83",f3="_valueRow_ghwhu_97",h3="_change_ghwhu_106",m3="_value_ghwhu_97",xr={root:Xy,badge:Jy,badgeIcon:e3,green:t3,yellow:n3,matcha:r3,purple:o3,blue:s3,azure:i3,red:a3,orange:l3,pink:c3,slate:d3,content:u3,label:p3,valueRow:f3,change:h3,value:m3},am=x.forwardRef(({color:r="slate",icon:s,label:i,value:l,change:c,className:p,...f},v)=>t.jsxs("div",{ref:v,className:K(xr.root,p),...f,children:[t.jsx("div",{className:K(xr.badge,xr[r]),"aria-hidden":"true",children:t.jsx("span",{className:xr.badgeIcon,children:s})}),t.jsxs("div",{className:xr.content,children:[t.jsx("span",{className:xr.label,children:i}),t.jsxs("div",{className:xr.valueRow,children:[t.jsx("span",{className:xr.value,children:l}),c!=null&&t.jsx("span",{className:xr.change,children:c})]})]})]}));am.displayName="DataCard";const g3="_root_d0j6n_7",x3="_icon_d0j6n_21",v3="_text_d0j6n_33",y3="_positive_d0j6n_41",w3="_warning_d0j6n_45",j3="_negative_d0j6n_49",ol={root:g3,icon:x3,text:v3,positive:y3,warning:w3,negative:j3};function Du({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Du.displayName="ArrowNarrowUpIcon";function lm({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}lm.displayName="ArrowNarrowDownIcon";function b3(r){return r==="up"?"positive":"negative"}const Bl=x.forwardRef((r,s)=>{const{mode:i,value:l,className:c,...p}=r,f=i==="trend"?r.severity??b3(r.trend):r.severity,{severity:v,...g}=p,w=i==="trend"?(({trend:_,severity:b,...L})=>L)(g):g,y=i==="trend"?r.trend==="up"?Du:lm:null;return t.jsxs("span",{ref:s,className:K(ol.root,ol[f],c),...w,children:[t.jsx("span",{className:ol.text,children:l}),y&&t.jsx("span",{className:ol.icon,"aria-hidden":"true",children:t.jsx(y,{size:14})})]})});Bl.displayName="ValueChangeLabel";const k3="_root_1lq10_1",_3="_horizontal_1lq10_9",C3="_vertical_1lq10_15",S3="_solid_1lq10_32",M3="_dashed_1lq10_36",sl={root:k3,horizontal:_3,vertical:C3,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:S3,dashed:M3},I3=x.forwardRef(({thickness:r=1,orientation:s="horizontal",variant:i="solid",className:l,...c},p)=>t.jsx("hr",{ref:p,role:"separator","aria-orientation":s,className:K(sl.root,sl[`thickness-${r}`],sl[s],sl[i],l),...c}));I3.displayName="Divider";const N3="_overlay_vxgy2_9",L3="_dialogOverlayIn_vxgy2_1",T3="_dialogOverlayOut_vxgy2_1",A3="_dialog_vxgy2_38",E3="_dialogIn_vxgy2_1",$3="_dialogOut_vxgy2_1",P3="_sm_vxgy2_88",R3="_md_vxgy2_89",D3="_lg_vxgy2_90",z3="_header_vxgy2_95",F3="_title_vxgy2_107",B3="_closeBtn_vxgy2_120",O3="_content_vxgy2_152",H3="_footer_vxgy2_163",Xr={overlay:N3,dialogOverlayIn:L3,dialogOverlayOut:T3,dialog:A3,dialogIn:E3,dialogOut:$3,sm:P3,md:R3,lg:D3,header:z3,title:F3,closeBtn:B3,content:O3,footer:H3},Ps=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})},Ol=x.forwardRef(({onClose:r,children:s,className:i,...l},c)=>t.jsxs("div",{ref:c,className:K(Xr.header,i),...l,children:[t.jsx("span",{className:Xr.title,children:s}),r&&t.jsx("button",{type:"button",className:Xr.closeBtn,onClick:r,"aria-label":"Close",children:t.jsx(Ps,{size:16})})]}));Ol.displayName="DialogHeader";const Hl=x.forwardRef(({children:r,className:s,...i},l)=>t.jsx("div",{ref:l,className:K(Xr.content,s),...i,children:r}));Hl.displayName="DialogContent";const Wl=x.forwardRef(({children:r,className:s,...i},l)=>t.jsx("div",{ref:l,className:K(Xr.footer,s),...i,children:r}));Wl.displayName="DialogFooter";function zu({open:r,onClose:s,size:i="sm",children:l,"aria-label":c,"aria-labelledby":p}){const f=x.useRef(null),v=180,[g,w]=x.useState(r);return x.useEffect(()=>{if(r){w(!0);return}const y=setTimeout(()=>w(!1),v);return()=>clearTimeout(y)},[r]),x.useEffect(()=>{if(!r)return;const y=_=>{_.key==="Escape"&&s()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r,s]),x.useEffect(()=>{if(!r)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[r]),g?Ru.createPortal(t.jsx("div",{className:Xr.overlay,"data-state":r?"open":"closed",role:"dialog","aria-modal":"true","aria-label":c,"aria-labelledby":p,onMouseDown:y=>{y.target===y.currentTarget&&s()},children:t.jsx("div",{ref:f,className:K(Xr.dialog,Xr[i]),"data-state":r?"open":"closed",children:l})}),document.body):null}const W3="_root_sdur6_8",U3="_xs_sdur6_69",V3="_sm_sdur6_78",G3="_md_sdur6_87",q3="_lg_sdur6_96",Z3="_xl_sdur6_105",Y3="_iconOnly_sdur6_116",K3="_primary_sdur6_126",Q3="_secondary_sdur6_142",X3="_tertiary_sdur6_161",J3="_ghost_sdur6_179",e5="_destructive_sdur6_197",t5="_destructiveSecondary_sdur6_215",n5="_artwork_sdur6_63",r5="_label_sdur6_248",o5="_spinner_sdur6_63",s5="_light_sdur6_275",sn={root:W3,xs:U3,sm:V3,md:G3,lg:q3,xl:Z3,iconOnly:Y3,primary:K3,secondary:Q3,tertiary:X3,ghost:J3,destructive:e5,destructiveSecondary:t5,artwork:n5,label:r5,spinner:o5,"alloy-spin":"_alloy-spin_sdur6_1",light:s5},i5={primary:sn.primary,secondary:sn.secondary,tertiary:sn.tertiary,ghost:sn.ghost,destructive:sn.destructive,"destructive-secondary":sn.destructiveSecondary},Fe=x.forwardRef(({variant:r="primary",size:s="md",loading:i=!1,leadingArtwork:l,trailingArtwork:c,iconOnly:p=!1,className:f,children:v,disabled:g,...w},y)=>{const _=g||i;return t.jsxs("button",{ref:y,className:K(sn.root,i5[r],sn[s],p&&sn.iconOnly,f),disabled:_,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":r,"data-size":s,...w,children:[i&&t.jsx("span",{className:sn.spinner,"aria-hidden":"true"}),!i&&p&&t.jsx("span",{className:K(sn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:v}),!i&&!p&&t.jsxs(t.Fragment,{children:[l&&t.jsx("span",{className:K(sn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l}),v&&t.jsx("span",{className:sn.label,children:v}),c&&t.jsx("span",{className:K(sn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:c})]})]})});Fe.displayName="Button";const a5="_root_1dntq_7",l5="_badge_1dntq_57",c5="_badgeIconSlot_1dntq_74",d5="_content_1dntq_82",u5="_text_1dntq_90",p5="_title_1dntq_99",f5="_description_1dntq_120",h5="_actions_1dntq_131",m5="_dot_1dntq_137",g5="_actionLink_1dntq_144",x5="_primaryAction_1dntq_162",v5="_trailing_1dntq_170",qt={root:a5,badge:l5,badgeIconSlot:c5,content:d5,text:u5,title:p5,description:f5,actions:h5,dot:m5,actionLink:g5,primaryAction:x5,trailing:v5},y5=()=>t.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),w5=()=>t.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),j5=()=>t.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),fh=()=>t.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),b5={error:y5,warning:j5,success:w5,info:fh,feature:fh},cm=x.forwardRef(({status:r="info",variant:s="lighter",size:i="sm",title:l,description:c,action:p,onAction:f,learnMore:v,onLearnMore:g,onDismiss:w,className:y,..._},b)=>{const L=b5[r],E=i==="lg",I=w?t.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,onClick:w,"aria-label":"Dismiss",children:t.jsx(Ps,{size:12})}):null;return t.jsxs("div",{ref:b,role:"alert",className:K(qt.root,y),"data-status":r,"data-variant":s,"data-size":i,..._,children:[t.jsx("span",{className:qt.badge,"aria-hidden":"true",children:t.jsx("span",{className:K("alloy-icon-slot",qt.badgeIconSlot),children:t.jsx(L,{})})}),E?t.jsxs("div",{className:qt.content,children:[t.jsxs("div",{className:qt.text,children:[t.jsx("p",{className:qt.title,children:l}),c&&t.jsx("p",{className:qt.description,children:c})]}),(p||v)&&t.jsxs("div",{className:qt.actions,children:[p&&t.jsx("button",{type:"button",className:K(qt.actionLink,qt.primaryAction),onClick:f,children:p}),p&&v&&t.jsx("span",{className:qt.dot,"aria-hidden":"true",children:"·"}),v&&t.jsx("button",{type:"button",className:qt.actionLink,onClick:g,children:v})]})]}):t.jsx("p",{className:qt.title,children:l}),E?I:(p||w)&&t.jsxs("div",{className:qt.trailing,children:[p&&t.jsx("button",{type:"button",className:K(qt.actionLink,qt.primaryAction),onClick:f,children:p}),I]})]})});cm.displayName="Alert";const k5="_stack_x4xl7_11",_5="_item_x4xl7_28",C5="_itemExiting_x4xl7_33",bu={stack:k5,item:_5,itemExiting:C5},dm=x.createContext(null);function S5(){const r=x.useContext(dm);if(!r)throw new Error("useToast must be used inside <ToastProvider>");const s=x.useCallback(i=>r.addToast(i),[r]);return s.success=(i,l)=>r.addToast({...l,title:i,status:"success"}),s.error=(i,l)=>r.addToast({...l,title:i,status:"error"}),s.warning=(i,l)=>r.addToast({...l,title:i,status:"warning"}),s.info=(i,l)=>r.addToast({...l,title:i,status:"info"}),{toast:s}}function M5({id:r,title:s,description:i,status:l,variant:c,size:p,action:f,onAction:v,duration:g,exiting:w,onRemove:y}){const _=x.useCallback(()=>y(r),[r,y]);return t.jsx("div",{className:K(bu.item,w&&bu.itemExiting),onAnimationEnd:w?_:void 0,children:t.jsx(cm,{status:l,variant:c,size:p,title:s,description:i,action:f,onAction:v,onDismiss:_,style:{width:"100%"}})})}function I5({toasts:r,onStartExit:s,onRemove:i}){return x.useEffect(()=>{const l=[];return r.forEach(c=>{c.duration>0&&!c.exiting&&l.push(setTimeout(()=>s(c.id),c.duration))}),()=>l.forEach(clearTimeout)},[r,s]),r.length===0?null:Ru.createPortal(t.jsx("div",{className:bu.stack,"aria-live":"polite","aria-atomic":"false",children:r.map(l=>t.jsx(M5,{...l,onRemove:i},l.id))}),document.body)}function N5({children:r}){const[s,i]=x.useState([]),l=x.useRef(0),c=x.useCallback(v=>{const g=`toast-${++l.current}`;return i(w=>[...w,{id:g,title:v.title,description:v.description,status:v.status??"info",variant:v.variant??"stroke",size:v.size??"sm",action:v.action,onAction:v.onAction,duration:v.duration??4e3,exiting:!1}]),g},[]),p=x.useCallback(v=>{i(g=>g.map(w=>w.id===v?{...w,exiting:!0}:w))},[]),f=x.useCallback(v=>{i(g=>g.filter(w=>w.id!==v))},[]);return t.jsxs(dm.Provider,{value:{addToast:c,removeToast:p},children:[r,t.jsx(I5,{toasts:s,onStartExit:p,onRemove:f})]})}const L5="_root_4qytd_5",T5="_neutral_4qytd_25",A5="_primary_4qytd_30",E5="_success_4qytd_35",$5="_warning_4qytd_40",P5="_error_4qytd_45",R5="_info_4qytd_50",hh={root:L5,neutral:T5,primary:A5,success:E5,warning:$5,error:P5,info:R5},Fi=x.forwardRef(({variant:r="neutral",className:s,children:i,...l},c)=>t.jsx("span",{ref:c,className:K(hh.root,hh[r],s),...l,children:i}));Fi.displayName="Badge";const D5="_root_1s0ek_5",z5="_list_1s0ek_11",F5="_item_1s0ek_23",B5="_separator_1s0ek_31",O5="_link_1s0ek_47",H5="_current_1s0ek_68",W5="_iconSlot_1s0ek_76",or={root:D5,list:z5,item:F5,separator:B5,link:O5,current:H5,iconSlot:W5},U5=()=>t.jsx("span",{className:or.separator,"aria-hidden":"true",children:"/"}),V5=()=>t.jsx("span",{className:or.separator,"aria-hidden":"true",children:t.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),Ii=x.forwardRef(({items:r,separator:s="slash",className:i,...l},c)=>{const p=s==="chevron"?V5:U5;return t.jsx("nav",{ref:c,"aria-label":"Breadcrumb",className:K(or.root,i),...l,children:t.jsx("ol",{className:or.list,children:r.map((f,v)=>{const g=v===r.length-1,w=!g&&(!!f.href||!!f.onClick);return t.jsxs("li",{className:or.item,children:[v>0&&t.jsx(p,{}),w?t.jsxs("a",{href:f.href,onClick:f.onClick,className:or.link,"aria-label":f.label,children:[f.icon&&t.jsx("span",{className:K(or.iconSlot,"alloy-icon-slot"),children:f.icon}),t.jsx("span",{children:f.label})]}):t.jsxs("span",{className:K(or.link,g&&or.current),"aria-current":g?"page":void 0,children:[f.icon&&t.jsx("span",{className:K(or.iconSlot,"alloy-icon-slot"),children:f.icon}),t.jsx("span",{children:f.label})]})]},v)})})})});Ii.displayName="Breadcrumb";const G5="_root_1h0da_6",q5="_divider_1h0da_14",Z5="_item_1h0da_19",Y5="_label_1h0da_25",K5="_description_1h0da_26",Q5="_chevron_1h0da_27",X5="_iconSlot_1h0da_28",J5="_hitTarget_1h0da_32",e4="_size_sm_1h0da_37",t4="_size_md_1h0da_43",n4="_size_lg_1h0da_49",r4="_header_1h0da_59",o4="_headerContent_1h0da_59",s4="_checkboxWrap_1h0da_60",i4="_labelBlock_1h0da_154",a4="_trailingSlot_1h0da_60",l4="_body_1h0da_196",c4="_bodyInner_1h0da_206",d4="_bodyContent_1h0da_211",Ht={root:G5,divider:q5,item:Z5,label:Y5,description:K5,chevron:Q5,iconSlot:X5,hitTarget:J5,size_sm:e4,size_md:t4,size_lg:n4,header:r4,headerContent:o4,checkboxWrap:s4,labelBlock:i4,trailingSlot:a4,body:l4,bodyInner:c4,bodyContent:d4},ir=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M9 6L15 12L9 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};ir.displayName="ChevronRightIcon";const u4="_root_17t97_6",p4="_disabled_17t97_12",f4="_sm_17t97_18",h4="_md_17t97_26",m4="_lg_17t97_34",g4="_controlWrap_17t97_43",x4="_input_17t97_52",v4="_box_17t97_67",y4="_boxChecked_17t97_96",w4="_boxError_17t97_106",j4="_labelWrap_17t97_116",b4="_label_17t97_116",k4="_error_17t97_138",_4="_required_17t97_140",C4="_description_17t97_145",mn={root:u4,disabled:p4,sm:f4,md:h4,lg:m4,controlWrap:g4,input:x4,box:v4,boxChecked:y4,boxError:w4,labelWrap:j4,label:b4,error:k4,required:_4,description:C4},um=x.forwardRef(({checked:r,defaultChecked:s=!1,indeterminate:i=!1,onChange:l,disabled:c,error:p,size:f="md",label:v,description:g,id:w,name:y,value:_,required:b,className:L},E)=>{const I=x.useId(),N=w??I,C=x.useRef(null);x.useEffect(()=>{C.current&&(C.current.indeterminate=i)},[i]);const T=r!==void 0,[k,j]=x.useState(s),$=T?r:k,F=B=>{T||j(B.target.checked),l==null||l(B.target.checked)},z=$||i;return t.jsxs("div",{className:K(mn.root,mn[f],c&&mn.disabled,p&&mn.error,L),children:[t.jsxs("div",{className:mn.controlWrap,children:[t.jsx("input",{ref:B=>{C.current=B,typeof E=="function"?E(B):E&&(E.current=B)},type:"checkbox",id:N,name:y,value:_,checked:$,disabled:c,required:b,"aria-invalid":p||void 0,onChange:F,className:mn.input}),t.jsx("span",{className:K(mn.box,z&&mn.boxChecked,p&&mn.boxError),"aria-hidden":"true",children:i?t.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:t.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):$?t.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:t.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(v||g)&&t.jsxs("div",{className:mn.labelWrap,children:[v&&t.jsxs("label",{htmlFor:N,className:mn.label,children:[v,b&&t.jsx("span",{className:mn.required,"aria-hidden":"true",children:" *"})]}),g&&t.jsx("span",{className:mn.description,children:g})]})]})});um.displayName="Checkbox";const pm=x.createContext(null),ku=x.createContext(0),S4=x.forwardRef(({type:r="multiple",collapsible:s=!0,value:i,defaultValue:l,onValueChange:c,divider:p=!0,size:f="md",disabled:v=!1,className:g,children:w,...y},_)=>{const b=x.useMemo(()=>Array.isArray(l)?new Set(l):typeof l=="string"?new Set([l]):new Set,[]),[L,E]=x.useState(b),I=i!==void 0,N=x.useMemo(()=>I?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:L,[I,i,L]),C=x.useCallback(j=>N.has(j),[N]),T=x.useCallback(j=>{const $=new Set(N);r==="single"?$.has(j)?s&&$.delete(j):($.clear(),$.add(j)):$.has(j)?$.delete(j):$.add(j),I||E($),c&&c(r==="single"?$.values().next().value??"":Array.from($))},[N,r,s,I,c]),k=x.useMemo(()=>({type:r,collapsible:s,size:f,disabled:v,isExpanded:C,toggle:T}),[r,s,f,v,C,T]);return t.jsx("div",{ref:_,"data-accordion-root":"","data-divider":p||void 0,"data-disabled":v||void 0,"data-size":f,className:K(Ht.root,p&&Ht.divider,g),...y,children:t.jsx(pm.Provider,{value:k,children:t.jsx(ku.Provider,{value:0,children:w})})})});S4.displayName="Accordion";function il(r,s){const i=r.closest("[data-accordion-root]");if(!i)return;const l=r.getAttribute("data-accordion-depth"),c=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${l}"]`)).filter(v=>v.closest("[data-accordion-root]")===i);if(c.length===0)return;const p=c.indexOf(r);let f;switch(s){case"first":f=c[0];break;case"last":f=c[c.length-1];break;case"next":f=c[(p+1)%c.length];break;case"prev":f=c[(p-1+c.length)%c.length];break}f.focus()}const M4=x.forwardRef(({value:r,label:s,description:i,icon:l,leadingSlot:c,trailingSlot:p,selectable:f=!1,checked:v,defaultChecked:g=!1,indeterminate:w=!1,onCheckedChange:y,expanded:_,defaultExpanded:b=!1,onExpandedChange:L,disabled:E=!1,size:I,className:N,children:C,...T},k)=>{const j=x.useContext(pm),$=x.useContext(ku),F=j!==null,z=I??(j==null?void 0:j.size)??"md",B=E||(j==null?void 0:j.disabled)||!1,[le,ce]=x.useState(b);let X;F?X=r!==void 0?j.isExpanded(r):!1:_!==void 0?X=_:X=le;const q=x.useCallback(()=>{if(B)return;if(F){if(r===void 0)return;const M=j.isExpanded(r);j.toggle(r);const D=j.type==="single"&&!j.collapsible&&M?!0:!M;L==null||L(D);return}const P=!X;_===void 0&&ce(P),L==null||L(P)},[B,F,j,r,X,_,L]),Q=x.useCallback(P=>y==null?void 0:y(P),[y]),ge=x.useCallback(P=>{if(P.key==="Enter"||P.key===" "){P.preventDefault(),q();return}if(F)switch(P.key){case"ArrowDown":P.preventDefault(),il(P.currentTarget,"next");break;case"ArrowUp":P.preventDefault(),il(P.currentTarget,"prev");break;case"Home":P.preventDefault(),il(P.currentTarget,"first");break;case"End":P.preventDefault(),il(P.currentTarget,"last");break}},[q,F]),Y=x.useId(),Z=`${Y}-header`,se=`${Y}-body`,V=z==="sm"?16:z==="md"?18:20,H=c??t.jsxs(t.Fragment,{children:[f&&t.jsx("span",{className:Ht.checkboxWrap,children:t.jsx(um,{size:z,checked:v,defaultChecked:g,indeterminate:w,disabled:B,onChange:Q})}),l&&t.jsx("span",{className:Ht.iconSlot,"aria-hidden":"true",children:l})]});return t.jsxs("div",{ref:k,"data-accordion-item":"","data-expanded":X||void 0,"data-disabled":B||void 0,"data-size":z,"data-depth":$,className:K(Ht.item,Ht[`size_${z}`],N),style:{"--accordion-depth":$},...T,children:[t.jsxs("div",{className:Ht.header,children:[t.jsx("button",{type:"button",id:Z,"data-accordion-header-button":"","data-accordion-depth":$,className:Ht.hitTarget,"aria-expanded":X,"aria-controls":se,"aria-disabled":B||void 0,disabled:B,onClick:q,onKeyDown:ge}),t.jsxs("div",{className:Ht.headerContent,children:[t.jsx("span",{className:Ht.chevron,"aria-hidden":"true",children:t.jsx(ir,{size:V,color:"currentColor"})}),H,t.jsxs("div",{className:Ht.labelBlock,children:[t.jsx("span",{className:Ht.label,children:s}),i&&t.jsx("span",{className:Ht.description,children:i})]}),p&&t.jsx("div",{className:Ht.trailingSlot,children:p})]})]}),t.jsx("div",{id:se,role:"region","aria-labelledby":Z,className:Ht.body,"aria-hidden":!X,children:t.jsx("div",{className:Ht.bodyInner,children:t.jsx("div",{className:Ht.bodyContent,children:t.jsx(ku.Provider,{value:$+1,children:C})})})})]})});M4.displayName="AccordionItem";const I4="_root_1nyuz_6",N4="_sm_1nyuz_20",L4="_md_1nyuz_29",T4="_lg_1nyuz_38",A4="_divider_1nyuz_48",E4="_interactive_1nyuz_53",$4="_disabled_1nyuz_60",P4="_destructive_1nyuz_64",R4="_selected_1nyuz_78",D4="_label_1nyuz_87",z4="_description_1nyuz_97",F4="_leadingSlot_1nyuz_101",B4="_trailingSlot_1nyuz_102",O4="_content_1nyuz_115",H4="_taSwitch_1nyuz_167",W4="_taSwitchThumb_1nyuz_188",U4="_taCheckbox_1nyuz_203",V4="_taRadio_1nyuz_226",G4="_taRadioDot_1nyuz_244",q4="_taExpand_1nyuz_252",Z4="_taStatus_1nyuz_266",Y4="_taStatus_success_1nyuz_273",K4="_taStatus_warning_1nyuz_274",Q4="_taStatus_error_1nyuz_275",X4="_taStatus_info_1nyuz_276",Nt={root:I4,sm:N4,md:L4,lg:T4,divider:A4,interactive:E4,disabled:$4,destructive:P4,selected:R4,label:D4,description:z4,leadingSlot:F4,trailingSlot:B4,content:O4,taSwitch:H4,taSwitchThumb:W4,taCheckbox:U4,taRadio:V4,taRadioDot:G4,taExpand:q4,taStatus:Z4,taStatus_success:Y4,taStatus_warning:K4,taStatus_error:Q4,taStatus_info:X4},fm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};fm.displayName="ArrowUpRightIcon";const J4=({checked:r})=>t.jsx("span",{className:Nt.taSwitch,"data-checked":r||void 0,"aria-hidden":"true",children:t.jsx("span",{className:Nt.taSwitchThumb})}),e6=({checked:r})=>t.jsx("span",{className:Nt.taCheckbox,"data-checked":r||void 0,"aria-hidden":"true",children:r&&t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:t.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),t6=({checked:r})=>t.jsx("span",{className:Nt.taRadio,"data-checked":r||void 0,"aria-hidden":"true",children:r&&t.jsx("span",{className:Nt.taRadioDot})}),n6=({count:r,label:s})=>{const i=r!==void 0?String(r):s;return i?t.jsx(Fi,{"aria-hidden":"true",children:i}):null},r6=({expanded:r})=>t.jsx("span",{className:Nt.taExpand,"data-expanded":r||void 0,"aria-hidden":"true",children:t.jsx(ir,{size:16,color:"currentColor"})}),o6=({variant:r})=>t.jsx("span",{className:K(Nt.taStatus,Nt[`taStatus_${r}`]),"aria-hidden":"true"}),s6=new Set(["badge","status"]),_r=x.forwardRef(({label:r,description:s,leadingSlot:i,trailingSlot:l,trailingAction:c,checked:p,defaultChecked:f=!1,onCheckedChange:v,badgeCount:g,badgeLabel:w,expanded:y=!1,statusVariant:_="success",divider:b=!0,size:L="md",interactive:E,selected:I=!1,destructive:N=!1,disabled:C=!1,className:T,onClick:k,onKeyDown:j,...$},F)=>{const z=c==="switch"||c==="checkbox"||c==="radio",[B,le]=x.useState(f),ce=z?p!==void 0?p:B:!1,X=E||!!k||z||c!==void 0&&!s6.has(c),q=c==="switch"?"switch":c==="checkbox"?"checkbox":c==="radio"?"radio":X?"button":void 0,Q=x.useCallback(Z=>{if(!C){if(z){const se=!ce;p===void 0&&le(se),v==null||v(se)}k==null||k(Z)}},[C,z,ce,p,v,k]),ge=x.useCallback(Z=>{X&&!C&&(Z.key==="Enter"||Z.key===" ")&&(Z.preventDefault(),Q(Z)),j==null||j(Z)},[X,C,Q,j]),Y=l??(()=>{if(!c)return null;switch(c){case"chevron":return t.jsx(ir,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return t.jsx(fm,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return t.jsx(J4,{checked:ce});case"checkbox":return t.jsx(e6,{checked:ce});case"radio":return t.jsx(t6,{checked:ce});case"badge":return t.jsx(n6,{count:g,label:w});case"expand":return t.jsx(r6,{expanded:y});case"status":return t.jsx(o6,{variant:_});default:return null}})();return t.jsxs("div",{ref:F,role:q,tabIndex:X&&!C?0:void 0,"aria-checked":z?ce:void 0,"aria-selected":I||void 0,"aria-disabled":C||void 0,"data-selected":I||void 0,"data-disabled":C||void 0,"data-destructive":N||void 0,"data-trailing-action":c??void 0,className:K(Nt.root,Nt[L],b&&Nt.divider,X&&Nt.interactive,I&&Nt.selected,N&&Nt.destructive,C&&Nt.disabled,T),onClick:C?void 0:Q,onKeyDown:ge,...$,children:[i&&t.jsx("div",{className:Nt.leadingSlot,children:i}),t.jsxs("div",{className:Nt.content,children:[t.jsx("span",{className:Nt.label,children:r}),s&&t.jsx("span",{className:Nt.description,children:s})]}),Y&&t.jsx("div",{className:Nt.trailingSlot,children:Y})]})});_r.displayName="ListItem";const i6="_root_2hiai_7",a6="_fullWidth_2hiai_12",l6="_panel_2hiai_19",c6="_panelInner_2hiai_73",d6="_item_2hiai_81",u6="_groupHeading_2hiai_87",p6="_groupHeadingLabel_2hiai_94",f6="_groupHeadingCollapsible_2hiai_106",h6="_groupChevron_2hiai_119",m6="_groupDivider_2hiai_133",sr={root:i6,fullWidth:a6,panel:l6,panelInner:c6,item:d6,groupHeading:u6,groupHeadingLabel:p6,groupHeadingCollapsible:f6,groupChevron:h6,groupDivider:m6};function g6({group:r,size:s,closeOnSelect:i,onClose:l}){const[c,p]=x.useState(r.defaultExpanded??!0);return t.jsxs("div",{children:[r.heading&&t.jsxs("div",{className:K(sr.groupHeading,r.collapsible&&sr.groupHeadingCollapsible),onClick:r.collapsible?()=>p(f=>!f):void 0,"aria-expanded":r.collapsible?c:void 0,children:[t.jsx("span",{className:sr.groupHeadingLabel,children:r.heading}),r.collapsible&&t.jsx("span",{className:sr.groupChevron,"data-expanded":c||void 0,"aria-hidden":"true",children:t.jsx(ir,{size:12})})]}),c&&t.jsx("div",{role:"group","aria-label":r.heading,children:r.options.map((f,v)=>{const g=f.trailingAction==="switch"||f.trailingAction==="checkbox"||f.trailingAction==="radio";return t.jsx(_r,{role:"menuitem",size:s,label:f.label,description:f.description,leadingSlot:f.leadingSlot,trailingAction:f.trailingAction,trailingSlot:f.trailingSlot,disabled:f.disabled,destructive:f.destructive,selected:f.selected,checked:f.checked,defaultChecked:f.defaultChecked,onCheckedChange:f.onCheckedChange,badgeCount:f.badgeCount,badgeLabel:f.badgeLabel,expanded:f.expanded,statusVariant:f.statusVariant,divider:f.divider??!1,className:sr.item,onClick:()=>{var w;(w=f.onClick)==null||w.call(f),i&&!g&&l()}},f.id)})})]})}const Fu=x.forwardRef(({trigger:r,groups:s,size:i="sm",width:l=260,placement:c="bottom-start",open:p,defaultOpen:f=!1,onOpenChange:v,disabled:g=!1,closeOnSelect:w=!0,fullWidth:y=!1,className:_,...b},L)=>{const[E,I]=x.useState(f),N=x.useRef(null),C=p!==void 0?p:E,T=x.useCallback(j=>{N.current=j,L&&(typeof L=="function"?L(j):L.current=j)},[L]),k=x.useCallback(j=>{p===void 0&&I(j),v==null||v(j)},[p,v]);return x.useEffect(()=>{if(!C)return;const j=$=>{var F;(F=N.current)!=null&&F.contains($.target)||k(!1)};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[C,k]),x.useEffect(()=>{if(!C)return;const j=$=>{$.key==="Escape"&&k(!1)};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[C,k]),t.jsxs("div",{ref:T,className:K(sr.root,y&&sr.fullWidth,_),...b,children:[t.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":C,tabIndex:g?-1:0,onClick:g?void 0:()=>k(!C),onKeyDown:g?void 0:j=>{(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),k(!C))},children:r}),t.jsx("div",{className:sr.panel,"data-open":C||void 0,"data-placement":c,style:{width:typeof l=="number"?`${l}px`:l},role:"menu","aria-orientation":"vertical",children:t.jsx("div",{className:sr.panelInner,children:s.map((j,$)=>t.jsxs("div",{children:[$>0&&t.jsx("div",{className:sr.groupDivider,"aria-hidden":"true"}),t.jsx(g6,{group:j,size:i,closeOnSelect:w,onClose:()=>k(!1)})]},j.id))})})]})});Fu.displayName="DropdownMenu";const x6="_root_zkkgh_6",v6="_sm_zkkgh_24",y6="_md_zkkgh_33",w6="_lg_zkkgh_42",j6="_neutral_zkkgh_53",b6="_blue_zkkgh_66",k6="_azure_zkkgh_79",_6="_purple_zkkgh_92",C6="_pink_zkkgh_105",S6="_red_zkkgh_118",M6="_orange_zkkgh_131",I6="_yellow_zkkgh_144",N6="_matcha_zkkgh_157",L6="_green_zkkgh_170",T6="_subtle_zkkgh_184",A6="_outline_zkkgh_190",E6="_solid_zkkgh_196",$6="_dot_zkkgh_203",P6="_icon_zkkgh_212",R6="_dismiss_zkkgh_224",go={root:x6,sm:v6,md:y6,lg:w6,neutral:j6,blue:b6,azure:k6,purple:_6,pink:C6,red:S6,orange:M6,yellow:I6,matcha:N6,green:L6,subtle:T6,outline:A6,solid:E6,dot:$6,icon:P6,dismiss:R6},D6={sm:10,md:12,lg:14},mt=x.forwardRef(({variant:r="subtle",color:s="neutral",size:i="md",dot:l,leadingIcon:c,dismissible:p,onDismiss:f,className:v,children:g,...w},y)=>t.jsxs("span",{ref:y,className:K(go.root,go[i],go[s],go[r],v),...w,children:[l&&t.jsx("span",{className:go.dot,"aria-hidden":"true"}),c&&t.jsx("span",{className:K(go.icon,"alloy-icon-slot"),"aria-hidden":"true",children:c}),g,p&&t.jsx("button",{type:"button",className:go.dismiss,"aria-label":"Remove",onClick:_=>{_.stopPropagation(),f==null||f()},children:t.jsx(Ps,{size:D6[i]})})]}));mt.displayName="Tag";function Vd({size:r=24,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})}const yn=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:s,fill:"none"}),t.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})};yn.displayName="CheckCircleIcon";const yl=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};yl.displayName="Trash03Icon";const z6="_hiddenInput_7w2s5_8",F6="_area_7w2s5_19",B6="_uploadIcon_7w2s5_53",O6="_textBlock_7w2s5_59",H6="_title_7w2s5_67",W6="_description_7w2s5_76",U6="_fileRow_7w2s5_88",V6="_fileIcon_7w2s5_96",G6="_fileName_7w2s5_101",q6="_successIcon_7w2s5_115",Z6="_removeBtn_7w2s5_121",Y6="_progressWrap_7w2s5_145",K6="_progressBar_7w2s5_153",Q6="_progressFill_7w2s5_161",X6="_progressLabel_7w2s5_168",J6="_errorRow_7w2s5_178",ew="_errorIcon_7w2s5_186",tw="_errorText_7w2s5_192",nw="_areaMulti_7w2s5_206",rw="_multiDropZone_7w2s5_214",ow="_fileList_7w2s5_244",sw="_fileListItem_7w2s5_254",iw="_inline_7w2s5_267",aw="_inlineIcon_7w2s5_309",lw="_inlineText_7w2s5_330",cw="_inlineProgress_7w2s5_353",dw="_inlineProgressFill_7w2s5_363",Oe={hiddenInput:z6,area:F6,uploadIcon:B6,textBlock:O6,title:H6,description:W6,fileRow:U6,fileIcon:V6,fileName:G6,successIcon:q6,removeBtn:Z6,progressWrap:Y6,progressBar:K6,progressFill:Q6,progressLabel:X6,errorRow:J6,errorIcon:ew,errorText:tw,areaMulti:nw,multiDropZone:rw,fileList:ow,fileListItem:sw,inline:iw,inlineIcon:aw,inlineText:lw,inlineProgress:cw,inlineProgressFill:dw};function Gd(r){const s=r.name.lastIndexOf(".");return s!==-1?r.name.slice(s+1).toUpperCase():r.type?(r.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const uw=x.forwardRef(({variant:r="area",multiple:s=!1,state:i="empty",progress:l=0,file:c,files:p,errorMessage:f,title:v="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:w,onFileSelect:y,onFilesSelect:_,onClear:b,onRemoveFile:L,fieldVariant:E="outlined",disabled:I=!1,className:N,...C},T)=>{const k=x.useRef(null),[j,$]=x.useState(!1),F=!I&&(s||i==="empty"),z=x.useCallback(()=>{var Z;!I&&(s||i==="empty")&&((Z=k.current)==null||Z.click())},[I,s,i]),B=x.useCallback(Z=>{var se;if(s){const V=Z.target.files?Array.from(Z.target.files):[];V.length&&(_==null||_(V))}else{const V=(se=Z.target.files)==null?void 0:se[0];V&&(y==null||y(V))}Z.target.value=""},[s,y,_]),le=x.useCallback(Z=>{Z.preventDefault(),F&&$(!0)},[F]),ce=x.useCallback(()=>$(!1),[]),X=x.useCallback(Z=>{var se;if(Z.preventDefault(),$(!1),!!F)if(s){const V=Z.dataTransfer.files?Array.from(Z.dataTransfer.files):[];V.length&&(_==null||_(V))}else{const V=(se=Z.dataTransfer.files)==null?void 0:se[0];V&&(y==null||y(V))}},[F,s,y,_]),q=t.jsx("input",{ref:k,type:"file",className:Oe.hiddenInput,accept:w,multiple:s,disabled:I,"aria-hidden":"true",tabIndex:-1,onChange:B}),Q=c?t.jsxs("div",{className:Oe.fileRow,children:[t.jsx("span",{className:`${Oe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(Gn,{size:16})}),t.jsx("span",{className:Oe.fileName,children:c.name}),t.jsx(mt,{size:"sm",variant:"subtle",children:Gd(c)}),i==="complete"&&t.jsx("span",{className:`${Oe.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(yn,{size:16})}),t.jsx("button",{type:"button",className:Oe.removeBtn,onClick:b,"aria-label":"Remove file",children:t.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:t.jsx(yl,{size:14})})})]}):null;if(r==="area"){if(s){const Z=p??[];return t.jsxs("div",{ref:T,className:K(Oe.areaMulti,N),"data-drag-over":j||void 0,"data-disabled":I||void 0,onDragOver:le,onDragLeave:ce,onDrop:X,...C,children:[q,t.jsxs("div",{className:Oe.multiDropZone,children:[t.jsx("span",{className:`${Oe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(Vd,{size:24})}),t.jsxs("div",{className:Oe.textBlock,children:[t.jsx("p",{className:Oe.title,children:v}),t.jsx("p",{className:Oe.description,children:g})]}),t.jsx(Fe,{variant:"tertiary",size:"sm",onClick:z,disabled:I,children:"Browse Files"})]}),Z.length>0&&t.jsx("ul",{className:Oe.fileList,"aria-label":"Selected files",children:Z.map((se,V)=>t.jsxs("li",{className:Oe.fileListItem,children:[t.jsx("span",{className:`${Oe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(Gn,{size:16})}),t.jsx("span",{className:Oe.fileName,children:se.name}),t.jsx(mt,{size:"sm",variant:"subtle",children:Gd(se)}),t.jsx("button",{type:"button",className:Oe.removeBtn,onClick:()=>L==null?void 0:L(V),"aria-label":`Remove ${se.name}`,disabled:I,children:t.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:t.jsx(yl,{size:14})})})]},`${se.name}-${V}`))})]})}return t.jsxs("div",{ref:T,className:K(Oe.area,N),"data-state":i,"data-drag-over":j||void 0,"data-disabled":I||void 0,onDragOver:le,onDragLeave:ce,onDrop:X,...C,children:[q,i==="empty"&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:`${Oe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(Vd,{size:24})}),t.jsxs("div",{className:Oe.textBlock,children:[t.jsx("p",{className:Oe.title,children:v}),t.jsx("p",{className:Oe.description,children:g})]}),t.jsx(Fe,{variant:"tertiary",size:"sm",onClick:z,disabled:I,children:"Browse File"})]}),i==="uploading"&&t.jsxs(t.Fragment,{children:[Q,t.jsxs("div",{className:Oe.progressWrap,children:[t.jsx("div",{className:Oe.progressBar,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:t.jsx("div",{className:Oe.progressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})}),t.jsxs("p",{className:Oe.progressLabel,children:[l,"% uploaded"]})]})]}),i==="complete"&&Q,i==="error"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:Oe.errorRow,children:[t.jsx("span",{className:`${Oe.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(Ms,{size:20})}),t.jsx("p",{className:Oe.errorText,children:f??"Upload failed. Please try again."})]}),t.jsx(Fe,{variant:"tertiary",size:"sm",onClick:z,disabled:I,children:"Try Again"})]})]})}const ge={empty:t.jsx(Vd,{size:16}),uploading:t.jsx(Gn,{size:16}),complete:t.jsx(yn,{size:16}),error:t.jsx(Ms,{size:16})}[i],Y=(i==="uploading"||i==="complete")&&!!c;return t.jsxs("div",{ref:T,className:K(Oe.inline,N),"data-state":i,"data-field-variant":E,"data-disabled":I||void 0,...C,children:[q,t.jsx("span",{className:`${Oe.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ge}),t.jsxs("span",{className:Oe.inlineText,"data-has-file":Y?"":void 0,children:[i==="empty"&&v,i==="uploading"&&(c==null?void 0:c.name),i==="complete"&&(c==null?void 0:c.name),i==="error"&&(f??"Upload failed. Please try again.")]}),Y&&t.jsx(mt,{size:"sm",variant:"subtle",children:Gd(c)}),(i==="uploading"||i==="complete"||i==="error")&&t.jsx("button",{type:"button",className:Oe.removeBtn,onClick:b,"aria-label":"Remove file",children:t.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:t.jsx(yl,{size:14})})}),i==="empty"&&t.jsx(Fe,{variant:"tertiary",size:"xs",onClick:z,disabled:I,children:"Browse"}),i==="uploading"&&t.jsx("div",{className:Oe.inlineProgress,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:t.jsx("div",{className:Oe.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})})]})});uw.displayName="FileUploader";const pw="_wrapper_1zy7i_8",fw="_labelRow_1zy7i_16",hw="_label_1zy7i_16",mw="_required_1zy7i_28",gw="_labelIcon_1zy7i_36",xw="_sm_1zy7i_46",vw="_md_1zy7i_47",yw="_lg_1zy7i_48",ww="_shell_1zy7i_44",jw="_outlined_1zy7i_75",bw="_underlined_1zy7i_102",kw="_leadingSlot_1zy7i_146",_w="_trailingSlot_1zy7i_158",Cw="_trailingActionWrap_1zy7i_171",Sw="_trailingActionBtn_1zy7i_178",Mw="_successTrailingSlot_1zy7i_199",Iw="_errorTrailingSlot_1zy7i_204",Nw="_control_1zy7i_216",Lw="_selectValue_1zy7i_256",Tw="_selectPlaceholder_1zy7i_262",Aw="_selectChevron_1zy7i_266",Ew="_selectChevronOpen_1zy7i_271",$w="_textareaShell_1zy7i_274",Pw="_textareaControl_1zy7i_288",Rw="_footer_1zy7i_305",Dw="_footerRow_1zy7i_317",zw="_footerError_1zy7i_318",Fw="_footerSuccess_1zy7i_319",Bw="_footerIcon_1zy7i_322",Ow="_wrapperHorizontal_1zy7i_332",Hw="_horizontalLabelCol_1zy7i_338",Ww="_horizontalLabelHint_1zy7i_347",Uw="_horizontalControlCol_1zy7i_356",Vw="_msContainer_1zy7i_370",Gw="_msShell_1zy7i_379",qw="_msOpen_1zy7i_394",Zw="_msDisabled_1zy7i_401",Yw="_msBody_1zy7i_404",Kw="_msPlaceholder_1zy7i_413",Qw="_msChevron_1zy7i_423",Xw="_msChevronOpen_1zy7i_434",Jw="_msPanel_1zy7i_437",Ne={wrapper:pw,labelRow:fw,label:hw,required:mw,labelIcon:gw,sm:xw,md:vw,lg:yw,shell:ww,outlined:jw,underlined:bw,leadingSlot:kw,trailingSlot:_w,trailingActionWrap:Cw,trailingActionBtn:Sw,successTrailingSlot:Mw,errorTrailingSlot:Iw,control:Nw,selectValue:Lw,selectPlaceholder:Tw,selectChevron:Aw,selectChevronOpen:Ew,textareaShell:$w,textareaControl:Pw,footer:Rw,footerRow:Dw,footerError:zw,footerSuccess:Fw,footerIcon:Bw,wrapperHorizontal:Ow,horizontalLabelCol:Hw,horizontalLabelHint:Ww,horizontalControlCol:Uw,msContainer:Vw,msShell:Gw,msOpen:qw,msDisabled:Zw,msBody:Yw,msPlaceholder:Kw,msChevron:Qw,msChevronOpen:Xw,msPanel:Jw};function Rs({label:r,labelIcon:s,labelDescription:i,hint:l,error:c,success:p,required:f,htmlFor:v,layout:g="vertical",labelWidth:w=160,className:y,children:_}){const b=c??p??l,L=c?"error":p?"success":"hint",E=b?t.jsxs("p",{className:K(Ne.footer,L==="error"&&Ne.footerError,L==="success"&&Ne.footerSuccess),role:L==="error"?"alert":void 0,"aria-live":L==="error"?"assertive":void 0,children:[L==="hint"&&t.jsx("span",{className:`${Ne.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(Ms,{size:12})}),b]}):null,I=r!=null?t.jsxs("div",{className:Ne.labelRow,children:[t.jsx("label",{className:Ne.label,htmlFor:v,children:r}),f&&t.jsx("span",{className:Ne.required,"aria-hidden":"true",children:"*"}),s&&t.jsx("span",{className:`${Ne.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:s})]}):null;if(g==="horizontal"){const N={width:typeof w=="number"?`${w}px`:w};return t.jsxs("div",{className:K(Ne.wrapper,Ne.wrapperHorizontal,y),children:[(I||i)&&t.jsxs("div",{className:Ne.horizontalLabelCol,style:N,children:[I,i&&t.jsx("p",{className:Ne.horizontalLabelHint,children:i})]}),t.jsxs("div",{className:Ne.horizontalControlCol,children:[_,E]})]})}return t.jsxs("div",{className:K(Ne.wrapper,y),children:[I,_,E]})}function Gi({variant:r="outlined",size:s="md",error:i,success:l,disabled:c,readOnly:p,leadingIcon:f,trailingIcon:v,trailingAction:g,isTextarea:w,focused:y,className:_,children:b}){const L=s==="sm"?14:s==="lg"?18:16,E=l&&!i&&!v&&!g?t.jsx(yn,{size:L}):null,I=i&&!v&&!g?t.jsx(Ms,{size:L}):null,N=!!f,C=!!(v||g||E||I);return t.jsxs("div",{className:K(Ne.shell,Ne[r],Ne[s],w&&Ne.textareaShell,_),"data-error":i||void 0,"data-success":l||void 0,"data-disabled":c||void 0,"data-readonly":p||void 0,"data-focused":y||void 0,"data-has-leading":N||void 0,"data-has-trailing":C||void 0,children:[f&&t.jsx("span",{className:K(Ne.leadingSlot,"alloy-icon-slot"),children:f}),b,g?t.jsx("span",{className:Ne.trailingActionWrap,children:g}):v||E||I?t.jsx("span",{className:K(Ne.trailingSlot,"alloy-icon-slot",E&&Ne.successTrailingSlot,I&&Ne.errorTrailingSlot),children:v??E??I}):null]})}const Ns=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:v="md",type:g="text",leadingIcon:w,trailingIcon:y,layout:_,labelWidth:b,labelDescription:L,id:E,disabled:I,readOnly:N,className:C,...T},k)=>{const j=x.useId(),$=E??j;return t.jsx(Rs,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:$,layout:_,labelWidth:b,labelDescription:L,className:C,children:t.jsx(Gi,{variant:f,size:v,error:!!l,success:!!c,disabled:I,readOnly:N,leadingIcon:w,trailingIcon:y,children:t.jsx("input",{ref:k,id:$,type:g,disabled:I,readOnly:N,"aria-invalid":l?!0:void 0,"aria-describedby":i||l||c?`${$}-footer`:void 0,className:K(Ne.control),...T})})})});Ns.displayName="TextField";const Bu=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:v="md",leadingIcon:g,trailingIcon:w,layout:y,labelWidth:_,labelDescription:b,id:L,disabled:E,readOnly:I,className:N,...C},T)=>{const k=x.useId(),j=L??k;return t.jsx(Rs,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:j,layout:y,labelWidth:_,labelDescription:b,className:N,children:t.jsx(Gi,{variant:f,size:v,error:!!l,success:!!c,disabled:E,readOnly:I,leadingIcon:g,trailingIcon:w,isTextarea:!0,children:t.jsx("textarea",{ref:T,id:j,disabled:E,readOnly:I,"aria-invalid":l?!0:void 0,className:K(Ne.control,Ne.textareaControl),...C})})})});Bu.displayName="TextArea";const e9={sm:"sm",md:"md",lg:"lg"},Ln=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:v="md",leadingIcon:g,layout:w,labelWidth:y,labelDescription:_,options:b,value:L,defaultValue:E="",onChange:I,placeholder:N="Select an option…",disabled:C,readOnly:T,id:k,className:j},$)=>{var H;const F=x.useId(),z=k??F,B=L!==void 0,[le,ce]=x.useState(E),X=B?L:le,q=x.useCallback(P=>{B||ce(P),I==null||I(P)},[B,I]),[Q,ge]=x.useState(!1),Y=(H=b.find(P=>P.value===X))==null?void 0:H.label,Z=v==="sm"?14:v==="lg"?18:16,se=e9[v],V=t.jsx(Gi,{variant:f,size:v,error:!!l,success:!!c,disabled:C,readOnly:T,focused:Q,leadingIcon:g,trailingIcon:t.jsx("span",{className:K(Ne.selectChevron,Q&&Ne.selectChevronOpen),"aria-hidden":"true",children:t.jsx(An,{size:Z})}),children:t.jsx("span",{className:K(Ne.control,Ne.selectValue,!Y&&Ne.selectPlaceholder),children:Y??N})});return t.jsx(Rs,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:z,layout:w,labelWidth:y,labelDescription:_,className:j,children:t.jsx(Fu,{ref:$,id:z,fullWidth:!0,trigger:V,groups:[{id:"options",options:b.map(P=>({id:P.value,label:P.label,disabled:P.disabled,selected:P.value===X,onClick:()=>q(P.value)}))}],size:se,width:"100%",placement:"bottom-start",open:Q,onOpenChange:ge,disabled:C||T})})});Ln.displayName="SelectField";const hm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})};hm.displayName="EyeIcon";const mm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M3 3L21 21",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})};mm.displayName="EyeOffIcon";const t9=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:v="md",leadingIcon:g,layout:w,labelWidth:y,labelDescription:_,id:b,disabled:L,readOnly:E,className:I,...N},C)=>{const T=x.useId(),k=b??T,[j,$]=x.useState(!1),F=v==="sm"?14:v==="lg"?18:16;return t.jsx(Rs,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:k,layout:w,labelWidth:y,labelDescription:_,className:I,children:t.jsx(Gi,{variant:f,size:v,error:!!l,success:!!c,disabled:L,readOnly:E,leadingIcon:g,trailingAction:t.jsx("button",{type:"button",className:`${Ne.trailingActionBtn} alloy-icon-slot`,onClick:()=>$(z=>!z),tabIndex:L?-1:0,"aria-label":j?"Hide password":"Show password","aria-pressed":j,children:j?t.jsx(mm,{size:F}):t.jsx(hm,{size:F})}),children:t.jsx("input",{ref:C,id:k,type:j?"text":"password",disabled:L,readOnly:E,"aria-invalid":l?!0:void 0,autoComplete:"current-password",className:K(Ne.control),...N})})})});t9.displayName="PasswordField";const Ou=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Ou.displayName="SearchSmIcon";const Ul=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:v="md",onClear:g,onChange:w,layout:y,labelWidth:_,labelDescription:b,id:L,value:E,defaultValue:I,disabled:N,readOnly:C,className:T,...k},j)=>{const $=x.useId(),F=L??$,z=v==="sm"?14:v==="lg"?18:16,B=E!==void 0?String(E).length>0:void 0,le=x.useCallback(ce=>{w==null||w(ce)},[w]);return t.jsx(Rs,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:F,layout:y,labelWidth:_,labelDescription:b,className:T,children:t.jsx(Gi,{variant:f,size:v,error:!!l,success:!!c,disabled:N,readOnly:C,leadingIcon:t.jsx(Ou,{size:z}),trailingAction:B?t.jsx("button",{type:"button",className:`${Ne.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:N?-1:0,"aria-label":"Clear search",children:t.jsx(Ps,{size:z})}):void 0,children:t.jsx("input",{ref:j,id:F,type:"search",value:E,defaultValue:I,disabled:N,readOnly:C,"aria-invalid":l?!0:void 0,onChange:le,className:K(Ne.control),...k})})})});Ul.displayName="SearchField";const n9=x.forwardRef((r,s)=>t.jsx(Ns,{ref:s,type:"email",autoComplete:"email",inputMode:"email",...r}));n9.displayName="EmailField";const gm=x.forwardRef((r,s)=>t.jsx(Ns,{ref:s,type:"number",inputMode:"numeric",...r}));gm.displayName="NumberField";const r9={sm:"sm",md:"sm",lg:"md"},o9={sm:"sm",md:"md",lg:"lg"},s9=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:v="md",layout:g,labelWidth:w,labelDescription:y,options:_,value:b,defaultValue:L=[],onChange:E,placeholder:I="Select options…",disabled:N,readOnly:C,id:T,className:k},j)=>{const $=x.useId(),F=T??$,z=`${F}-list`,B=x.useRef(null),le=b!==void 0,[ce,X]=x.useState(L),q=le?b:ce,Q=x.useCallback(D=>{le||X(D),E==null||E(D)},[le,E]),[ge,Y]=x.useState(!1);x.useEffect(()=>{if(!ge)return;const D=J=>{B.current&&!B.current.contains(J.target)&&Y(!1)},re=J=>{J.key==="Escape"&&Y(!1)};return document.addEventListener("mousedown",D),document.addEventListener("keydown",re),()=>{document.removeEventListener("mousedown",D),document.removeEventListener("keydown",re)}},[ge]);const Z=D=>{if(N||C)return;const re=q.includes(D)?q.filter(J=>J!==D):[...q,D];Q(re)},se=D=>{N||C||((D.key==="Enter"||D.key===" ")&&(D.preventDefault(),Y(re=>!re)),D.key==="Backspace"&&q.length>0&&!ge&&Q(q.slice(0,-1)))},V=v==="sm"?14:v==="lg"?18:16,H=r9[v],P=o9[v],M=Object.fromEntries(_.map(D=>[D.value,D.label]));return t.jsx(Rs,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:F,layout:g,labelWidth:w,labelDescription:y,className:k,children:t.jsxs("div",{ref:B,className:Ne.msContainer,children:[t.jsxs("div",{ref:j,id:F,role:"combobox","aria-haspopup":"listbox","aria-expanded":ge,"aria-controls":z,"aria-disabled":N||void 0,tabIndex:N?-1:0,className:K(Ne.msShell,Ne[f],Ne[v],ge&&Ne.msOpen,N&&Ne.msDisabled),"data-error":l?!0:void 0,"data-success":c&&!l?!0:void 0,"data-disabled":N||void 0,onClick:()=>{!N&&!C&&Y(D=>!D)},onKeyDown:se,children:[t.jsx("div",{className:Ne.msBody,children:q.length===0?t.jsx("span",{className:Ne.msPlaceholder,children:I}):q.map(D=>t.jsx(mt,{size:H,variant:"subtle",dismissible:!N&&!C,onDismiss:()=>Q(q.filter(re=>re!==D)),children:M[D]??D},D))}),t.jsx("span",{className:K(Ne.msChevron,"alloy-icon-slot",ge&&Ne.msChevronOpen),children:t.jsx(An,{size:V})})]}),ge&&t.jsx("div",{id:z,role:"listbox","aria-multiselectable":"true","aria-label":typeof r=="string"?r:"Options",className:Ne.msPanel,children:_.map(D=>{const re=q.includes(D.value);return t.jsx(_r,{label:D.label,size:P,trailingAction:"checkbox",checked:re,disabled:D.disabled,role:"option","aria-selected":re,onMouseDown:J=>{J.preventDefault()},onCheckedChange:()=>{D.disabled||Z(D.value)}},D.value)})})]})})});s9.displayName="MultiSelectField";const xm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M15 6L9 12L15 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};xm.displayName="ChevronLeftIcon";const i9="_root_1249j_6",a9="_pageControls_1249j_14",l9="_pageBtn_1249j_21",c9="_ellipsis_1249j_36",d9="_rowsGroup_1249j_51",u9="_rowsSelect_1249j_58",p9="_countText_1249j_64",f9="_groupLabel_1249j_74",h9="_goToGroup_1249j_84",m9="_goToInput_1249j_91",Wn={root:i9,pageControls:a9,pageBtn:l9,ellipsis:c9,rowsGroup:d9,rowsSelect:u9,countText:p9,groupLabel:f9,goToGroup:h9,goToInput:m9};function g9(r,s,i){if(s<=1)return[1];const l=Math.max(2,r-i),c=Math.min(s-1,r+i),p=[1];l>2&&p.push("ellipsis");for(let f=l;f<=c;f++)p.push(f);return c<s-1&&p.push("ellipsis"),s>1&&p.push(s),p}const x9=x.forwardRef(({page:r,totalPages:s,onPageChange:i,showRowsPerPage:l=!1,rowsPerPage:c,rowsPerPageOptions:p=[10,25,50,100],onRowsPerPageChange:f,showGoToPage:v=!1,totalCount:g,siblingCount:w=1,size:y="sm",disabled:_=!1,className:b,...L},E)=>{const[I,N]=x.useState(""),C=y,T=y,k=y==="sm"?14:16,j=g9(r,s,w),$=x.useCallback(B=>{const le=Math.min(Math.max(1,B),s);le!==r&&i(le)},[r,s,i]),F=x.useCallback(B=>{if(B.key==="Enter"){const le=parseInt(I,10);isNaN(le)||$(le),N("")}},[I,$]),z=g!=null&&c!=null?`${(r-1)*c+1}–${Math.min(r*c,g)} of ${g}`:null;return t.jsxs("nav",{ref:E,"aria-label":"Pagination",className:K(Wn.root,b),"data-size":y,...L,children:[l&&t.jsxs("div",{className:Wn.rowsGroup,children:[t.jsx("span",{className:Wn.groupLabel,children:"Rows per page"}),t.jsx("div",{className:Wn.rowsSelect,children:t.jsx(Ln,{size:T,value:c,disabled:_,"aria-label":"Rows per page",onChange:B=>f==null?void 0:f(Number(B.target.value)),children:p.map(B=>t.jsx("option",{value:B,children:B},B))})})]}),z&&t.jsx("span",{className:Wn.countText,"aria-live":"polite",children:z}),t.jsxs("div",{className:Wn.pageControls,role:"group","aria-label":"Page navigation",children:[t.jsx(Fe,{variant:"ghost",size:C,iconOnly:!0,"aria-label":"Previous page",disabled:_||r<=1,onClick:()=>$(r-1),children:t.jsx(xm,{size:k})}),j.map((B,le)=>B==="ellipsis"?t.jsx("span",{className:Wn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${le}`):t.jsx(Fe,{variant:B===r?"secondary":"ghost",size:C,"aria-label":`Page ${B}`,"aria-current":B===r?"page":void 0,disabled:_,onClick:()=>$(B),className:Wn.pageBtn,children:B},B)),t.jsx(Fe,{variant:"ghost",size:C,iconOnly:!0,"aria-label":"Next page",disabled:_||r>=s,onClick:()=>$(r+1),children:t.jsx(ir,{size:k})})]}),v&&t.jsxs("div",{className:Wn.goToGroup,children:[t.jsx("span",{className:Wn.groupLabel,children:"Go to"}),t.jsx("div",{className:Wn.goToInput,children:t.jsx(gm,{size:T,value:I,placeholder:String(r),min:1,max:s,disabled:_,"aria-label":"Go to page number",onChange:B=>N(B.target.value),onKeyDown:F})})]})]})});x9.displayName="Pagination";const v9="_root_1vx33_6",y9="_fullWidth_1vx33_18",w9="_item_1vx33_23",j9="_indicator_1vx33_28",b9="_sm_1vx33_46",k9="_md_1vx33_54",_9="_lg_1vx33_62",C9="_itemSelected_1vx33_109",S9="_itemIcon_1vx33_115",M9="_itemLabel_1vx33_127",Zr={root:v9,fullWidth:y9,item:w9,indicator:j9,sm:b9,md:k9,lg:_9,itemSelected:C9,itemIcon:S9,itemLabel:M9},vm=x.createContext(null);function I9(r){const s=x.useContext(vm);if(!s)throw new Error(`<${r}> must be rendered inside <SegmentedControl>`);return s}const ym=x.forwardRef(({value:r,leadingIcon:s,className:i,children:l,disabled:c,onClick:p,...f},v)=>{const{value:g,onChange:w,disabled:y,name:_}=I9("SegmentedControl.Item"),b=g===r,L=y||!!c;return t.jsxs("button",{ref:v,type:"button",role:"radio","aria-checked":b,name:_,disabled:L,className:K(Zr.item,b&&Zr.itemSelected,i),onClick:E=>{L||w(r),p==null||p(E)},...f,children:[s&&t.jsx("span",{className:K(Zr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:s}),l!==void 0&&t.jsx("span",{className:Zr.itemLabel,children:l})]})});ym.displayName="SegmentedControl.Item";const wm=x.forwardRef(({value:r,defaultValue:s="",onChange:i,size:l="md",disabled:c=!1,fullWidth:p=!1,className:f,children:v,...g},w)=>{const[y,_]=x.useState(s),b=r!==void 0,L=b?r:y,E=x.useId(),I=x.useRef(null);x.useLayoutEffect(()=>{const C=I.current;if(!C)return;const T=C.querySelector('[aria-checked="true"]');T&&(C.style.setProperty("--sc-indicator-x",`${T.offsetLeft}px`),C.style.setProperty("--sc-indicator-w",`${T.offsetWidth}px`))},[L,l]);const N=C=>{b||_(C),i==null||i(C)};return t.jsx(vm.Provider,{value:{value:L,onChange:N,disabled:c,name:E},children:t.jsxs("div",{ref:C=>{I.current=C,typeof w=="function"?w(C):w&&(w.current=C)},role:"radiogroup",className:K(Zr.root,Zr[l],p&&Zr.fullWidth,f),...g,children:[t.jsx("span",{className:Zr.indicator,"aria-hidden":"true"}),v]})})});wm.displayName="SegmentedControl";const tt=Object.assign(wm,{Item:ym}),N9="_root_fkv0x_6",L9="_sm_fkv0x_26",T9="_md_fkv0x_33",A9="_lg_fkv0x_40",E9="_dot_fkv0x_49",$9="_success_fkv0x_58",P9="_warning_fkv0x_65",R9="_error_fkv0x_72",D9="_info_fkv0x_79",z9="_neutral_fkv0x_86",F9="_pending_fkv0x_93",al={root:N9,sm:L9,md:T9,lg:A9,dot:E9,success:$9,warning:P9,error:R9,info:D9,neutral:z9,pending:F9},_s=x.forwardRef(({status:r="neutral",size:s="md",dot:i=!0,className:l,children:c,...p},f)=>t.jsxs("span",{ref:f,className:K(al.root,al[s],al[r],l),...p,children:[i&&t.jsx("span",{className:al.dot,"aria-hidden":"true"}),c]}));_s.displayName="StatusTag";const B9="_root_iuebt_6",O9="_underline_iuebt_15",H9="_background_iuebt_21",W9="_underlineIndicator_iuebt_26",U9="_md_iuebt_43",V9="_lg_iuebt_44",G9="_tab_iuebt_42",q9="_tabSelected_iuebt_77",Z9="_tabIcon_iuebt_99",Y9="_tabLabel_iuebt_111",K9="_tabBadge_iuebt_116",jr={root:B9,underline:O9,background:H9,underlineIndicator:W9,md:U9,lg:V9,tab:G9,tabSelected:q9,tabIcon:Z9,tabLabel:Y9,tabBadge:K9},jm=x.createContext(null);function Q9(r){const s=x.useContext(jm);if(!s)throw new Error(`<${r}> must be rendered inside <Tabs>`);return s}const bm=x.forwardRef(({value:r,leadingIcon:s,trailingBadge:i,disabled:l,onClick:c,className:p,children:f,...v},g)=>{const{value:w,onChange:y,disabled:_,name:b}=Q9("Tabs.Tab"),L=w===r,E=_||!!l;return t.jsxs("button",{ref:g,type:"button",role:"tab","aria-selected":L,name:b,disabled:E,className:K(jr.tab,L&&jr.tabSelected,p),onClick:I=>{E||y(r),c==null||c(I)},...v,children:[s&&t.jsx("span",{className:K(jr.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f!==void 0&&t.jsx("span",{className:jr.tabLabel,children:f}),i&&t.jsx("span",{className:jr.tabBadge,children:i})]})});bm.displayName="Tabs.Tab";const km=x.forwardRef(({variant:r="underline",size:s="md",value:i,defaultValue:l="",onChange:c,disabled:p=!1,className:f,children:v,...g},w)=>{const[y,_]=x.useState(l),b=i!==void 0,L=b?i:y,E=x.useId(),I=x.useRef(null);x.useLayoutEffect(()=>{const C=I.current;if(!C||r!=="underline")return;const T=C.querySelector('[aria-selected="true"]');T&&(C.style.setProperty("--tab-indicator-x",`${T.offsetLeft}px`),C.style.setProperty("--tab-indicator-w",`${T.offsetWidth}px`))},[L,r]);const N=C=>{b||_(C),c==null||c(C)};return t.jsx(jm.Provider,{value:{value:L,onChange:N,disabled:p,variant:r,size:s,name:E},children:t.jsxs("div",{ref:C=>{I.current=C,typeof w=="function"?w(C):w&&(w.current=C)},role:"tablist",className:K(jr.root,jr[r],jr[s],f),...g,children:[r==="underline"&&t.jsx("span",{className:jr.underlineIndicator,"aria-hidden":"true"}),v]})})});km.displayName="Tabs";Object.assign(km,{Tab:bm});const X9="_selectedBorder_1ypeg_7",J9="_selectedFill_1ypeg_12",mh={selectedBorder:X9,selectedFill:J9},e8=x.forwardRef(({selected:r=!1,defaultVariant:s="secondary",selectionStyle:i="border",onSelectedChange:l,onClick:c,className:p,...f},v)=>{const g=y=>{l==null||l(!r),c==null||c(y)},w=r?i==="fill"?mh.selectedFill:mh.selectedBorder:void 0;return t.jsx(Fe,{ref:v,variant:s,"aria-pressed":r,className:K(w,p),onClick:g,...f})});e8.displayName="ToggleButton";const t8="_root_mcb75_6",n8="_disabled_mcb75_13",r8="_sm_mcb75_20",o8="_md_mcb75_31",s8="_lg_mcb75_42",i8="_track_mcb75_54",a8="_trackChecked_mcb75_90",l8="_thumb_mcb75_100",c8="_labelWrap_mcb75_117",d8="_label_mcb75_117",u8="_description_mcb75_139",vr={root:t8,disabled:n8,sm:r8,md:o8,lg:s8,track:i8,trackChecked:a8,thumb:l8,labelWrap:c8,label:d8,description:u8},p8=x.forwardRef(({checked:r,defaultChecked:s=!1,onChange:i,disabled:l,size:c="md",label:p,description:f,id:v,name:g,value:w,className:y},_)=>{const b=x.useId(),L=v??b,E=`${L}-label`,I=r!==void 0,[N,C]=x.useState(s),T=I?r:N,k=()=>{if(l)return;const $=!T;I||C($),i==null||i($)},j=$=>{($.key===" "||$.key==="Enter")&&($.preventDefault(),k())};return t.jsxs("div",{className:K(vr.root,vr[c],l&&vr.disabled,y),children:[t.jsx("button",{ref:_,type:"button",role:"switch",id:L,"aria-checked":T,"aria-labelledby":p?E:void 0,"aria-disabled":l||void 0,tabIndex:l?-1:0,disabled:l,name:g,value:w,className:K(vr.track,T&&vr.trackChecked),"data-checked":T||void 0,"data-disabled":l||void 0,onClick:k,onKeyDown:j,children:t.jsx("span",{className:vr.thumb})}),(p||f)&&t.jsxs("div",{className:vr.labelWrap,children:[p&&t.jsx("label",{id:E,htmlFor:L,className:vr.label,children:p}),f&&t.jsx("span",{className:vr.description,children:f})]})]})});p8.displayName="Switch";const f8="_root_104n4_5",h8="_disabled_104n4_11",m8="_sm_104n4_17",g8="_md_104n4_25",x8="_lg_104n4_33",v8="_controlWrap_104n4_41",y8="_input_104n4_50",w8="_ring_104n4_65",j8="_ringChecked_104n4_90",b8="_ringError_104n4_94",k8="_dot_104n4_104",_8="_labelWrap_104n4_112",C8="_label_104n4_112",S8="_error_104n4_130",M8="_required_104n4_132",I8="_description_104n4_137",on={root:f8,disabled:h8,sm:m8,md:g8,lg:x8,controlWrap:v8,input:y8,ring:w8,ringChecked:j8,ringError:b8,dot:k8,labelWrap:_8,label:C8,error:S8,required:M8,description:I8},N8=x.forwardRef(({value:r,checked:s,onChange:i,disabled:l,error:c,size:p="md",label:f,description:v,id:g,name:w,required:y,className:_},b)=>{const L=x.useId(),E=g??L;return t.jsxs("div",{className:K(on.root,on[p],l&&on.disabled,c&&on.error,_),children:[t.jsxs("div",{className:on.controlWrap,children:[t.jsx("input",{ref:b,type:"radio",id:E,name:w,value:r,checked:s,disabled:l,required:y,"aria-invalid":c||void 0,onChange:()=>i==null?void 0:i(r),className:on.input}),t.jsx("span",{className:K(on.ring,s&&on.ringChecked,c&&on.ringError),"aria-hidden":"true",children:s&&t.jsx("span",{className:on.dot})})]}),(f||v)&&t.jsxs("div",{className:on.labelWrap,children:[f&&t.jsxs("label",{htmlFor:E,className:on.label,children:[f,y&&t.jsx("span",{className:on.required,"aria-hidden":"true",children:" *"})]}),v&&t.jsx("span",{className:on.description,children:v})]})]})});N8.displayName="Radio";const L8="_table_19hy2_8",T8="_sm_19hy2_16",A8="_row_19hy2_30",E8="_head_19hy2_45",$8="_headLabel_19hy2_63",P8="_sortBtn_19hy2_77",R8="_sortIcon_19hy2_100",D8="_cell_19hy2_123",z8="_cellText_19hy2_139",F8="_cellStack_19hy2_167",B8="_cellStackPrimary_19hy2_174",O8="_cellStackSecondary_19hy2_185",H8="_cellActions_19hy2_197",W8="_cellControl_19hy2_204",an={table:L8,sm:T8,row:A8,head:E8,headLabel:$8,sortBtn:P8,sortIcon:R8,cell:D8,cellText:z8,cellStack:F8,cellStackPrimary:B8,cellStackSecondary:O8,cellActions:H8,cellControl:W8},Vl=x.forwardRef(({size:r="md",className:s,children:i,...l},c)=>t.jsx("table",{ref:c,className:K(an.table,r==="sm"&&an.sm,s),...l,children:i}));Vl.displayName="Table";const Gl=x.forwardRef(({children:r,...s},i)=>t.jsx("thead",{ref:i,...s,children:r}));Gl.displayName="TableHeader";const ql=x.forwardRef(({children:r,...s},i)=>t.jsx("tbody",{ref:i,...s,children:r}));ql.displayName="TableBody";const So=x.forwardRef(({hoverable:r=!0,selected:s,className:i,children:l,...c},p)=>t.jsx("tr",{ref:p,className:K(an.row,i),"data-hoverable":r||void 0,"data-selected":s||void 0,"aria-selected":s,...c,children:l}));So.displayName="TableRow";const In=x.forwardRef(({align:r="left",sort:s,onSort:i,className:l,children:c,...p},f)=>{const v=s!==void 0;return t.jsx("th",{ref:f,className:K(an.head,l),"data-align":r!=="left"?r:void 0,scope:"col","aria-sort":s==="asc"?"ascending":s==="desc"?"descending":v?"none":void 0,...p,children:v?t.jsxs("button",{type:"button",className:an.sortBtn,onClick:i,"aria-label":typeof c=="string"?`Sort by ${c}`:void 0,children:[c,t.jsx("span",{className:an.sortIcon,"data-sort":s!=="none"?s:void 0,"aria-hidden":"true",children:t.jsx(An,{size:12,strokeWidth:2})})]}):t.jsx("span",{className:an.headLabel,children:c})})});In.displayName="TableHead";const Nn=x.forwardRef(({align:r="left",compact:s,className:i,children:l,...c},p)=>t.jsx("td",{ref:p,className:K(an.cell,i),"data-align":r!=="left"?r:void 0,"data-compact":s||void 0,...c,children:l}));Nn.displayName="TableCell";const jo=x.forwardRef(({variant:r="primary",size:s="md",wrap:i,className:l,children:c,...p},f)=>t.jsx("span",{ref:f,className:K(an.cellText,l),"data-variant":r!=="primary"?r:void 0,"data-size":s!=="md"?s:void 0,"data-wrap":i||void 0,...p,children:c}));jo.displayName="CellText";const U8=x.forwardRef(({primary:r,secondary:s,className:i,...l},c)=>t.jsxs("div",{ref:c,className:K(an.cellStack,i),...l,children:[t.jsx("span",{className:an.cellStackPrimary,children:r}),s&&t.jsx("span",{className:an.cellStackSecondary,children:s})]}));U8.displayName="CellStack";const V8=x.forwardRef(({size:r="sm",...s},i)=>t.jsx(mt,{ref:i,size:r,...s}));V8.displayName="CellTag";const G8=x.forwardRef(({size:r="sm",...s},i)=>t.jsx(_s,{ref:i,size:r,...s}));G8.displayName="CellStatusTag";const q8=x.forwardRef(({className:r,children:s,...i},l)=>t.jsx("div",{ref:l,className:K(an.cellActions,r),...i,children:s}));q8.displayName="CellActions";const Z8=x.forwardRef(({className:r,children:s,...i},l)=>t.jsx("div",{ref:l,className:K(an.cellControl,r),...i,children:s}));Z8.displayName="CellControl";const Y8="_root_1sz1z_7",K8="_status_1sz1z_50",qd={root:Y8,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:K8},_m=x.forwardRef(({disabled:r=!1,size:s="md",escapeTarget:i,onEscape:l,className:c,children:p,...f},v)=>{const g=x.useRef(null),[w,y]=x.useState(""),_=x.Children.map(p,b=>{if(!x.isValidElement(b))return b;const L=b.props;return x.cloneElement(b,{groupDisabled:r||!!L.groupDisabled})});return x.useEffect(()=>{if(!i||!l)return;const b=L=>{L.key==="Escape"&&l()};return i.addEventListener("keydown",b),()=>i.removeEventListener("keydown",b)},[i,l]),x.useCallback(b=>y(b),[]),t.jsxs("div",{ref:v,"data-size":s,className:K(qd.root,qd[`size-${s}`],c),...f,children:[_,t.jsx("span",{ref:g,className:qd.status,role:"status","aria-live":"polite",children:w})]})});_m.displayName="ComposerActions";function Cm({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Cm.displayName="ClockIcon";const Cs=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Cs.displayName="ArrowNarrowRightIcon";function Vr({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}function wl({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}function Un({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}function Zd({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M19.4 14H15.6C15.0399 14 14.7599 14 14.546 14.109C14.3578 14.2049 14.2049 14.3578 14.109 14.546C14 14.7599 14 15.0399 14 15.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V15.6C21 15.0399 21 14.7599 20.891 14.546C20.7951 14.3578 20.6422 14.2049 20.454 14.109C20.2401 14 19.9601 14 19.4 14Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})}function Q8({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}const Sm=({size:r=16,color:s="currentColor",...i})=>t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:t.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:s})});Sm.displayName="FeatherIcon";const Gr=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:[t.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:s}),t.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:s,strokeWidth:p,strokeLinecap:"round",strokeLinejoin:"round"})]})};Gr.displayName="ClipboardCheckIcon";const Ei=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.25:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:s,strokeWidth:p})})};Ei.displayName="SettingsGearIcon";function xo({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9 21V15H15V21",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})}xo.displayName="HomeLineIcon";const Mm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Mm.displayName="GitBranch01Icon";const Zl=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Zl.displayName="RefreshCw04Icon";const Im=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Im.displayName="StopIcon";const Nm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Nm.displayName="RecordingIcon";function Lm({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Lm.displayName="Microphone02Icon";const Ml=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M19.7479 5.00005C21.1652 6.97029 22 9.38768 22 12C22 14.6124 21.1652 17.0298 19.7479 19M15.7453 8.00005C16.5362 9.13388 17 10.5128 17 12C17 13.4873 16.5362 14.8662 15.7453 16M9.63432 4.36573L6.46863 7.53142C6.29568 7.70437 6.2092 7.79085 6.10828 7.85269C6.01881 7.90752 5.92127 7.94792 5.81923 7.97242C5.70414 8.00005 5.58185 8.00005 5.33726 8.00005H3.6C3.03995 8.00005 2.75992 8.00005 2.54601 8.10904C2.35785 8.20492 2.20487 8.3579 2.10899 8.54606C2 8.75997 2 9.04 2 9.60005V14.4C2 14.9601 2 15.2401 2.10899 15.454C2.20487 15.6422 2.35785 15.7952 2.54601 15.8911C2.75992 16 3.03995 16 3.6 16H5.33726C5.58185 16 5.70414 16 5.81923 16.0277C5.92127 16.0522 6.01881 16.0926 6.10828 16.1474C6.2092 16.2093 6.29568 16.2957 6.46863 16.4687L9.63431 19.6344C10.0627 20.0627 10.2769 20.2769 10.4608 20.2914C10.6203 20.304 10.7763 20.2394 10.8802 20.1177C11 19.9774 11 19.6745 11 19.0687V4.93142C11 4.3256 11 4.0227 10.8802 3.88243C10.7763 3.76073 10.6203 3.69614 10.4608 3.7087C10.2769 3.72317 10.0627 3.93736 9.63432 4.36573Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Ml.displayName="VolumeMaxIcon";const Tm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Tm.displayName="ThumbsUpIcon";const Am=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Am.displayName="ThumbsDownIcon";function Em({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Em.displayName="Copy01Icon";function $m({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z",fill:s}),t.jsx("path",{d:"M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z",fill:s}),t.jsx("path",{d:"M19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10Z",fill:s})]})}$m.displayName="DotsHorizontalIcon";function jl({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}jl.displayName="Download01Icon";function Hu({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Hu.displayName="Pin01Icon";function Wu({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Wu.displayName="ZapIcon";const X8="_base_i93xz_11",J8="_icon_i93xz_45",e7="_sendReady_i93xz_65",t7="_sendStreaming_i93xz_66",n7="_sendDisabled_i93xz_67",r7="_sendError_i93xz_68",o7="_attachIdle_i93xz_131",s7="_attachDisabled_i93xz_145",i7="_attachError_i93xz_152",a7="_voiceIdle_i93xz_165",l7="_voiceRecording_i93xz_179",c7="_voiceDisabled_i93xz_189",d7="_iconStack_i93xz_200",u7="_iconLayer_i93xz_209",Mt={base:X8,icon:J8,sendReady:e7,sendStreaming:t7,sendDisabled:n7,sendError:r7,attachIdle:o7,attachDisabled:s7,attachError:i7,voiceIdle:a7,voiceRecording:l7,voiceDisabled:c7,iconStack:d7,iconLayer:u7},p7={hidden:void 0,ready:Mt.sendReady,"disabled-invalid":Mt.sendDisabled,streaming:Mt.sendStreaming,error:Mt.sendError},f7=(r,s,i)=>{switch(r){case"ready":return"Send message";case"disabled-invalid":return s?`Cannot send: ${s}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Pm=x.forwardRef(({state:r,onSend:s,onStop:i,onRetry:l,invalidReason:c,errorMessage:p,groupDisabled:f,className:v,style:g,...w},y)=>{const _=x.useRef(null),b=x.useRef(null),L=x.useCallback(k=>{b.current=k,typeof y=="function"?y(k):y&&(y.current=k)},[y]),E=x.useCallback(()=>{if(r==="ready"){s==null||s();return}if(r==="streaming"){i==null||i();return}if(r==="error"){const k=b.current;k&&(k.dataset.pressed="true",_.current&&clearTimeout(_.current),_.current=setTimeout(()=>{k.dataset.pressed="false"},140)),l==null||l()}},[r,s,i,l]);if(r==="hidden")return null;const I=!f&&(r==="ready"||r==="streaming"||r==="error"),N=f7(r,c,p),C=r==="disabled-invalid"?c??"Cannot send":r==="error"?p??"Send failed — click to retry":null,T=t.jsx("button",{ref:L,type:"button","data-composer-action":"send","data-state":r,className:K(Mt.base,p7[r],v),style:g,"aria-label":N,disabled:!I,onClick:E,...w,children:t.jsxs("span",{className:Mt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[t.jsx("span",{className:Mt.iconLayer,"data-active":r==="ready"||r==="disabled-invalid"?"true":"false",children:t.jsx(Du,{size:"100%",strokeWidth:2})}),t.jsx("span",{className:Mt.iconLayer,"data-active":r==="streaming"?"true":"false",children:t.jsx(Im,{size:"100%",strokeWidth:1.75})}),t.jsx("span",{className:Mt.iconLayer,"data-active":r==="error"?"true":"false",children:t.jsx(Zl,{size:"100%",strokeWidth:2})})]})});return C?t.jsx(Is,{content:C,placement:"top",children:T}):T});Pm.displayName="ComposerSendButton";const h7={idle:Mt.attachIdle,disabled:Mt.attachDisabled,error:Mt.attachError},m7=(r,s,i)=>{switch(r){case"idle":return"Add attachment";case"disabled":return s?`Attachments unavailable: ${s}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},Rm=x.forwardRef(({state:r,onSelect:s,accept:i,multiple:l=!0,disabledReason:c,errorMessage:p,groupDisabled:f,className:v,style:g,...w},y)=>{const _=x.useRef(null),b=x.useCallback(()=>{var T;(r==="idle"||r==="error")&&((T=_.current)==null||T.click())},[r]),L=x.useCallback(T=>{const k=T.target.files;k&&k.length>0&&(s==null||s(k)),T.target.value=""},[s]),E=!f&&r!=="disabled",I=m7(r,c,p),N=r==="disabled"?c??"Attachments unavailable":r==="error"?p??"Attachment failed":null,C=t.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":r,className:K(Mt.base,h7[r],v),style:g,"aria-label":I,disabled:!E,onClick:b,...w,children:[t.jsx("span",{className:Mt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:t.jsx(zl,{size:"100%",strokeWidth:2})}),t.jsx("input",{ref:_,type:"file",accept:i,multiple:l,onChange:L,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return N?t.jsx(Is,{content:N,placement:"top",children:C}):C});Rm.displayName="ComposerAttachment";const g7={idle:Mt.voiceIdle,recording:Mt.voiceRecording,disabled:Mt.voiceDisabled},x7=(r,s)=>{switch(r){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return s?`Voice unavailable: ${s}`:"Voice unavailable"}},Dm=x.forwardRef(({state:r,onStartRecording:s,onStopRecording:i,disabledReason:l,groupDisabled:c,className:p,style:f,...v},g)=>{const w=x.useCallback(()=>{if(r==="idle"){s==null||s();return}if(r==="recording"){i==null||i();return}},[r,s,i]),y=!c&&r!=="disabled",_=x7(r,l),b=r==="disabled"?l??"Voice unavailable":null,L=t.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":r,className:K(Mt.base,g7[r],p),style:f,"aria-label":_,"aria-pressed":r==="recording"||void 0,disabled:!y,onClick:w,...v,children:t.jsxs("span",{className:Mt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[t.jsx("span",{className:Mt.iconLayer,"data-active":r!=="recording"?"true":"false",children:t.jsx(Lm,{size:"100%",strokeWidth:1.5})}),t.jsx("span",{className:Mt.iconLayer,"data-active":r==="recording"?"true":"false",children:t.jsx(Nm,{size:"100%",strokeWidth:1.5})})]})});return b?t.jsx(Is,{content:b,placement:"top",children:L}):L});Dm.displayName="ComposerVoiceButton";const v7="_root_1afcs_8",y7="_secondary_1afcs_23",w7="_header_1afcs_28",j7="_headerText_1afcs_36",b7="_title_1afcs_43",k7="_subtitle_1afcs_52",_7="_action_1afcs_61",C7="_hero_1afcs_66",S7="_heroValue_1afcs_74",M7="_heroCaption_1afcs_83",I7="_heroChange_1afcs_89",N7="_body_1afcs_95",L7="_legend_1afcs_103",gn={root:v7,secondary:y7,header:w7,headerText:j7,title:b7,subtitle:k7,action:_7,hero:C7,heroValue:S7,heroCaption:M7,heroChange:I7,body:N7,legend:L7},T7=x.forwardRef(({title:r,subtitle:s,action:i,value:l,valueChange:c,valueCaption:p,legend:f,secondary:v,children:g,className:w,...y},_)=>t.jsxs("div",{ref:_,className:K(gn.root,v&&gn.secondary,w),...y,children:[t.jsxs("div",{className:gn.header,children:[t.jsxs("div",{className:gn.headerText,children:[t.jsx("h3",{className:gn.title,children:r}),s&&t.jsx("p",{className:gn.subtitle,children:s})]}),i&&t.jsx("div",{className:gn.action,children:i})]}),(l!==void 0||c||p)&&t.jsxs("div",{className:gn.hero,children:[l!==void 0&&t.jsx("span",{className:gn.heroValue,children:l}),c&&t.jsx("span",{className:gn.heroChange,children:c}),p&&t.jsx("span",{className:gn.heroCaption,children:p})]}),t.jsx("div",{className:gn.body,children:g}),f&&t.jsx("div",{className:gn.legend,children:f})]}));T7.displayName="ChartCard";const A7="_root_je8nq_7",E7="_item_je8nq_17",$7="_swatch_je8nq_23",P7="_label_je8nq_29",R7="_bookend_je8nq_33",fs={root:A7,item:E7,swatch:$7,label:P7,bookend:R7},zm=x.forwardRef(({items:r,before:s,after:i,variant:l="square",swatchSize:c=12,className:p,...f},v)=>t.jsxs("div",{ref:v,className:K(fs.root,p),...f,children:[s&&t.jsx("span",{className:fs.bookend,children:s}),r.map((g,w)=>{const y=l==="line"?{width:c+4,height:2,background:g.color,borderRadius:1}:l==="dot"?{width:c-2,height:c-2,background:g.color,borderRadius:"50%"}:{width:c,height:c,background:g.color};return t.jsxs("span",{className:fs.item,children:[t.jsx("span",{className:fs.swatch,style:y,"aria-hidden":"true"}),g.label!==void 0&&t.jsx("span",{className:fs.label,children:g.label})]},w)}),i&&t.jsx("span",{className:fs.bookend,children:i})]}));zm.displayName="ChartLegend";const D7="_root_igkx4_5",z7="_svgWrap_igkx4_13",F7="_svg_igkx4_13",B7="_gridLine_igkx4_23",O7="_axisLabel_igkx4_28",H7="_legendWrap_igkx4_43",W7="_legendItem_igkx4_51",U7="_legendDot_igkx4_57",V7="_legendLabel_igkx4_64",G7="_tooltip_igkx4_71",q7="_tooltipLabel_igkx4_85",Z7="_tooltipRow_igkx4_95",Y7="_tooltipDot_igkx4_101",K7="_tooltipSeries_igkx4_108",Q7="_tooltipValue_igkx4_115",$e={root:D7,svgWrap:z7,svg:F7,gridLine:B7,axisLabel:O7,legendWrap:H7,legendItem:W7,legendDot:U7,legendLabel:V7,tooltip:G7,tooltipLabel:q7,tooltipRow:Z7,tooltipDot:Y7,tooltipSeries:K7,tooltipValue:Q7},X7=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function Yd(r){if(r===0)return 10;const s=Math.pow(10,Math.floor(Math.log10(r))),i=r/s;return i<=1?s:i<=2?2*s:i<=5?5*s:10*s}function hs(r){return r>=1e3?`${(r/1e3).toFixed(r%1e3===0?0:1)}k`:String(Math.round(r))}const J7=x.forwardRef(({series:r,labels:s,variant:i="grouped",height:l=260,showGrid:c=!0,showLegend:p=!0,yUnit:f="",barRadius:v=2,colors:g,gradientFrom:w="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:_,stackStyle:b="gradient-each",capColor:L,className:E,...I},N)=>{var ae,be,Me,Ve;const C=g&&g.length>0?g:X7,T=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[k,j]=x.useState({visible:!1,x:0,y:0,label:"",items:[]}),$=x.useRef(null),[F,z]=x.useState(540);x.useEffect(()=>{const xe=$.current;if(!xe)return;const Se=new ResizeObserver(Be=>{var ut;const Ke=(ut=Be[0])==null?void 0:ut.contentRect.width;Ke>0&&z(Math.floor(Ke))});Se.observe(xe);const Te=Math.floor(xe.getBoundingClientRect().width);return Te>0&&z(Te),()=>Se.disconnect()},[]);const B=44,le=0,ce=20,X=20,q=F,Q=l,ge=q-B-le,Y=Q-ce-X,Z=5,se=r.map((xe,Se)=>xe.color??C[Se%C.length]);let V=0;i==="stacked"?s.forEach((xe,Se)=>{const Te=r.reduce((Be,Ke)=>Be+(Ke.data[Se]??0),0);Te>V&&(V=Te)}):i==="horizontal"?V=Math.max(...((ae=r[0])==null?void 0:ae.data)??[0]):r.forEach(xe=>xe.data.forEach(Se=>{Se>V&&(V=Se)}));const H=Yd(V),P=Array.from({length:Z+1},(xe,Se)=>H*(Se/Z)).reverse(),M=xe=>X+Y-xe/H*Y,D=ge/s.length,re=3,J=i==="grouped"?Math.max(4,(D-re*(r.length+1))/r.length):D,G=()=>j(xe=>({...xe,visible:!1})),te=x.useCallback(xe=>{const Se=xe.currentTarget.getBoundingClientRect(),Te=xe.clientX-Se.left,Be=Math.floor((Te-B)/D);if(Be<0||Be>=s.length){G();return}const Ke=r.map((ut,pt)=>({color:se[pt],series:ut.label,value:ut.data[Be]??0}));j({visible:!0,x:xe.clientX+12,y:xe.clientY-8,label:s[Be],items:Ke})},[r,s,D,se,B]);if(i==="gradient"){const xe=((be=r[0])==null?void 0:be.data)??[],Se=((Me=r[0])==null?void 0:Me.label)??"",Te=44,Be=0,Ke=20,ut=20,pt=Math.max(q-Te-Be,1),ft=Q-Ke-ut,Ye=Math.max(0,...xe),oe=Ye>0?Yd(Ye):10,de=5,Ae=Array.from({length:de+1},(Le,it)=>oe*it/de),ye=Le=>Ke+ft-Le/oe*ft,je=pt/Math.max(1,xe.length),ke=Le=>Te+je*Le,Je=Le=>Te+je*(Le+1),et=Le=>Te+je*(Le+.5),qe=xe.length===0?"":xe.map((Le,it)=>{const xt=ye(Le);return`M ${ke(it)} ${xt} L ${Je(it)} ${xt}`}).join(" "),Ft=[];xe.forEach((Le,it)=>{if(Le<=0)return;const xt=ye(Le);Ft.push({x:ke(it),y:xt,width:Math.max(Je(it)-ke(it),0),height:Ke+ft-xt})});const Pn=Math.max(1,Math.ceil(45/je)),eo=s.length-1,Oo=_??(Le=>`${hs(Le)}${f}`);return t.jsxs("div",{ref:N,className:K($e.root,E),...I,children:[t.jsx("div",{ref:$,className:$e.svgWrap,children:t.jsxs("svg",{width:q,height:Q,viewBox:`0 0 ${q} ${Q}`,className:$e.svg,onMouseLeave:G,onMouseMove:Le=>{const it=Le.currentTarget.getBoundingClientRect(),xt=Le.clientX-it.left,$t=Math.floor((xt-Te)/je);if($t<0||$t>=xe.length){G();return}j({visible:!0,x:Le.clientX+12,y:Le.clientY-8,label:s[$t]??"",items:[{color:y,series:Se,value:xe[$t]??0}]})},children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:`${T}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:w}),t.jsx("stop",{offset:"100%",stopColor:y})]}),t.jsxs("linearGradient",{id:`${T}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:w,stopOpacity:"0.3"}),t.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),Ae.map((Le,it)=>t.jsxs("g",{children:[c&&t.jsx("line",{x1:0,x2:q-Be,y1:ye(Le),y2:ye(Le),className:$e.gridLine}),t.jsxs("text",{x:0,y:ye(Le)-6,className:$e.axisLabel,textAnchor:"start",children:[hs(Le),f]})]},`t-${it}`)),Ft.map((Le,it)=>t.jsx("rect",{x:Le.x,y:Le.y,width:Le.width,height:Le.height,fill:`url(#${T}-fill)`},`b-${it}`)),qe&&t.jsx("path",{d:qe,fill:"none",stroke:`url(#${T}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),k.visible&&(()=>{var Qn;const Le=(Qn=$.current)==null?void 0:Qn.getBoundingClientRect();if(!Le)return null;const it=k.x-12-Le.left,xt=Math.floor((it-Te)/je);if(xt<0||xt>=xe.length)return null;const $t=xe[xt]??0;return $t<=0?null:t.jsx("circle",{cx:et(xt),cy:ye($t),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),s.map((Le,it)=>{const xt=it===0,$t=it===eo;if(!(xt||$t)&&it%Pn!==0)return null;const zs=xt?Te:$t?q-Be:et(it),Fs=xt?"start":$t?"end":"middle";return t.jsx("text",{x:zs,y:Q-ut+18,className:$e.axisLabel,textAnchor:Fs,children:Le},`xl-${it}`)})]})}),k.visible&&k.items.length>0&&t.jsxs("div",{className:$e.tooltip,style:{left:k.x,top:k.y},children:[t.jsx("div",{className:$e.tooltipLabel,children:k.label}),k.items.map(Le=>t.jsxs("div",{className:$e.tooltipRow,children:[t.jsx("span",{className:$e.tooltipDot,style:{background:Le.color}}),t.jsx("span",{className:$e.tooltipSeries,children:Le.series}),t.jsx("span",{className:$e.tooltipValue,children:Oo(Le.value)})]},Le.series))]})]})}if(i==="horizontal"){const xe=((Ve=r[0])==null?void 0:Ve.data)??[],Se=Yd(Math.max(...xe,1)),Te=28,Be=10,Ke=120,pt=q-Ke-44,ft=s.length*(Te+Be)+Be;return t.jsxs("div",{ref:N,className:K($e.root,E),...I,children:[t.jsx("div",{ref:$,className:$e.svgWrap,children:t.jsx("svg",{width:q,height:ft,viewBox:`0 0 ${q} ${ft}`,className:$e.svg,onMouseLeave:G,onMouseMove:Ye=>{var ye;const oe=Ye.currentTarget.getBoundingClientRect(),de=Ye.clientY-oe.top,Ae=Math.floor(de/(Te+Be));if(Ae<0||Ae>=s.length){G();return}j({visible:!0,x:Ye.clientX+12,y:Ye.clientY-8,label:s[Ae],items:[{color:se[0],series:((ye=r[0])==null?void 0:ye.label)??"",value:xe[Ae]??0}]})},children:s.map((Ye,oe)=>{const de=Be+oe*(Te+Be),Ae=xe[oe]??0,ye=Ae/Se*pt;return t.jsxs("g",{children:[t.jsx("text",{x:Ke-8,y:de+Te/2+4,className:$e.axisLabel,textAnchor:"end",children:Ye}),t.jsx("rect",{x:Ke,y:de,width:ye,height:Te,rx:v,fill:se[0]}),t.jsxs("text",{x:Ke+ye+6,y:de+Te/2+4,className:$e.axisLabel,textAnchor:"start",children:[hs(Ae),f]})]},oe)})})}),k.visible&&t.jsxs("div",{className:$e.tooltip,style:{left:k.x,top:k.y},children:[t.jsx("div",{className:$e.tooltipLabel,children:k.label}),k.items.map(Ye=>t.jsxs("div",{className:$e.tooltipRow,children:[t.jsx("span",{className:$e.tooltipDot,style:{background:Ye.color}}),t.jsx("span",{className:$e.tooltipSeries,children:Ye.series}),t.jsxs("span",{className:$e.tooltipValue,children:[hs(Ye.value),f]})]},Ye.series))]})]})}return t.jsxs("div",{ref:N,className:K($e.root,E),...I,children:[t.jsx("div",{ref:$,className:$e.svgWrap,children:t.jsxs("svg",{width:q,height:Q,viewBox:`0 0 ${q} ${Q}`,className:$e.svg,onMouseMove:te,onMouseLeave:G,children:[t.jsx("defs",{children:se.flatMap((xe,Se)=>[t.jsxs("linearGradient",{id:`${T}-fill-${Se}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:xe,stopOpacity:"0.3"}),t.jsx("stop",{offset:"100%",stopColor:xe,stopOpacity:"0"})]},`soft-${Se}`),t.jsxs("linearGradient",{id:`${T}-fill-strong-${Se}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:xe,stopOpacity:"1"}),t.jsx("stop",{offset:"100%",stopColor:xe,stopOpacity:"0"})]},`strong-${Se}`)])}),P.map(xe=>{const Se=M(xe);return t.jsxs("g",{children:[c&&t.jsx("line",{x1:0,y1:Se,x2:q-le,y2:Se,className:$e.gridLine}),t.jsxs("text",{x:0,y:Se-6,className:$e.axisLabel,textAnchor:"start",children:[hs(xe),f]})]},xe)}),s.map((xe,Se)=>{const Te=B+Se*D;if(i==="stacked"){let ut=0;const pt=r.map((ye,je)=>{const ke=ye.data[Se]??0,Je=ke/H*Y,et=M(ut+ke);return ut+=ke,{si:je,value:ke,barH:Je,y:et}}),ft=Te+(D-J)/2,Ye=pt.filter(ye=>ye.value>0),oe=Ye.length>0?Ye[0].si:-1,de=Ye.length>0?Ye[Ye.length-1]:null,Ae=L??(de?se[de.si]:"transparent");return t.jsxs("g",{children:[pt.map(({si:ye,value:je,barH:ke,y:Je})=>{if(je<=0)return null;if(b==="mono-scale"){const et=ye===oe;return t.jsx("rect",{x:ft,y:Je,width:J,height:ke,fill:et?`url(#${T}-fill-strong-${ye})`:se[ye]},`fill-${ye}`)}return t.jsx("rect",{x:ft,y:Je,width:J,height:ke,fill:`url(#${T}-fill-${ye})`},`fill-${ye}`)}),b==="mono-scale"?de&&t.jsx("line",{x1:ft,x2:ft+J,y1:de.y,y2:de.y,stroke:Ae,strokeWidth:2,strokeLinecap:"butt"}):pt.map(({si:ye,value:je,y:ke})=>je>0?t.jsx("line",{x1:ft,x2:ft+J,y1:ke,y2:ke,stroke:se[ye],strokeWidth:2,strokeLinecap:"butt"},`cap-${ye}`):null)]},Se)}const Be=r.length*J+(r.length-1)*re,Ke=Te+(D-Be)/2;return t.jsx("g",{children:r.map((ut,pt)=>{const ft=ut.data[Se]??0;if(ft<=0)return null;const Ye=ft/H*Y,oe=Ke+pt*(J+re),de=M(ft);return t.jsxs("g",{children:[t.jsx("rect",{x:oe,y:de,width:J,height:Ye,fill:`url(#${T}-fill-${pt})`}),t.jsx("line",{x1:oe,x2:oe+J,y1:de,y2:de,stroke:se[pt],strokeWidth:2,strokeLinecap:"butt"})]},pt)})},Se)}),(()=>{const Se=Math.max(1,Math.ceil(45/D)),Te=s.length-1;return s.map((Be,Ke)=>{const ut=Ke===0,pt=Ke===Te;if(!(ut||pt)&&Ke%Se!==0)return null;const Ye=ut?B:pt?q-le:B+D*(Ke+.5),oe=ut?"start":pt?"end":"middle";return t.jsx("text",{x:Ye,y:Q-ce+18,className:$e.axisLabel,textAnchor:oe,children:Be},`xl-${Ke}`)})})()]})}),p&&r.length>1&&t.jsx("div",{className:$e.legendWrap,children:r.map((xe,Se)=>t.jsxs("div",{className:$e.legendItem,children:[t.jsx("span",{className:$e.legendDot,style:{background:se[Se]}}),t.jsx("span",{className:$e.legendLabel,children:xe.label})]},xe.label))}),k.visible&&t.jsxs("div",{className:$e.tooltip,style:{left:k.x,top:k.y},children:[t.jsx("div",{className:$e.tooltipLabel,children:k.label}),k.items.map(xe=>t.jsxs("div",{className:$e.tooltipRow,children:[t.jsx("span",{className:$e.tooltipDot,style:{background:xe.color}}),t.jsx("span",{className:$e.tooltipSeries,children:xe.series}),t.jsxs("span",{className:$e.tooltipValue,children:[hs(xe.value),f]})]},xe.series))]})]})});J7.displayName="BarChart";const ej="_root_1crij_5",tj="_svgWrap_1crij_13",nj="_svg_1crij_13",rj="_gridLine_1crij_23",oj="_axisLabelY_1crij_35 _axisLabel_1crij_28",sj="_axisLabelX_1crij_39 _axisLabel_1crij_28",ij="_legendWrap_1crij_51",aj="_tooltip_1crij_76",lj="_tooltipLabel_1crij_95",cj="_tooltipRow_1crij_105",dj="_tooltipDot_1crij_111",uj="_tooltipSeries_1crij_118",pj="_tooltipValue_1crij_125",xn={root:ej,svgWrap:tj,svg:nj,gridLine:rj,axisLabelY:oj,axisLabelX:sj,legendWrap:ij,tooltip:aj,tooltipLabel:lj,tooltipRow:cj,tooltipDot:dj,tooltipSeries:uj,tooltipValue:pj};function fj(r){if(r===0)return 10;const s=Math.pow(10,Math.floor(Math.log10(r))),i=r/s;return i<=1?s:i<=2?2*s:i<=5?5*s:10*s}function gh(r){return r>=1e3?`${(r/1e3).toFixed(r%1e3===0?0:1)}k`:String(Math.round(r))}function hj(r,s=.35){if(r.length<2)return"";let i=`M ${r[0][0]} ${r[0][1]}`;for(let l=0;l<r.length-1;l++){const[c,p]=r[l],[f,v]=r[l+1],g=(f-c)*s;i+=` C ${c+g} ${p}, ${f-g} ${v}, ${f} ${v}`}return i}const mj=x.forwardRef(({series:r,labels:s,height:i=260,showGrid:l=!0,showLegend:c=!0,gradientFrom:p="#8c4fe2",gradientTo:f="#446cff",yUnit:v="",yTickCount:g=5,className:w,...y},_)=>{const[b,L]=x.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),E=`line-grad-${Math.random().toString(36).slice(2,9)}`,I=x.useRef(null),[N,C]=x.useState(540);x.useEffect(()=>{const H=I.current;if(!H)return;const P=new ResizeObserver(D=>{var J;const re=(J=D[0])==null?void 0:J.contentRect.width;re>0&&C(Math.floor(re))});P.observe(H);const M=Math.floor(H.getBoundingClientRect().width);return M>0&&C(M),()=>P.disconnect()},[]);const T=44,k=20,j=20,$=N,F=i,z=$-T,B=F-k-j,le=`url(#${E}-stroke)`,ce=H=>H.color??le,X=r.flatMap(H=>H.data),q=fj(Math.max(...X,1)),Q=Array.from({length:g+1},(H,P)=>q*(P/g)).reverse(),ge=H=>j+B-H/q*B,Y=H=>s.length>1?T+H/(s.length-1)*z:T+z/2,Z=H=>H.map((P,M)=>[Y(M),ge(P)]),se=()=>L(H=>({...H,visible:!1})),V=x.useCallback(H=>{const P=H.currentTarget.getBoundingClientRect(),D=H.clientX-P.left-T,re=z/Math.max(s.length-1,1),J=Math.round(D/re),G=Math.max(0,Math.min(J,s.length-1)),te=r.map(ae=>({color:ae.color??f,series:ae.label,value:ae.data[G]??0}));L({visible:!0,index:G,x:H.clientX+12,y:H.clientY-8,label:s[G],items:te})},[r,s,f,z,T]);return t.jsxs("div",{ref:_,className:K(xn.root,w),...y,children:[t.jsx("div",{ref:I,className:xn.svgWrap,children:t.jsxs("svg",{width:$,height:F,viewBox:`0 0 ${$} ${F}`,className:xn.svg,onMouseMove:V,onMouseLeave:se,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:`${E}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:p}),t.jsx("stop",{offset:"100%",stopColor:f})]}),t.jsxs("linearGradient",{id:`${E}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[t.jsx("stop",{offset:"0%",stopColor:f,stopOpacity:"0.05"}),t.jsx("stop",{offset:"50%",stopColor:f}),t.jsx("stop",{offset:"100%",stopColor:f,stopOpacity:"0.05"})]}),t.jsxs("filter",{id:`${E}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[t.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),t.jsx("feOffset",{dy:"4"}),t.jsx("feComponentTransfer",{children:t.jsx("feFuncA",{type:"linear",slope:"0.3"})}),t.jsxs("feMerge",{children:[t.jsx("feMergeNode",{}),t.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),t.jsx("clipPath",{id:`${E}-clip`,children:t.jsx("rect",{x:T,y:j,width:z,height:B,rx:6,ry:6})})]}),Q.map(H=>{const P=ge(H);return t.jsxs("g",{children:[l&&t.jsx("line",{x1:0,y1:P,x2:$,y2:P,className:xn.gridLine}),t.jsxs("text",{x:0,y:P-6,className:xn.axisLabelY,textAnchor:"start",children:[gh(H),v]})]},H)}),t.jsx("g",{clipPath:`url(#${E}-clip)`,children:r.map((H,P)=>{const M=Z(H.data),D=hj(M);return t.jsx("path",{d:D,fill:"none",stroke:ce(H),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},P)})}),(()=>{const H=b.index>=0?b.index:0,P=Y(H),M=b.visible&&b.index>=0,D="transform 200ms var(--ease-default, ease-out)";return t.jsx("g",{style:{pointerEvents:"none",opacity:M?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:t.jsxs("g",{style:{transform:`translateX(${P}px)`,transition:D},children:[t.jsx("line",{x1:0,x2:0,y1:j,y2:j+B,stroke:f,strokeWidth:2,strokeLinecap:"round",opacity:.5}),r.map((re,J)=>{const G=re.data[H]??0,te=ge(G),ae=re.color??f;return t.jsx("g",{style:{transform:`translateY(${te}px)`,transition:D},children:t.jsx("circle",{cx:0,cy:0,r:4,fill:ae,filter:`url(#${E}-pin-shadow)`})},J)})]})})})(),(()=>{const P=s.length>1?z/(s.length-1):z,M=Math.max(1,Math.ceil(45/Math.max(P,1))),D=s.length-1;return s.map((re,J)=>{const G=J===0,te=J===D;if(!(G||te)&&J%M!==0)return null;const be=G?T:te?$:Y(J),Me=G?"start":te?"end":"middle";return t.jsx("text",{x:be,y:F-k+14,className:xn.axisLabelX,textAnchor:Me,children:re},re)})})()]})}),c&&r.length>0&&t.jsx("div",{className:xn.legendWrap,children:t.jsx(zm,{variant:"line",items:r.map(H=>({color:H.color??f,label:H.label}))})}),b.visible&&t.jsxs("div",{className:xn.tooltip,style:{left:b.x,top:b.y},children:[t.jsx("div",{className:xn.tooltipLabel,children:b.label}),b.items.map(H=>t.jsxs("div",{className:xn.tooltipRow,children:[t.jsx("span",{className:xn.tooltipDot,style:{background:H.color}}),t.jsx("span",{className:xn.tooltipSeries,children:H.series}),t.jsxs("span",{className:xn.tooltipValue,children:[gh(H.value),v]})]},H.series))]})]})});mj.displayName="LineChart";const gj="_root_3tq2n_5",xj="_chartWrap_3tq2n_14",vj="_svg_3tq2n_18",yj="_centerText_3tq2n_23",wj="_statLegend_3tq2n_31",jj="_statItem_3tq2n_37",bj="_statBar_3tq2n_44",kj="_statText_3tq2n_50",_j="_statValue_3tq2n_56",Cj="_statLabel_3tq2n_65",Sj="_listLegend_3tq2n_72",Mj="_legendItem_3tq2n_79",Ij="_legendDot_3tq2n_85",Nj="_legendLabel_3tq2n_92",Lj="_legendValue_3tq2n_99",Tj="_tooltip_3tq2n_107",Aj="_tooltipLabel_3tq2n_118",Ej="_tooltipValue_3tq2n_124",zt={root:gj,chartWrap:xj,svg:vj,centerText:yj,statLegend:wj,statItem:jj,statBar:bj,statText:kj,statValue:_j,statLabel:Cj,listLegend:Sj,legendItem:Mj,legendDot:Ij,legendLabel:Nj,legendValue:Lj,tooltip:Tj,tooltipLabel:Aj,tooltipValue:Ej},xh=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],$j=x.forwardRef(({segments:r,innerRadius:s=60,size:i=200,showLegend:l=!0,legendVariant:c="list",unit:p="%",centerLabel:f,className:v,...g},w)=>{const[y,_]=x.useState({visible:!1,x:0,y:0,label:"",value:""}),b=r.map(($,F)=>$.color??xh[F%xh.length]),L=r.reduce(($,F)=>$+F.value,0),E=i/2,I=i/2,N=i*.15,C=(i-N)/2-2,T=2*Math.PI*C;let k=-T/4;const j=r.map(($,F)=>{const B=(L>0?$.value/L:0)*T,le=`${B} ${T-B}`,ce=-k;return k+=B,{dashArray:le,dashOffset:ce,color:b[F],...$}});return t.jsxs("div",{ref:w,className:K(zt.root,v),...g,children:[t.jsx("div",{className:zt.chartWrap,children:t.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:zt.svg,children:[t.jsx("circle",{cx:E,cy:I,r:C,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:N}),j.map(($,F)=>t.jsx("circle",{cx:E,cy:I,r:C,fill:"none",stroke:$.color,strokeWidth:N,strokeDasharray:$.dashArray,strokeDashoffset:$.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:z=>{const B=L>0?Math.round($.value/L*100):0;_({visible:!0,x:z.clientX+12,y:z.clientY-8,label:$.label,value:`${B}${p}`})},onMouseLeave:()=>_(z=>({...z,visible:!1}))},F)),f&&s>0&&t.jsx("text",{x:E,y:I+6,textAnchor:"middle",className:zt.centerText,children:f})]})}),l&&c==="stat"&&t.jsx("div",{className:zt.statLegend,children:r.map(($,F)=>{const z=L>0?Math.round($.value/L*100):0;return t.jsxs("div",{className:zt.statItem,children:[t.jsx("span",{className:zt.statBar,style:{background:b[F]}}),t.jsxs("div",{className:zt.statText,children:[t.jsxs("span",{className:zt.statValue,children:[z,p]}),t.jsx("span",{className:zt.statLabel,children:$.label})]})]},$.label)})}),l&&c==="list"&&t.jsx("div",{className:zt.listLegend,children:r.map(($,F)=>{const z=L>0?Math.round($.value/L*100):0;return t.jsxs("div",{className:zt.legendItem,children:[t.jsx("span",{className:zt.legendDot,style:{background:b[F]}}),t.jsx("span",{className:zt.legendLabel,children:$.label}),t.jsxs("span",{className:zt.legendValue,children:[z,p]})]},$.label)})}),y.visible&&t.jsxs("div",{className:zt.tooltip,style:{left:y.x,top:y.y},children:[t.jsx("div",{className:zt.tooltipLabel,children:y.label}),t.jsx("div",{className:zt.tooltipValue,children:y.value})]})]})});$j.displayName="DonutChart";const Pj="_root_bqpf6_5",Rj="_svgWrap_bqpf6_10",Dj="_svg_bqpf6_10",zj="_axisLabel_bqpf6_19",Fj="_tooltip_bqpf6_25",ms={root:Pj,svgWrap:Rj,svg:Dj,axisLabel:zj,tooltip:Fj};function Bj(r){return r<.35?"var(--Alloy-green-100)":r<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const Oj=x.forwardRef(({cells:r,rows:s,cols:i,colorScale:l=Bj,cellRadius:c=4,cellGap:p=4,showTooltip:f=!0,className:v,...g},w)=>{const[y,_]=x.useState({visible:!1,x:0,y:0,content:""}),b=x.useRef(null),[L,E]=x.useState(540);x.useEffect(()=>{const F=b.current;if(!F)return;const z=new ResizeObserver(le=>{var X;const ce=(X=le[0])==null?void 0:X.contentRect.width;ce>0&&E(Math.floor(ce))});z.observe(F);const B=Math.floor(F.getBoundingClientRect().width);return B>0&&E(B),()=>z.disconnect()},[]);const I=32,N=16,C=L,T=C-I-p,k=Math.max(4,(T-(i.length-1)*p)/i.length),j=s.length*(N+p)+p+24,$=new Map;return r.forEach(F=>$.set(`${F.row}__${F.col}`,F)),t.jsxs("div",{ref:w,className:K(ms.root,v),...g,children:[t.jsx("div",{ref:b,className:ms.svgWrap,children:t.jsxs("svg",{width:C,height:j,viewBox:`0 0 ${C} ${j}`,className:ms.svg,onMouseLeave:()=>_(F=>({...F,visible:!1})),children:[i.map((F,z)=>{const B=I+p+z*(k+p)+k/2;return t.jsx("text",{x:B,y:12,className:ms.axisLabel,textAnchor:"middle",children:F},F)}),s.map((F,z)=>{const B=24+z*(N+p);return t.jsxs("g",{children:[t.jsx("text",{x:I-4,y:B+N/2+4,className:ms.axisLabel,textAnchor:"end",children:F}),i.map((le,ce)=>{const X=$.get(`${F}__${le}`),q=(X==null?void 0:X.value)??0,Q=l(q),ge=I+p+ce*(k+p);return t.jsx("rect",{x:ge,y:B,width:k,height:N,rx:c,fill:Q,style:{cursor:"pointer"},onMouseEnter:Y=>{if(!f)return;const Z=(X==null?void 0:X.label)??`${F} / ${le}: ${Math.round(q*100)}%`;_({visible:!0,x:Y.clientX+12,y:Y.clientY-8,content:Z})},onMouseLeave:()=>_(Y=>({...Y,visible:!1}))},le)})]},F)})]})}),y.visible&&t.jsx("div",{className:ms.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});Oj.displayName="HeatMap";const Hj="_root_18572_6",Wj="_gridWrap_18572_14",Uj="_grid_18572_14",Vj="_cell_18572_27",Gj="_legend_18572_33",qj="_legendSquare_18572_43",Zj="_tooltip_18572_49",Ur={root:Hj,gridWrap:Wj,grid:Uj,cell:Vj,legend:Gj,legendSquare:qj,tooltip:Zj},Yj=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function Kj(r,s){if(r<=0)return 0;const i=r/Math.max(1,s);return i<=.25?1:i<=.5?2:i<=.75?3:4}const Qj=x.forwardRef(({days:r,levelColors:s=Yj,cellSize:i=14,cellGap:l=3,cellRadius:c=2,fillWidth:p=!1,showLegend:f=!0,maxCount:v,formatTooltip:g,ariaLabel:w,className:y,..._},b)=>{const[L,E]=x.useState({visible:!1,x:0,y:0,content:""}),I=v??Math.max(1,...r.map(k=>k.count)),N=[];for(let k=0;k<r.length;k+=7)N.push(r.slice(k,k+7));const C=p?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${N.length}, minmax(0, 1fr))`,gap:`${l}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${l}px`},T=p?"100%":i;return t.jsxs("div",{ref:b,className:K(Ur.root,y),..._,children:[t.jsx("div",{className:Ur.gridWrap,children:t.jsx("div",{role:"img","aria-label":w??`Activity heatmap with max ${I} on the busiest day`,className:Ur.grid,style:C,onMouseLeave:()=>E(k=>({...k,visible:!1})),children:N.map((k,j)=>Array.from({length:7},($,F)=>{const z=k[F];if(!z)return t.jsx("span",{className:Ur.cell,style:{width:i,height:i,borderRadius:c,background:s[0]}},`${j}-${F}`);const B=Kj(z.count,I),le=g?g(z,B):`${z.label??z.date}: ${z.count} activation${z.count===1?"":"s"}`;return t.jsx("span",{className:Ur.cell,style:{width:T,height:i,borderRadius:c,background:s[B]},onMouseMove:ce=>E({visible:!0,x:ce.clientX,y:ce.clientY,content:le}),onMouseLeave:()=>E(ce=>({...ce,visible:!1}))},`${j}-${F}`)}))})}),f&&t.jsxs("div",{className:Ur.legend,children:[t.jsx("span",{children:"Less"}),[0,1,2,3,4].map(k=>t.jsx("span",{className:Ur.legendSquare,style:{background:s[k],borderRadius:c}},k)),t.jsx("span",{children:"More"})]}),L.visible&&t.jsx("div",{className:Ur.tooltip,style:{left:L.x,top:L.y},children:L.content})]})});Qj.displayName="ActivityHeatMap";const Xj="_root_14edh_5",Jj="_track_14edh_17",eb="_segment_14edh_28",tb="_legend_14edh_49",nb="_legendRow_14edh_58",rb="_legendDot_14edh_68",ob="_legendLabel_14edh_74",sb="_legendValue_14edh_78",ib="_tooltip_14edh_84",ab="_tooltipLabel_14edh_100",lb="_tooltipValueRow_14edh_105",cb="_tooltipDot_14edh_114",Sn={root:Xj,track:Jj,segment:eb,legend:tb,legendRow:nb,legendDot:rb,legendLabel:ob,legendValue:sb,tooltip:ib,tooltipLabel:ab,tooltipValueRow:lb,tooltipDot:cb},db=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],gs={r:140,g:79,b:226},Kd={r:68,g:108,b:255};function vh(r){const s=Math.max(0,Math.min(100,r))/100,i=Math.round(gs.r+(Kd.r-gs.r)*s),l=Math.round(gs.g+(Kd.g-gs.g)*s),c=Math.round(gs.b+(Kd.b-gs.b)*s);return`rgb(${i}, ${l}, ${c})`}const ub=x.forwardRef(({segments:r,colors:s=db,aiGradient:i=!1,height:l,showLegend:c=!1,flat:p=!1,ariaLabel:f,className:v,...g},w)=>{const[y,_]=x.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),b=r.reduce((N,C)=>N+Math.max(0,C.value),0);let L=0;const E=r.map((N,C)=>{const T=Math.max(0,N.value),k=b>0?T/b*100:0,j=b>0?L/b*100:0;L+=T;const $=b>0?L/b*100:0,F=N.color??s[C%s.length],z=p?!0:N.emphasized??C===0;return{...N,pct:k,startPct:j,endPct:$,color:F,emphasized:z}}),I=l!==void 0?{height:typeof l=="number"?`${l}px`:l}:void 0;return t.jsxs("div",{ref:w,className:K(Sn.root,v),...g,children:[t.jsx("div",{role:"img","aria-label":f??`Ratio bar: ${r.map(N=>`${N.label} ${N.value}`).join(", ")}`,className:Sn.track,style:I,onMouseLeave:()=>_(N=>({...N,visible:!1})),children:E.map(N=>{const C=i?`linear-gradient(to right, ${vh(N.startPct)}, ${vh(N.endPct)})`:N.color;return t.jsx("span",{className:Sn.segment,"data-emphasized":N.emphasized||void 0,"data-ai":i||void 0,style:{width:`${N.pct}%`,background:C,"--ratio-hover-bg":N.color},onMouseMove:T=>_({visible:!0,x:T.clientX,y:T.clientY,label:N.label,value:N.value,color:N.color})},N.label)})}),c&&t.jsx("ul",{className:Sn.legend,children:E.map(N=>t.jsxs("li",{className:Sn.legendRow,children:[t.jsx("span",{className:Sn.legendDot,style:{background:N.color}}),t.jsx("span",{className:Sn.legendLabel,children:N.label}),t.jsx("span",{className:Sn.legendValue,children:N.value.toLocaleString("en-US")})]},N.label))}),y.visible&&t.jsxs("div",{className:Sn.tooltip,style:{left:y.x,top:y.y},children:[t.jsx("span",{className:Sn.tooltipLabel,children:y.label}),t.jsxs("span",{className:Sn.tooltipValueRow,children:[t.jsx("span",{className:Sn.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});ub.displayName="RatioBar";const pb="_track_1wmly_6",fb="_fill_1wmly_12",yh={track:pb,fill:fb},hb=x.forwardRef(({value:r,max:s=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:l="var(--color-bg-tertiary)",gapColor:c="var(--color-bg-primary)",stripeWidth:p=2,stripeGap:f=1,height:v=12,ariaLabel:g,className:w,style:y,..._},b)=>{const L=p+f,E=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${p}px,
      ${c} ${p}px,
      ${c} ${L}px
    )`,I=Math.max(0,Math.min(s,r)),N=s>0?I/s*100:0;return t.jsx("div",{ref:b,role:"progressbar","aria-label":g??`Progress: ${Math.round(N)}%`,"aria-valuemin":0,"aria-valuemax":s,"aria-valuenow":I,className:K(yh.track,w),style:{height:v,background:`${E}, ${l}`,...y},..._,children:t.jsx("div",{className:yh.fill,style:{width:`${N}%`,background:`${E}, ${i}`}})})});hb.displayName="StripedBar";const mb=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],gb=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function wh(r,s="to right"){const i=r.map(({color:l,position:c})=>`${l} ${c}`).join(", ");return`linear-gradient(${s}, ${i})`}wh(mb),wh(gb);var Zt=function(){return Zt=Object.assign||function(s){for(var i,l=1,c=arguments.length;l<c;l++){i=arguments[l];for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(s[p]=i[p])}return s},Zt.apply(this,arguments)};function Ls(r,s,i){if(i||arguments.length===2)for(var l=0,c=s.length,p;l<c;l++)(p||!(l in s))&&(p||(p=Array.prototype.slice.call(s,0,l)),p[l]=s[l]);return r.concat(p||Array.prototype.slice.call(s))}var xb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dt="-ms-",$i="-moz-",Ze="-webkit-",Fm="comm",Yl="rule",Uu="decl",vb="@import",yb="@namespace",Bm="@keyframes",wb="@layer",Om=Math.abs,Vu=String.fromCharCode,_u=Object.assign;function jb(r,s){return Et(r,0)^45?(((s<<2^Et(r,0))<<2^Et(r,1))<<2^Et(r,2))<<2^Et(r,3):0}function Hm(r){return r.trim()}function yr(r,s){return(r=s.exec(r))?r[0]:r}function Ee(r,s,i){return r.replace(s,i)}function bl(r,s,i){return r.indexOf(s,i)}function Et(r,s){return r.charCodeAt(s)|0}function Mo(r,s,i){return r.slice(s,i)}function qn(r){return r.length}function Wm(r){return r.length}function Ni(r,s){return s.push(r),r}function bb(r,s){return r.map(s).join("")}function jh(r,s){return r.filter(function(i){return!yr(i,s)})}var Kl=1,Ts=1,Um=0,En=0,Lt=0,Ds="";function Ql(r,s,i,l,c,p,f,v){return{value:r,root:s,parent:i,type:l,props:c,children:p,line:Kl,column:Ts,length:f,return:"",siblings:v}}function qr(r,s){return _u(Ql("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},s)}function xs(r){for(;r.root;)r=qr(r.root,{children:[r]});Ni(r,r.siblings)}function kb(){return Lt}function _b(){return Lt=En>0?Et(Ds,--En):0,Ts--,Lt===10&&(Ts=1,Kl--),Lt}function Yn(){return Lt=En<Um?Et(Ds,En++):0,Ts++,Lt===10&&(Ts=1,Kl++),Lt}function Yr(){return Et(Ds,En)}function kl(){return En}function Xl(r,s){return Mo(Ds,r,s)}function Bi(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cb(r){return Kl=Ts=1,Um=qn(Ds=r),En=0,[]}function Sb(r){return Ds="",r}function Qd(r){return Hm(Xl(En-1,Cu(r===91?r+2:r===40?r+1:r)))}function Mb(r){for(;(Lt=Yr())&&Lt<33;)Yn();return Bi(r)>2||Bi(Lt)>3?"":" "}function Ib(r,s){for(;--s&&Yn()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Xl(r,kl()+(s<6&&Yr()==32&&Yn()==32))}function Cu(r){for(;Yn();)switch(Lt){case r:return En;case 34:case 39:r!==34&&r!==39&&Cu(Lt);break;case 40:r===41&&Cu(r);break;case 92:Yn();break}return En}function Nb(r,s){for(;Yn()&&r+Lt!==57;)if(r+Lt===84&&Yr()===47)break;return"/*"+Xl(s,En-1)+"*"+Vu(r===47?r:Yn())}function Lb(r){for(;!Bi(Yr());)Yn();return Xl(r,En)}function Tb(r){return Sb(_l("",null,null,null,[""],r=Cb(r),0,[0],r))}function _l(r,s,i,l,c,p,f,v,g){for(var w=0,y=0,_=f,b=0,L=0,E=0,I=1,N=1,C=1,T=0,k="",j=c,$=p,F=l,z=k;N;)switch(E=T,T=Yn()){case 40:if(E!=108&&Et(z,_-1)==58){bl(z+=Ee(Qd(T),"&","&\f"),"&\f",Om(w?v[w-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:z+=Qd(T);break;case 9:case 10:case 13:case 32:z+=Mb(E);break;case 92:z+=Ib(kl()-1,7);continue;case 47:switch(Yr()){case 42:case 47:Ni(Ab(Nb(Yn(),kl()),s,i,g),g),(Bi(E||1)==5||Bi(Yr()||1)==5)&&qn(z)&&Mo(z,-1,void 0)!==" "&&(z+=" ");break;default:z+="/"}break;case 123*I:v[w++]=qn(z)*C;case 125*I:case 59:case 0:switch(T){case 0:case 125:N=0;case 59+y:C==-1&&(z=Ee(z,/\f/g,"")),L>0&&(qn(z)-_||I===0&&E===47)&&Ni(L>32?kh(z+";",l,i,_-1,g):kh(Ee(z," ","")+";",l,i,_-2,g),g);break;case 59:z+=";";default:if(Ni(F=bh(z,s,i,w,y,c,v,k,j=[],$=[],_,p),p),T===123)if(y===0)_l(z,s,F,F,j,p,_,v,$);else{switch(b){case 99:if(Et(z,3)===110)break;case 108:if(Et(z,2)===97)break;default:y=0;case 100:case 109:case 115:}y?_l(r,F,F,l&&Ni(bh(r,F,F,0,0,c,v,k,c,j=[],_,$),$),c,$,_,v,l?j:$):_l(z,F,F,F,[""],$,0,v,$)}}w=y=L=0,I=C=1,k=z="",_=f;break;case 58:_=1+qn(z),L=E;default:if(I<1){if(T==123)--I;else if(T==125&&I++==0&&_b()==125)continue}switch(z+=Vu(T),T*I){case 38:C=y>0?1:(z+="\f",-1);break;case 44:v[w++]=(qn(z)-1)*C,C=1;break;case 64:Yr()===45&&(z+=Qd(Yn())),b=Yr(),y=_=qn(k=z+=Lb(kl())),T++;break;case 45:E===45&&qn(z)==2&&(I=0)}}return p}function bh(r,s,i,l,c,p,f,v,g,w,y,_){for(var b=c-1,L=c===0?p:[""],E=Wm(L),I=0,N=0,C=0;I<l;++I)for(var T=0,k=Mo(r,b+1,b=Om(N=f[I])),j=r;T<E;++T)(j=Hm(N>0?L[T]+" "+k:Ee(k,/&\f/g,L[T])))&&(g[C++]=j);return Ql(r,s,i,c===0?Yl:v,g,w,y,_)}function Ab(r,s,i,l){return Ql(r,s,i,Fm,Vu(kb()),Mo(r,2,-2),0,l)}function kh(r,s,i,l,c){return Ql(r,s,i,Uu,Mo(r,0,l),Mo(r,l+1,-1),l,c)}function Vm(r,s,i){switch(jb(r,s)){case 5103:return Ze+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ze+r+r;case 4855:return Ze+r.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+r;case 4789:return $i+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Ze+r+$i+r+dt+r+r;case 5936:switch(Et(r,s+11)){case 114:return Ze+r+dt+Ee(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Ze+r+dt+Ee(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Ze+r+dt+Ee(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Ze+r+dt+r+r;case 6165:return Ze+r+dt+"flex-"+r+r;case 5187:return Ze+r+Ee(r,/(\w+).+(:[^]+)/,Ze+"box-$1$2"+dt+"flex-$1$2")+r;case 5443:return Ze+r+dt+"flex-item-"+Ee(r,/flex-|-self/g,"")+(yr(r,/flex-|baseline/)?"":dt+"grid-row-"+Ee(r,/flex-|-self/g,""))+r;case 4675:return Ze+r+dt+"flex-line-pack"+Ee(r,/align-content|flex-|-self/g,"")+r;case 5548:return Ze+r+dt+Ee(r,"shrink","negative")+r;case 5292:return Ze+r+dt+Ee(r,"basis","preferred-size")+r;case 6060:return Ze+"box-"+Ee(r,"-grow","")+Ze+r+dt+Ee(r,"grow","positive")+r;case 4554:return Ze+Ee(r,/([^-])(transform)/g,"$1"+Ze+"$2")+r;case 6187:return Ee(Ee(Ee(r,/(zoom-|grab)/,Ze+"$1"),/(image-set)/,Ze+"$1"),r,"")+r;case 5495:case 3959:return Ee(r,/(image-set\([^]*)/,Ze+"$1$`$1");case 4968:return Ee(Ee(r,/(.+:)(flex-)?(.*)/,Ze+"box-pack:$3"+dt+"flex-pack:$3"),/space-between/,"justify")+Ze+r+r;case 4200:if(!yr(r,/flex-|baseline/))return dt+"grid-column-align"+Mo(r,s)+r;break;case 2592:case 3360:return dt+Ee(r,"template-","")+r;case 4384:case 3616:return i&&i.some(function(l,c){return s=c,yr(l.props,/grid-\w+-end/)})?~bl(r+(i=i[s].value),"span",0)?r:dt+Ee(r,"-start","")+r+dt+"grid-row-span:"+(~bl(i,"span",0)?yr(i,/\d+/):+yr(i,/\d+/)-+yr(r,/\d+/))+";":dt+Ee(r,"-start","")+r;case 4896:case 4128:return i&&i.some(function(l){return yr(l.props,/grid-\w+-start/)})?r:dt+Ee(Ee(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return Ee(r,/(.+)-inline(.+)/,Ze+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qn(r)-1-s>6)switch(Et(r,s+1)){case 109:if(Et(r,s+4)!==45)break;case 102:return Ee(r,/(.+:)(.+)-([^]+)/,"$1"+Ze+"$2-$3$1"+$i+(Et(r,s+3)==108?"$3":"$2-$3"))+r;case 115:return~bl(r,"stretch",0)?Vm(Ee(r,"stretch","fill-available"),s,i)+r:r}break;case 5152:case 5920:return Ee(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,p,f,v,g,w){return dt+c+":"+p+w+(f?dt+c+"-span:"+(v?g:+g-+p)+w:"")+r});case 4949:if(Et(r,s+6)===121)return Ee(r,":",":"+Ze)+r;break;case 6444:switch(Et(r,Et(r,14)===45?18:11)){case 120:return Ee(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ze+(Et(r,14)===45?"inline-":"")+"box$3$1"+Ze+"$2$3$1"+dt+"$2box$3")+r;case 100:return Ee(r,":",":"+dt)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ee(r,"scroll-","scroll-snap-")+r}return r}function Il(r,s){for(var i="",l=0;l<r.length;l++)i+=s(r[l],l,r,s)||"";return i}function Eb(r,s,i,l){switch(r.type){case wb:if(r.children.length)break;case vb:case yb:case Uu:return r.return=r.return||r.value;case Fm:return"";case Bm:return r.return=r.value+"{"+Il(r.children,l)+"}";case Yl:if(!qn(r.value=r.props.join(",")))return""}return qn(i=Il(r.children,l))?r.return=r.value+"{"+i+"}":""}function $b(r){var s=Wm(r);return function(i,l,c,p){for(var f="",v=0;v<s;v++)f+=r[v](i,l,c,p)||"";return f}}function Pb(r){return function(s){s.root||(s=s.return)&&r(s)}}function Rb(r,s,i,l){if(r.length>-1&&!r.return)switch(r.type){case Uu:r.return=Vm(r.value,r.length,i);return;case Bm:return Il([qr(r,{value:Ee(r.value,"@","@"+Ze)})],l);case Yl:if(r.length)return bb(i=r.props,function(c){switch(yr(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xs(qr(r,{props:[Ee(c,/:(read-\w+)/,":"+$i+"$1")]})),xs(qr(r,{props:[c]})),_u(r,{props:jh(i,l)});break;case"::placeholder":xs(qr(r,{props:[Ee(c,/:(plac\w+)/,":"+Ze+"input-$1")]})),xs(qr(r,{props:[Ee(c,/:(plac\w+)/,":"+$i+"$1")]})),xs(qr(r,{props:[Ee(c,/:(plac\w+)/,dt+"input-$1")]})),xs(qr(r,{props:[c]})),_u(r,{props:jh(i,l)});break}return""})}}var vn={},As=typeof process<"u"&&vn!==void 0&&(vn.REACT_APP_SC_ATTR||vn.SC_ATTR)||"data-styled",Gm="active",qm="data-styled-version",Jl="6.3.12",Gu=`/*!sc*/
`,Pi=typeof window<"u"&&typeof document<"u",Db=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vn!==void 0&&vn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vn.REACT_APP_SC_DISABLE_SPEEDY!==""?vn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vn!==void 0&&vn.SC_DISABLE_SPEEDY!==void 0&&vn.SC_DISABLE_SPEEDY!==""&&vn.SC_DISABLE_SPEEDY!=="false"&&vn.SC_DISABLE_SPEEDY),zb={};function qi(r){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var Cl=new Map,Nl=new Map,Sl=1,Li=function(r){if(Cl.has(r))return Cl.get(r);for(;Nl.has(Sl);)Sl++;var s=Sl++;return Cl.set(r,s),Nl.set(s,r),s},Fb=function(r,s){Sl=s+1,Cl.set(r,s),Nl.set(s,r)},qu=Object.freeze([]),Es=Object.freeze({});function Zm(r,s,i){return i===void 0&&(i=Es),r.theme!==i.theme&&r.theme||s||i.theme}var Ym=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ob=/(^-|-$)/g;function _h(r){return r.replace(Bb,"-").replace(Ob,"")}var Hb=/(a)(d)/gi,Ch=function(r){return String.fromCharCode(r+(r>25?39:97))};function Su(r){var s,i="";for(s=Math.abs(r);s>52;s=s/52|0)i=Ch(s%52)+i;return(Ch(s%52)+i).replace(Hb,"$1-$2")}var Xd,vo=function(r,s){for(var i=s.length;i;)r=33*r^s.charCodeAt(--i);return r},Km=function(r){return vo(5381,r)};function Zu(r){return Su(Km(r)>>>0)}function Wb(r){return r.displayName||r.name||"Component"}function Jd(r){return typeof r=="string"&&!0}var Qm=typeof Symbol=="function"&&Symbol.for,Xm=Qm?Symbol.for("react.memo"):60115,Ub=Qm?Symbol.for("react.forward_ref"):60112,Vb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qb=((Xd={})[Ub]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xd[Xm]=Jm,Xd);function Sh(r){return("type"in(s=r)&&s.type.$$typeof)===Xm?Jm:"$$typeof"in r?qb[r.$$typeof]:Vb;var s}var Zb=Object.defineProperty,Yb=Object.getOwnPropertyNames,Mh=Object.getOwnPropertySymbols,Kb=Object.getOwnPropertyDescriptor,Qb=Object.getPrototypeOf,Ih=Object.prototype;function eg(r,s,i){if(typeof s!="string"){if(Ih){var l=Qb(s);l&&l!==Ih&&eg(r,l,i)}var c=Yb(s);Mh&&(c=c.concat(Mh(s)));for(var p=Sh(r),f=Sh(s),v=0;v<c.length;++v){var g=c[v];if(!(g in Gb||i&&i[g]||f&&g in f||p&&g in p)){var w=Kb(s,g);try{Zb(r,g,w)}catch{}}}}return r}function $s(r){return typeof r=="function"}function Yu(r){return typeof r=="object"&&"styledComponentId"in r}function wo(r,s){return r&&s?"".concat(r," ").concat(s):r||s||""}function Ll(r,s){return r.join("")}function Oi(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Mu(r,s,i){if(i===void 0&&(i=!1),!i&&!Oi(r)&&!Array.isArray(r))return s;if(Array.isArray(s))for(var l=0;l<s.length;l++)r[l]=Mu(r[l],s[l]);else if(Oi(s))for(var l in s)r[l]=Mu(r[l],s[l]);return r}function Ku(r,s){Object.defineProperty(r,"toString",{value:s})}var Xb=(function(){function r(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s,this._cGroup=0,this._cIndex=0}return r.prototype.indexOfGroup=function(s){if(s===this._cGroup)return this._cIndex;var i=this._cIndex;if(s>this._cGroup)for(var l=this._cGroup;l<s;l++)i+=this.groupSizes[l];else for(l=this._cGroup-1;l>=s;l--)i-=this.groupSizes[l];return this._cGroup=s,this._cIndex=i,i},r.prototype.insertRules=function(s,i){if(s>=this.groupSizes.length){for(var l=this.groupSizes,c=l.length,p=c;s>=p;)if((p<<=1)<0)throw qi(16,"".concat(s));this.groupSizes=new Uint32Array(p),this.groupSizes.set(l),this.length=p;for(var f=c;f<p;f++)this.groupSizes[f]=0}for(var v=this.indexOfGroup(s+1),g=0,w=(f=0,i.length);f<w;f++)this.tag.insertRule(v,i[f])&&(this.groupSizes[s]++,v++,g++);g>0&&this._cGroup>s&&(this._cIndex+=g)},r.prototype.clearGroup=function(s){if(s<this.length){var i=this.groupSizes[s],l=this.indexOfGroup(s),c=l+i;this.groupSizes[s]=0;for(var p=l;p<c;p++)this.tag.deleteRule(l);i>0&&this._cGroup>s&&(this._cIndex-=i)}},r.prototype.getGroup=function(s){var i="";if(s>=this.length||this.groupSizes[s]===0)return i;for(var l=this.groupSizes[s],c=this.indexOfGroup(s),p=c+l,f=c;f<p;f++)i+=this.tag.getRule(f)+Gu;return i},r})(),Jb="style[".concat(As,"][").concat(qm,'="').concat(Jl,'"]'),ek=new RegExp("^".concat(As,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Nh=function(r){return typeof ShadowRoot<"u"&&r instanceof ShadowRoot||"host"in r&&r.nodeType===11},Iu=function(r){if(!r)return document;if(Nh(r))return r;if("getRootNode"in r){var s=r.getRootNode();if(Nh(s))return s}return document},tk=function(r,s,i){for(var l,c=i.split(","),p=0,f=c.length;p<f;p++)(l=c[p])&&r.registerName(s,l)},nk=function(r,s){for(var i,l=((i=s.textContent)!==null&&i!==void 0?i:"").split(Gu),c=[],p=0,f=l.length;p<f;p++){var v=l[p].trim();if(v){var g=v.match(ek);if(g){var w=0|parseInt(g[1],10),y=g[2];w!==0&&(Fb(y,w),tk(r,y,g[3]),r.getTag().insertRules(w,c)),c.length=0}else c.push(v)}}},eu=function(r){for(var s=Iu(r.options.target).querySelectorAll(Jb),i=0,l=s.length;i<l;i++){var c=s[i];c&&c.getAttribute(As)!==Gm&&(nk(r,c),c.parentNode&&c.parentNode.removeChild(c))}};function rk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var tg=function(r){var s=document.head,i=r||s,l=document.createElement("style"),c=(function(v){var g=Array.from(v.querySelectorAll("style[".concat(As,"]")));return g[g.length-1]})(i),p=c!==void 0?c.nextSibling:null;l.setAttribute(As,Gm),l.setAttribute(qm,Jl);var f=rk();return f&&l.setAttribute("nonce",f),i.insertBefore(l,p),l},ok=(function(){function r(s){this.element=tg(s),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){var l;if(i.sheet)return i.sheet;for(var c=(l=i.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets,p=0,f=c.length;p<f;p++){var v=c[p];if(v.ownerNode===i)return v}throw qi(17)})(this.element),this.length=0}return r.prototype.insertRule=function(s,i){try{return this.sheet.insertRule(i,s),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},r.prototype.getRule=function(s){var i=this.sheet.cssRules[s];return i&&i.cssText?i.cssText:""},r})(),sk=(function(){function r(s){this.element=tg(s),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(s,i){if(s<=this.length&&s>=0){var l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[s]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},r.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},r})(),ik=(function(){function r(s){this.rules=[],this.length=0}return r.prototype.insertRule=function(s,i){return s<=this.length&&(s===this.length?this.rules.push(i):this.rules.splice(s,0,i),this.length++,!0)},r.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},r.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},r})(),Lh=Pi,ak={isServer:!Pi,useCSSOMInjection:!Db},Tl=(function(){function r(s,i,l){s===void 0&&(s=Es),i===void 0&&(i={});var c=this;this.options=Zt(Zt({},ak),s),this.gs=i,this.names=new Map(l),this.server=!!s.isServer,!this.server&&Pi&&Lh&&(Lh=!1,eu(this)),Ku(this,function(){return(function(p){for(var f=p.getTag(),v=f.length,g="",w=function(_){var b=(function(C){return Nl.get(C)})(_);if(b===void 0)return"continue";var L=p.names.get(b);if(L===void 0||!L.size)return"continue";var E=f.getGroup(_);if(E.length===0)return"continue";var I=As+".g"+_+'[id="'+b+'"]',N="";L.forEach(function(C){C.length>0&&(N+=C+",")}),g+=E+I+'{content:"'+N+'"}'+Gu},y=0;y<v;y++)w(y);return g})(c)})}return r.registerId=function(s){return Li(s)},r.prototype.rehydrate=function(){!this.server&&Pi&&eu(this)},r.prototype.reconstructWithOptions=function(s,i){i===void 0&&(i=!0);var l=new r(Zt(Zt({},this.options),s),this.gs,i&&this.names||void 0);return!this.server&&Pi&&s.target!==this.options.target&&Iu(this.options.target)!==Iu(s.target)&&eu(l),l},r.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(s=(function(i){var l=i.useCSSOMInjection,c=i.target;return i.isServer?new ik(c):l?new ok(c):new sk(c)})(this.options),new Xb(s)));var s},r.prototype.hasNameForId=function(s,i){var l,c;return(c=(l=this.names.get(s))===null||l===void 0?void 0:l.has(i))!==null&&c!==void 0&&c},r.prototype.registerName=function(s,i){Li(s);var l=this.names.get(s);l?l.add(i):this.names.set(s,new Set([i]))},r.prototype.insertRules=function(s,i,l){this.registerName(s,i),this.getTag().insertRules(Li(s),l)},r.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},r.prototype.clearRules=function(s){this.getTag().clearGroup(Li(s)),this.clearNames(s)},r.prototype.clearTag=function(){this.tag=void 0},r})();function lk(r,s){return s==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||r in xb||r.startsWith("--")?String(s).trim():"".concat(s,"px")}var ck=function(r){return r>="A"&&r<="Z"};function Th(r){for(var s="",i=0;i<r.length;i++){var l=r[i];if(i===1&&l==="-"&&r[0]==="-")return r;ck(l)?s+="-"+l.toLowerCase():s+=l}return s.startsWith("ms-")?"-"+s:s}var ng=Symbol.for("sc-keyframes");function dk(r){return typeof r=="object"&&r!==null&&ng in r}var rg=function(r){return r==null||r===!1||r===""},og=function(r){var s=[];for(var i in r){var l=r[i];r.hasOwnProperty(i)&&!rg(l)&&(Array.isArray(l)&&l.isCss||$s(l)?s.push("".concat(Th(i),":"),l,";"):Oi(l)?s.push.apply(s,Ls(Ls(["".concat(i," {")],og(l),!1),["}"],!1)):s.push("".concat(Th(i),": ").concat(lk(i,l),";")))}return s};function Jr(r,s,i,l,c){if(c===void 0&&(c=[]),typeof r=="string")return r&&c.push(r),c;if(rg(r))return c;if(Yu(r))return c.push(".".concat(r.styledComponentId)),c;if($s(r)){if(!$s(f=r)||f.prototype&&f.prototype.isReactComponent||!s)return c.push(r),c;var p=r(s);return Jr(p,s,i,l,c)}var f;if(dk(r))return i?(r.inject(i,l),c.push(r.getName(l))):c.push(r),c;if(Oi(r)){for(var v=og(r),g=0;g<v.length;g++)c.push(v[g]);return c}if(!Array.isArray(r))return c.push(r.toString()),c;for(g=0;g<r.length;g++)Jr(r[g],s,i,l,c);return c}function sg(r){for(var s=0;s<r.length;s+=1){var i=r[s];if($s(i)&&!Yu(i))return!1}return!0}var uk=Km(Jl),pk=(function(){function r(s,i,l){this.rules=s,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&sg(s),this.componentId=i,this.baseHash=vo(uk,i),this.baseStyle=l,Tl.registerId(i)}return r.prototype.generateAndInjectStyles=function(s,i,l){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,i,l).className:"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))c=wo(c,this.staticRulesId);else{var p=Ll(Jr(this.rules,s,i,l)),f=Su(vo(this.baseHash,p)>>>0);if(!i.hasNameForId(this.componentId,f)){var v=l(p,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,v)}c=wo(c,f),this.staticRulesId=f}else{for(var g=vo(this.baseHash,l.hash),w="",y=0;y<this.rules.length;y++){var _=this.rules[y];if(typeof _=="string")w+=_;else if(_){var b=Ll(Jr(_,s,i,l));g=vo(vo(g,String(y)),b),w+=b}}if(w){var L=Su(g>>>0);if(!i.hasNameForId(this.componentId,L)){var E=l(w,".".concat(L),void 0,this.componentId);i.insertRules(this.componentId,L,E)}c=wo(c,L)}}return{className:c,css:typeof window>"u"?i.getTag().getGroup(Li(this.componentId)):""}},r})(),fk=/&/g,wr=47,yo=42;function Ah(r){if(r.indexOf("}")===-1)return!1;for(var s=r.length,i=0,l=0,c=!1,p=0;p<s;p++){var f=r.charCodeAt(p);if(l!==0||c||f!==wr||r.charCodeAt(p+1)!==yo)if(c)f===yo&&r.charCodeAt(p+1)===wr&&(c=!1,p++);else if(f!==34&&f!==39||p!==0&&r.charCodeAt(p-1)===92){if(l===0){if(f===123)i++;else if(f===125&&--i<0)return!0}}else l===0?l=f:l===f&&(l=0);else c=!0,p++}return i!==0||l!==0}function ig(r,s){return r.map(function(i){return i.type==="rule"&&(i.value="".concat(s," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(s," ")),i.props=i.props.map(function(l){return"".concat(s," ").concat(l)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=ig(i.children,s)),i})}function hk(r){var s,i,l,c=Es,p=c.options,f=p===void 0?Es:p,v=c.plugins,g=v===void 0?qu:v,w=function(E,I,N){return N.startsWith(i)&&N.endsWith(i)&&N.replaceAll(i,"").length>0?".".concat(s):E},y=g.slice();y.push(function(E){E.type===Yl&&E.value.includes("&")&&(l||(l=new RegExp("\\".concat(i,"\\b"),"g")),E.props[0]=E.props[0].replace(fk,i).replace(l,w))}),f.prefix&&y.push(Rb),y.push(Eb);var _=[],b=$b(y.concat(Pb(function(E){return _.push(E)}))),L=function(E,I,N,C){I===void 0&&(I=""),N===void 0&&(N=""),C===void 0&&(C="&"),s=C,i=I,l=void 0;var T=(function(j){if(!Ah(j))return j;for(var $=j.length,F="",z=0,B=0,le=0,ce=!1,X=0;X<$;X++){var q=j.charCodeAt(X);if(le!==0||ce||q!==wr||j.charCodeAt(X+1)!==yo)if(ce)q===yo&&j.charCodeAt(X+1)===wr&&(ce=!1,X++);else if(q!==34&&q!==39||X!==0&&j.charCodeAt(X-1)===92){if(le===0)if(q===123)B++;else if(q===125){if(--B<0){for(var Q=X+1;Q<$;){var ge=j.charCodeAt(Q);if(ge===59||ge===10)break;Q++}Q<$&&j.charCodeAt(Q)===59&&Q++,B=0,X=Q-1,z=Q;continue}B===0&&(F+=j.substring(z,X+1),z=X+1)}else q===59&&B===0&&(F+=j.substring(z,X+1),z=X+1)}else le===0?le=q:le===q&&(le=0);else ce=!0,X++}if(z<$){var Y=j.substring(z);Ah(Y)||(F+=Y)}return F})((function(j){if(j.indexOf("//")===-1)return j;for(var $=j.length,F=[],z=0,B=0,le=0,ce=0;B<$;){var X=j.charCodeAt(B);if(X!==34&&X!==39||B!==0&&j.charCodeAt(B-1)===92)if(le===0)if(X===wr&&B+1<$&&j.charCodeAt(B+1)===yo){for(B+=2;B+1<$&&(j.charCodeAt(B)!==yo||j.charCodeAt(B+1)!==wr);)B++;B+=2}else if(X===40&&B>=3&&(32|j.charCodeAt(B-1))==108&&(32|j.charCodeAt(B-2))==114&&(32|j.charCodeAt(B-3))==117)ce=1,B++;else if(ce>0)X===41?ce--:X===40&&ce++,B++;else if(X===yo&&B+1<$&&j.charCodeAt(B+1)===wr)B>z&&F.push(j.substring(z,B)),z=B+=2;else if(X===wr&&B+1<$&&j.charCodeAt(B+1)===wr){for(B>z&&F.push(j.substring(z,B));B<$&&j.charCodeAt(B)!==10;)B++;z=B}else B++;else B++;else le===0?le=X:le===X&&(le=0),B++}return z===0?j:(z<$&&F.push(j.substring(z)),F.join(""))})(E)),k=Tb(N||I?"".concat(N," ").concat(I," { ").concat(T," }"):T);return f.namespace&&(k=ig(k,f.namespace)),_=[],Il(k,b),_};return L.hash=g.length?g.reduce(function(E,I){return I.name||qi(15),vo(E,I.name)},5381).toString():"",L}var mk=new Tl,Nu=hk(),ag=Tn.createContext({shouldForwardProp:void 0,styleSheet:mk,stylis:Nu});ag.Consumer;Tn.createContext(void 0);function Lu(){return Tn.useContext(ag)}var Qu=Tn.createContext(void 0);Qu.Consumer;var tu={};function gk(r,s,i){var l=Yu(r),c=r,p=!Jd(r),f=s.attrs,v=f===void 0?qu:f,g=s.componentId,w=g===void 0?(function(j,$){var F=typeof j!="string"?"sc":_h(j);tu[F]=(tu[F]||0)+1;var z="".concat(F,"-").concat(Zu(Jl+F+tu[F]));return $?"".concat($,"-").concat(z):z})(s.displayName,s.parentComponentId):g,y=s.displayName,_=y===void 0?(function(j){return Jd(j)?"styled.".concat(j):"Styled(".concat(Wb(j),")")})(r):y,b=s.displayName&&s.componentId?"".concat(_h(s.displayName),"-").concat(s.componentId):s.componentId||w,L=l&&c.attrs?c.attrs.concat(v).filter(Boolean):v,E=s.shouldForwardProp;if(l&&c.shouldForwardProp){var I=c.shouldForwardProp;if(s.shouldForwardProp){var N=s.shouldForwardProp;E=function(j,$){return I(j,$)&&N(j,$)}}else E=I}var C=new pk(i,b,l?c.componentStyle:void 0);function T(j,$){return(function(F,z,B){var le=F.attrs,ce=F.componentStyle,X=F.defaultProps,q=F.foldedComponentIds,Q=F.styledComponentId,ge=F.target,Y=Tn.useContext(Qu),Z=Lu(),se=F.shouldForwardProp||Z.shouldForwardProp,V=Zm(z,Y,X)||Es,H=(function(te,ae,be){for(var Me,Ve=Zt(Zt({},ae),{className:void 0,theme:be}),xe=0;xe<te.length;xe+=1){var Se=$s(Me=te[xe])?Me(Ve):Me;for(var Te in Se)Te==="className"?Ve.className=wo(Ve.className,Se[Te]):Te==="style"?Ve.style=Zt(Zt({},Ve.style),Se[Te]):Te in ae&&ae[Te]===void 0||(Ve[Te]=Se[Te])}return"className"in ae&&typeof ae.className=="string"&&(Ve.className=wo(Ve.className,ae.className)),Ve})(le,z,V),P=H.as||ge,M={};for(var D in H)H[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&H.theme===V||(D==="forwardedAs"?M.as=H.forwardedAs:se&&!se(D,P)||(M[D]=H[D]));var re=(function(te,ae){var be=Lu(),Me=te.generateAndInjectStyles(ae,be.styleSheet,be.stylis);return Me})(ce,H),J=re.className,G=wo(q,Q);return J&&(G+=" "+J),H.className&&(G+=" "+H.className),M[Jd(P)&&!Ym.has(P)?"class":"className"]=G,B&&(M.ref=B),x.createElement(P,M)})(k,j,$)}T.displayName=_;var k=Tn.forwardRef(T);return k.attrs=L,k.componentStyle=C,k.displayName=_,k.shouldForwardProp=E,k.foldedComponentIds=l?wo(c.foldedComponentIds,c.styledComponentId):"",k.styledComponentId=b,k.target=l?c.target:r,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=l?(function($){for(var F=[],z=1;z<arguments.length;z++)F[z-1]=arguments[z];for(var B=0,le=F;B<le.length;B++)Mu($,le[B],!0);return $})({},c.defaultProps,j):j}}),Ku(k,function(){return".".concat(k.styledComponentId)}),p&&eg(k,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function Eh(r,s){for(var i=[r[0]],l=0,c=s.length;l<c;l+=1)i.push(s[l],r[l+1]);return i}var $h=function(r){return Object.assign(r,{isCss:!0})};function Io(r){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];if($s(r)||Oi(r))return $h(Jr(Eh(qu,Ls([r],s,!0))));var l=r;return s.length===0&&l.length===1&&typeof l[0]=="string"?Jr(l):$h(Jr(Eh(l,s)))}function Tu(r,s,i){if(i===void 0&&(i=Es),!s)throw qi(1,s);var l=function(c){for(var p=[],f=1;f<arguments.length;f++)p[f-1]=arguments[f];return r(s,i,Io.apply(void 0,Ls([c],p,!1)))};return l.attrs=function(c){return Tu(r,s,Zt(Zt({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)}))},l.withConfig=function(c){return Tu(r,s,Zt(Zt({},i),c))},l}var lg=function(r){return Tu(gk,r)},h=lg;Ym.forEach(function(r){h[r]=lg(r)});var cg,xk=(function(){function r(s,i){this.rules=s,this.componentId=i,this.isStatic=sg(s),Tl.registerId(this.componentId+1)}return r.prototype.createStyles=function(s,i,l,c){var p=c(Ll(Jr(this.rules,i,l,c)),""),f=this.componentId+s;l.insertRules(f,f,p)},r.prototype.removeStyles=function(s,i){i.clearRules(this.componentId+s)},r.prototype.renderStyles=function(s,i,l,c){s>2&&Tl.registerId(this.componentId+s);var p=this.componentId+s;this.isStatic?l.hasNameForId(p,p)||this.createStyles(s,i,l,c):(this.removeStyles(s,l),this.createStyles(s,i,l,c))},r})();function vk(r){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];var l=Io.apply(void 0,Ls([r],s,!1)),c="sc-global-".concat(Zu(JSON.stringify(l))),p=new xk(l,c),f=new WeakMap,v=function(g){var w=Lu(),y=Tn.useContext(Qu),_=f.get(w.styleSheet);return _===void 0&&(_=w.styleSheet.allocateGSInstance(c),f.set(w.styleSheet,_)),Tn.useLayoutEffect(function(){return w.styleSheet.server||(function(b,L,E,I,N){if(p.isStatic)p.renderStyles(b,zb,E,N);else{var C=Zt(Zt({},L),{theme:Zm(L,I,v.defaultProps)});p.renderStyles(b,C,E,N)}})(_,g,w.styleSheet,y,w.stylis),function(){p.removeStyles(_,w.styleSheet)}},[_,g,w.styleSheet,y,w.stylis]),null};return Tn.memo(v)}var yk=(function(){function r(s,i){var l=this;this[cg]=!0,this.inject=function(c,p){p===void 0&&(p=Nu);var f=l.name+p.hash;c.hasNameForId(l.id,f)||c.insertRules(l.id,f,p(l.rules,f,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=i,Ku(this,function(){throw qi(12,String(l.name))})}return r.prototype.getName=function(s){return s===void 0&&(s=Nu),this.name+s.hash},r})();function Xu(r){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];var l=Ll(Io.apply(void 0,Ls([r],s,!1))),c=Zu(l);return new yk(c,l)}cg=ng;const wk=768,jk=`(max-width: ${wk-1}px)`;function Ju(r){const[s,i]=x.useState(()=>typeof window>"u"?!1:window.matchMedia(r).matches);return x.useEffect(()=>{if(typeof window>"u")return;const l=window.matchMedia(r),c=p=>i(p.matches);return i(l.matches),l.addEventListener("change",c),()=>l.removeEventListener("change",c)},[r]),s}function bk(){return Ju(jk)}const kk="48px",_k="240px",Ph="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",Ck=h.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${r=>r.$isExpanded?_k:kk};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${r=>r.$isExpanded?Io`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Io`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${r=>r.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,Sk=h.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${r=>r.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${r=>r.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,Mk=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,Ik=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,Nk=h.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  height: 32px;
  background: var(--color-bg-primary, white);
  border: 0.5px solid var(--color-border-transparent, rgba(21, 21, 21, 0.05));
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-secondary, #f6f7f9);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,Lk=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-content-primary, #151515);

  img {
    width: 17px;
    height: 14px;
    object-fit: contain;
  }
`,Tk=h.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: var(--color-content-primary, #151515);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Rh=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: var(--color-content-secondary, #1c222a);
  opacity: 0.6;

  svg {
    width: 16px;
    height: 16px;
  }
`,nu=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ak="var(--gradient-ai)",dg=h.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${r=>r.$isActive&&!r.$isAi&&Io`
      background: var(--color-bg-primary, white);
      box-shadow: ${Ph}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${r=>r.$isActive&&r.$isAi&&Io`
      background: ${Ak};
      box-shadow: ${Ph}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,ug=h.button`
  all: unset;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  /* Color cascades to icon (currentColor) and label (inherit) */
  color: ${r=>r.$isAiActive?"var(--color-content-inverse, white)":"var(--color-content-primary, #151515)"};
  opacity: ${r=>r.$isActive?1:.6};
  transition: background 150ms ease-in-out, opacity 150ms ease-in-out, color 150ms ease-in-out;

  &:hover {
    background: ${r=>r.$isAiActive?"transparent":"var(--color-bg-transparent, rgba(21, 21, 21, 0.05))"};
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,pg=h.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fg=h.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg, img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,Ek=h.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,ru=h.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
  flex-shrink: 0;
`;h.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px 2px 8px;
  border-radius: 16px;
  background: linear-gradient(
    to bottom,
    rgba(227, 25, 254, 0.18),
    rgba(255, 46, 146, 0.18)
  );
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.03);
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #B01786;
  white-space: nowrap;
  flex-shrink: 0;
`;const $k=h.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  padding: ${r=>r.$isExpanded?"6px 0":"0"};
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,Pk=h.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: ${r=>r.$color||"#ee9c2d"};
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #1c222a);
  flex-shrink: 0;
  margin: 0 4px;
`,Rk=h.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: var(--color-content-secondary, #1c222a);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;h.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: var(--color-content-primary, #151515);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;function Dk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function zk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function Fk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function Bk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function Ok({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function Hk({size:r=16}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),t.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),t.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Wk({size:r=16}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function Uk({size:r=16}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),t.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Vk({size:r=16}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Gk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function qk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function Zk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function Yk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function Kk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function Dh({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function ou({item:r,isExpanded:s,showNewBadge:i,isAi:l}){const c=r.isActive??!1;return t.jsx(dg,{$isActive:c,$isAi:l,children:t.jsxs(ug,{$isActive:c,$isAiActive:c&&!!l,onClick:r.onClick,"aria-current":c?"page":void 0,title:s?void 0:r.label,children:[t.jsxs(fg,{children:[r.hasUnread&&t.jsx(Ek,{}),c&&r.activeIcon?r.activeIcon:r.icon]}),s&&t.jsx(pg,{children:r.label}),s&&i&&t.jsx(Fi,{variant:"primary",children:"New"})]})})}function Qk({items:r,toolItems:s=[],bottomItems:i=[],workspace:l,user:c,onWorkspaceClick:p,onUserClick:f,onSettingsClick:v,newItemId:g,aiItemId:w}){const[y,_]=x.useState(!1);return t.jsx(Ck,{$isExpanded:y,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),"aria-label":"Primary navigation",children:t.jsxs(Sk,{$isExpanded:y,children:[t.jsxs(Mk,{children:[t.jsxs(Nk,{$isExpanded:y,onClick:p,"aria-label":`Workspace: ${l.name}`,title:y?void 0:l.name,children:[t.jsx(Lk,{children:l.logoUrl?t.jsx("img",{src:l.logoUrl,alt:l.name}):l.initial??l.name.charAt(0).toUpperCase()}),y&&t.jsxs(t.Fragment,{children:[t.jsx(Tk,{children:l.name}),t.jsx(Rh,{children:t.jsx(Dh,{})})]})]}),t.jsx(nu,{children:r.map(b=>t.jsx(ou,{item:b,isExpanded:y,isAi:b.id===w},b.id))}),s.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(ru,{}),t.jsx(nu,{children:s.map(b=>t.jsx(ou,{item:b,isExpanded:y,showNewBadge:b.id===g,isAi:b.id===w},b.id))})]})]}),t.jsxs(Ik,{children:[i.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(ru,{}),t.jsx(nu,{children:i.map(b=>t.jsx(ou,{item:b,isExpanded:y,isAi:b.id===w},b.id))})]}),t.jsx(ru,{}),t.jsx(dg,{$isActive:!1,children:t.jsxs(ug,{$isActive:!1,onClick:v,"aria-label":"Settings",title:y?void 0:"Settings",children:[t.jsx(fg,{children:t.jsx(Kk,{})}),y&&t.jsx(pg,{children:"Settings"})]})}),t.jsxs($k,{$isExpanded:y,onClick:f,"aria-label":`User: ${c.name}`,title:y?void 0:c.name,children:[t.jsx(Pk,{$color:c.avatarColor,children:c.initials}),y&&t.jsxs(t.Fragment,{children:[t.jsx(Rk,{children:c.name}),t.jsx(Rh,{children:t.jsx(Dh,{})})]})]})]})]})})}const Xk=270,Jk=h.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${r=>r.$isVisible?`${r.$width}px`:"0px"};
  height: 100%;
  flex-shrink: 0;
  background: var(--color-bg-primary, white);
  border-right: 1px solid var(--color-border-opaque, #e8eaee);
  overflow: hidden;
  /* Skip the width transition during an active drag so the panel tracks
     the cursor exactly; keep it for visibility toggles. */
  transition: ${r=>r.$isResizing?"none":"width 200ms ease"};
`,e_=h.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,t_=h.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,n_=h.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-relaxed, 1.5);
  letter-spacing: var(--tracking-wide, 0.02em);
  color: var(--color-content-tertiary, #475569);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,r_=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,o_=h.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 0 12px 8px;

  /* The SearchField root sits in the first slot — flex it so the input
     fills whatever room is left after the fixed-size filter button,
     even when the secondary nav is dragged down to its min width. */
  > div {
    flex: 1;
    min-width: 0;
  }
`,s_=h.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
  background: var(--color-bg-primary, white);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  color: var(--color-content-secondary, #1c222a);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-secondary, #f6f7f9);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,i_=h.div`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  width: 100%;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`,a_=h.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
  padding: 0 8px 0 0;
  gap: 4px;
  border-radius: 6px;
  cursor: pointer;
  color: var(--color-content-tertiary, #475569);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
    border-radius: 6px;
  }
`,l_=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  padding: 8px;

  svg {
    width: 16px;
    height: 16px;
  }
`,c_=h.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-content-tertiary, #475569);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,d_=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-content-tertiary, #475569);
  transform: rotate(${r=>r.$expanded?"0deg":"-90deg"});
  transition: transform 150ms ease-in-out;

  svg {
    width: 16px;
    height: 16px;
  }
`,u_=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 32px;
`,p_=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f_=h.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 8px 2px;
`,h_=h.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,m_=h.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  z-index: 10;
  /* Translate half the width over the border so the cursor zone straddles
     the existing 1px border-right. */
  transform: translateX(3px);
  background: ${r=>r.$isResizing?"var(--color-border-focus, #1969fe)":"transparent"};
  transition: background var(--duration-fast, 120ms) var(--ease-default, ease);

  &:hover {
    background: var(--color-border-focus, #1969fe);
  }
`,g_=h.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,x_=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,hg=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  padding: 8px;
  color: var(--color-content-tertiary, #475569);

  svg {
    width: 16px;
    height: 16px;
  }
`;h.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  svg {
    width: 16px;
    height: 16px;
    color: var(--color-content-tertiary, #475569);
  }
`;function Ri(){return t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function v_(){return t.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const ep={"--li-min-height":"32px","--li-py":"0px","--li-px":"0px","--li-gap":"4px",borderRadius:"6px",paddingRight:"8px",borderBottom:"none"};function y_({item:r}){return t.jsx(_r,{label:t.jsx("span",{style:{color:"var(--color-content-tertiary, #475569)",letterSpacing:"-0.084px"},children:r.label}),leadingSlot:t.jsx(hg,{children:r.icon??t.jsx(Ri,{})}),selected:r.isActive,onClick:r.onClick,divider:!1,size:"md","aria-current":r.isActive?"page":void 0,style:ep})}function w_({group:r}){const[s,i]=x.useState(r.defaultExpanded??!0);return t.jsxs(p_,{children:[t.jsxs(a_,{onClick:()=>i(l=>!l),"aria-expanded":s,children:[t.jsx(l_,{children:r.icon??t.jsx(Ri,{})}),t.jsx(c_,{children:r.label}),r.trailingBadge&&t.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:r.trailingBadge}),t.jsx(d_,{$expanded:s,children:t.jsx(An,{size:16})})]}),s&&t.jsx(u_,{children:r.children.map(l=>t.jsx(_r,{label:t.jsx("span",{style:{color:"var(--color-content-tertiary, #475569)",letterSpacing:"-0.084px"},children:l.label}),leadingSlot:t.jsx(hg,{children:l.icon??null}),trailingSlot:l.trailingSlot,selected:l.isActive,onClick:l.onClick,divider:!1,size:"md","aria-current":l.isActive?"page":void 0,style:ep},l.id))})]})}function j_({heading:r,isVisible:s,menuEntries:i=[],pageEntries:l=[],showSearch:c=!0,searchValue:p="",onSearchChange:f,onHeaderAction1:v,onHeaderAction2:g,onFilterClick:w,headerSlot:y,bodyContent:_,width:b=Xk,onWidthChange:L,minWidth:E=220,maxWidth:I=520}){const N=_!==void 0,C=x.useRef(null),[T,k]=x.useState(!1);return x.useEffect(()=>{if(!T||!L)return;const j=C.current;if(!j)return;const $=j.getBoundingClientRect().left,F=le=>{const ce=Math.min(I,Math.max(E,le.clientX-$));L(ce)},z=()=>k(!1);window.addEventListener("mousemove",F),window.addEventListener("mouseup",z);const B=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",z),document.body.style.userSelect=B,document.body.style.cursor=""}},[T,L,E,I]),t.jsxs(Jk,{ref:C,$isVisible:s,$width:b,$isResizing:T,"aria-label":"Secondary navigation",children:[t.jsxs(e_,{children:[t.jsxs(t_,{children:[t.jsx(n_,{children:r}),y??t.jsxs(r_,{children:[t.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:v,"aria-label":"Action",children:t.jsx(Ri,{})}),t.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:g,"aria-label":"Action",children:t.jsx(Ri,{})})]})]}),c&&!N&&t.jsxs(o_,{children:[t.jsx(Ul,{size:"sm",placeholder:"Search...",value:p,onChange:j=>f==null?void 0:f(j.target.value)}),t.jsx(s_,{onClick:w,"aria-label":"Filter",children:t.jsx(v_,{})})]})]}),N?_:t.jsx(i_,{children:i.map(j=>j.type==="single"?t.jsx(y_,{item:j.item},j.item.id):j.type==="group"?t.jsx(w_,{group:j.group},j.group.id):t.jsx(f_,{children:j.label.label},j.label.id))}),l.length>0&&t.jsxs(h_,{children:[t.jsx(g_,{}),l.map(j=>t.jsx(_r,{label:t.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:j.label}),leadingSlot:t.jsx(x_,{children:j.icon??t.jsx(Ri,{})}),onClick:j.onClick,selected:j.isActive??!1,divider:!1,size:"md","aria-current":j.isActive?"page":void 0,style:ep},j.id))]}),L&&s&&t.jsx(m_,{$isResizing:T,onMouseDown:j=>{j.preventDefault(),k(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const b_=h.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:r})=>r?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,k_=h.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;

  /* Prevent Alloy Breadcrumb .list from wrapping inside the 48px TopNav */
  ol, ul {
    flex-wrap: nowrap !important;
    overflow: hidden;
  }
`,Ti=h.div`
  margin: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-relaxed, 1.5);
  letter-spacing: var(--tracking-wide, 0.02em);
  color: var(--color-content-primary, #151515);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,__=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,C_=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function S_(){return t.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),t.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),t.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function zh(){return t.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Fh(){return t.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function M_(){return t.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function I_({heading:r,actions:s=[],showActivityButton:i=!0,showPonderButton:l=!0,noBorder:c=!1,onActivityClick:p,onPonderClick:f,onDotsClick:v}){const g=s.filter(y=>y.variant==="secondary"),w=s.filter(y=>y.variant==="primary");return t.jsxs(b_,{$noBorder:c,children:[t.jsx(k_,{children:typeof r=="string"?t.jsx(Ti,{children:r}):r}),t.jsxs(__,{children:[t.jsxs(C_,{children:[t.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:v,"aria-label":"More options",title:"More options",children:t.jsx(S_,{})}),g.map(y=>t.jsx(Fe,{variant:"secondary",size:"sm",leadingArtwork:t.jsx(Fh,{}),trailingArtwork:t.jsx(zh,{}),onClick:y.onClick,children:y.label},y.id)),w.map(y=>t.jsx(Fe,{variant:"primary",size:"sm",leadingArtwork:t.jsx(Fh,{}),trailingArtwork:t.jsx(zh,{}),onClick:y.onClick,children:y.label},y.id))]}),i&&t.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:p,"aria-label":"Activity",title:"Activity",children:t.jsx(M_,{})}),l&&t.jsx(Z0,{dark:!0,onClick:f,"aria-label":"Ponder AI"})]})]})}const N_=h.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,L_=h.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,T_=h.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,A_=h.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  background: var(--color-bg-primary, white);
  padding-bottom: var(--space-8, 32px);

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`,Bh="tb:secondary-nav-width",Oh=270,Hh=220,Wh=520;function E_({items:r,toolItems:s,bottomItems:i,workspace:l,user:c,onWorkspaceClick:p,onUserClick:f,onSettingsClick:v,newItemId:g,aiItemId:w,secNavHeading:y,menuEntries:_,pageEntries:b,showSearch:L,searchValue:E,onSearchChange:I,onHeaderAction1:N,onHeaderAction2:C,onFilterClick:T,headerSlot:k,bodyContent:j,heading:$,actions:F,showActivityButton:z,showPonderButton:B,noBorder:le,onActivityClick:ce,onPonderClick:X,onDotsClick:q,children:Q,showSecondaryNav:ge=!0}){const[Y,Z]=x.useState(()=>{if(typeof window>"u")return Oh;const se=window.localStorage.getItem(Bh),V=se?parseInt(se,10):NaN;return Number.isFinite(V)?Math.min(Wh,Math.max(Hh,V)):Oh});return x.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Bh,String(Y))},[Y]),t.jsxs(N_,{children:[t.jsx(Qk,{items:r,toolItems:s,bottomItems:i,workspace:l,user:c,onWorkspaceClick:p,onUserClick:f,onSettingsClick:v,newItemId:g,aiItemId:w}),t.jsxs(L_,{children:[ge&&t.jsx(j_,{heading:y,menuEntries:_,pageEntries:b,isVisible:!0,showSearch:L,searchValue:E,onSearchChange:I,onHeaderAction1:N,onHeaderAction2:C,onFilterClick:T,headerSlot:k,bodyContent:j,width:Y,onWidthChange:Z,minWidth:Hh,maxWidth:Wh}),t.jsxs(T_,{children:[t.jsx(I_,{heading:$,actions:F,showActivityButton:z,showPonderButton:B,noBorder:le,onActivityClick:ce,onPonderClick:X,onDotsClick:q}),t.jsx(A_,{children:Q})]})]})]})}function $_({deadZonePx:r=8,topThresholdPx:s=20,target:i}={}){const[l,c]=x.useState(null),p=x.useRef(0);return x.useEffect(()=>{var w;const f=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;p.current=f();const v=()=>{const y=f(),_=y-p.current;Math.abs(_)<r||(_>0&&y>s?c("down"):_<0&&c("up"),p.current=y)},g=i??(typeof window<"u"?window:{});return(w=g.addEventListener)==null||w.call(g,"scroll",v,{passive:!0}),()=>{var y;(y=g.removeEventListener)==null||y.call(g,"scroll",v)}},[r,s,i]),l}const P_=h.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
  padding: 0 var(--space-1, 4px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-content-primary, #151515);
  border-radius: var(--radius-md, 8px);
  cursor: pointer;
  height: 32px;
  box-sizing: border-box;

  background: ${r=>r.$active?"var(--color-bg-tertiary, #eceef1)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,R_=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,D_=h.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function su({label:r,isOpen:s,onClick:i,ariaLabel:l}){return t.jsxs(P_,{type:"button",$active:s,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!s,"aria-label":l,children:[t.jsx(R_,{children:r}),t.jsx(D_,{children:t.jsx(An,{size:14})})]})}const z_=h.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${r=>r.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,F_=h.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,Uh=h.button`
  all: unset;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  color: var(--color-content-secondary, #475569);
  cursor: pointer;
  flex: 0 0 auto;
  &:hover { background: var(--color-bg-tertiary, #eceef1); }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,B_=h.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,Vh=h.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,O_=h.button`
  all: unset;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: ${r=>r.$color??"var(--color-bg-tertiary, #eceef1)"};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  flex: 0 0 auto;
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;function H_({size:r=18}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const W_=x.forwardRef(function({primaryLabel:s,secondaryLabel:i,tertiaryLabel:l,openOverlay:c,user:p,hidden:f,onHamburgerClick:v,onPrimaryClick:g,onSecondaryClick:w,onTertiaryClick:y,onSearchClick:_,onUserClick:b},L){return t.jsx(z_,{ref:L,$hidden:f,children:t.jsxs(F_,{children:[t.jsx(Uh,{onClick:v,"aria-label":"Open navigation",children:t.jsx(H_,{size:18})}),t.jsxs(B_,{children:[t.jsx(su,{label:s,isOpen:c==="primary",onClick:g,ariaLabel:"Choose a module"}),i&&t.jsxs(t.Fragment,{children:[t.jsx(Vh,{"aria-hidden":"true",children:"›"}),t.jsx(su,{label:i,isOpen:c==="secondary",onClick:w,ariaLabel:"Choose a section"})]}),l&&t.jsxs(t.Fragment,{children:[t.jsx(Vh,{"aria-hidden":"true",children:"›"}),t.jsx(su,{label:l,isOpen:c==="persona",onClick:y??(()=>{}),ariaLabel:"Choose a persona"})]})]}),t.jsx(Uh,{onClick:_,"aria-label":"Search",children:t.jsx(Ou,{size:18})}),t.jsx(O_,{onClick:b,$color:p.avatarColor,"aria-label":`User: ${p.name}`,children:p.initials})]})})}),U_=Xu`
  from { opacity: 0; }
  to { opacity: 1; }
`,V_=h.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${U_} 160ms ease-out;
`;function G_({onDismiss:r}){return x.useEffect(()=>{const s=l=>{l.key==="Escape"&&r()};window.addEventListener("keydown",s);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s),document.body.style.overflow=i}},[r]),t.jsx(V_,{onClick:r,"aria-hidden":"true"})}const q_=Xu`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,Z_=h.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 901;
  background: var(--color-bg-primary, #ffffff);
  border-top-left-radius: var(--radius-lg, 12px);
  border-top-right-radius: var(--radius-lg, 12px);
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.12);
  animation: ${q_} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,Y_=h.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,K_=h.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,Q_=h.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,X_=h.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function tp({title:r,children:s,ariaLabel:i}){return t.jsxs(Z_,{role:"dialog","aria-modal":"true","aria-label":i??r,children:[t.jsx(Y_,{children:t.jsx(K_,{"aria-hidden":"true"})}),r&&t.jsx(Q_,{children:r}),t.jsx(X_,{children:s})]})}const ec=h.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,Hi=h.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,bo=h.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: var(--space-3, 12px) var(--space-5, 20px);
  padding-left: ${r=>r.$indent?"calc(var(--space-5, 20px) + 24px)":"var(--space-5, 20px)"};
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  line-height: 1.3;
  color: var(--color-content-primary, #151515);
  cursor: pointer;
  min-height: 44px;
  box-sizing: border-box;

  font-weight: ${r=>r.$active?600:400};
  background: ${r=>r.$active?"var(--color-bg-secondary, #f6f7f9)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: -2px;
  }
`,Ss=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,ko=h.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_o=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function J_({activeId:r,groups:s,onSelect:i}){return t.jsx(tp,{title:"Modules",ariaLabel:"Choose a module",children:t.jsx(ec,{children:s.map((l,c)=>t.jsxs("div",{children:[c>0&&t.jsx(Hi,{children:l.label}),c===0&&t.jsx(Hi,{children:l.label}),l.items.map(p=>{const f=p.id===r;return t.jsxs(bo,{$active:f,onClick:()=>i(p.id),"aria-pressed":f,children:[t.jsx(Ss,{children:p.icon}),t.jsx(ko,{children:p.label}),f&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},p.id)})]},l.id))})})}function eC({moduleLabel:r,entries:s,onSelect:i}){return t.jsx(tp,{title:r,ariaLabel:`${r} sections`,children:t.jsx(ec,{children:s.map((l,c)=>{if(l.type==="single"){const f=l.item;return t.jsxs(bo,{$active:f.isActive,onClick:()=>{var v;(v=f.onClick)==null||v.call(f),i()},"aria-pressed":!!f.isActive,children:[t.jsx(Ss,{children:f.icon}),t.jsx(ko,{children:f.label}),f.isActive&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},f.id)}const p=l.group;return t.jsxs("div",{children:[t.jsx(Hi,{children:p.label}),p.children.map(f=>t.jsxs(bo,{$active:f.isActive,$indent:!0,onClick:()=>{var v;(v=f.onClick)==null||v.call(f),i()},"aria-pressed":!!f.isActive,children:[t.jsx(Ss,{children:f.icon}),t.jsx(ko,{children:f.label}),f.isActive&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},f.id))]},p.id)})})})}const tC=h.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,nC=h.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,rC=h.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function oC({personas:r,activeId:s,onSelect:i}){return t.jsx(tp,{title:"Personas",ariaLabel:"Choose a persona",children:t.jsx(ec,{children:r.map(l=>{const c=l.id===s;return t.jsxs(bo,{$active:c,onClick:()=>i(l.id),"aria-pressed":c,children:[t.jsx(ko,{as:"span",children:t.jsxs(tC,{children:[t.jsx(nC,{children:l.name}),t.jsx(rC,{children:l.role})]})}),c&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},l.id)})})})}const sC=Xu`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,iC=h.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 84vw;
  max-width: 360px;
  z-index: 901;
  background: var(--color-bg-primary, #ffffff);
  display: flex;
  flex-direction: column;
  box-shadow: 8px 0 24px rgba(0, 0, 0, 0.12);
  animation: ${sC} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,aC=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,lC=h.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,cC=h.button`
  all: unset;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  cursor: pointer;
  color: var(--color-content-secondary, #475569);
  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
`,dC=h.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,uC=60;function pC({title:r,onDismiss:s,children:i}){const l=x.useRef(null),c=x.useRef(null);return x.useEffect(()=>{const p=l.current;if(!p)return;const f=g=>{const w=g.touches[0];c.current={x:w.clientX,y:w.clientY}},v=g=>{if(!c.current)return;const w=g.changedTouches[0],y=w.clientX-c.current.x,_=w.clientY-c.current.y;c.current=null,y<-60&&Math.abs(_)<uC&&s()};return p.addEventListener("touchstart",f,{passive:!0}),p.addEventListener("touchend",v),()=>{p.removeEventListener("touchstart",f),p.removeEventListener("touchend",v)}},[s]),t.jsxs(iC,{ref:l,role:"dialog","aria-modal":"true","aria-label":r??"Navigation",children:[t.jsxs(aC,{children:[t.jsx(lC,{children:r??"Navigation"}),t.jsx(cC,{onClick:s,"aria-label":"Close navigation",children:t.jsx(Ps,{size:18})})]}),t.jsx(dC,{children:i})]})}function fC({activeId:r,groups:s,currentMenuEntries:i,onSelectModule:l,onDismiss:c}){return t.jsx(pC,{title:"Navigation",onDismiss:c,children:t.jsx(ec,{children:s.map(p=>t.jsxs("div",{children:[t.jsx(Hi,{children:p.label}),p.items.map(f=>{const v=f.id===r;return t.jsxs("div",{children:[t.jsxs(bo,{$active:v,onClick:()=>{l(f.id),c()},"aria-pressed":v,children:[t.jsx(Ss,{children:f.icon}),t.jsx(ko,{children:f.label}),v&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]}),v&&i.length>0&&t.jsx("div",{children:i.map(g=>{if(g.type==="single"){const y=g.item;return t.jsxs(bo,{$active:y.isActive,$indent:!0,onClick:()=>{var _;(_=y.onClick)==null||_.call(y),c()},"aria-pressed":!!y.isActive,children:[t.jsx(Ss,{children:y.icon}),t.jsx(ko,{children:y.label}),y.isActive&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},y.id)}const w=g.group;return t.jsxs("div",{children:[t.jsx(Hi,{children:w.label}),w.children.map(y=>t.jsxs(bo,{$active:y.isActive,$indent:!0,onClick:()=>{var _;(_=y.onClick)==null||_.call(y),c()},"aria-pressed":!!y.isActive,children:[t.jsx(Ss,{children:y.icon}),t.jsx(ko,{children:y.label}),y.isActive&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},y.id))]},w.id)})})]},f.id)})]},p.id))})})}const kr=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],hC=h.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,mC=h.main`
  flex: 1 1 auto;
  min-width: 0;
`;function gC(r){const{activeId:s,selectedPersonaId:i,moduleGroups:l,primaryLabel:c,secondaryLabel:p,menuEntries:f,user:v,onUserClick:g,onMobileNavigate:w,onSelectPersona:y,children:_}=r,[b,L]=x.useState(null),E=$_({deadZonePx:8,topThresholdPx:20}),I=b===null&&E==="down",N=x.useMemo(()=>{if(!i)return null;const j=kr.find($=>$.id===i);return(j==null?void 0:j.name)??null},[i]),C=()=>L(null),T=j=>L(j),k=b!==null;return t.jsxs(hC,{children:[t.jsx(W_,{primaryLabel:c,secondaryLabel:p,tertiaryLabel:N,openOverlay:b,user:v,hidden:I,onHamburgerClick:()=>T("drawer"),onPrimaryClick:()=>T("primary"),onSecondaryClick:()=>T("secondary"),onTertiaryClick:N?()=>T("persona"):void 0,onSearchClick:()=>{T("drawer")},onUserClick:()=>g==null?void 0:g()}),t.jsx(mC,{children:_}),k&&t.jsx(G_,{onDismiss:C}),b==="primary"&&t.jsx(J_,{activeId:s,groups:l,onSelect:j=>{w(j),C()}}),b==="secondary"&&t.jsx(eC,{moduleLabel:c,entries:f,onSelect:C}),b==="persona"&&t.jsx(oC,{personas:kr,activeId:i,onSelect:j=>{y(j),C()}}),b==="drawer"&&t.jsx(fC,{activeId:s,groups:l,currentMenuEntries:f,onSelectModule:j=>w(j),onDismiss:C})]})}function xC(r){if(bk()&&r.mobileNav){const i=r.mobileNav;return t.jsx(gC,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:r.menuEntries,user:r.user,onUserClick:r.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:r.children})}return t.jsx(E_,{...r})}const No=h.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`,Lo=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,To=h.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`,Ao=h.p`
  margin: 0;
  font-size: 14px;
  color: var(--color-content-secondary, #475569);
`,Eo=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
`,nt=h.div`
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,rt=h.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,ot=h.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
`,st=h.div`
  font-size: 13px;
  color: var(--color-content-secondary, #475569);
`,$o=h.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
  margin-bottom: -8px;
`,Po=h.div`
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: 10px;
  overflow: hidden;
`,Ro=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 14px;
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  &:last-child { border-bottom: none; }
`,Do=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,zo=h.div`font-weight: 500;`,Fo=h.div`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,Bo=h.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 500;
  background: ${r=>r.$color??"var(--color-bg-secondary, #f6f7f9)"};
  color: var(--color-content-secondary, #475569);
`;function vC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(To,{children:"All People"}),t.jsx(Ao,{children:"Everyone across your workforce"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Total Headcount"}),t.jsx(ot,{children:"166"}),t.jsx(st,{children:"Active workers"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Employees"}),t.jsx(ot,{children:"87"}),t.jsx(st,{children:"Full-time & part-time"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Contractors"}),t.jsx(ot,{children:"24"}),t.jsx(st,{children:"Active engagements"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"New This Month"}),t.jsx(ot,{children:"5"}),t.jsx(st,{children:"Onboarding in progress"})]})]}),t.jsx($o,{children:"Recent People"}),t.jsx(Po,{children:[{name:"Sarah Kim",meta:"Engineering · Joined today",badge:"New",color:"#e8f5e9"},{name:"Jun Park",meta:"Design · Joined Mar 20",badge:"Active",color:"#e3f2fd"},{name:"Alex Torres",meta:"Legal · Contractor",badge:"Contractor",color:void 0},{name:"Maria Santos",meta:"HR · Employee",badge:"Active",color:"#e3f2fd"},{name:"Rahul Dev",meta:"Engineering · Contractor",badge:"Contractor",color:void 0}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function yC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(To,{children:"Contractors"}),t.jsx(Ao,{children:"Independent contractors and freelancers"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Active"}),t.jsx(ot,{children:"24"}),t.jsx(st,{children:"Current engagements"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Expiring Soon"}),t.jsx(ot,{children:"3"}),t.jsx(st,{children:"Within 30 days"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Rate"}),t.jsx(ot,{children:"$95/h"}),t.jsx(st,{children:"Across all contracts"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Pending Invoices"}),t.jsx(ot,{children:"6"}),t.jsx(st,{children:"Awaiting payment"})]})]}),t.jsx($o,{children:"Active Contractors"}),t.jsx(Po,{children:[{name:"Alex Torres",meta:"Legal · Contract ends Apr 30",badge:"Active",color:"#e3f2fd"},{name:"Rahul Dev",meta:"Engineering · Contract ends May 15",badge:"Active",color:"#e3f2fd"},{name:"Studio Nine",meta:"Design · Contract ends Mar 31",badge:"Expiring",color:"#fff8e1"},{name:"Nomad Labs",meta:"Marketing · Contract ends Apr 10",badge:"Active",color:"#e3f2fd"},{name:"Priya Mehta",meta:"Finance · Contract ends Mar 28",badge:"Expiring",color:"#fff8e1"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function wC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(To,{children:"Employees"}),t.jsx(Ao,{children:"Full-time and part-time employees"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Total Employees"}),t.jsx(ot,{children:"87"}),t.jsx(st,{children:"Full-time & part-time"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"On Leave"}),t.jsx(ot,{children:"4"}),t.jsx(st,{children:"Current leave requests"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Open Roles"}),t.jsx(ot,{children:"7"}),t.jsx(st,{children:"Currently recruiting"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Tenure"}),t.jsx(ot,{children:"2.4y"}),t.jsx(st,{children:"Across all employees"})]})]}),t.jsx($o,{children:"Recent Activity"}),t.jsx(Po,{children:[{name:"Sarah Kim",meta:"Engineering · Onboarding",badge:"New hire",color:"#e8f5e9"},{name:"Jun Park",meta:"Design · Active",badge:"Active",color:"#e3f2fd"},{name:"Maria Santos",meta:"HR · On leave",badge:"On leave",color:"#fff8e1"},{name:"David Chen",meta:"Operations · Active",badge:"Active",color:"#e3f2fd"},{name:"Lisa Wong",meta:"Finance · Active",badge:"Active",color:"#e3f2fd"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function jC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(To,{children:"Engineering"}),t.jsx(Ao,{children:"Engineering department overview"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Headcount"}),t.jsx(ot,{children:"32"}),t.jsx(st,{children:"Employees & contractors"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Open Roles"}),t.jsx(ot,{children:"3"}),t.jsx(st,{children:"Backend & platform"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Tenure"}),t.jsx(ot,{children:"2.8y"}),t.jsx(st,{children:"Across the team"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"On Leave"}),t.jsx(ot,{children:"1"}),t.jsx(st,{children:"Returning Apr 7"})]})]}),t.jsx($o,{children:"Team Members"}),t.jsx(Po,{children:[{name:"Sarah Kim",meta:"Software Engineer · New hire",badge:"New",color:"#e8f5e9"},{name:"Rahul Dev",meta:"Senior Engineer · Contractor",badge:"Contractor",color:void 0},{name:"Tom Nguyen",meta:"Tech Lead · Employee",badge:"Active",color:"#e3f2fd"},{name:"Aisha Osei",meta:"Platform Engineer · Employee",badge:"Active",color:"#e3f2fd"},{name:"James Ruiz",meta:"Backend Engineer · On leave",badge:"On leave",color:"#fff8e1"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function bC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(To,{children:"Design"}),t.jsx(Ao,{children:"Design department overview"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Headcount"}),t.jsx(ot,{children:"11"}),t.jsx(st,{children:"Employees & contractors"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Open Roles"}),t.jsx(ot,{children:"1"}),t.jsx(st,{children:"Senior product designer"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Tenure"}),t.jsx(ot,{children:"1.9y"}),t.jsx(st,{children:"Across the team"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"On Leave"}),t.jsx(ot,{children:"0"}),t.jsx(st,{children:"Everyone active"})]})]}),t.jsx($o,{children:"Team Members"}),t.jsx(Po,{children:[{name:"Jun Park",meta:"Product Designer · Employee",badge:"Active",color:"#e3f2fd"},{name:"Studio Nine",meta:"Design Agency · Contractor",badge:"Contractor",color:void 0},{name:"Maria Santos",meta:"UX Researcher · Employee",badge:"Active",color:"#e3f2fd"},{name:"Cleo Barros",meta:"Brand Designer · Employee",badge:"Active",color:"#e3f2fd"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function kC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(To,{children:"Marketing"}),t.jsx(Ao,{children:"Marketing department overview"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Headcount"}),t.jsx(ot,{children:"9"}),t.jsx(st,{children:"Employees & contractors"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Open Roles"}),t.jsx(ot,{children:"1"}),t.jsx(st,{children:"Growth marketer"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Tenure"}),t.jsx(ot,{children:"1.5y"}),t.jsx(st,{children:"Across the team"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Campaigns Active"}),t.jsx(ot,{children:"4"}),t.jsx(st,{children:"This quarter"})]})]}),t.jsx($o,{children:"Team Members"}),t.jsx(Po,{children:[{name:"Nomad Labs",meta:"Content Agency · Contractor",badge:"Contractor",color:void 0},{name:"Elena Voss",meta:"Marketing Manager · Employee",badge:"Active",color:"#e3f2fd"},{name:"Oscar Tran",meta:"Growth · Employee",badge:"Active",color:"#e3f2fd"},{name:"Binta Diallo",meta:"Brand · Employee",badge:"Active",color:"#e3f2fd"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function _C(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(To,{children:"Operations"}),t.jsx(Ao,{children:"Operations department overview"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Headcount"}),t.jsx(ot,{children:"18"}),t.jsx(st,{children:"Employees & contractors"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Open Roles"}),t.jsx(ot,{children:"2"}),t.jsx(st,{children:"Ops & logistics"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Tenure"}),t.jsx(ot,{children:"3.1y"}),t.jsx(st,{children:"Most tenured dept"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"On Leave"}),t.jsx(ot,{children:"1"}),t.jsx(st,{children:"Returning Apr 2"})]})]}),t.jsx($o,{children:"Team Members"}),t.jsx(Po,{children:[{name:"David Chen",meta:"Operations Lead · Employee",badge:"Active",color:"#e3f2fd"},{name:"Fatou Mbaye",meta:"Logistics Manager · Employee",badge:"Active",color:"#e3f2fd"},{name:"Carlos Ibarra",meta:"IT Operations · Employee",badge:"Active",color:"#e3f2fd"},{name:"Ingrid Lund",meta:"Facilities · On leave",badge:"On leave",color:"#fff8e1"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}const CC=[{id:"seed-greeting",kind:"assistant",content:"Hi — how can I help with your workspace today?",timestamp:Date.now(),seeded:!0}],SC=h.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;

  [class*='_shell_'] {
    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  [class*='_card_'] {
    border-radius: 12px;
  }

  [class*='_wrapper_'] {
    padding: 12px;
  }

  [class*='_scroller_'] {
    padding: 12px;
  }
`;function MC(){const[r,s]=x.useState(CC),[i,l]=x.useState(""),[c,p]=x.useState(!1),f=()=>{const g=i.trim();if(!g||c)return;const w={id:`u-${Date.now()}`,kind:"user",content:g,timestamp:Date.now()};s(y=>[...y,w]),l(""),p(!0),window.setTimeout(()=>{const y={id:`a-${Date.now()}`,kind:"assistant",content:"Got it — I'll look into that. (Mock reply: this panel is wired to local state only.)",timestamp:Date.now()};s(_=>[..._,y]),p(!1)},1100)},v=c?"streaming":i.trim().length===0?"hidden":"ready";return t.jsx(SC,{children:t.jsxs(K0,{children:[t.jsxs(X0,{density:"comfortable",padding:"sm",children:[r.map(g=>g.kind==="user"?t.jsx(J0,{label:"You",time:g.timestamp,children:g.content},g.id):g.seeded?t.jsx(vl,{time:g.timestamp,children:g.content},g.id):t.jsxs(x.Fragment,{children:[t.jsxs(vl,{children:[t.jsxs(sm,{state:"done",duration:"2s",children:[t.jsx(Ai,{type:"thinking",status:"done",children:"Reading workspace context"}),t.jsx(Ai,{type:"search",status:"done",detail:"3 results",children:"Searching workforce records"}),t.jsx(Ai,{type:"content",status:"done",children:"Composing reply"})]}),g.content]}),t.jsxs(im,{visibility:"always",align:"start",time:g.timestamp,children:[t.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Copy",children:t.jsx(Em,{size:14})}),t.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response",children:t.jsx(Tm,{size:14})}),t.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response",children:t.jsx(Am,{size:14})}),t.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Regenerate",children:t.jsx(Zl,{size:14})})]})]},g.id)),t.jsx(vl,{children:t.jsx(Ui,{variant:"gradient-fill",size:"xs",state:c?"loading":"ready"})})]}),t.jsx(Q0,{value:i,onChange:l,onSubmit:f,placeholder:"Ask AI anything…","aria-label":"Ask AI",children:t.jsxs(_m,{size:"sm",children:[t.jsx(Rm,{state:"idle","aria-label":"Attach"}),t.jsx(Dm,{state:"idle","aria-label":"Voice input"}),t.jsx(Pm,{state:v,onSend:f,"aria-label":"Send to AI"})]})})]})})}const IC="/teambridge-module/assets/policy-icon-active-CqCS8_ex.svg",NC="/teambridge-module/assets/automation-icon-active-DlguOjgR.svg",LC="/teambridge-module/assets/marketplace-hero-bg-C1GqhBtg.svg",TC="/teambridge-module/assets/marketplace-hero-bg-dark-C2y1crjg.svg",AC="/teambridge-module/assets/shift-marketplace-l0-FnNJR.png",EC="/teambridge-module/assets/labor-cost-forecasting-DD8TkuU-.png",$C="/teambridge-module/assets/employee-availability-portal-DLFAUBVu.png",PC="/teambridge-module/assets/compliance-monitor-BExpYvGD.png",RC="/teambridge-module/assets/smart-time-clock-Bkyn1Jqj.png",DC="/teambridge-module/assets/recruiting-pipeline-dashboard-DMUDCsYZ.png",zC="/teambridge-module/assets/workforce-messaging-center-CD2jHoXm.png",FC="/teambridge-module/assets/client-staffing-portal-DZemUXpu.png",BC="/teambridge-module/assets/credential-tracker-BfqCrwdu.png",OC="/teambridge-module/assets/performance-insights-dashboard-CuH97YIs.png",Qt=h.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`,ln=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,cn=h.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`,dn=h.p`
  margin: 0;
  font-size: 14px;
  color: var(--color-content-secondary, #475569);
`,$n=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
`,Pe=h.div`
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,He=h.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,We=h.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
`,Re=h.div`
  font-size: 13px;
  color: var(--color-content-secondary, #475569);
`,np=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 64px 32px;
  border: 1.5px dashed var(--color-border-opaque, #e8eaee);
  border-radius: 12px;
  color: var(--color-content-tertiary, #87919f);
  text-align: center;
`,rp=h.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--color-content-secondary, #475569);
`,op=h.div`
  font-size: 13px;
  max-width: 320px;
`,Kn=h.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
  margin-bottom: -8px;
`,ar=h.div`
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: 10px;
  overflow: hidden;
`,wt=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 14px;
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  &:last-child { border-bottom: none; }
`,jt=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,bt=h.div`font-weight: 500;`,kt=h.div`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,gt=h.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 500;
  background: ${r=>r.$color??"var(--color-bg-secondary, #f6f7f9)"};
  color: var(--color-content-secondary, #475569);
`;function Gh(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Home"}),t.jsx(dn,{children:"Overview of your workspace activity"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Active Workers"}),t.jsx(We,{children:"142"}),t.jsx(Re,{children:"Across 6 departments"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Open Tasks"}),t.jsx(We,{children:"38"}),t.jsx(Re,{children:"12 due this week"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Pending Approvals"}),t.jsx(We,{children:"7"}),t.jsx(Re,{children:"Awaiting your review"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Documents"}),t.jsx(We,{children:"94"}),t.jsx(Re,{children:"4 require signatures"})]})]}),t.jsx(Kn,{children:"Recent Activity"}),t.jsxs(ar,{children:[t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Sarah Kim onboarded"}),t.jsx(kt,{children:"Engineering · 2h ago"})]}),t.jsx(gt,{$color:"#e8f5e9",children:"Completed"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Q4 Payroll processed"}),t.jsx(kt,{children:"Finance · 5h ago"})]}),t.jsx(gt,{$color:"#e3f2fd",children:"Processed"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Policy update: PTO 2025"}),t.jsx(kt,{children:"HR · Yesterday"})]}),t.jsx(gt,{children:"Draft"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"NDA — Alex Torres"}),t.jsx(kt,{children:"Legal · 2d ago"})]}),t.jsx(gt,{$color:"#fff8e1",children:"Pending"})]})]})]})}function HC(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Inbox"}),t.jsx(dn,{children:"Notifications and items requiring your attention"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Unread"}),t.jsx(We,{children:"18"}),t.jsx(Re,{children:"Since last visit"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Action Required"}),t.jsx(We,{children:"5"}),t.jsx(Re,{children:"Approvals & reviews"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Mentions"}),t.jsx(We,{children:"3"}),t.jsx(Re,{children:"In documents & tasks"})]})]}),t.jsx(Kn,{children:"Inbox"}),t.jsxs(ar,{children:[t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Payroll approval needed"}),t.jsx(kt,{children:"From Finance · Now"})]}),t.jsx(gt,{$color:"#fce4ec",children:"Action required"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"New hire offer letter ready"}),t.jsx(kt,{children:"From HR · 30m ago"})]}),t.jsx(gt,{$color:"#fce4ec",children:"Action required"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"@mentioned in Policy draft"}),t.jsx(kt,{children:"From Legal · 2h ago"})]}),t.jsx(gt,{$color:"#e3f2fd",children:"Mention"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Task assigned: Q1 review"}),t.jsx(kt,{children:"From Manager · 4h ago"})]}),t.jsx(gt,{children:"New"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"E-Sign complete: NDA"}),t.jsx(kt,{children:"System · Yesterday"})]}),t.jsx(gt,{$color:"#e8f5e9",children:"Complete"})]})]})]})}function WC(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Invoice"}),t.jsx(dn,{children:"Track and manage contractor invoices"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Pending Payment"}),t.jsx(We,{children:"$24.5k"}),t.jsx(Re,{children:"6 invoices"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Paid This Month"}),t.jsx(We,{children:"$88.2k"}),t.jsx(Re,{children:"23 invoices"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Overdue"}),t.jsx(We,{children:"$3.1k"}),t.jsx(Re,{children:"2 invoices"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Disputes"}),t.jsx(We,{children:"1"}),t.jsx(Re,{children:"Awaiting resolution"})]})]}),t.jsx(Kn,{children:"Recent Invoices"}),t.jsxs(ar,{children:[t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"INV-2024-089 · Alex Torres"}),t.jsx(kt,{children:"$4,200 · Due Mar 30"})]}),t.jsx(gt,{$color:"#fff8e1",children:"Pending"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"INV-2024-088 · Rahul Dev"}),t.jsx(kt,{children:"$7,500 · Due Apr 1"})]}),t.jsx(gt,{$color:"#fff8e1",children:"Pending"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"INV-2024-087 · Studio Nine"}),t.jsx(kt,{children:"$12,000 · Paid Mar 20"})]}),t.jsx(gt,{$color:"#e8f5e9",children:"Paid"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"INV-2024-086 · Nomad Labs"}),t.jsx(kt,{children:"$3,100 · Overdue Mar 15"})]}),t.jsx(gt,{$color:"#fce4ec",children:"Overdue"})]})]})]})}function UC(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"AI Home"}),t.jsx(dn,{children:"Your AI-powered workspace assistant"})]}),t.jsxs(np,{children:[t.jsx(rp,{children:"Ask anything about your workforce"}),t.jsx(op,{children:"Summarize payroll trends, draft policy updates, answer compliance questions, and more."})]}),t.jsx(Kn,{children:"Suggested Prompts"}),t.jsxs($n,{children:[t.jsx(Pe,{children:t.jsx(Re,{children:'"Summarize headcount changes this quarter"'})}),t.jsx(Pe,{children:t.jsx(Re,{children:'"Draft a remote work policy update"'})}),t.jsx(Pe,{children:t.jsx(Re,{children:'"Which contractors have expiring contracts?"'})}),t.jsx(Pe,{children:t.jsx(Re,{children:'"Show payroll variance vs last month"'})})]})]})}const mg=h(Qt)`
  padding-bottom: var(--space-16, 64px);
`,VC=h(mg)`
  position: relative;
  isolation: isolate;
  /* Reserve room for the 12px bottom margin so the parent doesn't need
     to scroll (which would surface a vertical scrollbar gap on the right). */
  height: calc(100% - 12px);
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 12px;
  padding-bottom: var(--space-6, 24px);
  border-radius: 16px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: transparent;
  background-image: linear-gradient(180deg, var(--color-bg-secondary, #F6F7F9) 0%, transparent 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${LC});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: 100% auto;
    transform-origin: 50% 0%;
    -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
            mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: -1;
    pointer-events: none;
    animation: mlHeroBreathe 32s ease-in-out infinite;
  }

  @keyframes mlHeroBreathe {
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.08); }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before { animation: none; }
  }

  /* Dark mode: swap to dark variant of the same SVG (transparent base, screen blend) */
  @media (prefers-color-scheme: dark) {
    &::before {
      background-image: url(${TC});
    }
  }
`,GC=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4, 16px);
  padding: var(--space-8, 32px) 0 var(--space-2, 8px);
  text-align: center;
`,qC=h.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl, 2.5rem);
  line-height: var(--line-height-tight, 1.1);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.02em);
  color: var(--color-content-primary);
`,ZC=h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
  max-width: 560px;
`,YC=h.div`
  width: 100%;
  max-width: 720px;
  margin: var(--space-3, 12px) auto 0;
  position: relative;
`,KC=h.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 50;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--shadow-lg, 0 12px 24px rgba(15, 23, 42, 0.12));
  max-height: 360px;
  overflow-y: auto;
  text-align: left;
`,QC=h.div`
  padding: var(--space-4, 16px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  color: var(--color-content-tertiary);
  text-align: center;
`,gg=h.div`
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm, 8px);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & svg {
    width: 18px;
    height: 18px;
  }
`,ll=h.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  margin: var(--space-8, 32px) auto 0;
  width: 70%;
  max-width: 1280px;

  @media (max-width: 900px) {
    width: 100%;
  }
`,cl=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,dl=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`,iu=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1, 4px);
  margin-top: var(--space-1, 4px);
`,qh=h.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  margin-top: auto;
  padding-top: var(--space-2, 8px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`,ul=h.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-2xl, 1.5rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.01em);
  color: var(--color-content-primary);
`,XC=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-1, 4px) var(--space-2, 8px);
  margin-top: var(--space-3, 12px);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,JC=h(_r)`
  border-radius: 12px;
  --li-hover-bg: var(--color-bg-tertiary);

  & [class*='_description_'] {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }

  /* Subtle scale-up on the app shape when hovering the row. */
  &:hover [data-role='popular-icon'] > * {
    transform: scale(1.12);
  }
`,eS=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`,tS=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xl, 1.25rem);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-tertiary);
  text-align: center;
  min-width: 24px;
`,nS=h.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md, 12px);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & > div,
  & svg {
    width: 24px;
    height: 24px;
  }

  & > * {
    transition: transform var(--duration-slow, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
  }
`,rS=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,oS=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  line-height: var(--line-height-relaxed, 1.45);
  color: var(--color-content-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,sS=h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2, 8px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`;h.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--color-content-tertiary);
`;const au=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4, 16px);
  margin-top: var(--space-3, 12px);
  padding-bottom: var(--space-12, 48px);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,lu=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  background: var(--color-bg-primary);
  border: none;
  border-radius: var(--radius-lg, 14px);
  padding: var(--space-5, 20px);
  cursor: pointer;
  box-shadow: var(--shadow-below-md);
  transition:
    background var(--duration-fast, 120ms) var(--ease-default, ease),
    box-shadow var(--duration-fast, 120ms) var(--ease-default, ease);

  &:hover {
    background: var(--color-bg-secondary);
    box-shadow: var(--shadow-below-high);
  }

  &:hover [data-role='featured-icon'] > * {
    transform: scale(1.12);
  }
`,cu=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-2, 8px);
`,du=h.div`
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg, 14px);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & svg {
    width: 32px;
    height: 32px;
  }

  /* Inner shape scales up on card hover for a subtle response. */
  & > * {
    transition: transform var(--duration-slow, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
  }
`;h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--color-bg-secondary);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-primary);
`;const uu=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  min-width: 0;
  flex: 1;
`,pu=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);

  & strong {
    font-weight: var(--font-weight-medium, 500);
    color: var(--color-content-secondary);
  }

  & span {
    color: var(--color-content-tertiary);
  }
`,fu=h.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-primary);
`,hu=h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ws=h.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;function sp({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("circle",{cx:"20",cy:"20",r:"16",fill:r})})}function ip({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("rect",{x:"6",y:"6",width:"28",height:"28",rx:"4",fill:r})})}function Wi({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("path",{d:"M20 5 L36 33 L4 33 Z",fill:r})})}function Al({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("path",{d:"M20 4 L34 12 L34 28 L20 36 L6 28 L6 12 Z",fill:r})})}function ap({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("path",{d:"M20 4 L36 16 L30 34 L10 34 L4 16 Z",fill:r})})}function lp({color:r,size:s=40}){return t.jsxs("svg",{viewBox:"0 0 40 40",width:s,height:s,children:[t.jsxs("g",{fill:r,children:[t.jsx("circle",{cx:"20",cy:"9",r:"6"}),t.jsx("circle",{cx:"31",cy:"20",r:"6"}),t.jsx("circle",{cx:"20",cy:"31",r:"6"}),t.jsx("circle",{cx:"9",cy:"20",r:"6"})]}),t.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#fff"})]})}function cp({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("path",{d:"M14 4 L26 4 L36 14 L36 26 L26 36 L14 36 L4 26 L4 14 Z",fill:r})})}function dp({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("path",{d:"M20 4 L36 20 L20 36 L4 20 Z",fill:r})})}const iS={"mp-shift-marketplace":r=>t.jsx(sp,{color:"var(--color-blue-content-secondary, #4A8AB8)",size:r}),"mp-availability":r=>t.jsx(Al,{color:"var(--color-green-content-secondary, #7BB97A)",size:r}),"mp-time-clock":r=>t.jsx(dp,{color:"var(--color-orange-content-secondary, #E08B4A)",size:r}),"mp-messaging":r=>t.jsx(lp,{color:"var(--color-pink-content-secondary, #E68FB6)",size:r}),"mp-client-portal":r=>t.jsx(Al,{color:"var(--color-azure-content-secondary, #5B3DF0)",size:r}),"mp-labor-cost":r=>t.jsx(ip,{color:"var(--color-purple-content-secondary, #9C8AE0)",size:r}),"mp-compliance-monitor":r=>t.jsx(cp,{color:"var(--color-red-content-secondary, #D9534F)",size:r}),"mp-recruiting":r=>t.jsx(ap,{color:"var(--color-yellow-content-secondary, #E8C547)",size:r}),"mp-credential":r=>t.jsx(Wi,{color:"var(--color-matcha-content-secondary, #3CB6A8)",size:r}),"mp-performance":r=>t.jsx(Wi,{color:"var(--color-purple-content-secondary, #9C8AE0)",size:r})};function rr(r,s=16){const i=iS[r];return i?i(s):null}const js=[{id:"shift_marketplace",name:"Shift Marketplace",description:"Internal marketplace where employees can claim open shifts.",category:"Scheduling",targetUsers:["Managers","Employees"],coreFeatures:["Open shift board","Shift claim approvals","Real-time notifications","Eligibility filtering"],author:"Tito Goldstein",installs:"142",rating:4.9,shape:t.jsx(sp,{color:"var(--color-blue-content-secondary, #4A8AB8)"}),preview:{tagline:"Let eligible workers claim open shifts faster.",recommendedFor:["staffing","hospitality","light industrial"],capabilities:["Open shift board","Employee shift claiming","Manager approval workflow","Eligibility rules","Real-time notifications","Shift fill-rate tracking"],businessValue:["Reduce manual scheduling work","Improve shift coverage","Increase employee flexibility"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"labor_cost_forecasting",name:"Labor Cost Forecasting",description:"Predict labor costs based on schedules, overtime, and demand.",category:"Analytics",targetUsers:["Operations","Finance"],coreFeatures:["Projected payroll calculations","Overtime risk alerts","Budget vs actual tracking","Department cost breakdowns"],author:"Simon Karlsson",installs:"87",rating:4.6,shape:t.jsx(ip,{color:"var(--color-purple-content-secondary, #9C8AE0)"}),preview:{tagline:"Forecast payroll costs before schedules are finalized.",recommendedFor:["finance teams","operations leaders","large hourly teams"],capabilities:["Projected labor cost","Overtime risk detection","Budget vs scheduled cost","Department cost breakdown","Location-level forecasting","Exportable reports"],businessValue:["Control labor spend","Prevent avoidable overtime","Improve budget planning"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"employee_availability_portal",name:"Employee Availability Portal",description:"Allow workers to manage and submit availability preferences.",category:"Workforce Management",targetUsers:["Employees"],coreFeatures:["Recurring availability","Time-off requests","Availability conflicts","Manager approvals"],author:"Renee Park",installs:"64",rating:4.5,shape:t.jsx(Al,{color:"var(--color-green-content-secondary, #7BB97A)"}),preview:{tagline:"Let employees manage when they can work.",recommendedFor:["part-time teams","flexible scheduling teams","student workers"],capabilities:["Recurring availability","One-time availability changes","Time-off requests","Manager approvals","Conflict detection","Availability history"],businessValue:["Reduce scheduling conflicts","Improve employee satisfaction","Help managers build better schedules"],setupComplexity:"low",estimatedImpact:"medium",status:"recommended"}},{id:"compliance_monitor",name:"Compliance Monitor",description:"Track labor law violations and scheduling compliance issues.",category:"Compliance",targetUsers:["HR","Operations"],coreFeatures:["Missed break alerts","Overtime compliance","Predictive scheduling checks","Audit logs"],author:"Tito Goldstein",installs:"58",rating:4.7,shape:t.jsx(cp,{color:"var(--color-red-content-secondary, #D9534F)"}),preview:{tagline:"Detect scheduling and labor compliance risks before they become issues.",recommendedFor:["large teams","regulated workforces","multi-state operations"],capabilities:["Overtime alerts","Missed break detection","Scheduling rule checks","Audit logs","Compliance reporting","Exception workflows"],businessValue:["Lower compliance risk","Create audit-ready records","Help managers act before violations occur"],setupComplexity:"high",estimatedImpact:"high",status:"recommended"}},{id:"smart_time_clock",name:"Smart Time Clock",description:"Mobile and kiosk-based clock-in system with GPS validation.",category:"Time Tracking",targetUsers:["Employees","Managers"],coreFeatures:["GPS clock-ins","Photo verification","Auto break tracking","Late arrival alerts"],author:"Marcus Chen",installs:"116",rating:4.8,shape:t.jsx(dp,{color:"var(--color-orange-content-secondary, #E08B4A)"}),preview:{tagline:"Clock in with GPS, kiosk, and photo validation.",recommendedFor:["field teams","multi-location teams","hourly workforces"],capabilities:["Mobile clock-in","Kiosk mode","GPS validation","Photo verification","Late arrival alerts","Break tracking"],businessValue:["Reduce time theft","Improve payroll accuracy","Give managers real-time attendance visibility"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"recruiting_pipeline_dashboard",name:"Recruiting Pipeline Dashboard",description:"Manage applicants, interviews, and onboarding workflows.",category:"Hiring",targetUsers:["Recruiters","Managers"],coreFeatures:["Applicant tracking","Interview scheduling","Hiring stages","Offer management"],author:"Aisha Patel",installs:"42",rating:4.1,shape:t.jsx(ap,{color:"var(--color-yellow-content-secondary, #E8C547)"}),preview:{tagline:"Track applicants from lead to active worker.",recommendedFor:["staffing agencies","high-volume hiring teams"],capabilities:["Applicant tracking","Hiring stages","Interview scheduling","Offer status","Onboarding handoff","Recruiter performance metrics"],businessValue:["Improve hiring visibility","Speed up onboarding","Reduce candidate drop-off"],setupComplexity:"high",estimatedImpact:"medium",status:"optional"}},{id:"workforce_messaging_center",name:"Workforce Messaging Center",description:"Centralized communication hub for workforce operations.",category:"Communication",targetUsers:["Managers","Employees"],coreFeatures:["Group messaging","Schedule announcements","Read receipts","Emergency alerts"],author:"Simon Karlsson",installs:"94",rating:4.4,shape:t.jsx(lp,{color:"var(--color-pink-content-secondary, #E68FB6)"}),preview:{tagline:"Centralize team communication around shifts and operations.",recommendedFor:["distributed teams","field teams","large workforces"],capabilities:["Group announcements","Shift-specific messages","Read receipts","Emergency alerts","Manager-to-worker messaging","Message history"],businessValue:["Improve communication speed","Reduce missed updates","Keep operational messages tied to work"],setupComplexity:"medium",estimatedImpact:"medium",status:"recommended"}},{id:"client_staffing_portal",name:"Client Staffing Portal",description:"External-facing portal where clients request and monitor staffing.",category:"Customer Experience",targetUsers:["Clients"],coreFeatures:["Shift requests","Worker approvals","Live staffing updates","Invoice visibility"],author:"Daniela Cruz",installs:"31",rating:4.7,shape:t.jsx(Al,{color:"var(--color-azure-content-secondary, #5B3DF0)"}),preview:{tagline:"Give clients a portal to request, approve, and track staffing.",recommendedFor:["staffing agencies","security","events","facilities"],capabilities:["Client shift requests","Worker approval visibility","Live staffing status","Request history","Basic invoice visibility","Client-specific permissions"],businessValue:["Improve client experience","Reduce back-and-forth communication","Increase visibility into staffing fulfillment"],setupComplexity:"high",estimatedImpact:"high",status:"recommended"}},{id:"credential_tracker",name:"Credential Tracker",description:"Track employee certifications, licenses, and expiration dates.",category:"Compliance",targetUsers:["HR","Compliance Teams"],coreFeatures:["Expiration reminders","Document uploads","Certification validation","Compliance reporting"],author:"Renee Park",installs:"49",rating:4.3,shape:t.jsx(Wi,{color:"var(--color-matcha-content-secondary, #3CB6A8)"}),preview:{tagline:"Track certifications, licenses, and required worker documents.",recommendedFor:["healthcare staffing","security","transportation","skilled labor"],capabilities:["Credential uploads","Expiration reminders","Approval workflows","Worker eligibility rules","Document status tracking","Compliance reports"],businessValue:["Avoid assigning unqualified workers","Reduce manual document tracking","Maintain compliance visibility"],setupComplexity:"medium",estimatedImpact:"medium",status:"recommended"}},{id:"performance_insights_dashboard",name:"Performance Insights Dashboard",description:"Measure workforce performance and operational efficiency.",category:"Analytics",targetUsers:["Executives","Managers"],coreFeatures:["Attendance scoring","Shift fulfillment metrics","Employee reliability rankings","Location performance analytics"],author:"Marcus Chen",installs:"73",rating:4,shape:t.jsx(Wi,{color:"var(--color-purple-content-secondary, #9C8AE0)"}),preview:{tagline:"Measure attendance, reliability, and workforce performance.",recommendedFor:["operations leaders","account managers","executives"],capabilities:["Attendance scoring","Reliability rankings","Shift fulfillment metrics","No-show tracking","Location performance","Manager dashboards"],businessValue:["Identify top performers","Spot operational issues","Improve workforce planning"],setupComplexity:"medium",estimatedImpact:"medium",status:"optional"}}],bs=[{id:"auto_shift_optimizer",name:"Auto Shift Optimizer",description:"Automatically balances schedules based on labor demand, overtime risk, and worker availability.",category:"Scheduling",appType:"background",targetUsers:["System"],coreFeatures:["Auto-fill open shifts","Minimize overtime","Balance worker hours","Optimize labor coverage","Apply scheduling rules"],author:"Teambridge",installs:"128",rating:4.8,shape:t.jsx(sp,{color:"var(--color-green-content-secondary, #7BB97A)"}),preview:{tagline:"Automatically balance schedules for cost and coverage.",recommendedFor:["staffing","hospitality","healthcare"],capabilities:["Auto-fill open shifts","Minimize overtime","Balance worker hours","Optimize labor coverage","Apply scheduling rules"],businessValue:["Reduce overtime spend","Improve coverage","Free up scheduler time"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"payroll_export_engine",name:"Payroll Export Engine",description:"Processes approved timesheets and generates payroll-ready exports automatically.",category:"Payroll",appType:"background",targetUsers:["System"],coreFeatures:["Aggregate timesheets","Calculate regular and overtime hours","Generate payroll exports","Validate missing punches","Detect payroll anomalies"],author:"Teambridge",installs:"109",rating:4.7,shape:t.jsx(ip,{color:"var(--color-matcha-content-secondary, #3CB6A8)"}),preview:{tagline:"Turn approved timesheets into payroll-ready exports.",recommendedFor:["staffing","finance","operations"],capabilities:["Aggregate timesheets","Calculate regular and overtime hours","Generate payroll exports","Validate missing punches","Detect payroll anomalies"],businessValue:["Cut manual payroll work","Reduce errors","Speed up payroll cycles"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"attendance_anomaly_detector",name:"Attendance Anomaly Detector",description:"Monitors attendance patterns and flags suspicious or unusual behavior automatically.",category:"Attendance",appType:"background",targetUsers:["System"],coreFeatures:["Detect repeated late arrivals","Identify missed punches","Flag unusual clock-in locations","Track no-show trends","Generate risk scores"],author:"Teambridge",installs:"74",rating:4.6,shape:t.jsx(cp,{color:"var(--color-orange-content-secondary, #E08B4A)"}),preview:{tagline:"Surface attendance issues before they become a problem.",recommendedFor:["operations","compliance","staffing"],capabilities:["Detect repeated late arrivals","Identify missed punches","Flag unusual clock-in locations","Track no-show trends","Generate risk scores"],businessValue:["Reduce no-shows","Catch time-theft early","Improve workforce reliability"],setupComplexity:"low",estimatedImpact:"medium",status:"optional"}},{id:"credential_expiration_monitor",name:"Credential Expiration Monitor",description:"Automatically tracks certification expirations and prevents invalid worker assignments.",category:"Compliance",appType:"background",targetUsers:["System"],coreFeatures:["Monitor expiration dates","Send renewal reminders","Restrict non-compliant workers","Track uploaded documents","Generate compliance reports"],author:"Teambridge",installs:"63",rating:4.5,shape:t.jsx(Wi,{color:"var(--color-blue-content-secondary, #4A8AB8)"}),preview:{tagline:"Keep credentials current and assignments compliant.",recommendedFor:["healthcare","security","compliance"],capabilities:["Monitor expiration dates","Send renewal reminders","Restrict non-compliant workers","Track uploaded documents","Generate compliance reports"],businessValue:["Avoid compliance violations","Prevent invalid assignments","Automate renewal nudges"],setupComplexity:"low",estimatedImpact:"high",status:"recommended"}},{id:"smart_notification_router",name:"Smart Notification Router",description:"Routes notifications to the right employees based on urgency, role, and shift context.",category:"Communication",appType:"background",targetUsers:["System"],coreFeatures:["Priority-based notifications","Role-aware targeting","SMS and push delivery","Escalation workflows","Quiet-hour controls"],author:"Teambridge",installs:"88",rating:4.4,shape:t.jsx(lp,{color:"var(--color-azure-content-secondary, #5B3DF0)"}),preview:{tagline:"Send the right message to the right people, automatically.",recommendedFor:["operations","communications","staffing"],capabilities:["Priority-based notifications","Role-aware targeting","SMS and push delivery","Escalation workflows","Quiet-hour controls"],businessValue:["Reduce noise","Faster response times","Better escalation paths"],setupComplexity:"low",estimatedImpact:"medium",status:"optional"}},{id:"invoice_generation_engine",name:"Invoice Generation Engine",description:"Automatically converts approved labor hours into client invoices.",category:"Billing",appType:"background",targetUsers:["System"],coreFeatures:["Generate invoices from shifts","Apply bill rates","Calculate overtime billing","Create invoice PDFs","Track invoice status"],author:"Teambridge",installs:"52",rating:4.3,shape:t.jsx(ap,{color:"var(--color-pink-content-secondary, #E68FB6)"}),preview:{tagline:"Turn shifts into client invoices without manual entry.",recommendedFor:["staffing agencies","finance","operations"],capabilities:["Generate invoices from shifts","Apply bill rates","Calculate overtime billing","Create invoice PDFs","Track invoice status"],businessValue:["Faster billing cycles","Fewer billing errors","Better revenue visibility"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"worker_matching_engine",name:"Worker Matching Engine",description:"Automatically recommends the best workers for open shifts using availability and performance data.",category:"Staffing",appType:"background",targetUsers:["System"],coreFeatures:["Skill-based matching","Availability filtering","Distance calculations","Performance-based recommendations","Compliance-aware matching"],author:"Teambridge",installs:"46",rating:4.2,shape:t.jsx(dp,{color:"var(--color-pink-content-secondary, #E68FB6)"}),preview:{tagline:"Surface the best worker for every open shift.",recommendedFor:["staffing agencies","operations","recruiting"],capabilities:["Skill-based matching","Availability filtering","Distance calculations","Performance-based recommendations","Compliance-aware matching"],businessValue:["Better fill rates","Higher worker satisfaction","Reduce coordinator effort"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}}],aS=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  width: 100%;
`,lS=h.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md, 12px);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & svg {
    width: 28px;
    height: 28px;
  }
`,cS=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,dS=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  letter-spacing: var(--tracking-tight, -0.01em);
`,uS=h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`,pS=h.span`
  color: var(--color-yellow-content-secondary, #E8C547);
  font-size: var(--text-base, 1rem);
  line-height: 1;
`,fS=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`,hS=h.div`
  /* Plain pass-through wrapper. */
`,mS=h.div`
  width: 100%;
  position: relative;
  background: transparent;
  /* Opacity fade: fully opaque until 75%, then fades to transparent over the
     final 25% of the image height. */
  -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
          mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);

  & > svg,
  & > img {
    width: 100%;
    height: auto;
    display: block;
    background: transparent;
    border-radius: 6px;
  }
`,gS={shift_marketplace:AC,labor_cost_forecasting:EC,employee_availability_portal:$C,compliance_monitor:PC,smart_time_clock:RC,recruiting_pipeline_dashboard:DC,workforce_messaging_center:zC,client_staffing_portal:FC,credential_tracker:BC,performance_insights_dashboard:OC},xS=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;function vS({id:r,name:s}){const i=gS[r];return i?t.jsx(xS,{src:i,alt:s?`${s} preview`:"App preview"}):null}h.div`
  position: absolute;
  bottom: var(--space-3, 12px);
  left: var(--space-3, 12px);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  padding: 4px 10px;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: 999px;
`;const yS=h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`,wS=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1, 4px);
`,jS=h.div`
  margin: 0 0 var(--space-2, 8px) 0;
`;function pl({children:r}){return t.jsx(jS,{children:t.jsx(Zn,{as:"h4",children:r})})}const Zh=h.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
`,Yh=h.li`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);

  & > svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: var(--color-green-content-secondary, #7BB97A);
  }
`,bS=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5, 20px);
`,mu=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  position: relative;

  & + & {
    padding-left: var(--space-5, 20px);
  }

  & + &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--color-border-opaque);
  }
`;h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-tertiary);
  letter-spacing: var(--tracking-wide, 0.02em);
  text-transform: uppercase;
`;const kS=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  text-transform: capitalize;
`,_S={low:1,medium:2,high:3},CS=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,SS=h.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`,MS=h.div`
  height: 6px;
  border-radius: var(--radius-xs, 2px);
  background: ${r=>r.$filled?r.$color==="green"?"var(--color-green-content-secondary, #7BB97A)":r.$color==="yellow"?"var(--color-yellow-content-secondary, #E8C547)":"var(--color-red-content-secondary, #D9534F)":"var(--color-bg-tertiary, #eef0f3)"};
`,IS=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  text-transform: capitalize;
`;function Kh({value:r,higherIsBetter:s=!1}){const i=_S[r],l=s?r==="high"?"green":r==="medium"?"yellow":"red":r==="low"?"green":r==="medium"?"yellow":"red";return t.jsxs(CS,{children:[t.jsx(SS,{children:[1,2,3].map(c=>t.jsx(MS,{$filled:c<=i,$color:l},c))}),t.jsx(IS,{children:r})]})}const Qh=h(Fe)`
  &&& {
    background-color: var(--color-bg-inverse-primary);
    color: var(--color-content-inverse-primary);
    border-color: transparent;
  }
  &&&:hover:not(:disabled) {
    background-color: var(--color-bg-inverse-secondary);
  }
  &&&:active:not(:disabled) {
    background-color: var(--color-bg-inverse-tertiary);
  }
`;function NS(r){const{onClose:s,isInstalled:i,onInstall:l,onUninstall:c,onOpenApp:p}=r,[f,v]=x.useState(r.app);x.useEffect(()=>{r.app&&v(r.app)},[r.app]);const g=r.app!==null,w=f;return w?t.jsxs(zu,{open:g,onClose:s,size:"lg","aria-label":`${w.name} preview`,children:[t.jsx(Ol,{onClose:s,children:t.jsxs(aS,{children:[t.jsx(lS,{children:w.shape}),t.jsxs(cS,{children:[t.jsx(dS,{children:w.name}),t.jsxs(uS,{children:[t.jsx(pS,{"aria-hidden":!0,children:"★"}),t.jsx("span",{children:w.rating.toFixed(1)}),t.jsx("span",{"aria-hidden":!0,children:"·"}),t.jsxs("span",{children:[w.installs," installed"]})]})]}),w.preview.status==="recommended"&&t.jsx(mt,{size:"sm",variant:"subtle",color:"green",children:"Recommended"}),w.preview.status==="optional"&&t.jsx(mt,{size:"sm",variant:"subtle",color:"neutral",children:"Optional"})]})}),t.jsx(Hl,{children:t.jsxs(fS,{children:[w.appType!=="background"&&t.jsx(hS,{children:t.jsx(mS,{children:t.jsx(vS,{id:w.id,name:w.name})})}),t.jsxs(bS,{children:[t.jsxs(mu,{children:[t.jsx(Zn,{children:"Category"}),t.jsx(kS,{children:w.category})]}),t.jsxs(mu,{children:[t.jsx(Zn,{children:"Setup"}),t.jsx(Kh,{value:w.preview.setupComplexity})]}),t.jsxs(mu,{children:[t.jsx(Zn,{children:"Impact"}),t.jsx(Kh,{value:w.preview.estimatedImpact,higherIsBetter:!0})]})]}),t.jsxs("div",{children:[t.jsx(pl,{children:"Description"}),t.jsx(yS,{children:w.preview.tagline})]}),t.jsxs("div",{children:[t.jsx(pl,{children:"Recommended for"}),t.jsx(wS,{children:w.preview.recommendedFor.map(y=>t.jsx(mt,{size:"sm",variant:"outline",color:"neutral",children:y},y))})]}),t.jsxs("div",{children:[t.jsx(pl,{children:"Capabilities"}),t.jsx(Zh,{children:w.preview.capabilities.map(y=>t.jsxs(Yh,{children:[t.jsx(yn,{size:16}),t.jsx("span",{children:y})]},y))})]}),t.jsxs("div",{children:[t.jsx(pl,{children:"Business value"}),t.jsx(Zh,{children:w.preview.businessValue.map(y=>t.jsxs(Yh,{children:[t.jsx(Wu,{size:16}),t.jsx("span",{children:y})]},y))})]})]})}),t.jsx(Wl,{children:i?t.jsxs(t.Fragment,{children:[t.jsx(Fe,{variant:"secondary",size:"md",onClick:()=>{c==null||c(w.id),s()},children:"Uninstall"}),t.jsx(Qh,{variant:"primary",size:"md",trailingArtwork:t.jsx(Cs,{size:14}),onClick:()=>{p==null||p(w.id),s()},children:"Open"})]}):t.jsx(Qh,{variant:"primary",size:"md",trailingArtwork:t.jsx(Cs,{size:14}),onClick:()=>{l==null||l(w.id),s()},children:"Use App"})})]}):null}function LS({installedAppIds:r=[],onInstallApp:s,onUninstallApp:i,onOpenApp:l}={}){const[c,p]=x.useState(""),[f,v]=x.useState(!1),[g,w]=x.useState(null),y=js,_=[...js,...bs].slice().sort((k,j)=>parseInt(j.installs,10)-parseInt(k.installs,10)).slice(0,6),b=["compliance_monitor","credential_expiration_monitor","performance_insights_dashboard","auto_shift_optimizer"],L=[...js,...bs],E=b.map(k=>L.find(j=>j.id===k)).filter(k=>!!k),I=c.trim(),N=I.length===0?[]:[...js,...bs].filter(k=>k.name.toLowerCase().includes(I.toLowerCase())||k.description.toLowerCase().includes(I.toLowerCase())),C=f&&I.length>0,T=k=>{w(k),p(""),v(!1)};return t.jsxs(VC,{children:[t.jsxs(GC,{children:[t.jsx(qC,{children:"App Marketplace"}),t.jsx(ZC,{children:"Discover shared workforce apps built by your team — combine forms, automations, and dashboards to run last-mile operations."}),t.jsxs(YC,{children:[t.jsx(Ul,{size:"md",placeholder:"Search community apps",value:c,onChange:k=>p(k.target.value),onFocus:()=>v(!0),onBlur:()=>setTimeout(()=>v(!1),150)}),C&&t.jsx(KC,{onMouseDown:k=>k.preventDefault(),children:N.length===0?t.jsx(QC,{children:"No apps match your search"}):N.map(k=>t.jsx(_r,{size:"md",divider:!1,interactive:!0,onClick:j=>{j.preventDefault(),j.stopPropagation(),T(k)},label:k.name,description:k.description,leadingSlot:t.jsx(gg,{children:t.jsx(ws,{children:k.shape})}),trailingSlot:k.preview.status==="recommended"?t.jsx(mt,{size:"sm",variant:"subtle",color:"green",children:"Recommended"}):t.jsx(mt,{size:"sm",variant:"subtle",color:"neutral",children:"Optional"})},k.id))})]})]}),_.length>0&&t.jsxs(ll,{children:[t.jsxs(cl,{children:[t.jsx(ul,{children:"Popular"}),t.jsx(dl,{children:"Most installed apps across your workspace"})]}),t.jsx(XC,{children:_.map((k,j)=>t.jsx(JC,{size:"md",divider:!1,interactive:!0,onClick:()=>w(k),label:k.name,description:t.jsxs(rS,{children:[t.jsx(oS,{children:k.description}),t.jsxs(sS,{children:[t.jsx(jl,{size:12}),k.installs," installed"]})]}),leadingSlot:t.jsxs(eS,{children:[t.jsx(tS,{children:j+1}),t.jsx(nS,{"data-role":"popular-icon",children:t.jsx(ws,{children:k.shape})})]})},k.id))})]}),E.length>0&&t.jsxs(ll,{children:[t.jsxs(cl,{children:[t.jsx(ul,{children:"Featured"}),t.jsx(dl,{children:"Curated picks across categories"})]}),t.jsx(au,{children:E.map(k=>t.jsxs(lu,{onClick:()=>w(k),role:"button",tabIndex:0,children:[t.jsxs(cu,{children:[t.jsx(du,{"data-role":"featured-icon",children:t.jsx(ws,{children:k.shape})}),t.jsx(Fe,{size:"sm",variant:"secondary",disabled:r.includes(k.id),onClick:j=>{j.stopPropagation(),r.includes(k.id)||s==null||s(k.id)},children:r.includes(k.id)?"Installed":"Install"})]}),t.jsxs(uu,{children:[t.jsx(pu,{children:t.jsx("strong",{children:k.category})}),t.jsx(fu,{children:k.name}),t.jsx(hu,{children:k.description}),t.jsx(iu,{children:k.targetUsers.map(j=>t.jsx(mt,{size:"sm",variant:"outline",color:"neutral",children:j},j))}),t.jsxs(qh,{children:[t.jsx(jl,{size:14}),k.installs," installs"]})]})]},k.name))})]}),y.length>0&&t.jsxs(ll,{children:[t.jsxs(cl,{children:[t.jsx(ul,{children:"Team apps"}),t.jsx(dl,{children:"Apps with a UI your team uses to run last-mile operations"})]}),t.jsx(au,{children:y.map(k=>t.jsxs(lu,{onClick:()=>w(k),role:"button",tabIndex:0,children:[t.jsxs(cu,{children:[t.jsx(du,{"data-role":"featured-icon",children:t.jsx(ws,{children:k.shape})}),t.jsx(Fe,{size:"sm",variant:"secondary",disabled:r.includes(k.id),onClick:j=>{j.stopPropagation(),r.includes(k.id)||s==null||s(k.id)},children:r.includes(k.id)?"Installed":"Install"})]}),t.jsxs(uu,{children:[t.jsx(pu,{children:t.jsx("strong",{children:k.category})}),t.jsx(fu,{children:k.name}),t.jsx(hu,{children:k.description}),t.jsx(iu,{children:k.targetUsers.map(j=>t.jsx(mt,{size:"sm",variant:"outline",color:"neutral",children:j},j))}),t.jsxs(qh,{children:[t.jsx(jl,{size:14}),k.installs," installs"]})]})]},k.id))})]}),t.jsxs(ll,{children:[t.jsxs(cl,{children:[t.jsx(ul,{children:"Background apps"}),t.jsx(dl,{children:"Automated services that run in the background — no UI required"})]}),t.jsx(au,{children:bs.map(k=>t.jsxs(lu,{onClick:()=>w(k),role:"button",tabIndex:0,children:[t.jsxs(cu,{children:[t.jsx(du,{"data-role":"featured-icon",children:t.jsx(ws,{children:k.shape})}),t.jsx(Fe,{size:"sm",variant:"secondary",disabled:r.includes(k.id),onClick:j=>{j.stopPropagation(),r.includes(k.id)||s==null||s(k.id)},children:r.includes(k.id)?"Installed":"Install"})]}),t.jsxs(uu,{children:[t.jsx(pu,{children:t.jsx("strong",{children:k.category})}),t.jsx(fu,{children:k.name}),t.jsx(hu,{children:k.description}),t.jsx(iu,{children:k.targetUsers.map(j=>t.jsx(mt,{size:"sm",variant:"outline",color:"neutral",children:j},j))})]})]},k.id))})]}),t.jsx(NS,{app:g,onClose:()=>w(null),isInstalled:g?r.includes(g.id):!1,onInstall:s,onUninstall:i,onOpenApp:l})]})}h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4, 16px);
  padding: var(--space-10, 40px) 0 var(--space-2, 8px);
  text-align: center;
`;h.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl, 2.5rem);
  line-height: var(--line-height-tight, 1.1);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.02em);
  color: var(--color-content-primary);
`;h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
  max-width: 560px;
`;h.div`
  width: 100%;
  max-width: 720px;
  margin-top: var(--space-4, 16px);
  text-align: left;

  /* Alloy's AIComposerInput wrapper adds 8px padding around the card —
     remove it here so the card stretches edge-to-edge to match the
     sections below. (Card visuals are owned by Alloy now.) */
  [class*='_wrapper_znaes'] {
    padding: 0;
  }
`;h.div`
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: -12px;
    border-radius: 24px;
    background:
      radial-gradient(ellipse 55% 70% at 12% 50%, rgba(140, 79, 226, 0.8) 0%, rgba(140, 79, 226, 0) 70%),
      radial-gradient(ellipse 55% 70% at 50% 50%, rgba(68, 108, 255, 0.75) 0%, rgba(68, 108, 255, 0) 70%),
      radial-gradient(ellipse 55% 70% at 88% 50%, rgba(30, 223, 222, 0.75) 0%, rgba(30, 223, 222, 0) 70%);
    filter: blur(14px);
    z-index: -1;
    pointer-events: none;
  }
`;h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-disabled);
  display: block;
  text-align: center;
  margin-top: var(--space-2, 8px);
`;h.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  width: 70%;
  max-width: 1280px;
  margin: var(--space-10, 40px) auto 0;

  @media (max-width: 900px) {
    width: 100%;
  }
`;h.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3, 12px);
`;h.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-2xl, 1.5rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.01em);
  color: var(--color-content-primary);
`;h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  color: var(--color-content-secondary);
`;h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3, 12px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  padding: var(--space-4, 16px);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg, 14px);
  background: var(--color-bg-primary);
  cursor: pointer;
  transition: border-color 120ms ease, box-shadow 120ms ease;

  &:hover {
    border-color: var(--color-border-hover, #cfd4dc);
    box-shadow: var(--shadow-sm, 0 1px 2px rgba(15, 23, 42, 0.04));
  }
`;h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`;h.div`
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md, 12px);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;

  & svg { width: 26px; height: 26px; }
`;h.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`;h.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
`;h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  line-height: var(--line-height-relaxed, 1.45);
  color: var(--color-content-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2, 8px);
  margin-top: auto;
`;h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`;h.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-3, 12px);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  padding: var(--space-4, 16px);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md, 12px);
  background: var(--color-bg-primary);
  cursor: pointer;
  transition: border-color 120ms ease, background 120ms ease;

  &:hover {
    border-color: var(--color-border-hover, #cfd4dc);
    background: var(--color-bg-secondary);
  }
`;h.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`;h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`;const TS=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`,AS=h.div`
  flex: 1 1 auto;
  min-width: 0;

  & [class*='_shell_'] {
    width: 100%;
    height: 36px;
    min-height: 36px;
  }
`;h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`;h.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl, 1.875rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.02em);
  color: var(--color-content-primary);
`;h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  color: var(--color-content-secondary);
`;h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);

  & > button {
    height: 36px;
    min-height: 36px;
    width: 36px;
    min-width: 36px;
  }

  & > button:not([aria-label="Search installed apps"]):not([aria-label="Clear search"]) {
    width: auto;
    min-width: 0;
  }
`;h.div`
  width: 320px;
  max-width: 100%;
  animation: searchExpand 180ms var(--ease-default, ease);

  & [class*='_shell_'] {
    height: 36px;
    min-height: 36px;
  }

  @keyframes searchExpand {
    from { opacity: 0; transform: translateX(8px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`;const Xh=h.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  margin-top: var(--space-8, 32px);
`,ES=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,$S=h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`,PS=h.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2, 8px);

  /* Match pin button to the Uninstall button height. */
  & > button[data-variant] {
    height: 24px;
    min-height: 24px;
  }
`,RS=h.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;
  color: ${r=>r.$pinned?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  opacity: ${r=>r.$pinned?1:.6};
  transition: background 120ms ease, color 120ms ease, opacity 120ms ease;

  &:hover {
    opacity: 1;
    background: var(--color-bg-tertiary, rgba(21, 21, 21, 0.08));
    color: var(--color-content-primary);
  }

  &:focus-visible {
    opacity: 1;
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
  }
`,Jh=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  margin-bottom: var(--space-1, 4px);
`,e0=h.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`,t0=h.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3, 12px);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,DS=h(_r)`
  --li-px: var(--space-4, 16px);
  --li-hover-bg: var(--color-bg-secondary);
  border-radius: var(--radius-md, 12px);
  border: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
  align-items: flex-start;

  & [class*='_leadingSlot_'],
  & [class*='_trailingSlot_'] {
    align-self: flex-start;
  }

  & [class*='_description_'] {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    font-size: var(--text-sm, 0.875rem);
    line-height: var(--line-height-relaxed, 1.5);
    color: var(--color-content-secondary);
  }

  /* The "last opened" timestamp lives inside the description block but
     reads as a separate, quieter line — keep it on the tertiary color. */
  & [class*='_description_'] [data-role='installed-last-opened'] {
    color: var(--color-content-tertiary);
  }
`,n0=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2, 8px);
  padding: var(--space-8, 32px) var(--space-6, 24px);
  border-radius: var(--radius-md, 12px);
  border: 1px dashed var(--color-border-opaque);
  background: var(--color-bg-primary);
`,r0=h.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`,o0=h.p`
  margin: 0;
  max-width: 480px;
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`;h.div`
  padding: var(--space-6, 24px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  color: var(--color-content-tertiary);
  text-align: center;
`;const xg={shift_marketplace:"mp-shift-marketplace",employee_availability_portal:"mp-availability",smart_time_clock:"mp-time-clock",workforce_messaging_center:"mp-messaging",client_staffing_portal:"mp-client-portal",labor_cost_forecasting:"mp-labor-cost",compliance_monitor:"mp-compliance-monitor",recruiting_pipeline_dashboard:"mp-recruiting",credential_tracker:"mp-credential",performance_insights_dashboard:"mp-performance"},s0=Object.fromEntries(Object.entries(xg).map(([r,s])=>[s,r]));function i0(r){var s;return(s=[...js,...bs].find(i=>i.id===r))==null?void 0:s.name}function zS({onOpenCommunity:r,onOpenApp:s,pinnedAppIds:i=[],onTogglePin:l,installedAppIds:c=[],onUninstallApp:p,lastOpenedAtById:f={}}){const[v,g]=x.useState(""),[w,y]=x.useState(!1);x.useRef(null);const _=T=>{const k=v.trim().toLowerCase();return k.length===0?!0:T.name.toLowerCase().includes(k)||T.description.toLowerCase().includes(k)},b=new Set(c),L=[...js,...bs],E=L.filter(T=>T.appType!=="background"&&b.has(T.id)&&_(T)),I=L.filter(T=>T.appType==="background"&&b.has(T.id)&&_(T));c.length;const N=T=>{if(!T)return null;const k=Date.now()-T;if(k<45e3)return"Just now";const j=Math.round(k/6e4);if(j<60)return`${j} ${j===1?"minute":"minutes"} ago`;const $=Math.round(j/60);if($<24)return`${$} ${$===1?"hour":"hours"} ago`;const F=Math.round($/24);if(F<7)return`${F} ${F===1?"day":"days"} ago`;const z=Math.round(F/7);return`${z} ${z===1?"week":"weeks"} ago`},C=T=>t.jsx(DS,{size:"lg",divider:!1,interactive:!0,onClick:()=>s==null?void 0:s(T.id),label:T.name,description:t.jsxs(ES,{children:[t.jsx("span",{children:T.description}),(()=>{const k=N(f[T.id]);return k?t.jsxs($S,{"data-role":"installed-last-opened",children:[t.jsx(Cm,{size:12}),k]}):null})()]}),leadingSlot:t.jsx(gg,{children:t.jsx(ws,{children:T.shape})}),trailingSlot:t.jsxs(PS,{children:[l&&(()=>{const k=xg[T.id];if(!k)return null;const j=i.includes(k);return t.jsx(RS,{type:"button",$pinned:j,"aria-label":j?"Unpin from left nav":"Pin to left nav",title:j?"Unpin from left nav":"Pin to left nav",onClick:$=>{$.stopPropagation(),l(k)},children:t.jsx(Hu,{size:16,fill:j?"currentColor":"none"})})})(),t.jsx(Fe,{variant:"secondary",size:"sm",onClick:k=>{k.stopPropagation(),p==null||p(T.id)},children:"Uninstall"})]})},T.id);return t.jsxs(mg,{children:[t.jsxs(TS,{children:[t.jsx(AS,{children:t.jsx(Ul,{size:"md",placeholder:"Search installed apps",value:v,onChange:T=>g(T.target.value)})}),r&&t.jsx(Fe,{variant:"secondary",size:"md",onClick:r,trailingArtwork:t.jsx(Cs,{size:14}),children:"App Marketplace"})]}),t.jsxs(Xh,{children:[t.jsxs(Jh,{children:[t.jsx(e0,{children:"Team apps"}),t.jsx(Fi,{variant:"neutral",children:E.length})]}),E.length===0?t.jsxs(n0,{children:[t.jsx(r0,{children:"No team apps installed yet"}),t.jsxs(o0,{children:["Browse the App Marketplace and click ",t.jsx("strong",{children:"Use App"})," on a team app to install it here."]}),r&&t.jsx(Fe,{variant:"secondary",size:"sm",onClick:r,trailingArtwork:t.jsx(Cs,{size:14}),children:"Browse App Marketplace"})]}):t.jsx(t0,{children:E.map(T=>C(T))})]}),t.jsxs(Xh,{children:[t.jsxs(Jh,{children:[t.jsx(e0,{children:"Background apps"}),t.jsx(Fi,{variant:"neutral",children:I.length})]}),I.length===0?t.jsxs(n0,{children:[t.jsx(r0,{children:"No background apps installed yet"}),t.jsxs(o0,{children:["Browse the App Marketplace and click ",t.jsx("strong",{children:"Use App"})," on a background service to install it here."]}),r&&t.jsx(Fe,{variant:"secondary",size:"sm",onClick:r,trailingArtwork:t.jsx(Cs,{size:14}),children:"Browse App Marketplace"})]}):t.jsx(t0,{children:I.map(T=>C(T))})]})]})}function FS({name:r}){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:r}),t.jsx(dn,{children:"One of your installed apps from Last Mile Apps."})]}),t.jsxs(np,{children:[t.jsx(rp,{children:r}),t.jsx(op,{children:"This app's content will render here."})]})]})}function BS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Custom App"}),t.jsx(dn,{children:"Your organization's custom-built application"})]}),t.jsxs(np,{children:[t.jsx(rp,{children:"Custom App"}),t.jsx(op,{children:"This space is configured by your organization. Contact your admin to set up this module."})]})]})}function OS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Add App"}),t.jsx(dn,{children:"Connect a new app to your workspace"})]}),t.jsx($n,{children:["HRIS Integration","Payroll Sync","ATS Connector","SSO Provider","Time Tracking","Benefits Admin"].map(r=>t.jsxs(Pe,{children:[t.jsx(He,{children:"Integration"}),t.jsx(Re,{children:r}),t.jsx(gt,{children:"Connect"})]},r))})]})}function HS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Document Studio"}),t.jsx(dn,{children:"Create and manage employment documents"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Total Documents"}),t.jsx(We,{children:"247"}),t.jsx(Re,{children:"Across all templates"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Drafts"}),t.jsx(We,{children:"12"}),t.jsx(Re,{children:"In progress"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Sent for Signature"}),t.jsx(We,{children:"8"}),t.jsx(Re,{children:"Awaiting completion"})]})]}),t.jsx(Kn,{children:"Recent Documents"}),t.jsxs(ar,{children:[t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Offer Letter — Sarah Kim"}),t.jsx(kt,{children:"Offer Letter · Created today"})]}),t.jsx(gt,{$color:"#fff8e1",children:"Draft"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Employment Contract — Dev Team"}),t.jsx(kt,{children:"Contract · Mar 22"})]}),t.jsx(gt,{$color:"#e3f2fd",children:"Sent"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"NDA — Alex Torres"}),t.jsx(kt,{children:"NDA · Mar 20"})]}),t.jsx(gt,{$color:"#e8f5e9",children:"Signed"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Contractor Agreement — Nomad Labs"}),t.jsx(kt,{children:"Agreement · Mar 18"})]}),t.jsx(gt,{$color:"#e8f5e9",children:"Signed"})]})]})]})}function WS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Form"}),t.jsx(dn,{children:"Build and distribute forms across your organization"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Active Forms"}),t.jsx(We,{children:"18"}),t.jsx(Re,{children:"Collecting responses"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Responses Today"}),t.jsx(We,{children:"34"}),t.jsx(Re,{children:"Across all forms"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Completion Rate"}),t.jsx(We,{children:"91%"}),t.jsx(Re,{children:"↑ 4% this week"})]})]}),t.jsx(Kn,{children:"Recent Forms"}),t.jsx(ar,{children:[{title:"New Hire Onboarding",responses:"12 responses",status:"Active"},{title:"Benefits Enrollment 2025",responses:"89 responses",status:"Active"},{title:"Equipment Request",responses:"7 responses",status:"Active"},{title:"Exit Interview",responses:"3 responses",status:"Closed"}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.title}),t.jsx(kt,{children:r.responses})]}),t.jsx(gt,{$color:r.status==="Active"?"#e8f5e9":void 0,children:r.status})]},r.title))})]})}function US(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Tasks"}),t.jsx(dn,{children:"Manage and track HR workflows"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"My Tasks"}),t.jsx(We,{children:"14"}),t.jsx(Re,{children:"5 due today"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Team Tasks"}),t.jsx(We,{children:"62"}),t.jsx(Re,{children:"Across 4 assignees"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Completed"}),t.jsx(We,{children:"38"}),t.jsx(Re,{children:"This month"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Overdue"}),t.jsx(We,{children:"3"}),t.jsx(Re,{children:"Needs attention"})]})]}),t.jsx(Kn,{children:"Due Soon"}),t.jsx(ar,{children:[{title:"Complete I-9 verification — Sarah Kim",due:"Today",color:"#fce4ec"},{title:"Send equipment checklist",due:"Today",color:"#fce4ec"},{title:"Review offer letter — Jun Park",due:"Tomorrow",color:"#fff8e1"},{title:"Schedule orientation session",due:"Mar 28",color:"#fff8e1"},{title:"Update org chart",due:"Mar 30",color:void 0}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.title}),t.jsxs(kt,{children:["Due ",r.due]})]}),t.jsx(gt,{$color:r.color,children:r.due})]},r.title))})]})}function VS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Policy Engine"}),t.jsx(dn,{children:"Author, version, and distribute company policies"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Published Policies"}),t.jsx(We,{children:"43"}),t.jsx(Re,{children:"Across 8 categories"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Under Review"}),t.jsx(We,{children:"6"}),t.jsx(Re,{children:"Awaiting approval"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Acknowledgments"}),t.jsx(We,{children:"94%"}),t.jsx(Re,{children:"Team completion rate"})]})]}),t.jsx(Kn,{children:"Recent Policies"}),t.jsx(ar,{children:[{title:"Remote Work Policy 2025",category:"Workplace",status:"Published",color:"#e8f5e9"},{title:"PTO & Leave Guidelines",category:"Benefits",status:"Published",color:"#e8f5e9"},{title:"Code of Conduct v3",category:"Compliance",status:"Under Review",color:"#fff8e1"},{title:"Data & Privacy Policy",category:"Legal",status:"Under Review",color:"#fff8e1"},{title:"Expense Reimbursement",category:"Finance",status:"Draft",color:void 0}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.title}),t.jsx(kt,{children:r.category})]}),t.jsx(gt,{$color:r.color,children:r.status})]},r.title))})]})}function GS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Automation"}),t.jsx(dn,{children:"Build and monitor automated HR workflows"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Active Automations"}),t.jsx(We,{children:"21"}),t.jsx(Re,{children:"Running across modules"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Runs Today"}),t.jsx(We,{children:"148"}),t.jsx(Re,{children:"0 errors"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Time Saved"}),t.jsx(We,{children:"12h"}),t.jsx(Re,{children:"This week"})]})]}),t.jsx(Kn,{children:"Active Automations"}),t.jsx(ar,{children:[{title:"New hire onboarding sequence",trigger:"On hire date",runs:"3 today",color:"#e8f5e9"},{title:"Policy acknowledgment reminder",trigger:"Weekly · Mon 9am",runs:"89 this week",color:"#e8f5e9"},{title:"Payroll cutoff alert",trigger:"Monthly · 3 days before",runs:"1 this month",color:"#e8f5e9"},{title:"Contract expiry warning",trigger:"30 days before expiry",runs:"2 today",color:"#e8f5e9"}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.title}),t.jsxs(kt,{children:[r.trigger," · ",r.runs]})]}),t.jsx(gt,{$color:r.color,children:"Active"})]},r.title))})]})}function qS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Payroll"}),t.jsx(dn,{children:"Process and manage payroll for your workforce"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Next Run"}),t.jsx(We,{children:"Apr 1"}),t.jsx(Re,{children:"6 days away"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Total Payroll"}),t.jsx(We,{children:"$214k"}),t.jsx(Re,{children:"This cycle"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Employees"}),t.jsx(We,{children:"87"}),t.jsx(Re,{children:"Full-time & part-time"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Contractors"}),t.jsx(We,{children:"24"}),t.jsx(Re,{children:"Pending 3 invoices"})]})]}),t.jsx(Kn,{children:"Recent Payroll Runs"}),t.jsx(ar,{children:[{period:"Mar 1–15, 2025",total:"$106,400",status:"Processed",color:"#e8f5e9"},{period:"Feb 15–28, 2025",total:"$104,200",status:"Processed",color:"#e8f5e9"},{period:"Feb 1–14, 2025",total:"$103,800",status:"Processed",color:"#e8f5e9"},{period:"Jan 15–31, 2025",total:"$101,500",status:"Archived",color:void 0}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.period}),t.jsx(kt,{children:r.total})]}),t.jsx(gt,{$color:r.color,children:r.status})]},r.period))})]})}function ZS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"E-Sign Studio"}),t.jsx(dn,{children:"Send, track, and collect electronic signatures"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Awaiting Signature"}),t.jsx(We,{children:"8"}),t.jsx(Re,{children:"Sent to recipients"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Completed This Month"}),t.jsx(We,{children:"31"}),t.jsx(Re,{children:"All signatures collected"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Avg Turnaround"}),t.jsx(We,{children:"1.4d"}),t.jsx(Re,{children:"From send to signed"})]})]}),t.jsx(Kn,{children:"Pending Signatures"}),t.jsx(ar,{children:[{title:"Offer Letter — Sarah Kim",sent:"Today",status:"Awaiting",color:"#fff8e1"},{title:"NDA — Rahul Dev",sent:"Mar 23",status:"Awaiting",color:"#fff8e1"},{title:"Contract — Studio Nine",sent:"Mar 21",status:"Awaiting",color:"#fff8e1"},{title:"Amendment — Alex Torres",sent:"Mar 20",status:"Signed",color:"#e8f5e9"},{title:"IP Agreement — Jun Park",sent:"Mar 19",status:"Signed",color:"#e8f5e9"}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.title}),t.jsxs(kt,{children:["Sent ",r.sent]})]}),t.jsx(gt,{$color:r.color,children:r.status})]},r.title))})]})}const YS={erin:"persona-001",sched:"persona-002",onbi:"persona-003",cassie:"persona-004",dataops:"persona-005"};function El({personaId:r,personaName:s,size:i=32,className:l,style:c}){const p=r??(s?YS[s.toLowerCase()]:void 0)??"persona-001",f=a0[p]??a0["persona-001"];return t.jsx(f,{size:i,className:l,style:c})}function KS({size:r,className:s,style:i}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 32 32",fill:"none",className:s,style:i,"aria-hidden":!0,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"pa-erin-body",x1:"16",y1:"2",x2:"16",y2:"30",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#FFB59A"}),t.jsx("stop",{offset:"1",stopColor:"#E96678"})]}),t.jsxs("linearGradient",{id:"pa-erin-screen",x1:"16",y1:"11",x2:"16",y2:"22",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#2A1320"}),t.jsx("stop",{offset:"1",stopColor:"#4A1D2E"})]})]}),t.jsx("rect",{x:"15.1",y:"2",width:"1.8",height:"3.2",rx:"0.9",fill:"#C24A5E"}),t.jsx("circle",{cx:"16",cy:"2.2",r:"1.6",fill:"#FFE2D0",stroke:"#C24A5E",strokeWidth:"0.6"}),t.jsx("rect",{x:"3",y:"5",width:"26",height:"24",rx:"6",fill:"url(#pa-erin-body)"}),t.jsx("path",{d:"M9 5h14a6 6 0 0 1 6 6v0.5H3V11a6 6 0 0 1 6-6z",fill:"white",fillOpacity:"0.22"}),t.jsx("rect",{x:"6.5",y:"11",width:"19",height:"11",rx:"3",fill:"url(#pa-erin-screen)"}),t.jsx("rect",{x:"6.5",y:"11",width:"19",height:"3.2",rx:"3",fill:"white",fillOpacity:"0.08"}),t.jsx("rect",{x:"10",y:"14.2",width:"4",height:"4.6",rx:"1.4",fill:"#FFE2D0"}),t.jsx("rect",{x:"18",y:"14.2",width:"4",height:"4.6",rx:"1.4",fill:"#FFE2D0"}),t.jsx("circle",{cx:"9",cy:"24",r:"1.3",fill:"#F8C2BB",fillOpacity:"0.7"}),t.jsx("circle",{cx:"23",cy:"24",r:"1.3",fill:"#F8C2BB",fillOpacity:"0.7"})]})}function QS({size:r,className:s,style:i}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 32 32",fill:"none",className:s,style:i,"aria-hidden":!0,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"pa-sched-body",x1:"16",y1:"2",x2:"16",y2:"30",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#5BE2D0"}),t.jsx("stop",{offset:"1",stopColor:"#1F8B9A"})]}),t.jsxs("radialGradient",{id:"pa-sched-face",cx:"16",cy:"16",r:"9",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#0E323A"}),t.jsx("stop",{offset:"1",stopColor:"#062028"})]})]}),t.jsx("path",{d:"M16 2.2L28 9v14L16 29.8 4 23V9l12-6.8z",fill:"url(#pa-sched-body)"}),t.jsx("path",{d:"M16 2.2L28 9 16 15.8 4 9l12-6.8z",fill:"white",fillOpacity:"0.18"}),t.jsx("path",{d:"M16 2.2L28 9v14L16 29.8 4 23V9l12-6.8z",stroke:"#0E575F",strokeOpacity:"0.35",strokeWidth:"0.8"}),t.jsx("circle",{cx:"16",cy:"17",r:"7.2",fill:"url(#pa-sched-face)"}),t.jsx("circle",{cx:"16",cy:"17",r:"7.2",stroke:"#5BE2D0",strokeOpacity:"0.45",strokeWidth:"0.6"}),t.jsx("rect",{x:"15.6",y:"10.6",width:"0.8",height:"1.6",rx:"0.4",fill:"#5BE2D0"}),t.jsx("rect",{x:"15.6",y:"21.8",width:"0.8",height:"1.6",rx:"0.4",fill:"#5BE2D0"}),t.jsx("rect",{x:"9.6",y:"16.6",width:"1.6",height:"0.8",rx:"0.4",fill:"#5BE2D0"}),t.jsx("rect",{x:"20.8",y:"16.6",width:"1.6",height:"0.8",rx:"0.4",fill:"#5BE2D0"}),t.jsx("rect",{x:"15.5",y:"13.2",width:"1",height:"4.2",rx:"0.5",fill:"#5BE2D0"}),t.jsx("rect",{x:"16",y:"16.6",width:"4",height:"1",rx:"0.5",fill:"#5BE2D0"}),t.jsx("circle",{cx:"16",cy:"17",r:"0.9",fill:"#A6F2E5"})]})}function XS({size:r,className:s,style:i}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 32 32",fill:"none",className:s,style:i,"aria-hidden":!0,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"pa-onbi-body",x1:"16",y1:"6",x2:"16",y2:"29",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#FFD479"}),t.jsx("stop",{offset:"1",stopColor:"#D87A1F"})]}),t.jsxs("linearGradient",{id:"pa-onbi-screen",x1:"16",y1:"12",x2:"16",y2:"23",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#2E1808"}),t.jsx("stop",{offset:"1",stopColor:"#5A3210"})]})]}),t.jsx("line",{x1:"16",y1:"3.4",x2:"16",y2:"6",stroke:"#A85812",strokeWidth:"1.3",strokeLinecap:"round"}),t.jsx("path",{d:"M16 1.4l0.65 1.55 1.55 0.45-1.55 0.45L16 5.4l-0.65-1.55-1.55-0.45 1.55-0.45z",fill:"#FFE89A",stroke:"#A85812",strokeWidth:"0.5",strokeLinejoin:"round"}),t.jsx("rect",{x:"2.5",y:"14",width:"3.6",height:"6.5",rx:"1.6",fill:"#A85812"}),t.jsx("rect",{x:"2.5",y:"14",width:"3.6",height:"2",rx:"1.6",fill:"white",fillOpacity:"0.18"}),t.jsx("rect",{x:"25.9",y:"14",width:"3.6",height:"6.5",rx:"1.6",fill:"#A85812"}),t.jsx("rect",{x:"25.9",y:"14",width:"3.6",height:"2",rx:"1.6",fill:"white",fillOpacity:"0.18"}),t.jsx("rect",{x:"6",y:"6",width:"20",height:"22",rx:"6",fill:"url(#pa-onbi-body)"}),t.jsx("path",{d:"M12 6h8a6 6 0 0 1 6 6v0.5H6V12a6 6 0 0 1 6-6z",fill:"white",fillOpacity:"0.22"}),t.jsx("rect",{x:"6",y:"6",width:"20",height:"22",rx:"6",stroke:"#A85812",strokeOpacity:"0.35",strokeWidth:"0.8"}),t.jsx("rect",{x:"8.5",y:"13",width:"15",height:"10",rx:"2.8",fill:"url(#pa-onbi-screen)"}),t.jsx("rect",{x:"8.5",y:"13",width:"15",height:"2.6",rx:"2.8",fill:"white",fillOpacity:"0.08"}),t.jsx("circle",{cx:"12.8",cy:"18",r:"1.7",fill:"#FFE89A"}),t.jsx("circle",{cx:"19.2",cy:"18",r:"1.7",fill:"#FFE89A"}),t.jsx("circle",{cx:"13.3",cy:"17.5",r:"0.55",fill:"white",fillOpacity:"0.95"}),t.jsx("circle",{cx:"19.7",cy:"17.5",r:"0.55",fill:"white",fillOpacity:"0.95"}),t.jsx("rect",{x:"13",y:"25",width:"6",height:"1.4",rx:"0.7",fill:"#FFE89A",fillOpacity:"0.85"})]})}function JS({size:r,className:s,style:i}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 32 32",fill:"none",className:s,style:i,"aria-hidden":!0,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"pa-cassie-body",x1:"16",y1:"3",x2:"16",y2:"29",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#C9A6FF"}),t.jsx("stop",{offset:"1",stopColor:"#6B3CC6"})]}),t.jsxs("linearGradient",{id:"pa-cassie-screen",x1:"16",y1:"12",x2:"16",y2:"22",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#1B0E33"}),t.jsx("stop",{offset:"1",stopColor:"#321855"})]})]}),t.jsx("path",{d:"M21 3.5h5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-2.4l-1.6 1.8 0.2-1.8H21A1.5 1.5 0 0 1 19.5 8V5A1.5 1.5 0 0 1 21 3.5z",fill:"#9D6BFF",stroke:"#5C2DAB",strokeOpacity:"0.5",strokeWidth:"0.6"}),t.jsx("circle",{cx:"22",cy:"6.5",r:"0.7",fill:"#FFFFFF"}),t.jsx("circle",{cx:"24",cy:"6.5",r:"0.7",fill:"#FFFFFF"}),t.jsx("circle",{cx:"26",cy:"6.5",r:"0.7",fill:"#FFFFFF"}),t.jsx("rect",{x:"3",y:"8",width:"26",height:"21",rx:"6",fill:"url(#pa-cassie-body)"}),t.jsx("path",{d:"M9 8h14a6 6 0 0 1 6 6v0.5H3V14a6 6 0 0 1 6-6z",fill:"white",fillOpacity:"0.18"}),t.jsx("rect",{x:"6",y:"13.5",width:"20",height:"9",rx:"3",fill:"url(#pa-cassie-screen)"}),t.jsx("rect",{x:"8.5",y:"17.5",width:"15",height:"1.2",rx:"0.6",fill:"#C9A6FF"}),t.jsx("rect",{x:"8.5",y:"17.5",width:"15",height:"1.2",rx:"0.6",fill:"white",fillOpacity:"0.35"}),t.jsx("circle",{cx:"6.5",cy:"26",r:"1",fill:"#FFFFFF",fillOpacity:"0.7"}),t.jsx("circle",{cx:"25.5",cy:"26",r:"1",fill:"#FFFFFF",fillOpacity:"0.7"})]})}function eM({size:r,className:s,style:i}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 32 32",fill:"none",className:s,style:i,"aria-hidden":!0,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"pa-data-body",x1:"16",y1:"3",x2:"16",y2:"29",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#7AA0E8"}),t.jsx("stop",{offset:"1",stopColor:"#2A4A8E"})]}),t.jsxs("linearGradient",{id:"pa-data-face",x1:"16",y1:"13",x2:"16",y2:"22",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#0A1530"}),t.jsx("stop",{offset:"1",stopColor:"#152852"})]})]}),t.jsx("path",{d:"M7 3h18l4 4v18l-4 4H7l-4-4V7l4-4z",fill:"url(#pa-data-body)"}),t.jsx("path",{d:"M7 3h18l4 4-4 0.6H7L3 7l4-4z",fill:"white",fillOpacity:"0.22"}),t.jsxs("g",{stroke:"white",strokeOpacity:"0.16",strokeWidth:"0.6",children:[t.jsx("line",{x1:"3",y1:"11",x2:"29",y2:"11"}),t.jsx("line",{x1:"3",y1:"21",x2:"29",y2:"21"}),t.jsx("line",{x1:"11",y1:"3",x2:"11",y2:"29"}),t.jsx("line",{x1:"21",y1:"3",x2:"21",y2:"29"})]}),t.jsx("path",{d:"M7 3h18l4 4v18l-4 4H7l-4-4V7l4-4z",stroke:"#1A2F5C",strokeOpacity:"0.5",strokeWidth:"0.8",strokeLinejoin:"round"}),t.jsx("rect",{x:"6",y:"13",width:"20",height:"8",rx:"2",fill:"url(#pa-data-face)"}),t.jsx("rect",{x:"8",y:"16.4",width:"16",height:"1.6",rx:"0.8",fill:"#7AC8FF"}),t.jsx("rect",{x:"8",y:"16.4",width:"16",height:"0.6",rx:"0.3",fill:"white",fillOpacity:"0.5"}),t.jsx("circle",{cx:"9",cy:"25",r:"0.9",fill:"#7AC8FF"}),t.jsx("circle",{cx:"12",cy:"25",r:"0.9",fill:"#FFFFFF",fillOpacity:"0.4"}),t.jsx("circle",{cx:"23",cy:"25",r:"0.9",fill:"#FFFFFF",fillOpacity:"0.4"})]})}const a0={"persona-001":KS,"persona-002":QS,"persona-003":XS,"persona-004":JS,"persona-005":eM},tM=h.div`
  position: relative;
  background: var(--color-bg-secondary, #f6f7f9);
  border-radius: var(--radius-lg, 12px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  transition: box-shadow var(--duration-base, 150ms) var(--ease-default, ease);
  &:hover {
    box-shadow: var(--shadow-below-md);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,nM=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding-right: 56px;
`,rM=h.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--color-content-primary, #151515);
`,oM=h.div`
  display: inline-flex;
  align-items: center;
  height: 24px;
  border: 1px solid var(--color-border-opaque, #dfdfdf);
  border-radius: var(--radius-button, 6px);
  background: var(--color-bg-primary, #fff);
  overflow: hidden;
  flex-shrink: 0;
`,sM=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
`,iM=h.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #1c222a);
  padding-right: 8px;
  white-space: nowrap;
`,aM=h.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--color-content-secondary, #475569);
  letter-spacing: -0.078px;
`,lM=h.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-content-tertiary, #87919f);
`,cM=h.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  pointer-events: none;

  svg { width: 100%; height: 100%; display: block; }
`;function dM({persona:r,onClick:s}){const i=r.voice.charAt(0).toUpperCase()+r.voice.slice(1);return t.jsxs(tM,{role:"button",tabIndex:0,onClick:()=>s(r.id),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),s(r.id))},children:[t.jsxs(nM,{children:[t.jsx(rM,{children:r.name}),t.jsxs(oM,{children:[t.jsx(sM,{children:t.jsx(Ml,{size:12})}),t.jsx(iM,{children:i})]})]}),t.jsx(aM,{children:r.role}),t.jsx(lM,{children:r.description}),t.jsx(cM,{"aria-hidden":"true",children:t.jsx(El,{personaId:r.id,size:44})})]})}const uM=[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],pM=h.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`;function fM({id:r,initialValues:s,onSubmit:i}){const[l,c]=x.useState((s==null?void 0:s.name)??""),[p,f]=x.useState((s==null?void 0:s.role)??""),[v,g]=x.useState((s==null?void 0:s.voice)??""),[w,y]=x.useState((s==null?void 0:s.description)??"");function _(b){b.preventDefault(),i({name:l,role:p,voice:v,description:w})}return t.jsxs(pM,{id:r,onSubmit:_,children:[t.jsx(Ns,{label:"Name",required:!0,value:l,onChange:b=>c(b.target.value),placeholder:"e.g. HR Assistant"}),t.jsx(Ns,{label:"Role",required:!0,value:p,onChange:b=>f(b.target.value),placeholder:"e.g. Human Resources"}),t.jsx(Ln,{label:"Voice",required:!0,options:uM,value:v,onChange:g,placeholder:"Select a voice…"}),t.jsx(Bu,{label:"Description",value:w,onChange:b=>y(b.target.value),placeholder:"What does this specialist do?",rows:3})]})}const l0="new-specialist-form",hM=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`,mM=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,gM=h.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`,xM=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-3, 12px);
`;function vM({onPersonaClick:r}){const[s,i]=x.useState(!1);function l(c){i(!1)}return t.jsxs(hM,{children:[t.jsxs(mM,{children:[t.jsx(gM,{children:"Personas"}),t.jsx(Fe,{variant:"primary",size:"sm",leadingArtwork:t.jsx(zl,{}),onClick:()=>i(!0),children:"New Persona"})]}),t.jsx(xM,{children:kr.map(c=>t.jsx(dM,{persona:c,onClick:r},c.id))}),t.jsxs(zu,{open:s,onClose:()=>i(!1),size:"md",children:[t.jsx(Ol,{onClose:()=>i(!1),children:"New Specialist"}),t.jsx(Hl,{children:t.jsx(fM,{id:l0,onSubmit:l})}),t.jsxs(Wl,{children:[t.jsx(Fe,{variant:"secondary",size:"sm",onClick:()=>i(!1),children:"Cancel"}),t.jsx(Fe,{variant:"primary",size:"sm",type:"submit",form:l0,children:"Create Specialist"})]})]})]})}const yM=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,wM=h.label`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-primary, #151515);
  cursor: default;
`,jM=h.span`
  color: var(--color-content-error, #e5484d);
  margin-left: 2px;
`,bM=h.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 5px 8px;
  min-height: 36px;
  background: var(--color-bg-primary, #fff);
  border: 1px solid ${({$focused:r})=>r?"var(--color-border-focus, #446cff)":"var(--color-border-opaque, #cbd0d7)"};
  border-radius: var(--radius-button, 6px);
  box-shadow: ${({$focused:r})=>r?"0 0 0 3px color-mix(in srgb, var(--color-border-focus, #446cff) 18%, transparent)":"none"};
  cursor: text;
  transition:
    border-color var(--duration-fast, 120ms),
    box-shadow var(--duration-fast, 120ms);
`,kM=h.div`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 5px 2px 8px;
  background: var(--color-bg-secondary, #f6f7f9);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-full, 9999px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-xs, 12px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-tight, 1.25);
  color: var(--color-content-primary, #151515);
  white-space: nowrap;
`,_M=h.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  color: var(--color-content-tertiary, #87919f);
  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
    color: var(--color-content-primary, #151515);
  }
`,CM=h.input`
  all: unset;
  flex: 1;
  min-width: 80px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--line-height-normal, 1.5);
  color: var(--color-content-primary, #151515);
  &::placeholder {
    color: var(--color-content-disabled, #b3b9c4);
  }
`,SM=h.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-button, 6px);
  box-shadow: var(--shadow-below-md);
  z-index: var(--z-dropdown, 200);
  padding: var(--space-1, 4px);
  max-height: 200px;
  overflow-y: auto;
`,c0=h.button`
  all: unset;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 10px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-secondary, #475569);
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  &:hover {
    background: var(--color-bg-secondary, #f6f7f9);
    color: var(--color-content-primary, #151515);
  }
`;function MM({label:r,required:s,value:i,onChange:l,suggestions:c=[],placeholder:p}){const[f,v]=x.useState(""),[g,w]=x.useState(!1),y=x.useRef(null),_=x.useRef(null),b=c.filter(C=>!i.includes(C)&&C.toLowerCase().includes(f.toLowerCase())),L=g&&(b.length>0||f.trim().length>0),E=x.useCallback(C=>{const T=C.trim();T&&!i.includes(T)&&l([...i,T]),v("")},[i,l]),I=x.useCallback(C=>{l(i.filter(T=>T!==C))},[i,l]);x.useEffect(()=>{const C=T=>{var k;(k=_.current)!=null&&k.contains(T.target)||w(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]);function N(C){C.key==="Enter"?(C.preventDefault(),f.trim()&&E(f)):C.key==="Backspace"&&f===""&&i.length>0&&I(i[i.length-1])}return t.jsxs(yM,{children:[r&&t.jsxs(wM,{onClick:()=>{var C;return(C=y.current)==null?void 0:C.focus()},children:[r,s&&t.jsx(jM,{"aria-hidden":"true",children:"*"})]}),t.jsxs(bM,{ref:_,$focused:g,onClick:()=>{var C;return(C=y.current)==null?void 0:C.focus()},children:[i.map(C=>t.jsxs(kM,{children:[C,t.jsx(_M,{type:"button","aria-label":`Remove ${C}`,onMouseDown:T=>{T.preventDefault(),I(C)},children:t.jsx(Ps,{size:10})})]},C)),t.jsx(CM,{ref:y,value:f,placeholder:i.length===0?p:"",onChange:C=>v(C.target.value),onKeyDown:N,onFocus:()=>w(!0)}),L&&t.jsxs(SM,{children:[b.map(C=>t.jsx(c0,{type:"button",onMouseDown:T=>{T.preventDefault(),E(C)},children:C},C)),f.trim()&&!i.includes(f.trim())&&!b.includes(f.trim())&&t.jsxs(c0,{type:"button",onMouseDown:C=>{C.preventDefault(),E(f)},children:["Add “",f.trim(),"”"]})]})]})]})}const gu=5e5,pe=[{id:"wf-001",name:"Employee Profile Updates",href:"/workflows/wf-001"},{id:"wf-002",name:"Benefits Enrollment",href:"/workflows/wf-002"},{id:"wf-003",name:"Shift Coverage & Swaps",href:"/workflows/wf-003"},{id:"wf-004",name:"Schedule Change Notifications",href:"/workflows/wf-004"},{id:"wf-005",name:"New Hire Onboarding Checklist",href:"/workflows/wf-005"},{id:"wf-006",name:"Document Collection & Compliance",href:"/workflows/wf-006"},{id:"wf-007",name:"Customer Ticket Triage",href:"/workflows/wf-007"},{id:"wf-008",name:"Weekly Data Audit",href:"/workflows/wf-008"},{id:"wf-009",name:"Record Cleanup & Dedup",href:"/workflows/wf-009"},{id:"wf-010",name:"Ops Reporting",href:"/workflows/wf-010"}],IM=[{id:"dep-001",personaId:"persona-001",workflow:pe[0],status:"active",type:"engage"},{id:"dep-002",personaId:"persona-001",workflow:pe[1],status:"active",type:"engage"},{id:"dep-003",personaId:"persona-001",workflow:pe[7],status:"active",type:"engage_less"},{id:"dep-004",personaId:"persona-002",workflow:pe[2],status:"active",type:"engage"},{id:"dep-005",personaId:"persona-002",workflow:pe[3],status:"active",type:"engage"},{id:"dep-006",personaId:"persona-002",workflow:pe[2],status:"paused",type:"engage_less"},{id:"dep-007",personaId:"persona-003",workflow:pe[4],status:"active",type:"engage"},{id:"dep-008",personaId:"persona-003",workflow:pe[5],status:"active",type:"engage_less"},{id:"dep-009",personaId:"persona-003",workflow:pe[4],status:"active",type:"engage_less"},{id:"dep-010",personaId:"persona-004",workflow:pe[6],status:"active",type:"engage"},{id:"dep-011",personaId:"persona-005",workflow:pe[7],status:"active",type:"engage_less"},{id:"dep-012",personaId:"persona-005",workflow:pe[8],status:"active",type:"engage_less"},{id:"dep-013",personaId:"persona-005",workflow:pe[9],status:"active",type:"engage_less"}],Di=[{id:"exec-001",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-09T14:05:00Z",trigger:{id:"trig-001",label:"Profile update request from Amy Chen",type:"form_submission"},workflow:pe[0],steps:[{offsetMs:0,description:"Received profile update request form",toolCategory:"data_cleanup"},{offsetMs:800,description:"Validated new address and emergency contact",toolCategory:"data_cleanup"},{offsetMs:2400,description:"Sent confirmation to Amy via chat",toolCategory:"communication",channel:"chat"}],durationMs:3200,creditsUsed:350,goal:"Help employees update their profile information accurately",conversations:[{id:"conv-001",contactName:"Amy Chen",outcome:"goal_achieved",summary:"Erin helped Amy update her home address and emergency contact after her recent move.",thread:[{role:"agent",content:"Hi Amy! I received your profile update request. I see you want to change your home address and emergency contact. Let me pull up your current info."},{role:"user",content:"Yes, I moved last month. New address is 742 Evergreen Terrace, Springfield."},{role:"agent",content:"Got it! I've updated your address to 742 Evergreen Terrace, Springfield. I also see you want to update your emergency contact — who should that be?"},{role:"user",content:"My partner, Jordan Chen. Phone is 555-0147."},{role:"agent",content:"Done! Your emergency contact is now Jordan Chen at 555-0147. Both changes are saved. Is there anything else you need?"},{role:"user",content:"No, that's everything. Thanks!"}]},{id:"conv-002",contactName:"Marcus Rivera",outcome:"goal_achieved",summary:"Marcus updated his legal name and tax withholding with Erin's assistance.",thread:[{role:"agent",content:"Hi Marcus, I see you submitted a profile update. It looks like you want to change your legal name. I'll need to verify a few things first."},{role:"user",content:"Sure. My new legal name is Marcus A. Rivera. I also need to update my W-4 withholding."},{role:"agent",content:"I've updated your legal name. For the W-4 change, I'll need your new filing status and number of allowances."},{role:"user",content:"Married filing jointly, 2 allowances."},{role:"agent",content:"All set! Name updated and W-4 withholding changed to MFJ with 2 allowances. You'll see the payroll change reflected next pay cycle."}]}],outcomeSummaryFull:"Processed two employee profile updates: Amy Chen updated her address and emergency contact; Marcus Rivera updated his legal name and tax withholding. Both changes validated and saved.",feedback:"up"},{id:"exec-002",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-002",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-11T09:30:00Z",trigger:{id:"trig-002",label:"Open enrollment window reminder",type:"scheduled"},workflow:pe[1],steps:[{offsetMs:0,description:"Triggered benefits enrollment outreach",toolCategory:"scheduling"},{offsetMs:500,description:"Identified 3 employees who haven't enrolled",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Sent reminders via email",toolCategory:"communication",channel:"email"},{offsetMs:3200,description:"Followed up with direct chat messages",toolCategory:"communication",channel:"chat"}],durationMs:4100,creditsUsed:500,goal:"Ensure all eligible employees complete benefits enrollment before the deadline",conversations:[{id:"conv-003",contactName:"Priya Patel",outcome:"goal_achieved",summary:"Priya completed her dental and vision enrollment after Erin walked her through the options.",thread:[{role:"agent",content:"Hi Priya! Just a reminder that open enrollment closes this Friday. I noticed you haven't selected your dental and vision plans yet. Would you like help choosing?"},{role:"user",content:"Oh I forgot about that. What are my options for dental?"},{role:"agent",content:"You have two dental options: Basic (covers preventive at 100%, major at 50%, $18/mo) or Premium (covers preventive at 100%, major at 80%, ortho included, $34/mo). Which sounds better for your needs?"},{role:"user",content:"I'll go with Premium since I might need braces next year."},{role:"agent",content:"Great choice! I've enrolled you in the Premium dental plan. For vision, the standard plan covers an annual exam and $150 toward frames. Want to add that too?"},{role:"user",content:"Yes, add the vision plan. Thanks for the help!"},{role:"agent",content:"You're all set! Premium dental + standard vision are now active. You'll get a confirmation email shortly."}]},{id:"conv-004",contactName:"Jake Morrison",outcome:"completed_no_action",summary:"Jake confirmed he intentionally opted out of supplemental benefits this year.",thread:[{role:"agent",content:"Hi Jake, this is a friendly reminder that benefits enrollment closes Friday. You haven't made any selections yet. Need any help?"},{role:"user",content:"No thanks, I'm staying on my spouse's plan this year. I don't need any of the supplemental options."},{role:"agent",content:"Understood! I'll mark you as intentionally opted out. If anything changes, you can always reach out before the deadline."}]},{id:"conv-005",contactName:"Taylor Kim",outcome:"in_progress",summary:"Taylor asked for more time to review options with their partner before deciding.",thread:[{role:"agent",content:"Hi Taylor! Open enrollment closes Friday. Would you like help selecting your benefits?"},{role:"user",content:"I need to talk to my partner first. Can I get back to you tomorrow?"},{role:"agent",content:"Of course! I'll follow up tomorrow afternoon. The deadline is Friday at 5 PM, so there's still time."}]}],outcomeSummaryFull:"Reached out to 3 employees about open enrollment. Priya Patel completed dental and vision enrollment. Jake Morrison confirmed intentional opt-out. Taylor Kim requested follow-up tomorrow.",feedback:null},{id:"exec-003",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-07T06:15:00Z",trigger:{id:"trig-003",label:"Weekly HR data audit scheduled",type:"scheduled"},workflow:pe[7],steps:[{offsetMs:0,description:"Weekly HR data audit initiated",toolCategory:"scheduling"},{offsetMs:1500,description:"Scanned 850 employee records for missing fields",toolCategory:"data_cleanup"},{offsetMs:3800,description:"Found 6 records with outdated manager assignments",toolCategory:"data_cleanup"},{offsetMs:5200,description:"Auto-corrected 4 based on recent org chart changes",toolCategory:"data_cleanup"},{offsetMs:6100,description:"Flagged 2 records for manual HR review",toolCategory:"data_cleanup"},{offsetMs:6800,description:"Posted audit summary to #hr-ops channel",toolCategory:"communication",channel:"chat"}],durationMs:7200,creditsUsed:9660,status:"success",goal:"Identify and resolve data inconsistencies in HR employee records",outcomeSummaryFull:"Weekly HR data audit scanned 850 employee records. Found 6 with outdated manager assignments, auto-corrected 4 using the latest org chart, and flagged 2 for manual review. Summary posted to #hr-ops.",feedback:"up"},{id:"exec-004",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-13T11:00:00Z",trigger:{id:"trig-004",label:"Profile update request from Robin Lee",type:"form_submission"},workflow:pe[0],steps:[{offsetMs:0,description:"Received profile update form",toolCategory:"data_cleanup"},{offsetMs:600,description:"Validated phone number format",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Sent confirmation via chat",toolCategory:"communication",channel:"chat"}],durationMs:1800,creditsUsed:270,goal:"Help employees update their profile information accurately",conversations:[{id:"conv-006",contactName:"Robin Lee",outcome:"goal_achieved",summary:"Robin updated their phone number and preferred pronouns.",thread:[{role:"agent",content:"Hi Robin! I got your profile update request. You want to change your phone number and add preferred pronouns, correct?"},{role:"user",content:"Yes! New phone is 555-0283 and pronouns are they/them."},{role:"agent",content:"Updated! Phone number is now 555-0283 and pronouns set to they/them. These will appear on your internal profile and directory listing."},{role:"user",content:"Perfect, thanks!"}]},{id:"conv-007",contactName:"Devon Okafor",outcome:"goal_achieved",summary:"Devon changed their direct deposit information with verification.",thread:[{role:"agent",content:"Hi Devon, I see a request to update your direct deposit info. For security, I'll need to verify your identity first. Can you confirm the last four digits of your SSN?"},{role:"user",content:"Last four is 7291."},{role:"agent",content:"Verified! Please share your new bank routing and account numbers."},{role:"user",content:"Routing: 021000021, Account: 483920174."},{role:"agent",content:"Your direct deposit has been updated. The change will take effect next pay period. You'll get a confirmation email."},{role:"user",content:"Great, appreciate it."}]}],outcomeSummaryFull:"Processed two profile updates: Robin Lee updated phone and pronouns; Devon Okafor updated direct deposit with identity verification. All changes saved successfully.",feedback:null},{id:"exec-005",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-14T06:15:00Z",trigger:{id:"trig-005",label:"Weekly HR data audit scheduled",type:"scheduled"},workflow:pe[7],steps:[{offsetMs:0,description:"Weekly HR data audit initiated",toolCategory:"scheduling"},{offsetMs:1200,description:"Scanned 852 employee records",toolCategory:"data_cleanup"},{offsetMs:3100,description:"Found 3 records with missing department codes",toolCategory:"data_cleanup"},{offsetMs:4200,description:"All 3 auto-corrected using org chart",toolCategory:"data_cleanup"},{offsetMs:4900,description:"Posted audit summary to #hr-ops",toolCategory:"communication",channel:"chat"}],durationMs:5400,creditsUsed:8740,status:"success",goal:"Identify and resolve data inconsistencies in HR employee records",outcomeSummaryFull:"Weekly HR audit scanned 852 records. Found 3 with missing department codes; all were auto-corrected via org chart mapping. Zero manual flags this week.",feedback:null},{id:"exec-006",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-08T07:30:00Z",trigger:{id:"trig-006",label:"Shift coverage needed for warehouse team",type:"manager_request"},workflow:pe[2],steps:[{offsetMs:0,description:"Received shift coverage request from manager",toolCategory:"scheduling"},{offsetMs:600,description:"Identified 5 eligible employees for the shift",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent coverage requests via SMS",toolCategory:"communication",channel:"sms"},{offsetMs:3800,description:"Processed responses and confirmed coverage",toolCategory:"scheduling"}],durationMs:4500,creditsUsed:590,goal:"Find replacement coverage for open shifts as quickly as possible",conversations:[{id:"conv-008",contactName:"Luis Hernandez",outcome:"goal_achieved",summary:"Luis agreed to cover the Saturday morning warehouse shift.",thread:[{role:"agent",content:"Hi Luis, there's an open shift this Saturday 6AM-2PM at the warehouse. Are you available to cover?"},{role:"user",content:"Yeah I can do that. Overtime rate?"},{role:"agent",content:"Yes, it qualifies for 1.5x overtime since it's your 6th day this week. I'll confirm you for the shift."},{role:"user",content:"Sounds good, sign me up."},{role:"agent",content:"You're confirmed for Saturday 6AM-2PM warehouse shift. I've notified your manager. Thanks, Luis!"}]},{id:"conv-009",contactName:"Mei Zhang",outcome:"completed_no_action",summary:"Mei was unavailable due to a family event but thanked Sched for asking.",thread:[{role:"agent",content:"Hi Mei, there's an open Saturday morning shift at the warehouse. Would you be able to cover 6AM-2PM?"},{role:"user",content:"Sorry, I have a family thing Saturday. Can't make it this time."},{role:"agent",content:"No problem at all! I'll check with others. Have a great weekend, Mei."}]},{id:"conv-010",contactName:"Andre Williams",outcome:"completed_no_action",summary:"Andre declined due to his child's soccer game.",thread:[{role:"agent",content:"Hi Andre, we have an open shift Saturday 6AM-2PM at the warehouse. Any chance you can cover?"},{role:"user",content:"My kid has a soccer game Saturday morning. Can't do it this week."},{role:"agent",content:"Totally understand! Thanks for letting me know. Enjoy the game!"}]}],outcomeSummaryFull:"Shift coverage request for Saturday warehouse shift. Contacted 3 eligible employees: Luis Hernandez accepted at overtime rate, Mei Zhang and Andre Williams were unavailable. Coverage secured.",feedback:"up"},{id:"exec-007",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-005",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-10T16:00:00Z",trigger:{id:"trig-007",label:"Manager updated next week schedule for retail team",type:"schedule_change"},workflow:pe[3],steps:[{offsetMs:0,description:"Detected schedule changes for retail team",toolCategory:"scheduling"},{offsetMs:400,description:"Computed affected employees (4 shift changes)",toolCategory:"data_cleanup"},{offsetMs:1e3,description:"Sent personalized schedule update notifications",toolCategory:"communication",channel:"sms"},{offsetMs:2800,description:"Collected acknowledgments",toolCategory:"communication",channel:"sms"}],durationMs:3400,creditsUsed:460,goal:"Notify employees of schedule changes and collect acknowledgments",conversations:[{id:"conv-011",contactName:"Sam Torres",outcome:"goal_achieved",summary:"Sam acknowledged her new Tuesday start time.",thread:[{role:"agent",content:"Hi Sam, your shift next Tuesday has been updated. New time: 10AM-6PM (was 8AM-4PM). Please reply OK to acknowledge."},{role:"user",content:"OK, thanks for the heads up."}]},{id:"conv-012",contactName:"Nina Johansson",outcome:"goal_achieved",summary:"Nina confirmed her additional Thursday shift.",thread:[{role:"agent",content:"Hi Nina, you've been added to the Thursday closing shift next week (3PM-11PM). Can you confirm you're available?"},{role:"user",content:"That works for me. I'll be there."},{role:"agent",content:"Thanks, Nina! You're confirmed for Thursday 3PM-11PM."}]},{id:"conv-013",contactName:"Chris Dalton",outcome:"in_progress",summary:"Chris hasn't responded to the schedule change notification yet.",thread:[{role:"agent",content:"Hi Chris, your Wednesday shift has been moved to Thursday 8AM-4PM next week. Please reply to confirm."}]}],outcomeSummaryFull:"Notified 3 retail team members of schedule changes. Sam Torres and Nina Johansson acknowledged. Chris Dalton has not yet responded; follow-up queued for tomorrow morning.",feedback:null},{id:"exec-008",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-12T05:00:00Z",trigger:{id:"trig-008",label:"Weekly shift reconciliation for all locations",type:"scheduled"},workflow:pe[2],steps:[{offsetMs:0,description:"Shift reconciliation job started",toolCategory:"scheduling"},{offsetMs:2e3,description:"Compared scheduled shifts vs time-clock entries for 120 employees",toolCategory:"data_cleanup"},{offsetMs:5500,description:"Detected 8 discrepancies across 3 locations",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Auto-resolved 5 minor clock-in rounding differences",toolCategory:"data_cleanup"},{offsetMs:8600,description:"Flagged 3 significant discrepancies for manager review",toolCategory:"data_cleanup"},{offsetMs:9200,description:"Sent reconciliation report to managers via email",toolCategory:"communication",channel:"email"}],durationMs:9800,creditsUsed:10890,status:"success",goal:"Reconcile scheduled shifts with actual time-clock entries to detect discrepancies",outcomeSummaryFull:"Weekly shift reconciliation compared 120 employees across 3 locations. Found 8 discrepancies: 5 auto-resolved (rounding differences), 3 flagged for manager review. Report emailed to location managers.",feedback:null},{id:"exec-009",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-14T10:20:00Z",trigger:{id:"trig-009",label:"Ponder detected potential scheduling conflict for next week",type:"ai_suggestion"},workflow:pe[2],steps:[{offsetMs:0,description:"Ponder identified overlapping shift requests",toolCategory:"scheduling"},{offsetMs:800,description:"Analyzed swap options based on employee preferences",toolCategory:"data_cleanup"},{offsetMs:1600,description:"Proposed swap to affected employees via chat",toolCategory:"communication",channel:"chat"}],durationMs:2400,creditsUsed:400,goal:"Proactively resolve scheduling conflicts before they cause coverage gaps",conversations:[{id:"conv-014",contactName:"Luis Hernandez",outcome:"goal_achieved",summary:"Luis agreed to swap his Monday for Wednesday to resolve the conflict.",thread:[{role:"agent",content:"Hi Luis, I noticed a potential scheduling conflict next Monday — you and Mei are both assigned to the morning shift, but we only need one person. Would you be open to swapping to Wednesday morning instead?"},{role:"user",content:"Wednesday works fine for me. Go ahead and swap it."},{role:"agent",content:"Done! You're now scheduled for Wednesday morning instead of Monday. Mei will keep the Monday shift. Thanks for being flexible!"}]},{id:"conv-015",contactName:"Mei Zhang",outcome:"goal_achieved",summary:"Mei confirmed she's keeping her Monday shift as originally scheduled.",thread:[{role:"agent",content:"Hi Mei, just a heads up — I resolved a scheduling overlap for next Monday. You'll keep your morning shift as planned. No changes needed on your end."},{role:"user",content:"Great, thanks for sorting that out."}]}],outcomeSummaryFull:"Ponder detected a Monday shift overlap between Luis and Mei. Sched proposed a swap: Luis moved to Wednesday, Mei kept Monday. Both confirmed. Conflict resolved proactively.",feedback:"up"},{id:"exec-010",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-02T09:00:00Z",trigger:{id:"trig-010",label:"New hire start date: 3 employees joining April 2",type:"scheduled"},workflow:pe[4],steps:[{offsetMs:0,description:"New hire onboarding triggered for 3 employees",toolCategory:"scheduling"},{offsetMs:500,description:"Generated personalized welcome packets",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Sent welcome messages via email",toolCategory:"communication",channel:"email"},{offsetMs:3200,description:"Followed up with checklist links via chat",toolCategory:"communication",channel:"chat"}],durationMs:4e3,creditsUsed:620,goal:"Guide new hires through their first-day onboarding checklist",conversations:[{id:"conv-016",contactName:"Aisha Mahmoud",outcome:"goal_achieved",summary:"Aisha completed all first-day onboarding tasks with Onbi's guidance.",thread:[{role:"agent",content:"Welcome to the team, Aisha! I'm Onbi, your onboarding assistant. I've sent your welcome packet to your email. Let's get you set up — first up, have you been able to log into the employee portal?"},{role:"user",content:"Thanks! Yes, I logged in this morning. What do I do next?"},{role:"agent",content:"Great! Next steps: (1) Complete your tax forms in the Benefits section, (2) Upload your ID photo for your badge, and (3) Review the employee handbook. I'll check in once you're through those."},{role:"user",content:"All done with those three! The handbook was really helpful."},{role:"agent",content:"Awesome work! Your first-day checklist is 100% complete. Tomorrow I'll walk you through your team-specific setup. Enjoy the rest of your first day!"}]},{id:"conv-017",contactName:"Ryan Brooks",outcome:"in_progress",summary:"Ryan completed portal login but hasn't finished tax forms yet.",thread:[{role:"agent",content:"Welcome, Ryan! I'm Onbi, here to help with onboarding. Have you had a chance to log into the employee portal?"},{role:"user",content:"Hey! Yes just got in. I'm having trouble with the tax form though — it's not loading right."},{role:"agent",content:"That sounds like a browser issue. Try clearing your cache or switching to Chrome. If it still doesn't work, I can send you a direct PDF link as a workaround."},{role:"user",content:"Let me try Chrome first. I'll message you back if it doesn't work."}]},{id:"conv-018",contactName:"Sofia Gutierrez",outcome:"goal_achieved",summary:"Sofia completed all onboarding steps and scheduled her team intro meeting.",thread:[{role:"agent",content:"Welcome aboard, Sofia! I'm your onboarding assistant. Ready to tackle your first-day checklist?"},{role:"user",content:"Absolutely! I already did the tax forms and uploaded my photo. What's left?"},{role:"agent",content:"You're ahead of the game! Just two more items: review the employee handbook and schedule your team intro meeting with your manager. Want me to help find a meeting time?"},{role:"user",content:"Yes please! Anytime tomorrow afternoon works for me."},{role:"agent",content:"I see your manager has tomorrow at 2PM open. I've booked a 30-minute intro meeting for you both. Handbook reviewed?"},{role:"user",content:"Yep, just finished reading it. All done!"},{role:"agent",content:"Your first-day onboarding is complete! Meeting set for tomorrow at 2PM. Great start, Sofia!"}]}],outcomeSummaryFull:"Onboarded 3 new hires on April 2. Aisha Mahmoud and Sofia Gutierrez completed all first-day tasks. Ryan Brooks is in progress (tax form loading issue). Sofia's team intro meeting scheduled.",feedback:"up"},{id:"exec-011",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-05T07:00:00Z",trigger:{id:"trig-011",label:"Compliance document audit for Q2 hires",type:"scheduled"},workflow:pe[5],steps:[{offsetMs:0,description:"Document compliance audit started for Q2 hires",toolCategory:"scheduling"},{offsetMs:1800,description:"Checked I-9, W-4, and NDA status for 14 recent hires",toolCategory:"data_cleanup"},{offsetMs:3600,description:"Found 2 employees missing signed NDAs",toolCategory:"data_cleanup"},{offsetMs:4200,description:"Found 1 employee with incomplete I-9 Section 2",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Generated compliance exception report",toolCategory:"data_cleanup"},{offsetMs:5200,description:"Emailed report to HR compliance team",toolCategory:"communication",channel:"email"}],durationMs:5600,creditsUsed:8010,status:"success",goal:"Ensure all new hire documents are collected and compliant within required timeframes",outcomeSummaryFull:"Document audit for 14 Q2 hires: 2 missing signed NDAs (Ryan Brooks, Kenji Tanaka) and 1 incomplete I-9 Section 2 (Fatima Al-Said). Exception report sent to HR compliance team.",feedback:null},{id:"exec-012",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-009",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-10T08:00:00Z",trigger:{id:"trig-012",label:"Ponder detected stale onboarding checklists",type:"ai_suggestion"},workflow:pe[4],steps:[{offsetMs:0,description:"Ponder flagged 3 checklists stale for >5 days",toolCategory:"scheduling"},{offsetMs:900,description:"Reviewed checklist completion status",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Two checklists at 80%+ completion, one at 40%",toolCategory:"data_cleanup"},{offsetMs:2400,description:"Sent nudge reminders to HR team via email",toolCategory:"communication",channel:"email"}],durationMs:2800,creditsUsed:3470,status:"in_progress",goal:"Ensure onboarding checklists are completed within the target timeframe",outcomeSummaryFull:"Ponder detected 3 onboarding checklists stale for over 5 days. Two are near completion (80%+), one is significantly behind (40%). Nudge reminders sent to HR team for follow-up.",feedback:null},{id:"exec-013",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-03T10:30:00Z",trigger:{id:"trig-013",label:"Day-2 onboarding follow-up triggered",type:"scheduled"},workflow:pe[4],steps:[{offsetMs:0,description:"Day-2 onboarding follow-up initiated",toolCategory:"scheduling"},{offsetMs:400,description:"Checked incomplete items from day 1",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent follow-up messages via chat",toolCategory:"communication",channel:"chat"}],durationMs:1800,creditsUsed:310,goal:"Follow up with new hires who have incomplete onboarding items from day 1",conversations:[{id:"conv-019",contactName:"Ryan Brooks",outcome:"goal_achieved",summary:"Ryan completed his tax forms after receiving the direct PDF link.",thread:[{role:"agent",content:"Hey Ryan! Following up from yesterday. Were you able to get the tax form working in Chrome?"},{role:"user",content:"No luck with Chrome either. Can you send me that PDF link you mentioned?"},{role:"agent",content:"Sure! Here's the direct link to the fillable PDF: [link]. Fill it out, sign it, and upload it to the Documents section in your portal."},{role:"user",content:"That worked! Just uploaded the completed form."},{role:"agent",content:"I can see it in the system. Your day-1 checklist is now 100% complete! Today's items: (1) Complete your department safety training and (2) Set up your development environment. Ready to tackle those?"},{role:"user",content:"On it! Thanks for the help, Onbi."}]}],outcomeSummaryFull:"Day-2 follow-up: Ryan Brooks completed his tax forms via direct PDF workaround. His day-1 checklist is now at 100%. Day-2 items assigned.",feedback:null},{id:"exec-014",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-06T13:00:00Z",trigger:{id:"trig-014",label:"New support tickets received (batch of 4)",type:"ticket_created"},workflow:pe[6],steps:[{offsetMs:0,description:"Received batch of 4 new support tickets",toolCategory:"communication"},{offsetMs:600,description:"Categorized tickets by priority and type",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Sent initial responses to customers via email",toolCategory:"communication",channel:"email"},{offsetMs:3800,description:"Engaged customers in live chat for urgent tickets",toolCategory:"communication",channel:"chat"}],durationMs:5200,creditsUsed:780,goal:"Triage incoming support tickets and provide timely first responses",conversations:[{id:"conv-020",contactName:"Martha Grant",outcome:"goal_achieved",summary:"Cassie resolved Martha's billing discrepancy by applying a credit.",thread:[{role:"agent",content:"Hi Martha, thanks for reaching out! I see your ticket about a billing discrepancy on your last invoice. Let me look into that right away."},{role:"user",content:"Yes, I was charged $149 but my plan is $99/month. This has happened two months in a row."},{role:"agent",content:"I found the issue — an add-on service was accidentally enabled on your account in February. I've removed it and applied a $100 credit for the overcharges. Your next invoice will reflect the correction."},{role:"user",content:"Thank you so much! That was fast."},{role:"agent",content:"Happy to help! You'll see the $100 credit on your next statement. Is there anything else I can assist with?"},{role:"user",content:"No, that's all. Thanks again!"}]},{id:"conv-021",contactName:"Derek Foster",outcome:"goal_achieved",summary:"Derek's login issue was resolved by resetting his MFA configuration.",thread:[{role:"agent",content:"Hi Derek, I see you're having trouble logging in. Can you tell me what error message you're seeing?"},{role:"user",content:"It says my MFA code is invalid every time I try. I changed phones last week."},{role:"agent",content:"That explains it — your MFA is still linked to your old device. I've reset your MFA configuration. You'll receive a setup email to register your new phone. Try that and let me know."},{role:"user",content:"Got the email and re-registered. I'm in now!"},{role:"agent",content:"Glad that worked! Your account is all set. Let me know if you need anything else."}]},{id:"conv-022",contactName:"Kelly Zhao",outcome:"in_progress",summary:"Kelly reported a data export bug that needs engineering investigation.",thread:[{role:"agent",content:"Hi Kelly, I received your ticket about the CSV export issue. Can you describe what's happening?"},{role:"user",content:"When I export my report to CSV, the date columns are all showing as Unix timestamps instead of readable dates."},{role:"agent",content:"Thanks for the details. I've been able to reproduce this on my end. This looks like it needs an engineering fix. I'm escalating to our dev team with priority P2. I'll keep you updated on the timeline."},{role:"user",content:"OK, appreciate you looking into it. How long does P2 usually take?"},{role:"agent",content:"P2 issues are typically resolved within 3-5 business days. I'll follow up with you by Friday with an update either way."}]}],outcomeSummaryFull:"Triaged 3 customer tickets. Martha Grant: billing credit applied, resolved. Derek Foster: MFA reset, resolved. Kelly Zhao: CSV export bug escalated to engineering as P2.",feedback:"up"},{id:"exec-015",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-09T10:00:00Z",trigger:{id:"trig-015",label:"Daily open-ticket follow-up check",type:"scheduled"},workflow:pe[6],steps:[{offsetMs:0,description:"Daily open-ticket follow-up triggered",toolCategory:"scheduling"},{offsetMs:300,description:"Found 2 tickets awaiting customer response >24h",toolCategory:"data_cleanup"},{offsetMs:800,description:"Sent follow-up emails",toolCategory:"communication",channel:"email"}],durationMs:1200,creditsUsed:190,goal:"Follow up on open tickets that have been waiting for customer response",conversations:[{id:"conv-023",contactName:"Kelly Zhao",outcome:"goal_achieved",summary:"Kelly confirmed the CSV export fix is working after the patch.",thread:[{role:"agent",content:"Hi Kelly, following up on your CSV export issue. Our engineering team deployed a fix yesterday. Could you try exporting your report again?"},{role:"user",content:"Just tested it — dates are showing correctly now. Thanks!"},{role:"agent",content:"Wonderful! I'm closing this ticket as resolved. Don't hesitate to reach out if anything else comes up."}]},{id:"conv-024",contactName:"Omar Haddad",outcome:"completed_no_action",summary:"Omar said his issue resolved itself after a browser update.",thread:[{role:"agent",content:"Hi Omar, checking in on your ticket about the dashboard loading slowly. Are you still experiencing the issue?"},{role:"user",content:"Actually it started working fine after I updated Chrome. I think it was a browser thing."},{role:"agent",content:"Good to hear it's resolved! I'll close the ticket. Let us know if it happens again."}]}],outcomeSummaryFull:"Followed up on 2 open tickets. Kelly Zhao confirmed CSV export fix is working. Omar Haddad's dashboard issue self-resolved after browser update. Both tickets closed.",feedback:null},{id:"exec-016",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-12T14:30:00Z",trigger:{id:"trig-016",label:"Ponder detected usage drop for 2 accounts",type:"ai_suggestion"},workflow:pe[6],steps:[{offsetMs:0,description:"Ponder flagged 2 accounts with 60%+ usage drop",toolCategory:"data_cleanup"},{offsetMs:400,description:"Reviewed account activity and recent tickets",toolCategory:"data_cleanup"},{offsetMs:1e3,description:"Sent proactive check-in emails",toolCategory:"communication",channel:"email"}],durationMs:1600,creditsUsed:250,goal:"Proactively reach out to accounts showing significant usage drops",conversations:[{id:"conv-025",contactName:"Evelyn Marsh",outcome:"goal_achieved",summary:"Evelyn appreciated the outreach; she was confused by the new UI and got help navigating it.",thread:[{role:"agent",content:"Hi Evelyn, I noticed your team's usage has dropped recently. Is everything working OK? We want to make sure you're getting the most out of the platform."},{role:"user",content:"Honestly, since the last update the new dashboard is confusing. I can't find the reports I used to run."},{role:"agent",content:"I totally understand — the reports moved to the Analytics tab in the new layout. Would you like me to walk you through the new navigation?"},{role:"user",content:"Yes, that would be great."},{role:"agent",content:"Here's a quick guide: Analytics > Custom Reports > select your template. Your saved reports are all still there. I've also pinned a shortcut to your dashboard sidebar so they're one click away."},{role:"user",content:"Oh perfect, found them! Thanks for reaching out."}]},{id:"conv-026",contactName:"Raj Patel",outcome:"in_progress",summary:"Raj mentioned his team is evaluating a competitor. Flagged for account management.",thread:[{role:"agent",content:"Hi Raj, I noticed your team's activity has been lower than usual lately. Wanted to check in — is there anything we can help with?"},{role:"user",content:"We're actually evaluating a few other tools right now. The pricing increase last quarter was a factor."},{role:"agent",content:"I appreciate your honesty. I'd like to connect you with our account manager to discuss options that might work better for your budget. Would that be OK?"},{role:"user",content:"Sure, have them reach out."}]}],outcomeSummaryFull:"Proactively contacted 2 accounts with usage drops. Evelyn Marsh: resolved UI confusion, pinned report shortcuts. Raj Patel: flagged for account manager outreach due to competitor evaluation.",feedback:"down"},{id:"exec-017",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-14T15:45:00Z",trigger:{id:"trig-017",label:"P1 support ticket: API outage reported",type:"ticket_created"},workflow:pe[6],steps:[{offsetMs:0,description:"P1 ticket received: customer reporting API outage",toolCategory:"communication"},{offsetMs:200,description:"Checked internal status page — no known issues",toolCategory:"data_cleanup"},{offsetMs:600,description:"Initiated live chat with customer",toolCategory:"communication",channel:"chat"}],durationMs:980,creditsUsed:130,goal:"Respond to P1 tickets within 5 minutes and begin troubleshooting immediately",conversations:[{id:"conv-027",contactName:"Nadia Volkov",outcome:"in_progress",summary:"Nadia reported 500 errors on the API; Cassie escalated to on-call engineering.",thread:[{role:"agent",content:"Hi Nadia, I see you're reporting API errors. I'm looking into this right now. Can you share the specific endpoint and error codes you're seeing?"},{role:"user",content:"We're getting 500 errors on /api/v2/reports. Started about 20 minutes ago. It's blocking our production pipeline."},{role:"agent",content:"I've confirmed no issues on our public status page, which means this might be isolated. I'm escalating to our on-call engineer immediately with a P1 flag. They'll join this chat within 10 minutes. In the meantime, does your pipeline have a fallback to the v1 endpoint?"},{role:"user",content:"We can try v1 as a temporary workaround. Please keep me posted on the fix."}]}],outcomeSummaryFull:"P1 ticket from Nadia Volkov: 500 errors on /api/v2/reports. Internal status page clear. Escalated to on-call engineer. Customer using v1 fallback. Response time: under 2 minutes.",feedback:null},{id:"exec-018",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-07T06:00:00Z",trigger:{id:"trig-018",label:"Weekly data audit scheduled",type:"scheduled"},workflow:pe[7],steps:[{offsetMs:0,description:"Weekly audit trigger fired",toolCategory:"scheduling"},{offsetMs:1200,description:"Scanned 2,400 employee records for inconsistencies",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Found 12 records with missing department codes",toolCategory:"data_cleanup"},{offsetMs:6200,description:"Auto-corrected 9 using org chart mapping",toolCategory:"data_cleanup"},{offsetMs:7800,description:"Flagged 3 ambiguous records for manual review",toolCategory:"data_cleanup"},{offsetMs:8400,description:"Generated audit report and posted to #data-ops",toolCategory:"communication",channel:"chat"}],durationMs:9200,creditsUsed:11980,status:"success",goal:"Identify and resolve data inconsistencies in employee records",outcomeSummaryFull:"Weekly data audit scanned 2,400 employee records. Found 12 with missing department codes, auto-corrected 9 using org chart data, and flagged 3 for manual review. Audit report posted to #data-ops.",feedback:"up"},{id:"exec-019",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-08T02:00:00Z",trigger:{id:"trig-019",label:"Nightly record deduplication job",type:"scheduled"},workflow:pe[8],steps:[{offsetMs:0,description:"Nightly dedup job started",toolCategory:"scheduling"},{offsetMs:2200,description:"Compared 3,100 contact records using fuzzy matching",toolCategory:"data_cleanup"},{offsetMs:6400,description:"Identified 18 potential duplicate pairs",toolCategory:"data_cleanup"},{offsetMs:8100,description:"Auto-merged 14 high-confidence duplicates",toolCategory:"data_cleanup"},{offsetMs:9e3,description:"Queued 4 low-confidence pairs for human review",toolCategory:"data_cleanup"},{offsetMs:9600,description:"Updated dedup log and posted summary",toolCategory:"communication",channel:"chat"}],durationMs:1e4,creditsUsed:13220,status:"success",goal:"Eliminate duplicate contact records to maintain data integrity",outcomeSummaryFull:"Nightly dedup scanned 3,100 contact records. Found 18 potential duplicates: 14 auto-merged (high confidence), 4 queued for human review (low confidence). Dedup log updated.",feedback:null},{id:"exec-020",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-10T07:00:00Z",trigger:{id:"trig-020",label:"Weekly ops report generation",type:"scheduled"},workflow:pe[9],steps:[{offsetMs:0,description:"Ops report generation started",toolCategory:"scheduling"},{offsetMs:800,description:"Aggregated metrics from 5 data sources",toolCategory:"data_cleanup"},{offsetMs:2400,description:"Computed week-over-week trends",toolCategory:"data_cleanup"},{offsetMs:3200,description:"Generated formatted report PDF",toolCategory:"data_cleanup"},{offsetMs:3800,description:"Emailed report to ops leadership",toolCategory:"communication",channel:"email"}],durationMs:4200,creditsUsed:5210,status:"success",goal:"Generate and distribute the weekly operations report to leadership",outcomeSummaryFull:"Weekly ops report generated: aggregated data from 5 sources, computed WoW trends, formatted PDF created and emailed to ops leadership.",feedback:null},{id:"exec-021",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-13T03:00:00Z",trigger:{id:"trig-021",label:"Ponder detected orphaned records in staging table",type:"ai_suggestion"},workflow:pe[8],steps:[{offsetMs:0,description:"Ponder flagged 42 orphaned records in staging",toolCategory:"data_cleanup"},{offsetMs:1600,description:"Attempted to match orphans to master records",toolCategory:"data_cleanup"},{offsetMs:3200,description:"Matched 28 records, 14 remain unresolvable",toolCategory:"data_cleanup"},{offsetMs:3800,description:"Process halted: missing reference table access",toolCategory:"data_cleanup"}],durationMs:4e3,creditsUsed:6190,status:"incomplete",goal:"Clean up orphaned records in the staging table",outcomeSummaryFull:"Ponder detected 42 orphaned records in staging. Matched 28 to master records, but 14 remain unresolved. Process halted due to missing access to the customer reference table. Manual intervention required.",feedback:"down"},{id:"exec-022",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-14T06:00:00Z",trigger:{id:"trig-022",label:"Weekly data audit scheduled",type:"scheduled"},workflow:pe[7],steps:[{offsetMs:0,description:"Weekly audit trigger fired",toolCategory:"scheduling"},{offsetMs:1400,description:"Scanned 2,412 employee records",toolCategory:"data_cleanup"},{offsetMs:4200,description:"Found 5 records with stale location data",toolCategory:"data_cleanup"},{offsetMs:5800,description:"Auto-corrected 3 based on recent office moves",toolCategory:"data_cleanup"},{offsetMs:6800,description:"Flagged 2 for manual review",toolCategory:"data_cleanup"}],durationMs:7400,creditsUsed:11060,status:"in_progress",goal:"Identify and resolve data inconsistencies in employee records",outcomeSummaryFull:"Weekly data audit scanned 2,412 records. Found 5 with stale location data: 3 auto-corrected, 2 flagged for review. Report generation pending — awaiting confirmation from ops lead before posting.",feedback:null},{id:"exec-023",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-01T10:15:00Z",trigger:{id:"trig-023",label:"Leave request submitted by Hannah Park",type:"form_submission"},workflow:pe[0],steps:[{offsetMs:0,description:"Received PTO request form",toolCategory:"data_cleanup"},{offsetMs:700,description:"Checked accrual balance and blackout dates",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Responded to employee via chat",toolCategory:"communication",channel:"chat"}],durationMs:2400,creditsUsed:290,goal:"Help employees understand and submit leave requests accurately",conversations:[{id:"conv-050",contactName:"Hannah Park",outcome:"goal_achieved",summary:"Hannah confirmed her PTO balance and submitted a 5-day request.",thread:[{role:"agent",content:"Hi Hannah! I see your PTO request for May 4-8. You currently have 72 hours accrued, which easily covers the 40 hours you're requesting."},{role:"user",content:"Perfect. Is that week OK to take off?"},{role:"agent",content:"It's outside any blackout windows, so you're good to go. I've routed the request to your manager for approval. You'll hear back within 2 business days."},{role:"user",content:"Thanks!"}]},{id:"conv-051",contactName:"Bryan Osei",outcome:"completed_no_action",summary:"Bryan learned he didn't have enough accrued time and withdrew the request.",thread:[{role:"agent",content:"Hi Bryan, I reviewed your leave request for 6 days next month. You currently have 32 hours accrued, which covers only 4 days."},{role:"user",content:"Ah, I didn't realize. Let me just withdraw it and plan for something shorter later."},{role:"agent",content:"No problem — I've withdrawn the request. You'll accrue another 16 hours by end of June if that helps with planning."}]}],outcomeSummaryFull:"Processed 2 leave requests. Hannah Park: 5-day PTO approved and routed to manager. Bryan Osei: withdrew request after learning of insufficient accrual.",feedback:null},{id:"exec-024",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-002",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-04T14:22:00Z",trigger:{id:"trig-024",label:"FSA question from employee chat",type:"inbound_message"},workflow:pe[1],steps:[{offsetMs:0,description:"Inbound FSA question received",toolCategory:"communication"},{offsetMs:600,description:"Looked up current plan documents",toolCategory:"data_cleanup"},{offsetMs:1500,description:"Answered employee via chat",toolCategory:"communication",channel:"chat"}],durationMs:2100,creditsUsed:250,goal:"Answer benefits policy questions accurately and promptly",conversations:[{id:"conv-052",contactName:"Lena Ortiz",outcome:"goal_achieved",summary:"Lena got clarity on dependent-care FSA limits before submitting a claim.",thread:[{role:"agent",content:"Hi Lena! I got your question about the dependent-care FSA. What would you like to know?"},{role:"user",content:"What's the annual limit and can I use it for summer camp?"},{role:"agent",content:"The 2026 limit is $5,000 per household ($2,500 if married filing separately). Day camps qualify — overnight camps do not. Keep receipts and submit through the FSA portal."},{role:"user",content:"Exactly what I needed. Thanks!"}]}],outcomeSummaryFull:"Answered Lena Ortiz's dependent-care FSA question: confirmed $5,000 annual limit and that day camps are eligible expenses.",feedback:"up"},{id:"exec-025",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-11T16:40:00Z",trigger:{id:"trig-025",label:"Ponder flagged repeat questions about bereavement policy",type:"ai_suggestion"},workflow:pe[0],steps:[{offsetMs:0,description:"Ponder detected 4 bereavement policy questions this week",toolCategory:"data_cleanup"},{offsetMs:900,description:"Drafted clarification message",toolCategory:"data_cleanup"},{offsetMs:2100,description:"Messaged affected employees via chat",toolCategory:"communication",channel:"chat"}],durationMs:2800,creditsUsed:370,goal:"Proactively clarify confusing policies when multiple employees ask similar questions",conversations:[{id:"conv-053",contactName:"Kim Alvarez",outcome:"goal_achieved",summary:"Kim got confirmation that bereavement leave covers her aunt.",thread:[{role:"agent",content:"Hi Kim, I wanted to follow up on your question about bereavement leave. Our policy covers immediate family including aunts and uncles — you're eligible for up to 3 paid days."},{role:"user",content:"Oh good. I'll submit the request today."},{role:"agent",content:"Take the time you need. If travel is involved I can also help route a request for an extra unpaid day."}]},{id:"conv-054",contactName:"Nate Holloway",outcome:"goal_achieved",summary:"Nate learned step-parent qualifies for bereavement under the policy.",thread:[{role:"agent",content:"Hi Nate, following up on your bereavement question. Step-parents are included in our policy's definition of immediate family — so you qualify for up to 5 days."},{role:"user",content:"Thank you, that's really helpful."}]}],outcomeSummaryFull:"Ponder flagged a pattern of bereavement policy questions. Erin proactively clarified coverage for Kim Alvarez (aunt) and Nate Holloway (step-parent). Both confirmed eligibility.",feedback:"up"},{id:"exec-026",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-06T05:45:00Z",trigger:{id:"trig-026",label:"Monthly role-title audit",type:"scheduled"},workflow:pe[7],steps:[{offsetMs:0,description:"Role audit job started",toolCategory:"scheduling"},{offsetMs:1600,description:"Compared HRIS titles with org chart of record",toolCategory:"data_cleanup"},{offsetMs:3400,description:"Found 11 mismatches — titles vs compensation band",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Auto-corrected 7 based on approved promotions",toolCategory:"data_cleanup"},{offsetMs:5600,description:"Flagged 4 for comp-team review",toolCategory:"data_cleanup"}],durationMs:6100,creditsUsed:8230,status:"success",goal:"Keep job titles consistent with approved compensation bands",outcomeSummaryFull:"Monthly role audit found 11 title/band mismatches across 850 records. 7 were auto-corrected using the approved promotion log; 4 were escalated to the compensation team.",feedback:null},{id:"exec-027",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-12T08:30:00Z",trigger:{id:"trig-027",label:"Daily employment verification batch",type:"scheduled"},workflow:pe[7],steps:[{offsetMs:0,description:"Verification batch started",toolCategory:"scheduling"},{offsetMs:1100,description:"Processed 18 incoming verification requests",toolCategory:"data_cleanup"},{offsetMs:2900,description:"Generated 18 standardized verification letters",toolCategory:"data_cleanup"},{offsetMs:3700,description:"Emailed letters to requesting parties",toolCategory:"communication",channel:"email"}],durationMs:4200,creditsUsed:5540,status:"success",goal:"Respond to third-party employment verification requests same-day",outcomeSummaryFull:"Processed 18 employment verification requests for mortgage, rental, and loan applications. All standardized letters generated and emailed same-day.",feedback:null},{id:"exec-028",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-02T12:10:00Z",trigger:{id:"trig-028",label:"Shift swap request from Tara Bishop",type:"form_submission"},workflow:pe[2],steps:[{offsetMs:0,description:"Swap request received",toolCategory:"scheduling"},{offsetMs:500,description:"Identified eligible swap partners",toolCategory:"data_cleanup"},{offsetMs:1100,description:"Messaged candidates via SMS",toolCategory:"communication",channel:"sms"},{offsetMs:2400,description:"Confirmed accepted swap and updated schedule",toolCategory:"scheduling"}],durationMs:3e3,creditsUsed:410,goal:"Facilitate shift swaps between eligible employees",conversations:[{id:"conv-055",contactName:"Tara Bishop",outcome:"goal_achieved",summary:"Tara swapped her Friday closing for Tuesday morning.",thread:[{role:"agent",content:"Hi Tara, I received your swap request. I found 2 eligible partners. Sending requests now."},{role:"user",content:"Thanks, hoping someone can take Friday."},{role:"agent",content:"Jordan accepted the swap. You'll now work Tuesday 8AM-4PM instead of Friday closing."},{role:"user",content:"Perfect, thanks!"}]},{id:"conv-056",contactName:"Jordan Kwan",outcome:"goal_achieved",summary:"Jordan accepted the Friday closing shift in exchange.",thread:[{role:"agent",content:"Hi Jordan, Tara is looking to swap her Friday 3PM-11PM for your Tuesday 8AM-4PM. Interested?"},{role:"user",content:"Yes, that works for me."},{role:"agent",content:"Swap confirmed. You're on for Friday closing."}]}],outcomeSummaryFull:"Shift swap completed between Tara Bishop and Jordan Kwan. Tara moved from Friday closing to Tuesday morning. Schedule updated.",feedback:null},{id:"exec-029",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-005",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-05T09:20:00Z",trigger:{id:"trig-029",label:"Manager published new schedule — warehouse",type:"schedule_change"},workflow:pe[3],steps:[{offsetMs:0,description:"Detected published schedule",toolCategory:"scheduling"},{offsetMs:500,description:"Computed per-employee deltas for 9 people",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Sent confirmation SMS to each affected employee",toolCategory:"communication",channel:"sms"}],durationMs:2600,creditsUsed:440,goal:"Make sure every employee acknowledges their upcoming schedule",conversations:[{id:"conv-057",contactName:"Isabel Moreno",outcome:"goal_achieved",summary:"Isabel confirmed her new schedule.",thread:[{role:"agent",content:"Hi Isabel, your warehouse schedule for next week: Mon/Wed/Fri 6AM-2PM. Reply OK to confirm."},{role:"user",content:"OK"}]},{id:"conv-058",contactName:"Wade Sullivan",outcome:"in_progress",summary:"Wade has not responded yet.",thread:[{role:"agent",content:"Hi Wade, you're scheduled Tues/Thurs/Sat 2PM-10PM next week. Reply OK to confirm."}]},{id:"conv-059",contactName:"Priya Natarajan",outcome:"goal_achieved",summary:"Priya acknowledged her updated hours.",thread:[{role:"agent",content:"Hi Priya, your updated schedule: Wed-Sun 10AM-6PM. Reply OK to confirm."},{role:"user",content:"OK thanks"}]}],outcomeSummaryFull:"Sent schedule confirmations to 3 warehouse team members. Isabel Moreno and Priya Natarajan confirmed. Wade Sullivan has not yet responded.",feedback:null},{id:"exec-030",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-08T18:45:00Z",trigger:{id:"trig-030",label:"Ponder predicted understaffing for tomorrow's dinner rush",type:"ai_suggestion"},workflow:pe[2],steps:[{offsetMs:0,description:"Ponder flagged dinner-shift staffing gap",toolCategory:"scheduling"},{offsetMs:500,description:"Pulled list of eligible off-duty staff",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent coverage offers via SMS",toolCategory:"communication",channel:"sms"},{offsetMs:3200,description:"Confirmed two accepts",toolCategory:"scheduling"}],durationMs:3800,creditsUsed:480,goal:"Close predicted coverage gaps before the shift starts",conversations:[{id:"conv-060",contactName:"Riley McCabe",outcome:"goal_achieved",summary:"Riley picked up the 5-9PM dinner shift.",thread:[{role:"agent",content:"Hi Riley, tomorrow 5-9PM dinner shift needs coverage. Available?"},{role:"user",content:"Sure, I can do that."},{role:"agent",content:"You're on. Thanks, Riley!"}]},{id:"conv-061",contactName:"Deion Hart",outcome:"goal_achieved",summary:"Deion accepted a 6-10PM support shift.",thread:[{role:"agent",content:"Hey Deion, tomorrow 6-10PM we could use extra support. Can you cover?"},{role:"user",content:"Yep, sign me up."},{role:"agent",content:"Confirmed. Appreciate it!"}]}],outcomeSummaryFull:"Ponder predicted understaffing for tomorrow's dinner rush. Sched contacted 5 off-duty staff; Riley McCabe and Deion Hart accepted. Gap closed.",feedback:"up"},{id:"exec-031",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-03T04:30:00Z",trigger:{id:"trig-031",label:"Bi-weekly timecard audit",type:"scheduled"},workflow:pe[2],steps:[{offsetMs:0,description:"Audit job started",toolCategory:"scheduling"},{offsetMs:1800,description:"Reviewed timecards for 220 hourly employees",toolCategory:"data_cleanup"},{offsetMs:5100,description:"Found 14 missed punches",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Auto-corrected 10 using scheduled-shift inference",toolCategory:"data_cleanup"},{offsetMs:8200,description:"Flagged 4 for manager confirmation",toolCategory:"data_cleanup"}],durationMs:8900,creditsUsed:11540,status:"success",goal:"Catch and resolve missing timecard punches before payroll runs",outcomeSummaryFull:"Bi-weekly timecard audit covered 220 hourly employees. 14 missed punches detected: 10 inferred from scheduled shifts, 4 flagged for manager review. Ready for payroll.",feedback:"up"},{id:"exec-032",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-09T04:00:00Z",trigger:{id:"trig-032",label:"Daily next-7-day shift gap scan",type:"scheduled"},workflow:pe[2],steps:[{offsetMs:0,description:"Shift gap scan started",toolCategory:"scheduling"},{offsetMs:1400,description:"Analyzed forecasted demand vs published schedule",toolCategory:"data_cleanup"},{offsetMs:3600,description:"Found 6 under-staffed shift windows",toolCategory:"data_cleanup"},{offsetMs:4600,description:"Posted coverage needs to #scheduling channel",toolCategory:"communication",channel:"chat"}],durationMs:5200,creditsUsed:7500,status:"success",goal:"Identify shift gaps 7 days in advance so managers can act",outcomeSummaryFull:"Daily shift gap scan detected 6 under-staffed windows across next 7 days (3 dinner, 2 weekend morning, 1 overnight). Coverage needs posted for managers.",feedback:null},{id:"exec-033",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-15T05:00:00Z",trigger:{id:"trig-033",label:"Weekly reconciliation cross-location",type:"scheduled"},workflow:pe[2],steps:[{offsetMs:0,description:"Reconciliation started",toolCategory:"scheduling"},{offsetMs:2100,description:"Pulled shift data from 4 of 5 locations",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Waiting on missing export from Store 17",toolCategory:"data_cleanup"}],durationMs:5100,creditsUsed:5290,status:"in_progress",goal:"Reconcile scheduled shifts with time-clock entries across all locations",outcomeSummaryFull:"Cross-location reconciliation running. 4 of 5 location exports received; waiting on Store 17 data before completing the compare.",feedback:null},{id:"exec-034",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-01T13:00:00Z",trigger:{id:"trig-034",label:"Missing documents reminder — day 4 new hires",type:"scheduled"},workflow:pe[4],steps:[{offsetMs:0,description:"Day-4 doc check triggered",toolCategory:"scheduling"},{offsetMs:500,description:"Identified 2 new hires missing I-9 Section 2",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent reminders via email",toolCategory:"communication",channel:"email"}],durationMs:1900,creditsUsed:260,goal:"Ensure new hires complete compliance documents on time",conversations:[{id:"conv-062",contactName:"Kenji Tanaka",outcome:"goal_achieved",summary:"Kenji uploaded his I-9 supporting documents.",thread:[{role:"agent",content:"Hi Kenji! Friendly reminder — your I-9 Section 2 is due by end of week. You can upload a passport or license + SS card."},{role:"user",content:"Just uploaded my passport. Is that enough?"},{role:"agent",content:"Yes! Passport is a List A document and satisfies the I-9 on its own. You're all set."}]},{id:"conv-063",contactName:"Fatima Al-Said",outcome:"in_progress",summary:"Fatima said she'll upload her documents this evening.",thread:[{role:"agent",content:"Hi Fatima, just a reminder your I-9 Section 2 documents are still outstanding."},{role:"user",content:"Oh sorry — I'll upload them tonight when I get home."},{role:"agent",content:"No worries, thanks for the heads up!"}]}],outcomeSummaryFull:"Day-4 document reminders sent. Kenji Tanaka completed I-9 upload. Fatima Al-Said committed to upload tonight.",feedback:null},{id:"exec-035",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-07T10:15:00Z",trigger:{id:"trig-035",label:"Schedule orientation for April cohort",type:"scheduled"},workflow:pe[4],steps:[{offsetMs:0,description:"Orientation scheduling triggered",toolCategory:"scheduling"},{offsetMs:700,description:"Checked facilitator availability",toolCategory:"data_cleanup"},{offsetMs:1600,description:"Sent invites to 5 new hires",toolCategory:"communication",channel:"email"}],durationMs:2300,creditsUsed:320,goal:"Book and confirm orientation sessions for new cohorts",conversations:[{id:"conv-064",contactName:"Gabriela Reyes",outcome:"goal_achieved",summary:"Gabriela confirmed her orientation slot.",thread:[{role:"agent",content:"Hi Gabriela! Welcome again. I'm scheduling orientation for April 14 at 9AM. Does that time work for you?"},{role:"user",content:"Yes that works!"},{role:"agent",content:"Great, invite sent. See you there!"}]},{id:"conv-065",contactName:"Theo Whitfield",outcome:"goal_achieved",summary:"Theo accepted the orientation invite.",thread:[{role:"agent",content:"Hi Theo! Orientation for your cohort is April 14, 9AM. Good to go?"},{role:"user",content:"All set."}]}],outcomeSummaryFull:"Orientation scheduled for April cohort on April 14 at 9AM. Gabriela Reyes and Theo Whitfield confirmed.",feedback:"up"},{id:"exec-036",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-11T14:30:00Z",trigger:{id:"trig-036",label:"Week-2 new hire check-in",type:"scheduled"},workflow:pe[4],steps:[{offsetMs:0,description:"Week-2 check-in triggered",toolCategory:"scheduling"},{offsetMs:400,description:"Pulled progress status for each new hire",toolCategory:"data_cleanup"},{offsetMs:1100,description:"Sent check-in messages via chat",toolCategory:"communication",channel:"chat"}],durationMs:1700,creditsUsed:270,goal:"Check in with new hires 2 weeks in to surface blockers",conversations:[{id:"conv-066",contactName:"Aisha Mahmoud",outcome:"goal_achieved",summary:"Aisha reported a smooth onboarding so far.",thread:[{role:"agent",content:"Hi Aisha! It's been two weeks — how's it going? Anything you're stuck on?"},{role:"user",content:"Going great! My team has been super welcoming. No blockers."},{role:"agent",content:"Wonderful! I'll check back at the 30-day mark. Let me know anytime if something comes up."}]},{id:"conv-067",contactName:"Ryan Brooks",outcome:"goal_achieved",summary:"Ryan flagged a software access issue that Onbi routed to IT.",thread:[{role:"agent",content:"Hi Ryan, it's been 2 weeks — how are things going?"},{role:"user",content:"Pretty good. One thing: I still don't have access to the analytics tool."},{role:"agent",content:"Let me get that routed to IT right now. You should have access by end of day."},{role:"user",content:"Thanks!"}]}],outcomeSummaryFull:"Week-2 check-ins with 2 new hires. Aisha Mahmoud: smooth start, no blockers. Ryan Brooks: analytics tool access ticket created with IT.",feedback:null},{id:"exec-037",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-009",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-06T07:30:00Z",trigger:{id:"trig-037",label:"Weekly onboarding checklist audit",type:"scheduled"},workflow:pe[4],steps:[{offsetMs:0,description:"Checklist audit started",toolCategory:"scheduling"},{offsetMs:1e3,description:"Reviewed 22 active onboarding plans",toolCategory:"data_cleanup"},{offsetMs:3100,description:"19 on-track, 3 behind schedule",toolCategory:"data_cleanup"},{offsetMs:4e3,description:"Generated audit summary",toolCategory:"data_cleanup"}],durationMs:4600,creditsUsed:5990,status:"success",goal:"Track onboarding progress across all active new hires",outcomeSummaryFull:"Audited 22 active onboarding plans. 19 on-track, 3 behind schedule (>3 days stale). Summary emailed to people-ops lead.",feedback:null},{id:"exec-038",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-13T07:00:00Z",trigger:{id:"trig-038",label:"Ponder flagged upcoming I-9 deadlines",type:"ai_suggestion"},workflow:pe[5],steps:[{offsetMs:0,description:"Document validation sweep started",toolCategory:"scheduling"},{offsetMs:1200,description:"Cross-checked I-9 expirations against current employees",toolCategory:"data_cleanup"},{offsetMs:2800,description:"Found 4 records with re-verification due in 30 days",toolCategory:"data_cleanup"},{offsetMs:3700,description:"Generated re-verification task list for HR",toolCategory:"data_cleanup"}],durationMs:4200,creditsUsed:6470,status:"success",goal:"Catch expiring work authorizations before they lapse",outcomeSummaryFull:"Ponder flagged upcoming I-9 deadlines. Sweep found 4 employees whose work authorization re-verification is due in the next 30 days. Task list created for HR.",feedback:"up"},{id:"exec-039",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-14T07:45:00Z",trigger:{id:"trig-039",label:"Monthly compliance status check",type:"scheduled"},workflow:pe[5],steps:[{offsetMs:0,description:"Compliance check started",toolCategory:"scheduling"},{offsetMs:1500,description:"Processed 40 of 68 training compliance records",toolCategory:"data_cleanup"},{offsetMs:3600,description:"LMS API rate limit hit — paused before completion",toolCategory:"data_cleanup"}],durationMs:3900,creditsUsed:4090,status:"incomplete",goal:"Verify all employees meet monthly compliance training requirements",outcomeSummaryFull:"Compliance status check processed 40 of 68 records before the LMS API rate limit blocked further reads. Remaining 28 will retry tonight.",feedback:null},{id:"exec-040",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-03T11:15:00Z",trigger:{id:"trig-040",label:"Inbound chat — how-to question",type:"inbound_message"},workflow:pe[6],steps:[{offsetMs:0,description:"Inbound chat received",toolCategory:"communication"},{offsetMs:500,description:"Looked up related FAQ articles",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Responded with walkthrough",toolCategory:"communication",channel:"chat"}],durationMs:1800,creditsUsed:200,goal:"Answer product how-to questions quickly using FAQ knowledge",conversations:[{id:"conv-068",contactName:"Harper Stone",outcome:"goal_achieved",summary:"Harper learned how to invite team members to a shared workspace.",thread:[{role:"agent",content:"Hi Harper! Happy to help — what are you trying to do?"},{role:"user",content:"How do I invite people to my workspace?"},{role:"agent",content:"Go to Settings > Members, click “Invite”, and enter their email. They'll get a link to join. You can also set their role there."},{role:"user",content:"Got it, thanks!"}]}],outcomeSummaryFull:"Harper Stone asked how to invite team members. Cassie walked through the Settings > Members flow. Resolved in chat.",feedback:"up"},{id:"exec-041",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-05T15:50:00Z",trigger:{id:"trig-041",label:"Refund request ticket",type:"ticket_created"},workflow:pe[6],steps:[{offsetMs:0,description:"Refund ticket received",toolCategory:"communication"},{offsetMs:500,description:"Pulled customer billing history",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Issued pro-rated refund",toolCategory:"data_cleanup"},{offsetMs:2200,description:"Emailed confirmation",toolCategory:"communication",channel:"email"}],durationMs:2800,creditsUsed:320,goal:"Process straightforward refund requests same-day within policy",conversations:[{id:"conv-069",contactName:"Mira Okonkwo",outcome:"goal_achieved",summary:"Mira received a pro-rated refund for canceling her annual plan early.",thread:[{role:"agent",content:"Hi Mira, I see you're canceling and requesting a refund. Since you're 4 months into your annual plan, you're eligible for a pro-rated refund of $319.92."},{role:"user",content:"Sounds fair. Please process it."},{role:"agent",content:"Done! Refund of $319.92 will hit your card in 3-5 business days. Sorry to see you go — best of luck!"}]}],outcomeSummaryFull:"Processed pro-rated refund of $319.92 for Mira Okonkwo's annual plan cancellation. Confirmation emailed.",feedback:null},{id:"exec-042",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-08T09:30:00Z",trigger:{id:"trig-042",label:"Bug report from enterprise account",type:"ticket_created"},workflow:pe[6],steps:[{offsetMs:0,description:"Bug report received",toolCategory:"communication"},{offsetMs:500,description:"Reproduced issue in staging",toolCategory:"data_cleanup"},{offsetMs:2200,description:"Filed engineering ticket",toolCategory:"data_cleanup"},{offsetMs:3100,description:"Updated customer via chat",toolCategory:"communication",channel:"chat"}],durationMs:3800,creditsUsed:440,goal:"Triage and file bug reports with enough detail for engineering",conversations:[{id:"conv-070",contactName:"Logan Pierce",outcome:"in_progress",summary:"Logan's chart rendering bug was reproduced and filed with engineering.",thread:[{role:"agent",content:"Hi Logan, thanks for the detailed bug report on the chart rendering. I was able to reproduce it — looks like it's triggered by datasets over 10k rows."},{role:"user",content:"Yeah we hit that threshold yesterday. Any ETA?"},{role:"agent",content:"I've filed ENG-4812 with priority P2. Expected fix in the next release. I'll keep you posted."},{role:"user",content:"Thanks!"}]}],outcomeSummaryFull:"Reproduced Logan Pierce's chart rendering bug at >10k rows. Filed ENG-4812 at P2. Customer updated with timeline.",feedback:null},{id:"exec-043",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-10T12:45:00Z",trigger:{id:"trig-043",label:"Account question from customer chat",type:"inbound_message"},workflow:pe[6],steps:[{offsetMs:0,description:"Inbound chat received",toolCategory:"communication"},{offsetMs:400,description:"Reviewed account settings",toolCategory:"data_cleanup"},{offsetMs:1300,description:"Walked customer through the change",toolCategory:"communication",channel:"chat"}],durationMs:1900,creditsUsed:230,goal:"Help customers manage account details and settings",conversations:[{id:"conv-071",contactName:"Tessa Alvarado",outcome:"goal_achieved",summary:"Tessa updated her billing email successfully.",thread:[{role:"agent",content:"Hi Tessa! How can I help?"},{role:"user",content:"I need to change the email invoices go to."},{role:"agent",content:"Go to Billing > Contacts > Edit, then enter the new email. Want me to walk through it with you?"},{role:"user",content:"I found it — thanks, updated!"},{role:"agent",content:"Great! Next invoice will go to the new address."}]},{id:"conv-072",contactName:"Jin Park",outcome:"goal_achieved",summary:"Jin changed his workspace name with Cassie's guidance.",thread:[{role:"agent",content:"Hi Jin, what do you need help with?"},{role:"user",content:"Renaming my workspace. Where do I do that?"},{role:"agent",content:"Settings > Workspace > rename field at the top. Save and it'll update everywhere."},{role:"user",content:"Done. Thanks!"}]}],outcomeSummaryFull:"Helped 2 customers: Tessa Alvarado updated billing email; Jin Park renamed his workspace. Both resolved in chat.",feedback:null},{id:"exec-044",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-12T10:00:00Z",trigger:{id:"trig-044",label:"Ponder detected cluster of duplicate FAQ questions",type:"ai_suggestion"},workflow:pe[6],steps:[{offsetMs:0,description:"Ponder clustered 5 duplicate questions",toolCategory:"data_cleanup"},{offsetMs:600,description:"Drafted answer and reference link",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Replied to affected users via email",toolCategory:"communication",channel:"email"}],durationMs:2e3,creditsUsed:290,goal:"Batch-resolve common FAQ questions efficiently",conversations:[{id:"conv-073",contactName:"Sasha Bellamy",outcome:"goal_achieved",summary:"Sasha got the SSO setup guide and confirmed completion.",thread:[{role:"agent",content:"Hi Sasha! I saw your question about SSO. Here's our updated setup guide that walks through Okta, Azure AD, and Google: [link]."},{role:"user",content:"Thanks, this is exactly what I needed."},{role:"agent",content:"Glad it helped! Ping me if you hit anything weird during setup."}]},{id:"conv-074",contactName:"Marcus Lin",outcome:"completed_no_action",summary:"Marcus already figured it out on his own but appreciated the link.",thread:[{role:"agent",content:"Hi Marcus, about your SSO question — here's the updated setup guide: [link]."},{role:"user",content:"Oh I worked it out last night, but thanks!"}]},{id:"conv-075",contactName:"Naomi Hughes",outcome:"in_progress",summary:"Naomi is still working through SSO config with her IT team.",thread:[{role:"agent",content:"Hi Naomi, saw your SSO question. Here's the setup guide: [link]. Let me know if you run into anything."},{role:"user",content:"Thanks, our IT is reviewing. Will follow up if we're stuck."}]}],outcomeSummaryFull:"Ponder clustered 3 SSO setup questions. Cassie proactively shared the updated guide. Sasha Bellamy resolved; Marcus Lin already done; Naomi Hughes in progress with IT.",feedback:"up"},{id:"exec-045",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-13T16:20:00Z",trigger:{id:"trig-045",label:"Feature request submitted via in-app form",type:"form_submission"},workflow:pe[6],steps:[{offsetMs:0,description:"Feature request received",toolCategory:"communication"},{offsetMs:500,description:"Logged in product feedback tracker",toolCategory:"data_cleanup"},{offsetMs:1100,description:"Thanked customer and explained next steps",toolCategory:"communication",channel:"email"}],durationMs:1700,creditsUsed:190,goal:"Route product feedback to the right team and close the loop with customers",conversations:[{id:"conv-076",contactName:"Owen Barrett",outcome:"goal_achieved",summary:"Owen got confirmation his feature request was logged for review.",thread:[{role:"agent",content:"Hi Owen! Thanks for the thoughtful request on custom export templates — I've logged it in our feedback tracker for the product team to review."},{role:"user",content:"Appreciate you taking it seriously. Any chance it'll be considered?"},{role:"agent",content:"The product team reviews requests monthly. I'll tag you when there's an update so you'll know either way."}]}],outcomeSummaryFull:"Owen Barrett's feature request (custom export templates) logged in product feedback tracker. Customer notified of the monthly review cadence.",feedback:null},{id:"exec-046",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-02T03:30:00Z",trigger:{id:"trig-046",label:"Nightly ETL validation run",type:"scheduled"},workflow:pe[7],steps:[{offsetMs:0,description:"ETL validation started",toolCategory:"scheduling"},{offsetMs:2400,description:"Compared source vs warehouse row counts",toolCategory:"data_cleanup"},{offsetMs:5600,description:"Row counts match across 14 tables",toolCategory:"data_cleanup"},{offsetMs:7800,description:"Spot-checked 6 sampled columns for drift",toolCategory:"data_cleanup"},{offsetMs:9600,description:"Posted green-light summary",toolCategory:"communication",channel:"chat"}],durationMs:10200,creditsUsed:15200,status:"success",goal:"Verify nightly ETL completed correctly before downstream jobs run",outcomeSummaryFull:"Nightly ETL validation green across 14 tables. Row counts match source; sampled columns show no drift. Downstream reports cleared to run.",feedback:"up"},{id:"exec-047",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-04T02:00:00Z",trigger:{id:"trig-047",label:"Ponder suggested PII scan after schema change",type:"ai_suggestion"},workflow:pe[7],steps:[{offsetMs:0,description:"PII scan started after schema change",toolCategory:"scheduling"},{offsetMs:3400,description:"Scanned 28 newly added columns",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Flagged 3 columns as likely PII (email, phone, DOB)",toolCategory:"data_cleanup"},{offsetMs:9600,description:"Applied masking policy to flagged columns",toolCategory:"data_cleanup"},{offsetMs:10800,description:"Logged compliance action in audit trail",toolCategory:"data_cleanup"}],durationMs:11400,creditsUsed:19240,status:"success",goal:"Detect and protect newly introduced PII columns automatically",outcomeSummaryFull:"Post-schema PII scan of 28 new columns. Flagged 3 as PII (email, phone, DOB) and applied masking policy. Audit trail updated.",feedback:"up"},{id:"exec-048",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-09T02:30:00Z",trigger:{id:"trig-048",label:"Nightly null normalization",type:"scheduled"},workflow:pe[8],steps:[{offsetMs:0,description:"Null normalization job started",toolCategory:"scheduling"},{offsetMs:2100,description:"Scanned 4,200 records for string “null” / empty / N/A values",toolCategory:"data_cleanup"},{offsetMs:5400,description:"Normalized 312 records to SQL NULL",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Re-ran downstream aggregations",toolCategory:"data_cleanup"}],durationMs:7900,creditsUsed:10190,status:"success",goal:"Normalize inconsistent null representations across tables",outcomeSummaryFull:"Nightly null normalization: scanned 4,200 records, converted 312 inconsistent null representations to SQL NULL, and re-ran downstream aggregations.",feedback:null},{id:"exec-049",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-11T07:30:00Z",trigger:{id:"trig-049",label:"Monthly ops report generation",type:"scheduled"},workflow:pe[9],steps:[{offsetMs:0,description:"Monthly report generation started",toolCategory:"scheduling"},{offsetMs:1200,description:"Aggregated metrics from 8 data sources",toolCategory:"data_cleanup"},{offsetMs:3600,description:"Computed month-over-month trends",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Generated formatted PDF and distribution list email",toolCategory:"communication",channel:"email"}],durationMs:5400,creditsUsed:8900,status:"success",goal:"Deliver the monthly operations report to executive distribution",outcomeSummaryFull:"Monthly ops report generated from 8 sources, MoM trends computed, PDF distributed to executive list.",feedback:null},{id:"exec-050",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-15T02:45:00Z",trigger:{id:"trig-050",label:"Nightly record cleanup",type:"scheduled"},workflow:pe[8],steps:[{offsetMs:0,description:"Cleanup job started",toolCategory:"scheduling"},{offsetMs:2800,description:"Processed 1,600 of 3,200 records",toolCategory:"data_cleanup"},{offsetMs:6100,description:"Job still running at scheduled checkpoint",toolCategory:"data_cleanup"}],durationMs:6400,creditsUsed:6860,status:"in_progress",goal:"Clean up stale and malformed contact records nightly",outcomeSummaryFull:"Nightly cleanup job processed 1,600 of 3,200 records before the reporting checkpoint. Remaining records will complete in the continuation run.",feedback:null},{id:"exec-h01",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-01-09T03:00:00Z",trigger:{id:"trig-h01",label:"Weekly data audit",type:"scheduled"},workflow:pe[7],steps:[{offsetMs:0,description:"Weekly audit batch",toolCategory:"data_cleanup"}],durationMs:5400,creditsUsed:14200,status:"success",goal:"Audit records weekly",outcomeSummaryFull:"Weekly audit completed.",feedback:"up"},{id:"exec-h02",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-01-17T11:20:00Z",trigger:{id:"trig-h02",label:"Document collection batch",type:"scheduled"},workflow:pe[5],steps:[{offsetMs:0,description:"Collected onboarding docs",toolCategory:"data_cleanup"}],durationMs:4200,creditsUsed:16500,status:"success",goal:"Collect onboarding documents",outcomeSummaryFull:"All outstanding documents collected.",feedback:"up"},{id:"exec-h03",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-01-26T18:45:00Z",trigger:{id:"trig-h03",label:"Record cleanup",type:"scheduled"},workflow:pe[8],steps:[{offsetMs:0,description:"Deduped contact records",toolCategory:"data_cleanup"}],durationMs:5100,creditsUsed:14800,status:"success",goal:"Dedup contact records",outcomeSummaryFull:"Merged 48 duplicate records.",feedback:null},{id:"exec-h04",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-02-03T04:00:00Z",trigger:{id:"trig-h04",label:"Weekly data audit",type:"scheduled"},workflow:pe[7],steps:[{offsetMs:0,description:"Weekly audit batch",toolCategory:"data_cleanup"}],durationMs:5600,creditsUsed:13700,status:"success",goal:"Audit records weekly",outcomeSummaryFull:"Weekly audit completed.",feedback:"up"},{id:"exec-h05",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-02-11T08:15:00Z",trigger:{id:"trig-h05",label:"Ops reporting",type:"scheduled"},workflow:pe[9],steps:[{offsetMs:0,description:"Generated ops report",toolCategory:"data_cleanup"}],durationMs:4800,creditsUsed:15200,status:"success",goal:"Generate ops report",outcomeSummaryFull:"Report generated and distributed.",feedback:"up"},{id:"exec-h06",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-02-19T10:00:00Z",trigger:{id:"trig-h06",label:"Document collection batch",type:"scheduled"},workflow:pe[5],steps:[{offsetMs:0,description:"Collected onboarding docs",toolCategory:"data_cleanup"}],durationMs:4100,creditsUsed:13400,status:"success",goal:"Collect onboarding documents",outcomeSummaryFull:"All outstanding documents collected.",feedback:null},{id:"exec-h07",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-02-25T21:30:00Z",trigger:{id:"trig-h07",label:"Record cleanup",type:"scheduled"},workflow:pe[8],steps:[{offsetMs:0,description:"Deduped contact records",toolCategory:"data_cleanup"}],durationMs:5200,creditsUsed:12900,status:"incomplete",goal:"Dedup contact records",outcomeSummaryFull:"Partial cleanup — 65% of batch processed.",feedback:null},{id:"exec-h08",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-05T03:00:00Z",trigger:{id:"trig-h08",label:"Weekly data audit",type:"scheduled"},workflow:pe[7],steps:[{offsetMs:0,description:"Weekly audit batch",toolCategory:"data_cleanup"}],durationMs:5400,creditsUsed:17600,status:"success",goal:"Audit records weekly",outcomeSummaryFull:"Weekly audit completed.",feedback:"up"},{id:"exec-h09",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-12T14:10:00Z",trigger:{id:"trig-h09",label:"Document collection batch",type:"scheduled"},workflow:pe[5],steps:[{offsetMs:0,description:"Collected onboarding docs",toolCategory:"data_cleanup"}],durationMs:4400,creditsUsed:18300,status:"success",goal:"Collect onboarding documents",outcomeSummaryFull:"All outstanding documents collected.",feedback:"up"},{id:"exec-h10",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-21T19:50:00Z",trigger:{id:"trig-h10",label:"Record cleanup",type:"scheduled"},workflow:pe[8],steps:[{offsetMs:0,description:"Deduped contact records",toolCategory:"data_cleanup"}],durationMs:5300,creditsUsed:16800,status:"success",goal:"Dedup contact records",outcomeSummaryFull:"Merged 53 duplicate records.",feedback:null},{id:"exec-h11",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-28T22:00:00Z",trigger:{id:"trig-h11",label:"Ops reporting",type:"scheduled"},workflow:pe[9],steps:[{offsetMs:0,description:"Generated ops report",toolCategory:"data_cleanup"}],durationMs:4900,creditsUsed:17400,status:"success",goal:"Generate ops report",outcomeSummaryFull:"Report generated and distributed.",feedback:"up"}],$l=[{personaId:"persona-001",period:"7d",triggersReceived:12,triggersExecuted:9},{personaId:"persona-001",period:"prior_7d",triggersReceived:10,triggersExecuted:7},{personaId:"persona-001",period:"all",triggersReceived:248,triggersExecuted:201},{personaId:"persona-002",period:"7d",triggersReceived:8,triggersExecuted:6},{personaId:"persona-002",period:"prior_7d",triggersReceived:11,triggersExecuted:9},{personaId:"persona-002",period:"all",triggersReceived:173,triggersExecuted:141},{personaId:"persona-003",period:"7d",triggersReceived:6,triggersExecuted:5},{personaId:"persona-003",period:"prior_7d",triggersReceived:4,triggersExecuted:3},{personaId:"persona-003",period:"all",triggersReceived:96,triggersExecuted:82},{personaId:"persona-004",period:"7d",triggersReceived:15,triggersExecuted:12},{personaId:"persona-004",period:"prior_7d",triggersReceived:13,triggersExecuted:10},{personaId:"persona-004",period:"all",triggersReceived:312,triggersExecuted:254},{personaId:"persona-005",period:"7d",triggersReceived:9,triggersExecuted:8},{personaId:"persona-005",period:"prior_7d",triggersReceived:7,triggersExecuted:7},{personaId:"persona-005",period:"all",triggersReceived:186,triggersExecuted:165}],Vn=new Date("2026-04-15T00:00:00Z");function Kr(r,s=Vn){const i=s,l=new Date(s);return r==="24h"&&l.setHours(l.getHours()-24),r==="7d"&&l.setDate(l.getDate()-7),r==="30d"&&l.setDate(l.getDate()-30),r==="all"&&l.setFullYear(l.getFullYear()-1),{from:l,to:i}}function zi(r,s=Vn){const{from:i,to:l}=Kr(r,s),c=l.getTime()-i.getTime();return{from:new Date(i.getTime()-c),to:i}}function Mn(r,s){return r.filter(i=>{const l=new Date(i.timestamp).getTime();return l>=s.from.getTime()&&l<s.to.getTime()})}function vg(r,s){return s===0&&r===0?null:s===0?100:(r-s)/s*100}function Pl(r){let s=0;for(const i of r)i.deploymentType==="engage_less"?i.status==="success"&&(s+=1):s+=i.conversations.filter(l=>l.outcome==="goal_achieved").length;return s}function Rl(r){let s=0;for(const i of r)i.deploymentType==="engage_less"?s+=1:s+=i.conversations.length;return s}const Au={hourlyRate:30},Co=[{workflowId:"wf-001",goal:"Help employees update their profile information accurately",avgManualDurationMs:9e5,sampleSize:45,source:"historical"},{workflowId:"wf-001",goal:"Help employees understand and submit leave requests accurately",avgManualDurationMs:12e5,sampleSize:28,source:"historical"},{workflowId:"wf-001",goal:"Proactively clarify confusing policies when multiple employees ask similar questions",avgManualDurationMs:15e5,sampleSize:18,source:"estimate"},{workflowId:"wf-002",goal:"Ensure all eligible employees complete benefits enrollment before the deadline",avgManualDurationMs:18e5,sampleSize:22,source:"historical"},{workflowId:"wf-002",goal:"Answer benefits policy questions accurately and promptly",avgManualDurationMs:12e5,sampleSize:36,source:"historical"},{workflowId:"wf-003",goal:"Find replacement coverage for open shifts as quickly as possible",avgManualDurationMs:24e5,sampleSize:38,source:"historical"},{workflowId:"wf-003",goal:"Proactively resolve scheduling conflicts before they cause coverage gaps",avgManualDurationMs:18e5,sampleSize:60,source:"historical"},{workflowId:"wf-003",goal:"Facilitate shift swaps between eligible employees",avgManualDurationMs:15e5,sampleSize:33,source:"historical"},{workflowId:"wf-003",goal:"Reconcile scheduled shifts with actual time-clock entries to detect discrepancies",avgManualDurationMs:27e5,sampleSize:14,source:"estimate"},{workflowId:"wf-003",goal:"Close predicted coverage gaps before the shift starts",avgManualDurationMs:15e5,sampleSize:21,source:"historical"},{workflowId:"wf-004",goal:"Notify employees of schedule changes and collect acknowledgments",avgManualDurationMs:6e5,sampleSize:52,source:"historical"},{workflowId:"wf-004",goal:"Make sure every employee acknowledges their upcoming schedule",avgManualDurationMs:9e5,sampleSize:27,source:"historical"},{workflowId:"wf-005",goal:"Guide new hires through their first-day onboarding checklist",avgManualDurationMs:21e5,sampleSize:19,source:"historical"},{workflowId:"wf-005",goal:"Follow up with new hires who have incomplete onboarding items from day 1",avgManualDurationMs:15e5,sampleSize:25,source:"historical"},{workflowId:"wf-005",goal:"Check in with new hires 2 weeks in to surface blockers",avgManualDurationMs:12e5,sampleSize:17,source:"historical"},{workflowId:"wf-005",goal:"Ensure onboarding checklists are completed within the target timeframe",avgManualDurationMs:18e5,sampleSize:11,source:"estimate"},{workflowId:"wf-006",goal:"Collect onboarding documents",avgManualDurationMs:18e5,sampleSize:24,source:"historical"},{workflowId:"wf-006",goal:"Verify all employees meet monthly compliance training requirements",avgManualDurationMs:36e5,sampleSize:12,source:"estimate"},{workflowId:"wf-006",goal:"Catch expiring work authorizations before they lapse",avgManualDurationMs:15e5,sampleSize:8,source:"estimate"},{workflowId:"wf-007",goal:"Respond to P1 tickets within 5 minutes and begin troubleshooting immediately",avgManualDurationMs:9e5,sampleSize:80,source:"historical"},{workflowId:"wf-007",goal:"Triage incoming support tickets and provide timely first responses",avgManualDurationMs:72e4,sampleSize:64,source:"historical"},{workflowId:"wf-007",goal:"Process straightforward refund requests same-day within policy",avgManualDurationMs:9e5,sampleSize:40,source:"historical"},{workflowId:"wf-007",goal:"Batch-resolve common FAQ questions efficiently",avgManualDurationMs:6e5,sampleSize:55,source:"historical"},{workflowId:"wf-007",goal:"Route product feedback to the right team and close the loop with customers",avgManualDurationMs:12e5,sampleSize:22,source:"historical"},{workflowId:"wf-008",goal:"Audit records weekly",avgManualDurationMs:54e5,sampleSize:20,source:"historical"},{workflowId:"wf-008",goal:"Identify and resolve data inconsistencies in HR employee records",avgManualDurationMs:45e5,sampleSize:18,source:"historical"},{workflowId:"wf-008",goal:"Identify and resolve data inconsistencies in employee records",avgManualDurationMs:45e5,sampleSize:16,source:"historical"},{workflowId:"wf-009",goal:"Dedup contact records",avgManualDurationMs:27e5,sampleSize:15,source:"historical"},{workflowId:"wf-009",goal:"Eliminate duplicate contact records to maintain data integrity",avgManualDurationMs:27e5,sampleSize:12,source:"historical"},{workflowId:"wf-009",goal:"Clean up orphaned records in the staging table",avgManualDurationMs:18e5,sampleSize:10,source:"historical"},{workflowId:"wf-009",goal:"Normalize inconsistent null representations across tables",avgManualDurationMs:3e6,sampleSize:9,source:"estimate"},{workflowId:"wf-010",goal:"Generate ops report",avgManualDurationMs:36e5,sampleSize:18,source:"historical"},{workflowId:"wf-010",goal:"Generate and distribute the weekly operations report to leadership",avgManualDurationMs:45e5,sampleSize:14,source:"historical"},{workflowId:"wf-010",goal:"Deliver the monthly operations report to executive distribution",avgManualDurationMs:54e5,sampleSize:6,source:"estimate"}];function yg(r,s,i){return r.find(l=>l.workflowId===s&&l.goal===i)}function d0(r,s=Co,i=Au){let l=0,c=0,p=0;for(const g of r){const w=yg(s,g.workflow.id,g.goal);if(g.deploymentType==="engage_less"){if(g.status!=="success")continue;if(!w){p+=1;continue}l+=Math.max(w.avgManualDurationMs-g.durationMs,0),c+=1}else{const y=g.conversations.filter(L=>L.outcome==="goal_achieved").length;if(y===0)continue;if(!w){p+=y;continue}const _=g.durationMs/Math.max(1,g.conversations.length),b=Math.max(w.avgManualDurationMs-_,0);l+=b*y,c+=y}}const v=l/36e5*i.hourlyRate;return{totalTimeSavedMs:l,costSaved:v,goalsWithBaseline:c,goalsWithoutBaseline:p}}function NM(r,s,i=Co){const l={};for(const c of r){const p=yg(i,c.workflow.id,c.goal);if(!p)continue;let f=0;if(c.deploymentType==="engage_less"){if(c.status!=="success")continue;f=Math.max(p.avgManualDurationMs-c.durationMs,0)}else{const g=c.conversations.filter(y=>y.outcome==="goal_achieved").length;if(g===0)continue;const w=c.durationMs/Math.max(1,c.conversations.length);f=Math.max(p.avgManualDurationMs-w,0)*g}if(f<=0)continue;const v=s(c.timestamp);l[v]=(l[v]??0)+f}return l}function LM(r){return`${Math.round(r)}%`}function TM(r,s){if(r===0)return 0;const i=r/Math.max(1,s);return i<=.25?1:i<=.5?2:i<=.75?3:4}function u0(r){const s=Math.max(0,Math.min(100,r))/100,i=Math.round(140+-72*s),l=Math.round(79+29*s),c=Math.round(226+29*s);return`rgb(${i}, ${l}, ${c})`}function AM(r){return r==="all"?"month":"day"}function p0(r,s){return s==="month"?r.toISOString().slice(0,7):r.toISOString().slice(0,10)}function f0(r,s){return s==="month"?r.toLocaleDateString("en-US",{month:"short",year:"2-digit"}):r.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function EM(r,s,i){const l=[],c=new Date(r),p=new Date(s);if(i==="month")for(c.setUTCDate(1),c.setUTCHours(0,0,0,0),p.setUTCDate(1),p.setUTCHours(0,0,0,0);c<=p;)l.push(new Date(c)),c.setUTCMonth(c.getUTCMonth()+1);else for(c.setUTCHours(0,0,0,0),p.setUTCHours(0,0,0,0);c<=p;)l.push(new Date(c)),c.setUTCDate(c.getUTCDate()+1);return l}function h0({current:r,prior:s,invertDirection:i=!1}){const l=vg(r,s);if(l===null)return null;const c=l>0,p=c?"up":"down",f=i?!c:c,v=Math.abs(l)<.5?void 0:f?"positive":"negative",g=`${l>0?"+":""}${Math.abs(l).toFixed(1)}%`;return t.jsx(Bl,{mode:"trend",value:g,trend:p,severity:v})}const $M=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5, 20px);
`;h.h3`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;h.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4, 16px);

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;const m0=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3, 12px);
`;h.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr);
  gap: var(--space-5, 20px);
  align-items: stretch;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;h.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--color-content-tertiary, #87919f);
`;h.span`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;const g0=h.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  background: ${r=>r.$secondary?"var(--color-bg-secondary, #f6f7f9)":"var(--color-bg-primary, #fff)"};
`,x0=h.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-primary, #151515);
`,v0=h.p`
  margin: 0;
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,PM=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-size: 13px;
  color: var(--color-content-tertiary, #87919f);
`,RM=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-4, 16px);
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,y0=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3, 12px);
  flex-wrap: wrap;
`,DM=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,zM=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,FM=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,BM=h.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 12px;
  flex: 1 1 auto;
  gap: 3px;
  background: var(--color-bg-tertiary);
  border-radius: 0;
  overflow: hidden;
`,OM=h.div`
  width: ${r=>r.$pct}%;
  background: linear-gradient(to right, ${r=>r.$gradientStart}, ${r=>r.$gradientEnd});
  border-radius: 2px;
  opacity: ${r=>r.$muted?.2:1};
  transition: background 120ms ease, opacity 120ms ease, width 150ms ease;
  cursor: default;
  &:hover {
    background: ${r=>r.$color};
    opacity: 1;
  }
`,up=["var(--color-bg-tertiary, #f1f2f4)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%))"],HM=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
`,WM=h.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
`,UM=h.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 14px);
  grid-auto-columns: 14px;
  gap: 3px;
  flex-shrink: 0;
`,VM=h.div`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: ${r=>up[r.$level]};
  transition: background 120ms ease;
`,GM=h.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: flex-end;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 12px);
  color: var(--color-content-tertiary);
  margin-top: var(--space-2, 8px);
`,_i=h.span`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${r=>up[r.$level]};
`,w0=h.div`
  position: fixed;
  z-index: var(--z-tooltip, 999);
  background: var(--color-bg-always-dark, #0f172a);
  border-radius: var(--radius-md, 8px);
  padding: var(--space-2, 8px) var(--space-3, 12px);
  box-shadow: var(--shadow-below-md, 0 6px 16px rgba(0, 0, 0, 0.18));
  pointer-events: none;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  transform: translate(-50%, calc(-100% - 10px));
  font-family: var(--font-sans);
`,j0=h.span`
  font-size: var(--text-xs, 12px);
  color: rgba(255, 255, 255, 0.65);
`,b0=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-bg-always-light, #fff);
`,k0=h.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${r=>r.$color};
`;h.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--space-4, 16px) var(--space-5, 20px);
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  }
`;h.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--color-content-tertiary, #87919f);
`;h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2, 8px);
`;h.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: var(--color-content-primary, #151515);
`;h.span`
  font-size: 12px;
  font-weight: 500;
  color: ${r=>r.$color};
`;function qM(){return t.jsx("svg",{width:"0",height:"0",style:{position:"absolute",width:0,height:0},"aria-hidden":"true",children:t.jsx("defs",{children:t.jsxs("linearGradient",{id:"ai-gradient-stroke",x1:"0",y1:"0",x2:"1",y2:"0",children:[t.jsx("stop",{offset:"0%",stopColor:"#8c4fe2"}),t.jsx("stop",{offset:"100%",stopColor:"#446cff"})]})})})}function ZM({personaId:r}){const[s]=x.useState("7d"),[i,l]=x.useState("7d"),[c,p]=x.useState(null),[f,v]=x.useState(null),g=x.useMemo(()=>Di.filter(Y=>Y.specialistId===r),[r]),w=Kr(s),y=zi(s),_=x.useMemo(()=>Mn(g,w),[g,s]),b=x.useMemo(()=>Mn(g,y),[g,s]),L=Kr(i),E=zi(i),I=x.useMemo(()=>Mn(g,L),[g,i]),N=x.useMemo(()=>Mn(g,E),[g,i]),C=x.useMemo(()=>{let Y=0,Z=0,se=0;for(const H of I)if(H.deploymentType==="engage")for(const P of H.conversations)P.outcome==="goal_achieved"?Y++:P.outcome==="completed_no_action"?Z++:P.outcome==="in_progress"&&se++;else H.status==="success"?Y++:H.status==="incomplete"?Z++:H.status==="in_progress"&&se++;const V=Y+Z+se;return{achieved:Y,completedNoAction:Z,inProgress:se,total:V}},[I]),T=x.useMemo(()=>{const Z={};for(const re of g){const J=new Date(re.timestamp).toISOString().slice(0,10);Z[J]=(Z[J]??0)+1}const se=new Date(Vn);se.setUTCHours(0,0,0,0),se.setUTCDate(se.getUTCDate()+(6-se.getUTCDay()));const V=new Date(se);V.setUTCDate(V.getUTCDate()-363);const H=[],P=new Date(V);for(;P<=se;){const re=P.toISOString().slice(0,10);H.push({date:new Date(P),iso:re,count:Z[re]??0}),P.setUTCDate(P.getUTCDate()+1)}const M=[];for(let re=0;re<H.length;re+=7)M.push(H.slice(re,re+7));const D=Math.max(1,...H.map(re=>re.count));return{weeks:M,maxCount:D}},[g]),k=s,j=`prior_${s}`,$=$l.find(Y=>Y.personaId===r&&Y.period===k),F=$l.find(Y=>Y.personaId===r&&Y.period===j);$&&$.triggersReceived>0&&$.triggersExecuted/$.triggersReceived*100,F&&F.triggersReceived>0&&F.triggersExecuted/F.triggersReceived*100;const z=Pl(I),B=Pl(N),le=Rl(I),ce=Rl(N);_.filter(Y=>Y.steps.some(Z=>Z.toolCategory==="communication"&&Z.channel==="chat")).length,_.filter(Y=>Y.steps.some(Z=>Z.toolCategory==="communication"&&(Z.channel==="email"||Z.channel==="sms"))).length,b.filter(Y=>Y.steps.some(Z=>Z.toolCategory==="communication"&&Z.channel==="chat")).length,b.filter(Y=>Y.steps.some(Z=>Z.toolCategory==="communication"&&(Z.channel==="email"||Z.channel==="sms"))).length,_.reduce((Y,Z)=>Y+Z.creditsUsed,0),b.reduce((Y,Z)=>Y+Z.creditsUsed,0);const X=le>0?z/le*100:0,q=ce>0?B/ce*100:0,{rangeData:Q,activeDays:ge}=x.useMemo(()=>{const Y=AM(s),Z={};for(const P of _){const M=p0(new Date(P.timestamp),Y);Z[M]||(Z[M]=[]),Z[M].push(P.creditsUsed)}const V=EM(w.from,w.to,Y).map(P=>{const M=p0(P,Y),D=Z[M]??[];return D.length===0?{label:f0(P,Y),min:0,max:0,count:0,hasData:!1}:{label:f0(P,Y),min:Math.min(...D),max:Math.max(...D),count:D.length,hasData:!0}}),H=V.filter(P=>P.hasData).length;return{rangeData:V,activeDays:H}},[_,s]);return t.jsxs($M,{children:[t.jsx(qM,{}),t.jsxs(RM,{children:[t.jsxs(g0,{$secondary:!0,children:[t.jsxs(m0,{children:[t.jsxs("div",{children:[t.jsx(x0,{children:"Success Rate"}),t.jsx(v0,{children:"Breakdown by Achieved, Completed No Action, and In Progress"})]}),t.jsxs(tt,{value:i,onChange:Y=>l(Y),size:"sm",children:[t.jsx(tt.Item,{value:"24h",children:"24h"}),t.jsx(tt.Item,{value:"7d",children:"7d"}),t.jsx(tt.Item,{value:"30d",children:"30d"}),t.jsx(tt.Item,{value:"all",children:"All"})]})]}),C.total===0?t.jsx(PM,{children:"No goals in this period"}):(()=>{const Y=C.achieved/C.total*100,Z=C.completedNoAction/C.total*100,se=C.inProgress/C.total*100,V=[{label:"Goal Achieved",value:C.achieved,color:"var(--Alloy-green-500)",pct:Y,startPct:0,endPct:Y,muted:!1},{label:"Completed No Action",value:C.completedNoAction,color:"var(--Alloy-slate-400, #9ca3af)",pct:Z,startPct:Y,endPct:Y+Z,muted:!0},{label:"In Progress",value:C.inProgress,color:"var(--Alloy-blue-500, #446cff)",pct:se,startPct:Y+Z,endPct:Y+Z+se,muted:!0}];return t.jsxs(t.Fragment,{children:[t.jsxs(y0,{children:[t.jsx(FM,{children:LM(X)}),t.jsx(h0,{current:X,prior:q})]}),t.jsx(BM,{role:"img","aria-label":`Goals by outcome: ${C.achieved} achieved, ${C.completedNoAction} completed with no action, ${C.inProgress} in progress`,onMouseLeave:()=>p(null),children:V.map(H=>t.jsx(OM,{$pct:H.pct,$color:H.color,$gradientStart:u0(H.startPct),$gradientEnd:u0(H.endPct),$muted:H.muted,onMouseMove:P=>p({x:P.clientX,y:P.clientY,label:H.label,value:H.value,color:H.color})},H.label))})]})})()]}),t.jsxs(g0,{children:[t.jsx(m0,{children:t.jsxs("div",{children:[t.jsx(x0,{children:"Specialist Activations"}),t.jsx(v0,{children:"Daily activity over the past year"})]})}),t.jsxs(y0,{children:[t.jsx(DM,{children:(($==null?void 0:$.triggersExecuted)??0).toLocaleString("en-US")}),t.jsx(zM,{children:"Activations"}),t.jsx(h0,{current:($==null?void 0:$.triggersExecuted)??0,prior:(F==null?void 0:F.triggersExecuted)??0})]}),t.jsxs(HM,{children:[t.jsx(WM,{children:t.jsx(UM,{role:"img","aria-label":`Daily activations heatmap with max ${T.maxCount} in a single day`,onMouseLeave:()=>v(null),children:T.weeks.flatMap((Y,Z)=>Y.map((se,V)=>{const H=TM(se.count,T.maxCount),P=se.date.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return t.jsx(VM,{$level:H,onMouseMove:M=>v({x:M.clientX,y:M.clientY,label:P,value:se.count,color:up[H]})},`${Z}-${V}`)}))})}),t.jsxs(GM,{children:[t.jsx("span",{children:"Less"}),t.jsx(_i,{$level:0}),t.jsx(_i,{$level:1}),t.jsx(_i,{$level:2}),t.jsx(_i,{$level:3}),t.jsx(_i,{$level:4}),t.jsx("span",{children:"More"})]})]})]})]}),c&&t.jsxs(w0,{style:{left:c.x,top:c.y},children:[t.jsx(j0,{children:c.label}),t.jsxs(b0,{children:[t.jsx(k0,{$color:c.color}),c.value]})]}),f&&t.jsxs(w0,{style:{left:f.x,top:f.y},children:[t.jsx(j0,{children:f.label}),t.jsxs(b0,{children:[t.jsx(k0,{$color:f.color}),f.value," activation",f.value===1?"":"s"]})]})]})}const pp=new Date("2026-04-15T00:00:00Z");function fp(r){return new Date(r).toLocaleString("en-US",{month:"numeric",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0})}function YM(r){const s=new Date(r),i=pp.getTime()-s.getTime(),l=Math.round(i/6e4),c=Math.round(i/36e5),p=Math.round(i/864e5);return i<6e4?"Just now":l<60?`${l} min ago`:c<24?c===1?"1 hour ago":`${c} hours ago`:p<7?p===1?"1 day ago":`${p} days ago`:s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function KM(r){return r.toLocaleString("en-US")}function QM(r){return r===0?"+0s":`+${(r/1e3).toFixed(1)}s`}function XM(r){let s=0;for(let l=0;l<r.length;l++)s=s*31+r.charCodeAt(l)|0;return`https://i.pravatar.cc/48?img=${Math.abs(s)%70+1}`}const JM={communication:{color:"blue",label:"Communication"},data_cleanup:{color:"purple",label:"Data Cleanup"},scheduling:{color:"matcha",label:"Scheduling"}},eI=h.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,tI=h.div`
  overflow: hidden;

  /* Force even column widths on the outer activity table only.
     Scoped via > table to avoid affecting the nested conversations table inside expanded rows. */
  & > table {
    table-layout: fixed;
    width: 100%;
  }
  /* Credits (2nd-to-last) is narrow — short numeric values; Goal
     (3rd-to-last) gets double the share of a regular column so long
     goal descriptions have room to breathe. Plain percentages (not
     calc()) are required here — Chrome/Safari ignore differing calc()
     widths under table-layout: fixed and flatten them to equal columns. */
  /* Column width weights: Goal gets 3×, all other non-Credits columns
     get 1×. Credits is pinned to a narrow 6%. Share formula keeps the
     row at exactly 100% regardless of columnCount.
       shares = (columnCount - 2) others + 3 (Goal) = columnCount + 1
       one share = 94% / (columnCount + 1) */
  & > table > thead > tr > th:not(:nth-last-child(2)):not(:nth-last-child(3)),
  & > table > tbody > tr > td:not(:nth-last-child(2)):not(:nth-last-child(3)) {
    width: ${r=>(94/(r.$columnCount+1)).toFixed(4)}%;
  }
  & > table > thead > tr > th:nth-last-child(3),
  & > table > tbody > tr > td:nth-last-child(3) {
    width: ${r=>(94/(r.$columnCount+1)*3).toFixed(4)}%;
  }
  & > table > thead > tr > th:nth-last-child(2),
  & > table > tbody > tr > td:nth-last-child(2) {
    width: 6%;
  }
`,nI=h.tr`
  background: var(--color-bg-primary, #fff);
`,rI=h.td`
  text-align: center;
  color: var(--color-content-tertiary, #87919f);
  padding: 32px 16px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
`,Qr=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
`;h.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4, 16px);
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;h.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  color: var(--color-content-primary, #151515);
`;const oI=h.a`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  color: var(--color-content-link, #446cff);
  text-decoration: none;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  &:hover { text-decoration: underline; }
`,sI=h(jo)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,iI=h.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--color-bg-tertiary, #f1f2f4);
`,aI=h.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,lI=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  min-width: 0;
`,wg=h.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  color: var(--color-content-tertiary, #87919f);
  flex-shrink: 0;
  &:hover { color: var(--color-content-primary, #151515); }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;h.td`
  padding: var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  vertical-align: top;
`;h.td`
  padding: var(--space-6, 24px) var(--space-6, 24px) var(--space-6, 24px) var(--space-5, 20px);
  background: var(--color-bg-secondary, #f6f7f9);
  vertical-align: top;
`;const jg=h.td`
  padding: var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  vertical-align: top;
`,bg=h.div`
  display: grid;
  grid-template-columns: ${r=>r.$stacked?"1fr":"1fr 1fr"};
  gap: var(--space-6, 24px);
  align-items: start;
`,kg=h.td`
  padding: 0 var(--space-6, 24px) var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
`,Dl=h.p`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-content-secondary, #475569);
`,cI=h.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  /* Fixed-width tags so ✓, single digits, and double digits all align */
  & > span {
    min-width: 28px;
    justify-content: center;
    text-align: center;
  }
`,_g=h.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
  &:hover { color: var(--color-content-secondary, #475569); }
`,Cg=h.div`
  background: var(--color-bg-tertiary, #f1f2f4);
  border-radius: var(--radius-md, 8px);
  padding: var(--space-4, 16px);
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-content-secondary, #475569);
  white-space: pre-wrap;
`,Sg=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`,Mg=h.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,dI=h.div`
  /* Override alloy table backgrounds so the conversations table blends with the expanded row bg */
  table, thead, tbody, tr, th, td {
    background: transparent !important;
  }
`,Ig=h.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`,Ng=h.li`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: var(--space-2, 8px);
  align-items: baseline;
  padding: var(--space-2, 8px) 0;
  position: relative;
  &:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 28px;
    bottom: -8px;
    width: 1px;
    background: var(--color-border-opaque, #e8eaee);
  }
`,Lg=h.span`
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 11px;
  color: var(--color-content-tertiary, #87919f);
  white-space: nowrap;
  text-align: left;
`,Tg=h.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-content-secondary, #475569);
`;function uI({steps:r}){return t.jsx(Ig,{"aria-label":"Execution steps",children:r.map((s,i)=>{const{color:l,label:c}=JM[s.toolCategory];return t.jsxs(Ng,{children:[t.jsx(Lg,{children:QM(s.offsetMs)}),t.jsx(Tg,{children:s.description}),t.jsx(mt,{variant:"subtle",color:l,size:"sm",children:c})]},i)})})}const pI=h(Ig)`
  padding-left: 56px;
`;function fI({thread:r}){return t.jsx(pI,{"aria-label":"Conversation turns",children:r.map((s,i)=>{const l=s.role==="agent";return t.jsxs(Ng,{children:[t.jsx(Lg,{children:l?"Agent":"User"}),t.jsx(Tg,{children:s.content})]},i)})})}function hI({record:r}){if(r.deploymentType==="engage_less"){const p=r;return p.status==="success"?t.jsx(mt,{variant:"subtle",color:"green",size:"sm",children:t.jsx(br,{size:12})}):p.status==="in_progress"?t.jsx(mt,{variant:"subtle",color:"neutral",size:"sm",children:t.jsx(Zl,{size:12})}):null}const s=r,i=s.conversations.filter(p=>p.outcome==="goal_achieved").length,l=s.conversations.filter(p=>p.outcome==="completed_no_action").length,c=s.conversations.filter(p=>p.outcome==="in_progress").length;return t.jsxs(t.Fragment,{children:[c>0&&t.jsx(mt,{variant:"subtle",color:"blue",size:"sm",children:c}),l>0&&t.jsx(mt,{variant:"subtle",color:"neutral",size:"sm",children:l}),i>0&&t.jsx(mt,{variant:"subtle",color:"green",size:"sm",children:i}),i===0&&l===0&&c===0&&t.jsx(mt,{variant:"subtle",color:"neutral",size:"sm",children:"0"})]})}function mI({outcome:r}){switch(r){case"goal_achieved":return t.jsx(_s,{size:"sm",status:"success",children:"Goal Achieved"});case"completed_no_action":return t.jsx(_s,{size:"sm",status:"neutral",children:"Completed No Action"});case"in_progress":return t.jsx(_s,{size:"sm",status:"info",children:"In Progress"});default:return null}}function gI({record:r,mainColSpan:s,totalCols:i}){const[l,c]=x.useState(null),[p,f]=x.useState(!1),v=Ju("(max-width: 1023px)"),g=kr.find(b=>b.id===r.specialistId),w=b=>{c(L=>L===b?null:b)},y=t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[t.jsxs(Qr,{children:[t.jsx(Zn,{children:"Goal"}),t.jsx(Dl,{children:r.goal})]}),t.jsxs(Qr,{children:[t.jsx(Zn,{children:"Summary"}),t.jsx(Dl,{children:r.outcomeSummaryFull})]})]}),_=t.jsxs(Qr,{children:[t.jsx(Zn,{children:"Conversations"}),t.jsx(dI,{children:t.jsxs(Vl,{size:"sm",children:[t.jsx(Gl,{children:t.jsxs(So,{hoverable:!1,children:[t.jsx(In,{children:"User"}),t.jsx(In,{children:"Outcome"})]})}),t.jsx(ql,{children:r.conversations.map(b=>t.jsxs(Tn.Fragment,{children:[t.jsxs(So,{children:[t.jsx(Nn,{children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},onClick:()=>w(b.id),role:"button","aria-expanded":l===b.id,children:[t.jsx(wg,{as:"span",style:{cursor:"inherit"},children:l===b.id?t.jsx(An,{size:12}):t.jsx(ir,{size:12})}),t.jsx(iI,{src:XM(b.contactName),alt:""}),t.jsx(jo,{children:b.contactName})]})}),t.jsx(Nn,{children:t.jsx(mI,{outcome:b.outcome})})]}),l===b.id&&t.jsx("tr",{children:t.jsx("td",{colSpan:2,style:{padding:"0 16px 16px"},children:t.jsx(fI,{thread:b.thread})})})]},b.id))})]})})]});return t.jsxs(t.Fragment,{children:[t.jsx("tr",{children:t.jsx(jg,{colSpan:i,children:t.jsxs(bg,{$stacked:v,children:[y,_]})})}),t.jsx("tr",{children:t.jsx(kg,{colSpan:i,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[t.jsxs(Qr,{children:[t.jsxs(_g,{onClick:()=>f(!p),children:[p?t.jsx(An,{size:12}):t.jsx(ir,{size:12}),"System Prompt"]}),p&&g&&t.jsx(Cg,{children:g.configuration.instructions})]}),t.jsxs(Sg,{children:[t.jsx(Fe,{size:"sm",variant:"secondary",onClick:()=>{},children:"Recalculate Outcome"}),t.jsxs(Mg,{children:["Last calculated ",fp(pp.toISOString())]})]})]})})})]})}function xI({record:r,totalCols:s}){const[i,l]=x.useState(!1),c=Ju("(max-width: 1023px)"),p=kr.find(g=>g.id===r.specialistId),f=t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[t.jsxs(Qr,{children:[t.jsx(Zn,{children:"Goal"}),t.jsx(Dl,{children:r.goal})]}),t.jsxs(Qr,{children:[t.jsx(Zn,{children:"Summary"}),t.jsx(Dl,{children:r.outcomeSummaryFull})]})]}),v=t.jsxs(Qr,{children:[t.jsx(Zn,{children:"Span details"}),t.jsx(uI,{steps:r.steps})]});return t.jsxs(t.Fragment,{children:[t.jsx("tr",{children:t.jsx(jg,{colSpan:s,children:t.jsxs(bg,{$stacked:c,children:[f,v]})})}),t.jsx("tr",{children:t.jsx(kg,{colSpan:s,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[t.jsxs(Qr,{children:[t.jsxs(_g,{onClick:()=>l(!i),children:[i?t.jsx(An,{size:12}):t.jsx(ir,{size:12}),"System Prompt"]}),i&&p&&t.jsx(Cg,{children:p.configuration.instructions})]}),t.jsxs(Sg,{children:[t.jsx(Fe,{size:"sm",variant:"secondary",onClick:()=>{},children:"Recalculate Outcome"}),t.jsxs(Mg,{children:["Last calculated ",fp(pp.toISOString())]})]})]})})})]})}function vI({record:r,expanded:s,onToggle:i,showPersonaColumn:l}){const c=r.deploymentType==="engage",p=l?6:5,f=p-1;return t.jsxs(t.Fragment,{children:[t.jsxs(So,{hoverable:!0,children:[t.jsx(Nn,{children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(wg,{"aria-label":s?"Collapse row":"Expand row","aria-expanded":s,onClick:i,children:s?t.jsx(An,{size:14}):t.jsx(ir,{size:14})}),t.jsx(jo,{variant:"secondary",title:fp(r.timestamp),children:YM(r.timestamp)})]})}),l&&t.jsx(Nn,{children:t.jsxs(lI,{children:[t.jsx(aI,{"aria-hidden":"true",children:t.jsx(El,{personaName:r.personaName,size:24})}),t.jsx(jo,{children:r.personaName})]})}),t.jsx(Nn,{children:t.jsx(oI,{href:r.workflow.href,onClick:v=>v.stopPropagation(),title:r.workflow.name,children:r.workflow.name})}),t.jsx(Nn,{children:t.jsx(sI,{variant:"secondary",title:r.goal,children:r.goal})}),t.jsx(Nn,{children:t.jsx(jo,{variant:"secondary",children:KM(r.creditsUsed)})}),t.jsx(Nn,{align:"right",children:t.jsx(cI,{style:{justifyContent:"flex-end"},children:t.jsx(hI,{record:r})})})]}),s&&(c?t.jsx(gI,{record:r,mainColSpan:f,totalCols:p}):t.jsx(xI,{record:r,totalCols:p}))]})}const yI=[{value:"all",label:"All Personas"},...kr.map(r=>({value:r.id,label:r.name}))],wI=[{value:"all",label:"All Types"},{value:"engage",label:"Engage"},{value:"engage_less",label:"Engage-less"}],jI=[{value:"all",label:"All Outcomes"},{value:"success",label:"Success"},{value:"in_progress",label:"In Progress"}],bI=[{value:"all",label:"All Sources"},{value:"workflow",label:"Workflow"},{value:"ponder",label:"Ponder"}];function kI(r,s){if(s==="all")return!0;if(r.deploymentType==="engage_less"){const l=r;return s==="success"?l.status==="success":s==="in_progress"?l.status==="in_progress":!0}const i=r;if(s==="success")return i.conversations.some(l=>l.outcome==="goal_achieved");if(s==="in_progress"){const l=i.conversations.some(p=>p.outcome==="goal_achieved"),c=i.conversations.some(p=>p.outcome==="in_progress");return!l&&c}return!0}function Ag({specialistId:r,timeRange:s,deploymentTypeFilter:i="all",records:l,showFilters:c=!0}){const[p,f]=x.useState("all"),[v,g]=x.useState("all"),[w,y]=x.useState("all"),[_,b]=x.useState("all"),[L,E]=x.useState(null),I=x.useMemo(()=>{const j=Kr(s),$=l??Di.filter(F=>(!r||F.specialistId===r)&&(i==="all"||F.deploymentType===i));return Mn($,j).sort((F,z)=>new Date(z.timestamp).getTime()-new Date(F.timestamp).getTime())},[r,s,i,l]),N=x.useMemo(()=>I.filter(j=>p==="all"||j.specialistId===p).filter(j=>v==="all"||j.deploymentType===v).filter(j=>kI(j,w)).filter(j=>_==="all"||j.activatedBy===_),[I,p,v,w,_]),C=!r,T=!r,k=T?6:5;return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3, 12px)"},children:[c&&t.jsxs(eI,{children:[C&&t.jsx("div",{style:{width:160},children:t.jsx(Ln,{size:"sm",options:yI,value:p,onChange:f})}),t.jsx("div",{style:{width:150},children:t.jsx(Ln,{size:"sm",options:wI,value:v,onChange:g})}),t.jsx("div",{style:{width:150},children:t.jsx(Ln,{size:"sm",options:jI,value:w,onChange:y})}),t.jsx("div",{style:{width:150},children:t.jsx(Ln,{size:"sm",options:bI,value:_,onChange:b})})]}),t.jsx(tI,{$columnCount:k,children:t.jsxs(Vl,{size:"sm",children:[t.jsx(Gl,{children:t.jsxs(So,{hoverable:!1,children:[t.jsx(In,{children:"Time"}),T&&t.jsx(In,{children:"Persona"}),t.jsx(In,{children:"Workflow"}),t.jsx(In,{children:"Goal"}),t.jsx(In,{children:"Credits"}),t.jsx(In,{align:"right",children:"Outcome"})]})}),t.jsx(ql,{children:N.length===0?t.jsx(nI,{children:t.jsx(rI,{colSpan:k,children:"No activity matches the current filters."})}):N.map(j=>t.jsx(vI,{record:j,expanded:L===j.id,onToggle:()=>E($=>$===j.id?null:j.id),showPersonaColumn:T},j.id))})]})})]})}const _I=Array.from(new Set(kr.map(r=>r.role)));function CI(){return t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[t.jsx("path",{d:"M2 11.5L2.5 14l2.5-.5L13.414 5.086a1 1 0 0 0 0-1.414L12.328 2.586a1 1 0 0 0-1.414 0L2 11.5Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),t.jsx("path",{d:"M10 4l2 2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}const SI=[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],_0="edit-persona-form",MI=vk`
  [role="dialog"][aria-label="Edit Persona"] > div {
    overflow: visible !important;
  }
`,C0=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  min-height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`,II=h.div`
  position: relative;
  background: var(--color-bg-secondary, #f6f7f9);
  border-radius: var(--radius-lg, 12px);
  padding: 20px;
  overflow: hidden;
  isolation: isolate;
`,NI=h.div`
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  aspect-ratio: 1 / 1;
  z-index: 0;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`,LI=h.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 60%;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    to right,
    var(--color-bg-secondary, #f6f7f9) 0%,
    rgba(246, 247, 249, 0.85) 35%,
    rgba(246, 247, 249, 0) 100%
  );
`,TI=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  width: 60%;
  min-width: 0;
`,AI=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,EI=h.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--color-content-primary, #151515);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$I=h.div`
  display: inline-flex;
  align-items: center;
  height: 20px;
  border: 1px solid var(--color-border-opaque, #cbd0d7);
  border-radius: var(--radius-button, 6px);
  overflow: hidden;
  flex-shrink: 0;
`,PI=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
`,RI=h.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #2b333f);
  padding-right: 6px;
  white-space: nowrap;
`,DI=h.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-content-secondary, #475569);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,zI=h.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-tertiary, #87919f);
`,FI=h.button`
  all: unset;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  cursor: pointer;
  flex-shrink: 0;
  color: var(--color-content-tertiary, #87919f);
  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
    color: var(--color-content-primary, #151515);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,BI=h.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`,OI=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-4, 16px);
`,HI=h.div`
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg, 12px);
  background: var(--color-bg-secondary, #f6f7f9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
`,WI=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,UI=h.div`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-primary, #151515);
`,VI=h.div`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-xs, 12px);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--line-height-normal, 1.5);
  color: var(--color-content-tertiary, #87919f);
`,GI=h.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-link, #446cff);
  cursor: pointer;
  &:hover { text-decoration: underline; }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
    border-radius: var(--radius-sm, 4px);
  }
`;h.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
  margin-bottom: -8px;
`;const qI=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5, 20px);
`,ZI=h.a`
  color: var(--color-content-link, #446cff);
  text-decoration: none;
  font-weight: 500;
  &:hover { text-decoration: underline; }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
    border-radius: var(--radius-sm, 4px);
  }
`,YI=h.div`
  padding: 48px 0;
  text-align: center;
  font-size: 13px;
  color: var(--color-content-tertiary, #87919f);
`,KI=h.div`
  display: flex;
  gap: var(--space-1, 4px);
  border-bottom: 1px solid var(--color-border-secondary, #e2e4e8);
`,S0=h.button`
  all: unset;
  cursor: pointer;
  padding: var(--space-2, 8px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: ${r=>r.$active?600:400};
  line-height: 20px;
  color: ${r=>r.$active?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #87919f)"};
  border-bottom: 2px solid
    ${r=>r.$active?"var(--color-content-primary, #151515)":"transparent"};
  margin-bottom: -1px;
  transition: color 150ms ease, border-color 150ms ease;
  &:hover {
    color: var(--color-content-primary, #151515);
  }
`;function QI({personaId:r,onBack:s}){const i=kr.find(Q=>Q.id===r),[l,c]=x.useState((i==null?void 0:i.name)??""),[p,f]=x.useState(i!=null&&i.role?[i.role]:[]),[v,g]=x.useState((i==null?void 0:i.description)??""),[w,y]=x.useState((i==null?void 0:i.voice)??"alloy"),[_,b]=x.useState(!1),[L,E]=x.useState("activities"),[I,N]=x.useState("7d"),[C,T]=x.useState(""),[k,j]=x.useState([]),[$,F]=x.useState("alloy"),[z,B]=x.useState("");if(!i)return t.jsx(C0,{children:t.jsx("p",{children:"Specialist not found."})});const le=w.charAt(0).toUpperCase()+w.slice(1);function ce(){T(l),j(p),F(w),B(v),b(!0)}function X(Q){Q.preventDefault(),c(C),f(k),g(z),y($),b(!1)}const q=IM.filter(Q=>Q.personaId===r);return t.jsxs(C0,{children:[t.jsxs(II,{children:[t.jsxs(TI,{children:[t.jsxs(AI,{children:[t.jsx(EI,{children:l}),t.jsxs($I,{children:[t.jsx(PI,{children:t.jsx(Ml,{size:12})}),t.jsx(RI,{children:le})]}),t.jsx(FI,{"aria-label":"Edit specialist",onClick:ce,children:t.jsx(CI,{})})]}),t.jsx(DI,{children:p.join(" · ")}),t.jsx(zI,{children:v})]}),t.jsx(NI,{"aria-hidden":"true",children:t.jsx(El,{personaId:r,size:240})}),t.jsx(LI,{"aria-hidden":"true"})]}),_&&t.jsx(MI,{}),t.jsxs(zu,{open:_,onClose:()=>b(!1),size:"md","aria-label":"Edit Persona",children:[t.jsx(Ol,{onClose:()=>b(!1),children:"Edit Persona"}),t.jsx(Hl,{style:{overflow:"visible"},children:t.jsxs(BI,{id:_0,onSubmit:X,children:[t.jsxs(OI,{children:[t.jsx(HI,{children:t.jsx(El,{personaId:r,size:64})}),t.jsxs(WI,{children:[t.jsx(UI,{children:"Profile image"}),t.jsx(VI,{children:"Recommended: 256×256px, PNG or JPG"}),t.jsx(GI,{type:"button",children:"Upload image"})]})]}),t.jsx(Ns,{label:"Name",required:!0,value:C,onChange:Q=>T(Q.target.value),placeholder:"e.g. HR Assistant"}),t.jsx(Ln,{label:"Voice",required:!0,size:"sm",leadingIcon:t.jsx(Ml,{size:14}),options:SI,value:$,onChange:F,placeholder:"Select a voice…"}),t.jsx(MM,{label:"Role",required:!0,value:k,onChange:j,suggestions:_I,placeholder:"Add a role tag…"}),t.jsx(Bu,{label:"Description",required:!0,value:z,onChange:Q=>B(Q.target.value),placeholder:"e.g. Answers employee questions about benefits and policies.",rows:3})]})}),t.jsxs(Wl,{children:[t.jsx(Fe,{variant:"destructive-secondary",size:"sm",style:{marginRight:"auto"},children:"Delete Persona"}),t.jsx(Fe,{variant:"secondary",size:"sm",onClick:()=>b(!1),children:"Cancel"}),t.jsx(Fe,{variant:"primary",size:"sm",type:"submit",form:_0,children:"Save"})]})]}),t.jsx(ZM,{personaId:r}),t.jsxs(qI,{children:[t.jsxs(KI,{children:[t.jsx(S0,{$active:L==="activities",onClick:()=>E("activities"),children:"Activities"}),t.jsx(S0,{$active:L==="deployments",onClick:()=>E("deployments"),children:"Deployments"})]}),L==="deployments"&&t.jsx(t.Fragment,{children:q.length===0?t.jsx(YI,{children:"This persona hasn't been added to any workflows yet."}):t.jsxs(Vl,{size:"md",children:[t.jsx(Gl,{children:t.jsxs(So,{hoverable:!1,children:[t.jsx(In,{children:"Workflow"}),t.jsx(In,{children:"Type"}),t.jsx(In,{children:"Status"})]})}),t.jsx(ql,{children:q.map(Q=>t.jsxs(So,{children:[t.jsx(Nn,{children:t.jsx(ZI,{href:Q.workflow.href,children:t.jsx(jo,{children:Q.workflow.name})})}),t.jsx(Nn,{children:t.jsx(mt,{size:"sm",color:Q.type==="engage"?"purple":"grey",children:Q.type==="engage"?"Engage":"Engage-less"})}),t.jsx(Nn,{children:t.jsx(_s,{size:"sm",status:Q.status==="active"?"success":"warning",children:Q.status==="active"?"Active":"Paused"})})]},Q.id))})]})}),L==="activities"&&t.jsx(Ag,{specialistId:r,timeRange:I})]})]})}const XI=h.div`
  position: relative;
  width: 100%;
  height: ${r=>r.$height}px;
`,JI=h.svg`
  display: block;
  font-family: var(--font-sans, Geist, sans-serif);
`,eN=h.line`
  stroke: var(--color-border-opaque, #e8eaee);
  stroke-width: 1;
  /* Match the morph duration + eased curve for a synchronized feel. */
  transition: y1 620ms cubic-bezier(0.77, 0, 0.175, 1),
              y2 620ms cubic-bezier(0.77, 0, 0.175, 1);
`,M0=h.text`
  fill: var(--color-content-tertiary, #87919f);
  font-size: 11px;
  transition: x 620ms cubic-bezier(0.77, 0, 0.175, 1),
              y 620ms cubic-bezier(0.77, 0, 0.175, 1);
`,I0="#8c4fe2",Eu="#446cff",tN=h.path`
  fill: none;
  stroke: url(#chart-stroke);
  stroke-width: 2.5;
  stroke-linejoin: miter;
  stroke-linecap: butt;
`,nN=h.rect`
  fill: url(#chart-fill);
`,rN=h.circle`
  fill: ${Eu};
  stroke: var(--color-bg-primary, #ffffff);
  stroke-width: 2;
`,oN=h.rect`
  fill: transparent;
  cursor: pointer;
`,sN=h.div`
  position: absolute;
  left: ${r=>r.$x}px;
  top: ${r=>r.$y}px;
  transform: translate(-50%, calc(-100% - 10px));
  background: var(--color-bg-always-dark, #0f172a);
  color: var(--color-bg-always-light, #ffffff);
  padding: var(--space-2, 8px) var(--space-3, 12px);
  border-radius: var(--radius-md, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: var(--shadow-below-md, 0 4px 12px rgba(0, 0, 0, 0.15));
  z-index: var(--z-tooltip, 999);
`,iN=h.div`
  font-weight: 600;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.65);
`,xu=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  font-size: 11px;
  color: var(--color-bg-always-light, #ffffff);
`;function vu(r){return r>=1e6?`${(r/1e6).toFixed(1)}M`:r>=1e3?`${(r/1e3).toFixed(r>=1e4?0:1)}k`:r.toLocaleString("en-US")}function aN(r){return r===0?"$0":r>=1e6?`$${(r/1e6).toFixed(1)}M`:r>=1e3?`$${Math.round(r/1e3)}K`:`$${Math.round(r)}`}function lN(r){if(r===0)return 0;const s=Math.pow(10,Math.floor(Math.log10(r))),i=[1,1.2,1.5,1.6,1.8,2,2.2,2.4,2.5,2.8,3,3.2,3.5,4,4.5,5,6,7,8,9,10],l=r/s;for(const c of i)if(c>=l)return c*s;return 10*s}function N0(r,s){if(r.length===0)return new Array(s).fill(0);if(r.length===s)return r.slice();const i=[];for(let l=0;l<s;l++){const c=s===1?0:l/(s-1)*(r.length-1),p=Math.floor(c),f=Math.min(p+1,r.length-1),v=c-p;i.push(r[p]+(r[f]-r[p])*v)}return i}const cN=r=>r<.5?8*r*r*r*r:1-Math.pow(-2*r+2,4)/2;function dN({data:r,height:s=220}){const i=x.useRef(null),[l,c]=x.useState(600),[p,f]=x.useState(null);x.useEffect(()=>{if(!i.current)return;const P=new ResizeObserver(M=>{for(const D of M){const re=D.contentRect.width;re>0&&c(re)}});return P.observe(i.current),()=>P.disconnect()},[]);const[v,g]=x.useState(1),w=x.useRef(r),y=x.useRef(r);x.useEffect(()=>{var J;if(y.current===r)return;if(w.current=y.current,y.current=r,typeof window<"u"&&((J=window.matchMedia)!=null&&J.call(window,"(prefers-reduced-motion: reduce)").matches)){g(1);return}const P=performance.now(),M=620;g(0);let D;const re=G=>{const te=Math.min(1,(G-P)/M);g(cN(te)),te<1&&(D=requestAnimationFrame(re))};return D=requestAnimationFrame(re),()=>cancelAnimationFrame(D)},[r]);const _=v<1?w.current:r,b=44,L=0,E=20,I=20,N=Math.max(l-b-L,1),C=s-E-I,T=Math.max(_.length,r.length),k=N0(_.map(P=>P.hasData?P.max:0),T),j=N0(r.map(P=>P.hasData?P.max:0),T),$=k.map((P,M)=>P+(j[M]-P)*v),F=Math.max(...$,0),z=F>0?lN(F):10,B=4,le=Array.from({length:B+1},(P,M)=>z*M/B),ce=P=>E+C-P/z*C,X=N/T,q=P=>b+X*P,Q=P=>b+X*(P+1),ge=(()=>{if($.length===0)return"";const P=[];return $.forEach((M,D)=>{const re=ce(M),J=q(D),G=Q(D);P.push(`M ${J} ${re}`),P.push(`L ${G} ${re}`)}),P.join(" ")})(),Y=[];$.forEach((P,M)=>{if(P<=0)return;const D=ce(P),re=q(M),J=Q(M);Y.push({x:re,y:D,width:Math.max(J-re,0),height:E+C-D})});const Z=N/r.length,se=P=>b+Z*P,V=P=>b+Z*(P+.5),H=p!==null?r[p]:null;return t.jsxs(XI,{ref:i,$height:s,children:[t.jsxs(JI,{width:l,height:s,viewBox:`0 0 ${l} ${s}`,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"chart-stroke",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:I0}),t.jsx("stop",{offset:"100%",stopColor:Eu})]}),t.jsxs("linearGradient",{id:"chart-fill",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:I0,stopOpacity:"0.3"}),t.jsx("stop",{offset:"100%",stopColor:Eu,stopOpacity:"0"})]})]}),le.map((P,M)=>t.jsxs("g",{children:[t.jsx(eN,{x1:0,x2:l-L,y1:ce(P),y2:ce(P)}),t.jsx(M0,{x:0,y:ce(P)-6,textAnchor:"start",children:aN(P)})]},`t-${M}`)),Y.map((P,M)=>t.jsx(nN,{x:P.x,y:P.y,width:P.width,height:P.height},`b-${M}`)),ge&&t.jsx(tN,{d:ge}),H&&p!==null&&H.hasData&&v===1&&t.jsx(rN,{cx:V(p),cy:ce(H.max),r:4}),v===1&&r.map((P,M)=>t.jsx(oN,{x:se(M),y:E,width:Z,height:C,onMouseEnter:()=>P.hasData&&f(M),onMouseLeave:()=>f(null)},`hit-${M}`)),(()=>{const M=Math.max(1,Math.ceil(45/Z)),D=r.length-1;return r.map((re,J)=>{const G=J===0,te=J===D;if(!(G||te)&&J%M!==0)return null;const be=G?b:te?l-L:V(J),Me=G?"start":te?"end":"middle";return t.jsx(M0,{x:be,y:s-I+18,textAnchor:Me,children:re.label},`xl-${J}`)})})()]}),H&&p!==null&&H.hasData&&v===1&&t.jsxs(sN,{$x:V(p),$y:ce(H.max),children:[t.jsx(iN,{children:H.label}),H.min===H.max?t.jsxs(xu,{children:[vu(H.min)," credits"]}):t.jsxs(xu,{children:[vu(H.min)," – ",vu(H.max)," credits"]}),t.jsxs(xu,{children:[H.count," ",H.count===1?"run":"runs"]})]})]})}const uN=h.div`
  position: relative;
  width: 100%;
  height: ${r=>r.$height}px;
`,pN=h.svg`
  display: block;
  font-family: var(--font-sans, Geist, sans-serif);
`,fN=h.line`
  stroke: var(--color-border-opaque, #e8eaee);
  stroke-width: 1;
`,L0=h.text`
  fill: var(--color-content-tertiary, #87919f);
  font-size: 11px;
`,T0="#8c4fe2",$u="#446cff",hN=h.path`
  fill: none;
  stroke: url(#timesaved-stroke);
  stroke-width: 2.5;
  stroke-linejoin: miter;
  stroke-linecap: butt;
`,mN=h.rect`
  fill: url(#timesaved-fill);
`,gN=h.circle`
  fill: ${$u};
  stroke: var(--color-bg-primary, #ffffff);
  stroke-width: 2;
`,xN=h.rect`
  fill: transparent;
  cursor: pointer;
`,vN=h.div`
  position: absolute;
  left: ${r=>r.$x}px;
  top: ${r=>r.$y}px;
  transform: translate(-50%, calc(-100% - 10px));
  background: var(--color-bg-always-dark, #0f172a);
  color: var(--color-bg-always-light, #ffffff);
  padding: var(--space-2, 8px) var(--space-3, 12px);
  border-radius: var(--radius-md, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: var(--shadow-below-md, 0 4px 12px rgba(0, 0, 0, 0.15));
  z-index: var(--z-tooltip, 999);
`,yN=h.div`
  font-weight: 600;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.65);
`,wN=h.div`
  font-size: 11px;
  color: var(--color-bg-always-light, #ffffff);
`;function jN(r,s){if(s==="hour"){const l=r/36e5;return l===0?"0h":l>=10?`${Math.round(l)}h`:`${l.toFixed(1)}h`}const i=r/6e4;return i===0?"0m":`${Math.round(i)}m`}function bN(r){if(r<6e4)return`${Math.round(r/1e3)}s`;const s=Math.round(r/6e4);if(s<60)return`${s} min`;const i=Math.floor(s/60),l=s%60;return l===0?`${i}h`:`${i}h ${l}m`}function kN(r){if(r===0)return 0;const s=Math.pow(10,Math.floor(Math.log10(r))),i=[1,1.2,1.5,1.6,1.8,2,2.2,2.4,2.5,2.8,3,3.2,3.5,4,4.5,5,6,7,8,9,10],l=r/s;for(const c of i)if(c>=l)return c*s;return 10*s}function _N({data:r,unit:s,height:i=200}){const l=x.useRef(null),[c,p]=x.useState(600),[f,v]=x.useState(null);x.useEffect(()=>{if(!l.current)return;const q=new ResizeObserver(Q=>{for(const ge of Q){const Y=ge.contentRect.width;Y>0&&p(Y)}});return q.observe(l.current),()=>q.disconnect()},[]);const g=44,w=0,y=20,_=20,b=Math.max(c-g-w,1),L=i-y-_,E=r.map(q=>q.savedMs),I=Math.max(0,...E),N=s==="hour"?36e5:5*6e4,C=I>0?kN(I):N,T=4,k=Array.from({length:T+1},(q,Q)=>C*Q/T),j=q=>y+L-q/C*L,$=b/Math.max(1,r.length),F=q=>g+$*q,z=q=>g+$*(q+1),B=q=>g+$*(q+.5),le=(()=>{if(r.length===0)return"";const q=[];return r.forEach((Q,ge)=>{const Y=j(Q.savedMs),Z=F(ge),se=z(ge);q.push(`M ${Z} ${Y}`),q.push(`L ${se} ${Y}`)}),q.join(" ")})(),ce=[];r.forEach((q,Q)=>{if(q.savedMs<=0)return;const ge=j(q.savedMs),Y=F(Q),Z=z(Q);ce.push({x:Y,y:ge,width:Math.max(Z-Y,0),height:y+L-ge})});const X=f!==null?r[f]:null;return t.jsxs(uN,{ref:l,$height:i,children:[t.jsxs(pN,{width:c,height:i,viewBox:`0 0 ${c} ${i}`,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"timesaved-stroke",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:T0}),t.jsx("stop",{offset:"100%",stopColor:$u})]}),t.jsxs("linearGradient",{id:"timesaved-fill",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:T0,stopOpacity:"0.3"}),t.jsx("stop",{offset:"100%",stopColor:$u,stopOpacity:"0"})]})]}),k.map((q,Q)=>t.jsxs("g",{children:[t.jsx(fN,{x1:0,x2:c-w,y1:j(q),y2:j(q)}),t.jsx(L0,{x:0,y:j(q)-6,textAnchor:"start",children:jN(q,s)})]},`t-${Q}`)),ce.map((q,Q)=>t.jsx(mN,{x:q.x,y:q.y,width:q.width,height:q.height},`b-${Q}`)),le&&t.jsx(hN,{d:le}),X&&f!==null&&X.savedMs>0&&t.jsx(gN,{cx:B(f),cy:j(X.savedMs),r:4}),r.map((q,Q)=>t.jsx(xN,{x:F(Q),y,width:$,height:L,onMouseEnter:()=>v(Q),onMouseLeave:()=>v(null)},`hit-${Q}`)),(()=>{const Q=Math.max(1,Math.ceil(45/$)),ge=r.length-1;return r.map((Y,Z)=>{const se=Z===0,V=Z===ge;if(!(se||V)&&Z%Q!==0)return null;const P=se?g:V?c-w:B(Z),M=se?"start":V?"end":"middle";return t.jsx(L0,{x:P,y:i-_+18,textAnchor:M,children:Y.label},`xl-${Z}`)})})()]}),X&&f!==null&&X.savedMs>0&&t.jsxs(vN,{$x:B(f),$y:j(X.savedMs),children:[t.jsx(yN,{children:X.label}),t.jsxs(wN,{children:[bN(X.savedMs)," saved"]})]})]})}function A0(r){return`${Math.round(r)}%`}function CN(r,s){if(r===0)return 0;const i=r/Math.max(1,s);return i<=.25?1:i<=.5?2:i<=.75?3:4}function E0(r){const s=Math.max(0,Math.min(100,r))/100,i=Math.round(140+-72*s),l=Math.round(79+29*s),c=Math.round(226+29*s);return`rgb(${i}, ${l}, ${c})`}function SN(r){if(r<=0)return"0 min";const s=Math.round(r/6e4);if(s<60)return`${s} min`;const i=Math.floor(s/60),l=s%60;return i<24?l===0?`${i}h`:`${i}h ${l}m`:`${i} hours`}function MN(r){return r<1?"$0":r<1e3?`$${Math.round(r).toLocaleString("en-US")}`:`$${Math.round(r).toLocaleString("en-US")}`}const $0=Co.filter(r=>r.source==="historical").length,P0=Co.filter(r=>r.source==="estimate").length;function yu(r){return r==="all"?"month":"day"}function vs(r,s){return s==="month"?r.toISOString().slice(0,7):r.toISOString().slice(0,10)}function fl(r,s){return s==="month"?r.toLocaleDateString("en-US",{month:"short",year:"2-digit"}):r.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function wu(r,s,i){const l=[],c=new Date(r),p=new Date(s);if(i==="month")for(c.setUTCDate(1),c.setUTCHours(0,0,0,0),p.setUTCDate(1),p.setUTCHours(0,0,0,0);c<=p;)l.push(new Date(c)),c.setUTCMonth(c.getUTCMonth()+1);else for(c.setUTCHours(0,0,0,0),p.setUTCHours(0,0,0,0);c<=p;)l.push(new Date(c)),c.setUTCDate(c.getUTCDate()+1);return l}function hl({current:r,prior:s,invertDirection:i=!1}){const l=vg(r,s);if(l===null)return null;const c=l>0,p=c?"up":"down",f=i?!c:c,v=Math.abs(l)<.5?void 0:f?"positive":"negative",g=`${l>0?"+":""}${Math.abs(l).toFixed(1)}%`;return t.jsx(Bl,{mode:"trend",value:g,trend:p,severity:v})}const IN=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
`,NN=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,LN=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  font-family: var(--font-sans);
  font-size: var(--text-xs);  /* 12px — Alloy paragraph-sm */
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,TN=h.div`
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background: var(--color-bg-primary);
`,AN=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,EN=h.span`
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,$N=h.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-sans);
  font-size: var(--text-xs);  /* 12px — Alloy paragraph-sm */
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,PN=3,Eg=`repeating-linear-gradient(
  to right,
  transparent 0,
  transparent 2px,
  var(--color-bg-primary, #fff) 2px,
  var(--color-bg-primary, #fff) ${PN}px
)`,RN=h.div`
  position: relative;
  width: 100%;
  height: 12px;
  /* Pull the bar up so the gap between the used/remaining labels and
     the track reads as 8px instead of the card's default 12px flex gap. */
  margin-top: -4px;
  background: ${Eg}, var(--color-bg-tertiary);
  border-radius: 0;
  overflow: hidden;
`,DN=h.div`
  position: absolute;
  inset: 0 auto 0 0;
  width: ${r=>r.$pct}%;
  background: ${Eg},
    var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%));
  border-radius: inherit;
`,zN=h.div`
  display: grid;
  /* minmax(0, 1fr) prevents columns from being expanded by wide chart
     content (default 1fr has a min of auto, which respects content size). */
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-4, 16px);
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,R0=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  flex-wrap: wrap;
`,D0=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);  /* 40px — Alloy heading-xl, matches HeroValue */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,FN=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);  /* 12px — Alloy paragraph-sm */
  color: var(--color-content-tertiary);
`;h.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  flex: 1;
  min-width: 140px;
`;h.li`
  display: grid;
  grid-template-columns: 10px 1fr auto;
  gap: var(--space-2, 8px);
  align-items: center;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  color: var(--color-content-secondary, #475569);
`;h.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${r=>r.$color};
`;h.span`
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;const BN=h.div`
  position: relative;
  display: flex;
  width: 100%;
  /* No fixed/min height — the bar grows to fill whatever space the card
     has left after the title + hero. Since the Goals card shares a row
     with Current Session (align-items: stretch), the bar ends up sized
     to match whatever vertical room the left card leaves behind. */
  min-height: 12px;
  flex: 1 1 auto;
  gap: 3px;
  /* Grey track — gaps between segments show this so the three
     outcome slices read as distinct chunks. */
  background: var(--color-bg-tertiary);
  border-radius: 0;
  overflow: hidden;
`,ON=h.div`
  width: ${r=>r.$pct}%;
  background: linear-gradient(to right, ${r=>r.$gradientStart}, ${r=>r.$gradientEnd});
  border-radius: 2px;
  opacity: ${r=>r.$muted?.2:1};
  transition: background 120ms ease, opacity 120ms ease, width 150ms ease;
  cursor: default;
  /* Hover: segment transforms to its labeled outcome color
     (green = achieved, slate = no action, blue = in progress) and
     pops back to full opacity. */
  &:hover {
    background: ${r=>r.$color};
    opacity: 1;
  }
`,z0=h.div`
  position: fixed;
  z-index: var(--z-tooltip, 999);
  background: var(--color-bg-always-dark, #0f172a);
  border-radius: var(--radius-md, 8px);
  padding: var(--space-2, 8px) var(--space-3, 12px);
  box-shadow: var(--shadow-below-md, 0 6px 16px rgba(0, 0, 0, 0.18));
  pointer-events: none;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  transform: translate(-50%, calc(-100% - 10px));
  font-family: var(--font-sans);
`,F0=h.span`
  font-size: var(--text-xs, 12px);
  color: rgba(255, 255, 255, 0.65);
`,B0=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-bg-always-light, #fff);
`,O0=h.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${r=>r.$color};
`,HN=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);  /* 40px — Alloy heading-xl */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`;h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;const hp=["var(--color-bg-tertiary, #f1f2f4)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%))"],WN=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
`,UN=h.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
`,VN=h.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 14px);
  grid-auto-columns: 14px;
  gap: 3px;
  flex-shrink: 0;
`,H0=h.div`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: ${r=>hp[r.$level]};
  transition: background 120ms ease;
`,GN=h.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: flex-end;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 12px);
  color: var(--color-content-tertiary);
  margin-top: var(--space-2, 8px);
`,Ci=h.span`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${r=>hp[r.$level]};
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;h.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--color-content-tertiary, #87919f);
`;h.span`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;h.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr);
  gap: var(--space-5, 20px);
  align-items: stretch;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;const ml=h.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  /* $secondary cards use the Alloy recessed surface token for a
     subtle tonal break from the default white cards around them. */
  background: ${r=>r.$secondary?"var(--color-bg-secondary, #f6f7f9)":"var(--color-bg-primary, #fff)"};
`,Si=h.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-primary, #151515);
`,Mi=h.p`
  margin: 0;
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,gl=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-size: 13px;
  color: var(--color-content-tertiary, #87919f);
`;h.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--space-4, 16px) var(--space-5, 20px);
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  }
`;h.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--color-content-tertiary, #87919f);
`;h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2, 8px);
`;h.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: var(--color-content-primary, #151515);
`;h.span`
  font-size: 12px;
  font-weight: 500;
  color: ${r=>r.$color};
`;h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: var(--space-4, 16px) var(--space-5, 20px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
`;h.svg`
  flex-shrink: 0;
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;const qN=h.h3`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,ZN=h.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,YN=h.div`
  margin-left: auto;
`,xl=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3, 12px);
`;h(am)`
  & > div[aria-hidden='true'] {
    background: linear-gradient(
      to right,
      rgba(140, 79, 226, 0.16),
      rgba(68, 108, 255, 0.16)
    );
    color: transparent;
  }
  & > div[aria-hidden='true'] svg path,
  & > div[aria-hidden='true'] svg circle,
  & > div[aria-hidden='true'] svg rect {
    stroke: url(#ai-gradient-stroke);
  }
`;function KN(){return t.jsx("svg",{width:"0",height:"0",style:{position:"absolute",width:0,height:0},"aria-hidden":"true",children:t.jsx("defs",{children:t.jsxs("linearGradient",{id:"ai-gradient-stroke",x1:"0",y1:"0",x2:"1",y2:"0",children:[t.jsx("stop",{offset:"0%",stopColor:"#8c4fe2"}),t.jsx("stop",{offset:"100%",stopColor:"#446cff"})]})})})}const QN=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-5, 20px) var(--space-6, 24px);
`,XN=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3, 12px);
  flex-wrap: wrap;
`,JN=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,eL=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xl, 20px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-secondary, #475569);
`,tL=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 12px);
  color: var(--color-content-tertiary, #87919f);
`,nL=[{value:"all",label:"All Types"},{value:"engage",label:"Engage"},{value:"engage_less",label:"Engage-less"}],rL=[{value:"all",label:"All Workflows"},...pe.map(r=>({value:r.id,label:r.name}))],oL=[{value:"all",label:"All Outcomes"},{value:"success",label:"Success"},{value:"in_progress",label:"In Progress"}],sL=[{value:"all",label:"All Sources"},{value:"workflow",label:"Workflow"},{value:"ponder",label:"Ponder"}];function iL(){const[r,s]=x.useState("7d"),[i,l]=x.useState("7d"),[c,p]=x.useState("7d"),[f,v]=x.useState("7d"),[g,w]=x.useState("all"),[y,_]=x.useState("all"),[b,L]=x.useState("all"),[E,I]=x.useState("all"),[N,C]=x.useState(null),[T,k]=x.useState(null),j=x.useMemo(()=>Di.filter(oe=>{if(g!=="all"&&oe.deploymentType!==g||y!=="all"&&oe.workflow.id!==y||E!=="all"&&oe.activatedBy!==E)return!1;if(b!=="all")if(oe.deploymentType==="engage_less"){const de=oe;if(b==="success"&&de.status!=="success"||b==="in_progress"&&de.status!=="in_progress")return!1}else{const de=oe;if(b==="success"&&!de.conversations.some(Ae=>Ae.outcome==="goal_achieved"))return!1;if(b==="in_progress"){const Ae=de.conversations.some(je=>je.outcome==="goal_achieved"),ye=de.conversations.some(je=>je.outcome==="in_progress");if(Ae||!ye)return!1}}return!0}),[g,y,b,E]),$=Kr(r),F=zi(r),z=x.useMemo(()=>Mn(j,$),[j,r]),B=x.useMemo(()=>Mn(j,F),[j,r]),le=Kr(i),ce=x.useMemo(()=>Mn(j,le),[j,i]),X=Kr(c),q=zi(c),Q=x.useMemo(()=>Mn(j,X),[j,c]),ge=x.useMemo(()=>Mn(j,q),[j,c]),Y="7d",Z=$l.filter(oe=>oe.period===Y),se=$l.filter(oe=>oe.period===`prior_${Y}`);Z.reduce((oe,de)=>oe+de.triggersReceived,0);const V=Z.reduce((oe,de)=>oe+de.triggersExecuted,0);se.reduce((oe,de)=>oe+de.triggersReceived,0);const H=se.reduce((oe,de)=>oe+de.triggersExecuted,0),P=Pl(Q),M=Pl(ge),D=Rl(Q),re=Rl(ge);z.filter(oe=>oe.steps.some(de=>de.toolCategory==="communication"&&de.channel==="chat")).length,z.filter(oe=>oe.steps.some(de=>de.toolCategory==="communication"&&(de.channel==="email"||de.channel==="sms"))).length,B.filter(oe=>oe.steps.some(de=>de.toolCategory==="communication"&&de.channel==="chat")).length,B.filter(oe=>oe.steps.some(de=>de.toolCategory==="communication"&&(de.channel==="email"||de.channel==="sms"))).length,z.reduce((oe,de)=>oe+de.creditsUsed,0),B.reduce((oe,de)=>oe+de.creditsUsed,0);const J=x.useMemo(()=>{const oe=new Date(Date.UTC(Vn.getUTCFullYear(),Vn.getUTCMonth(),1)),de=new Date(Date.UTC(Vn.getUTCFullYear(),Vn.getUTCMonth()+1,1)),Ae=new Date(Date.UTC(Vn.getUTCFullYear(),Vn.getUTCMonth()-1,1)),ye=(Le,it)=>Di.reduce((xt,$t)=>{const Qn=new Date($t.timestamp).getTime();return Qn>=Le.getTime()&&Qn<it.getTime()?xt+$t.creditsUsed:xt},0),je=ye(oe,de),ke=ye(Ae,oe),Je=Math.max(0,gu-je),et=Math.min(100,je/gu*100),qe=oe.toLocaleDateString("en-US",{month:"long",year:"numeric",timeZone:"UTC"}).toUpperCase(),Ft=ke>0?(je-ke)/ke*100:0,lr=de.getTime()-Vn.getTime(),Pn=Math.floor(lr/864e5),eo=Math.floor(lr/36e5),Oo=Pn>=1?`${Pn} day${Pn===1?"":"s"}`:eo>=1?`${eo} hour${eo===1?"":"s"}`:"less than an hour";return{used:je,priorUsed:ke,remaining:Je,pct:et,label:qe,momDelta:Ft,resetsIn:Oo}},[]),G=x.useMemo(()=>{const de={};for(const qe of Di){const Ft=new Date(qe.timestamp).toISOString().slice(0,10);de[Ft]=(de[Ft]??0)+1}const Ae=new Date(Vn);Ae.setUTCHours(0,0,0,0),Ae.setUTCDate(Ae.getUTCDate()+(6-Ae.getUTCDay()));const ye=new Date(Ae);ye.setUTCDate(ye.getUTCDate()-363);const je=[],ke=new Date(ye);for(;ke<=Ae;){const qe=ke.toISOString().slice(0,10),Ft=de[qe]??0;je.push({date:new Date(ke),iso:qe,count:Ft,inRange:!0}),ke.setUTCDate(ke.getUTCDate()+1)}const Je=[];for(let qe=0;qe<je.length;qe+=7)Je.push(je.slice(qe,qe+7));const et=Math.max(1,...je.map(qe=>qe.count));return{weeks:Je,maxCount:et}},[]),te=x.useMemo(()=>{const oe=yu(r),de={};for(const qe of z){const Ft=vs(new Date(qe.timestamp),oe);de[Ft]=(de[Ft]??0)+1}const Ae=wu($.from,$.to,oe),ye=Ae.map(qe=>fl(qe,oe)),je=Ae.map(qe=>de[vs(qe,oe)]??0),ke=je.filter(qe=>qe>0).length,Je=je.reduce((qe,Ft)=>qe+Ft,0),et=ke>0?Je/ke:0;return{labels:ye,data:je,total:Je,avgPerDay:et}},[z,r]),ae=x.useMemo(()=>{let oe=0,de=0,Ae=0;for(const je of Q)if(je.deploymentType==="engage")for(const ke of je.conversations)ke.outcome==="goal_achieved"?oe++:ke.outcome==="completed_no_action"?de++:ke.outcome==="in_progress"&&Ae++;else je.status==="success"?oe++:je.status==="incomplete"?de++:je.status==="in_progress"&&Ae++;const ye=oe+de+Ae;return{achieved:oe,completedNoAction:de,inProgress:Ae,total:ye}},[Q]),{rangeData:be,activeDays:Me}=x.useMemo(()=>{const oe=yu(i),de={};for(const ke of ce){const Je=vs(new Date(ke.timestamp),oe);de[Je]||(de[Je]=[]),de[Je].push(ke.creditsUsed)}const ye=wu(le.from,le.to,oe).map(ke=>{const Je=vs(ke,oe),et=de[Je]??[];return et.length===0?{label:fl(ke,oe),min:0,max:0,count:0,hasData:!1}:{label:fl(ke,oe),min:Math.min(...et),max:Math.max(...et),count:et.length,hasData:!0}}),je=ye.filter(ke=>ke.hasData).length;if(i==="all"&&je>0){const ke=ye.findIndex(et=>et.hasData),Je=ye.length-1-[...ye].reverse().findIndex(et=>et.hasData);return{rangeData:ye.slice(ke,Je+1),activeDays:je}}return{rangeData:ye,activeDays:je}},[ce,i]),Ve=Kr(f),xe=zi(f),Se=x.useMemo(()=>Mn(j,Ve),[j,f]),Te=x.useMemo(()=>Mn(j,xe),[j,f]),Be=x.useMemo(()=>d0(Se,Co,Au),[Se]),Ke=x.useMemo(()=>d0(Te,Co,Au),[Te]),ut=x.useMemo(()=>{const oe=yu(f),de=NM(Se,ye=>vs(new Date(ye),oe),Co);return wu(Ve.from,Ve.to,oe).map(ye=>({label:fl(ye,oe),savedMs:de[vs(ye,oe)]??0}))},[Se,f]),pt=Math.max(0,...ut.map(oe=>oe.savedMs))>=36e5?"hour":"min",ft=D>0?P/D*100:0,Ye=re>0?M/re*100:0;return t.jsxs(IN,{children:[t.jsx(KN,{}),t.jsxs(zN,{children:[t.jsxs(TN,{children:[t.jsxs(NN,{children:[t.jsxs("div",{children:[t.jsx(Si,{children:"Current Bill Period"}),t.jsxs(Mi,{children:["Resets in ",J.resetsIn]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"var(--space-3, 12px)",flexWrap:"wrap"},children:[t.jsx(AN,{children:A0(J.pct)}),t.jsxs(LN,{children:[t.jsx(Bl,{mode:"trend",value:`${J.momDelta>=0?"+":""}${J.momDelta.toFixed(1)}%`,trend:J.momDelta>=0?"up":"down",severity:Math.abs(J.momDelta)<.05?void 0:J.momDelta>=0?"negative":"positive"}),t.jsxs("span",{children:[J.momDelta>=0?"than":"less than"," last month:"," ",t.jsx(EN,{children:J.priorUsed.toLocaleString("en-US")})]})]})]})]}),t.jsxs($N,{children:[t.jsxs("span",{children:[J.used.toLocaleString("en-US")," used"]}),t.jsxs("span",{children:[J.remaining.toLocaleString("en-US")," remaining"]})]}),t.jsx(RN,{role:"progressbar","aria-label":`Monthly credit usage for ${J.label}`,"aria-valuemin":0,"aria-valuemax":gu,"aria-valuenow":J.used,children:t.jsx(DN,{$pct:J.pct})})]}),t.jsxs(ml,{$secondary:!0,children:[t.jsxs(xl,{children:[t.jsxs("div",{children:[t.jsx(Si,{children:"Success Rate"}),t.jsx(Mi,{children:"Breakdown by Achieved, Completed No Action, and In Progress"})]}),t.jsxs(tt,{value:c,onChange:oe=>p(oe),size:"sm",children:[t.jsx(tt.Item,{value:"24h",children:"24h"}),t.jsx(tt.Item,{value:"7d",children:"7d"}),t.jsx(tt.Item,{value:"30d",children:"30d"}),t.jsx(tt.Item,{value:"all",children:"All"})]})]}),ae.total===0?t.jsx(gl,{children:"No goals in this period"}):(()=>{const oe=ae.achieved/ae.total*100,de=ae.completedNoAction/ae.total*100,Ae=ae.inProgress/ae.total*100,ye=[{label:"Goal Achieved",value:ae.achieved,color:"var(--Alloy-green-500)",pct:oe,startPct:0,endPct:oe,muted:!1},{label:"Completed No Action",value:ae.completedNoAction,color:"var(--Alloy-slate-400, #9ca3af)",pct:de,startPct:oe,endPct:oe+de,muted:!0},{label:"In Progress",value:ae.inProgress,color:"var(--Alloy-blue-500, #446cff)",pct:Ae,startPct:oe+de,endPct:oe+de+Ae,muted:!0}];return t.jsxs(t.Fragment,{children:[t.jsxs(R0,{children:[t.jsx(HN,{children:A0(ft)}),t.jsx(hl,{current:ft,prior:Ye})]}),t.jsx(BN,{role:"img","aria-label":`Goals by outcome: ${ae.achieved} achieved, ${ae.completedNoAction} completed with no action, ${ae.inProgress} in progress`,onMouseLeave:()=>C(null),children:ye.map(je=>t.jsx(ON,{$pct:je.pct,$color:je.color,$gradientStart:E0(je.startPct),$gradientEnd:E0(je.endPct),$muted:je.muted,onMouseMove:ke=>C({x:ke.clientX,y:ke.clientY,label:je.label,value:je.value,color:je.color})},je.label))})]})})()]}),t.jsxs(ml,{children:[t.jsxs(xl,{children:[t.jsxs("div",{children:[t.jsx(Si,{children:"Credit Usage Over Time"}),t.jsx(Mi,{children:i==="all"?"Total credits consumed per month":"Total credits consumed per day"})]}),t.jsxs(tt,{value:i,onChange:oe=>l(oe),size:"sm",children:[t.jsx(tt.Item,{value:"24h",children:"24h"}),t.jsx(tt.Item,{value:"7d",children:"7d"}),t.jsx(tt.Item,{value:"30d",children:"30d"}),t.jsx(tt.Item,{value:"all",children:"All"})]})]}),Me<(i==="all"?1:3)?t.jsx(gl,{children:"Not enough activity yet to show trends"}):t.jsx(dN,{data:be,height:200})]}),t.jsxs(ml,{children:[t.jsx(xl,{children:t.jsxs("div",{children:[t.jsx(Si,{children:"Specialist Activations"}),t.jsx(Mi,{children:"Daily activity over the past year"})]})}),t.jsxs(R0,{children:[t.jsx(D0,{children:V.toLocaleString("en-US")}),t.jsx(FN,{children:"Activations"}),t.jsx(hl,{current:V,prior:H})]}),te.total===0?t.jsx(gl,{children:"No activations in this period"}):t.jsxs(WN,{children:[t.jsx(UN,{children:t.jsx(VN,{role:"img","aria-label":`Daily activations heatmap with max ${G.maxCount} in a single day`,onMouseLeave:()=>k(null),children:G.weeks.map((oe,de)=>Array.from({length:7},(Ae,ye)=>{const je=oe[ye];if(!je)return t.jsx(H0,{$level:0},`${de}-${ye}`);const ke=CN(je.count,G.maxCount),Je=je.date.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return t.jsx(H0,{$level:ke,onMouseMove:et=>k({x:et.clientX,y:et.clientY,label:Je,value:je.count,color:hp[ke]})},`${de}-${ye}`)}))})}),t.jsxs(GN,{children:[t.jsx("span",{children:"Less"}),t.jsx(Ci,{$level:0}),t.jsx(Ci,{$level:1}),t.jsx(Ci,{$level:2}),t.jsx(Ci,{$level:3}),t.jsx(Ci,{$level:4}),t.jsx("span",{children:"More"})]})]})]})]}),t.jsxs(ml,{children:[t.jsxs(xl,{children:[t.jsxs("div",{children:[t.jsx(Si,{children:"Time Saved"}),t.jsx(Mi,{children:"Estimated time saved by AI specialists vs manual task completion"})]}),t.jsxs(tt,{value:f,onChange:oe=>v(oe),size:"sm",children:[t.jsx(tt.Item,{value:"24h",children:"24h"}),t.jsx(tt.Item,{value:"7d",children:"7d"}),t.jsx(tt.Item,{value:"30d",children:"30d"}),t.jsx(tt.Item,{value:"all",children:"All"})]})]}),t.jsxs(QN,{children:[t.jsxs(XN,{children:[t.jsx(D0,{children:SN(Be.totalTimeSavedMs)}),t.jsx(hl,{current:Be.totalTimeSavedMs,prior:Ke.totalTimeSavedMs})]}),t.jsxs(JN,{children:[t.jsxs(eL,{children:["≈ ",MN(Be.costSaved)," saved"]}),t.jsx(hl,{current:Be.costSaved,prior:Ke.costSaved})]})]}),Be.totalTimeSavedMs===0?t.jsx(gl,{children:"No measurable time saved in this period"}):t.jsx(_N,{data:ut,unit:pt,height:200}),t.jsxs(tL,{children:[t.jsxs("span",{children:["Based on ",$0," historical baseline",$0===1?"":"s"," and ",P0," estimate",P0===1?"":"s","."]}),Be.goalsWithoutBaseline>0&&t.jsxs("span",{children:[Be.goalsWithoutBaseline," goal",Be.goalsWithoutBaseline===1?"":"s"," excluded — no manual baseline data available."]})]})]}),N&&t.jsxs(z0,{style:{left:N.x,top:N.y},children:[t.jsx(F0,{children:N.label}),t.jsxs(B0,{children:[t.jsx(O0,{$color:N.color}),N.value]})]}),T&&t.jsxs(z0,{style:{left:T.x,top:T.y},children:[t.jsx(F0,{children:T.label}),t.jsxs(B0,{children:[t.jsx(O0,{$color:T.color}),T.value," activation",T.value===1?"":"s"]})]}),t.jsx(qN,{children:"Activities"}),t.jsxs(ZN,{children:[t.jsx("div",{style:{width:160},children:t.jsx(Ln,{size:"sm",options:nL,value:g,onChange:w})}),t.jsx("div",{style:{width:180},children:t.jsx(Ln,{size:"sm",options:rL,value:y,onChange:_})}),t.jsx("div",{style:{width:160},children:t.jsx(Ln,{size:"sm",options:oL,value:b,onChange:L})}),t.jsx("div",{style:{width:150},children:t.jsx(Ln,{size:"sm",options:sL,value:E,onChange:I})}),t.jsx(YN,{children:t.jsxs(tt,{value:r,onChange:oe=>s(oe),size:"sm",children:[t.jsx(tt.Item,{value:"24h",children:"24h"}),t.jsx(tt.Item,{value:"7d",children:"7d"}),t.jsx(tt.Item,{value:"30d",children:"30d"}),t.jsx(tt.Item,{value:"all",children:"All"})]})})]}),t.jsx(Ag,{timeRange:r,records:j,showFilters:!1})]})}const aL=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  min-height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`;function lL(){return t.jsx(aL,{children:t.jsx(iL,{})})}function cL(r){const s=[r.activeId,r.secActiveId];return r.selectedPersonaId&&s.push("persona",r.selectedPersonaId),r.activePageId&&s.push("page",r.activePageId),"#"+s.map(encodeURIComponent).join("/")}function dL(r){const s=r.replace(/^#/,"").trim();if(!s)return{};const i=s.split("/").map(c=>{try{return decodeURIComponent(c)}catch{return c}}),l={};i[0]&&(l.activeId=i[0]),i[1]&&(l.secActiveId=i[1]);for(let c=2;c<i.length-1;c+=2){const p=i[c],f=i[c+1];p==="persona"?l.selectedPersonaId=f:p==="page"&&(l.activePageId=f)}return l}function uL(r,s){const i=x.useRef("");x.useEffect(()=>{const l=()=>{const p=dL(window.location.hash);p.activeId!==void 0&&s.setActiveId(p.activeId),p.secActiveId!==void 0&&s.setSecActiveId(p.secActiveId),s.setSelectedPersonaId(p.selectedPersonaId??null),s.setActivePageId(p.activePageId??null)};window.location.hash&&l();const c=()=>{window.location.hash!==i.current&&l()};return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),x.useEffect(()=>{const l=cL(r);l!==window.location.hash&&(i.current=l,window.history.replaceState(null,"",l))},[r.activeId,r.secActiveId,r.selectedPersonaId,r.activePageId])}const W0=[{id:"home",label:"Home",icon:t.jsx(Dk,{})},{id:"engaged",label:"Engaged",icon:t.jsx(zk,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:t.jsx(Fk,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:t.jsx(Bk,{})},{id:"ai-home",label:"AI Home",icon:t.jsx(Ok,{})}],pL=[{id:"apps",label:"Apps",icon:t.jsx(Hk,{})}],U0=[{id:"docs",label:"Document Studio",icon:t.jsx(Wk,{})},{id:"form",label:"Form",icon:t.jsx(Uk,{})},{id:"tasks",label:"Tasks",icon:t.jsx(Vk,{})},{id:"policy",label:"Policy",icon:t.jsx(Gk,{}),activeIcon:t.jsx("img",{src:IC,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:t.jsx(qk,{}),activeIcon:t.jsx("img",{src:NC,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:t.jsx(Zk,{})},{id:"esign",label:"E-Sign Studio",icon:t.jsx(Yk,{})}],ks={home:{defaultId:"home-overview",entries:[{id:"home-overview",label:"Overview",icon:t.jsx(xo,{size:16})},{id:"home-activity",label:"Activity",icon:t.jsx(Un,{size:16})},{id:"home-analytics",label:"Analytics",icon:t.jsx(wl,{size:16})}]},engaged:{defaultId:"all-people",entries:[{id:"all-people",label:"All People",icon:t.jsx(Vr,{size:16})},{id:"contractors",label:"Contractors",icon:t.jsx(Gn,{size:16})},{id:"employees",label:"Employees",icon:t.jsx(Gr,{size:16})},{group:{id:"groups",label:"Groups",icon:t.jsx(Zd,{size:16}),children:[{id:"engineering",label:"Engineering",icon:t.jsx(Mm,{size:16})},{id:"design",label:"Design",icon:t.jsx(Sm,{size:16})},{id:"marketing",label:"Marketing",icon:t.jsx(Q8,{size:16})},{id:"operations",label:"Operations",icon:t.jsx(Ei,{size:16})}]}}]},inbox:{defaultId:"inbox-all",entries:[{id:"inbox-all",label:"All",icon:t.jsx(Un,{size:16})},{id:"inbox-action",label:"Action Required",icon:t.jsx(yn,{size:16})},{id:"inbox-mentions",label:"Mentions",icon:t.jsx(Vr,{size:16})},{id:"inbox-notify",label:"Notifications",icon:t.jsx(xo,{size:16})}]},invoice:{defaultId:"invoice-all",entries:[{id:"invoice-all",label:"All Invoices",icon:t.jsx(Un,{size:16})},{id:"invoice-pending",label:"Pending",icon:t.jsx(Gr,{size:16})},{id:"invoice-paid",label:"Paid",icon:t.jsx(yn,{size:16})},{id:"invoice-overdue",label:"Overdue",icon:t.jsx(wl,{size:16})}]},"ai-home":{defaultId:"ai-new-chat",entries:[{id:"ai-new-chat",label:"New Chat",icon:t.jsx(xo,{size:16})},{id:"ai-history",label:"History",icon:t.jsx(Un,{size:16})},{id:"ai-prompts",label:"Saved Prompts",icon:t.jsx(Gr,{size:16})},{group:{id:"ai-specialists",label:"Specialist",icon:t.jsx(Vr,{size:16}),children:[{id:"ai-personas",label:"Personas",icon:t.jsx(Vr,{size:16})}]}}]},apps:{defaultId:"my-apps",entries:[{group:{id:"mp-team-apps",label:"Team apps",icon:t.jsx(Vr,{size:16}),trailingBadge:t.jsx(mt,{size:"sm",variant:"subtle",color:"neutral",children:"5"}),children:[{id:"mp-shift-marketplace",label:"Shift Marketplace",icon:rr("mp-shift-marketplace"),pinnable:!0},{id:"mp-availability",label:"Employee Availability",icon:rr("mp-availability"),pinnable:!0},{id:"mp-time-clock",label:"Smart Time Clock",icon:rr("mp-time-clock"),pinnable:!0},{id:"mp-messaging",label:"Messaging Center",icon:rr("mp-messaging"),pinnable:!0},{id:"mp-client-portal",label:"Client Staffing Portal",icon:rr("mp-client-portal"),pinnable:!0}]}},{group:{id:"mp-background-apps",label:"Background apps",icon:t.jsx(Wu,{size:16}),trailingBadge:t.jsx(mt,{size:"sm",variant:"subtle",color:"neutral",children:"5"}),children:[{id:"mp-labor-cost",label:"Labor Cost Forecasting",icon:rr("mp-labor-cost"),pinnable:!0},{id:"mp-compliance-monitor",label:"Compliance Monitor",icon:rr("mp-compliance-monitor"),pinnable:!0},{id:"mp-recruiting",label:"Recruiting Pipeline",icon:rr("mp-recruiting"),pinnable:!0},{id:"mp-credential",label:"Credential Tracker",icon:rr("mp-credential"),pinnable:!0},{id:"mp-performance",label:"Performance Insights",icon:rr("mp-performance"),pinnable:!0}]}}]},"app-tool":{defaultId:"at-overview",entries:[{id:"at-overview",label:"Overview",icon:t.jsx(xo,{size:16})},{id:"at-config",label:"Configuration",icon:t.jsx(Ei,{size:16})},{id:"at-logs",label:"Logs",icon:t.jsx(Un,{size:16})}]},"add-app":{defaultId:"aa-integrations",entries:[{id:"aa-integrations",label:"Integrations",icon:t.jsx(Zd,{size:16})},{id:"aa-import",label:"Import",icon:t.jsx(Gn,{size:16})},{id:"aa-oauth",label:"OAuth Apps",icon:t.jsx(Ei,{size:16})}]},docs:{defaultId:"docs-all",entries:[{id:"docs-all",label:"All Documents",icon:t.jsx(Un,{size:16})},{id:"docs-drafts",label:"Drafts",icon:t.jsx(Gr,{size:16})},{id:"docs-sent",label:"Sent",icon:t.jsx(Gn,{size:16})},{id:"docs-signed",label:"Signed",icon:t.jsx(yn,{size:16})}]},form:{defaultId:"form-all",entries:[{id:"form-all",label:"All Forms",icon:t.jsx(Un,{size:16})},{id:"form-active",label:"Active",icon:t.jsx(yn,{size:16})},{id:"form-drafts",label:"Drafts",icon:t.jsx(Gr,{size:16})},{id:"form-archived",label:"Archived",icon:t.jsx(Gn,{size:16})}]},tasks:{defaultId:"tasks-mine",entries:[{id:"tasks-mine",label:"My Tasks",icon:t.jsx(xo,{size:16})},{id:"tasks-team",label:"Team Tasks",icon:t.jsx(Vr,{size:16})},{id:"tasks-completed",label:"Completed",icon:t.jsx(yn,{size:16})},{id:"tasks-overdue",label:"Overdue",icon:t.jsx(wl,{size:16})}]},policy:{defaultId:"policy-all",entries:[{id:"policy-all",label:"All Policies",icon:t.jsx(Un,{size:16})},{id:"policy-published",label:"Published",icon:t.jsx(yn,{size:16})},{id:"policy-review",label:"Under Review",icon:t.jsx(Gr,{size:16})},{id:"policy-drafts",label:"Drafts",icon:t.jsx(Gn,{size:16})}]},automation:{defaultId:"auto-active",entries:[{id:"auto-active",label:"Active",icon:t.jsx(yn,{size:16})},{id:"auto-templates",label:"Templates",icon:t.jsx(Zd,{size:16})},{id:"auto-history",label:"History",icon:t.jsx(Un,{size:16})}]},payroll:{defaultId:"pay-overview",entries:[{id:"pay-overview",label:"Overview",icon:t.jsx(xo,{size:16})},{id:"pay-employees",label:"Employees",icon:t.jsx(Vr,{size:16})},{id:"pay-contractors",label:"Contractors",icon:t.jsx(Gn,{size:16})},{id:"pay-history",label:"History",icon:t.jsx(Un,{size:16})}]},esign:{defaultId:"esign-awaiting",entries:[{id:"esign-awaiting",label:"Awaiting Signature",icon:t.jsx(Gr,{size:16})},{id:"esign-completed",label:"Completed",icon:t.jsx(yn,{size:16})},{id:"esign-templates",label:"Templates",icon:t.jsx(Gn,{size:16})},{id:"esign-voided",label:"Voided",icon:t.jsx(Un,{size:16})}]}};function fL(r,s,i,l,c=[],p){const f=ks[r];if(!f)return[];const v=g=>{const w=c.includes(g);return t.jsx(hL,{type:"button",$pinned:w,"aria-label":w?"Unpin from sidebar":"Pin to sidebar",onClick:y=>{y.stopPropagation(),p==null||p(g)},children:t.jsx(Hu,{size:14})})};return f.entries.map(g=>{if("group"in g){const y=g.group;return{type:"group",group:{id:y.id,label:y.label,icon:y.icon,trailingBadge:y.trailingBadge,defaultExpanded:!0,children:y.children.map(_=>({id:_.id,label:_.label,icon:_.icon,isActive:!l&&s===_.id,onClick:()=>i(_.id),trailingSlot:_.pinnable&&p?v(_.id):void 0}))}}}if("kind"in g&&g.kind==="label")return{type:"label",label:{id:g.id,label:g.label}};const w=g;return{type:"single",item:{id:w.id,label:w.label,icon:w.icon,isActive:!l&&s===w.id,onClick:()=>i(w.id)}}})}const hL=h.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;
  color: ${r=>r.$pinned?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  opacity: ${r=>r.$pinned?1:.5};
  transition: background 120ms ease, color 120ms ease, opacity 120ms ease;
  margin-right: 4px;

  &:hover {
    opacity: 1;
    background: var(--color-bg-tertiary, rgba(21, 21, 21, 0.08));
    color: var(--color-content-primary);
  }

  &:focus-visible {
    opacity: 1;
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
  }
`;function mL(r,s){const i=ks[r];if(i)for(const l of i.entries)if("group"in l){for(const c of l.group.children)if(c.id===s)return{label:c.label,parentLabel:l.group.label}}else{if("kind"in l&&l.kind==="label")continue;if(l.id===s)return{label:l.label}}}const ju={home:"Home",engaged:"Engaged",inbox:"Inbox",invoice:"Invoice","ai-home":"AI Home",apps:"Apps","app-tool":"Custom App","add-app":"Add App",docs:"Document Studio",form:"Form",tasks:"Tasks",policy:"Policy Engine",automation:"Automation",payroll:"Payroll",esign:"E-Sign Studio"},gL=[{id:"new",label:"New",variant:"secondary"},{id:"invite",label:"Invite",variant:"primary"}];function xL({secActiveId:r}){switch(r){case"contractors":return t.jsx(yC,{});case"employees":return t.jsx(wC,{});case"engineering":return t.jsx(jC,{});case"design":return t.jsx(bC,{});case"marketing":return t.jsx(kC,{});case"operations":return t.jsx(_C,{});default:return t.jsx(vC,{})}}function vL({secActiveId:r,selectedPersonaId:s,setSelectedPersonaId:i}){return x.useEffect(()=>{r!=="ai-personas"&&i(null)},[r]),r==="ai-personas"?s?t.jsx(QI,{personaId:s,onBack:()=>i(null)}):t.jsx(vM,{onPersonaClick:i}):t.jsx(UC,{})}const $g={shift_marketplace:"Shift Marketplace",labor_cost_forecasting:"Labor Cost Forecasting",employee_availability_portal:"Employee Availability Portal",compliance_monitor:"Compliance Monitor",smart_time_clock:"Smart Time Clock",recruiting_pipeline_dashboard:"Recruiting Pipeline Dashboard",workforce_messaging_center:"Workforce Messaging Center",client_staffing_portal:"Client Staffing Portal",credential_tracker:"Credential Tracker",performance_insights_dashboard:"Performance Insights Dashboard"};function yL({activeId:r,secActiveId:s,activePageId:i,selectedPersonaId:l,setSelectedPersonaId:c,onOpenCommunity:p,onOpenInstalled:f,onOpenApp:v,pinnedAppIds:g,onTogglePin:w,installedAppIds:y,onInstallApp:_,onUninstallApp:b,lastOpenedAtById:L}){switch(r){case"home":return t.jsx(Gh,{});case"engaged":return t.jsx(xL,{secActiveId:s});case"inbox":return t.jsx(HC,{});case"invoice":return t.jsx(WC,{});case"ai-home":return t.jsx(vL,{secActiveId:s,selectedPersonaId:l,setSelectedPersonaId:c});case"apps":if(s==="app-marketplace"&&!(i!=null&&i.startsWith("app:")))return t.jsx(LS,{installedAppIds:y,onInstallApp:_,onUninstallApp:b,onOpenApp:v});if(i!=null&&i.startsWith("app:")){const E=i.slice(4),I=$g[E]??"App";return t.jsx(FS,{name:I})}return t.jsx(zS,{onOpenCommunity:p,onOpenApp:v,pinnedAppIds:g,onTogglePin:w,installedAppIds:y,onUninstallApp:b,lastOpenedAtById:L});case"app-tool":return t.jsx(BS,{});case"add-app":return t.jsx(OS,{});case"docs":return t.jsx(HS,{});case"form":return t.jsx(WS,{});case"tasks":return t.jsx(US,{});case"policy":return t.jsx(VS,{});case"automation":return t.jsx(GS,{});case"payroll":return t.jsx(qS,{});case"esign":return t.jsx(ZS,{});default:return t.jsx(Gh,{})}}function wL(){const[r,s]=x.useState("home"),[i,l]=x.useState(ks.home.defaultId),[c,p]=x.useState(""),[f,v]=x.useState(null),[g,w]=x.useState(null),[y,_]=x.useState([]),[b,L]=x.useState([]),[E,I]=x.useState({}),{toast:N}=S5(),C=G=>{const te=b.includes(G);if(L(ae=>ae.includes(G)?ae:[...ae,G]),I(ae=>({...ae,[G]:Date.now()})),!te){const ae=i0(G);N.success(ae?`${ae} added to My Apps`:"App added to My Apps")}},T=G=>{const te=b.includes(G);if(L(ae=>ae.filter(be=>be!==G)),I(ae=>{const{[G]:be,...Me}=ae;return Me}),te){const ae=i0(G);N.info(ae?`${ae} removed from My Apps`:"App removed from My Apps")}},k=G=>{I(te=>({...te,[G]:Date.now()}))},[j,$]=x.useState("list"),[F,z]=x.useState({});x.useEffect(()=>{i&&z(G=>G[r]===i?G:{...G,[r]:i})},[r,i]),uL({activeId:r,secActiveId:i,selectedPersonaId:f,activePageId:g},{setActiveId:s,setSecActiveId:l,setSelectedPersonaId:v,setActivePageId:w});function B(G){const te=ks[G];s(G),l((te==null?void 0:te.defaultId)??""),w((te==null?void 0:te.defaultPageId)??null)}function le(G){const te=ks[G],ae=F[G],be=(te==null?void 0:te.defaultId)??"";s(G),l(ae??be),w(ae?null:(te==null?void 0:te.defaultPageId)??null),v(null)}function ce(G){l(G),w(null)}const X=[...r==="apps"?[{id:"app-marketplace",label:"App Marketplace",icon:t.jsx(Vr,{size:16}),isActive:i==="app-marketplace",onClick:()=>{l("app-marketplace"),w(null)}}]:[],...r==="home"||r==="apps"?[]:[{id:"usage",label:"Usage",icon:t.jsx(wl,{size:16}),isActive:g==="usage",onClick:()=>w("usage")}],...r==="home"&&j==="ai"?[]:[{id:"settings",label:"Settings",icon:t.jsx(Ei,{size:16})}]],q=G=>G.map(te=>({...te,isActive:te.id===r&&!(te.id==="apps"&&(g!=null&&g.startsWith("app:"))),onClick:()=>B(te.id)})),Q=G=>{const te=ks.apps;if(te){for(const ae of te.entries)if("group"in ae){const be=ae.group.children.find(Me=>Me.id===G);if(be)return be}}},ge=G=>{var be;const te=!y.includes(G);_(Me=>Me.includes(G)?Me.filter(Ve=>Ve!==G):[...Me,G]);const ae=(be=Q(G))==null?void 0:be.label;te?N.success(ae?`${ae} pinned to sidebar`:"App pinned to sidebar"):N.info(ae?`${ae} unpinned from sidebar`:"App unpinned from sidebar")},Y=G=>{s("apps"),l(G);const te=s0[G];w(te?`app:${te}`:null)},Z=y.map(G=>{const te=Q(G);if(!te)return null;const ae=s0[G],be=ae?`app:${ae}`:null;return{id:`pinned-${G}`,label:te.label,icon:te.icon,isActive:r==="apps"&&g===be,onClick:()=>Y(G)}}).filter(G=>G!==null),se=(()=>{const G=q(pL);if(Z.length===0)return G;const te=G.findIndex(ae=>ae.id==="apps");return te===-1?[...G,...Z]:[...G.slice(0,te+1),...Z,...G.slice(te+1)]})(),V=mL(r,i),H=(()=>{if(g==="usage")return t.jsx(Ti,{children:"Usage"});if(r==="apps"&&i==="app-marketplace"&&!(g!=null&&g.startsWith("app:")))return t.jsx(Ii,{separator:"chevron",items:[{label:"Apps",onClick:()=>{l("my-apps"),w(null)}},{label:"App Marketplace"}]});if(r==="apps"&&(g!=null&&g.startsWith("app:"))){const G=g.slice(4),te=$g[G]??"App";return t.jsx(Ii,{separator:"chevron",items:[{label:"Apps",onClick:()=>w(null)},{label:te}]})}if(r==="apps")return t.jsx(Ti,{children:"Apps"});if(r==="ai-home"&&i==="ai-personas"&&f){const G=kr.find(te=>te.id===f);return t.jsx(Ii,{separator:"chevron",items:[{label:"Personas",onClick:()=>v(null)},{label:(G==null?void 0:G.name)??"Persona"}]})}return V?V.parentLabel?t.jsx(Ii,{separator:"chevron",items:[{label:V.parentLabel},{label:V.label}]}):t.jsx(Ti,{children:V.label}):t.jsx(Ti,{children:ju[r]??r})})(),P=g==="usage"?"Usage":ju[r]??r,M=g==="usage"?void 0:r==="apps"&&i==="app-marketplace"&&!(g!=null&&g.startsWith("app:"))?"App Marketplace":V?V.parentLabel?`${V.parentLabel} / ${V.label}`:V.label:void 0,D=r==="home"?t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2, 8px)"},children:[t.jsx(Fu,{placement:"bottom-end",trigger:t.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"More actions",children:t.jsx($m,{size:16})}),groups:[{id:"actions",options:[{id:"action-1",label:"Action"},{id:"action-2",label:"Action"}]}]}),t.jsxs(tt,{size:"sm",value:j,onChange:G=>$(G),"aria-label":"AI Home view",children:[t.jsx(tt.Item,{value:"list",children:"List"}),t.jsx(tt.Item,{value:"ai",leadingIcon:t.jsx(Ui,{variant:j==="ai"?"gradient-fill":"inverse",state:"ready",size:14}),children:"AI"})]})]}):void 0,re=r==="home"&&j==="ai"?t.jsx(MC,{}):void 0,J=[{id:"main",label:"Workspace",items:q(W0)},{id:"tools",label:"Tools",items:se},{id:"bottom",label:"Apps",items:q(U0)}];return t.jsx(xC,{items:q(W0),toolItems:se,bottomItems:q(U0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:ju[r]??r,menuEntries:fL(r,i,ce,g!==null,y,ge),pageEntries:X,showSecondaryNav:r!=="apps",showSearch:!0,searchValue:c,onSearchChange:p,headerSlot:D,bodyContent:re,heading:H,actions:r==="ai-home"||r==="apps"||g==="usage"?[]:gL,showActivityButton:!0,showPonderButton:!0,noBorder:r==="apps"&&i==="app-marketplace"&&!(g!=null&&g.startsWith("app:")),mobileNav:{activeId:r,secActiveId:i,activePageId:g,selectedPersonaId:f,moduleGroups:J,primaryLabel:P,secondaryLabel:M,onMobileNavigate:le,onSelectPersona:v},children:g==="usage"?t.jsx(lL,{}):t.jsx(yL,{activeId:r,secActiveId:i,activePageId:g,selectedPersonaId:f,setSelectedPersonaId:v,onOpenCommunity:()=>{l("app-marketplace"),w(null)},onOpenInstalled:()=>w(null),onOpenApp:G=>{k(G),w(`app:${G}`)},pinnedAppIds:y,onTogglePin:ge,installedAppIds:b,onInstallApp:C,onUninstallApp:T,lastOpenedAtById:E})})}Dx.createRoot(document.getElementById("root")).render(t.jsx(Tn.StrictMode,{children:t.jsx(N5,{children:t.jsx(wL,{})})}));
