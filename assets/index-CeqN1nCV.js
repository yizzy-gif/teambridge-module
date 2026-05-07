(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(c){if(c.ep)return;c.ep=!0;const p=i(c);fetch(c.href,p)}})();function z0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Dd={exports:{}},yi={},zd={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function bx(){if(Zf)return De;Zf=1;var r=Symbol.for("react.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),f=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function b(M){return M===null||typeof M!="object"?null:(M=_&&M[_]||M["@@iterator"],typeof M=="function"?M:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,I={};function N(M,D,re){this.props=M,this.context=D,this.refs=I,this.updater=re||L}N.prototype.isReactComponent={},N.prototype.setState=function(M,D){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,D,"setState")},N.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function C(){}C.prototype=N.prototype;function A(M,D,re){this.props=M,this.context=D,this.refs=I,this.updater=re||L}var k=A.prototype=new C;k.constructor=A,E(k,N.prototype),k.isPureReactComponent=!0;var j=Array.isArray,$=Object.prototype.hasOwnProperty,F={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function B(M,D,re){var W,Z={},ue=null,fe=null;if(D!=null)for(W in D.ref!==void 0&&(fe=D.ref),D.key!==void 0&&(ue=""+D.key),D)$.call(D,W)&&!z.hasOwnProperty(W)&&(Z[W]=D[W]);var Ie=arguments.length-2;if(Ie===1)Z.children=re;else if(1<Ie){for(var Ee=Array(Ie),Ze=0;Ze<Ie;Ze++)Ee[Ze]=arguments[Ze+2];Z.children=Ee}if(M&&M.defaultProps)for(W in Ie=M.defaultProps,Ie)Z[W]===void 0&&(Z[W]=Ie[W]);return{$$typeof:r,type:M,key:ue,ref:fe,props:Z,_owner:F.current}}function ie(M,D){return{$$typeof:r,type:M.type,key:D,ref:M.ref,props:M.props,_owner:M._owner}}function ce(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function ee(M){var D={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(re){return D[re]})}var Y=/\/+/g;function X(M,D){return typeof M=="object"&&M!==null&&M.key!=null?ee(""+M.key):D.toString(36)}function ve(M,D,re,W,Z){var ue=typeof M;(ue==="undefined"||ue==="boolean")&&(M=null);var fe=!1;if(M===null)fe=!0;else switch(ue){case"string":case"number":fe=!0;break;case"object":switch(M.$$typeof){case r:case s:fe=!0}}if(fe)return fe=M,Z=Z(fe),M=W===""?"."+X(fe,0):W,j(Z)?(re="",M!=null&&(re=M.replace(Y,"$&/")+"/"),ve(Z,D,re,"",function(Ze){return Ze})):Z!=null&&(ce(Z)&&(Z=ie(Z,re+(!Z.key||fe&&fe.key===Z.key?"":(""+Z.key).replace(Y,"$&/")+"/")+M)),D.push(Z)),1;if(fe=0,W=W===""?".":W+":",j(M))for(var Ie=0;Ie<M.length;Ie++){ue=M[Ie];var Ee=W+X(ue,Ie);fe+=ve(ue,D,re,Ee,Z)}else if(Ee=b(M),typeof Ee=="function")for(M=Ee.call(M),Ie=0;!(ue=M.next()).done;)ue=ue.value,Ee=W+X(ue,Ie++),fe+=ve(ue,D,re,Ee,Z);else if(ue==="object")throw D=String(M),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return fe}function K(M,D,re){if(M==null)return M;var W=[],Z=0;return ve(M,W,"","",function(ue){return D.call(re,ue,Z++)}),W}function q(M){if(M._status===-1){var D=M._result;D=D(),D.then(function(re){(M._status===0||M._status===-1)&&(M._status=1,M._result=re)},function(re){(M._status===0||M._status===-1)&&(M._status=2,M._result=re)}),M._status===-1&&(M._status=0,M._result=D)}if(M._status===1)return M._result.default;throw M._result}var J={current:null},G={transition:null},H={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:G,ReactCurrentOwner:F};function P(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:K,forEach:function(M,D,re){K(M,function(){D.apply(this,arguments)},re)},count:function(M){var D=0;return K(M,function(){D++}),D},toArray:function(M){return K(M,function(D){return D})||[]},only:function(M){if(!ce(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},De.Component=N,De.Fragment=i,De.Profiler=c,De.PureComponent=A,De.StrictMode=l,De.Suspense=g,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,De.act=P,De.cloneElement=function(M,D,re){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var W=E({},M.props),Z=M.key,ue=M.ref,fe=M._owner;if(D!=null){if(D.ref!==void 0&&(ue=D.ref,fe=F.current),D.key!==void 0&&(Z=""+D.key),M.type&&M.type.defaultProps)var Ie=M.type.defaultProps;for(Ee in D)$.call(D,Ee)&&!z.hasOwnProperty(Ee)&&(W[Ee]=D[Ee]===void 0&&Ie!==void 0?Ie[Ee]:D[Ee])}var Ee=arguments.length-2;if(Ee===1)W.children=re;else if(1<Ee){Ie=Array(Ee);for(var Ze=0;Ze<Ee;Ze++)Ie[Ze]=arguments[Ze+2];W.children=Ie}return{$$typeof:r,type:M.type,key:Z,ref:ue,props:W,_owner:fe}},De.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:p,_context:M},M.Consumer=M},De.createElement=B,De.createFactory=function(M){var D=B.bind(null,M);return D.type=M,D},De.createRef=function(){return{current:null}},De.forwardRef=function(M){return{$$typeof:y,render:M}},De.isValidElement=ce,De.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:q}},De.memo=function(M,D){return{$$typeof:w,type:M,compare:D===void 0?null:D}},De.startTransition=function(M){var D=G.transition;G.transition={};try{M()}finally{G.transition=D}},De.unstable_act=P,De.useCallback=function(M,D){return J.current.useCallback(M,D)},De.useContext=function(M){return J.current.useContext(M)},De.useDebugValue=function(){},De.useDeferredValue=function(M){return J.current.useDeferredValue(M)},De.useEffect=function(M,D){return J.current.useEffect(M,D)},De.useId=function(){return J.current.useId()},De.useImperativeHandle=function(M,D,re){return J.current.useImperativeHandle(M,D,re)},De.useInsertionEffect=function(M,D){return J.current.useInsertionEffect(M,D)},De.useLayoutEffect=function(M,D){return J.current.useLayoutEffect(M,D)},De.useMemo=function(M,D){return J.current.useMemo(M,D)},De.useReducer=function(M,D,re){return J.current.useReducer(M,D,re)},De.useRef=function(M){return J.current.useRef(M)},De.useState=function(M){return J.current.useState(M)},De.useSyncExternalStore=function(M,D,re){return J.current.useSyncExternalStore(M,D,re)},De.useTransition=function(){return J.current.useTransition()},De.version="18.3.1",De}var Yf;function Au(){return Yf||(Yf=1,zd.exports=bx()),zd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function kx(){if(Kf)return yi;Kf=1;var r=Au(),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function f(y,g,w){var v,_={},b=null,L=null;w!==void 0&&(b=""+w),g.key!==void 0&&(b=""+g.key),g.ref!==void 0&&(L=g.ref);for(v in g)l.call(g,v)&&!p.hasOwnProperty(v)&&(_[v]=g[v]);if(y&&y.defaultProps)for(v in g=y.defaultProps,g)_[v]===void 0&&(_[v]=g[v]);return{$$typeof:s,type:y,key:b,ref:L,props:_,_owner:c.current}}return yi.Fragment=i,yi.jsx=f,yi.jsxs=f,yi}var Qf;function _x(){return Qf||(Qf=1,Dd.exports=kx()),Dd.exports}var t=_x(),x=Au();const An=z0(x);var el={},Fd={exports:{}},rn={},Bd={exports:{}},Od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf;function Cx(){return Xf||(Xf=1,(function(r){function s(G,H){var P=G.length;G.push(H);e:for(;0<P;){var M=P-1>>>1,D=G[M];if(0<c(D,H))G[M]=H,G[P]=D,P=M;else break e}}function i(G){return G.length===0?null:G[0]}function l(G){if(G.length===0)return null;var H=G[0],P=G.pop();if(P!==H){G[0]=P;e:for(var M=0,D=G.length,re=D>>>1;M<re;){var W=2*(M+1)-1,Z=G[W],ue=W+1,fe=G[ue];if(0>c(Z,P))ue<D&&0>c(fe,Z)?(G[M]=fe,G[ue]=P,M=ue):(G[M]=Z,G[W]=P,M=W);else if(ue<D&&0>c(fe,P))G[M]=fe,G[ue]=P,M=ue;else break e}}return H}function c(G,H){var P=G.sortIndex-H.sortIndex;return P!==0?P:G.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var f=Date,y=f.now();r.unstable_now=function(){return f.now()-y}}var g=[],w=[],v=1,_=null,b=3,L=!1,E=!1,I=!1,N=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(G){for(var H=i(w);H!==null;){if(H.callback===null)l(w);else if(H.startTime<=G)l(w),H.sortIndex=H.expirationTime,s(g,H);else break;H=i(w)}}function j(G){if(I=!1,k(G),!E)if(i(g)!==null)E=!0,q($);else{var H=i(w);H!==null&&J(j,H.startTime-G)}}function $(G,H){E=!1,I&&(I=!1,C(B),B=-1),L=!0;var P=b;try{for(k(H),_=i(g);_!==null&&(!(_.expirationTime>H)||G&&!ee());){var M=_.callback;if(typeof M=="function"){_.callback=null,b=_.priorityLevel;var D=M(_.expirationTime<=H);H=r.unstable_now(),typeof D=="function"?_.callback=D:_===i(g)&&l(g),k(H)}else l(g);_=i(g)}if(_!==null)var re=!0;else{var W=i(w);W!==null&&J(j,W.startTime-H),re=!1}return re}finally{_=null,b=P,L=!1}}var F=!1,z=null,B=-1,ie=5,ce=-1;function ee(){return!(r.unstable_now()-ce<ie)}function Y(){if(z!==null){var G=r.unstable_now();ce=G;var H=!0;try{H=z(!0,G)}finally{H?X():(F=!1,z=null)}}else F=!1}var X;if(typeof A=="function")X=function(){A(Y)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,K=ve.port2;ve.port1.onmessage=Y,X=function(){K.postMessage(null)}}else X=function(){N(Y,0)};function q(G){z=G,F||(F=!0,X())}function J(G,H){B=N(function(){G(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_continueExecution=function(){E||L||(E=!0,q($))},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return i(g)},r.unstable_next=function(G){switch(b){case 1:case 2:case 3:var H=3;break;default:H=b}var P=b;b=H;try{return G()}finally{b=P}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(G,H){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var P=b;b=G;try{return H()}finally{b=P}},r.unstable_scheduleCallback=function(G,H,P){var M=r.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?M+P:M):P=M,G){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=P+D,G={id:v++,callback:H,priorityLevel:G,startTime:P,expirationTime:D,sortIndex:-1},P>M?(G.sortIndex=P,s(w,G),i(g)===null&&G===i(w)&&(I?(C(B),B=-1):I=!0,J(j,P-M))):(G.sortIndex=D,s(g,G),E||L||(E=!0,q($))),G},r.unstable_shouldYield=ee,r.unstable_wrapCallback=function(G){var H=b;return function(){var P=b;b=H;try{return G.apply(this,arguments)}finally{b=P}}}})(Od)),Od}var Jf;function Sx(){return Jf||(Jf=1,Bd.exports=Cx()),Bd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh;function Mx(){if(eh)return rn;eh=1;var r=Au(),s=Sx();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function p(e,n){f(e,n),f(e+"Capture",n)}function f(e,n){for(c[e]=n,e=0;e<n.length;e++)l.add(n[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function b(e){return g.call(_,e)?!0:g.call(v,e)?!1:w.test(e)?_[e]=!0:(v[e]=!0,!1)}function L(e,n,o,a){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,n,o,a){if(n===null||typeof n>"u"||L(e,n,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function I(e,n,o,a,d,u,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=u,this.removeEmptyString=m}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];N[n]=new I(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function A(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(C,A);N[n]=new I(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(C,A);N[n]=new I(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(C,A);N[n]=new I(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function k(e,n,o,a){var d=N.hasOwnProperty(n)?N[n]:null;(d!==null?d.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(E(n,o,d,a)&&(o=null),a||d===null?b(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):d.mustUseProperty?e[d.propertyName]=o===null?d.type===3?!1:"":o:(n=d.attributeName,a=d.attributeNamespace,o===null?e.removeAttribute(n):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?e.setAttributeNS(a,n,o):e.setAttribute(n,o))))}var j=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),F=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),ee=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),G=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,M;function D(e){if(M===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||""}return`
`+M+e}var re=!1;function W(e,n){if(!e||re)return"";re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(V){var a=V}Reflect.construct(e,[],n)}else{try{n.call()}catch(V){a=V}e.call(n.prototype)}else{try{throw Error()}catch(V){a=V}e()}}catch(V){if(V&&a&&typeof V.stack=="string"){for(var d=V.stack.split(`
`),u=a.stack.split(`
`),m=d.length-1,S=u.length-1;1<=m&&0<=S&&d[m]!==u[S];)S--;for(;1<=m&&0<=S;m--,S--)if(d[m]!==u[S]){if(m!==1||S!==1)do if(m--,S--,0>S||d[m]!==u[S]){var T=`
`+d[m].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=m&&0<=S);break}}}finally{re=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?D(e):""}function Z(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1),e;case 11:return e=W(e.type.render,!1),e;case 1:return e=W(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case F:return"Portal";case ie:return"Profiler";case B:return"StrictMode";case X:return"Suspense";case ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ee:return(e.displayName||"Context")+".Consumer";case ce:return(e._context.displayName||"Context")+".Provider";case Y:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}function fe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(n);case 8:return n===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e){var n=Ee(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,u=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=Ze(e))}function Ce(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),a="";return e&&(a=Ee(e)?e.checked?"true":"false":e.value),e=a,e!==o?(n.setValue(e),!0):!1}function Le(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fe(e,n){var o=n.checked;return P({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ke(e,n){var o=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;o=Ie(n.value!=null?n.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function pt(e,n){n=n.checked,n!=null&&k(e,"checked",n,!1)}function ft(e,n){pt(e,n);var o=Ie(n.value),a=n.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ye(e,n.type,o):n.hasOwnProperty("defaultValue")&&Ye(e,n.type,Ie(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ht(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Ye(e,n,o){(n!=="number"||Le(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var oe=Array.isArray;function ae(e,n,o,a){if(e=e.options,n){n={};for(var d=0;d<o.length;d++)n["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=n.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&a&&(e[o].defaultSelected=!0)}else{for(o=""+Ie(o),n=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function Ae(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return P({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ye(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(oe(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:Ie(o)}}function je(e,n){var o=Ie(n.value),a=Ie(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function be(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Xe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Je(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Xe(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ge,Ft=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,a,d){MSApp.execUnsafeLocalFunction(function(){return e(n,o,a,d)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ge=Ge||document.createElement("div"),Ge.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ge.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function lr(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var Pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eo=["Webkit","ms","Moz","O"];Object.keys(Pn).forEach(function(e){eo.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Pn[n]=Pn[e]})});function Oo(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Pn.hasOwnProperty(e)&&Pn[e]?(""+n).trim():n+"px"}function Ne(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=Oo(o,n[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,d):e[o]=d}}var at=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(e,n){if(n){if(at[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function $t(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qn=null;function Ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,Ho=null,Wo=null;function dp(e){if(e=oi(e)){if(typeof Rs!="function")throw Error(i(280));var n=e.stateNode;n&&(n=ma(n),Rs(e.stateNode,e.type,n))}}function up(e){Ho?Wo?Wo.push(e):Wo=[e]:Ho=e}function pp(){if(Ho){var e=Ho,n=Wo;if(Wo=Ho=null,dp(e),n)for(e=0;e<n.length;e++)dp(n[e])}}function fp(e,n){return e(n)}function hp(){}var ec=!1;function mp(e,n,o){if(ec)return e(n,o);ec=!0;try{return fp(e,n,o)}finally{ec=!1,(Ho!==null||Wo!==null)&&(hp(),pp())}}function Ds(e,n){var o=e.stateNode;if(o===null)return null;var a=ma(o);if(a===null)return null;o=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var tc=!1;if(y)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){tc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{tc=!1}function Ig(e,n,o,a,d,u,m,S,T){var V=Array.prototype.slice.call(arguments,3);try{n.apply(o,V)}catch(ne){this.onError(ne)}}var Fs=!1,qi=null,Zi=!1,nc=null,Ng={onError:function(e){Fs=!0,qi=e}};function Lg(e,n,o,a,d,u,m,S,T){Fs=!1,qi=null,Ig.apply(Ng,arguments)}function Ag(e,n,o,a,d,u,m,S,T){if(Lg.apply(this,arguments),Fs){if(Fs){var V=qi;Fs=!1,qi=null}else throw Error(i(198));Zi||(Zi=!0,nc=V)}}function to(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function gp(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function xp(e){if(to(e)!==e)throw Error(i(188))}function Tg(e){var n=e.alternate;if(!n){if(n=to(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,a=n;;){var d=o.return;if(d===null)break;var u=d.alternate;if(u===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===u.child){for(u=d.child;u;){if(u===o)return xp(d),e;if(u===a)return xp(d),n;u=u.sibling}throw Error(i(188))}if(o.return!==a.return)o=d,a=u;else{for(var m=!1,S=d.child;S;){if(S===o){m=!0,o=d,a=u;break}if(S===a){m=!0,a=d,o=u;break}S=S.sibling}if(!m){for(S=u.child;S;){if(S===o){m=!0,o=u,a=d;break}if(S===a){m=!0,a=u,o=d;break}S=S.sibling}if(!m)throw Error(i(189))}}if(o.alternate!==a)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function vp(e){return e=Tg(e),e!==null?yp(e):null}function yp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=yp(e);if(n!==null)return n;e=e.sibling}return null}var wp=s.unstable_scheduleCallback,jp=s.unstable_cancelCallback,Eg=s.unstable_shouldYield,$g=s.unstable_requestPaint,Ct=s.unstable_now,Pg=s.unstable_getCurrentPriorityLevel,rc=s.unstable_ImmediatePriority,bp=s.unstable_UserBlockingPriority,Yi=s.unstable_NormalPriority,Rg=s.unstable_LowPriority,kp=s.unstable_IdlePriority,Ki=null,Xn=null;function Dg(e){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:Bg,zg=Math.log,Fg=Math.LN2;function Bg(e){return e>>>=0,e===0?32:31-(zg(e)/Fg|0)|0}var Qi=64,Xi=4194304;function Bs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,n){var o=e.pendingLanes;if(o===0)return 0;var a=0,d=e.suspendedLanes,u=e.pingedLanes,m=o&268435455;if(m!==0){var S=m&~d;S!==0?a=Bs(S):(u&=m,u!==0&&(a=Bs(u)))}else m=o&~d,m!==0?a=Bs(m):u!==0&&(a=Bs(u));if(a===0)return 0;if(n!==0&&n!==a&&(n&d)===0&&(d=a&-a,u=n&-n,d>=u||d===16&&(u&4194240)!==0))return n;if((a&4)!==0&&(a|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)o=31-Rn(n),d=1<<o,a|=e[o],n&=~d;return a}function Og(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hg(e,n){for(var o=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,u=e.pendingLanes;0<u;){var m=31-Rn(u),S=1<<m,T=d[m];T===-1?((S&o)===0||(S&a)!==0)&&(d[m]=Og(S,n)):T<=n&&(e.expiredLanes|=S),u&=~S}}function oc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _p(){var e=Qi;return Qi<<=1,(Qi&4194240)===0&&(Qi=64),e}function sc(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function Os(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Rn(n),e[n]=o}function Wg(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<o;){var d=31-Rn(o),u=1<<d;n[d]=0,a[d]=-1,e[d]=-1,o&=~u}}function ic(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var a=31-Rn(o),d=1<<a;d&n|e[a]&n&&(e[a]|=n),o&=~d}}var Qe=0;function Cp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Sp,ac,Mp,Ip,Np,lc=!1,ea=[],Cr=null,Sr=null,Mr=null,Hs=new Map,Ws=new Map,Ir=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(e,n){switch(e){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Hs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(n.pointerId)}}function Us(e,n,o,a,d,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:o,eventSystemFlags:a,nativeEvent:u,targetContainers:[d]},n!==null&&(n=oi(n),n!==null&&ac(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function Vg(e,n,o,a,d){switch(n){case"focusin":return Cr=Us(Cr,e,n,o,a,d),!0;case"dragenter":return Sr=Us(Sr,e,n,o,a,d),!0;case"mouseover":return Mr=Us(Mr,e,n,o,a,d),!0;case"pointerover":var u=d.pointerId;return Hs.set(u,Us(Hs.get(u)||null,e,n,o,a,d)),!0;case"gotpointercapture":return u=d.pointerId,Ws.set(u,Us(Ws.get(u)||null,e,n,o,a,d)),!0}return!1}function Ap(e){var n=no(e.target);if(n!==null){var o=to(n);if(o!==null){if(n=o.tag,n===13){if(n=gp(o),n!==null){e.blockedOn=n,Np(e.priority,function(){Mp(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ta(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=dc(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);Qn=a,o.target.dispatchEvent(a),Qn=null}else return n=oi(o),n!==null&&ac(n),e.blockedOn=o,!1;n.shift()}return!0}function Tp(e,n,o){ta(e)&&o.delete(n)}function Gg(){lc=!1,Cr!==null&&ta(Cr)&&(Cr=null),Sr!==null&&ta(Sr)&&(Sr=null),Mr!==null&&ta(Mr)&&(Mr=null),Hs.forEach(Tp),Ws.forEach(Tp)}function Vs(e,n){e.blockedOn===n&&(e.blockedOn=null,lc||(lc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Gg)))}function Gs(e){function n(d){return Vs(d,e)}if(0<ea.length){Vs(ea[0],e);for(var o=1;o<ea.length;o++){var a=ea[o];a.blockedOn===e&&(a.blockedOn=null)}}for(Cr!==null&&Vs(Cr,e),Sr!==null&&Vs(Sr,e),Mr!==null&&Vs(Mr,e),Hs.forEach(n),Ws.forEach(n),o=0;o<Ir.length;o++)a=Ir[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<Ir.length&&(o=Ir[0],o.blockedOn===null);)Ap(o),o.blockedOn===null&&Ir.shift()}var Uo=j.ReactCurrentBatchConfig,na=!0;function qg(e,n,o,a){var d=Qe,u=Uo.transition;Uo.transition=null;try{Qe=1,cc(e,n,o,a)}finally{Qe=d,Uo.transition=u}}function Zg(e,n,o,a){var d=Qe,u=Uo.transition;Uo.transition=null;try{Qe=4,cc(e,n,o,a)}finally{Qe=d,Uo.transition=u}}function cc(e,n,o,a){if(na){var d=dc(e,n,o,a);if(d===null)Mc(e,n,a,ra,o),Lp(e,a);else if(Vg(d,e,n,o,a))a.stopPropagation();else if(Lp(e,a),n&4&&-1<Ug.indexOf(e)){for(;d!==null;){var u=oi(d);if(u!==null&&Sp(u),u=dc(e,n,o,a),u===null&&Mc(e,n,a,ra,o),u===d)break;d=u}d!==null&&a.stopPropagation()}else Mc(e,n,a,null,o)}}var ra=null;function dc(e,n,o,a){if(ra=null,e=Ps(a),e=no(e),e!==null)if(n=to(e),n===null)e=null;else if(o=n.tag,o===13){if(e=gp(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ra=e,null}function Ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pg()){case rc:return 1;case bp:return 4;case Yi:case Rg:return 16;case kp:return 536870912;default:return 16}default:return 16}}var Nr=null,uc=null,oa=null;function $p(){if(oa)return oa;var e,n=uc,o=n.length,a,d="value"in Nr?Nr.value:Nr.textContent,u=d.length;for(e=0;e<o&&n[e]===d[e];e++);var m=o-e;for(a=1;a<=m&&n[o-a]===d[u-a];a++);return oa=d.slice(e,1<a?1-a:void 0)}function sa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ia(){return!0}function Pp(){return!1}function un(e){function n(o,a,d,u,m){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(o=e[S],this[S]=o?o(u):u[S]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ia:Pp,this.isPropagationStopped=Pp,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),n}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=un(Vo),qs=P({},Vo,{view:0,detail:0}),Yg=un(qs),fc,hc,Zs,aa=P({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zs&&(Zs&&e.type==="mousemove"?(fc=e.screenX-Zs.screenX,hc=e.screenY-Zs.screenY):hc=fc=0,Zs=e),fc)},movementY:function(e){return"movementY"in e?e.movementY:hc}}),Rp=un(aa),Kg=P({},aa,{dataTransfer:0}),Qg=un(Kg),Xg=P({},qs,{relatedTarget:0}),mc=un(Xg),Jg=P({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),e2=un(Jg),t2=P({},Vo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n2=un(t2),r2=P({},Vo,{data:0}),Dp=un(r2),o2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a2(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=i2[e])?!!n[e]:!1}function gc(){return a2}var l2=P({},qs,{key:function(e){if(e.key){var n=o2[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(e){return e.type==="keypress"?sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c2=un(l2),d2=P({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=un(d2),u2=P({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),p2=un(u2),f2=P({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),h2=un(f2),m2=P({},aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g2=un(m2),x2=[9,13,27,32],xc=y&&"CompositionEvent"in window,Ys=null;y&&"documentMode"in document&&(Ys=document.documentMode);var v2=y&&"TextEvent"in window&&!Ys,Fp=y&&(!xc||Ys&&8<Ys&&11>=Ys),Bp=" ",Op=!1;function Hp(e,n){switch(e){case"keyup":return x2.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Go=!1;function y2(e,n){switch(e){case"compositionend":return Wp(n);case"keypress":return n.which!==32?null:(Op=!0,Bp);case"textInput":return e=n.data,e===Bp&&Op?null:e;default:return null}}function w2(e,n){if(Go)return e==="compositionend"||!xc&&Hp(e,n)?(e=$p(),oa=uc=Nr=null,Go=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fp&&n.locale!=="ko"?null:n.data;default:return null}}var j2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!j2[e.type]:n==="textarea"}function Vp(e,n,o,a){up(a),n=pa(n,"onChange"),0<n.length&&(o=new pc("onChange","change",null,o,a),e.push({event:o,listeners:n}))}var Ks=null,Qs=null;function b2(e){c1(e,0)}function la(e){var n=Qo(e);if(Ce(n))return e}function k2(e,n){if(e==="change")return n}var Gp=!1;if(y){var vc;if(y){var yc="oninput"in document;if(!yc){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),yc=typeof qp.oninput=="function"}vc=yc}else vc=!1;Gp=vc&&(!document.documentMode||9<document.documentMode)}function Zp(){Ks&&(Ks.detachEvent("onpropertychange",Yp),Qs=Ks=null)}function Yp(e){if(e.propertyName==="value"&&la(Qs)){var n=[];Vp(n,Qs,e,Ps(e)),mp(b2,n)}}function _2(e,n,o){e==="focusin"?(Zp(),Ks=n,Qs=o,Ks.attachEvent("onpropertychange",Yp)):e==="focusout"&&Zp()}function C2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return la(Qs)}function S2(e,n){if(e==="click")return la(n)}function M2(e,n){if(e==="input"||e==="change")return la(n)}function I2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Dn=typeof Object.is=="function"?Object.is:I2;function Xs(e,n){if(Dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!g.call(n,d)||!Dn(e[d],n[d]))return!1}return!0}function Kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qp(e,n){var o=Kp(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=n&&a>=n)return{node:o,offset:n-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kp(o)}}function Xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jp(){for(var e=window,n=Le();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=Le(e.document)}return n}function wc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function N2(e){var n=Jp(),o=e.focusedElem,a=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&Xp(o.ownerDocument.documentElement,o)){if(a!==null&&wc(o)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=o.textContent.length,u=Math.min(a.start,d);a=a.end===void 0?u:Math.min(a.end,d),!e.extend&&u>a&&(d=a,a=u,u=d),d=Qp(o,u);var m=Qp(o,a);d&&m&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),u>a?(e.addRange(n),e.extend(m.node,m.offset)):(n.setEnd(m.node,m.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L2=y&&"documentMode"in document&&11>=document.documentMode,qo=null,jc=null,Js=null,bc=!1;function e1(e,n,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;bc||qo==null||qo!==Le(a)||(a=qo,"selectionStart"in a&&wc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Js&&Xs(Js,a)||(Js=a,a=pa(jc,"onSelect"),0<a.length&&(n=new pc("onSelect","select",null,n,o),e.push({event:n,listeners:a}),n.target=qo)))}function ca(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var Zo={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},kc={},t1={};y&&(t1=document.createElement("div").style,"AnimationEvent"in window||(delete Zo.animationend.animation,delete Zo.animationiteration.animation,delete Zo.animationstart.animation),"TransitionEvent"in window||delete Zo.transitionend.transition);function da(e){if(kc[e])return kc[e];if(!Zo[e])return e;var n=Zo[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in t1)return kc[e]=n[o];return e}var n1=da("animationend"),r1=da("animationiteration"),o1=da("animationstart"),s1=da("transitionend"),i1=new Map,a1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,n){i1.set(e,n),p(n,[e])}for(var _c=0;_c<a1.length;_c++){var Cc=a1[_c],A2=Cc.toLowerCase(),T2=Cc[0].toUpperCase()+Cc.slice(1);Lr(A2,"on"+T2)}Lr(n1,"onAnimationEnd"),Lr(r1,"onAnimationIteration"),Lr(o1,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(s1,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E2=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function l1(e,n,o){var a=e.type||"unknown-event";e.currentTarget=o,Ag(a,n,void 0,e),e.currentTarget=null}function c1(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],d=a.event;a=a.listeners;e:{var u=void 0;if(n)for(var m=a.length-1;0<=m;m--){var S=a[m],T=S.instance,V=S.currentTarget;if(S=S.listener,T!==u&&d.isPropagationStopped())break e;l1(d,S,V),u=T}else for(m=0;m<a.length;m++){if(S=a[m],T=S.instance,V=S.currentTarget,S=S.listener,T!==u&&d.isPropagationStopped())break e;l1(d,S,V),u=T}}}if(Zi)throw e=nc,Zi=!1,nc=null,e}function ct(e,n){var o=n[Ec];o===void 0&&(o=n[Ec]=new Set);var a=e+"__bubble";o.has(a)||(d1(n,e,2,!1),o.add(a))}function Sc(e,n,o){var a=0;n&&(a|=4),d1(o,e,a,n)}var ua="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[ua]){e[ua]=!0,l.forEach(function(o){o!=="selectionchange"&&(E2.has(o)||Sc(o,!1,e),Sc(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ua]||(n[ua]=!0,Sc("selectionchange",!1,n))}}function d1(e,n,o,a){switch(Ep(n)){case 1:var d=qg;break;case 4:d=Zg;break;default:d=cc}o=d.bind(null,n,o,e),d=void 0,!tc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(n,o,{capture:!0,passive:d}):e.addEventListener(n,o,!0):d!==void 0?e.addEventListener(n,o,{passive:d}):e.addEventListener(n,o,!1)}function Mc(e,n,o,a,d){var u=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var S=a.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(m===4)for(m=a.return;m!==null;){var T=m.tag;if((T===3||T===4)&&(T=m.stateNode.containerInfo,T===d||T.nodeType===8&&T.parentNode===d))return;m=m.return}for(;S!==null;){if(m=no(S),m===null)return;if(T=m.tag,T===5||T===6){a=u=m;continue e}S=S.parentNode}}a=a.return}mp(function(){var V=u,ne=Ps(o),se=[];e:{var te=i1.get(e);if(te!==void 0){var pe=pc,me=e;switch(e){case"keypress":if(sa(o)===0)break e;case"keydown":case"keyup":pe=c2;break;case"focusin":me="focus",pe=mc;break;case"focusout":me="blur",pe=mc;break;case"beforeblur":case"afterblur":pe=mc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=p2;break;case n1:case r1:case o1:pe=e2;break;case s1:pe=h2;break;case"scroll":pe=Yg;break;case"wheel":pe=g2;break;case"copy":case"cut":case"paste":pe=n2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=zp}var xe=(n&4)!==0,St=!xe&&e==="scroll",O=xe?te!==null?te+"Capture":null:te;xe=[];for(var R=V,U;R!==null;){U=R;var le=U.stateNode;if(U.tag===5&&le!==null&&(U=le,O!==null&&(le=Ds(R,O),le!=null&&xe.push(ni(R,le,U)))),St)break;R=R.return}0<xe.length&&(te=new pe(te,me,null,o,ne),se.push({event:te,listeners:xe}))}}if((n&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",pe=e==="mouseout"||e==="pointerout",te&&o!==Qn&&(me=o.relatedTarget||o.fromElement)&&(no(me)||me[cr]))break e;if((pe||te)&&(te=ne.window===ne?ne:(te=ne.ownerDocument)?te.defaultView||te.parentWindow:window,pe?(me=o.relatedTarget||o.toElement,pe=V,me=me?no(me):null,me!==null&&(St=to(me),me!==St||me.tag!==5&&me.tag!==6)&&(me=null)):(pe=null,me=V),pe!==me)){if(xe=Rp,le="onMouseLeave",O="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(xe=zp,le="onPointerLeave",O="onPointerEnter",R="pointer"),St=pe==null?te:Qo(pe),U=me==null?te:Qo(me),te=new xe(le,R+"leave",pe,o,ne),te.target=St,te.relatedTarget=U,le=null,no(ne)===V&&(xe=new xe(O,R+"enter",me,o,ne),xe.target=U,xe.relatedTarget=St,le=xe),St=le,pe&&me)t:{for(xe=pe,O=me,R=0,U=xe;U;U=Yo(U))R++;for(U=0,le=O;le;le=Yo(le))U++;for(;0<R-U;)xe=Yo(xe),R--;for(;0<U-R;)O=Yo(O),U--;for(;R--;){if(xe===O||O!==null&&xe===O.alternate)break t;xe=Yo(xe),O=Yo(O)}xe=null}else xe=null;pe!==null&&u1(se,te,pe,xe,!1),me!==null&&St!==null&&u1(se,St,me,xe,!0)}}e:{if(te=V?Qo(V):window,pe=te.nodeName&&te.nodeName.toLowerCase(),pe==="select"||pe==="input"&&te.type==="file")var we=k2;else if(Up(te))if(Gp)we=M2;else{we=C2;var ke=_2}else(pe=te.nodeName)&&pe.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(we=S2);if(we&&(we=we(e,V))){Vp(se,we,o,ne);break e}ke&&ke(e,te,V),e==="focusout"&&(ke=te._wrapperState)&&ke.controlled&&te.type==="number"&&Ye(te,"number",te.value)}switch(ke=V?Qo(V):window,e){case"focusin":(Up(ke)||ke.contentEditable==="true")&&(qo=ke,jc=V,Js=null);break;case"focusout":Js=jc=qo=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,e1(se,o,ne);break;case"selectionchange":if(L2)break;case"keydown":case"keyup":e1(se,o,ne)}var _e;if(xc)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Go?Hp(e,o)&&(Se="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Se="onCompositionStart");Se&&(Fp&&o.locale!=="ko"&&(Go||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Go&&(_e=$p()):(Nr=ne,uc="value"in Nr?Nr.value:Nr.textContent,Go=!0)),ke=pa(V,Se),0<ke.length&&(Se=new Dp(Se,e,null,o,ne),se.push({event:Se,listeners:ke}),_e?Se.data=_e:(_e=Wp(o),_e!==null&&(Se.data=_e)))),(_e=v2?y2(e,o):w2(e,o))&&(V=pa(V,"onBeforeInput"),0<V.length&&(ne=new Dp("onBeforeInput","beforeinput",null,o,ne),se.push({event:ne,listeners:V}),ne.data=_e))}c1(se,n)})}function ni(e,n,o){return{instance:e,listener:n,currentTarget:o}}function pa(e,n){for(var o=n+"Capture",a=[];e!==null;){var d=e,u=d.stateNode;d.tag===5&&u!==null&&(d=u,u=Ds(e,o),u!=null&&a.unshift(ni(e,u,d)),u=Ds(e,n),u!=null&&a.push(ni(e,u,d))),e=e.return}return a}function Yo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function u1(e,n,o,a,d){for(var u=n._reactName,m=[];o!==null&&o!==a;){var S=o,T=S.alternate,V=S.stateNode;if(T!==null&&T===a)break;S.tag===5&&V!==null&&(S=V,d?(T=Ds(o,u),T!=null&&m.unshift(ni(o,T,S))):d||(T=Ds(o,u),T!=null&&m.push(ni(o,T,S)))),o=o.return}m.length!==0&&e.push({event:n,listeners:m})}var $2=/\r\n?/g,P2=/\u0000|\uFFFD/g;function p1(e){return(typeof e=="string"?e:""+e).replace($2,`
`).replace(P2,"")}function fa(e,n,o){if(n=p1(n),p1(e)!==n&&o)throw Error(i(425))}function ha(){}var Ic=null,Nc=null;function Lc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,R2=typeof clearTimeout=="function"?clearTimeout:void 0,f1=typeof Promise=="function"?Promise:void 0,D2=typeof queueMicrotask=="function"?queueMicrotask:typeof f1<"u"?function(e){return f1.resolve(null).then(e).catch(z2)}:Ac;function z2(e){setTimeout(function(){throw e})}function Tc(e,n){var o=n,a=0;do{var d=o.nextSibling;if(e.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){e.removeChild(d),Gs(n);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);Gs(n)}function Ar(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function h1(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Ko,ri="__reactProps$"+Ko,cr="__reactContainer$"+Ko,Ec="__reactEvents$"+Ko,F2="__reactListeners$"+Ko,B2="__reactHandles$"+Ko;function no(e){var n=e[Jn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[cr]||o[Jn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=h1(e);e!==null;){if(o=e[Jn])return o;e=h1(e)}return n}e=o,o=e.parentNode}return null}function oi(e){return e=e[Jn]||e[cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function ma(e){return e[ri]||null}var $c=[],Xo=-1;function Tr(e){return{current:e}}function dt(e){0>Xo||(e.current=$c[Xo],$c[Xo]=null,Xo--)}function lt(e,n){Xo++,$c[Xo]=e.current,e.current=n}var Er={},Wt=Tr(Er),Xt=Tr(!1),ro=Er;function Jo(e,n){var o=e.type.contextTypes;if(!o)return Er;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var d={},u;for(u in o)d[u]=n[u];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(e){return e=e.childContextTypes,e!=null}function ga(){dt(Xt),dt(Wt)}function m1(e,n,o){if(Wt.current!==Er)throw Error(i(168));lt(Wt,n),lt(Xt,o)}function g1(e,n,o){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in n))throw Error(i(108,fe(e)||"Unknown",d));return P({},o,a)}function xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Er,ro=Wt.current,lt(Wt,e),lt(Xt,Xt.current),!0}function x1(e,n,o){var a=e.stateNode;if(!a)throw Error(i(169));o?(e=g1(e,n,ro),a.__reactInternalMemoizedMergedChildContext=e,dt(Xt),dt(Wt),lt(Wt,e)):dt(Xt),lt(Xt,o)}var dr=null,va=!1,Pc=!1;function v1(e){dr===null?dr=[e]:dr.push(e)}function O2(e){va=!0,v1(e)}function $r(){if(!Pc&&dr!==null){Pc=!0;var e=0,n=Qe;try{var o=dr;for(Qe=1;e<o.length;e++){var a=o[e];do a=a(!0);while(a!==null)}dr=null,va=!1}catch(d){throw dr!==null&&(dr=dr.slice(e+1)),wp(rc,$r),d}finally{Qe=n,Pc=!1}}return null}var es=[],ts=0,ya=null,wa=0,wn=[],jn=0,oo=null,ur=1,pr="";function so(e,n){es[ts++]=wa,es[ts++]=ya,ya=e,wa=n}function y1(e,n,o){wn[jn++]=ur,wn[jn++]=pr,wn[jn++]=oo,oo=e;var a=ur;e=pr;var d=32-Rn(a)-1;a&=~(1<<d),o+=1;var u=32-Rn(n)+d;if(30<u){var m=d-d%5;u=(a&(1<<m)-1).toString(32),a>>=m,d-=m,ur=1<<32-Rn(n)+d|o<<d|a,pr=u+e}else ur=1<<u|o<<d|a,pr=e}function Rc(e){e.return!==null&&(so(e,1),y1(e,1,0))}function Dc(e){for(;e===ya;)ya=es[--ts],es[ts]=null,wa=es[--ts],es[ts]=null;for(;e===oo;)oo=wn[--jn],wn[jn]=null,pr=wn[--jn],wn[jn]=null,ur=wn[--jn],wn[jn]=null}var pn=null,fn=null,mt=!1,zn=null;function w1(e,n){var o=Cn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function j1(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,pn=e,fn=Ar(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,pn=e,fn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=oo!==null?{id:ur,overflow:pr}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Cn(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,pn=e,fn=null,!0):!1;default:return!1}}function zc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fc(e){if(mt){var n=fn;if(n){var o=n;if(!j1(e,n)){if(zc(e))throw Error(i(418));n=Ar(o.nextSibling);var a=pn;n&&j1(e,n)?w1(a,o):(e.flags=e.flags&-4097|2,mt=!1,pn=e)}}else{if(zc(e))throw Error(i(418));e.flags=e.flags&-4097|2,mt=!1,pn=e}}}function b1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pn=e}function ja(e){if(e!==pn)return!1;if(!mt)return b1(e),mt=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Lc(e.type,e.memoizedProps)),n&&(n=fn)){if(zc(e))throw k1(),Error(i(418));for(;n;)w1(e,n),n=Ar(n.nextSibling)}if(b1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){fn=Ar(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}fn=null}}else fn=pn?Ar(e.stateNode.nextSibling):null;return!0}function k1(){for(var e=fn;e;)e=Ar(e.nextSibling)}function ns(){fn=pn=null,mt=!1}function Bc(e){zn===null?zn=[e]:zn.push(e)}var H2=j.ReactCurrentBatchConfig;function si(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var a=o.stateNode}if(!a)throw Error(i(147,e));var d=a,u=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(m){var S=d.refs;m===null?delete S[u]:S[u]=m},n._stringRef=u,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function ba(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function _1(e){var n=e._init;return n(e._payload)}function C1(e){function n(O,R){if(e){var U=O.deletions;U===null?(O.deletions=[R],O.flags|=16):U.push(R)}}function o(O,R){if(!e)return null;for(;R!==null;)n(O,R),R=R.sibling;return null}function a(O,R){for(O=new Map;R!==null;)R.key!==null?O.set(R.key,R):O.set(R.index,R),R=R.sibling;return O}function d(O,R){return O=Hr(O,R),O.index=0,O.sibling=null,O}function u(O,R,U){return O.index=U,e?(U=O.alternate,U!==null?(U=U.index,U<R?(O.flags|=2,R):U):(O.flags|=2,R)):(O.flags|=1048576,R)}function m(O){return e&&O.alternate===null&&(O.flags|=2),O}function S(O,R,U,le){return R===null||R.tag!==6?(R=Ad(U,O.mode,le),R.return=O,R):(R=d(R,U),R.return=O,R)}function T(O,R,U,le){var we=U.type;return we===z?ne(O,R,U.props.children,le,U.key):R!==null&&(R.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===q&&_1(we)===R.type)?(le=d(R,U.props),le.ref=si(O,R,U),le.return=O,le):(le=Ga(U.type,U.key,U.props,null,O.mode,le),le.ref=si(O,R,U),le.return=O,le)}function V(O,R,U,le){return R===null||R.tag!==4||R.stateNode.containerInfo!==U.containerInfo||R.stateNode.implementation!==U.implementation?(R=Td(U,O.mode,le),R.return=O,R):(R=d(R,U.children||[]),R.return=O,R)}function ne(O,R,U,le,we){return R===null||R.tag!==7?(R=ho(U,O.mode,le,we),R.return=O,R):(R=d(R,U),R.return=O,R)}function se(O,R,U){if(typeof R=="string"&&R!==""||typeof R=="number")return R=Ad(""+R,O.mode,U),R.return=O,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case $:return U=Ga(R.type,R.key,R.props,null,O.mode,U),U.ref=si(O,null,R),U.return=O,U;case F:return R=Td(R,O.mode,U),R.return=O,R;case q:var le=R._init;return se(O,le(R._payload),U)}if(oe(R)||H(R))return R=ho(R,O.mode,U,null),R.return=O,R;ba(O,R)}return null}function te(O,R,U,le){var we=R!==null?R.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return we!==null?null:S(O,R,""+U,le);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case $:return U.key===we?T(O,R,U,le):null;case F:return U.key===we?V(O,R,U,le):null;case q:return we=U._init,te(O,R,we(U._payload),le)}if(oe(U)||H(U))return we!==null?null:ne(O,R,U,le,null);ba(O,U)}return null}function pe(O,R,U,le,we){if(typeof le=="string"&&le!==""||typeof le=="number")return O=O.get(U)||null,S(R,O,""+le,we);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case $:return O=O.get(le.key===null?U:le.key)||null,T(R,O,le,we);case F:return O=O.get(le.key===null?U:le.key)||null,V(R,O,le,we);case q:var ke=le._init;return pe(O,R,U,ke(le._payload),we)}if(oe(le)||H(le))return O=O.get(U)||null,ne(R,O,le,we,null);ba(R,le)}return null}function me(O,R,U,le){for(var we=null,ke=null,_e=R,Se=R=0,Dt=null;_e!==null&&Se<U.length;Se++){_e.index>Se?(Dt=_e,_e=null):Dt=_e.sibling;var Ve=te(O,_e,U[Se],le);if(Ve===null){_e===null&&(_e=Dt);break}e&&_e&&Ve.alternate===null&&n(O,_e),R=u(Ve,R,Se),ke===null?we=Ve:ke.sibling=Ve,ke=Ve,_e=Dt}if(Se===U.length)return o(O,_e),mt&&so(O,Se),we;if(_e===null){for(;Se<U.length;Se++)_e=se(O,U[Se],le),_e!==null&&(R=u(_e,R,Se),ke===null?we=_e:ke.sibling=_e,ke=_e);return mt&&so(O,Se),we}for(_e=a(O,_e);Se<U.length;Se++)Dt=pe(_e,O,Se,U[Se],le),Dt!==null&&(e&&Dt.alternate!==null&&_e.delete(Dt.key===null?Se:Dt.key),R=u(Dt,R,Se),ke===null?we=Dt:ke.sibling=Dt,ke=Dt);return e&&_e.forEach(function(Wr){return n(O,Wr)}),mt&&so(O,Se),we}function xe(O,R,U,le){var we=H(U);if(typeof we!="function")throw Error(i(150));if(U=we.call(U),U==null)throw Error(i(151));for(var ke=we=null,_e=R,Se=R=0,Dt=null,Ve=U.next();_e!==null&&!Ve.done;Se++,Ve=U.next()){_e.index>Se?(Dt=_e,_e=null):Dt=_e.sibling;var Wr=te(O,_e,Ve.value,le);if(Wr===null){_e===null&&(_e=Dt);break}e&&_e&&Wr.alternate===null&&n(O,_e),R=u(Wr,R,Se),ke===null?we=Wr:ke.sibling=Wr,ke=Wr,_e=Dt}if(Ve.done)return o(O,_e),mt&&so(O,Se),we;if(_e===null){for(;!Ve.done;Se++,Ve=U.next())Ve=se(O,Ve.value,le),Ve!==null&&(R=u(Ve,R,Se),ke===null?we=Ve:ke.sibling=Ve,ke=Ve);return mt&&so(O,Se),we}for(_e=a(O,_e);!Ve.done;Se++,Ve=U.next())Ve=pe(_e,O,Se,Ve.value,le),Ve!==null&&(e&&Ve.alternate!==null&&_e.delete(Ve.key===null?Se:Ve.key),R=u(Ve,R,Se),ke===null?we=Ve:ke.sibling=Ve,ke=Ve);return e&&_e.forEach(function(jx){return n(O,jx)}),mt&&so(O,Se),we}function St(O,R,U,le){if(typeof U=="object"&&U!==null&&U.type===z&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case $:e:{for(var we=U.key,ke=R;ke!==null;){if(ke.key===we){if(we=U.type,we===z){if(ke.tag===7){o(O,ke.sibling),R=d(ke,U.props.children),R.return=O,O=R;break e}}else if(ke.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===q&&_1(we)===ke.type){o(O,ke.sibling),R=d(ke,U.props),R.ref=si(O,ke,U),R.return=O,O=R;break e}o(O,ke);break}else n(O,ke);ke=ke.sibling}U.type===z?(R=ho(U.props.children,O.mode,le,U.key),R.return=O,O=R):(le=Ga(U.type,U.key,U.props,null,O.mode,le),le.ref=si(O,R,U),le.return=O,O=le)}return m(O);case F:e:{for(ke=U.key;R!==null;){if(R.key===ke)if(R.tag===4&&R.stateNode.containerInfo===U.containerInfo&&R.stateNode.implementation===U.implementation){o(O,R.sibling),R=d(R,U.children||[]),R.return=O,O=R;break e}else{o(O,R);break}else n(O,R);R=R.sibling}R=Td(U,O.mode,le),R.return=O,O=R}return m(O);case q:return ke=U._init,St(O,R,ke(U._payload),le)}if(oe(U))return me(O,R,U,le);if(H(U))return xe(O,R,U,le);ba(O,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,R!==null&&R.tag===6?(o(O,R.sibling),R=d(R,U),R.return=O,O=R):(o(O,R),R=Ad(U,O.mode,le),R.return=O,O=R),m(O)):o(O,R)}return St}var rs=C1(!0),S1=C1(!1),ka=Tr(null),_a=null,os=null,Oc=null;function Hc(){Oc=os=_a=null}function Wc(e){var n=ka.current;dt(ka),e._currentValue=n}function Uc(e,n,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===o)break;e=e.return}}function ss(e,n){_a=e,Oc=os=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(en=!0),e.firstContext=null)}function bn(e){var n=e._currentValue;if(Oc!==e)if(e={context:e,memoizedValue:n,next:null},os===null){if(_a===null)throw Error(i(308));os=e,_a.dependencies={lanes:0,firstContext:e}}else os=os.next=e;return n}var io=null;function Vc(e){io===null?io=[e]:io.push(e)}function M1(e,n,o,a){var d=n.interleaved;return d===null?(o.next=o,Vc(n)):(o.next=d.next,d.next=o),n.interleaved=o,fr(e,a)}function fr(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Pr=!1;function Gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I1(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Rr(e,n,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ue&2)!==0){var d=a.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),a.pending=n,fr(e,o)}return d=a.interleaved,d===null?(n.next=n,Vc(a)):(n.next=d.next,d.next=n),a.interleaved=n,fr(e,o)}function Ca(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,o|=a,n.lanes=o,ic(e,o)}}function N1(e,n){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,u=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};u===null?d=u=m:u=u.next=m,o=o.next}while(o!==null);u===null?d=u=n:u=u.next=n}else d=u=n;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:u,shared:a.shared,effects:a.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Sa(e,n,o,a){var d=e.updateQueue;Pr=!1;var u=d.firstBaseUpdate,m=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var T=S,V=T.next;T.next=null,m===null?u=V:m.next=V,m=T;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,S=ne.lastBaseUpdate,S!==m&&(S===null?ne.firstBaseUpdate=V:S.next=V,ne.lastBaseUpdate=T))}if(u!==null){var se=d.baseState;m=0,ne=V=T=null,S=u;do{var te=S.lane,pe=S.eventTime;if((a&te)===te){ne!==null&&(ne=ne.next={eventTime:pe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var me=e,xe=S;switch(te=n,pe=o,xe.tag){case 1:if(me=xe.payload,typeof me=="function"){se=me.call(pe,se,te);break e}se=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=xe.payload,te=typeof me=="function"?me.call(pe,se,te):me,te==null)break e;se=P({},se,te);break e;case 2:Pr=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,te=d.effects,te===null?d.effects=[S]:te.push(S))}else pe={eventTime:pe,lane:te,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ne===null?(V=ne=pe,T=se):ne=ne.next=pe,m|=te;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;te=S,S=te.next,te.next=null,d.lastBaseUpdate=te,d.shared.pending=null}}while(!0);if(ne===null&&(T=se),d.baseState=T,d.firstBaseUpdate=V,d.lastBaseUpdate=ne,n=d.shared.interleaved,n!==null){d=n;do m|=d.lane,d=d.next;while(d!==n)}else u===null&&(d.shared.lanes=0);co|=m,e.lanes=m,e.memoizedState=se}}function L1(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(i(191,d));d.call(a)}}}var ii={},er=Tr(ii),ai=Tr(ii),li=Tr(ii);function ao(e){if(e===ii)throw Error(i(174));return e}function qc(e,n){switch(lt(li,n),lt(ai,e),lt(er,ii),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Je(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Je(n,e)}dt(er),lt(er,n)}function is(){dt(er),dt(ai),dt(li)}function A1(e){ao(li.current);var n=ao(er.current),o=Je(n,e.type);n!==o&&(lt(ai,e),lt(er,o))}function Zc(e){ai.current===e&&(dt(er),dt(ai))}var vt=Tr(0);function Ma(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yc=[];function Kc(){for(var e=0;e<Yc.length;e++)Yc[e]._workInProgressVersionPrimary=null;Yc.length=0}var Ia=j.ReactCurrentDispatcher,Qc=j.ReactCurrentBatchConfig,lo=0,yt=null,At=null,Pt=null,Na=!1,ci=!1,di=0,W2=0;function Ut(){throw Error(i(321))}function Xc(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!Dn(e[o],n[o]))return!1;return!0}function Jc(e,n,o,a,d,u){if(lo=u,yt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ia.current=e===null||e.memoizedState===null?q2:Z2,e=o(a,d),ci){u=0;do{if(ci=!1,di=0,25<=u)throw Error(i(301));u+=1,Pt=At=null,n.updateQueue=null,Ia.current=Y2,e=o(a,d)}while(ci)}if(Ia.current=Ta,n=At!==null&&At.next!==null,lo=0,Pt=At=yt=null,Na=!1,n)throw Error(i(300));return e}function ed(){var e=di!==0;return di=0,e}function tr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?yt.memoizedState=Pt=e:Pt=Pt.next=e,Pt}function kn(){if(At===null){var e=yt.alternate;e=e!==null?e.memoizedState:null}else e=At.next;var n=Pt===null?yt.memoizedState:Pt.next;if(n!==null)Pt=n,At=e;else{if(e===null)throw Error(i(310));At=e,e={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Pt===null?yt.memoizedState=Pt=e:Pt=Pt.next=e}return Pt}function ui(e,n){return typeof n=="function"?n(e):n}function td(e){var n=kn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var a=At,d=a.baseQueue,u=o.pending;if(u!==null){if(d!==null){var m=d.next;d.next=u.next,u.next=m}a.baseQueue=d=u,o.pending=null}if(d!==null){u=d.next,a=a.baseState;var S=m=null,T=null,V=u;do{var ne=V.lane;if((lo&ne)===ne)T!==null&&(T=T.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),a=V.hasEagerState?V.eagerState:e(a,V.action);else{var se={lane:ne,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};T===null?(S=T=se,m=a):T=T.next=se,yt.lanes|=ne,co|=ne}V=V.next}while(V!==null&&V!==u);T===null?m=a:T.next=S,Dn(a,n.memoizedState)||(en=!0),n.memoizedState=a,n.baseState=m,n.baseQueue=T,o.lastRenderedState=a}if(e=o.interleaved,e!==null){d=e;do u=d.lane,yt.lanes|=u,co|=u,d=d.next;while(d!==e)}else d===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function nd(e){var n=kn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var a=o.dispatch,d=o.pending,u=n.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do u=e(u,m.action),m=m.next;while(m!==d);Dn(u,n.memoizedState)||(en=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),o.lastRenderedState=u}return[u,a]}function T1(){}function E1(e,n){var o=yt,a=kn(),d=n(),u=!Dn(a.memoizedState,d);if(u&&(a.memoizedState=d,en=!0),a=a.queue,rd(R1.bind(null,o,a,e),[e]),a.getSnapshot!==n||u||Pt!==null&&Pt.memoizedState.tag&1){if(o.flags|=2048,pi(9,P1.bind(null,o,a,d,n),void 0,null),Rt===null)throw Error(i(349));(lo&30)!==0||$1(o,n,d)}return d}function $1(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=yt.updateQueue,n===null?(n={lastEffect:null,stores:null},yt.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function P1(e,n,o,a){n.value=o,n.getSnapshot=a,D1(n)&&z1(e)}function R1(e,n,o){return o(function(){D1(n)&&z1(e)})}function D1(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!Dn(e,o)}catch{return!0}}function z1(e){var n=fr(e,1);n!==null&&Hn(n,e,1,-1)}function F1(e){var n=tr();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},n.queue=e,e=e.dispatch=G2.bind(null,yt,e),[n.memoizedState,e]}function pi(e,n,o,a){return e={tag:e,create:n,destroy:o,deps:a,next:null},n=yt.updateQueue,n===null?(n={lastEffect:null,stores:null},yt.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,n.lastEffect=e)),e}function B1(){return kn().memoizedState}function La(e,n,o,a){var d=tr();yt.flags|=e,d.memoizedState=pi(1|n,o,void 0,a===void 0?null:a)}function Aa(e,n,o,a){var d=kn();a=a===void 0?null:a;var u=void 0;if(At!==null){var m=At.memoizedState;if(u=m.destroy,a!==null&&Xc(a,m.deps)){d.memoizedState=pi(n,o,u,a);return}}yt.flags|=e,d.memoizedState=pi(1|n,o,u,a)}function O1(e,n){return La(8390656,8,e,n)}function rd(e,n){return Aa(2048,8,e,n)}function H1(e,n){return Aa(4,2,e,n)}function W1(e,n){return Aa(4,4,e,n)}function U1(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function V1(e,n,o){return o=o!=null?o.concat([e]):null,Aa(4,4,U1.bind(null,n,e),o)}function od(){}function G1(e,n){var o=kn();n=n===void 0?null:n;var a=o.memoizedState;return a!==null&&n!==null&&Xc(n,a[1])?a[0]:(o.memoizedState=[e,n],e)}function q1(e,n){var o=kn();n=n===void 0?null:n;var a=o.memoizedState;return a!==null&&n!==null&&Xc(n,a[1])?a[0]:(e=e(),o.memoizedState=[e,n],e)}function Z1(e,n,o){return(lo&21)===0?(e.baseState&&(e.baseState=!1,en=!0),e.memoizedState=o):(Dn(o,n)||(o=_p(),yt.lanes|=o,co|=o,e.baseState=!0),n)}function U2(e,n){var o=Qe;Qe=o!==0&&4>o?o:4,e(!0);var a=Qc.transition;Qc.transition={};try{e(!1),n()}finally{Qe=o,Qc.transition=a}}function Y1(){return kn().memoizedState}function V2(e,n,o){var a=Br(e);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},K1(e))Q1(n,o);else if(o=M1(e,n,o,a),o!==null){var d=Kt();Hn(o,e,a,d),X1(o,n,a)}}function G2(e,n,o){var a=Br(e),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(K1(e))Q1(n,d);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var m=n.lastRenderedState,S=u(m,o);if(d.hasEagerState=!0,d.eagerState=S,Dn(S,m)){var T=n.interleaved;T===null?(d.next=d,Vc(n)):(d.next=T.next,T.next=d),n.interleaved=d;return}}catch{}finally{}o=M1(e,n,d,a),o!==null&&(d=Kt(),Hn(o,e,a,d),X1(o,n,a))}}function K1(e){var n=e.alternate;return e===yt||n!==null&&n===yt}function Q1(e,n){ci=Na=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function X1(e,n,o){if((o&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,o|=a,n.lanes=o,ic(e,o)}}var Ta={readContext:bn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},q2={readContext:bn,useCallback:function(e,n){return tr().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:O1,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,La(4194308,4,U1.bind(null,n,e),o)},useLayoutEffect:function(e,n){return La(4194308,4,e,n)},useInsertionEffect:function(e,n){return La(4,2,e,n)},useMemo:function(e,n){var o=tr();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var a=tr();return n=o!==void 0?o(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=V2.bind(null,yt,e),[a.memoizedState,e]},useRef:function(e){var n=tr();return e={current:e},n.memoizedState=e},useState:F1,useDebugValue:od,useDeferredValue:function(e){return tr().memoizedState=e},useTransition:function(){var e=F1(!1),n=e[0];return e=U2.bind(null,e[1]),tr().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var a=yt,d=tr();if(mt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),Rt===null)throw Error(i(349));(lo&30)!==0||$1(a,n,o)}d.memoizedState=o;var u={value:o,getSnapshot:n};return d.queue=u,O1(R1.bind(null,a,u,e),[e]),a.flags|=2048,pi(9,P1.bind(null,a,u,o,n),void 0,null),o},useId:function(){var e=tr(),n=Rt.identifierPrefix;if(mt){var o=pr,a=ur;o=(a&~(1<<32-Rn(a)-1)).toString(32)+o,n=":"+n+"R"+o,o=di++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=W2++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Z2={readContext:bn,useCallback:G1,useContext:bn,useEffect:rd,useImperativeHandle:V1,useInsertionEffect:H1,useLayoutEffect:W1,useMemo:q1,useReducer:td,useRef:B1,useState:function(){return td(ui)},useDebugValue:od,useDeferredValue:function(e){var n=kn();return Z1(n,At.memoizedState,e)},useTransition:function(){var e=td(ui)[0],n=kn().memoizedState;return[e,n]},useMutableSource:T1,useSyncExternalStore:E1,useId:Y1,unstable_isNewReconciler:!1},Y2={readContext:bn,useCallback:G1,useContext:bn,useEffect:rd,useImperativeHandle:V1,useInsertionEffect:H1,useLayoutEffect:W1,useMemo:q1,useReducer:nd,useRef:B1,useState:function(){return nd(ui)},useDebugValue:od,useDeferredValue:function(e){var n=kn();return At===null?n.memoizedState=e:Z1(n,At.memoizedState,e)},useTransition:function(){var e=nd(ui)[0],n=kn().memoizedState;return[e,n]},useMutableSource:T1,useSyncExternalStore:E1,useId:Y1,unstable_isNewReconciler:!1};function Fn(e,n){if(e&&e.defaultProps){n=P({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function sd(e,n,o,a){n=e.memoizedState,o=o(a,n),o=o==null?n:P({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Ea={isMounted:function(e){return(e=e._reactInternals)?to(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var a=Kt(),d=Br(e),u=hr(a,d);u.payload=n,o!=null&&(u.callback=o),n=Rr(e,u,d),n!==null&&(Hn(n,e,d,a),Ca(n,e,d))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var a=Kt(),d=Br(e),u=hr(a,d);u.tag=1,u.payload=n,o!=null&&(u.callback=o),n=Rr(e,u,d),n!==null&&(Hn(n,e,d,a),Ca(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=Kt(),a=Br(e),d=hr(o,a);d.tag=2,n!=null&&(d.callback=n),n=Rr(e,d,a),n!==null&&(Hn(n,e,a,o),Ca(n,e,a))}};function J1(e,n,o,a,d,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,m):n.prototype&&n.prototype.isPureReactComponent?!Xs(o,a)||!Xs(d,u):!0}function ef(e,n,o){var a=!1,d=Er,u=n.contextType;return typeof u=="object"&&u!==null?u=bn(u):(d=Jt(n)?ro:Wt.current,a=n.contextTypes,u=(a=a!=null)?Jo(e,d):Er),n=new n(o,u),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ea,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=u),n}function tf(e,n,o,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,a),n.state!==e&&Ea.enqueueReplaceState(n,n.state,null)}function id(e,n,o,a){var d=e.stateNode;d.props=o,d.state=e.memoizedState,d.refs={},Gc(e);var u=n.contextType;typeof u=="object"&&u!==null?d.context=bn(u):(u=Jt(n)?ro:Wt.current,d.context=Jo(e,u)),d.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(sd(e,n,u,o),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&Ea.enqueueReplaceState(d,d.state,null),Sa(e,o,d,a),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function as(e,n){try{var o="",a=n;do o+=Z(a),a=a.return;while(a);var d=o}catch(u){d=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:n,stack:d,digest:null}}function ad(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function ld(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var K2=typeof WeakMap=="function"?WeakMap:Map;function nf(e,n,o){o=hr(-1,o),o.tag=3,o.payload={element:null};var a=n.value;return o.callback=function(){Ba||(Ba=!0,kd=a),ld(e,n)},o}function rf(e,n,o){o=hr(-1,o),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var d=n.value;o.payload=function(){return a(d)},o.callback=function(){ld(e,n)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(o.callback=function(){ld(e,n),typeof a!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})}),o}function of(e,n,o){var a=e.pingCache;if(a===null){a=e.pingCache=new K2;var d=new Set;a.set(n,d)}else d=a.get(n),d===void 0&&(d=new Set,a.set(n,d));d.has(o)||(d.add(o),e=dx.bind(null,e,n,o),n.then(e,e))}function sf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function af(e,n,o,a,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=hr(-1,1),n.tag=2,Rr(o,n,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var Q2=j.ReactCurrentOwner,en=!1;function Yt(e,n,o,a){n.child=e===null?S1(n,null,o,a):rs(n,e.child,o,a)}function lf(e,n,o,a,d){o=o.render;var u=n.ref;return ss(n,d),a=Jc(e,n,o,a,u,d),o=ed(),e!==null&&!en?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,mr(e,n,d)):(mt&&o&&Rc(n),n.flags|=1,Yt(e,n,a,d),n.child)}function cf(e,n,o,a,d){if(e===null){var u=o.type;return typeof u=="function"&&!Ld(u)&&u.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=u,df(e,n,u,a,d)):(e=Ga(o.type,null,a,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,(e.lanes&d)===0){var m=u.memoizedProps;if(o=o.compare,o=o!==null?o:Xs,o(m,a)&&e.ref===n.ref)return mr(e,n,d)}return n.flags|=1,e=Hr(u,a),e.ref=n.ref,e.return=n,n.child=e}function df(e,n,o,a,d){if(e!==null){var u=e.memoizedProps;if(Xs(u,a)&&e.ref===n.ref)if(en=!1,n.pendingProps=a=u,(e.lanes&d)!==0)(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,mr(e,n,d)}return cd(e,n,o,a,d)}function uf(e,n,o){var a=n.pendingProps,d=a.children,u=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(cs,hn),hn|=o;else{if((o&1073741824)===0)return e=u!==null?u.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,lt(cs,hn),hn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=u!==null?u.baseLanes:o,lt(cs,hn),hn|=a}else u!==null?(a=u.baseLanes|o,n.memoizedState=null):a=o,lt(cs,hn),hn|=a;return Yt(e,n,d,o),n.child}function pf(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function cd(e,n,o,a,d){var u=Jt(o)?ro:Wt.current;return u=Jo(n,u),ss(n,d),o=Jc(e,n,o,a,u,d),a=ed(),e!==null&&!en?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,mr(e,n,d)):(mt&&a&&Rc(n),n.flags|=1,Yt(e,n,o,d),n.child)}function ff(e,n,o,a,d){if(Jt(o)){var u=!0;xa(n)}else u=!1;if(ss(n,d),n.stateNode===null)Pa(e,n),ef(n,o,a),id(n,o,a,d),a=!0;else if(e===null){var m=n.stateNode,S=n.memoizedProps;m.props=S;var T=m.context,V=o.contextType;typeof V=="object"&&V!==null?V=bn(V):(V=Jt(o)?ro:Wt.current,V=Jo(n,V));var ne=o.getDerivedStateFromProps,se=typeof ne=="function"||typeof m.getSnapshotBeforeUpdate=="function";se||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==a||T!==V)&&tf(n,m,a,V),Pr=!1;var te=n.memoizedState;m.state=te,Sa(n,a,m,d),T=n.memoizedState,S!==a||te!==T||Xt.current||Pr?(typeof ne=="function"&&(sd(n,o,ne,a),T=n.memoizedState),(S=Pr||J1(n,o,S,a,te,T,V))?(se||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=T),m.props=a,m.state=T,m.context=V,a=S):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{m=n.stateNode,I1(e,n),S=n.memoizedProps,V=n.type===n.elementType?S:Fn(n.type,S),m.props=V,se=n.pendingProps,te=m.context,T=o.contextType,typeof T=="object"&&T!==null?T=bn(T):(T=Jt(o)?ro:Wt.current,T=Jo(n,T));var pe=o.getDerivedStateFromProps;(ne=typeof pe=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==se||te!==T)&&tf(n,m,a,T),Pr=!1,te=n.memoizedState,m.state=te,Sa(n,a,m,d);var me=n.memoizedState;S!==se||te!==me||Xt.current||Pr?(typeof pe=="function"&&(sd(n,o,pe,a),me=n.memoizedState),(V=Pr||J1(n,o,V,a,te,me,T)||!1)?(ne||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,me,T),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,me,T)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&te===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&te===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=me),m.props=a,m.state=me,m.context=T,a=V):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&te===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&te===e.memoizedState||(n.flags|=1024),a=!1)}return dd(e,n,o,a,u,d)}function dd(e,n,o,a,d,u){pf(e,n);var m=(n.flags&128)!==0;if(!a&&!m)return d&&x1(n,o,!1),mr(e,n,u);a=n.stateNode,Q2.current=n;var S=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&m?(n.child=rs(n,e.child,null,u),n.child=rs(n,null,S,u)):Yt(e,n,S,u),n.memoizedState=a.state,d&&x1(n,o,!0),n.child}function hf(e){var n=e.stateNode;n.pendingContext?m1(e,n.pendingContext,n.pendingContext!==n.context):n.context&&m1(e,n.context,!1),qc(e,n.containerInfo)}function mf(e,n,o,a,d){return ns(),Bc(d),n.flags|=256,Yt(e,n,o,a),n.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function pd(e){return{baseLanes:e,cachePool:null,transitions:null}}function gf(e,n,o){var a=n.pendingProps,d=vt.current,u=!1,m=(n.flags&128)!==0,S;if((S=m)||(S=e!==null&&e.memoizedState===null?!1:(d&2)!==0),S?(u=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),lt(vt,d&1),e===null)return Fc(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(m=a.children,e=a.fallback,u?(a=n.mode,u=n.child,m={mode:"hidden",children:m},(a&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=m):u=qa(m,a,0,null),e=ho(e,a,o,null),u.return=n,e.return=n,u.sibling=e,n.child=u,n.child.memoizedState=pd(o),n.memoizedState=ud,e):fd(n,m));if(d=e.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return X2(e,n,m,a,S,d,o);if(u){u=a.fallback,m=n.mode,d=e.child,S=d.sibling;var T={mode:"hidden",children:a.children};return(m&1)===0&&n.child!==d?(a=n.child,a.childLanes=0,a.pendingProps=T,n.deletions=null):(a=Hr(d,T),a.subtreeFlags=d.subtreeFlags&14680064),S!==null?u=Hr(S,u):(u=ho(u,m,o,null),u.flags|=2),u.return=n,a.return=n,a.sibling=u,n.child=a,a=u,u=n.child,m=e.child.memoizedState,m=m===null?pd(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},u.memoizedState=m,u.childLanes=e.childLanes&~o,n.memoizedState=ud,a}return u=e.child,e=u.sibling,a=Hr(u,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=o),a.return=n,a.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=a,n.memoizedState=null,a}function fd(e,n){return n=qa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function $a(e,n,o,a){return a!==null&&Bc(a),rs(n,e.child,null,o),e=fd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function X2(e,n,o,a,d,u,m){if(o)return n.flags&256?(n.flags&=-257,a=ad(Error(i(422))),$a(e,n,m,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(u=a.fallback,d=n.mode,a=qa({mode:"visible",children:a.children},d,0,null),u=ho(u,d,m,null),u.flags|=2,a.return=n,u.return=n,a.sibling=u,n.child=a,(n.mode&1)!==0&&rs(n,e.child,null,m),n.child.memoizedState=pd(m),n.memoizedState=ud,u);if((n.mode&1)===0)return $a(e,n,m,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var S=a.dgst;return a=S,u=Error(i(419)),a=ad(u,a,void 0),$a(e,n,m,a)}if(S=(m&e.childLanes)!==0,en||S){if(a=Rt,a!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|m))!==0?0:d,d!==0&&d!==u.retryLane&&(u.retryLane=d,fr(e,d),Hn(a,e,d,-1))}return Nd(),a=ad(Error(i(421))),$a(e,n,m,a)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=ux.bind(null,e),d._reactRetry=n,null):(e=u.treeContext,fn=Ar(d.nextSibling),pn=n,mt=!0,zn=null,e!==null&&(wn[jn++]=ur,wn[jn++]=pr,wn[jn++]=oo,ur=e.id,pr=e.overflow,oo=n),n=fd(n,a.children),n.flags|=4096,n)}function xf(e,n,o){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Uc(e.return,n,o)}function hd(e,n,o,a,d){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=o,u.tailMode=d)}function vf(e,n,o){var a=n.pendingProps,d=a.revealOrder,u=a.tail;if(Yt(e,n,a.children,o),a=vt.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xf(e,o,n);else if(e.tag===19)xf(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(lt(vt,a),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(o=n.child,d=null;o!==null;)e=o.alternate,e!==null&&Ma(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=n.child,n.child=null):(d=o.sibling,o.sibling=null),hd(n,!1,d,o,u);break;case"backwards":for(o=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Ma(e)===null){n.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}hd(n,!0,o,null,u);break;case"together":hd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pa(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function mr(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),co|=n.lanes,(o&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=Hr(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=Hr(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function J2(e,n,o){switch(n.tag){case 3:hf(n),ns();break;case 5:A1(n);break;case 1:Jt(n.type)&&xa(n);break;case 4:qc(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,d=n.memoizedProps.value;lt(ka,a._currentValue),a._currentValue=d;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(lt(vt,vt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?gf(e,n,o):(lt(vt,vt.current&1),e=mr(e,n,o),e!==null?e.sibling:null);lt(vt,vt.current&1);break;case 19:if(a=(o&n.childLanes)!==0,(e.flags&128)!==0){if(a)return vf(e,n,o);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),lt(vt,vt.current),a)break;return null;case 22:case 23:return n.lanes=0,uf(e,n,o)}return mr(e,n,o)}var yf,md,wf,jf;yf=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},md=function(){},wf=function(e,n,o,a){var d=e.memoizedProps;if(d!==a){e=n.stateNode,ao(er.current);var u=null;switch(o){case"input":d=Fe(e,d),a=Fe(e,a),u=[];break;case"select":d=P({},d,{value:void 0}),a=P({},a,{value:void 0}),u=[];break;case"textarea":d=Ae(e,d),a=Ae(e,a),u=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ha)}xt(o,a);var m;o=null;for(V in d)if(!a.hasOwnProperty(V)&&d.hasOwnProperty(V)&&d[V]!=null)if(V==="style"){var S=d[V];for(m in S)S.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(c.hasOwnProperty(V)?u||(u=[]):(u=u||[]).push(V,null));for(V in a){var T=a[V];if(S=d!=null?d[V]:void 0,a.hasOwnProperty(V)&&T!==S&&(T!=null||S!=null))if(V==="style")if(S){for(m in S)!S.hasOwnProperty(m)||T&&T.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in T)T.hasOwnProperty(m)&&S[m]!==T[m]&&(o||(o={}),o[m]=T[m])}else o||(u||(u=[]),u.push(V,o)),o=T;else V==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,S=S?S.__html:void 0,T!=null&&S!==T&&(u=u||[]).push(V,T)):V==="children"?typeof T!="string"&&typeof T!="number"||(u=u||[]).push(V,""+T):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(c.hasOwnProperty(V)?(T!=null&&V==="onScroll"&&ct("scroll",e),u||S===T||(u=[])):(u=u||[]).push(V,T))}o&&(u=u||[]).push("style",o);var V=u;(n.updateQueue=V)&&(n.flags|=4)}},jf=function(e,n,o,a){o!==a&&(n.flags|=4)};function fi(e,n){if(!mt)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Vt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(n)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=o,n}function ex(e,n,o){var a=n.pendingProps;switch(Dc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(n),null;case 1:return Jt(n.type)&&ga(),Vt(n),null;case 3:return a=n.stateNode,is(),dt(Xt),dt(Wt),Kc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ja(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zn!==null&&(Sd(zn),zn=null))),md(e,n),Vt(n),null;case 5:Zc(n);var d=ao(li.current);if(o=n.type,e!==null&&n.stateNode!=null)wf(e,n,o,a,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(i(166));return Vt(n),null}if(e=ao(er.current),ja(n)){a=n.stateNode,o=n.type;var u=n.memoizedProps;switch(a[Jn]=n,a[ri]=u,e=(n.mode&1)!==0,o){case"dialog":ct("cancel",a),ct("close",a);break;case"iframe":case"object":case"embed":ct("load",a);break;case"video":case"audio":for(d=0;d<ei.length;d++)ct(ei[d],a);break;case"source":ct("error",a);break;case"img":case"image":case"link":ct("error",a),ct("load",a);break;case"details":ct("toggle",a);break;case"input":Ke(a,u),ct("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!u.multiple},ct("invalid",a);break;case"textarea":ye(a,u),ct("invalid",a)}xt(o,u),d=null;for(var m in u)if(u.hasOwnProperty(m)){var S=u[m];m==="children"?typeof S=="string"?a.textContent!==S&&(u.suppressHydrationWarning!==!0&&fa(a.textContent,S,e),d=["children",S]):typeof S=="number"&&a.textContent!==""+S&&(u.suppressHydrationWarning!==!0&&fa(a.textContent,S,e),d=["children",""+S]):c.hasOwnProperty(m)&&S!=null&&m==="onScroll"&&ct("scroll",a)}switch(o){case"input":ge(a),ht(a,u,!0);break;case"textarea":ge(a),be(a);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(a.onclick=ha)}a=d,n.updateQueue=a,a!==null&&(n.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xe(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=m.createElement(o,{is:a.is}):(e=m.createElement(o),o==="select"&&(m=e,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):e=m.createElementNS(e,o),e[Jn]=n,e[ri]=a,yf(e,n,!1,!1),n.stateNode=e;e:{switch(m=$t(o,a),o){case"dialog":ct("cancel",e),ct("close",e),d=a;break;case"iframe":case"object":case"embed":ct("load",e),d=a;break;case"video":case"audio":for(d=0;d<ei.length;d++)ct(ei[d],e);d=a;break;case"source":ct("error",e),d=a;break;case"img":case"image":case"link":ct("error",e),ct("load",e),d=a;break;case"details":ct("toggle",e),d=a;break;case"input":Ke(e,a),d=Fe(e,a),ct("invalid",e);break;case"option":d=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},d=P({},a,{value:void 0}),ct("invalid",e);break;case"textarea":ye(e,a),d=Ae(e,a),ct("invalid",e);break;default:d=a}xt(o,d),S=d;for(u in S)if(S.hasOwnProperty(u)){var T=S[u];u==="style"?Ne(e,T):u==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&Ft(e,T)):u==="children"?typeof T=="string"?(o!=="textarea"||T!=="")&&lr(e,T):typeof T=="number"&&lr(e,""+T):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?T!=null&&u==="onScroll"&&ct("scroll",e):T!=null&&k(e,u,T,m))}switch(o){case"input":ge(e),ht(e,a,!1);break;case"textarea":ge(e),be(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Ie(a.value));break;case"select":e.multiple=!!a.multiple,u=a.value,u!=null?ae(e,!!a.multiple,u,!1):a.defaultValue!=null&&ae(e,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=ha)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Vt(n),null;case 6:if(e&&n.stateNode!=null)jf(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(i(166));if(o=ao(li.current),ao(er.current),ja(n)){if(a=n.stateNode,o=n.memoizedProps,a[Jn]=n,(u=a.nodeValue!==o)&&(e=pn,e!==null))switch(e.tag){case 3:fa(a.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fa(a.nodeValue,o,(e.mode&1)!==0)}u&&(n.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Jn]=n,n.stateNode=a}return Vt(n),null;case 13:if(dt(vt),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(mt&&fn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)k1(),ns(),n.flags|=98560,u=!1;else if(u=ja(n),a!==null&&a.dehydrated!==null){if(e===null){if(!u)throw Error(i(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(i(317));u[Jn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Vt(n),u=!1}else zn!==null&&(Sd(zn),zn=null),u=!0;if(!u)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(vt.current&1)!==0?Tt===0&&(Tt=3):Nd())),n.updateQueue!==null&&(n.flags|=4),Vt(n),null);case 4:return is(),md(e,n),e===null&&ti(n.stateNode.containerInfo),Vt(n),null;case 10:return Wc(n.type._context),Vt(n),null;case 17:return Jt(n.type)&&ga(),Vt(n),null;case 19:if(dt(vt),u=n.memoizedState,u===null)return Vt(n),null;if(a=(n.flags&128)!==0,m=u.rendering,m===null)if(a)fi(u,!1);else{if(Tt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(m=Ma(e),m!==null){for(n.flags|=128,fi(u,!1),a=m.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=o,o=n.child;o!==null;)u=o,e=a,u.flags&=14680066,m=u.alternate,m===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=m.childLanes,u.lanes=m.lanes,u.child=m.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=m.memoizedProps,u.memoizedState=m.memoizedState,u.updateQueue=m.updateQueue,u.type=m.type,e=m.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return lt(vt,vt.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ct()>ds&&(n.flags|=128,a=!0,fi(u,!1),n.lanes=4194304)}else{if(!a)if(e=Ma(m),e!==null){if(n.flags|=128,a=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),fi(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!mt)return Vt(n),null}else 2*Ct()-u.renderingStartTime>ds&&o!==1073741824&&(n.flags|=128,a=!0,fi(u,!1),n.lanes=4194304);u.isBackwards?(m.sibling=n.child,n.child=m):(o=u.last,o!==null?o.sibling=m:n.child=m,u.last=m)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ct(),n.sibling=null,o=vt.current,lt(vt,a?o&1|2:o&1),n):(Vt(n),null);case 22:case 23:return Id(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(hn&1073741824)!==0&&(Vt(n),n.subtreeFlags&6&&(n.flags|=8192)):Vt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function tx(e,n){switch(Dc(n),n.tag){case 1:return Jt(n.type)&&ga(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return is(),dt(Xt),dt(Wt),Kc(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Zc(n),null;case 13:if(dt(vt),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return dt(vt),null;case 4:return is(),null;case 10:return Wc(n.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var Ra=!1,Gt=!1,nx=typeof WeakSet=="function"?WeakSet:Set,he=null;function ls(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){_t(e,n,a)}else o.current=null}function gd(e,n,o){try{o()}catch(a){_t(e,n,a)}}var bf=!1;function rx(e,n){if(Ic=na,e=Jp(),wc(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{o.nodeType,u.nodeType}catch{o=null;break e}var m=0,S=-1,T=-1,V=0,ne=0,se=e,te=null;t:for(;;){for(var pe;se!==o||d!==0&&se.nodeType!==3||(S=m+d),se!==u||a!==0&&se.nodeType!==3||(T=m+a),se.nodeType===3&&(m+=se.nodeValue.length),(pe=se.firstChild)!==null;)te=se,se=pe;for(;;){if(se===e)break t;if(te===o&&++V===d&&(S=m),te===u&&++ne===a&&(T=m),(pe=se.nextSibling)!==null)break;se=te,te=se.parentNode}se=pe}o=S===-1||T===-1?null:{start:S,end:T}}else o=null}o=o||{start:0,end:0}}else o=null;for(Nc={focusedElem:e,selectionRange:o},na=!1,he=n;he!==null;)if(n=he,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,he=e;else for(;he!==null;){n=he;try{var me=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var xe=me.memoizedProps,St=me.memoizedState,O=n.stateNode,R=O.getSnapshotBeforeUpdate(n.elementType===n.type?xe:Fn(n.type,xe),St);O.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var U=n.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(le){_t(n,n.return,le)}if(e=n.sibling,e!==null){e.return=n.return,he=e;break}he=n.return}return me=bf,bf=!1,me}function hi(e,n,o){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&e)===e){var u=d.destroy;d.destroy=void 0,u!==void 0&&gd(n,o,u)}d=d.next}while(d!==a)}}function Da(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==n)}}function xd(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function kf(e){var n=e.alternate;n!==null&&(e.alternate=null,kf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Jn],delete n[ri],delete n[Ec],delete n[F2],delete n[B2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function Cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vd(e,n,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=ha));else if(a!==4&&(e=e.child,e!==null))for(vd(e,n,o),e=e.sibling;e!==null;)vd(e,n,o),e=e.sibling}function yd(e,n,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(yd(e,n,o),e=e.sibling;e!==null;)yd(e,n,o),e=e.sibling}var Bt=null,Bn=!1;function Dr(e,n,o){for(o=o.child;o!==null;)Sf(e,n,o),o=o.sibling}function Sf(e,n,o){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Ki,o)}catch{}switch(o.tag){case 5:Gt||ls(o,n);case 6:var a=Bt,d=Bn;Bt=null,Dr(e,n,o),Bt=a,Bn=d,Bt!==null&&(Bn?(e=Bt,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Bt.removeChild(o.stateNode));break;case 18:Bt!==null&&(Bn?(e=Bt,o=o.stateNode,e.nodeType===8?Tc(e.parentNode,o):e.nodeType===1&&Tc(e,o),Gs(e)):Tc(Bt,o.stateNode));break;case 4:a=Bt,d=Bn,Bt=o.stateNode.containerInfo,Bn=!0,Dr(e,n,o),Bt=a,Bn=d;break;case 0:case 11:case 14:case 15:if(!Gt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var u=d,m=u.destroy;u=u.tag,m!==void 0&&((u&2)!==0||(u&4)!==0)&&gd(o,n,m),d=d.next}while(d!==a)}Dr(e,n,o);break;case 1:if(!Gt&&(ls(o,n),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(S){_t(o,n,S)}Dr(e,n,o);break;case 21:Dr(e,n,o);break;case 22:o.mode&1?(Gt=(a=Gt)||o.memoizedState!==null,Dr(e,n,o),Gt=a):Dr(e,n,o);break;default:Dr(e,n,o)}}function Mf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new nx),n.forEach(function(a){var d=px.bind(null,e,a);o.has(a)||(o.add(a),a.then(d,d))})}}function On(e,n){var o=n.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var u=e,m=n,S=m;e:for(;S!==null;){switch(S.tag){case 5:Bt=S.stateNode,Bn=!1;break e;case 3:Bt=S.stateNode.containerInfo,Bn=!0;break e;case 4:Bt=S.stateNode.containerInfo,Bn=!0;break e}S=S.return}if(Bt===null)throw Error(i(160));Sf(u,m,d),Bt=null,Bn=!1;var T=d.alternate;T!==null&&(T.return=null),d.return=null}catch(V){_t(d,n,V)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)If(n,e),n=n.sibling}function If(e,n){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(On(n,e),nr(e),a&4){try{hi(3,e,e.return),Da(3,e)}catch(xe){_t(e,e.return,xe)}try{hi(5,e,e.return)}catch(xe){_t(e,e.return,xe)}}break;case 1:On(n,e),nr(e),a&512&&o!==null&&ls(o,o.return);break;case 5:if(On(n,e),nr(e),a&512&&o!==null&&ls(o,o.return),e.flags&32){var d=e.stateNode;try{lr(d,"")}catch(xe){_t(e,e.return,xe)}}if(a&4&&(d=e.stateNode,d!=null)){var u=e.memoizedProps,m=o!==null?o.memoizedProps:u,S=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{S==="input"&&u.type==="radio"&&u.name!=null&&pt(d,u),$t(S,m);var V=$t(S,u);for(m=0;m<T.length;m+=2){var ne=T[m],se=T[m+1];ne==="style"?Ne(d,se):ne==="dangerouslySetInnerHTML"?Ft(d,se):ne==="children"?lr(d,se):k(d,ne,se,V)}switch(S){case"input":ft(d,u);break;case"textarea":je(d,u);break;case"select":var te=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!u.multiple;var pe=u.value;pe!=null?ae(d,!!u.multiple,pe,!1):te!==!!u.multiple&&(u.defaultValue!=null?ae(d,!!u.multiple,u.defaultValue,!0):ae(d,!!u.multiple,u.multiple?[]:"",!1))}d[ri]=u}catch(xe){_t(e,e.return,xe)}}break;case 6:if(On(n,e),nr(e),a&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,u=e.memoizedProps;try{d.nodeValue=u}catch(xe){_t(e,e.return,xe)}}break;case 3:if(On(n,e),nr(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Gs(n.containerInfo)}catch(xe){_t(e,e.return,xe)}break;case 4:On(n,e),nr(e);break;case 13:On(n,e),nr(e),d=e.child,d.flags&8192&&(u=d.memoizedState!==null,d.stateNode.isHidden=u,!u||d.alternate!==null&&d.alternate.memoizedState!==null||(bd=Ct())),a&4&&Mf(e);break;case 22:if(ne=o!==null&&o.memoizedState!==null,e.mode&1?(Gt=(V=Gt)||ne,On(n,e),Gt=V):On(n,e),nr(e),a&8192){if(V=e.memoizedState!==null,(e.stateNode.isHidden=V)&&!ne&&(e.mode&1)!==0)for(he=e,ne=e.child;ne!==null;){for(se=he=ne;he!==null;){switch(te=he,pe=te.child,te.tag){case 0:case 11:case 14:case 15:hi(4,te,te.return);break;case 1:ls(te,te.return);var me=te.stateNode;if(typeof me.componentWillUnmount=="function"){a=te,o=te.return;try{n=a,me.props=n.memoizedProps,me.state=n.memoizedState,me.componentWillUnmount()}catch(xe){_t(a,o,xe)}}break;case 5:ls(te,te.return);break;case 22:if(te.memoizedState!==null){Af(se);continue}}pe!==null?(pe.return=te,he=pe):Af(se)}ne=ne.sibling}e:for(ne=null,se=e;;){if(se.tag===5){if(ne===null){ne=se;try{d=se.stateNode,V?(u=d.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(S=se.stateNode,T=se.memoizedProps.style,m=T!=null&&T.hasOwnProperty("display")?T.display:null,S.style.display=Oo("display",m))}catch(xe){_t(e,e.return,xe)}}}else if(se.tag===6){if(ne===null)try{se.stateNode.nodeValue=V?"":se.memoizedProps}catch(xe){_t(e,e.return,xe)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===e)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===e)break e;for(;se.sibling===null;){if(se.return===null||se.return===e)break e;ne===se&&(ne=null),se=se.return}ne===se&&(ne=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:On(n,e),nr(e),a&4&&Mf(e);break;case 21:break;default:On(n,e),nr(e)}}function nr(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(_f(o)){var a=o;break e}o=o.return}throw Error(i(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(lr(d,""),a.flags&=-33);var u=Cf(e);yd(e,u,d);break;case 3:case 4:var m=a.stateNode.containerInfo,S=Cf(e);vd(e,S,m);break;default:throw Error(i(161))}}catch(T){_t(e,e.return,T)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ox(e,n,o){he=e,Nf(e)}function Nf(e,n,o){for(var a=(e.mode&1)!==0;he!==null;){var d=he,u=d.child;if(d.tag===22&&a){var m=d.memoizedState!==null||Ra;if(!m){var S=d.alternate,T=S!==null&&S.memoizedState!==null||Gt;S=Ra;var V=Gt;if(Ra=m,(Gt=T)&&!V)for(he=d;he!==null;)m=he,T=m.child,m.tag===22&&m.memoizedState!==null?Tf(d):T!==null?(T.return=m,he=T):Tf(d);for(;u!==null;)he=u,Nf(u),u=u.sibling;he=d,Ra=S,Gt=V}Lf(e)}else(d.subtreeFlags&8772)!==0&&u!==null?(u.return=d,he=u):Lf(e)}}function Lf(e){for(;he!==null;){var n=he;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Gt||Da(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Gt)if(o===null)a.componentDidMount();else{var d=n.elementType===n.type?o.memoizedProps:Fn(n.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&L1(n,u,a);break;case 3:var m=n.updateQueue;if(m!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}L1(n,m,o)}break;case 5:var S=n.stateNode;if(o===null&&n.flags&4){o=S;var T=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&o.focus();break;case"img":T.src&&(o.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var V=n.alternate;if(V!==null){var ne=V.memoizedState;if(ne!==null){var se=ne.dehydrated;se!==null&&Gs(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Gt||n.flags&512&&xd(n)}catch(te){_t(n,n.return,te)}}if(n===e){he=null;break}if(o=n.sibling,o!==null){o.return=n.return,he=o;break}he=n.return}}function Af(e){for(;he!==null;){var n=he;if(n===e){he=null;break}var o=n.sibling;if(o!==null){o.return=n.return,he=o;break}he=n.return}}function Tf(e){for(;he!==null;){var n=he;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{Da(4,n)}catch(T){_t(n,o,T)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var d=n.return;try{a.componentDidMount()}catch(T){_t(n,d,T)}}var u=n.return;try{xd(n)}catch(T){_t(n,u,T)}break;case 5:var m=n.return;try{xd(n)}catch(T){_t(n,m,T)}}}catch(T){_t(n,n.return,T)}if(n===e){he=null;break}var S=n.sibling;if(S!==null){S.return=n.return,he=S;break}he=n.return}}var sx=Math.ceil,za=j.ReactCurrentDispatcher,wd=j.ReactCurrentOwner,_n=j.ReactCurrentBatchConfig,Ue=0,Rt=null,It=null,Ot=0,hn=0,cs=Tr(0),Tt=0,mi=null,co=0,Fa=0,jd=0,gi=null,tn=null,bd=0,ds=1/0,gr=null,Ba=!1,kd=null,zr=null,Oa=!1,Fr=null,Ha=0,xi=0,_d=null,Wa=-1,Ua=0;function Kt(){return(Ue&6)!==0?Ct():Wa!==-1?Wa:Wa=Ct()}function Br(e){return(e.mode&1)===0?1:(Ue&2)!==0&&Ot!==0?Ot&-Ot:H2.transition!==null?(Ua===0&&(Ua=_p()),Ua):(e=Qe,e!==0||(e=window.event,e=e===void 0?16:Ep(e.type)),e)}function Hn(e,n,o,a){if(50<xi)throw xi=0,_d=null,Error(i(185));Os(e,o,a),((Ue&2)===0||e!==Rt)&&(e===Rt&&((Ue&2)===0&&(Fa|=o),Tt===4&&Or(e,Ot)),nn(e,a),o===1&&Ue===0&&(n.mode&1)===0&&(ds=Ct()+500,va&&$r()))}function nn(e,n){var o=e.callbackNode;Hg(e,n);var a=Ji(e,e===Rt?Ot:0);if(a===0)o!==null&&jp(o),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(o!=null&&jp(o),n===1)e.tag===0?O2($f.bind(null,e)):v1($f.bind(null,e)),D2(function(){(Ue&6)===0&&$r()}),o=null;else{switch(Cp(a)){case 1:o=rc;break;case 4:o=bp;break;case 16:o=Yi;break;case 536870912:o=kp;break;default:o=Yi}o=Hf(o,Ef.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function Ef(e,n){if(Wa=-1,Ua=0,(Ue&6)!==0)throw Error(i(327));var o=e.callbackNode;if(us()&&e.callbackNode!==o)return null;var a=Ji(e,e===Rt?Ot:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=Va(e,a);else{n=a;var d=Ue;Ue|=2;var u=Rf();(Rt!==e||Ot!==n)&&(gr=null,ds=Ct()+500,po(e,n));do try{lx();break}catch(S){Pf(e,S)}while(!0);Hc(),za.current=u,Ue=d,It!==null?n=0:(Rt=null,Ot=0,n=Tt)}if(n!==0){if(n===2&&(d=oc(e),d!==0&&(a=d,n=Cd(e,d))),n===1)throw o=mi,po(e,0),Or(e,a),nn(e,Ct()),o;if(n===6)Or(e,a);else{if(d=e.current.alternate,(a&30)===0&&!ix(d)&&(n=Va(e,a),n===2&&(u=oc(e),u!==0&&(a=u,n=Cd(e,u))),n===1))throw o=mi,po(e,0),Or(e,a),nn(e,Ct()),o;switch(e.finishedWork=d,e.finishedLanes=a,n){case 0:case 1:throw Error(i(345));case 2:fo(e,tn,gr);break;case 3:if(Or(e,a),(a&130023424)===a&&(n=bd+500-Ct(),10<n)){if(Ji(e,0)!==0)break;if(d=e.suspendedLanes,(d&a)!==a){Kt(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Ac(fo.bind(null,e,tn,gr),n);break}fo(e,tn,gr);break;case 4:if(Or(e,a),(a&4194240)===a)break;for(n=e.eventTimes,d=-1;0<a;){var m=31-Rn(a);u=1<<m,m=n[m],m>d&&(d=m),a&=~u}if(a=d,a=Ct()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*sx(a/1960))-a,10<a){e.timeoutHandle=Ac(fo.bind(null,e,tn,gr),a);break}fo(e,tn,gr);break;case 5:fo(e,tn,gr);break;default:throw Error(i(329))}}}return nn(e,Ct()),e.callbackNode===o?Ef.bind(null,e):null}function Cd(e,n){var o=gi;return e.current.memoizedState.isDehydrated&&(po(e,n).flags|=256),e=Va(e,n),e!==2&&(n=tn,tn=o,n!==null&&Sd(n)),e}function Sd(e){tn===null?tn=e:tn.push.apply(tn,e)}function ix(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],u=d.getSnapshot;d=d.value;try{if(!Dn(u(),d))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Or(e,n){for(n&=~jd,n&=~Fa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-Rn(n),a=1<<o;e[o]=-1,n&=~a}}function $f(e){if((Ue&6)!==0)throw Error(i(327));us();var n=Ji(e,0);if((n&1)===0)return nn(e,Ct()),null;var o=Va(e,n);if(e.tag!==0&&o===2){var a=oc(e);a!==0&&(n=a,o=Cd(e,a))}if(o===1)throw o=mi,po(e,0),Or(e,n),nn(e,Ct()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,fo(e,tn,gr),nn(e,Ct()),null}function Md(e,n){var o=Ue;Ue|=1;try{return e(n)}finally{Ue=o,Ue===0&&(ds=Ct()+500,va&&$r())}}function uo(e){Fr!==null&&Fr.tag===0&&(Ue&6)===0&&us();var n=Ue;Ue|=1;var o=_n.transition,a=Qe;try{if(_n.transition=null,Qe=1,e)return e()}finally{Qe=a,_n.transition=o,Ue=n,(Ue&6)===0&&$r()}}function Id(){hn=cs.current,dt(cs)}function po(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,R2(o)),It!==null)for(o=It.return;o!==null;){var a=o;switch(Dc(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ga();break;case 3:is(),dt(Xt),dt(Wt),Kc();break;case 5:Zc(a);break;case 4:is();break;case 13:dt(vt);break;case 19:dt(vt);break;case 10:Wc(a.type._context);break;case 22:case 23:Id()}o=o.return}if(Rt=e,It=e=Hr(e.current,null),Ot=hn=n,Tt=0,mi=null,jd=Fa=co=0,tn=gi=null,io!==null){for(n=0;n<io.length;n++)if(o=io[n],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,u=o.pending;if(u!==null){var m=u.next;u.next=d,a.next=m}o.pending=a}io=null}return e}function Pf(e,n){do{var o=It;try{if(Hc(),Ia.current=Ta,Na){for(var a=yt.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}Na=!1}if(lo=0,Pt=At=yt=null,ci=!1,di=0,wd.current=null,o===null||o.return===null){Tt=1,mi=n,It=null;break}e:{var u=e,m=o.return,S=o,T=n;if(n=Ot,S.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var V=T,ne=S,se=ne.tag;if((ne.mode&1)===0&&(se===0||se===11||se===15)){var te=ne.alternate;te?(ne.updateQueue=te.updateQueue,ne.memoizedState=te.memoizedState,ne.lanes=te.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var pe=sf(m);if(pe!==null){pe.flags&=-257,af(pe,m,S,u,n),pe.mode&1&&of(u,V,n),n=pe,T=V;var me=n.updateQueue;if(me===null){var xe=new Set;xe.add(T),n.updateQueue=xe}else me.add(T);break e}else{if((n&1)===0){of(u,V,n),Nd();break e}T=Error(i(426))}}else if(mt&&S.mode&1){var St=sf(m);if(St!==null){(St.flags&65536)===0&&(St.flags|=256),af(St,m,S,u,n),Bc(as(T,S));break e}}u=T=as(T,S),Tt!==4&&(Tt=2),gi===null?gi=[u]:gi.push(u),u=m;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var O=nf(u,T,n);N1(u,O);break e;case 1:S=T;var R=u.type,U=u.stateNode;if((u.flags&128)===0&&(typeof R.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(zr===null||!zr.has(U)))){u.flags|=65536,n&=-n,u.lanes|=n;var le=rf(u,S,n);N1(u,le);break e}}u=u.return}while(u!==null)}zf(o)}catch(we){n=we,It===o&&o!==null&&(It=o=o.return);continue}break}while(!0)}function Rf(){var e=za.current;return za.current=Ta,e===null?Ta:e}function Nd(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Rt===null||(co&268435455)===0&&(Fa&268435455)===0||Or(Rt,Ot)}function Va(e,n){var o=Ue;Ue|=2;var a=Rf();(Rt!==e||Ot!==n)&&(gr=null,po(e,n));do try{ax();break}catch(d){Pf(e,d)}while(!0);if(Hc(),Ue=o,za.current=a,It!==null)throw Error(i(261));return Rt=null,Ot=0,Tt}function ax(){for(;It!==null;)Df(It)}function lx(){for(;It!==null&&!Eg();)Df(It)}function Df(e){var n=Of(e.alternate,e,hn);e.memoizedProps=e.pendingProps,n===null?zf(e):It=n,wd.current=null}function zf(e){var n=e;do{var o=n.alternate;if(e=n.return,(n.flags&32768)===0){if(o=ex(o,n,hn),o!==null){It=o;return}}else{if(o=tx(o,n),o!==null){o.flags&=32767,It=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Tt=6,It=null;return}}if(n=n.sibling,n!==null){It=n;return}It=n=e}while(n!==null);Tt===0&&(Tt=5)}function fo(e,n,o){var a=Qe,d=_n.transition;try{_n.transition=null,Qe=1,cx(e,n,o,a)}finally{_n.transition=d,Qe=a}return null}function cx(e,n,o,a){do us();while(Fr!==null);if((Ue&6)!==0)throw Error(i(327));o=e.finishedWork;var d=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var u=o.lanes|o.childLanes;if(Wg(e,u),e===Rt&&(It=Rt=null,Ot=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Oa||(Oa=!0,Hf(Yi,function(){return us(),null})),u=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||u){u=_n.transition,_n.transition=null;var m=Qe;Qe=1;var S=Ue;Ue|=4,wd.current=null,rx(e,o),If(o,e),N2(Nc),na=!!Ic,Nc=Ic=null,e.current=o,ox(o),$g(),Ue=S,Qe=m,_n.transition=u}else e.current=o;if(Oa&&(Oa=!1,Fr=e,Ha=d),u=e.pendingLanes,u===0&&(zr=null),Dg(o.stateNode),nn(e,Ct()),n!==null)for(a=e.onRecoverableError,o=0;o<n.length;o++)d=n[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(Ba)throw Ba=!1,e=kd,kd=null,e;return(Ha&1)!==0&&e.tag!==0&&us(),u=e.pendingLanes,(u&1)!==0?e===_d?xi++:(xi=0,_d=e):xi=0,$r(),null}function us(){if(Fr!==null){var e=Cp(Ha),n=_n.transition,o=Qe;try{if(_n.transition=null,Qe=16>e?16:e,Fr===null)var a=!1;else{if(e=Fr,Fr=null,Ha=0,(Ue&6)!==0)throw Error(i(331));var d=Ue;for(Ue|=4,he=e.current;he!==null;){var u=he,m=u.child;if((he.flags&16)!==0){var S=u.deletions;if(S!==null){for(var T=0;T<S.length;T++){var V=S[T];for(he=V;he!==null;){var ne=he;switch(ne.tag){case 0:case 11:case 15:hi(8,ne,u)}var se=ne.child;if(se!==null)se.return=ne,he=se;else for(;he!==null;){ne=he;var te=ne.sibling,pe=ne.return;if(kf(ne),ne===V){he=null;break}if(te!==null){te.return=pe,he=te;break}he=pe}}}var me=u.alternate;if(me!==null){var xe=me.child;if(xe!==null){me.child=null;do{var St=xe.sibling;xe.sibling=null,xe=St}while(xe!==null)}}he=u}}if((u.subtreeFlags&2064)!==0&&m!==null)m.return=u,he=m;else e:for(;he!==null;){if(u=he,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:hi(9,u,u.return)}var O=u.sibling;if(O!==null){O.return=u.return,he=O;break e}he=u.return}}var R=e.current;for(he=R;he!==null;){m=he;var U=m.child;if((m.subtreeFlags&2064)!==0&&U!==null)U.return=m,he=U;else e:for(m=R;he!==null;){if(S=he,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Da(9,S)}}catch(we){_t(S,S.return,we)}if(S===m){he=null;break e}var le=S.sibling;if(le!==null){le.return=S.return,he=le;break e}he=S.return}}if(Ue=d,$r(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Ki,e)}catch{}a=!0}return a}finally{Qe=o,_n.transition=n}}return!1}function Ff(e,n,o){n=as(o,n),n=nf(e,n,1),e=Rr(e,n,1),n=Kt(),e!==null&&(Os(e,1,n),nn(e,n))}function _t(e,n,o){if(e.tag===3)Ff(e,e,o);else for(;n!==null;){if(n.tag===3){Ff(n,e,o);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zr===null||!zr.has(a))){e=as(o,e),e=rf(n,e,1),n=Rr(n,e,1),e=Kt(),n!==null&&(Os(n,1,e),nn(n,e));break}}n=n.return}}function dx(e,n,o){var a=e.pingCache;a!==null&&a.delete(n),n=Kt(),e.pingedLanes|=e.suspendedLanes&o,Rt===e&&(Ot&o)===o&&(Tt===4||Tt===3&&(Ot&130023424)===Ot&&500>Ct()-bd?po(e,0):jd|=o),nn(e,n)}function Bf(e,n){n===0&&((e.mode&1)===0?n=1:(n=Xi,Xi<<=1,(Xi&130023424)===0&&(Xi=4194304)));var o=Kt();e=fr(e,n),e!==null&&(Os(e,n,o),nn(e,o))}function ux(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Bf(e,o)}function px(e,n){var o=0;switch(e.tag){case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(n),Bf(e,o)}var Of;Of=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Xt.current)en=!0;else{if((e.lanes&o)===0&&(n.flags&128)===0)return en=!1,J2(e,n,o);en=(e.flags&131072)!==0}else en=!1,mt&&(n.flags&1048576)!==0&&y1(n,wa,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Pa(e,n),e=n.pendingProps;var d=Jo(n,Wt.current);ss(n,o),d=Jc(null,n,a,e,d,o);var u=ed();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Jt(a)?(u=!0,xa(n)):u=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Gc(n),d.updater=Ea,n.stateNode=d,d._reactInternals=n,id(n,a,e,o),n=dd(null,n,a,!0,u,o)):(n.tag=0,mt&&u&&Rc(n),Yt(null,n,d,o),n=n.child),n;case 16:a=n.elementType;e:{switch(Pa(e,n),e=n.pendingProps,d=a._init,a=d(a._payload),n.type=a,d=n.tag=hx(a),e=Fn(a,e),d){case 0:n=cd(null,n,a,e,o);break e;case 1:n=ff(null,n,a,e,o);break e;case 11:n=lf(null,n,a,e,o);break e;case 14:n=cf(null,n,a,Fn(a.type,e),o);break e}throw Error(i(306,a,""))}return n;case 0:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Fn(a,d),cd(e,n,a,d,o);case 1:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Fn(a,d),ff(e,n,a,d,o);case 3:e:{if(hf(n),e===null)throw Error(i(387));a=n.pendingProps,u=n.memoizedState,d=u.element,I1(e,n),Sa(n,a,null,o);var m=n.memoizedState;if(a=m.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){d=as(Error(i(423)),n),n=mf(e,n,a,o,d);break e}else if(a!==d){d=as(Error(i(424)),n),n=mf(e,n,a,o,d);break e}else for(fn=Ar(n.stateNode.containerInfo.firstChild),pn=n,mt=!0,zn=null,o=S1(n,null,a,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ns(),a===d){n=mr(e,n,o);break e}Yt(e,n,a,o)}n=n.child}return n;case 5:return A1(n),e===null&&Fc(n),a=n.type,d=n.pendingProps,u=e!==null?e.memoizedProps:null,m=d.children,Lc(a,d)?m=null:u!==null&&Lc(a,u)&&(n.flags|=32),pf(e,n),Yt(e,n,m,o),n.child;case 6:return e===null&&Fc(n),null;case 13:return gf(e,n,o);case 4:return qc(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=rs(n,null,a,o):Yt(e,n,a,o),n.child;case 11:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Fn(a,d),lf(e,n,a,d,o);case 7:return Yt(e,n,n.pendingProps,o),n.child;case 8:return Yt(e,n,n.pendingProps.children,o),n.child;case 12:return Yt(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(a=n.type._context,d=n.pendingProps,u=n.memoizedProps,m=d.value,lt(ka,a._currentValue),a._currentValue=m,u!==null)if(Dn(u.value,m)){if(u.children===d.children&&!Xt.current){n=mr(e,n,o);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var S=u.dependencies;if(S!==null){m=u.child;for(var T=S.firstContext;T!==null;){if(T.context===a){if(u.tag===1){T=hr(-1,o&-o),T.tag=2;var V=u.updateQueue;if(V!==null){V=V.shared;var ne=V.pending;ne===null?T.next=T:(T.next=ne.next,ne.next=T),V.pending=T}}u.lanes|=o,T=u.alternate,T!==null&&(T.lanes|=o),Uc(u.return,o,n),S.lanes|=o;break}T=T.next}}else if(u.tag===10)m=u.type===n.type?null:u.child;else if(u.tag===18){if(m=u.return,m===null)throw Error(i(341));m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Uc(m,o,n),m=u.sibling}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===n){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}Yt(e,n,d.children,o),n=n.child}return n;case 9:return d=n.type,a=n.pendingProps.children,ss(n,o),d=bn(d),a=a(d),n.flags|=1,Yt(e,n,a,o),n.child;case 14:return a=n.type,d=Fn(a,n.pendingProps),d=Fn(a.type,d),cf(e,n,a,d,o);case 15:return df(e,n,n.type,n.pendingProps,o);case 17:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Fn(a,d),Pa(e,n),n.tag=1,Jt(a)?(e=!0,xa(n)):e=!1,ss(n,o),ef(n,a,d),id(n,a,d,o),dd(null,n,a,!0,e,o);case 19:return vf(e,n,o);case 22:return uf(e,n,o)}throw Error(i(156,n.tag))};function Hf(e,n){return wp(e,n)}function fx(e,n,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,n,o,a){return new fx(e,n,o,a)}function Ld(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hx(e){if(typeof e=="function")return Ld(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Y)return 11;if(e===K)return 14}return 2}function Hr(e,n){var o=e.alternate;return o===null?(o=Cn(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Ga(e,n,o,a,d,u){var m=2;if(a=e,typeof e=="function")Ld(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case z:return ho(o.children,d,u,n);case B:m=8,d|=8;break;case ie:return e=Cn(12,o,n,d|2),e.elementType=ie,e.lanes=u,e;case X:return e=Cn(13,o,n,d),e.elementType=X,e.lanes=u,e;case ve:return e=Cn(19,o,n,d),e.elementType=ve,e.lanes=u,e;case J:return qa(o,d,u,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:m=10;break e;case ee:m=9;break e;case Y:m=11;break e;case K:m=14;break e;case q:m=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=Cn(m,o,n,d),n.elementType=e,n.type=a,n.lanes=u,n}function ho(e,n,o,a){return e=Cn(7,e,a,n),e.lanes=o,e}function qa(e,n,o,a){return e=Cn(22,e,a,n),e.elementType=J,e.lanes=o,e.stateNode={isHidden:!1},e}function Ad(e,n,o){return e=Cn(6,e,null,n),e.lanes=o,e}function Td(e,n,o){return n=Cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function mx(e,n,o,a,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ed(e,n,o,a,d,u,m,S,T){return e=new mx(e,n,o,S,T),n===1?(n=1,u===!0&&(n|=8)):n=0,u=Cn(3,null,null,n),e.current=u,u.stateNode=e,u.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(u),e}function gx(e,n,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:a==null?null:""+a,children:e,containerInfo:n,implementation:o}}function Wf(e){if(!e)return Er;e=e._reactInternals;e:{if(to(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Jt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Jt(o))return g1(e,o,n)}return n}function Uf(e,n,o,a,d,u,m,S,T){return e=Ed(o,a,!0,e,d,u,m,S,T),e.context=Wf(null),o=e.current,a=Kt(),d=Br(o),u=hr(a,d),u.callback=n??null,Rr(o,u,d),e.current.lanes=d,Os(e,d,a),nn(e,a),e}function Za(e,n,o,a){var d=n.current,u=Kt(),m=Br(d);return o=Wf(o),n.context===null?n.context=o:n.pendingContext=o,n=hr(u,m),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=Rr(d,n,m),e!==null&&(Hn(e,d,m,u),Ca(e,d,m)),m}function Ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function $d(e,n){Vf(e,n),(e=e.alternate)&&Vf(e,n)}function xx(){return null}var Gf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pd(e){this._internalRoot=e}Ka.prototype.render=Pd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));Za(e,n,null,null)},Ka.prototype.unmount=Pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;uo(function(){Za(null,e,null,null)}),n[cr]=null}};function Ka(e){this._internalRoot=e}Ka.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ip();e={blockedOn:null,target:e,priority:n};for(var o=0;o<Ir.length&&n!==0&&n<Ir[o].priority;o++);Ir.splice(o,0,e),o===0&&Ap(e)}};function Rd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qf(){}function vx(e,n,o,a,d){if(d){if(typeof a=="function"){var u=a;a=function(){var V=Ya(m);u.call(V)}}var m=Uf(n,a,e,0,null,!1,!1,"",qf);return e._reactRootContainer=m,e[cr]=m.current,ti(e.nodeType===8?e.parentNode:e),uo(),m}for(;d=e.lastChild;)e.removeChild(d);if(typeof a=="function"){var S=a;a=function(){var V=Ya(T);S.call(V)}}var T=Ed(e,0,!1,null,null,!1,!1,"",qf);return e._reactRootContainer=T,e[cr]=T.current,ti(e.nodeType===8?e.parentNode:e),uo(function(){Za(n,T,o,a)}),T}function Xa(e,n,o,a,d){var u=o._reactRootContainer;if(u){var m=u;if(typeof d=="function"){var S=d;d=function(){var T=Ya(m);S.call(T)}}Za(n,m,e,d)}else m=vx(o,n,e,d,a);return Ya(m)}Sp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=Bs(n.pendingLanes);o!==0&&(ic(n,o|1),nn(n,Ct()),(Ue&6)===0&&(ds=Ct()+500,$r()))}break;case 13:uo(function(){var a=fr(e,1);if(a!==null){var d=Kt();Hn(a,e,1,d)}}),$d(e,1)}},ac=function(e){if(e.tag===13){var n=fr(e,134217728);if(n!==null){var o=Kt();Hn(n,e,134217728,o)}$d(e,134217728)}},Mp=function(e){if(e.tag===13){var n=Br(e),o=fr(e,n);if(o!==null){var a=Kt();Hn(o,e,n,a)}$d(e,n)}},Ip=function(){return Qe},Np=function(e,n){var o=Qe;try{return Qe=e,n()}finally{Qe=o}},Rs=function(e,n,o){switch(n){case"input":if(ft(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var a=o[n];if(a!==e&&a.form===e.form){var d=ma(a);if(!d)throw Error(i(90));Ce(a),ft(a,d)}}}break;case"textarea":je(e,o);break;case"select":n=o.value,n!=null&&ae(e,!!o.multiple,n,!1)}},fp=Md,hp=uo;var yx={usingClientEntryPoint:!1,Events:[oi,Qo,ma,up,pp,Md]},vi={findFiberByHostInstance:no,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wx={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vp(e),e===null?null:e.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{Ki=Ja.inject(wx),Xn=Ja}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx,rn.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(n))throw Error(i(200));return gx(e,n,null,o)},rn.createRoot=function(e,n){if(!Rd(e))throw Error(i(299));var o=!1,a="",d=Gf;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Ed(e,1,!1,null,null,o,!1,a,d),e[cr]=n.current,ti(e.nodeType===8?e.parentNode:e),new Pd(n)},rn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=vp(n),e=e===null?null:e.stateNode,e},rn.flushSync=function(e){return uo(e)},rn.hydrate=function(e,n,o){if(!Qa(n))throw Error(i(200));return Xa(null,e,n,!0,o)},rn.hydrateRoot=function(e,n,o){if(!Rd(e))throw Error(i(405));var a=o!=null&&o.hydratedSources||null,d=!1,u="",m=Gf;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(u=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),n=Uf(n,null,e,1,o??null,d,!1,u,m),e[cr]=n.current,ti(e),a)for(e=0;e<a.length;e++)o=a[e],d=o._getVersion,d=d(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,d]:n.mutableSourceEagerHydrationData.push(o,d);return new Ka(n)},rn.render=function(e,n,o){if(!Qa(n))throw Error(i(200));return Xa(null,e,n,!1,o)},rn.unmountComponentAtNode=function(e){if(!Qa(e))throw Error(i(40));return e._reactRootContainer?(uo(function(){Xa(null,null,e,!1,function(){e._reactRootContainer=null,e[cr]=null})}),!0):!1},rn.unstable_batchedUpdates=Md,rn.unstable_renderSubtreeIntoContainer=function(e,n,o,a){if(!Qa(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Xa(e,n,o,!1,a)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var th;function F0(){if(th)return Fd.exports;th=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Fd.exports=Mx(),Fd.exports}var nh;function Ix(){if(nh)return el;nh=1;var r=F0();return el.createRoot=r.createRoot,el.hydrateRoot=r.hydrateRoot,el}var Nx=Ix();const Lx=z0(Nx);var Zt=function(){return Zt=Object.assign||function(s){for(var i,l=1,c=arguments.length;l<c;l++){i=arguments[l];for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(s[p]=i[p])}return s},Zt.apply(this,arguments)};function Cs(r,s,i){if(i||arguments.length===2)for(var l=0,c=s.length,p;l<c;l++)(p||!(l in s))&&(p||(p=Array.prototype.slice.call(s,0,l)),p[l]=s[l]);return r.concat(p||Array.prototype.slice.call(s))}var Ax={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut="-ms-",Ai="-moz-",qe="-webkit-",B0="comm",Rl="rule",Tu="decl",Tx="@import",Ex="@namespace",O0="@keyframes",$x="@layer",H0=Math.abs,Eu=String.fromCharCode,yu=Object.assign;function Px(r,s){return Et(r,0)^45?(((s<<2^Et(r,0))<<2^Et(r,1))<<2^Et(r,2))<<2^Et(r,3):0}function W0(r){return r.trim()}function yr(r,s){return(r=s.exec(r))?r[0]:r}function Te(r,s,i){return r.replace(s,i)}function xl(r,s,i){return r.indexOf(s,i)}function Et(r,s){return r.charCodeAt(s)|0}function So(r,s,i){return r.slice(s,i)}function Gn(r){return r.length}function U0(r){return r.length}function Ci(r,s){return s.push(r),r}function Rx(r,s){return r.map(s).join("")}function rh(r,s){return r.filter(function(i){return!yr(i,s)})}var Dl=1,Ss=1,V0=0,Tn=0,Lt=0,Ts="";function zl(r,s,i,l,c,p,f,y){return{value:r,root:s,parent:i,type:l,props:c,children:p,line:Dl,column:Ss,length:f,return:"",siblings:y}}function Vr(r,s){return yu(zl("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},s)}function ps(r){for(;r.root;)r=Vr(r.root,{children:[r]});Ci(r,r.siblings)}function Dx(){return Lt}function zx(){return Lt=Tn>0?Et(Ts,--Tn):0,Ss--,Lt===10&&(Ss=1,Dl--),Lt}function Zn(){return Lt=Tn<V0?Et(Ts,Tn++):0,Ss++,Lt===10&&(Ss=1,Dl++),Lt}function Zr(){return Et(Ts,Tn)}function vl(){return Tn}function Fl(r,s){return So(Ts,r,s)}function zi(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fx(r){return Dl=Ss=1,V0=Gn(Ts=r),Tn=0,[]}function Bx(r){return Ts="",r}function Hd(r){return W0(Fl(Tn-1,wu(r===91?r+2:r===40?r+1:r)))}function Ox(r){for(;(Lt=Zr())&&Lt<33;)Zn();return zi(r)>2||zi(Lt)>3?"":" "}function Hx(r,s){for(;--s&&Zn()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Fl(r,vl()+(s<6&&Zr()==32&&Zn()==32))}function wu(r){for(;Zn();)switch(Lt){case r:return Tn;case 34:case 39:r!==34&&r!==39&&wu(Lt);break;case 40:r===41&&wu(r);break;case 92:Zn();break}return Tn}function Wx(r,s){for(;Zn()&&r+Lt!==57;)if(r+Lt===84&&Zr()===47)break;return"/*"+Fl(s,Tn-1)+"*"+Eu(r===47?r:Zn())}function Ux(r){for(;!zi(Zr());)Zn();return Fl(r,Tn)}function Vx(r){return Bx(yl("",null,null,null,[""],r=Fx(r),0,[0],r))}function yl(r,s,i,l,c,p,f,y,g){for(var w=0,v=0,_=f,b=0,L=0,E=0,I=1,N=1,C=1,A=0,k="",j=c,$=p,F=l,z=k;N;)switch(E=A,A=Zn()){case 40:if(E!=108&&Et(z,_-1)==58){xl(z+=Te(Hd(A),"&","&\f"),"&\f",H0(w?y[w-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:z+=Hd(A);break;case 9:case 10:case 13:case 32:z+=Ox(E);break;case 92:z+=Hx(vl()-1,7);continue;case 47:switch(Zr()){case 42:case 47:Ci(Gx(Wx(Zn(),vl()),s,i,g),g),(zi(E||1)==5||zi(Zr()||1)==5)&&Gn(z)&&So(z,-1,void 0)!==" "&&(z+=" ");break;default:z+="/"}break;case 123*I:y[w++]=Gn(z)*C;case 125*I:case 59:case 0:switch(A){case 0:case 125:N=0;case 59+v:C==-1&&(z=Te(z,/\f/g,"")),L>0&&(Gn(z)-_||I===0&&E===47)&&Ci(L>32?sh(z+";",l,i,_-1,g):sh(Te(z," ","")+";",l,i,_-2,g),g);break;case 59:z+=";";default:if(Ci(F=oh(z,s,i,w,v,c,y,k,j=[],$=[],_,p),p),A===123)if(v===0)yl(z,s,F,F,j,p,_,y,$);else{switch(b){case 99:if(Et(z,3)===110)break;case 108:if(Et(z,2)===97)break;default:v=0;case 100:case 109:case 115:}v?yl(r,F,F,l&&Ci(oh(r,F,F,0,0,c,y,k,c,j=[],_,$),$),c,$,_,y,l?j:$):yl(z,F,F,F,[""],$,0,y,$)}}w=v=L=0,I=C=1,k=z="",_=f;break;case 58:_=1+Gn(z),L=E;default:if(I<1){if(A==123)--I;else if(A==125&&I++==0&&zx()==125)continue}switch(z+=Eu(A),A*I){case 38:C=v>0?1:(z+="\f",-1);break;case 44:y[w++]=(Gn(z)-1)*C,C=1;break;case 64:Zr()===45&&(z+=Hd(Zn())),b=Zr(),v=_=Gn(k=z+=Ux(vl())),A++;break;case 45:E===45&&Gn(z)==2&&(I=0)}}return p}function oh(r,s,i,l,c,p,f,y,g,w,v,_){for(var b=c-1,L=c===0?p:[""],E=U0(L),I=0,N=0,C=0;I<l;++I)for(var A=0,k=So(r,b+1,b=H0(N=f[I])),j=r;A<E;++A)(j=W0(N>0?L[A]+" "+k:Te(k,/&\f/g,L[A])))&&(g[C++]=j);return zl(r,s,i,c===0?Rl:y,g,w,v,_)}function Gx(r,s,i,l){return zl(r,s,i,B0,Eu(Dx()),So(r,2,-2),0,l)}function sh(r,s,i,l,c){return zl(r,s,i,Tu,So(r,0,l),So(r,l+1,-1),l,c)}function G0(r,s,i){switch(Px(r,s)){case 5103:return qe+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return qe+r+r;case 4855:return qe+r.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+r;case 4789:return Ai+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return qe+r+Ai+r+ut+r+r;case 5936:switch(Et(r,s+11)){case 114:return qe+r+ut+Te(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return qe+r+ut+Te(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return qe+r+ut+Te(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return qe+r+ut+r+r;case 6165:return qe+r+ut+"flex-"+r+r;case 5187:return qe+r+Te(r,/(\w+).+(:[^]+)/,qe+"box-$1$2"+ut+"flex-$1$2")+r;case 5443:return qe+r+ut+"flex-item-"+Te(r,/flex-|-self/g,"")+(yr(r,/flex-|baseline/)?"":ut+"grid-row-"+Te(r,/flex-|-self/g,""))+r;case 4675:return qe+r+ut+"flex-line-pack"+Te(r,/align-content|flex-|-self/g,"")+r;case 5548:return qe+r+ut+Te(r,"shrink","negative")+r;case 5292:return qe+r+ut+Te(r,"basis","preferred-size")+r;case 6060:return qe+"box-"+Te(r,"-grow","")+qe+r+ut+Te(r,"grow","positive")+r;case 4554:return qe+Te(r,/([^-])(transform)/g,"$1"+qe+"$2")+r;case 6187:return Te(Te(Te(r,/(zoom-|grab)/,qe+"$1"),/(image-set)/,qe+"$1"),r,"")+r;case 5495:case 3959:return Te(r,/(image-set\([^]*)/,qe+"$1$`$1");case 4968:return Te(Te(r,/(.+:)(flex-)?(.*)/,qe+"box-pack:$3"+ut+"flex-pack:$3"),/space-between/,"justify")+qe+r+r;case 4200:if(!yr(r,/flex-|baseline/))return ut+"grid-column-align"+So(r,s)+r;break;case 2592:case 3360:return ut+Te(r,"template-","")+r;case 4384:case 3616:return i&&i.some(function(l,c){return s=c,yr(l.props,/grid-\w+-end/)})?~xl(r+(i=i[s].value),"span",0)?r:ut+Te(r,"-start","")+r+ut+"grid-row-span:"+(~xl(i,"span",0)?yr(i,/\d+/):+yr(i,/\d+/)-+yr(r,/\d+/))+";":ut+Te(r,"-start","")+r;case 4896:case 4128:return i&&i.some(function(l){return yr(l.props,/grid-\w+-start/)})?r:ut+Te(Te(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return Te(r,/(.+)-inline(.+)/,qe+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gn(r)-1-s>6)switch(Et(r,s+1)){case 109:if(Et(r,s+4)!==45)break;case 102:return Te(r,/(.+:)(.+)-([^]+)/,"$1"+qe+"$2-$3$1"+Ai+(Et(r,s+3)==108?"$3":"$2-$3"))+r;case 115:return~xl(r,"stretch",0)?G0(Te(r,"stretch","fill-available"),s,i)+r:r}break;case 5152:case 5920:return Te(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,p,f,y,g,w){return ut+c+":"+p+w+(f?ut+c+"-span:"+(y?g:+g-+p)+w:"")+r});case 4949:if(Et(r,s+6)===121)return Te(r,":",":"+qe)+r;break;case 6444:switch(Et(r,Et(r,14)===45?18:11)){case 120:return Te(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+qe+(Et(r,14)===45?"inline-":"")+"box$3$1"+qe+"$2$3$1"+ut+"$2box$3")+r;case 100:return Te(r,":",":"+ut)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Te(r,"scroll-","scroll-snap-")+r}return r}function Cl(r,s){for(var i="",l=0;l<r.length;l++)i+=s(r[l],l,r,s)||"";return i}function qx(r,s,i,l){switch(r.type){case $x:if(r.children.length)break;case Tx:case Ex:case Tu:return r.return=r.return||r.value;case B0:return"";case O0:return r.return=r.value+"{"+Cl(r.children,l)+"}";case Rl:if(!Gn(r.value=r.props.join(",")))return""}return Gn(i=Cl(r.children,l))?r.return=r.value+"{"+i+"}":""}function Zx(r){var s=U0(r);return function(i,l,c,p){for(var f="",y=0;y<s;y++)f+=r[y](i,l,c,p)||"";return f}}function Yx(r){return function(s){s.root||(s=s.return)&&r(s)}}function Kx(r,s,i,l){if(r.length>-1&&!r.return)switch(r.type){case Tu:r.return=G0(r.value,r.length,i);return;case O0:return Cl([Vr(r,{value:Te(r.value,"@","@"+qe)})],l);case Rl:if(r.length)return Rx(i=r.props,function(c){switch(yr(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ps(Vr(r,{props:[Te(c,/:(read-\w+)/,":"+Ai+"$1")]})),ps(Vr(r,{props:[c]})),yu(r,{props:rh(i,l)});break;case"::placeholder":ps(Vr(r,{props:[Te(c,/:(plac\w+)/,":"+qe+"input-$1")]})),ps(Vr(r,{props:[Te(c,/:(plac\w+)/,":"+Ai+"$1")]})),ps(Vr(r,{props:[Te(c,/:(plac\w+)/,ut+"input-$1")]})),ps(Vr(r,{props:[c]})),yu(r,{props:rh(i,l)});break}return""})}}var vn={},Ms=typeof process<"u"&&vn!==void 0&&(vn.REACT_APP_SC_ATTR||vn.SC_ATTR)||"data-styled",q0="active",Z0="data-styled-version",Bl="6.3.12",$u=`/*!sc*/
`,Ti=typeof window<"u"&&typeof document<"u",Qx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vn!==void 0&&vn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vn.REACT_APP_SC_DISABLE_SPEEDY!==""?vn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vn!==void 0&&vn.SC_DISABLE_SPEEDY!==void 0&&vn.SC_DISABLE_SPEEDY!==""&&vn.SC_DISABLE_SPEEDY!=="false"&&vn.SC_DISABLE_SPEEDY),Xx={};function Wi(r){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var wl=new Map,Sl=new Map,jl=1,Si=function(r){if(wl.has(r))return wl.get(r);for(;Sl.has(jl);)jl++;var s=jl++;return wl.set(r,s),Sl.set(s,r),s},Jx=function(r,s){jl=s+1,wl.set(r,s),Sl.set(s,r)},Pu=Object.freeze([]),Is=Object.freeze({});function Y0(r,s,i){return i===void 0&&(i=Is),r.theme!==i.theme&&r.theme||s||i.theme}var K0=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),ev=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tv=/(^-|-$)/g;function ih(r){return r.replace(ev,"-").replace(tv,"")}var nv=/(a)(d)/gi,ah=function(r){return String.fromCharCode(r+(r>25?39:97))};function ju(r){var s,i="";for(s=Math.abs(r);s>52;s=s/52|0)i=ah(s%52)+i;return(ah(s%52)+i).replace(nv,"$1-$2")}var Wd,vo=function(r,s){for(var i=s.length;i;)r=33*r^s.charCodeAt(--i);return r},Q0=function(r){return vo(5381,r)};function Ru(r){return ju(Q0(r)>>>0)}function rv(r){return r.displayName||r.name||"Component"}function Ud(r){return typeof r=="string"&&!0}var X0=typeof Symbol=="function"&&Symbol.for,J0=X0?Symbol.for("react.memo"):60115,ov=X0?Symbol.for("react.forward_ref"):60112,sv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},iv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},em={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},av=((Wd={})[ov]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wd[J0]=em,Wd);function lh(r){return("type"in(s=r)&&s.type.$$typeof)===J0?em:"$$typeof"in r?av[r.$$typeof]:sv;var s}var lv=Object.defineProperty,cv=Object.getOwnPropertyNames,ch=Object.getOwnPropertySymbols,dv=Object.getOwnPropertyDescriptor,uv=Object.getPrototypeOf,dh=Object.prototype;function tm(r,s,i){if(typeof s!="string"){if(dh){var l=uv(s);l&&l!==dh&&tm(r,l,i)}var c=cv(s);ch&&(c=c.concat(ch(s)));for(var p=lh(r),f=lh(s),y=0;y<c.length;++y){var g=c[y];if(!(g in iv||i&&i[g]||f&&g in f||p&&g in p)){var w=dv(s,g);try{lv(r,g,w)}catch{}}}}return r}function Ns(r){return typeof r=="function"}function Du(r){return typeof r=="object"&&"styledComponentId"in r}function wo(r,s){return r&&s?"".concat(r," ").concat(s):r||s||""}function Ml(r,s){return r.join("")}function Fi(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function bu(r,s,i){if(i===void 0&&(i=!1),!i&&!Fi(r)&&!Array.isArray(r))return s;if(Array.isArray(s))for(var l=0;l<s.length;l++)r[l]=bu(r[l],s[l]);else if(Fi(s))for(var l in s)r[l]=bu(r[l],s[l]);return r}function zu(r,s){Object.defineProperty(r,"toString",{value:s})}var pv=(function(){function r(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s,this._cGroup=0,this._cIndex=0}return r.prototype.indexOfGroup=function(s){if(s===this._cGroup)return this._cIndex;var i=this._cIndex;if(s>this._cGroup)for(var l=this._cGroup;l<s;l++)i+=this.groupSizes[l];else for(l=this._cGroup-1;l>=s;l--)i-=this.groupSizes[l];return this._cGroup=s,this._cIndex=i,i},r.prototype.insertRules=function(s,i){if(s>=this.groupSizes.length){for(var l=this.groupSizes,c=l.length,p=c;s>=p;)if((p<<=1)<0)throw Wi(16,"".concat(s));this.groupSizes=new Uint32Array(p),this.groupSizes.set(l),this.length=p;for(var f=c;f<p;f++)this.groupSizes[f]=0}for(var y=this.indexOfGroup(s+1),g=0,w=(f=0,i.length);f<w;f++)this.tag.insertRule(y,i[f])&&(this.groupSizes[s]++,y++,g++);g>0&&this._cGroup>s&&(this._cIndex+=g)},r.prototype.clearGroup=function(s){if(s<this.length){var i=this.groupSizes[s],l=this.indexOfGroup(s),c=l+i;this.groupSizes[s]=0;for(var p=l;p<c;p++)this.tag.deleteRule(l);i>0&&this._cGroup>s&&(this._cIndex-=i)}},r.prototype.getGroup=function(s){var i="";if(s>=this.length||this.groupSizes[s]===0)return i;for(var l=this.groupSizes[s],c=this.indexOfGroup(s),p=c+l,f=c;f<p;f++)i+=this.tag.getRule(f)+$u;return i},r})(),fv="style[".concat(Ms,"][").concat(Z0,'="').concat(Bl,'"]'),hv=new RegExp("^".concat(Ms,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),uh=function(r){return typeof ShadowRoot<"u"&&r instanceof ShadowRoot||"host"in r&&r.nodeType===11},ku=function(r){if(!r)return document;if(uh(r))return r;if("getRootNode"in r){var s=r.getRootNode();if(uh(s))return s}return document},mv=function(r,s,i){for(var l,c=i.split(","),p=0,f=c.length;p<f;p++)(l=c[p])&&r.registerName(s,l)},gv=function(r,s){for(var i,l=((i=s.textContent)!==null&&i!==void 0?i:"").split($u),c=[],p=0,f=l.length;p<f;p++){var y=l[p].trim();if(y){var g=y.match(hv);if(g){var w=0|parseInt(g[1],10),v=g[2];w!==0&&(Jx(v,w),mv(r,v,g[3]),r.getTag().insertRules(w,c)),c.length=0}else c.push(y)}}},Vd=function(r){for(var s=ku(r.options.target).querySelectorAll(fv),i=0,l=s.length;i<l;i++){var c=s[i];c&&c.getAttribute(Ms)!==q0&&(gv(r,c),c.parentNode&&c.parentNode.removeChild(c))}};function xv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nm=function(r){var s=document.head,i=r||s,l=document.createElement("style"),c=(function(y){var g=Array.from(y.querySelectorAll("style[".concat(Ms,"]")));return g[g.length-1]})(i),p=c!==void 0?c.nextSibling:null;l.setAttribute(Ms,q0),l.setAttribute(Z0,Bl);var f=xv();return f&&l.setAttribute("nonce",f),i.insertBefore(l,p),l},vv=(function(){function r(s){this.element=nm(s),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){var l;if(i.sheet)return i.sheet;for(var c=(l=i.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets,p=0,f=c.length;p<f;p++){var y=c[p];if(y.ownerNode===i)return y}throw Wi(17)})(this.element),this.length=0}return r.prototype.insertRule=function(s,i){try{return this.sheet.insertRule(i,s),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},r.prototype.getRule=function(s){var i=this.sheet.cssRules[s];return i&&i.cssText?i.cssText:""},r})(),yv=(function(){function r(s){this.element=nm(s),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(s,i){if(s<=this.length&&s>=0){var l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[s]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},r.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},r})(),wv=(function(){function r(s){this.rules=[],this.length=0}return r.prototype.insertRule=function(s,i){return s<=this.length&&(s===this.length?this.rules.push(i):this.rules.splice(s,0,i),this.length++,!0)},r.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},r.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},r})(),ph=Ti,jv={isServer:!Ti,useCSSOMInjection:!Qx},Il=(function(){function r(s,i,l){s===void 0&&(s=Is),i===void 0&&(i={});var c=this;this.options=Zt(Zt({},jv),s),this.gs=i,this.names=new Map(l),this.server=!!s.isServer,!this.server&&Ti&&ph&&(ph=!1,Vd(this)),zu(this,function(){return(function(p){for(var f=p.getTag(),y=f.length,g="",w=function(_){var b=(function(C){return Sl.get(C)})(_);if(b===void 0)return"continue";var L=p.names.get(b);if(L===void 0||!L.size)return"continue";var E=f.getGroup(_);if(E.length===0)return"continue";var I=Ms+".g"+_+'[id="'+b+'"]',N="";L.forEach(function(C){C.length>0&&(N+=C+",")}),g+=E+I+'{content:"'+N+'"}'+$u},v=0;v<y;v++)w(v);return g})(c)})}return r.registerId=function(s){return Si(s)},r.prototype.rehydrate=function(){!this.server&&Ti&&Vd(this)},r.prototype.reconstructWithOptions=function(s,i){i===void 0&&(i=!0);var l=new r(Zt(Zt({},this.options),s),this.gs,i&&this.names||void 0);return!this.server&&Ti&&s.target!==this.options.target&&ku(this.options.target)!==ku(s.target)&&Vd(l),l},r.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(s=(function(i){var l=i.useCSSOMInjection,c=i.target;return i.isServer?new wv(c):l?new vv(c):new yv(c)})(this.options),new pv(s)));var s},r.prototype.hasNameForId=function(s,i){var l,c;return(c=(l=this.names.get(s))===null||l===void 0?void 0:l.has(i))!==null&&c!==void 0&&c},r.prototype.registerName=function(s,i){Si(s);var l=this.names.get(s);l?l.add(i):this.names.set(s,new Set([i]))},r.prototype.insertRules=function(s,i,l){this.registerName(s,i),this.getTag().insertRules(Si(s),l)},r.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},r.prototype.clearRules=function(s){this.getTag().clearGroup(Si(s)),this.clearNames(s)},r.prototype.clearTag=function(){this.tag=void 0},r})();function bv(r,s){return s==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||r in Ax||r.startsWith("--")?String(s).trim():"".concat(s,"px")}var kv=function(r){return r>="A"&&r<="Z"};function fh(r){for(var s="",i=0;i<r.length;i++){var l=r[i];if(i===1&&l==="-"&&r[0]==="-")return r;kv(l)?s+="-"+l.toLowerCase():s+=l}return s.startsWith("ms-")?"-"+s:s}var rm=Symbol.for("sc-keyframes");function _v(r){return typeof r=="object"&&r!==null&&rm in r}var om=function(r){return r==null||r===!1||r===""},sm=function(r){var s=[];for(var i in r){var l=r[i];r.hasOwnProperty(i)&&!om(l)&&(Array.isArray(l)&&l.isCss||Ns(l)?s.push("".concat(fh(i),":"),l,";"):Fi(l)?s.push.apply(s,Cs(Cs(["".concat(i," {")],sm(l),!1),["}"],!1)):s.push("".concat(fh(i),": ").concat(bv(i,l),";")))}return s};function Xr(r,s,i,l,c){if(c===void 0&&(c=[]),typeof r=="string")return r&&c.push(r),c;if(om(r))return c;if(Du(r))return c.push(".".concat(r.styledComponentId)),c;if(Ns(r)){if(!Ns(f=r)||f.prototype&&f.prototype.isReactComponent||!s)return c.push(r),c;var p=r(s);return Xr(p,s,i,l,c)}var f;if(_v(r))return i?(r.inject(i,l),c.push(r.getName(l))):c.push(r),c;if(Fi(r)){for(var y=sm(r),g=0;g<y.length;g++)c.push(y[g]);return c}if(!Array.isArray(r))return c.push(r.toString()),c;for(g=0;g<r.length;g++)Xr(r[g],s,i,l,c);return c}function im(r){for(var s=0;s<r.length;s+=1){var i=r[s];if(Ns(i)&&!Du(i))return!1}return!0}var Cv=Q0(Bl),Sv=(function(){function r(s,i,l){this.rules=s,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&im(s),this.componentId=i,this.baseHash=vo(Cv,i),this.baseStyle=l,Il.registerId(i)}return r.prototype.generateAndInjectStyles=function(s,i,l){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,i,l).className:"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))c=wo(c,this.staticRulesId);else{var p=Ml(Xr(this.rules,s,i,l)),f=ju(vo(this.baseHash,p)>>>0);if(!i.hasNameForId(this.componentId,f)){var y=l(p,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,y)}c=wo(c,f),this.staticRulesId=f}else{for(var g=vo(this.baseHash,l.hash),w="",v=0;v<this.rules.length;v++){var _=this.rules[v];if(typeof _=="string")w+=_;else if(_){var b=Ml(Xr(_,s,i,l));g=vo(vo(g,String(v)),b),w+=b}}if(w){var L=ju(g>>>0);if(!i.hasNameForId(this.componentId,L)){var E=l(w,".".concat(L),void 0,this.componentId);i.insertRules(this.componentId,L,E)}c=wo(c,L)}}return{className:c,css:typeof window>"u"?i.getTag().getGroup(Si(this.componentId)):""}},r})(),Mv=/&/g,wr=47,yo=42;function hh(r){if(r.indexOf("}")===-1)return!1;for(var s=r.length,i=0,l=0,c=!1,p=0;p<s;p++){var f=r.charCodeAt(p);if(l!==0||c||f!==wr||r.charCodeAt(p+1)!==yo)if(c)f===yo&&r.charCodeAt(p+1)===wr&&(c=!1,p++);else if(f!==34&&f!==39||p!==0&&r.charCodeAt(p-1)===92){if(l===0){if(f===123)i++;else if(f===125&&--i<0)return!0}}else l===0?l=f:l===f&&(l=0);else c=!0,p++}return i!==0||l!==0}function am(r,s){return r.map(function(i){return i.type==="rule"&&(i.value="".concat(s," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(s," ")),i.props=i.props.map(function(l){return"".concat(s," ").concat(l)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=am(i.children,s)),i})}function Iv(r){var s,i,l,c=Is,p=c.options,f=p===void 0?Is:p,y=c.plugins,g=y===void 0?Pu:y,w=function(E,I,N){return N.startsWith(i)&&N.endsWith(i)&&N.replaceAll(i,"").length>0?".".concat(s):E},v=g.slice();v.push(function(E){E.type===Rl&&E.value.includes("&")&&(l||(l=new RegExp("\\".concat(i,"\\b"),"g")),E.props[0]=E.props[0].replace(Mv,i).replace(l,w))}),f.prefix&&v.push(Kx),v.push(qx);var _=[],b=Zx(v.concat(Yx(function(E){return _.push(E)}))),L=function(E,I,N,C){I===void 0&&(I=""),N===void 0&&(N=""),C===void 0&&(C="&"),s=C,i=I,l=void 0;var A=(function(j){if(!hh(j))return j;for(var $=j.length,F="",z=0,B=0,ie=0,ce=!1,ee=0;ee<$;ee++){var Y=j.charCodeAt(ee);if(ie!==0||ce||Y!==wr||j.charCodeAt(ee+1)!==yo)if(ce)Y===yo&&j.charCodeAt(ee+1)===wr&&(ce=!1,ee++);else if(Y!==34&&Y!==39||ee!==0&&j.charCodeAt(ee-1)===92){if(ie===0)if(Y===123)B++;else if(Y===125){if(--B<0){for(var X=ee+1;X<$;){var ve=j.charCodeAt(X);if(ve===59||ve===10)break;X++}X<$&&j.charCodeAt(X)===59&&X++,B=0,ee=X-1,z=X;continue}B===0&&(F+=j.substring(z,ee+1),z=ee+1)}else Y===59&&B===0&&(F+=j.substring(z,ee+1),z=ee+1)}else ie===0?ie=Y:ie===Y&&(ie=0);else ce=!0,ee++}if(z<$){var K=j.substring(z);hh(K)||(F+=K)}return F})((function(j){if(j.indexOf("//")===-1)return j;for(var $=j.length,F=[],z=0,B=0,ie=0,ce=0;B<$;){var ee=j.charCodeAt(B);if(ee!==34&&ee!==39||B!==0&&j.charCodeAt(B-1)===92)if(ie===0)if(ee===wr&&B+1<$&&j.charCodeAt(B+1)===yo){for(B+=2;B+1<$&&(j.charCodeAt(B)!==yo||j.charCodeAt(B+1)!==wr);)B++;B+=2}else if(ee===40&&B>=3&&(32|j.charCodeAt(B-1))==108&&(32|j.charCodeAt(B-2))==114&&(32|j.charCodeAt(B-3))==117)ce=1,B++;else if(ce>0)ee===41?ce--:ee===40&&ce++,B++;else if(ee===yo&&B+1<$&&j.charCodeAt(B+1)===wr)B>z&&F.push(j.substring(z,B)),z=B+=2;else if(ee===wr&&B+1<$&&j.charCodeAt(B+1)===wr){for(B>z&&F.push(j.substring(z,B));B<$&&j.charCodeAt(B)!==10;)B++;z=B}else B++;else B++;else ie===0?ie=ee:ie===ee&&(ie=0),B++}return z===0?j:(z<$&&F.push(j.substring(z)),F.join(""))})(E)),k=Vx(N||I?"".concat(N," ").concat(I," { ").concat(A," }"):A);return f.namespace&&(k=am(k,f.namespace)),_=[],Cl(k,b),_};return L.hash=g.length?g.reduce(function(E,I){return I.name||Wi(15),vo(E,I.name)},5381).toString():"",L}var Nv=new Il,_u=Iv(),lm=An.createContext({shouldForwardProp:void 0,styleSheet:Nv,stylis:_u});lm.Consumer;An.createContext(void 0);function Cu(){return An.useContext(lm)}var Fu=An.createContext(void 0);Fu.Consumer;var Gd={};function Lv(r,s,i){var l=Du(r),c=r,p=!Ud(r),f=s.attrs,y=f===void 0?Pu:f,g=s.componentId,w=g===void 0?(function(j,$){var F=typeof j!="string"?"sc":ih(j);Gd[F]=(Gd[F]||0)+1;var z="".concat(F,"-").concat(Ru(Bl+F+Gd[F]));return $?"".concat($,"-").concat(z):z})(s.displayName,s.parentComponentId):g,v=s.displayName,_=v===void 0?(function(j){return Ud(j)?"styled.".concat(j):"Styled(".concat(rv(j),")")})(r):v,b=s.displayName&&s.componentId?"".concat(ih(s.displayName),"-").concat(s.componentId):s.componentId||w,L=l&&c.attrs?c.attrs.concat(y).filter(Boolean):y,E=s.shouldForwardProp;if(l&&c.shouldForwardProp){var I=c.shouldForwardProp;if(s.shouldForwardProp){var N=s.shouldForwardProp;E=function(j,$){return I(j,$)&&N(j,$)}}else E=I}var C=new Sv(i,b,l?c.componentStyle:void 0);function A(j,$){return(function(F,z,B){var ie=F.attrs,ce=F.componentStyle,ee=F.defaultProps,Y=F.foldedComponentIds,X=F.styledComponentId,ve=F.target,K=An.useContext(Fu),q=Cu(),J=F.shouldForwardProp||q.shouldForwardProp,G=Y0(z,K,ee)||Is,H=(function(ue,fe,Ie){for(var Ee,Ze=Zt(Zt({},fe),{className:void 0,theme:Ie}),ge=0;ge<ue.length;ge+=1){var Ce=Ns(Ee=ue[ge])?Ee(Ze):Ee;for(var Le in Ce)Le==="className"?Ze.className=wo(Ze.className,Ce[Le]):Le==="style"?Ze.style=Zt(Zt({},Ze.style),Ce[Le]):Le in fe&&fe[Le]===void 0||(Ze[Le]=Ce[Le])}return"className"in fe&&typeof fe.className=="string"&&(Ze.className=wo(Ze.className,fe.className)),Ze})(ie,z,G),P=H.as||ve,M={};for(var D in H)H[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&H.theme===G||(D==="forwardedAs"?M.as=H.forwardedAs:J&&!J(D,P)||(M[D]=H[D]));var re=(function(ue,fe){var Ie=Cu(),Ee=ue.generateAndInjectStyles(fe,Ie.styleSheet,Ie.stylis);return Ee})(ce,H),W=re.className,Z=wo(Y,X);return W&&(Z+=" "+W),H.className&&(Z+=" "+H.className),M[Ud(P)&&!K0.has(P)?"class":"className"]=Z,B&&(M.ref=B),x.createElement(P,M)})(k,j,$)}A.displayName=_;var k=An.forwardRef(A);return k.attrs=L,k.componentStyle=C,k.displayName=_,k.shouldForwardProp=E,k.foldedComponentIds=l?wo(c.foldedComponentIds,c.styledComponentId):"",k.styledComponentId=b,k.target=l?c.target:r,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=l?(function($){for(var F=[],z=1;z<arguments.length;z++)F[z-1]=arguments[z];for(var B=0,ie=F;B<ie.length;B++)bu($,ie[B],!0);return $})({},c.defaultProps,j):j}}),zu(k,function(){return".".concat(k.styledComponentId)}),p&&tm(k,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function mh(r,s){for(var i=[r[0]],l=0,c=s.length;l<c;l+=1)i.push(s[l],r[l+1]);return i}var gh=function(r){return Object.assign(r,{isCss:!0})};function Mo(r){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];if(Ns(r)||Fi(r))return gh(Xr(mh(Pu,Cs([r],s,!0))));var l=r;return s.length===0&&l.length===1&&typeof l[0]=="string"?Xr(l):gh(Xr(mh(l,s)))}function Su(r,s,i){if(i===void 0&&(i=Is),!s)throw Wi(1,s);var l=function(c){for(var p=[],f=1;f<arguments.length;f++)p[f-1]=arguments[f];return r(s,i,Mo.apply(void 0,Cs([c],p,!1)))};return l.attrs=function(c){return Su(r,s,Zt(Zt({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)}))},l.withConfig=function(c){return Su(r,s,Zt(Zt({},i),c))},l}var cm=function(r){return Su(Lv,r)},h=cm;K0.forEach(function(r){h[r]=cm(r)});var dm,Av=(function(){function r(s,i){this.rules=s,this.componentId=i,this.isStatic=im(s),Il.registerId(this.componentId+1)}return r.prototype.createStyles=function(s,i,l,c){var p=c(Ml(Xr(this.rules,i,l,c)),""),f=this.componentId+s;l.insertRules(f,f,p)},r.prototype.removeStyles=function(s,i){i.clearRules(this.componentId+s)},r.prototype.renderStyles=function(s,i,l,c){s>2&&Il.registerId(this.componentId+s);var p=this.componentId+s;this.isStatic?l.hasNameForId(p,p)||this.createStyles(s,i,l,c):(this.removeStyles(s,l),this.createStyles(s,i,l,c))},r})();function Tv(r){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];var l=Mo.apply(void 0,Cs([r],s,!1)),c="sc-global-".concat(Ru(JSON.stringify(l))),p=new Av(l,c),f=new WeakMap,y=function(g){var w=Cu(),v=An.useContext(Fu),_=f.get(w.styleSheet);return _===void 0&&(_=w.styleSheet.allocateGSInstance(c),f.set(w.styleSheet,_)),An.useLayoutEffect(function(){return w.styleSheet.server||(function(b,L,E,I,N){if(p.isStatic)p.renderStyles(b,Xx,E,N);else{var C=Zt(Zt({},L),{theme:Y0(L,I,y.defaultProps)});p.renderStyles(b,C,E,N)}})(_,g,w.styleSheet,v,w.stylis),function(){p.removeStyles(_,w.styleSheet)}},[_,g,w.styleSheet,v,w.stylis]),null};return An.memo(y)}var Ev=(function(){function r(s,i){var l=this;this[dm]=!0,this.inject=function(c,p){p===void 0&&(p=_u);var f=l.name+p.hash;c.hasNameForId(l.id,f)||c.insertRules(l.id,f,p(l.rules,f,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=i,zu(this,function(){throw Wi(12,String(l.name))})}return r.prototype.getName=function(s){return s===void 0&&(s=_u),this.name+s.hash},r})();function Bu(r){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];var l=Ml(Mo.apply(void 0,Cs([r],s,!1))),c=Ru(l);return new Ev(c,l)}dm=rm;const $v=768,Pv=`(max-width: ${$v-1}px)`;function Ou(r){const[s,i]=x.useState(()=>typeof window>"u"?!1:window.matchMedia(r).matches);return x.useEffect(()=>{if(typeof window>"u")return;const l=window.matchMedia(r),c=p=>i(p.matches);return i(l.matches),l.addEventListener("change",c),()=>l.removeEventListener("change",c)},[r]),s}function Rv(){return Ou(Pv)}function um(r){var s,i,l="";if(typeof r=="string"||typeof r=="number")l+=r;else if(typeof r=="object")if(Array.isArray(r)){var c=r.length;for(s=0;s<c;s++)r[s]&&(i=um(r[s]))&&(l&&(l+=" "),l+=i)}else for(i in r)r[i]&&(l&&(l+=" "),l+=i);return l}function Q(){for(var r,s,i=0,l="",c=arguments.length;i<c;i++)(r=arguments[i])&&(s=um(r))&&(l&&(l+=" "),l+=s);return l}const Ol=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M12 5V19M5 12H19",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Ol.displayName="PlusIcon";const Dv="_root_ly4d2_13",zv="_sm_ly4d2_75",Fv="_md_ly4d2_81",Bv="_lg_ly4d2_87",Ov="_horizontal_ly4d2_100",Hv="_alignStart_ly4d2_114",Wv="_vertical_ly4d2_118",Uv="_inner_ly4d2_124",Vv="_iconSlot_ly4d2_139",Gv="_label_ly4d2_156",mo={root:Dv,sm:zv,md:Fv,lg:Bv,horizontal:Ov,alignStart:Hv,vertical:Wv,inner:Uv,iconSlot:Vv,label:Gv};function xh(r){return typeof r=="number"?`${r}px`:r}const qv=x.forwardRef(({size:r="md",layout:s="horizontal",align:i="center",label:l="Add",hideLabel:c=!1,icon:p,height:f,borderRadius:y,className:g,style:w,disabled:v,type:_="button",...b},L)=>{const E=p??t.jsx(Ol,{size:"100%"}),I={};return f!==void 0&&(I["--area-min-height"]=xh(f)),y!==void 0&&(I["--area-radius"]=xh(y)),t.jsx("button",{ref:L,type:_,className:Q(mo.root,mo[r],mo[s],i==="start"&&mo.alignStart,g),disabled:v,"data-size":r,"data-layout":s,style:{...I,...w},...b,children:t.jsxs("span",{className:mo.inner,children:[t.jsx("span",{className:mo.iconSlot,"aria-hidden":"true",children:E}),!c&&l&&t.jsx("span",{className:mo.label,children:l})]})})});qv.displayName="AreaButton";const Zv="_root_uqz3u_7",Yv={root:Zv},Yn=x.forwardRef(({as:r="span",className:s,children:i,...l},c)=>t.jsx(r,{ref:c,className:Q(Yv.root,s),...l,children:i}));Yn.displayName="Eyebrow";const Kv="_root_1brpy_12",Qv="_ghost_1brpy_27",Xv="_path_1brpy_32",wi={root:Kv,"ai-spin":"_ai-spin_1brpy_1",ghost:Qv,"ai-morph":"_ai-morph_1brpy_1",path:Xv,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},Jv={xs:16,sm:24,md:32,lg:48,xl:64},ey={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},vh="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",tl=r=>r==="inverse"||r==="inverse-light",ty=r=>r==="stroke"||r==="stroke-light",Ui=x.forwardRef(({size:r="md",variant:s="gradient-fill",state:i="loading",className:l,style:c,"aria-label":p,...f},y)=>{const g=x.useId().replace(/[^a-z0-9]/gi,""),w=`aigrad-${g}`,v=`aiglow-${g}`,_=typeof r=="string",b=_?Jv[r]:r,L=_?ey[r]:b<=16?1.75:b<=24?1.5:b<=32?1.25:1.1,E=s==="gradient-fill"?`url(#${w})`:tl(s)?"currentColor":"none",I=tl(s)?"none":ty(s)?"currentColor":`url(#${w})`,N="currentColor",C=s!=="stroke"&&s!=="stroke-light"&&!tl(s);return t.jsxs("svg",{ref:y,width:b,height:b,viewBox:"0 0 24 24",fill:"none",className:Q(wi.root,wi[`variant-${s}`],wi[`state-${i}`],l),style:c,"data-state":i,"aria-label":p??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...f,children:[!tl(s)&&t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:w,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[t.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),t.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),t.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),t.jsxs("filter",{id:v,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[t.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),t.jsxs("feMerge",{children:[t.jsx("feMergeNode",{in:"blur"}),t.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),t.jsx("path",{d:vh,stroke:N,strokeWidth:L*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:wi.ghost}),t.jsx("path",{d:vh,fill:E,stroke:I==="none"?void 0:I,strokeWidth:I==="none"?void 0:L,strokeLinecap:"round",strokeLinejoin:"round",filter:C?`url(#${v})`:void 0,className:wi.path})]})});Ui.displayName="AILoader";const ny="_root_10act_14",ry="_hovered_10act_68",oy="_loading_10act_69",sy="_sm_10act_90",iy="_md_10act_98",ay="_lg_10act_106",ly="_dark_10act_116",cy="_icon_10act_122",fs={root:ny,hovered:ry,loading:oy,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:sy,md:iy,lg:ay,dark:ly,icon:cy},yh={sm:12,md:14,lg:18};function dy({size:r,light:s}){return t.jsxs("svg",{width:r,height:r,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!s&&t.jsx("defs",{children:t.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#8C4FE2"}),t.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),t.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),t.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:s?"white":"url(#ai-core-btn-sparkle)"})]})}const pm=x.forwardRef(({size:r="md",dark:s,loading:i,className:l,onMouseEnter:c,onMouseLeave:p,...f},y)=>{const[g,w]=x.useState(!1);return t.jsx("button",{ref:y,className:Q(fs.root,fs[r],s&&fs.dark,i?fs.loading:g&&fs.hovered,l),"aria-busy":i||void 0,onMouseEnter:v=>{w(!0),c==null||c(v)},onMouseLeave:v=>{w(!1),p==null||p(v)},...f,children:t.jsx("span",{className:fs.icon,children:i?t.jsx(Ui,{size:yh[r],variant:s?"inverse-light":"gradient-fill"}):t.jsx(dy,{size:yh[r],light:s})})})});pm.displayName="AICoreButton";const uy="_root_1qx4u_9",py="_star_1qx4u_34",qd={root:uy,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:py},fy="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",fm=x.forwardRef(({size:r="sm",className:s,...i},l)=>t.jsx("span",{ref:l,"data-size":r,"aria-hidden":"true",className:Q(qd.root,qd[`size-${r}`],s),...i,children:t.jsx("svg",{viewBox:"0 0 24 24",className:qd.star,fill:"none","aria-hidden":"true",children:t.jsx("path",{d:fy,fill:"currentColor"})})}));fm.displayName="AIAvatar";const hy="_shell_gm6sz_21",my="_wrapper_gm6sz_46",gy="_card_gm6sz_51",xy="_cardClip_gm6sz_66",vy="_textarea_gm6sz_143",yy="_actions_gm6sz_186",ys={shell:hy,wrapper:my,card:gy,cardClip:xy,textarea:vy,actions:yy},hm=x.forwardRef(({className:r,children:s,...i},l)=>t.jsx("div",{ref:l,className:Q(ys.shell,r),...i,children:s}));hm.displayName="AIComposer";function wy(r,s){typeof r=="function"?r(s):r&&(r.current=s)}const mm=x.forwardRef(({value:r,onChange:s,onSubmit:i,maxRows:l=5,placeholder:c="Ask AI anything…",className:p,onKeyDown:f,disabled:y,children:g,style:w,...v},_)=>{const b=x.useRef(null);x.useEffect(()=>{const C=b.current;C&&(C.style.height="auto",C.style.height=`${C.scrollHeight}px`)},[r]);const L=x.useCallback(C=>s(C.target.value),[s]),E=x.useCallback(C=>{f==null||f(C),!C.defaultPrevented&&C.key==="Enter"&&!C.shiftKey&&i&&(C.preventDefault(),i())},[f,i]),I=x.useCallback(C=>{b.current=C,wy(_,C)},[_]),N={...w??{},"--ai-composer-max-rows":l};return t.jsx("div",{className:Q(ys.wrapper,p),children:t.jsx("div",{className:ys.card,children:t.jsxs("div",{className:ys.cardClip,children:[t.jsx("textarea",{...v,ref:I,className:ys.textarea,rows:1,value:r,onChange:L,onKeyDown:E,placeholder:c,disabled:y,style:N}),g!=null&&t.jsx("div",{className:ys.actions,children:g})]})})})});mm.displayName="AIComposerInput";const jy="_fadeFrame_1l0ib_19",by="_scroller_1l0ib_32",ky="_content_1l0ib_89",_y="_messageBlock_1l0ib_108",Cy="_messageBlockAi_1l0ib_116",Sy="_inboundBlock_1l0ib_128",My="_inboundLoader_1l0ib_136",Iy="_inboundLoaderLabel_1l0ib_146",Ny="_outboundBlock_1l0ib_153",Ly="_outboundHeader_1l0ib_161",Ay="_messageBlockUser_1l0ib_168",Ty="_aiThreadOutboundIn_1l0ib_1",Ey="_messageBody_1l0ib_182",$y="_messageBodyAi_1l0ib_193",Py="_messageBodyUser_1l0ib_200",Ry="_label_1l0ib_159",Dy="_labelAi_1l0ib_221",zy="_labelUser_1l0ib_159",Fy="_labelAvatar_1l0ib_224",By="_labelText_1l0ib_237",Oy="_timestamp_1l0ib_244",Hy="_timestampAi_1l0ib_259",Wy="_timestampUser_1l0ib_260",Uy="_timestampInline_1l0ib_270",Vy="_aiThreadOutboundFadeIn_1l0ib_1",ze={fadeFrame:jy,scroller:by,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:ky,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:_y,messageBlockAi:Cy,inboundBlock:Sy,inboundLoader:My,inboundLoaderLabel:Iy,outboundBlock:Ny,outboundHeader:Ly,messageBlockUser:Ay,aiThreadOutboundIn:Ty,messageBody:Ey,messageBodyAi:$y,messageBodyUser:Py,label:Ry,labelAi:Dy,labelUser:zy,labelAvatar:Fy,labelText:By,timestamp:Oy,timestampAi:Hy,timestampUser:Wy,timestampInline:Uy,aiThreadOutboundFadeIn:Vy},wh=8;function Gy(r,s){typeof r=="function"?r(s):r&&(r.current=s)}const gm=x.forwardRef(({density:r="comfortable",padding:s="md",autoScroll:i=!0,autoScrollThreshold:l=80,className:c,children:p,...f},y)=>{const g=x.useRef(null),w=x.useRef(null),v=x.useRef(!0),[_,b]=x.useState(!1),[L,E]=x.useState(!1),I=x.useCallback(N=>{g.current=N,Gy(y,N)},[y]);return x.useEffect(()=>{const N=g.current,C=w.current;if(!N||!C)return;const A=()=>{const{scrollTop:z,scrollHeight:B,clientHeight:ie}=N;return B-z-ie<l},k=z=>{N.scrollTo({top:N.scrollHeight,behavior:z?"smooth":"auto"})},j=()=>{const{scrollTop:z,scrollHeight:B,clientHeight:ie}=N,ce=z>wh,ee=B-z-ie>wh;b(Y=>Y===ce?Y:ce),E(Y=>Y===ee?Y:ee)};i&&(k(!1),v.current=!0),j();const $=()=>{v.current=A(),j()};N.addEventListener("scroll",$,{passive:!0});const F=new ResizeObserver(()=>{i&&v.current&&k(!0),j()});return F.observe(C),F.observe(N),()=>{N.removeEventListener("scroll",$),F.disconnect()}},[i,l]),t.jsx("div",{className:ze.fadeFrame,"data-fade-top":_,"data-fade-bottom":L,children:t.jsx("div",{ref:I,className:Q(ze.scroller,ze[`padding-${s}`],c),...f,children:t.jsx("div",{ref:w,className:Q(ze.content,ze[`density-${r}`]),children:p})})})});gm.displayName="AIThread";const Hl=x.forwardRef(({align:r="ai",avatar:s,className:i,children:l,...c},p)=>t.jsxs("div",{ref:p,className:Q(ze.label,r==="user"?ze.labelUser:ze.labelAi,i),...c,children:[s!=null&&t.jsx("span",{className:ze.labelAvatar,children:s}),t.jsx("span",{className:ze.labelText,children:l})]}));Hl.displayName="AILabel";const qy=r=>r.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function Zy(r,s){if(typeof r=="string")return{text:r};const i=r instanceof Date?r:new Date(r);return Number.isNaN(i.getTime())?null:{text:s(i),iso:i.toISOString()}}const Vi=x.forwardRef(({value:r,align:s="ai",format:i=qy,inline:l=!1,className:c,...p},f)=>{const y=x.useMemo(()=>Zy(r,i),[r,i]);return y?t.jsx("time",{ref:f,className:Q(ze.timestamp,l?ze.timestampInline:s==="user"?ze.timestampUser:ze.timestampAi,c),dateTime:y.iso,...p,children:y.text}):null});Vi.displayName="AITimestamp";function Yy(r){return r==null?null:typeof r=="string"||typeof r=="number"||r instanceof Date?t.jsx(Vi,{align:"ai",value:r}):r}function Ky(r){return r==null?null:typeof r=="string"||typeof r=="number"?t.jsx(Hl,{align:"ai",children:r}):r}const bl=x.forwardRef(({label:r,time:s,className:i,children:l,...c},p)=>t.jsxs("div",{ref:p,"data-author":"ai",className:Q(ze.messageBlock,ze.messageBlockAi,i),...c,children:[Ky(r),t.jsx("div",{className:Q(ze.messageBody,ze.messageBodyAi),children:l}),Yy(s)]}));bl.displayName="AIAssistantMessage";function Qy(r){return r==null?null:typeof r=="string"||typeof r=="number"||r instanceof Date?t.jsx(Vi,{align:"user",value:r}):r}function Xy(r){return r==null?null:typeof r=="string"||typeof r=="number"?t.jsx(Hl,{align:"user",children:r}):r}const xm=x.forwardRef(({label:r,time:s,className:i,children:l,...c},p)=>t.jsxs("div",{ref:p,"data-author":"user",className:Q(ze.messageBlock,ze.messageBlockUser,i),...c,children:[Xy(r),t.jsx("div",{className:Q(ze.messageBody,ze.messageBodyUser),children:l}),Qy(s)]}));xm.displayName="AIUserMessage";function Jy(r){return r===!1?null:r==null||r===!0?t.jsx(fm,{size:"sm"}):r}function e3(r,s){return r==null&&s==null?null:typeof r=="string"||typeof r=="number"||r==null?t.jsx(Hl,{align:"ai",avatar:s,children:r}):r}const t3=x.forwardRef(({avatar:r,label:s="Teambridge AI",activity:i,actions:l,loading:c=!1,loaderLabel:p="Thinking…",className:f,children:y,...g},w)=>{const v=Jy(r),_=e3(s,v);return t.jsxs("div",{ref:w,"data-author":"ai",className:Q(ze.messageBlock,ze.messageBlockAi,ze.inboundBlock,f),...g,children:[_,i,y!=null&&t.jsx("div",{className:Q(ze.messageBody,ze.messageBodyAi),children:y}),c&&t.jsxs("div",{className:ze.inboundLoader,"aria-live":"polite",children:[t.jsx(Ui,{size:"xs"}),p!=null&&t.jsx("span",{className:ze.inboundLoaderLabel,children:p})]}),l]})});t3.displayName="AIInboundMessage";function n3(r){return r instanceof Date||typeof r=="number"||typeof r=="string"}const r3=x.forwardRef(({label:r="You",time:s,timeFormat:i,className:l,children:c,...p},f)=>{const y=s==null?null:n3(s)?t.jsx(Vi,{value:s,format:i,inline:!0}):s,g=r==null?null:typeof r=="string"||typeof r=="number"?t.jsx("span",{className:ze.labelText,children:r}):r,w=g!=null||y!=null;return t.jsxs("div",{ref:f,"data-author":"user",className:Q(ze.messageBlock,ze.messageBlockUser,ze.outboundBlock,l),...p,children:[w&&t.jsxs("div",{className:Q(ze.label,ze.labelUser,ze.outboundHeader),children:[g,y]}),t.jsx("div",{className:Q(ze.messageBody,ze.messageBodyUser),children:c})]})});r3.displayName="AIOutboundMessage";const En=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M6 9L12 15L18 9",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};En.displayName="ChevronDownIcon";const o3="_root_kkfj4_8",s3="_header_kkfj4_17",i3="_headerSummary_kkfj4_47",a3="_aiTrailSummaryFlow_kkfj4_1",l3="_headerChevron_kkfj4_95",c3="_headerChevronExpanded_kkfj4_103",d3="_body_kkfj4_111",u3="_bodyExpanded_kkfj4_117",p3="_bodyCollapsed_kkfj4_118",f3="_bodyInner_kkfj4_120",h3="_bodyContent_kkfj4_111",m3="_step_kkfj4_142",g3="_stepIcon_kkfj4_159",x3="_stepAnimating_kkfj4_173",v3="_aiTrailStepPulse_kkfj4_1",y3="_stepBody_kkfj4_184",w3="_stepHead_kkfj4_195",j3="_stepLabel_kkfj4_199",b3="_stepSeparator_kkfj4_201",k3="_stepDetail_kkfj4_205",_3="_subToggle_kkfj4_214",C3="_subToggleCount_kkfj4_251",S3="_subToggleChevron_kkfj4_255",M3="_subActivityWrap_kkfj4_274",I3="_subActivityExpanded_kkfj4_280",N3="_subActivityCollapsed_kkfj4_281",L3="_subActivityClip_kkfj4_283",A3="_subActivityList_kkfj4_294",T3="_subActivity_kkfj4_274",E3="_aiTrailSubActivityType_kkfj4_1",$3="_aiTrailSubActivityFade_kkfj4_1",tt={root:o3,header:s3,headerSummary:i3,aiTrailSummaryFlow:a3,headerChevron:l3,headerChevronExpanded:c3,body:d3,bodyExpanded:u3,bodyCollapsed:p3,bodyInner:f3,bodyContent:h3,step:m3,"step-pending":"_step-pending_kkfj4_153","step-active":"_step-active_kkfj4_154","step-done":"_step-done_kkfj4_155","step-error":"_step-error_kkfj4_156",stepIcon:g3,stepAnimating:x3,aiTrailStepPulse:v3,stepBody:y3,stepHead:w3,stepLabel:j3,stepSeparator:b3,stepDetail:k3,subToggle:_3,subToggleCount:C3,subToggleChevron:S3,subActivityWrap:M3,subActivityExpanded:I3,subActivityCollapsed:N3,subActivityClip:L3,subActivityList:A3,subActivity:T3,aiTrailSubActivityType:E3,aiTrailSubActivityFade:$3},vm=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};vm.displayName="MessageDotsSquareIcon";function ym({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}ym.displayName="SearchMdIcon";function qn({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}const wm=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};wm.displayName="Globe01Icon";const jm=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};jm.displayName="Code02Icon";function bm({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}bm.displayName="Tool01Icon";const br=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M20 6L9 17L4 12",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})},Ls=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:s}),t.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Ls.displayName="AlertCircleIcon";const P3={thinking:t.jsx(vm,{size:14}),tool:t.jsx(bm,{size:14}),search:t.jsx(ym,{size:14}),file:t.jsx(qn,{size:14}),web:t.jsx(wm,{size:14}),code:t.jsx(jm,{size:14}),content:t.jsx(br,{size:14})},Ei=x.forwardRef(({type:r,status:s="done",detail:i,icon:l,subActivities:c,groupState:p="done",className:f,children:y,...g},w)=>{const v=s==="active"&&p==="live",_=s==="active"&&p==="live",b=s==="active"||s==="error",[L,E]=x.useState(null),I=L!==null?L:b;x.useEffect(()=>{E(null)},[s]);const N=x.useCallback(()=>E(!I),[I]),C=!!c&&c.length>0,A=(c==null?void 0:c.length)??0,k=s==="error"?t.jsx(Ls,{size:14}):l??P3[r];return t.jsxs("div",{ref:w,"data-step-type":r,"data-step-status":s,className:Q(tt.step,tt[`step-${s}`],v&&tt.stepAnimating,f),...g,children:[t.jsx("span",{className:tt.stepIcon,"aria-hidden":!0,children:k}),t.jsxs("span",{className:tt.stepBody,children:[t.jsxs("span",{className:tt.stepHead,children:[t.jsx("span",{className:tt.stepLabel,children:y}),i!=null&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:tt.stepSeparator,"aria-hidden":!0,children:" · "}),t.jsx("span",{className:tt.stepDetail,children:i})]})]}),C&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:tt.subToggle,onClick:N,"aria-expanded":I,"data-expanded":I||void 0,children:[t.jsxs("span",{className:tt.subToggleCount,children:[A," ",A===1?"step":"steps"]}),t.jsx("span",{className:tt.subToggleChevron,"aria-hidden":!0,children:t.jsx(En,{size:10})})]}),t.jsx("div",{className:Q(tt.subActivityWrap,I?tt.subActivityExpanded:tt.subActivityCollapsed),"aria-hidden":!I,children:t.jsx("div",{className:tt.subActivityClip,children:t.jsx("ul",{className:tt.subActivityList,"data-animating":_||void 0,children:c.map((j,$)=>t.jsx("li",{className:tt.subActivity,children:j},$))})})})]})]})]})});Ei.displayName="AIActivityStep";function jh(r){return r==="error"}function R3(r,s,i){const l=s===1?"1 step":`${s} steps`,c=[];return r==="live"?c.push("Working"):r==="error"?c.push("Stopped"):c.push(i?`Thought for ${i}`:"Thought"),c.push(l),c.join(" · ")}const km=x.forwardRef(({state:r="live",expanded:s,defaultExpanded:i,onToggle:l,duration:c,summary:p,className:f,children:y,...g},w)=>{const v=s!==void 0,[_,b]=x.useState(i??jh(r)),[L,E]=x.useState(!1);x.useEffect(()=>{v||L||b(jh(r))},[r,v,L]);const I=v?!!s:_,N=x.useCallback(()=>{const j=!I;v||(b(j),E(!0)),l==null||l(j)},[I,v,l]),{enhancedChildren:C,stepCount:A}=x.useMemo(()=>{let j=0;return{enhancedChildren:x.Children.map(y,F=>{if(!x.isValidElement(F))return F;const z=F.props;return"type"in z||"status"in z?(j+=1,(z.status??"done")==="pending"?null:D3(F,r)):F}),stepCount:j}},[y,r]),k=p??R3(r,A,c);return t.jsxs("div",{ref:w,"data-state":r,"data-expanded":I,className:Q(tt.root,f),...g,children:[t.jsxs("button",{type:"button",className:tt.header,onClick:N,"aria-expanded":I,"aria-label":I?"Collapse activity trail":"Expand activity trail",children:[t.jsx("span",{className:tt.headerSummary,children:k}),t.jsx("span",{className:Q(tt.headerChevron,I&&tt.headerChevronExpanded),"aria-hidden":!0,children:t.jsx(En,{size:14})})]}),t.jsx("div",{className:Q(tt.body,I?tt.bodyExpanded:tt.bodyCollapsed),"aria-hidden":!I,children:t.jsx("div",{className:tt.bodyInner,children:t.jsxs("div",{className:tt.bodyContent,children:[C,r==="done"&&t.jsx(Ei,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});km.displayName="AIActivityTrail";function D3(r,s){return x.cloneElement(r,{groupState:s})}const z3="_root_v8mqg_9",F3="_hover_v8mqg_21",Zd={root:z3,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:F3};function B3(r){return r instanceof Date||typeof r=="number"||typeof r=="string"}const _m=x.forwardRef(({visibility:r="always",align:s="start",time:i,timeFormat:l,className:c,children:p,...f},y)=>{const g=i==null?null:B3(i)?t.jsx(Vi,{value:i,format:l,inline:!0}):i;return t.jsxs("div",{ref:y,"data-visibility":r,"data-align":s,className:Q(Zd.root,Zd[`align-${s}`],r==="hover"&&Zd.hover,c),...f,children:[p,g]})});_m.displayName="AIMessageActions";const O3="_root_ghwhu_10",H3="_badge_ghwhu_27",W3="_badgeIcon_ghwhu_38",U3="_green_ghwhu_59",V3="_yellow_ghwhu_60",G3="_matcha_ghwhu_61",q3="_purple_ghwhu_62",Z3="_blue_ghwhu_63",Y3="_azure_ghwhu_64",K3="_red_ghwhu_65",Q3="_orange_ghwhu_66",X3="_pink_ghwhu_67",J3="_slate_ghwhu_68",e5="_content_ghwhu_73",t5="_label_ghwhu_83",n5="_valueRow_ghwhu_97",r5="_change_ghwhu_106",o5="_value_ghwhu_97",xr={root:O3,badge:H3,badgeIcon:W3,green:U3,yellow:V3,matcha:G3,purple:q3,blue:Z3,azure:Y3,red:K3,orange:Q3,pink:X3,slate:J3,content:e5,label:t5,valueRow:n5,change:r5,value:o5},Cm=x.forwardRef(({color:r="slate",icon:s,label:i,value:l,change:c,className:p,...f},y)=>t.jsxs("div",{ref:y,className:Q(xr.root,p),...f,children:[t.jsx("div",{className:Q(xr.badge,xr[r]),"aria-hidden":"true",children:t.jsx("span",{className:xr.badgeIcon,children:s})}),t.jsxs("div",{className:xr.content,children:[t.jsx("span",{className:xr.label,children:i}),t.jsxs("div",{className:xr.valueRow,children:[t.jsx("span",{className:xr.value,children:l}),c!=null&&t.jsx("span",{className:xr.change,children:c})]})]})]}));Cm.displayName="DataCard";const s5="_root_d0j6n_7",i5="_icon_d0j6n_21",a5="_text_d0j6n_33",l5="_positive_d0j6n_41",c5="_warning_d0j6n_45",d5="_negative_d0j6n_49",nl={root:s5,icon:i5,text:a5,positive:l5,warning:c5,negative:d5};function Hu({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Hu.displayName="ArrowNarrowUpIcon";function Sm({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Sm.displayName="ArrowNarrowDownIcon";function u5(r){return r==="up"?"positive":"negative"}const Wl=x.forwardRef((r,s)=>{const{mode:i,value:l,className:c,...p}=r,f=i==="trend"?r.severity??u5(r.trend):r.severity,{severity:y,...g}=p,w=i==="trend"?(({trend:_,severity:b,...L})=>L)(g):g,v=i==="trend"?r.trend==="up"?Hu:Sm:null;return t.jsxs("span",{ref:s,className:Q(nl.root,nl[f],c),...w,children:[t.jsx("span",{className:nl.text,children:l}),v&&t.jsx("span",{className:nl.icon,"aria-hidden":"true",children:t.jsx(v,{size:14})})]})});Wl.displayName="ValueChangeLabel";const p5="_root_1lq10_1",f5="_horizontal_1lq10_9",h5="_vertical_1lq10_15",m5="_solid_1lq10_32",g5="_dashed_1lq10_36",rl={root:p5,horizontal:f5,vertical:h5,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:m5,dashed:g5},x5=x.forwardRef(({thickness:r=1,orientation:s="horizontal",variant:i="solid",className:l,...c},p)=>t.jsx("hr",{ref:p,role:"separator","aria-orientation":s,className:Q(rl.root,rl[`thickness-${r}`],rl[s],rl[i],l),...c}));x5.displayName="Divider";var Mm=F0();const v5="_overlay_vxgy2_9",y5="_dialogOverlayIn_vxgy2_1",w5="_dialogOverlayOut_vxgy2_1",j5="_dialog_vxgy2_38",b5="_dialogIn_vxgy2_1",k5="_dialogOut_vxgy2_1",_5="_sm_vxgy2_88",C5="_md_vxgy2_89",S5="_lg_vxgy2_90",M5="_header_vxgy2_95",I5="_title_vxgy2_107",N5="_closeBtn_vxgy2_120",L5="_content_vxgy2_152",A5="_footer_vxgy2_163",Jr={overlay:v5,dialogOverlayIn:y5,dialogOverlayOut:w5,dialog:j5,dialogIn:b5,dialogOut:k5,sm:_5,md:C5,lg:S5,header:M5,title:I5,closeBtn:N5,content:L5,footer:A5},Es=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})},Ul=x.forwardRef(({onClose:r,children:s,className:i,...l},c)=>t.jsxs("div",{ref:c,className:Q(Jr.header,i),...l,children:[t.jsx("span",{className:Jr.title,children:s}),r&&t.jsx("button",{type:"button",className:Jr.closeBtn,onClick:r,"aria-label":"Close",children:t.jsx(Es,{size:16})})]}));Ul.displayName="DialogHeader";const Vl=x.forwardRef(({children:r,className:s,...i},l)=>t.jsx("div",{ref:l,className:Q(Jr.content,s),...i,children:r}));Vl.displayName="DialogContent";const Gl=x.forwardRef(({children:r,className:s,...i},l)=>t.jsx("div",{ref:l,className:Q(Jr.footer,s),...i,children:r}));Gl.displayName="DialogFooter";function Wu({open:r,onClose:s,size:i="sm",children:l,"aria-label":c,"aria-labelledby":p}){const f=x.useRef(null),y=180,[g,w]=x.useState(r);return x.useEffect(()=>{if(r){w(!0);return}const v=setTimeout(()=>w(!1),y);return()=>clearTimeout(v)},[r]),x.useEffect(()=>{if(!r)return;const v=_=>{_.key==="Escape"&&s()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[r,s]),x.useEffect(()=>{if(!r)return;const v=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=v}},[r]),g?Mm.createPortal(t.jsx("div",{className:Jr.overlay,"data-state":r?"open":"closed",role:"dialog","aria-modal":"true","aria-label":c,"aria-labelledby":p,onMouseDown:v=>{v.target===v.currentTarget&&s()},children:t.jsx("div",{ref:f,className:Q(Jr.dialog,Jr[i]),"data-state":r?"open":"closed",children:l})}),document.body):null}const T5="_root_sdur6_8",E5="_xs_sdur6_69",$5="_sm_sdur6_78",P5="_md_sdur6_87",R5="_lg_sdur6_96",D5="_xl_sdur6_105",z5="_iconOnly_sdur6_116",F5="_primary_sdur6_126",B5="_secondary_sdur6_142",O5="_tertiary_sdur6_161",H5="_ghost_sdur6_179",W5="_destructive_sdur6_197",U5="_destructiveSecondary_sdur6_215",V5="_artwork_sdur6_63",G5="_label_sdur6_248",q5="_spinner_sdur6_63",Z5="_light_sdur6_275",sn={root:T5,xs:E5,sm:$5,md:P5,lg:R5,xl:D5,iconOnly:z5,primary:F5,secondary:B5,tertiary:O5,ghost:H5,destructive:W5,destructiveSecondary:U5,artwork:V5,label:G5,spinner:q5,"alloy-spin":"_alloy-spin_sdur6_1",light:Z5},Y5={primary:sn.primary,secondary:sn.secondary,tertiary:sn.tertiary,ghost:sn.ghost,destructive:sn.destructive,"destructive-secondary":sn.destructiveSecondary},Oe=x.forwardRef(({variant:r="primary",size:s="md",loading:i=!1,leadingArtwork:l,trailingArtwork:c,iconOnly:p=!1,className:f,children:y,disabled:g,...w},v)=>{const _=g||i;return t.jsxs("button",{ref:v,className:Q(sn.root,Y5[r],sn[s],p&&sn.iconOnly,f),disabled:_,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":r,"data-size":s,...w,children:[i&&t.jsx("span",{className:sn.spinner,"aria-hidden":"true"}),!i&&p&&t.jsx("span",{className:Q(sn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:y}),!i&&!p&&t.jsxs(t.Fragment,{children:[l&&t.jsx("span",{className:Q(sn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l}),y&&t.jsx("span",{className:sn.label,children:y}),c&&t.jsx("span",{className:Q(sn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:c})]})]})});Oe.displayName="Button";const K5="_root_1dntq_7",Q5="_badge_1dntq_57",X5="_badgeIconSlot_1dntq_74",J5="_content_1dntq_82",e4="_text_1dntq_90",t4="_title_1dntq_99",n4="_description_1dntq_120",r4="_actions_1dntq_131",o4="_dot_1dntq_137",s4="_actionLink_1dntq_144",i4="_primaryAction_1dntq_162",a4="_trailing_1dntq_170",qt={root:K5,badge:Q5,badgeIconSlot:X5,content:J5,text:e4,title:t4,description:n4,actions:r4,dot:o4,actionLink:s4,primaryAction:i4,trailing:a4},l4=()=>t.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),c4=()=>t.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),d4=()=>t.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),bh=()=>t.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),u4={error:l4,warning:d4,success:c4,info:bh,feature:bh},p4=x.forwardRef(({status:r="info",variant:s="lighter",size:i="sm",title:l,description:c,action:p,onAction:f,learnMore:y,onLearnMore:g,onDismiss:w,className:v,..._},b)=>{const L=u4[r],E=i==="lg",I=w?t.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,onClick:w,"aria-label":"Dismiss",children:t.jsx(Es,{size:12})}):null;return t.jsxs("div",{ref:b,role:"alert",className:Q(qt.root,v),"data-status":r,"data-variant":s,"data-size":i,..._,children:[t.jsx("span",{className:qt.badge,"aria-hidden":"true",children:t.jsx("span",{className:Q("alloy-icon-slot",qt.badgeIconSlot),children:t.jsx(L,{})})}),E?t.jsxs("div",{className:qt.content,children:[t.jsxs("div",{className:qt.text,children:[t.jsx("p",{className:qt.title,children:l}),c&&t.jsx("p",{className:qt.description,children:c})]}),(p||y)&&t.jsxs("div",{className:qt.actions,children:[p&&t.jsx("button",{type:"button",className:Q(qt.actionLink,qt.primaryAction),onClick:f,children:p}),p&&y&&t.jsx("span",{className:qt.dot,"aria-hidden":"true",children:"·"}),y&&t.jsx("button",{type:"button",className:qt.actionLink,onClick:g,children:y})]})]}):t.jsx("p",{className:qt.title,children:l}),E?I:(p||w)&&t.jsxs("div",{className:qt.trailing,children:[p&&t.jsx("button",{type:"button",className:Q(qt.actionLink,qt.primaryAction),onClick:f,children:p}),I]})]})});p4.displayName="Alert";x.createContext(null);const f4="_root_4qytd_5",h4="_neutral_4qytd_25",m4="_primary_4qytd_30",g4="_success_4qytd_35",x4="_warning_4qytd_40",v4="_error_4qytd_45",y4="_info_4qytd_50",kh={root:f4,neutral:h4,primary:m4,success:g4,warning:x4,error:v4,info:y4},Bi=x.forwardRef(({variant:r="neutral",className:s,children:i,...l},c)=>t.jsx("span",{ref:c,className:Q(kh.root,kh[r],s),...l,children:i}));Bi.displayName="Badge";const w4="_root_1s0ek_5",j4="_list_1s0ek_11",b4="_item_1s0ek_23",k4="_separator_1s0ek_31",_4="_link_1s0ek_47",C4="_current_1s0ek_68",S4="_iconSlot_1s0ek_76",or={root:w4,list:j4,item:b4,separator:k4,link:_4,current:C4,iconSlot:S4},M4=()=>t.jsx("span",{className:or.separator,"aria-hidden":"true",children:"/"}),I4=()=>t.jsx("span",{className:or.separator,"aria-hidden":"true",children:t.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),Mi=x.forwardRef(({items:r,separator:s="slash",className:i,...l},c)=>{const p=s==="chevron"?I4:M4;return t.jsx("nav",{ref:c,"aria-label":"Breadcrumb",className:Q(or.root,i),...l,children:t.jsx("ol",{className:or.list,children:r.map((f,y)=>{const g=y===r.length-1,w=!g&&(!!f.href||!!f.onClick);return t.jsxs("li",{className:or.item,children:[y>0&&t.jsx(p,{}),w?t.jsxs("a",{href:f.href,onClick:f.onClick,className:or.link,"aria-label":f.label,children:[f.icon&&t.jsx("span",{className:Q(or.iconSlot,"alloy-icon-slot"),children:f.icon}),t.jsx("span",{children:f.label})]}):t.jsxs("span",{className:Q(or.link,g&&or.current),"aria-current":g?"page":void 0,children:[f.icon&&t.jsx("span",{className:Q(or.iconSlot,"alloy-icon-slot"),children:f.icon}),t.jsx("span",{children:f.label})]})]},y)})})})});Mi.displayName="Breadcrumb";const N4="_root_1h0da_6",L4="_divider_1h0da_14",A4="_item_1h0da_19",T4="_label_1h0da_25",E4="_description_1h0da_26",$4="_chevron_1h0da_27",P4="_iconSlot_1h0da_28",R4="_hitTarget_1h0da_32",D4="_size_sm_1h0da_37",z4="_size_md_1h0da_43",F4="_size_lg_1h0da_49",B4="_header_1h0da_59",O4="_headerContent_1h0da_59",H4="_checkboxWrap_1h0da_60",W4="_labelBlock_1h0da_154",U4="_trailingSlot_1h0da_60",V4="_body_1h0da_196",G4="_bodyInner_1h0da_206",q4="_bodyContent_1h0da_211",Ht={root:N4,divider:L4,item:A4,label:T4,description:E4,chevron:$4,iconSlot:P4,hitTarget:R4,size_sm:D4,size_md:z4,size_lg:F4,header:B4,headerContent:O4,checkboxWrap:H4,labelBlock:W4,trailingSlot:U4,body:V4,bodyInner:G4,bodyContent:q4},ir=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M9 6L15 12L9 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};ir.displayName="ChevronRightIcon";const Z4="_root_17t97_6",Y4="_disabled_17t97_12",K4="_sm_17t97_18",Q4="_md_17t97_26",X4="_lg_17t97_34",J4="_controlWrap_17t97_43",e6="_input_17t97_52",t6="_box_17t97_67",n6="_boxChecked_17t97_96",r6="_boxError_17t97_106",o6="_labelWrap_17t97_116",s6="_label_17t97_116",i6="_error_17t97_138",a6="_required_17t97_140",l6="_description_17t97_145",mn={root:Z4,disabled:Y4,sm:K4,md:Q4,lg:X4,controlWrap:J4,input:e6,box:t6,boxChecked:n6,boxError:r6,labelWrap:o6,label:s6,error:i6,required:a6,description:l6},Im=x.forwardRef(({checked:r,defaultChecked:s=!1,indeterminate:i=!1,onChange:l,disabled:c,error:p,size:f="md",label:y,description:g,id:w,name:v,value:_,required:b,className:L},E)=>{const I=x.useId(),N=w??I,C=x.useRef(null);x.useEffect(()=>{C.current&&(C.current.indeterminate=i)},[i]);const A=r!==void 0,[k,j]=x.useState(s),$=A?r:k,F=B=>{A||j(B.target.checked),l==null||l(B.target.checked)},z=$||i;return t.jsxs("div",{className:Q(mn.root,mn[f],c&&mn.disabled,p&&mn.error,L),children:[t.jsxs("div",{className:mn.controlWrap,children:[t.jsx("input",{ref:B=>{C.current=B,typeof E=="function"?E(B):E&&(E.current=B)},type:"checkbox",id:N,name:v,value:_,checked:$,disabled:c,required:b,"aria-invalid":p||void 0,onChange:F,className:mn.input}),t.jsx("span",{className:Q(mn.box,z&&mn.boxChecked,p&&mn.boxError),"aria-hidden":"true",children:i?t.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:t.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):$?t.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:t.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(y||g)&&t.jsxs("div",{className:mn.labelWrap,children:[y&&t.jsxs("label",{htmlFor:N,className:mn.label,children:[y,b&&t.jsx("span",{className:mn.required,"aria-hidden":"true",children:" *"})]}),g&&t.jsx("span",{className:mn.description,children:g})]})]})});Im.displayName="Checkbox";const Nm=x.createContext(null),Mu=x.createContext(0),c6=x.forwardRef(({type:r="multiple",collapsible:s=!0,value:i,defaultValue:l,onValueChange:c,divider:p=!0,size:f="md",disabled:y=!1,className:g,children:w,...v},_)=>{const b=x.useMemo(()=>Array.isArray(l)?new Set(l):typeof l=="string"?new Set([l]):new Set,[]),[L,E]=x.useState(b),I=i!==void 0,N=x.useMemo(()=>I?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:L,[I,i,L]),C=x.useCallback(j=>N.has(j),[N]),A=x.useCallback(j=>{const $=new Set(N);r==="single"?$.has(j)?s&&$.delete(j):($.clear(),$.add(j)):$.has(j)?$.delete(j):$.add(j),I||E($),c&&c(r==="single"?$.values().next().value??"":Array.from($))},[N,r,s,I,c]),k=x.useMemo(()=>({type:r,collapsible:s,size:f,disabled:y,isExpanded:C,toggle:A}),[r,s,f,y,C,A]);return t.jsx("div",{ref:_,"data-accordion-root":"","data-divider":p||void 0,"data-disabled":y||void 0,"data-size":f,className:Q(Ht.root,p&&Ht.divider,g),...v,children:t.jsx(Nm.Provider,{value:k,children:t.jsx(Mu.Provider,{value:0,children:w})})})});c6.displayName="Accordion";function ol(r,s){const i=r.closest("[data-accordion-root]");if(!i)return;const l=r.getAttribute("data-accordion-depth"),c=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${l}"]`)).filter(y=>y.closest("[data-accordion-root]")===i);if(c.length===0)return;const p=c.indexOf(r);let f;switch(s){case"first":f=c[0];break;case"last":f=c[c.length-1];break;case"next":f=c[(p+1)%c.length];break;case"prev":f=c[(p-1+c.length)%c.length];break}f.focus()}const d6=x.forwardRef(({value:r,label:s,description:i,icon:l,leadingSlot:c,trailingSlot:p,selectable:f=!1,checked:y,defaultChecked:g=!1,indeterminate:w=!1,onCheckedChange:v,expanded:_,defaultExpanded:b=!1,onExpandedChange:L,disabled:E=!1,size:I,className:N,children:C,...A},k)=>{const j=x.useContext(Nm),$=x.useContext(Mu),F=j!==null,z=I??(j==null?void 0:j.size)??"md",B=E||(j==null?void 0:j.disabled)||!1,[ie,ce]=x.useState(b);let ee;F?ee=r!==void 0?j.isExpanded(r):!1:_!==void 0?ee=_:ee=ie;const Y=x.useCallback(()=>{if(B)return;if(F){if(r===void 0)return;const M=j.isExpanded(r);j.toggle(r);const D=j.type==="single"&&!j.collapsible&&M?!0:!M;L==null||L(D);return}const P=!ee;_===void 0&&ce(P),L==null||L(P)},[B,F,j,r,ee,_,L]),X=x.useCallback(P=>v==null?void 0:v(P),[v]),ve=x.useCallback(P=>{if(P.key==="Enter"||P.key===" "){P.preventDefault(),Y();return}if(F)switch(P.key){case"ArrowDown":P.preventDefault(),ol(P.currentTarget,"next");break;case"ArrowUp":P.preventDefault(),ol(P.currentTarget,"prev");break;case"Home":P.preventDefault(),ol(P.currentTarget,"first");break;case"End":P.preventDefault(),ol(P.currentTarget,"last");break}},[Y,F]),K=x.useId(),q=`${K}-header`,J=`${K}-body`,G=z==="sm"?16:z==="md"?18:20,H=c??t.jsxs(t.Fragment,{children:[f&&t.jsx("span",{className:Ht.checkboxWrap,children:t.jsx(Im,{size:z,checked:y,defaultChecked:g,indeterminate:w,disabled:B,onChange:X})}),l&&t.jsx("span",{className:Ht.iconSlot,"aria-hidden":"true",children:l})]});return t.jsxs("div",{ref:k,"data-accordion-item":"","data-expanded":ee||void 0,"data-disabled":B||void 0,"data-size":z,"data-depth":$,className:Q(Ht.item,Ht[`size_${z}`],N),style:{"--accordion-depth":$},...A,children:[t.jsxs("div",{className:Ht.header,children:[t.jsx("button",{type:"button",id:q,"data-accordion-header-button":"","data-accordion-depth":$,className:Ht.hitTarget,"aria-expanded":ee,"aria-controls":J,"aria-disabled":B||void 0,disabled:B,onClick:Y,onKeyDown:ve}),t.jsxs("div",{className:Ht.headerContent,children:[t.jsx("span",{className:Ht.chevron,"aria-hidden":"true",children:t.jsx(ir,{size:G,color:"currentColor"})}),H,t.jsxs("div",{className:Ht.labelBlock,children:[t.jsx("span",{className:Ht.label,children:s}),i&&t.jsx("span",{className:Ht.description,children:i})]}),p&&t.jsx("div",{className:Ht.trailingSlot,children:p})]})]}),t.jsx("div",{id:J,role:"region","aria-labelledby":q,className:Ht.body,"aria-hidden":!ee,children:t.jsx("div",{className:Ht.bodyInner,children:t.jsx("div",{className:Ht.bodyContent,children:t.jsx(Mu.Provider,{value:$+1,children:C})})})})]})});d6.displayName="AccordionItem";const u6="_root_1nyuz_6",p6="_sm_1nyuz_20",f6="_md_1nyuz_29",h6="_lg_1nyuz_38",m6="_divider_1nyuz_48",g6="_interactive_1nyuz_53",x6="_disabled_1nyuz_60",v6="_destructive_1nyuz_64",y6="_selected_1nyuz_78",w6="_label_1nyuz_87",j6="_description_1nyuz_97",b6="_leadingSlot_1nyuz_101",k6="_trailingSlot_1nyuz_102",_6="_content_1nyuz_115",C6="_taSwitch_1nyuz_167",S6="_taSwitchThumb_1nyuz_188",M6="_taCheckbox_1nyuz_203",I6="_taRadio_1nyuz_226",N6="_taRadioDot_1nyuz_244",L6="_taExpand_1nyuz_252",A6="_taStatus_1nyuz_266",T6="_taStatus_success_1nyuz_273",E6="_taStatus_warning_1nyuz_274",$6="_taStatus_error_1nyuz_275",P6="_taStatus_info_1nyuz_276",Nt={root:u6,sm:p6,md:f6,lg:h6,divider:m6,interactive:g6,disabled:x6,destructive:v6,selected:y6,label:w6,description:j6,leadingSlot:b6,trailingSlot:k6,content:_6,taSwitch:C6,taSwitchThumb:S6,taCheckbox:M6,taRadio:I6,taRadioDot:N6,taExpand:L6,taStatus:A6,taStatus_success:T6,taStatus_warning:E6,taStatus_error:$6,taStatus_info:P6},Lm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Lm.displayName="ArrowUpRightIcon";const R6=({checked:r})=>t.jsx("span",{className:Nt.taSwitch,"data-checked":r||void 0,"aria-hidden":"true",children:t.jsx("span",{className:Nt.taSwitchThumb})}),D6=({checked:r})=>t.jsx("span",{className:Nt.taCheckbox,"data-checked":r||void 0,"aria-hidden":"true",children:r&&t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:t.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),z6=({checked:r})=>t.jsx("span",{className:Nt.taRadio,"data-checked":r||void 0,"aria-hidden":"true",children:r&&t.jsx("span",{className:Nt.taRadioDot})}),F6=({count:r,label:s})=>{const i=r!==void 0?String(r):s;return i?t.jsx(Bi,{"aria-hidden":"true",children:i}):null},B6=({expanded:r})=>t.jsx("span",{className:Nt.taExpand,"data-expanded":r||void 0,"aria-hidden":"true",children:t.jsx(ir,{size:16,color:"currentColor"})}),O6=({variant:r})=>t.jsx("span",{className:Q(Nt.taStatus,Nt[`taStatus_${r}`]),"aria-hidden":"true"}),H6=new Set(["badge","status"]),_r=x.forwardRef(({label:r,description:s,leadingSlot:i,trailingSlot:l,trailingAction:c,checked:p,defaultChecked:f=!1,onCheckedChange:y,badgeCount:g,badgeLabel:w,expanded:v=!1,statusVariant:_="success",divider:b=!0,size:L="md",interactive:E,selected:I=!1,destructive:N=!1,disabled:C=!1,className:A,onClick:k,onKeyDown:j,...$},F)=>{const z=c==="switch"||c==="checkbox"||c==="radio",[B,ie]=x.useState(f),ce=z?p!==void 0?p:B:!1,ee=E||!!k||z||c!==void 0&&!H6.has(c),Y=c==="switch"?"switch":c==="checkbox"?"checkbox":c==="radio"?"radio":ee?"button":void 0,X=x.useCallback(q=>{if(!C){if(z){const J=!ce;p===void 0&&ie(J),y==null||y(J)}k==null||k(q)}},[C,z,ce,p,y,k]),ve=x.useCallback(q=>{ee&&!C&&(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),X(q)),j==null||j(q)},[ee,C,X,j]),K=l??(()=>{if(!c)return null;switch(c){case"chevron":return t.jsx(ir,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return t.jsx(Lm,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return t.jsx(R6,{checked:ce});case"checkbox":return t.jsx(D6,{checked:ce});case"radio":return t.jsx(z6,{checked:ce});case"badge":return t.jsx(F6,{count:g,label:w});case"expand":return t.jsx(B6,{expanded:v});case"status":return t.jsx(O6,{variant:_});default:return null}})();return t.jsxs("div",{ref:F,role:Y,tabIndex:ee&&!C?0:void 0,"aria-checked":z?ce:void 0,"aria-selected":I||void 0,"aria-disabled":C||void 0,"data-selected":I||void 0,"data-disabled":C||void 0,"data-destructive":N||void 0,"data-trailing-action":c??void 0,className:Q(Nt.root,Nt[L],b&&Nt.divider,ee&&Nt.interactive,I&&Nt.selected,N&&Nt.destructive,C&&Nt.disabled,A),onClick:C?void 0:X,onKeyDown:ve,...$,children:[i&&t.jsx("div",{className:Nt.leadingSlot,children:i}),t.jsxs("div",{className:Nt.content,children:[t.jsx("span",{className:Nt.label,children:r}),s&&t.jsx("span",{className:Nt.description,children:s})]}),K&&t.jsx("div",{className:Nt.trailingSlot,children:K})]})});_r.displayName="ListItem";const W6="_root_2hiai_7",U6="_fullWidth_2hiai_12",V6="_panel_2hiai_19",G6="_panelInner_2hiai_73",q6="_item_2hiai_81",Z6="_groupHeading_2hiai_87",Y6="_groupHeadingLabel_2hiai_94",K6="_groupHeadingCollapsible_2hiai_106",Q6="_groupChevron_2hiai_119",X6="_groupDivider_2hiai_133",sr={root:W6,fullWidth:U6,panel:V6,panelInner:G6,item:q6,groupHeading:Z6,groupHeadingLabel:Y6,groupHeadingCollapsible:K6,groupChevron:Q6,groupDivider:X6};function J6({group:r,size:s,closeOnSelect:i,onClose:l}){const[c,p]=x.useState(r.defaultExpanded??!0);return t.jsxs("div",{children:[r.heading&&t.jsxs("div",{className:Q(sr.groupHeading,r.collapsible&&sr.groupHeadingCollapsible),onClick:r.collapsible?()=>p(f=>!f):void 0,"aria-expanded":r.collapsible?c:void 0,children:[t.jsx("span",{className:sr.groupHeadingLabel,children:r.heading}),r.collapsible&&t.jsx("span",{className:sr.groupChevron,"data-expanded":c||void 0,"aria-hidden":"true",children:t.jsx(ir,{size:12})})]}),c&&t.jsx("div",{role:"group","aria-label":r.heading,children:r.options.map((f,y)=>{const g=f.trailingAction==="switch"||f.trailingAction==="checkbox"||f.trailingAction==="radio";return t.jsx(_r,{role:"menuitem",size:s,label:f.label,description:f.description,leadingSlot:f.leadingSlot,trailingAction:f.trailingAction,trailingSlot:f.trailingSlot,disabled:f.disabled,destructive:f.destructive,selected:f.selected,checked:f.checked,defaultChecked:f.defaultChecked,onCheckedChange:f.onCheckedChange,badgeCount:f.badgeCount,badgeLabel:f.badgeLabel,expanded:f.expanded,statusVariant:f.statusVariant,divider:f.divider??!1,className:sr.item,onClick:()=>{var w;(w=f.onClick)==null||w.call(f),i&&!g&&l()}},f.id)})})]})}const Uu=x.forwardRef(({trigger:r,groups:s,size:i="sm",width:l=260,placement:c="bottom-start",open:p,defaultOpen:f=!1,onOpenChange:y,disabled:g=!1,closeOnSelect:w=!0,fullWidth:v=!1,className:_,...b},L)=>{const[E,I]=x.useState(f),N=x.useRef(null),C=p!==void 0?p:E,A=x.useCallback(j=>{N.current=j,L&&(typeof L=="function"?L(j):L.current=j)},[L]),k=x.useCallback(j=>{p===void 0&&I(j),y==null||y(j)},[p,y]);return x.useEffect(()=>{if(!C)return;const j=$=>{var F;(F=N.current)!=null&&F.contains($.target)||k(!1)};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[C,k]),x.useEffect(()=>{if(!C)return;const j=$=>{$.key==="Escape"&&k(!1)};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[C,k]),t.jsxs("div",{ref:A,className:Q(sr.root,v&&sr.fullWidth,_),...b,children:[t.jsx("div",{style:{display:v?"flex":"inline-flex",width:v?"100%":void 0},"aria-haspopup":"menu","aria-expanded":C,tabIndex:g?-1:0,onClick:g?void 0:()=>k(!C),onKeyDown:g?void 0:j=>{(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),k(!C))},children:r}),t.jsx("div",{className:sr.panel,"data-open":C||void 0,"data-placement":c,style:{width:typeof l=="number"?`${l}px`:l},role:"menu","aria-orientation":"vertical",children:t.jsx("div",{className:sr.panelInner,children:s.map((j,$)=>t.jsxs("div",{children:[$>0&&t.jsx("div",{className:sr.groupDivider,"aria-hidden":"true"}),t.jsx(J6,{group:j,size:i,closeOnSelect:w,onClose:()=>k(!1)})]},j.id))})})]})});Uu.displayName="DropdownMenu";const ew="_root_zkkgh_6",tw="_sm_zkkgh_24",nw="_md_zkkgh_33",rw="_lg_zkkgh_42",ow="_neutral_zkkgh_53",sw="_blue_zkkgh_66",iw="_azure_zkkgh_79",aw="_purple_zkkgh_92",lw="_pink_zkkgh_105",cw="_red_zkkgh_118",dw="_orange_zkkgh_131",uw="_yellow_zkkgh_144",pw="_matcha_zkkgh_157",fw="_green_zkkgh_170",hw="_subtle_zkkgh_184",mw="_outline_zkkgh_190",gw="_solid_zkkgh_196",xw="_dot_zkkgh_203",vw="_icon_zkkgh_212",yw="_dismiss_zkkgh_224",go={root:ew,sm:tw,md:nw,lg:rw,neutral:ow,blue:sw,azure:iw,purple:aw,pink:lw,red:cw,orange:dw,yellow:uw,matcha:pw,green:fw,subtle:hw,outline:mw,solid:gw,dot:xw,icon:vw,dismiss:yw},ww={sm:10,md:12,lg:14},it=x.forwardRef(({variant:r="subtle",color:s="neutral",size:i="md",dot:l,leadingIcon:c,dismissible:p,onDismiss:f,className:y,children:g,...w},v)=>t.jsxs("span",{ref:v,className:Q(go.root,go[i],go[s],go[r],y),...w,children:[l&&t.jsx("span",{className:go.dot,"aria-hidden":"true"}),c&&t.jsx("span",{className:Q(go.icon,"alloy-icon-slot"),"aria-hidden":"true",children:c}),g,p&&t.jsx("button",{type:"button",className:go.dismiss,"aria-label":"Remove",onClick:_=>{_.stopPropagation(),f==null||f()},children:t.jsx(Es,{size:ww[i]})})]}));it.displayName="Tag";function Yd({size:r=24,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})}const yn=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:s,fill:"none"}),t.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})};yn.displayName="CheckCircleIcon";const kl=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};kl.displayName="Trash03Icon";const jw="_hiddenInput_7w2s5_8",bw="_area_7w2s5_19",kw="_uploadIcon_7w2s5_53",_w="_textBlock_7w2s5_59",Cw="_title_7w2s5_67",Sw="_description_7w2s5_76",Mw="_fileRow_7w2s5_88",Iw="_fileIcon_7w2s5_96",Nw="_fileName_7w2s5_101",Lw="_successIcon_7w2s5_115",Aw="_removeBtn_7w2s5_121",Tw="_progressWrap_7w2s5_145",Ew="_progressBar_7w2s5_153",$w="_progressFill_7w2s5_161",Pw="_progressLabel_7w2s5_168",Rw="_errorRow_7w2s5_178",Dw="_errorIcon_7w2s5_186",zw="_errorText_7w2s5_192",Fw="_areaMulti_7w2s5_206",Bw="_multiDropZone_7w2s5_214",Ow="_fileList_7w2s5_244",Hw="_fileListItem_7w2s5_254",Ww="_inline_7w2s5_267",Uw="_inlineIcon_7w2s5_309",Vw="_inlineText_7w2s5_330",Gw="_inlineProgress_7w2s5_353",qw="_inlineProgressFill_7w2s5_363",Be={hiddenInput:jw,area:bw,uploadIcon:kw,textBlock:_w,title:Cw,description:Sw,fileRow:Mw,fileIcon:Iw,fileName:Nw,successIcon:Lw,removeBtn:Aw,progressWrap:Tw,progressBar:Ew,progressFill:$w,progressLabel:Pw,errorRow:Rw,errorIcon:Dw,errorText:zw,areaMulti:Fw,multiDropZone:Bw,fileList:Ow,fileListItem:Hw,inline:Ww,inlineIcon:Uw,inlineText:Vw,inlineProgress:Gw,inlineProgressFill:qw};function Kd(r){const s=r.name.lastIndexOf(".");return s!==-1?r.name.slice(s+1).toUpperCase():r.type?(r.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const Zw=x.forwardRef(({variant:r="area",multiple:s=!1,state:i="empty",progress:l=0,file:c,files:p,errorMessage:f,title:y="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:w,onFileSelect:v,onFilesSelect:_,onClear:b,onRemoveFile:L,fieldVariant:E="outlined",disabled:I=!1,className:N,...C},A)=>{const k=x.useRef(null),[j,$]=x.useState(!1),F=!I&&(s||i==="empty"),z=x.useCallback(()=>{var q;!I&&(s||i==="empty")&&((q=k.current)==null||q.click())},[I,s,i]),B=x.useCallback(q=>{var J;if(s){const G=q.target.files?Array.from(q.target.files):[];G.length&&(_==null||_(G))}else{const G=(J=q.target.files)==null?void 0:J[0];G&&(v==null||v(G))}q.target.value=""},[s,v,_]),ie=x.useCallback(q=>{q.preventDefault(),F&&$(!0)},[F]),ce=x.useCallback(()=>$(!1),[]),ee=x.useCallback(q=>{var J;if(q.preventDefault(),$(!1),!!F)if(s){const G=q.dataTransfer.files?Array.from(q.dataTransfer.files):[];G.length&&(_==null||_(G))}else{const G=(J=q.dataTransfer.files)==null?void 0:J[0];G&&(v==null||v(G))}},[F,s,v,_]),Y=t.jsx("input",{ref:k,type:"file",className:Be.hiddenInput,accept:w,multiple:s,disabled:I,"aria-hidden":"true",tabIndex:-1,onChange:B}),X=c?t.jsxs("div",{className:Be.fileRow,children:[t.jsx("span",{className:`${Be.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(qn,{size:16})}),t.jsx("span",{className:Be.fileName,children:c.name}),t.jsx(it,{size:"sm",variant:"subtle",children:Kd(c)}),i==="complete"&&t.jsx("span",{className:`${Be.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(yn,{size:16})}),t.jsx("button",{type:"button",className:Be.removeBtn,onClick:b,"aria-label":"Remove file",children:t.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:t.jsx(kl,{size:14})})})]}):null;if(r==="area"){if(s){const q=p??[];return t.jsxs("div",{ref:A,className:Q(Be.areaMulti,N),"data-drag-over":j||void 0,"data-disabled":I||void 0,onDragOver:ie,onDragLeave:ce,onDrop:ee,...C,children:[Y,t.jsxs("div",{className:Be.multiDropZone,children:[t.jsx("span",{className:`${Be.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(Yd,{size:24})}),t.jsxs("div",{className:Be.textBlock,children:[t.jsx("p",{className:Be.title,children:y}),t.jsx("p",{className:Be.description,children:g})]}),t.jsx(Oe,{variant:"tertiary",size:"sm",onClick:z,disabled:I,children:"Browse Files"})]}),q.length>0&&t.jsx("ul",{className:Be.fileList,"aria-label":"Selected files",children:q.map((J,G)=>t.jsxs("li",{className:Be.fileListItem,children:[t.jsx("span",{className:`${Be.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(qn,{size:16})}),t.jsx("span",{className:Be.fileName,children:J.name}),t.jsx(it,{size:"sm",variant:"subtle",children:Kd(J)}),t.jsx("button",{type:"button",className:Be.removeBtn,onClick:()=>L==null?void 0:L(G),"aria-label":`Remove ${J.name}`,disabled:I,children:t.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:t.jsx(kl,{size:14})})})]},`${J.name}-${G}`))})]})}return t.jsxs("div",{ref:A,className:Q(Be.area,N),"data-state":i,"data-drag-over":j||void 0,"data-disabled":I||void 0,onDragOver:ie,onDragLeave:ce,onDrop:ee,...C,children:[Y,i==="empty"&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:`${Be.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(Yd,{size:24})}),t.jsxs("div",{className:Be.textBlock,children:[t.jsx("p",{className:Be.title,children:y}),t.jsx("p",{className:Be.description,children:g})]}),t.jsx(Oe,{variant:"tertiary",size:"sm",onClick:z,disabled:I,children:"Browse File"})]}),i==="uploading"&&t.jsxs(t.Fragment,{children:[X,t.jsxs("div",{className:Be.progressWrap,children:[t.jsx("div",{className:Be.progressBar,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:t.jsx("div",{className:Be.progressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})}),t.jsxs("p",{className:Be.progressLabel,children:[l,"% uploaded"]})]})]}),i==="complete"&&X,i==="error"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:Be.errorRow,children:[t.jsx("span",{className:`${Be.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(Ls,{size:20})}),t.jsx("p",{className:Be.errorText,children:f??"Upload failed. Please try again."})]}),t.jsx(Oe,{variant:"tertiary",size:"sm",onClick:z,disabled:I,children:"Try Again"})]})]})}const ve={empty:t.jsx(Yd,{size:16}),uploading:t.jsx(qn,{size:16}),complete:t.jsx(yn,{size:16}),error:t.jsx(Ls,{size:16})}[i],K=(i==="uploading"||i==="complete")&&!!c;return t.jsxs("div",{ref:A,className:Q(Be.inline,N),"data-state":i,"data-field-variant":E,"data-disabled":I||void 0,...C,children:[Y,t.jsx("span",{className:`${Be.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ve}),t.jsxs("span",{className:Be.inlineText,"data-has-file":K?"":void 0,children:[i==="empty"&&y,i==="uploading"&&(c==null?void 0:c.name),i==="complete"&&(c==null?void 0:c.name),i==="error"&&(f??"Upload failed. Please try again.")]}),K&&t.jsx(it,{size:"sm",variant:"subtle",children:Kd(c)}),(i==="uploading"||i==="complete"||i==="error")&&t.jsx("button",{type:"button",className:Be.removeBtn,onClick:b,"aria-label":"Remove file",children:t.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:t.jsx(kl,{size:14})})}),i==="empty"&&t.jsx(Oe,{variant:"tertiary",size:"xs",onClick:z,disabled:I,children:"Browse"}),i==="uploading"&&t.jsx("div",{className:Be.inlineProgress,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:t.jsx("div",{className:Be.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})})]})});Zw.displayName="FileUploader";const Yw="_wrapper_1zy7i_8",Kw="_labelRow_1zy7i_16",Qw="_label_1zy7i_16",Xw="_required_1zy7i_28",Jw="_labelIcon_1zy7i_36",e9="_sm_1zy7i_46",t9="_md_1zy7i_47",n9="_lg_1zy7i_48",r9="_shell_1zy7i_44",o9="_outlined_1zy7i_75",s9="_underlined_1zy7i_102",i9="_leadingSlot_1zy7i_146",a9="_trailingSlot_1zy7i_158",l9="_trailingActionWrap_1zy7i_171",c9="_trailingActionBtn_1zy7i_178",d9="_successTrailingSlot_1zy7i_199",u9="_errorTrailingSlot_1zy7i_204",p9="_control_1zy7i_216",f9="_selectValue_1zy7i_256",h9="_selectPlaceholder_1zy7i_262",m9="_selectChevron_1zy7i_266",g9="_selectChevronOpen_1zy7i_271",x9="_textareaShell_1zy7i_274",v9="_textareaControl_1zy7i_288",y9="_footer_1zy7i_305",w9="_footerRow_1zy7i_317",j9="_footerError_1zy7i_318",b9="_footerSuccess_1zy7i_319",k9="_footerIcon_1zy7i_322",_9="_wrapperHorizontal_1zy7i_332",C9="_horizontalLabelCol_1zy7i_338",S9="_horizontalLabelHint_1zy7i_347",M9="_horizontalControlCol_1zy7i_356",I9="_msContainer_1zy7i_370",N9="_msShell_1zy7i_379",L9="_msOpen_1zy7i_394",A9="_msDisabled_1zy7i_401",T9="_msBody_1zy7i_404",E9="_msPlaceholder_1zy7i_413",$9="_msChevron_1zy7i_423",P9="_msChevronOpen_1zy7i_434",R9="_msPanel_1zy7i_437",Me={wrapper:Yw,labelRow:Kw,label:Qw,required:Xw,labelIcon:Jw,sm:e9,md:t9,lg:n9,shell:r9,outlined:o9,underlined:s9,leadingSlot:i9,trailingSlot:a9,trailingActionWrap:l9,trailingActionBtn:c9,successTrailingSlot:d9,errorTrailingSlot:u9,control:p9,selectValue:f9,selectPlaceholder:h9,selectChevron:m9,selectChevronOpen:g9,textareaShell:x9,textareaControl:v9,footer:y9,footerRow:w9,footerError:j9,footerSuccess:b9,footerIcon:k9,wrapperHorizontal:_9,horizontalLabelCol:C9,horizontalLabelHint:S9,horizontalControlCol:M9,msContainer:I9,msShell:N9,msOpen:L9,msDisabled:A9,msBody:T9,msPlaceholder:E9,msChevron:$9,msChevronOpen:P9,msPanel:R9};function $s({label:r,labelIcon:s,labelDescription:i,hint:l,error:c,success:p,required:f,htmlFor:y,layout:g="vertical",labelWidth:w=160,className:v,children:_}){const b=c??p??l,L=c?"error":p?"success":"hint",E=b?t.jsxs("p",{className:Q(Me.footer,L==="error"&&Me.footerError,L==="success"&&Me.footerSuccess),role:L==="error"?"alert":void 0,"aria-live":L==="error"?"assertive":void 0,children:[L==="hint"&&t.jsx("span",{className:`${Me.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:t.jsx(Ls,{size:12})}),b]}):null,I=r!=null?t.jsxs("div",{className:Me.labelRow,children:[t.jsx("label",{className:Me.label,htmlFor:y,children:r}),f&&t.jsx("span",{className:Me.required,"aria-hidden":"true",children:"*"}),s&&t.jsx("span",{className:`${Me.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:s})]}):null;if(g==="horizontal"){const N={width:typeof w=="number"?`${w}px`:w};return t.jsxs("div",{className:Q(Me.wrapper,Me.wrapperHorizontal,v),children:[(I||i)&&t.jsxs("div",{className:Me.horizontalLabelCol,style:N,children:[I,i&&t.jsx("p",{className:Me.horizontalLabelHint,children:i})]}),t.jsxs("div",{className:Me.horizontalControlCol,children:[_,E]})]})}return t.jsxs("div",{className:Q(Me.wrapper,v),children:[I,_,E]})}function Gi({variant:r="outlined",size:s="md",error:i,success:l,disabled:c,readOnly:p,leadingIcon:f,trailingIcon:y,trailingAction:g,isTextarea:w,focused:v,className:_,children:b}){const L=s==="sm"?14:s==="lg"?18:16,E=l&&!i&&!y&&!g?t.jsx(yn,{size:L}):null,I=i&&!y&&!g?t.jsx(Ls,{size:L}):null,N=!!f,C=!!(y||g||E||I);return t.jsxs("div",{className:Q(Me.shell,Me[r],Me[s],w&&Me.textareaShell,_),"data-error":i||void 0,"data-success":l||void 0,"data-disabled":c||void 0,"data-readonly":p||void 0,"data-focused":v||void 0,"data-has-leading":N||void 0,"data-has-trailing":C||void 0,children:[f&&t.jsx("span",{className:Q(Me.leadingSlot,"alloy-icon-slot"),children:f}),b,g?t.jsx("span",{className:Me.trailingActionWrap,children:g}):y||E||I?t.jsx("span",{className:Q(Me.trailingSlot,"alloy-icon-slot",E&&Me.successTrailingSlot,I&&Me.errorTrailingSlot),children:y??E??I}):null]})}const As=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:y="md",type:g="text",leadingIcon:w,trailingIcon:v,layout:_,labelWidth:b,labelDescription:L,id:E,disabled:I,readOnly:N,className:C,...A},k)=>{const j=x.useId(),$=E??j;return t.jsx($s,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:$,layout:_,labelWidth:b,labelDescription:L,className:C,children:t.jsx(Gi,{variant:f,size:y,error:!!l,success:!!c,disabled:I,readOnly:N,leadingIcon:w,trailingIcon:v,children:t.jsx("input",{ref:k,id:$,type:g,disabled:I,readOnly:N,"aria-invalid":l?!0:void 0,"aria-describedby":i||l||c?`${$}-footer`:void 0,className:Q(Me.control),...A})})})});As.displayName="TextField";const Vu=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:y="md",leadingIcon:g,trailingIcon:w,layout:v,labelWidth:_,labelDescription:b,id:L,disabled:E,readOnly:I,className:N,...C},A)=>{const k=x.useId(),j=L??k;return t.jsx($s,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:j,layout:v,labelWidth:_,labelDescription:b,className:N,children:t.jsx(Gi,{variant:f,size:y,error:!!l,success:!!c,disabled:E,readOnly:I,leadingIcon:g,trailingIcon:w,isTextarea:!0,children:t.jsx("textarea",{ref:A,id:j,disabled:E,readOnly:I,"aria-invalid":l?!0:void 0,className:Q(Me.control,Me.textareaControl),...C})})})});Vu.displayName="TextArea";const D9={sm:"sm",md:"md",lg:"lg"},Ln=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:y="md",leadingIcon:g,layout:w,labelWidth:v,labelDescription:_,options:b,value:L,defaultValue:E="",onChange:I,placeholder:N="Select an option…",disabled:C,readOnly:A,id:k,className:j},$)=>{var H;const F=x.useId(),z=k??F,B=L!==void 0,[ie,ce]=x.useState(E),ee=B?L:ie,Y=x.useCallback(P=>{B||ce(P),I==null||I(P)},[B,I]),[X,ve]=x.useState(!1),K=(H=b.find(P=>P.value===ee))==null?void 0:H.label,q=y==="sm"?14:y==="lg"?18:16,J=D9[y],G=t.jsx(Gi,{variant:f,size:y,error:!!l,success:!!c,disabled:C,readOnly:A,focused:X,leadingIcon:g,trailingIcon:t.jsx("span",{className:Q(Me.selectChevron,X&&Me.selectChevronOpen),"aria-hidden":"true",children:t.jsx(En,{size:q})}),children:t.jsx("span",{className:Q(Me.control,Me.selectValue,!K&&Me.selectPlaceholder),children:K??N})});return t.jsx($s,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:z,layout:w,labelWidth:v,labelDescription:_,className:j,children:t.jsx(Uu,{ref:$,id:z,fullWidth:!0,trigger:G,groups:[{id:"options",options:b.map(P=>({id:P.value,label:P.label,disabled:P.disabled,selected:P.value===ee,onClick:()=>Y(P.value)}))}],size:J,width:"100%",placement:"bottom-start",open:X,onOpenChange:ve,disabled:C||A})})});Ln.displayName="SelectField";const Am=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})};Am.displayName="EyeIcon";const Tm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M3 3L21 21",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})};Tm.displayName="EyeOffIcon";const z9=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:y="md",leadingIcon:g,layout:w,labelWidth:v,labelDescription:_,id:b,disabled:L,readOnly:E,className:I,...N},C)=>{const A=x.useId(),k=b??A,[j,$]=x.useState(!1),F=y==="sm"?14:y==="lg"?18:16;return t.jsx($s,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:k,layout:w,labelWidth:v,labelDescription:_,className:I,children:t.jsx(Gi,{variant:f,size:y,error:!!l,success:!!c,disabled:L,readOnly:E,leadingIcon:g,trailingAction:t.jsx("button",{type:"button",className:`${Me.trailingActionBtn} alloy-icon-slot`,onClick:()=>$(z=>!z),tabIndex:L?-1:0,"aria-label":j?"Hide password":"Show password","aria-pressed":j,children:j?t.jsx(Tm,{size:F}):t.jsx(Am,{size:F})}),children:t.jsx("input",{ref:C,id:k,type:j?"text":"password",disabled:L,readOnly:E,"aria-invalid":l?!0:void 0,autoComplete:"current-password",className:Q(Me.control),...N})})})});z9.displayName="PasswordField";const Gu=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Gu.displayName="SearchSmIcon";const ql=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:y="md",onClear:g,onChange:w,layout:v,labelWidth:_,labelDescription:b,id:L,value:E,defaultValue:I,disabled:N,readOnly:C,className:A,...k},j)=>{const $=x.useId(),F=L??$,z=y==="sm"?14:y==="lg"?18:16,B=E!==void 0?String(E).length>0:void 0,ie=x.useCallback(ce=>{w==null||w(ce)},[w]);return t.jsx($s,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:F,layout:v,labelWidth:_,labelDescription:b,className:A,children:t.jsx(Gi,{variant:f,size:y,error:!!l,success:!!c,disabled:N,readOnly:C,leadingIcon:t.jsx(Gu,{size:z}),trailingAction:B?t.jsx("button",{type:"button",className:`${Me.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:N?-1:0,"aria-label":"Clear search",children:t.jsx(Es,{size:z})}):void 0,children:t.jsx("input",{ref:j,id:F,type:"search",value:E,defaultValue:I,disabled:N,readOnly:C,"aria-invalid":l?!0:void 0,onChange:ie,className:Q(Me.control),...k})})})});ql.displayName="SearchField";const F9=x.forwardRef((r,s)=>t.jsx(As,{ref:s,type:"email",autoComplete:"email",inputMode:"email",...r}));F9.displayName="EmailField";const Em=x.forwardRef((r,s)=>t.jsx(As,{ref:s,type:"number",inputMode:"numeric",...r}));Em.displayName="NumberField";const B9={sm:"sm",md:"sm",lg:"md"},O9={sm:"sm",md:"md",lg:"lg"},H9=x.forwardRef(({label:r,labelIcon:s,hint:i,error:l,success:c,required:p,variant:f="outlined",size:y="md",layout:g,labelWidth:w,labelDescription:v,options:_,value:b,defaultValue:L=[],onChange:E,placeholder:I="Select options…",disabled:N,readOnly:C,id:A,className:k},j)=>{const $=x.useId(),F=A??$,z=`${F}-list`,B=x.useRef(null),ie=b!==void 0,[ce,ee]=x.useState(L),Y=ie?b:ce,X=x.useCallback(D=>{ie||ee(D),E==null||E(D)},[ie,E]),[ve,K]=x.useState(!1);x.useEffect(()=>{if(!ve)return;const D=W=>{B.current&&!B.current.contains(W.target)&&K(!1)},re=W=>{W.key==="Escape"&&K(!1)};return document.addEventListener("mousedown",D),document.addEventListener("keydown",re),()=>{document.removeEventListener("mousedown",D),document.removeEventListener("keydown",re)}},[ve]);const q=D=>{if(N||C)return;const re=Y.includes(D)?Y.filter(W=>W!==D):[...Y,D];X(re)},J=D=>{N||C||((D.key==="Enter"||D.key===" ")&&(D.preventDefault(),K(re=>!re)),D.key==="Backspace"&&Y.length>0&&!ve&&X(Y.slice(0,-1)))},G=y==="sm"?14:y==="lg"?18:16,H=B9[y],P=O9[y],M=Object.fromEntries(_.map(D=>[D.value,D.label]));return t.jsx($s,{label:r,labelIcon:s,hint:i,error:l,success:c,required:p,htmlFor:F,layout:g,labelWidth:w,labelDescription:v,className:k,children:t.jsxs("div",{ref:B,className:Me.msContainer,children:[t.jsxs("div",{ref:j,id:F,role:"combobox","aria-haspopup":"listbox","aria-expanded":ve,"aria-controls":z,"aria-disabled":N||void 0,tabIndex:N?-1:0,className:Q(Me.msShell,Me[f],Me[y],ve&&Me.msOpen,N&&Me.msDisabled),"data-error":l?!0:void 0,"data-success":c&&!l?!0:void 0,"data-disabled":N||void 0,onClick:()=>{!N&&!C&&K(D=>!D)},onKeyDown:J,children:[t.jsx("div",{className:Me.msBody,children:Y.length===0?t.jsx("span",{className:Me.msPlaceholder,children:I}):Y.map(D=>t.jsx(it,{size:H,variant:"subtle",dismissible:!N&&!C,onDismiss:()=>X(Y.filter(re=>re!==D)),children:M[D]??D},D))}),t.jsx("span",{className:Q(Me.msChevron,"alloy-icon-slot",ve&&Me.msChevronOpen),children:t.jsx(En,{size:G})})]}),ve&&t.jsx("div",{id:z,role:"listbox","aria-multiselectable":"true","aria-label":typeof r=="string"?r:"Options",className:Me.msPanel,children:_.map(D=>{const re=Y.includes(D.value);return t.jsx(_r,{label:D.label,size:P,trailingAction:"checkbox",checked:re,disabled:D.disabled,role:"option","aria-selected":re,onMouseDown:W=>{W.preventDefault()},onCheckedChange:()=>{D.disabled||q(D.value)}},D.value)})})]})})});H9.displayName="MultiSelectField";const $m=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M15 6L9 12L15 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};$m.displayName="ChevronLeftIcon";const W9="_root_1249j_6",U9="_pageControls_1249j_14",V9="_pageBtn_1249j_21",G9="_ellipsis_1249j_36",q9="_rowsGroup_1249j_51",Z9="_rowsSelect_1249j_58",Y9="_countText_1249j_64",K9="_groupLabel_1249j_74",Q9="_goToGroup_1249j_84",X9="_goToInput_1249j_91",Wn={root:W9,pageControls:U9,pageBtn:V9,ellipsis:G9,rowsGroup:q9,rowsSelect:Z9,countText:Y9,groupLabel:K9,goToGroup:Q9,goToInput:X9};function J9(r,s,i){if(s<=1)return[1];const l=Math.max(2,r-i),c=Math.min(s-1,r+i),p=[1];l>2&&p.push("ellipsis");for(let f=l;f<=c;f++)p.push(f);return c<s-1&&p.push("ellipsis"),s>1&&p.push(s),p}const e8=x.forwardRef(({page:r,totalPages:s,onPageChange:i,showRowsPerPage:l=!1,rowsPerPage:c,rowsPerPageOptions:p=[10,25,50,100],onRowsPerPageChange:f,showGoToPage:y=!1,totalCount:g,siblingCount:w=1,size:v="sm",disabled:_=!1,className:b,...L},E)=>{const[I,N]=x.useState(""),C=v,A=v,k=v==="sm"?14:16,j=J9(r,s,w),$=x.useCallback(B=>{const ie=Math.min(Math.max(1,B),s);ie!==r&&i(ie)},[r,s,i]),F=x.useCallback(B=>{if(B.key==="Enter"){const ie=parseInt(I,10);isNaN(ie)||$(ie),N("")}},[I,$]),z=g!=null&&c!=null?`${(r-1)*c+1}–${Math.min(r*c,g)} of ${g}`:null;return t.jsxs("nav",{ref:E,"aria-label":"Pagination",className:Q(Wn.root,b),"data-size":v,...L,children:[l&&t.jsxs("div",{className:Wn.rowsGroup,children:[t.jsx("span",{className:Wn.groupLabel,children:"Rows per page"}),t.jsx("div",{className:Wn.rowsSelect,children:t.jsx(Ln,{size:A,value:c,disabled:_,"aria-label":"Rows per page",onChange:B=>f==null?void 0:f(Number(B.target.value)),children:p.map(B=>t.jsx("option",{value:B,children:B},B))})})]}),z&&t.jsx("span",{className:Wn.countText,"aria-live":"polite",children:z}),t.jsxs("div",{className:Wn.pageControls,role:"group","aria-label":"Page navigation",children:[t.jsx(Oe,{variant:"ghost",size:C,iconOnly:!0,"aria-label":"Previous page",disabled:_||r<=1,onClick:()=>$(r-1),children:t.jsx($m,{size:k})}),j.map((B,ie)=>B==="ellipsis"?t.jsx("span",{className:Wn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${ie}`):t.jsx(Oe,{variant:B===r?"secondary":"ghost",size:C,"aria-label":`Page ${B}`,"aria-current":B===r?"page":void 0,disabled:_,onClick:()=>$(B),className:Wn.pageBtn,children:B},B)),t.jsx(Oe,{variant:"ghost",size:C,iconOnly:!0,"aria-label":"Next page",disabled:_||r>=s,onClick:()=>$(r+1),children:t.jsx(ir,{size:k})})]}),y&&t.jsxs("div",{className:Wn.goToGroup,children:[t.jsx("span",{className:Wn.groupLabel,children:"Go to"}),t.jsx("div",{className:Wn.goToInput,children:t.jsx(Em,{size:A,value:I,placeholder:String(r),min:1,max:s,disabled:_,"aria-label":"Go to page number",onChange:B=>N(B.target.value),onKeyDown:F})})]})]})});e8.displayName="Pagination";const t8="_root_1vx33_6",n8="_fullWidth_1vx33_18",r8="_item_1vx33_23",o8="_indicator_1vx33_28",s8="_sm_1vx33_46",i8="_md_1vx33_54",a8="_lg_1vx33_62",l8="_itemSelected_1vx33_109",c8="_itemIcon_1vx33_115",d8="_itemLabel_1vx33_127",Yr={root:t8,fullWidth:n8,item:r8,indicator:o8,sm:s8,md:i8,lg:a8,itemSelected:l8,itemIcon:c8,itemLabel:d8},Pm=x.createContext(null);function u8(r){const s=x.useContext(Pm);if(!s)throw new Error(`<${r}> must be rendered inside <SegmentedControl>`);return s}const Rm=x.forwardRef(({value:r,leadingIcon:s,className:i,children:l,disabled:c,onClick:p,...f},y)=>{const{value:g,onChange:w,disabled:v,name:_}=u8("SegmentedControl.Item"),b=g===r,L=v||!!c;return t.jsxs("button",{ref:y,type:"button",role:"radio","aria-checked":b,name:_,disabled:L,className:Q(Yr.item,b&&Yr.itemSelected,i),onClick:E=>{L||w(r),p==null||p(E)},...f,children:[s&&t.jsx("span",{className:Q(Yr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:s}),l!==void 0&&t.jsx("span",{className:Yr.itemLabel,children:l})]})});Rm.displayName="SegmentedControl.Item";const Dm=x.forwardRef(({value:r,defaultValue:s="",onChange:i,size:l="md",disabled:c=!1,fullWidth:p=!1,className:f,children:y,...g},w)=>{const[v,_]=x.useState(s),b=r!==void 0,L=b?r:v,E=x.useId(),I=x.useRef(null);x.useLayoutEffect(()=>{const C=I.current;if(!C)return;const A=C.querySelector('[aria-checked="true"]');A&&(C.style.setProperty("--sc-indicator-x",`${A.offsetLeft}px`),C.style.setProperty("--sc-indicator-w",`${A.offsetWidth}px`))},[L,l]);const N=C=>{b||_(C),i==null||i(C)};return t.jsx(Pm.Provider,{value:{value:L,onChange:N,disabled:c,name:E},children:t.jsxs("div",{ref:C=>{I.current=C,typeof w=="function"?w(C):w&&(w.current=C)},role:"radiogroup",className:Q(Yr.root,Yr[l],p&&Yr.fullWidth,f),...g,children:[t.jsx("span",{className:Yr.indicator,"aria-hidden":"true"}),y]})})});Dm.displayName="SegmentedControl";const et=Object.assign(Dm,{Item:Rm}),p8="_root_fkv0x_6",f8="_sm_fkv0x_26",h8="_md_fkv0x_33",m8="_lg_fkv0x_40",g8="_dot_fkv0x_49",x8="_success_fkv0x_58",v8="_warning_fkv0x_65",y8="_error_fkv0x_72",w8="_info_fkv0x_79",j8="_neutral_fkv0x_86",b8="_pending_fkv0x_93",sl={root:p8,sm:f8,md:h8,lg:m8,dot:g8,success:x8,warning:v8,error:y8,info:w8,neutral:j8,pending:b8},bs=x.forwardRef(({status:r="neutral",size:s="md",dot:i=!0,className:l,children:c,...p},f)=>t.jsxs("span",{ref:f,className:Q(sl.root,sl[s],sl[r],l),...p,children:[i&&t.jsx("span",{className:sl.dot,"aria-hidden":"true"}),c]}));bs.displayName="StatusTag";const k8="_root_iuebt_6",_8="_underline_iuebt_15",C8="_background_iuebt_21",S8="_underlineIndicator_iuebt_26",M8="_md_iuebt_43",I8="_lg_iuebt_44",N8="_tab_iuebt_42",L8="_tabSelected_iuebt_77",A8="_tabIcon_iuebt_99",T8="_tabLabel_iuebt_111",E8="_tabBadge_iuebt_116",jr={root:k8,underline:_8,background:C8,underlineIndicator:S8,md:M8,lg:I8,tab:N8,tabSelected:L8,tabIcon:A8,tabLabel:T8,tabBadge:E8},zm=x.createContext(null);function $8(r){const s=x.useContext(zm);if(!s)throw new Error(`<${r}> must be rendered inside <Tabs>`);return s}const Fm=x.forwardRef(({value:r,leadingIcon:s,trailingBadge:i,disabled:l,onClick:c,className:p,children:f,...y},g)=>{const{value:w,onChange:v,disabled:_,name:b}=$8("Tabs.Tab"),L=w===r,E=_||!!l;return t.jsxs("button",{ref:g,type:"button",role:"tab","aria-selected":L,name:b,disabled:E,className:Q(jr.tab,L&&jr.tabSelected,p),onClick:I=>{E||v(r),c==null||c(I)},...y,children:[s&&t.jsx("span",{className:Q(jr.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f!==void 0&&t.jsx("span",{className:jr.tabLabel,children:f}),i&&t.jsx("span",{className:jr.tabBadge,children:i})]})});Fm.displayName="Tabs.Tab";const Bm=x.forwardRef(({variant:r="underline",size:s="md",value:i,defaultValue:l="",onChange:c,disabled:p=!1,className:f,children:y,...g},w)=>{const[v,_]=x.useState(l),b=i!==void 0,L=b?i:v,E=x.useId(),I=x.useRef(null);x.useLayoutEffect(()=>{const C=I.current;if(!C||r!=="underline")return;const A=C.querySelector('[aria-selected="true"]');A&&(C.style.setProperty("--tab-indicator-x",`${A.offsetLeft}px`),C.style.setProperty("--tab-indicator-w",`${A.offsetWidth}px`))},[L,r]);const N=C=>{b||_(C),c==null||c(C)};return t.jsx(zm.Provider,{value:{value:L,onChange:N,disabled:p,variant:r,size:s,name:E},children:t.jsxs("div",{ref:C=>{I.current=C,typeof w=="function"?w(C):w&&(w.current=C)},role:"tablist",className:Q(jr.root,jr[r],jr[s],f),...g,children:[r==="underline"&&t.jsx("span",{className:jr.underlineIndicator,"aria-hidden":"true"}),y]})})});Bm.displayName="Tabs";Object.assign(Bm,{Tab:Fm});const P8="_wrapper_3tqlm_10",R8="_tooltip_3tqlm_22",D8="_portal_3tqlm_23",z8="_top_3tqlm_61",F8="_bottom_3tqlm_71",B8="_left_3tqlm_81",O8="_right_3tqlm_91",il={wrapper:P8,tooltip:R8,portal:D8,top:z8,bottom:F8,left:B8,right:O8},Zl=({content:r,placement:s="top",delay:i=0,disabled:l=!1,maxWidth:c=280,offset:p=0,children:f})=>{const[y,g]=x.useState(!1),[w,v]=x.useState({top:0,left:0}),_=x.useRef(null),b=x.useRef(),L=x.useId(),E=x.useCallback(()=>{if(!_.current)return;const k=_.current.getBoundingClientRect(),j=6+p;let $=0,F=0;switch(s){case"top":$=k.top-j,F=k.left+k.width/2;break;case"bottom":$=k.bottom+j,F=k.left+k.width/2;break;case"left":$=k.top+k.height/2,F=k.left-j;break;case"right":$=k.top+k.height/2,F=k.right+j;break}v({top:$,left:F})},[s,p]),I=x.useCallback(()=>{l||(E(),clearTimeout(b.current),i>0?b.current=setTimeout(()=>g(!0),i):g(!0))},[l,i,E]),N=x.useCallback(()=>{clearTimeout(b.current),g(!1)},[]);x.useEffect(()=>{if(!y)return;const k=()=>E();return window.addEventListener("scroll",k,!0),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k,!0),window.removeEventListener("resize",k)}},[y,E]);const C=An.cloneElement(f,{"aria-describedby":y?L:void 0}),A=t.jsx("span",{id:L,role:"tooltip",className:Q(il.tooltip,il[s],il.portal),"data-visible":y||void 0,style:{top:w.top,left:w.left,maxWidth:c!==void 0?c:void 0},children:r});return t.jsxs("span",{ref:_,className:il.wrapper,onMouseEnter:I,onMouseLeave:N,onFocus:I,onBlur:N,children:[C,Mm.createPortal(A,document.body)]})};Zl.displayName="Tooltip";const H8="_selectedBorder_1ypeg_7",W8="_selectedFill_1ypeg_12",_h={selectedBorder:H8,selectedFill:W8},U8=x.forwardRef(({selected:r=!1,defaultVariant:s="secondary",selectionStyle:i="border",onSelectedChange:l,onClick:c,className:p,...f},y)=>{const g=v=>{l==null||l(!r),c==null||c(v)},w=r?i==="fill"?_h.selectedFill:_h.selectedBorder:void 0;return t.jsx(Oe,{ref:y,variant:s,"aria-pressed":r,className:Q(w,p),onClick:g,...f})});U8.displayName="ToggleButton";const V8="_root_mcb75_6",G8="_disabled_mcb75_13",q8="_sm_mcb75_20",Z8="_md_mcb75_31",Y8="_lg_mcb75_42",K8="_track_mcb75_54",Q8="_trackChecked_mcb75_90",X8="_thumb_mcb75_100",J8="_labelWrap_mcb75_117",e7="_label_mcb75_117",t7="_description_mcb75_139",vr={root:V8,disabled:G8,sm:q8,md:Z8,lg:Y8,track:K8,trackChecked:Q8,thumb:X8,labelWrap:J8,label:e7,description:t7},n7=x.forwardRef(({checked:r,defaultChecked:s=!1,onChange:i,disabled:l,size:c="md",label:p,description:f,id:y,name:g,value:w,className:v},_)=>{const b=x.useId(),L=y??b,E=`${L}-label`,I=r!==void 0,[N,C]=x.useState(s),A=I?r:N,k=()=>{if(l)return;const $=!A;I||C($),i==null||i($)},j=$=>{($.key===" "||$.key==="Enter")&&($.preventDefault(),k())};return t.jsxs("div",{className:Q(vr.root,vr[c],l&&vr.disabled,v),children:[t.jsx("button",{ref:_,type:"button",role:"switch",id:L,"aria-checked":A,"aria-labelledby":p?E:void 0,"aria-disabled":l||void 0,tabIndex:l?-1:0,disabled:l,name:g,value:w,className:Q(vr.track,A&&vr.trackChecked),"data-checked":A||void 0,"data-disabled":l||void 0,onClick:k,onKeyDown:j,children:t.jsx("span",{className:vr.thumb})}),(p||f)&&t.jsxs("div",{className:vr.labelWrap,children:[p&&t.jsx("label",{id:E,htmlFor:L,className:vr.label,children:p}),f&&t.jsx("span",{className:vr.description,children:f})]})]})});n7.displayName="Switch";const r7="_root_104n4_5",o7="_disabled_104n4_11",s7="_sm_104n4_17",i7="_md_104n4_25",a7="_lg_104n4_33",l7="_controlWrap_104n4_41",c7="_input_104n4_50",d7="_ring_104n4_65",u7="_ringChecked_104n4_90",p7="_ringError_104n4_94",f7="_dot_104n4_104",h7="_labelWrap_104n4_112",m7="_label_104n4_112",g7="_error_104n4_130",x7="_required_104n4_132",v7="_description_104n4_137",on={root:r7,disabled:o7,sm:s7,md:i7,lg:a7,controlWrap:l7,input:c7,ring:d7,ringChecked:u7,ringError:p7,dot:f7,labelWrap:h7,label:m7,error:g7,required:x7,description:v7},y7=x.forwardRef(({value:r,checked:s,onChange:i,disabled:l,error:c,size:p="md",label:f,description:y,id:g,name:w,required:v,className:_},b)=>{const L=x.useId(),E=g??L;return t.jsxs("div",{className:Q(on.root,on[p],l&&on.disabled,c&&on.error,_),children:[t.jsxs("div",{className:on.controlWrap,children:[t.jsx("input",{ref:b,type:"radio",id:E,name:w,value:r,checked:s,disabled:l,required:v,"aria-invalid":c||void 0,onChange:()=>i==null?void 0:i(r),className:on.input}),t.jsx("span",{className:Q(on.ring,s&&on.ringChecked,c&&on.ringError),"aria-hidden":"true",children:s&&t.jsx("span",{className:on.dot})})]}),(f||y)&&t.jsxs("div",{className:on.labelWrap,children:[f&&t.jsxs("label",{htmlFor:E,className:on.label,children:[f,v&&t.jsx("span",{className:on.required,"aria-hidden":"true",children:" *"})]}),y&&t.jsx("span",{className:on.description,children:y})]})]})});y7.displayName="Radio";const w7="_table_19hy2_8",j7="_sm_19hy2_16",b7="_row_19hy2_30",k7="_head_19hy2_45",_7="_headLabel_19hy2_63",C7="_sortBtn_19hy2_77",S7="_sortIcon_19hy2_100",M7="_cell_19hy2_123",I7="_cellText_19hy2_139",N7="_cellStack_19hy2_167",L7="_cellStackPrimary_19hy2_174",A7="_cellStackSecondary_19hy2_185",T7="_cellActions_19hy2_197",E7="_cellControl_19hy2_204",an={table:w7,sm:j7,row:b7,head:k7,headLabel:_7,sortBtn:C7,sortIcon:S7,cell:M7,cellText:I7,cellStack:N7,cellStackPrimary:L7,cellStackSecondary:A7,cellActions:T7,cellControl:E7},Yl=x.forwardRef(({size:r="md",className:s,children:i,...l},c)=>t.jsx("table",{ref:c,className:Q(an.table,r==="sm"&&an.sm,s),...l,children:i}));Yl.displayName="Table";const Kl=x.forwardRef(({children:r,...s},i)=>t.jsx("thead",{ref:i,...s,children:r}));Kl.displayName="TableHeader";const Ql=x.forwardRef(({children:r,...s},i)=>t.jsx("tbody",{ref:i,...s,children:r}));Ql.displayName="TableBody";const Io=x.forwardRef(({hoverable:r=!0,selected:s,className:i,children:l,...c},p)=>t.jsx("tr",{ref:p,className:Q(an.row,i),"data-hoverable":r||void 0,"data-selected":s||void 0,"aria-selected":s,...c,children:l}));Io.displayName="TableRow";const In=x.forwardRef(({align:r="left",sort:s,onSort:i,className:l,children:c,...p},f)=>{const y=s!==void 0;return t.jsx("th",{ref:f,className:Q(an.head,l),"data-align":r!=="left"?r:void 0,scope:"col","aria-sort":s==="asc"?"ascending":s==="desc"?"descending":y?"none":void 0,...p,children:y?t.jsxs("button",{type:"button",className:an.sortBtn,onClick:i,"aria-label":typeof c=="string"?`Sort by ${c}`:void 0,children:[c,t.jsx("span",{className:an.sortIcon,"data-sort":s!=="none"?s:void 0,"aria-hidden":"true",children:t.jsx(En,{size:12,strokeWidth:2})})]}):t.jsx("span",{className:an.headLabel,children:c})})});In.displayName="TableHead";const Nn=x.forwardRef(({align:r="left",compact:s,className:i,children:l,...c},p)=>t.jsx("td",{ref:p,className:Q(an.cell,i),"data-align":r!=="left"?r:void 0,"data-compact":s||void 0,...c,children:l}));Nn.displayName="TableCell";const jo=x.forwardRef(({variant:r="primary",size:s="md",wrap:i,className:l,children:c,...p},f)=>t.jsx("span",{ref:f,className:Q(an.cellText,l),"data-variant":r!=="primary"?r:void 0,"data-size":s!=="md"?s:void 0,"data-wrap":i||void 0,...p,children:c}));jo.displayName="CellText";const $7=x.forwardRef(({primary:r,secondary:s,className:i,...l},c)=>t.jsxs("div",{ref:c,className:Q(an.cellStack,i),...l,children:[t.jsx("span",{className:an.cellStackPrimary,children:r}),s&&t.jsx("span",{className:an.cellStackSecondary,children:s})]}));$7.displayName="CellStack";const P7=x.forwardRef(({size:r="sm",...s},i)=>t.jsx(it,{ref:i,size:r,...s}));P7.displayName="CellTag";const R7=x.forwardRef(({size:r="sm",...s},i)=>t.jsx(bs,{ref:i,size:r,...s}));R7.displayName="CellStatusTag";const D7=x.forwardRef(({className:r,children:s,...i},l)=>t.jsx("div",{ref:l,className:Q(an.cellActions,r),...i,children:s}));D7.displayName="CellActions";const z7=x.forwardRef(({className:r,children:s,...i},l)=>t.jsx("div",{ref:l,className:Q(an.cellControl,r),...i,children:s}));z7.displayName="CellControl";const F7="_root_1sz1z_7",B7="_status_1sz1z_50",Qd={root:F7,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:B7},Om=x.forwardRef(({disabled:r=!1,size:s="md",escapeTarget:i,onEscape:l,className:c,children:p,...f},y)=>{const g=x.useRef(null),[w,v]=x.useState(""),_=x.Children.map(p,b=>{if(!x.isValidElement(b))return b;const L=b.props;return x.cloneElement(b,{groupDisabled:r||!!L.groupDisabled})});return x.useEffect(()=>{if(!i||!l)return;const b=L=>{L.key==="Escape"&&l()};return i.addEventListener("keydown",b),()=>i.removeEventListener("keydown",b)},[i,l]),x.useCallback(b=>v(b),[]),t.jsxs("div",{ref:y,"data-size":s,className:Q(Qd.root,Qd[`size-${s}`],c),...f,children:[_,t.jsx("span",{ref:g,className:Qd.status,role:"status","aria-live":"polite",children:w})]})});Om.displayName="ComposerActions";function Hm({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Hm.displayName="ClockIcon";const ks=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};ks.displayName="ArrowNarrowRightIcon";function Gr({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}function _l({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}function Un({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}function Xd({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M19.4 14H15.6C15.0399 14 14.7599 14 14.546 14.109C14.3578 14.2049 14.2049 14.3578 14.109 14.546C14 14.7599 14 15.0399 14 15.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V15.6C21 15.0399 21 14.7599 20.891 14.546C20.7951 14.3578 20.6422 14.2049 20.454 14.109C20.2401 14 19.9601 14 19.4 14Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})}function O7({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}const Wm=({size:r=16,color:s="currentColor",...i})=>t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:t.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:s})});Wm.displayName="FeatherIcon";const qr=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:[t.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:s}),t.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:s,strokeWidth:p,strokeLinecap:"round",strokeLinejoin:"round"})]})};qr.displayName="ClipboardCheckIcon";const $i=({size:r=16,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.25:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:s,strokeWidth:p})})};$i.displayName="SettingsGearIcon";function xo({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9 21V15H15V21",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})}xo.displayName="HomeLineIcon";const Um=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Um.displayName="GitBranch01Icon";const Xl=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Xl.displayName="RefreshCw04Icon";const Vm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Vm.displayName="StopIcon";const Gm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Gm.displayName="RecordingIcon";function qm({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}qm.displayName="Microphone02Icon";const Nl=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M19.7479 5.00005C21.1652 6.97029 22 9.38768 22 12C22 14.6124 21.1652 17.0298 19.7479 19M15.7453 8.00005C16.5362 9.13388 17 10.5128 17 12C17 13.4873 16.5362 14.8662 15.7453 16M9.63432 4.36573L6.46863 7.53142C6.29568 7.70437 6.2092 7.79085 6.10828 7.85269C6.01881 7.90752 5.92127 7.94792 5.81923 7.97242C5.70414 8.00005 5.58185 8.00005 5.33726 8.00005H3.6C3.03995 8.00005 2.75992 8.00005 2.54601 8.10904C2.35785 8.20492 2.20487 8.3579 2.10899 8.54606C2 8.75997 2 9.04 2 9.60005V14.4C2 14.9601 2 15.2401 2.10899 15.454C2.20487 15.6422 2.35785 15.7952 2.54601 15.8911C2.75992 16 3.03995 16 3.6 16H5.33726C5.58185 16 5.70414 16 5.81923 16.0277C5.92127 16.0522 6.01881 16.0926 6.10828 16.1474C6.2092 16.2093 6.29568 16.2957 6.46863 16.4687L9.63431 19.6344C10.0627 20.0627 10.2769 20.2769 10.4608 20.2914C10.6203 20.304 10.7763 20.2394 10.8802 20.1177C11 19.9774 11 19.6745 11 19.0687V4.93142C11 4.3256 11 4.0227 10.8802 3.88243C10.7763 3.76073 10.6203 3.69614 10.4608 3.7087C10.2769 3.72317 10.0627 3.93736 9.63432 4.36573Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Nl.displayName="VolumeMaxIcon";const Zm=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Zm.displayName="ThumbsUpIcon";const Ym=({size:r=24,color:s="currentColor",strokeWidth:i,...l})=>{const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Ym.displayName="ThumbsDownIcon";function Km({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Km.displayName="Copy01Icon";function Qm({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:[t.jsx("path",{d:"M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z",fill:s}),t.jsx("path",{d:"M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z",fill:s}),t.jsx("path",{d:"M19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10Z",fill:s})]})}Qm.displayName="DotsHorizontalIcon";function Xm({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Xm.displayName="Download01Icon";function qu({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}qu.displayName="Pin01Icon";function Zu({size:r=16,color:s="currentColor",strokeWidth:i,...l}){const c=typeof r=="number"?r:parseFloat(r),p=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:p,...l,children:t.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Zu.displayName="ZapIcon";const H7="_base_txgv9_11",W7="_icon_txgv9_45",U7="_sendReady_txgv9_64",V7="_sendStreaming_txgv9_76",G7="_sendDisabled_txgv9_90",q7="_sendError_txgv9_97",Z7="_attachIdle_txgv9_122",Y7="_attachDisabled_txgv9_136",K7="_attachError_txgv9_143",Q7="_voiceIdle_txgv9_156",X7="_voiceRecording_txgv9_170",J7="_voiceDisabled_txgv9_180",ej="_iconStack_txgv9_191",tj="_iconLayer_txgv9_200",Mt={base:H7,icon:W7,sendReady:U7,sendStreaming:V7,sendDisabled:G7,sendError:q7,attachIdle:Z7,attachDisabled:Y7,attachError:K7,voiceIdle:Q7,voiceRecording:X7,voiceDisabled:J7,iconStack:ej,iconLayer:tj},nj={hidden:void 0,ready:Mt.sendReady,"disabled-invalid":Mt.sendDisabled,streaming:Mt.sendStreaming,error:Mt.sendError},rj=(r,s,i)=>{switch(r){case"ready":return"Send message";case"disabled-invalid":return s?`Cannot send: ${s}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Jm=x.forwardRef(({state:r,onSend:s,onStop:i,onRetry:l,invalidReason:c,errorMessage:p,groupDisabled:f,className:y,style:g,...w},v)=>{const _=x.useRef(null),b=x.useRef(null),L=x.useCallback(k=>{b.current=k,typeof v=="function"?v(k):v&&(v.current=k)},[v]),E=x.useCallback(()=>{if(r==="ready"){s==null||s();return}if(r==="streaming"){i==null||i();return}if(r==="error"){const k=b.current;k&&(k.dataset.pressed="true",_.current&&clearTimeout(_.current),_.current=setTimeout(()=>{k.dataset.pressed="false"},140)),l==null||l()}},[r,s,i,l]);if(r==="hidden")return null;const I=!f&&(r==="ready"||r==="streaming"||r==="error"),N=rj(r,c,p),C=r==="disabled-invalid"?c??"Cannot send":r==="error"?p??"Send failed — click to retry":null,A=t.jsx("button",{ref:L,type:"button","data-composer-action":"send","data-state":r,className:Q(Mt.base,nj[r],y),style:g,"aria-label":N,disabled:!I,onClick:E,...w,children:t.jsxs("span",{className:Mt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[t.jsx("span",{className:Mt.iconLayer,"data-active":r==="ready"||r==="disabled-invalid"?"true":"false",children:t.jsx(Hu,{size:"100%",strokeWidth:2})}),t.jsx("span",{className:Mt.iconLayer,"data-active":r==="streaming"?"true":"false",children:t.jsx(Vm,{size:"100%",strokeWidth:1.75})}),t.jsx("span",{className:Mt.iconLayer,"data-active":r==="error"?"true":"false",children:t.jsx(Xl,{size:"100%",strokeWidth:2})})]})});return C?t.jsx(Zl,{content:C,placement:"top",children:A}):A});Jm.displayName="ComposerSendButton";const oj={idle:Mt.attachIdle,disabled:Mt.attachDisabled,error:Mt.attachError},sj=(r,s,i)=>{switch(r){case"idle":return"Add attachment";case"disabled":return s?`Attachments unavailable: ${s}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},eg=x.forwardRef(({state:r,onSelect:s,accept:i,multiple:l=!0,disabledReason:c,errorMessage:p,groupDisabled:f,className:y,style:g,...w},v)=>{const _=x.useRef(null),b=x.useCallback(()=>{var A;(r==="idle"||r==="error")&&((A=_.current)==null||A.click())},[r]),L=x.useCallback(A=>{const k=A.target.files;k&&k.length>0&&(s==null||s(k)),A.target.value=""},[s]),E=!f&&r!=="disabled",I=sj(r,c,p),N=r==="disabled"?c??"Attachments unavailable":r==="error"?p??"Attachment failed":null,C=t.jsxs("button",{ref:v,type:"button","data-composer-action":"attachment","data-state":r,className:Q(Mt.base,oj[r],y),style:g,"aria-label":I,disabled:!E,onClick:b,...w,children:[t.jsx("span",{className:Mt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:t.jsx(Ol,{size:"100%",strokeWidth:2})}),t.jsx("input",{ref:_,type:"file",accept:i,multiple:l,onChange:L,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return N?t.jsx(Zl,{content:N,placement:"top",children:C}):C});eg.displayName="ComposerAttachment";const ij={idle:Mt.voiceIdle,recording:Mt.voiceRecording,disabled:Mt.voiceDisabled},aj=(r,s)=>{switch(r){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return s?`Voice unavailable: ${s}`:"Voice unavailable"}},tg=x.forwardRef(({state:r,onStartRecording:s,onStopRecording:i,disabledReason:l,groupDisabled:c,className:p,style:f,...y},g)=>{const w=x.useCallback(()=>{if(r==="idle"){s==null||s();return}if(r==="recording"){i==null||i();return}},[r,s,i]),v=!c&&r!=="disabled",_=aj(r,l),b=r==="disabled"?l??"Voice unavailable":null,L=t.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":r,className:Q(Mt.base,ij[r],p),style:f,"aria-label":_,"aria-pressed":r==="recording"||void 0,disabled:!v,onClick:w,...y,children:t.jsxs("span",{className:Mt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[t.jsx("span",{className:Mt.iconLayer,"data-active":r!=="recording"?"true":"false",children:t.jsx(qm,{size:"100%",strokeWidth:1.5})}),t.jsx("span",{className:Mt.iconLayer,"data-active":r==="recording"?"true":"false",children:t.jsx(Gm,{size:"100%",strokeWidth:1.5})})]})});return b?t.jsx(Zl,{content:b,placement:"top",children:L}):L});tg.displayName="ComposerVoiceButton";const lj="_root_1ee3k_8",cj="_secondary_1ee3k_20",dj="_header_1ee3k_25",uj="_headerText_1ee3k_33",pj="_title_1ee3k_40",fj="_subtitle_1ee3k_49",hj="_action_1ee3k_58",mj="_hero_1ee3k_63",gj="_heroValue_1ee3k_71",xj="_heroCaption_1ee3k_80",vj="_heroChange_1ee3k_86",yj="_body_1ee3k_92",wj="_legend_1ee3k_100",gn={root:lj,secondary:cj,header:dj,headerText:uj,title:pj,subtitle:fj,action:hj,hero:mj,heroValue:gj,heroCaption:xj,heroChange:vj,body:yj,legend:wj},jj=x.forwardRef(({title:r,subtitle:s,action:i,value:l,valueChange:c,valueCaption:p,legend:f,secondary:y,children:g,className:w,...v},_)=>t.jsxs("div",{ref:_,className:Q(gn.root,y&&gn.secondary,w),...v,children:[t.jsxs("div",{className:gn.header,children:[t.jsxs("div",{className:gn.headerText,children:[t.jsx("h3",{className:gn.title,children:r}),s&&t.jsx("p",{className:gn.subtitle,children:s})]}),i&&t.jsx("div",{className:gn.action,children:i})]}),(l!==void 0||c||p)&&t.jsxs("div",{className:gn.hero,children:[l!==void 0&&t.jsx("span",{className:gn.heroValue,children:l}),c&&t.jsx("span",{className:gn.heroChange,children:c}),p&&t.jsx("span",{className:gn.heroCaption,children:p})]}),t.jsx("div",{className:gn.body,children:g}),f&&t.jsx("div",{className:gn.legend,children:f})]}));jj.displayName="ChartCard";const bj="_root_je8nq_7",kj="_item_je8nq_17",_j="_swatch_je8nq_23",Cj="_label_je8nq_29",Sj="_bookend_je8nq_33",hs={root:bj,item:kj,swatch:_j,label:Cj,bookend:Sj},ng=x.forwardRef(({items:r,before:s,after:i,variant:l="square",swatchSize:c=12,className:p,...f},y)=>t.jsxs("div",{ref:y,className:Q(hs.root,p),...f,children:[s&&t.jsx("span",{className:hs.bookend,children:s}),r.map((g,w)=>{const v=l==="line"?{width:c+4,height:2,background:g.color,borderRadius:1}:l==="dot"?{width:c-2,height:c-2,background:g.color,borderRadius:"50%"}:{width:c,height:c,background:g.color};return t.jsxs("span",{className:hs.item,children:[t.jsx("span",{className:hs.swatch,style:v,"aria-hidden":"true"}),g.label!==void 0&&t.jsx("span",{className:hs.label,children:g.label})]},w)}),i&&t.jsx("span",{className:hs.bookend,children:i})]}));ng.displayName="ChartLegend";const Mj="_root_igkx4_5",Ij="_svgWrap_igkx4_13",Nj="_svg_igkx4_13",Lj="_gridLine_igkx4_23",Aj="_axisLabel_igkx4_28",Tj="_legendWrap_igkx4_43",Ej="_legendItem_igkx4_51",$j="_legendDot_igkx4_57",Pj="_legendLabel_igkx4_64",Rj="_tooltip_igkx4_71",Dj="_tooltipLabel_igkx4_85",zj="_tooltipRow_igkx4_95",Fj="_tooltipDot_igkx4_101",Bj="_tooltipSeries_igkx4_108",Oj="_tooltipValue_igkx4_115",$e={root:Mj,svgWrap:Ij,svg:Nj,gridLine:Lj,axisLabel:Aj,legendWrap:Tj,legendItem:Ej,legendDot:$j,legendLabel:Pj,tooltip:Rj,tooltipLabel:Dj,tooltipRow:zj,tooltipDot:Fj,tooltipSeries:Bj,tooltipValue:Oj},Hj=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function Jd(r){if(r===0)return 10;const s=Math.pow(10,Math.floor(Math.log10(r))),i=r/s;return i<=1?s:i<=2?2*s:i<=5?5*s:10*s}function ms(r){return r>=1e3?`${(r/1e3).toFixed(r%1e3===0?0:1)}k`:String(Math.round(r))}const Wj=x.forwardRef(({series:r,labels:s,variant:i="grouped",height:l=260,showGrid:c=!0,showLegend:p=!0,yUnit:f="",barRadius:y=2,colors:g,gradientFrom:w="#8c4fe2",gradientTo:v="#446cff",formatTooltipValue:_,stackStyle:b="gradient-each",capColor:L,className:E,...I},N)=>{var fe,Ie,Ee,Ze;const C=g&&g.length>0?g:Hj,A=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[k,j]=x.useState({visible:!1,x:0,y:0,label:"",items:[]}),$=x.useRef(null),[F,z]=x.useState(540);x.useEffect(()=>{const ge=$.current;if(!ge)return;const Ce=new ResizeObserver(Fe=>{var pt;const Ke=(pt=Fe[0])==null?void 0:pt.contentRect.width;Ke>0&&z(Math.floor(Ke))});Ce.observe(ge);const Le=Math.floor(ge.getBoundingClientRect().width);return Le>0&&z(Le),()=>Ce.disconnect()},[]);const B=44,ie=0,ce=20,ee=20,Y=F,X=l,ve=Y-B-ie,K=X-ce-ee,q=5,J=r.map((ge,Ce)=>ge.color??C[Ce%C.length]);let G=0;i==="stacked"?s.forEach((ge,Ce)=>{const Le=r.reduce((Fe,Ke)=>Fe+(Ke.data[Ce]??0),0);Le>G&&(G=Le)}):i==="horizontal"?G=Math.max(...((fe=r[0])==null?void 0:fe.data)??[0]):r.forEach(ge=>ge.data.forEach(Ce=>{Ce>G&&(G=Ce)}));const H=Jd(G),P=Array.from({length:q+1},(ge,Ce)=>H*(Ce/q)).reverse(),M=ge=>ee+K-ge/H*K,D=ve/s.length,re=3,W=i==="grouped"?Math.max(4,(D-re*(r.length+1))/r.length):D,Z=()=>j(ge=>({...ge,visible:!1})),ue=x.useCallback(ge=>{const Ce=ge.currentTarget.getBoundingClientRect(),Le=ge.clientX-Ce.left,Fe=Math.floor((Le-B)/D);if(Fe<0||Fe>=s.length){Z();return}const Ke=r.map((pt,ft)=>({color:J[ft],series:pt.label,value:pt.data[Fe]??0}));j({visible:!0,x:ge.clientX+12,y:ge.clientY-8,label:s[Fe],items:Ke})},[r,s,D,J,B]);if(i==="gradient"){const ge=((Ie=r[0])==null?void 0:Ie.data)??[],Ce=((Ee=r[0])==null?void 0:Ee.label)??"",Le=44,Fe=0,Ke=20,pt=20,ft=Math.max(Y-Le-Fe,1),ht=X-Ke-pt,Ye=Math.max(0,...ge),oe=Ye>0?Jd(Ye):10,ae=5,Ae=Array.from({length:ae+1},(Ne,at)=>oe*at/ae),ye=Ne=>Ke+ht-Ne/oe*ht,je=ft/Math.max(1,ge.length),be=Ne=>Le+je*Ne,Xe=Ne=>Le+je*(Ne+1),Je=Ne=>Le+je*(Ne+.5),Ge=ge.length===0?"":ge.map((Ne,at)=>{const xt=ye(Ne);return`M ${be(at)} ${xt} L ${Xe(at)} ${xt}`}).join(" "),Ft=[];ge.forEach((Ne,at)=>{if(Ne<=0)return;const xt=ye(Ne);Ft.push({x:be(at),y:xt,width:Math.max(Xe(at)-be(at),0),height:Ke+ht-xt})});const Pn=Math.max(1,Math.ceil(45/je)),eo=s.length-1,Oo=_??(Ne=>`${ms(Ne)}${f}`);return t.jsxs("div",{ref:N,className:Q($e.root,E),...I,children:[t.jsx("div",{ref:$,className:$e.svgWrap,children:t.jsxs("svg",{width:Y,height:X,viewBox:`0 0 ${Y} ${X}`,className:$e.svg,onMouseLeave:Z,onMouseMove:Ne=>{const at=Ne.currentTarget.getBoundingClientRect(),xt=Ne.clientX-at.left,$t=Math.floor((xt-Le)/je);if($t<0||$t>=ge.length){Z();return}j({visible:!0,x:Ne.clientX+12,y:Ne.clientY-8,label:s[$t]??"",items:[{color:v,series:Ce,value:ge[$t]??0}]})},children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:`${A}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:w}),t.jsx("stop",{offset:"100%",stopColor:v})]}),t.jsxs("linearGradient",{id:`${A}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:w,stopOpacity:"0.3"}),t.jsx("stop",{offset:"100%",stopColor:v,stopOpacity:"0"})]})]}),Ae.map((Ne,at)=>t.jsxs("g",{children:[c&&t.jsx("line",{x1:0,x2:Y-Fe,y1:ye(Ne),y2:ye(Ne),className:$e.gridLine}),t.jsxs("text",{x:0,y:ye(Ne)-6,className:$e.axisLabel,textAnchor:"start",children:[ms(Ne),f]})]},`t-${at}`)),Ft.map((Ne,at)=>t.jsx("rect",{x:Ne.x,y:Ne.y,width:Ne.width,height:Ne.height,fill:`url(#${A}-fill)`},`b-${at}`)),Ge&&t.jsx("path",{d:Ge,fill:"none",stroke:`url(#${A}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),k.visible&&(()=>{var Qn;const Ne=(Qn=$.current)==null?void 0:Qn.getBoundingClientRect();if(!Ne)return null;const at=k.x-12-Ne.left,xt=Math.floor((at-Le)/je);if(xt<0||xt>=ge.length)return null;const $t=ge[xt]??0;return $t<=0?null:t.jsx("circle",{cx:Je(xt),cy:ye($t),r:4,fill:v,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),s.map((Ne,at)=>{const xt=at===0,$t=at===eo;if(!(xt||$t)&&at%Pn!==0)return null;const Ps=xt?Le:$t?Y-Fe:Je(at),Rs=xt?"start":$t?"end":"middle";return t.jsx("text",{x:Ps,y:X-pt+18,className:$e.axisLabel,textAnchor:Rs,children:Ne},`xl-${at}`)})]})}),k.visible&&k.items.length>0&&t.jsxs("div",{className:$e.tooltip,style:{left:k.x,top:k.y},children:[t.jsx("div",{className:$e.tooltipLabel,children:k.label}),k.items.map(Ne=>t.jsxs("div",{className:$e.tooltipRow,children:[t.jsx("span",{className:$e.tooltipDot,style:{background:Ne.color}}),t.jsx("span",{className:$e.tooltipSeries,children:Ne.series}),t.jsx("span",{className:$e.tooltipValue,children:Oo(Ne.value)})]},Ne.series))]})]})}if(i==="horizontal"){const ge=((Ze=r[0])==null?void 0:Ze.data)??[],Ce=Jd(Math.max(...ge,1)),Le=28,Fe=10,Ke=120,ft=Y-Ke-44,ht=s.length*(Le+Fe)+Fe;return t.jsxs("div",{ref:N,className:Q($e.root,E),...I,children:[t.jsx("div",{ref:$,className:$e.svgWrap,children:t.jsx("svg",{width:Y,height:ht,viewBox:`0 0 ${Y} ${ht}`,className:$e.svg,onMouseLeave:Z,onMouseMove:Ye=>{var ye;const oe=Ye.currentTarget.getBoundingClientRect(),ae=Ye.clientY-oe.top,Ae=Math.floor(ae/(Le+Fe));if(Ae<0||Ae>=s.length){Z();return}j({visible:!0,x:Ye.clientX+12,y:Ye.clientY-8,label:s[Ae],items:[{color:J[0],series:((ye=r[0])==null?void 0:ye.label)??"",value:ge[Ae]??0}]})},children:s.map((Ye,oe)=>{const ae=Fe+oe*(Le+Fe),Ae=ge[oe]??0,ye=Ae/Ce*ft;return t.jsxs("g",{children:[t.jsx("text",{x:Ke-8,y:ae+Le/2+4,className:$e.axisLabel,textAnchor:"end",children:Ye}),t.jsx("rect",{x:Ke,y:ae,width:ye,height:Le,rx:y,fill:J[0]}),t.jsxs("text",{x:Ke+ye+6,y:ae+Le/2+4,className:$e.axisLabel,textAnchor:"start",children:[ms(Ae),f]})]},oe)})})}),k.visible&&t.jsxs("div",{className:$e.tooltip,style:{left:k.x,top:k.y},children:[t.jsx("div",{className:$e.tooltipLabel,children:k.label}),k.items.map(Ye=>t.jsxs("div",{className:$e.tooltipRow,children:[t.jsx("span",{className:$e.tooltipDot,style:{background:Ye.color}}),t.jsx("span",{className:$e.tooltipSeries,children:Ye.series}),t.jsxs("span",{className:$e.tooltipValue,children:[ms(Ye.value),f]})]},Ye.series))]})]})}return t.jsxs("div",{ref:N,className:Q($e.root,E),...I,children:[t.jsx("div",{ref:$,className:$e.svgWrap,children:t.jsxs("svg",{width:Y,height:X,viewBox:`0 0 ${Y} ${X}`,className:$e.svg,onMouseMove:ue,onMouseLeave:Z,children:[t.jsx("defs",{children:J.flatMap((ge,Ce)=>[t.jsxs("linearGradient",{id:`${A}-fill-${Ce}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:ge,stopOpacity:"0.3"}),t.jsx("stop",{offset:"100%",stopColor:ge,stopOpacity:"0"})]},`soft-${Ce}`),t.jsxs("linearGradient",{id:`${A}-fill-strong-${Ce}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:ge,stopOpacity:"1"}),t.jsx("stop",{offset:"100%",stopColor:ge,stopOpacity:"0"})]},`strong-${Ce}`)])}),P.map(ge=>{const Ce=M(ge);return t.jsxs("g",{children:[c&&t.jsx("line",{x1:0,y1:Ce,x2:Y-ie,y2:Ce,className:$e.gridLine}),t.jsxs("text",{x:0,y:Ce-6,className:$e.axisLabel,textAnchor:"start",children:[ms(ge),f]})]},ge)}),s.map((ge,Ce)=>{const Le=B+Ce*D;if(i==="stacked"){let pt=0;const ft=r.map((ye,je)=>{const be=ye.data[Ce]??0,Xe=be/H*K,Je=M(pt+be);return pt+=be,{si:je,value:be,barH:Xe,y:Je}}),ht=Le+(D-W)/2,Ye=ft.filter(ye=>ye.value>0),oe=Ye.length>0?Ye[0].si:-1,ae=Ye.length>0?Ye[Ye.length-1]:null,Ae=L??(ae?J[ae.si]:"transparent");return t.jsxs("g",{children:[ft.map(({si:ye,value:je,barH:be,y:Xe})=>{if(je<=0)return null;if(b==="mono-scale"){const Je=ye===oe;return t.jsx("rect",{x:ht,y:Xe,width:W,height:be,fill:Je?`url(#${A}-fill-strong-${ye})`:J[ye]},`fill-${ye}`)}return t.jsx("rect",{x:ht,y:Xe,width:W,height:be,fill:`url(#${A}-fill-${ye})`},`fill-${ye}`)}),b==="mono-scale"?ae&&t.jsx("line",{x1:ht,x2:ht+W,y1:ae.y,y2:ae.y,stroke:Ae,strokeWidth:2,strokeLinecap:"butt"}):ft.map(({si:ye,value:je,y:be})=>je>0?t.jsx("line",{x1:ht,x2:ht+W,y1:be,y2:be,stroke:J[ye],strokeWidth:2,strokeLinecap:"butt"},`cap-${ye}`):null)]},Ce)}const Fe=r.length*W+(r.length-1)*re,Ke=Le+(D-Fe)/2;return t.jsx("g",{children:r.map((pt,ft)=>{const ht=pt.data[Ce]??0;if(ht<=0)return null;const Ye=ht/H*K,oe=Ke+ft*(W+re),ae=M(ht);return t.jsxs("g",{children:[t.jsx("rect",{x:oe,y:ae,width:W,height:Ye,fill:`url(#${A}-fill-${ft})`}),t.jsx("line",{x1:oe,x2:oe+W,y1:ae,y2:ae,stroke:J[ft],strokeWidth:2,strokeLinecap:"butt"})]},ft)})},Ce)}),(()=>{const Ce=Math.max(1,Math.ceil(45/D)),Le=s.length-1;return s.map((Fe,Ke)=>{const pt=Ke===0,ft=Ke===Le;if(!(pt||ft)&&Ke%Ce!==0)return null;const Ye=pt?B:ft?Y-ie:B+D*(Ke+.5),oe=pt?"start":ft?"end":"middle";return t.jsx("text",{x:Ye,y:X-ce+18,className:$e.axisLabel,textAnchor:oe,children:Fe},`xl-${Ke}`)})})()]})}),p&&r.length>1&&t.jsx("div",{className:$e.legendWrap,children:r.map((ge,Ce)=>t.jsxs("div",{className:$e.legendItem,children:[t.jsx("span",{className:$e.legendDot,style:{background:J[Ce]}}),t.jsx("span",{className:$e.legendLabel,children:ge.label})]},ge.label))}),k.visible&&t.jsxs("div",{className:$e.tooltip,style:{left:k.x,top:k.y},children:[t.jsx("div",{className:$e.tooltipLabel,children:k.label}),k.items.map(ge=>t.jsxs("div",{className:$e.tooltipRow,children:[t.jsx("span",{className:$e.tooltipDot,style:{background:ge.color}}),t.jsx("span",{className:$e.tooltipSeries,children:ge.series}),t.jsxs("span",{className:$e.tooltipValue,children:[ms(ge.value),f]})]},ge.series))]})]})});Wj.displayName="BarChart";const Uj="_root_1crij_5",Vj="_svgWrap_1crij_13",Gj="_svg_1crij_13",qj="_gridLine_1crij_23",Zj="_axisLabelY_1crij_35 _axisLabel_1crij_28",Yj="_axisLabelX_1crij_39 _axisLabel_1crij_28",Kj="_legendWrap_1crij_51",Qj="_tooltip_1crij_76",Xj="_tooltipLabel_1crij_95",Jj="_tooltipRow_1crij_105",eb="_tooltipDot_1crij_111",tb="_tooltipSeries_1crij_118",nb="_tooltipValue_1crij_125",xn={root:Uj,svgWrap:Vj,svg:Gj,gridLine:qj,axisLabelY:Zj,axisLabelX:Yj,legendWrap:Kj,tooltip:Qj,tooltipLabel:Xj,tooltipRow:Jj,tooltipDot:eb,tooltipSeries:tb,tooltipValue:nb};function rb(r){if(r===0)return 10;const s=Math.pow(10,Math.floor(Math.log10(r))),i=r/s;return i<=1?s:i<=2?2*s:i<=5?5*s:10*s}function Ch(r){return r>=1e3?`${(r/1e3).toFixed(r%1e3===0?0:1)}k`:String(Math.round(r))}function ob(r,s=.35){if(r.length<2)return"";let i=`M ${r[0][0]} ${r[0][1]}`;for(let l=0;l<r.length-1;l++){const[c,p]=r[l],[f,y]=r[l+1],g=(f-c)*s;i+=` C ${c+g} ${p}, ${f-g} ${y}, ${f} ${y}`}return i}const sb=x.forwardRef(({series:r,labels:s,height:i=260,showGrid:l=!0,showLegend:c=!0,gradientFrom:p="#8c4fe2",gradientTo:f="#446cff",yUnit:y="",yTickCount:g=5,className:w,...v},_)=>{const[b,L]=x.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),E=`line-grad-${Math.random().toString(36).slice(2,9)}`,I=x.useRef(null),[N,C]=x.useState(540);x.useEffect(()=>{const H=I.current;if(!H)return;const P=new ResizeObserver(D=>{var W;const re=(W=D[0])==null?void 0:W.contentRect.width;re>0&&C(Math.floor(re))});P.observe(H);const M=Math.floor(H.getBoundingClientRect().width);return M>0&&C(M),()=>P.disconnect()},[]);const A=44,k=20,j=20,$=N,F=i,z=$-A,B=F-k-j,ie=`url(#${E}-stroke)`,ce=H=>H.color??ie,ee=r.flatMap(H=>H.data),Y=rb(Math.max(...ee,1)),X=Array.from({length:g+1},(H,P)=>Y*(P/g)).reverse(),ve=H=>j+B-H/Y*B,K=H=>s.length>1?A+H/(s.length-1)*z:A+z/2,q=H=>H.map((P,M)=>[K(M),ve(P)]),J=()=>L(H=>({...H,visible:!1})),G=x.useCallback(H=>{const P=H.currentTarget.getBoundingClientRect(),D=H.clientX-P.left-A,re=z/Math.max(s.length-1,1),W=Math.round(D/re),Z=Math.max(0,Math.min(W,s.length-1)),ue=r.map(fe=>({color:fe.color??f,series:fe.label,value:fe.data[Z]??0}));L({visible:!0,index:Z,x:H.clientX+12,y:H.clientY-8,label:s[Z],items:ue})},[r,s,f,z,A]);return t.jsxs("div",{ref:_,className:Q(xn.root,w),...v,children:[t.jsx("div",{ref:I,className:xn.svgWrap,children:t.jsxs("svg",{width:$,height:F,viewBox:`0 0 ${$} ${F}`,className:xn.svg,onMouseMove:G,onMouseLeave:J,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:`${E}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:p}),t.jsx("stop",{offset:"100%",stopColor:f})]}),t.jsxs("linearGradient",{id:`${E}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[t.jsx("stop",{offset:"0%",stopColor:f,stopOpacity:"0.05"}),t.jsx("stop",{offset:"50%",stopColor:f}),t.jsx("stop",{offset:"100%",stopColor:f,stopOpacity:"0.05"})]}),t.jsxs("filter",{id:`${E}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[t.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),t.jsx("feOffset",{dy:"4"}),t.jsx("feComponentTransfer",{children:t.jsx("feFuncA",{type:"linear",slope:"0.3"})}),t.jsxs("feMerge",{children:[t.jsx("feMergeNode",{}),t.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),t.jsx("clipPath",{id:`${E}-clip`,children:t.jsx("rect",{x:A,y:j,width:z,height:B,rx:6,ry:6})})]}),X.map(H=>{const P=ve(H);return t.jsxs("g",{children:[l&&t.jsx("line",{x1:0,y1:P,x2:$,y2:P,className:xn.gridLine}),t.jsxs("text",{x:0,y:P-6,className:xn.axisLabelY,textAnchor:"start",children:[Ch(H),y]})]},H)}),t.jsx("g",{clipPath:`url(#${E}-clip)`,children:r.map((H,P)=>{const M=q(H.data),D=ob(M);return t.jsx("path",{d:D,fill:"none",stroke:ce(H),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},P)})}),(()=>{const H=b.index>=0?b.index:0,P=K(H),M=b.visible&&b.index>=0,D="transform 200ms var(--ease-default, ease-out)";return t.jsx("g",{style:{pointerEvents:"none",opacity:M?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:t.jsxs("g",{style:{transform:`translateX(${P}px)`,transition:D},children:[t.jsx("line",{x1:0,x2:0,y1:j,y2:j+B,stroke:f,strokeWidth:2,strokeLinecap:"round",opacity:.5}),r.map((re,W)=>{const Z=re.data[H]??0,ue=ve(Z),fe=re.color??f;return t.jsx("g",{style:{transform:`translateY(${ue}px)`,transition:D},children:t.jsx("circle",{cx:0,cy:0,r:4,fill:fe,filter:`url(#${E}-pin-shadow)`})},W)})]})})})(),(()=>{const P=s.length>1?z/(s.length-1):z,M=Math.max(1,Math.ceil(45/Math.max(P,1))),D=s.length-1;return s.map((re,W)=>{const Z=W===0,ue=W===D;if(!(Z||ue)&&W%M!==0)return null;const Ie=Z?A:ue?$:K(W),Ee=Z?"start":ue?"end":"middle";return t.jsx("text",{x:Ie,y:F-k+14,className:xn.axisLabelX,textAnchor:Ee,children:re},re)})})()]})}),c&&r.length>0&&t.jsx("div",{className:xn.legendWrap,children:t.jsx(ng,{variant:"line",items:r.map(H=>({color:H.color??f,label:H.label}))})}),b.visible&&t.jsxs("div",{className:xn.tooltip,style:{left:b.x,top:b.y},children:[t.jsx("div",{className:xn.tooltipLabel,children:b.label}),b.items.map(H=>t.jsxs("div",{className:xn.tooltipRow,children:[t.jsx("span",{className:xn.tooltipDot,style:{background:H.color}}),t.jsx("span",{className:xn.tooltipSeries,children:H.series}),t.jsxs("span",{className:xn.tooltipValue,children:[Ch(H.value),y]})]},H.series))]})]})});sb.displayName="LineChart";const ib="_root_3tq2n_5",ab="_chartWrap_3tq2n_14",lb="_svg_3tq2n_18",cb="_centerText_3tq2n_23",db="_statLegend_3tq2n_31",ub="_statItem_3tq2n_37",pb="_statBar_3tq2n_44",fb="_statText_3tq2n_50",hb="_statValue_3tq2n_56",mb="_statLabel_3tq2n_65",gb="_listLegend_3tq2n_72",xb="_legendItem_3tq2n_79",vb="_legendDot_3tq2n_85",yb="_legendLabel_3tq2n_92",wb="_legendValue_3tq2n_99",jb="_tooltip_3tq2n_107",bb="_tooltipLabel_3tq2n_118",kb="_tooltipValue_3tq2n_124",zt={root:ib,chartWrap:ab,svg:lb,centerText:cb,statLegend:db,statItem:ub,statBar:pb,statText:fb,statValue:hb,statLabel:mb,listLegend:gb,legendItem:xb,legendDot:vb,legendLabel:yb,legendValue:wb,tooltip:jb,tooltipLabel:bb,tooltipValue:kb},Sh=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],_b=x.forwardRef(({segments:r,innerRadius:s=60,size:i=200,showLegend:l=!0,legendVariant:c="list",unit:p="%",centerLabel:f,className:y,...g},w)=>{const[v,_]=x.useState({visible:!1,x:0,y:0,label:"",value:""}),b=r.map(($,F)=>$.color??Sh[F%Sh.length]),L=r.reduce(($,F)=>$+F.value,0),E=i/2,I=i/2,N=i*.15,C=(i-N)/2-2,A=2*Math.PI*C;let k=-A/4;const j=r.map(($,F)=>{const B=(L>0?$.value/L:0)*A,ie=`${B} ${A-B}`,ce=-k;return k+=B,{dashArray:ie,dashOffset:ce,color:b[F],...$}});return t.jsxs("div",{ref:w,className:Q(zt.root,y),...g,children:[t.jsx("div",{className:zt.chartWrap,children:t.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:zt.svg,children:[t.jsx("circle",{cx:E,cy:I,r:C,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:N}),j.map(($,F)=>t.jsx("circle",{cx:E,cy:I,r:C,fill:"none",stroke:$.color,strokeWidth:N,strokeDasharray:$.dashArray,strokeDashoffset:$.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:z=>{const B=L>0?Math.round($.value/L*100):0;_({visible:!0,x:z.clientX+12,y:z.clientY-8,label:$.label,value:`${B}${p}`})},onMouseLeave:()=>_(z=>({...z,visible:!1}))},F)),f&&s>0&&t.jsx("text",{x:E,y:I+6,textAnchor:"middle",className:zt.centerText,children:f})]})}),l&&c==="stat"&&t.jsx("div",{className:zt.statLegend,children:r.map(($,F)=>{const z=L>0?Math.round($.value/L*100):0;return t.jsxs("div",{className:zt.statItem,children:[t.jsx("span",{className:zt.statBar,style:{background:b[F]}}),t.jsxs("div",{className:zt.statText,children:[t.jsxs("span",{className:zt.statValue,children:[z,p]}),t.jsx("span",{className:zt.statLabel,children:$.label})]})]},$.label)})}),l&&c==="list"&&t.jsx("div",{className:zt.listLegend,children:r.map(($,F)=>{const z=L>0?Math.round($.value/L*100):0;return t.jsxs("div",{className:zt.legendItem,children:[t.jsx("span",{className:zt.legendDot,style:{background:b[F]}}),t.jsx("span",{className:zt.legendLabel,children:$.label}),t.jsxs("span",{className:zt.legendValue,children:[z,p]})]},$.label)})}),v.visible&&t.jsxs("div",{className:zt.tooltip,style:{left:v.x,top:v.y},children:[t.jsx("div",{className:zt.tooltipLabel,children:v.label}),t.jsx("div",{className:zt.tooltipValue,children:v.value})]})]})});_b.displayName="DonutChart";const Cb="_root_bqpf6_5",Sb="_svgWrap_bqpf6_10",Mb="_svg_bqpf6_10",Ib="_axisLabel_bqpf6_19",Nb="_tooltip_bqpf6_25",gs={root:Cb,svgWrap:Sb,svg:Mb,axisLabel:Ib,tooltip:Nb};function Lb(r){return r<.35?"var(--Alloy-green-100)":r<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const Ab=x.forwardRef(({cells:r,rows:s,cols:i,colorScale:l=Lb,cellRadius:c=4,cellGap:p=4,showTooltip:f=!0,className:y,...g},w)=>{const[v,_]=x.useState({visible:!1,x:0,y:0,content:""}),b=x.useRef(null),[L,E]=x.useState(540);x.useEffect(()=>{const F=b.current;if(!F)return;const z=new ResizeObserver(ie=>{var ee;const ce=(ee=ie[0])==null?void 0:ee.contentRect.width;ce>0&&E(Math.floor(ce))});z.observe(F);const B=Math.floor(F.getBoundingClientRect().width);return B>0&&E(B),()=>z.disconnect()},[]);const I=32,N=16,C=L,A=C-I-p,k=Math.max(4,(A-(i.length-1)*p)/i.length),j=s.length*(N+p)+p+24,$=new Map;return r.forEach(F=>$.set(`${F.row}__${F.col}`,F)),t.jsxs("div",{ref:w,className:Q(gs.root,y),...g,children:[t.jsx("div",{ref:b,className:gs.svgWrap,children:t.jsxs("svg",{width:C,height:j,viewBox:`0 0 ${C} ${j}`,className:gs.svg,onMouseLeave:()=>_(F=>({...F,visible:!1})),children:[i.map((F,z)=>{const B=I+p+z*(k+p)+k/2;return t.jsx("text",{x:B,y:12,className:gs.axisLabel,textAnchor:"middle",children:F},F)}),s.map((F,z)=>{const B=24+z*(N+p);return t.jsxs("g",{children:[t.jsx("text",{x:I-4,y:B+N/2+4,className:gs.axisLabel,textAnchor:"end",children:F}),i.map((ie,ce)=>{const ee=$.get(`${F}__${ie}`),Y=(ee==null?void 0:ee.value)??0,X=l(Y),ve=I+p+ce*(k+p);return t.jsx("rect",{x:ve,y:B,width:k,height:N,rx:c,fill:X,style:{cursor:"pointer"},onMouseEnter:K=>{if(!f)return;const q=(ee==null?void 0:ee.label)??`${F} / ${ie}: ${Math.round(Y*100)}%`;_({visible:!0,x:K.clientX+12,y:K.clientY-8,content:q})},onMouseLeave:()=>_(K=>({...K,visible:!1}))},ie)})]},F)})]})}),v.visible&&t.jsx("div",{className:gs.tooltip,style:{left:v.x,top:v.y},children:v.content})]})});Ab.displayName="HeatMap";const Tb="_root_18572_6",Eb="_gridWrap_18572_14",$b="_grid_18572_14",Pb="_cell_18572_27",Rb="_legend_18572_33",Db="_legendSquare_18572_43",zb="_tooltip_18572_49",Ur={root:Tb,gridWrap:Eb,grid:$b,cell:Pb,legend:Rb,legendSquare:Db,tooltip:zb},Fb=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function Bb(r,s){if(r<=0)return 0;const i=r/Math.max(1,s);return i<=.25?1:i<=.5?2:i<=.75?3:4}const Ob=x.forwardRef(({days:r,levelColors:s=Fb,cellSize:i=14,cellGap:l=3,cellRadius:c=2,fillWidth:p=!1,showLegend:f=!0,maxCount:y,formatTooltip:g,ariaLabel:w,className:v,..._},b)=>{const[L,E]=x.useState({visible:!1,x:0,y:0,content:""}),I=y??Math.max(1,...r.map(k=>k.count)),N=[];for(let k=0;k<r.length;k+=7)N.push(r.slice(k,k+7));const C=p?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${N.length}, minmax(0, 1fr))`,gap:`${l}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${l}px`},A=p?"100%":i;return t.jsxs("div",{ref:b,className:Q(Ur.root,v),..._,children:[t.jsx("div",{className:Ur.gridWrap,children:t.jsx("div",{role:"img","aria-label":w??`Activity heatmap with max ${I} on the busiest day`,className:Ur.grid,style:C,onMouseLeave:()=>E(k=>({...k,visible:!1})),children:N.map((k,j)=>Array.from({length:7},($,F)=>{const z=k[F];if(!z)return t.jsx("span",{className:Ur.cell,style:{width:i,height:i,borderRadius:c,background:s[0]}},`${j}-${F}`);const B=Bb(z.count,I),ie=g?g(z,B):`${z.label??z.date}: ${z.count} activation${z.count===1?"":"s"}`;return t.jsx("span",{className:Ur.cell,style:{width:A,height:i,borderRadius:c,background:s[B]},onMouseMove:ce=>E({visible:!0,x:ce.clientX,y:ce.clientY,content:ie}),onMouseLeave:()=>E(ce=>({...ce,visible:!1}))},`${j}-${F}`)}))})}),f&&t.jsxs("div",{className:Ur.legend,children:[t.jsx("span",{children:"Less"}),[0,1,2,3,4].map(k=>t.jsx("span",{className:Ur.legendSquare,style:{background:s[k],borderRadius:c}},k)),t.jsx("span",{children:"More"})]}),L.visible&&t.jsx("div",{className:Ur.tooltip,style:{left:L.x,top:L.y},children:L.content})]})});Ob.displayName="ActivityHeatMap";const Hb="_root_14edh_5",Wb="_track_14edh_17",Ub="_segment_14edh_28",Vb="_legend_14edh_49",Gb="_legendRow_14edh_58",qb="_legendDot_14edh_68",Zb="_legendLabel_14edh_74",Yb="_legendValue_14edh_78",Kb="_tooltip_14edh_84",Qb="_tooltipLabel_14edh_100",Xb="_tooltipValueRow_14edh_105",Jb="_tooltipDot_14edh_114",Sn={root:Hb,track:Wb,segment:Ub,legend:Vb,legendRow:Gb,legendDot:qb,legendLabel:Zb,legendValue:Yb,tooltip:Kb,tooltipLabel:Qb,tooltipValueRow:Xb,tooltipDot:Jb},ek=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],xs={r:140,g:79,b:226},eu={r:68,g:108,b:255};function Mh(r){const s=Math.max(0,Math.min(100,r))/100,i=Math.round(xs.r+(eu.r-xs.r)*s),l=Math.round(xs.g+(eu.g-xs.g)*s),c=Math.round(xs.b+(eu.b-xs.b)*s);return`rgb(${i}, ${l}, ${c})`}const tk=x.forwardRef(({segments:r,colors:s=ek,aiGradient:i=!1,height:l,showLegend:c=!1,flat:p=!1,ariaLabel:f,className:y,...g},w)=>{const[v,_]=x.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),b=r.reduce((N,C)=>N+Math.max(0,C.value),0);let L=0;const E=r.map((N,C)=>{const A=Math.max(0,N.value),k=b>0?A/b*100:0,j=b>0?L/b*100:0;L+=A;const $=b>0?L/b*100:0,F=N.color??s[C%s.length],z=p?!0:N.emphasized??C===0;return{...N,pct:k,startPct:j,endPct:$,color:F,emphasized:z}}),I=l!==void 0?{height:typeof l=="number"?`${l}px`:l}:void 0;return t.jsxs("div",{ref:w,className:Q(Sn.root,y),...g,children:[t.jsx("div",{role:"img","aria-label":f??`Ratio bar: ${r.map(N=>`${N.label} ${N.value}`).join(", ")}`,className:Sn.track,style:I,onMouseLeave:()=>_(N=>({...N,visible:!1})),children:E.map(N=>{const C=i?`linear-gradient(to right, ${Mh(N.startPct)}, ${Mh(N.endPct)})`:N.color;return t.jsx("span",{className:Sn.segment,"data-emphasized":N.emphasized||void 0,"data-ai":i||void 0,style:{width:`${N.pct}%`,background:C,"--ratio-hover-bg":N.color},onMouseMove:A=>_({visible:!0,x:A.clientX,y:A.clientY,label:N.label,value:N.value,color:N.color})},N.label)})}),c&&t.jsx("ul",{className:Sn.legend,children:E.map(N=>t.jsxs("li",{className:Sn.legendRow,children:[t.jsx("span",{className:Sn.legendDot,style:{background:N.color}}),t.jsx("span",{className:Sn.legendLabel,children:N.label}),t.jsx("span",{className:Sn.legendValue,children:N.value.toLocaleString("en-US")})]},N.label))}),v.visible&&t.jsxs("div",{className:Sn.tooltip,style:{left:v.x,top:v.y},children:[t.jsx("span",{className:Sn.tooltipLabel,children:v.label}),t.jsxs("span",{className:Sn.tooltipValueRow,children:[t.jsx("span",{className:Sn.tooltipDot,style:{background:v.color}}),v.value.toLocaleString("en-US")]})]})]})});tk.displayName="RatioBar";const nk="_track_1wmly_6",rk="_fill_1wmly_12",Ih={track:nk,fill:rk},ok=x.forwardRef(({value:r,max:s=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:l="var(--color-bg-tertiary)",gapColor:c="var(--color-bg-primary)",stripeWidth:p=2,stripeGap:f=1,height:y=12,ariaLabel:g,className:w,style:v,..._},b)=>{const L=p+f,E=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${p}px,
      ${c} ${p}px,
      ${c} ${L}px
    )`,I=Math.max(0,Math.min(s,r)),N=s>0?I/s*100:0;return t.jsx("div",{ref:b,role:"progressbar","aria-label":g??`Progress: ${Math.round(N)}%`,"aria-valuemin":0,"aria-valuemax":s,"aria-valuenow":I,className:Q(Ih.track,w),style:{height:y,background:`${E}, ${l}`,...v},..._,children:t.jsx("div",{className:Ih.fill,style:{width:`${N}%`,background:`${E}, ${i}`}})})});ok.displayName="StripedBar";const sk=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],ik=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function Nh(r,s="to right"){const i=r.map(({color:l,position:c})=>`${l} ${c}`).join(", ");return`linear-gradient(${s}, ${i})`}Nh(sk),Nh(ik);const ak="48px",lk="240px",Lh="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",ck=h.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${r=>r.$isExpanded?lk:ak};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${r=>r.$isExpanded?Mo`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Mo`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${r=>r.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,dk=h.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${r=>r.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${r=>r.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,uk=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,pk=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,fk=h.button`
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
`,hk=h.div`
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
`,mk=h.span`
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
`,Ah=h.div`
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
`,tu=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,gk="var(--gradient-ai)",rg=h.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${r=>r.$isActive&&!r.$isAi&&Mo`
      background: var(--color-bg-primary, white);
      box-shadow: ${Lh}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${r=>r.$isActive&&r.$isAi&&Mo`
      background: ${gk};
      box-shadow: ${Lh}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,og=h.button`
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
`,sg=h.span`
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
`,ig=h.div`
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
`,xk=h.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,nu=h.hr`
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
`;const vk=h.button`
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
`,yk=h.div`
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
`,wk=h.span`
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
`;function jk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function bk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function kk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function _k({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function Ck({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function Sk({size:r=16}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),t.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),t.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Mk({size:r=16}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function Ik({size:r=16}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),t.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Nk({size:r=16}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Lk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function Ak({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function Tk({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function Ek({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function $k({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function Th({size:r=16}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function ru({item:r,isExpanded:s,showNewBadge:i,isAi:l}){const c=r.isActive??!1;return t.jsx(rg,{$isActive:c,$isAi:l,children:t.jsxs(og,{$isActive:c,$isAiActive:c&&!!l,onClick:r.onClick,"aria-current":c?"page":void 0,title:s?void 0:r.label,children:[t.jsxs(ig,{children:[r.hasUnread&&t.jsx(xk,{}),c&&r.activeIcon?r.activeIcon:r.icon]}),s&&t.jsx(sg,{children:r.label}),s&&i&&t.jsx(Bi,{variant:"primary",children:"New"})]})})}function Pk({items:r,toolItems:s=[],bottomItems:i=[],workspace:l,user:c,onWorkspaceClick:p,onUserClick:f,onSettingsClick:y,newItemId:g,aiItemId:w}){const[v,_]=x.useState(!1);return t.jsx(ck,{$isExpanded:v,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),"aria-label":"Primary navigation",children:t.jsxs(dk,{$isExpanded:v,children:[t.jsxs(uk,{children:[t.jsxs(fk,{$isExpanded:v,onClick:p,"aria-label":`Workspace: ${l.name}`,title:v?void 0:l.name,children:[t.jsx(hk,{children:l.logoUrl?t.jsx("img",{src:l.logoUrl,alt:l.name}):l.initial??l.name.charAt(0).toUpperCase()}),v&&t.jsxs(t.Fragment,{children:[t.jsx(mk,{children:l.name}),t.jsx(Ah,{children:t.jsx(Th,{})})]})]}),t.jsx(tu,{children:r.map(b=>t.jsx(ru,{item:b,isExpanded:v,isAi:b.id===w},b.id))}),s.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(nu,{}),t.jsx(tu,{children:s.map(b=>t.jsx(ru,{item:b,isExpanded:v,showNewBadge:b.id===g,isAi:b.id===w},b.id))})]})]}),t.jsxs(pk,{children:[i.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(nu,{}),t.jsx(tu,{children:i.map(b=>t.jsx(ru,{item:b,isExpanded:v,isAi:b.id===w},b.id))})]}),t.jsx(nu,{}),t.jsx(rg,{$isActive:!1,children:t.jsxs(og,{$isActive:!1,onClick:y,"aria-label":"Settings",title:v?void 0:"Settings",children:[t.jsx(ig,{children:t.jsx($k,{})}),v&&t.jsx(sg,{children:"Settings"})]})}),t.jsxs(vk,{$isExpanded:v,onClick:f,"aria-label":`User: ${c.name}`,title:v?void 0:c.name,children:[t.jsx(yk,{$color:c.avatarColor,children:c.initials}),v&&t.jsxs(t.Fragment,{children:[t.jsx(wk,{children:c.name}),t.jsx(Ah,{children:t.jsx(Th,{})})]})]})]})]})})}const Rk=270,Dk=h.nav`
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
`,zk=h.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,Fk=h.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,Bk=h.h2`
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
`,Ok=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,Hk=h.div`
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
`,Wk=h.button`
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
`,Uk=h.div`
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
`,Vk=h.button`
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
`,Gk=h.div`
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
`,qk=h.span`
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
`,Zk=h.div`
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
`,Yk=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 32px;
`,Kk=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Qk=h.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 8px 2px;
`,Xk=h.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Jk=h.div`
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
`,e_=h.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,t_=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,ag=h.div`
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
`;function Pi(){return t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function n_(){return t.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Yu={"--li-min-height":"32px","--li-py":"0px","--li-px":"0px","--li-gap":"4px",borderRadius:"6px",paddingRight:"8px",borderBottom:"none"};function r_({item:r}){return t.jsx(_r,{label:t.jsx("span",{style:{color:"var(--color-content-tertiary, #475569)",letterSpacing:"-0.084px"},children:r.label}),leadingSlot:t.jsx(ag,{children:r.icon??t.jsx(Pi,{})}),selected:r.isActive,onClick:r.onClick,divider:!1,size:"md","aria-current":r.isActive?"page":void 0,style:Yu})}function o_({group:r}){const[s,i]=x.useState(r.defaultExpanded??!0);return t.jsxs(Kk,{children:[t.jsxs(Vk,{onClick:()=>i(l=>!l),"aria-expanded":s,children:[t.jsx(Gk,{children:r.icon??t.jsx(Pi,{})}),t.jsx(qk,{children:r.label}),r.trailingBadge&&t.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:r.trailingBadge}),t.jsx(Zk,{$expanded:s,children:t.jsx(En,{size:16})})]}),s&&t.jsx(Yk,{children:r.children.map(l=>t.jsx(_r,{label:t.jsx("span",{style:{color:"var(--color-content-tertiary, #475569)",letterSpacing:"-0.084px"},children:l.label}),leadingSlot:t.jsx(ag,{children:l.icon??null}),trailingSlot:l.trailingSlot,selected:l.isActive,onClick:l.onClick,divider:!1,size:"md","aria-current":l.isActive?"page":void 0,style:Yu},l.id))})]})}function s_({heading:r,isVisible:s,menuEntries:i=[],pageEntries:l=[],showSearch:c=!0,searchValue:p="",onSearchChange:f,onHeaderAction1:y,onHeaderAction2:g,onFilterClick:w,headerSlot:v,bodyContent:_,width:b=Rk,onWidthChange:L,minWidth:E=220,maxWidth:I=520}){const N=_!==void 0,C=x.useRef(null),[A,k]=x.useState(!1);return x.useEffect(()=>{if(!A||!L)return;const j=C.current;if(!j)return;const $=j.getBoundingClientRect().left,F=ie=>{const ce=Math.min(I,Math.max(E,ie.clientX-$));L(ce)},z=()=>k(!1);window.addEventListener("mousemove",F),window.addEventListener("mouseup",z);const B=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",z),document.body.style.userSelect=B,document.body.style.cursor=""}},[A,L,E,I]),t.jsxs(Dk,{ref:C,$isVisible:s,$width:b,$isResizing:A,"aria-label":"Secondary navigation",children:[t.jsxs(zk,{children:[t.jsxs(Fk,{children:[t.jsx(Bk,{children:r}),v??t.jsxs(Ok,{children:[t.jsx(Oe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:y,"aria-label":"Action",children:t.jsx(Pi,{})}),t.jsx(Oe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:g,"aria-label":"Action",children:t.jsx(Pi,{})})]})]}),c&&!N&&t.jsxs(Hk,{children:[t.jsx(ql,{size:"sm",placeholder:"Search...",value:p,onChange:j=>f==null?void 0:f(j.target.value)}),t.jsx(Wk,{onClick:w,"aria-label":"Filter",children:t.jsx(n_,{})})]})]}),N?_:t.jsx(Uk,{children:i.map(j=>j.type==="single"?t.jsx(r_,{item:j.item},j.item.id):j.type==="group"?t.jsx(o_,{group:j.group},j.group.id):t.jsx(Qk,{children:j.label.label},j.label.id))}),l.length>0&&t.jsxs(Xk,{children:[t.jsx(e_,{}),l.map(j=>t.jsx(_r,{label:t.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:j.label}),leadingSlot:t.jsx(t_,{children:j.icon??t.jsx(Pi,{})}),onClick:j.onClick,selected:j.isActive??!1,divider:!1,size:"md","aria-current":j.isActive?"page":void 0,style:Yu},j.id))]}),L&&s&&t.jsx(Jk,{$isResizing:A,onMouseDown:j=>{j.preventDefault(),k(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const i_=h.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:r})=>r?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,a_=h.div`
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
`,Ii=h.div`
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
`,l_=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,c_=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function d_(){return t.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),t.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),t.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function Eh(){return t.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function $h(){return t.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function u_(){return t.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function p_({heading:r,actions:s=[],showActivityButton:i=!0,showPonderButton:l=!0,noBorder:c=!1,onActivityClick:p,onPonderClick:f,onDotsClick:y}){const g=s.filter(v=>v.variant==="secondary"),w=s.filter(v=>v.variant==="primary");return t.jsxs(i_,{$noBorder:c,children:[t.jsx(a_,{children:typeof r=="string"?t.jsx(Ii,{children:r}):r}),t.jsxs(l_,{children:[t.jsxs(c_,{children:[t.jsx(Oe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:y,"aria-label":"More options",title:"More options",children:t.jsx(d_,{})}),g.map(v=>t.jsx(Oe,{variant:"secondary",size:"sm",leadingArtwork:t.jsx($h,{}),trailingArtwork:t.jsx(Eh,{}),onClick:v.onClick,children:v.label},v.id)),w.map(v=>t.jsx(Oe,{variant:"primary",size:"sm",leadingArtwork:t.jsx($h,{}),trailingArtwork:t.jsx(Eh,{}),onClick:v.onClick,children:v.label},v.id))]}),i&&t.jsx(Oe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:p,"aria-label":"Activity",title:"Activity",children:t.jsx(u_,{})}),l&&t.jsx(pm,{onClick:f,"aria-label":"Ponder AI"})]})]})}const f_=h.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,h_=h.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,m_=h.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,g_=h.main`
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
`,Ph="tb:secondary-nav-width",Rh=270,Dh=220,zh=520;function x_({items:r,toolItems:s,bottomItems:i,workspace:l,user:c,onWorkspaceClick:p,onUserClick:f,onSettingsClick:y,newItemId:g,aiItemId:w,secNavHeading:v,menuEntries:_,pageEntries:b,showSearch:L,searchValue:E,onSearchChange:I,onHeaderAction1:N,onHeaderAction2:C,onFilterClick:A,headerSlot:k,bodyContent:j,heading:$,actions:F,showActivityButton:z,showPonderButton:B,noBorder:ie,onActivityClick:ce,onPonderClick:ee,onDotsClick:Y,children:X,showSecondaryNav:ve=!0}){const[K,q]=x.useState(()=>{if(typeof window>"u")return Rh;const J=window.localStorage.getItem(Ph),G=J?parseInt(J,10):NaN;return Number.isFinite(G)?Math.min(zh,Math.max(Dh,G)):Rh});return x.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Ph,String(K))},[K]),t.jsxs(f_,{children:[t.jsx(Pk,{items:r,toolItems:s,bottomItems:i,workspace:l,user:c,onWorkspaceClick:p,onUserClick:f,onSettingsClick:y,newItemId:g,aiItemId:w}),t.jsxs(h_,{children:[ve&&t.jsx(s_,{heading:v,menuEntries:_,pageEntries:b,isVisible:!0,showSearch:L,searchValue:E,onSearchChange:I,onHeaderAction1:N,onHeaderAction2:C,onFilterClick:A,headerSlot:k,bodyContent:j,width:K,onWidthChange:q,minWidth:Dh,maxWidth:zh}),t.jsxs(m_,{children:[t.jsx(p_,{heading:$,actions:F,showActivityButton:z,showPonderButton:B,noBorder:ie,onActivityClick:ce,onPonderClick:ee,onDotsClick:Y}),t.jsx(g_,{children:X})]})]})]})}function v_({deadZonePx:r=8,topThresholdPx:s=20,target:i}={}){const[l,c]=x.useState(null),p=x.useRef(0);return x.useEffect(()=>{var w;const f=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;p.current=f();const y=()=>{const v=f(),_=v-p.current;Math.abs(_)<r||(_>0&&v>s?c("down"):_<0&&c("up"),p.current=v)},g=i??(typeof window<"u"?window:{});return(w=g.addEventListener)==null||w.call(g,"scroll",y,{passive:!0}),()=>{var v;(v=g.removeEventListener)==null||v.call(g,"scroll",y)}},[r,s,i]),l}const y_=h.button`
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
`,w_=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,j_=h.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function ou({label:r,isOpen:s,onClick:i,ariaLabel:l}){return t.jsxs(y_,{type:"button",$active:s,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!s,"aria-label":l,children:[t.jsx(w_,{children:r}),t.jsx(j_,{children:t.jsx(En,{size:14})})]})}const b_=h.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${r=>r.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,k_=h.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,Fh=h.button`
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
`,__=h.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,Bh=h.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,C_=h.button`
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
`;function S_({size:r=18}){return t.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const M_=x.forwardRef(function({primaryLabel:s,secondaryLabel:i,tertiaryLabel:l,openOverlay:c,user:p,hidden:f,onHamburgerClick:y,onPrimaryClick:g,onSecondaryClick:w,onTertiaryClick:v,onSearchClick:_,onUserClick:b},L){return t.jsx(b_,{ref:L,$hidden:f,children:t.jsxs(k_,{children:[t.jsx(Fh,{onClick:y,"aria-label":"Open navigation",children:t.jsx(S_,{size:18})}),t.jsxs(__,{children:[t.jsx(ou,{label:s,isOpen:c==="primary",onClick:g,ariaLabel:"Choose a module"}),i&&t.jsxs(t.Fragment,{children:[t.jsx(Bh,{"aria-hidden":"true",children:"›"}),t.jsx(ou,{label:i,isOpen:c==="secondary",onClick:w,ariaLabel:"Choose a section"})]}),l&&t.jsxs(t.Fragment,{children:[t.jsx(Bh,{"aria-hidden":"true",children:"›"}),t.jsx(ou,{label:l,isOpen:c==="persona",onClick:v??(()=>{}),ariaLabel:"Choose a persona"})]})]}),t.jsx(Fh,{onClick:_,"aria-label":"Search",children:t.jsx(Gu,{size:18})}),t.jsx(C_,{onClick:b,$color:p.avatarColor,"aria-label":`User: ${p.name}`,children:p.initials})]})})}),I_=Bu`
  from { opacity: 0; }
  to { opacity: 1; }
`,N_=h.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${I_} 160ms ease-out;
`;function L_({onDismiss:r}){return x.useEffect(()=>{const s=l=>{l.key==="Escape"&&r()};window.addEventListener("keydown",s);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s),document.body.style.overflow=i}},[r]),t.jsx(N_,{onClick:r,"aria-hidden":"true"})}const A_=Bu`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,T_=h.div`
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
  animation: ${A_} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,E_=h.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,$_=h.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,P_=h.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,R_=h.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function Ku({title:r,children:s,ariaLabel:i}){return t.jsxs(T_,{role:"dialog","aria-modal":"true","aria-label":i??r,children:[t.jsx(E_,{children:t.jsx($_,{"aria-hidden":"true"})}),r&&t.jsx(P_,{children:r}),t.jsx(R_,{children:s})]})}const Jl=h.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,Oi=h.div`
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
`,_s=h.span`
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
`;function D_({activeId:r,groups:s,onSelect:i}){return t.jsx(Ku,{title:"Modules",ariaLabel:"Choose a module",children:t.jsx(Jl,{children:s.map((l,c)=>t.jsxs("div",{children:[c>0&&t.jsx(Oi,{children:l.label}),c===0&&t.jsx(Oi,{children:l.label}),l.items.map(p=>{const f=p.id===r;return t.jsxs(bo,{$active:f,onClick:()=>i(p.id),"aria-pressed":f,children:[t.jsx(_s,{children:p.icon}),t.jsx(ko,{children:p.label}),f&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},p.id)})]},l.id))})})}function z_({moduleLabel:r,entries:s,onSelect:i}){return t.jsx(Ku,{title:r,ariaLabel:`${r} sections`,children:t.jsx(Jl,{children:s.map((l,c)=>{if(l.type==="single"){const f=l.item;return t.jsxs(bo,{$active:f.isActive,onClick:()=>{var y;(y=f.onClick)==null||y.call(f),i()},"aria-pressed":!!f.isActive,children:[t.jsx(_s,{children:f.icon}),t.jsx(ko,{children:f.label}),f.isActive&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},f.id)}const p=l.group;return t.jsxs("div",{children:[t.jsx(Oi,{children:p.label}),p.children.map(f=>t.jsxs(bo,{$active:f.isActive,$indent:!0,onClick:()=>{var y;(y=f.onClick)==null||y.call(f),i()},"aria-pressed":!!f.isActive,children:[t.jsx(_s,{children:f.icon}),t.jsx(ko,{children:f.label}),f.isActive&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},f.id))]},p.id)})})})}const F_=h.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,B_=h.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,O_=h.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function H_({personas:r,activeId:s,onSelect:i}){return t.jsx(Ku,{title:"Personas",ariaLabel:"Choose a persona",children:t.jsx(Jl,{children:r.map(l=>{const c=l.id===s;return t.jsxs(bo,{$active:c,onClick:()=>i(l.id),"aria-pressed":c,children:[t.jsx(ko,{as:"span",children:t.jsxs(F_,{children:[t.jsx(B_,{children:l.name}),t.jsx(O_,{children:l.role})]})}),c&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},l.id)})})})}const W_=Bu`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,U_=h.aside`
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
  animation: ${W_} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,V_=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,G_=h.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,q_=h.button`
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
`,Z_=h.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,Y_=60;function K_({title:r,onDismiss:s,children:i}){const l=x.useRef(null),c=x.useRef(null);return x.useEffect(()=>{const p=l.current;if(!p)return;const f=g=>{const w=g.touches[0];c.current={x:w.clientX,y:w.clientY}},y=g=>{if(!c.current)return;const w=g.changedTouches[0],v=w.clientX-c.current.x,_=w.clientY-c.current.y;c.current=null,v<-60&&Math.abs(_)<Y_&&s()};return p.addEventListener("touchstart",f,{passive:!0}),p.addEventListener("touchend",y),()=>{p.removeEventListener("touchstart",f),p.removeEventListener("touchend",y)}},[s]),t.jsxs(U_,{ref:l,role:"dialog","aria-modal":"true","aria-label":r??"Navigation",children:[t.jsxs(V_,{children:[t.jsx(G_,{children:r??"Navigation"}),t.jsx(q_,{onClick:s,"aria-label":"Close navigation",children:t.jsx(Es,{size:18})})]}),t.jsx(Z_,{children:i})]})}function Q_({activeId:r,groups:s,currentMenuEntries:i,onSelectModule:l,onDismiss:c}){return t.jsx(K_,{title:"Navigation",onDismiss:c,children:t.jsx(Jl,{children:s.map(p=>t.jsxs("div",{children:[t.jsx(Oi,{children:p.label}),p.items.map(f=>{const y=f.id===r;return t.jsxs("div",{children:[t.jsxs(bo,{$active:y,onClick:()=>{l(f.id),c()},"aria-pressed":y,children:[t.jsx(_s,{children:f.icon}),t.jsx(ko,{children:f.label}),y&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]}),y&&i.length>0&&t.jsx("div",{children:i.map(g=>{if(g.type==="single"){const v=g.item;return t.jsxs(bo,{$active:v.isActive,$indent:!0,onClick:()=>{var _;(_=v.onClick)==null||_.call(v),c()},"aria-pressed":!!v.isActive,children:[t.jsx(_s,{children:v.icon}),t.jsx(ko,{children:v.label}),v.isActive&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},v.id)}const w=g.group;return t.jsxs("div",{children:[t.jsx(Oi,{children:w.label}),w.children.map(v=>t.jsxs(bo,{$active:v.isActive,$indent:!0,onClick:()=>{var _;(_=v.onClick)==null||_.call(v),c()},"aria-pressed":!!v.isActive,children:[t.jsx(_s,{children:v.icon}),t.jsx(ko,{children:v.label}),v.isActive&&t.jsx(_o,{"aria-hidden":"true",children:t.jsx(br,{size:16})})]},v.id))]},w.id)})})]},f.id)})]},p.id))})})}const kr=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],X_=h.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,J_=h.main`
  flex: 1 1 auto;
  min-width: 0;
`;function eC(r){const{activeId:s,selectedPersonaId:i,moduleGroups:l,primaryLabel:c,secondaryLabel:p,menuEntries:f,user:y,onUserClick:g,onMobileNavigate:w,onSelectPersona:v,children:_}=r,[b,L]=x.useState(null),E=v_({deadZonePx:8,topThresholdPx:20}),I=b===null&&E==="down",N=x.useMemo(()=>{if(!i)return null;const j=kr.find($=>$.id===i);return(j==null?void 0:j.name)??null},[i]),C=()=>L(null),A=j=>L(j),k=b!==null;return t.jsxs(X_,{children:[t.jsx(M_,{primaryLabel:c,secondaryLabel:p,tertiaryLabel:N,openOverlay:b,user:y,hidden:I,onHamburgerClick:()=>A("drawer"),onPrimaryClick:()=>A("primary"),onSecondaryClick:()=>A("secondary"),onTertiaryClick:N?()=>A("persona"):void 0,onSearchClick:()=>{A("drawer")},onUserClick:()=>g==null?void 0:g()}),t.jsx(J_,{children:_}),k&&t.jsx(L_,{onDismiss:C}),b==="primary"&&t.jsx(D_,{activeId:s,groups:l,onSelect:j=>{w(j),C()}}),b==="secondary"&&t.jsx(z_,{moduleLabel:c,entries:f,onSelect:C}),b==="persona"&&t.jsx(H_,{personas:kr,activeId:i,onSelect:j=>{v(j),C()}}),b==="drawer"&&t.jsx(Q_,{activeId:s,groups:l,currentMenuEntries:f,onSelectModule:j=>w(j),onDismiss:C})]})}function tC(r){if(Rv()&&r.mobileNav){const i=r.mobileNav;return t.jsx(eC,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:r.menuEntries,user:r.user,onUserClick:r.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:r.children})}return t.jsx(x_,{...r})}const No=h.div`
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
`,Ao=h.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`,To=h.p`
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
`;function nC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(Ao,{children:"All People"}),t.jsx(To,{children:"Everyone across your workforce"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Total Headcount"}),t.jsx(ot,{children:"166"}),t.jsx(st,{children:"Active workers"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Employees"}),t.jsx(ot,{children:"87"}),t.jsx(st,{children:"Full-time & part-time"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Contractors"}),t.jsx(ot,{children:"24"}),t.jsx(st,{children:"Active engagements"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"New This Month"}),t.jsx(ot,{children:"5"}),t.jsx(st,{children:"Onboarding in progress"})]})]}),t.jsx($o,{children:"Recent People"}),t.jsx(Po,{children:[{name:"Sarah Kim",meta:"Engineering · Joined today",badge:"New",color:"#e8f5e9"},{name:"Jun Park",meta:"Design · Joined Mar 20",badge:"Active",color:"#e3f2fd"},{name:"Alex Torres",meta:"Legal · Contractor",badge:"Contractor",color:void 0},{name:"Maria Santos",meta:"HR · Employee",badge:"Active",color:"#e3f2fd"},{name:"Rahul Dev",meta:"Engineering · Contractor",badge:"Contractor",color:void 0}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function rC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(Ao,{children:"Contractors"}),t.jsx(To,{children:"Independent contractors and freelancers"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Active"}),t.jsx(ot,{children:"24"}),t.jsx(st,{children:"Current engagements"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Expiring Soon"}),t.jsx(ot,{children:"3"}),t.jsx(st,{children:"Within 30 days"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Rate"}),t.jsx(ot,{children:"$95/h"}),t.jsx(st,{children:"Across all contracts"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Pending Invoices"}),t.jsx(ot,{children:"6"}),t.jsx(st,{children:"Awaiting payment"})]})]}),t.jsx($o,{children:"Active Contractors"}),t.jsx(Po,{children:[{name:"Alex Torres",meta:"Legal · Contract ends Apr 30",badge:"Active",color:"#e3f2fd"},{name:"Rahul Dev",meta:"Engineering · Contract ends May 15",badge:"Active",color:"#e3f2fd"},{name:"Studio Nine",meta:"Design · Contract ends Mar 31",badge:"Expiring",color:"#fff8e1"},{name:"Nomad Labs",meta:"Marketing · Contract ends Apr 10",badge:"Active",color:"#e3f2fd"},{name:"Priya Mehta",meta:"Finance · Contract ends Mar 28",badge:"Expiring",color:"#fff8e1"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function oC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(Ao,{children:"Employees"}),t.jsx(To,{children:"Full-time and part-time employees"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Total Employees"}),t.jsx(ot,{children:"87"}),t.jsx(st,{children:"Full-time & part-time"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"On Leave"}),t.jsx(ot,{children:"4"}),t.jsx(st,{children:"Current leave requests"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Open Roles"}),t.jsx(ot,{children:"7"}),t.jsx(st,{children:"Currently recruiting"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Tenure"}),t.jsx(ot,{children:"2.4y"}),t.jsx(st,{children:"Across all employees"})]})]}),t.jsx($o,{children:"Recent Activity"}),t.jsx(Po,{children:[{name:"Sarah Kim",meta:"Engineering · Onboarding",badge:"New hire",color:"#e8f5e9"},{name:"Jun Park",meta:"Design · Active",badge:"Active",color:"#e3f2fd"},{name:"Maria Santos",meta:"HR · On leave",badge:"On leave",color:"#fff8e1"},{name:"David Chen",meta:"Operations · Active",badge:"Active",color:"#e3f2fd"},{name:"Lisa Wong",meta:"Finance · Active",badge:"Active",color:"#e3f2fd"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function sC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(Ao,{children:"Engineering"}),t.jsx(To,{children:"Engineering department overview"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Headcount"}),t.jsx(ot,{children:"32"}),t.jsx(st,{children:"Employees & contractors"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Open Roles"}),t.jsx(ot,{children:"3"}),t.jsx(st,{children:"Backend & platform"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Tenure"}),t.jsx(ot,{children:"2.8y"}),t.jsx(st,{children:"Across the team"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"On Leave"}),t.jsx(ot,{children:"1"}),t.jsx(st,{children:"Returning Apr 7"})]})]}),t.jsx($o,{children:"Team Members"}),t.jsx(Po,{children:[{name:"Sarah Kim",meta:"Software Engineer · New hire",badge:"New",color:"#e8f5e9"},{name:"Rahul Dev",meta:"Senior Engineer · Contractor",badge:"Contractor",color:void 0},{name:"Tom Nguyen",meta:"Tech Lead · Employee",badge:"Active",color:"#e3f2fd"},{name:"Aisha Osei",meta:"Platform Engineer · Employee",badge:"Active",color:"#e3f2fd"},{name:"James Ruiz",meta:"Backend Engineer · On leave",badge:"On leave",color:"#fff8e1"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function iC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(Ao,{children:"Design"}),t.jsx(To,{children:"Design department overview"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Headcount"}),t.jsx(ot,{children:"11"}),t.jsx(st,{children:"Employees & contractors"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Open Roles"}),t.jsx(ot,{children:"1"}),t.jsx(st,{children:"Senior product designer"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Tenure"}),t.jsx(ot,{children:"1.9y"}),t.jsx(st,{children:"Across the team"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"On Leave"}),t.jsx(ot,{children:"0"}),t.jsx(st,{children:"Everyone active"})]})]}),t.jsx($o,{children:"Team Members"}),t.jsx(Po,{children:[{name:"Jun Park",meta:"Product Designer · Employee",badge:"Active",color:"#e3f2fd"},{name:"Studio Nine",meta:"Design Agency · Contractor",badge:"Contractor",color:void 0},{name:"Maria Santos",meta:"UX Researcher · Employee",badge:"Active",color:"#e3f2fd"},{name:"Cleo Barros",meta:"Brand Designer · Employee",badge:"Active",color:"#e3f2fd"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function aC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(Ao,{children:"Marketing"}),t.jsx(To,{children:"Marketing department overview"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Headcount"}),t.jsx(ot,{children:"9"}),t.jsx(st,{children:"Employees & contractors"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Open Roles"}),t.jsx(ot,{children:"1"}),t.jsx(st,{children:"Growth marketer"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Tenure"}),t.jsx(ot,{children:"1.5y"}),t.jsx(st,{children:"Across the team"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Campaigns Active"}),t.jsx(ot,{children:"4"}),t.jsx(st,{children:"This quarter"})]})]}),t.jsx($o,{children:"Team Members"}),t.jsx(Po,{children:[{name:"Nomad Labs",meta:"Content Agency · Contractor",badge:"Contractor",color:void 0},{name:"Elena Voss",meta:"Marketing Manager · Employee",badge:"Active",color:"#e3f2fd"},{name:"Oscar Tran",meta:"Growth · Employee",badge:"Active",color:"#e3f2fd"},{name:"Binta Diallo",meta:"Brand · Employee",badge:"Active",color:"#e3f2fd"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}function lC(){return t.jsxs(No,{children:[t.jsxs(Lo,{children:[t.jsx(Ao,{children:"Operations"}),t.jsx(To,{children:"Operations department overview"})]}),t.jsxs(Eo,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"Headcount"}),t.jsx(ot,{children:"18"}),t.jsx(st,{children:"Employees & contractors"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Open Roles"}),t.jsx(ot,{children:"2"}),t.jsx(st,{children:"Ops & logistics"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"Avg Tenure"}),t.jsx(ot,{children:"3.1y"}),t.jsx(st,{children:"Most tenured dept"})]}),t.jsxs(nt,{children:[t.jsx(rt,{children:"On Leave"}),t.jsx(ot,{children:"1"}),t.jsx(st,{children:"Returning Apr 2"})]})]}),t.jsx($o,{children:"Team Members"}),t.jsx(Po,{children:[{name:"David Chen",meta:"Operations Lead · Employee",badge:"Active",color:"#e3f2fd"},{name:"Fatou Mbaye",meta:"Logistics Manager · Employee",badge:"Active",color:"#e3f2fd"},{name:"Carlos Ibarra",meta:"IT Operations · Employee",badge:"Active",color:"#e3f2fd"},{name:"Ingrid Lund",meta:"Facilities · On leave",badge:"On leave",color:"#fff8e1"}].map(r=>t.jsxs(Ro,{children:[t.jsxs(Do,{children:[t.jsx(zo,{children:r.name}),t.jsx(Fo,{children:r.meta})]}),t.jsx(Bo,{$color:r.color,children:r.badge})]},r.name))})]})}const cC=[{id:"seed-greeting",kind:"assistant",content:"Hi — how can I help with your workspace today?",timestamp:Date.now(),seeded:!0}],dC=h.div`
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
`;function uC(){const[r,s]=x.useState(cC),[i,l]=x.useState(""),[c,p]=x.useState(!1),f=()=>{const g=i.trim();if(!g||c)return;const w={id:`u-${Date.now()}`,kind:"user",content:g,timestamp:Date.now()};s(v=>[...v,w]),l(""),p(!0),window.setTimeout(()=>{const v={id:`a-${Date.now()}`,kind:"assistant",content:"Got it — I'll look into that. (Mock reply: this panel is wired to local state only.)",timestamp:Date.now()};s(_=>[..._,v]),p(!1)},1100)},y=c?"streaming":i.trim().length===0?"hidden":"ready";return t.jsx(dC,{children:t.jsxs(hm,{children:[t.jsxs(gm,{density:"comfortable",padding:"sm",children:[r.map(g=>g.kind==="user"?t.jsx(xm,{label:"You",time:g.timestamp,children:g.content},g.id):g.seeded?t.jsx(bl,{time:g.timestamp,children:g.content},g.id):t.jsxs(x.Fragment,{children:[t.jsxs(bl,{children:[t.jsxs(km,{state:"done",duration:"2s",children:[t.jsx(Ei,{type:"thinking",status:"done",children:"Reading workspace context"}),t.jsx(Ei,{type:"search",status:"done",detail:"3 results",children:"Searching workforce records"}),t.jsx(Ei,{type:"content",status:"done",children:"Composing reply"})]}),g.content]}),t.jsxs(_m,{visibility:"always",align:"start",time:g.timestamp,children:[t.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Copy",children:t.jsx(Km,{size:14})}),t.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response",children:t.jsx(Zm,{size:14})}),t.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response",children:t.jsx(Ym,{size:14})}),t.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Regenerate",children:t.jsx(Xl,{size:14})})]})]},g.id)),t.jsx(bl,{children:t.jsx(Ui,{variant:"gradient-fill",size:"xs",state:c?"loading":"ready"})})]}),t.jsx(mm,{value:i,onChange:l,onSubmit:f,placeholder:"Ask AI anything…","aria-label":"Ask AI",children:t.jsxs(Om,{size:"sm",children:[t.jsx(eg,{state:"idle","aria-label":"Attach"}),t.jsx(tg,{state:"idle","aria-label":"Voice input"}),t.jsx(Jm,{state:y,onSend:f,"aria-label":"Send to AI"})]})})]})})}const pC="/teambridge-module/assets/policy-icon-active-CqCS8_ex.svg",fC="/teambridge-module/assets/automation-icon-active-DlguOjgR.svg",hC="/teambridge-module/assets/marketplace-hero-bg-C1GqhBtg.svg",mC="/teambridge-module/assets/marketplace-hero-bg-dark-C2y1crjg.svg",gC="/teambridge-module/assets/shift-marketplace-l0-FnNJR.png",xC="/teambridge-module/assets/labor-cost-forecasting-DD8TkuU-.png",vC="/teambridge-module/assets/employee-availability-portal-DLFAUBVu.png",yC="/teambridge-module/assets/compliance-monitor-BExpYvGD.png",wC="/teambridge-module/assets/smart-time-clock-Bkyn1Jqj.png",jC="/teambridge-module/assets/recruiting-pipeline-dashboard-DMUDCsYZ.png",bC="/teambridge-module/assets/workforce-messaging-center-CD2jHoXm.png",kC="/teambridge-module/assets/client-staffing-portal-DZemUXpu.png",_C="/teambridge-module/assets/credential-tracker-BfqCrwdu.png",CC="/teambridge-module/assets/performance-insights-dashboard-CuH97YIs.png",Qt=h.div`
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
`,Qu=h.div`
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
`,Xu=h.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--color-content-secondary, #475569);
`,Ju=h.div`
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
`;function Oh(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Home"}),t.jsx(dn,{children:"Overview of your workspace activity"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Active Workers"}),t.jsx(We,{children:"142"}),t.jsx(Re,{children:"Across 6 departments"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Open Tasks"}),t.jsx(We,{children:"38"}),t.jsx(Re,{children:"12 due this week"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Pending Approvals"}),t.jsx(We,{children:"7"}),t.jsx(Re,{children:"Awaiting your review"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Documents"}),t.jsx(We,{children:"94"}),t.jsx(Re,{children:"4 require signatures"})]})]}),t.jsx(Kn,{children:"Recent Activity"}),t.jsxs(ar,{children:[t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Sarah Kim onboarded"}),t.jsx(kt,{children:"Engineering · 2h ago"})]}),t.jsx(gt,{$color:"#e8f5e9",children:"Completed"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Q4 Payroll processed"}),t.jsx(kt,{children:"Finance · 5h ago"})]}),t.jsx(gt,{$color:"#e3f2fd",children:"Processed"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Policy update: PTO 2025"}),t.jsx(kt,{children:"HR · Yesterday"})]}),t.jsx(gt,{children:"Draft"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"NDA — Alex Torres"}),t.jsx(kt,{children:"Legal · 2d ago"})]}),t.jsx(gt,{$color:"#fff8e1",children:"Pending"})]})]})]})}function SC(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Inbox"}),t.jsx(dn,{children:"Notifications and items requiring your attention"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Unread"}),t.jsx(We,{children:"18"}),t.jsx(Re,{children:"Since last visit"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Action Required"}),t.jsx(We,{children:"5"}),t.jsx(Re,{children:"Approvals & reviews"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Mentions"}),t.jsx(We,{children:"3"}),t.jsx(Re,{children:"In documents & tasks"})]})]}),t.jsx(Kn,{children:"Inbox"}),t.jsxs(ar,{children:[t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Payroll approval needed"}),t.jsx(kt,{children:"From Finance · Now"})]}),t.jsx(gt,{$color:"#fce4ec",children:"Action required"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"New hire offer letter ready"}),t.jsx(kt,{children:"From HR · 30m ago"})]}),t.jsx(gt,{$color:"#fce4ec",children:"Action required"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"@mentioned in Policy draft"}),t.jsx(kt,{children:"From Legal · 2h ago"})]}),t.jsx(gt,{$color:"#e3f2fd",children:"Mention"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Task assigned: Q1 review"}),t.jsx(kt,{children:"From Manager · 4h ago"})]}),t.jsx(gt,{children:"New"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"E-Sign complete: NDA"}),t.jsx(kt,{children:"System · Yesterday"})]}),t.jsx(gt,{$color:"#e8f5e9",children:"Complete"})]})]})]})}function MC(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Invoice"}),t.jsx(dn,{children:"Track and manage contractor invoices"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Pending Payment"}),t.jsx(We,{children:"$24.5k"}),t.jsx(Re,{children:"6 invoices"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Paid This Month"}),t.jsx(We,{children:"$88.2k"}),t.jsx(Re,{children:"23 invoices"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Overdue"}),t.jsx(We,{children:"$3.1k"}),t.jsx(Re,{children:"2 invoices"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Disputes"}),t.jsx(We,{children:"1"}),t.jsx(Re,{children:"Awaiting resolution"})]})]}),t.jsx(Kn,{children:"Recent Invoices"}),t.jsxs(ar,{children:[t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"INV-2024-089 · Alex Torres"}),t.jsx(kt,{children:"$4,200 · Due Mar 30"})]}),t.jsx(gt,{$color:"#fff8e1",children:"Pending"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"INV-2024-088 · Rahul Dev"}),t.jsx(kt,{children:"$7,500 · Due Apr 1"})]}),t.jsx(gt,{$color:"#fff8e1",children:"Pending"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"INV-2024-087 · Studio Nine"}),t.jsx(kt,{children:"$12,000 · Paid Mar 20"})]}),t.jsx(gt,{$color:"#e8f5e9",children:"Paid"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"INV-2024-086 · Nomad Labs"}),t.jsx(kt,{children:"$3,100 · Overdue Mar 15"})]}),t.jsx(gt,{$color:"#fce4ec",children:"Overdue"})]})]})]})}function IC(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"AI Home"}),t.jsx(dn,{children:"Your AI-powered workspace assistant"})]}),t.jsxs(Qu,{children:[t.jsx(Xu,{children:"Ask anything about your workforce"}),t.jsx(Ju,{children:"Summarize payroll trends, draft policy updates, answer compliance questions, and more."})]}),t.jsx(Kn,{children:"Suggested Prompts"}),t.jsxs($n,{children:[t.jsx(Pe,{children:t.jsx(Re,{children:'"Summarize headcount changes this quarter"'})}),t.jsx(Pe,{children:t.jsx(Re,{children:'"Draft a remote work policy update"'})}),t.jsx(Pe,{children:t.jsx(Re,{children:'"Which contractors have expiring contracts?"'})}),t.jsx(Pe,{children:t.jsx(Re,{children:'"Show payroll variance vs last month"'})})]})]})}const lg=h(Qt)`
  padding-bottom: var(--space-16, 64px);
`,NC=h(lg)`
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
    background-image: url(${hC});
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
      background-image: url(${mC});
    }
  }
`,LC=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4, 16px);
  padding: var(--space-8, 32px) 0 var(--space-2, 8px);
  text-align: center;
`,AC=h.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl, 2.5rem);
  line-height: var(--line-height-tight, 1.1);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.02em);
  color: var(--color-content-primary);
`,TC=h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
  max-width: 560px;
`,EC=h.div`
  width: 100%;
  max-width: 720px;
  margin: var(--space-3, 12px) auto 0;
  position: relative;
`,$C=h.div`
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
`,PC=h.div`
  padding: var(--space-4, 16px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  color: var(--color-content-tertiary);
  text-align: center;
`,cg=h.div`
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
`,al=h.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  margin: var(--space-8, 32px) auto 0;
  width: 70%;
  max-width: 1280px;

  @media (max-width: 900px) {
    width: 100%;
  }
`,ll=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,cl=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`,su=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1, 4px);
  margin-top: var(--space-1, 4px);
`,dl=h.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-2xl, 1.5rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.01em);
  color: var(--color-content-primary);
`,RC=h.div`
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
`,DC=h(_r)`
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
`,zC=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`,FC=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xl, 1.25rem);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-tertiary);
  text-align: center;
  min-width: 24px;
`,BC=h.div`
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
`,OC=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,HC=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  line-height: var(--line-height-relaxed, 1.45);
  color: var(--color-content-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,WC=h.span`
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
`;const iu=h.div`
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
`,au=h.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: var(--space-4, 16px);
  align-items: flex-start;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg, 14px);
  padding: var(--space-5, 20px);
  cursor: pointer;
  transition:
    background var(--duration-fast, 120ms) var(--ease-default, ease),
    border-color var(--duration-fast, 120ms) var(--ease-default, ease);

  &:hover {
    background: var(--color-bg-tertiary);
    border-color: var(--color-border-hover);
  }

  &:hover [data-role='featured-icon'] > * {
    transform: scale(1.12);
  }
`,lu=h.div`
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg, 16px);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;

  /* Inner shape scales up on card hover for a subtle response. */
  & > * {
    transition: transform var(--duration-slow, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
  }
`,cu=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  min-width: 0;
`,du=h.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`,uu=h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  line-height: var(--line-height-relaxed, 1.45);
  color: var(--color-content-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ws=h.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;function ep({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("circle",{cx:"20",cy:"20",r:"16",fill:r})})}function tp({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("rect",{x:"6",y:"6",width:"28",height:"28",rx:"4",fill:r})})}function Hi({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("path",{d:"M20 5 L36 33 L4 33 Z",fill:r})})}function Ll({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("path",{d:"M20 4 L34 12 L34 28 L20 36 L6 28 L6 12 Z",fill:r})})}function np({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("path",{d:"M20 4 L36 16 L30 34 L10 34 L4 16 Z",fill:r})})}function rp({color:r,size:s=40}){return t.jsxs("svg",{viewBox:"0 0 40 40",width:s,height:s,children:[t.jsxs("g",{fill:r,children:[t.jsx("circle",{cx:"20",cy:"9",r:"6"}),t.jsx("circle",{cx:"31",cy:"20",r:"6"}),t.jsx("circle",{cx:"20",cy:"31",r:"6"}),t.jsx("circle",{cx:"9",cy:"20",r:"6"})]}),t.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#fff"})]})}function op({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("path",{d:"M14 4 L26 4 L36 14 L36 26 L26 36 L14 36 L4 26 L4 14 Z",fill:r})})}function sp({color:r,size:s=40}){return t.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:t.jsx("path",{d:"M20 4 L36 20 L20 36 L4 20 Z",fill:r})})}const UC={"mp-shift-marketplace":r=>t.jsx(ep,{color:"var(--color-blue-content-secondary, #4A8AB8)",size:r}),"mp-availability":r=>t.jsx(Ll,{color:"var(--color-green-content-secondary, #7BB97A)",size:r}),"mp-time-clock":r=>t.jsx(sp,{color:"var(--color-orange-content-secondary, #E08B4A)",size:r}),"mp-messaging":r=>t.jsx(rp,{color:"var(--color-pink-content-secondary, #E68FB6)",size:r}),"mp-client-portal":r=>t.jsx(Ll,{color:"var(--color-azure-content-secondary, #5B3DF0)",size:r}),"mp-labor-cost":r=>t.jsx(tp,{color:"var(--color-purple-content-secondary, #9C8AE0)",size:r}),"mp-compliance-monitor":r=>t.jsx(op,{color:"var(--color-red-content-secondary, #D9534F)",size:r}),"mp-recruiting":r=>t.jsx(np,{color:"var(--color-yellow-content-secondary, #E8C547)",size:r}),"mp-credential":r=>t.jsx(Hi,{color:"var(--color-matcha-content-secondary, #3CB6A8)",size:r}),"mp-performance":r=>t.jsx(Hi,{color:"var(--color-purple-content-secondary, #9C8AE0)",size:r})};function rr(r,s=16){const i=UC[r];return i?i(s):null}const Ni=[{id:"shift_marketplace",name:"Shift Marketplace",description:"Internal marketplace where employees can claim open shifts.",category:"Scheduling",targetUsers:["Managers","Employees"],coreFeatures:["Open shift board","Shift claim approvals","Real-time notifications","Eligibility filtering"],author:"Tito Goldstein",installs:"142",rating:4.9,shape:t.jsx(ep,{color:"var(--color-blue-content-secondary, #4A8AB8)"}),preview:{tagline:"Let eligible workers claim open shifts faster.",recommendedFor:["staffing","hospitality","light industrial"],capabilities:["Open shift board","Employee shift claiming","Manager approval workflow","Eligibility rules","Real-time notifications","Shift fill-rate tracking"],businessValue:["Reduce manual scheduling work","Improve shift coverage","Increase employee flexibility"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"labor_cost_forecasting",name:"Labor Cost Forecasting",description:"Predict labor costs based on schedules, overtime, and demand.",category:"Analytics",targetUsers:["Operations","Finance"],coreFeatures:["Projected payroll calculations","Overtime risk alerts","Budget vs actual tracking","Department cost breakdowns"],author:"Simon Karlsson",installs:"87",rating:4.6,shape:t.jsx(tp,{color:"var(--color-purple-content-secondary, #9C8AE0)"}),preview:{tagline:"Forecast payroll costs before schedules are finalized.",recommendedFor:["finance teams","operations leaders","large hourly teams"],capabilities:["Projected labor cost","Overtime risk detection","Budget vs scheduled cost","Department cost breakdown","Location-level forecasting","Exportable reports"],businessValue:["Control labor spend","Prevent avoidable overtime","Improve budget planning"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"employee_availability_portal",name:"Employee Availability Portal",description:"Allow workers to manage and submit availability preferences.",category:"Workforce Management",targetUsers:["Employees"],coreFeatures:["Recurring availability","Time-off requests","Availability conflicts","Manager approvals"],author:"Renee Park",installs:"64",rating:4.5,shape:t.jsx(Ll,{color:"var(--color-green-content-secondary, #7BB97A)"}),preview:{tagline:"Let employees manage when they can work.",recommendedFor:["part-time teams","flexible scheduling teams","student workers"],capabilities:["Recurring availability","One-time availability changes","Time-off requests","Manager approvals","Conflict detection","Availability history"],businessValue:["Reduce scheduling conflicts","Improve employee satisfaction","Help managers build better schedules"],setupComplexity:"low",estimatedImpact:"medium",status:"recommended"}},{id:"compliance_monitor",name:"Compliance Monitor",description:"Track labor law violations and scheduling compliance issues.",category:"Compliance",targetUsers:["HR","Operations"],coreFeatures:["Missed break alerts","Overtime compliance","Predictive scheduling checks","Audit logs"],author:"Tito Goldstein",installs:"58",rating:4.7,shape:t.jsx(op,{color:"var(--color-red-content-secondary, #D9534F)"}),preview:{tagline:"Detect scheduling and labor compliance risks before they become issues.",recommendedFor:["large teams","regulated workforces","multi-state operations"],capabilities:["Overtime alerts","Missed break detection","Scheduling rule checks","Audit logs","Compliance reporting","Exception workflows"],businessValue:["Lower compliance risk","Create audit-ready records","Help managers act before violations occur"],setupComplexity:"high",estimatedImpact:"high",status:"recommended"}},{id:"smart_time_clock",name:"Smart Time Clock",description:"Mobile and kiosk-based clock-in system with GPS validation.",category:"Time Tracking",targetUsers:["Employees","Managers"],coreFeatures:["GPS clock-ins","Photo verification","Auto break tracking","Late arrival alerts"],author:"Marcus Chen",installs:"116",rating:4.8,shape:t.jsx(sp,{color:"var(--color-orange-content-secondary, #E08B4A)"}),preview:{tagline:"Clock in with GPS, kiosk, and photo validation.",recommendedFor:["field teams","multi-location teams","hourly workforces"],capabilities:["Mobile clock-in","Kiosk mode","GPS validation","Photo verification","Late arrival alerts","Break tracking"],businessValue:["Reduce time theft","Improve payroll accuracy","Give managers real-time attendance visibility"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"recruiting_pipeline_dashboard",name:"Recruiting Pipeline Dashboard",description:"Manage applicants, interviews, and onboarding workflows.",category:"Hiring",targetUsers:["Recruiters","Managers"],coreFeatures:["Applicant tracking","Interview scheduling","Hiring stages","Offer management"],author:"Aisha Patel",installs:"42",rating:4.1,shape:t.jsx(np,{color:"var(--color-yellow-content-secondary, #E8C547)"}),preview:{tagline:"Track applicants from lead to active worker.",recommendedFor:["staffing agencies","high-volume hiring teams"],capabilities:["Applicant tracking","Hiring stages","Interview scheduling","Offer status","Onboarding handoff","Recruiter performance metrics"],businessValue:["Improve hiring visibility","Speed up onboarding","Reduce candidate drop-off"],setupComplexity:"high",estimatedImpact:"medium",status:"optional"}},{id:"workforce_messaging_center",name:"Workforce Messaging Center",description:"Centralized communication hub for workforce operations.",category:"Communication",targetUsers:["Managers","Employees"],coreFeatures:["Group messaging","Schedule announcements","Read receipts","Emergency alerts"],author:"Simon Karlsson",installs:"94",rating:4.4,shape:t.jsx(rp,{color:"var(--color-pink-content-secondary, #E68FB6)"}),preview:{tagline:"Centralize team communication around shifts and operations.",recommendedFor:["distributed teams","field teams","large workforces"],capabilities:["Group announcements","Shift-specific messages","Read receipts","Emergency alerts","Manager-to-worker messaging","Message history"],businessValue:["Improve communication speed","Reduce missed updates","Keep operational messages tied to work"],setupComplexity:"medium",estimatedImpact:"medium",status:"recommended"}},{id:"client_staffing_portal",name:"Client Staffing Portal",description:"External-facing portal where clients request and monitor staffing.",category:"Customer Experience",targetUsers:["Clients"],coreFeatures:["Shift requests","Worker approvals","Live staffing updates","Invoice visibility"],author:"Daniela Cruz",installs:"31",rating:4.7,shape:t.jsx(Ll,{color:"var(--color-azure-content-secondary, #5B3DF0)"}),preview:{tagline:"Give clients a portal to request, approve, and track staffing.",recommendedFor:["staffing agencies","security","events","facilities"],capabilities:["Client shift requests","Worker approval visibility","Live staffing status","Request history","Basic invoice visibility","Client-specific permissions"],businessValue:["Improve client experience","Reduce back-and-forth communication","Increase visibility into staffing fulfillment"],setupComplexity:"high",estimatedImpact:"high",status:"recommended"}},{id:"credential_tracker",name:"Credential Tracker",description:"Track employee certifications, licenses, and expiration dates.",category:"Compliance",targetUsers:["HR","Compliance Teams"],coreFeatures:["Expiration reminders","Document uploads","Certification validation","Compliance reporting"],author:"Renee Park",installs:"49",rating:4.3,shape:t.jsx(Hi,{color:"var(--color-matcha-content-secondary, #3CB6A8)"}),preview:{tagline:"Track certifications, licenses, and required worker documents.",recommendedFor:["healthcare staffing","security","transportation","skilled labor"],capabilities:["Credential uploads","Expiration reminders","Approval workflows","Worker eligibility rules","Document status tracking","Compliance reports"],businessValue:["Avoid assigning unqualified workers","Reduce manual document tracking","Maintain compliance visibility"],setupComplexity:"medium",estimatedImpact:"medium",status:"recommended"}},{id:"performance_insights_dashboard",name:"Performance Insights Dashboard",description:"Measure workforce performance and operational efficiency.",category:"Analytics",targetUsers:["Executives","Managers"],coreFeatures:["Attendance scoring","Shift fulfillment metrics","Employee reliability rankings","Location performance analytics"],author:"Marcus Chen",installs:"73",rating:4,shape:t.jsx(Hi,{color:"var(--color-purple-content-secondary, #9C8AE0)"}),preview:{tagline:"Measure attendance, reliability, and workforce performance.",recommendedFor:["operations leaders","account managers","executives"],capabilities:["Attendance scoring","Reliability rankings","Shift fulfillment metrics","No-show tracking","Location performance","Manager dashboards"],businessValue:["Identify top performers","Spot operational issues","Improve workforce planning"],setupComplexity:"medium",estimatedImpact:"medium",status:"optional"}}],Li=[{id:"auto_shift_optimizer",name:"Auto Shift Optimizer",description:"Automatically balances schedules based on labor demand, overtime risk, and worker availability.",category:"Scheduling",appType:"background",targetUsers:["System"],coreFeatures:["Auto-fill open shifts","Minimize overtime","Balance worker hours","Optimize labor coverage","Apply scheduling rules"],author:"Teambridge",installs:"128",rating:4.8,shape:t.jsx(ep,{color:"var(--color-green-content-secondary, #7BB97A)"}),preview:{tagline:"Automatically balance schedules for cost and coverage.",recommendedFor:["staffing","hospitality","healthcare"],capabilities:["Auto-fill open shifts","Minimize overtime","Balance worker hours","Optimize labor coverage","Apply scheduling rules"],businessValue:["Reduce overtime spend","Improve coverage","Free up scheduler time"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"payroll_export_engine",name:"Payroll Export Engine",description:"Processes approved timesheets and generates payroll-ready exports automatically.",category:"Payroll",appType:"background",targetUsers:["System"],coreFeatures:["Aggregate timesheets","Calculate regular and overtime hours","Generate payroll exports","Validate missing punches","Detect payroll anomalies"],author:"Teambridge",installs:"109",rating:4.7,shape:t.jsx(tp,{color:"var(--color-matcha-content-secondary, #3CB6A8)"}),preview:{tagline:"Turn approved timesheets into payroll-ready exports.",recommendedFor:["staffing","finance","operations"],capabilities:["Aggregate timesheets","Calculate regular and overtime hours","Generate payroll exports","Validate missing punches","Detect payroll anomalies"],businessValue:["Cut manual payroll work","Reduce errors","Speed up payroll cycles"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"attendance_anomaly_detector",name:"Attendance Anomaly Detector",description:"Monitors attendance patterns and flags suspicious or unusual behavior automatically.",category:"Attendance",appType:"background",targetUsers:["System"],coreFeatures:["Detect repeated late arrivals","Identify missed punches","Flag unusual clock-in locations","Track no-show trends","Generate risk scores"],author:"Teambridge",installs:"74",rating:4.6,shape:t.jsx(op,{color:"var(--color-orange-content-secondary, #E08B4A)"}),preview:{tagline:"Surface attendance issues before they become a problem.",recommendedFor:["operations","compliance","staffing"],capabilities:["Detect repeated late arrivals","Identify missed punches","Flag unusual clock-in locations","Track no-show trends","Generate risk scores"],businessValue:["Reduce no-shows","Catch time-theft early","Improve workforce reliability"],setupComplexity:"low",estimatedImpact:"medium",status:"optional"}},{id:"credential_expiration_monitor",name:"Credential Expiration Monitor",description:"Automatically tracks certification expirations and prevents invalid worker assignments.",category:"Compliance",appType:"background",targetUsers:["System"],coreFeatures:["Monitor expiration dates","Send renewal reminders","Restrict non-compliant workers","Track uploaded documents","Generate compliance reports"],author:"Teambridge",installs:"63",rating:4.5,shape:t.jsx(Hi,{color:"var(--color-blue-content-secondary, #4A8AB8)"}),preview:{tagline:"Keep credentials current and assignments compliant.",recommendedFor:["healthcare","security","compliance"],capabilities:["Monitor expiration dates","Send renewal reminders","Restrict non-compliant workers","Track uploaded documents","Generate compliance reports"],businessValue:["Avoid compliance violations","Prevent invalid assignments","Automate renewal nudges"],setupComplexity:"low",estimatedImpact:"high",status:"recommended"}},{id:"smart_notification_router",name:"Smart Notification Router",description:"Routes notifications to the right employees based on urgency, role, and shift context.",category:"Communication",appType:"background",targetUsers:["System"],coreFeatures:["Priority-based notifications","Role-aware targeting","SMS and push delivery","Escalation workflows","Quiet-hour controls"],author:"Teambridge",installs:"88",rating:4.4,shape:t.jsx(rp,{color:"var(--color-azure-content-secondary, #5B3DF0)"}),preview:{tagline:"Send the right message to the right people, automatically.",recommendedFor:["operations","communications","staffing"],capabilities:["Priority-based notifications","Role-aware targeting","SMS and push delivery","Escalation workflows","Quiet-hour controls"],businessValue:["Reduce noise","Faster response times","Better escalation paths"],setupComplexity:"low",estimatedImpact:"medium",status:"optional"}},{id:"invoice_generation_engine",name:"Invoice Generation Engine",description:"Automatically converts approved labor hours into client invoices.",category:"Billing",appType:"background",targetUsers:["System"],coreFeatures:["Generate invoices from shifts","Apply bill rates","Calculate overtime billing","Create invoice PDFs","Track invoice status"],author:"Teambridge",installs:"52",rating:4.3,shape:t.jsx(np,{color:"var(--color-pink-content-secondary, #E68FB6)"}),preview:{tagline:"Turn shifts into client invoices without manual entry.",recommendedFor:["staffing agencies","finance","operations"],capabilities:["Generate invoices from shifts","Apply bill rates","Calculate overtime billing","Create invoice PDFs","Track invoice status"],businessValue:["Faster billing cycles","Fewer billing errors","Better revenue visibility"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"worker_matching_engine",name:"Worker Matching Engine",description:"Automatically recommends the best workers for open shifts using availability and performance data.",category:"Staffing",appType:"background",targetUsers:["System"],coreFeatures:["Skill-based matching","Availability filtering","Distance calculations","Performance-based recommendations","Compliance-aware matching"],author:"Teambridge",installs:"46",rating:4.2,shape:t.jsx(sp,{color:"var(--color-pink-content-secondary, #E68FB6)"}),preview:{tagline:"Surface the best worker for every open shift.",recommendedFor:["staffing agencies","operations","recruiting"],capabilities:["Skill-based matching","Availability filtering","Distance calculations","Performance-based recommendations","Compliance-aware matching"],businessValue:["Better fill rates","Higher worker satisfaction","Reduce coordinator effort"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}}],VC=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  width: 100%;
`,GC=h.div`
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
`,qC=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,ZC=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  letter-spacing: var(--tracking-tight, -0.01em);
`,YC=h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`,KC=h.span`
  color: var(--color-yellow-content-secondary, #E8C547);
  font-size: var(--text-base, 1rem);
  line-height: 1;
`,QC=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8, 32px);
`,XC=h.div`
  /* Plain pass-through wrapper — the soft halo lives inside Screenshot now. */
`,JC=h.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-md, 12px);
  border: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: var(--space-5, 20px);

  /* Blurred AI-tinted halo painted on a pseudo behind the inner screenshot
     content. Clipped by the parent's overflow: hidden so it stays inside
     the frame. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 90% at 0% 50%, rgba(140, 79, 226, 0.35), transparent 70%),
      radial-gradient(ellipse 60% 90% at 100% 50%, rgba(255, 200, 87, 0.3), transparent 70%);
    filter: blur(40px);
    z-index: -1;
    pointer-events: none;
  }

  & > svg,
  & > img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius-sm, 6px);
    box-shadow:
      0 1px 2px rgba(15, 23, 42, 0.04),
      0 18px 40px rgba(15, 23, 42, 0.10);
  }
`,eS={shift_marketplace:gC,labor_cost_forecasting:xC,employee_availability_portal:vC,compliance_monitor:yC,smart_time_clock:wC,recruiting_pipeline_dashboard:jC,workforce_messaging_center:bC,client_staffing_portal:kC,credential_tracker:_C,performance_insights_dashboard:CC},tS=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;function nS({id:r,name:s}){const i=eS[r];return i?t.jsx(tS,{src:i,alt:s?`${s} preview`:"App preview"}):null}h.div`
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
`;const rS=h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`,oS=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1, 4px);
`,sS=h.div`
  margin: 0 0 var(--space-2, 8px) 0;
`;function ul({children:r}){return t.jsx(sS,{children:t.jsx(Yn,{as:"h4",children:r})})}const Hh=h.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
`,Wh=h.li`
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
`,iS=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5, 20px);
`,pu=h.div`
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
`;const aS=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  text-transform: capitalize;
`,lS={low:1,medium:2,high:3},cS=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,dS=h.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`,uS=h.div`
  height: 6px;
  border-radius: var(--radius-xs, 2px);
  background: ${r=>r.$filled?r.$color==="green"?"var(--color-green-content-secondary, #7BB97A)":r.$color==="yellow"?"var(--color-yellow-content-secondary, #E8C547)":"var(--color-red-content-secondary, #D9534F)":"var(--color-bg-tertiary, #eef0f3)"};
`,pS=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  text-transform: capitalize;
`;function Uh({value:r,higherIsBetter:s=!1}){const i=lS[r],l=s?r==="high"?"green":r==="medium"?"yellow":"red":r==="low"?"green":r==="medium"?"yellow":"red";return t.jsxs(cS,{children:[t.jsx(dS,{children:[1,2,3].map(c=>t.jsx(uS,{$filled:c<=i,$color:l},c))}),t.jsx(pS,{children:r})]})}const Vh=h(Oe)`
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
`;function fS(r){const{onClose:s,isInstalled:i,onInstall:l,onUninstall:c,onOpenApp:p}=r,[f,y]=x.useState(r.app);x.useEffect(()=>{r.app&&y(r.app)},[r.app]);const g=r.app!==null,w=f;return w?t.jsxs(Wu,{open:g,onClose:s,size:"lg","aria-label":`${w.name} preview`,children:[t.jsx(Ul,{onClose:s,children:t.jsxs(VC,{children:[t.jsx(GC,{children:w.shape}),t.jsxs(qC,{children:[t.jsx(ZC,{children:w.name}),t.jsxs(YC,{children:[t.jsx(KC,{"aria-hidden":!0,children:"★"}),t.jsx("span",{children:w.rating.toFixed(1)}),t.jsx("span",{"aria-hidden":!0,children:"·"}),t.jsxs("span",{children:[w.installs," installed"]})]})]}),w.preview.status==="recommended"&&t.jsx(it,{size:"sm",variant:"subtle",color:"green",children:"Recommended"}),w.preview.status==="optional"&&t.jsx(it,{size:"sm",variant:"subtle",color:"neutral",children:"Optional"})]})}),t.jsx(Vl,{children:t.jsxs(QC,{children:[w.appType!=="background"&&t.jsx(XC,{children:t.jsx(JC,{children:t.jsx(nS,{id:w.id,name:w.name})})}),t.jsxs(iS,{children:[t.jsxs(pu,{children:[t.jsx(Yn,{children:"Category"}),t.jsx(aS,{children:w.category})]}),t.jsxs(pu,{children:[t.jsx(Yn,{children:"Setup"}),t.jsx(Uh,{value:w.preview.setupComplexity})]}),t.jsxs(pu,{children:[t.jsx(Yn,{children:"Impact"}),t.jsx(Uh,{value:w.preview.estimatedImpact,higherIsBetter:!0})]})]}),t.jsxs("div",{children:[t.jsx(ul,{children:"Description"}),t.jsx(rS,{children:w.preview.tagline})]}),t.jsxs("div",{children:[t.jsx(ul,{children:"Recommended for"}),t.jsx(oS,{children:w.preview.recommendedFor.map(v=>t.jsx(it,{size:"sm",variant:"outline",color:"neutral",children:v},v))})]}),t.jsxs("div",{children:[t.jsx(ul,{children:"Capabilities"}),t.jsx(Hh,{children:w.preview.capabilities.map(v=>t.jsxs(Wh,{children:[t.jsx(yn,{size:16}),t.jsx("span",{children:v})]},v))})]}),t.jsxs("div",{children:[t.jsx(ul,{children:"Business value"}),t.jsx(Hh,{children:w.preview.businessValue.map(v=>t.jsxs(Wh,{children:[t.jsx(Zu,{size:16}),t.jsx("span",{children:v})]},v))})]})]})}),t.jsx(Gl,{children:i?t.jsxs(t.Fragment,{children:[t.jsx(Oe,{variant:"secondary",size:"md",onClick:()=>{c==null||c(w.id),s()},children:"Uninstall"}),t.jsx(Vh,{variant:"primary",size:"md",trailingArtwork:t.jsx(ks,{size:14}),onClick:()=>{p==null||p(w.id),s()},children:"Open"})]}):t.jsx(Vh,{variant:"primary",size:"md",trailingArtwork:t.jsx(ks,{size:14}),onClick:()=>{l==null||l(w.id),s()},children:"Use App"})})]}):null}function hS({installedAppIds:r=[],onInstallApp:s,onUninstallApp:i,onOpenApp:l}={}){const[c,p]=x.useState(""),[f,y]=x.useState(!1),[g,w]=x.useState(null),v=Ni,_=[...Ni,...Li].slice().sort((k,j)=>parseInt(j.installs,10)-parseInt(k.installs,10)).slice(0,6),b=["compliance_monitor","credential_expiration_monitor","performance_insights_dashboard","auto_shift_optimizer"],L=[...Ni,...Li],E=b.map(k=>L.find(j=>j.id===k)).filter(k=>!!k),I=c.trim(),N=I.length===0?[]:[...Ni,...Li].filter(k=>k.name.toLowerCase().includes(I.toLowerCase())||k.description.toLowerCase().includes(I.toLowerCase())),C=f&&I.length>0,A=k=>{w(k),p(""),y(!1)};return t.jsxs(NC,{children:[t.jsxs(LC,{children:[t.jsx(AC,{children:"App Marketplace"}),t.jsx(TC,{children:"Discover shared workforce apps built by your team — combine forms, automations, and dashboards to run last-mile operations."}),t.jsxs(EC,{children:[t.jsx(ql,{size:"md",placeholder:"Search community apps",value:c,onChange:k=>p(k.target.value),onFocus:()=>y(!0),onBlur:()=>setTimeout(()=>y(!1),150)}),C&&t.jsx($C,{onMouseDown:k=>k.preventDefault(),children:N.length===0?t.jsx(PC,{children:"No apps match your search"}):N.map(k=>t.jsx(_r,{size:"md",divider:!1,interactive:!0,onClick:j=>{j.preventDefault(),j.stopPropagation(),A(k)},label:k.name,description:k.description,leadingSlot:t.jsx(cg,{children:t.jsx(ws,{children:k.shape})}),trailingSlot:k.preview.status==="recommended"?t.jsx(it,{size:"sm",variant:"subtle",color:"green",children:"Recommended"}):t.jsx(it,{size:"sm",variant:"subtle",color:"neutral",children:"Optional"})},k.id))})]})]}),_.length>0&&t.jsxs(al,{children:[t.jsxs(ll,{children:[t.jsx(dl,{children:"Popular"}),t.jsx(cl,{children:"Most installed apps across your workspace"})]}),t.jsx(RC,{children:_.map((k,j)=>t.jsx(DC,{size:"md",divider:!1,interactive:!0,onClick:()=>w(k),label:k.name,description:t.jsxs(OC,{children:[t.jsx(HC,{children:k.description}),t.jsxs(WC,{children:[t.jsx(Xm,{size:12}),k.installs," installed"]})]}),leadingSlot:t.jsxs(zC,{children:[t.jsx(FC,{children:j+1}),t.jsx(BC,{"data-role":"popular-icon",children:t.jsx(ws,{children:k.shape})})]})},k.id))})]}),E.length>0&&t.jsxs(al,{children:[t.jsxs(ll,{children:[t.jsx(dl,{children:"Featured"}),t.jsx(cl,{children:"Curated picks across categories"})]}),t.jsx(iu,{children:E.map(k=>t.jsxs(au,{onClick:()=>w(k),role:"button",tabIndex:0,children:[t.jsx(lu,{"data-role":"featured-icon",children:t.jsx(ws,{children:k.shape})}),t.jsxs(cu,{children:[t.jsx(du,{children:k.name}),t.jsx(uu,{children:k.description}),t.jsxs(su,{children:[t.jsx(it,{size:"sm",variant:"subtle",color:"neutral",children:k.category}),k.targetUsers.map(j=>t.jsx(it,{size:"sm",variant:"outline",color:"neutral",children:j},j))]})]})]},k.name))})]}),v.length>0&&t.jsxs(al,{children:[t.jsxs(ll,{children:[t.jsx(dl,{children:"Team apps"}),t.jsx(cl,{children:"Apps with a UI your team uses to run last-mile operations"})]}),t.jsx(iu,{children:v.map(k=>t.jsxs(au,{onClick:()=>w(k),role:"button",tabIndex:0,children:[t.jsx(lu,{"data-role":"featured-icon",children:t.jsx(ws,{children:k.shape})}),t.jsxs(cu,{children:[t.jsx(du,{children:k.name}),t.jsx(uu,{children:k.description}),t.jsxs(su,{children:[t.jsx(it,{size:"sm",variant:"subtle",color:"neutral",children:k.category}),k.targetUsers.map(j=>t.jsx(it,{size:"sm",variant:"outline",color:"neutral",children:j},j))]})]})]},k.id))})]}),t.jsxs(al,{children:[t.jsxs(ll,{children:[t.jsx(dl,{children:"Background apps"}),t.jsx(cl,{children:"Automated services that run in the background — no UI required"})]}),t.jsx(iu,{children:Li.map(k=>t.jsxs(au,{onClick:()=>w(k),role:"button",tabIndex:0,children:[t.jsx(lu,{"data-role":"featured-icon",children:t.jsx(ws,{children:k.shape})}),t.jsxs(cu,{children:[t.jsx(du,{children:k.name}),t.jsx(uu,{children:k.description}),t.jsxs(su,{children:[t.jsx(it,{size:"sm",variant:"subtle",color:"neutral",children:k.category}),k.targetUsers.map(j=>t.jsx(it,{size:"sm",variant:"outline",color:"neutral",children:j},j))]})]})]},k.id))})]}),t.jsx(fS,{app:g,onClose:()=>w(null),isInstalled:g?r.includes(g.id):!1,onInstall:s,onUninstall:i,onOpenApp:l})]})}h.div`
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
`;const mS=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`,gS=h.div`
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
`;const Gh=h.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  margin-top: var(--space-8, 32px);
`,xS=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,vS=h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`,yS=h.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2, 8px);

  /* Match pin button to the Uninstall button height. */
  & > button[data-variant] {
    height: 24px;
    min-height: 24px;
  }
`,wS=h.button`
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
`,qh=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  margin-bottom: var(--space-1, 4px);
`,Zh=h.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`,Yh=h.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3, 12px);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,jS=h(_r)`
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
`,Kh=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2, 8px);
  padding: var(--space-8, 32px) var(--space-6, 24px);
  border-radius: var(--radius-md, 12px);
  border: 1px dashed var(--color-border-opaque);
  background: var(--color-bg-primary);
`,Qh=h.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`,Xh=h.p`
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
`;const dg={shift_marketplace:"mp-shift-marketplace",employee_availability_portal:"mp-availability",smart_time_clock:"mp-time-clock",workforce_messaging_center:"mp-messaging",client_staffing_portal:"mp-client-portal",labor_cost_forecasting:"mp-labor-cost",compliance_monitor:"mp-compliance-monitor",recruiting_pipeline_dashboard:"mp-recruiting",credential_tracker:"mp-credential",performance_insights_dashboard:"mp-performance"},Jh=Object.fromEntries(Object.entries(dg).map(([r,s])=>[s,r]));function bS({onOpenCommunity:r,onOpenApp:s,pinnedAppIds:i=[],onTogglePin:l,installedAppIds:c=[],onUninstallApp:p,lastOpenedAtById:f={}}){const[y,g]=x.useState(""),[w,v]=x.useState(!1);x.useRef(null);const _=A=>{const k=y.trim().toLowerCase();return k.length===0?!0:A.name.toLowerCase().includes(k)||A.description.toLowerCase().includes(k)},b=new Set(c),L=[...Ni,...Li],E=L.filter(A=>A.appType!=="background"&&b.has(A.id)&&_(A)),I=L.filter(A=>A.appType==="background"&&b.has(A.id)&&_(A));c.length;const N=A=>{if(!A)return null;const k=Date.now()-A;if(k<45e3)return"Just now";const j=Math.round(k/6e4);if(j<60)return`${j} ${j===1?"minute":"minutes"} ago`;const $=Math.round(j/60);if($<24)return`${$} ${$===1?"hour":"hours"} ago`;const F=Math.round($/24);if(F<7)return`${F} ${F===1?"day":"days"} ago`;const z=Math.round(F/7);return`${z} ${z===1?"week":"weeks"} ago`},C=A=>t.jsx(jS,{size:"lg",divider:!1,interactive:!0,onClick:()=>s==null?void 0:s(A.id),label:A.name,description:t.jsxs(xS,{children:[t.jsx("span",{children:A.description}),(()=>{const k=N(f[A.id]);return k?t.jsxs(vS,{"data-role":"installed-last-opened",children:[t.jsx(Hm,{size:12}),k]}):null})()]}),leadingSlot:t.jsx(cg,{children:t.jsx(ws,{children:A.shape})}),trailingSlot:t.jsxs(yS,{children:[l&&(()=>{const k=dg[A.id];if(!k)return null;const j=i.includes(k);return t.jsx(wS,{type:"button",$pinned:j,"aria-label":j?"Unpin from left nav":"Pin to left nav",title:j?"Unpin from left nav":"Pin to left nav",onClick:$=>{$.stopPropagation(),l(k)},children:t.jsx(qu,{size:16,fill:j?"currentColor":"none"})})})(),t.jsx(Oe,{variant:"secondary",size:"sm",onClick:k=>{k.stopPropagation(),p==null||p(A.id)},children:"Uninstall"})]})},A.id);return t.jsxs(lg,{children:[t.jsxs(mS,{children:[t.jsx(gS,{children:t.jsx(ql,{size:"md",placeholder:"Search installed apps",value:y,onChange:A=>g(A.target.value)})}),r&&t.jsx(Oe,{variant:"secondary",size:"md",onClick:r,trailingArtwork:t.jsx(ks,{size:14}),children:"App Marketplace"})]}),t.jsxs(Gh,{children:[t.jsxs(qh,{children:[t.jsx(Zh,{children:"Team apps"}),t.jsx(Bi,{variant:"neutral",children:E.length})]}),E.length===0?t.jsxs(Kh,{children:[t.jsx(Qh,{children:"No team apps installed yet"}),t.jsxs(Xh,{children:["Browse the App Marketplace and click ",t.jsx("strong",{children:"Use App"})," on a team app to install it here."]}),r&&t.jsx(Oe,{variant:"secondary",size:"sm",onClick:r,trailingArtwork:t.jsx(ks,{size:14}),children:"Browse App Marketplace"})]}):t.jsx(Yh,{children:E.map(A=>C(A))})]}),t.jsxs(Gh,{children:[t.jsxs(qh,{children:[t.jsx(Zh,{children:"Background apps"}),t.jsx(Bi,{variant:"neutral",children:I.length})]}),I.length===0?t.jsxs(Kh,{children:[t.jsx(Qh,{children:"No background apps installed yet"}),t.jsxs(Xh,{children:["Browse the App Marketplace and click ",t.jsx("strong",{children:"Use App"})," on a background service to install it here."]}),r&&t.jsx(Oe,{variant:"secondary",size:"sm",onClick:r,trailingArtwork:t.jsx(ks,{size:14}),children:"Browse App Marketplace"})]}):t.jsx(Yh,{children:I.map(A=>C(A))})]})]})}function kS({name:r}){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:r}),t.jsx(dn,{children:"One of your installed apps from Last Mile Apps."})]}),t.jsxs(Qu,{children:[t.jsx(Xu,{children:r}),t.jsx(Ju,{children:"This app's content will render here."})]})]})}function _S(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Custom App"}),t.jsx(dn,{children:"Your organization's custom-built application"})]}),t.jsxs(Qu,{children:[t.jsx(Xu,{children:"Custom App"}),t.jsx(Ju,{children:"This space is configured by your organization. Contact your admin to set up this module."})]})]})}function CS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Add App"}),t.jsx(dn,{children:"Connect a new app to your workspace"})]}),t.jsx($n,{children:["HRIS Integration","Payroll Sync","ATS Connector","SSO Provider","Time Tracking","Benefits Admin"].map(r=>t.jsxs(Pe,{children:[t.jsx(He,{children:"Integration"}),t.jsx(Re,{children:r}),t.jsx(gt,{children:"Connect"})]},r))})]})}function SS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Document Studio"}),t.jsx(dn,{children:"Create and manage employment documents"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Total Documents"}),t.jsx(We,{children:"247"}),t.jsx(Re,{children:"Across all templates"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Drafts"}),t.jsx(We,{children:"12"}),t.jsx(Re,{children:"In progress"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Sent for Signature"}),t.jsx(We,{children:"8"}),t.jsx(Re,{children:"Awaiting completion"})]})]}),t.jsx(Kn,{children:"Recent Documents"}),t.jsxs(ar,{children:[t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Offer Letter — Sarah Kim"}),t.jsx(kt,{children:"Offer Letter · Created today"})]}),t.jsx(gt,{$color:"#fff8e1",children:"Draft"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Employment Contract — Dev Team"}),t.jsx(kt,{children:"Contract · Mar 22"})]}),t.jsx(gt,{$color:"#e3f2fd",children:"Sent"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"NDA — Alex Torres"}),t.jsx(kt,{children:"NDA · Mar 20"})]}),t.jsx(gt,{$color:"#e8f5e9",children:"Signed"})]}),t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:"Contractor Agreement — Nomad Labs"}),t.jsx(kt,{children:"Agreement · Mar 18"})]}),t.jsx(gt,{$color:"#e8f5e9",children:"Signed"})]})]})]})}function MS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Form"}),t.jsx(dn,{children:"Build and distribute forms across your organization"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Active Forms"}),t.jsx(We,{children:"18"}),t.jsx(Re,{children:"Collecting responses"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Responses Today"}),t.jsx(We,{children:"34"}),t.jsx(Re,{children:"Across all forms"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Completion Rate"}),t.jsx(We,{children:"91%"}),t.jsx(Re,{children:"↑ 4% this week"})]})]}),t.jsx(Kn,{children:"Recent Forms"}),t.jsx(ar,{children:[{title:"New Hire Onboarding",responses:"12 responses",status:"Active"},{title:"Benefits Enrollment 2025",responses:"89 responses",status:"Active"},{title:"Equipment Request",responses:"7 responses",status:"Active"},{title:"Exit Interview",responses:"3 responses",status:"Closed"}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.title}),t.jsx(kt,{children:r.responses})]}),t.jsx(gt,{$color:r.status==="Active"?"#e8f5e9":void 0,children:r.status})]},r.title))})]})}function IS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Tasks"}),t.jsx(dn,{children:"Manage and track HR workflows"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"My Tasks"}),t.jsx(We,{children:"14"}),t.jsx(Re,{children:"5 due today"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Team Tasks"}),t.jsx(We,{children:"62"}),t.jsx(Re,{children:"Across 4 assignees"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Completed"}),t.jsx(We,{children:"38"}),t.jsx(Re,{children:"This month"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Overdue"}),t.jsx(We,{children:"3"}),t.jsx(Re,{children:"Needs attention"})]})]}),t.jsx(Kn,{children:"Due Soon"}),t.jsx(ar,{children:[{title:"Complete I-9 verification — Sarah Kim",due:"Today",color:"#fce4ec"},{title:"Send equipment checklist",due:"Today",color:"#fce4ec"},{title:"Review offer letter — Jun Park",due:"Tomorrow",color:"#fff8e1"},{title:"Schedule orientation session",due:"Mar 28",color:"#fff8e1"},{title:"Update org chart",due:"Mar 30",color:void 0}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.title}),t.jsxs(kt,{children:["Due ",r.due]})]}),t.jsx(gt,{$color:r.color,children:r.due})]},r.title))})]})}function NS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Policy Engine"}),t.jsx(dn,{children:"Author, version, and distribute company policies"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Published Policies"}),t.jsx(We,{children:"43"}),t.jsx(Re,{children:"Across 8 categories"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Under Review"}),t.jsx(We,{children:"6"}),t.jsx(Re,{children:"Awaiting approval"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Acknowledgments"}),t.jsx(We,{children:"94%"}),t.jsx(Re,{children:"Team completion rate"})]})]}),t.jsx(Kn,{children:"Recent Policies"}),t.jsx(ar,{children:[{title:"Remote Work Policy 2025",category:"Workplace",status:"Published",color:"#e8f5e9"},{title:"PTO & Leave Guidelines",category:"Benefits",status:"Published",color:"#e8f5e9"},{title:"Code of Conduct v3",category:"Compliance",status:"Under Review",color:"#fff8e1"},{title:"Data & Privacy Policy",category:"Legal",status:"Under Review",color:"#fff8e1"},{title:"Expense Reimbursement",category:"Finance",status:"Draft",color:void 0}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.title}),t.jsx(kt,{children:r.category})]}),t.jsx(gt,{$color:r.color,children:r.status})]},r.title))})]})}function LS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Automation"}),t.jsx(dn,{children:"Build and monitor automated HR workflows"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Active Automations"}),t.jsx(We,{children:"21"}),t.jsx(Re,{children:"Running across modules"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Runs Today"}),t.jsx(We,{children:"148"}),t.jsx(Re,{children:"0 errors"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Time Saved"}),t.jsx(We,{children:"12h"}),t.jsx(Re,{children:"This week"})]})]}),t.jsx(Kn,{children:"Active Automations"}),t.jsx(ar,{children:[{title:"New hire onboarding sequence",trigger:"On hire date",runs:"3 today",color:"#e8f5e9"},{title:"Policy acknowledgment reminder",trigger:"Weekly · Mon 9am",runs:"89 this week",color:"#e8f5e9"},{title:"Payroll cutoff alert",trigger:"Monthly · 3 days before",runs:"1 this month",color:"#e8f5e9"},{title:"Contract expiry warning",trigger:"30 days before expiry",runs:"2 today",color:"#e8f5e9"}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.title}),t.jsxs(kt,{children:[r.trigger," · ",r.runs]})]}),t.jsx(gt,{$color:r.color,children:"Active"})]},r.title))})]})}function AS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"Payroll"}),t.jsx(dn,{children:"Process and manage payroll for your workforce"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Next Run"}),t.jsx(We,{children:"Apr 1"}),t.jsx(Re,{children:"6 days away"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Total Payroll"}),t.jsx(We,{children:"$214k"}),t.jsx(Re,{children:"This cycle"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Employees"}),t.jsx(We,{children:"87"}),t.jsx(Re,{children:"Full-time & part-time"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Contractors"}),t.jsx(We,{children:"24"}),t.jsx(Re,{children:"Pending 3 invoices"})]})]}),t.jsx(Kn,{children:"Recent Payroll Runs"}),t.jsx(ar,{children:[{period:"Mar 1–15, 2025",total:"$106,400",status:"Processed",color:"#e8f5e9"},{period:"Feb 15–28, 2025",total:"$104,200",status:"Processed",color:"#e8f5e9"},{period:"Feb 1–14, 2025",total:"$103,800",status:"Processed",color:"#e8f5e9"},{period:"Jan 15–31, 2025",total:"$101,500",status:"Archived",color:void 0}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.period}),t.jsx(kt,{children:r.total})]}),t.jsx(gt,{$color:r.color,children:r.status})]},r.period))})]})}function TS(){return t.jsxs(Qt,{children:[t.jsxs(ln,{children:[t.jsx(cn,{children:"E-Sign Studio"}),t.jsx(dn,{children:"Send, track, and collect electronic signatures"})]}),t.jsxs($n,{children:[t.jsxs(Pe,{children:[t.jsx(He,{children:"Awaiting Signature"}),t.jsx(We,{children:"8"}),t.jsx(Re,{children:"Sent to recipients"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Completed This Month"}),t.jsx(We,{children:"31"}),t.jsx(Re,{children:"All signatures collected"})]}),t.jsxs(Pe,{children:[t.jsx(He,{children:"Avg Turnaround"}),t.jsx(We,{children:"1.4d"}),t.jsx(Re,{children:"From send to signed"})]})]}),t.jsx(Kn,{children:"Pending Signatures"}),t.jsx(ar,{children:[{title:"Offer Letter — Sarah Kim",sent:"Today",status:"Awaiting",color:"#fff8e1"},{title:"NDA — Rahul Dev",sent:"Mar 23",status:"Awaiting",color:"#fff8e1"},{title:"Contract — Studio Nine",sent:"Mar 21",status:"Awaiting",color:"#fff8e1"},{title:"Amendment — Alex Torres",sent:"Mar 20",status:"Signed",color:"#e8f5e9"},{title:"IP Agreement — Jun Park",sent:"Mar 19",status:"Signed",color:"#e8f5e9"}].map(r=>t.jsxs(wt,{children:[t.jsxs(jt,{children:[t.jsx(bt,{children:r.title}),t.jsxs(kt,{children:["Sent ",r.sent]})]}),t.jsx(gt,{$color:r.color,children:r.status})]},r.title))})]})}const ES={erin:"persona-001",sched:"persona-002",onbi:"persona-003",cassie:"persona-004",dataops:"persona-005"};function Al({personaId:r,personaName:s,size:i=32,className:l,style:c}){const p=r??(s?ES[s.toLowerCase()]:void 0)??"persona-001",f=e0[p]??e0["persona-001"];return t.jsx(f,{size:i,className:l,style:c})}function $S({size:r,className:s,style:i}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 32 32",fill:"none",className:s,style:i,"aria-hidden":!0,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"pa-erin-body",x1:"16",y1:"2",x2:"16",y2:"30",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#FFB59A"}),t.jsx("stop",{offset:"1",stopColor:"#E96678"})]}),t.jsxs("linearGradient",{id:"pa-erin-screen",x1:"16",y1:"11",x2:"16",y2:"22",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#2A1320"}),t.jsx("stop",{offset:"1",stopColor:"#4A1D2E"})]})]}),t.jsx("rect",{x:"15.1",y:"2",width:"1.8",height:"3.2",rx:"0.9",fill:"#C24A5E"}),t.jsx("circle",{cx:"16",cy:"2.2",r:"1.6",fill:"#FFE2D0",stroke:"#C24A5E",strokeWidth:"0.6"}),t.jsx("rect",{x:"3",y:"5",width:"26",height:"24",rx:"6",fill:"url(#pa-erin-body)"}),t.jsx("path",{d:"M9 5h14a6 6 0 0 1 6 6v0.5H3V11a6 6 0 0 1 6-6z",fill:"white",fillOpacity:"0.22"}),t.jsx("rect",{x:"6.5",y:"11",width:"19",height:"11",rx:"3",fill:"url(#pa-erin-screen)"}),t.jsx("rect",{x:"6.5",y:"11",width:"19",height:"3.2",rx:"3",fill:"white",fillOpacity:"0.08"}),t.jsx("rect",{x:"10",y:"14.2",width:"4",height:"4.6",rx:"1.4",fill:"#FFE2D0"}),t.jsx("rect",{x:"18",y:"14.2",width:"4",height:"4.6",rx:"1.4",fill:"#FFE2D0"}),t.jsx("circle",{cx:"9",cy:"24",r:"1.3",fill:"#F8C2BB",fillOpacity:"0.7"}),t.jsx("circle",{cx:"23",cy:"24",r:"1.3",fill:"#F8C2BB",fillOpacity:"0.7"})]})}function PS({size:r,className:s,style:i}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 32 32",fill:"none",className:s,style:i,"aria-hidden":!0,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"pa-sched-body",x1:"16",y1:"2",x2:"16",y2:"30",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#5BE2D0"}),t.jsx("stop",{offset:"1",stopColor:"#1F8B9A"})]}),t.jsxs("radialGradient",{id:"pa-sched-face",cx:"16",cy:"16",r:"9",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#0E323A"}),t.jsx("stop",{offset:"1",stopColor:"#062028"})]})]}),t.jsx("path",{d:"M16 2.2L28 9v14L16 29.8 4 23V9l12-6.8z",fill:"url(#pa-sched-body)"}),t.jsx("path",{d:"M16 2.2L28 9 16 15.8 4 9l12-6.8z",fill:"white",fillOpacity:"0.18"}),t.jsx("path",{d:"M16 2.2L28 9v14L16 29.8 4 23V9l12-6.8z",stroke:"#0E575F",strokeOpacity:"0.35",strokeWidth:"0.8"}),t.jsx("circle",{cx:"16",cy:"17",r:"7.2",fill:"url(#pa-sched-face)"}),t.jsx("circle",{cx:"16",cy:"17",r:"7.2",stroke:"#5BE2D0",strokeOpacity:"0.45",strokeWidth:"0.6"}),t.jsx("rect",{x:"15.6",y:"10.6",width:"0.8",height:"1.6",rx:"0.4",fill:"#5BE2D0"}),t.jsx("rect",{x:"15.6",y:"21.8",width:"0.8",height:"1.6",rx:"0.4",fill:"#5BE2D0"}),t.jsx("rect",{x:"9.6",y:"16.6",width:"1.6",height:"0.8",rx:"0.4",fill:"#5BE2D0"}),t.jsx("rect",{x:"20.8",y:"16.6",width:"1.6",height:"0.8",rx:"0.4",fill:"#5BE2D0"}),t.jsx("rect",{x:"15.5",y:"13.2",width:"1",height:"4.2",rx:"0.5",fill:"#5BE2D0"}),t.jsx("rect",{x:"16",y:"16.6",width:"4",height:"1",rx:"0.5",fill:"#5BE2D0"}),t.jsx("circle",{cx:"16",cy:"17",r:"0.9",fill:"#A6F2E5"})]})}function RS({size:r,className:s,style:i}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 32 32",fill:"none",className:s,style:i,"aria-hidden":!0,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"pa-onbi-body",x1:"16",y1:"6",x2:"16",y2:"29",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#FFD479"}),t.jsx("stop",{offset:"1",stopColor:"#D87A1F"})]}),t.jsxs("linearGradient",{id:"pa-onbi-screen",x1:"16",y1:"12",x2:"16",y2:"23",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#2E1808"}),t.jsx("stop",{offset:"1",stopColor:"#5A3210"})]})]}),t.jsx("line",{x1:"16",y1:"3.4",x2:"16",y2:"6",stroke:"#A85812",strokeWidth:"1.3",strokeLinecap:"round"}),t.jsx("path",{d:"M16 1.4l0.65 1.55 1.55 0.45-1.55 0.45L16 5.4l-0.65-1.55-1.55-0.45 1.55-0.45z",fill:"#FFE89A",stroke:"#A85812",strokeWidth:"0.5",strokeLinejoin:"round"}),t.jsx("rect",{x:"2.5",y:"14",width:"3.6",height:"6.5",rx:"1.6",fill:"#A85812"}),t.jsx("rect",{x:"2.5",y:"14",width:"3.6",height:"2",rx:"1.6",fill:"white",fillOpacity:"0.18"}),t.jsx("rect",{x:"25.9",y:"14",width:"3.6",height:"6.5",rx:"1.6",fill:"#A85812"}),t.jsx("rect",{x:"25.9",y:"14",width:"3.6",height:"2",rx:"1.6",fill:"white",fillOpacity:"0.18"}),t.jsx("rect",{x:"6",y:"6",width:"20",height:"22",rx:"6",fill:"url(#pa-onbi-body)"}),t.jsx("path",{d:"M12 6h8a6 6 0 0 1 6 6v0.5H6V12a6 6 0 0 1 6-6z",fill:"white",fillOpacity:"0.22"}),t.jsx("rect",{x:"6",y:"6",width:"20",height:"22",rx:"6",stroke:"#A85812",strokeOpacity:"0.35",strokeWidth:"0.8"}),t.jsx("rect",{x:"8.5",y:"13",width:"15",height:"10",rx:"2.8",fill:"url(#pa-onbi-screen)"}),t.jsx("rect",{x:"8.5",y:"13",width:"15",height:"2.6",rx:"2.8",fill:"white",fillOpacity:"0.08"}),t.jsx("circle",{cx:"12.8",cy:"18",r:"1.7",fill:"#FFE89A"}),t.jsx("circle",{cx:"19.2",cy:"18",r:"1.7",fill:"#FFE89A"}),t.jsx("circle",{cx:"13.3",cy:"17.5",r:"0.55",fill:"white",fillOpacity:"0.95"}),t.jsx("circle",{cx:"19.7",cy:"17.5",r:"0.55",fill:"white",fillOpacity:"0.95"}),t.jsx("rect",{x:"13",y:"25",width:"6",height:"1.4",rx:"0.7",fill:"#FFE89A",fillOpacity:"0.85"})]})}function DS({size:r,className:s,style:i}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 32 32",fill:"none",className:s,style:i,"aria-hidden":!0,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"pa-cassie-body",x1:"16",y1:"3",x2:"16",y2:"29",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#C9A6FF"}),t.jsx("stop",{offset:"1",stopColor:"#6B3CC6"})]}),t.jsxs("linearGradient",{id:"pa-cassie-screen",x1:"16",y1:"12",x2:"16",y2:"22",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#1B0E33"}),t.jsx("stop",{offset:"1",stopColor:"#321855"})]})]}),t.jsx("path",{d:"M21 3.5h5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-2.4l-1.6 1.8 0.2-1.8H21A1.5 1.5 0 0 1 19.5 8V5A1.5 1.5 0 0 1 21 3.5z",fill:"#9D6BFF",stroke:"#5C2DAB",strokeOpacity:"0.5",strokeWidth:"0.6"}),t.jsx("circle",{cx:"22",cy:"6.5",r:"0.7",fill:"#FFFFFF"}),t.jsx("circle",{cx:"24",cy:"6.5",r:"0.7",fill:"#FFFFFF"}),t.jsx("circle",{cx:"26",cy:"6.5",r:"0.7",fill:"#FFFFFF"}),t.jsx("rect",{x:"3",y:"8",width:"26",height:"21",rx:"6",fill:"url(#pa-cassie-body)"}),t.jsx("path",{d:"M9 8h14a6 6 0 0 1 6 6v0.5H3V14a6 6 0 0 1 6-6z",fill:"white",fillOpacity:"0.18"}),t.jsx("rect",{x:"6",y:"13.5",width:"20",height:"9",rx:"3",fill:"url(#pa-cassie-screen)"}),t.jsx("rect",{x:"8.5",y:"17.5",width:"15",height:"1.2",rx:"0.6",fill:"#C9A6FF"}),t.jsx("rect",{x:"8.5",y:"17.5",width:"15",height:"1.2",rx:"0.6",fill:"white",fillOpacity:"0.35"}),t.jsx("circle",{cx:"6.5",cy:"26",r:"1",fill:"#FFFFFF",fillOpacity:"0.7"}),t.jsx("circle",{cx:"25.5",cy:"26",r:"1",fill:"#FFFFFF",fillOpacity:"0.7"})]})}function zS({size:r,className:s,style:i}){return t.jsxs("svg",{width:r,height:r,viewBox:"0 0 32 32",fill:"none",className:s,style:i,"aria-hidden":!0,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"pa-data-body",x1:"16",y1:"3",x2:"16",y2:"29",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#7AA0E8"}),t.jsx("stop",{offset:"1",stopColor:"#2A4A8E"})]}),t.jsxs("linearGradient",{id:"pa-data-face",x1:"16",y1:"13",x2:"16",y2:"22",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0",stopColor:"#0A1530"}),t.jsx("stop",{offset:"1",stopColor:"#152852"})]})]}),t.jsx("path",{d:"M7 3h18l4 4v18l-4 4H7l-4-4V7l4-4z",fill:"url(#pa-data-body)"}),t.jsx("path",{d:"M7 3h18l4 4-4 0.6H7L3 7l4-4z",fill:"white",fillOpacity:"0.22"}),t.jsxs("g",{stroke:"white",strokeOpacity:"0.16",strokeWidth:"0.6",children:[t.jsx("line",{x1:"3",y1:"11",x2:"29",y2:"11"}),t.jsx("line",{x1:"3",y1:"21",x2:"29",y2:"21"}),t.jsx("line",{x1:"11",y1:"3",x2:"11",y2:"29"}),t.jsx("line",{x1:"21",y1:"3",x2:"21",y2:"29"})]}),t.jsx("path",{d:"M7 3h18l4 4v18l-4 4H7l-4-4V7l4-4z",stroke:"#1A2F5C",strokeOpacity:"0.5",strokeWidth:"0.8",strokeLinejoin:"round"}),t.jsx("rect",{x:"6",y:"13",width:"20",height:"8",rx:"2",fill:"url(#pa-data-face)"}),t.jsx("rect",{x:"8",y:"16.4",width:"16",height:"1.6",rx:"0.8",fill:"#7AC8FF"}),t.jsx("rect",{x:"8",y:"16.4",width:"16",height:"0.6",rx:"0.3",fill:"white",fillOpacity:"0.5"}),t.jsx("circle",{cx:"9",cy:"25",r:"0.9",fill:"#7AC8FF"}),t.jsx("circle",{cx:"12",cy:"25",r:"0.9",fill:"#FFFFFF",fillOpacity:"0.4"}),t.jsx("circle",{cx:"23",cy:"25",r:"0.9",fill:"#FFFFFF",fillOpacity:"0.4"})]})}const e0={"persona-001":$S,"persona-002":PS,"persona-003":RS,"persona-004":DS,"persona-005":zS},FS=h.div`
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
`,BS=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding-right: 56px;
`,OS=h.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--color-content-primary, #151515);
`,HS=h.div`
  display: inline-flex;
  align-items: center;
  height: 24px;
  border: 1px solid var(--color-border-opaque, #dfdfdf);
  border-radius: var(--radius-button, 6px);
  background: var(--color-bg-primary, #fff);
  overflow: hidden;
  flex-shrink: 0;
`,WS=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
`,US=h.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #1c222a);
  padding-right: 8px;
  white-space: nowrap;
`,VS=h.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--color-content-secondary, #475569);
  letter-spacing: -0.078px;
`,GS=h.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-content-tertiary, #87919f);
`,qS=h.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  pointer-events: none;

  svg { width: 100%; height: 100%; display: block; }
`;function ZS({persona:r,onClick:s}){const i=r.voice.charAt(0).toUpperCase()+r.voice.slice(1);return t.jsxs(FS,{role:"button",tabIndex:0,onClick:()=>s(r.id),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),s(r.id))},children:[t.jsxs(BS,{children:[t.jsx(OS,{children:r.name}),t.jsxs(HS,{children:[t.jsx(WS,{children:t.jsx(Nl,{size:12})}),t.jsx(US,{children:i})]})]}),t.jsx(VS,{children:r.role}),t.jsx(GS,{children:r.description}),t.jsx(qS,{"aria-hidden":"true",children:t.jsx(Al,{personaId:r.id,size:44})})]})}const YS=[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],KS=h.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`;function QS({id:r,initialValues:s,onSubmit:i}){const[l,c]=x.useState((s==null?void 0:s.name)??""),[p,f]=x.useState((s==null?void 0:s.role)??""),[y,g]=x.useState((s==null?void 0:s.voice)??""),[w,v]=x.useState((s==null?void 0:s.description)??"");function _(b){b.preventDefault(),i({name:l,role:p,voice:y,description:w})}return t.jsxs(KS,{id:r,onSubmit:_,children:[t.jsx(As,{label:"Name",required:!0,value:l,onChange:b=>c(b.target.value),placeholder:"e.g. HR Assistant"}),t.jsx(As,{label:"Role",required:!0,value:p,onChange:b=>f(b.target.value),placeholder:"e.g. Human Resources"}),t.jsx(Ln,{label:"Voice",required:!0,options:YS,value:y,onChange:g,placeholder:"Select a voice…"}),t.jsx(Vu,{label:"Description",value:w,onChange:b=>v(b.target.value),placeholder:"What does this specialist do?",rows:3})]})}const t0="new-specialist-form",XS=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`,JS=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eM=h.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`,tM=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-3, 12px);
`;function nM({onPersonaClick:r}){const[s,i]=x.useState(!1);function l(c){i(!1)}return t.jsxs(XS,{children:[t.jsxs(JS,{children:[t.jsx(eM,{children:"Personas"}),t.jsx(Oe,{variant:"primary",size:"sm",leadingArtwork:t.jsx(Ol,{}),onClick:()=>i(!0),children:"New Persona"})]}),t.jsx(tM,{children:kr.map(c=>t.jsx(ZS,{persona:c,onClick:r},c.id))}),t.jsxs(Wu,{open:s,onClose:()=>i(!1),size:"md",children:[t.jsx(Ul,{onClose:()=>i(!1),children:"New Specialist"}),t.jsx(Vl,{children:t.jsx(QS,{id:t0,onSubmit:l})}),t.jsxs(Gl,{children:[t.jsx(Oe,{variant:"secondary",size:"sm",onClick:()=>i(!1),children:"Cancel"}),t.jsx(Oe,{variant:"primary",size:"sm",type:"submit",form:t0,children:"Create Specialist"})]})]})]})}const rM=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,oM=h.label`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-primary, #151515);
  cursor: default;
`,sM=h.span`
  color: var(--color-content-error, #e5484d);
  margin-left: 2px;
`,iM=h.div`
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
`,aM=h.div`
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
`,lM=h.button`
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
`,cM=h.input`
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
`,dM=h.div`
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
`,n0=h.button`
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
`;function uM({label:r,required:s,value:i,onChange:l,suggestions:c=[],placeholder:p}){const[f,y]=x.useState(""),[g,w]=x.useState(!1),v=x.useRef(null),_=x.useRef(null),b=c.filter(C=>!i.includes(C)&&C.toLowerCase().includes(f.toLowerCase())),L=g&&(b.length>0||f.trim().length>0),E=x.useCallback(C=>{const A=C.trim();A&&!i.includes(A)&&l([...i,A]),y("")},[i,l]),I=x.useCallback(C=>{l(i.filter(A=>A!==C))},[i,l]);x.useEffect(()=>{const C=A=>{var k;(k=_.current)!=null&&k.contains(A.target)||w(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]);function N(C){C.key==="Enter"?(C.preventDefault(),f.trim()&&E(f)):C.key==="Backspace"&&f===""&&i.length>0&&I(i[i.length-1])}return t.jsxs(rM,{children:[r&&t.jsxs(oM,{onClick:()=>{var C;return(C=v.current)==null?void 0:C.focus()},children:[r,s&&t.jsx(sM,{"aria-hidden":"true",children:"*"})]}),t.jsxs(iM,{ref:_,$focused:g,onClick:()=>{var C;return(C=v.current)==null?void 0:C.focus()},children:[i.map(C=>t.jsxs(aM,{children:[C,t.jsx(lM,{type:"button","aria-label":`Remove ${C}`,onMouseDown:A=>{A.preventDefault(),I(C)},children:t.jsx(Es,{size:10})})]},C)),t.jsx(cM,{ref:v,value:f,placeholder:i.length===0?p:"",onChange:C=>y(C.target.value),onKeyDown:N,onFocus:()=>w(!0)}),L&&t.jsxs(dM,{children:[b.map(C=>t.jsx(n0,{type:"button",onMouseDown:A=>{A.preventDefault(),E(C)},children:C},C)),f.trim()&&!i.includes(f.trim())&&!b.includes(f.trim())&&t.jsxs(n0,{type:"button",onMouseDown:C=>{C.preventDefault(),E(f)},children:["Add “",f.trim(),"”"]})]})]})]})}const fu=5e5,de=[{id:"wf-001",name:"Employee Profile Updates",href:"/workflows/wf-001"},{id:"wf-002",name:"Benefits Enrollment",href:"/workflows/wf-002"},{id:"wf-003",name:"Shift Coverage & Swaps",href:"/workflows/wf-003"},{id:"wf-004",name:"Schedule Change Notifications",href:"/workflows/wf-004"},{id:"wf-005",name:"New Hire Onboarding Checklist",href:"/workflows/wf-005"},{id:"wf-006",name:"Document Collection & Compliance",href:"/workflows/wf-006"},{id:"wf-007",name:"Customer Ticket Triage",href:"/workflows/wf-007"},{id:"wf-008",name:"Weekly Data Audit",href:"/workflows/wf-008"},{id:"wf-009",name:"Record Cleanup & Dedup",href:"/workflows/wf-009"},{id:"wf-010",name:"Ops Reporting",href:"/workflows/wf-010"}],pM=[{id:"dep-001",personaId:"persona-001",workflow:de[0],status:"active",type:"engage"},{id:"dep-002",personaId:"persona-001",workflow:de[1],status:"active",type:"engage"},{id:"dep-003",personaId:"persona-001",workflow:de[7],status:"active",type:"engage_less"},{id:"dep-004",personaId:"persona-002",workflow:de[2],status:"active",type:"engage"},{id:"dep-005",personaId:"persona-002",workflow:de[3],status:"active",type:"engage"},{id:"dep-006",personaId:"persona-002",workflow:de[2],status:"paused",type:"engage_less"},{id:"dep-007",personaId:"persona-003",workflow:de[4],status:"active",type:"engage"},{id:"dep-008",personaId:"persona-003",workflow:de[5],status:"active",type:"engage_less"},{id:"dep-009",personaId:"persona-003",workflow:de[4],status:"active",type:"engage_less"},{id:"dep-010",personaId:"persona-004",workflow:de[6],status:"active",type:"engage"},{id:"dep-011",personaId:"persona-005",workflow:de[7],status:"active",type:"engage_less"},{id:"dep-012",personaId:"persona-005",workflow:de[8],status:"active",type:"engage_less"},{id:"dep-013",personaId:"persona-005",workflow:de[9],status:"active",type:"engage_less"}],Ri=[{id:"exec-001",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-09T14:05:00Z",trigger:{id:"trig-001",label:"Profile update request from Amy Chen",type:"form_submission"},workflow:de[0],steps:[{offsetMs:0,description:"Received profile update request form",toolCategory:"data_cleanup"},{offsetMs:800,description:"Validated new address and emergency contact",toolCategory:"data_cleanup"},{offsetMs:2400,description:"Sent confirmation to Amy via chat",toolCategory:"communication",channel:"chat"}],durationMs:3200,creditsUsed:350,goal:"Help employees update their profile information accurately",conversations:[{id:"conv-001",contactName:"Amy Chen",outcome:"goal_achieved",summary:"Erin helped Amy update her home address and emergency contact after her recent move.",thread:[{role:"agent",content:"Hi Amy! I received your profile update request. I see you want to change your home address and emergency contact. Let me pull up your current info."},{role:"user",content:"Yes, I moved last month. New address is 742 Evergreen Terrace, Springfield."},{role:"agent",content:"Got it! I've updated your address to 742 Evergreen Terrace, Springfield. I also see you want to update your emergency contact — who should that be?"},{role:"user",content:"My partner, Jordan Chen. Phone is 555-0147."},{role:"agent",content:"Done! Your emergency contact is now Jordan Chen at 555-0147. Both changes are saved. Is there anything else you need?"},{role:"user",content:"No, that's everything. Thanks!"}]},{id:"conv-002",contactName:"Marcus Rivera",outcome:"goal_achieved",summary:"Marcus updated his legal name and tax withholding with Erin's assistance.",thread:[{role:"agent",content:"Hi Marcus, I see you submitted a profile update. It looks like you want to change your legal name. I'll need to verify a few things first."},{role:"user",content:"Sure. My new legal name is Marcus A. Rivera. I also need to update my W-4 withholding."},{role:"agent",content:"I've updated your legal name. For the W-4 change, I'll need your new filing status and number of allowances."},{role:"user",content:"Married filing jointly, 2 allowances."},{role:"agent",content:"All set! Name updated and W-4 withholding changed to MFJ with 2 allowances. You'll see the payroll change reflected next pay cycle."}]}],outcomeSummaryFull:"Processed two employee profile updates: Amy Chen updated her address and emergency contact; Marcus Rivera updated his legal name and tax withholding. Both changes validated and saved.",feedback:"up"},{id:"exec-002",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-002",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-11T09:30:00Z",trigger:{id:"trig-002",label:"Open enrollment window reminder",type:"scheduled"},workflow:de[1],steps:[{offsetMs:0,description:"Triggered benefits enrollment outreach",toolCategory:"scheduling"},{offsetMs:500,description:"Identified 3 employees who haven't enrolled",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Sent reminders via email",toolCategory:"communication",channel:"email"},{offsetMs:3200,description:"Followed up with direct chat messages",toolCategory:"communication",channel:"chat"}],durationMs:4100,creditsUsed:500,goal:"Ensure all eligible employees complete benefits enrollment before the deadline",conversations:[{id:"conv-003",contactName:"Priya Patel",outcome:"goal_achieved",summary:"Priya completed her dental and vision enrollment after Erin walked her through the options.",thread:[{role:"agent",content:"Hi Priya! Just a reminder that open enrollment closes this Friday. I noticed you haven't selected your dental and vision plans yet. Would you like help choosing?"},{role:"user",content:"Oh I forgot about that. What are my options for dental?"},{role:"agent",content:"You have two dental options: Basic (covers preventive at 100%, major at 50%, $18/mo) or Premium (covers preventive at 100%, major at 80%, ortho included, $34/mo). Which sounds better for your needs?"},{role:"user",content:"I'll go with Premium since I might need braces next year."},{role:"agent",content:"Great choice! I've enrolled you in the Premium dental plan. For vision, the standard plan covers an annual exam and $150 toward frames. Want to add that too?"},{role:"user",content:"Yes, add the vision plan. Thanks for the help!"},{role:"agent",content:"You're all set! Premium dental + standard vision are now active. You'll get a confirmation email shortly."}]},{id:"conv-004",contactName:"Jake Morrison",outcome:"completed_no_action",summary:"Jake confirmed he intentionally opted out of supplemental benefits this year.",thread:[{role:"agent",content:"Hi Jake, this is a friendly reminder that benefits enrollment closes Friday. You haven't made any selections yet. Need any help?"},{role:"user",content:"No thanks, I'm staying on my spouse's plan this year. I don't need any of the supplemental options."},{role:"agent",content:"Understood! I'll mark you as intentionally opted out. If anything changes, you can always reach out before the deadline."}]},{id:"conv-005",contactName:"Taylor Kim",outcome:"in_progress",summary:"Taylor asked for more time to review options with their partner before deciding.",thread:[{role:"agent",content:"Hi Taylor! Open enrollment closes Friday. Would you like help selecting your benefits?"},{role:"user",content:"I need to talk to my partner first. Can I get back to you tomorrow?"},{role:"agent",content:"Of course! I'll follow up tomorrow afternoon. The deadline is Friday at 5 PM, so there's still time."}]}],outcomeSummaryFull:"Reached out to 3 employees about open enrollment. Priya Patel completed dental and vision enrollment. Jake Morrison confirmed intentional opt-out. Taylor Kim requested follow-up tomorrow.",feedback:null},{id:"exec-003",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-07T06:15:00Z",trigger:{id:"trig-003",label:"Weekly HR data audit scheduled",type:"scheduled"},workflow:de[7],steps:[{offsetMs:0,description:"Weekly HR data audit initiated",toolCategory:"scheduling"},{offsetMs:1500,description:"Scanned 850 employee records for missing fields",toolCategory:"data_cleanup"},{offsetMs:3800,description:"Found 6 records with outdated manager assignments",toolCategory:"data_cleanup"},{offsetMs:5200,description:"Auto-corrected 4 based on recent org chart changes",toolCategory:"data_cleanup"},{offsetMs:6100,description:"Flagged 2 records for manual HR review",toolCategory:"data_cleanup"},{offsetMs:6800,description:"Posted audit summary to #hr-ops channel",toolCategory:"communication",channel:"chat"}],durationMs:7200,creditsUsed:9660,status:"success",goal:"Identify and resolve data inconsistencies in HR employee records",outcomeSummaryFull:"Weekly HR data audit scanned 850 employee records. Found 6 with outdated manager assignments, auto-corrected 4 using the latest org chart, and flagged 2 for manual review. Summary posted to #hr-ops.",feedback:"up"},{id:"exec-004",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-13T11:00:00Z",trigger:{id:"trig-004",label:"Profile update request from Robin Lee",type:"form_submission"},workflow:de[0],steps:[{offsetMs:0,description:"Received profile update form",toolCategory:"data_cleanup"},{offsetMs:600,description:"Validated phone number format",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Sent confirmation via chat",toolCategory:"communication",channel:"chat"}],durationMs:1800,creditsUsed:270,goal:"Help employees update their profile information accurately",conversations:[{id:"conv-006",contactName:"Robin Lee",outcome:"goal_achieved",summary:"Robin updated their phone number and preferred pronouns.",thread:[{role:"agent",content:"Hi Robin! I got your profile update request. You want to change your phone number and add preferred pronouns, correct?"},{role:"user",content:"Yes! New phone is 555-0283 and pronouns are they/them."},{role:"agent",content:"Updated! Phone number is now 555-0283 and pronouns set to they/them. These will appear on your internal profile and directory listing."},{role:"user",content:"Perfect, thanks!"}]},{id:"conv-007",contactName:"Devon Okafor",outcome:"goal_achieved",summary:"Devon changed their direct deposit information with verification.",thread:[{role:"agent",content:"Hi Devon, I see a request to update your direct deposit info. For security, I'll need to verify your identity first. Can you confirm the last four digits of your SSN?"},{role:"user",content:"Last four is 7291."},{role:"agent",content:"Verified! Please share your new bank routing and account numbers."},{role:"user",content:"Routing: 021000021, Account: 483920174."},{role:"agent",content:"Your direct deposit has been updated. The change will take effect next pay period. You'll get a confirmation email."},{role:"user",content:"Great, appreciate it."}]}],outcomeSummaryFull:"Processed two profile updates: Robin Lee updated phone and pronouns; Devon Okafor updated direct deposit with identity verification. All changes saved successfully.",feedback:null},{id:"exec-005",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-14T06:15:00Z",trigger:{id:"trig-005",label:"Weekly HR data audit scheduled",type:"scheduled"},workflow:de[7],steps:[{offsetMs:0,description:"Weekly HR data audit initiated",toolCategory:"scheduling"},{offsetMs:1200,description:"Scanned 852 employee records",toolCategory:"data_cleanup"},{offsetMs:3100,description:"Found 3 records with missing department codes",toolCategory:"data_cleanup"},{offsetMs:4200,description:"All 3 auto-corrected using org chart",toolCategory:"data_cleanup"},{offsetMs:4900,description:"Posted audit summary to #hr-ops",toolCategory:"communication",channel:"chat"}],durationMs:5400,creditsUsed:8740,status:"success",goal:"Identify and resolve data inconsistencies in HR employee records",outcomeSummaryFull:"Weekly HR audit scanned 852 records. Found 3 with missing department codes; all were auto-corrected via org chart mapping. Zero manual flags this week.",feedback:null},{id:"exec-006",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-08T07:30:00Z",trigger:{id:"trig-006",label:"Shift coverage needed for warehouse team",type:"manager_request"},workflow:de[2],steps:[{offsetMs:0,description:"Received shift coverage request from manager",toolCategory:"scheduling"},{offsetMs:600,description:"Identified 5 eligible employees for the shift",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent coverage requests via SMS",toolCategory:"communication",channel:"sms"},{offsetMs:3800,description:"Processed responses and confirmed coverage",toolCategory:"scheduling"}],durationMs:4500,creditsUsed:590,goal:"Find replacement coverage for open shifts as quickly as possible",conversations:[{id:"conv-008",contactName:"Luis Hernandez",outcome:"goal_achieved",summary:"Luis agreed to cover the Saturday morning warehouse shift.",thread:[{role:"agent",content:"Hi Luis, there's an open shift this Saturday 6AM-2PM at the warehouse. Are you available to cover?"},{role:"user",content:"Yeah I can do that. Overtime rate?"},{role:"agent",content:"Yes, it qualifies for 1.5x overtime since it's your 6th day this week. I'll confirm you for the shift."},{role:"user",content:"Sounds good, sign me up."},{role:"agent",content:"You're confirmed for Saturday 6AM-2PM warehouse shift. I've notified your manager. Thanks, Luis!"}]},{id:"conv-009",contactName:"Mei Zhang",outcome:"completed_no_action",summary:"Mei was unavailable due to a family event but thanked Sched for asking.",thread:[{role:"agent",content:"Hi Mei, there's an open Saturday morning shift at the warehouse. Would you be able to cover 6AM-2PM?"},{role:"user",content:"Sorry, I have a family thing Saturday. Can't make it this time."},{role:"agent",content:"No problem at all! I'll check with others. Have a great weekend, Mei."}]},{id:"conv-010",contactName:"Andre Williams",outcome:"completed_no_action",summary:"Andre declined due to his child's soccer game.",thread:[{role:"agent",content:"Hi Andre, we have an open shift Saturday 6AM-2PM at the warehouse. Any chance you can cover?"},{role:"user",content:"My kid has a soccer game Saturday morning. Can't do it this week."},{role:"agent",content:"Totally understand! Thanks for letting me know. Enjoy the game!"}]}],outcomeSummaryFull:"Shift coverage request for Saturday warehouse shift. Contacted 3 eligible employees: Luis Hernandez accepted at overtime rate, Mei Zhang and Andre Williams were unavailable. Coverage secured.",feedback:"up"},{id:"exec-007",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-005",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-10T16:00:00Z",trigger:{id:"trig-007",label:"Manager updated next week schedule for retail team",type:"schedule_change"},workflow:de[3],steps:[{offsetMs:0,description:"Detected schedule changes for retail team",toolCategory:"scheduling"},{offsetMs:400,description:"Computed affected employees (4 shift changes)",toolCategory:"data_cleanup"},{offsetMs:1e3,description:"Sent personalized schedule update notifications",toolCategory:"communication",channel:"sms"},{offsetMs:2800,description:"Collected acknowledgments",toolCategory:"communication",channel:"sms"}],durationMs:3400,creditsUsed:460,goal:"Notify employees of schedule changes and collect acknowledgments",conversations:[{id:"conv-011",contactName:"Sam Torres",outcome:"goal_achieved",summary:"Sam acknowledged her new Tuesday start time.",thread:[{role:"agent",content:"Hi Sam, your shift next Tuesday has been updated. New time: 10AM-6PM (was 8AM-4PM). Please reply OK to acknowledge."},{role:"user",content:"OK, thanks for the heads up."}]},{id:"conv-012",contactName:"Nina Johansson",outcome:"goal_achieved",summary:"Nina confirmed her additional Thursday shift.",thread:[{role:"agent",content:"Hi Nina, you've been added to the Thursday closing shift next week (3PM-11PM). Can you confirm you're available?"},{role:"user",content:"That works for me. I'll be there."},{role:"agent",content:"Thanks, Nina! You're confirmed for Thursday 3PM-11PM."}]},{id:"conv-013",contactName:"Chris Dalton",outcome:"in_progress",summary:"Chris hasn't responded to the schedule change notification yet.",thread:[{role:"agent",content:"Hi Chris, your Wednesday shift has been moved to Thursday 8AM-4PM next week. Please reply to confirm."}]}],outcomeSummaryFull:"Notified 3 retail team members of schedule changes. Sam Torres and Nina Johansson acknowledged. Chris Dalton has not yet responded; follow-up queued for tomorrow morning.",feedback:null},{id:"exec-008",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-12T05:00:00Z",trigger:{id:"trig-008",label:"Weekly shift reconciliation for all locations",type:"scheduled"},workflow:de[2],steps:[{offsetMs:0,description:"Shift reconciliation job started",toolCategory:"scheduling"},{offsetMs:2e3,description:"Compared scheduled shifts vs time-clock entries for 120 employees",toolCategory:"data_cleanup"},{offsetMs:5500,description:"Detected 8 discrepancies across 3 locations",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Auto-resolved 5 minor clock-in rounding differences",toolCategory:"data_cleanup"},{offsetMs:8600,description:"Flagged 3 significant discrepancies for manager review",toolCategory:"data_cleanup"},{offsetMs:9200,description:"Sent reconciliation report to managers via email",toolCategory:"communication",channel:"email"}],durationMs:9800,creditsUsed:10890,status:"success",goal:"Reconcile scheduled shifts with actual time-clock entries to detect discrepancies",outcomeSummaryFull:"Weekly shift reconciliation compared 120 employees across 3 locations. Found 8 discrepancies: 5 auto-resolved (rounding differences), 3 flagged for manager review. Report emailed to location managers.",feedback:null},{id:"exec-009",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-14T10:20:00Z",trigger:{id:"trig-009",label:"Ponder detected potential scheduling conflict for next week",type:"ai_suggestion"},workflow:de[2],steps:[{offsetMs:0,description:"Ponder identified overlapping shift requests",toolCategory:"scheduling"},{offsetMs:800,description:"Analyzed swap options based on employee preferences",toolCategory:"data_cleanup"},{offsetMs:1600,description:"Proposed swap to affected employees via chat",toolCategory:"communication",channel:"chat"}],durationMs:2400,creditsUsed:400,goal:"Proactively resolve scheduling conflicts before they cause coverage gaps",conversations:[{id:"conv-014",contactName:"Luis Hernandez",outcome:"goal_achieved",summary:"Luis agreed to swap his Monday for Wednesday to resolve the conflict.",thread:[{role:"agent",content:"Hi Luis, I noticed a potential scheduling conflict next Monday — you and Mei are both assigned to the morning shift, but we only need one person. Would you be open to swapping to Wednesday morning instead?"},{role:"user",content:"Wednesday works fine for me. Go ahead and swap it."},{role:"agent",content:"Done! You're now scheduled for Wednesday morning instead of Monday. Mei will keep the Monday shift. Thanks for being flexible!"}]},{id:"conv-015",contactName:"Mei Zhang",outcome:"goal_achieved",summary:"Mei confirmed she's keeping her Monday shift as originally scheduled.",thread:[{role:"agent",content:"Hi Mei, just a heads up — I resolved a scheduling overlap for next Monday. You'll keep your morning shift as planned. No changes needed on your end."},{role:"user",content:"Great, thanks for sorting that out."}]}],outcomeSummaryFull:"Ponder detected a Monday shift overlap between Luis and Mei. Sched proposed a swap: Luis moved to Wednesday, Mei kept Monday. Both confirmed. Conflict resolved proactively.",feedback:"up"},{id:"exec-010",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-02T09:00:00Z",trigger:{id:"trig-010",label:"New hire start date: 3 employees joining April 2",type:"scheduled"},workflow:de[4],steps:[{offsetMs:0,description:"New hire onboarding triggered for 3 employees",toolCategory:"scheduling"},{offsetMs:500,description:"Generated personalized welcome packets",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Sent welcome messages via email",toolCategory:"communication",channel:"email"},{offsetMs:3200,description:"Followed up with checklist links via chat",toolCategory:"communication",channel:"chat"}],durationMs:4e3,creditsUsed:620,goal:"Guide new hires through their first-day onboarding checklist",conversations:[{id:"conv-016",contactName:"Aisha Mahmoud",outcome:"goal_achieved",summary:"Aisha completed all first-day onboarding tasks with Onbi's guidance.",thread:[{role:"agent",content:"Welcome to the team, Aisha! I'm Onbi, your onboarding assistant. I've sent your welcome packet to your email. Let's get you set up — first up, have you been able to log into the employee portal?"},{role:"user",content:"Thanks! Yes, I logged in this morning. What do I do next?"},{role:"agent",content:"Great! Next steps: (1) Complete your tax forms in the Benefits section, (2) Upload your ID photo for your badge, and (3) Review the employee handbook. I'll check in once you're through those."},{role:"user",content:"All done with those three! The handbook was really helpful."},{role:"agent",content:"Awesome work! Your first-day checklist is 100% complete. Tomorrow I'll walk you through your team-specific setup. Enjoy the rest of your first day!"}]},{id:"conv-017",contactName:"Ryan Brooks",outcome:"in_progress",summary:"Ryan completed portal login but hasn't finished tax forms yet.",thread:[{role:"agent",content:"Welcome, Ryan! I'm Onbi, here to help with onboarding. Have you had a chance to log into the employee portal?"},{role:"user",content:"Hey! Yes just got in. I'm having trouble with the tax form though — it's not loading right."},{role:"agent",content:"That sounds like a browser issue. Try clearing your cache or switching to Chrome. If it still doesn't work, I can send you a direct PDF link as a workaround."},{role:"user",content:"Let me try Chrome first. I'll message you back if it doesn't work."}]},{id:"conv-018",contactName:"Sofia Gutierrez",outcome:"goal_achieved",summary:"Sofia completed all onboarding steps and scheduled her team intro meeting.",thread:[{role:"agent",content:"Welcome aboard, Sofia! I'm your onboarding assistant. Ready to tackle your first-day checklist?"},{role:"user",content:"Absolutely! I already did the tax forms and uploaded my photo. What's left?"},{role:"agent",content:"You're ahead of the game! Just two more items: review the employee handbook and schedule your team intro meeting with your manager. Want me to help find a meeting time?"},{role:"user",content:"Yes please! Anytime tomorrow afternoon works for me."},{role:"agent",content:"I see your manager has tomorrow at 2PM open. I've booked a 30-minute intro meeting for you both. Handbook reviewed?"},{role:"user",content:"Yep, just finished reading it. All done!"},{role:"agent",content:"Your first-day onboarding is complete! Meeting set for tomorrow at 2PM. Great start, Sofia!"}]}],outcomeSummaryFull:"Onboarded 3 new hires on April 2. Aisha Mahmoud and Sofia Gutierrez completed all first-day tasks. Ryan Brooks is in progress (tax form loading issue). Sofia's team intro meeting scheduled.",feedback:"up"},{id:"exec-011",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-05T07:00:00Z",trigger:{id:"trig-011",label:"Compliance document audit for Q2 hires",type:"scheduled"},workflow:de[5],steps:[{offsetMs:0,description:"Document compliance audit started for Q2 hires",toolCategory:"scheduling"},{offsetMs:1800,description:"Checked I-9, W-4, and NDA status for 14 recent hires",toolCategory:"data_cleanup"},{offsetMs:3600,description:"Found 2 employees missing signed NDAs",toolCategory:"data_cleanup"},{offsetMs:4200,description:"Found 1 employee with incomplete I-9 Section 2",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Generated compliance exception report",toolCategory:"data_cleanup"},{offsetMs:5200,description:"Emailed report to HR compliance team",toolCategory:"communication",channel:"email"}],durationMs:5600,creditsUsed:8010,status:"success",goal:"Ensure all new hire documents are collected and compliant within required timeframes",outcomeSummaryFull:"Document audit for 14 Q2 hires: 2 missing signed NDAs (Ryan Brooks, Kenji Tanaka) and 1 incomplete I-9 Section 2 (Fatima Al-Said). Exception report sent to HR compliance team.",feedback:null},{id:"exec-012",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-009",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-10T08:00:00Z",trigger:{id:"trig-012",label:"Ponder detected stale onboarding checklists",type:"ai_suggestion"},workflow:de[4],steps:[{offsetMs:0,description:"Ponder flagged 3 checklists stale for >5 days",toolCategory:"scheduling"},{offsetMs:900,description:"Reviewed checklist completion status",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Two checklists at 80%+ completion, one at 40%",toolCategory:"data_cleanup"},{offsetMs:2400,description:"Sent nudge reminders to HR team via email",toolCategory:"communication",channel:"email"}],durationMs:2800,creditsUsed:3470,status:"in_progress",goal:"Ensure onboarding checklists are completed within the target timeframe",outcomeSummaryFull:"Ponder detected 3 onboarding checklists stale for over 5 days. Two are near completion (80%+), one is significantly behind (40%). Nudge reminders sent to HR team for follow-up.",feedback:null},{id:"exec-013",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-03T10:30:00Z",trigger:{id:"trig-013",label:"Day-2 onboarding follow-up triggered",type:"scheduled"},workflow:de[4],steps:[{offsetMs:0,description:"Day-2 onboarding follow-up initiated",toolCategory:"scheduling"},{offsetMs:400,description:"Checked incomplete items from day 1",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent follow-up messages via chat",toolCategory:"communication",channel:"chat"}],durationMs:1800,creditsUsed:310,goal:"Follow up with new hires who have incomplete onboarding items from day 1",conversations:[{id:"conv-019",contactName:"Ryan Brooks",outcome:"goal_achieved",summary:"Ryan completed his tax forms after receiving the direct PDF link.",thread:[{role:"agent",content:"Hey Ryan! Following up from yesterday. Were you able to get the tax form working in Chrome?"},{role:"user",content:"No luck with Chrome either. Can you send me that PDF link you mentioned?"},{role:"agent",content:"Sure! Here's the direct link to the fillable PDF: [link]. Fill it out, sign it, and upload it to the Documents section in your portal."},{role:"user",content:"That worked! Just uploaded the completed form."},{role:"agent",content:"I can see it in the system. Your day-1 checklist is now 100% complete! Today's items: (1) Complete your department safety training and (2) Set up your development environment. Ready to tackle those?"},{role:"user",content:"On it! Thanks for the help, Onbi."}]}],outcomeSummaryFull:"Day-2 follow-up: Ryan Brooks completed his tax forms via direct PDF workaround. His day-1 checklist is now at 100%. Day-2 items assigned.",feedback:null},{id:"exec-014",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-06T13:00:00Z",trigger:{id:"trig-014",label:"New support tickets received (batch of 4)",type:"ticket_created"},workflow:de[6],steps:[{offsetMs:0,description:"Received batch of 4 new support tickets",toolCategory:"communication"},{offsetMs:600,description:"Categorized tickets by priority and type",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Sent initial responses to customers via email",toolCategory:"communication",channel:"email"},{offsetMs:3800,description:"Engaged customers in live chat for urgent tickets",toolCategory:"communication",channel:"chat"}],durationMs:5200,creditsUsed:780,goal:"Triage incoming support tickets and provide timely first responses",conversations:[{id:"conv-020",contactName:"Martha Grant",outcome:"goal_achieved",summary:"Cassie resolved Martha's billing discrepancy by applying a credit.",thread:[{role:"agent",content:"Hi Martha, thanks for reaching out! I see your ticket about a billing discrepancy on your last invoice. Let me look into that right away."},{role:"user",content:"Yes, I was charged $149 but my plan is $99/month. This has happened two months in a row."},{role:"agent",content:"I found the issue — an add-on service was accidentally enabled on your account in February. I've removed it and applied a $100 credit for the overcharges. Your next invoice will reflect the correction."},{role:"user",content:"Thank you so much! That was fast."},{role:"agent",content:"Happy to help! You'll see the $100 credit on your next statement. Is there anything else I can assist with?"},{role:"user",content:"No, that's all. Thanks again!"}]},{id:"conv-021",contactName:"Derek Foster",outcome:"goal_achieved",summary:"Derek's login issue was resolved by resetting his MFA configuration.",thread:[{role:"agent",content:"Hi Derek, I see you're having trouble logging in. Can you tell me what error message you're seeing?"},{role:"user",content:"It says my MFA code is invalid every time I try. I changed phones last week."},{role:"agent",content:"That explains it — your MFA is still linked to your old device. I've reset your MFA configuration. You'll receive a setup email to register your new phone. Try that and let me know."},{role:"user",content:"Got the email and re-registered. I'm in now!"},{role:"agent",content:"Glad that worked! Your account is all set. Let me know if you need anything else."}]},{id:"conv-022",contactName:"Kelly Zhao",outcome:"in_progress",summary:"Kelly reported a data export bug that needs engineering investigation.",thread:[{role:"agent",content:"Hi Kelly, I received your ticket about the CSV export issue. Can you describe what's happening?"},{role:"user",content:"When I export my report to CSV, the date columns are all showing as Unix timestamps instead of readable dates."},{role:"agent",content:"Thanks for the details. I've been able to reproduce this on my end. This looks like it needs an engineering fix. I'm escalating to our dev team with priority P2. I'll keep you updated on the timeline."},{role:"user",content:"OK, appreciate you looking into it. How long does P2 usually take?"},{role:"agent",content:"P2 issues are typically resolved within 3-5 business days. I'll follow up with you by Friday with an update either way."}]}],outcomeSummaryFull:"Triaged 3 customer tickets. Martha Grant: billing credit applied, resolved. Derek Foster: MFA reset, resolved. Kelly Zhao: CSV export bug escalated to engineering as P2.",feedback:"up"},{id:"exec-015",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-09T10:00:00Z",trigger:{id:"trig-015",label:"Daily open-ticket follow-up check",type:"scheduled"},workflow:de[6],steps:[{offsetMs:0,description:"Daily open-ticket follow-up triggered",toolCategory:"scheduling"},{offsetMs:300,description:"Found 2 tickets awaiting customer response >24h",toolCategory:"data_cleanup"},{offsetMs:800,description:"Sent follow-up emails",toolCategory:"communication",channel:"email"}],durationMs:1200,creditsUsed:190,goal:"Follow up on open tickets that have been waiting for customer response",conversations:[{id:"conv-023",contactName:"Kelly Zhao",outcome:"goal_achieved",summary:"Kelly confirmed the CSV export fix is working after the patch.",thread:[{role:"agent",content:"Hi Kelly, following up on your CSV export issue. Our engineering team deployed a fix yesterday. Could you try exporting your report again?"},{role:"user",content:"Just tested it — dates are showing correctly now. Thanks!"},{role:"agent",content:"Wonderful! I'm closing this ticket as resolved. Don't hesitate to reach out if anything else comes up."}]},{id:"conv-024",contactName:"Omar Haddad",outcome:"completed_no_action",summary:"Omar said his issue resolved itself after a browser update.",thread:[{role:"agent",content:"Hi Omar, checking in on your ticket about the dashboard loading slowly. Are you still experiencing the issue?"},{role:"user",content:"Actually it started working fine after I updated Chrome. I think it was a browser thing."},{role:"agent",content:"Good to hear it's resolved! I'll close the ticket. Let us know if it happens again."}]}],outcomeSummaryFull:"Followed up on 2 open tickets. Kelly Zhao confirmed CSV export fix is working. Omar Haddad's dashboard issue self-resolved after browser update. Both tickets closed.",feedback:null},{id:"exec-016",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-12T14:30:00Z",trigger:{id:"trig-016",label:"Ponder detected usage drop for 2 accounts",type:"ai_suggestion"},workflow:de[6],steps:[{offsetMs:0,description:"Ponder flagged 2 accounts with 60%+ usage drop",toolCategory:"data_cleanup"},{offsetMs:400,description:"Reviewed account activity and recent tickets",toolCategory:"data_cleanup"},{offsetMs:1e3,description:"Sent proactive check-in emails",toolCategory:"communication",channel:"email"}],durationMs:1600,creditsUsed:250,goal:"Proactively reach out to accounts showing significant usage drops",conversations:[{id:"conv-025",contactName:"Evelyn Marsh",outcome:"goal_achieved",summary:"Evelyn appreciated the outreach; she was confused by the new UI and got help navigating it.",thread:[{role:"agent",content:"Hi Evelyn, I noticed your team's usage has dropped recently. Is everything working OK? We want to make sure you're getting the most out of the platform."},{role:"user",content:"Honestly, since the last update the new dashboard is confusing. I can't find the reports I used to run."},{role:"agent",content:"I totally understand — the reports moved to the Analytics tab in the new layout. Would you like me to walk you through the new navigation?"},{role:"user",content:"Yes, that would be great."},{role:"agent",content:"Here's a quick guide: Analytics > Custom Reports > select your template. Your saved reports are all still there. I've also pinned a shortcut to your dashboard sidebar so they're one click away."},{role:"user",content:"Oh perfect, found them! Thanks for reaching out."}]},{id:"conv-026",contactName:"Raj Patel",outcome:"in_progress",summary:"Raj mentioned his team is evaluating a competitor. Flagged for account management.",thread:[{role:"agent",content:"Hi Raj, I noticed your team's activity has been lower than usual lately. Wanted to check in — is there anything we can help with?"},{role:"user",content:"We're actually evaluating a few other tools right now. The pricing increase last quarter was a factor."},{role:"agent",content:"I appreciate your honesty. I'd like to connect you with our account manager to discuss options that might work better for your budget. Would that be OK?"},{role:"user",content:"Sure, have them reach out."}]}],outcomeSummaryFull:"Proactively contacted 2 accounts with usage drops. Evelyn Marsh: resolved UI confusion, pinned report shortcuts. Raj Patel: flagged for account manager outreach due to competitor evaluation.",feedback:"down"},{id:"exec-017",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-14T15:45:00Z",trigger:{id:"trig-017",label:"P1 support ticket: API outage reported",type:"ticket_created"},workflow:de[6],steps:[{offsetMs:0,description:"P1 ticket received: customer reporting API outage",toolCategory:"communication"},{offsetMs:200,description:"Checked internal status page — no known issues",toolCategory:"data_cleanup"},{offsetMs:600,description:"Initiated live chat with customer",toolCategory:"communication",channel:"chat"}],durationMs:980,creditsUsed:130,goal:"Respond to P1 tickets within 5 minutes and begin troubleshooting immediately",conversations:[{id:"conv-027",contactName:"Nadia Volkov",outcome:"in_progress",summary:"Nadia reported 500 errors on the API; Cassie escalated to on-call engineering.",thread:[{role:"agent",content:"Hi Nadia, I see you're reporting API errors. I'm looking into this right now. Can you share the specific endpoint and error codes you're seeing?"},{role:"user",content:"We're getting 500 errors on /api/v2/reports. Started about 20 minutes ago. It's blocking our production pipeline."},{role:"agent",content:"I've confirmed no issues on our public status page, which means this might be isolated. I'm escalating to our on-call engineer immediately with a P1 flag. They'll join this chat within 10 minutes. In the meantime, does your pipeline have a fallback to the v1 endpoint?"},{role:"user",content:"We can try v1 as a temporary workaround. Please keep me posted on the fix."}]}],outcomeSummaryFull:"P1 ticket from Nadia Volkov: 500 errors on /api/v2/reports. Internal status page clear. Escalated to on-call engineer. Customer using v1 fallback. Response time: under 2 minutes.",feedback:null},{id:"exec-018",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-07T06:00:00Z",trigger:{id:"trig-018",label:"Weekly data audit scheduled",type:"scheduled"},workflow:de[7],steps:[{offsetMs:0,description:"Weekly audit trigger fired",toolCategory:"scheduling"},{offsetMs:1200,description:"Scanned 2,400 employee records for inconsistencies",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Found 12 records with missing department codes",toolCategory:"data_cleanup"},{offsetMs:6200,description:"Auto-corrected 9 using org chart mapping",toolCategory:"data_cleanup"},{offsetMs:7800,description:"Flagged 3 ambiguous records for manual review",toolCategory:"data_cleanup"},{offsetMs:8400,description:"Generated audit report and posted to #data-ops",toolCategory:"communication",channel:"chat"}],durationMs:9200,creditsUsed:11980,status:"success",goal:"Identify and resolve data inconsistencies in employee records",outcomeSummaryFull:"Weekly data audit scanned 2,400 employee records. Found 12 with missing department codes, auto-corrected 9 using org chart data, and flagged 3 for manual review. Audit report posted to #data-ops.",feedback:"up"},{id:"exec-019",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-08T02:00:00Z",trigger:{id:"trig-019",label:"Nightly record deduplication job",type:"scheduled"},workflow:de[8],steps:[{offsetMs:0,description:"Nightly dedup job started",toolCategory:"scheduling"},{offsetMs:2200,description:"Compared 3,100 contact records using fuzzy matching",toolCategory:"data_cleanup"},{offsetMs:6400,description:"Identified 18 potential duplicate pairs",toolCategory:"data_cleanup"},{offsetMs:8100,description:"Auto-merged 14 high-confidence duplicates",toolCategory:"data_cleanup"},{offsetMs:9e3,description:"Queued 4 low-confidence pairs for human review",toolCategory:"data_cleanup"},{offsetMs:9600,description:"Updated dedup log and posted summary",toolCategory:"communication",channel:"chat"}],durationMs:1e4,creditsUsed:13220,status:"success",goal:"Eliminate duplicate contact records to maintain data integrity",outcomeSummaryFull:"Nightly dedup scanned 3,100 contact records. Found 18 potential duplicates: 14 auto-merged (high confidence), 4 queued for human review (low confidence). Dedup log updated.",feedback:null},{id:"exec-020",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-10T07:00:00Z",trigger:{id:"trig-020",label:"Weekly ops report generation",type:"scheduled"},workflow:de[9],steps:[{offsetMs:0,description:"Ops report generation started",toolCategory:"scheduling"},{offsetMs:800,description:"Aggregated metrics from 5 data sources",toolCategory:"data_cleanup"},{offsetMs:2400,description:"Computed week-over-week trends",toolCategory:"data_cleanup"},{offsetMs:3200,description:"Generated formatted report PDF",toolCategory:"data_cleanup"},{offsetMs:3800,description:"Emailed report to ops leadership",toolCategory:"communication",channel:"email"}],durationMs:4200,creditsUsed:5210,status:"success",goal:"Generate and distribute the weekly operations report to leadership",outcomeSummaryFull:"Weekly ops report generated: aggregated data from 5 sources, computed WoW trends, formatted PDF created and emailed to ops leadership.",feedback:null},{id:"exec-021",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-13T03:00:00Z",trigger:{id:"trig-021",label:"Ponder detected orphaned records in staging table",type:"ai_suggestion"},workflow:de[8],steps:[{offsetMs:0,description:"Ponder flagged 42 orphaned records in staging",toolCategory:"data_cleanup"},{offsetMs:1600,description:"Attempted to match orphans to master records",toolCategory:"data_cleanup"},{offsetMs:3200,description:"Matched 28 records, 14 remain unresolvable",toolCategory:"data_cleanup"},{offsetMs:3800,description:"Process halted: missing reference table access",toolCategory:"data_cleanup"}],durationMs:4e3,creditsUsed:6190,status:"incomplete",goal:"Clean up orphaned records in the staging table",outcomeSummaryFull:"Ponder detected 42 orphaned records in staging. Matched 28 to master records, but 14 remain unresolved. Process halted due to missing access to the customer reference table. Manual intervention required.",feedback:"down"},{id:"exec-022",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-14T06:00:00Z",trigger:{id:"trig-022",label:"Weekly data audit scheduled",type:"scheduled"},workflow:de[7],steps:[{offsetMs:0,description:"Weekly audit trigger fired",toolCategory:"scheduling"},{offsetMs:1400,description:"Scanned 2,412 employee records",toolCategory:"data_cleanup"},{offsetMs:4200,description:"Found 5 records with stale location data",toolCategory:"data_cleanup"},{offsetMs:5800,description:"Auto-corrected 3 based on recent office moves",toolCategory:"data_cleanup"},{offsetMs:6800,description:"Flagged 2 for manual review",toolCategory:"data_cleanup"}],durationMs:7400,creditsUsed:11060,status:"in_progress",goal:"Identify and resolve data inconsistencies in employee records",outcomeSummaryFull:"Weekly data audit scanned 2,412 records. Found 5 with stale location data: 3 auto-corrected, 2 flagged for review. Report generation pending — awaiting confirmation from ops lead before posting.",feedback:null},{id:"exec-023",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-01T10:15:00Z",trigger:{id:"trig-023",label:"Leave request submitted by Hannah Park",type:"form_submission"},workflow:de[0],steps:[{offsetMs:0,description:"Received PTO request form",toolCategory:"data_cleanup"},{offsetMs:700,description:"Checked accrual balance and blackout dates",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Responded to employee via chat",toolCategory:"communication",channel:"chat"}],durationMs:2400,creditsUsed:290,goal:"Help employees understand and submit leave requests accurately",conversations:[{id:"conv-050",contactName:"Hannah Park",outcome:"goal_achieved",summary:"Hannah confirmed her PTO balance and submitted a 5-day request.",thread:[{role:"agent",content:"Hi Hannah! I see your PTO request for May 4-8. You currently have 72 hours accrued, which easily covers the 40 hours you're requesting."},{role:"user",content:"Perfect. Is that week OK to take off?"},{role:"agent",content:"It's outside any blackout windows, so you're good to go. I've routed the request to your manager for approval. You'll hear back within 2 business days."},{role:"user",content:"Thanks!"}]},{id:"conv-051",contactName:"Bryan Osei",outcome:"completed_no_action",summary:"Bryan learned he didn't have enough accrued time and withdrew the request.",thread:[{role:"agent",content:"Hi Bryan, I reviewed your leave request for 6 days next month. You currently have 32 hours accrued, which covers only 4 days."},{role:"user",content:"Ah, I didn't realize. Let me just withdraw it and plan for something shorter later."},{role:"agent",content:"No problem — I've withdrawn the request. You'll accrue another 16 hours by end of June if that helps with planning."}]}],outcomeSummaryFull:"Processed 2 leave requests. Hannah Park: 5-day PTO approved and routed to manager. Bryan Osei: withdrew request after learning of insufficient accrual.",feedback:null},{id:"exec-024",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-002",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-04T14:22:00Z",trigger:{id:"trig-024",label:"FSA question from employee chat",type:"inbound_message"},workflow:de[1],steps:[{offsetMs:0,description:"Inbound FSA question received",toolCategory:"communication"},{offsetMs:600,description:"Looked up current plan documents",toolCategory:"data_cleanup"},{offsetMs:1500,description:"Answered employee via chat",toolCategory:"communication",channel:"chat"}],durationMs:2100,creditsUsed:250,goal:"Answer benefits policy questions accurately and promptly",conversations:[{id:"conv-052",contactName:"Lena Ortiz",outcome:"goal_achieved",summary:"Lena got clarity on dependent-care FSA limits before submitting a claim.",thread:[{role:"agent",content:"Hi Lena! I got your question about the dependent-care FSA. What would you like to know?"},{role:"user",content:"What's the annual limit and can I use it for summer camp?"},{role:"agent",content:"The 2026 limit is $5,000 per household ($2,500 if married filing separately). Day camps qualify — overnight camps do not. Keep receipts and submit through the FSA portal."},{role:"user",content:"Exactly what I needed. Thanks!"}]}],outcomeSummaryFull:"Answered Lena Ortiz's dependent-care FSA question: confirmed $5,000 annual limit and that day camps are eligible expenses.",feedback:"up"},{id:"exec-025",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-11T16:40:00Z",trigger:{id:"trig-025",label:"Ponder flagged repeat questions about bereavement policy",type:"ai_suggestion"},workflow:de[0],steps:[{offsetMs:0,description:"Ponder detected 4 bereavement policy questions this week",toolCategory:"data_cleanup"},{offsetMs:900,description:"Drafted clarification message",toolCategory:"data_cleanup"},{offsetMs:2100,description:"Messaged affected employees via chat",toolCategory:"communication",channel:"chat"}],durationMs:2800,creditsUsed:370,goal:"Proactively clarify confusing policies when multiple employees ask similar questions",conversations:[{id:"conv-053",contactName:"Kim Alvarez",outcome:"goal_achieved",summary:"Kim got confirmation that bereavement leave covers her aunt.",thread:[{role:"agent",content:"Hi Kim, I wanted to follow up on your question about bereavement leave. Our policy covers immediate family including aunts and uncles — you're eligible for up to 3 paid days."},{role:"user",content:"Oh good. I'll submit the request today."},{role:"agent",content:"Take the time you need. If travel is involved I can also help route a request for an extra unpaid day."}]},{id:"conv-054",contactName:"Nate Holloway",outcome:"goal_achieved",summary:"Nate learned step-parent qualifies for bereavement under the policy.",thread:[{role:"agent",content:"Hi Nate, following up on your bereavement question. Step-parents are included in our policy's definition of immediate family — so you qualify for up to 5 days."},{role:"user",content:"Thank you, that's really helpful."}]}],outcomeSummaryFull:"Ponder flagged a pattern of bereavement policy questions. Erin proactively clarified coverage for Kim Alvarez (aunt) and Nate Holloway (step-parent). Both confirmed eligibility.",feedback:"up"},{id:"exec-026",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-06T05:45:00Z",trigger:{id:"trig-026",label:"Monthly role-title audit",type:"scheduled"},workflow:de[7],steps:[{offsetMs:0,description:"Role audit job started",toolCategory:"scheduling"},{offsetMs:1600,description:"Compared HRIS titles with org chart of record",toolCategory:"data_cleanup"},{offsetMs:3400,description:"Found 11 mismatches — titles vs compensation band",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Auto-corrected 7 based on approved promotions",toolCategory:"data_cleanup"},{offsetMs:5600,description:"Flagged 4 for comp-team review",toolCategory:"data_cleanup"}],durationMs:6100,creditsUsed:8230,status:"success",goal:"Keep job titles consistent with approved compensation bands",outcomeSummaryFull:"Monthly role audit found 11 title/band mismatches across 850 records. 7 were auto-corrected using the approved promotion log; 4 were escalated to the compensation team.",feedback:null},{id:"exec-027",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-12T08:30:00Z",trigger:{id:"trig-027",label:"Daily employment verification batch",type:"scheduled"},workflow:de[7],steps:[{offsetMs:0,description:"Verification batch started",toolCategory:"scheduling"},{offsetMs:1100,description:"Processed 18 incoming verification requests",toolCategory:"data_cleanup"},{offsetMs:2900,description:"Generated 18 standardized verification letters",toolCategory:"data_cleanup"},{offsetMs:3700,description:"Emailed letters to requesting parties",toolCategory:"communication",channel:"email"}],durationMs:4200,creditsUsed:5540,status:"success",goal:"Respond to third-party employment verification requests same-day",outcomeSummaryFull:"Processed 18 employment verification requests for mortgage, rental, and loan applications. All standardized letters generated and emailed same-day.",feedback:null},{id:"exec-028",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-02T12:10:00Z",trigger:{id:"trig-028",label:"Shift swap request from Tara Bishop",type:"form_submission"},workflow:de[2],steps:[{offsetMs:0,description:"Swap request received",toolCategory:"scheduling"},{offsetMs:500,description:"Identified eligible swap partners",toolCategory:"data_cleanup"},{offsetMs:1100,description:"Messaged candidates via SMS",toolCategory:"communication",channel:"sms"},{offsetMs:2400,description:"Confirmed accepted swap and updated schedule",toolCategory:"scheduling"}],durationMs:3e3,creditsUsed:410,goal:"Facilitate shift swaps between eligible employees",conversations:[{id:"conv-055",contactName:"Tara Bishop",outcome:"goal_achieved",summary:"Tara swapped her Friday closing for Tuesday morning.",thread:[{role:"agent",content:"Hi Tara, I received your swap request. I found 2 eligible partners. Sending requests now."},{role:"user",content:"Thanks, hoping someone can take Friday."},{role:"agent",content:"Jordan accepted the swap. You'll now work Tuesday 8AM-4PM instead of Friday closing."},{role:"user",content:"Perfect, thanks!"}]},{id:"conv-056",contactName:"Jordan Kwan",outcome:"goal_achieved",summary:"Jordan accepted the Friday closing shift in exchange.",thread:[{role:"agent",content:"Hi Jordan, Tara is looking to swap her Friday 3PM-11PM for your Tuesday 8AM-4PM. Interested?"},{role:"user",content:"Yes, that works for me."},{role:"agent",content:"Swap confirmed. You're on for Friday closing."}]}],outcomeSummaryFull:"Shift swap completed between Tara Bishop and Jordan Kwan. Tara moved from Friday closing to Tuesday morning. Schedule updated.",feedback:null},{id:"exec-029",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-005",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-05T09:20:00Z",trigger:{id:"trig-029",label:"Manager published new schedule — warehouse",type:"schedule_change"},workflow:de[3],steps:[{offsetMs:0,description:"Detected published schedule",toolCategory:"scheduling"},{offsetMs:500,description:"Computed per-employee deltas for 9 people",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Sent confirmation SMS to each affected employee",toolCategory:"communication",channel:"sms"}],durationMs:2600,creditsUsed:440,goal:"Make sure every employee acknowledges their upcoming schedule",conversations:[{id:"conv-057",contactName:"Isabel Moreno",outcome:"goal_achieved",summary:"Isabel confirmed her new schedule.",thread:[{role:"agent",content:"Hi Isabel, your warehouse schedule for next week: Mon/Wed/Fri 6AM-2PM. Reply OK to confirm."},{role:"user",content:"OK"}]},{id:"conv-058",contactName:"Wade Sullivan",outcome:"in_progress",summary:"Wade has not responded yet.",thread:[{role:"agent",content:"Hi Wade, you're scheduled Tues/Thurs/Sat 2PM-10PM next week. Reply OK to confirm."}]},{id:"conv-059",contactName:"Priya Natarajan",outcome:"goal_achieved",summary:"Priya acknowledged her updated hours.",thread:[{role:"agent",content:"Hi Priya, your updated schedule: Wed-Sun 10AM-6PM. Reply OK to confirm."},{role:"user",content:"OK thanks"}]}],outcomeSummaryFull:"Sent schedule confirmations to 3 warehouse team members. Isabel Moreno and Priya Natarajan confirmed. Wade Sullivan has not yet responded.",feedback:null},{id:"exec-030",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-08T18:45:00Z",trigger:{id:"trig-030",label:"Ponder predicted understaffing for tomorrow's dinner rush",type:"ai_suggestion"},workflow:de[2],steps:[{offsetMs:0,description:"Ponder flagged dinner-shift staffing gap",toolCategory:"scheduling"},{offsetMs:500,description:"Pulled list of eligible off-duty staff",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent coverage offers via SMS",toolCategory:"communication",channel:"sms"},{offsetMs:3200,description:"Confirmed two accepts",toolCategory:"scheduling"}],durationMs:3800,creditsUsed:480,goal:"Close predicted coverage gaps before the shift starts",conversations:[{id:"conv-060",contactName:"Riley McCabe",outcome:"goal_achieved",summary:"Riley picked up the 5-9PM dinner shift.",thread:[{role:"agent",content:"Hi Riley, tomorrow 5-9PM dinner shift needs coverage. Available?"},{role:"user",content:"Sure, I can do that."},{role:"agent",content:"You're on. Thanks, Riley!"}]},{id:"conv-061",contactName:"Deion Hart",outcome:"goal_achieved",summary:"Deion accepted a 6-10PM support shift.",thread:[{role:"agent",content:"Hey Deion, tomorrow 6-10PM we could use extra support. Can you cover?"},{role:"user",content:"Yep, sign me up."},{role:"agent",content:"Confirmed. Appreciate it!"}]}],outcomeSummaryFull:"Ponder predicted understaffing for tomorrow's dinner rush. Sched contacted 5 off-duty staff; Riley McCabe and Deion Hart accepted. Gap closed.",feedback:"up"},{id:"exec-031",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-03T04:30:00Z",trigger:{id:"trig-031",label:"Bi-weekly timecard audit",type:"scheduled"},workflow:de[2],steps:[{offsetMs:0,description:"Audit job started",toolCategory:"scheduling"},{offsetMs:1800,description:"Reviewed timecards for 220 hourly employees",toolCategory:"data_cleanup"},{offsetMs:5100,description:"Found 14 missed punches",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Auto-corrected 10 using scheduled-shift inference",toolCategory:"data_cleanup"},{offsetMs:8200,description:"Flagged 4 for manager confirmation",toolCategory:"data_cleanup"}],durationMs:8900,creditsUsed:11540,status:"success",goal:"Catch and resolve missing timecard punches before payroll runs",outcomeSummaryFull:"Bi-weekly timecard audit covered 220 hourly employees. 14 missed punches detected: 10 inferred from scheduled shifts, 4 flagged for manager review. Ready for payroll.",feedback:"up"},{id:"exec-032",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-09T04:00:00Z",trigger:{id:"trig-032",label:"Daily next-7-day shift gap scan",type:"scheduled"},workflow:de[2],steps:[{offsetMs:0,description:"Shift gap scan started",toolCategory:"scheduling"},{offsetMs:1400,description:"Analyzed forecasted demand vs published schedule",toolCategory:"data_cleanup"},{offsetMs:3600,description:"Found 6 under-staffed shift windows",toolCategory:"data_cleanup"},{offsetMs:4600,description:"Posted coverage needs to #scheduling channel",toolCategory:"communication",channel:"chat"}],durationMs:5200,creditsUsed:7500,status:"success",goal:"Identify shift gaps 7 days in advance so managers can act",outcomeSummaryFull:"Daily shift gap scan detected 6 under-staffed windows across next 7 days (3 dinner, 2 weekend morning, 1 overnight). Coverage needs posted for managers.",feedback:null},{id:"exec-033",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-15T05:00:00Z",trigger:{id:"trig-033",label:"Weekly reconciliation cross-location",type:"scheduled"},workflow:de[2],steps:[{offsetMs:0,description:"Reconciliation started",toolCategory:"scheduling"},{offsetMs:2100,description:"Pulled shift data from 4 of 5 locations",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Waiting on missing export from Store 17",toolCategory:"data_cleanup"}],durationMs:5100,creditsUsed:5290,status:"in_progress",goal:"Reconcile scheduled shifts with time-clock entries across all locations",outcomeSummaryFull:"Cross-location reconciliation running. 4 of 5 location exports received; waiting on Store 17 data before completing the compare.",feedback:null},{id:"exec-034",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-01T13:00:00Z",trigger:{id:"trig-034",label:"Missing documents reminder — day 4 new hires",type:"scheduled"},workflow:de[4],steps:[{offsetMs:0,description:"Day-4 doc check triggered",toolCategory:"scheduling"},{offsetMs:500,description:"Identified 2 new hires missing I-9 Section 2",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent reminders via email",toolCategory:"communication",channel:"email"}],durationMs:1900,creditsUsed:260,goal:"Ensure new hires complete compliance documents on time",conversations:[{id:"conv-062",contactName:"Kenji Tanaka",outcome:"goal_achieved",summary:"Kenji uploaded his I-9 supporting documents.",thread:[{role:"agent",content:"Hi Kenji! Friendly reminder — your I-9 Section 2 is due by end of week. You can upload a passport or license + SS card."},{role:"user",content:"Just uploaded my passport. Is that enough?"},{role:"agent",content:"Yes! Passport is a List A document and satisfies the I-9 on its own. You're all set."}]},{id:"conv-063",contactName:"Fatima Al-Said",outcome:"in_progress",summary:"Fatima said she'll upload her documents this evening.",thread:[{role:"agent",content:"Hi Fatima, just a reminder your I-9 Section 2 documents are still outstanding."},{role:"user",content:"Oh sorry — I'll upload them tonight when I get home."},{role:"agent",content:"No worries, thanks for the heads up!"}]}],outcomeSummaryFull:"Day-4 document reminders sent. Kenji Tanaka completed I-9 upload. Fatima Al-Said committed to upload tonight.",feedback:null},{id:"exec-035",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-07T10:15:00Z",trigger:{id:"trig-035",label:"Schedule orientation for April cohort",type:"scheduled"},workflow:de[4],steps:[{offsetMs:0,description:"Orientation scheduling triggered",toolCategory:"scheduling"},{offsetMs:700,description:"Checked facilitator availability",toolCategory:"data_cleanup"},{offsetMs:1600,description:"Sent invites to 5 new hires",toolCategory:"communication",channel:"email"}],durationMs:2300,creditsUsed:320,goal:"Book and confirm orientation sessions for new cohorts",conversations:[{id:"conv-064",contactName:"Gabriela Reyes",outcome:"goal_achieved",summary:"Gabriela confirmed her orientation slot.",thread:[{role:"agent",content:"Hi Gabriela! Welcome again. I'm scheduling orientation for April 14 at 9AM. Does that time work for you?"},{role:"user",content:"Yes that works!"},{role:"agent",content:"Great, invite sent. See you there!"}]},{id:"conv-065",contactName:"Theo Whitfield",outcome:"goal_achieved",summary:"Theo accepted the orientation invite.",thread:[{role:"agent",content:"Hi Theo! Orientation for your cohort is April 14, 9AM. Good to go?"},{role:"user",content:"All set."}]}],outcomeSummaryFull:"Orientation scheduled for April cohort on April 14 at 9AM. Gabriela Reyes and Theo Whitfield confirmed.",feedback:"up"},{id:"exec-036",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-11T14:30:00Z",trigger:{id:"trig-036",label:"Week-2 new hire check-in",type:"scheduled"},workflow:de[4],steps:[{offsetMs:0,description:"Week-2 check-in triggered",toolCategory:"scheduling"},{offsetMs:400,description:"Pulled progress status for each new hire",toolCategory:"data_cleanup"},{offsetMs:1100,description:"Sent check-in messages via chat",toolCategory:"communication",channel:"chat"}],durationMs:1700,creditsUsed:270,goal:"Check in with new hires 2 weeks in to surface blockers",conversations:[{id:"conv-066",contactName:"Aisha Mahmoud",outcome:"goal_achieved",summary:"Aisha reported a smooth onboarding so far.",thread:[{role:"agent",content:"Hi Aisha! It's been two weeks — how's it going? Anything you're stuck on?"},{role:"user",content:"Going great! My team has been super welcoming. No blockers."},{role:"agent",content:"Wonderful! I'll check back at the 30-day mark. Let me know anytime if something comes up."}]},{id:"conv-067",contactName:"Ryan Brooks",outcome:"goal_achieved",summary:"Ryan flagged a software access issue that Onbi routed to IT.",thread:[{role:"agent",content:"Hi Ryan, it's been 2 weeks — how are things going?"},{role:"user",content:"Pretty good. One thing: I still don't have access to the analytics tool."},{role:"agent",content:"Let me get that routed to IT right now. You should have access by end of day."},{role:"user",content:"Thanks!"}]}],outcomeSummaryFull:"Week-2 check-ins with 2 new hires. Aisha Mahmoud: smooth start, no blockers. Ryan Brooks: analytics tool access ticket created with IT.",feedback:null},{id:"exec-037",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-009",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-06T07:30:00Z",trigger:{id:"trig-037",label:"Weekly onboarding checklist audit",type:"scheduled"},workflow:de[4],steps:[{offsetMs:0,description:"Checklist audit started",toolCategory:"scheduling"},{offsetMs:1e3,description:"Reviewed 22 active onboarding plans",toolCategory:"data_cleanup"},{offsetMs:3100,description:"19 on-track, 3 behind schedule",toolCategory:"data_cleanup"},{offsetMs:4e3,description:"Generated audit summary",toolCategory:"data_cleanup"}],durationMs:4600,creditsUsed:5990,status:"success",goal:"Track onboarding progress across all active new hires",outcomeSummaryFull:"Audited 22 active onboarding plans. 19 on-track, 3 behind schedule (>3 days stale). Summary emailed to people-ops lead.",feedback:null},{id:"exec-038",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-13T07:00:00Z",trigger:{id:"trig-038",label:"Ponder flagged upcoming I-9 deadlines",type:"ai_suggestion"},workflow:de[5],steps:[{offsetMs:0,description:"Document validation sweep started",toolCategory:"scheduling"},{offsetMs:1200,description:"Cross-checked I-9 expirations against current employees",toolCategory:"data_cleanup"},{offsetMs:2800,description:"Found 4 records with re-verification due in 30 days",toolCategory:"data_cleanup"},{offsetMs:3700,description:"Generated re-verification task list for HR",toolCategory:"data_cleanup"}],durationMs:4200,creditsUsed:6470,status:"success",goal:"Catch expiring work authorizations before they lapse",outcomeSummaryFull:"Ponder flagged upcoming I-9 deadlines. Sweep found 4 employees whose work authorization re-verification is due in the next 30 days. Task list created for HR.",feedback:"up"},{id:"exec-039",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-14T07:45:00Z",trigger:{id:"trig-039",label:"Monthly compliance status check",type:"scheduled"},workflow:de[5],steps:[{offsetMs:0,description:"Compliance check started",toolCategory:"scheduling"},{offsetMs:1500,description:"Processed 40 of 68 training compliance records",toolCategory:"data_cleanup"},{offsetMs:3600,description:"LMS API rate limit hit — paused before completion",toolCategory:"data_cleanup"}],durationMs:3900,creditsUsed:4090,status:"incomplete",goal:"Verify all employees meet monthly compliance training requirements",outcomeSummaryFull:"Compliance status check processed 40 of 68 records before the LMS API rate limit blocked further reads. Remaining 28 will retry tonight.",feedback:null},{id:"exec-040",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-03T11:15:00Z",trigger:{id:"trig-040",label:"Inbound chat — how-to question",type:"inbound_message"},workflow:de[6],steps:[{offsetMs:0,description:"Inbound chat received",toolCategory:"communication"},{offsetMs:500,description:"Looked up related FAQ articles",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Responded with walkthrough",toolCategory:"communication",channel:"chat"}],durationMs:1800,creditsUsed:200,goal:"Answer product how-to questions quickly using FAQ knowledge",conversations:[{id:"conv-068",contactName:"Harper Stone",outcome:"goal_achieved",summary:"Harper learned how to invite team members to a shared workspace.",thread:[{role:"agent",content:"Hi Harper! Happy to help — what are you trying to do?"},{role:"user",content:"How do I invite people to my workspace?"},{role:"agent",content:"Go to Settings > Members, click “Invite”, and enter their email. They'll get a link to join. You can also set their role there."},{role:"user",content:"Got it, thanks!"}]}],outcomeSummaryFull:"Harper Stone asked how to invite team members. Cassie walked through the Settings > Members flow. Resolved in chat.",feedback:"up"},{id:"exec-041",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-05T15:50:00Z",trigger:{id:"trig-041",label:"Refund request ticket",type:"ticket_created"},workflow:de[6],steps:[{offsetMs:0,description:"Refund ticket received",toolCategory:"communication"},{offsetMs:500,description:"Pulled customer billing history",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Issued pro-rated refund",toolCategory:"data_cleanup"},{offsetMs:2200,description:"Emailed confirmation",toolCategory:"communication",channel:"email"}],durationMs:2800,creditsUsed:320,goal:"Process straightforward refund requests same-day within policy",conversations:[{id:"conv-069",contactName:"Mira Okonkwo",outcome:"goal_achieved",summary:"Mira received a pro-rated refund for canceling her annual plan early.",thread:[{role:"agent",content:"Hi Mira, I see you're canceling and requesting a refund. Since you're 4 months into your annual plan, you're eligible for a pro-rated refund of $319.92."},{role:"user",content:"Sounds fair. Please process it."},{role:"agent",content:"Done! Refund of $319.92 will hit your card in 3-5 business days. Sorry to see you go — best of luck!"}]}],outcomeSummaryFull:"Processed pro-rated refund of $319.92 for Mira Okonkwo's annual plan cancellation. Confirmation emailed.",feedback:null},{id:"exec-042",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-08T09:30:00Z",trigger:{id:"trig-042",label:"Bug report from enterprise account",type:"ticket_created"},workflow:de[6],steps:[{offsetMs:0,description:"Bug report received",toolCategory:"communication"},{offsetMs:500,description:"Reproduced issue in staging",toolCategory:"data_cleanup"},{offsetMs:2200,description:"Filed engineering ticket",toolCategory:"data_cleanup"},{offsetMs:3100,description:"Updated customer via chat",toolCategory:"communication",channel:"chat"}],durationMs:3800,creditsUsed:440,goal:"Triage and file bug reports with enough detail for engineering",conversations:[{id:"conv-070",contactName:"Logan Pierce",outcome:"in_progress",summary:"Logan's chart rendering bug was reproduced and filed with engineering.",thread:[{role:"agent",content:"Hi Logan, thanks for the detailed bug report on the chart rendering. I was able to reproduce it — looks like it's triggered by datasets over 10k rows."},{role:"user",content:"Yeah we hit that threshold yesterday. Any ETA?"},{role:"agent",content:"I've filed ENG-4812 with priority P2. Expected fix in the next release. I'll keep you posted."},{role:"user",content:"Thanks!"}]}],outcomeSummaryFull:"Reproduced Logan Pierce's chart rendering bug at >10k rows. Filed ENG-4812 at P2. Customer updated with timeline.",feedback:null},{id:"exec-043",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-10T12:45:00Z",trigger:{id:"trig-043",label:"Account question from customer chat",type:"inbound_message"},workflow:de[6],steps:[{offsetMs:0,description:"Inbound chat received",toolCategory:"communication"},{offsetMs:400,description:"Reviewed account settings",toolCategory:"data_cleanup"},{offsetMs:1300,description:"Walked customer through the change",toolCategory:"communication",channel:"chat"}],durationMs:1900,creditsUsed:230,goal:"Help customers manage account details and settings",conversations:[{id:"conv-071",contactName:"Tessa Alvarado",outcome:"goal_achieved",summary:"Tessa updated her billing email successfully.",thread:[{role:"agent",content:"Hi Tessa! How can I help?"},{role:"user",content:"I need to change the email invoices go to."},{role:"agent",content:"Go to Billing > Contacts > Edit, then enter the new email. Want me to walk through it with you?"},{role:"user",content:"I found it — thanks, updated!"},{role:"agent",content:"Great! Next invoice will go to the new address."}]},{id:"conv-072",contactName:"Jin Park",outcome:"goal_achieved",summary:"Jin changed his workspace name with Cassie's guidance.",thread:[{role:"agent",content:"Hi Jin, what do you need help with?"},{role:"user",content:"Renaming my workspace. Where do I do that?"},{role:"agent",content:"Settings > Workspace > rename field at the top. Save and it'll update everywhere."},{role:"user",content:"Done. Thanks!"}]}],outcomeSummaryFull:"Helped 2 customers: Tessa Alvarado updated billing email; Jin Park renamed his workspace. Both resolved in chat.",feedback:null},{id:"exec-044",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-12T10:00:00Z",trigger:{id:"trig-044",label:"Ponder detected cluster of duplicate FAQ questions",type:"ai_suggestion"},workflow:de[6],steps:[{offsetMs:0,description:"Ponder clustered 5 duplicate questions",toolCategory:"data_cleanup"},{offsetMs:600,description:"Drafted answer and reference link",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Replied to affected users via email",toolCategory:"communication",channel:"email"}],durationMs:2e3,creditsUsed:290,goal:"Batch-resolve common FAQ questions efficiently",conversations:[{id:"conv-073",contactName:"Sasha Bellamy",outcome:"goal_achieved",summary:"Sasha got the SSO setup guide and confirmed completion.",thread:[{role:"agent",content:"Hi Sasha! I saw your question about SSO. Here's our updated setup guide that walks through Okta, Azure AD, and Google: [link]."},{role:"user",content:"Thanks, this is exactly what I needed."},{role:"agent",content:"Glad it helped! Ping me if you hit anything weird during setup."}]},{id:"conv-074",contactName:"Marcus Lin",outcome:"completed_no_action",summary:"Marcus already figured it out on his own but appreciated the link.",thread:[{role:"agent",content:"Hi Marcus, about your SSO question — here's the updated setup guide: [link]."},{role:"user",content:"Oh I worked it out last night, but thanks!"}]},{id:"conv-075",contactName:"Naomi Hughes",outcome:"in_progress",summary:"Naomi is still working through SSO config with her IT team.",thread:[{role:"agent",content:"Hi Naomi, saw your SSO question. Here's the setup guide: [link]. Let me know if you run into anything."},{role:"user",content:"Thanks, our IT is reviewing. Will follow up if we're stuck."}]}],outcomeSummaryFull:"Ponder clustered 3 SSO setup questions. Cassie proactively shared the updated guide. Sasha Bellamy resolved; Marcus Lin already done; Naomi Hughes in progress with IT.",feedback:"up"},{id:"exec-045",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-13T16:20:00Z",trigger:{id:"trig-045",label:"Feature request submitted via in-app form",type:"form_submission"},workflow:de[6],steps:[{offsetMs:0,description:"Feature request received",toolCategory:"communication"},{offsetMs:500,description:"Logged in product feedback tracker",toolCategory:"data_cleanup"},{offsetMs:1100,description:"Thanked customer and explained next steps",toolCategory:"communication",channel:"email"}],durationMs:1700,creditsUsed:190,goal:"Route product feedback to the right team and close the loop with customers",conversations:[{id:"conv-076",contactName:"Owen Barrett",outcome:"goal_achieved",summary:"Owen got confirmation his feature request was logged for review.",thread:[{role:"agent",content:"Hi Owen! Thanks for the thoughtful request on custom export templates — I've logged it in our feedback tracker for the product team to review."},{role:"user",content:"Appreciate you taking it seriously. Any chance it'll be considered?"},{role:"agent",content:"The product team reviews requests monthly. I'll tag you when there's an update so you'll know either way."}]}],outcomeSummaryFull:"Owen Barrett's feature request (custom export templates) logged in product feedback tracker. Customer notified of the monthly review cadence.",feedback:null},{id:"exec-046",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-02T03:30:00Z",trigger:{id:"trig-046",label:"Nightly ETL validation run",type:"scheduled"},workflow:de[7],steps:[{offsetMs:0,description:"ETL validation started",toolCategory:"scheduling"},{offsetMs:2400,description:"Compared source vs warehouse row counts",toolCategory:"data_cleanup"},{offsetMs:5600,description:"Row counts match across 14 tables",toolCategory:"data_cleanup"},{offsetMs:7800,description:"Spot-checked 6 sampled columns for drift",toolCategory:"data_cleanup"},{offsetMs:9600,description:"Posted green-light summary",toolCategory:"communication",channel:"chat"}],durationMs:10200,creditsUsed:15200,status:"success",goal:"Verify nightly ETL completed correctly before downstream jobs run",outcomeSummaryFull:"Nightly ETL validation green across 14 tables. Row counts match source; sampled columns show no drift. Downstream reports cleared to run.",feedback:"up"},{id:"exec-047",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-04T02:00:00Z",trigger:{id:"trig-047",label:"Ponder suggested PII scan after schema change",type:"ai_suggestion"},workflow:de[7],steps:[{offsetMs:0,description:"PII scan started after schema change",toolCategory:"scheduling"},{offsetMs:3400,description:"Scanned 28 newly added columns",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Flagged 3 columns as likely PII (email, phone, DOB)",toolCategory:"data_cleanup"},{offsetMs:9600,description:"Applied masking policy to flagged columns",toolCategory:"data_cleanup"},{offsetMs:10800,description:"Logged compliance action in audit trail",toolCategory:"data_cleanup"}],durationMs:11400,creditsUsed:19240,status:"success",goal:"Detect and protect newly introduced PII columns automatically",outcomeSummaryFull:"Post-schema PII scan of 28 new columns. Flagged 3 as PII (email, phone, DOB) and applied masking policy. Audit trail updated.",feedback:"up"},{id:"exec-048",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-09T02:30:00Z",trigger:{id:"trig-048",label:"Nightly null normalization",type:"scheduled"},workflow:de[8],steps:[{offsetMs:0,description:"Null normalization job started",toolCategory:"scheduling"},{offsetMs:2100,description:"Scanned 4,200 records for string “null” / empty / N/A values",toolCategory:"data_cleanup"},{offsetMs:5400,description:"Normalized 312 records to SQL NULL",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Re-ran downstream aggregations",toolCategory:"data_cleanup"}],durationMs:7900,creditsUsed:10190,status:"success",goal:"Normalize inconsistent null representations across tables",outcomeSummaryFull:"Nightly null normalization: scanned 4,200 records, converted 312 inconsistent null representations to SQL NULL, and re-ran downstream aggregations.",feedback:null},{id:"exec-049",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-11T07:30:00Z",trigger:{id:"trig-049",label:"Monthly ops report generation",type:"scheduled"},workflow:de[9],steps:[{offsetMs:0,description:"Monthly report generation started",toolCategory:"scheduling"},{offsetMs:1200,description:"Aggregated metrics from 8 data sources",toolCategory:"data_cleanup"},{offsetMs:3600,description:"Computed month-over-month trends",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Generated formatted PDF and distribution list email",toolCategory:"communication",channel:"email"}],durationMs:5400,creditsUsed:8900,status:"success",goal:"Deliver the monthly operations report to executive distribution",outcomeSummaryFull:"Monthly ops report generated from 8 sources, MoM trends computed, PDF distributed to executive list.",feedback:null},{id:"exec-050",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-15T02:45:00Z",trigger:{id:"trig-050",label:"Nightly record cleanup",type:"scheduled"},workflow:de[8],steps:[{offsetMs:0,description:"Cleanup job started",toolCategory:"scheduling"},{offsetMs:2800,description:"Processed 1,600 of 3,200 records",toolCategory:"data_cleanup"},{offsetMs:6100,description:"Job still running at scheduled checkpoint",toolCategory:"data_cleanup"}],durationMs:6400,creditsUsed:6860,status:"in_progress",goal:"Clean up stale and malformed contact records nightly",outcomeSummaryFull:"Nightly cleanup job processed 1,600 of 3,200 records before the reporting checkpoint. Remaining records will complete in the continuation run.",feedback:null},{id:"exec-h01",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-01-09T03:00:00Z",trigger:{id:"trig-h01",label:"Weekly data audit",type:"scheduled"},workflow:de[7],steps:[{offsetMs:0,description:"Weekly audit batch",toolCategory:"data_cleanup"}],durationMs:5400,creditsUsed:14200,status:"success",goal:"Audit records weekly",outcomeSummaryFull:"Weekly audit completed.",feedback:"up"},{id:"exec-h02",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-01-17T11:20:00Z",trigger:{id:"trig-h02",label:"Document collection batch",type:"scheduled"},workflow:de[5],steps:[{offsetMs:0,description:"Collected onboarding docs",toolCategory:"data_cleanup"}],durationMs:4200,creditsUsed:16500,status:"success",goal:"Collect onboarding documents",outcomeSummaryFull:"All outstanding documents collected.",feedback:"up"},{id:"exec-h03",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-01-26T18:45:00Z",trigger:{id:"trig-h03",label:"Record cleanup",type:"scheduled"},workflow:de[8],steps:[{offsetMs:0,description:"Deduped contact records",toolCategory:"data_cleanup"}],durationMs:5100,creditsUsed:14800,status:"success",goal:"Dedup contact records",outcomeSummaryFull:"Merged 48 duplicate records.",feedback:null},{id:"exec-h04",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-02-03T04:00:00Z",trigger:{id:"trig-h04",label:"Weekly data audit",type:"scheduled"},workflow:de[7],steps:[{offsetMs:0,description:"Weekly audit batch",toolCategory:"data_cleanup"}],durationMs:5600,creditsUsed:13700,status:"success",goal:"Audit records weekly",outcomeSummaryFull:"Weekly audit completed.",feedback:"up"},{id:"exec-h05",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-02-11T08:15:00Z",trigger:{id:"trig-h05",label:"Ops reporting",type:"scheduled"},workflow:de[9],steps:[{offsetMs:0,description:"Generated ops report",toolCategory:"data_cleanup"}],durationMs:4800,creditsUsed:15200,status:"success",goal:"Generate ops report",outcomeSummaryFull:"Report generated and distributed.",feedback:"up"},{id:"exec-h06",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-02-19T10:00:00Z",trigger:{id:"trig-h06",label:"Document collection batch",type:"scheduled"},workflow:de[5],steps:[{offsetMs:0,description:"Collected onboarding docs",toolCategory:"data_cleanup"}],durationMs:4100,creditsUsed:13400,status:"success",goal:"Collect onboarding documents",outcomeSummaryFull:"All outstanding documents collected.",feedback:null},{id:"exec-h07",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-02-25T21:30:00Z",trigger:{id:"trig-h07",label:"Record cleanup",type:"scheduled"},workflow:de[8],steps:[{offsetMs:0,description:"Deduped contact records",toolCategory:"data_cleanup"}],durationMs:5200,creditsUsed:12900,status:"incomplete",goal:"Dedup contact records",outcomeSummaryFull:"Partial cleanup — 65% of batch processed.",feedback:null},{id:"exec-h08",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-05T03:00:00Z",trigger:{id:"trig-h08",label:"Weekly data audit",type:"scheduled"},workflow:de[7],steps:[{offsetMs:0,description:"Weekly audit batch",toolCategory:"data_cleanup"}],durationMs:5400,creditsUsed:17600,status:"success",goal:"Audit records weekly",outcomeSummaryFull:"Weekly audit completed.",feedback:"up"},{id:"exec-h09",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-12T14:10:00Z",trigger:{id:"trig-h09",label:"Document collection batch",type:"scheduled"},workflow:de[5],steps:[{offsetMs:0,description:"Collected onboarding docs",toolCategory:"data_cleanup"}],durationMs:4400,creditsUsed:18300,status:"success",goal:"Collect onboarding documents",outcomeSummaryFull:"All outstanding documents collected.",feedback:"up"},{id:"exec-h10",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-21T19:50:00Z",trigger:{id:"trig-h10",label:"Record cleanup",type:"scheduled"},workflow:de[8],steps:[{offsetMs:0,description:"Deduped contact records",toolCategory:"data_cleanup"}],durationMs:5300,creditsUsed:16800,status:"success",goal:"Dedup contact records",outcomeSummaryFull:"Merged 53 duplicate records.",feedback:null},{id:"exec-h11",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-28T22:00:00Z",trigger:{id:"trig-h11",label:"Ops reporting",type:"scheduled"},workflow:de[9],steps:[{offsetMs:0,description:"Generated ops report",toolCategory:"data_cleanup"}],durationMs:4900,creditsUsed:17400,status:"success",goal:"Generate ops report",outcomeSummaryFull:"Report generated and distributed.",feedback:"up"}],Tl=[{personaId:"persona-001",period:"7d",triggersReceived:12,triggersExecuted:9},{personaId:"persona-001",period:"prior_7d",triggersReceived:10,triggersExecuted:7},{personaId:"persona-001",period:"all",triggersReceived:248,triggersExecuted:201},{personaId:"persona-002",period:"7d",triggersReceived:8,triggersExecuted:6},{personaId:"persona-002",period:"prior_7d",triggersReceived:11,triggersExecuted:9},{personaId:"persona-002",period:"all",triggersReceived:173,triggersExecuted:141},{personaId:"persona-003",period:"7d",triggersReceived:6,triggersExecuted:5},{personaId:"persona-003",period:"prior_7d",triggersReceived:4,triggersExecuted:3},{personaId:"persona-003",period:"all",triggersReceived:96,triggersExecuted:82},{personaId:"persona-004",period:"7d",triggersReceived:15,triggersExecuted:12},{personaId:"persona-004",period:"prior_7d",triggersReceived:13,triggersExecuted:10},{personaId:"persona-004",period:"all",triggersReceived:312,triggersExecuted:254},{personaId:"persona-005",period:"7d",triggersReceived:9,triggersExecuted:8},{personaId:"persona-005",period:"prior_7d",triggersReceived:7,triggersExecuted:7},{personaId:"persona-005",period:"all",triggersReceived:186,triggersExecuted:165}],Vn=new Date("2026-04-15T00:00:00Z");function Kr(r,s=Vn){const i=s,l=new Date(s);return r==="24h"&&l.setHours(l.getHours()-24),r==="7d"&&l.setDate(l.getDate()-7),r==="30d"&&l.setDate(l.getDate()-30),r==="all"&&l.setFullYear(l.getFullYear()-1),{from:l,to:i}}function Di(r,s=Vn){const{from:i,to:l}=Kr(r,s),c=l.getTime()-i.getTime();return{from:new Date(i.getTime()-c),to:i}}function Mn(r,s){return r.filter(i=>{const l=new Date(i.timestamp).getTime();return l>=s.from.getTime()&&l<s.to.getTime()})}function ug(r,s){return s===0&&r===0?null:s===0?100:(r-s)/s*100}function El(r){let s=0;for(const i of r)i.deploymentType==="engage_less"?i.status==="success"&&(s+=1):s+=i.conversations.filter(l=>l.outcome==="goal_achieved").length;return s}function $l(r){let s=0;for(const i of r)i.deploymentType==="engage_less"?s+=1:s+=i.conversations.length;return s}const Iu={hourlyRate:30},Co=[{workflowId:"wf-001",goal:"Help employees update their profile information accurately",avgManualDurationMs:9e5,sampleSize:45,source:"historical"},{workflowId:"wf-001",goal:"Help employees understand and submit leave requests accurately",avgManualDurationMs:12e5,sampleSize:28,source:"historical"},{workflowId:"wf-001",goal:"Proactively clarify confusing policies when multiple employees ask similar questions",avgManualDurationMs:15e5,sampleSize:18,source:"estimate"},{workflowId:"wf-002",goal:"Ensure all eligible employees complete benefits enrollment before the deadline",avgManualDurationMs:18e5,sampleSize:22,source:"historical"},{workflowId:"wf-002",goal:"Answer benefits policy questions accurately and promptly",avgManualDurationMs:12e5,sampleSize:36,source:"historical"},{workflowId:"wf-003",goal:"Find replacement coverage for open shifts as quickly as possible",avgManualDurationMs:24e5,sampleSize:38,source:"historical"},{workflowId:"wf-003",goal:"Proactively resolve scheduling conflicts before they cause coverage gaps",avgManualDurationMs:18e5,sampleSize:60,source:"historical"},{workflowId:"wf-003",goal:"Facilitate shift swaps between eligible employees",avgManualDurationMs:15e5,sampleSize:33,source:"historical"},{workflowId:"wf-003",goal:"Reconcile scheduled shifts with actual time-clock entries to detect discrepancies",avgManualDurationMs:27e5,sampleSize:14,source:"estimate"},{workflowId:"wf-003",goal:"Close predicted coverage gaps before the shift starts",avgManualDurationMs:15e5,sampleSize:21,source:"historical"},{workflowId:"wf-004",goal:"Notify employees of schedule changes and collect acknowledgments",avgManualDurationMs:6e5,sampleSize:52,source:"historical"},{workflowId:"wf-004",goal:"Make sure every employee acknowledges their upcoming schedule",avgManualDurationMs:9e5,sampleSize:27,source:"historical"},{workflowId:"wf-005",goal:"Guide new hires through their first-day onboarding checklist",avgManualDurationMs:21e5,sampleSize:19,source:"historical"},{workflowId:"wf-005",goal:"Follow up with new hires who have incomplete onboarding items from day 1",avgManualDurationMs:15e5,sampleSize:25,source:"historical"},{workflowId:"wf-005",goal:"Check in with new hires 2 weeks in to surface blockers",avgManualDurationMs:12e5,sampleSize:17,source:"historical"},{workflowId:"wf-005",goal:"Ensure onboarding checklists are completed within the target timeframe",avgManualDurationMs:18e5,sampleSize:11,source:"estimate"},{workflowId:"wf-006",goal:"Collect onboarding documents",avgManualDurationMs:18e5,sampleSize:24,source:"historical"},{workflowId:"wf-006",goal:"Verify all employees meet monthly compliance training requirements",avgManualDurationMs:36e5,sampleSize:12,source:"estimate"},{workflowId:"wf-006",goal:"Catch expiring work authorizations before they lapse",avgManualDurationMs:15e5,sampleSize:8,source:"estimate"},{workflowId:"wf-007",goal:"Respond to P1 tickets within 5 minutes and begin troubleshooting immediately",avgManualDurationMs:9e5,sampleSize:80,source:"historical"},{workflowId:"wf-007",goal:"Triage incoming support tickets and provide timely first responses",avgManualDurationMs:72e4,sampleSize:64,source:"historical"},{workflowId:"wf-007",goal:"Process straightforward refund requests same-day within policy",avgManualDurationMs:9e5,sampleSize:40,source:"historical"},{workflowId:"wf-007",goal:"Batch-resolve common FAQ questions efficiently",avgManualDurationMs:6e5,sampleSize:55,source:"historical"},{workflowId:"wf-007",goal:"Route product feedback to the right team and close the loop with customers",avgManualDurationMs:12e5,sampleSize:22,source:"historical"},{workflowId:"wf-008",goal:"Audit records weekly",avgManualDurationMs:54e5,sampleSize:20,source:"historical"},{workflowId:"wf-008",goal:"Identify and resolve data inconsistencies in HR employee records",avgManualDurationMs:45e5,sampleSize:18,source:"historical"},{workflowId:"wf-008",goal:"Identify and resolve data inconsistencies in employee records",avgManualDurationMs:45e5,sampleSize:16,source:"historical"},{workflowId:"wf-009",goal:"Dedup contact records",avgManualDurationMs:27e5,sampleSize:15,source:"historical"},{workflowId:"wf-009",goal:"Eliminate duplicate contact records to maintain data integrity",avgManualDurationMs:27e5,sampleSize:12,source:"historical"},{workflowId:"wf-009",goal:"Clean up orphaned records in the staging table",avgManualDurationMs:18e5,sampleSize:10,source:"historical"},{workflowId:"wf-009",goal:"Normalize inconsistent null representations across tables",avgManualDurationMs:3e6,sampleSize:9,source:"estimate"},{workflowId:"wf-010",goal:"Generate ops report",avgManualDurationMs:36e5,sampleSize:18,source:"historical"},{workflowId:"wf-010",goal:"Generate and distribute the weekly operations report to leadership",avgManualDurationMs:45e5,sampleSize:14,source:"historical"},{workflowId:"wf-010",goal:"Deliver the monthly operations report to executive distribution",avgManualDurationMs:54e5,sampleSize:6,source:"estimate"}];function pg(r,s,i){return r.find(l=>l.workflowId===s&&l.goal===i)}function r0(r,s=Co,i=Iu){let l=0,c=0,p=0;for(const g of r){const w=pg(s,g.workflow.id,g.goal);if(g.deploymentType==="engage_less"){if(g.status!=="success")continue;if(!w){p+=1;continue}l+=Math.max(w.avgManualDurationMs-g.durationMs,0),c+=1}else{const v=g.conversations.filter(L=>L.outcome==="goal_achieved").length;if(v===0)continue;if(!w){p+=v;continue}const _=g.durationMs/Math.max(1,g.conversations.length),b=Math.max(w.avgManualDurationMs-_,0);l+=b*v,c+=v}}const y=l/36e5*i.hourlyRate;return{totalTimeSavedMs:l,costSaved:y,goalsWithBaseline:c,goalsWithoutBaseline:p}}function fM(r,s,i=Co){const l={};for(const c of r){const p=pg(i,c.workflow.id,c.goal);if(!p)continue;let f=0;if(c.deploymentType==="engage_less"){if(c.status!=="success")continue;f=Math.max(p.avgManualDurationMs-c.durationMs,0)}else{const g=c.conversations.filter(v=>v.outcome==="goal_achieved").length;if(g===0)continue;const w=c.durationMs/Math.max(1,c.conversations.length);f=Math.max(p.avgManualDurationMs-w,0)*g}if(f<=0)continue;const y=s(c.timestamp);l[y]=(l[y]??0)+f}return l}function hM(r){return`${Math.round(r)}%`}function mM(r,s){if(r===0)return 0;const i=r/Math.max(1,s);return i<=.25?1:i<=.5?2:i<=.75?3:4}function o0(r){const s=Math.max(0,Math.min(100,r))/100,i=Math.round(140+-72*s),l=Math.round(79+29*s),c=Math.round(226+29*s);return`rgb(${i}, ${l}, ${c})`}function gM(r){return r==="all"?"month":"day"}function s0(r,s){return s==="month"?r.toISOString().slice(0,7):r.toISOString().slice(0,10)}function i0(r,s){return s==="month"?r.toLocaleDateString("en-US",{month:"short",year:"2-digit"}):r.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function xM(r,s,i){const l=[],c=new Date(r),p=new Date(s);if(i==="month")for(c.setUTCDate(1),c.setUTCHours(0,0,0,0),p.setUTCDate(1),p.setUTCHours(0,0,0,0);c<=p;)l.push(new Date(c)),c.setUTCMonth(c.getUTCMonth()+1);else for(c.setUTCHours(0,0,0,0),p.setUTCHours(0,0,0,0);c<=p;)l.push(new Date(c)),c.setUTCDate(c.getUTCDate()+1);return l}function a0({current:r,prior:s,invertDirection:i=!1}){const l=ug(r,s);if(l===null)return null;const c=l>0,p=c?"up":"down",f=i?!c:c,y=Math.abs(l)<.5?void 0:f?"positive":"negative",g=`${l>0?"+":""}${Math.abs(l).toFixed(1)}%`;return t.jsx(Wl,{mode:"trend",value:g,trend:p,severity:y})}const vM=h.div`
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
`;const l0=h.div`
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
`;const c0=h.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  background: ${r=>r.$secondary?"var(--color-bg-secondary, #f6f7f9)":"var(--color-bg-primary, #fff)"};
`,d0=h.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-primary, #151515);
`,u0=h.p`
  margin: 0;
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,yM=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-size: 13px;
  color: var(--color-content-tertiary, #87919f);
`,wM=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-4, 16px);
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,p0=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3, 12px);
  flex-wrap: wrap;
`,jM=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,bM=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,kM=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,_M=h.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 12px;
  flex: 1 1 auto;
  gap: 3px;
  background: var(--color-bg-tertiary);
  border-radius: 0;
  overflow: hidden;
`,CM=h.div`
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
`,ip=["var(--color-bg-tertiary, #f1f2f4)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%))"],SM=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
`,MM=h.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
`,IM=h.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 14px);
  grid-auto-columns: 14px;
  gap: 3px;
  flex-shrink: 0;
`,NM=h.div`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: ${r=>ip[r.$level]};
  transition: background 120ms ease;
`,LM=h.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: flex-end;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 12px);
  color: var(--color-content-tertiary);
  margin-top: var(--space-2, 8px);
`,ji=h.span`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${r=>ip[r.$level]};
`,f0=h.div`
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
`,h0=h.span`
  font-size: var(--text-xs, 12px);
  color: rgba(255, 255, 255, 0.65);
`,m0=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-bg-always-light, #fff);
`,g0=h.span`
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
`;function AM(){return t.jsx("svg",{width:"0",height:"0",style:{position:"absolute",width:0,height:0},"aria-hidden":"true",children:t.jsx("defs",{children:t.jsxs("linearGradient",{id:"ai-gradient-stroke",x1:"0",y1:"0",x2:"1",y2:"0",children:[t.jsx("stop",{offset:"0%",stopColor:"#8c4fe2"}),t.jsx("stop",{offset:"100%",stopColor:"#446cff"})]})})})}function TM({personaId:r}){const[s]=x.useState("7d"),[i,l]=x.useState("7d"),[c,p]=x.useState(null),[f,y]=x.useState(null),g=x.useMemo(()=>Ri.filter(K=>K.specialistId===r),[r]),w=Kr(s),v=Di(s),_=x.useMemo(()=>Mn(g,w),[g,s]),b=x.useMemo(()=>Mn(g,v),[g,s]),L=Kr(i),E=Di(i),I=x.useMemo(()=>Mn(g,L),[g,i]),N=x.useMemo(()=>Mn(g,E),[g,i]),C=x.useMemo(()=>{let K=0,q=0,J=0;for(const H of I)if(H.deploymentType==="engage")for(const P of H.conversations)P.outcome==="goal_achieved"?K++:P.outcome==="completed_no_action"?q++:P.outcome==="in_progress"&&J++;else H.status==="success"?K++:H.status==="incomplete"?q++:H.status==="in_progress"&&J++;const G=K+q+J;return{achieved:K,completedNoAction:q,inProgress:J,total:G}},[I]),A=x.useMemo(()=>{const q={};for(const re of g){const W=new Date(re.timestamp).toISOString().slice(0,10);q[W]=(q[W]??0)+1}const J=new Date(Vn);J.setUTCHours(0,0,0,0),J.setUTCDate(J.getUTCDate()+(6-J.getUTCDay()));const G=new Date(J);G.setUTCDate(G.getUTCDate()-363);const H=[],P=new Date(G);for(;P<=J;){const re=P.toISOString().slice(0,10);H.push({date:new Date(P),iso:re,count:q[re]??0}),P.setUTCDate(P.getUTCDate()+1)}const M=[];for(let re=0;re<H.length;re+=7)M.push(H.slice(re,re+7));const D=Math.max(1,...H.map(re=>re.count));return{weeks:M,maxCount:D}},[g]),k=s,j=`prior_${s}`,$=Tl.find(K=>K.personaId===r&&K.period===k),F=Tl.find(K=>K.personaId===r&&K.period===j);$&&$.triggersReceived>0&&$.triggersExecuted/$.triggersReceived*100,F&&F.triggersReceived>0&&F.triggersExecuted/F.triggersReceived*100;const z=El(I),B=El(N),ie=$l(I),ce=$l(N);_.filter(K=>K.steps.some(q=>q.toolCategory==="communication"&&q.channel==="chat")).length,_.filter(K=>K.steps.some(q=>q.toolCategory==="communication"&&(q.channel==="email"||q.channel==="sms"))).length,b.filter(K=>K.steps.some(q=>q.toolCategory==="communication"&&q.channel==="chat")).length,b.filter(K=>K.steps.some(q=>q.toolCategory==="communication"&&(q.channel==="email"||q.channel==="sms"))).length,_.reduce((K,q)=>K+q.creditsUsed,0),b.reduce((K,q)=>K+q.creditsUsed,0);const ee=ie>0?z/ie*100:0,Y=ce>0?B/ce*100:0,{rangeData:X,activeDays:ve}=x.useMemo(()=>{const K=gM(s),q={};for(const P of _){const M=s0(new Date(P.timestamp),K);q[M]||(q[M]=[]),q[M].push(P.creditsUsed)}const G=xM(w.from,w.to,K).map(P=>{const M=s0(P,K),D=q[M]??[];return D.length===0?{label:i0(P,K),min:0,max:0,count:0,hasData:!1}:{label:i0(P,K),min:Math.min(...D),max:Math.max(...D),count:D.length,hasData:!0}}),H=G.filter(P=>P.hasData).length;return{rangeData:G,activeDays:H}},[_,s]);return t.jsxs(vM,{children:[t.jsx(AM,{}),t.jsxs(wM,{children:[t.jsxs(c0,{$secondary:!0,children:[t.jsxs(l0,{children:[t.jsxs("div",{children:[t.jsx(d0,{children:"Success Rate"}),t.jsx(u0,{children:"Breakdown by Achieved, Completed No Action, and In Progress"})]}),t.jsxs(et,{value:i,onChange:K=>l(K),size:"sm",children:[t.jsx(et.Item,{value:"24h",children:"24h"}),t.jsx(et.Item,{value:"7d",children:"7d"}),t.jsx(et.Item,{value:"30d",children:"30d"}),t.jsx(et.Item,{value:"all",children:"All"})]})]}),C.total===0?t.jsx(yM,{children:"No goals in this period"}):(()=>{const K=C.achieved/C.total*100,q=C.completedNoAction/C.total*100,J=C.inProgress/C.total*100,G=[{label:"Goal Achieved",value:C.achieved,color:"var(--Alloy-green-500)",pct:K,startPct:0,endPct:K,muted:!1},{label:"Completed No Action",value:C.completedNoAction,color:"var(--Alloy-slate-400, #9ca3af)",pct:q,startPct:K,endPct:K+q,muted:!0},{label:"In Progress",value:C.inProgress,color:"var(--Alloy-blue-500, #446cff)",pct:J,startPct:K+q,endPct:K+q+J,muted:!0}];return t.jsxs(t.Fragment,{children:[t.jsxs(p0,{children:[t.jsx(kM,{children:hM(ee)}),t.jsx(a0,{current:ee,prior:Y})]}),t.jsx(_M,{role:"img","aria-label":`Goals by outcome: ${C.achieved} achieved, ${C.completedNoAction} completed with no action, ${C.inProgress} in progress`,onMouseLeave:()=>p(null),children:G.map(H=>t.jsx(CM,{$pct:H.pct,$color:H.color,$gradientStart:o0(H.startPct),$gradientEnd:o0(H.endPct),$muted:H.muted,onMouseMove:P=>p({x:P.clientX,y:P.clientY,label:H.label,value:H.value,color:H.color})},H.label))})]})})()]}),t.jsxs(c0,{children:[t.jsx(l0,{children:t.jsxs("div",{children:[t.jsx(d0,{children:"Specialist Activations"}),t.jsx(u0,{children:"Daily activity over the past year"})]})}),t.jsxs(p0,{children:[t.jsx(jM,{children:(($==null?void 0:$.triggersExecuted)??0).toLocaleString("en-US")}),t.jsx(bM,{children:"Activations"}),t.jsx(a0,{current:($==null?void 0:$.triggersExecuted)??0,prior:(F==null?void 0:F.triggersExecuted)??0})]}),t.jsxs(SM,{children:[t.jsx(MM,{children:t.jsx(IM,{role:"img","aria-label":`Daily activations heatmap with max ${A.maxCount} in a single day`,onMouseLeave:()=>y(null),children:A.weeks.flatMap((K,q)=>K.map((J,G)=>{const H=mM(J.count,A.maxCount),P=J.date.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return t.jsx(NM,{$level:H,onMouseMove:M=>y({x:M.clientX,y:M.clientY,label:P,value:J.count,color:ip[H]})},`${q}-${G}`)}))})}),t.jsxs(LM,{children:[t.jsx("span",{children:"Less"}),t.jsx(ji,{$level:0}),t.jsx(ji,{$level:1}),t.jsx(ji,{$level:2}),t.jsx(ji,{$level:3}),t.jsx(ji,{$level:4}),t.jsx("span",{children:"More"})]})]})]})]}),c&&t.jsxs(f0,{style:{left:c.x,top:c.y},children:[t.jsx(h0,{children:c.label}),t.jsxs(m0,{children:[t.jsx(g0,{$color:c.color}),c.value]})]}),f&&t.jsxs(f0,{style:{left:f.x,top:f.y},children:[t.jsx(h0,{children:f.label}),t.jsxs(m0,{children:[t.jsx(g0,{$color:f.color}),f.value," activation",f.value===1?"":"s"]})]})]})}const ap=new Date("2026-04-15T00:00:00Z");function lp(r){return new Date(r).toLocaleString("en-US",{month:"numeric",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0})}function EM(r){const s=new Date(r),i=ap.getTime()-s.getTime(),l=Math.round(i/6e4),c=Math.round(i/36e5),p=Math.round(i/864e5);return i<6e4?"Just now":l<60?`${l} min ago`:c<24?c===1?"1 hour ago":`${c} hours ago`:p<7?p===1?"1 day ago":`${p} days ago`:s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function $M(r){return r.toLocaleString("en-US")}function PM(r){return r===0?"+0s":`+${(r/1e3).toFixed(1)}s`}function RM(r){let s=0;for(let l=0;l<r.length;l++)s=s*31+r.charCodeAt(l)|0;return`https://i.pravatar.cc/48?img=${Math.abs(s)%70+1}`}const DM={communication:{color:"blue",label:"Communication"},data_cleanup:{color:"purple",label:"Data Cleanup"},scheduling:{color:"matcha",label:"Scheduling"}},zM=h.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,FM=h.div`
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
`,BM=h.tr`
  background: var(--color-bg-primary, #fff);
`,OM=h.td`
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
`;const HM=h.a`
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
`,WM=h(jo)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,UM=h.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--color-bg-tertiary, #f1f2f4);
`,VM=h.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,GM=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  min-width: 0;
`,fg=h.button`
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
`;const hg=h.td`
  padding: var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  vertical-align: top;
`,mg=h.div`
  display: grid;
  grid-template-columns: ${r=>r.$stacked?"1fr":"1fr 1fr"};
  gap: var(--space-6, 24px);
  align-items: start;
`,gg=h.td`
  padding: 0 var(--space-6, 24px) var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
`,Pl=h.p`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-content-secondary, #475569);
`,qM=h.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  /* Fixed-width tags so ✓, single digits, and double digits all align */
  & > span {
    min-width: 28px;
    justify-content: center;
    text-align: center;
  }
`,xg=h.button`
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
`,vg=h.div`
  background: var(--color-bg-tertiary, #f1f2f4);
  border-radius: var(--radius-md, 8px);
  padding: var(--space-4, 16px);
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-content-secondary, #475569);
  white-space: pre-wrap;
`,yg=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`,wg=h.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,ZM=h.div`
  /* Override alloy table backgrounds so the conversations table blends with the expanded row bg */
  table, thead, tbody, tr, th, td {
    background: transparent !important;
  }
`,jg=h.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`,bg=h.li`
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
`,kg=h.span`
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 11px;
  color: var(--color-content-tertiary, #87919f);
  white-space: nowrap;
  text-align: left;
`,_g=h.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-content-secondary, #475569);
`;function YM({steps:r}){return t.jsx(jg,{"aria-label":"Execution steps",children:r.map((s,i)=>{const{color:l,label:c}=DM[s.toolCategory];return t.jsxs(bg,{children:[t.jsx(kg,{children:PM(s.offsetMs)}),t.jsx(_g,{children:s.description}),t.jsx(it,{variant:"subtle",color:l,size:"sm",children:c})]},i)})})}const KM=h(jg)`
  padding-left: 56px;
`;function QM({thread:r}){return t.jsx(KM,{"aria-label":"Conversation turns",children:r.map((s,i)=>{const l=s.role==="agent";return t.jsxs(bg,{children:[t.jsx(kg,{children:l?"Agent":"User"}),t.jsx(_g,{children:s.content})]},i)})})}function XM({record:r}){if(r.deploymentType==="engage_less"){const p=r;return p.status==="success"?t.jsx(it,{variant:"subtle",color:"green",size:"sm",children:t.jsx(br,{size:12})}):p.status==="in_progress"?t.jsx(it,{variant:"subtle",color:"neutral",size:"sm",children:t.jsx(Xl,{size:12})}):null}const s=r,i=s.conversations.filter(p=>p.outcome==="goal_achieved").length,l=s.conversations.filter(p=>p.outcome==="completed_no_action").length,c=s.conversations.filter(p=>p.outcome==="in_progress").length;return t.jsxs(t.Fragment,{children:[c>0&&t.jsx(it,{variant:"subtle",color:"blue",size:"sm",children:c}),l>0&&t.jsx(it,{variant:"subtle",color:"neutral",size:"sm",children:l}),i>0&&t.jsx(it,{variant:"subtle",color:"green",size:"sm",children:i}),i===0&&l===0&&c===0&&t.jsx(it,{variant:"subtle",color:"neutral",size:"sm",children:"0"})]})}function JM({outcome:r}){switch(r){case"goal_achieved":return t.jsx(bs,{size:"sm",status:"success",children:"Goal Achieved"});case"completed_no_action":return t.jsx(bs,{size:"sm",status:"neutral",children:"Completed No Action"});case"in_progress":return t.jsx(bs,{size:"sm",status:"info",children:"In Progress"});default:return null}}function eI({record:r,mainColSpan:s,totalCols:i}){const[l,c]=x.useState(null),[p,f]=x.useState(!1),y=Ou("(max-width: 1023px)"),g=kr.find(b=>b.id===r.specialistId),w=b=>{c(L=>L===b?null:b)},v=t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[t.jsxs(Qr,{children:[t.jsx(Yn,{children:"Goal"}),t.jsx(Pl,{children:r.goal})]}),t.jsxs(Qr,{children:[t.jsx(Yn,{children:"Summary"}),t.jsx(Pl,{children:r.outcomeSummaryFull})]})]}),_=t.jsxs(Qr,{children:[t.jsx(Yn,{children:"Conversations"}),t.jsx(ZM,{children:t.jsxs(Yl,{size:"sm",children:[t.jsx(Kl,{children:t.jsxs(Io,{hoverable:!1,children:[t.jsx(In,{children:"User"}),t.jsx(In,{children:"Outcome"})]})}),t.jsx(Ql,{children:r.conversations.map(b=>t.jsxs(An.Fragment,{children:[t.jsxs(Io,{children:[t.jsx(Nn,{children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},onClick:()=>w(b.id),role:"button","aria-expanded":l===b.id,children:[t.jsx(fg,{as:"span",style:{cursor:"inherit"},children:l===b.id?t.jsx(En,{size:12}):t.jsx(ir,{size:12})}),t.jsx(UM,{src:RM(b.contactName),alt:""}),t.jsx(jo,{children:b.contactName})]})}),t.jsx(Nn,{children:t.jsx(JM,{outcome:b.outcome})})]}),l===b.id&&t.jsx("tr",{children:t.jsx("td",{colSpan:2,style:{padding:"0 16px 16px"},children:t.jsx(QM,{thread:b.thread})})})]},b.id))})]})})]});return t.jsxs(t.Fragment,{children:[t.jsx("tr",{children:t.jsx(hg,{colSpan:i,children:t.jsxs(mg,{$stacked:y,children:[v,_]})})}),t.jsx("tr",{children:t.jsx(gg,{colSpan:i,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[t.jsxs(Qr,{children:[t.jsxs(xg,{onClick:()=>f(!p),children:[p?t.jsx(En,{size:12}):t.jsx(ir,{size:12}),"System Prompt"]}),p&&g&&t.jsx(vg,{children:g.configuration.instructions})]}),t.jsxs(yg,{children:[t.jsx(Oe,{size:"sm",variant:"secondary",onClick:()=>{},children:"Recalculate Outcome"}),t.jsxs(wg,{children:["Last calculated ",lp(ap.toISOString())]})]})]})})})]})}function tI({record:r,totalCols:s}){const[i,l]=x.useState(!1),c=Ou("(max-width: 1023px)"),p=kr.find(g=>g.id===r.specialistId),f=t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[t.jsxs(Qr,{children:[t.jsx(Yn,{children:"Goal"}),t.jsx(Pl,{children:r.goal})]}),t.jsxs(Qr,{children:[t.jsx(Yn,{children:"Summary"}),t.jsx(Pl,{children:r.outcomeSummaryFull})]})]}),y=t.jsxs(Qr,{children:[t.jsx(Yn,{children:"Span details"}),t.jsx(YM,{steps:r.steps})]});return t.jsxs(t.Fragment,{children:[t.jsx("tr",{children:t.jsx(hg,{colSpan:s,children:t.jsxs(mg,{$stacked:c,children:[f,y]})})}),t.jsx("tr",{children:t.jsx(gg,{colSpan:s,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[t.jsxs(Qr,{children:[t.jsxs(xg,{onClick:()=>l(!i),children:[i?t.jsx(En,{size:12}):t.jsx(ir,{size:12}),"System Prompt"]}),i&&p&&t.jsx(vg,{children:p.configuration.instructions})]}),t.jsxs(yg,{children:[t.jsx(Oe,{size:"sm",variant:"secondary",onClick:()=>{},children:"Recalculate Outcome"}),t.jsxs(wg,{children:["Last calculated ",lp(ap.toISOString())]})]})]})})})]})}function nI({record:r,expanded:s,onToggle:i,showPersonaColumn:l}){const c=r.deploymentType==="engage",p=l?6:5,f=p-1;return t.jsxs(t.Fragment,{children:[t.jsxs(Io,{hoverable:!0,children:[t.jsx(Nn,{children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(fg,{"aria-label":s?"Collapse row":"Expand row","aria-expanded":s,onClick:i,children:s?t.jsx(En,{size:14}):t.jsx(ir,{size:14})}),t.jsx(jo,{variant:"secondary",title:lp(r.timestamp),children:EM(r.timestamp)})]})}),l&&t.jsx(Nn,{children:t.jsxs(GM,{children:[t.jsx(VM,{"aria-hidden":"true",children:t.jsx(Al,{personaName:r.personaName,size:24})}),t.jsx(jo,{children:r.personaName})]})}),t.jsx(Nn,{children:t.jsx(HM,{href:r.workflow.href,onClick:y=>y.stopPropagation(),title:r.workflow.name,children:r.workflow.name})}),t.jsx(Nn,{children:t.jsx(WM,{variant:"secondary",title:r.goal,children:r.goal})}),t.jsx(Nn,{children:t.jsx(jo,{variant:"secondary",children:$M(r.creditsUsed)})}),t.jsx(Nn,{align:"right",children:t.jsx(qM,{style:{justifyContent:"flex-end"},children:t.jsx(XM,{record:r})})})]}),s&&(c?t.jsx(eI,{record:r,mainColSpan:f,totalCols:p}):t.jsx(tI,{record:r,totalCols:p}))]})}const rI=[{value:"all",label:"All Personas"},...kr.map(r=>({value:r.id,label:r.name}))],oI=[{value:"all",label:"All Types"},{value:"engage",label:"Engage"},{value:"engage_less",label:"Engage-less"}],sI=[{value:"all",label:"All Outcomes"},{value:"success",label:"Success"},{value:"in_progress",label:"In Progress"}],iI=[{value:"all",label:"All Sources"},{value:"workflow",label:"Workflow"},{value:"ponder",label:"Ponder"}];function aI(r,s){if(s==="all")return!0;if(r.deploymentType==="engage_less"){const l=r;return s==="success"?l.status==="success":s==="in_progress"?l.status==="in_progress":!0}const i=r;if(s==="success")return i.conversations.some(l=>l.outcome==="goal_achieved");if(s==="in_progress"){const l=i.conversations.some(p=>p.outcome==="goal_achieved"),c=i.conversations.some(p=>p.outcome==="in_progress");return!l&&c}return!0}function Cg({specialistId:r,timeRange:s,deploymentTypeFilter:i="all",records:l,showFilters:c=!0}){const[p,f]=x.useState("all"),[y,g]=x.useState("all"),[w,v]=x.useState("all"),[_,b]=x.useState("all"),[L,E]=x.useState(null),I=x.useMemo(()=>{const j=Kr(s),$=l??Ri.filter(F=>(!r||F.specialistId===r)&&(i==="all"||F.deploymentType===i));return Mn($,j).sort((F,z)=>new Date(z.timestamp).getTime()-new Date(F.timestamp).getTime())},[r,s,i,l]),N=x.useMemo(()=>I.filter(j=>p==="all"||j.specialistId===p).filter(j=>y==="all"||j.deploymentType===y).filter(j=>aI(j,w)).filter(j=>_==="all"||j.activatedBy===_),[I,p,y,w,_]),C=!r,A=!r,k=A?6:5;return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3, 12px)"},children:[c&&t.jsxs(zM,{children:[C&&t.jsx("div",{style:{width:160},children:t.jsx(Ln,{size:"sm",options:rI,value:p,onChange:f})}),t.jsx("div",{style:{width:150},children:t.jsx(Ln,{size:"sm",options:oI,value:y,onChange:g})}),t.jsx("div",{style:{width:150},children:t.jsx(Ln,{size:"sm",options:sI,value:w,onChange:v})}),t.jsx("div",{style:{width:150},children:t.jsx(Ln,{size:"sm",options:iI,value:_,onChange:b})})]}),t.jsx(FM,{$columnCount:k,children:t.jsxs(Yl,{size:"sm",children:[t.jsx(Kl,{children:t.jsxs(Io,{hoverable:!1,children:[t.jsx(In,{children:"Time"}),A&&t.jsx(In,{children:"Persona"}),t.jsx(In,{children:"Workflow"}),t.jsx(In,{children:"Goal"}),t.jsx(In,{children:"Credits"}),t.jsx(In,{align:"right",children:"Outcome"})]})}),t.jsx(Ql,{children:N.length===0?t.jsx(BM,{children:t.jsx(OM,{colSpan:k,children:"No activity matches the current filters."})}):N.map(j=>t.jsx(nI,{record:j,expanded:L===j.id,onToggle:()=>E($=>$===j.id?null:j.id),showPersonaColumn:A},j.id))})]})})]})}const lI=Array.from(new Set(kr.map(r=>r.role)));function cI(){return t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[t.jsx("path",{d:"M2 11.5L2.5 14l2.5-.5L13.414 5.086a1 1 0 0 0 0-1.414L12.328 2.586a1 1 0 0 0-1.414 0L2 11.5Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),t.jsx("path",{d:"M10 4l2 2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}const dI=[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],x0="edit-persona-form",uI=Tv`
  [role="dialog"][aria-label="Edit Persona"] > div {
    overflow: visible !important;
  }
`,v0=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  min-height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`,pI=h.div`
  position: relative;
  background: var(--color-bg-secondary, #f6f7f9);
  border-radius: var(--radius-lg, 12px);
  padding: 20px;
  overflow: hidden;
  isolation: isolate;
`,fI=h.div`
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
`,hI=h.div`
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
`,mI=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  width: 60%;
  min-width: 0;
`,gI=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,xI=h.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--color-content-primary, #151515);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,vI=h.div`
  display: inline-flex;
  align-items: center;
  height: 20px;
  border: 1px solid var(--color-border-opaque, #cbd0d7);
  border-radius: var(--radius-button, 6px);
  overflow: hidden;
  flex-shrink: 0;
`,yI=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
`,wI=h.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #2b333f);
  padding-right: 6px;
  white-space: nowrap;
`,jI=h.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-content-secondary, #475569);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,bI=h.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-tertiary, #87919f);
`,kI=h.button`
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
`,_I=h.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`,CI=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-4, 16px);
`,SI=h.div`
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg, 12px);
  background: var(--color-bg-secondary, #f6f7f9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
`,MI=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,II=h.div`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-primary, #151515);
`,NI=h.div`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-xs, 12px);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--line-height-normal, 1.5);
  color: var(--color-content-tertiary, #87919f);
`,LI=h.button`
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
`;const AI=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5, 20px);
`,TI=h.a`
  color: var(--color-content-link, #446cff);
  text-decoration: none;
  font-weight: 500;
  &:hover { text-decoration: underline; }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
    border-radius: var(--radius-sm, 4px);
  }
`,EI=h.div`
  padding: 48px 0;
  text-align: center;
  font-size: 13px;
  color: var(--color-content-tertiary, #87919f);
`,$I=h.div`
  display: flex;
  gap: var(--space-1, 4px);
  border-bottom: 1px solid var(--color-border-secondary, #e2e4e8);
`,y0=h.button`
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
`;function PI({personaId:r,onBack:s}){const i=kr.find(X=>X.id===r),[l,c]=x.useState((i==null?void 0:i.name)??""),[p,f]=x.useState(i!=null&&i.role?[i.role]:[]),[y,g]=x.useState((i==null?void 0:i.description)??""),[w,v]=x.useState((i==null?void 0:i.voice)??"alloy"),[_,b]=x.useState(!1),[L,E]=x.useState("activities"),[I,N]=x.useState("7d"),[C,A]=x.useState(""),[k,j]=x.useState([]),[$,F]=x.useState("alloy"),[z,B]=x.useState("");if(!i)return t.jsx(v0,{children:t.jsx("p",{children:"Specialist not found."})});const ie=w.charAt(0).toUpperCase()+w.slice(1);function ce(){A(l),j(p),F(w),B(y),b(!0)}function ee(X){X.preventDefault(),c(C),f(k),g(z),v($),b(!1)}const Y=pM.filter(X=>X.personaId===r);return t.jsxs(v0,{children:[t.jsxs(pI,{children:[t.jsxs(mI,{children:[t.jsxs(gI,{children:[t.jsx(xI,{children:l}),t.jsxs(vI,{children:[t.jsx(yI,{children:t.jsx(Nl,{size:12})}),t.jsx(wI,{children:ie})]}),t.jsx(kI,{"aria-label":"Edit specialist",onClick:ce,children:t.jsx(cI,{})})]}),t.jsx(jI,{children:p.join(" · ")}),t.jsx(bI,{children:y})]}),t.jsx(fI,{"aria-hidden":"true",children:t.jsx(Al,{personaId:r,size:240})}),t.jsx(hI,{"aria-hidden":"true"})]}),_&&t.jsx(uI,{}),t.jsxs(Wu,{open:_,onClose:()=>b(!1),size:"md","aria-label":"Edit Persona",children:[t.jsx(Ul,{onClose:()=>b(!1),children:"Edit Persona"}),t.jsx(Vl,{style:{overflow:"visible"},children:t.jsxs(_I,{id:x0,onSubmit:ee,children:[t.jsxs(CI,{children:[t.jsx(SI,{children:t.jsx(Al,{personaId:r,size:64})}),t.jsxs(MI,{children:[t.jsx(II,{children:"Profile image"}),t.jsx(NI,{children:"Recommended: 256×256px, PNG or JPG"}),t.jsx(LI,{type:"button",children:"Upload image"})]})]}),t.jsx(As,{label:"Name",required:!0,value:C,onChange:X=>A(X.target.value),placeholder:"e.g. HR Assistant"}),t.jsx(Ln,{label:"Voice",required:!0,size:"sm",leadingIcon:t.jsx(Nl,{size:14}),options:dI,value:$,onChange:F,placeholder:"Select a voice…"}),t.jsx(uM,{label:"Role",required:!0,value:k,onChange:j,suggestions:lI,placeholder:"Add a role tag…"}),t.jsx(Vu,{label:"Description",required:!0,value:z,onChange:X=>B(X.target.value),placeholder:"e.g. Answers employee questions about benefits and policies.",rows:3})]})}),t.jsxs(Gl,{children:[t.jsx(Oe,{variant:"destructive-secondary",size:"sm",style:{marginRight:"auto"},children:"Delete Persona"}),t.jsx(Oe,{variant:"secondary",size:"sm",onClick:()=>b(!1),children:"Cancel"}),t.jsx(Oe,{variant:"primary",size:"sm",type:"submit",form:x0,children:"Save"})]})]}),t.jsx(TM,{personaId:r}),t.jsxs(AI,{children:[t.jsxs($I,{children:[t.jsx(y0,{$active:L==="activities",onClick:()=>E("activities"),children:"Activities"}),t.jsx(y0,{$active:L==="deployments",onClick:()=>E("deployments"),children:"Deployments"})]}),L==="deployments"&&t.jsx(t.Fragment,{children:Y.length===0?t.jsx(EI,{children:"This persona hasn't been added to any workflows yet."}):t.jsxs(Yl,{size:"md",children:[t.jsx(Kl,{children:t.jsxs(Io,{hoverable:!1,children:[t.jsx(In,{children:"Workflow"}),t.jsx(In,{children:"Type"}),t.jsx(In,{children:"Status"})]})}),t.jsx(Ql,{children:Y.map(X=>t.jsxs(Io,{children:[t.jsx(Nn,{children:t.jsx(TI,{href:X.workflow.href,children:t.jsx(jo,{children:X.workflow.name})})}),t.jsx(Nn,{children:t.jsx(it,{size:"sm",color:X.type==="engage"?"purple":"grey",children:X.type==="engage"?"Engage":"Engage-less"})}),t.jsx(Nn,{children:t.jsx(bs,{size:"sm",status:X.status==="active"?"success":"warning",children:X.status==="active"?"Active":"Paused"})})]},X.id))})]})}),L==="activities"&&t.jsx(Cg,{specialistId:r,timeRange:I})]})]})}const RI=h.div`
  position: relative;
  width: 100%;
  height: ${r=>r.$height}px;
`,DI=h.svg`
  display: block;
  font-family: var(--font-sans, Geist, sans-serif);
`,zI=h.line`
  stroke: var(--color-border-opaque, #e8eaee);
  stroke-width: 1;
  /* Match the morph duration + eased curve for a synchronized feel. */
  transition: y1 620ms cubic-bezier(0.77, 0, 0.175, 1),
              y2 620ms cubic-bezier(0.77, 0, 0.175, 1);
`,w0=h.text`
  fill: var(--color-content-tertiary, #87919f);
  font-size: 11px;
  transition: x 620ms cubic-bezier(0.77, 0, 0.175, 1),
              y 620ms cubic-bezier(0.77, 0, 0.175, 1);
`,j0="#8c4fe2",Nu="#446cff",FI=h.path`
  fill: none;
  stroke: url(#chart-stroke);
  stroke-width: 2.5;
  stroke-linejoin: miter;
  stroke-linecap: butt;
`,BI=h.rect`
  fill: url(#chart-fill);
`,OI=h.circle`
  fill: ${Nu};
  stroke: var(--color-bg-primary, #ffffff);
  stroke-width: 2;
`,HI=h.rect`
  fill: transparent;
  cursor: pointer;
`,WI=h.div`
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
`,UI=h.div`
  font-weight: 600;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.65);
`,hu=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  font-size: 11px;
  color: var(--color-bg-always-light, #ffffff);
`;function mu(r){return r>=1e6?`${(r/1e6).toFixed(1)}M`:r>=1e3?`${(r/1e3).toFixed(r>=1e4?0:1)}k`:r.toLocaleString("en-US")}function VI(r){return r===0?"$0":r>=1e6?`$${(r/1e6).toFixed(1)}M`:r>=1e3?`$${Math.round(r/1e3)}K`:`$${Math.round(r)}`}function GI(r){if(r===0)return 0;const s=Math.pow(10,Math.floor(Math.log10(r))),i=[1,1.2,1.5,1.6,1.8,2,2.2,2.4,2.5,2.8,3,3.2,3.5,4,4.5,5,6,7,8,9,10],l=r/s;for(const c of i)if(c>=l)return c*s;return 10*s}function b0(r,s){if(r.length===0)return new Array(s).fill(0);if(r.length===s)return r.slice();const i=[];for(let l=0;l<s;l++){const c=s===1?0:l/(s-1)*(r.length-1),p=Math.floor(c),f=Math.min(p+1,r.length-1),y=c-p;i.push(r[p]+(r[f]-r[p])*y)}return i}const qI=r=>r<.5?8*r*r*r*r:1-Math.pow(-2*r+2,4)/2;function ZI({data:r,height:s=220}){const i=x.useRef(null),[l,c]=x.useState(600),[p,f]=x.useState(null);x.useEffect(()=>{if(!i.current)return;const P=new ResizeObserver(M=>{for(const D of M){const re=D.contentRect.width;re>0&&c(re)}});return P.observe(i.current),()=>P.disconnect()},[]);const[y,g]=x.useState(1),w=x.useRef(r),v=x.useRef(r);x.useEffect(()=>{var W;if(v.current===r)return;if(w.current=v.current,v.current=r,typeof window<"u"&&((W=window.matchMedia)!=null&&W.call(window,"(prefers-reduced-motion: reduce)").matches)){g(1);return}const P=performance.now(),M=620;g(0);let D;const re=Z=>{const ue=Math.min(1,(Z-P)/M);g(qI(ue)),ue<1&&(D=requestAnimationFrame(re))};return D=requestAnimationFrame(re),()=>cancelAnimationFrame(D)},[r]);const _=y<1?w.current:r,b=44,L=0,E=20,I=20,N=Math.max(l-b-L,1),C=s-E-I,A=Math.max(_.length,r.length),k=b0(_.map(P=>P.hasData?P.max:0),A),j=b0(r.map(P=>P.hasData?P.max:0),A),$=k.map((P,M)=>P+(j[M]-P)*y),F=Math.max(...$,0),z=F>0?GI(F):10,B=4,ie=Array.from({length:B+1},(P,M)=>z*M/B),ce=P=>E+C-P/z*C,ee=N/A,Y=P=>b+ee*P,X=P=>b+ee*(P+1),ve=(()=>{if($.length===0)return"";const P=[];return $.forEach((M,D)=>{const re=ce(M),W=Y(D),Z=X(D);P.push(`M ${W} ${re}`),P.push(`L ${Z} ${re}`)}),P.join(" ")})(),K=[];$.forEach((P,M)=>{if(P<=0)return;const D=ce(P),re=Y(M),W=X(M);K.push({x:re,y:D,width:Math.max(W-re,0),height:E+C-D})});const q=N/r.length,J=P=>b+q*P,G=P=>b+q*(P+.5),H=p!==null?r[p]:null;return t.jsxs(RI,{ref:i,$height:s,children:[t.jsxs(DI,{width:l,height:s,viewBox:`0 0 ${l} ${s}`,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"chart-stroke",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:j0}),t.jsx("stop",{offset:"100%",stopColor:Nu})]}),t.jsxs("linearGradient",{id:"chart-fill",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:j0,stopOpacity:"0.3"}),t.jsx("stop",{offset:"100%",stopColor:Nu,stopOpacity:"0"})]})]}),ie.map((P,M)=>t.jsxs("g",{children:[t.jsx(zI,{x1:0,x2:l-L,y1:ce(P),y2:ce(P)}),t.jsx(w0,{x:0,y:ce(P)-6,textAnchor:"start",children:VI(P)})]},`t-${M}`)),K.map((P,M)=>t.jsx(BI,{x:P.x,y:P.y,width:P.width,height:P.height},`b-${M}`)),ve&&t.jsx(FI,{d:ve}),H&&p!==null&&H.hasData&&y===1&&t.jsx(OI,{cx:G(p),cy:ce(H.max),r:4}),y===1&&r.map((P,M)=>t.jsx(HI,{x:J(M),y:E,width:q,height:C,onMouseEnter:()=>P.hasData&&f(M),onMouseLeave:()=>f(null)},`hit-${M}`)),(()=>{const M=Math.max(1,Math.ceil(45/q)),D=r.length-1;return r.map((re,W)=>{const Z=W===0,ue=W===D;if(!(Z||ue)&&W%M!==0)return null;const Ie=Z?b:ue?l-L:G(W),Ee=Z?"start":ue?"end":"middle";return t.jsx(w0,{x:Ie,y:s-I+18,textAnchor:Ee,children:re.label},`xl-${W}`)})})()]}),H&&p!==null&&H.hasData&&y===1&&t.jsxs(WI,{$x:G(p),$y:ce(H.max),children:[t.jsx(UI,{children:H.label}),H.min===H.max?t.jsxs(hu,{children:[mu(H.min)," credits"]}):t.jsxs(hu,{children:[mu(H.min)," – ",mu(H.max)," credits"]}),t.jsxs(hu,{children:[H.count," ",H.count===1?"run":"runs"]})]})]})}const YI=h.div`
  position: relative;
  width: 100%;
  height: ${r=>r.$height}px;
`,KI=h.svg`
  display: block;
  font-family: var(--font-sans, Geist, sans-serif);
`,QI=h.line`
  stroke: var(--color-border-opaque, #e8eaee);
  stroke-width: 1;
`,k0=h.text`
  fill: var(--color-content-tertiary, #87919f);
  font-size: 11px;
`,_0="#8c4fe2",Lu="#446cff",XI=h.path`
  fill: none;
  stroke: url(#timesaved-stroke);
  stroke-width: 2.5;
  stroke-linejoin: miter;
  stroke-linecap: butt;
`,JI=h.rect`
  fill: url(#timesaved-fill);
`,eN=h.circle`
  fill: ${Lu};
  stroke: var(--color-bg-primary, #ffffff);
  stroke-width: 2;
`,tN=h.rect`
  fill: transparent;
  cursor: pointer;
`,nN=h.div`
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
`,rN=h.div`
  font-weight: 600;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.65);
`,oN=h.div`
  font-size: 11px;
  color: var(--color-bg-always-light, #ffffff);
`;function sN(r,s){if(s==="hour"){const l=r/36e5;return l===0?"0h":l>=10?`${Math.round(l)}h`:`${l.toFixed(1)}h`}const i=r/6e4;return i===0?"0m":`${Math.round(i)}m`}function iN(r){if(r<6e4)return`${Math.round(r/1e3)}s`;const s=Math.round(r/6e4);if(s<60)return`${s} min`;const i=Math.floor(s/60),l=s%60;return l===0?`${i}h`:`${i}h ${l}m`}function aN(r){if(r===0)return 0;const s=Math.pow(10,Math.floor(Math.log10(r))),i=[1,1.2,1.5,1.6,1.8,2,2.2,2.4,2.5,2.8,3,3.2,3.5,4,4.5,5,6,7,8,9,10],l=r/s;for(const c of i)if(c>=l)return c*s;return 10*s}function lN({data:r,unit:s,height:i=200}){const l=x.useRef(null),[c,p]=x.useState(600),[f,y]=x.useState(null);x.useEffect(()=>{if(!l.current)return;const Y=new ResizeObserver(X=>{for(const ve of X){const K=ve.contentRect.width;K>0&&p(K)}});return Y.observe(l.current),()=>Y.disconnect()},[]);const g=44,w=0,v=20,_=20,b=Math.max(c-g-w,1),L=i-v-_,E=r.map(Y=>Y.savedMs),I=Math.max(0,...E),N=s==="hour"?36e5:5*6e4,C=I>0?aN(I):N,A=4,k=Array.from({length:A+1},(Y,X)=>C*X/A),j=Y=>v+L-Y/C*L,$=b/Math.max(1,r.length),F=Y=>g+$*Y,z=Y=>g+$*(Y+1),B=Y=>g+$*(Y+.5),ie=(()=>{if(r.length===0)return"";const Y=[];return r.forEach((X,ve)=>{const K=j(X.savedMs),q=F(ve),J=z(ve);Y.push(`M ${q} ${K}`),Y.push(`L ${J} ${K}`)}),Y.join(" ")})(),ce=[];r.forEach((Y,X)=>{if(Y.savedMs<=0)return;const ve=j(Y.savedMs),K=F(X),q=z(X);ce.push({x:K,y:ve,width:Math.max(q-K,0),height:v+L-ve})});const ee=f!==null?r[f]:null;return t.jsxs(YI,{ref:l,$height:i,children:[t.jsxs(KI,{width:c,height:i,viewBox:`0 0 ${c} ${i}`,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"timesaved-stroke",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:_0}),t.jsx("stop",{offset:"100%",stopColor:Lu})]}),t.jsxs("linearGradient",{id:"timesaved-fill",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:_0,stopOpacity:"0.3"}),t.jsx("stop",{offset:"100%",stopColor:Lu,stopOpacity:"0"})]})]}),k.map((Y,X)=>t.jsxs("g",{children:[t.jsx(QI,{x1:0,x2:c-w,y1:j(Y),y2:j(Y)}),t.jsx(k0,{x:0,y:j(Y)-6,textAnchor:"start",children:sN(Y,s)})]},`t-${X}`)),ce.map((Y,X)=>t.jsx(JI,{x:Y.x,y:Y.y,width:Y.width,height:Y.height},`b-${X}`)),ie&&t.jsx(XI,{d:ie}),ee&&f!==null&&ee.savedMs>0&&t.jsx(eN,{cx:B(f),cy:j(ee.savedMs),r:4}),r.map((Y,X)=>t.jsx(tN,{x:F(X),y:v,width:$,height:L,onMouseEnter:()=>y(X),onMouseLeave:()=>y(null)},`hit-${X}`)),(()=>{const X=Math.max(1,Math.ceil(45/$)),ve=r.length-1;return r.map((K,q)=>{const J=q===0,G=q===ve;if(!(J||G)&&q%X!==0)return null;const P=J?g:G?c-w:B(q),M=J?"start":G?"end":"middle";return t.jsx(k0,{x:P,y:i-_+18,textAnchor:M,children:K.label},`xl-${q}`)})})()]}),ee&&f!==null&&ee.savedMs>0&&t.jsxs(nN,{$x:B(f),$y:j(ee.savedMs),children:[t.jsx(rN,{children:ee.label}),t.jsxs(oN,{children:[iN(ee.savedMs)," saved"]})]})]})}function C0(r){return`${Math.round(r)}%`}function cN(r,s){if(r===0)return 0;const i=r/Math.max(1,s);return i<=.25?1:i<=.5?2:i<=.75?3:4}function S0(r){const s=Math.max(0,Math.min(100,r))/100,i=Math.round(140+-72*s),l=Math.round(79+29*s),c=Math.round(226+29*s);return`rgb(${i}, ${l}, ${c})`}function dN(r){if(r<=0)return"0 min";const s=Math.round(r/6e4);if(s<60)return`${s} min`;const i=Math.floor(s/60),l=s%60;return i<24?l===0?`${i}h`:`${i}h ${l}m`:`${i} hours`}function uN(r){return r<1?"$0":r<1e3?`$${Math.round(r).toLocaleString("en-US")}`:`$${Math.round(r).toLocaleString("en-US")}`}const M0=Co.filter(r=>r.source==="historical").length,I0=Co.filter(r=>r.source==="estimate").length;function gu(r){return r==="all"?"month":"day"}function vs(r,s){return s==="month"?r.toISOString().slice(0,7):r.toISOString().slice(0,10)}function pl(r,s){return s==="month"?r.toLocaleDateString("en-US",{month:"short",year:"2-digit"}):r.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function xu(r,s,i){const l=[],c=new Date(r),p=new Date(s);if(i==="month")for(c.setUTCDate(1),c.setUTCHours(0,0,0,0),p.setUTCDate(1),p.setUTCHours(0,0,0,0);c<=p;)l.push(new Date(c)),c.setUTCMonth(c.getUTCMonth()+1);else for(c.setUTCHours(0,0,0,0),p.setUTCHours(0,0,0,0);c<=p;)l.push(new Date(c)),c.setUTCDate(c.getUTCDate()+1);return l}function fl({current:r,prior:s,invertDirection:i=!1}){const l=ug(r,s);if(l===null)return null;const c=l>0,p=c?"up":"down",f=i?!c:c,y=Math.abs(l)<.5?void 0:f?"positive":"negative",g=`${l>0?"+":""}${Math.abs(l).toFixed(1)}%`;return t.jsx(Wl,{mode:"trend",value:g,trend:p,severity:y})}const pN=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
`,fN=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,hN=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  font-family: var(--font-sans);
  font-size: var(--text-xs);  /* 12px — Alloy paragraph-sm */
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,mN=h.div`
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background: var(--color-bg-primary);
`,gN=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,xN=h.span`
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,vN=h.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-sans);
  font-size: var(--text-xs);  /* 12px — Alloy paragraph-sm */
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,yN=3,Sg=`repeating-linear-gradient(
  to right,
  transparent 0,
  transparent 2px,
  var(--color-bg-primary, #fff) 2px,
  var(--color-bg-primary, #fff) ${yN}px
)`,wN=h.div`
  position: relative;
  width: 100%;
  height: 12px;
  /* Pull the bar up so the gap between the used/remaining labels and
     the track reads as 8px instead of the card's default 12px flex gap. */
  margin-top: -4px;
  background: ${Sg}, var(--color-bg-tertiary);
  border-radius: 0;
  overflow: hidden;
`,jN=h.div`
  position: absolute;
  inset: 0 auto 0 0;
  width: ${r=>r.$pct}%;
  background: ${Sg},
    var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%));
  border-radius: inherit;
`,bN=h.div`
  display: grid;
  /* minmax(0, 1fr) prevents columns from being expanded by wide chart
     content (default 1fr has a min of auto, which respects content size). */
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-4, 16px);
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,N0=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  flex-wrap: wrap;
`,L0=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);  /* 40px — Alloy heading-xl, matches HeroValue */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,kN=h.span`
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
`;const _N=h.div`
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
`,CN=h.div`
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
`,A0=h.div`
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
`,T0=h.span`
  font-size: var(--text-xs, 12px);
  color: rgba(255, 255, 255, 0.65);
`,E0=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-bg-always-light, #fff);
`,$0=h.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${r=>r.$color};
`,SN=h.span`
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
`;const cp=["var(--color-bg-tertiary, #f1f2f4)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%))"],MN=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
`,IN=h.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
`,NN=h.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 14px);
  grid-auto-columns: 14px;
  gap: 3px;
  flex-shrink: 0;
`,P0=h.div`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: ${r=>cp[r.$level]};
  transition: background 120ms ease;
`,LN=h.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: flex-end;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 12px);
  color: var(--color-content-tertiary);
  margin-top: var(--space-2, 8px);
`,bi=h.span`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${r=>cp[r.$level]};
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
`;const hl=h.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  /* $secondary cards use the Alloy recessed surface token for a
     subtle tonal break from the default white cards around them. */
  background: ${r=>r.$secondary?"var(--color-bg-secondary, #f6f7f9)":"var(--color-bg-primary, #fff)"};
`,ki=h.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-primary, #151515);
`,_i=h.p`
  margin: 0;
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,ml=h.div`
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
`;const AN=h.h3`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,TN=h.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,EN=h.div`
  margin-left: auto;
`,gl=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3, 12px);
`;h(Cm)`
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
`;function $N(){return t.jsx("svg",{width:"0",height:"0",style:{position:"absolute",width:0,height:0},"aria-hidden":"true",children:t.jsx("defs",{children:t.jsxs("linearGradient",{id:"ai-gradient-stroke",x1:"0",y1:"0",x2:"1",y2:"0",children:[t.jsx("stop",{offset:"0%",stopColor:"#8c4fe2"}),t.jsx("stop",{offset:"100%",stopColor:"#446cff"})]})})})}const PN=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-5, 20px) var(--space-6, 24px);
`,RN=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3, 12px);
  flex-wrap: wrap;
`,DN=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,zN=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xl, 20px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-secondary, #475569);
`,FN=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 12px);
  color: var(--color-content-tertiary, #87919f);
`,BN=[{value:"all",label:"All Types"},{value:"engage",label:"Engage"},{value:"engage_less",label:"Engage-less"}],ON=[{value:"all",label:"All Workflows"},...de.map(r=>({value:r.id,label:r.name}))],HN=[{value:"all",label:"All Outcomes"},{value:"success",label:"Success"},{value:"in_progress",label:"In Progress"}],WN=[{value:"all",label:"All Sources"},{value:"workflow",label:"Workflow"},{value:"ponder",label:"Ponder"}];function UN(){const[r,s]=x.useState("7d"),[i,l]=x.useState("7d"),[c,p]=x.useState("7d"),[f,y]=x.useState("7d"),[g,w]=x.useState("all"),[v,_]=x.useState("all"),[b,L]=x.useState("all"),[E,I]=x.useState("all"),[N,C]=x.useState(null),[A,k]=x.useState(null),j=x.useMemo(()=>Ri.filter(oe=>{if(g!=="all"&&oe.deploymentType!==g||v!=="all"&&oe.workflow.id!==v||E!=="all"&&oe.activatedBy!==E)return!1;if(b!=="all")if(oe.deploymentType==="engage_less"){const ae=oe;if(b==="success"&&ae.status!=="success"||b==="in_progress"&&ae.status!=="in_progress")return!1}else{const ae=oe;if(b==="success"&&!ae.conversations.some(Ae=>Ae.outcome==="goal_achieved"))return!1;if(b==="in_progress"){const Ae=ae.conversations.some(je=>je.outcome==="goal_achieved"),ye=ae.conversations.some(je=>je.outcome==="in_progress");if(Ae||!ye)return!1}}return!0}),[g,v,b,E]),$=Kr(r),F=Di(r),z=x.useMemo(()=>Mn(j,$),[j,r]),B=x.useMemo(()=>Mn(j,F),[j,r]),ie=Kr(i),ce=x.useMemo(()=>Mn(j,ie),[j,i]),ee=Kr(c),Y=Di(c),X=x.useMemo(()=>Mn(j,ee),[j,c]),ve=x.useMemo(()=>Mn(j,Y),[j,c]),K="7d",q=Tl.filter(oe=>oe.period===K),J=Tl.filter(oe=>oe.period===`prior_${K}`);q.reduce((oe,ae)=>oe+ae.triggersReceived,0);const G=q.reduce((oe,ae)=>oe+ae.triggersExecuted,0);J.reduce((oe,ae)=>oe+ae.triggersReceived,0);const H=J.reduce((oe,ae)=>oe+ae.triggersExecuted,0),P=El(X),M=El(ve),D=$l(X),re=$l(ve);z.filter(oe=>oe.steps.some(ae=>ae.toolCategory==="communication"&&ae.channel==="chat")).length,z.filter(oe=>oe.steps.some(ae=>ae.toolCategory==="communication"&&(ae.channel==="email"||ae.channel==="sms"))).length,B.filter(oe=>oe.steps.some(ae=>ae.toolCategory==="communication"&&ae.channel==="chat")).length,B.filter(oe=>oe.steps.some(ae=>ae.toolCategory==="communication"&&(ae.channel==="email"||ae.channel==="sms"))).length,z.reduce((oe,ae)=>oe+ae.creditsUsed,0),B.reduce((oe,ae)=>oe+ae.creditsUsed,0);const W=x.useMemo(()=>{const oe=new Date(Date.UTC(Vn.getUTCFullYear(),Vn.getUTCMonth(),1)),ae=new Date(Date.UTC(Vn.getUTCFullYear(),Vn.getUTCMonth()+1,1)),Ae=new Date(Date.UTC(Vn.getUTCFullYear(),Vn.getUTCMonth()-1,1)),ye=(Ne,at)=>Ri.reduce((xt,$t)=>{const Qn=new Date($t.timestamp).getTime();return Qn>=Ne.getTime()&&Qn<at.getTime()?xt+$t.creditsUsed:xt},0),je=ye(oe,ae),be=ye(Ae,oe),Xe=Math.max(0,fu-je),Je=Math.min(100,je/fu*100),Ge=oe.toLocaleDateString("en-US",{month:"long",year:"numeric",timeZone:"UTC"}).toUpperCase(),Ft=be>0?(je-be)/be*100:0,lr=ae.getTime()-Vn.getTime(),Pn=Math.floor(lr/864e5),eo=Math.floor(lr/36e5),Oo=Pn>=1?`${Pn} day${Pn===1?"":"s"}`:eo>=1?`${eo} hour${eo===1?"":"s"}`:"less than an hour";return{used:je,priorUsed:be,remaining:Xe,pct:Je,label:Ge,momDelta:Ft,resetsIn:Oo}},[]),Z=x.useMemo(()=>{const ae={};for(const Ge of Ri){const Ft=new Date(Ge.timestamp).toISOString().slice(0,10);ae[Ft]=(ae[Ft]??0)+1}const Ae=new Date(Vn);Ae.setUTCHours(0,0,0,0),Ae.setUTCDate(Ae.getUTCDate()+(6-Ae.getUTCDay()));const ye=new Date(Ae);ye.setUTCDate(ye.getUTCDate()-363);const je=[],be=new Date(ye);for(;be<=Ae;){const Ge=be.toISOString().slice(0,10),Ft=ae[Ge]??0;je.push({date:new Date(be),iso:Ge,count:Ft,inRange:!0}),be.setUTCDate(be.getUTCDate()+1)}const Xe=[];for(let Ge=0;Ge<je.length;Ge+=7)Xe.push(je.slice(Ge,Ge+7));const Je=Math.max(1,...je.map(Ge=>Ge.count));return{weeks:Xe,maxCount:Je}},[]),ue=x.useMemo(()=>{const oe=gu(r),ae={};for(const Ge of z){const Ft=vs(new Date(Ge.timestamp),oe);ae[Ft]=(ae[Ft]??0)+1}const Ae=xu($.from,$.to,oe),ye=Ae.map(Ge=>pl(Ge,oe)),je=Ae.map(Ge=>ae[vs(Ge,oe)]??0),be=je.filter(Ge=>Ge>0).length,Xe=je.reduce((Ge,Ft)=>Ge+Ft,0),Je=be>0?Xe/be:0;return{labels:ye,data:je,total:Xe,avgPerDay:Je}},[z,r]),fe=x.useMemo(()=>{let oe=0,ae=0,Ae=0;for(const je of X)if(je.deploymentType==="engage")for(const be of je.conversations)be.outcome==="goal_achieved"?oe++:be.outcome==="completed_no_action"?ae++:be.outcome==="in_progress"&&Ae++;else je.status==="success"?oe++:je.status==="incomplete"?ae++:je.status==="in_progress"&&Ae++;const ye=oe+ae+Ae;return{achieved:oe,completedNoAction:ae,inProgress:Ae,total:ye}},[X]),{rangeData:Ie,activeDays:Ee}=x.useMemo(()=>{const oe=gu(i),ae={};for(const be of ce){const Xe=vs(new Date(be.timestamp),oe);ae[Xe]||(ae[Xe]=[]),ae[Xe].push(be.creditsUsed)}const ye=xu(ie.from,ie.to,oe).map(be=>{const Xe=vs(be,oe),Je=ae[Xe]??[];return Je.length===0?{label:pl(be,oe),min:0,max:0,count:0,hasData:!1}:{label:pl(be,oe),min:Math.min(...Je),max:Math.max(...Je),count:Je.length,hasData:!0}}),je=ye.filter(be=>be.hasData).length;if(i==="all"&&je>0){const be=ye.findIndex(Je=>Je.hasData),Xe=ye.length-1-[...ye].reverse().findIndex(Je=>Je.hasData);return{rangeData:ye.slice(be,Xe+1),activeDays:je}}return{rangeData:ye,activeDays:je}},[ce,i]),Ze=Kr(f),ge=Di(f),Ce=x.useMemo(()=>Mn(j,Ze),[j,f]),Le=x.useMemo(()=>Mn(j,ge),[j,f]),Fe=x.useMemo(()=>r0(Ce,Co,Iu),[Ce]),Ke=x.useMemo(()=>r0(Le,Co,Iu),[Le]),pt=x.useMemo(()=>{const oe=gu(f),ae=fM(Ce,ye=>vs(new Date(ye),oe),Co);return xu(Ze.from,Ze.to,oe).map(ye=>({label:pl(ye,oe),savedMs:ae[vs(ye,oe)]??0}))},[Ce,f]),ft=Math.max(0,...pt.map(oe=>oe.savedMs))>=36e5?"hour":"min",ht=D>0?P/D*100:0,Ye=re>0?M/re*100:0;return t.jsxs(pN,{children:[t.jsx($N,{}),t.jsxs(bN,{children:[t.jsxs(mN,{children:[t.jsxs(fN,{children:[t.jsxs("div",{children:[t.jsx(ki,{children:"Current Bill Period"}),t.jsxs(_i,{children:["Resets in ",W.resetsIn]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"var(--space-3, 12px)",flexWrap:"wrap"},children:[t.jsx(gN,{children:C0(W.pct)}),t.jsxs(hN,{children:[t.jsx(Wl,{mode:"trend",value:`${W.momDelta>=0?"+":""}${W.momDelta.toFixed(1)}%`,trend:W.momDelta>=0?"up":"down",severity:Math.abs(W.momDelta)<.05?void 0:W.momDelta>=0?"negative":"positive"}),t.jsxs("span",{children:[W.momDelta>=0?"than":"less than"," last month:"," ",t.jsx(xN,{children:W.priorUsed.toLocaleString("en-US")})]})]})]})]}),t.jsxs(vN,{children:[t.jsxs("span",{children:[W.used.toLocaleString("en-US")," used"]}),t.jsxs("span",{children:[W.remaining.toLocaleString("en-US")," remaining"]})]}),t.jsx(wN,{role:"progressbar","aria-label":`Monthly credit usage for ${W.label}`,"aria-valuemin":0,"aria-valuemax":fu,"aria-valuenow":W.used,children:t.jsx(jN,{$pct:W.pct})})]}),t.jsxs(hl,{$secondary:!0,children:[t.jsxs(gl,{children:[t.jsxs("div",{children:[t.jsx(ki,{children:"Success Rate"}),t.jsx(_i,{children:"Breakdown by Achieved, Completed No Action, and In Progress"})]}),t.jsxs(et,{value:c,onChange:oe=>p(oe),size:"sm",children:[t.jsx(et.Item,{value:"24h",children:"24h"}),t.jsx(et.Item,{value:"7d",children:"7d"}),t.jsx(et.Item,{value:"30d",children:"30d"}),t.jsx(et.Item,{value:"all",children:"All"})]})]}),fe.total===0?t.jsx(ml,{children:"No goals in this period"}):(()=>{const oe=fe.achieved/fe.total*100,ae=fe.completedNoAction/fe.total*100,Ae=fe.inProgress/fe.total*100,ye=[{label:"Goal Achieved",value:fe.achieved,color:"var(--Alloy-green-500)",pct:oe,startPct:0,endPct:oe,muted:!1},{label:"Completed No Action",value:fe.completedNoAction,color:"var(--Alloy-slate-400, #9ca3af)",pct:ae,startPct:oe,endPct:oe+ae,muted:!0},{label:"In Progress",value:fe.inProgress,color:"var(--Alloy-blue-500, #446cff)",pct:Ae,startPct:oe+ae,endPct:oe+ae+Ae,muted:!0}];return t.jsxs(t.Fragment,{children:[t.jsxs(N0,{children:[t.jsx(SN,{children:C0(ht)}),t.jsx(fl,{current:ht,prior:Ye})]}),t.jsx(_N,{role:"img","aria-label":`Goals by outcome: ${fe.achieved} achieved, ${fe.completedNoAction} completed with no action, ${fe.inProgress} in progress`,onMouseLeave:()=>C(null),children:ye.map(je=>t.jsx(CN,{$pct:je.pct,$color:je.color,$gradientStart:S0(je.startPct),$gradientEnd:S0(je.endPct),$muted:je.muted,onMouseMove:be=>C({x:be.clientX,y:be.clientY,label:je.label,value:je.value,color:je.color})},je.label))})]})})()]}),t.jsxs(hl,{children:[t.jsxs(gl,{children:[t.jsxs("div",{children:[t.jsx(ki,{children:"Credit Usage Over Time"}),t.jsx(_i,{children:i==="all"?"Total credits consumed per month":"Total credits consumed per day"})]}),t.jsxs(et,{value:i,onChange:oe=>l(oe),size:"sm",children:[t.jsx(et.Item,{value:"24h",children:"24h"}),t.jsx(et.Item,{value:"7d",children:"7d"}),t.jsx(et.Item,{value:"30d",children:"30d"}),t.jsx(et.Item,{value:"all",children:"All"})]})]}),Ee<(i==="all"?1:3)?t.jsx(ml,{children:"Not enough activity yet to show trends"}):t.jsx(ZI,{data:Ie,height:200})]}),t.jsxs(hl,{children:[t.jsx(gl,{children:t.jsxs("div",{children:[t.jsx(ki,{children:"Specialist Activations"}),t.jsx(_i,{children:"Daily activity over the past year"})]})}),t.jsxs(N0,{children:[t.jsx(L0,{children:G.toLocaleString("en-US")}),t.jsx(kN,{children:"Activations"}),t.jsx(fl,{current:G,prior:H})]}),ue.total===0?t.jsx(ml,{children:"No activations in this period"}):t.jsxs(MN,{children:[t.jsx(IN,{children:t.jsx(NN,{role:"img","aria-label":`Daily activations heatmap with max ${Z.maxCount} in a single day`,onMouseLeave:()=>k(null),children:Z.weeks.map((oe,ae)=>Array.from({length:7},(Ae,ye)=>{const je=oe[ye];if(!je)return t.jsx(P0,{$level:0},`${ae}-${ye}`);const be=cN(je.count,Z.maxCount),Xe=je.date.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return t.jsx(P0,{$level:be,onMouseMove:Je=>k({x:Je.clientX,y:Je.clientY,label:Xe,value:je.count,color:cp[be]})},`${ae}-${ye}`)}))})}),t.jsxs(LN,{children:[t.jsx("span",{children:"Less"}),t.jsx(bi,{$level:0}),t.jsx(bi,{$level:1}),t.jsx(bi,{$level:2}),t.jsx(bi,{$level:3}),t.jsx(bi,{$level:4}),t.jsx("span",{children:"More"})]})]})]})]}),t.jsxs(hl,{children:[t.jsxs(gl,{children:[t.jsxs("div",{children:[t.jsx(ki,{children:"Time Saved"}),t.jsx(_i,{children:"Estimated time saved by AI specialists vs manual task completion"})]}),t.jsxs(et,{value:f,onChange:oe=>y(oe),size:"sm",children:[t.jsx(et.Item,{value:"24h",children:"24h"}),t.jsx(et.Item,{value:"7d",children:"7d"}),t.jsx(et.Item,{value:"30d",children:"30d"}),t.jsx(et.Item,{value:"all",children:"All"})]})]}),t.jsxs(PN,{children:[t.jsxs(RN,{children:[t.jsx(L0,{children:dN(Fe.totalTimeSavedMs)}),t.jsx(fl,{current:Fe.totalTimeSavedMs,prior:Ke.totalTimeSavedMs})]}),t.jsxs(DN,{children:[t.jsxs(zN,{children:["≈ ",uN(Fe.costSaved)," saved"]}),t.jsx(fl,{current:Fe.costSaved,prior:Ke.costSaved})]})]}),Fe.totalTimeSavedMs===0?t.jsx(ml,{children:"No measurable time saved in this period"}):t.jsx(lN,{data:pt,unit:ft,height:200}),t.jsxs(FN,{children:[t.jsxs("span",{children:["Based on ",M0," historical baseline",M0===1?"":"s"," and ",I0," estimate",I0===1?"":"s","."]}),Fe.goalsWithoutBaseline>0&&t.jsxs("span",{children:[Fe.goalsWithoutBaseline," goal",Fe.goalsWithoutBaseline===1?"":"s"," excluded — no manual baseline data available."]})]})]}),N&&t.jsxs(A0,{style:{left:N.x,top:N.y},children:[t.jsx(T0,{children:N.label}),t.jsxs(E0,{children:[t.jsx($0,{$color:N.color}),N.value]})]}),A&&t.jsxs(A0,{style:{left:A.x,top:A.y},children:[t.jsx(T0,{children:A.label}),t.jsxs(E0,{children:[t.jsx($0,{$color:A.color}),A.value," activation",A.value===1?"":"s"]})]}),t.jsx(AN,{children:"Activities"}),t.jsxs(TN,{children:[t.jsx("div",{style:{width:160},children:t.jsx(Ln,{size:"sm",options:BN,value:g,onChange:w})}),t.jsx("div",{style:{width:180},children:t.jsx(Ln,{size:"sm",options:ON,value:v,onChange:_})}),t.jsx("div",{style:{width:160},children:t.jsx(Ln,{size:"sm",options:HN,value:b,onChange:L})}),t.jsx("div",{style:{width:150},children:t.jsx(Ln,{size:"sm",options:WN,value:E,onChange:I})}),t.jsx(EN,{children:t.jsxs(et,{value:r,onChange:oe=>s(oe),size:"sm",children:[t.jsx(et.Item,{value:"24h",children:"24h"}),t.jsx(et.Item,{value:"7d",children:"7d"}),t.jsx(et.Item,{value:"30d",children:"30d"}),t.jsx(et.Item,{value:"all",children:"All"})]})})]}),t.jsx(Cg,{timeRange:r,records:j,showFilters:!1})]})}const VN=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  min-height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`;function GN(){return t.jsx(VN,{children:t.jsx(UN,{})})}function qN(r){const s=[r.activeId,r.secActiveId];return r.selectedPersonaId&&s.push("persona",r.selectedPersonaId),r.activePageId&&s.push("page",r.activePageId),"#"+s.map(encodeURIComponent).join("/")}function ZN(r){const s=r.replace(/^#/,"").trim();if(!s)return{};const i=s.split("/").map(c=>{try{return decodeURIComponent(c)}catch{return c}}),l={};i[0]&&(l.activeId=i[0]),i[1]&&(l.secActiveId=i[1]);for(let c=2;c<i.length-1;c+=2){const p=i[c],f=i[c+1];p==="persona"?l.selectedPersonaId=f:p==="page"&&(l.activePageId=f)}return l}function YN(r,s){const i=x.useRef("");x.useEffect(()=>{const l=()=>{const p=ZN(window.location.hash);p.activeId!==void 0&&s.setActiveId(p.activeId),p.secActiveId!==void 0&&s.setSecActiveId(p.secActiveId),s.setSelectedPersonaId(p.selectedPersonaId??null),s.setActivePageId(p.activePageId??null)};window.location.hash&&l();const c=()=>{window.location.hash!==i.current&&l()};return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),x.useEffect(()=>{const l=qN(r);l!==window.location.hash&&(i.current=l,window.history.replaceState(null,"",l))},[r.activeId,r.secActiveId,r.selectedPersonaId,r.activePageId])}const R0=[{id:"home",label:"Home",icon:t.jsx(jk,{})},{id:"engaged",label:"Engaged",icon:t.jsx(bk,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:t.jsx(kk,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:t.jsx(_k,{})},{id:"ai-home",label:"AI Home",icon:t.jsx(Ck,{})}],KN=[{id:"apps",label:"App",icon:t.jsx(Sk,{})}],D0=[{id:"docs",label:"Document Studio",icon:t.jsx(Mk,{})},{id:"form",label:"Form",icon:t.jsx(Ik,{})},{id:"tasks",label:"Tasks",icon:t.jsx(Nk,{})},{id:"policy",label:"Policy",icon:t.jsx(Lk,{}),activeIcon:t.jsx("img",{src:pC,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:t.jsx(Ak,{}),activeIcon:t.jsx("img",{src:fC,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:t.jsx(Tk,{})},{id:"esign",label:"E-Sign Studio",icon:t.jsx(Ek,{})}],js={home:{defaultId:"home-overview",entries:[{id:"home-overview",label:"Overview",icon:t.jsx(xo,{size:16})},{id:"home-activity",label:"Activity",icon:t.jsx(Un,{size:16})},{id:"home-analytics",label:"Analytics",icon:t.jsx(_l,{size:16})}]},engaged:{defaultId:"all-people",entries:[{id:"all-people",label:"All People",icon:t.jsx(Gr,{size:16})},{id:"contractors",label:"Contractors",icon:t.jsx(qn,{size:16})},{id:"employees",label:"Employees",icon:t.jsx(qr,{size:16})},{group:{id:"groups",label:"Groups",icon:t.jsx(Xd,{size:16}),children:[{id:"engineering",label:"Engineering",icon:t.jsx(Um,{size:16})},{id:"design",label:"Design",icon:t.jsx(Wm,{size:16})},{id:"marketing",label:"Marketing",icon:t.jsx(O7,{size:16})},{id:"operations",label:"Operations",icon:t.jsx($i,{size:16})}]}}]},inbox:{defaultId:"inbox-all",entries:[{id:"inbox-all",label:"All",icon:t.jsx(Un,{size:16})},{id:"inbox-action",label:"Action Required",icon:t.jsx(yn,{size:16})},{id:"inbox-mentions",label:"Mentions",icon:t.jsx(Gr,{size:16})},{id:"inbox-notify",label:"Notifications",icon:t.jsx(xo,{size:16})}]},invoice:{defaultId:"invoice-all",entries:[{id:"invoice-all",label:"All Invoices",icon:t.jsx(Un,{size:16})},{id:"invoice-pending",label:"Pending",icon:t.jsx(qr,{size:16})},{id:"invoice-paid",label:"Paid",icon:t.jsx(yn,{size:16})},{id:"invoice-overdue",label:"Overdue",icon:t.jsx(_l,{size:16})}]},"ai-home":{defaultId:"ai-new-chat",entries:[{id:"ai-new-chat",label:"New Chat",icon:t.jsx(xo,{size:16})},{id:"ai-history",label:"History",icon:t.jsx(Un,{size:16})},{id:"ai-prompts",label:"Saved Prompts",icon:t.jsx(qr,{size:16})},{group:{id:"ai-specialists",label:"Specialist",icon:t.jsx(Gr,{size:16}),children:[{id:"ai-personas",label:"Personas",icon:t.jsx(Gr,{size:16})}]}}]},apps:{defaultId:"my-apps",entries:[{group:{id:"mp-team-apps",label:"Team apps",icon:t.jsx(Gr,{size:16}),trailingBadge:t.jsx(it,{size:"sm",variant:"subtle",color:"neutral",children:"5"}),children:[{id:"mp-shift-marketplace",label:"Shift Marketplace",icon:rr("mp-shift-marketplace"),pinnable:!0},{id:"mp-availability",label:"Employee Availability",icon:rr("mp-availability"),pinnable:!0},{id:"mp-time-clock",label:"Smart Time Clock",icon:rr("mp-time-clock"),pinnable:!0},{id:"mp-messaging",label:"Messaging Center",icon:rr("mp-messaging"),pinnable:!0},{id:"mp-client-portal",label:"Client Staffing Portal",icon:rr("mp-client-portal"),pinnable:!0}]}},{group:{id:"mp-background-apps",label:"Background apps",icon:t.jsx(Zu,{size:16}),trailingBadge:t.jsx(it,{size:"sm",variant:"subtle",color:"neutral",children:"5"}),children:[{id:"mp-labor-cost",label:"Labor Cost Forecasting",icon:rr("mp-labor-cost"),pinnable:!0},{id:"mp-compliance-monitor",label:"Compliance Monitor",icon:rr("mp-compliance-monitor"),pinnable:!0},{id:"mp-recruiting",label:"Recruiting Pipeline",icon:rr("mp-recruiting"),pinnable:!0},{id:"mp-credential",label:"Credential Tracker",icon:rr("mp-credential"),pinnable:!0},{id:"mp-performance",label:"Performance Insights",icon:rr("mp-performance"),pinnable:!0}]}}]},"app-tool":{defaultId:"at-overview",entries:[{id:"at-overview",label:"Overview",icon:t.jsx(xo,{size:16})},{id:"at-config",label:"Configuration",icon:t.jsx($i,{size:16})},{id:"at-logs",label:"Logs",icon:t.jsx(Un,{size:16})}]},"add-app":{defaultId:"aa-integrations",entries:[{id:"aa-integrations",label:"Integrations",icon:t.jsx(Xd,{size:16})},{id:"aa-import",label:"Import",icon:t.jsx(qn,{size:16})},{id:"aa-oauth",label:"OAuth Apps",icon:t.jsx($i,{size:16})}]},docs:{defaultId:"docs-all",entries:[{id:"docs-all",label:"All Documents",icon:t.jsx(Un,{size:16})},{id:"docs-drafts",label:"Drafts",icon:t.jsx(qr,{size:16})},{id:"docs-sent",label:"Sent",icon:t.jsx(qn,{size:16})},{id:"docs-signed",label:"Signed",icon:t.jsx(yn,{size:16})}]},form:{defaultId:"form-all",entries:[{id:"form-all",label:"All Forms",icon:t.jsx(Un,{size:16})},{id:"form-active",label:"Active",icon:t.jsx(yn,{size:16})},{id:"form-drafts",label:"Drafts",icon:t.jsx(qr,{size:16})},{id:"form-archived",label:"Archived",icon:t.jsx(qn,{size:16})}]},tasks:{defaultId:"tasks-mine",entries:[{id:"tasks-mine",label:"My Tasks",icon:t.jsx(xo,{size:16})},{id:"tasks-team",label:"Team Tasks",icon:t.jsx(Gr,{size:16})},{id:"tasks-completed",label:"Completed",icon:t.jsx(yn,{size:16})},{id:"tasks-overdue",label:"Overdue",icon:t.jsx(_l,{size:16})}]},policy:{defaultId:"policy-all",entries:[{id:"policy-all",label:"All Policies",icon:t.jsx(Un,{size:16})},{id:"policy-published",label:"Published",icon:t.jsx(yn,{size:16})},{id:"policy-review",label:"Under Review",icon:t.jsx(qr,{size:16})},{id:"policy-drafts",label:"Drafts",icon:t.jsx(qn,{size:16})}]},automation:{defaultId:"auto-active",entries:[{id:"auto-active",label:"Active",icon:t.jsx(yn,{size:16})},{id:"auto-templates",label:"Templates",icon:t.jsx(Xd,{size:16})},{id:"auto-history",label:"History",icon:t.jsx(Un,{size:16})}]},payroll:{defaultId:"pay-overview",entries:[{id:"pay-overview",label:"Overview",icon:t.jsx(xo,{size:16})},{id:"pay-employees",label:"Employees",icon:t.jsx(Gr,{size:16})},{id:"pay-contractors",label:"Contractors",icon:t.jsx(qn,{size:16})},{id:"pay-history",label:"History",icon:t.jsx(Un,{size:16})}]},esign:{defaultId:"esign-awaiting",entries:[{id:"esign-awaiting",label:"Awaiting Signature",icon:t.jsx(qr,{size:16})},{id:"esign-completed",label:"Completed",icon:t.jsx(yn,{size:16})},{id:"esign-templates",label:"Templates",icon:t.jsx(qn,{size:16})},{id:"esign-voided",label:"Voided",icon:t.jsx(Un,{size:16})}]}};function QN(r,s,i,l,c=[],p){const f=js[r];if(!f)return[];const y=g=>{const w=c.includes(g);return t.jsx(XN,{type:"button",$pinned:w,"aria-label":w?"Unpin from sidebar":"Pin to sidebar",onClick:v=>{v.stopPropagation(),p==null||p(g)},children:t.jsx(qu,{size:14})})};return f.entries.map(g=>{if("group"in g){const v=g.group;return{type:"group",group:{id:v.id,label:v.label,icon:v.icon,trailingBadge:v.trailingBadge,defaultExpanded:!0,children:v.children.map(_=>({id:_.id,label:_.label,icon:_.icon,isActive:!l&&s===_.id,onClick:()=>i(_.id),trailingSlot:_.pinnable&&p?y(_.id):void 0}))}}}if("kind"in g&&g.kind==="label")return{type:"label",label:{id:g.id,label:g.label}};const w=g;return{type:"single",item:{id:w.id,label:w.label,icon:w.icon,isActive:!l&&s===w.id,onClick:()=>i(w.id)}}})}const XN=h.button`
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
`;function JN(r,s){const i=js[r];if(i)for(const l of i.entries)if("group"in l){for(const c of l.group.children)if(c.id===s)return{label:c.label,parentLabel:l.group.label}}else{if("kind"in l&&l.kind==="label")continue;if(l.id===s)return{label:l.label}}}const vu={home:"Home",engaged:"Engaged",inbox:"Inbox",invoice:"Invoice","ai-home":"AI Home",apps:"Apps","app-tool":"Custom App","add-app":"Add App",docs:"Document Studio",form:"Form",tasks:"Tasks",policy:"Policy Engine",automation:"Automation",payroll:"Payroll",esign:"E-Sign Studio"},eL=[{id:"new",label:"New",variant:"secondary"},{id:"invite",label:"Invite",variant:"primary"}];function tL({secActiveId:r}){switch(r){case"contractors":return t.jsx(rC,{});case"employees":return t.jsx(oC,{});case"engineering":return t.jsx(sC,{});case"design":return t.jsx(iC,{});case"marketing":return t.jsx(aC,{});case"operations":return t.jsx(lC,{});default:return t.jsx(nC,{})}}function nL({secActiveId:r,selectedPersonaId:s,setSelectedPersonaId:i}){return x.useEffect(()=>{r!=="ai-personas"&&i(null)},[r]),r==="ai-personas"?s?t.jsx(PI,{personaId:s,onBack:()=>i(null)}):t.jsx(nM,{onPersonaClick:i}):t.jsx(IC,{})}const Mg={shift_marketplace:"Shift Marketplace",labor_cost_forecasting:"Labor Cost Forecasting",employee_availability_portal:"Employee Availability Portal",compliance_monitor:"Compliance Monitor",smart_time_clock:"Smart Time Clock",recruiting_pipeline_dashboard:"Recruiting Pipeline Dashboard",workforce_messaging_center:"Workforce Messaging Center",client_staffing_portal:"Client Staffing Portal",credential_tracker:"Credential Tracker",performance_insights_dashboard:"Performance Insights Dashboard"};function rL({activeId:r,secActiveId:s,activePageId:i,selectedPersonaId:l,setSelectedPersonaId:c,onOpenCommunity:p,onOpenInstalled:f,onOpenApp:y,pinnedAppIds:g,onTogglePin:w,installedAppIds:v,onInstallApp:_,onUninstallApp:b,lastOpenedAtById:L}){switch(r){case"home":return t.jsx(Oh,{});case"engaged":return t.jsx(tL,{secActiveId:s});case"inbox":return t.jsx(SC,{});case"invoice":return t.jsx(MC,{});case"ai-home":return t.jsx(nL,{secActiveId:s,selectedPersonaId:l,setSelectedPersonaId:c});case"apps":if(s==="app-marketplace"&&!(i!=null&&i.startsWith("app:")))return t.jsx(hS,{installedAppIds:v,onInstallApp:_,onUninstallApp:b,onOpenApp:y});if(i!=null&&i.startsWith("app:")){const E=i.slice(4),I=Mg[E]??"App";return t.jsx(kS,{name:I})}return t.jsx(bS,{onOpenCommunity:p,onOpenApp:y,pinnedAppIds:g,onTogglePin:w,installedAppIds:v,onUninstallApp:b,lastOpenedAtById:L});case"app-tool":return t.jsx(_S,{});case"add-app":return t.jsx(CS,{});case"docs":return t.jsx(SS,{});case"form":return t.jsx(MS,{});case"tasks":return t.jsx(IS,{});case"policy":return t.jsx(NS,{});case"automation":return t.jsx(LS,{});case"payroll":return t.jsx(AS,{});case"esign":return t.jsx(TS,{});default:return t.jsx(Oh,{})}}function oL(){const[r,s]=x.useState("home"),[i,l]=x.useState(js.home.defaultId),[c,p]=x.useState(""),[f,y]=x.useState(null),[g,w]=x.useState(null),[v,_]=x.useState([]),[b,L]=x.useState([]),[E,I]=x.useState({}),N=W=>{L(Z=>Z.includes(W)?Z:[...Z,W]),I(Z=>({...Z,[W]:Date.now()}))},C=W=>{L(Z=>Z.filter(ue=>ue!==W)),I(Z=>{const{[W]:ue,...fe}=Z;return fe})},A=W=>{I(Z=>({...Z,[W]:Date.now()}))},[k,j]=x.useState("list"),[$,F]=x.useState({});x.useEffect(()=>{i&&F(W=>W[r]===i?W:{...W,[r]:i})},[r,i]),YN({activeId:r,secActiveId:i,selectedPersonaId:f,activePageId:g},{setActiveId:s,setSecActiveId:l,setSelectedPersonaId:y,setActivePageId:w});function z(W){const Z=js[W];s(W),l((Z==null?void 0:Z.defaultId)??""),w((Z==null?void 0:Z.defaultPageId)??null)}function B(W){const Z=js[W],ue=$[W],fe=(Z==null?void 0:Z.defaultId)??"";s(W),l(ue??fe),w(ue?null:(Z==null?void 0:Z.defaultPageId)??null),y(null)}function ie(W){l(W),w(null)}const ce=[...r==="apps"?[{id:"app-marketplace",label:"App Marketplace",icon:t.jsx(Gr,{size:16}),isActive:i==="app-marketplace",onClick:()=>{l("app-marketplace"),w(null)}}]:[],...r==="home"||r==="apps"?[]:[{id:"usage",label:"Usage",icon:t.jsx(_l,{size:16}),isActive:g==="usage",onClick:()=>w("usage")}],...r==="home"&&k==="ai"?[]:[{id:"settings",label:"Settings",icon:t.jsx($i,{size:16})}]],ee=W=>W.map(Z=>({...Z,isActive:Z.id===r&&!(Z.id==="apps"&&(g!=null&&g.startsWith("app:"))),onClick:()=>z(Z.id)})),Y=W=>{const Z=js.apps;if(Z){for(const ue of Z.entries)if("group"in ue){const fe=ue.group.children.find(Ie=>Ie.id===W);if(fe)return fe}}},X=W=>{_(Z=>Z.includes(W)?Z.filter(ue=>ue!==W):[...Z,W])},ve=W=>{s("apps"),l(W);const Z=Jh[W];w(Z?`app:${Z}`:null)},K=v.map(W=>{const Z=Y(W);if(!Z)return null;const ue=Jh[W],fe=ue?`app:${ue}`:null;return{id:`pinned-${W}`,label:Z.label,icon:Z.icon,isActive:r==="apps"&&g===fe,onClick:()=>ve(W)}}).filter(W=>W!==null),q=(()=>{const W=ee(KN);if(K.length===0)return W;const Z=W.findIndex(ue=>ue.id==="apps");return Z===-1?[...W,...K]:[...W.slice(0,Z+1),...K,...W.slice(Z+1)]})(),J=JN(r,i),G=(()=>{if(g==="usage")return t.jsx(Ii,{children:"Usage"});if(r==="apps"&&i==="app-marketplace"&&!(g!=null&&g.startsWith("app:")))return t.jsx(Mi,{separator:"chevron",items:[{label:"Apps",onClick:()=>{l("my-apps"),w(null)}},{label:"App Marketplace"}]});if(r==="apps"&&(g!=null&&g.startsWith("app:"))){const W=g.slice(4),Z=Mg[W]??"App";return t.jsx(Mi,{separator:"chevron",items:[{label:"Apps",onClick:()=>w(null)},{label:Z}]})}if(r==="apps")return t.jsx(Ii,{children:"Apps"});if(r==="ai-home"&&i==="ai-personas"&&f){const W=kr.find(Z=>Z.id===f);return t.jsx(Mi,{separator:"chevron",items:[{label:"Personas",onClick:()=>y(null)},{label:(W==null?void 0:W.name)??"Persona"}]})}return J?J.parentLabel?t.jsx(Mi,{separator:"chevron",items:[{label:J.parentLabel},{label:J.label}]}):t.jsx(Ii,{children:J.label}):t.jsx(Ii,{children:vu[r]??r})})(),H=g==="usage"?"Usage":vu[r]??r,P=g==="usage"?void 0:r==="apps"&&i==="app-marketplace"&&!(g!=null&&g.startsWith("app:"))?"App Marketplace":J?J.parentLabel?`${J.parentLabel} / ${J.label}`:J.label:void 0,M=r==="home"?t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2, 8px)"},children:[t.jsx(Uu,{placement:"bottom-end",trigger:t.jsx(Oe,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"More actions",children:t.jsx(Qm,{size:16})}),groups:[{id:"actions",options:[{id:"action-1",label:"Action"},{id:"action-2",label:"Action"}]}]}),t.jsxs(et,{size:"sm",value:k,onChange:W=>j(W),"aria-label":"AI Home view",children:[t.jsx(et.Item,{value:"list",children:"List"}),t.jsx(et.Item,{value:"ai",leadingIcon:t.jsx(Ui,{variant:k==="ai"?"gradient-fill":"inverse",state:"ready",size:14}),children:"AI"})]})]}):void 0,D=r==="home"&&k==="ai"?t.jsx(uC,{}):void 0,re=[{id:"main",label:"Workspace",items:ee(R0)},{id:"tools",label:"Tools",items:q},{id:"bottom",label:"Apps",items:ee(D0)}];return t.jsx(tC,{items:ee(R0),toolItems:q,bottomItems:ee(D0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:vu[r]??r,menuEntries:QN(r,i,ie,g!==null,v,X),pageEntries:ce,showSecondaryNav:r!=="apps",showSearch:!0,searchValue:c,onSearchChange:p,headerSlot:M,bodyContent:D,heading:G,actions:r==="ai-home"||r==="apps"||g==="usage"?[]:eL,showActivityButton:!0,showPonderButton:!0,noBorder:r==="apps"&&i==="app-marketplace"&&!(g!=null&&g.startsWith("app:")),mobileNav:{activeId:r,secActiveId:i,activePageId:g,selectedPersonaId:f,moduleGroups:re,primaryLabel:H,secondaryLabel:P,onMobileNavigate:B,onSelectPersona:y},children:g==="usage"?t.jsx(GN,{}):t.jsx(rL,{activeId:r,secActiveId:i,activePageId:g,selectedPersonaId:f,setSelectedPersonaId:y,onOpenCommunity:()=>{l("app-marketplace"),w(null)},onOpenInstalled:()=>w(null),onOpenApp:W=>{A(W),w(`app:${W}`)},pinnedAppIds:v,onTogglePin:X,installedAppIds:b,onInstallApp:N,onUninstallApp:C,lastOpenedAtById:E})})}Lx.createRoot(document.getElementById("root")).render(t.jsx(An.StrictMode,{children:t.jsx(oL,{})}));
