(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function a(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(c){if(c.ep)return;c.ep=!0;const u=a(c);fetch(c.href,u)}})();function jm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Kd={exports:{}},Ea={},Qd={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function fx(){if(kf)return Oe;kf=1;var n=Symbol.for("react.element"),s=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),k=Symbol.iterator;function b(A){return A===null||typeof A!="object"?null:(A=k&&A[k]||A["@@iterator"],typeof A=="function"?A:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,S={};function I(A,P,te){this.props=A,this.context=P,this.refs=S,this.updater=te||C}I.prototype.isReactComponent={},I.prototype.setState=function(A,P){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,P,"setState")},I.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function M(){}M.prototype=I.prototype;function N(A,P,te){this.props=A,this.context=P,this.refs=S,this.updater=te||C}var j=N.prototype=new M;j.constructor=N,L(j,I.prototype),j.isPureReactComponent=!0;var _=Array.isArray,E=Object.prototype.hasOwnProperty,z={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function F(A,P,te){var re,fe={},we=null,ge=null;if(P!=null)for(re in P.ref!==void 0&&(ge=P.ref),P.key!==void 0&&(we=""+P.key),P)E.call(P,re)&&!R.hasOwnProperty(re)&&(fe[re]=P[re]);var Ae=arguments.length-2;if(Ae===1)fe.children=te;else if(1<Ae){for(var $e=Array(Ae),se=0;se<Ae;se++)$e[se]=arguments[se+2];fe.children=$e}if(A&&A.defaultProps)for(re in Ae=A.defaultProps,Ae)fe[re]===void 0&&(fe[re]=Ae[re]);return{$$typeof:n,type:A,key:we,ref:ge,props:fe,_owner:z.current}}function X(A,P){return{$$typeof:n,type:A.type,key:P,ref:A.ref,props:A.props,_owner:A._owner}}function Z(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function V(A){var P={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(te){return P[te]})}var U=/\/+/g;function H(A,P){return typeof A=="object"&&A!==null&&A.key!=null?V(""+A.key):P.toString(36)}function ne(A,P,te,re,fe){var we=typeof A;(we==="undefined"||we==="boolean")&&(A=null);var ge=!1;if(A===null)ge=!0;else switch(we){case"string":case"number":ge=!0;break;case"object":switch(A.$$typeof){case n:case s:ge=!0}}if(ge)return ge=A,fe=fe(ge),A=re===""?"."+H(ge,0):re,_(fe)?(te="",A!=null&&(te=A.replace(U,"$&/")+"/"),ne(fe,P,te,"",function(se){return se})):fe!=null&&(Z(fe)&&(fe=X(fe,te+(!fe.key||ge&&ge.key===fe.key?"":(""+fe.key).replace(U,"$&/")+"/")+A)),P.push(fe)),1;if(ge=0,re=re===""?".":re+":",_(A))for(var Ae=0;Ae<A.length;Ae++){we=A[Ae];var $e=re+H(we,Ae);ge+=ne(we,P,te,$e,fe)}else if($e=b(A),typeof $e=="function")for(A=$e.call(A),Ae=0;!(we=A.next()).done;)we=we.value,$e=re+H(we,Ae++),ge+=ne(we,P,te,$e,fe);else if(we==="object")throw P=String(A),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return ge}function K(A,P,te){if(A==null)return A;var re=[],fe=0;return ne(A,re,"","",function(we){return P.call(te,we,fe++)}),re}function Y(A){if(A._status===-1){var P=A._result;P=P(),P.then(function(te){(A._status===0||A._status===-1)&&(A._status=1,A._result=te)},function(te){(A._status===0||A._status===-1)&&(A._status=2,A._result=te)}),A._status===-1&&(A._status=0,A._result=P)}if(A._status===1)return A._result.default;throw A._result}var J={current:null},q={transition:null},B={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:q,ReactCurrentOwner:z};function $(){throw Error("act(...) is not supported in production builds of React.")}return Oe.Children={map:K,forEach:function(A,P,te){K(A,function(){P.apply(this,arguments)},te)},count:function(A){var P=0;return K(A,function(){P++}),P},toArray:function(A){return K(A,function(P){return P})||[]},only:function(A){if(!Z(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Oe.Component=I,Oe.Fragment=a,Oe.Profiler=c,Oe.PureComponent=N,Oe.StrictMode=i,Oe.Suspense=m,Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,Oe.act=$,Oe.cloneElement=function(A,P,te){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var re=L({},A.props),fe=A.key,we=A.ref,ge=A._owner;if(P!=null){if(P.ref!==void 0&&(we=P.ref,ge=z.current),P.key!==void 0&&(fe=""+P.key),A.type&&A.type.defaultProps)var Ae=A.type.defaultProps;for($e in P)E.call(P,$e)&&!R.hasOwnProperty($e)&&(re[$e]=P[$e]===void 0&&Ae!==void 0?Ae[$e]:P[$e])}var $e=arguments.length-2;if($e===1)re.children=te;else if(1<$e){Ae=Array($e);for(var se=0;se<$e;se++)Ae[se]=arguments[se+2];re.children=Ae}return{$$typeof:n,type:A.type,key:fe,ref:we,props:re,_owner:ge}},Oe.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:u,_context:A},A.Consumer=A},Oe.createElement=F,Oe.createFactory=function(A){var P=F.bind(null,A);return P.type=A,P},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(A){return{$$typeof:g,render:A}},Oe.isValidElement=Z,Oe.lazy=function(A){return{$$typeof:x,_payload:{_status:-1,_result:A},_init:Y}},Oe.memo=function(A,P){return{$$typeof:y,type:A,compare:P===void 0?null:P}},Oe.startTransition=function(A){var P=q.transition;q.transition={};try{A()}finally{q.transition=P}},Oe.unstable_act=$,Oe.useCallback=function(A,P){return J.current.useCallback(A,P)},Oe.useContext=function(A){return J.current.useContext(A)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(A){return J.current.useDeferredValue(A)},Oe.useEffect=function(A,P){return J.current.useEffect(A,P)},Oe.useId=function(){return J.current.useId()},Oe.useImperativeHandle=function(A,P,te){return J.current.useImperativeHandle(A,P,te)},Oe.useInsertionEffect=function(A,P){return J.current.useInsertionEffect(A,P)},Oe.useLayoutEffect=function(A,P){return J.current.useLayoutEffect(A,P)},Oe.useMemo=function(A,P){return J.current.useMemo(A,P)},Oe.useReducer=function(A,P,te){return J.current.useReducer(A,P,te)},Oe.useRef=function(A){return J.current.useRef(A)},Oe.useState=function(A){return J.current.useState(A)},Oe.useSyncExternalStore=function(A,P,te){return J.current.useSyncExternalStore(A,P,te)},Oe.useTransition=function(){return J.current.useTransition()},Oe.version="18.3.1",Oe}var _f;function Ju(){return _f||(_f=1,Qd.exports=fx()),Qd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf;function mx(){if(Cf)return Ea;Cf=1;var n=Ju(),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(g,m,y){var x,k={},b=null,C=null;y!==void 0&&(b=""+y),m.key!==void 0&&(b=""+m.key),m.ref!==void 0&&(C=m.ref);for(x in m)i.call(m,x)&&!u.hasOwnProperty(x)&&(k[x]=m[x]);if(g&&g.defaultProps)for(x in m=g.defaultProps,m)k[x]===void 0&&(k[x]=m[x]);return{$$typeof:s,type:g,key:b,ref:C,props:k,_owner:c.current}}return Ea.Fragment=a,Ea.jsx=f,Ea.jsxs=f,Ea}var Sf;function gx(){return Sf||(Sf=1,Kd.exports=mx()),Kd.exports}var e=gx(),v=Ju();const Rn=jm(v);var hl={},Xd={exports:{}},dn={},Jd={exports:{}},eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function vx(){return Mf||(Mf=1,(function(n){function s(q,B){var $=q.length;q.push(B);e:for(;0<$;){var A=$-1>>>1,P=q[A];if(0<c(P,B))q[A]=B,q[$]=P,$=A;else break e}}function a(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var B=q[0],$=q.pop();if($!==B){q[0]=$;e:for(var A=0,P=q.length,te=P>>>1;A<te;){var re=2*(A+1)-1,fe=q[re],we=re+1,ge=q[we];if(0>c(fe,$))we<P&&0>c(ge,fe)?(q[A]=ge,q[we]=$,A=we):(q[A]=fe,q[re]=$,A=re);else if(we<P&&0>c(ge,$))q[A]=ge,q[we]=$,A=we;else break e}}return B}function c(q,B){var $=q.sortIndex-B.sortIndex;return $!==0?$:q.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();n.unstable_now=function(){return f.now()-g}}var m=[],y=[],x=1,k=null,b=3,C=!1,L=!1,S=!1,I=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(q){for(var B=a(y);B!==null;){if(B.callback===null)i(y);else if(B.startTime<=q)i(y),B.sortIndex=B.expirationTime,s(m,B);else break;B=a(y)}}function _(q){if(S=!1,j(q),!L)if(a(m)!==null)L=!0,Y(E);else{var B=a(y);B!==null&&J(_,B.startTime-q)}}function E(q,B){L=!1,S&&(S=!1,M(F),F=-1),C=!0;var $=b;try{for(j(B),k=a(m);k!==null&&(!(k.expirationTime>B)||q&&!V());){var A=k.callback;if(typeof A=="function"){k.callback=null,b=k.priorityLevel;var P=A(k.expirationTime<=B);B=n.unstable_now(),typeof P=="function"?k.callback=P:k===a(m)&&i(m),j(B)}else i(m);k=a(m)}if(k!==null)var te=!0;else{var re=a(y);re!==null&&J(_,re.startTime-B),te=!1}return te}finally{k=null,b=$,C=!1}}var z=!1,R=null,F=-1,X=5,Z=-1;function V(){return!(n.unstable_now()-Z<X)}function U(){if(R!==null){var q=n.unstable_now();Z=q;var B=!0;try{B=R(!0,q)}finally{B?H():(z=!1,R=null)}}else z=!1}var H;if(typeof N=="function")H=function(){N(U)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,K=ne.port2;ne.port1.onmessage=U,H=function(){K.postMessage(null)}}else H=function(){I(U,0)};function Y(q){R=q,z||(z=!0,H())}function J(q,B){F=I(function(){q(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_continueExecution=function(){L||C||(L=!0,Y(E))},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_getFirstCallbackNode=function(){return a(m)},n.unstable_next=function(q){switch(b){case 1:case 2:case 3:var B=3;break;default:B=b}var $=b;b=B;try{return q()}finally{b=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(q,B){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var $=b;b=q;try{return B()}finally{b=$}},n.unstable_scheduleCallback=function(q,B,$){var A=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?A+$:A):$=A,q){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=$+P,q={id:x++,callback:B,priorityLevel:q,startTime:$,expirationTime:P,sortIndex:-1},$>A?(q.sortIndex=$,s(y,q),a(m)===null&&q===a(y)&&(S?(M(F),F=-1):S=!0,J(_,$-A))):(q.sortIndex=P,s(m,q),L||C||(L=!0,Y(E))),q},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(q){var B=b;return function(){var $=b;b=B;try{return q.apply(this,arguments)}finally{b=$}}}})(eu)),eu}var If;function xx(){return If||(If=1,Jd.exports=vx()),Jd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function yx(){if(Nf)return dn;Nf=1;var n=Ju(),s=xx();function a(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,c={};function u(t,r){f(t,r),f(t+"Capture",r)}function f(t,r){for(c[t]=r,t=0;t<r.length;t++)i.add(r[t])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},k={};function b(t){return m.call(k,t)?!0:m.call(x,t)?!1:y.test(t)?k[t]=!0:(x[t]=!0,!1)}function C(t,r,o,l){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L(t,r,o,l){if(r===null||typeof r>"u"||C(t,r,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function S(t,r,o,l,d,p,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=p,this.removeEmptyString=w}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){I[t]=new S(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];I[r]=new S(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){I[t]=new S(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){I[t]=new S(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){I[t]=new S(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){I[t]=new S(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){I[t]=new S(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){I[t]=new S(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){I[t]=new S(t,5,!1,t.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(M,N);I[r]=new S(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(M,N);I[r]=new S(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(M,N);I[r]=new S(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){I[t]=new S(t,1,!1,t.toLowerCase(),null,!1,!1)}),I.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){I[t]=new S(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,r,o,l){var d=I.hasOwnProperty(r)?I[r]:null;(d!==null?d.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(L(r,o,d,l)&&(o=null),l||d===null?b(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(r=d.attributeName,l=d.attributeNamespace,o===null?t.removeAttribute(r):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,l?t.setAttributeNS(l,r,o):t.setAttribute(r,o))))}var _=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.element"),z=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),V=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),q=Symbol.iterator;function B(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,A;function P(t){if(A===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);A=r&&r[1]||""}return`
`+A+t}var te=!1;function re(t,r){if(!t||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(Q){var l=Q}Reflect.construct(t,[],r)}else{try{r.call()}catch(Q){l=Q}t.call(r.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var d=Q.stack.split(`
`),p=l.stack.split(`
`),w=d.length-1,T=p.length-1;1<=w&&0<=T&&d[w]!==p[T];)T--;for(;1<=w&&0<=T;w--,T--)if(d[w]!==p[T]){if(w!==1||T!==1)do if(w--,T--,0>T||d[w]!==p[T]){var D=`
`+d[w].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=w&&0<=T);break}}}finally{te=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?P(t):""}function fe(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function we(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case z:return"Portal";case X:return"Profiler";case F:return"StrictMode";case H:return"Suspense";case ne:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case Z:return(t._context.displayName||"Context")+".Provider";case U:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return r=t.displayName||null,r!==null?r:we(t.type)||"Memo";case Y:r=t._payload,t=t._init;try{return we(t(r))}catch{}}return null}function ge(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(r);case 8:return r===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function se(t){var r=$e(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return d.call(this)},set:function(w){l=""+w,p.call(this,w)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function oe(t){t._valueTracker||(t._valueTracker=se(t))}function pe(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),l="";return t&&(l=$e(t)?t.checked?"true":"false":t.value),t=l,t!==o?(r.setValue(t),!0):!1}function xe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Le(t,r){var o=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ge(t,r){var o=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;o=Ae(r.value!=null?r.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(t,r){r=r.checked,r!=null&&j(t,"checked",r,!1)}function ft(t,r){ht(t,r);var o=Ae(r.value),l=r.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ke(t,r.type,o):r.hasOwnProperty("defaultValue")&&Ke(t,r.type,Ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function mt(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ke(t,r,o){(r!=="number"||xe(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var le=Array.isArray;function de(t,r,o,l){if(t=t.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=r.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),r=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}r!==null||t[d].disabled||(r=t[d])}r!==null&&(r.selected=!0)}}function Re(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(a(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function je(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(a(92));if(le(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Ae(o)}}function _e(t,r){var o=Ae(r.value),l=Ae(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function Ce(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Je(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function et(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Je(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ze,Bt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,l,d){MSApp.execUnsafeLocalFunction(function(){return t(r,o,l,d)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ze.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function fr(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lo=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(t){lo.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),zn[r]=zn[t]})});function Yo(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||zn.hasOwnProperty(t)&&zn[t]?(""+r).trim():r+"px"}function Te(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var l=o.indexOf("--")===0,d=Yo(o,r[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,d):t[o]=d}}var at=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(t,r){if(r){if(at[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(a(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(a(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(a(61))}if(r.style!=null&&typeof r.style!="object")throw Error(a(62))}}function $t(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tr=null;function Ys(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,Ko=null,Qo=null;function Fp(t){if(t=xa(t)){if(typeof Ks!="function")throw Error(a(280));var r=t.stateNode;r&&(r=Ii(r),Ks(t.stateNode,t.type,r))}}function Op(t){Ko?Qo?Qo.push(t):Qo=[t]:Ko=t}function Bp(){if(Ko){var t=Ko,r=Qo;if(Qo=Ko=null,Fp(t),r)for(t=0;t<r.length;t++)Fp(r[t])}}function Hp(t,r){return t(r)}function Up(){}var hc=!1;function Wp(t,r,o){if(hc)return t(r,o);hc=!0;try{return Hp(t,r,o)}finally{hc=!1,(Ko!==null||Qo!==null)&&(Up(),Bp())}}function Qs(t,r){var o=t.stateNode;if(o===null)return null;var l=Ii(o);if(l===null)return null;o=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(a(231,r,typeof o));return o}var fc=!1;if(g)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){fc=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{fc=!1}function w2(t,r,o,l,d,p,w,T,D){var Q=Array.prototype.slice.call(arguments,3);try{r.apply(o,Q)}catch(ie){this.onError(ie)}}var Js=!1,ai=null,ii=!1,mc=null,b2={onError:function(t){Js=!0,ai=t}};function j2(t,r,o,l,d,p,w,T,D){Js=!1,ai=null,w2.apply(b2,arguments)}function k2(t,r,o,l,d,p,w,T,D){if(j2.apply(this,arguments),Js){if(Js){var Q=ai;Js=!1,ai=null}else throw Error(a(198));ii||(ii=!0,mc=Q)}}function co(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function qp(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Vp(t){if(co(t)!==t)throw Error(a(188))}function _2(t){var r=t.alternate;if(!r){if(r=co(t),r===null)throw Error(a(188));return r!==t?null:t}for(var o=t,l=r;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return Vp(d),t;if(p===l)return Vp(d),r;p=p.sibling}throw Error(a(188))}if(o.return!==l.return)o=d,l=p;else{for(var w=!1,T=d.child;T;){if(T===o){w=!0,o=d,l=p;break}if(T===l){w=!0,l=d,o=p;break}T=T.sibling}if(!w){for(T=p.child;T;){if(T===o){w=!0,o=p,l=d;break}if(T===l){w=!0,l=p,o=d;break}T=T.sibling}if(!w)throw Error(a(189))}}if(o.alternate!==l)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?t:r}function Gp(t){return t=_2(t),t!==null?Zp(t):null}function Zp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Zp(t);if(r!==null)return r;t=t.sibling}return null}var Yp=s.unstable_scheduleCallback,Kp=s.unstable_cancelCallback,C2=s.unstable_shouldYield,S2=s.unstable_requestPaint,St=s.unstable_now,M2=s.unstable_getCurrentPriorityLevel,gc=s.unstable_ImmediatePriority,Qp=s.unstable_UserBlockingPriority,li=s.unstable_NormalPriority,I2=s.unstable_LowPriority,Xp=s.unstable_IdlePriority,ci=null,nr=null;function N2(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(ci,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:L2,A2=Math.log,T2=Math.LN2;function L2(t){return t>>>=0,t===0?32:31-(A2(t)/T2|0)|0}var di=64,ui=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pi(t,r){var o=t.pendingLanes;if(o===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,w=o&268435455;if(w!==0){var T=w&~d;T!==0?l=ea(T):(p&=w,p!==0&&(l=ea(p)))}else w=o&~d,w!==0?l=ea(w):p!==0&&(l=ea(p));if(l===0)return 0;if(r!==0&&r!==l&&(r&d)===0&&(d=l&-l,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((l&4)!==0&&(l|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)o=31-Fn(r),d=1<<o,l|=t[o],r&=~d;return l}function E2(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R2(t,r){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-Fn(p),T=1<<w,D=d[w];D===-1?((T&o)===0||(T&l)!==0)&&(d[w]=E2(T,r)):D<=r&&(t.expiredLanes|=T),p&=~T}}function vc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jp(){var t=di;return di<<=1,(di&4194240)===0&&(di=64),t}function xc(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function ta(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Fn(r),t[r]=o}function $2(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Fn(o),p=1<<d;r[d]=0,l[d]=-1,t[d]=-1,o&=~p}}function yc(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var l=31-Fn(o),d=1<<l;d&r|t[l]&r&&(t[l]|=r),o&=~d}}var Qe=0;function e1(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var t1,wc,n1,r1,o1,bc=!1,hi=[],Ar=null,Tr=null,Lr=null,na=new Map,ra=new Map,Er=[],P2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function s1(t,r){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":na.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(r.pointerId)}}function oa(t,r,o,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},r!==null&&(r=xa(r),r!==null&&wc(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),t)}function D2(t,r,o,l,d){switch(r){case"focusin":return Ar=oa(Ar,t,r,o,l,d),!0;case"dragenter":return Tr=oa(Tr,t,r,o,l,d),!0;case"mouseover":return Lr=oa(Lr,t,r,o,l,d),!0;case"pointerover":var p=d.pointerId;return na.set(p,oa(na.get(p)||null,t,r,o,l,d)),!0;case"gotpointercapture":return p=d.pointerId,ra.set(p,oa(ra.get(p)||null,t,r,o,l,d)),!0}return!1}function a1(t){var r=uo(t.target);if(r!==null){var o=co(r);if(o!==null){if(r=o.tag,r===13){if(r=qp(o),r!==null){t.blockedOn=r,o1(t.priority,function(){n1(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fi(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=kc(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);tr=l,o.target.dispatchEvent(l),tr=null}else return r=xa(o),r!==null&&wc(r),t.blockedOn=o,!1;r.shift()}return!0}function i1(t,r,o){fi(t)&&o.delete(r)}function z2(){bc=!1,Ar!==null&&fi(Ar)&&(Ar=null),Tr!==null&&fi(Tr)&&(Tr=null),Lr!==null&&fi(Lr)&&(Lr=null),na.forEach(i1),ra.forEach(i1)}function sa(t,r){t.blockedOn===r&&(t.blockedOn=null,bc||(bc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,z2)))}function aa(t){function r(d){return sa(d,t)}if(0<hi.length){sa(hi[0],t);for(var o=1;o<hi.length;o++){var l=hi[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Ar!==null&&sa(Ar,t),Tr!==null&&sa(Tr,t),Lr!==null&&sa(Lr,t),na.forEach(r),ra.forEach(r),o=0;o<Er.length;o++)l=Er[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Er.length&&(o=Er[0],o.blockedOn===null);)a1(o),o.blockedOn===null&&Er.shift()}var Xo=_.ReactCurrentBatchConfig,mi=!0;function F2(t,r,o,l){var d=Qe,p=Xo.transition;Xo.transition=null;try{Qe=1,jc(t,r,o,l)}finally{Qe=d,Xo.transition=p}}function O2(t,r,o,l){var d=Qe,p=Xo.transition;Xo.transition=null;try{Qe=4,jc(t,r,o,l)}finally{Qe=d,Xo.transition=p}}function jc(t,r,o,l){if(mi){var d=kc(t,r,o,l);if(d===null)Oc(t,r,l,gi,o),s1(t,l);else if(D2(d,t,r,o,l))l.stopPropagation();else if(s1(t,l),r&4&&-1<P2.indexOf(t)){for(;d!==null;){var p=xa(d);if(p!==null&&t1(p),p=kc(t,r,o,l),p===null&&Oc(t,r,l,gi,o),p===d)break;d=p}d!==null&&l.stopPropagation()}else Oc(t,r,l,null,o)}}var gi=null;function kc(t,r,o,l){if(gi=null,t=Ys(l),t=uo(t),t!==null)if(r=co(t),r===null)t=null;else if(o=r.tag,o===13){if(t=qp(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return gi=t,null}function l1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M2()){case gc:return 1;case Qp:return 4;case li:case I2:return 16;case Xp:return 536870912;default:return 16}default:return 16}}var Rr=null,_c=null,vi=null;function c1(){if(vi)return vi;var t,r=_c,o=r.length,l,d="value"in Rr?Rr.value:Rr.textContent,p=d.length;for(t=0;t<o&&r[t]===d[t];t++);var w=o-t;for(l=1;l<=w&&r[o-l]===d[p-l];l++);return vi=d.slice(t,1<l?1-l:void 0)}function xi(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function yi(){return!0}function d1(){return!1}function vn(t){function r(o,l,d,p,w){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(o=t[T],this[T]=o?o(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?yi:d1,this.isPropagationStopped=d1,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),r}var Jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=vn(Jo),ia=$({},Jo,{view:0,detail:0}),B2=vn(ia),Sc,Mc,la,wi=$({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Sc=t.screenX-la.screenX,Mc=t.screenY-la.screenY):Mc=Sc=0,la=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),u1=vn(wi),H2=$({},wi,{dataTransfer:0}),U2=vn(H2),W2=$({},ia,{relatedTarget:0}),Ic=vn(W2),q2=$({},Jo,{animationName:0,elapsedTime:0,pseudoElement:0}),V2=vn(q2),G2=$({},Jo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z2=vn(G2),Y2=$({},Jo,{data:0}),p1=vn(Y2),K2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J2(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=X2[t])?!!r[t]:!1}function Nc(){return J2}var ev=$({},ia,{key:function(t){if(t.key){var r=K2[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=xi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(t){return t.type==="keypress"?xi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tv=vn(ev),nv=$({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),h1=vn(nv),rv=$({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),ov=vn(rv),sv=$({},Jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),av=vn(sv),iv=$({},wi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lv=vn(iv),cv=[9,13,27,32],Ac=g&&"CompositionEvent"in window,ca=null;g&&"documentMode"in document&&(ca=document.documentMode);var dv=g&&"TextEvent"in window&&!ca,f1=g&&(!Ac||ca&&8<ca&&11>=ca),m1=" ",g1=!1;function v1(t,r){switch(t){case"keyup":return cv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function uv(t,r){switch(t){case"compositionend":return x1(r);case"keypress":return r.which!==32?null:(g1=!0,m1);case"textInput":return t=r.data,t===m1&&g1?null:t;default:return null}}function pv(t,r){if(es)return t==="compositionend"||!Ac&&v1(t,r)?(t=c1(),vi=_c=Rr=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return f1&&r.locale!=="ko"?null:r.data;default:return null}}var hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function y1(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!hv[t.type]:r==="textarea"}function w1(t,r,o,l){Op(l),r=Ci(r,"onChange"),0<r.length&&(o=new Cc("onChange","change",null,o,l),t.push({event:o,listeners:r}))}var da=null,ua=null;function fv(t){z1(t,0)}function bi(t){var r=ss(t);if(pe(r))return t}function mv(t,r){if(t==="change")return r}var b1=!1;if(g){var Tc;if(g){var Lc="oninput"in document;if(!Lc){var j1=document.createElement("div");j1.setAttribute("oninput","return;"),Lc=typeof j1.oninput=="function"}Tc=Lc}else Tc=!1;b1=Tc&&(!document.documentMode||9<document.documentMode)}function k1(){da&&(da.detachEvent("onpropertychange",_1),ua=da=null)}function _1(t){if(t.propertyName==="value"&&bi(ua)){var r=[];w1(r,ua,t,Ys(t)),Wp(fv,r)}}function gv(t,r,o){t==="focusin"?(k1(),da=r,ua=o,da.attachEvent("onpropertychange",_1)):t==="focusout"&&k1()}function vv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bi(ua)}function xv(t,r){if(t==="click")return bi(r)}function yv(t,r){if(t==="input"||t==="change")return bi(r)}function wv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var On=typeof Object.is=="function"?Object.is:wv;function pa(t,r){if(On(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),l=Object.keys(r);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!m.call(r,d)||!On(t[d],r[d]))return!1}return!0}function C1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function S1(t,r){var o=C1(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=r&&l>=r)return{node:o,offset:r-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=C1(o)}}function M1(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?M1(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function I1(){for(var t=window,r=xe();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=xe(t.document)}return r}function Ec(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function bv(t){var r=I1(),o=t.focusedElem,l=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&M1(o.ownerDocument.documentElement,o)){if(l!==null&&Ec(o)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=S1(o,p);var w=S1(o,l);d&&w&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(r),t.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jv=g&&"documentMode"in document&&11>=document.documentMode,ts=null,Rc=null,ha=null,$c=!1;function N1(t,r,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$c||ts==null||ts!==xe(l)||(l=ts,"selectionStart"in l&&Ec(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ha&&pa(ha,l)||(ha=l,l=Ci(Rc,"onSelect"),0<l.length&&(r=new Cc("onSelect","select",null,r,o),t.push({event:r,listeners:l}),r.target=ts)))}function ji(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var ns={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},Pc={},A1={};g&&(A1=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function ki(t){if(Pc[t])return Pc[t];if(!ns[t])return t;var r=ns[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in A1)return Pc[t]=r[o];return t}var T1=ki("animationend"),L1=ki("animationiteration"),E1=ki("animationstart"),R1=ki("transitionend"),$1=new Map,P1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,r){$1.set(t,r),u(r,[t])}for(var Dc=0;Dc<P1.length;Dc++){var zc=P1[Dc],kv=zc.toLowerCase(),_v=zc[0].toUpperCase()+zc.slice(1);$r(kv,"on"+_v)}$r(T1,"onAnimationEnd"),$r(L1,"onAnimationIteration"),$r(E1,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(R1,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function D1(t,r,o){var l=t.type||"unknown-event";t.currentTarget=o,k2(l,r,void 0,t),t.currentTarget=null}function z1(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var p=void 0;if(r)for(var w=l.length-1;0<=w;w--){var T=l[w],D=T.instance,Q=T.currentTarget;if(T=T.listener,D!==p&&d.isPropagationStopped())break e;D1(d,T,Q),p=D}else for(w=0;w<l.length;w++){if(T=l[w],D=T.instance,Q=T.currentTarget,T=T.listener,D!==p&&d.isPropagationStopped())break e;D1(d,T,Q),p=D}}}if(ii)throw t=mc,ii=!1,mc=null,t}function ct(t,r){var o=r[Vc];o===void 0&&(o=r[Vc]=new Set);var l=t+"__bubble";o.has(l)||(F1(r,t,2,!1),o.add(l))}function Fc(t,r,o){var l=0;r&&(l|=4),F1(o,t,l,r)}var _i="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[_i]){t[_i]=!0,i.forEach(function(o){o!=="selectionchange"&&(Cv.has(o)||Fc(o,!1,t),Fc(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[_i]||(r[_i]=!0,Fc("selectionchange",!1,r))}}function F1(t,r,o,l){switch(l1(r)){case 1:var d=F2;break;case 4:d=O2;break;default:d=jc}o=d.bind(null,r,o,t),d=void 0,!fc||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(r,o,{capture:!0,passive:d}):t.addEventListener(r,o,!0):d!==void 0?t.addEventListener(r,o,{passive:d}):t.addEventListener(r,o,!1)}function Oc(t,r,o,l,d){var p=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var T=l.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(w===4)for(w=l.return;w!==null;){var D=w.tag;if((D===3||D===4)&&(D=w.stateNode.containerInfo,D===d||D.nodeType===8&&D.parentNode===d))return;w=w.return}for(;T!==null;){if(w=uo(T),w===null)return;if(D=w.tag,D===5||D===6){l=p=w;continue e}T=T.parentNode}}l=l.return}Wp(function(){var Q=p,ie=Ys(o),ce=[];e:{var ae=$1.get(t);if(ae!==void 0){var me=Cc,ye=t;switch(t){case"keypress":if(xi(o)===0)break e;case"keydown":case"keyup":me=tv;break;case"focusin":ye="focus",me=Ic;break;case"focusout":ye="blur",me=Ic;break;case"beforeblur":case"afterblur":me=Ic;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=u1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=U2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=ov;break;case T1:case L1:case E1:me=V2;break;case R1:me=av;break;case"scroll":me=B2;break;case"wheel":me=lv;break;case"copy":case"cut":case"paste":me=Z2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=h1}var be=(r&4)!==0,Mt=!be&&t==="scroll",W=be?ae!==null?ae+"Capture":null:ae;be=[];for(var O=Q,G;O!==null;){G=O;var ue=G.stateNode;if(G.tag===5&&ue!==null&&(G=ue,W!==null&&(ue=Qs(O,W),ue!=null&&be.push(ga(O,ue,G)))),Mt)break;O=O.return}0<be.length&&(ae=new me(ae,ye,null,o,ie),ce.push({event:ae,listeners:be}))}}if((r&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",me=t==="mouseout"||t==="pointerout",ae&&o!==tr&&(ye=o.relatedTarget||o.fromElement)&&(uo(ye)||ye[mr]))break e;if((me||ae)&&(ae=ie.window===ie?ie:(ae=ie.ownerDocument)?ae.defaultView||ae.parentWindow:window,me?(ye=o.relatedTarget||o.toElement,me=Q,ye=ye?uo(ye):null,ye!==null&&(Mt=co(ye),ye!==Mt||ye.tag!==5&&ye.tag!==6)&&(ye=null)):(me=null,ye=Q),me!==ye)){if(be=u1,ue="onMouseLeave",W="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(be=h1,ue="onPointerLeave",W="onPointerEnter",O="pointer"),Mt=me==null?ae:ss(me),G=ye==null?ae:ss(ye),ae=new be(ue,O+"leave",me,o,ie),ae.target=Mt,ae.relatedTarget=G,ue=null,uo(ie)===Q&&(be=new be(W,O+"enter",ye,o,ie),be.target=G,be.relatedTarget=Mt,ue=be),Mt=ue,me&&ye)t:{for(be=me,W=ye,O=0,G=be;G;G=rs(G))O++;for(G=0,ue=W;ue;ue=rs(ue))G++;for(;0<O-G;)be=rs(be),O--;for(;0<G-O;)W=rs(W),G--;for(;O--;){if(be===W||W!==null&&be===W.alternate)break t;be=rs(be),W=rs(W)}be=null}else be=null;me!==null&&O1(ce,ae,me,be,!1),ye!==null&&Mt!==null&&O1(ce,Mt,ye,be,!0)}}e:{if(ae=Q?ss(Q):window,me=ae.nodeName&&ae.nodeName.toLowerCase(),me==="select"||me==="input"&&ae.type==="file")var ke=mv;else if(y1(ae))if(b1)ke=yv;else{ke=vv;var Se=gv}else(me=ae.nodeName)&&me.toLowerCase()==="input"&&(ae.type==="checkbox"||ae.type==="radio")&&(ke=xv);if(ke&&(ke=ke(t,Q))){w1(ce,ke,o,ie);break e}Se&&Se(t,ae,Q),t==="focusout"&&(Se=ae._wrapperState)&&Se.controlled&&ae.type==="number"&&Ke(ae,"number",ae.value)}switch(Se=Q?ss(Q):window,t){case"focusin":(y1(Se)||Se.contentEditable==="true")&&(ts=Se,Rc=Q,ha=null);break;case"focusout":ha=Rc=ts=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,N1(ce,o,ie);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":N1(ce,o,ie)}var Me;if(Ac)e:{switch(t){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else es?v1(t,o)&&(Ie="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Ie="onCompositionStart");Ie&&(f1&&o.locale!=="ko"&&(es||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&es&&(Me=c1()):(Rr=ie,_c="value"in Rr?Rr.value:Rr.textContent,es=!0)),Se=Ci(Q,Ie),0<Se.length&&(Ie=new p1(Ie,t,null,o,ie),ce.push({event:Ie,listeners:Se}),Me?Ie.data=Me:(Me=x1(o),Me!==null&&(Ie.data=Me)))),(Me=dv?uv(t,o):pv(t,o))&&(Q=Ci(Q,"onBeforeInput"),0<Q.length&&(ie=new p1("onBeforeInput","beforeinput",null,o,ie),ce.push({event:ie,listeners:Q}),ie.data=Me))}z1(ce,r)})}function ga(t,r,o){return{instance:t,listener:r,currentTarget:o}}function Ci(t,r){for(var o=r+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Qs(t,o),p!=null&&l.unshift(ga(t,p,d)),p=Qs(t,r),p!=null&&l.push(ga(t,p,d))),t=t.return}return l}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function O1(t,r,o,l,d){for(var p=r._reactName,w=[];o!==null&&o!==l;){var T=o,D=T.alternate,Q=T.stateNode;if(D!==null&&D===l)break;T.tag===5&&Q!==null&&(T=Q,d?(D=Qs(o,p),D!=null&&w.unshift(ga(o,D,T))):d||(D=Qs(o,p),D!=null&&w.push(ga(o,D,T)))),o=o.return}w.length!==0&&t.push({event:r,listeners:w})}var Sv=/\r\n?/g,Mv=/\u0000|\uFFFD/g;function B1(t){return(typeof t=="string"?t:""+t).replace(Sv,`
`).replace(Mv,"")}function Si(t,r,o){if(r=B1(r),B1(t)!==r&&o)throw Error(a(425))}function Mi(){}var Bc=null,Hc=null;function Uc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,Iv=typeof clearTimeout=="function"?clearTimeout:void 0,H1=typeof Promise=="function"?Promise:void 0,Nv=typeof queueMicrotask=="function"?queueMicrotask:typeof H1<"u"?function(t){return H1.resolve(null).then(t).catch(Av)}:Wc;function Av(t){setTimeout(function(){throw t})}function qc(t,r){var o=r,l=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(l===0){t.removeChild(d),aa(r);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=d}while(o);aa(r)}function Pr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function U1(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),rr="__reactFiber$"+os,va="__reactProps$"+os,mr="__reactContainer$"+os,Vc="__reactEvents$"+os,Tv="__reactListeners$"+os,Lv="__reactHandles$"+os;function uo(t){var r=t[rr];if(r)return r;for(var o=t.parentNode;o;){if(r=o[mr]||o[rr]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=U1(t);t!==null;){if(o=t[rr])return o;t=U1(t)}return r}t=o,o=t.parentNode}return null}function xa(t){return t=t[rr]||t[mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(a(33))}function Ii(t){return t[va]||null}var Gc=[],as=-1;function Dr(t){return{current:t}}function dt(t){0>as||(t.current=Gc[as],Gc[as]=null,as--)}function it(t,r){as++,Gc[as]=t.current,t.current=r}var zr={},Vt=Dr(zr),on=Dr(!1),po=zr;function is(t,r){var o=t.type.contextTypes;if(!o)return zr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=r[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=d),d}function sn(t){return t=t.childContextTypes,t!=null}function Ni(){dt(on),dt(Vt)}function W1(t,r,o){if(Vt.current!==zr)throw Error(a(168));it(Vt,r),it(on,o)}function q1(t,r,o){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var d in l)if(!(d in r))throw Error(a(108,ge(t)||"Unknown",d));return $({},o,l)}function Ai(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,po=Vt.current,it(Vt,t),it(on,on.current),!0}function V1(t,r,o){var l=t.stateNode;if(!l)throw Error(a(169));o?(t=q1(t,r,po),l.__reactInternalMemoizedMergedChildContext=t,dt(on),dt(Vt),it(Vt,t)):dt(on),it(on,o)}var gr=null,Ti=!1,Zc=!1;function G1(t){gr===null?gr=[t]:gr.push(t)}function Ev(t){Ti=!0,G1(t)}function Fr(){if(!Zc&&gr!==null){Zc=!0;var t=0,r=Qe;try{var o=gr;for(Qe=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}gr=null,Ti=!1}catch(d){throw gr!==null&&(gr=gr.slice(t+1)),Yp(gc,Fr),d}finally{Qe=r,Zc=!1}}return null}var ls=[],cs=0,Li=null,Ei=0,Cn=[],Sn=0,ho=null,vr=1,xr="";function fo(t,r){ls[cs++]=Ei,ls[cs++]=Li,Li=t,Ei=r}function Z1(t,r,o){Cn[Sn++]=vr,Cn[Sn++]=xr,Cn[Sn++]=ho,ho=t;var l=vr;t=xr;var d=32-Fn(l)-1;l&=~(1<<d),o+=1;var p=32-Fn(r)+d;if(30<p){var w=d-d%5;p=(l&(1<<w)-1).toString(32),l>>=w,d-=w,vr=1<<32-Fn(r)+d|o<<d|l,xr=p+t}else vr=1<<p|o<<d|l,xr=t}function Yc(t){t.return!==null&&(fo(t,1),Z1(t,1,0))}function Kc(t){for(;t===Li;)Li=ls[--cs],ls[cs]=null,Ei=ls[--cs],ls[cs]=null;for(;t===ho;)ho=Cn[--Sn],Cn[Sn]=null,xr=Cn[--Sn],Cn[Sn]=null,vr=Cn[--Sn],Cn[Sn]=null}var xn=null,yn=null,gt=!1,Bn=null;function Y1(t,r){var o=An(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function K1(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,xn=t,yn=Pr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,xn=t,yn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ho!==null?{id:vr,overflow:xr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=An(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,xn=t,yn=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xc(t){if(gt){var r=yn;if(r){var o=r;if(!K1(t,r)){if(Qc(t))throw Error(a(418));r=Pr(o.nextSibling);var l=xn;r&&K1(t,r)?Y1(l,o):(t.flags=t.flags&-4097|2,gt=!1,xn=t)}}else{if(Qc(t))throw Error(a(418));t.flags=t.flags&-4097|2,gt=!1,xn=t}}}function Q1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Ri(t){if(t!==xn)return!1;if(!gt)return Q1(t),gt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Uc(t.type,t.memoizedProps)),r&&(r=yn)){if(Qc(t))throw X1(),Error(a(418));for(;r;)Y1(t,r),r=Pr(r.nextSibling)}if(Q1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){yn=Pr(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}yn=null}}else yn=xn?Pr(t.stateNode.nextSibling):null;return!0}function X1(){for(var t=yn;t;)t=Pr(t.nextSibling)}function ds(){yn=xn=null,gt=!1}function Jc(t){Bn===null?Bn=[t]:Bn.push(t)}var Rv=_.ReactCurrentBatchConfig;function ya(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(a(309));var l=o.stateNode}if(!l)throw Error(a(147,t));var d=l,p=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(w){var T=d.refs;w===null?delete T[p]:T[p]=w},r._stringRef=p,r)}if(typeof t!="string")throw Error(a(284));if(!o._owner)throw Error(a(290,t))}return t}function $i(t,r){throw t=Object.prototype.toString.call(r),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function J1(t){var r=t._init;return r(t._payload)}function eh(t){function r(W,O){if(t){var G=W.deletions;G===null?(W.deletions=[O],W.flags|=16):G.push(O)}}function o(W,O){if(!t)return null;for(;O!==null;)r(W,O),O=O.sibling;return null}function l(W,O){for(W=new Map;O!==null;)O.key!==null?W.set(O.key,O):W.set(O.index,O),O=O.sibling;return W}function d(W,O){return W=Gr(W,O),W.index=0,W.sibling=null,W}function p(W,O,G){return W.index=G,t?(G=W.alternate,G!==null?(G=G.index,G<O?(W.flags|=2,O):G):(W.flags|=2,O)):(W.flags|=1048576,O)}function w(W){return t&&W.alternate===null&&(W.flags|=2),W}function T(W,O,G,ue){return O===null||O.tag!==6?(O=Wd(G,W.mode,ue),O.return=W,O):(O=d(O,G),O.return=W,O)}function D(W,O,G,ue){var ke=G.type;return ke===R?ie(W,O,G.props.children,ue,G.key):O!==null&&(O.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===Y&&J1(ke)===O.type)?(ue=d(O,G.props),ue.ref=ya(W,O,G),ue.return=W,ue):(ue=sl(G.type,G.key,G.props,null,W.mode,ue),ue.ref=ya(W,O,G),ue.return=W,ue)}function Q(W,O,G,ue){return O===null||O.tag!==4||O.stateNode.containerInfo!==G.containerInfo||O.stateNode.implementation!==G.implementation?(O=qd(G,W.mode,ue),O.return=W,O):(O=d(O,G.children||[]),O.return=W,O)}function ie(W,O,G,ue,ke){return O===null||O.tag!==7?(O=jo(G,W.mode,ue,ke),O.return=W,O):(O=d(O,G),O.return=W,O)}function ce(W,O,G){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Wd(""+O,W.mode,G),O.return=W,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case E:return G=sl(O.type,O.key,O.props,null,W.mode,G),G.ref=ya(W,null,O),G.return=W,G;case z:return O=qd(O,W.mode,G),O.return=W,O;case Y:var ue=O._init;return ce(W,ue(O._payload),G)}if(le(O)||B(O))return O=jo(O,W.mode,G,null),O.return=W,O;$i(W,O)}return null}function ae(W,O,G,ue){var ke=O!==null?O.key:null;if(typeof G=="string"&&G!==""||typeof G=="number")return ke!==null?null:T(W,O,""+G,ue);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case E:return G.key===ke?D(W,O,G,ue):null;case z:return G.key===ke?Q(W,O,G,ue):null;case Y:return ke=G._init,ae(W,O,ke(G._payload),ue)}if(le(G)||B(G))return ke!==null?null:ie(W,O,G,ue,null);$i(W,G)}return null}function me(W,O,G,ue,ke){if(typeof ue=="string"&&ue!==""||typeof ue=="number")return W=W.get(G)||null,T(O,W,""+ue,ke);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case E:return W=W.get(ue.key===null?G:ue.key)||null,D(O,W,ue,ke);case z:return W=W.get(ue.key===null?G:ue.key)||null,Q(O,W,ue,ke);case Y:var Se=ue._init;return me(W,O,G,Se(ue._payload),ke)}if(le(ue)||B(ue))return W=W.get(G)||null,ie(O,W,ue,ke,null);$i(O,ue)}return null}function ye(W,O,G,ue){for(var ke=null,Se=null,Me=O,Ie=O=0,zt=null;Me!==null&&Ie<G.length;Ie++){Me.index>Ie?(zt=Me,Me=null):zt=Me.sibling;var Ve=ae(W,Me,G[Ie],ue);if(Ve===null){Me===null&&(Me=zt);break}t&&Me&&Ve.alternate===null&&r(W,Me),O=p(Ve,O,Ie),Se===null?ke=Ve:Se.sibling=Ve,Se=Ve,Me=zt}if(Ie===G.length)return o(W,Me),gt&&fo(W,Ie),ke;if(Me===null){for(;Ie<G.length;Ie++)Me=ce(W,G[Ie],ue),Me!==null&&(O=p(Me,O,Ie),Se===null?ke=Me:Se.sibling=Me,Se=Me);return gt&&fo(W,Ie),ke}for(Me=l(W,Me);Ie<G.length;Ie++)zt=me(Me,W,Ie,G[Ie],ue),zt!==null&&(t&&zt.alternate!==null&&Me.delete(zt.key===null?Ie:zt.key),O=p(zt,O,Ie),Se===null?ke=zt:Se.sibling=zt,Se=zt);return t&&Me.forEach(function(Zr){return r(W,Zr)}),gt&&fo(W,Ie),ke}function be(W,O,G,ue){var ke=B(G);if(typeof ke!="function")throw Error(a(150));if(G=ke.call(G),G==null)throw Error(a(151));for(var Se=ke=null,Me=O,Ie=O=0,zt=null,Ve=G.next();Me!==null&&!Ve.done;Ie++,Ve=G.next()){Me.index>Ie?(zt=Me,Me=null):zt=Me.sibling;var Zr=ae(W,Me,Ve.value,ue);if(Zr===null){Me===null&&(Me=zt);break}t&&Me&&Zr.alternate===null&&r(W,Me),O=p(Zr,O,Ie),Se===null?ke=Zr:Se.sibling=Zr,Se=Zr,Me=zt}if(Ve.done)return o(W,Me),gt&&fo(W,Ie),ke;if(Me===null){for(;!Ve.done;Ie++,Ve=G.next())Ve=ce(W,Ve.value,ue),Ve!==null&&(O=p(Ve,O,Ie),Se===null?ke=Ve:Se.sibling=Ve,Se=Ve);return gt&&fo(W,Ie),ke}for(Me=l(W,Me);!Ve.done;Ie++,Ve=G.next())Ve=me(Me,W,Ie,Ve.value,ue),Ve!==null&&(t&&Ve.alternate!==null&&Me.delete(Ve.key===null?Ie:Ve.key),O=p(Ve,O,Ie),Se===null?ke=Ve:Se.sibling=Ve,Se=Ve);return t&&Me.forEach(function(hx){return r(W,hx)}),gt&&fo(W,Ie),ke}function Mt(W,O,G,ue){if(typeof G=="object"&&G!==null&&G.type===R&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case E:e:{for(var ke=G.key,Se=O;Se!==null;){if(Se.key===ke){if(ke=G.type,ke===R){if(Se.tag===7){o(W,Se.sibling),O=d(Se,G.props.children),O.return=W,W=O;break e}}else if(Se.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===Y&&J1(ke)===Se.type){o(W,Se.sibling),O=d(Se,G.props),O.ref=ya(W,Se,G),O.return=W,W=O;break e}o(W,Se);break}else r(W,Se);Se=Se.sibling}G.type===R?(O=jo(G.props.children,W.mode,ue,G.key),O.return=W,W=O):(ue=sl(G.type,G.key,G.props,null,W.mode,ue),ue.ref=ya(W,O,G),ue.return=W,W=ue)}return w(W);case z:e:{for(Se=G.key;O!==null;){if(O.key===Se)if(O.tag===4&&O.stateNode.containerInfo===G.containerInfo&&O.stateNode.implementation===G.implementation){o(W,O.sibling),O=d(O,G.children||[]),O.return=W,W=O;break e}else{o(W,O);break}else r(W,O);O=O.sibling}O=qd(G,W.mode,ue),O.return=W,W=O}return w(W);case Y:return Se=G._init,Mt(W,O,Se(G._payload),ue)}if(le(G))return ye(W,O,G,ue);if(B(G))return be(W,O,G,ue);$i(W,G)}return typeof G=="string"&&G!==""||typeof G=="number"?(G=""+G,O!==null&&O.tag===6?(o(W,O.sibling),O=d(O,G),O.return=W,W=O):(o(W,O),O=Wd(G,W.mode,ue),O.return=W,W=O),w(W)):o(W,O)}return Mt}var us=eh(!0),th=eh(!1),Pi=Dr(null),Di=null,ps=null,ed=null;function td(){ed=ps=Di=null}function nd(t){var r=Pi.current;dt(Pi),t._currentValue=r}function rd(t,r,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===o)break;t=t.return}}function hs(t,r){Di=t,ed=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(an=!0),t.firstContext=null)}function Mn(t){var r=t._currentValue;if(ed!==t)if(t={context:t,memoizedValue:r,next:null},ps===null){if(Di===null)throw Error(a(308));ps=t,Di.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return r}var mo=null;function od(t){mo===null?mo=[t]:mo.push(t)}function nh(t,r,o,l){var d=r.interleaved;return d===null?(o.next=o,od(r)):(o.next=d.next,d.next=o),r.interleaved=o,yr(t,l)}function yr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Or=!1;function sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Br(t,r,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var d=l.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),l.pending=r,yr(t,o)}return d=l.interleaved,d===null?(r.next=r,od(l)):(r.next=d.next,d.next=r),l.interleaved=r,yr(t,o)}function zi(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,o|=l,r.lanes=o,yc(t,o)}}function oh(t,r){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=w:p=p.next=w,o=o.next}while(o!==null);p===null?d=p=r:p=p.next=r}else d=p=r;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Fi(t,r,o,l){var d=t.updateQueue;Or=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var D=T,Q=D.next;D.next=null,w===null?p=Q:w.next=Q,w=D;var ie=t.alternate;ie!==null&&(ie=ie.updateQueue,T=ie.lastBaseUpdate,T!==w&&(T===null?ie.firstBaseUpdate=Q:T.next=Q,ie.lastBaseUpdate=D))}if(p!==null){var ce=d.baseState;w=0,ie=Q=D=null,T=p;do{var ae=T.lane,me=T.eventTime;if((l&ae)===ae){ie!==null&&(ie=ie.next={eventTime:me,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ye=t,be=T;switch(ae=r,me=o,be.tag){case 1:if(ye=be.payload,typeof ye=="function"){ce=ye.call(me,ce,ae);break e}ce=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=be.payload,ae=typeof ye=="function"?ye.call(me,ce,ae):ye,ae==null)break e;ce=$({},ce,ae);break e;case 2:Or=!0}}T.callback!==null&&T.lane!==0&&(t.flags|=64,ae=d.effects,ae===null?d.effects=[T]:ae.push(T))}else me={eventTime:me,lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ie===null?(Q=ie=me,D=ce):ie=ie.next=me,w|=ae;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;ae=T,T=ae.next,ae.next=null,d.lastBaseUpdate=ae,d.shared.pending=null}}while(!0);if(ie===null&&(D=ce),d.baseState=D,d.firstBaseUpdate=Q,d.lastBaseUpdate=ie,r=d.shared.interleaved,r!==null){d=r;do w|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);xo|=w,t.lanes=w,t.memoizedState=ce}}function sh(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],d=l.callback;if(d!==null){if(l.callback=null,l=o,typeof d!="function")throw Error(a(191,d));d.call(l)}}}var wa={},or=Dr(wa),ba=Dr(wa),ja=Dr(wa);function go(t){if(t===wa)throw Error(a(174));return t}function ad(t,r){switch(it(ja,r),it(ba,t),it(or,wa),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:et(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=et(r,t)}dt(or),it(or,r)}function fs(){dt(or),dt(ba),dt(ja)}function ah(t){go(ja.current);var r=go(or.current),o=et(r,t.type);r!==o&&(it(ba,t),it(or,o))}function id(t){ba.current===t&&(dt(or),dt(ba))}var yt=Dr(0);function Oi(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ld=[];function cd(){for(var t=0;t<ld.length;t++)ld[t]._workInProgressVersionPrimary=null;ld.length=0}var Bi=_.ReactCurrentDispatcher,dd=_.ReactCurrentBatchConfig,vo=0,wt=null,Lt=null,Pt=null,Hi=!1,ka=!1,_a=0,$v=0;function Gt(){throw Error(a(321))}function ud(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!On(t[o],r[o]))return!1;return!0}function pd(t,r,o,l,d,p){if(vo=p,wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Bi.current=t===null||t.memoizedState===null?Fv:Ov,t=o(l,d),ka){p=0;do{if(ka=!1,_a=0,25<=p)throw Error(a(301));p+=1,Pt=Lt=null,r.updateQueue=null,Bi.current=Bv,t=o(l,d)}while(ka)}if(Bi.current=qi,r=Lt!==null&&Lt.next!==null,vo=0,Pt=Lt=wt=null,Hi=!1,r)throw Error(a(300));return t}function hd(){var t=_a!==0;return _a=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?wt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function In(){if(Lt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var r=Pt===null?wt.memoizedState:Pt.next;if(r!==null)Pt=r,Lt=t;else{if(t===null)throw Error(a(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Pt===null?wt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Ca(t,r){return typeof r=="function"?r(t):r}function fd(t){var r=In(),o=r.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=t;var l=Lt,d=l.baseQueue,p=o.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}l.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,l=l.baseState;var T=w=null,D=null,Q=p;do{var ie=Q.lane;if((vo&ie)===ie)D!==null&&(D=D.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var ce={lane:ie,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};D===null?(T=D=ce,w=l):D=D.next=ce,wt.lanes|=ie,xo|=ie}Q=Q.next}while(Q!==null&&Q!==p);D===null?w=l:D.next=T,On(l,r.memoizedState)||(an=!0),r.memoizedState=l,r.baseState=w,r.baseQueue=D,o.lastRenderedState=l}if(t=o.interleaved,t!==null){d=t;do p=d.lane,wt.lanes|=p,xo|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function md(t){var r=In(),o=r.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,p=r.memoizedState;if(d!==null){o.pending=null;var w=d=d.next;do p=t(p,w.action),w=w.next;while(w!==d);On(p,r.memoizedState)||(an=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,l]}function ih(){}function lh(t,r){var o=wt,l=In(),d=r(),p=!On(l.memoizedState,d);if(p&&(l.memoizedState=d,an=!0),l=l.queue,gd(uh.bind(null,o,l,t),[t]),l.getSnapshot!==r||p||Pt!==null&&Pt.memoizedState.tag&1){if(o.flags|=2048,Sa(9,dh.bind(null,o,l,d,r),void 0,null),Dt===null)throw Error(a(349));(vo&30)!==0||ch(o,r,d)}return d}function ch(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=wt.updateQueue,r===null?(r={lastEffect:null,stores:null},wt.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function dh(t,r,o,l){r.value=o,r.getSnapshot=l,ph(r)&&hh(t)}function uh(t,r,o){return o(function(){ph(r)&&hh(t)})}function ph(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!On(t,o)}catch{return!0}}function hh(t){var r=yr(t,1);r!==null&&qn(r,t,1,-1)}function fh(t){var r=sr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},r.queue=t,t=t.dispatch=zv.bind(null,wt,t),[r.memoizedState,t]}function Sa(t,r,o,l){return t={tag:t,create:r,destroy:o,deps:l,next:null},r=wt.updateQueue,r===null?(r={lastEffect:null,stores:null},wt.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,r.lastEffect=t)),t}function mh(){return In().memoizedState}function Ui(t,r,o,l){var d=sr();wt.flags|=t,d.memoizedState=Sa(1|r,o,void 0,l===void 0?null:l)}function Wi(t,r,o,l){var d=In();l=l===void 0?null:l;var p=void 0;if(Lt!==null){var w=Lt.memoizedState;if(p=w.destroy,l!==null&&ud(l,w.deps)){d.memoizedState=Sa(r,o,p,l);return}}wt.flags|=t,d.memoizedState=Sa(1|r,o,p,l)}function gh(t,r){return Ui(8390656,8,t,r)}function gd(t,r){return Wi(2048,8,t,r)}function vh(t,r){return Wi(4,2,t,r)}function xh(t,r){return Wi(4,4,t,r)}function yh(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function wh(t,r,o){return o=o!=null?o.concat([t]):null,Wi(4,4,yh.bind(null,r,t),o)}function vd(){}function bh(t,r){var o=In();r=r===void 0?null:r;var l=o.memoizedState;return l!==null&&r!==null&&ud(r,l[1])?l[0]:(o.memoizedState=[t,r],t)}function jh(t,r){var o=In();r=r===void 0?null:r;var l=o.memoizedState;return l!==null&&r!==null&&ud(r,l[1])?l[0]:(t=t(),o.memoizedState=[t,r],t)}function kh(t,r,o){return(vo&21)===0?(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=o):(On(o,r)||(o=Jp(),wt.lanes|=o,xo|=o,t.baseState=!0),r)}function Pv(t,r){var o=Qe;Qe=o!==0&&4>o?o:4,t(!0);var l=dd.transition;dd.transition={};try{t(!1),r()}finally{Qe=o,dd.transition=l}}function _h(){return In().memoizedState}function Dv(t,r,o){var l=qr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Ch(t))Sh(r,o);else if(o=nh(t,r,o,l),o!==null){var d=en();qn(o,t,l,d),Mh(o,r,l)}}function zv(t,r,o){var l=qr(t),d={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ch(t))Sh(r,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var w=r.lastRenderedState,T=p(w,o);if(d.hasEagerState=!0,d.eagerState=T,On(T,w)){var D=r.interleaved;D===null?(d.next=d,od(r)):(d.next=D.next,D.next=d),r.interleaved=d;return}}catch{}finally{}o=nh(t,r,d,l),o!==null&&(d=en(),qn(o,t,l,d),Mh(o,r,l))}}function Ch(t){var r=t.alternate;return t===wt||r!==null&&r===wt}function Sh(t,r){ka=Hi=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Mh(t,r,o){if((o&4194240)!==0){var l=r.lanes;l&=t.pendingLanes,o|=l,r.lanes=o,yc(t,o)}}var qi={readContext:Mn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Fv={readContext:Mn,useCallback:function(t,r){return sr().memoizedState=[t,r===void 0?null:r],t},useContext:Mn,useEffect:gh,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Ui(4194308,4,yh.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Ui(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ui(4,2,t,r)},useMemo:function(t,r){var o=sr();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var l=sr();return r=o!==void 0?o(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=Dv.bind(null,wt,t),[l.memoizedState,t]},useRef:function(t){var r=sr();return t={current:t},r.memoizedState=t},useState:fh,useDebugValue:vd,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=fh(!1),r=t[0];return t=Pv.bind(null,t[1]),sr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var l=wt,d=sr();if(gt){if(o===void 0)throw Error(a(407));o=o()}else{if(o=r(),Dt===null)throw Error(a(349));(vo&30)!==0||ch(l,r,o)}d.memoizedState=o;var p={value:o,getSnapshot:r};return d.queue=p,gh(uh.bind(null,l,p,t),[t]),l.flags|=2048,Sa(9,dh.bind(null,l,p,o,r),void 0,null),o},useId:function(){var t=sr(),r=Dt.identifierPrefix;if(gt){var o=xr,l=vr;o=(l&~(1<<32-Fn(l)-1)).toString(32)+o,r=":"+r+"R"+o,o=_a++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=$v++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Ov={readContext:Mn,useCallback:bh,useContext:Mn,useEffect:gd,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:xh,useMemo:jh,useReducer:fd,useRef:mh,useState:function(){return fd(Ca)},useDebugValue:vd,useDeferredValue:function(t){var r=In();return kh(r,Lt.memoizedState,t)},useTransition:function(){var t=fd(Ca)[0],r=In().memoizedState;return[t,r]},useMutableSource:ih,useSyncExternalStore:lh,useId:_h,unstable_isNewReconciler:!1},Bv={readContext:Mn,useCallback:bh,useContext:Mn,useEffect:gd,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:xh,useMemo:jh,useReducer:md,useRef:mh,useState:function(){return md(Ca)},useDebugValue:vd,useDeferredValue:function(t){var r=In();return Lt===null?r.memoizedState=t:kh(r,Lt.memoizedState,t)},useTransition:function(){var t=md(Ca)[0],r=In().memoizedState;return[t,r]},useMutableSource:ih,useSyncExternalStore:lh,useId:_h,unstable_isNewReconciler:!1};function Hn(t,r){if(t&&t.defaultProps){r=$({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function xd(t,r,o,l){r=t.memoizedState,o=o(l,r),o=o==null?r:$({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Vi={isMounted:function(t){return(t=t._reactInternals)?co(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var l=en(),d=qr(t),p=wr(l,d);p.payload=r,o!=null&&(p.callback=o),r=Br(t,p,d),r!==null&&(qn(r,t,d,l),zi(r,t,d))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var l=en(),d=qr(t),p=wr(l,d);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=Br(t,p,d),r!==null&&(qn(r,t,d,l),zi(r,t,d))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=en(),l=qr(t),d=wr(o,l);d.tag=2,r!=null&&(d.callback=r),r=Br(t,d,l),r!==null&&(qn(r,t,l,o),zi(r,t,l))}};function Ih(t,r,o,l,d,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):r.prototype&&r.prototype.isPureReactComponent?!pa(o,l)||!pa(d,p):!0}function Nh(t,r,o){var l=!1,d=zr,p=r.contextType;return typeof p=="object"&&p!==null?p=Mn(p):(d=sn(r)?po:Vt.current,l=r.contextTypes,p=(l=l!=null)?is(t,d):zr),r=new r(o,p),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Vi,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),r}function Ah(t,r,o,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,l),r.state!==t&&Vi.enqueueReplaceState(r,r.state,null)}function yd(t,r,o,l){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},sd(t);var p=r.contextType;typeof p=="object"&&p!==null?d.context=Mn(p):(p=sn(r)?po:Vt.current,d.context=is(t,p)),d.state=t.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(xd(t,r,p,o),d.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Vi.enqueueReplaceState(d,d.state,null),Fi(t,o,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,r){try{var o="",l=r;do o+=fe(l),l=l.return;while(l);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:r,stack:d,digest:null}}function wd(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function bd(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Hv=typeof WeakMap=="function"?WeakMap:Map;function Th(t,r,o){o=wr(-1,o),o.tag=3,o.payload={element:null};var l=r.value;return o.callback=function(){Ji||(Ji=!0,Pd=l),bd(t,r)},o}function Lh(t,r,o){o=wr(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=r.value;o.payload=function(){return l(d)},o.callback=function(){bd(t,r)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){bd(t,r),typeof l!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),o}function Eh(t,r,o){var l=t.pingCache;if(l===null){l=t.pingCache=new Hv;var d=new Set;l.set(r,d)}else d=l.get(r),d===void 0&&(d=new Set,l.set(r,d));d.has(o)||(d.add(o),t=nx.bind(null,t,r,o),r.then(t,t))}function Rh(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function $h(t,r,o,l,d){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=wr(-1,1),r.tag=2,Br(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Uv=_.ReactCurrentOwner,an=!1;function Jt(t,r,o,l){r.child=t===null?th(r,null,o,l):us(r,t.child,o,l)}function Ph(t,r,o,l,d){o=o.render;var p=r.ref;return hs(r,d),l=pd(t,r,o,l,p,d),o=hd(),t!==null&&!an?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,br(t,r,d)):(gt&&o&&Yc(r),r.flags|=1,Jt(t,r,l,d),r.child)}function Dh(t,r,o,l,d){if(t===null){var p=o.type;return typeof p=="function"&&!Ud(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,zh(t,r,p,l,d)):(t=sl(o.type,null,l,r,r.mode,d),t.ref=r.ref,t.return=r,r.child=t)}if(p=t.child,(t.lanes&d)===0){var w=p.memoizedProps;if(o=o.compare,o=o!==null?o:pa,o(w,l)&&t.ref===r.ref)return br(t,r,d)}return r.flags|=1,t=Gr(p,l),t.ref=r.ref,t.return=r,r.child=t}function zh(t,r,o,l,d){if(t!==null){var p=t.memoizedProps;if(pa(p,l)&&t.ref===r.ref)if(an=!1,r.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(an=!0);else return r.lanes=t.lanes,br(t,r,d)}return jd(t,r,o,l,d)}function Fh(t,r,o){var l=r.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(vs,wn),wn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,it(vs,wn),wn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,it(vs,wn),wn|=l}else p!==null?(l=p.baseLanes|o,r.memoizedState=null):l=o,it(vs,wn),wn|=l;return Jt(t,r,d,o),r.child}function Oh(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function jd(t,r,o,l,d){var p=sn(o)?po:Vt.current;return p=is(r,p),hs(r,d),o=pd(t,r,o,l,p,d),l=hd(),t!==null&&!an?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,br(t,r,d)):(gt&&l&&Yc(r),r.flags|=1,Jt(t,r,o,d),r.child)}function Bh(t,r,o,l,d){if(sn(o)){var p=!0;Ai(r)}else p=!1;if(hs(r,d),r.stateNode===null)Zi(t,r),Nh(r,o,l),yd(r,o,l,d),l=!0;else if(t===null){var w=r.stateNode,T=r.memoizedProps;w.props=T;var D=w.context,Q=o.contextType;typeof Q=="object"&&Q!==null?Q=Mn(Q):(Q=sn(o)?po:Vt.current,Q=is(r,Q));var ie=o.getDerivedStateFromProps,ce=typeof ie=="function"||typeof w.getSnapshotBeforeUpdate=="function";ce||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(T!==l||D!==Q)&&Ah(r,w,l,Q),Or=!1;var ae=r.memoizedState;w.state=ae,Fi(r,l,w,d),D=r.memoizedState,T!==l||ae!==D||on.current||Or?(typeof ie=="function"&&(xd(r,o,ie,l),D=r.memoizedState),(T=Or||Ih(r,o,T,l,ae,D,Q))?(ce||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=D),w.props=l,w.state=D,w.context=Q,l=T):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{w=r.stateNode,rh(t,r),T=r.memoizedProps,Q=r.type===r.elementType?T:Hn(r.type,T),w.props=Q,ce=r.pendingProps,ae=w.context,D=o.contextType,typeof D=="object"&&D!==null?D=Mn(D):(D=sn(o)?po:Vt.current,D=is(r,D));var me=o.getDerivedStateFromProps;(ie=typeof me=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(T!==ce||ae!==D)&&Ah(r,w,l,D),Or=!1,ae=r.memoizedState,w.state=ae,Fi(r,l,w,d);var ye=r.memoizedState;T!==ce||ae!==ye||on.current||Or?(typeof me=="function"&&(xd(r,o,me,l),ye=r.memoizedState),(Q=Or||Ih(r,o,Q,l,ae,ye,D)||!1)?(ie||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,ye,D),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,ye,D)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||T===t.memoizedProps&&ae===t.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||T===t.memoizedProps&&ae===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=ye),w.props=l,w.state=ye,w.context=D,l=Q):(typeof w.componentDidUpdate!="function"||T===t.memoizedProps&&ae===t.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||T===t.memoizedProps&&ae===t.memoizedState||(r.flags|=1024),l=!1)}return kd(t,r,o,l,p,d)}function kd(t,r,o,l,d,p){Oh(t,r);var w=(r.flags&128)!==0;if(!l&&!w)return d&&V1(r,o,!1),br(t,r,p);l=r.stateNode,Uv.current=r;var T=w&&typeof o.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&w?(r.child=us(r,t.child,null,p),r.child=us(r,null,T,p)):Jt(t,r,T,p),r.memoizedState=l.state,d&&V1(r,o,!0),r.child}function Hh(t){var r=t.stateNode;r.pendingContext?W1(t,r.pendingContext,r.pendingContext!==r.context):r.context&&W1(t,r.context,!1),ad(t,r.containerInfo)}function Uh(t,r,o,l,d){return ds(),Jc(d),r.flags|=256,Jt(t,r,o,l),r.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function Cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wh(t,r,o){var l=r.pendingProps,d=yt.current,p=!1,w=(r.flags&128)!==0,T;if((T=w)||(T=t!==null&&t.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),it(yt,d&1),t===null)return Xc(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=l.children,t=l.fallback,p?(l=r.mode,p=r.child,w={mode:"hidden",children:w},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=al(w,l,0,null),t=jo(t,l,o,null),p.return=r,t.return=r,p.sibling=t,r.child=p,r.child.memoizedState=Cd(o),r.memoizedState=_d,t):Sd(r,w));if(d=t.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Wv(t,r,w,l,T,d,o);if(p){p=l.fallback,w=r.mode,d=t.child,T=d.sibling;var D={mode:"hidden",children:l.children};return(w&1)===0&&r.child!==d?(l=r.child,l.childLanes=0,l.pendingProps=D,r.deletions=null):(l=Gr(d,D),l.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Gr(T,p):(p=jo(p,w,o,null),p.flags|=2),p.return=r,l.return=r,l.sibling=p,r.child=l,l=p,p=r.child,w=t.child.memoizedState,w=w===null?Cd(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~o,r.memoizedState=_d,l}return p=t.child,t=p.sibling,l=Gr(p,{mode:"visible",children:l.children}),(r.mode&1)===0&&(l.lanes=o),l.return=r,l.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=l,r.memoizedState=null,l}function Sd(t,r){return r=al({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Gi(t,r,o,l){return l!==null&&Jc(l),us(r,t.child,null,o),t=Sd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Wv(t,r,o,l,d,p,w){if(o)return r.flags&256?(r.flags&=-257,l=wd(Error(a(422))),Gi(t,r,w,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(p=l.fallback,d=r.mode,l=al({mode:"visible",children:l.children},d,0,null),p=jo(p,d,w,null),p.flags|=2,l.return=r,p.return=r,l.sibling=p,r.child=l,(r.mode&1)!==0&&us(r,t.child,null,w),r.child.memoizedState=Cd(w),r.memoizedState=_d,p);if((r.mode&1)===0)return Gi(t,r,w,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var T=l.dgst;return l=T,p=Error(a(419)),l=wd(p,l,void 0),Gi(t,r,w,l)}if(T=(w&t.childLanes)!==0,an||T){if(l=Dt,l!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,yr(t,d),qn(l,t,d,-1))}return Hd(),l=wd(Error(a(421))),Gi(t,r,w,l)}return d.data==="$?"?(r.flags|=128,r.child=t.child,r=rx.bind(null,t),d._reactRetry=r,null):(t=p.treeContext,yn=Pr(d.nextSibling),xn=r,gt=!0,Bn=null,t!==null&&(Cn[Sn++]=vr,Cn[Sn++]=xr,Cn[Sn++]=ho,vr=t.id,xr=t.overflow,ho=r),r=Sd(r,l.children),r.flags|=4096,r)}function qh(t,r,o){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),rd(t.return,r,o)}function Md(t,r,o,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=d)}function Vh(t,r,o){var l=r.pendingProps,d=l.revealOrder,p=l.tail;if(Jt(t,r,l.children,o),l=yt.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,o,r);else if(t.tag===19)qh(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(it(yt,l),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(o=r.child,d=null;o!==null;)t=o.alternate,t!==null&&Oi(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),Md(r,!1,d,o,p);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(t=d.alternate,t!==null&&Oi(t)===null){r.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Md(r,!0,o,null,p);break;case"together":Md(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Zi(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function br(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),xo|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(a(153));if(r.child!==null){for(t=r.child,o=Gr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Gr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function qv(t,r,o){switch(r.tag){case 3:Hh(r),ds();break;case 5:ah(r);break;case 1:sn(r.type)&&Ai(r);break;case 4:ad(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,d=r.memoizedProps.value;it(Pi,l._currentValue),l._currentValue=d;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(it(yt,yt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Wh(t,r,o):(it(yt,yt.current&1),t=br(t,r,o),t!==null?t.sibling:null);it(yt,yt.current&1);break;case 19:if(l=(o&r.childLanes)!==0,(t.flags&128)!==0){if(l)return Vh(t,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),it(yt,yt.current),l)break;return null;case 22:case 23:return r.lanes=0,Fh(t,r,o)}return br(t,r,o)}var Gh,Id,Zh,Yh;Gh=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Id=function(){},Zh=function(t,r,o,l){var d=t.memoizedProps;if(d!==l){t=r.stateNode,go(or.current);var p=null;switch(o){case"input":d=Le(t,d),l=Le(t,l),p=[];break;case"select":d=$({},d,{value:void 0}),l=$({},l,{value:void 0}),p=[];break;case"textarea":d=Re(t,d),l=Re(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Mi)}xt(o,l);var w;o=null;for(Q in d)if(!l.hasOwnProperty(Q)&&d.hasOwnProperty(Q)&&d[Q]!=null)if(Q==="style"){var T=d[Q];for(w in T)T.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(c.hasOwnProperty(Q)?p||(p=[]):(p=p||[]).push(Q,null));for(Q in l){var D=l[Q];if(T=d!=null?d[Q]:void 0,l.hasOwnProperty(Q)&&D!==T&&(D!=null||T!=null))if(Q==="style")if(T){for(w in T)!T.hasOwnProperty(w)||D&&D.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in D)D.hasOwnProperty(w)&&T[w]!==D[w]&&(o||(o={}),o[w]=D[w])}else o||(p||(p=[]),p.push(Q,o)),o=D;else Q==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,T=T?T.__html:void 0,D!=null&&T!==D&&(p=p||[]).push(Q,D)):Q==="children"?typeof D!="string"&&typeof D!="number"||(p=p||[]).push(Q,""+D):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(c.hasOwnProperty(Q)?(D!=null&&Q==="onScroll"&&ct("scroll",t),p||T===D||(p=[])):(p=p||[]).push(Q,D))}o&&(p=p||[]).push("style",o);var Q=p;(r.updateQueue=Q)&&(r.flags|=4)}},Yh=function(t,r,o,l){o!==l&&(r.flags|=4)};function Ma(t,r){if(!gt)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Zt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(r)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,r}function Vv(t,r,o){var l=r.pendingProps;switch(Kc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(r),null;case 1:return sn(r.type)&&Ni(),Zt(r),null;case 3:return l=r.stateNode,fs(),dt(on),dt(Vt),cd(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ri(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Bn!==null&&(Fd(Bn),Bn=null))),Id(t,r),Zt(r),null;case 5:id(r);var d=go(ja.current);if(o=r.type,t!==null&&r.stateNode!=null)Zh(t,r,o,l,d),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(a(166));return Zt(r),null}if(t=go(or.current),Ri(r)){l=r.stateNode,o=r.type;var p=r.memoizedProps;switch(l[rr]=r,l[va]=p,t=(r.mode&1)!==0,o){case"dialog":ct("cancel",l),ct("close",l);break;case"iframe":case"object":case"embed":ct("load",l);break;case"video":case"audio":for(d=0;d<fa.length;d++)ct(fa[d],l);break;case"source":ct("error",l);break;case"img":case"image":case"link":ct("error",l),ct("load",l);break;case"details":ct("toggle",l);break;case"input":Ge(l,p),ct("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},ct("invalid",l);break;case"textarea":je(l,p),ct("invalid",l)}xt(o,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var T=p[w];w==="children"?typeof T=="string"?l.textContent!==T&&(p.suppressHydrationWarning!==!0&&Si(l.textContent,T,t),d=["children",T]):typeof T=="number"&&l.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Si(l.textContent,T,t),d=["children",""+T]):c.hasOwnProperty(w)&&T!=null&&w==="onScroll"&&ct("scroll",l)}switch(o){case"input":oe(l),mt(l,p,!0);break;case"textarea":oe(l),Ce(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=Mi)}l=d,r.updateQueue=l,l!==null&&(r.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Je(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(o,{is:l.is}):(t=w.createElement(o),o==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,o),t[rr]=r,t[va]=l,Gh(t,r,!1,!1),r.stateNode=t;e:{switch(w=$t(o,l),o){case"dialog":ct("cancel",t),ct("close",t),d=l;break;case"iframe":case"object":case"embed":ct("load",t),d=l;break;case"video":case"audio":for(d=0;d<fa.length;d++)ct(fa[d],t);d=l;break;case"source":ct("error",t),d=l;break;case"img":case"image":case"link":ct("error",t),ct("load",t),d=l;break;case"details":ct("toggle",t),d=l;break;case"input":Ge(t,l),d=Le(t,l),ct("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=$({},l,{value:void 0}),ct("invalid",t);break;case"textarea":je(t,l),d=Re(t,l),ct("invalid",t);break;default:d=l}xt(o,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var D=T[p];p==="style"?Te(t,D):p==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&Bt(t,D)):p==="children"?typeof D=="string"?(o!=="textarea"||D!=="")&&fr(t,D):typeof D=="number"&&fr(t,""+D):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(c.hasOwnProperty(p)?D!=null&&p==="onScroll"&&ct("scroll",t):D!=null&&j(t,p,D,w))}switch(o){case"input":oe(t),mt(t,l,!1);break;case"textarea":oe(t),Ce(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?de(t,!!l.multiple,p,!1):l.defaultValue!=null&&de(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Mi)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Zt(r),null;case 6:if(t&&r.stateNode!=null)Yh(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(o=go(ja.current),go(or.current),Ri(r)){if(l=r.stateNode,o=r.memoizedProps,l[rr]=r,(p=l.nodeValue!==o)&&(t=xn,t!==null))switch(t.tag){case 3:Si(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Si(l.nodeValue,o,(t.mode&1)!==0)}p&&(r.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[rr]=r,r.stateNode=l}return Zt(r),null;case 13:if(dt(yt),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&yn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)X1(),ds(),r.flags|=98560,p=!1;else if(p=Ri(r),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(a(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[rr]=r}else ds(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Zt(r),p=!1}else Bn!==null&&(Fd(Bn),Bn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(yt.current&1)!==0?Et===0&&(Et=3):Hd())),r.updateQueue!==null&&(r.flags|=4),Zt(r),null);case 4:return fs(),Id(t,r),t===null&&ma(r.stateNode.containerInfo),Zt(r),null;case 10:return nd(r.type._context),Zt(r),null;case 17:return sn(r.type)&&Ni(),Zt(r),null;case 19:if(dt(yt),p=r.memoizedState,p===null)return Zt(r),null;if(l=(r.flags&128)!==0,w=p.rendering,w===null)if(l)Ma(p,!1);else{if(Et!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(w=Oi(t),w!==null){for(r.flags|=128,Ma(p,!1),l=w.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=o,o=r.child;o!==null;)p=o,t=l,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return it(yt,yt.current&1|2),r.child}t=t.sibling}p.tail!==null&&St()>xs&&(r.flags|=128,l=!0,Ma(p,!1),r.lanes=4194304)}else{if(!l)if(t=Oi(w),t!==null){if(r.flags|=128,l=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Ma(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!gt)return Zt(r),null}else 2*St()-p.renderingStartTime>xs&&o!==1073741824&&(r.flags|=128,l=!0,Ma(p,!1),r.lanes=4194304);p.isBackwards?(w.sibling=r.child,r.child=w):(o=p.last,o!==null?o.sibling=w:r.child=w,p.last=w)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=St(),r.sibling=null,o=yt.current,it(yt,l?o&1|2:o&1),r):(Zt(r),null);case 22:case 23:return Bd(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&(r.mode&1)!==0?(wn&1073741824)!==0&&(Zt(r),r.subtreeFlags&6&&(r.flags|=8192)):Zt(r),null;case 24:return null;case 25:return null}throw Error(a(156,r.tag))}function Gv(t,r){switch(Kc(r),r.tag){case 1:return sn(r.type)&&Ni(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return fs(),dt(on),dt(Vt),cd(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return id(r),null;case 13:if(dt(yt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(a(340));ds()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return dt(yt),null;case 4:return fs(),null;case 10:return nd(r.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var Yi=!1,Yt=!1,Zv=typeof WeakSet=="function"?WeakSet:Set,ve=null;function gs(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ct(t,r,l)}else o.current=null}function Nd(t,r,o){try{o()}catch(l){Ct(t,r,l)}}var Kh=!1;function Yv(t,r){if(Bc=mi,t=I1(),Ec(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var w=0,T=-1,D=-1,Q=0,ie=0,ce=t,ae=null;t:for(;;){for(var me;ce!==o||d!==0&&ce.nodeType!==3||(T=w+d),ce!==p||l!==0&&ce.nodeType!==3||(D=w+l),ce.nodeType===3&&(w+=ce.nodeValue.length),(me=ce.firstChild)!==null;)ae=ce,ce=me;for(;;){if(ce===t)break t;if(ae===o&&++Q===d&&(T=w),ae===p&&++ie===l&&(D=w),(me=ce.nextSibling)!==null)break;ce=ae,ae=ce.parentNode}ce=me}o=T===-1||D===-1?null:{start:T,end:D}}else o=null}o=o||{start:0,end:0}}else o=null;for(Hc={focusedElem:t,selectionRange:o},mi=!1,ve=r;ve!==null;)if(r=ve,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ve=t;else for(;ve!==null;){r=ve;try{var ye=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ye!==null){var be=ye.memoizedProps,Mt=ye.memoizedState,W=r.stateNode,O=W.getSnapshotBeforeUpdate(r.elementType===r.type?be:Hn(r.type,be),Mt);W.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var G=r.stateNode.containerInfo;G.nodeType===1?G.textContent="":G.nodeType===9&&G.documentElement&&G.removeChild(G.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(ue){Ct(r,r.return,ue)}if(t=r.sibling,t!==null){t.return=r.return,ve=t;break}ve=r.return}return ye=Kh,Kh=!1,ye}function Ia(t,r,o){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&Nd(r,o,p)}d=d.next}while(d!==l)}}function Ki(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==r)}}function Ad(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Qh(t){var r=t.alternate;r!==null&&(t.alternate=null,Qh(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[rr],delete r[va],delete r[Vc],delete r[Tv],delete r[Lv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xh(t){return t.tag===5||t.tag===3||t.tag===4}function Jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,r,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Mi));else if(l!==4&&(t=t.child,t!==null))for(Td(t,r,o),t=t.sibling;t!==null;)Td(t,r,o),t=t.sibling}function Ld(t,r,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ld(t,r,o),t=t.sibling;t!==null;)Ld(t,r,o),t=t.sibling}var Ht=null,Un=!1;function Hr(t,r,o){for(o=o.child;o!==null;)ef(t,r,o),o=o.sibling}function ef(t,r,o){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(ci,o)}catch{}switch(o.tag){case 5:Yt||gs(o,r);case 6:var l=Ht,d=Un;Ht=null,Hr(t,r,o),Ht=l,Un=d,Ht!==null&&(Un?(t=Ht,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ht.removeChild(o.stateNode));break;case 18:Ht!==null&&(Un?(t=Ht,o=o.stateNode,t.nodeType===8?qc(t.parentNode,o):t.nodeType===1&&qc(t,o),aa(t)):qc(Ht,o.stateNode));break;case 4:l=Ht,d=Un,Ht=o.stateNode.containerInfo,Un=!0,Hr(t,r,o),Ht=l,Un=d;break;case 0:case 11:case 14:case 15:if(!Yt&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&Nd(o,r,w),d=d.next}while(d!==l)}Hr(t,r,o);break;case 1:if(!Yt&&(gs(o,r),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(T){Ct(o,r,T)}Hr(t,r,o);break;case 21:Hr(t,r,o);break;case 22:o.mode&1?(Yt=(l=Yt)||o.memoizedState!==null,Hr(t,r,o),Yt=l):Hr(t,r,o);break;default:Hr(t,r,o)}}function tf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Zv),r.forEach(function(l){var d=ox.bind(null,t,l);o.has(l)||(o.add(l),l.then(d,d))})}}function Wn(t,r){var o=r.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l];try{var p=t,w=r,T=w;e:for(;T!==null;){switch(T.tag){case 5:Ht=T.stateNode,Un=!1;break e;case 3:Ht=T.stateNode.containerInfo,Un=!0;break e;case 4:Ht=T.stateNode.containerInfo,Un=!0;break e}T=T.return}if(Ht===null)throw Error(a(160));ef(p,w,d),Ht=null,Un=!1;var D=d.alternate;D!==null&&(D.return=null),d.return=null}catch(Q){Ct(d,r,Q)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)nf(r,t),r=r.sibling}function nf(t,r){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(r,t),ar(t),l&4){try{Ia(3,t,t.return),Ki(3,t)}catch(be){Ct(t,t.return,be)}try{Ia(5,t,t.return)}catch(be){Ct(t,t.return,be)}}break;case 1:Wn(r,t),ar(t),l&512&&o!==null&&gs(o,o.return);break;case 5:if(Wn(r,t),ar(t),l&512&&o!==null&&gs(o,o.return),t.flags&32){var d=t.stateNode;try{fr(d,"")}catch(be){Ct(t,t.return,be)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,w=o!==null?o.memoizedProps:p,T=t.type,D=t.updateQueue;if(t.updateQueue=null,D!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&ht(d,p),$t(T,w);var Q=$t(T,p);for(w=0;w<D.length;w+=2){var ie=D[w],ce=D[w+1];ie==="style"?Te(d,ce):ie==="dangerouslySetInnerHTML"?Bt(d,ce):ie==="children"?fr(d,ce):j(d,ie,ce,Q)}switch(T){case"input":ft(d,p);break;case"textarea":_e(d,p);break;case"select":var ae=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var me=p.value;me!=null?de(d,!!p.multiple,me,!1):ae!==!!p.multiple&&(p.defaultValue!=null?de(d,!!p.multiple,p.defaultValue,!0):de(d,!!p.multiple,p.multiple?[]:"",!1))}d[va]=p}catch(be){Ct(t,t.return,be)}}break;case 6:if(Wn(r,t),ar(t),l&4){if(t.stateNode===null)throw Error(a(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(be){Ct(t,t.return,be)}}break;case 3:if(Wn(r,t),ar(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{aa(r.containerInfo)}catch(be){Ct(t,t.return,be)}break;case 4:Wn(r,t),ar(t);break;case 13:Wn(r,t),ar(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||($d=St())),l&4&&tf(t);break;case 22:if(ie=o!==null&&o.memoizedState!==null,t.mode&1?(Yt=(Q=Yt)||ie,Wn(r,t),Yt=Q):Wn(r,t),ar(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!ie&&(t.mode&1)!==0)for(ve=t,ie=t.child;ie!==null;){for(ce=ve=ie;ve!==null;){switch(ae=ve,me=ae.child,ae.tag){case 0:case 11:case 14:case 15:Ia(4,ae,ae.return);break;case 1:gs(ae,ae.return);var ye=ae.stateNode;if(typeof ye.componentWillUnmount=="function"){l=ae,o=ae.return;try{r=l,ye.props=r.memoizedProps,ye.state=r.memoizedState,ye.componentWillUnmount()}catch(be){Ct(l,o,be)}}break;case 5:gs(ae,ae.return);break;case 22:if(ae.memoizedState!==null){sf(ce);continue}}me!==null?(me.return=ae,ve=me):sf(ce)}ie=ie.sibling}e:for(ie=null,ce=t;;){if(ce.tag===5){if(ie===null){ie=ce;try{d=ce.stateNode,Q?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=ce.stateNode,D=ce.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null,T.style.display=Yo("display",w))}catch(be){Ct(t,t.return,be)}}}else if(ce.tag===6){if(ie===null)try{ce.stateNode.nodeValue=Q?"":ce.memoizedProps}catch(be){Ct(t,t.return,be)}}else if((ce.tag!==22&&ce.tag!==23||ce.memoizedState===null||ce===t)&&ce.child!==null){ce.child.return=ce,ce=ce.child;continue}if(ce===t)break e;for(;ce.sibling===null;){if(ce.return===null||ce.return===t)break e;ie===ce&&(ie=null),ce=ce.return}ie===ce&&(ie=null),ce.sibling.return=ce.return,ce=ce.sibling}}break;case 19:Wn(r,t),ar(t),l&4&&tf(t);break;case 21:break;default:Wn(r,t),ar(t)}}function ar(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(Xh(o)){var l=o;break e}o=o.return}throw Error(a(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(fr(d,""),l.flags&=-33);var p=Jh(t);Ld(t,p,d);break;case 3:case 4:var w=l.stateNode.containerInfo,T=Jh(t);Td(t,T,w);break;default:throw Error(a(161))}}catch(D){Ct(t,t.return,D)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Kv(t,r,o){ve=t,rf(t)}function rf(t,r,o){for(var l=(t.mode&1)!==0;ve!==null;){var d=ve,p=d.child;if(d.tag===22&&l){var w=d.memoizedState!==null||Yi;if(!w){var T=d.alternate,D=T!==null&&T.memoizedState!==null||Yt;T=Yi;var Q=Yt;if(Yi=w,(Yt=D)&&!Q)for(ve=d;ve!==null;)w=ve,D=w.child,w.tag===22&&w.memoizedState!==null?af(d):D!==null?(D.return=w,ve=D):af(d);for(;p!==null;)ve=p,rf(p),p=p.sibling;ve=d,Yi=T,Yt=Q}of(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ve=p):of(t)}}function of(t){for(;ve!==null;){var r=ve;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Yt||Ki(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!Yt)if(o===null)l.componentDidMount();else{var d=r.elementType===r.type?o.memoizedProps:Hn(r.type,o.memoizedProps);l.componentDidUpdate(d,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&sh(r,p,l);break;case 3:var w=r.updateQueue;if(w!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}sh(r,w,o)}break;case 5:var T=r.stateNode;if(o===null&&r.flags&4){o=T;var D=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&o.focus();break;case"img":D.src&&(o.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var Q=r.alternate;if(Q!==null){var ie=Q.memoizedState;if(ie!==null){var ce=ie.dehydrated;ce!==null&&aa(ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Yt||r.flags&512&&Ad(r)}catch(ae){Ct(r,r.return,ae)}}if(r===t){ve=null;break}if(o=r.sibling,o!==null){o.return=r.return,ve=o;break}ve=r.return}}function sf(t){for(;ve!==null;){var r=ve;if(r===t){ve=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ve=o;break}ve=r.return}}function af(t){for(;ve!==null;){var r=ve;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Ki(4,r)}catch(D){Ct(r,o,D)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var d=r.return;try{l.componentDidMount()}catch(D){Ct(r,d,D)}}var p=r.return;try{Ad(r)}catch(D){Ct(r,p,D)}break;case 5:var w=r.return;try{Ad(r)}catch(D){Ct(r,w,D)}}}catch(D){Ct(r,r.return,D)}if(r===t){ve=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ve=T;break}ve=r.return}}var Qv=Math.ceil,Qi=_.ReactCurrentDispatcher,Ed=_.ReactCurrentOwner,Nn=_.ReactCurrentBatchConfig,qe=0,Dt=null,Nt=null,Ut=0,wn=0,vs=Dr(0),Et=0,Na=null,xo=0,Xi=0,Rd=0,Aa=null,ln=null,$d=0,xs=1/0,jr=null,Ji=!1,Pd=null,Ur=null,el=!1,Wr=null,tl=0,Ta=0,Dd=null,nl=-1,rl=0;function en(){return(qe&6)!==0?St():nl!==-1?nl:nl=St()}function qr(t){return(t.mode&1)===0?1:(qe&2)!==0&&Ut!==0?Ut&-Ut:Rv.transition!==null?(rl===0&&(rl=Jp()),rl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:l1(t.type)),t)}function qn(t,r,o,l){if(50<Ta)throw Ta=0,Dd=null,Error(a(185));ta(t,o,l),((qe&2)===0||t!==Dt)&&(t===Dt&&((qe&2)===0&&(Xi|=o),Et===4&&Vr(t,Ut)),cn(t,l),o===1&&qe===0&&(r.mode&1)===0&&(xs=St()+500,Ti&&Fr()))}function cn(t,r){var o=t.callbackNode;R2(t,r);var l=pi(t,t===Dt?Ut:0);if(l===0)o!==null&&Kp(o),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(o!=null&&Kp(o),r===1)t.tag===0?Ev(cf.bind(null,t)):G1(cf.bind(null,t)),Nv(function(){(qe&6)===0&&Fr()}),o=null;else{switch(e1(l)){case 1:o=gc;break;case 4:o=Qp;break;case 16:o=li;break;case 536870912:o=Xp;break;default:o=li}o=vf(o,lf.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function lf(t,r){if(nl=-1,rl=0,(qe&6)!==0)throw Error(a(327));var o=t.callbackNode;if(ys()&&t.callbackNode!==o)return null;var l=pi(t,t===Dt?Ut:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||r)r=ol(t,l);else{r=l;var d=qe;qe|=2;var p=uf();(Dt!==t||Ut!==r)&&(jr=null,xs=St()+500,wo(t,r));do try{ex();break}catch(T){df(t,T)}while(!0);td(),Qi.current=p,qe=d,Nt!==null?r=0:(Dt=null,Ut=0,r=Et)}if(r!==0){if(r===2&&(d=vc(t),d!==0&&(l=d,r=zd(t,d))),r===1)throw o=Na,wo(t,0),Vr(t,l),cn(t,St()),o;if(r===6)Vr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!Xv(d)&&(r=ol(t,l),r===2&&(p=vc(t),p!==0&&(l=p,r=zd(t,p))),r===1))throw o=Na,wo(t,0),Vr(t,l),cn(t,St()),o;switch(t.finishedWork=d,t.finishedLanes=l,r){case 0:case 1:throw Error(a(345));case 2:bo(t,ln,jr);break;case 3:if(Vr(t,l),(l&130023424)===l&&(r=$d+500-St(),10<r)){if(pi(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){en(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Wc(bo.bind(null,t,ln,jr),r);break}bo(t,ln,jr);break;case 4:if(Vr(t,l),(l&4194240)===l)break;for(r=t.eventTimes,d=-1;0<l;){var w=31-Fn(l);p=1<<w,w=r[w],w>d&&(d=w),l&=~p}if(l=d,l=St()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Qv(l/1960))-l,10<l){t.timeoutHandle=Wc(bo.bind(null,t,ln,jr),l);break}bo(t,ln,jr);break;case 5:bo(t,ln,jr);break;default:throw Error(a(329))}}}return cn(t,St()),t.callbackNode===o?lf.bind(null,t):null}function zd(t,r){var o=Aa;return t.current.memoizedState.isDehydrated&&(wo(t,r).flags|=256),t=ol(t,r),t!==2&&(r=ln,ln=o,r!==null&&Fd(r)),t}function Fd(t){ln===null?ln=t:ln.push.apply(ln,t)}function Xv(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var d=o[l],p=d.getSnapshot;d=d.value;try{if(!On(p(),d))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Vr(t,r){for(r&=~Rd,r&=~Xi,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Fn(r),l=1<<o;t[o]=-1,r&=~l}}function cf(t){if((qe&6)!==0)throw Error(a(327));ys();var r=pi(t,0);if((r&1)===0)return cn(t,St()),null;var o=ol(t,r);if(t.tag!==0&&o===2){var l=vc(t);l!==0&&(r=l,o=zd(t,l))}if(o===1)throw o=Na,wo(t,0),Vr(t,r),cn(t,St()),o;if(o===6)throw Error(a(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,bo(t,ln,jr),cn(t,St()),null}function Od(t,r){var o=qe;qe|=1;try{return t(r)}finally{qe=o,qe===0&&(xs=St()+500,Ti&&Fr())}}function yo(t){Wr!==null&&Wr.tag===0&&(qe&6)===0&&ys();var r=qe;qe|=1;var o=Nn.transition,l=Qe;try{if(Nn.transition=null,Qe=1,t)return t()}finally{Qe=l,Nn.transition=o,qe=r,(qe&6)===0&&Fr()}}function Bd(){wn=vs.current,dt(vs)}function wo(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Iv(o)),Nt!==null)for(o=Nt.return;o!==null;){var l=o;switch(Kc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ni();break;case 3:fs(),dt(on),dt(Vt),cd();break;case 5:id(l);break;case 4:fs();break;case 13:dt(yt);break;case 19:dt(yt);break;case 10:nd(l.type._context);break;case 22:case 23:Bd()}o=o.return}if(Dt=t,Nt=t=Gr(t.current,null),Ut=wn=r,Et=0,Na=null,Rd=Xi=xo=0,ln=Aa=null,mo!==null){for(r=0;r<mo.length;r++)if(o=mo[r],l=o.interleaved,l!==null){o.interleaved=null;var d=l.next,p=o.pending;if(p!==null){var w=p.next;p.next=d,l.next=w}o.pending=l}mo=null}return t}function df(t,r){do{var o=Nt;try{if(td(),Bi.current=qi,Hi){for(var l=wt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Hi=!1}if(vo=0,Pt=Lt=wt=null,ka=!1,_a=0,Ed.current=null,o===null||o.return===null){Et=1,Na=r,Nt=null;break}e:{var p=t,w=o.return,T=o,D=r;if(r=Ut,T.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var Q=D,ie=T,ce=ie.tag;if((ie.mode&1)===0&&(ce===0||ce===11||ce===15)){var ae=ie.alternate;ae?(ie.updateQueue=ae.updateQueue,ie.memoizedState=ae.memoizedState,ie.lanes=ae.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var me=Rh(w);if(me!==null){me.flags&=-257,$h(me,w,T,p,r),me.mode&1&&Eh(p,Q,r),r=me,D=Q;var ye=r.updateQueue;if(ye===null){var be=new Set;be.add(D),r.updateQueue=be}else ye.add(D);break e}else{if((r&1)===0){Eh(p,Q,r),Hd();break e}D=Error(a(426))}}else if(gt&&T.mode&1){var Mt=Rh(w);if(Mt!==null){(Mt.flags&65536)===0&&(Mt.flags|=256),$h(Mt,w,T,p,r),Jc(ms(D,T));break e}}p=D=ms(D,T),Et!==4&&(Et=2),Aa===null?Aa=[p]:Aa.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var W=Th(p,D,r);oh(p,W);break e;case 1:T=D;var O=p.type,G=p.stateNode;if((p.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||G!==null&&typeof G.componentDidCatch=="function"&&(Ur===null||!Ur.has(G)))){p.flags|=65536,r&=-r,p.lanes|=r;var ue=Lh(p,T,r);oh(p,ue);break e}}p=p.return}while(p!==null)}hf(o)}catch(ke){r=ke,Nt===o&&o!==null&&(Nt=o=o.return);continue}break}while(!0)}function uf(){var t=Qi.current;return Qi.current=qi,t===null?qi:t}function Hd(){(Et===0||Et===3||Et===2)&&(Et=4),Dt===null||(xo&268435455)===0&&(Xi&268435455)===0||Vr(Dt,Ut)}function ol(t,r){var o=qe;qe|=2;var l=uf();(Dt!==t||Ut!==r)&&(jr=null,wo(t,r));do try{Jv();break}catch(d){df(t,d)}while(!0);if(td(),qe=o,Qi.current=l,Nt!==null)throw Error(a(261));return Dt=null,Ut=0,Et}function Jv(){for(;Nt!==null;)pf(Nt)}function ex(){for(;Nt!==null&&!C2();)pf(Nt)}function pf(t){var r=gf(t.alternate,t,wn);t.memoizedProps=t.pendingProps,r===null?hf(t):Nt=r,Ed.current=null}function hf(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Vv(o,r,wn),o!==null){Nt=o;return}}else{if(o=Gv(o,r),o!==null){o.flags&=32767,Nt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,Nt=null;return}}if(r=r.sibling,r!==null){Nt=r;return}Nt=r=t}while(r!==null);Et===0&&(Et=5)}function bo(t,r,o){var l=Qe,d=Nn.transition;try{Nn.transition=null,Qe=1,tx(t,r,o,l)}finally{Nn.transition=d,Qe=l}return null}function tx(t,r,o,l){do ys();while(Wr!==null);if((qe&6)!==0)throw Error(a(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(a(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if($2(t,p),t===Dt&&(Nt=Dt=null,Ut=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||el||(el=!0,vf(li,function(){return ys(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Nn.transition,Nn.transition=null;var w=Qe;Qe=1;var T=qe;qe|=4,Ed.current=null,Yv(t,o),nf(o,t),bv(Hc),mi=!!Bc,Hc=Bc=null,t.current=o,Kv(o),S2(),qe=T,Qe=w,Nn.transition=p}else t.current=o;if(el&&(el=!1,Wr=t,tl=d),p=t.pendingLanes,p===0&&(Ur=null),N2(o.stateNode),cn(t,St()),r!==null)for(l=t.onRecoverableError,o=0;o<r.length;o++)d=r[o],l(d.value,{componentStack:d.stack,digest:d.digest});if(Ji)throw Ji=!1,t=Pd,Pd=null,t;return(tl&1)!==0&&t.tag!==0&&ys(),p=t.pendingLanes,(p&1)!==0?t===Dd?Ta++:(Ta=0,Dd=t):Ta=0,Fr(),null}function ys(){if(Wr!==null){var t=e1(tl),r=Nn.transition,o=Qe;try{if(Nn.transition=null,Qe=16>t?16:t,Wr===null)var l=!1;else{if(t=Wr,Wr=null,tl=0,(qe&6)!==0)throw Error(a(331));var d=qe;for(qe|=4,ve=t.current;ve!==null;){var p=ve,w=p.child;if((ve.flags&16)!==0){var T=p.deletions;if(T!==null){for(var D=0;D<T.length;D++){var Q=T[D];for(ve=Q;ve!==null;){var ie=ve;switch(ie.tag){case 0:case 11:case 15:Ia(8,ie,p)}var ce=ie.child;if(ce!==null)ce.return=ie,ve=ce;else for(;ve!==null;){ie=ve;var ae=ie.sibling,me=ie.return;if(Qh(ie),ie===Q){ve=null;break}if(ae!==null){ae.return=me,ve=ae;break}ve=me}}}var ye=p.alternate;if(ye!==null){var be=ye.child;if(be!==null){ye.child=null;do{var Mt=be.sibling;be.sibling=null,be=Mt}while(be!==null)}}ve=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,ve=w;else e:for(;ve!==null;){if(p=ve,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ia(9,p,p.return)}var W=p.sibling;if(W!==null){W.return=p.return,ve=W;break e}ve=p.return}}var O=t.current;for(ve=O;ve!==null;){w=ve;var G=w.child;if((w.subtreeFlags&2064)!==0&&G!==null)G.return=w,ve=G;else e:for(w=O;ve!==null;){if(T=ve,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Ki(9,T)}}catch(ke){Ct(T,T.return,ke)}if(T===w){ve=null;break e}var ue=T.sibling;if(ue!==null){ue.return=T.return,ve=ue;break e}ve=T.return}}if(qe=d,Fr(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(ci,t)}catch{}l=!0}return l}finally{Qe=o,Nn.transition=r}}return!1}function ff(t,r,o){r=ms(o,r),r=Th(t,r,1),t=Br(t,r,1),r=en(),t!==null&&(ta(t,1,r),cn(t,r))}function Ct(t,r,o){if(t.tag===3)ff(t,t,o);else for(;r!==null;){if(r.tag===3){ff(r,t,o);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){t=ms(o,t),t=Lh(r,t,1),r=Br(r,t,1),t=en(),r!==null&&(ta(r,1,t),cn(r,t));break}}r=r.return}}function nx(t,r,o){var l=t.pingCache;l!==null&&l.delete(r),r=en(),t.pingedLanes|=t.suspendedLanes&o,Dt===t&&(Ut&o)===o&&(Et===4||Et===3&&(Ut&130023424)===Ut&&500>St()-$d?wo(t,0):Rd|=o),cn(t,r)}function mf(t,r){r===0&&((t.mode&1)===0?r=1:(r=ui,ui<<=1,(ui&130023424)===0&&(ui=4194304)));var o=en();t=yr(t,r),t!==null&&(ta(t,r,o),cn(t,o))}function rx(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),mf(t,o)}function ox(t,r){var o=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(a(314))}l!==null&&l.delete(r),mf(t,o)}var gf;gf=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||on.current)an=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return an=!1,qv(t,r,o);an=(t.flags&131072)!==0}else an=!1,gt&&(r.flags&1048576)!==0&&Z1(r,Ei,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;Zi(t,r),t=r.pendingProps;var d=is(r,Vt.current);hs(r,o),d=pd(null,r,l,t,d,o);var p=hd();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,sn(l)?(p=!0,Ai(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,sd(r),d.updater=Vi,r.stateNode=d,d._reactInternals=r,yd(r,l,t,o),r=kd(null,r,l,!0,p,o)):(r.tag=0,gt&&p&&Yc(r),Jt(null,r,d,o),r=r.child),r;case 16:l=r.elementType;e:{switch(Zi(t,r),t=r.pendingProps,d=l._init,l=d(l._payload),r.type=l,d=r.tag=ax(l),t=Hn(l,t),d){case 0:r=jd(null,r,l,t,o);break e;case 1:r=Bh(null,r,l,t,o);break e;case 11:r=Ph(null,r,l,t,o);break e;case 14:r=Dh(null,r,l,Hn(l.type,t),o);break e}throw Error(a(306,l,""))}return r;case 0:return l=r.type,d=r.pendingProps,d=r.elementType===l?d:Hn(l,d),jd(t,r,l,d,o);case 1:return l=r.type,d=r.pendingProps,d=r.elementType===l?d:Hn(l,d),Bh(t,r,l,d,o);case 3:e:{if(Hh(r),t===null)throw Error(a(387));l=r.pendingProps,p=r.memoizedState,d=p.element,rh(t,r),Fi(r,l,null,o);var w=r.memoizedState;if(l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=ms(Error(a(423)),r),r=Uh(t,r,l,o,d);break e}else if(l!==d){d=ms(Error(a(424)),r),r=Uh(t,r,l,o,d);break e}else for(yn=Pr(r.stateNode.containerInfo.firstChild),xn=r,gt=!0,Bn=null,o=th(r,null,l,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ds(),l===d){r=br(t,r,o);break e}Jt(t,r,l,o)}r=r.child}return r;case 5:return ah(r),t===null&&Xc(r),l=r.type,d=r.pendingProps,p=t!==null?t.memoizedProps:null,w=d.children,Uc(l,d)?w=null:p!==null&&Uc(l,p)&&(r.flags|=32),Oh(t,r),Jt(t,r,w,o),r.child;case 6:return t===null&&Xc(r),null;case 13:return Wh(t,r,o);case 4:return ad(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=us(r,null,l,o):Jt(t,r,l,o),r.child;case 11:return l=r.type,d=r.pendingProps,d=r.elementType===l?d:Hn(l,d),Ph(t,r,l,d,o);case 7:return Jt(t,r,r.pendingProps,o),r.child;case 8:return Jt(t,r,r.pendingProps.children,o),r.child;case 12:return Jt(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(l=r.type._context,d=r.pendingProps,p=r.memoizedProps,w=d.value,it(Pi,l._currentValue),l._currentValue=w,p!==null)if(On(p.value,w)){if(p.children===d.children&&!on.current){r=br(t,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){w=p.child;for(var D=T.firstContext;D!==null;){if(D.context===l){if(p.tag===1){D=wr(-1,o&-o),D.tag=2;var Q=p.updateQueue;if(Q!==null){Q=Q.shared;var ie=Q.pending;ie===null?D.next=D:(D.next=ie.next,ie.next=D),Q.pending=D}}p.lanes|=o,D=p.alternate,D!==null&&(D.lanes|=o),rd(p.return,o,r),T.lanes|=o;break}D=D.next}}else if(p.tag===10)w=p.type===r.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(a(341));w.lanes|=o,T=w.alternate,T!==null&&(T.lanes|=o),rd(w,o,r),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===r){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}Jt(t,r,d.children,o),r=r.child}return r;case 9:return d=r.type,l=r.pendingProps.children,hs(r,o),d=Mn(d),l=l(d),r.flags|=1,Jt(t,r,l,o),r.child;case 14:return l=r.type,d=Hn(l,r.pendingProps),d=Hn(l.type,d),Dh(t,r,l,d,o);case 15:return zh(t,r,r.type,r.pendingProps,o);case 17:return l=r.type,d=r.pendingProps,d=r.elementType===l?d:Hn(l,d),Zi(t,r),r.tag=1,sn(l)?(t=!0,Ai(r)):t=!1,hs(r,o),Nh(r,l,d),yd(r,l,d,o),kd(null,r,l,!0,t,o);case 19:return Vh(t,r,o);case 22:return Fh(t,r,o)}throw Error(a(156,r.tag))};function vf(t,r){return Yp(t,r)}function sx(t,r,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,r,o,l){return new sx(t,r,o,l)}function Ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ax(t){if(typeof t=="function")return Ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===U)return 11;if(t===K)return 14}return 2}function Gr(t,r){var o=t.alternate;return o===null?(o=An(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function sl(t,r,o,l,d,p){var w=2;if(l=t,typeof t=="function")Ud(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case R:return jo(o.children,d,p,r);case F:w=8,d|=8;break;case X:return t=An(12,o,r,d|2),t.elementType=X,t.lanes=p,t;case H:return t=An(13,o,r,d),t.elementType=H,t.lanes=p,t;case ne:return t=An(19,o,r,d),t.elementType=ne,t.lanes=p,t;case J:return al(o,d,p,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z:w=10;break e;case V:w=9;break e;case U:w=11;break e;case K:w=14;break e;case Y:w=16,l=null;break e}throw Error(a(130,t==null?t:typeof t,""))}return r=An(w,o,r,d),r.elementType=t,r.type=l,r.lanes=p,r}function jo(t,r,o,l){return t=An(7,t,l,r),t.lanes=o,t}function al(t,r,o,l){return t=An(22,t,l,r),t.elementType=J,t.lanes=o,t.stateNode={isHidden:!1},t}function Wd(t,r,o){return t=An(6,t,null,r),t.lanes=o,t}function qd(t,r,o){return r=An(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function ix(t,r,o,l,d){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Vd(t,r,o,l,d,p,w,T,D){return t=new ix(t,r,o,T,D),r===1?(r=1,p===!0&&(r|=8)):r=0,p=An(3,null,null,r),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},sd(p),t}function lx(t,r,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:r,implementation:o}}function xf(t){if(!t)return zr;t=t._reactInternals;e:{if(co(t)!==t||t.tag!==1)throw Error(a(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(sn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(a(171))}if(t.tag===1){var o=t.type;if(sn(o))return q1(t,o,r)}return r}function yf(t,r,o,l,d,p,w,T,D){return t=Vd(o,l,!0,t,d,p,w,T,D),t.context=xf(null),o=t.current,l=en(),d=qr(o),p=wr(l,d),p.callback=r??null,Br(o,p,d),t.current.lanes=d,ta(t,d,l),cn(t,l),t}function il(t,r,o,l){var d=r.current,p=en(),w=qr(d);return o=xf(o),r.context===null?r.context=o:r.pendingContext=o,r=wr(p,w),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=Br(d,r,w),t!==null&&(qn(t,d,w,p),zi(t,d,w)),w}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Gd(t,r){wf(t,r),(t=t.alternate)&&wf(t,r)}function cx(){return null}var bf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zd(t){this._internalRoot=t}cl.prototype.render=Zd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(a(409));il(t,r,null,null)},cl.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;yo(function(){il(null,t,null,null)}),r[mr]=null}};function cl(t){this._internalRoot=t}cl.prototype.unstable_scheduleHydration=function(t){if(t){var r=r1();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Er.length&&r!==0&&r<Er[o].priority;o++);Er.splice(o,0,t),o===0&&a1(t)}};function Yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jf(){}function dx(t,r,o,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var Q=ll(w);p.call(Q)}}var w=yf(r,l,t,0,null,!1,!1,"",jf);return t._reactRootContainer=w,t[mr]=w.current,ma(t.nodeType===8?t.parentNode:t),yo(),w}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var T=l;l=function(){var Q=ll(D);T.call(Q)}}var D=Vd(t,0,!1,null,null,!1,!1,"",jf);return t._reactRootContainer=D,t[mr]=D.current,ma(t.nodeType===8?t.parentNode:t),yo(function(){il(r,D,o,l)}),D}function ul(t,r,o,l,d){var p=o._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var T=d;d=function(){var D=ll(w);T.call(D)}}il(r,w,t,d)}else w=dx(o,r,t,d,l);return ll(w)}t1=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=ea(r.pendingLanes);o!==0&&(yc(r,o|1),cn(r,St()),(qe&6)===0&&(xs=St()+500,Fr()))}break;case 13:yo(function(){var l=yr(t,1);if(l!==null){var d=en();qn(l,t,1,d)}}),Gd(t,1)}},wc=function(t){if(t.tag===13){var r=yr(t,134217728);if(r!==null){var o=en();qn(r,t,134217728,o)}Gd(t,134217728)}},n1=function(t){if(t.tag===13){var r=qr(t),o=yr(t,r);if(o!==null){var l=en();qn(o,t,r,l)}Gd(t,r)}},r1=function(){return Qe},o1=function(t,r){var o=Qe;try{return Qe=t,r()}finally{Qe=o}},Ks=function(t,r,o){switch(r){case"input":if(ft(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var l=o[r];if(l!==t&&l.form===t.form){var d=Ii(l);if(!d)throw Error(a(90));pe(l),ft(l,d)}}}break;case"textarea":_e(t,o);break;case"select":r=o.value,r!=null&&de(t,!!o.multiple,r,!1)}},Hp=Od,Up=yo;var ux={usingClientEntryPoint:!1,Events:[xa,ss,Ii,Op,Bp,Od]},La={findFiberByHostInstance:uo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},px={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gp(t),t===null?null:t.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{ci=pl.inject(px),nr=pl}catch{}}return dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux,dn.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(r))throw Error(a(200));return lx(t,r,null,o)},dn.createRoot=function(t,r){if(!Yd(t))throw Error(a(299));var o=!1,l="",d=bf;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Vd(t,1,!1,null,null,o,!1,l,d),t[mr]=r.current,ma(t.nodeType===8?t.parentNode:t),new Zd(r)},dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=Gp(r),t=t===null?null:t.stateNode,t},dn.flushSync=function(t){return yo(t)},dn.hydrate=function(t,r,o){if(!dl(r))throw Error(a(200));return ul(null,t,r,!0,o)},dn.hydrateRoot=function(t,r,o){if(!Yd(t))throw Error(a(405));var l=o!=null&&o.hydratedSources||null,d=!1,p="",w=bf;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),r=yf(r,null,t,1,o??null,d,!1,p,w),t[mr]=r.current,ma(t),l)for(t=0;t<l.length;t++)o=l[t],d=o._getVersion,d=d(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,d]:r.mutableSourceEagerHydrationData.push(o,d);return new cl(r)},dn.render=function(t,r,o){if(!dl(r))throw Error(a(200));return ul(null,t,r,!1,o)},dn.unmountComponentAtNode=function(t){if(!dl(t))throw Error(a(40));return t._reactRootContainer?(yo(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[mr]=null})}),!0):!1},dn.unstable_batchedUpdates=Od,dn.unstable_renderSubtreeIntoContainer=function(t,r,o,l){if(!dl(o))throw Error(a(200));if(t==null||t._reactInternals===void 0)throw Error(a(38));return ul(t,r,o,!1,l)},dn.version="18.3.1-next-f1338f8080-20240426",dn}var Af;function km(){if(Af)return Xd.exports;Af=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),Xd.exports=yx(),Xd.exports}var Tf;function wx(){if(Tf)return hl;Tf=1;var n=km();return hl.createRoot=n.createRoot,hl.hydrateRoot=n.hydrateRoot,hl}var bx=wx();const jx=jm(bx);function _m(n){var s,a,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(s=0;s<c;s++)n[s]&&(a=_m(n[s]))&&(i&&(i+=" "),i+=a)}else for(a in n)n[a]&&(i&&(i+=" "),i+=a);return i}function ee(){for(var n,s,a=0,i="",c=arguments.length;a<c;a++)(n=arguments[a])&&(s=_m(n))&&(i&&(i+=" "),i+=s);return i}const qs=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M12 5V19M5 12H19",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};qs.displayName="PlusIcon";const kx="_root_7uomf_13",_x="_sm_7uomf_82",Cx="_md_7uomf_88",Sx="_lg_7uomf_94",Mx="_horizontal_7uomf_107",Ix="_alignStart_7uomf_121",Nx="_vertical_7uomf_125",Ax="_inner_7uomf_131",Tx="_iconSlot_7uomf_146",Lx="_label_7uomf_163",ko={root:kx,sm:_x,md:Cx,lg:Sx,horizontal:Mx,alignStart:Ix,vertical:Nx,inner:Ax,iconSlot:Tx,label:Lx};function Lf(n){return typeof n=="number"?`${n}px`:n}const Ex=v.forwardRef(({size:n="md",layout:s="horizontal",align:a="center",label:i="Add",hideLabel:c=!1,icon:u,height:f,borderRadius:g,className:m,style:y,disabled:x,type:k="button",...b},C)=>{const L=u??e.jsx(qs,{size:"100%"}),S={};return f!==void 0&&(S["--area-min-height"]=Lf(f)),g!==void 0&&(S["--area-radius"]=Lf(g)),e.jsx("button",{ref:C,type:k,className:ee(ko.root,ko[n],ko[s],a==="start"&&ko.alignStart,m),disabled:x,"data-size":n,"data-layout":s,style:{...S,...y},...b,children:e.jsxs("span",{className:ko.inner,children:[e.jsx("span",{className:ko.iconSlot,"aria-hidden":"true",children:L}),!c&&i&&e.jsx("span",{className:ko.label,children:i})]})})});Ex.displayName="AreaButton";const Rx="_root_b29pw_8",$x="_image_b29pw_33",Px="_initials_b29pw_40",Dx="_iconSlot_b29pw_52",Yr={root:Rx,image:$x,initials:Px,iconSlot:Dx,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function zx({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}function Fx(n){const s=n.trim().split(/\s+/).filter(c=>/[\p{L}\p{N}]/u.test(c));if(s.length===0)return"";if(s.length===1)return s[0].charAt(0).toUpperCase();const a=s[0].charAt(0),i=s[s.length-1].charAt(0);return(a+i).toUpperCase()}const ep=v.forwardRef(({src:n,alt:s,initials:a,name:i,icon:c,size:u="md",color:f="neutral",variant:g="subtle",shape:m="circle",className:y,...x},k)=>{const[b,C]=v.useState(!1),L=!!n&&!b,S=(a==null?void 0:a.slice(0,2).toUpperCase())??(i?Fx(i):"");let I;return L?I=e.jsx("img",{src:n,alt:s??"",className:Yr.image,onError:()=>C(!0),draggable:!1},n):S?I=e.jsx("span",{className:Yr.initials,"aria-hidden":s?void 0:!0,children:S}):I=e.jsx("span",{className:Yr.iconSlot,"aria-hidden":"true",children:c??e.jsx(zx,{})}),e.jsx("span",{ref:k,"data-size":u,"data-color":f,"data-variant":g,"data-shape":m,className:ee(Yr.root,Yr[`size-${u}`],Yr[`color-${f}`],Yr[`variant-${g}`],Yr[`shape-${m}`],y),...x,children:I})});ep.displayName="Avatar";const Ox="_root_uqz3u_7",Bx={root:Ox},Qn=v.forwardRef(({as:n="span",className:s,children:a,...i},c)=>e.jsx(n,{ref:c,className:ee(Bx.root,s),...i,children:a}));Qn.displayName="Eyebrow";const Hx="_root_1tnwf_15",Ux={root:Hx},Wx=v.forwardRef(({scale:n="paragraph-md",placeholder:s="Type something…",value:a,defaultValue:i="",onChange:c,readOnly:u=!1,disabled:f=!1,className:g,onInput:m,...y},x)=>{const k=a!==void 0,b=v.useRef(null),[C,L]=v.useState(()=>k?!a:!i),S=v.useCallback(j=>{b.current=j,typeof x=="function"?x(j):x&&(x.current=j)},[x]);v.useEffect(()=>{!k&&b.current&&i&&(b.current.textContent=i,L(!i))},[]),v.useEffect(()=>{k&&b.current&&(b.current.textContent??"")!==a&&(b.current.textContent=a??"",L(!(a??"")))},[a,k]);const I=j=>{const _=j.currentTarget.textContent??"";L(_===""),c==null||c(_),m==null||m(j)},M=j=>{j.preventDefault();const _=j.clipboardData.getData("text/plain");document.execCommand("insertText",!1,_)},N=!f&&!u;return e.jsx("span",{ref:S,contentEditable:N?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":s,"aria-disabled":f||void 0,"aria-readonly":u||void 0,"data-scale":n,"data-empty":C||void 0,"data-placeholder":s,"data-disabled":f||void 0,"data-readonly":u||void 0,className:ee(Ux.root,g),onInput:I,onPaste:M,...y})});Wx.displayName="TypeBox";const qx="_root_1brpy_12",Vx="_ghost_1brpy_27",Gx="_path_1brpy_32",Ra={root:qx,"ai-spin":"_ai-spin_1brpy_1",ghost:Vx,"ai-morph":"_ai-morph_1brpy_1",path:Gx,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},Zx={xs:16,sm:24,md:32,lg:48,xl:64},Yx={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Ef="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",fl=n=>n==="inverse"||n==="inverse-light",Kx=n=>n==="stroke"||n==="stroke-light",tp=v.forwardRef(({size:n="md",variant:s="gradient-fill",state:a="loading",className:i,style:c,"aria-label":u,...f},g)=>{const m=v.useId().replace(/[^a-z0-9]/gi,""),y=`aigrad-${m}`,x=`aiglow-${m}`,k=typeof n=="string",b=k?Zx[n]:n,C=k?Yx[n]:b<=16?1.75:b<=24?1.5:b<=32?1.25:1.1,L=s==="gradient-fill"?`url(#${y})`:fl(s)?"currentColor":"none",S=fl(s)?"none":Kx(s)?"currentColor":`url(#${y})`,I="currentColor",M=s!=="stroke"&&s!=="stroke-light"&&!fl(s);return e.jsxs("svg",{ref:g,width:b,height:b,viewBox:"0 0 24 24",fill:"none",className:ee(Ra.root,Ra[`variant-${s}`],Ra[`state-${a}`],i),style:c,"data-state":a,"aria-label":u??(a==="ready"?"AI ready for input":"Loading"),"aria-live":a==="ready"?"polite":void 0,role:"status",...f,children:[!fl(s)&&e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[e.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),e.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),e.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),e.jsxs("filter",{id:x,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[e.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("path",{d:Ef,stroke:I,strokeWidth:C*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:Ra.ghost}),e.jsx("path",{d:Ef,fill:L,stroke:S==="none"?void 0:S,strokeWidth:S==="none"?void 0:C,strokeLinecap:"round",strokeLinejoin:"round",filter:M?`url(#${x})`:void 0,className:Ra.path})]})});tp.displayName="AILoader";const Qx="_root_10act_14",Xx="_hovered_10act_68",Jx="_loading_10act_69",ey="_sm_10act_90",ty="_md_10act_98",ny="_lg_10act_106",ry="_dark_10act_116",oy="_icon_10act_122",ws={root:Qx,hovered:Xx,loading:Jx,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:ey,md:ty,lg:ny,dark:ry,icon:oy},Rf={sm:12,md:14,lg:18};function sy({size:n,light:s}){return e.jsxs("svg",{width:n,height:n,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!s&&e.jsx("defs",{children:e.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#8C4FE2"}),e.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),e.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),e.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:s?"white":"url(#ai-core-btn-sparkle)"})]})}const Cm=v.forwardRef(({size:n="md",dark:s,loading:a,className:i,onMouseEnter:c,onMouseLeave:u,...f},g)=>{const[m,y]=v.useState(!1);return e.jsx("button",{ref:g,className:ee(ws.root,ws[n],s&&ws.dark,a?ws.loading:m&&ws.hovered,i),"aria-busy":a||void 0,onMouseEnter:x=>{y(!0),c==null||c(x)},onMouseLeave:x=>{y(!1),u==null||u(x)},...f,children:e.jsx("span",{className:ws.icon,children:a?e.jsx(tp,{size:Rf[n],variant:s?"inverse-light":"gradient-fill"}):e.jsx(sy,{size:Rf[n],light:s})})})});Cm.displayName="AICoreButton";const ay="_root_1qx4u_9",iy="_star_1qx4u_34",tu={root:ay,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:iy},ly="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Sm=v.forwardRef(({size:n="sm",className:s,...a},i)=>e.jsx("span",{ref:i,"data-size":n,"aria-hidden":"true",className:ee(tu.root,tu[`size-${n}`],s),...a,children:e.jsx("svg",{viewBox:"0 0 24 24",className:tu.star,fill:"none","aria-hidden":"true",children:e.jsx("path",{d:ly,fill:"currentColor"})})}));Sm.displayName="AIAvatar";const cy="_shell_lalw3_21",dy="_wrapper_lalw3_58",uy="_card_lalw3_65",py="_cardClip_lalw3_94",hy="_textarea_lalw3_160",fy="_actions_lalw3_203",Ms={shell:cy,wrapper:dy,card:uy,cardClip:py,textarea:hy,actions:fy},Mm=v.forwardRef(({className:n,children:s,...a},i)=>e.jsx("div",{ref:i,className:ee(Ms.shell,n),...a,children:s}));Mm.displayName="AIComposer";function my(n,s){typeof n=="function"?n(s):n&&(n.current=s)}const Im=v.forwardRef(({value:n,onChange:s,onSubmit:a,maxRows:i=5,radius:c="sm",placeholder:u="Ask AI anything…",className:f,onKeyDown:g,disabled:m,children:y,style:x,...k},b)=>{const C=v.useRef(null);v.useEffect(()=>{const N=C.current;N&&(N.style.height="auto",N.style.height=`${N.scrollHeight}px`)},[n]);const L=v.useCallback(N=>s(N.target.value),[s]),S=v.useCallback(N=>{g==null||g(N),!N.defaultPrevented&&N.key==="Enter"&&!N.shiftKey&&a&&(N.preventDefault(),a())},[g,a]),I=v.useCallback(N=>{C.current=N,my(b,N)},[b]),M={...x??{},"--ai-composer-max-rows":i};return e.jsx("div",{className:ee(Ms.wrapper,f),"data-radius":c,children:e.jsx("div",{className:Ms.card,children:e.jsxs("div",{className:Ms.cardClip,children:[e.jsx("textarea",{...k,ref:I,className:Ms.textarea,rows:1,value:n,onChange:L,onKeyDown:S,placeholder:u,disabled:m,style:M}),y!=null&&e.jsx("div",{className:Ms.actions,children:y})]})})})});Im.displayName="AIComposerInput";const gy="_root_fv0gc_10",vy="_simple_fv0gc_28",xy="_float_fv0gc_83",$f={root:gy,simple:vy,float:xy},yy=v.forwardRef(({variant:n="simple",className:s,children:a,...i},c)=>e.jsx("section",{ref:c,"data-variant":n,className:ee($f.root,$f[n],s),...i,children:a}));yy.displayName="AIConversation";const wy="_fadeFrame_1l0ib_19",by="_scroller_1l0ib_32",jy="_content_1l0ib_89",ky="_messageBlock_1l0ib_108",_y="_messageBlockAi_1l0ib_116",Cy="_inboundBlock_1l0ib_128",Sy="_inboundLoader_1l0ib_136",My="_inboundLoaderLabel_1l0ib_146",Iy="_outboundBlock_1l0ib_153",Ny="_outboundHeader_1l0ib_161",Ay="_messageBlockUser_1l0ib_168",Ty="_aiThreadOutboundIn_1l0ib_1",Ly="_messageBody_1l0ib_182",Ey="_messageBodyAi_1l0ib_193",Ry="_messageBodyUser_1l0ib_200",$y="_label_1l0ib_159",Py="_labelAi_1l0ib_221",Dy="_labelUser_1l0ib_159",zy="_labelAvatar_1l0ib_224",Fy="_labelText_1l0ib_237",Oy="_timestamp_1l0ib_244",By="_timestampAi_1l0ib_259",Hy="_timestampUser_1l0ib_260",Uy="_timestampInline_1l0ib_270",Wy="_aiThreadOutboundFadeIn_1l0ib_1",Be={fadeFrame:wy,scroller:by,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:jy,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:ky,messageBlockAi:_y,inboundBlock:Cy,inboundLoader:Sy,inboundLoaderLabel:My,outboundBlock:Iy,outboundHeader:Ny,messageBlockUser:Ay,aiThreadOutboundIn:Ty,messageBody:Ly,messageBodyAi:Ey,messageBodyUser:Ry,label:$y,labelAi:Py,labelUser:Dy,labelAvatar:zy,labelText:Fy,timestamp:Oy,timestampAi:By,timestampUser:Hy,timestampInline:Uy,aiThreadOutboundFadeIn:Wy},Pf=8;function qy(n,s){typeof n=="function"?n(s):n&&(n.current=s)}const Vy=v.forwardRef(({density:n="comfortable",padding:s="md",autoScroll:a=!0,autoScrollThreshold:i=80,className:c,children:u,...f},g)=>{const m=v.useRef(null),y=v.useRef(null),x=v.useRef(!0),[k,b]=v.useState(!1),[C,L]=v.useState(!1),S=v.useCallback(I=>{m.current=I,qy(g,I)},[g]);return v.useEffect(()=>{const I=m.current,M=y.current;if(!I||!M)return;const N=()=>{const{scrollTop:R,scrollHeight:F,clientHeight:X}=I;return F-R-X<i},j=R=>{I.scrollTo({top:I.scrollHeight,behavior:R?"smooth":"auto"})},_=()=>{const{scrollTop:R,scrollHeight:F,clientHeight:X}=I,Z=R>Pf,V=F-R-X>Pf;b(U=>U===Z?U:Z),L(U=>U===V?U:V)};a&&(j(!1),x.current=!0),_();const E=()=>{x.current=N(),_()};I.addEventListener("scroll",E,{passive:!0});const z=new ResizeObserver(()=>{a&&x.current&&j(!0),_()});return z.observe(M),z.observe(I),()=>{I.removeEventListener("scroll",E),z.disconnect()}},[a,i]),e.jsx("div",{className:Be.fadeFrame,"data-fade-top":k,"data-fade-bottom":C,children:e.jsx("div",{ref:S,className:ee(Be.scroller,Be[`padding-${s}`],c),...f,children:e.jsx("div",{ref:y,className:ee(Be.content,Be[`density-${n}`]),children:u})})})});Vy.displayName="AIThread";const Yl=v.forwardRef(({align:n="ai",avatar:s,className:a,children:i,...c},u)=>e.jsxs("div",{ref:u,className:ee(Be.label,n==="user"?Be.labelUser:Be.labelAi,a),...c,children:[s!=null&&e.jsx("span",{className:Be.labelAvatar,children:s}),e.jsx("span",{className:Be.labelText,children:i})]}));Yl.displayName="AILabel";const Gy=n=>n.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function Zy(n,s){if(typeof n=="string")return{text:n};const a=n instanceof Date?n:new Date(n);return Number.isNaN(a.getTime())?null:{text:s(a),iso:a.toISOString()}}const Xa=v.forwardRef(({value:n,align:s="ai",format:a=Gy,inline:i=!1,className:c,...u},f)=>{const g=v.useMemo(()=>Zy(n,a),[n,a]);return g?e.jsx("time",{ref:f,className:ee(Be.timestamp,i?Be.timestampInline:s==="user"?Be.timestampUser:Be.timestampAi,c),dateTime:g.iso,...u,children:g.text}):null});Xa.displayName="AITimestamp";function Yy(n){return n==null?null:typeof n=="string"||typeof n=="number"||n instanceof Date?e.jsx(Xa,{align:"ai",value:n}):n}function Ky(n){return n==null?null:typeof n=="string"||typeof n=="number"?e.jsx(Yl,{align:"ai",children:n}):n}const Qy=v.forwardRef(({label:n,time:s,className:a,children:i,...c},u)=>e.jsxs("div",{ref:u,"data-author":"ai",className:ee(Be.messageBlock,Be.messageBlockAi,a),...c,children:[Ky(n),e.jsx("div",{className:ee(Be.messageBody,Be.messageBodyAi),children:i}),Yy(s)]}));Qy.displayName="AIAssistantMessage";function Xy(n){return n==null?null:typeof n=="string"||typeof n=="number"||n instanceof Date?e.jsx(Xa,{align:"user",value:n}):n}function Jy(n){return n==null?null:typeof n=="string"||typeof n=="number"?e.jsx(Yl,{align:"user",children:n}):n}const e3=v.forwardRef(({label:n,time:s,className:a,children:i,...c},u)=>e.jsxs("div",{ref:u,"data-author":"user",className:ee(Be.messageBlock,Be.messageBlockUser,a),...c,children:[Jy(n),e.jsx("div",{className:ee(Be.messageBody,Be.messageBodyUser),children:i}),Xy(s)]}));e3.displayName="AIUserMessage";function t3(n){return n===!1?null:n==null||n===!0?e.jsx(Sm,{size:"sm"}):n}function n3(n,s){return n==null&&s==null?null:typeof n=="string"||typeof n=="number"||n==null?e.jsx(Yl,{align:"ai",avatar:s,children:n}):n}const r3=v.forwardRef(({avatar:n,label:s="Teambridge AI",activity:a,actions:i,loading:c=!1,loaderLabel:u="Thinking…",className:f,children:g,...m},y)=>{const x=t3(n),k=n3(s,x);return e.jsxs("div",{ref:y,"data-author":"ai",className:ee(Be.messageBlock,Be.messageBlockAi,Be.inboundBlock,f),...m,children:[k,a,g!=null&&e.jsx("div",{className:ee(Be.messageBody,Be.messageBodyAi),children:g}),c&&e.jsxs("div",{className:Be.inboundLoader,"aria-live":"polite",children:[e.jsx(tp,{size:"xs"}),u!=null&&e.jsx("span",{className:Be.inboundLoaderLabel,children:u})]}),i]})});r3.displayName="AIInboundMessage";function o3(n){return n instanceof Date||typeof n=="number"||typeof n=="string"}const s3=v.forwardRef(({label:n="You",time:s,timeFormat:a,className:i,children:c,...u},f)=>{const g=s==null?null:o3(s)?e.jsx(Xa,{value:s,format:a,inline:!0}):s,m=n==null?null:typeof n=="string"||typeof n=="number"?e.jsx("span",{className:Be.labelText,children:n}):n,y=m!=null||g!=null;return e.jsxs("div",{ref:f,"data-author":"user",className:ee(Be.messageBlock,Be.messageBlockUser,Be.outboundBlock,i),...u,children:[y&&e.jsxs("div",{className:ee(Be.label,Be.labelUser,Be.outboundHeader),children:[m,g]}),e.jsx("div",{className:ee(Be.messageBody,Be.messageBodyUser),children:c})]})});s3.displayName="AIOutboundMessage";const nn=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M6 9L12 15L18 9",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};nn.displayName="ChevronDownIcon";const a3="_root_1j4eq_8",i3="_header_1j4eq_17",l3="_headerSummary_1j4eq_53",c3="_aiTrailSummaryFade_1j4eq_1",d3="_aiTrailHeaderAppend_1j4eq_1",u3="_aiTrailEllipsis_1j4eq_1",p3="_headerCurrent_1j4eq_128",h3="_headerChevron_1j4eq_159",f3="_headerChevronExpanded_1j4eq_173",m3="_body_1j4eq_187",g3="_bodyExpanded_1j4eq_200",v3="_bodyCollapsed_1j4eq_201",x3="_bodyInner_1j4eq_203",y3="_bodyContent_1j4eq_187",w3="_step_1j4eq_225",b3="_stepIcon_1j4eq_242",j3="_stepAnimating_1j4eq_256",k3="_aiTrailStepPulse_1j4eq_1",_3="_stepBody_1j4eq_267",C3="_stepHead_1j4eq_282",S3="_stepLabel_1j4eq_286",M3="_stepSeparator_1j4eq_288",I3="_stepDetail_1j4eq_292",N3="_subToggle_1j4eq_302",A3="_subToggleCount_1j4eq_335",T3="_subToggleChevron_1j4eq_339",L3="_subActivityWrap_1j4eq_358",E3="_subActivityExpanded_1j4eq_364",R3="_subActivityCollapsed_1j4eq_365",$3="_subActivityClip_1j4eq_367",P3="_subActivityList_1j4eq_378",D3="_subActivity_1j4eq_358",z3="_aiTrailSubActivityType_1j4eq_1",F3="_aiTrailSubActivityFade_1j4eq_1",Xe={root:a3,header:i3,headerSummary:l3,aiTrailSummaryFade:c3,aiTrailHeaderAppend:d3,aiTrailEllipsis:u3,headerCurrent:p3,headerChevron:h3,headerChevronExpanded:f3,body:m3,bodyExpanded:g3,bodyCollapsed:v3,bodyInner:x3,bodyContent:y3,step:w3,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:b3,stepAnimating:j3,aiTrailStepPulse:k3,stepBody:_3,stepHead:C3,stepLabel:S3,stepSeparator:M3,stepDetail:I3,subToggle:N3,subToggleCount:A3,subToggleChevron:T3,subActivityWrap:L3,subActivityExpanded:E3,subActivityCollapsed:R3,subActivityClip:$3,subActivityList:P3,subActivity:D3,aiTrailSubActivityType:z3,aiTrailSubActivityFade:F3},np=({size:n=16,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};np.displayName="MessageDotsSquareIcon";function Nm({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Nm.displayName="SearchMdIcon";function Yn({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}const Am=({size:n=16,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Am.displayName="Globe01Icon";const Tm=({size:n=16,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Tm.displayName="Code02Icon";function Lm({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Lm.displayName="Tool01Icon";const $n=({size:n=16,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M20 6L9 17L4 12",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})},Ds=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:[e.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:s}),e.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Ds.displayName="AlertCircleIcon";const O3={thinking:e.jsx(np,{size:14}),tool:e.jsx(Lm,{size:14}),search:e.jsx(Nm,{size:14}),file:e.jsx(Yn,{size:14}),web:e.jsx(Am,{size:14}),code:e.jsx(Tm,{size:14}),content:e.jsx($n,{size:14})},Kl=v.forwardRef(({type:n,status:s="done",detail:a,icon:i,subActivities:c,groupState:u="done",className:f,children:g,...m},y)=>{const x=s==="active"&&u==="live",k=s==="active"&&u==="live",b=s==="active"||s==="error",[C,L]=v.useState(null),S=C!==null?C:b;v.useEffect(()=>{L(null)},[s]);const I=v.useCallback(()=>L(!S),[S]),M=!!c&&c.length>0,N=(c==null?void 0:c.length)??0,j=s==="error"?e.jsx(Ds,{size:14}):i??O3[n];return e.jsxs("div",{ref:y,"data-step-type":n,"data-step-status":s,className:ee(Xe.step,Xe[`step-${s}`],x&&Xe.stepAnimating,f),...m,children:[e.jsx("span",{className:Xe.stepIcon,"aria-hidden":!0,children:j}),e.jsxs("span",{className:Xe.stepBody,children:[e.jsxs("span",{className:Xe.stepHead,children:[e.jsx("span",{className:Xe.stepLabel,children:g}),a!=null&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:Xe.stepSeparator,"aria-hidden":!0,children:" · "}),e.jsx("span",{className:Xe.stepDetail,children:a})]}),M&&e.jsxs("button",{type:"button",className:Xe.subToggle,onClick:I,"aria-expanded":S,"aria-label":S?`Collapse ${N} sub-steps`:`Expand ${N} sub-steps`,"data-expanded":S||void 0,children:[e.jsx("span",{className:Xe.subToggleCount,children:N}),e.jsx("span",{className:Xe.subToggleChevron,"aria-hidden":!0,children:e.jsx(nn,{size:10})})]})]}),M&&e.jsx(e.Fragment,{children:e.jsx("div",{className:ee(Xe.subActivityWrap,S?Xe.subActivityExpanded:Xe.subActivityCollapsed),"aria-hidden":!S,children:e.jsx("div",{className:Xe.subActivityClip,children:e.jsx("ul",{className:Xe.subActivityList,"data-animating":k||void 0,children:c.map((_,E)=>e.jsx("li",{className:Xe.subActivity,children:_},E))})})})})]})]})});Kl.displayName="AIActivityStep";function Df(n){return n==="error"}function B3(n,s,a,i,c,u){if(n==="live")return a.length===0?s===1?"1 step":`${s} steps`:e.jsx("span",{className:c,children:a[i]??a[a.length-1]},i);const f=n==="error"?"Stopped":u?`Thought for ${u}`:"Thought";if(a.length===0){const g=s===1?"1 step":`${s} steps`;return`${f} · ${g}`}return e.jsxs(e.Fragment,{children:[f,a.map((g,m)=>e.jsxs(v.Fragment,{children:[" · ",g]},m))]})}const rp=v.forwardRef(({state:n="live",expanded:s,defaultExpanded:a,onToggle:i,duration:c,summary:u,className:f,children:g,...m},y)=>{const x=s!==void 0,[k,b]=v.useState(a??Df(n)),[C,L]=v.useState(!1);v.useEffect(()=>{x||C||b(Df(n))},[n,x,C]);const S=x?!!s:k,I=v.useCallback(()=>{const z=!S;x||(b(z),L(!0)),i==null||i(z)},[S,x,i]),{enhancedChildren:M,stepCount:N,stepLabels:j,currentLabelIdx:_}=v.useMemo(()=>{let z=0;const R=[];let F=-1;return{enhancedChildren:v.Children.map(g,Z=>{if(!v.isValidElement(Z))return Z;const V=Z.props;if(!("type"in V||"status"in V))return Z;z+=1;const H=V.status??"done";return H==="pending"?null:(V.children!=null&&(R.push(V.children),H==="active"&&(F=R.length-1)),H3(Z,n))}),stepCount:z,stepLabels:R,currentLabelIdx:F>=0?F:R.length-1}},[g,n]),E=u??B3(n,N,j,_,Xe.headerCurrent,c);return e.jsxs("div",{ref:y,"data-state":n,"data-expanded":S,className:ee(Xe.root,f),...m,children:[e.jsxs("button",{type:"button",className:Xe.header,onClick:I,"aria-expanded":S,"aria-label":S?"Collapse activity trail":"Expand activity trail",children:[e.jsx("span",{className:Xe.headerSummary,children:E},`${n}-${_}`),e.jsx("span",{className:ee(Xe.headerChevron,S&&Xe.headerChevronExpanded),"aria-hidden":!0,children:e.jsx(nn,{size:14})})]}),e.jsx("div",{className:ee(Xe.body,S?Xe.bodyExpanded:Xe.bodyCollapsed),"aria-hidden":!S,children:e.jsx("div",{className:Xe.bodyInner,children:e.jsxs("div",{className:Xe.bodyContent,children:[M,n==="done"&&e.jsx(Kl,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});rp.displayName="AIActivityTrail";function H3(n,s){return v.cloneElement(n,{groupState:s})}var op=km();const U3="_wrapper_3tqlm_10",W3="_tooltip_3tqlm_22",q3="_portal_3tqlm_23",V3="_top_3tqlm_61",G3="_bottom_3tqlm_71",Z3="_left_3tqlm_81",Y3="_right_3tqlm_91",ml={wrapper:U3,tooltip:W3,portal:q3,top:V3,bottom:G3,left:Z3,right:Y3},zs=({content:n,placement:s="top",delay:a=0,disabled:i=!1,maxWidth:c=280,offset:u=0,children:f})=>{const[g,m]=v.useState(!1),[y,x]=v.useState({top:0,left:0}),k=v.useRef(null),b=v.useRef(),C=v.useId(),L=v.useCallback(()=>{if(!k.current)return;const j=k.current.getBoundingClientRect(),_=6+u;let E=0,z=0;switch(s){case"top":E=j.top-_,z=j.left+j.width/2;break;case"bottom":E=j.bottom+_,z=j.left+j.width/2;break;case"left":E=j.top+j.height/2,z=j.left-_;break;case"right":E=j.top+j.height/2,z=j.right+_;break}x({top:E,left:z})},[s,u]),S=v.useCallback(()=>{i||(L(),clearTimeout(b.current),a>0?b.current=setTimeout(()=>m(!0),a):m(!0))},[i,a,L]),I=v.useCallback(()=>{clearTimeout(b.current),m(!1)},[]);v.useEffect(()=>{if(!g)return;const j=()=>L();return window.addEventListener("scroll",j,!0),window.addEventListener("resize",j),()=>{window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j)}},[g,L]);const M=Rn.cloneElement(f,{"aria-describedby":g?C:void 0}),N=e.jsx("span",{id:C,role:"tooltip",className:ee(ml.tooltip,ml[s],ml.portal),"data-visible":g||void 0,style:{top:y.top,left:y.left,maxWidth:c!==void 0?c:void 0},children:n});return e.jsxs("span",{ref:k,className:ml.wrapper,onMouseEnter:S,onMouseLeave:I,onFocus:S,onBlur:I,children:[M,op.createPortal(N,document.body)]})};zs.displayName="Tooltip";const K3="_root_v8mqg_9",Q3="_hover_v8mqg_21",nu={root:K3,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:Q3};function X3(n){return n instanceof Date||typeof n=="number"||typeof n=="string"}const J3=v.forwardRef(({visibility:n="always",align:s="start",time:a,timeFormat:i,className:c,children:u,...f},g)=>{const m=a==null?null:X3(a)?e.jsx(Xa,{value:a,format:i,inline:!0}):a,y=k=>{if(!v.isValidElement(k))return k;const b=k;if(b.type===zs)return b;const C=b.props["aria-label"];return C?e.jsx(zs,{content:C,placement:"top",delay:150,children:b}):b},x=v.Children.map(u,k=>{if(v.isValidElement(k)&&k.type===v.Fragment){const b=k.props.children;return v.Children.map(b,y)}return y(k)});return e.jsxs("div",{ref:g,"data-visibility":n,"data-align":s,className:ee(nu.root,nu[`align-${s}`],n==="hover"&&nu.hover,c),...f,children:[x,m]})});J3.displayName="AIMessageActions";const e5="_card_1apq1_17",t5="_header_1apq1_69",n5="_iconBadge_1apq1_74",r5="_iconInner_1apq1_89",o5="_headerText_1apq1_100",s5="_headerTopRow_1apq1_109",a5="_eyebrow_1apq1_115",i5="_title_1apq1_124",l5="_subtitle_1apq1_130",c5="_headerTrailing_1apq1_135",d5="_body_1apq1_141",u5="_footer_1apq1_152",p5="_footerEnd_1apq1_157",h5="_metaRow_1apq1_162",f5="_metaItem_1apq1_170",m5="_resultHero_1apq1_180",g5="_resultHeadline_1apq1_185",v5="_resultDetail_1apq1_191",x5="_clauses_1apq1_205",y5="_clause_1apq1_205",w5="_clauseLabel_1apq1_215",b5="_clauseBody_1apq1_225",j5="_badgeExecuting_1apq1_245",lt={card:e5,header:t5,iconBadge:n5,iconInner:r5,headerText:o5,headerTopRow:s5,eyebrow:a5,title:i5,subtitle:l5,headerTrailing:c5,body:d5,footer:u5,footerEnd:p5,metaRow:h5,metaItem:f5,resultHero:m5,resultHeadline:g5,resultDetail:v5,clauses:x5,clause:y5,clauseLabel:w5,clauseBody:b5,badgeExecuting:j5},ur=v.forwardRef(({tone:n="neutral",accent:s=!0,fill:a=!1,icon:i,eyebrow:c,title:u,subtitle:f,trailing:g,footer:m,footerEnd:y=!1,className:x,children:k,...b},C)=>{const L=c!=null||g!=null,S=L||u!=null||f!=null,I=i!=null||S;return e.jsxs("div",{ref:C,"data-tone":n,"data-accent":s||void 0,"data-fill":a||void 0,"data-icon":i!=null||void 0,className:ee(lt.card,x),...b,children:[I&&e.jsxs("div",{className:lt.header,children:[i!=null&&e.jsx("span",{className:ee(lt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:e.jsx("span",{className:lt.iconInner,children:i})}),S&&e.jsxs("div",{className:lt.headerText,children:[L&&e.jsxs("div",{className:lt.headerTopRow,children:[c!=null&&e.jsx("span",{className:lt.eyebrow,children:c}),g!=null&&e.jsx("span",{className:lt.headerTrailing,children:g})]}),u!=null&&e.jsx("span",{className:lt.title,children:u}),f!=null&&e.jsx("span",{className:lt.subtitle,children:f})]})]}),k!=null&&e.jsx("div",{className:lt.body,children:k}),m!=null&&e.jsx("div",{className:ee(lt.footer,y&&lt.footerEnd),children:m})]})});ur.displayName="UltronCard";const k5="_root_zkkgh_6",_5="_sm_zkkgh_24",C5="_md_zkkgh_33",S5="_lg_zkkgh_42",M5="_neutral_zkkgh_53",I5="_blue_zkkgh_66",N5="_azure_zkkgh_79",A5="_purple_zkkgh_92",T5="_pink_zkkgh_105",L5="_red_zkkgh_118",E5="_orange_zkkgh_131",R5="_yellow_zkkgh_144",$5="_matcha_zkkgh_157",P5="_green_zkkgh_170",D5="_subtle_zkkgh_184",z5="_outline_zkkgh_190",F5="_solid_zkkgh_196",O5="_dot_zkkgh_203",B5="_icon_zkkgh_212",H5="_dismiss_zkkgh_224",_o={root:k5,sm:_5,md:C5,lg:S5,neutral:M5,blue:I5,azure:N5,purple:A5,pink:T5,red:L5,orange:E5,yellow:R5,matcha:$5,green:P5,subtle:D5,outline:z5,solid:F5,dot:O5,icon:B5,dismiss:H5},Vs=({size:n=16,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})},U5={sm:10,md:12,lg:14},pt=v.forwardRef(({variant:n="subtle",color:s="neutral",size:a="md",dot:i,leadingIcon:c,dismissible:u,onDismiss:f,className:g,children:m,...y},x)=>e.jsxs("span",{ref:x,className:ee(_o.root,_o[a],_o[s],_o[n],g),...y,children:[i&&e.jsx("span",{className:_o.dot,"aria-hidden":"true"}),c&&e.jsx("span",{className:ee(_o.icon,"alloy-icon-slot"),"aria-hidden":"true",children:c}),m,u&&e.jsx("button",{type:"button",className:_o.dismiss,"aria-label":"Remove",onClick:k=>{k.stopPropagation(),f==null||f()},children:e.jsx(Vs,{size:U5[a]})})]}));pt.displayName="Tag";function Em({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Em.displayName="SlashCircle01Icon";const sp=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:[e.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})};sp.displayName="EyeIcon";function Ql({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Ql.displayName="Target01Icon";function Ja({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Ja.displayName="ClockIcon";const $o=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};$o.displayName="RefreshCw04Icon";const qt=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:[e.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:s,fill:"none"}),e.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})};qt.displayName="CheckCircleIcon";function ei({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}ei.displayName="Save01Icon";const W5={sm:11,md:12,lg:14},q5={ignored:{label:"Ignored",color:"neutral",Icon:Em},monitored:{label:"Monitored",color:"blue",Icon:sp},recommended:{label:"Recommended",color:"purple",Icon:Ql},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:Ja},executing:{label:"Executing",color:"azure",Icon:$o},completed:{label:"Completed",color:"green",Icon:qt},saved:{label:"Saved",color:"matcha",Icon:ei}},Po=v.forwardRef(({status:n,size:s="sm",label:a,className:i,...c},u)=>{const f=q5[n],g=f.Icon;return e.jsx(pt,{ref:u,color:f.color,size:s,variant:"subtle",leadingIcon:e.jsx(g,{size:W5[s]}),className:ee(n==="executing"&&lt.badgeExecuting,i),...c,children:a??f.label})});Po.displayName="UltronStatusBadge";function Rm({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Rm.displayName="Bell01Icon";const V5=v.forwardRef(({title:n,icon:s,eyebrow:a="Event",meta:i,status:c,tone:u="neutral",children:f,...g},m)=>e.jsx(ur,{ref:m,tone:u,eyebrow:a,title:n,icon:s??e.jsx(Rm,{size:14}),trailing:c?e.jsx(Po,{status:c}):void 0,...g,children:((i==null?void 0:i.length)||f)&&e.jsxs(e.Fragment,{children:[i!=null&&i.length?e.jsx("div",{className:lt.metaRow,children:i.map((y,x)=>e.jsxs("span",{className:lt.metaItem,children:[y.icon&&e.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:y.icon}),y.label]},x))}):null,f]})}));V5.displayName="UltronEventCard";const G5=v.forwardRef(({eyebrow:n="Understanding",icon:s,entities:a,tone:i="info",children:c,...u},f)=>e.jsxs(ur,{ref:f,tone:i,eyebrow:n,icon:s??e.jsx(np,{size:14}),...u,children:[c,a&&e.jsx("div",{className:lt.metaRow,children:a})]}));G5.displayName="UltronUnderstandingCard";const Z5={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},Y5=v.forwardRef(({eyebrow:n="Decision",icon:s,factors:a,tone:i="warning",children:c,...u},f)=>e.jsxs(ur,{ref:f,tone:i,eyebrow:n,icon:s??e.jsx(Ql,{size:14}),...u,children:[c,a!=null&&a.length?e.jsx("div",{className:lt.metaRow,children:a.map((g,m)=>e.jsx(pt,{size:"sm",color:Z5[i],variant:"subtle",children:g},m))}):null]}));Y5.displayName="UltronDecisionCard";const K5="_root_ou64w_8",Q5="_xs_ou64w_75",X5="_sm_ou64w_84",J5="_md_ou64w_93",e4="_lg_ou64w_102",t4="_xl_ou64w_111",n4="_iconOnly_ou64w_122",r4="_primary_ou64w_132",o4="_secondary_ou64w_148",s4="_tertiary_ou64w_167",a4="_ghost_ou64w_185",i4="_destructive_ou64w_203",l4="_destructiveSecondary_ou64w_221",c4="_artwork_ou64w_69",d4="_label_ou64w_254",u4="_spinner_ou64w_69",p4="_light_ou64w_281",pn={root:K5,xs:Q5,sm:X5,md:J5,lg:e4,xl:t4,iconOnly:n4,primary:r4,secondary:o4,tertiary:s4,ghost:a4,destructive:i4,destructiveSecondary:l4,artwork:c4,label:d4,spinner:u4,"alloy-spin":"_alloy-spin_ou64w_1",light:p4},h4={primary:pn.primary,secondary:pn.secondary,tertiary:pn.tertiary,ghost:pn.ghost,destructive:pn.destructive,"destructive-secondary":pn.destructiveSecondary},Ee=v.forwardRef(({variant:n="primary",size:s="md",loading:a=!1,leadingArtwork:i,trailingArtwork:c,iconOnly:u=!1,className:f,children:g,disabled:m,...y},x)=>{const k=m||a;return e.jsxs("button",{ref:x,className:ee(pn.root,h4[n],pn[s],u&&pn.iconOnly,f),disabled:k,"aria-busy":a||void 0,"data-loading":a||void 0,"data-variant":n,"data-size":s,...y,children:[a&&e.jsx("span",{className:pn.spinner,"aria-hidden":"true"}),!a&&u&&e.jsx("span",{className:ee(pn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:g}),!a&&!u&&e.jsxs(e.Fragment,{children:[i&&e.jsx("span",{className:ee(pn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:i}),g&&e.jsx("span",{className:pn.label,children:g}),c&&e.jsx("span",{className:ee(pn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:c})]})]})});Ee.displayName="Button";function $m({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}$m.displayName="XCircleIcon";const f4=v.forwardRef(({eyebrow:n="Recommendation",icon:s,actions:a,onIgnore:i,ignoreLabel:c="Ignore",tone:u="info",children:f,...g},m)=>{const y=e.jsxs(e.Fragment,{children:[a.map((x,k)=>e.jsx(Ee,{size:"sm",variant:x.variant??(k===0?"primary":"secondary"),leadingArtwork:x.icon,loading:x.loading,onClick:x.onClick,children:x.label},k)),i&&e.jsx(Ee,{size:"sm",variant:"ghost",leadingArtwork:e.jsx($m,{size:16}),onClick:i,children:c})]});return e.jsx(ur,{ref:m,tone:u,eyebrow:n,icon:s??e.jsx(Ql,{size:14}),footer:y,...g,children:f})});f4.displayName="UltronRecommendationCard";function Pm({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Pm.displayName="Lock01Icon";const m4=v.forwardRef(({title:n,eyebrow:s="Approval required",icon:a,approveLabel:i="Approve & send",onApprove:c,approving:u=!1,cancelLabel:f="Cancel",onCancel:g,editLabel:m="Edit",onEdit:y,tone:x="warning",children:k,...b},C)=>{const L=e.jsxs(e.Fragment,{children:[g&&e.jsx(Ee,{size:"md",variant:"ghost",onClick:g,children:f}),y&&e.jsx(Ee,{size:"md",variant:"secondary",onClick:y,children:m}),e.jsx(Ee,{size:"md",variant:"primary",leadingArtwork:e.jsx($n,{size:18}),loading:u,onClick:c,children:i})]});return e.jsx(ur,{ref:C,tone:x,eyebrow:s,title:n,icon:a??e.jsx(Pm,{size:14}),trailing:e.jsx(Po,{status:"awaiting-approval"}),footer:L,footerEnd:!0,...b,children:k})});m4.displayName="UltronApprovalCard";const g4=v.forwardRef(({eyebrow:n="Working",icon:s,steps:a,state:i="live",duration:c,tone:u="info",...f},g)=>e.jsx(ur,{ref:g,tone:u,eyebrow:n,icon:s??e.jsx($o,{size:14}),trailing:e.jsx(Po,{status:i==="done"?"completed":"executing"}),...f,children:e.jsx(rp,{state:i,duration:c,children:a.map((m,y)=>e.jsx(Kl,{type:m.type??"tool",status:m.status??"pending",detail:m.detail,subActivities:m.subActivities,children:m.label},y))})}));g4.displayName="UltronExecutionCard";const v4=v.forwardRef(({headline:n,detail:s,avatar:a,status:i="completed",tone:c="success",footer:u,...f},g)=>e.jsx(ur,{ref:g,tone:c,fill:!0,accent:!1,trailing:e.jsx(Po,{status:i}),footer:u,...f,children:e.jsxs("div",{className:lt.resultHero,children:[e.jsx("span",{className:ee(lt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:a??e.jsx(qt,{size:18})}),e.jsxs("div",{children:[e.jsx("div",{className:lt.resultHeadline,children:n}),s!=null&&e.jsx("div",{className:lt.resultDetail,children:s})]})]})}));v4.displayName="UltronResultCard";function Xl({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Xl.displayName="ZapIcon";const x4=v.forwardRef(({title:n="Want Ultron to handle this automatically next time?",eyebrow:s="Save as workflow",icon:a,saveLabel:i="Save as workflow",onSave:c,saving:u=!1,dismissLabel:f="Not now",onDismiss:g,tone:m="info",children:y,...x},k)=>{const b=e.jsxs(e.Fragment,{children:[e.jsx(Ee,{size:"md",variant:"primary",leadingArtwork:e.jsx(ei,{size:18}),loading:u,onClick:c,children:i}),g&&e.jsx(Ee,{size:"md",variant:"ghost",onClick:g,children:f})]});return e.jsx(ur,{ref:k,tone:m,fill:!0,accent:!1,eyebrow:s,title:n,icon:a??e.jsx(Xl,{size:14}),footer:b,...x,children:y})});x4.displayName="UltronWorkflowSaveCard";const ap=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};ap.displayName="GitBranch01Icon";function ru({label:n,children:s}){return e.jsxs("div",{className:lt.clause,children:[e.jsx("span",{className:lt.clauseLabel,children:n}),e.jsx("span",{className:lt.clauseBody,children:s})]})}const y4=v.forwardRef(({name:n,eyebrow:s="Workflow",icon:a,when:i,conditions:c,actions:u,status:f,footer:g,tone:m="info",...y},x)=>e.jsx(ur,{ref:x,tone:m,eyebrow:s,title:n,icon:a??e.jsx(ap,{size:14}),trailing:f?e.jsx(Po,{status:f}):void 0,footer:g,...y,children:e.jsxs("div",{className:lt.clauses,children:[e.jsx(ru,{label:"When",children:i}),e.jsx(ru,{label:"If",children:c}),e.jsx(ru,{label:"Then",children:u})]})}));y4.displayName="UltronWorkflowPreviewCard";const w4="_root_1nyuz_6",b4="_sm_1nyuz_20",j4="_md_1nyuz_29",k4="_lg_1nyuz_38",_4="_divider_1nyuz_48",C4="_interactive_1nyuz_53",S4="_disabled_1nyuz_60",M4="_destructive_1nyuz_64",I4="_selected_1nyuz_78",N4="_label_1nyuz_87",A4="_description_1nyuz_97",T4="_leadingSlot_1nyuz_101",L4="_trailingSlot_1nyuz_102",E4="_content_1nyuz_115",R4="_taSwitch_1nyuz_167",$4="_taSwitchThumb_1nyuz_188",P4="_taCheckbox_1nyuz_203",D4="_taRadio_1nyuz_226",z4="_taRadioDot_1nyuz_244",F4="_taExpand_1nyuz_252",O4="_taStatus_1nyuz_266",B4="_taStatus_success_1nyuz_273",H4="_taStatus_warning_1nyuz_274",U4="_taStatus_error_1nyuz_275",W4="_taStatus_info_1nyuz_276",At={root:w4,sm:b4,md:j4,lg:k4,divider:_4,interactive:C4,disabled:S4,destructive:M4,selected:I4,label:N4,description:A4,leadingSlot:T4,trailingSlot:L4,content:E4,taSwitch:R4,taSwitchThumb:$4,taCheckbox:P4,taRadio:D4,taRadioDot:z4,taExpand:F4,taStatus:O4,taStatus_success:B4,taStatus_warning:H4,taStatus_error:U4,taStatus_info:W4},Jn=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M9 6L15 12L9 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Jn.displayName="ChevronRightIcon";const ip=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};ip.displayName="ArrowUpRightIcon";const q4="_root_4qytd_5",V4="_neutral_4qytd_25",G4="_primary_4qytd_30",Z4="_success_4qytd_35",Y4="_warning_4qytd_40",K4="_error_4qytd_45",Q4="_info_4qytd_50",zf={root:q4,neutral:V4,primary:G4,success:Z4,warning:Y4,error:K4,info:Q4},Eo=v.forwardRef(({variant:n="neutral",className:s,children:a,...i},c)=>e.jsx("span",{ref:c,className:ee(zf.root,zf[n],s),...i,children:a}));Eo.displayName="Badge";const X4=({checked:n})=>e.jsx("span",{className:At.taSwitch,"data-checked":n||void 0,"aria-hidden":"true",children:e.jsx("span",{className:At.taSwitchThumb})}),J4=({checked:n})=>e.jsx("span",{className:At.taCheckbox,"data-checked":n||void 0,"aria-hidden":"true",children:n&&e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:e.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),ew=({checked:n})=>e.jsx("span",{className:At.taRadio,"data-checked":n||void 0,"aria-hidden":"true",children:n&&e.jsx("span",{className:At.taRadioDot})}),tw=({count:n,label:s})=>{const a=n!==void 0?String(n):s;return a?e.jsx(Eo,{"aria-hidden":"true",children:a}):null},nw=({expanded:n})=>e.jsx("span",{className:At.taExpand,"data-expanded":n||void 0,"aria-hidden":"true",children:e.jsx(Jn,{size:16,color:"currentColor"})}),rw=({variant:n})=>e.jsx("span",{className:ee(At.taStatus,At[`taStatus_${n}`]),"aria-hidden":"true"}),ow=new Set(["badge","status"]),pr=v.forwardRef(({label:n,description:s,leadingSlot:a,trailingSlot:i,trailingAction:c,checked:u,defaultChecked:f=!1,onCheckedChange:g,badgeCount:m,badgeLabel:y,expanded:x=!1,statusVariant:k="success",divider:b=!0,size:C="md",interactive:L,selected:S=!1,destructive:I=!1,disabled:M=!1,className:N,onClick:j,onKeyDown:_,...E},z)=>{const R=c==="switch"||c==="checkbox"||c==="radio",[F,X]=v.useState(f),Z=R?u!==void 0?u:F:!1,V=L||!!j||R||c!==void 0&&!ow.has(c),U=c==="switch"?"switch":c==="checkbox"?"checkbox":c==="radio"?"radio":V?"button":void 0,H=v.useCallback(Y=>{if(!M){if(R){const J=!Z;u===void 0&&X(J),g==null||g(J)}j==null||j(Y)}},[M,R,Z,u,g,j]),ne=v.useCallback(Y=>{V&&!M&&(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),H(Y)),_==null||_(Y)},[V,M,H,_]),K=i??(()=>{if(!c)return null;switch(c){case"chevron":return e.jsx(Jn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return e.jsx(ip,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return e.jsx(X4,{checked:Z});case"checkbox":return e.jsx(J4,{checked:Z});case"radio":return e.jsx(ew,{checked:Z});case"badge":return e.jsx(tw,{count:m,label:y});case"expand":return e.jsx(nw,{expanded:x});case"status":return e.jsx(rw,{variant:k});default:return null}})();return e.jsxs("div",{ref:z,role:U,tabIndex:V&&!M?0:void 0,"aria-checked":R?Z:void 0,"aria-selected":S||void 0,"aria-disabled":M||void 0,"data-selected":S||void 0,"data-disabled":M||void 0,"data-destructive":I||void 0,"data-trailing-action":c??void 0,className:ee(At.root,At[C],b&&At.divider,V&&At.interactive,S&&At.selected,I&&At.destructive,M&&At.disabled,N),onClick:M?void 0:H,onKeyDown:ne,...E,children:[a&&e.jsx("div",{className:At.leadingSlot,children:a}),e.jsxs("div",{className:At.content,children:[e.jsx("span",{className:At.label,children:n}),s&&e.jsx("span",{className:At.description,children:s})]}),K&&e.jsx("div",{className:At.trailingSlot,children:K})]})});pr.displayName="ListItem";const sw=v.forwardRef(({title:n,meta:s,icon:a,status:i,...c},u)=>e.jsx(pr,{ref:u,label:n,description:s,leadingSlot:a?e.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:a}):void 0,trailingSlot:e.jsx(Po,{status:i}),...c}));sw.displayName="UltronActivityStreamItem";const aw="_root_1sz1z_7",iw="_status_1sz1z_50",ou={root:aw,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:iw},Dm=v.forwardRef(({disabled:n=!1,size:s="md",escapeTarget:a,onEscape:i,className:c,children:u,...f},g)=>{const m=v.useRef(null),[y,x]=v.useState(""),k=v.Children.map(u,b=>{if(!v.isValidElement(b))return b;const C=b.props;return v.cloneElement(b,{groupDisabled:n||!!C.groupDisabled})});return v.useEffect(()=>{if(!a||!i)return;const b=C=>{C.key==="Escape"&&i()};return a.addEventListener("keydown",b),()=>a.removeEventListener("keydown",b)},[a,i]),v.useCallback(b=>x(b),[]),e.jsxs("div",{ref:g,"data-size":s,className:ee(ou.root,ou[`size-${s}`],c),...f,children:[k,e.jsx("span",{ref:m,className:ou.status,role:"status","aria-live":"polite",children:y})]})});Dm.displayName="ComposerActions";function su({size:n=24,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:[e.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})}const lp=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};lp.displayName="SearchSmIcon";const Al=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Al.displayName="Trash03Icon";const Es=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Es.displayName="ArrowNarrowRightIcon";function Cr({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}function Ha({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}function Vn({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}function au({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:[e.jsx("path",{d:"M8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M19.4 14H15.6C15.0399 14 14.7599 14 14.546 14.109C14.3578 14.2049 14.2049 14.3578 14.109 14.546C14 14.7599 14 15.0399 14 15.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V15.6C21 15.0399 21 14.7599 20.891 14.546C20.7951 14.3578 20.6422 14.2049 20.454 14.109C20.2401 14 19.9601 14 19.4 14Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})}function lw({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}const zm=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};zm.displayName="ChevronSelectorVerticalIcon";const Fm=({size:n=16,color:s="currentColor",...a})=>e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:e.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:s})});Fm.displayName="FeatherIcon";const Sr=({size:n=16,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[e.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:s}),e.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:s,strokeWidth:u,strokeLinecap:"round",strokeLinejoin:"round"})]})};Sr.displayName="ClipboardCheckIcon";const Ua=({size:n=16,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.25:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:s,strokeWidth:u})})};Ua.displayName="SettingsGearIcon";const Om=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M15 6L9 12L15 18",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Om.displayName="ChevronLeftIcon";const Bm=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M3 3L21 21",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})};Bm.displayName="EyeOffIcon";function Co({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:[e.jsx("path",{d:"M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9 21V15H15V21",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})]})}Co.displayName="HomeLineIcon";const Hm=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Hm.displayName="StopIcon";const Um=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Um.displayName="RecordingIcon";const Wm=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Wm.displayName="BankIcon";function cp({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}cp.displayName="ArrowNarrowUpIcon";function qm({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}qm.displayName="ArrowNarrowDownIcon";function Vm({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Vm.displayName="Microphone02Icon";const dp=({size:n=16,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};dp.displayName="AlertTriangleIcon";function cw({size:n=16,color:s="currentColor",...a}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{d:"M12 2V22",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Gm=({size:n=16,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Gm.displayName="Map01Icon";const Dl=({size:n=24,color:s="currentColor",strokeWidth:a,...i})=>{const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M19.7479 5.00005C21.1652 6.97029 22 9.38768 22 12C22 14.6124 21.1652 17.0298 19.7479 19M15.7453 8.00005C16.5362 9.13388 17 10.5128 17 12C17 13.4873 16.5362 14.8662 15.7453 16M9.63432 4.36573L6.46863 7.53142C6.29568 7.70437 6.2092 7.79085 6.10828 7.85269C6.01881 7.90752 5.92127 7.94792 5.81923 7.97242C5.70414 8.00005 5.58185 8.00005 5.33726 8.00005H3.6C3.03995 8.00005 2.75992 8.00005 2.54601 8.10904C2.35785 8.20492 2.20487 8.3579 2.10899 8.54606C2 8.75997 2 9.04 2 9.60005V14.4C2 14.9601 2 15.2401 2.10899 15.454C2.20487 15.6422 2.35785 15.7952 2.54601 15.8911C2.75992 16 3.03995 16 3.6 16H5.33726C5.58185 16 5.70414 16 5.81923 16.0277C5.92127 16.0522 6.01881 16.0926 6.10828 16.1474C6.2092 16.2093 6.29568 16.2957 6.46863 16.4687L9.63431 19.6344C10.0627 20.0627 10.2769 20.2769 10.4608 20.2914C10.6203 20.304 10.7763 20.2394 10.8802 20.1177C11 19.9774 11 19.6745 11 19.0687V4.93142C11 4.3256 11 4.0227 10.8802 3.88243C10.7763 3.76073 10.6203 3.69614 10.4608 3.7087C10.2769 3.72317 10.0627 3.93736 9.63432 4.36573Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})};Dl.displayName="VolumeMaxIcon";function Zm({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Zm.displayName="CheckVerified01Icon";function Tl({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Tl.displayName="Download01Icon";function Ym({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M11 4.00001H6.8C5.11984 4.00001 4.27976 4.00001 3.63803 4.32699C3.07354 4.61461 2.6146 5.07356 2.32698 5.63804C2 6.27978 2 7.11986 2 8.80001V17.2C2 18.8802 2 19.7203 2.32698 20.362C2.6146 20.9265 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7203 20 18.8802 20 17.2V13M7.99997 16H9.67452C10.1637 16 10.4083 16 10.6385 15.9448C10.8425 15.8958 11.0376 15.815 11.2166 15.7053C11.4184 15.5816 11.5914 15.4087 11.9373 15.0628L21.5 5.50001C22.3284 4.67159 22.3284 3.32844 21.5 2.50001C20.6716 1.67159 19.3284 1.67159 18.5 2.50001L8.93723 12.0628C8.59133 12.4087 8.41838 12.5816 8.29469 12.7834C8.18504 12.9624 8.10423 13.1575 8.05523 13.3616C7.99997 13.5917 7.99997 13.8363 7.99997 14.3255V16Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Ym.displayName="Edit05Icon";function Km({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Km.displayName="LinkExternal01Icon";function Qm({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}Qm.displayName="MessageCircle02Icon";function up({size:n=16,color:s="currentColor",strokeWidth:a,...i}){const c=typeof n=="number"?n:parseFloat(n),u=a??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...i,children:e.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:s,strokeLinecap:"round",strokeLinejoin:"round"})})}up.displayName="Pin01Icon";const dw="_base_i93xz_11",uw="_icon_i93xz_45",pw="_sendReady_i93xz_65",hw="_sendStreaming_i93xz_66",fw="_sendDisabled_i93xz_67",mw="_sendError_i93xz_68",gw="_attachIdle_i93xz_131",vw="_attachDisabled_i93xz_145",xw="_attachError_i93xz_152",yw="_voiceIdle_i93xz_165",ww="_voiceRecording_i93xz_179",bw="_voiceDisabled_i93xz_189",jw="_iconStack_i93xz_200",kw="_iconLayer_i93xz_209",It={base:dw,icon:uw,sendReady:pw,sendStreaming:hw,sendDisabled:fw,sendError:mw,attachIdle:gw,attachDisabled:vw,attachError:xw,voiceIdle:yw,voiceRecording:ww,voiceDisabled:bw,iconStack:jw,iconLayer:kw},_w={hidden:void 0,ready:It.sendReady,"disabled-invalid":It.sendDisabled,streaming:It.sendStreaming,error:It.sendError},Cw=(n,s,a)=>{switch(n){case"ready":return"Send message";case"disabled-invalid":return s?`Cannot send: ${s}`:"Cannot send";case"streaming":return"Stop generating";case"error":return a?`Retry sending: ${a}`:"Retry sending";case"hidden":return""}},Xm=v.forwardRef(({state:n,onSend:s,onStop:a,onRetry:i,invalidReason:c,errorMessage:u,groupDisabled:f,className:g,style:m,...y},x)=>{const k=v.useRef(null),b=v.useRef(null),C=v.useCallback(j=>{b.current=j,typeof x=="function"?x(j):x&&(x.current=j)},[x]),L=v.useCallback(()=>{if(n==="ready"){s==null||s();return}if(n==="streaming"){a==null||a();return}if(n==="error"){const j=b.current;j&&(j.dataset.pressed="true",k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{j.dataset.pressed="false"},140)),i==null||i()}},[n,s,a,i]);if(n==="hidden")return null;const S=!f&&(n==="ready"||n==="streaming"||n==="error"),I=Cw(n,c,u),M=n==="disabled-invalid"?c??"Cannot send":n==="error"?u??"Send failed — click to retry":null,N=e.jsx("button",{ref:C,type:"button","data-composer-action":"send","data-state":n,className:ee(It.base,_w[n],g),style:m,"aria-label":I,disabled:!S,onClick:L,...y,children:e.jsxs("span",{className:It.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[e.jsx("span",{className:It.iconLayer,"data-active":n==="ready"||n==="disabled-invalid"?"true":"false",children:e.jsx(cp,{size:"100%",strokeWidth:2})}),e.jsx("span",{className:It.iconLayer,"data-active":n==="streaming"?"true":"false",children:e.jsx(Hm,{size:"100%",strokeWidth:1.75})}),e.jsx("span",{className:It.iconLayer,"data-active":n==="error"?"true":"false",children:e.jsx($o,{size:"100%",strokeWidth:2})})]})});return M?e.jsx(zs,{content:M,placement:"top",children:N}):N});Xm.displayName="ComposerSendButton";const Sw={idle:It.attachIdle,disabled:It.attachDisabled,error:It.attachError},Mw=(n,s,a)=>{switch(n){case"idle":return"Add attachment";case"disabled":return s?`Attachments unavailable: ${s}`:"Attachments unavailable";case"error":return a?`Attachment failed: ${a}`:"Attachment failed"}},Iw=v.forwardRef(({state:n,onSelect:s,accept:a,multiple:i=!0,disabledReason:c,errorMessage:u,groupDisabled:f,className:g,style:m,...y},x)=>{const k=v.useRef(null),b=v.useCallback(()=>{var N;(n==="idle"||n==="error")&&((N=k.current)==null||N.click())},[n]),C=v.useCallback(N=>{const j=N.target.files;j&&j.length>0&&(s==null||s(j)),N.target.value=""},[s]),L=!f&&n!=="disabled",S=Mw(n,c,u),I=n==="disabled"?c??"Attachments unavailable":n==="error"?u??"Attachment failed":null,M=e.jsxs("button",{ref:x,type:"button","data-composer-action":"attachment","data-state":n,className:ee(It.base,Sw[n],g),style:m,"aria-label":S,disabled:!L,onClick:b,...y,children:[e.jsx("span",{className:It.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:e.jsx(qs,{size:"100%",strokeWidth:2})}),e.jsx("input",{ref:k,type:"file",accept:a,multiple:i,onChange:C,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return I?e.jsx(zs,{content:I,placement:"top",children:M}):M});Iw.displayName="ComposerAttachment";const Nw={idle:It.voiceIdle,recording:It.voiceRecording,disabled:It.voiceDisabled},Aw=(n,s)=>{switch(n){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return s?`Voice unavailable: ${s}`:"Voice unavailable"}},Jm=v.forwardRef(({state:n,onStartRecording:s,onStopRecording:a,disabledReason:i,groupDisabled:c,className:u,style:f,...g},m)=>{const y=v.useCallback(()=>{if(n==="idle"){s==null||s();return}if(n==="recording"){a==null||a();return}},[n,s,a]),x=!c&&n!=="disabled",k=Aw(n,i),b=n==="disabled"?i??"Voice unavailable":null,C=e.jsx("button",{ref:m,type:"button","data-composer-action":"voice","data-state":n,className:ee(It.base,Nw[n],u),style:f,"aria-label":k,"aria-pressed":n==="recording"||void 0,disabled:!x,onClick:y,...g,children:e.jsxs("span",{className:It.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[e.jsx("span",{className:It.iconLayer,"data-active":n!=="recording"?"true":"false",children:e.jsx(Vm,{size:"100%",strokeWidth:1.5})}),e.jsx("span",{className:It.iconLayer,"data-active":n==="recording"?"true":"false",children:e.jsx(Um,{size:"100%",strokeWidth:1.5})})]})});return b?e.jsx(zs,{content:b,placement:"top",children:C}):C});Jm.displayName="ComposerVoiceButton";const Tw=v.forwardRef(({value:n,onChange:s,onSubmit:a,placeholder:i="Ask Ultron…",sending:c=!1,disabled:u=!1,voice:f=!0,maxRows:g=4,radius:m="lg",leadingActions:y,className:x},k)=>{const b=c?"streaming":n.trim().length===0?"hidden":"ready";return e.jsx(Mm,{className:x,style:{flex:"0 0 auto"},children:e.jsx(Im,{ref:k,value:n,onChange:s,onSubmit:a,placeholder:i,maxRows:g,radius:m,disabled:u,children:e.jsxs(Dm,{size:"md",disabled:u,children:[y,f&&e.jsx(Jm,{state:u?"disabled":"idle"}),e.jsx(Xm,{state:b,onSend:a,onStop:a})]})})})});Tw.displayName="UltronCommandBar";const Lw=v.forwardRef(({stages:n,state:s="live",duration:a,...i},c)=>e.jsx(rp,{ref:c,state:s,duration:a,...i,children:n.map((u,f)=>e.jsx(Kl,{type:u.type??"content",status:u.status??"pending",icon:u.icon,detail:u.detail,children:u.label},f))}));Lw.displayName="UltronThreadTimeline";const Ew="_root_ghwhu_10",Rw="_badge_ghwhu_27",$w="_badgeIcon_ghwhu_38",Pw="_green_ghwhu_59",Dw="_yellow_ghwhu_60",zw="_matcha_ghwhu_61",Fw="_purple_ghwhu_62",Ow="_blue_ghwhu_63",Bw="_azure_ghwhu_64",Hw="_red_ghwhu_65",Uw="_orange_ghwhu_66",Ww="_pink_ghwhu_67",qw="_slate_ghwhu_68",Vw="_content_ghwhu_73",Gw="_label_ghwhu_83",Zw="_valueRow_ghwhu_97",Yw="_change_ghwhu_106",Kw="_value_ghwhu_97",kr={root:Ew,badge:Rw,badgeIcon:$w,green:Pw,yellow:Dw,matcha:zw,purple:Fw,blue:Ow,azure:Bw,red:Hw,orange:Uw,pink:Ww,slate:qw,content:Vw,label:Gw,valueRow:Zw,change:Yw,value:Kw},eg=v.forwardRef(({color:n="slate",icon:s,label:a,value:i,change:c,className:u,...f},g)=>e.jsxs("div",{ref:g,className:ee(kr.root,u),...f,children:[e.jsx("div",{className:ee(kr.badge,kr[n]),"aria-hidden":"true",children:e.jsx("span",{className:kr.badgeIcon,children:s})}),e.jsxs("div",{className:kr.content,children:[e.jsx("span",{className:kr.label,children:a}),e.jsxs("div",{className:kr.valueRow,children:[e.jsx("span",{className:kr.value,children:i}),c!=null&&e.jsx("span",{className:kr.change,children:c})]})]})]}));eg.displayName="DataCard";const Qw="_root_d0j6n_7",Xw="_icon_d0j6n_21",Jw="_text_d0j6n_33",e6="_positive_d0j6n_41",t6="_warning_d0j6n_45",n6="_negative_d0j6n_49",gl={root:Qw,icon:Xw,text:Jw,positive:e6,warning:t6,negative:n6};function r6(n){return n==="up"?"positive":"negative"}const Jl=v.forwardRef((n,s)=>{const{mode:a,value:i,className:c,...u}=n,f=a==="trend"?n.severity??r6(n.trend):n.severity,{severity:g,...m}=u,y=a==="trend"?(({trend:k,severity:b,...C})=>C)(m):m,x=a==="trend"?n.trend==="up"?cp:qm:null;return e.jsxs("span",{ref:s,className:ee(gl.root,gl[f],c),...y,children:[e.jsx("span",{className:gl.text,children:i}),x&&e.jsx("span",{className:gl.icon,"aria-hidden":"true",children:e.jsx(x,{size:14})})]})});Jl.displayName="ValueChangeLabel";const o6="_root_1lq10_1",s6="_horizontal_1lq10_9",a6="_vertical_1lq10_15",i6="_solid_1lq10_32",l6="_dashed_1lq10_36",vl={root:o6,horizontal:s6,vertical:a6,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:i6,dashed:l6},c6=v.forwardRef(({thickness:n=1,orientation:s="horizontal",variant:a="solid",className:i,...c},u)=>e.jsx("hr",{ref:u,role:"separator","aria-orientation":s,className:ee(vl.root,vl[`thickness-${n}`],vl[s],vl[a],i),...c}));c6.displayName="Divider";const d6="_overlay_vxgy2_9",u6="_dialogOverlayIn_vxgy2_1",p6="_dialogOverlayOut_vxgy2_1",h6="_dialog_vxgy2_38",f6="_dialogIn_vxgy2_1",m6="_dialogOut_vxgy2_1",g6="_sm_vxgy2_88",v6="_md_vxgy2_89",x6="_lg_vxgy2_90",y6="_header_vxgy2_95",w6="_title_vxgy2_107",b6="_closeBtn_vxgy2_120",j6="_content_vxgy2_152",k6="_footer_vxgy2_163",no={overlay:d6,dialogOverlayIn:u6,dialogOverlayOut:p6,dialog:h6,dialogIn:f6,dialogOut:m6,sm:g6,md:v6,lg:x6,header:y6,title:w6,closeBtn:b6,content:j6,footer:k6},ec=v.forwardRef(({onClose:n,children:s,className:a,...i},c)=>e.jsxs("div",{ref:c,className:ee(no.header,a),...i,children:[e.jsx("span",{className:no.title,children:s}),n&&e.jsx("button",{type:"button",className:no.closeBtn,onClick:n,"aria-label":"Close",children:e.jsx(Vs,{size:16})})]}));ec.displayName="DialogHeader";const tc=v.forwardRef(({children:n,className:s,...a},i)=>e.jsx("div",{ref:i,className:ee(no.content,s),...a,children:n}));tc.displayName="DialogContent";const nc=v.forwardRef(({children:n,className:s,...a},i)=>e.jsx("div",{ref:i,className:ee(no.footer,s),...a,children:n}));nc.displayName="DialogFooter";function pp({open:n,onClose:s,size:a="sm",children:i,"aria-label":c,"aria-labelledby":u}){const f=v.useRef(null),g=180,[m,y]=v.useState(n);return v.useEffect(()=>{if(n){y(!0);return}const x=setTimeout(()=>y(!1),g);return()=>clearTimeout(x)},[n]),v.useEffect(()=>{if(!n)return;const x=k=>{k.key==="Escape"&&s()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[n,s]),v.useEffect(()=>{if(!n)return;const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=x}},[n]),m?op.createPortal(e.jsx("div",{className:no.overlay,"data-state":n?"open":"closed",role:"dialog","aria-modal":"true","aria-label":c,"aria-labelledby":u,onMouseDown:x=>{x.target===x.currentTarget&&s()},children:e.jsx("div",{ref:f,className:ee(no.dialog,no[a]),"data-state":n?"open":"closed",children:i})}),document.body):null}const _6="_root_1dntq_7",C6="_badge_1dntq_57",S6="_badgeIconSlot_1dntq_74",M6="_content_1dntq_82",I6="_text_1dntq_90",N6="_title_1dntq_99",A6="_description_1dntq_120",T6="_actions_1dntq_131",L6="_dot_1dntq_137",E6="_actionLink_1dntq_144",R6="_primaryAction_1dntq_162",$6="_trailing_1dntq_170",Kt={root:_6,badge:C6,badgeIconSlot:S6,content:M6,text:I6,title:N6,description:A6,actions:T6,dot:L6,actionLink:E6,primaryAction:R6,trailing:$6},P6=()=>e.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),D6=()=>e.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),z6=()=>e.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Ff=()=>e.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),F6={error:P6,warning:z6,success:D6,info:Ff,feature:Ff},tg=v.forwardRef(({status:n="info",variant:s="lighter",size:a="sm",title:i,description:c,action:u,onAction:f,learnMore:g,onLearnMore:m,onDismiss:y,className:x,...k},b)=>{const C=F6[n],L=a==="lg",S=y?e.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,onClick:y,"aria-label":"Dismiss",children:e.jsx(Vs,{size:12})}):null;return e.jsxs("div",{ref:b,role:"alert",className:ee(Kt.root,x),"data-status":n,"data-variant":s,"data-size":a,...k,children:[e.jsx("span",{className:Kt.badge,"aria-hidden":"true",children:e.jsx("span",{className:ee("alloy-icon-slot",Kt.badgeIconSlot),children:e.jsx(C,{})})}),L?e.jsxs("div",{className:Kt.content,children:[e.jsxs("div",{className:Kt.text,children:[e.jsx("p",{className:Kt.title,children:i}),c&&e.jsx("p",{className:Kt.description,children:c})]}),(u||g)&&e.jsxs("div",{className:Kt.actions,children:[u&&e.jsx("button",{type:"button",className:ee(Kt.actionLink,Kt.primaryAction),onClick:f,children:u}),u&&g&&e.jsx("span",{className:Kt.dot,"aria-hidden":"true",children:"·"}),g&&e.jsx("button",{type:"button",className:Kt.actionLink,onClick:m,children:g})]})]}):e.jsx("p",{className:Kt.title,children:i}),L?S:(u||y)&&e.jsxs("div",{className:Kt.trailing,children:[u&&e.jsx("button",{type:"button",className:ee(Kt.actionLink,Kt.primaryAction),onClick:f,children:u}),S]})]})});tg.displayName="Alert";const O6="_stack_x4xl7_11",B6="_item_x4xl7_28",H6="_itemExiting_x4xl7_33",Du={stack:O6,item:B6,itemExiting:H6},ng=v.createContext(null);function rg(){const n=v.useContext(ng);if(!n)throw new Error("useToast must be used inside <ToastProvider>");const s=v.useCallback(a=>n.addToast(a),[n]);return s.success=(a,i)=>n.addToast({...i,title:a,status:"success"}),s.error=(a,i)=>n.addToast({...i,title:a,status:"error"}),s.warning=(a,i)=>n.addToast({...i,title:a,status:"warning"}),s.info=(a,i)=>n.addToast({...i,title:a,status:"info"}),{toast:s}}function U6({id:n,title:s,description:a,status:i,variant:c,size:u,action:f,onAction:g,duration:m,exiting:y,onRemove:x}){const k=v.useCallback(()=>x(n),[n,x]);return e.jsx("div",{className:ee(Du.item,y&&Du.itemExiting),onAnimationEnd:y?k:void 0,children:e.jsx(tg,{status:i,variant:c,size:u,title:s,description:a,action:f,onAction:g,onDismiss:k,style:{width:"100%"}})})}function W6({toasts:n,onStartExit:s,onRemove:a}){return v.useEffect(()=>{const i=[];return n.forEach(c=>{c.duration>0&&!c.exiting&&i.push(setTimeout(()=>s(c.id),c.duration))}),()=>i.forEach(clearTimeout)},[n,s]),n.length===0?null:op.createPortal(e.jsx("div",{className:Du.stack,"aria-live":"polite","aria-atomic":"false",children:n.map(i=>e.jsx(U6,{...i,onRemove:a},i.id))}),document.body)}function q6({children:n}){const[s,a]=v.useState([]),i=v.useRef(0),c=v.useCallback(g=>{const m=`toast-${++i.current}`;return a(y=>[...y,{id:m,title:g.title,description:g.description,status:g.status??"info",variant:g.variant??"stroke",size:g.size??"sm",action:g.action,onAction:g.onAction,duration:g.duration??4e3,exiting:!1}]),m},[]),u=v.useCallback(g=>{a(m=>m.map(y=>y.id===g?{...y,exiting:!0}:y))},[]),f=v.useCallback(g=>{a(m=>m.filter(y=>y.id!==g))},[]);return e.jsxs(ng.Provider,{value:{addToast:c,removeToast:u},children:[n,e.jsx(W6,{toasts:s,onStartExit:u,onRemove:f})]})}const V6="_root_1s0ek_5",G6="_list_1s0ek_11",Z6="_item_1s0ek_23",Y6="_separator_1s0ek_31",K6="_link_1s0ek_47",Q6="_current_1s0ek_68",X6="_iconSlot_1s0ek_76",lr={root:V6,list:G6,item:Z6,separator:Y6,link:K6,current:Q6,iconSlot:X6},J6=()=>e.jsx("span",{className:lr.separator,"aria-hidden":"true",children:"/"}),e8=()=>e.jsx("span",{className:lr.separator,"aria-hidden":"true",children:e.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),Fa=v.forwardRef(({items:n,separator:s="slash",className:a,...i},c)=>{const u=s==="chevron"?e8:J6;return e.jsx("nav",{ref:c,"aria-label":"Breadcrumb",className:ee(lr.root,a),...i,children:e.jsx("ol",{className:lr.list,children:n.map((f,g)=>{const m=g===n.length-1,y=!m&&(!!f.href||!!f.onClick);return e.jsxs("li",{className:lr.item,children:[g>0&&e.jsx(u,{}),y?e.jsxs("a",{href:f.href,onClick:f.onClick,className:lr.link,"aria-label":f.label,children:[f.icon&&e.jsx("span",{className:ee(lr.iconSlot,"alloy-icon-slot"),children:f.icon}),e.jsx("span",{children:f.label})]}):e.jsxs("span",{className:ee(lr.link,m&&lr.current),"aria-current":m?"page":void 0,children:[f.icon&&e.jsx("span",{className:ee(lr.iconSlot,"alloy-icon-slot"),children:f.icon}),e.jsx("span",{children:f.label})]})]},g)})})})});Fa.displayName="Breadcrumb";const t8="_root_139vz_6",n8="_divider_139vz_14",r8="_item_139vz_19",o8="_label_139vz_25",s8="_description_139vz_26",a8="_chevron_139vz_27",i8="_iconSlot_139vz_28",l8="_hitTarget_139vz_32",c8="_size_sm_139vz_37",d8="_size_md_139vz_43",u8="_size_lg_139vz_49",p8="_header_139vz_59",h8="_headerContent_139vz_59",f8="_checkboxWrap_139vz_60",m8="_labelBlock_139vz_157",g8="_trailingSlot_139vz_60",v8="_body_139vz_199",x8="_bodyInner_139vz_209",y8="_bodyContent_139vz_214",Wt={root:t8,divider:n8,item:r8,label:o8,description:s8,chevron:a8,iconSlot:i8,hitTarget:l8,size_sm:c8,size_md:d8,size_lg:u8,header:p8,headerContent:h8,checkboxWrap:f8,labelBlock:m8,trailingSlot:g8,body:v8,bodyInner:x8,bodyContent:y8},w8="_root_17t97_6",b8="_disabled_17t97_12",j8="_sm_17t97_18",k8="_md_17t97_26",_8="_lg_17t97_34",C8="_controlWrap_17t97_43",S8="_input_17t97_52",M8="_box_17t97_67",I8="_boxChecked_17t97_96",N8="_boxError_17t97_106",A8="_labelWrap_17t97_116",T8="_label_17t97_116",L8="_error_17t97_138",E8="_required_17t97_140",R8="_description_17t97_145",bn={root:w8,disabled:b8,sm:j8,md:k8,lg:_8,controlWrap:C8,input:S8,box:M8,boxChecked:I8,boxError:N8,labelWrap:A8,label:T8,error:L8,required:E8,description:R8},og=v.forwardRef(({checked:n,defaultChecked:s=!1,indeterminate:a=!1,onChange:i,disabled:c,error:u,size:f="md",label:g,description:m,id:y,name:x,value:k,required:b,className:C},L)=>{const S=v.useId(),I=y??S,M=v.useRef(null);v.useEffect(()=>{M.current&&(M.current.indeterminate=a)},[a]);const N=n!==void 0,[j,_]=v.useState(s),E=N?n:j,z=F=>{N||_(F.target.checked),i==null||i(F.target.checked)},R=E||a;return e.jsxs("div",{className:ee(bn.root,bn[f],c&&bn.disabled,u&&bn.error,C),children:[e.jsxs("div",{className:bn.controlWrap,children:[e.jsx("input",{ref:F=>{M.current=F,typeof L=="function"?L(F):L&&(L.current=F)},type:"checkbox",id:I,name:x,value:k,checked:E,disabled:c,required:b,"aria-invalid":u||void 0,onChange:z,className:bn.input}),e.jsx("span",{className:ee(bn.box,R&&bn.boxChecked,u&&bn.boxError),"aria-hidden":"true",children:a?e.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:e.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):E?e.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:e.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(g||m)&&e.jsxs("div",{className:bn.labelWrap,children:[g&&e.jsxs("label",{htmlFor:I,className:bn.label,children:[g,b&&e.jsx("span",{className:bn.required,"aria-hidden":"true",children:" *"})]}),m&&e.jsx("span",{className:bn.description,children:m})]})]})});og.displayName="Checkbox";const sg=v.createContext(null),zu=v.createContext(0),$8=v.forwardRef(({type:n="multiple",collapsible:s=!0,value:a,defaultValue:i,onValueChange:c,divider:u=!0,size:f="md",disabled:g=!1,className:m,children:y,...x},k)=>{const b=v.useMemo(()=>Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set,[]),[C,L]=v.useState(b),S=a!==void 0,I=v.useMemo(()=>S?Array.isArray(a)?new Set(a):typeof a=="string"?new Set([a]):new Set:C,[S,a,C]),M=v.useCallback(_=>I.has(_),[I]),N=v.useCallback(_=>{const E=new Set(I);n==="single"?E.has(_)?s&&E.delete(_):(E.clear(),E.add(_)):E.has(_)?E.delete(_):E.add(_),S||L(E),c&&c(n==="single"?E.values().next().value??"":Array.from(E))},[I,n,s,S,c]),j=v.useMemo(()=>({type:n,collapsible:s,size:f,disabled:g,isExpanded:M,toggle:N}),[n,s,f,g,M,N]);return e.jsx("div",{ref:k,"data-accordion-root":"","data-divider":u||void 0,"data-disabled":g||void 0,"data-size":f,className:ee(Wt.root,u&&Wt.divider,m),...x,children:e.jsx(sg.Provider,{value:j,children:e.jsx(zu.Provider,{value:0,children:y})})})});$8.displayName="Accordion";function xl(n,s){const a=n.closest("[data-accordion-root]");if(!a)return;const i=n.getAttribute("data-accordion-depth"),c=Array.from(a.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${i}"]`)).filter(g=>g.closest("[data-accordion-root]")===a);if(c.length===0)return;const u=c.indexOf(n);let f;switch(s){case"first":f=c[0];break;case"last":f=c[c.length-1];break;case"next":f=c[(u+1)%c.length];break;case"prev":f=c[(u-1+c.length)%c.length];break}f.focus()}const P8=v.forwardRef(({value:n,label:s,description:a,icon:i,leadingSlot:c,trailingSlot:u,selectable:f=!1,checked:g,defaultChecked:m=!1,indeterminate:y=!1,onCheckedChange:x,expanded:k,defaultExpanded:b=!1,onExpandedChange:C,disabled:L=!1,size:S,className:I,children:M,...N},j)=>{const _=v.useContext(sg),E=v.useContext(zu),z=_!==null,R=S??(_==null?void 0:_.size)??"md",F=L||(_==null?void 0:_.disabled)||!1,[X,Z]=v.useState(b);let V;z?V=n!==void 0?_.isExpanded(n):!1:k!==void 0?V=k:V=X;const U=v.useCallback(()=>{if(F)return;if(z){if(n===void 0)return;const A=_.isExpanded(n);_.toggle(n);const P=_.type==="single"&&!_.collapsible&&A?!0:!A;C==null||C(P);return}const $=!V;k===void 0&&Z($),C==null||C($)},[F,z,_,n,V,k,C]),H=v.useCallback($=>x==null?void 0:x($),[x]),ne=v.useCallback($=>{if($.key==="Enter"||$.key===" "){$.preventDefault(),U();return}if(z)switch($.key){case"ArrowDown":$.preventDefault(),xl($.currentTarget,"next");break;case"ArrowUp":$.preventDefault(),xl($.currentTarget,"prev");break;case"Home":$.preventDefault(),xl($.currentTarget,"first");break;case"End":$.preventDefault(),xl($.currentTarget,"last");break}},[U,z]),K=v.useId(),Y=`${K}-header`,J=`${K}-body`,q=R==="sm"?16:R==="md"?18:20,B=c??e.jsxs(e.Fragment,{children:[f&&e.jsx("span",{className:Wt.checkboxWrap,children:e.jsx(og,{size:R,checked:g,defaultChecked:m,indeterminate:y,disabled:F,onChange:H})}),i&&e.jsx("span",{className:Wt.iconSlot,"aria-hidden":"true",children:i})]});return e.jsxs("div",{ref:j,"data-accordion-item":"","data-expanded":V||void 0,"data-disabled":F||void 0,"data-size":R,"data-depth":E,className:ee(Wt.item,Wt[`size_${R}`],I),style:{"--accordion-depth":E},...N,children:[e.jsxs("div",{className:Wt.header,children:[e.jsx("button",{type:"button",id:Y,"data-accordion-header-button":"","data-accordion-depth":E,className:Wt.hitTarget,"aria-expanded":V,"aria-controls":J,"aria-disabled":F||void 0,disabled:F,onClick:U,onKeyDown:ne}),e.jsxs("div",{className:Wt.headerContent,children:[e.jsx("span",{className:Wt.chevron,"aria-hidden":"true",children:e.jsx(Jn,{size:q,color:"currentColor"})}),B,e.jsxs("div",{className:Wt.labelBlock,children:[e.jsx("span",{className:Wt.label,children:s}),a&&e.jsx("span",{className:Wt.description,children:a})]}),u&&e.jsx("div",{className:Wt.trailingSlot,children:u})]})]}),e.jsx("div",{id:J,role:"region","aria-labelledby":Y,className:Wt.body,"aria-hidden":!V,children:e.jsx("div",{className:Wt.bodyInner,children:e.jsx("div",{className:Wt.bodyContent,children:e.jsx(zu.Provider,{value:E+1,children:M})})})})]})});P8.displayName="AccordionItem";const D8="_root_2hiai_7",z8="_fullWidth_2hiai_12",F8="_panel_2hiai_19",O8="_panelInner_2hiai_73",B8="_item_2hiai_81",H8="_groupHeading_2hiai_87",U8="_groupHeadingLabel_2hiai_94",W8="_groupHeadingCollapsible_2hiai_106",q8="_groupChevron_2hiai_119",V8="_groupDivider_2hiai_133",cr={root:D8,fullWidth:z8,panel:F8,panelInner:O8,item:B8,groupHeading:H8,groupHeadingLabel:U8,groupHeadingCollapsible:W8,groupChevron:q8,groupDivider:V8};function G8({group:n,size:s,closeOnSelect:a,onClose:i}){const[c,u]=v.useState(n.defaultExpanded??!0);return e.jsxs("div",{children:[n.heading&&e.jsxs("div",{className:ee(cr.groupHeading,n.collapsible&&cr.groupHeadingCollapsible),onClick:n.collapsible?()=>u(f=>!f):void 0,"aria-expanded":n.collapsible?c:void 0,children:[e.jsx("span",{className:cr.groupHeadingLabel,children:n.heading}),n.collapsible&&e.jsx("span",{className:cr.groupChevron,"data-expanded":c||void 0,"aria-hidden":"true",children:e.jsx(Jn,{size:12})})]}),c&&e.jsx("div",{role:"group","aria-label":n.heading,children:n.options.map((f,g)=>{const m=f.trailingAction==="switch"||f.trailingAction==="checkbox"||f.trailingAction==="radio";return e.jsx(pr,{role:"menuitem",size:s,label:f.label,description:f.description,leadingSlot:f.leadingSlot,trailingAction:f.trailingAction,trailingSlot:f.trailingSlot,disabled:f.disabled,destructive:f.destructive,selected:f.selected,checked:f.checked,defaultChecked:f.defaultChecked,onCheckedChange:f.onCheckedChange,badgeCount:f.badgeCount,badgeLabel:f.badgeLabel,expanded:f.expanded,statusVariant:f.statusVariant,divider:f.divider??!1,className:cr.item,onClick:()=>{var y;(y=f.onClick)==null||y.call(f),a&&!m&&i()}},f.id)})})]})}const ag=v.forwardRef(({trigger:n,groups:s,size:a="sm",width:i=260,placement:c="bottom-start",open:u,defaultOpen:f=!1,onOpenChange:g,disabled:m=!1,closeOnSelect:y=!0,fullWidth:x=!1,className:k,...b},C)=>{const[L,S]=v.useState(f),I=v.useRef(null),M=u!==void 0?u:L,N=v.useCallback(_=>{I.current=_,C&&(typeof C=="function"?C(_):C.current=_)},[C]),j=v.useCallback(_=>{u===void 0&&S(_),g==null||g(_)},[u,g]);return v.useEffect(()=>{if(!M)return;const _=E=>{var z;(z=I.current)!=null&&z.contains(E.target)||j(!1)};return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[M,j]),v.useEffect(()=>{if(!M)return;const _=E=>{E.key==="Escape"&&j(!1)};return document.addEventListener("keydown",_),()=>document.removeEventListener("keydown",_)},[M,j]),e.jsxs("div",{ref:N,className:ee(cr.root,x&&cr.fullWidth,k),...b,children:[e.jsx("div",{style:{display:x?"flex":"inline-flex",width:x?"100%":void 0},"aria-haspopup":"menu","aria-expanded":M,tabIndex:m?-1:0,onClick:m?void 0:()=>j(!M),onKeyDown:m?void 0:_=>{(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),j(!M))},children:n}),e.jsx("div",{className:cr.panel,"data-open":M||void 0,"data-placement":c,style:{width:typeof i=="number"?`${i}px`:i},role:"menu","aria-orientation":"vertical",children:e.jsx("div",{className:cr.panelInner,children:s.map((_,E)=>e.jsxs("div",{children:[E>0&&e.jsx("div",{className:cr.groupDivider,"aria-hidden":"true"}),e.jsx(G8,{group:_,size:a,closeOnSelect:y,onClose:()=>j(!1)})]},_.id))})})]})});ag.displayName="DropdownMenu";const Z8="_hiddenInput_7w2s5_8",Y8="_area_7w2s5_19",K8="_uploadIcon_7w2s5_53",Q8="_textBlock_7w2s5_59",X8="_title_7w2s5_67",J8="_description_7w2s5_76",e9="_fileRow_7w2s5_88",t9="_fileIcon_7w2s5_96",n9="_fileName_7w2s5_101",r9="_successIcon_7w2s5_115",o9="_removeBtn_7w2s5_121",s9="_progressWrap_7w2s5_145",a9="_progressBar_7w2s5_153",i9="_progressFill_7w2s5_161",l9="_progressLabel_7w2s5_168",c9="_errorRow_7w2s5_178",d9="_errorIcon_7w2s5_186",u9="_errorText_7w2s5_192",p9="_areaMulti_7w2s5_206",h9="_multiDropZone_7w2s5_214",f9="_fileList_7w2s5_244",m9="_fileListItem_7w2s5_254",g9="_inline_7w2s5_267",v9="_inlineIcon_7w2s5_309",x9="_inlineText_7w2s5_330",y9="_inlineProgress_7w2s5_353",w9="_inlineProgressFill_7w2s5_363",He={hiddenInput:Z8,area:Y8,uploadIcon:K8,textBlock:Q8,title:X8,description:J8,fileRow:e9,fileIcon:t9,fileName:n9,successIcon:r9,removeBtn:o9,progressWrap:s9,progressBar:a9,progressFill:i9,progressLabel:l9,errorRow:c9,errorIcon:d9,errorText:u9,areaMulti:p9,multiDropZone:h9,fileList:f9,fileListItem:m9,inline:g9,inlineIcon:v9,inlineText:x9,inlineProgress:y9,inlineProgressFill:w9};function iu(n){const s=n.name.lastIndexOf(".");return s!==-1?n.name.slice(s+1).toUpperCase():n.type?(n.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const b9=v.forwardRef(({variant:n="area",multiple:s=!1,state:a="empty",progress:i=0,file:c,files:u,errorMessage:f,title:g="Choose a file or drag & drop it here.",description:m="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:y,onFileSelect:x,onFilesSelect:k,onClear:b,onRemoveFile:C,fieldVariant:L="outlined",disabled:S=!1,className:I,...M},N)=>{const j=v.useRef(null),[_,E]=v.useState(!1),z=!S&&(s||a==="empty"),R=v.useCallback(()=>{var Y;!S&&(s||a==="empty")&&((Y=j.current)==null||Y.click())},[S,s,a]),F=v.useCallback(Y=>{var J;if(s){const q=Y.target.files?Array.from(Y.target.files):[];q.length&&(k==null||k(q))}else{const q=(J=Y.target.files)==null?void 0:J[0];q&&(x==null||x(q))}Y.target.value=""},[s,x,k]),X=v.useCallback(Y=>{Y.preventDefault(),z&&E(!0)},[z]),Z=v.useCallback(()=>E(!1),[]),V=v.useCallback(Y=>{var J;if(Y.preventDefault(),E(!1),!!z)if(s){const q=Y.dataTransfer.files?Array.from(Y.dataTransfer.files):[];q.length&&(k==null||k(q))}else{const q=(J=Y.dataTransfer.files)==null?void 0:J[0];q&&(x==null||x(q))}},[z,s,x,k]),U=e.jsx("input",{ref:j,type:"file",className:He.hiddenInput,accept:y,multiple:s,disabled:S,"aria-hidden":"true",tabIndex:-1,onChange:F}),H=c?e.jsxs("div",{className:He.fileRow,children:[e.jsx("span",{className:`${He.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:e.jsx(Yn,{size:16})}),e.jsx("span",{className:He.fileName,children:c.name}),e.jsx(pt,{size:"sm",variant:"subtle",children:iu(c)}),a==="complete"&&e.jsx("span",{className:`${He.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:e.jsx(qt,{size:16})}),e.jsx("button",{type:"button",className:He.removeBtn,onClick:b,"aria-label":"Remove file",children:e.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:e.jsx(Al,{size:14})})})]}):null;if(n==="area"){if(s){const Y=u??[];return e.jsxs("div",{ref:N,className:ee(He.areaMulti,I),"data-drag-over":_||void 0,"data-disabled":S||void 0,onDragOver:X,onDragLeave:Z,onDrop:V,...M,children:[U,e.jsxs("div",{className:He.multiDropZone,children:[e.jsx("span",{className:`${He.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:e.jsx(su,{size:24})}),e.jsxs("div",{className:He.textBlock,children:[e.jsx("p",{className:He.title,children:g}),e.jsx("p",{className:He.description,children:m})]}),e.jsx(Ee,{variant:"tertiary",size:"sm",onClick:R,disabled:S,children:"Browse Files"})]}),Y.length>0&&e.jsx("ul",{className:He.fileList,"aria-label":"Selected files",children:Y.map((J,q)=>e.jsxs("li",{className:He.fileListItem,children:[e.jsx("span",{className:`${He.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:e.jsx(Yn,{size:16})}),e.jsx("span",{className:He.fileName,children:J.name}),e.jsx(pt,{size:"sm",variant:"subtle",children:iu(J)}),e.jsx("button",{type:"button",className:He.removeBtn,onClick:()=>C==null?void 0:C(q),"aria-label":`Remove ${J.name}`,disabled:S,children:e.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:e.jsx(Al,{size:14})})})]},`${J.name}-${q}`))})]})}return e.jsxs("div",{ref:N,className:ee(He.area,I),"data-state":a,"data-drag-over":_||void 0,"data-disabled":S||void 0,onDragOver:X,onDragLeave:Z,onDrop:V,...M,children:[U,a==="empty"&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`${He.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:e.jsx(su,{size:24})}),e.jsxs("div",{className:He.textBlock,children:[e.jsx("p",{className:He.title,children:g}),e.jsx("p",{className:He.description,children:m})]}),e.jsx(Ee,{variant:"tertiary",size:"sm",onClick:R,disabled:S,children:"Browse File"})]}),a==="uploading"&&e.jsxs(e.Fragment,{children:[H,e.jsxs("div",{className:He.progressWrap,children:[e.jsx("div",{className:He.progressBar,role:"progressbar","aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:e.jsx("div",{className:He.progressFill,style:{width:`${Math.min(100,Math.max(0,i))}%`}})}),e.jsxs("p",{className:He.progressLabel,children:[i,"% uploaded"]})]})]}),a==="complete"&&H,a==="error"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:He.errorRow,children:[e.jsx("span",{className:`${He.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:e.jsx(Ds,{size:20})}),e.jsx("p",{className:He.errorText,children:f??"Upload failed. Please try again."})]}),e.jsx(Ee,{variant:"tertiary",size:"sm",onClick:R,disabled:S,children:"Try Again"})]})]})}const ne={empty:e.jsx(su,{size:16}),uploading:e.jsx(Yn,{size:16}),complete:e.jsx(qt,{size:16}),error:e.jsx(Ds,{size:16})}[a],K=(a==="uploading"||a==="complete")&&!!c;return e.jsxs("div",{ref:N,className:ee(He.inline,I),"data-state":a,"data-field-variant":L,"data-disabled":S||void 0,...M,children:[U,e.jsx("span",{className:`${He.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ne}),e.jsxs("span",{className:He.inlineText,"data-has-file":K?"":void 0,children:[a==="empty"&&g,a==="uploading"&&(c==null?void 0:c.name),a==="complete"&&(c==null?void 0:c.name),a==="error"&&(f??"Upload failed. Please try again.")]}),K&&e.jsx(pt,{size:"sm",variant:"subtle",children:iu(c)}),(a==="uploading"||a==="complete"||a==="error")&&e.jsx("button",{type:"button",className:He.removeBtn,onClick:b,"aria-label":"Remove file",children:e.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:e.jsx(Al,{size:14})})}),a==="empty"&&e.jsx(Ee,{variant:"tertiary",size:"xs",onClick:R,disabled:S,children:"Browse"}),a==="uploading"&&e.jsx("div",{className:He.inlineProgress,role:"progressbar","aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:e.jsx("div",{className:He.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,i))}%`}})})]})});b9.displayName="FileUploader";const j9="_wrapper_127v8_8",k9="_labelRow_127v8_16",_9="_label_127v8_16",C9="_required_127v8_28",S9="_labelIcon_127v8_36",M9="_sm_127v8_46",I9="_md_127v8_47",N9="_lg_127v8_48",A9="_shell_127v8_44",T9="_outlined_127v8_75",L9="_underlined_127v8_102",E9="_float_127v8_147",R9="_leadingSlot_127v8_181",$9="_trailingSlot_127v8_193",P9="_trailingActionWrap_127v8_206",D9="_trailingActionBtn_127v8_213",z9="_successTrailingSlot_127v8_234",F9="_errorTrailingSlot_127v8_239",O9="_control_127v8_251",B9="_selectValue_127v8_297",H9="_selectPlaceholder_127v8_303",U9="_selectChevron_127v8_307",W9="_selectChevronOpen_127v8_312",q9="_textareaShell_127v8_315",V9="_textareaControl_127v8_334",G9="_footer_127v8_351",Z9="_footerRow_127v8_363",Y9="_footerError_127v8_364",K9="_footerSuccess_127v8_365",Q9="_footerIcon_127v8_368",X9="_wrapperHorizontal_127v8_378",J9="_horizontalLabelCol_127v8_384",e7="_horizontalLabelHint_127v8_393",t7="_horizontalControlCol_127v8_402",n7="_msContainer_127v8_416",r7="_msShell_127v8_425",o7="_msOpen_127v8_440",s7="_msDisabled_127v8_447",a7="_msBody_127v8_450",i7="_msPlaceholder_127v8_459",l7="_msChevron_127v8_469",c7="_msChevronOpen_127v8_480",d7="_msPanel_127v8_483",Ne={wrapper:j9,labelRow:k9,label:_9,required:C9,labelIcon:S9,sm:M9,md:I9,lg:N9,shell:A9,outlined:T9,underlined:L9,float:E9,leadingSlot:R9,trailingSlot:$9,trailingActionWrap:P9,trailingActionBtn:D9,successTrailingSlot:z9,errorTrailingSlot:F9,control:O9,selectValue:B9,selectPlaceholder:H9,selectChevron:U9,selectChevronOpen:W9,textareaShell:q9,textareaControl:V9,footer:G9,footerRow:Z9,footerError:Y9,footerSuccess:K9,footerIcon:Q9,wrapperHorizontal:X9,horizontalLabelCol:J9,horizontalLabelHint:e7,horizontalControlCol:t7,msContainer:n7,msShell:r7,msOpen:o7,msDisabled:s7,msBody:a7,msPlaceholder:i7,msChevron:l7,msChevronOpen:c7,msPanel:d7};function Gs({label:n,labelIcon:s,labelDescription:a,hint:i,error:c,success:u,required:f,htmlFor:g,layout:m="vertical",labelWidth:y=160,className:x,children:k}){const b=c??u??i,C=c?"error":u?"success":"hint",L=b?e.jsxs("p",{className:ee(Ne.footer,C==="error"&&Ne.footerError,C==="success"&&Ne.footerSuccess),role:C==="error"?"alert":void 0,"aria-live":C==="error"?"assertive":void 0,children:[C==="hint"&&e.jsx("span",{className:`${Ne.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:e.jsx(Ds,{size:12})}),b]}):null,S=n!=null?e.jsxs("div",{className:Ne.labelRow,children:[e.jsx("label",{className:Ne.label,htmlFor:g,children:n}),f&&e.jsx("span",{className:Ne.required,"aria-hidden":"true",children:"*"}),s&&e.jsx("span",{className:`${Ne.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:s})]}):null;if(m==="horizontal"){const I={width:typeof y=="number"?`${y}px`:y};return e.jsxs("div",{className:ee(Ne.wrapper,Ne.wrapperHorizontal,x),children:[(S||a)&&e.jsxs("div",{className:Ne.horizontalLabelCol,style:I,children:[S,a&&e.jsx("p",{className:Ne.horizontalLabelHint,children:a})]}),e.jsxs("div",{className:Ne.horizontalControlCol,children:[k,L]})]})}return e.jsxs("div",{className:ee(Ne.wrapper,x),children:[S,k,L]})}function ti({variant:n="outlined",size:s="md",error:a,success:i,disabled:c,readOnly:u,leadingIcon:f,trailingIcon:g,trailingAction:m,isTextarea:y,focused:x,className:k,children:b}){const C=s==="sm"?14:s==="lg"?18:16,L=i&&!a&&!g&&!m?e.jsx(qt,{size:C}):null,S=a&&!g&&!m?e.jsx(Ds,{size:C}):null,I=!!f,M=!!(g||m||L||S);return e.jsxs("div",{className:ee(Ne.shell,Ne[n],Ne[s],y&&Ne.textareaShell,k),"data-error":a||void 0,"data-success":i||void 0,"data-disabled":c||void 0,"data-readonly":u||void 0,"data-focused":x||void 0,"data-has-leading":I||void 0,"data-has-trailing":M||void 0,children:[f&&e.jsx("span",{className:ee(Ne.leadingSlot,"alloy-icon-slot"),children:f}),b,m?e.jsx("span",{className:Ne.trailingActionWrap,children:m}):g||L||S?e.jsx("span",{className:ee(Ne.trailingSlot,"alloy-icon-slot",L&&Ne.successTrailingSlot,S&&Ne.errorTrailingSlot),children:g??L??S}):null]})}const Fs=v.forwardRef(({label:n,labelIcon:s,hint:a,error:i,success:c,required:u,variant:f="outlined",size:g="md",type:m="text",leadingIcon:y,trailingIcon:x,layout:k,labelWidth:b,labelDescription:C,id:L,disabled:S,readOnly:I,className:M,...N},j)=>{const _=v.useId(),E=L??_;return e.jsx(Gs,{label:n,labelIcon:s,hint:a,error:i,success:c,required:u,htmlFor:E,layout:k,labelWidth:b,labelDescription:C,className:M,children:e.jsx(ti,{variant:f,size:g,error:!!i,success:!!c,disabled:S,readOnly:I,leadingIcon:y,trailingIcon:x,children:e.jsx("input",{ref:j,id:E,type:m,disabled:S,readOnly:I,"aria-invalid":i?!0:void 0,"aria-describedby":a||i||c?`${E}-footer`:void 0,className:ee(Ne.control),...N})})})});Fs.displayName="TextField";const hp=v.forwardRef(({label:n,labelIcon:s,hint:a,error:i,success:c,required:u,variant:f="outlined",size:g="md",leadingIcon:m,trailingIcon:y,layout:x,labelWidth:k,labelDescription:b,id:C,disabled:L,readOnly:S,className:I,...M},N)=>{const j=v.useId(),_=C??j;return e.jsx(Gs,{label:n,labelIcon:s,hint:a,error:i,success:c,required:u,htmlFor:_,layout:x,labelWidth:k,labelDescription:b,className:I,children:e.jsx(ti,{variant:f,size:g,error:!!i,success:!!c,disabled:L,readOnly:S,leadingIcon:m,trailingIcon:y,isTextarea:!0,children:e.jsx("textarea",{ref:N,id:_,disabled:L,readOnly:S,"aria-invalid":i?!0:void 0,className:ee(Ne.control,Ne.textareaControl),...M})})})});hp.displayName="TextArea";const u7={sm:"sm",md:"md",lg:"lg"},En=v.forwardRef(({label:n,labelIcon:s,hint:a,error:i,success:c,required:u,variant:f="outlined",size:g="md",leadingIcon:m,layout:y,labelWidth:x,labelDescription:k,options:b,value:C,defaultValue:L="",onChange:S,placeholder:I="Select an option…",disabled:M,readOnly:N,id:j,className:_},E)=>{var B;const z=v.useId(),R=j??z,F=C!==void 0,[X,Z]=v.useState(L),V=F?C:X,U=v.useCallback($=>{F||Z($),S==null||S($)},[F,S]),[H,ne]=v.useState(!1),K=(B=b.find($=>$.value===V))==null?void 0:B.label,Y=g==="sm"?14:g==="lg"?18:16,J=u7[g],q=e.jsx(ti,{variant:f,size:g,error:!!i,success:!!c,disabled:M,readOnly:N,focused:H,leadingIcon:m,trailingIcon:e.jsx("span",{className:ee(Ne.selectChevron,H&&Ne.selectChevronOpen),"aria-hidden":"true",children:e.jsx(nn,{size:Y})}),children:e.jsx("span",{className:ee(Ne.control,Ne.selectValue,!K&&Ne.selectPlaceholder),children:K??I})});return e.jsx(Gs,{label:n,labelIcon:s,hint:a,error:i,success:c,required:u,htmlFor:R,layout:y,labelWidth:x,labelDescription:k,className:_,children:e.jsx(ag,{ref:E,id:R,fullWidth:!0,trigger:q,groups:[{id:"options",options:b.map($=>({id:$.value,label:$.label,disabled:$.disabled,selected:$.value===V,onClick:()=>U($.value)}))}],size:J,width:"100%",placement:"bottom-start",open:H,onOpenChange:ne,disabled:M||N})})});En.displayName="SelectField";const p7=v.forwardRef(({label:n,labelIcon:s,hint:a,error:i,success:c,required:u,variant:f="outlined",size:g="md",leadingIcon:m,layout:y,labelWidth:x,labelDescription:k,id:b,disabled:C,readOnly:L,className:S,...I},M)=>{const N=v.useId(),j=b??N,[_,E]=v.useState(!1),z=g==="sm"?14:g==="lg"?18:16;return e.jsx(Gs,{label:n,labelIcon:s,hint:a,error:i,success:c,required:u,htmlFor:j,layout:y,labelWidth:x,labelDescription:k,className:S,children:e.jsx(ti,{variant:f,size:g,error:!!i,success:!!c,disabled:C,readOnly:L,leadingIcon:m,trailingAction:e.jsx("button",{type:"button",className:`${Ne.trailingActionBtn} alloy-icon-slot`,onClick:()=>E(R=>!R),tabIndex:C?-1:0,"aria-label":_?"Hide password":"Show password","aria-pressed":_,children:_?e.jsx(Bm,{size:z}):e.jsx(sp,{size:z})}),children:e.jsx("input",{ref:M,id:j,type:_?"text":"password",disabled:C,readOnly:L,"aria-invalid":i?!0:void 0,autoComplete:"current-password",className:ee(Ne.control),...I})})})});p7.displayName="PasswordField";const rc=v.forwardRef(({label:n,labelIcon:s,hint:a,error:i,success:c,required:u,variant:f="outlined",size:g="md",onClear:m,onChange:y,layout:x,labelWidth:k,labelDescription:b,id:C,value:L,defaultValue:S,disabled:I,readOnly:M,className:N,...j},_)=>{const E=v.useId(),z=C??E,R=g==="sm"?14:g==="lg"?18:16,F=L!==void 0?String(L).length>0:void 0,X=v.useCallback(Z=>{y==null||y(Z)},[y]);return e.jsx(Gs,{label:n,labelIcon:s,hint:a,error:i,success:c,required:u,htmlFor:z,layout:x,labelWidth:k,labelDescription:b,className:N,children:e.jsx(ti,{variant:f,size:g,error:!!i,success:!!c,disabled:I,readOnly:M,leadingIcon:e.jsx(lp,{size:R}),trailingAction:F?e.jsx("button",{type:"button",className:`${Ne.trailingActionBtn} alloy-icon-slot`,onClick:m,tabIndex:I?-1:0,"aria-label":"Clear search",children:e.jsx(Vs,{size:R})}):void 0,children:e.jsx("input",{ref:_,id:z,type:"search",value:L,defaultValue:S,disabled:I,readOnly:M,"aria-invalid":i?!0:void 0,onChange:X,className:ee(Ne.control),...j})})})});rc.displayName="SearchField";const h7=v.forwardRef((n,s)=>e.jsx(Fs,{ref:s,type:"email",autoComplete:"email",inputMode:"email",...n}));h7.displayName="EmailField";const ig=v.forwardRef((n,s)=>e.jsx(Fs,{ref:s,type:"number",inputMode:"numeric",...n}));ig.displayName="NumberField";const f7={sm:"sm",md:"sm",lg:"md"},m7={sm:"sm",md:"md",lg:"lg"},g7=v.forwardRef(({label:n,labelIcon:s,hint:a,error:i,success:c,required:u,variant:f="outlined",size:g="md",layout:m,labelWidth:y,labelDescription:x,options:k,value:b,defaultValue:C=[],onChange:L,placeholder:S="Select options…",disabled:I,readOnly:M,id:N,className:j},_)=>{const E=v.useId(),z=N??E,R=`${z}-list`,F=v.useRef(null),X=b!==void 0,[Z,V]=v.useState(C),U=X?b:Z,H=v.useCallback(P=>{X||V(P),L==null||L(P)},[X,L]),[ne,K]=v.useState(!1);v.useEffect(()=>{if(!ne)return;const P=re=>{F.current&&!F.current.contains(re.target)&&K(!1)},te=re=>{re.key==="Escape"&&K(!1)};return document.addEventListener("mousedown",P),document.addEventListener("keydown",te),()=>{document.removeEventListener("mousedown",P),document.removeEventListener("keydown",te)}},[ne]);const Y=P=>{if(I||M)return;const te=U.includes(P)?U.filter(re=>re!==P):[...U,P];H(te)},J=P=>{I||M||((P.key==="Enter"||P.key===" ")&&(P.preventDefault(),K(te=>!te)),P.key==="Backspace"&&U.length>0&&!ne&&H(U.slice(0,-1)))},q=g==="sm"?14:g==="lg"?18:16,B=f7[g],$=m7[g],A=Object.fromEntries(k.map(P=>[P.value,P.label]));return e.jsx(Gs,{label:n,labelIcon:s,hint:a,error:i,success:c,required:u,htmlFor:z,layout:m,labelWidth:y,labelDescription:x,className:j,children:e.jsxs("div",{ref:F,className:Ne.msContainer,children:[e.jsxs("div",{ref:_,id:z,role:"combobox","aria-haspopup":"listbox","aria-expanded":ne,"aria-controls":R,"aria-disabled":I||void 0,tabIndex:I?-1:0,className:ee(Ne.msShell,Ne[f],Ne[g],ne&&Ne.msOpen,I&&Ne.msDisabled),"data-error":i?!0:void 0,"data-success":c&&!i?!0:void 0,"data-disabled":I||void 0,onClick:()=>{!I&&!M&&K(P=>!P)},onKeyDown:J,children:[e.jsx("div",{className:Ne.msBody,children:U.length===0?e.jsx("span",{className:Ne.msPlaceholder,children:S}):U.map(P=>e.jsx(pt,{size:B,variant:"subtle",dismissible:!I&&!M,onDismiss:()=>H(U.filter(te=>te!==P)),children:A[P]??P},P))}),e.jsx("span",{className:ee(Ne.msChevron,"alloy-icon-slot",ne&&Ne.msChevronOpen),children:e.jsx(nn,{size:q})})]}),ne&&e.jsx("div",{id:R,role:"listbox","aria-multiselectable":"true","aria-label":typeof n=="string"?n:"Options",className:Ne.msPanel,children:k.map(P=>{const te=U.includes(P.value);return e.jsx(pr,{label:P.label,size:$,trailingAction:"checkbox",checked:te,disabled:P.disabled,role:"option","aria-selected":te,onMouseDown:re=>{re.preventDefault()},onCheckedChange:()=>{P.disabled||Y(P.value)}},P.value)})})]})})});g7.displayName="MultiSelectField";const v7="_root_1249j_6",x7="_pageControls_1249j_14",y7="_pageBtn_1249j_21",w7="_ellipsis_1249j_36",b7="_rowsGroup_1249j_51",j7="_rowsSelect_1249j_58",k7="_countText_1249j_64",_7="_groupLabel_1249j_74",C7="_goToGroup_1249j_84",S7="_goToInput_1249j_91",Gn={root:v7,pageControls:x7,pageBtn:y7,ellipsis:w7,rowsGroup:b7,rowsSelect:j7,countText:k7,groupLabel:_7,goToGroup:C7,goToInput:S7};function M7(n,s,a){if(s<=1)return[1];const i=Math.max(2,n-a),c=Math.min(s-1,n+a),u=[1];i>2&&u.push("ellipsis");for(let f=i;f<=c;f++)u.push(f);return c<s-1&&u.push("ellipsis"),s>1&&u.push(s),u}const I7=v.forwardRef(({page:n,totalPages:s,onPageChange:a,showRowsPerPage:i=!1,rowsPerPage:c,rowsPerPageOptions:u=[10,25,50,100],onRowsPerPageChange:f,showGoToPage:g=!1,totalCount:m,siblingCount:y=1,size:x="sm",disabled:k=!1,className:b,...C},L)=>{const[S,I]=v.useState(""),M=x,N=x,j=x==="sm"?14:16,_=M7(n,s,y),E=v.useCallback(F=>{const X=Math.min(Math.max(1,F),s);X!==n&&a(X)},[n,s,a]),z=v.useCallback(F=>{if(F.key==="Enter"){const X=parseInt(S,10);isNaN(X)||E(X),I("")}},[S,E]),R=m!=null&&c!=null?`${(n-1)*c+1}–${Math.min(n*c,m)} of ${m}`:null;return e.jsxs("nav",{ref:L,"aria-label":"Pagination",className:ee(Gn.root,b),"data-size":x,...C,children:[i&&e.jsxs("div",{className:Gn.rowsGroup,children:[e.jsx("span",{className:Gn.groupLabel,children:"Rows per page"}),e.jsx("div",{className:Gn.rowsSelect,children:e.jsx(En,{size:N,value:c,disabled:k,"aria-label":"Rows per page",onChange:F=>f==null?void 0:f(Number(F.target.value)),children:u.map(F=>e.jsx("option",{value:F,children:F},F))})})]}),R&&e.jsx("span",{className:Gn.countText,"aria-live":"polite",children:R}),e.jsxs("div",{className:Gn.pageControls,role:"group","aria-label":"Page navigation",children:[e.jsx(Ee,{variant:"ghost",size:M,iconOnly:!0,"aria-label":"Previous page",disabled:k||n<=1,onClick:()=>E(n-1),children:e.jsx(Om,{size:j})}),_.map((F,X)=>F==="ellipsis"?e.jsx("span",{className:Gn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${X}`):e.jsx(Ee,{variant:F===n?"secondary":"ghost",size:M,"aria-label":`Page ${F}`,"aria-current":F===n?"page":void 0,disabled:k,onClick:()=>E(F),className:Gn.pageBtn,children:F},F)),e.jsx(Ee,{variant:"ghost",size:M,iconOnly:!0,"aria-label":"Next page",disabled:k||n>=s,onClick:()=>E(n+1),children:e.jsx(Jn,{size:j})})]}),g&&e.jsxs("div",{className:Gn.goToGroup,children:[e.jsx("span",{className:Gn.groupLabel,children:"Go to"}),e.jsx("div",{className:Gn.goToInput,children:e.jsx(ig,{size:N,value:S,placeholder:String(n),min:1,max:s,disabled:k,"aria-label":"Go to page number",onChange:F=>I(F.target.value),onKeyDown:z})})]})]})});I7.displayName="Pagination";const N7="_root_1vx33_6",A7="_fullWidth_1vx33_18",T7="_item_1vx33_23",L7="_indicator_1vx33_28",E7="_sm_1vx33_46",R7="_md_1vx33_54",$7="_lg_1vx33_62",P7="_itemSelected_1vx33_109",D7="_itemIcon_1vx33_115",z7="_itemLabel_1vx33_127",Xr={root:N7,fullWidth:A7,item:T7,indicator:L7,sm:E7,md:R7,lg:$7,itemSelected:P7,itemIcon:D7,itemLabel:z7},lg=v.createContext(null);function F7(n){const s=v.useContext(lg);if(!s)throw new Error(`<${n}> must be rendered inside <SegmentedControl>`);return s}const cg=v.forwardRef(({value:n,leadingIcon:s,className:a,children:i,disabled:c,onClick:u,...f},g)=>{const{value:m,onChange:y,disabled:x,name:k}=F7("SegmentedControl.Item"),b=m===n,C=x||!!c;return e.jsxs("button",{ref:g,type:"button",role:"radio","aria-checked":b,name:k,disabled:C,className:ee(Xr.item,b&&Xr.itemSelected,a),onClick:L=>{C||y(n),u==null||u(L)},...f,children:[s&&e.jsx("span",{className:ee(Xr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:s}),i!==void 0&&e.jsx("span",{className:Xr.itemLabel,children:i})]})});cg.displayName="SegmentedControl.Item";const dg=v.forwardRef(({value:n,defaultValue:s="",onChange:a,size:i="md",disabled:c=!1,fullWidth:u=!1,className:f,children:g,...m},y)=>{const[x,k]=v.useState(s),b=n!==void 0,C=b?n:x,L=v.useId(),S=v.useRef(null);v.useLayoutEffect(()=>{const M=S.current;if(!M)return;const N=M.querySelector('[aria-checked="true"]');N&&(M.style.setProperty("--sc-indicator-x",`${N.offsetLeft}px`),M.style.setProperty("--sc-indicator-w",`${N.offsetWidth}px`))},[C,i]);const I=M=>{b||k(M),a==null||a(M)};return e.jsx(lg.Provider,{value:{value:C,onChange:I,disabled:c,name:L},children:e.jsxs("div",{ref:M=>{S.current=M,typeof y=="function"?y(M):y&&(y.current=M)},role:"radiogroup",className:ee(Xr.root,Xr[i],u&&Xr.fullWidth,f),...m,children:[e.jsx("span",{className:Xr.indicator,"aria-hidden":"true"}),g]})})});dg.displayName="SegmentedControl";const tt=Object.assign(dg,{Item:cg}),O7="_root_fkv0x_6",B7="_sm_fkv0x_26",H7="_md_fkv0x_33",U7="_lg_fkv0x_40",W7="_dot_fkv0x_49",q7="_success_fkv0x_58",V7="_warning_fkv0x_65",G7="_error_fkv0x_72",Z7="_info_fkv0x_79",Y7="_neutral_fkv0x_86",K7="_pending_fkv0x_93",yl={root:O7,sm:B7,md:H7,lg:U7,dot:W7,success:q7,warning:V7,error:G7,info:Z7,neutral:Y7,pending:K7},ro=v.forwardRef(({status:n="neutral",size:s="md",dot:a=!0,className:i,children:c,...u},f)=>e.jsxs("span",{ref:f,className:ee(yl.root,yl[s],yl[n],i),...u,children:[a&&e.jsx("span",{className:yl.dot,"aria-hidden":"true"}),c]}));ro.displayName="StatusTag";const Q7="_root_1m8t5_6",X7="_underline_1m8t5_15",J7="_background_1m8t5_21",eb="_underlineIndicator_1m8t5_26",tb="_md_1m8t5_43",nb="_lg_1m8t5_44",rb="_tab_1m8t5_42",ob="_tabSelected_1m8t5_77",sb="_tabIcon_1m8t5_99",ab="_tabLabel_1m8t5_111",ib="_tabBadge_1m8t5_116",lb="_tabLabelEditable_1m8t5_123",cb="_tabLabelInput_1m8t5_128",db="_addTab_1m8t5_147",ub="_addTabIcon_1m8t5_160",hn={root:Q7,underline:X7,background:J7,underlineIndicator:eb,md:tb,lg:nb,tab:rb,tabSelected:ob,tabIcon:sb,tabLabel:ab,tabBadge:ib,tabLabelEditable:lb,tabLabelInput:cb,addTab:db,addTabIcon:ub},ug=v.createContext(null);function pg(n){const s=v.useContext(ug);if(!s)throw new Error(`<${n}> must be rendered inside <Tabs>`);return s}const hg=v.forwardRef(({value:n,leadingIcon:s,trailingBadge:a,disabled:i,editable:c=!1,autoEdit:u=!1,onLabelChange:f,onClick:g,className:m,children:y,...x},k)=>{const{value:b,onChange:C,disabled:L,name:S}=pg("Tabs.Tab"),I=b===n,M=L||!!i,N=typeof y=="string"?y:"",[j,_]=v.useState(u&&c),[E,z]=v.useState(N),R=v.useRef(null);v.useEffect(()=>{if(j){const U=R.current;U&&(U.focus(),U.select())}},[j]),v.useEffect(()=>{u&&c&&!j&&(z(typeof y=="string"?y:""),_(!0))},[u,c]);const F=()=>{const U=E.trim();U&&U!==N&&(f==null||f(U)),_(!1)},X=()=>{z(N),_(!1)},Z=U=>{!c||M||(U.stopPropagation(),z(N),_(!0))},V=U=>{U.key==="Enter"?(U.preventDefault(),F()):U.key==="Escape"&&(U.preventDefault(),X())};return e.jsxs("button",{ref:k,type:"button",role:"tab","aria-selected":I,name:S,disabled:M,className:ee(hn.tab,I&&hn.tabSelected,m),onClick:U=>{j||(M||C(n),g==null||g(U))},...x,children:[s&&e.jsx("span",{className:ee(hn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:s}),j?e.jsx("input",{ref:R,type:"text",value:E,onChange:U=>z(U.target.value),onKeyDown:V,onBlur:F,onClick:U=>U.stopPropagation(),className:hn.tabLabelInput,"aria-label":"Tab name",size:Math.max(E.length,1)}):y!==void 0&&e.jsx("span",{className:ee(hn.tabLabel,c&&hn.tabLabelEditable),onDoubleClick:Z,children:y}),a&&!j&&e.jsx("span",{className:hn.tabBadge,children:a})]})});hg.displayName="Tabs.Tab";const pb=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),fg=v.forwardRef(({className:n,onClick:s,"aria-label":a="Add tab",...i},c)=>{const{disabled:u}=pg("Tabs.AddTab");return e.jsx("button",{ref:c,type:"button","aria-label":a,disabled:u,className:ee(hn.tab,hn.addTab,n),onClick:s,...i,children:e.jsx("span",{className:ee(hn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:e.jsx(pb,{})})})});fg.displayName="Tabs.AddTab";const mg=v.forwardRef(({variant:n="underline",size:s="md",value:a,defaultValue:i="",onChange:c,disabled:u=!1,className:f,children:g,...m},y)=>{const[x,k]=v.useState(i),b=a!==void 0,C=b?a:x,L=v.useId(),S=v.useRef(null);v.useLayoutEffect(()=>{const M=S.current;if(!M||n!=="underline")return;const N=M.querySelector('[aria-selected="true"]');N&&(M.style.setProperty("--tab-indicator-x",`${N.offsetLeft}px`),M.style.setProperty("--tab-indicator-w",`${N.offsetWidth}px`))},[C,n]);const I=M=>{b||k(M),c==null||c(M)};return e.jsx(ug.Provider,{value:{value:C,onChange:I,disabled:u,variant:n,size:s,name:L},children:e.jsxs("div",{ref:M=>{S.current=M,typeof y=="function"?y(M):y&&(y.current=M)},role:"tablist",className:ee(hn.root,hn[n],hn[s],f),...m,children:[n==="underline"&&e.jsx("span",{className:hn.underlineIndicator,"aria-hidden":"true"}),g]})})});mg.displayName="Tabs";Object.assign(mg,{Tab:hg,AddTab:fg});const hb="_selectedBorder_1ypeg_7",fb="_selectedFill_1ypeg_12",Of={selectedBorder:hb,selectedFill:fb},mb=v.forwardRef(({selected:n=!1,defaultVariant:s="secondary",selectionStyle:a="border",onSelectedChange:i,onClick:c,className:u,...f},g)=>{const m=x=>{i==null||i(!n),c==null||c(x)},y=n?a==="fill"?Of.selectedFill:Of.selectedBorder:void 0;return e.jsx(Ee,{ref:g,variant:s,"aria-pressed":n,className:ee(y,u),onClick:m,...f})});mb.displayName="ToggleButton";const gb="_root_mcb75_6",vb="_disabled_mcb75_13",xb="_sm_mcb75_20",yb="_md_mcb75_31",wb="_lg_mcb75_42",bb="_track_mcb75_54",jb="_trackChecked_mcb75_90",kb="_thumb_mcb75_100",_b="_labelWrap_mcb75_117",Cb="_label_mcb75_117",Sb="_description_mcb75_139",_r={root:gb,disabled:vb,sm:xb,md:yb,lg:wb,track:bb,trackChecked:jb,thumb:kb,labelWrap:_b,label:Cb,description:Sb},Mb=v.forwardRef(({checked:n,defaultChecked:s=!1,onChange:a,disabled:i,size:c="md",label:u,description:f,id:g,name:m,value:y,className:x},k)=>{const b=v.useId(),C=g??b,L=`${C}-label`,S=n!==void 0,[I,M]=v.useState(s),N=S?n:I,j=()=>{if(i)return;const E=!N;S||M(E),a==null||a(E)},_=E=>{(E.key===" "||E.key==="Enter")&&(E.preventDefault(),j())};return e.jsxs("div",{className:ee(_r.root,_r[c],i&&_r.disabled,x),children:[e.jsx("button",{ref:k,type:"button",role:"switch",id:C,"aria-checked":N,"aria-labelledby":u?L:void 0,"aria-disabled":i||void 0,tabIndex:i?-1:0,disabled:i,name:m,value:y,className:ee(_r.track,N&&_r.trackChecked),"data-checked":N||void 0,"data-disabled":i||void 0,onClick:j,onKeyDown:_,children:e.jsx("span",{className:_r.thumb})}),(u||f)&&e.jsxs("div",{className:_r.labelWrap,children:[u&&e.jsx("label",{id:L,htmlFor:C,className:_r.label,children:u}),f&&e.jsx("span",{className:_r.description,children:f})]})]})});Mb.displayName="Switch";const Ib="_root_104n4_5",Nb="_disabled_104n4_11",Ab="_sm_104n4_17",Tb="_md_104n4_25",Lb="_lg_104n4_33",Eb="_controlWrap_104n4_41",Rb="_input_104n4_50",$b="_ring_104n4_65",Pb="_ringChecked_104n4_90",Db="_ringError_104n4_94",zb="_dot_104n4_104",Fb="_labelWrap_104n4_112",Ob="_label_104n4_112",Bb="_error_104n4_130",Hb="_required_104n4_132",Ub="_description_104n4_137",un={root:Ib,disabled:Nb,sm:Ab,md:Tb,lg:Lb,controlWrap:Eb,input:Rb,ring:$b,ringChecked:Pb,ringError:Db,dot:zb,labelWrap:Fb,label:Ob,error:Bb,required:Hb,description:Ub},Wb=v.forwardRef(({value:n,checked:s,onChange:a,disabled:i,error:c,size:u="md",label:f,description:g,id:m,name:y,required:x,className:k},b)=>{const C=v.useId(),L=m??C;return e.jsxs("div",{className:ee(un.root,un[u],i&&un.disabled,c&&un.error,k),children:[e.jsxs("div",{className:un.controlWrap,children:[e.jsx("input",{ref:b,type:"radio",id:L,name:y,value:n,checked:s,disabled:i,required:x,"aria-invalid":c||void 0,onChange:()=>a==null?void 0:a(n),className:un.input}),e.jsx("span",{className:ee(un.ring,s&&un.ringChecked,c&&un.ringError),"aria-hidden":"true",children:s&&e.jsx("span",{className:un.dot})})]}),(f||g)&&e.jsxs("div",{className:un.labelWrap,children:[f&&e.jsxs("label",{htmlFor:L,className:un.label,children:[f,x&&e.jsx("span",{className:un.required,"aria-hidden":"true",children:" *"})]}),g&&e.jsx("span",{className:un.description,children:g})]})]})});Wb.displayName="Radio";const qb="_table_1ad04_8",Vb="_sm_1ad04_16",Gb="_row_1ad04_30",Zb="_head_1ad04_47",Yb="_headLabel_1ad04_82",Kb="_sortBtn_1ad04_96",Qb="_sortIcon_1ad04_119",Xb="_cell_1ad04_142",Jb="_cellText_1ad04_175",ej="_cellStack_1ad04_203",tj="_cellStackPrimary_1ad04_210",nj="_cellStackSecondary_1ad04_221",rj="_cellActions_1ad04_233",oj="_cellControl_1ad04_240",sj="_addCell_1ad04_251",aj="_addRowCell_1ad04_264",ij="_addRowLabel_1ad04_276",Ot={table:qb,sm:Vb,row:Gb,head:Zb,headLabel:Yb,sortBtn:Kb,sortIcon:Qb,cell:Xb,cellText:Jb,cellStack:ej,cellStackPrimary:tj,cellStackSecondary:nj,cellActions:rj,cellControl:oj,addCell:sj,addRowCell:aj,addRowLabel:ij},gg=v.createContext({addColumn:!1,addRow:!1}),vg=()=>v.useContext(gg),ni=v.forwardRef(({size:n="md",interaction:s="row",addColumn:a=!1,addRow:i=!1,onAddColumn:c,onAddRow:u,className:f,children:g,...m},y)=>{const x=v.useMemo(()=>({addColumn:a,addRow:i,onAddColumn:c,onAddRow:u}),[a,i,c,u]);return e.jsx(gg.Provider,{value:x,children:e.jsx("table",{ref:y,className:ee(Ot.table,n==="sm"&&Ot.sm,f),"data-interaction":s,...m,children:g})})});ni.displayName="Table";const tn=v.forwardRef(({align:n="left",sort:s,onSort:a,hoverable:i,selected:c,className:u,children:f,...g},m)=>{const y=s!==void 0;return e.jsx("th",{ref:m,className:ee(Ot.head,u),"data-align":n!=="left"?n:void 0,"data-hoverable":!y&&i?!0:void 0,"data-selected":c||void 0,"aria-selected":c,scope:"col","aria-sort":s==="asc"?"ascending":s==="desc"?"descending":y?"none":void 0,...g,children:y?e.jsxs("button",{type:"button",className:Ot.sortBtn,onClick:a,"aria-label":typeof f=="string"?`Sort by ${f}`:void 0,children:[f,e.jsx("span",{className:Ot.sortIcon,"data-sort":s!=="none"?s:void 0,"aria-hidden":"true",children:e.jsx(nn,{size:12,strokeWidth:2})})]}):e.jsx("span",{className:Ot.headLabel,children:f})})});tn.displayName="TableHead";const ri=v.forwardRef(({children:n,...s},a)=>{const{addColumn:i,onAddColumn:c}=vg(),u=i?v.Children.map(n,(f,g)=>{if(!v.isValidElement(f)||g!==0)return f;const m=v.Children.toArray(f.props.children);return v.cloneElement(f,{},[...m,e.jsx(tn,{hoverable:!0,onClick:c,className:Ot.addCell,"aria-label":"Add column",children:e.jsx(qs,{size:14,strokeWidth:2})},"__add_col_head")])}):n;return e.jsx("thead",{ref:a,...s,children:u})});ri.displayName="TableHeader";const dr=v.forwardRef(({hoverable:n=!0,selected:s,className:a,children:i,...c},u)=>e.jsx("tr",{ref:u,className:ee(Ot.row,a),"data-hoverable":n||void 0,"data-selected":s||void 0,"aria-selected":s,...c,children:i}));dr.displayName="TableRow";const Qt=v.forwardRef(({align:n="left",compact:s,hoverable:a=!0,selected:i,className:c,children:u,...f},g)=>e.jsx("td",{ref:g,className:ee(Ot.cell,c),"data-align":n!=="left"?n:void 0,"data-compact":s||void 0,"data-hoverable":a||void 0,"data-selected":i||void 0,"aria-selected":i,...f,children:u}));Qt.displayName="TableCell";const oi=v.forwardRef(({children:n,...s},a)=>{const{addColumn:i,addRow:c,onAddRow:u}=vg(),f=i?v.Children.map(n,g=>{if(!v.isValidElement(g))return g;const m=v.Children.toArray(g.props.children);return v.cloneElement(g,{},[...m,e.jsx(Qt,{"aria-hidden":"true",className:Ot.addCell},"__add_col_pad")])}):n;return e.jsxs("tbody",{ref:a,...s,children:[f,c&&e.jsx(dr,{hoverable:!1,children:e.jsx(Qt,{colSpan:999,onClick:u,className:Ot.addRowCell,"aria-label":"Add row",children:e.jsxs("span",{className:Ot.addRowLabel,children:[e.jsx(qs,{size:14,strokeWidth:2}),"Add row"]})})})]})});oi.displayName="TableBody";const oo=v.forwardRef(({variant:n="primary",size:s="md",wrap:a,className:i,children:c,...u},f)=>e.jsx("span",{ref:f,className:ee(Ot.cellText,i),"data-variant":n!=="primary"?n:void 0,"data-size":s!=="md"?s:void 0,"data-wrap":a||void 0,...u,children:c}));oo.displayName="CellText";const lj=v.forwardRef(({primary:n,secondary:s,className:a,...i},c)=>e.jsxs("div",{ref:c,className:ee(Ot.cellStack,a),...i,children:[e.jsx("span",{className:Ot.cellStackPrimary,children:n}),s&&e.jsx("span",{className:Ot.cellStackSecondary,children:s})]}));lj.displayName="CellStack";const cj=v.forwardRef(({size:n="sm",...s},a)=>e.jsx(pt,{ref:a,size:n,...s}));cj.displayName="CellTag";const dj=v.forwardRef(({size:n="sm",...s},a)=>e.jsx(ro,{ref:a,size:n,...s}));dj.displayName="CellStatusTag";const uj=v.forwardRef(({className:n,children:s,...a},i)=>e.jsx("div",{ref:i,className:ee(Ot.cellActions,n),...a,children:s}));uj.displayName="CellActions";const pj=v.forwardRef(({className:n,children:s,...a},i)=>e.jsx("div",{ref:i,className:ee(Ot.cellControl,n),...a,children:s}));pj.displayName="CellControl";const hj="_root_1afcs_8",fj="_secondary_1afcs_23",mj="_header_1afcs_28",gj="_headerText_1afcs_36",vj="_title_1afcs_43",xj="_subtitle_1afcs_52",yj="_action_1afcs_61",wj="_hero_1afcs_66",bj="_heroValue_1afcs_74",jj="_heroCaption_1afcs_83",kj="_heroChange_1afcs_89",_j="_body_1afcs_95",Cj="_legend_1afcs_103",jn={root:hj,secondary:fj,header:mj,headerText:gj,title:vj,subtitle:xj,action:yj,hero:wj,heroValue:bj,heroCaption:jj,heroChange:kj,body:_j,legend:Cj},Sj=v.forwardRef(({title:n,subtitle:s,action:a,value:i,valueChange:c,valueCaption:u,legend:f,secondary:g,children:m,className:y,...x},k)=>e.jsxs("div",{ref:k,className:ee(jn.root,g&&jn.secondary,y),...x,children:[e.jsxs("div",{className:jn.header,children:[e.jsxs("div",{className:jn.headerText,children:[e.jsx("h3",{className:jn.title,children:n}),s&&e.jsx("p",{className:jn.subtitle,children:s})]}),a&&e.jsx("div",{className:jn.action,children:a})]}),(i!==void 0||c||u)&&e.jsxs("div",{className:jn.hero,children:[i!==void 0&&e.jsx("span",{className:jn.heroValue,children:i}),c&&e.jsx("span",{className:jn.heroChange,children:c}),u&&e.jsx("span",{className:jn.heroCaption,children:u})]}),e.jsx("div",{className:jn.body,children:m}),f&&e.jsx("div",{className:jn.legend,children:f})]}));Sj.displayName="ChartCard";const Mj="_root_je8nq_7",Ij="_item_je8nq_17",Nj="_swatch_je8nq_23",Aj="_label_je8nq_29",Tj="_bookend_je8nq_33",bs={root:Mj,item:Ij,swatch:Nj,label:Aj,bookend:Tj},xg=v.forwardRef(({items:n,before:s,after:a,variant:i="square",swatchSize:c=12,className:u,...f},g)=>e.jsxs("div",{ref:g,className:ee(bs.root,u),...f,children:[s&&e.jsx("span",{className:bs.bookend,children:s}),n.map((m,y)=>{const x=i==="line"?{width:c+4,height:2,background:m.color,borderRadius:1}:i==="dot"?{width:c-2,height:c-2,background:m.color,borderRadius:"50%"}:{width:c,height:c,background:m.color};return e.jsxs("span",{className:bs.item,children:[e.jsx("span",{className:bs.swatch,style:x,"aria-hidden":"true"}),m.label!==void 0&&e.jsx("span",{className:bs.label,children:m.label})]},y)}),a&&e.jsx("span",{className:bs.bookend,children:a})]}));xg.displayName="ChartLegend";const Lj="_root_igkx4_5",Ej="_svgWrap_igkx4_13",Rj="_svg_igkx4_13",$j="_gridLine_igkx4_23",Pj="_axisLabel_igkx4_28",Dj="_legendWrap_igkx4_43",zj="_legendItem_igkx4_51",Fj="_legendDot_igkx4_57",Oj="_legendLabel_igkx4_64",Bj="_tooltip_igkx4_71",Hj="_tooltipLabel_igkx4_85",Uj="_tooltipRow_igkx4_95",Wj="_tooltipDot_igkx4_101",qj="_tooltipSeries_igkx4_108",Vj="_tooltipValue_igkx4_115",De={root:Lj,svgWrap:Ej,svg:Rj,gridLine:$j,axisLabel:Pj,legendWrap:Dj,legendItem:zj,legendDot:Fj,legendLabel:Oj,tooltip:Bj,tooltipLabel:Hj,tooltipRow:Uj,tooltipDot:Wj,tooltipSeries:qj,tooltipValue:Vj},Gj=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function lu(n){if(n===0)return 10;const s=Math.pow(10,Math.floor(Math.log10(n))),a=n/s;return a<=1?s:a<=2?2*s:a<=5?5*s:10*s}function js(n){return n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)}k`:String(Math.round(n))}const Zj=v.forwardRef(({series:n,labels:s,variant:a="grouped",height:i=260,showGrid:c=!0,showLegend:u=!0,yUnit:f="",barRadius:g=2,colors:m,gradientFrom:y="#8c4fe2",gradientTo:x="#446cff",formatTooltipValue:k,stackStyle:b="gradient-each",capColor:C,className:L,...S},I)=>{var ge,Ae,$e,se;const M=m&&m.length>0?m:Gj,N=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[j,_]=v.useState({visible:!1,x:0,y:0,label:"",items:[]}),E=v.useRef(null),[z,R]=v.useState(540);v.useEffect(()=>{const oe=E.current;if(!oe)return;const pe=new ResizeObserver(Le=>{var ht;const Ge=(ht=Le[0])==null?void 0:ht.contentRect.width;Ge>0&&R(Math.floor(Ge))});pe.observe(oe);const xe=Math.floor(oe.getBoundingClientRect().width);return xe>0&&R(xe),()=>pe.disconnect()},[]);const F=44,X=0,Z=20,V=20,U=z,H=i,ne=U-F-X,K=H-Z-V,Y=5,J=n.map((oe,pe)=>oe.color??M[pe%M.length]);let q=0;a==="stacked"?s.forEach((oe,pe)=>{const xe=n.reduce((Le,Ge)=>Le+(Ge.data[pe]??0),0);xe>q&&(q=xe)}):a==="horizontal"?q=Math.max(...((ge=n[0])==null?void 0:ge.data)??[0]):n.forEach(oe=>oe.data.forEach(pe=>{pe>q&&(q=pe)}));const B=lu(q),$=Array.from({length:Y+1},(oe,pe)=>B*(pe/Y)).reverse(),A=oe=>V+K-oe/B*K,P=ne/s.length,te=3,re=a==="grouped"?Math.max(4,(P-te*(n.length+1))/n.length):P,fe=()=>_(oe=>({...oe,visible:!1})),we=v.useCallback(oe=>{const pe=oe.currentTarget.getBoundingClientRect(),xe=oe.clientX-pe.left,Le=Math.floor((xe-F)/P);if(Le<0||Le>=s.length){fe();return}const Ge=n.map((ht,ft)=>({color:J[ft],series:ht.label,value:ht.data[Le]??0}));_({visible:!0,x:oe.clientX+12,y:oe.clientY-8,label:s[Le],items:Ge})},[n,s,P,J,F]);if(a==="gradient"){const oe=((Ae=n[0])==null?void 0:Ae.data)??[],pe=(($e=n[0])==null?void 0:$e.label)??"",xe=44,Le=0,Ge=20,ht=20,ft=Math.max(U-xe-Le,1),mt=H-Ge-ht,Ke=Math.max(0,...oe),le=Ke>0?lu(Ke):10,de=5,Re=Array.from({length:de+1},(Te,at)=>le*at/de),je=Te=>Ge+mt-Te/le*mt,_e=ft/Math.max(1,oe.length),Ce=Te=>xe+_e*Te,Je=Te=>xe+_e*(Te+1),et=Te=>xe+_e*(Te+.5),Ze=oe.length===0?"":oe.map((Te,at)=>{const xt=je(Te);return`M ${Ce(at)} ${xt} L ${Je(at)} ${xt}`}).join(" "),Bt=[];oe.forEach((Te,at)=>{if(Te<=0)return;const xt=je(Te);Bt.push({x:Ce(at),y:xt,width:Math.max(Je(at)-Ce(at),0),height:Ge+mt-xt})});const zn=Math.max(1,Math.ceil(45/_e)),lo=s.length-1,Yo=k??(Te=>`${js(Te)}${f}`);return e.jsxs("div",{ref:I,className:ee(De.root,L),...S,children:[e.jsx("div",{ref:E,className:De.svgWrap,children:e.jsxs("svg",{width:U,height:H,viewBox:`0 0 ${U} ${H}`,className:De.svg,onMouseLeave:fe,onMouseMove:Te=>{const at=Te.currentTarget.getBoundingClientRect(),xt=Te.clientX-at.left,$t=Math.floor((xt-xe)/_e);if($t<0||$t>=oe.length){fe();return}_({visible:!0,x:Te.clientX+12,y:Te.clientY-8,label:s[$t]??"",items:[{color:x,series:pe,value:oe[$t]??0}]})},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:`${N}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:y}),e.jsx("stop",{offset:"100%",stopColor:x})]}),e.jsxs("linearGradient",{id:`${N}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:y,stopOpacity:"0.3"}),e.jsx("stop",{offset:"100%",stopColor:x,stopOpacity:"0"})]})]}),Re.map((Te,at)=>e.jsxs("g",{children:[c&&e.jsx("line",{x1:0,x2:U-Le,y1:je(Te),y2:je(Te),className:De.gridLine}),e.jsxs("text",{x:0,y:je(Te)-6,className:De.axisLabel,textAnchor:"start",children:[js(Te),f]})]},`t-${at}`)),Bt.map((Te,at)=>e.jsx("rect",{x:Te.x,y:Te.y,width:Te.width,height:Te.height,fill:`url(#${N}-fill)`},`b-${at}`)),Ze&&e.jsx("path",{d:Ze,fill:"none",stroke:`url(#${N}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),j.visible&&(()=>{var tr;const Te=(tr=E.current)==null?void 0:tr.getBoundingClientRect();if(!Te)return null;const at=j.x-12-Te.left,xt=Math.floor((at-xe)/_e);if(xt<0||xt>=oe.length)return null;const $t=oe[xt]??0;return $t<=0?null:e.jsx("circle",{cx:et(xt),cy:je($t),r:4,fill:x,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),s.map((Te,at)=>{const xt=at===0,$t=at===lo;if(!(xt||$t)&&at%zn!==0)return null;const Ys=xt?xe:$t?U-Le:et(at),Ks=xt?"start":$t?"end":"middle";return e.jsx("text",{x:Ys,y:H-ht+18,className:De.axisLabel,textAnchor:Ks,children:Te},`xl-${at}`)})]})}),j.visible&&j.items.length>0&&e.jsxs("div",{className:De.tooltip,style:{left:j.x,top:j.y},children:[e.jsx("div",{className:De.tooltipLabel,children:j.label}),j.items.map(Te=>e.jsxs("div",{className:De.tooltipRow,children:[e.jsx("span",{className:De.tooltipDot,style:{background:Te.color}}),e.jsx("span",{className:De.tooltipSeries,children:Te.series}),e.jsx("span",{className:De.tooltipValue,children:Yo(Te.value)})]},Te.series))]})]})}if(a==="horizontal"){const oe=((se=n[0])==null?void 0:se.data)??[],pe=lu(Math.max(...oe,1)),xe=28,Le=10,Ge=120,ft=U-Ge-44,mt=s.length*(xe+Le)+Le;return e.jsxs("div",{ref:I,className:ee(De.root,L),...S,children:[e.jsx("div",{ref:E,className:De.svgWrap,children:e.jsx("svg",{width:U,height:mt,viewBox:`0 0 ${U} ${mt}`,className:De.svg,onMouseLeave:fe,onMouseMove:Ke=>{var je;const le=Ke.currentTarget.getBoundingClientRect(),de=Ke.clientY-le.top,Re=Math.floor(de/(xe+Le));if(Re<0||Re>=s.length){fe();return}_({visible:!0,x:Ke.clientX+12,y:Ke.clientY-8,label:s[Re],items:[{color:J[0],series:((je=n[0])==null?void 0:je.label)??"",value:oe[Re]??0}]})},children:s.map((Ke,le)=>{const de=Le+le*(xe+Le),Re=oe[le]??0,je=Re/pe*ft;return e.jsxs("g",{children:[e.jsx("text",{x:Ge-8,y:de+xe/2+4,className:De.axisLabel,textAnchor:"end",children:Ke}),e.jsx("rect",{x:Ge,y:de,width:je,height:xe,rx:g,fill:J[0]}),e.jsxs("text",{x:Ge+je+6,y:de+xe/2+4,className:De.axisLabel,textAnchor:"start",children:[js(Re),f]})]},le)})})}),j.visible&&e.jsxs("div",{className:De.tooltip,style:{left:j.x,top:j.y},children:[e.jsx("div",{className:De.tooltipLabel,children:j.label}),j.items.map(Ke=>e.jsxs("div",{className:De.tooltipRow,children:[e.jsx("span",{className:De.tooltipDot,style:{background:Ke.color}}),e.jsx("span",{className:De.tooltipSeries,children:Ke.series}),e.jsxs("span",{className:De.tooltipValue,children:[js(Ke.value),f]})]},Ke.series))]})]})}return e.jsxs("div",{ref:I,className:ee(De.root,L),...S,children:[e.jsx("div",{ref:E,className:De.svgWrap,children:e.jsxs("svg",{width:U,height:H,viewBox:`0 0 ${U} ${H}`,className:De.svg,onMouseMove:we,onMouseLeave:fe,children:[e.jsx("defs",{children:J.flatMap((oe,pe)=>[e.jsxs("linearGradient",{id:`${N}-fill-${pe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:oe,stopOpacity:"0.3"}),e.jsx("stop",{offset:"100%",stopColor:oe,stopOpacity:"0"})]},`soft-${pe}`),e.jsxs("linearGradient",{id:`${N}-fill-strong-${pe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:oe,stopOpacity:"1"}),e.jsx("stop",{offset:"100%",stopColor:oe,stopOpacity:"0"})]},`strong-${pe}`)])}),$.map(oe=>{const pe=A(oe);return e.jsxs("g",{children:[c&&e.jsx("line",{x1:0,y1:pe,x2:U-X,y2:pe,className:De.gridLine}),e.jsxs("text",{x:0,y:pe-6,className:De.axisLabel,textAnchor:"start",children:[js(oe),f]})]},oe)}),s.map((oe,pe)=>{const xe=F+pe*P;if(a==="stacked"){let ht=0;const ft=n.map((je,_e)=>{const Ce=je.data[pe]??0,Je=Ce/B*K,et=A(ht+Ce);return ht+=Ce,{si:_e,value:Ce,barH:Je,y:et}}),mt=xe+(P-re)/2,Ke=ft.filter(je=>je.value>0),le=Ke.length>0?Ke[0].si:-1,de=Ke.length>0?Ke[Ke.length-1]:null,Re=C??(de?J[de.si]:"transparent");return e.jsxs("g",{children:[ft.map(({si:je,value:_e,barH:Ce,y:Je})=>{if(_e<=0)return null;if(b==="mono-scale"){const et=je===le;return e.jsx("rect",{x:mt,y:Je,width:re,height:Ce,fill:et?`url(#${N}-fill-strong-${je})`:J[je]},`fill-${je}`)}return e.jsx("rect",{x:mt,y:Je,width:re,height:Ce,fill:`url(#${N}-fill-${je})`},`fill-${je}`)}),b==="mono-scale"?de&&e.jsx("line",{x1:mt,x2:mt+re,y1:de.y,y2:de.y,stroke:Re,strokeWidth:2,strokeLinecap:"butt"}):ft.map(({si:je,value:_e,y:Ce})=>_e>0?e.jsx("line",{x1:mt,x2:mt+re,y1:Ce,y2:Ce,stroke:J[je],strokeWidth:2,strokeLinecap:"butt"},`cap-${je}`):null)]},pe)}const Le=n.length*re+(n.length-1)*te,Ge=xe+(P-Le)/2;return e.jsx("g",{children:n.map((ht,ft)=>{const mt=ht.data[pe]??0;if(mt<=0)return null;const Ke=mt/B*K,le=Ge+ft*(re+te),de=A(mt);return e.jsxs("g",{children:[e.jsx("rect",{x:le,y:de,width:re,height:Ke,fill:`url(#${N}-fill-${ft})`}),e.jsx("line",{x1:le,x2:le+re,y1:de,y2:de,stroke:J[ft],strokeWidth:2,strokeLinecap:"butt"})]},ft)})},pe)}),(()=>{const pe=Math.max(1,Math.ceil(45/P)),xe=s.length-1;return s.map((Le,Ge)=>{const ht=Ge===0,ft=Ge===xe;if(!(ht||ft)&&Ge%pe!==0)return null;const Ke=ht?F:ft?U-X:F+P*(Ge+.5),le=ht?"start":ft?"end":"middle";return e.jsx("text",{x:Ke,y:H-Z+18,className:De.axisLabel,textAnchor:le,children:Le},`xl-${Ge}`)})})()]})}),u&&n.length>1&&e.jsx("div",{className:De.legendWrap,children:n.map((oe,pe)=>e.jsxs("div",{className:De.legendItem,children:[e.jsx("span",{className:De.legendDot,style:{background:J[pe]}}),e.jsx("span",{className:De.legendLabel,children:oe.label})]},oe.label))}),j.visible&&e.jsxs("div",{className:De.tooltip,style:{left:j.x,top:j.y},children:[e.jsx("div",{className:De.tooltipLabel,children:j.label}),j.items.map(oe=>e.jsxs("div",{className:De.tooltipRow,children:[e.jsx("span",{className:De.tooltipDot,style:{background:oe.color}}),e.jsx("span",{className:De.tooltipSeries,children:oe.series}),e.jsxs("span",{className:De.tooltipValue,children:[js(oe.value),f]})]},oe.series))]})]})});Zj.displayName="BarChart";const Yj="_root_1crij_5",Kj="_svgWrap_1crij_13",Qj="_svg_1crij_13",Xj="_gridLine_1crij_23",Jj="_axisLabelY_1crij_35 _axisLabel_1crij_28",ek="_axisLabelX_1crij_39 _axisLabel_1crij_28",tk="_legendWrap_1crij_51",nk="_tooltip_1crij_76",rk="_tooltipLabel_1crij_95",ok="_tooltipRow_1crij_105",sk="_tooltipDot_1crij_111",ak="_tooltipSeries_1crij_118",ik="_tooltipValue_1crij_125",kn={root:Yj,svgWrap:Kj,svg:Qj,gridLine:Xj,axisLabelY:Jj,axisLabelX:ek,legendWrap:tk,tooltip:nk,tooltipLabel:rk,tooltipRow:ok,tooltipDot:sk,tooltipSeries:ak,tooltipValue:ik};function lk(n){if(n===0)return 10;const s=Math.pow(10,Math.floor(Math.log10(n))),a=n/s;return a<=1?s:a<=2?2*s:a<=5?5*s:10*s}function Bf(n){return n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)}k`:String(Math.round(n))}function ck(n,s=.35){if(n.length<2)return"";let a=`M ${n[0][0]} ${n[0][1]}`;for(let i=0;i<n.length-1;i++){const[c,u]=n[i],[f,g]=n[i+1],m=(f-c)*s;a+=` C ${c+m} ${u}, ${f-m} ${g}, ${f} ${g}`}return a}const dk=v.forwardRef(({series:n,labels:s,height:a=260,showGrid:i=!0,showLegend:c=!0,gradientFrom:u="#8c4fe2",gradientTo:f="#446cff",yUnit:g="",yTickCount:m=5,className:y,...x},k)=>{const[b,C]=v.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),L=`line-grad-${Math.random().toString(36).slice(2,9)}`,S=v.useRef(null),[I,M]=v.useState(540);v.useEffect(()=>{const B=S.current;if(!B)return;const $=new ResizeObserver(P=>{var re;const te=(re=P[0])==null?void 0:re.contentRect.width;te>0&&M(Math.floor(te))});$.observe(B);const A=Math.floor(B.getBoundingClientRect().width);return A>0&&M(A),()=>$.disconnect()},[]);const N=44,j=20,_=20,E=I,z=a,R=E-N,F=z-j-_,X=`url(#${L}-stroke)`,Z=B=>B.color??X,V=n.flatMap(B=>B.data),U=lk(Math.max(...V,1)),H=Array.from({length:m+1},(B,$)=>U*($/m)).reverse(),ne=B=>_+F-B/U*F,K=B=>s.length>1?N+B/(s.length-1)*R:N+R/2,Y=B=>B.map(($,A)=>[K(A),ne($)]),J=()=>C(B=>({...B,visible:!1})),q=v.useCallback(B=>{const $=B.currentTarget.getBoundingClientRect(),P=B.clientX-$.left-N,te=R/Math.max(s.length-1,1),re=Math.round(P/te),fe=Math.max(0,Math.min(re,s.length-1)),we=n.map(ge=>({color:ge.color??f,series:ge.label,value:ge.data[fe]??0}));C({visible:!0,index:fe,x:B.clientX+12,y:B.clientY-8,label:s[fe],items:we})},[n,s,f,R,N]);return e.jsxs("div",{ref:k,className:ee(kn.root,y),...x,children:[e.jsx("div",{ref:S,className:kn.svgWrap,children:e.jsxs("svg",{width:E,height:z,viewBox:`0 0 ${E} ${z}`,className:kn.svg,onMouseMove:q,onMouseLeave:J,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:`${L}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:u}),e.jsx("stop",{offset:"100%",stopColor:f})]}),e.jsxs("linearGradient",{id:`${L}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:f,stopOpacity:"0.05"}),e.jsx("stop",{offset:"50%",stopColor:f}),e.jsx("stop",{offset:"100%",stopColor:f,stopOpacity:"0.05"})]}),e.jsxs("filter",{id:`${L}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[e.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),e.jsx("feOffset",{dy:"4"}),e.jsx("feComponentTransfer",{children:e.jsx("feFuncA",{type:"linear",slope:"0.3"})}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),e.jsx("clipPath",{id:`${L}-clip`,children:e.jsx("rect",{x:N,y:_,width:R,height:F,rx:6,ry:6})})]}),H.map(B=>{const $=ne(B);return e.jsxs("g",{children:[i&&e.jsx("line",{x1:0,y1:$,x2:E,y2:$,className:kn.gridLine}),e.jsxs("text",{x:0,y:$-6,className:kn.axisLabelY,textAnchor:"start",children:[Bf(B),g]})]},B)}),e.jsx("g",{clipPath:`url(#${L}-clip)`,children:n.map((B,$)=>{const A=Y(B.data),P=ck(A);return e.jsx("path",{d:P,fill:"none",stroke:Z(B),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},$)})}),(()=>{const B=b.index>=0?b.index:0,$=K(B),A=b.visible&&b.index>=0,P="transform 200ms var(--ease-default, ease-out)";return e.jsx("g",{style:{pointerEvents:"none",opacity:A?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:e.jsxs("g",{style:{transform:`translateX(${$}px)`,transition:P},children:[e.jsx("line",{x1:0,x2:0,y1:_,y2:_+F,stroke:f,strokeWidth:2,strokeLinecap:"round",opacity:.5}),n.map((te,re)=>{const fe=te.data[B]??0,we=ne(fe),ge=te.color??f;return e.jsx("g",{style:{transform:`translateY(${we}px)`,transition:P},children:e.jsx("circle",{cx:0,cy:0,r:4,fill:ge,filter:`url(#${L}-pin-shadow)`})},re)})]})})})(),(()=>{const $=s.length>1?R/(s.length-1):R,A=Math.max(1,Math.ceil(45/Math.max($,1))),P=s.length-1;return s.map((te,re)=>{const fe=re===0,we=re===P;if(!(fe||we)&&re%A!==0)return null;const Ae=fe?N:we?E:K(re),$e=fe?"start":we?"end":"middle";return e.jsx("text",{x:Ae,y:z-j+14,className:kn.axisLabelX,textAnchor:$e,children:te},te)})})()]})}),c&&n.length>0&&e.jsx("div",{className:kn.legendWrap,children:e.jsx(xg,{variant:"line",items:n.map(B=>({color:B.color??f,label:B.label}))})}),b.visible&&e.jsxs("div",{className:kn.tooltip,style:{left:b.x,top:b.y},children:[e.jsx("div",{className:kn.tooltipLabel,children:b.label}),b.items.map(B=>e.jsxs("div",{className:kn.tooltipRow,children:[e.jsx("span",{className:kn.tooltipDot,style:{background:B.color}}),e.jsx("span",{className:kn.tooltipSeries,children:B.series}),e.jsxs("span",{className:kn.tooltipValue,children:[Bf(B.value),g]})]},B.series))]})]})});dk.displayName="LineChart";const uk="_root_3tq2n_5",pk="_chartWrap_3tq2n_14",hk="_svg_3tq2n_18",fk="_centerText_3tq2n_23",mk="_statLegend_3tq2n_31",gk="_statItem_3tq2n_37",vk="_statBar_3tq2n_44",xk="_statText_3tq2n_50",yk="_statValue_3tq2n_56",wk="_statLabel_3tq2n_65",bk="_listLegend_3tq2n_72",jk="_legendItem_3tq2n_79",kk="_legendDot_3tq2n_85",_k="_legendLabel_3tq2n_92",Ck="_legendValue_3tq2n_99",Sk="_tooltip_3tq2n_107",Mk="_tooltipLabel_3tq2n_118",Ik="_tooltipValue_3tq2n_124",Ft={root:uk,chartWrap:pk,svg:hk,centerText:fk,statLegend:mk,statItem:gk,statBar:vk,statText:xk,statValue:yk,statLabel:wk,listLegend:bk,legendItem:jk,legendDot:kk,legendLabel:_k,legendValue:Ck,tooltip:Sk,tooltipLabel:Mk,tooltipValue:Ik},Hf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],Nk=v.forwardRef(({segments:n,innerRadius:s=60,size:a=200,showLegend:i=!0,legendVariant:c="list",unit:u="%",centerLabel:f,className:g,...m},y)=>{const[x,k]=v.useState({visible:!1,x:0,y:0,label:"",value:""}),b=n.map((E,z)=>E.color??Hf[z%Hf.length]),C=n.reduce((E,z)=>E+z.value,0),L=a/2,S=a/2,I=a*.15,M=(a-I)/2-2,N=2*Math.PI*M;let j=-N/4;const _=n.map((E,z)=>{const F=(C>0?E.value/C:0)*N,X=`${F} ${N-F}`,Z=-j;return j+=F,{dashArray:X,dashOffset:Z,color:b[z],...E}});return e.jsxs("div",{ref:y,className:ee(Ft.root,g),...m,children:[e.jsx("div",{className:Ft.chartWrap,children:e.jsxs("svg",{width:a,height:a,viewBox:`0 0 ${a} ${a}`,className:Ft.svg,children:[e.jsx("circle",{cx:L,cy:S,r:M,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:I}),_.map((E,z)=>e.jsx("circle",{cx:L,cy:S,r:M,fill:"none",stroke:E.color,strokeWidth:I,strokeDasharray:E.dashArray,strokeDashoffset:E.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:R=>{const F=C>0?Math.round(E.value/C*100):0;k({visible:!0,x:R.clientX+12,y:R.clientY-8,label:E.label,value:`${F}${u}`})},onMouseLeave:()=>k(R=>({...R,visible:!1}))},z)),f&&s>0&&e.jsx("text",{x:L,y:S+6,textAnchor:"middle",className:Ft.centerText,children:f})]})}),i&&c==="stat"&&e.jsx("div",{className:Ft.statLegend,children:n.map((E,z)=>{const R=C>0?Math.round(E.value/C*100):0;return e.jsxs("div",{className:Ft.statItem,children:[e.jsx("span",{className:Ft.statBar,style:{background:b[z]}}),e.jsxs("div",{className:Ft.statText,children:[e.jsxs("span",{className:Ft.statValue,children:[R,u]}),e.jsx("span",{className:Ft.statLabel,children:E.label})]})]},E.label)})}),i&&c==="list"&&e.jsx("div",{className:Ft.listLegend,children:n.map((E,z)=>{const R=C>0?Math.round(E.value/C*100):0;return e.jsxs("div",{className:Ft.legendItem,children:[e.jsx("span",{className:Ft.legendDot,style:{background:b[z]}}),e.jsx("span",{className:Ft.legendLabel,children:E.label}),e.jsxs("span",{className:Ft.legendValue,children:[R,u]})]},E.label)})}),x.visible&&e.jsxs("div",{className:Ft.tooltip,style:{left:x.x,top:x.y},children:[e.jsx("div",{className:Ft.tooltipLabel,children:x.label}),e.jsx("div",{className:Ft.tooltipValue,children:x.value})]})]})});Nk.displayName="DonutChart";const Ak="_root_bqpf6_5",Tk="_svgWrap_bqpf6_10",Lk="_svg_bqpf6_10",Ek="_axisLabel_bqpf6_19",Rk="_tooltip_bqpf6_25",ks={root:Ak,svgWrap:Tk,svg:Lk,axisLabel:Ek,tooltip:Rk};function $k(n){return n<.35?"var(--Alloy-green-100)":n<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const Pk=v.forwardRef(({cells:n,rows:s,cols:a,colorScale:i=$k,cellRadius:c=4,cellGap:u=4,showTooltip:f=!0,className:g,...m},y)=>{const[x,k]=v.useState({visible:!1,x:0,y:0,content:""}),b=v.useRef(null),[C,L]=v.useState(540);v.useEffect(()=>{const z=b.current;if(!z)return;const R=new ResizeObserver(X=>{var V;const Z=(V=X[0])==null?void 0:V.contentRect.width;Z>0&&L(Math.floor(Z))});R.observe(z);const F=Math.floor(z.getBoundingClientRect().width);return F>0&&L(F),()=>R.disconnect()},[]);const S=32,I=16,M=C,N=M-S-u,j=Math.max(4,(N-(a.length-1)*u)/a.length),_=s.length*(I+u)+u+24,E=new Map;return n.forEach(z=>E.set(`${z.row}__${z.col}`,z)),e.jsxs("div",{ref:y,className:ee(ks.root,g),...m,children:[e.jsx("div",{ref:b,className:ks.svgWrap,children:e.jsxs("svg",{width:M,height:_,viewBox:`0 0 ${M} ${_}`,className:ks.svg,onMouseLeave:()=>k(z=>({...z,visible:!1})),children:[a.map((z,R)=>{const F=S+u+R*(j+u)+j/2;return e.jsx("text",{x:F,y:12,className:ks.axisLabel,textAnchor:"middle",children:z},z)}),s.map((z,R)=>{const F=24+R*(I+u);return e.jsxs("g",{children:[e.jsx("text",{x:S-4,y:F+I/2+4,className:ks.axisLabel,textAnchor:"end",children:z}),a.map((X,Z)=>{const V=E.get(`${z}__${X}`),U=(V==null?void 0:V.value)??0,H=i(U),ne=S+u+Z*(j+u);return e.jsx("rect",{x:ne,y:F,width:j,height:I,rx:c,fill:H,style:{cursor:"pointer"},onMouseEnter:K=>{if(!f)return;const Y=(V==null?void 0:V.label)??`${z} / ${X}: ${Math.round(U*100)}%`;k({visible:!0,x:K.clientX+12,y:K.clientY-8,content:Y})},onMouseLeave:()=>k(K=>({...K,visible:!1}))},X)})]},z)})]})}),x.visible&&e.jsx("div",{className:ks.tooltip,style:{left:x.x,top:x.y},children:x.content})]})});Pk.displayName="HeatMap";const Dk="_root_18572_6",zk="_gridWrap_18572_14",Fk="_grid_18572_14",Ok="_cell_18572_27",Bk="_legend_18572_33",Hk="_legendSquare_18572_43",Uk="_tooltip_18572_49",Kr={root:Dk,gridWrap:zk,grid:Fk,cell:Ok,legend:Bk,legendSquare:Hk,tooltip:Uk},Wk=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function qk(n,s){if(n<=0)return 0;const a=n/Math.max(1,s);return a<=.25?1:a<=.5?2:a<=.75?3:4}const Vk=v.forwardRef(({days:n,levelColors:s=Wk,cellSize:a=14,cellGap:i=3,cellRadius:c=2,fillWidth:u=!1,showLegend:f=!0,maxCount:g,formatTooltip:m,ariaLabel:y,className:x,...k},b)=>{const[C,L]=v.useState({visible:!1,x:0,y:0,content:""}),S=g??Math.max(1,...n.map(j=>j.count)),I=[];for(let j=0;j<n.length;j+=7)I.push(n.slice(j,j+7));const M=u?{gridTemplateRows:`repeat(7, ${a}px)`,gridTemplateColumns:`repeat(${I.length}, minmax(0, 1fr))`,gap:`${i}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${a}px)`,gridAutoColumns:`${a}px`,gap:`${i}px`},N=u?"100%":a;return e.jsxs("div",{ref:b,className:ee(Kr.root,x),...k,children:[e.jsx("div",{className:Kr.gridWrap,children:e.jsx("div",{role:"img","aria-label":y??`Activity heatmap with max ${S} on the busiest day`,className:Kr.grid,style:M,onMouseLeave:()=>L(j=>({...j,visible:!1})),children:I.map((j,_)=>Array.from({length:7},(E,z)=>{const R=j[z];if(!R)return e.jsx("span",{className:Kr.cell,style:{width:a,height:a,borderRadius:c,background:s[0]}},`${_}-${z}`);const F=qk(R.count,S),X=m?m(R,F):`${R.label??R.date}: ${R.count} activation${R.count===1?"":"s"}`;return e.jsx("span",{className:Kr.cell,style:{width:N,height:a,borderRadius:c,background:s[F]},onMouseMove:Z=>L({visible:!0,x:Z.clientX,y:Z.clientY,content:X}),onMouseLeave:()=>L(Z=>({...Z,visible:!1}))},`${_}-${z}`)}))})}),f&&e.jsxs("div",{className:Kr.legend,children:[e.jsx("span",{children:"Less"}),[0,1,2,3,4].map(j=>e.jsx("span",{className:Kr.legendSquare,style:{background:s[j],borderRadius:c}},j)),e.jsx("span",{children:"More"})]}),C.visible&&e.jsx("div",{className:Kr.tooltip,style:{left:C.x,top:C.y},children:C.content})]})});Vk.displayName="ActivityHeatMap";const Gk="_root_14edh_5",Zk="_track_14edh_17",Yk="_segment_14edh_28",Kk="_legend_14edh_49",Qk="_legendRow_14edh_58",Xk="_legendDot_14edh_68",Jk="_legendLabel_14edh_74",e_="_legendValue_14edh_78",t_="_tooltip_14edh_84",n_="_tooltipLabel_14edh_100",r_="_tooltipValueRow_14edh_105",o_="_tooltipDot_14edh_114",Tn={root:Gk,track:Zk,segment:Yk,legend:Kk,legendRow:Qk,legendDot:Xk,legendLabel:Jk,legendValue:e_,tooltip:t_,tooltipLabel:n_,tooltipValueRow:r_,tooltipDot:o_},s_=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],_s={r:140,g:79,b:226},cu={r:68,g:108,b:255};function Uf(n){const s=Math.max(0,Math.min(100,n))/100,a=Math.round(_s.r+(cu.r-_s.r)*s),i=Math.round(_s.g+(cu.g-_s.g)*s),c=Math.round(_s.b+(cu.b-_s.b)*s);return`rgb(${a}, ${i}, ${c})`}const a_=v.forwardRef(({segments:n,colors:s=s_,aiGradient:a=!1,height:i,showLegend:c=!1,flat:u=!1,ariaLabel:f,className:g,...m},y)=>{const[x,k]=v.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),b=n.reduce((I,M)=>I+Math.max(0,M.value),0);let C=0;const L=n.map((I,M)=>{const N=Math.max(0,I.value),j=b>0?N/b*100:0,_=b>0?C/b*100:0;C+=N;const E=b>0?C/b*100:0,z=I.color??s[M%s.length],R=u?!0:I.emphasized??M===0;return{...I,pct:j,startPct:_,endPct:E,color:z,emphasized:R}}),S=i!==void 0?{height:typeof i=="number"?`${i}px`:i}:void 0;return e.jsxs("div",{ref:y,className:ee(Tn.root,g),...m,children:[e.jsx("div",{role:"img","aria-label":f??`Ratio bar: ${n.map(I=>`${I.label} ${I.value}`).join(", ")}`,className:Tn.track,style:S,onMouseLeave:()=>k(I=>({...I,visible:!1})),children:L.map(I=>{const M=a?`linear-gradient(to right, ${Uf(I.startPct)}, ${Uf(I.endPct)})`:I.color;return e.jsx("span",{className:Tn.segment,"data-emphasized":I.emphasized||void 0,"data-ai":a||void 0,style:{width:`${I.pct}%`,background:M,"--ratio-hover-bg":I.color},onMouseMove:N=>k({visible:!0,x:N.clientX,y:N.clientY,label:I.label,value:I.value,color:I.color})},I.label)})}),c&&e.jsx("ul",{className:Tn.legend,children:L.map(I=>e.jsxs("li",{className:Tn.legendRow,children:[e.jsx("span",{className:Tn.legendDot,style:{background:I.color}}),e.jsx("span",{className:Tn.legendLabel,children:I.label}),e.jsx("span",{className:Tn.legendValue,children:I.value.toLocaleString("en-US")})]},I.label))}),x.visible&&e.jsxs("div",{className:Tn.tooltip,style:{left:x.x,top:x.y},children:[e.jsx("span",{className:Tn.tooltipLabel,children:x.label}),e.jsxs("span",{className:Tn.tooltipValueRow,children:[e.jsx("span",{className:Tn.tooltipDot,style:{background:x.color}}),x.value.toLocaleString("en-US")]})]})]})});a_.displayName="RatioBar";const i_="_track_1wmly_6",l_="_fill_1wmly_12",Wf={track:i_,fill:l_},c_=v.forwardRef(({value:n,max:s=100,fill:a="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:i="var(--color-bg-tertiary)",gapColor:c="var(--color-bg-primary)",stripeWidth:u=2,stripeGap:f=1,height:g=12,ariaLabel:m,className:y,style:x,...k},b)=>{const C=u+f,L=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${u}px,
      ${c} ${u}px,
      ${c} ${C}px
    )`,S=Math.max(0,Math.min(s,n)),I=s>0?S/s*100:0;return e.jsx("div",{ref:b,role:"progressbar","aria-label":m??`Progress: ${Math.round(I)}%`,"aria-valuemin":0,"aria-valuemax":s,"aria-valuenow":S,className:ee(Wf.track,y),style:{height:g,background:`${L}, ${i}`,...x},...k,children:e.jsx("div",{className:Wf.fill,style:{width:`${I}%`,background:`${L}, ${a}`}})})});c_.displayName="StripedBar";const d_=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],u_=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function qf(n,s="to right"){const a=n.map(({color:i,position:c})=>`${i} ${c}`).join(", ");return`linear-gradient(${s}, ${a})`}qf(d_),qf(u_);var Xt=function(){return Xt=Object.assign||function(s){for(var a,i=1,c=arguments.length;i<c;i++){a=arguments[i];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(s[u]=a[u])}return s},Xt.apply(this,arguments)};function Os(n,s,a){if(a||arguments.length===2)for(var i=0,c=s.length,u;i<c;i++)(u||!(i in s))&&(u||(u=Array.prototype.slice.call(s,0,i)),u[i]=s[i]);return n.concat(u||Array.prototype.slice.call(s))}var p_={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut="-ms-",Wa="-moz-",Ye="-webkit-",yg="comm",oc="rule",fp="decl",h_="@import",f_="@namespace",wg="@keyframes",m_="@layer",bg=Math.abs,mp=String.fromCharCode,Fu=Object.assign;function g_(n,s){return Rt(n,0)^45?(((s<<2^Rt(n,0))<<2^Rt(n,1))<<2^Rt(n,2))<<2^Rt(n,3):0}function jg(n){return n.trim()}function Mr(n,s){return(n=s.exec(n))?n[0]:n}function Pe(n,s,a){return n.replace(s,a)}function Ll(n,s,a){return n.indexOf(s,a)}function Rt(n,s){return n.charCodeAt(s)|0}function Ro(n,s,a){return n.slice(s,a)}function Kn(n){return n.length}function kg(n){return n.length}function Oa(n,s){return s.push(n),n}function v_(n,s){return n.map(s).join("")}function Vf(n,s){return n.filter(function(a){return!Mr(a,s)})}var sc=1,Bs=1,_g=0,Pn=0,Tt=0,Zs="";function ac(n,s,a,i,c,u,f,g){return{value:n,root:s,parent:a,type:i,props:c,children:u,line:sc,column:Bs,length:f,return:"",siblings:g}}function Qr(n,s){return Fu(ac("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},s)}function Cs(n){for(;n.root;)n=Qr(n.root,{children:[n]});Oa(n,n.siblings)}function x_(){return Tt}function y_(){return Tt=Pn>0?Rt(Zs,--Pn):0,Bs--,Tt===10&&(Bs=1,sc--),Tt}function Xn(){return Tt=Pn<_g?Rt(Zs,Pn++):0,Bs++,Tt===10&&(Bs=1,sc++),Tt}function Jr(){return Rt(Zs,Pn)}function El(){return Pn}function ic(n,s){return Ro(Zs,n,s)}function Ga(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function w_(n){return sc=Bs=1,_g=Kn(Zs=n),Pn=0,[]}function b_(n){return Zs="",n}function du(n){return jg(ic(Pn-1,Ou(n===91?n+2:n===40?n+1:n)))}function j_(n){for(;(Tt=Jr())&&Tt<33;)Xn();return Ga(n)>2||Ga(Tt)>3?"":" "}function k_(n,s){for(;--s&&Xn()&&!(Tt<48||Tt>102||Tt>57&&Tt<65||Tt>70&&Tt<97););return ic(n,El()+(s<6&&Jr()==32&&Xn()==32))}function Ou(n){for(;Xn();)switch(Tt){case n:return Pn;case 34:case 39:n!==34&&n!==39&&Ou(Tt);break;case 40:n===41&&Ou(n);break;case 92:Xn();break}return Pn}function __(n,s){for(;Xn()&&n+Tt!==57;)if(n+Tt===84&&Jr()===47)break;return"/*"+ic(s,Pn-1)+"*"+mp(n===47?n:Xn())}function C_(n){for(;!Ga(Jr());)Xn();return ic(n,Pn)}function S_(n){return b_(Rl("",null,null,null,[""],n=w_(n),0,[0],n))}function Rl(n,s,a,i,c,u,f,g,m){for(var y=0,x=0,k=f,b=0,C=0,L=0,S=1,I=1,M=1,N=0,j="",_=c,E=u,z=i,R=j;I;)switch(L=N,N=Xn()){case 40:if(L!=108&&Rt(R,k-1)==58){Ll(R+=Pe(du(N),"&","&\f"),"&\f",bg(y?g[y-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:R+=du(N);break;case 9:case 10:case 13:case 32:R+=j_(L);break;case 92:R+=k_(El()-1,7);continue;case 47:switch(Jr()){case 42:case 47:Oa(M_(__(Xn(),El()),s,a,m),m),(Ga(L||1)==5||Ga(Jr()||1)==5)&&Kn(R)&&Ro(R,-1,void 0)!==" "&&(R+=" ");break;default:R+="/"}break;case 123*S:g[y++]=Kn(R)*M;case 125*S:case 59:case 0:switch(N){case 0:case 125:I=0;case 59+x:M==-1&&(R=Pe(R,/\f/g,"")),C>0&&(Kn(R)-k||S===0&&L===47)&&Oa(C>32?Zf(R+";",i,a,k-1,m):Zf(Pe(R," ","")+";",i,a,k-2,m),m);break;case 59:R+=";";default:if(Oa(z=Gf(R,s,a,y,x,c,g,j,_=[],E=[],k,u),u),N===123)if(x===0)Rl(R,s,z,z,_,u,k,g,E);else{switch(b){case 99:if(Rt(R,3)===110)break;case 108:if(Rt(R,2)===97)break;default:x=0;case 100:case 109:case 115:}x?Rl(n,z,z,i&&Oa(Gf(n,z,z,0,0,c,g,j,c,_=[],k,E),E),c,E,k,g,i?_:E):Rl(R,z,z,z,[""],E,0,g,E)}}y=x=C=0,S=M=1,j=R="",k=f;break;case 58:k=1+Kn(R),C=L;default:if(S<1){if(N==123)--S;else if(N==125&&S++==0&&y_()==125)continue}switch(R+=mp(N),N*S){case 38:M=x>0?1:(R+="\f",-1);break;case 44:g[y++]=(Kn(R)-1)*M,M=1;break;case 64:Jr()===45&&(R+=du(Xn())),b=Jr(),x=k=Kn(j=R+=C_(El())),N++;break;case 45:L===45&&Kn(R)==2&&(S=0)}}return u}function Gf(n,s,a,i,c,u,f,g,m,y,x,k){for(var b=c-1,C=c===0?u:[""],L=kg(C),S=0,I=0,M=0;S<i;++S)for(var N=0,j=Ro(n,b+1,b=bg(I=f[S])),_=n;N<L;++N)(_=jg(I>0?C[N]+" "+j:Pe(j,/&\f/g,C[N])))&&(m[M++]=_);return ac(n,s,a,c===0?oc:g,m,y,x,k)}function M_(n,s,a,i){return ac(n,s,a,yg,mp(x_()),Ro(n,2,-2),0,i)}function Zf(n,s,a,i,c){return ac(n,s,a,fp,Ro(n,0,i),Ro(n,i+1,-1),i,c)}function Cg(n,s,a){switch(g_(n,s)){case 5103:return Ye+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ye+n+n;case 4855:return Ye+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Wa+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ye+n+Wa+n+ut+n+n;case 5936:switch(Rt(n,s+11)){case 114:return Ye+n+ut+Pe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ye+n+ut+Pe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ye+n+ut+Pe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ye+n+ut+n+n;case 6165:return Ye+n+ut+"flex-"+n+n;case 5187:return Ye+n+Pe(n,/(\w+).+(:[^]+)/,Ye+"box-$1$2"+ut+"flex-$1$2")+n;case 5443:return Ye+n+ut+"flex-item-"+Pe(n,/flex-|-self/g,"")+(Mr(n,/flex-|baseline/)?"":ut+"grid-row-"+Pe(n,/flex-|-self/g,""))+n;case 4675:return Ye+n+ut+"flex-line-pack"+Pe(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ye+n+ut+Pe(n,"shrink","negative")+n;case 5292:return Ye+n+ut+Pe(n,"basis","preferred-size")+n;case 6060:return Ye+"box-"+Pe(n,"-grow","")+Ye+n+ut+Pe(n,"grow","positive")+n;case 4554:return Ye+Pe(n,/([^-])(transform)/g,"$1"+Ye+"$2")+n;case 6187:return Pe(Pe(Pe(n,/(zoom-|grab)/,Ye+"$1"),/(image-set)/,Ye+"$1"),n,"")+n;case 5495:case 3959:return Pe(n,/(image-set\([^]*)/,Ye+"$1$`$1");case 4968:return Pe(Pe(n,/(.+:)(flex-)?(.*)/,Ye+"box-pack:$3"+ut+"flex-pack:$3"),/space-between/,"justify")+Ye+n+n;case 4200:if(!Mr(n,/flex-|baseline/))return ut+"grid-column-align"+Ro(n,s)+n;break;case 2592:case 3360:return ut+Pe(n,"template-","")+n;case 4384:case 3616:return a&&a.some(function(i,c){return s=c,Mr(i.props,/grid-\w+-end/)})?~Ll(n+(a=a[s].value),"span",0)?n:ut+Pe(n,"-start","")+n+ut+"grid-row-span:"+(~Ll(a,"span",0)?Mr(a,/\d+/):+Mr(a,/\d+/)-+Mr(n,/\d+/))+";":ut+Pe(n,"-start","")+n;case 4896:case 4128:return a&&a.some(function(i){return Mr(i.props,/grid-\w+-start/)})?n:ut+Pe(Pe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Pe(n,/(.+)-inline(.+)/,Ye+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kn(n)-1-s>6)switch(Rt(n,s+1)){case 109:if(Rt(n,s+4)!==45)break;case 102:return Pe(n,/(.+:)(.+)-([^]+)/,"$1"+Ye+"$2-$3$1"+Wa+(Rt(n,s+3)==108?"$3":"$2-$3"))+n;case 115:return~Ll(n,"stretch",0)?Cg(Pe(n,"stretch","fill-available"),s,a)+n:n}break;case 5152:case 5920:return Pe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,c,u,f,g,m,y){return ut+c+":"+u+y+(f?ut+c+"-span:"+(g?m:+m-+u)+y:"")+n});case 4949:if(Rt(n,s+6)===121)return Pe(n,":",":"+Ye)+n;break;case 6444:switch(Rt(n,Rt(n,14)===45?18:11)){case 120:return Pe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ye+(Rt(n,14)===45?"inline-":"")+"box$3$1"+Ye+"$2$3$1"+ut+"$2box$3")+n;case 100:return Pe(n,":",":"+ut)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Pe(n,"scroll-","scroll-snap-")+n}return n}function zl(n,s){for(var a="",i=0;i<n.length;i++)a+=s(n[i],i,n,s)||"";return a}function I_(n,s,a,i){switch(n.type){case m_:if(n.children.length)break;case h_:case f_:case fp:return n.return=n.return||n.value;case yg:return"";case wg:return n.return=n.value+"{"+zl(n.children,i)+"}";case oc:if(!Kn(n.value=n.props.join(",")))return""}return Kn(a=zl(n.children,i))?n.return=n.value+"{"+a+"}":""}function N_(n){var s=kg(n);return function(a,i,c,u){for(var f="",g=0;g<s;g++)f+=n[g](a,i,c,u)||"";return f}}function A_(n){return function(s){s.root||(s=s.return)&&n(s)}}function T_(n,s,a,i){if(n.length>-1&&!n.return)switch(n.type){case fp:n.return=Cg(n.value,n.length,a);return;case wg:return zl([Qr(n,{value:Pe(n.value,"@","@"+Ye)})],i);case oc:if(n.length)return v_(a=n.props,function(c){switch(Mr(c,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cs(Qr(n,{props:[Pe(c,/:(read-\w+)/,":"+Wa+"$1")]})),Cs(Qr(n,{props:[c]})),Fu(n,{props:Vf(a,i)});break;case"::placeholder":Cs(Qr(n,{props:[Pe(c,/:(plac\w+)/,":"+Ye+"input-$1")]})),Cs(Qr(n,{props:[Pe(c,/:(plac\w+)/,":"+Wa+"$1")]})),Cs(Qr(n,{props:[Pe(c,/:(plac\w+)/,ut+"input-$1")]})),Cs(Qr(n,{props:[c]})),Fu(n,{props:Vf(a,i)});break}return""})}}var _n={},Hs=typeof process<"u"&&_n!==void 0&&(_n.REACT_APP_SC_ATTR||_n.SC_ATTR)||"data-styled",Sg="active",Mg="data-styled-version",lc="6.3.12",gp=`/*!sc*/
`,qa=typeof window<"u"&&typeof document<"u",L_=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_n!==void 0&&_n.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_n.REACT_APP_SC_DISABLE_SPEEDY!==""?_n.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_n.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_n!==void 0&&_n.SC_DISABLE_SPEEDY!==void 0&&_n.SC_DISABLE_SPEEDY!==""&&_n.SC_DISABLE_SPEEDY!=="false"&&_n.SC_DISABLE_SPEEDY),E_={};function si(n){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var $l=new Map,Fl=new Map,Pl=1,Ba=function(n){if($l.has(n))return $l.get(n);for(;Fl.has(Pl);)Pl++;var s=Pl++;return $l.set(n,s),Fl.set(s,n),s},R_=function(n,s){Pl=s+1,$l.set(n,s),Fl.set(s,n)},vp=Object.freeze([]),Us=Object.freeze({});function Ig(n,s,a){return a===void 0&&(a=Us),n.theme!==a.theme&&n.theme||s||a.theme}var Ng=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),$_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,P_=/(^-|-$)/g;function Yf(n){return n.replace($_,"-").replace(P_,"")}var D_=/(a)(d)/gi,Kf=function(n){return String.fromCharCode(n+(n>25?39:97))};function Bu(n){var s,a="";for(s=Math.abs(n);s>52;s=s/52|0)a=Kf(s%52)+a;return(Kf(s%52)+a).replace(D_,"$1-$2")}var uu,So=function(n,s){for(var a=s.length;a;)n=33*n^s.charCodeAt(--a);return n},Ag=function(n){return So(5381,n)};function xp(n){return Bu(Ag(n)>>>0)}function z_(n){return n.displayName||n.name||"Component"}function pu(n){return typeof n=="string"&&!0}var Tg=typeof Symbol=="function"&&Symbol.for,Lg=Tg?Symbol.for("react.memo"):60115,F_=Tg?Symbol.for("react.forward_ref"):60112,O_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},B_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Eg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},H_=((uu={})[F_]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},uu[Lg]=Eg,uu);function Qf(n){return("type"in(s=n)&&s.type.$$typeof)===Lg?Eg:"$$typeof"in n?H_[n.$$typeof]:O_;var s}var U_=Object.defineProperty,W_=Object.getOwnPropertyNames,Xf=Object.getOwnPropertySymbols,q_=Object.getOwnPropertyDescriptor,V_=Object.getPrototypeOf,Jf=Object.prototype;function Rg(n,s,a){if(typeof s!="string"){if(Jf){var i=V_(s);i&&i!==Jf&&Rg(n,i,a)}var c=W_(s);Xf&&(c=c.concat(Xf(s)));for(var u=Qf(n),f=Qf(s),g=0;g<c.length;++g){var m=c[g];if(!(m in B_||a&&a[m]||f&&m in f||u&&m in u)){var y=q_(s,m);try{U_(n,m,y)}catch{}}}}return n}function Ws(n){return typeof n=="function"}function yp(n){return typeof n=="object"&&"styledComponentId"in n}function Io(n,s){return n&&s?"".concat(n," ").concat(s):n||s||""}function Ol(n,s){return n.join("")}function Za(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Hu(n,s,a){if(a===void 0&&(a=!1),!a&&!Za(n)&&!Array.isArray(n))return s;if(Array.isArray(s))for(var i=0;i<s.length;i++)n[i]=Hu(n[i],s[i]);else if(Za(s))for(var i in s)n[i]=Hu(n[i],s[i]);return n}function wp(n,s){Object.defineProperty(n,"toString",{value:s})}var G_=(function(){function n(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s,this._cGroup=0,this._cIndex=0}return n.prototype.indexOfGroup=function(s){if(s===this._cGroup)return this._cIndex;var a=this._cIndex;if(s>this._cGroup)for(var i=this._cGroup;i<s;i++)a+=this.groupSizes[i];else for(i=this._cGroup-1;i>=s;i--)a-=this.groupSizes[i];return this._cGroup=s,this._cIndex=a,a},n.prototype.insertRules=function(s,a){if(s>=this.groupSizes.length){for(var i=this.groupSizes,c=i.length,u=c;s>=u;)if((u<<=1)<0)throw si(16,"".concat(s));this.groupSizes=new Uint32Array(u),this.groupSizes.set(i),this.length=u;for(var f=c;f<u;f++)this.groupSizes[f]=0}for(var g=this.indexOfGroup(s+1),m=0,y=(f=0,a.length);f<y;f++)this.tag.insertRule(g,a[f])&&(this.groupSizes[s]++,g++,m++);m>0&&this._cGroup>s&&(this._cIndex+=m)},n.prototype.clearGroup=function(s){if(s<this.length){var a=this.groupSizes[s],i=this.indexOfGroup(s),c=i+a;this.groupSizes[s]=0;for(var u=i;u<c;u++)this.tag.deleteRule(i);a>0&&this._cGroup>s&&(this._cIndex-=a)}},n.prototype.getGroup=function(s){var a="";if(s>=this.length||this.groupSizes[s]===0)return a;for(var i=this.groupSizes[s],c=this.indexOfGroup(s),u=c+i,f=c;f<u;f++)a+=this.tag.getRule(f)+gp;return a},n})(),Z_="style[".concat(Hs,"][").concat(Mg,'="').concat(lc,'"]'),Y_=new RegExp("^".concat(Hs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),e0=function(n){return typeof ShadowRoot<"u"&&n instanceof ShadowRoot||"host"in n&&n.nodeType===11},Uu=function(n){if(!n)return document;if(e0(n))return n;if("getRootNode"in n){var s=n.getRootNode();if(e0(s))return s}return document},K_=function(n,s,a){for(var i,c=a.split(","),u=0,f=c.length;u<f;u++)(i=c[u])&&n.registerName(s,i)},Q_=function(n,s){for(var a,i=((a=s.textContent)!==null&&a!==void 0?a:"").split(gp),c=[],u=0,f=i.length;u<f;u++){var g=i[u].trim();if(g){var m=g.match(Y_);if(m){var y=0|parseInt(m[1],10),x=m[2];y!==0&&(R_(x,y),K_(n,x,m[3]),n.getTag().insertRules(y,c)),c.length=0}else c.push(g)}}},hu=function(n){for(var s=Uu(n.options.target).querySelectorAll(Z_),a=0,i=s.length;a<i;a++){var c=s[a];c&&c.getAttribute(Hs)!==Sg&&(Q_(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function X_(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $g=function(n){var s=document.head,a=n||s,i=document.createElement("style"),c=(function(g){var m=Array.from(g.querySelectorAll("style[".concat(Hs,"]")));return m[m.length-1]})(a),u=c!==void 0?c.nextSibling:null;i.setAttribute(Hs,Sg),i.setAttribute(Mg,lc);var f=X_();return f&&i.setAttribute("nonce",f),a.insertBefore(i,u),i},J_=(function(){function n(s){this.element=$g(s),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){var i;if(a.sheet)return a.sheet;for(var c=(i=a.getRootNode().styleSheets)!==null&&i!==void 0?i:document.styleSheets,u=0,f=c.length;u<f;u++){var g=c[u];if(g.ownerNode===a)return g}throw si(17)})(this.element),this.length=0}return n.prototype.insertRule=function(s,a){try{return this.sheet.insertRule(a,s),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},n.prototype.getRule=function(s){var a=this.sheet.cssRules[s];return a&&a.cssText?a.cssText:""},n})(),eC=(function(){function n(s){this.element=$g(s),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(s,a){if(s<=this.length&&s>=0){var i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[s]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},n.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},n})(),tC=(function(){function n(s){this.rules=[],this.length=0}return n.prototype.insertRule=function(s,a){return s<=this.length&&(s===this.length?this.rules.push(a):this.rules.splice(s,0,a),this.length++,!0)},n.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},n.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},n})(),t0=qa,nC={isServer:!qa,useCSSOMInjection:!L_},Bl=(function(){function n(s,a,i){s===void 0&&(s=Us),a===void 0&&(a={});var c=this;this.options=Xt(Xt({},nC),s),this.gs=a,this.names=new Map(i),this.server=!!s.isServer,!this.server&&qa&&t0&&(t0=!1,hu(this)),wp(this,function(){return(function(u){for(var f=u.getTag(),g=f.length,m="",y=function(k){var b=(function(M){return Fl.get(M)})(k);if(b===void 0)return"continue";var C=u.names.get(b);if(C===void 0||!C.size)return"continue";var L=f.getGroup(k);if(L.length===0)return"continue";var S=Hs+".g"+k+'[id="'+b+'"]',I="";C.forEach(function(M){M.length>0&&(I+=M+",")}),m+=L+S+'{content:"'+I+'"}'+gp},x=0;x<g;x++)y(x);return m})(c)})}return n.registerId=function(s){return Ba(s)},n.prototype.rehydrate=function(){!this.server&&qa&&hu(this)},n.prototype.reconstructWithOptions=function(s,a){a===void 0&&(a=!0);var i=new n(Xt(Xt({},this.options),s),this.gs,a&&this.names||void 0);return!this.server&&qa&&s.target!==this.options.target&&Uu(this.options.target)!==Uu(s.target)&&hu(i),i},n.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(s=(function(a){var i=a.useCSSOMInjection,c=a.target;return a.isServer?new tC(c):i?new J_(c):new eC(c)})(this.options),new G_(s)));var s},n.prototype.hasNameForId=function(s,a){var i,c;return(c=(i=this.names.get(s))===null||i===void 0?void 0:i.has(a))!==null&&c!==void 0&&c},n.prototype.registerName=function(s,a){Ba(s);var i=this.names.get(s);i?i.add(a):this.names.set(s,new Set([a]))},n.prototype.insertRules=function(s,a,i){this.registerName(s,a),this.getTag().insertRules(Ba(s),i)},n.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},n.prototype.clearRules=function(s){this.getTag().clearGroup(Ba(s)),this.clearNames(s)},n.prototype.clearTag=function(){this.tag=void 0},n})();function rC(n,s){return s==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||n in p_||n.startsWith("--")?String(s).trim():"".concat(s,"px")}var oC=function(n){return n>="A"&&n<="Z"};function n0(n){for(var s="",a=0;a<n.length;a++){var i=n[a];if(a===1&&i==="-"&&n[0]==="-")return n;oC(i)?s+="-"+i.toLowerCase():s+=i}return s.startsWith("ms-")?"-"+s:s}var Pg=Symbol.for("sc-keyframes");function sC(n){return typeof n=="object"&&n!==null&&Pg in n}var Dg=function(n){return n==null||n===!1||n===""},zg=function(n){var s=[];for(var a in n){var i=n[a];n.hasOwnProperty(a)&&!Dg(i)&&(Array.isArray(i)&&i.isCss||Ws(i)?s.push("".concat(n0(a),":"),i,";"):Za(i)?s.push.apply(s,Os(Os(["".concat(a," {")],zg(i),!1),["}"],!1)):s.push("".concat(n0(a),": ").concat(rC(a,i),";")))}return s};function so(n,s,a,i,c){if(c===void 0&&(c=[]),typeof n=="string")return n&&c.push(n),c;if(Dg(n))return c;if(yp(n))return c.push(".".concat(n.styledComponentId)),c;if(Ws(n)){if(!Ws(f=n)||f.prototype&&f.prototype.isReactComponent||!s)return c.push(n),c;var u=n(s);return so(u,s,a,i,c)}var f;if(sC(n))return a?(n.inject(a,i),c.push(n.getName(i))):c.push(n),c;if(Za(n)){for(var g=zg(n),m=0;m<g.length;m++)c.push(g[m]);return c}if(!Array.isArray(n))return c.push(n.toString()),c;for(m=0;m<n.length;m++)so(n[m],s,a,i,c);return c}function Fg(n){for(var s=0;s<n.length;s+=1){var a=n[s];if(Ws(a)&&!yp(a))return!1}return!0}var aC=Ag(lc),iC=(function(){function n(s,a,i){this.rules=s,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Fg(s),this.componentId=a,this.baseHash=So(aC,a),this.baseStyle=i,Bl.registerId(a)}return n.prototype.generateAndInjectStyles=function(s,a,i){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,a,i).className:"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))c=Io(c,this.staticRulesId);else{var u=Ol(so(this.rules,s,a,i)),f=Bu(So(this.baseHash,u)>>>0);if(!a.hasNameForId(this.componentId,f)){var g=i(u,".".concat(f),void 0,this.componentId);a.insertRules(this.componentId,f,g)}c=Io(c,f),this.staticRulesId=f}else{for(var m=So(this.baseHash,i.hash),y="",x=0;x<this.rules.length;x++){var k=this.rules[x];if(typeof k=="string")y+=k;else if(k){var b=Ol(so(k,s,a,i));m=So(So(m,String(x)),b),y+=b}}if(y){var C=Bu(m>>>0);if(!a.hasNameForId(this.componentId,C)){var L=i(y,".".concat(C),void 0,this.componentId);a.insertRules(this.componentId,C,L)}c=Io(c,C)}}return{className:c,css:typeof window>"u"?a.getTag().getGroup(Ba(this.componentId)):""}},n})(),lC=/&/g,Ir=47,Mo=42;function r0(n){if(n.indexOf("}")===-1)return!1;for(var s=n.length,a=0,i=0,c=!1,u=0;u<s;u++){var f=n.charCodeAt(u);if(i!==0||c||f!==Ir||n.charCodeAt(u+1)!==Mo)if(c)f===Mo&&n.charCodeAt(u+1)===Ir&&(c=!1,u++);else if(f!==34&&f!==39||u!==0&&n.charCodeAt(u-1)===92){if(i===0){if(f===123)a++;else if(f===125&&--a<0)return!0}}else i===0?i=f:i===f&&(i=0);else c=!0,u++}return a!==0||i!==0}function Og(n,s){return n.map(function(a){return a.type==="rule"&&(a.value="".concat(s," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(s," ")),a.props=a.props.map(function(i){return"".concat(s," ").concat(i)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Og(a.children,s)),a})}function cC(n){var s,a,i,c=Us,u=c.options,f=u===void 0?Us:u,g=c.plugins,m=g===void 0?vp:g,y=function(L,S,I){return I.startsWith(a)&&I.endsWith(a)&&I.replaceAll(a,"").length>0?".".concat(s):L},x=m.slice();x.push(function(L){L.type===oc&&L.value.includes("&")&&(i||(i=new RegExp("\\".concat(a,"\\b"),"g")),L.props[0]=L.props[0].replace(lC,a).replace(i,y))}),f.prefix&&x.push(T_),x.push(I_);var k=[],b=N_(x.concat(A_(function(L){return k.push(L)}))),C=function(L,S,I,M){S===void 0&&(S=""),I===void 0&&(I=""),M===void 0&&(M="&"),s=M,a=S,i=void 0;var N=(function(_){if(!r0(_))return _;for(var E=_.length,z="",R=0,F=0,X=0,Z=!1,V=0;V<E;V++){var U=_.charCodeAt(V);if(X!==0||Z||U!==Ir||_.charCodeAt(V+1)!==Mo)if(Z)U===Mo&&_.charCodeAt(V+1)===Ir&&(Z=!1,V++);else if(U!==34&&U!==39||V!==0&&_.charCodeAt(V-1)===92){if(X===0)if(U===123)F++;else if(U===125){if(--F<0){for(var H=V+1;H<E;){var ne=_.charCodeAt(H);if(ne===59||ne===10)break;H++}H<E&&_.charCodeAt(H)===59&&H++,F=0,V=H-1,R=H;continue}F===0&&(z+=_.substring(R,V+1),R=V+1)}else U===59&&F===0&&(z+=_.substring(R,V+1),R=V+1)}else X===0?X=U:X===U&&(X=0);else Z=!0,V++}if(R<E){var K=_.substring(R);r0(K)||(z+=K)}return z})((function(_){if(_.indexOf("//")===-1)return _;for(var E=_.length,z=[],R=0,F=0,X=0,Z=0;F<E;){var V=_.charCodeAt(F);if(V!==34&&V!==39||F!==0&&_.charCodeAt(F-1)===92)if(X===0)if(V===Ir&&F+1<E&&_.charCodeAt(F+1)===Mo){for(F+=2;F+1<E&&(_.charCodeAt(F)!==Mo||_.charCodeAt(F+1)!==Ir);)F++;F+=2}else if(V===40&&F>=3&&(32|_.charCodeAt(F-1))==108&&(32|_.charCodeAt(F-2))==114&&(32|_.charCodeAt(F-3))==117)Z=1,F++;else if(Z>0)V===41?Z--:V===40&&Z++,F++;else if(V===Mo&&F+1<E&&_.charCodeAt(F+1)===Ir)F>R&&z.push(_.substring(R,F)),R=F+=2;else if(V===Ir&&F+1<E&&_.charCodeAt(F+1)===Ir){for(F>R&&z.push(_.substring(R,F));F<E&&_.charCodeAt(F)!==10;)F++;R=F}else F++;else F++;else X===0?X=V:X===V&&(X=0),F++}return R===0?_:(R<E&&z.push(_.substring(R)),z.join(""))})(L)),j=S_(I||S?"".concat(I," ").concat(S," { ").concat(N," }"):N);return f.namespace&&(j=Og(j,f.namespace)),k=[],zl(j,b),k};return C.hash=m.length?m.reduce(function(L,S){return S.name||si(15),So(L,S.name)},5381).toString():"",C}var dC=new Bl,Wu=cC(),Bg=Rn.createContext({shouldForwardProp:void 0,styleSheet:dC,stylis:Wu});Bg.Consumer;Rn.createContext(void 0);function qu(){return Rn.useContext(Bg)}var bp=Rn.createContext(void 0);bp.Consumer;var fu={};function uC(n,s,a){var i=yp(n),c=n,u=!pu(n),f=s.attrs,g=f===void 0?vp:f,m=s.componentId,y=m===void 0?(function(_,E){var z=typeof _!="string"?"sc":Yf(_);fu[z]=(fu[z]||0)+1;var R="".concat(z,"-").concat(xp(lc+z+fu[z]));return E?"".concat(E,"-").concat(R):R})(s.displayName,s.parentComponentId):m,x=s.displayName,k=x===void 0?(function(_){return pu(_)?"styled.".concat(_):"Styled(".concat(z_(_),")")})(n):x,b=s.displayName&&s.componentId?"".concat(Yf(s.displayName),"-").concat(s.componentId):s.componentId||y,C=i&&c.attrs?c.attrs.concat(g).filter(Boolean):g,L=s.shouldForwardProp;if(i&&c.shouldForwardProp){var S=c.shouldForwardProp;if(s.shouldForwardProp){var I=s.shouldForwardProp;L=function(_,E){return S(_,E)&&I(_,E)}}else L=S}var M=new iC(a,b,i?c.componentStyle:void 0);function N(_,E){return(function(z,R,F){var X=z.attrs,Z=z.componentStyle,V=z.defaultProps,U=z.foldedComponentIds,H=z.styledComponentId,ne=z.target,K=Rn.useContext(bp),Y=qu(),J=z.shouldForwardProp||Y.shouldForwardProp,q=Ig(R,K,V)||Us,B=(function(we,ge,Ae){for(var $e,se=Xt(Xt({},ge),{className:void 0,theme:Ae}),oe=0;oe<we.length;oe+=1){var pe=Ws($e=we[oe])?$e(se):$e;for(var xe in pe)xe==="className"?se.className=Io(se.className,pe[xe]):xe==="style"?se.style=Xt(Xt({},se.style),pe[xe]):xe in ge&&ge[xe]===void 0||(se[xe]=pe[xe])}return"className"in ge&&typeof ge.className=="string"&&(se.className=Io(se.className,ge.className)),se})(X,R,q),$=B.as||ne,A={};for(var P in B)B[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&B.theme===q||(P==="forwardedAs"?A.as=B.forwardedAs:J&&!J(P,$)||(A[P]=B[P]));var te=(function(we,ge){var Ae=qu(),$e=we.generateAndInjectStyles(ge,Ae.styleSheet,Ae.stylis);return $e})(Z,B),re=te.className,fe=Io(U,H);return re&&(fe+=" "+re),B.className&&(fe+=" "+B.className),A[pu($)&&!Ng.has($)?"class":"className"]=fe,F&&(A.ref=F),v.createElement($,A)})(j,_,E)}N.displayName=k;var j=Rn.forwardRef(N);return j.attrs=C,j.componentStyle=M,j.displayName=k,j.shouldForwardProp=L,j.foldedComponentIds=i?Io(c.foldedComponentIds,c.styledComponentId):"",j.styledComponentId=b,j.target=i?c.target:n,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=i?(function(E){for(var z=[],R=1;R<arguments.length;R++)z[R-1]=arguments[R];for(var F=0,X=z;F<X.length;F++)Hu(E,X[F],!0);return E})({},c.defaultProps,_):_}}),wp(j,function(){return".".concat(j.styledComponentId)}),u&&Rg(j,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function o0(n,s){for(var a=[n[0]],i=0,c=s.length;i<c;i+=1)a.push(s[i],n[i+1]);return a}var s0=function(n){return Object.assign(n,{isCss:!0})};function ao(n){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];if(Ws(n)||Za(n))return s0(so(o0(vp,Os([n],s,!0))));var i=n;return s.length===0&&i.length===1&&typeof i[0]=="string"?so(i):s0(so(o0(i,s)))}function Vu(n,s,a){if(a===void 0&&(a=Us),!s)throw si(1,s);var i=function(c){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return n(s,a,ao.apply(void 0,Os([c],u,!1)))};return i.attrs=function(c){return Vu(n,s,Xt(Xt({},a),{attrs:Array.prototype.concat(a.attrs,c).filter(Boolean)}))},i.withConfig=function(c){return Vu(n,s,Xt(Xt({},a),c))},i}var Hg=function(n){return Vu(uC,n)},h=Hg;Ng.forEach(function(n){h[n]=Hg(n)});var Ug,pC=(function(){function n(s,a){this.rules=s,this.componentId=a,this.isStatic=Fg(s),Bl.registerId(this.componentId+1)}return n.prototype.createStyles=function(s,a,i,c){var u=c(Ol(so(this.rules,a,i,c)),""),f=this.componentId+s;i.insertRules(f,f,u)},n.prototype.removeStyles=function(s,a){a.clearRules(this.componentId+s)},n.prototype.renderStyles=function(s,a,i,c){s>2&&Bl.registerId(this.componentId+s);var u=this.componentId+s;this.isStatic?i.hasNameForId(u,u)||this.createStyles(s,a,i,c):(this.removeStyles(s,i),this.createStyles(s,a,i,c))},n})();function hC(n){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];var i=ao.apply(void 0,Os([n],s,!1)),c="sc-global-".concat(xp(JSON.stringify(i))),u=new pC(i,c),f=new WeakMap,g=function(m){var y=qu(),x=Rn.useContext(bp),k=f.get(y.styleSheet);return k===void 0&&(k=y.styleSheet.allocateGSInstance(c),f.set(y.styleSheet,k)),Rn.useLayoutEffect(function(){return y.styleSheet.server||(function(b,C,L,S,I){if(u.isStatic)u.renderStyles(b,E_,L,I);else{var M=Xt(Xt({},C),{theme:Ig(C,S,g.defaultProps)});u.renderStyles(b,M,L,I)}})(k,m,y.styleSheet,x,y.stylis),function(){u.removeStyles(k,y.styleSheet)}},[k,m,y.styleSheet,x,y.stylis]),null};return Rn.memo(g)}var fC=(function(){function n(s,a){var i=this;this[Ug]=!0,this.inject=function(c,u){u===void 0&&(u=Wu);var f=i.name+u.hash;c.hasNameForId(i.id,f)||c.insertRules(i.id,f,u(i.rules,f,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=a,wp(this,function(){throw si(12,String(i.name))})}return n.prototype.getName=function(s){return s===void 0&&(s=Wu),this.name+s.hash},n})();function io(n){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];var i=Ol(ao.apply(void 0,Os([n],s,!1))),c=xp(i);return new fC(c,i)}Ug=Pg;const mC=768,gC=`(max-width: ${mC-1}px)`;function cc(n){const[s,a]=v.useState(()=>typeof window>"u"?!1:window.matchMedia(n).matches);return v.useEffect(()=>{if(typeof window>"u")return;const i=window.matchMedia(n),c=u=>a(u.matches);return a(i.matches),i.addEventListener("change",c),()=>i.removeEventListener("change",c)},[n]),s}function vC(){return cc(gC)}const xC="48px",yC="240px",a0="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",wC=h.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${n=>n.$isExpanded?yC:xC};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${n=>n.$isExpanded?ao`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:ao`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${n=>n.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,bC=h.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${n=>n.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${n=>n.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,jC=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,kC=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,_C=h.button`
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
`,CC=h.div`
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
`,SC=h.span`
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
`,i0=h.div`
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
`,mu=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,MC="var(--gradient-ai)",Wg=h.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${n=>n.$isActive&&!n.$isAi&&ao`
      background: var(--color-bg-primary, white);
      box-shadow: ${a0}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${n=>n.$isActive&&n.$isAi&&ao`
      background: ${MC};
      box-shadow: ${a0}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,qg=h.button`
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
  color: ${n=>n.$isAiActive?"var(--color-content-inverse, white)":"var(--color-content-primary, #151515)"};
  opacity: ${n=>n.$isActive?1:.6};
  transition: background 150ms ease-in-out, opacity 150ms ease-in-out, color 150ms ease-in-out;

  &:hover {
    background: ${n=>n.$isAiActive?"transparent":"var(--color-bg-transparent, rgba(21, 21, 21, 0.05))"};
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,Vg=h.span`
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
`,Gg=h.div`
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
`,IC=h.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,gu=h.hr`
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
`;const NC=h.button`
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
  padding: ${n=>n.$isExpanded?"6px 0":"0"};
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,AC=h.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: ${n=>n.$color||"#ee9c2d"};
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #1c222a);
  flex-shrink: 0;
  margin: 0 4px;
`,TC=h.span`
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
`;function LC({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function EC({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function RC({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function $C({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function PC({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function DC({size:n=16}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),e.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),e.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function zC({size:n=16}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function FC({size:n=16}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),e.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function OC({size:n=16}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function BC({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function HC({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function UC({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function WC({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function qC({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function l0({size:n=16}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function vu({item:n,isExpanded:s,showNewBadge:a,isAi:i}){const c=n.isActive??!1;return e.jsx(Wg,{$isActive:c,$isAi:i,children:e.jsxs(qg,{$isActive:c,$isAiActive:c&&!!i,onClick:n.onClick,"aria-current":c?"page":void 0,title:s?void 0:n.label,children:[e.jsxs(Gg,{children:[n.hasUnread&&e.jsx(IC,{}),c&&n.activeIcon?n.activeIcon:n.icon]}),s&&e.jsx(Vg,{children:n.label}),s&&a&&e.jsx(Eo,{variant:"primary",children:"New"})]})})}function VC({items:n,toolItems:s=[],bottomItems:a=[],workspace:i,user:c,onWorkspaceClick:u,onUserClick:f,onSettingsClick:g,newItemId:m,aiItemId:y}){const[x,k]=v.useState(!1);return e.jsx(wC,{$isExpanded:x,onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),"aria-label":"Primary navigation",children:e.jsxs(bC,{$isExpanded:x,children:[e.jsxs(jC,{children:[e.jsxs(_C,{$isExpanded:x,onClick:u,"aria-label":`Workspace: ${i.name}`,title:x?void 0:i.name,children:[e.jsx(CC,{children:i.logoUrl?e.jsx("img",{src:i.logoUrl,alt:i.name}):i.initial??i.name.charAt(0).toUpperCase()}),x&&e.jsxs(e.Fragment,{children:[e.jsx(SC,{children:i.name}),e.jsx(i0,{children:e.jsx(l0,{})})]})]}),e.jsx(mu,{children:n.map(b=>e.jsx(vu,{item:b,isExpanded:x,isAi:b.id===y},b.id))}),s.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(gu,{}),e.jsx(mu,{children:s.map(b=>e.jsx(vu,{item:b,isExpanded:x,showNewBadge:b.id===m,isAi:b.id===y},b.id))})]})]}),e.jsxs(kC,{children:[a.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(gu,{}),e.jsx(mu,{children:a.map(b=>e.jsx(vu,{item:b,isExpanded:x,isAi:b.id===y},b.id))})]}),e.jsx(gu,{}),e.jsx(Wg,{$isActive:!1,children:e.jsxs(qg,{$isActive:!1,onClick:g,"aria-label":"Settings",title:x?void 0:"Settings",children:[e.jsx(Gg,{children:e.jsx(qC,{})}),x&&e.jsx(Vg,{children:"Settings"})]})}),e.jsxs(NC,{$isExpanded:x,onClick:f,"aria-label":`User: ${c.name}`,title:x?void 0:c.name,children:[e.jsx(AC,{$color:c.avatarColor,children:c.initials}),x&&e.jsxs(e.Fragment,{children:[e.jsx(TC,{children:c.name}),e.jsx(i0,{children:e.jsx(l0,{})})]})]})]})]})})}const GC=270,ZC=h.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${n=>n.$isVisible?`${n.$width}px`:"0px"};
  height: 100%;
  flex-shrink: 0;
  background: var(--color-bg-primary, white);
  border-right: 1px solid var(--color-border-opaque, #e8eaee);
  overflow: hidden;
  /* Skip the width transition during an active drag so the panel tracks
     the cursor exactly; keep it for visibility toggles. */
  transition: ${n=>n.$isResizing?"none":"width 200ms ease"};
`,YC=h.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,KC=h.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,QC=h.h2`
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
`,XC=h.div`
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
`,JC=h.button`
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
`,eS=h.div`
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
`,tS=h.button`
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
`,nS=h.div`
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
`,rS=h.span`
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
`,oS=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-content-tertiary, #475569);
  transform: rotate(${n=>n.$expanded?"0deg":"-90deg"});
  transition: transform 150ms ease-in-out;

  svg {
    width: 16px;
    height: 16px;
  }
`,sS=io`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,aS=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${sS} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,iS=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${n=>n.$outlined&&ao`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,lS=h.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 8px 2px;
`,cS=h.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,dS=h.div`
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
  background: ${n=>n.$isResizing?"var(--color-border-focus, #1969fe)":"transparent"};
  transition: background var(--duration-fast, 120ms) var(--ease-default, ease);

  &:hover {
    background: var(--color-border-focus, #1969fe);
  }
`,uS=h.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,pS=h.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,hS=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,Zg=h.div`
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
`;function jp(){return e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function fS(){return e.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const kp={"--li-min-height":"32px","--li-py":"0px","--li-px":"0px","--li-gap":"4px",borderRadius:"6px",paddingRight:"8px",borderBottom:"none"};function mS({item:n}){return e.jsx(pr,{label:e.jsx("span",{style:{color:"var(--color-content-tertiary, #475569)",letterSpacing:"-0.084px"},children:n.label}),leadingSlot:e.jsx(Zg,{children:n.icon??e.jsx(jp,{})}),selected:n.isActive,onClick:n.onClick,divider:!1,size:"md","aria-current":n.isActive?"page":void 0,style:kp})}function gS({group:n}){const[s,a]=v.useState(n.defaultExpanded??!0);return e.jsxs(iS,{$outlined:n.outlined,children:[e.jsxs(tS,{onClick:()=>a(i=>!i),"aria-expanded":s,children:[e.jsx(nS,{children:n.icon??e.jsx(jp,{})}),e.jsx(rS,{children:n.label}),n.trailingBadge&&e.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:n.trailingBadge}),e.jsx(oS,{$expanded:s,children:e.jsx(nn,{size:16})})]}),s&&e.jsx(aS,{children:n.children.map(i=>e.jsx(pr,{label:e.jsx("span",{style:{color:"var(--color-content-tertiary, #475569)",letterSpacing:"-0.084px"},children:i.label}),leadingSlot:e.jsx(Zg,{children:i.icon??null}),trailingSlot:i.trailingSlot,selected:i.isActive,onClick:i.onClick,divider:!1,size:"md","aria-current":i.isActive?"page":void 0,style:kp},i.id))})]})}function vS({heading:n,isVisible:s,menuEntries:a=[],menuHeader:i,pageEntries:c=[],showSearch:u=!0,searchValue:f="",onSearchChange:g,onFilterClick:m,headerSlot:y,bodyContent:x,width:k=GC,onWidthChange:b,minWidth:C=220,maxWidth:L=520}){const S=x!==void 0,I=v.useRef(null),[M,N]=v.useState(!1);return v.useEffect(()=>{if(!M||!b)return;const j=I.current;if(!j)return;const _=j.getBoundingClientRect().left,E=F=>{const X=Math.min(L,Math.max(C,F.clientX-_));b(X)},z=()=>N(!1);window.addEventListener("mousemove",E),window.addEventListener("mouseup",z);const R=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",z),document.body.style.userSelect=R,document.body.style.cursor=""}},[M,b,C,L]),e.jsxs(ZC,{ref:I,$isVisible:s,$width:k,$isResizing:M,"aria-label":"Secondary navigation",children:[e.jsxs(YC,{children:[e.jsxs(KC,{children:[e.jsx(QC,{children:n}),y]}),u&&!S&&e.jsxs(XC,{children:[e.jsx(rc,{size:"sm",placeholder:"Search...",value:f,onChange:j=>g==null?void 0:g(j.target.value)}),e.jsx(JC,{onClick:m,"aria-label":"Filter",children:e.jsx(fS,{})})]})]}),S?x:e.jsxs(eS,{children:[i,a.map(j=>j.type==="single"?e.jsx(mS,{item:j.item},j.item.id):j.type==="group"?e.jsx(gS,{group:j.group},j.group.id):j.type==="divider"?e.jsx(pS,{},j.id):e.jsx(lS,{children:j.label.label},j.label.id))]}),c.length>0&&e.jsxs(cS,{children:[e.jsx(uS,{}),c.map(j=>e.jsx(pr,{label:e.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:j.label}),leadingSlot:e.jsx(hS,{children:j.icon??e.jsx(jp,{})}),onClick:j.onClick,selected:j.isActive??!1,divider:!1,size:"md","aria-current":j.isActive?"page":void 0,style:kp},j.id))]}),b&&s&&e.jsx(dS,{$isResizing:M,onMouseDown:j=>{j.preventDefault(),N(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const xS=h.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:n})=>n?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,yS=h.div`
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
`,Is=h.div`
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
`,wS=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,bS=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function jS(){return e.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),e.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),e.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function c0(){return e.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function d0(){return e.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function kS(){return e.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function _S({heading:n,actions:s=[],showActivityButton:a=!0,showPonderButton:i=!0,noBorder:c=!1,onActivityClick:u,onPonderClick:f,onDotsClick:g}){const m=s.filter(k=>k.variant==="secondary"),y=s.filter(k=>k.variant==="primary"),x=cc("(prefers-color-scheme: dark)");return e.jsxs(xS,{$noBorder:c,children:[e.jsx(yS,{children:typeof n=="string"?e.jsx(Is,{children:n}):n}),e.jsxs(wS,{children:[e.jsxs(bS,{children:[e.jsx(Ee,{variant:"ghost",size:"sm",iconOnly:!0,onClick:g,"aria-label":"More options",title:"More options",children:e.jsx(jS,{})}),m.map(k=>e.jsx(Ee,{variant:"secondary",size:"sm",leadingArtwork:e.jsx(d0,{}),trailingArtwork:e.jsx(c0,{}),onClick:k.onClick,children:k.label},k.id)),y.map(k=>e.jsx(Ee,{variant:"primary",size:"sm",leadingArtwork:e.jsx(d0,{}),trailingArtwork:e.jsx(c0,{}),onClick:k.onClick,children:k.label},k.id))]}),a&&e.jsx(Ee,{variant:"ghost",size:"sm",iconOnly:!0,onClick:u,"aria-label":"Activity",title:"Activity",children:e.jsx(kS,{})}),i&&e.jsx(Cm,{dark:x,onClick:f,"aria-label":"Ponder AI"})]})]})}const CS=h.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,SS=h.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,MS=h.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,IS=h.main`
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
`,u0="tb:secondary-nav-width",p0=270,h0=220,f0=520;function NS({items:n,toolItems:s,bottomItems:a,workspace:i,user:c,onWorkspaceClick:u,onUserClick:f,onSettingsClick:g,newItemId:m,aiItemId:y,secNavHeading:x,menuEntries:k,menuHeader:b,pageEntries:C,showSearch:L,searchValue:S,onSearchChange:I,onFilterClick:M,headerSlot:N,bodyContent:j,heading:_,actions:E,showActivityButton:z,showPonderButton:R,noBorder:F,onActivityClick:X,onPonderClick:Z,onDotsClick:V,children:U,showSecondaryNav:H=!0,showTopNav:ne=!0}){const[K,Y]=v.useState(()=>{if(typeof window>"u")return p0;const J=window.localStorage.getItem(u0),q=J?parseInt(J,10):NaN;return Number.isFinite(q)?Math.min(f0,Math.max(h0,q)):p0});return v.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(u0,String(K))},[K]),e.jsxs(CS,{children:[e.jsx(VC,{items:n,toolItems:s,bottomItems:a,workspace:i,user:c,onWorkspaceClick:u,onUserClick:f,onSettingsClick:g,newItemId:m,aiItemId:y}),e.jsxs(SS,{children:[H&&e.jsx(vS,{heading:x,menuEntries:k,menuHeader:b,pageEntries:C,isVisible:!0,showSearch:L,searchValue:S,onSearchChange:I,onFilterClick:M,headerSlot:N,bodyContent:j,width:K,onWidthChange:Y,minWidth:h0,maxWidth:f0}),e.jsxs(MS,{children:[ne&&e.jsx(_S,{heading:_,actions:E,showActivityButton:z,showPonderButton:R,noBorder:F,onActivityClick:X,onPonderClick:Z,onDotsClick:V}),e.jsx(IS,{children:U})]})]})]})}function AS({deadZonePx:n=8,topThresholdPx:s=20,target:a}={}){const[i,c]=v.useState(null),u=v.useRef(0);return v.useEffect(()=>{var y;const f=()=>a?a.scrollTop:typeof window<"u"?window.scrollY:0;u.current=f();const g=()=>{const x=f(),k=x-u.current;Math.abs(k)<n||(k>0&&x>s?c("down"):k<0&&c("up"),u.current=x)},m=a??(typeof window<"u"?window:{});return(y=m.addEventListener)==null||y.call(m,"scroll",g,{passive:!0}),()=>{var x;(x=m.removeEventListener)==null||x.call(m,"scroll",g)}},[n,s,a]),i}const TS=h.button`
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

  background: ${n=>n.$active?"var(--color-bg-tertiary, #eceef1)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,LS=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,ES=h.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function xu({label:n,isOpen:s,onClick:a,ariaLabel:i}){return e.jsxs(TS,{type:"button",$active:s,onClick:a,"aria-haspopup":"dialog","aria-expanded":!!s,"aria-label":i,children:[e.jsx(LS,{children:n}),e.jsx(ES,{children:e.jsx(nn,{size:14})})]})}const RS=h.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${n=>n.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,$S=h.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,m0=h.button`
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
`,PS=h.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,g0=h.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,DS=h.button`
  all: unset;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: ${n=>n.$color??"var(--color-bg-tertiary, #eceef1)"};
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
`;function zS({size:n=18}){return e.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const FS=v.forwardRef(function({primaryLabel:s,secondaryLabel:a,tertiaryLabel:i,openOverlay:c,user:u,hidden:f,onHamburgerClick:g,onPrimaryClick:m,onSecondaryClick:y,onTertiaryClick:x,onSearchClick:k,onUserClick:b},C){return e.jsx(RS,{ref:C,$hidden:f,children:e.jsxs($S,{children:[e.jsx(m0,{onClick:g,"aria-label":"Open navigation",children:e.jsx(zS,{size:18})}),e.jsxs(PS,{children:[e.jsx(xu,{label:s,isOpen:c==="primary",onClick:m,ariaLabel:"Choose a module"}),a&&e.jsxs(e.Fragment,{children:[e.jsx(g0,{"aria-hidden":"true",children:"›"}),e.jsx(xu,{label:a,isOpen:c==="secondary",onClick:y,ariaLabel:"Choose a section"})]}),i&&e.jsxs(e.Fragment,{children:[e.jsx(g0,{"aria-hidden":"true",children:"›"}),e.jsx(xu,{label:i,isOpen:c==="persona",onClick:x??(()=>{}),ariaLabel:"Choose a persona"})]})]}),e.jsx(m0,{onClick:k,"aria-label":"Search",children:e.jsx(lp,{size:18})}),e.jsx(DS,{onClick:b,$color:u.avatarColor,"aria-label":`User: ${u.name}`,children:u.initials})]})})}),OS=io`
  from { opacity: 0; }
  to { opacity: 1; }
`,BS=h.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${OS} 160ms ease-out;
`;function HS({onDismiss:n}){return v.useEffect(()=>{const s=i=>{i.key==="Escape"&&n()};window.addEventListener("keydown",s);const a=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s),document.body.style.overflow=a}},[n]),e.jsx(BS,{onClick:n,"aria-hidden":"true"})}const US=io`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,WS=h.div`
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
  animation: ${US} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,qS=h.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,VS=h.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,GS=h.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,ZS=h.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function _p({title:n,children:s,ariaLabel:a}){return e.jsxs(WS,{role:"dialog","aria-modal":"true","aria-label":a??n,children:[e.jsx(qS,{children:e.jsx(VS,{"aria-hidden":"true"})}),n&&e.jsx(GS,{children:n}),e.jsx(ZS,{children:s})]})}const dc=h.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,Ya=h.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,No=h.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: var(--space-3, 12px) var(--space-5, 20px);
  padding-left: ${n=>n.$indent?"calc(var(--space-5, 20px) + 24px)":"var(--space-5, 20px)"};
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  line-height: 1.3;
  color: var(--color-content-primary, #151515);
  cursor: pointer;
  min-height: 44px;
  box-sizing: border-box;

  font-weight: ${n=>n.$active?600:400};
  background: ${n=>n.$active?"var(--color-bg-secondary, #f6f7f9)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: -2px;
  }
`,Rs=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,Ao=h.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,To=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function YS({activeId:n,groups:s,onSelect:a}){return e.jsx(_p,{title:"Modules",ariaLabel:"Choose a module",children:e.jsx(dc,{children:s.map((i,c)=>e.jsxs("div",{children:[c>0&&e.jsx(Ya,{children:i.label}),c===0&&e.jsx(Ya,{children:i.label}),i.items.map(u=>{const f=u.id===n;return e.jsxs(No,{$active:f,onClick:()=>a(u.id),"aria-pressed":f,children:[e.jsx(Rs,{children:u.icon}),e.jsx(Ao,{children:u.label}),f&&e.jsx(To,{"aria-hidden":"true",children:e.jsx($n,{size:16})})]},u.id)})]},i.id))})})}function KS({moduleLabel:n,entries:s,onSelect:a}){return e.jsx(_p,{title:n,ariaLabel:`${n} sections`,children:e.jsx(dc,{children:s.map(i=>{if(i.type==="single"){const u=i.item;return e.jsxs(No,{$active:u.isActive,onClick:()=>{var f;(f=u.onClick)==null||f.call(u),a()},"aria-pressed":!!u.isActive,children:[e.jsx(Rs,{children:u.icon}),e.jsx(Ao,{children:u.label}),u.isActive&&e.jsx(To,{"aria-hidden":"true",children:e.jsx($n,{size:16})})]},u.id)}if(i.type!=="group")return null;const c=i.group;return e.jsxs("div",{children:[e.jsx(Ya,{children:c.label}),c.children.map(u=>e.jsxs(No,{$active:u.isActive,$indent:!0,onClick:()=>{var f;(f=u.onClick)==null||f.call(u),a()},"aria-pressed":!!u.isActive,children:[e.jsx(Rs,{children:u.icon}),e.jsx(Ao,{children:u.label}),u.isActive&&e.jsx(To,{"aria-hidden":"true",children:e.jsx($n,{size:16})})]},u.id))]},c.id)})})})}const QS=h.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,XS=h.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,JS=h.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function eM({personas:n,activeId:s,onSelect:a}){return e.jsx(_p,{title:"Personas",ariaLabel:"Choose a persona",children:e.jsx(dc,{children:n.map(i=>{const c=i.id===s;return e.jsxs(No,{$active:c,onClick:()=>a(i.id),"aria-pressed":c,children:[e.jsx(Ao,{as:"span",children:e.jsxs(QS,{children:[e.jsx(XS,{children:i.name}),e.jsx(JS,{children:i.role})]})}),c&&e.jsx(To,{"aria-hidden":"true",children:e.jsx($n,{size:16})})]},i.id)})})})}const tM=io`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,nM=h.aside`
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
  animation: ${tM} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,rM=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,oM=h.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,sM=h.button`
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
`,aM=h.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,iM=60;function lM({title:n,onDismiss:s,children:a}){const i=v.useRef(null),c=v.useRef(null);return v.useEffect(()=>{const u=i.current;if(!u)return;const f=m=>{const y=m.touches[0];c.current={x:y.clientX,y:y.clientY}},g=m=>{if(!c.current)return;const y=m.changedTouches[0],x=y.clientX-c.current.x,k=y.clientY-c.current.y;c.current=null,x<-60&&Math.abs(k)<iM&&s()};return u.addEventListener("touchstart",f,{passive:!0}),u.addEventListener("touchend",g),()=>{u.removeEventListener("touchstart",f),u.removeEventListener("touchend",g)}},[s]),e.jsxs(nM,{ref:i,role:"dialog","aria-modal":"true","aria-label":n??"Navigation",children:[e.jsxs(rM,{children:[e.jsx(oM,{children:n??"Navigation"}),e.jsx(sM,{onClick:s,"aria-label":"Close navigation",children:e.jsx(Vs,{size:18})})]}),e.jsx(aM,{children:a})]})}function cM({activeId:n,groups:s,currentMenuEntries:a,onSelectModule:i,onDismiss:c}){return e.jsx(lM,{title:"Navigation",onDismiss:c,children:e.jsx(dc,{children:s.map(u=>e.jsxs("div",{children:[e.jsx(Ya,{children:u.label}),u.items.map(f=>{const g=f.id===n;return e.jsxs("div",{children:[e.jsxs(No,{$active:g,onClick:()=>{i(f.id),c()},"aria-pressed":g,children:[e.jsx(Rs,{children:f.icon}),e.jsx(Ao,{children:f.label}),g&&e.jsx(To,{"aria-hidden":"true",children:e.jsx($n,{size:16})})]}),g&&a.length>0&&e.jsx("div",{children:a.map(m=>{if(m.type==="single"){const x=m.item;return e.jsxs(No,{$active:x.isActive,$indent:!0,onClick:()=>{var k;(k=x.onClick)==null||k.call(x),c()},"aria-pressed":!!x.isActive,children:[e.jsx(Rs,{children:x.icon}),e.jsx(Ao,{children:x.label}),x.isActive&&e.jsx(To,{"aria-hidden":"true",children:e.jsx($n,{size:16})})]},x.id)}if(m.type!=="group")return null;const y=m.group;return e.jsxs("div",{children:[e.jsx(Ya,{children:y.label}),y.children.map(x=>e.jsxs(No,{$active:x.isActive,$indent:!0,onClick:()=>{var k;(k=x.onClick)==null||k.call(x),c()},"aria-pressed":!!x.isActive,children:[e.jsx(Rs,{children:x.icon}),e.jsx(Ao,{children:x.label}),x.isActive&&e.jsx(To,{"aria-hidden":"true",children:e.jsx($n,{size:16})})]},x.id))]},y.id)})})]},f.id)})]},u.id))})})}const Nr=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],dM=h.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,uM=h.main`
  flex: 1 1 auto;
  min-width: 0;
`;function pM(n){const{activeId:s,selectedPersonaId:a,moduleGroups:i,primaryLabel:c,secondaryLabel:u,menuEntries:f,user:g,onUserClick:m,onMobileNavigate:y,onSelectPersona:x,children:k}=n,[b,C]=v.useState(null),L=AS({deadZonePx:8,topThresholdPx:20}),S=b===null&&L==="down",I=v.useMemo(()=>{if(!a)return null;const _=Nr.find(E=>E.id===a);return(_==null?void 0:_.name)??null},[a]),M=()=>C(null),N=_=>C(_),j=b!==null;return e.jsxs(dM,{children:[e.jsx(FS,{primaryLabel:c,secondaryLabel:u,tertiaryLabel:I,openOverlay:b,user:g,hidden:S,onHamburgerClick:()=>N("drawer"),onPrimaryClick:()=>N("primary"),onSecondaryClick:()=>N("secondary"),onTertiaryClick:I?()=>N("persona"):void 0,onSearchClick:()=>{N("drawer")},onUserClick:()=>m==null?void 0:m()}),e.jsx(uM,{children:k}),j&&e.jsx(HS,{onDismiss:M}),b==="primary"&&e.jsx(YS,{activeId:s,groups:i,onSelect:_=>{y(_),M()}}),b==="secondary"&&e.jsx(KS,{moduleLabel:c,entries:f,onSelect:M}),b==="persona"&&e.jsx(eM,{personas:Nr,activeId:a,onSelect:_=>{x(_),M()}}),b==="drawer"&&e.jsx(cM,{activeId:s,groups:i,currentMenuEntries:f,onSelectModule:_=>y(_),onDismiss:M})]})}function hM(n){if(vC()&&n.mobileNav){const a=n.mobileNav;return e.jsx(pM,{activeId:a.activeId,secActiveId:a.secActiveId,activePageId:a.activePageId,selectedPersonaId:a.selectedPersonaId,moduleGroups:a.moduleGroups,primaryLabel:a.primaryLabel,secondaryLabel:a.secondaryLabel,menuEntries:n.menuEntries??[],user:n.user,onUserClick:n.onUserClick,onMobileNavigate:a.onMobileNavigate,onSelectPersona:a.onSelectPersona,children:n.children})}return e.jsx(NS,{...n})}const Do=h.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`,zo=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Fo=h.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`,Oo=h.p`
  margin: 0;
  font-size: 14px;
  color: var(--color-content-secondary, #475569);
`,Bo=h.div`
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
`,Ho=h.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
  margin-bottom: -8px;
`,Uo=h.div`
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: 10px;
  overflow: hidden;
`,Wo=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 14px;
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  &:last-child { border-bottom: none; }
`,qo=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Vo=h.div`font-weight: 500;`,Go=h.div`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,Zo=h.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 500;
  background: ${n=>n.$color??"var(--color-bg-secondary, #f6f7f9)"};
  color: var(--color-content-secondary, #475569);
`;function fM(){return e.jsxs(Do,{children:[e.jsxs(zo,{children:[e.jsx(Fo,{children:"All People"}),e.jsx(Oo,{children:"Everyone across your workforce"})]}),e.jsxs(Bo,{children:[e.jsxs(nt,{children:[e.jsx(rt,{children:"Total Headcount"}),e.jsx(ot,{children:"166"}),e.jsx(st,{children:"Active workers"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Employees"}),e.jsx(ot,{children:"87"}),e.jsx(st,{children:"Full-time & part-time"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Contractors"}),e.jsx(ot,{children:"24"}),e.jsx(st,{children:"Active engagements"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"New This Month"}),e.jsx(ot,{children:"5"}),e.jsx(st,{children:"Onboarding in progress"})]})]}),e.jsx(Ho,{children:"Recent People"}),e.jsx(Uo,{children:[{name:"Sarah Kim",meta:"Engineering · Joined today",badge:"New",color:"#e8f5e9"},{name:"Jun Park",meta:"Design · Joined Mar 20",badge:"Active",color:"#e3f2fd"},{name:"Alex Torres",meta:"Legal · Contractor",badge:"Contractor",color:void 0},{name:"Maria Santos",meta:"HR · Employee",badge:"Active",color:"#e3f2fd"},{name:"Rahul Dev",meta:"Engineering · Contractor",badge:"Contractor",color:void 0}].map(n=>e.jsxs(Wo,{children:[e.jsxs(qo,{children:[e.jsx(Vo,{children:n.name}),e.jsx(Go,{children:n.meta})]}),e.jsx(Zo,{$color:n.color,children:n.badge})]},n.name))})]})}function mM(){return e.jsxs(Do,{children:[e.jsxs(zo,{children:[e.jsx(Fo,{children:"Contractors"}),e.jsx(Oo,{children:"Independent contractors and freelancers"})]}),e.jsxs(Bo,{children:[e.jsxs(nt,{children:[e.jsx(rt,{children:"Active"}),e.jsx(ot,{children:"24"}),e.jsx(st,{children:"Current engagements"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Expiring Soon"}),e.jsx(ot,{children:"3"}),e.jsx(st,{children:"Within 30 days"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Avg Rate"}),e.jsx(ot,{children:"$95/h"}),e.jsx(st,{children:"Across all contracts"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Pending Invoices"}),e.jsx(ot,{children:"6"}),e.jsx(st,{children:"Awaiting payment"})]})]}),e.jsx(Ho,{children:"Active Contractors"}),e.jsx(Uo,{children:[{name:"Alex Torres",meta:"Legal · Contract ends Apr 30",badge:"Active",color:"#e3f2fd"},{name:"Rahul Dev",meta:"Engineering · Contract ends May 15",badge:"Active",color:"#e3f2fd"},{name:"Studio Nine",meta:"Design · Contract ends Mar 31",badge:"Expiring",color:"#fff8e1"},{name:"Nomad Labs",meta:"Marketing · Contract ends Apr 10",badge:"Active",color:"#e3f2fd"},{name:"Priya Mehta",meta:"Finance · Contract ends Mar 28",badge:"Expiring",color:"#fff8e1"}].map(n=>e.jsxs(Wo,{children:[e.jsxs(qo,{children:[e.jsx(Vo,{children:n.name}),e.jsx(Go,{children:n.meta})]}),e.jsx(Zo,{$color:n.color,children:n.badge})]},n.name))})]})}function gM(){return e.jsxs(Do,{children:[e.jsxs(zo,{children:[e.jsx(Fo,{children:"Employees"}),e.jsx(Oo,{children:"Full-time and part-time employees"})]}),e.jsxs(Bo,{children:[e.jsxs(nt,{children:[e.jsx(rt,{children:"Total Employees"}),e.jsx(ot,{children:"87"}),e.jsx(st,{children:"Full-time & part-time"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"On Leave"}),e.jsx(ot,{children:"4"}),e.jsx(st,{children:"Current leave requests"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Open Roles"}),e.jsx(ot,{children:"7"}),e.jsx(st,{children:"Currently recruiting"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Avg Tenure"}),e.jsx(ot,{children:"2.4y"}),e.jsx(st,{children:"Across all employees"})]})]}),e.jsx(Ho,{children:"Recent Activity"}),e.jsx(Uo,{children:[{name:"Sarah Kim",meta:"Engineering · Onboarding",badge:"New hire",color:"#e8f5e9"},{name:"Jun Park",meta:"Design · Active",badge:"Active",color:"#e3f2fd"},{name:"Maria Santos",meta:"HR · On leave",badge:"On leave",color:"#fff8e1"},{name:"David Chen",meta:"Operations · Active",badge:"Active",color:"#e3f2fd"},{name:"Lisa Wong",meta:"Finance · Active",badge:"Active",color:"#e3f2fd"}].map(n=>e.jsxs(Wo,{children:[e.jsxs(qo,{children:[e.jsx(Vo,{children:n.name}),e.jsx(Go,{children:n.meta})]}),e.jsx(Zo,{$color:n.color,children:n.badge})]},n.name))})]})}function vM(){return e.jsxs(Do,{children:[e.jsxs(zo,{children:[e.jsx(Fo,{children:"Engineering"}),e.jsx(Oo,{children:"Engineering department overview"})]}),e.jsxs(Bo,{children:[e.jsxs(nt,{children:[e.jsx(rt,{children:"Headcount"}),e.jsx(ot,{children:"32"}),e.jsx(st,{children:"Employees & contractors"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Open Roles"}),e.jsx(ot,{children:"3"}),e.jsx(st,{children:"Backend & platform"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Avg Tenure"}),e.jsx(ot,{children:"2.8y"}),e.jsx(st,{children:"Across the team"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"On Leave"}),e.jsx(ot,{children:"1"}),e.jsx(st,{children:"Returning Apr 7"})]})]}),e.jsx(Ho,{children:"Team Members"}),e.jsx(Uo,{children:[{name:"Sarah Kim",meta:"Software Engineer · New hire",badge:"New",color:"#e8f5e9"},{name:"Rahul Dev",meta:"Senior Engineer · Contractor",badge:"Contractor",color:void 0},{name:"Tom Nguyen",meta:"Tech Lead · Employee",badge:"Active",color:"#e3f2fd"},{name:"Aisha Osei",meta:"Platform Engineer · Employee",badge:"Active",color:"#e3f2fd"},{name:"James Ruiz",meta:"Backend Engineer · On leave",badge:"On leave",color:"#fff8e1"}].map(n=>e.jsxs(Wo,{children:[e.jsxs(qo,{children:[e.jsx(Vo,{children:n.name}),e.jsx(Go,{children:n.meta})]}),e.jsx(Zo,{$color:n.color,children:n.badge})]},n.name))})]})}function xM(){return e.jsxs(Do,{children:[e.jsxs(zo,{children:[e.jsx(Fo,{children:"Design"}),e.jsx(Oo,{children:"Design department overview"})]}),e.jsxs(Bo,{children:[e.jsxs(nt,{children:[e.jsx(rt,{children:"Headcount"}),e.jsx(ot,{children:"11"}),e.jsx(st,{children:"Employees & contractors"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Open Roles"}),e.jsx(ot,{children:"1"}),e.jsx(st,{children:"Senior product designer"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Avg Tenure"}),e.jsx(ot,{children:"1.9y"}),e.jsx(st,{children:"Across the team"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"On Leave"}),e.jsx(ot,{children:"0"}),e.jsx(st,{children:"Everyone active"})]})]}),e.jsx(Ho,{children:"Team Members"}),e.jsx(Uo,{children:[{name:"Jun Park",meta:"Product Designer · Employee",badge:"Active",color:"#e3f2fd"},{name:"Studio Nine",meta:"Design Agency · Contractor",badge:"Contractor",color:void 0},{name:"Maria Santos",meta:"UX Researcher · Employee",badge:"Active",color:"#e3f2fd"},{name:"Cleo Barros",meta:"Brand Designer · Employee",badge:"Active",color:"#e3f2fd"}].map(n=>e.jsxs(Wo,{children:[e.jsxs(qo,{children:[e.jsx(Vo,{children:n.name}),e.jsx(Go,{children:n.meta})]}),e.jsx(Zo,{$color:n.color,children:n.badge})]},n.name))})]})}function yM(){return e.jsxs(Do,{children:[e.jsxs(zo,{children:[e.jsx(Fo,{children:"Marketing"}),e.jsx(Oo,{children:"Marketing department overview"})]}),e.jsxs(Bo,{children:[e.jsxs(nt,{children:[e.jsx(rt,{children:"Headcount"}),e.jsx(ot,{children:"9"}),e.jsx(st,{children:"Employees & contractors"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Open Roles"}),e.jsx(ot,{children:"1"}),e.jsx(st,{children:"Growth marketer"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Avg Tenure"}),e.jsx(ot,{children:"1.5y"}),e.jsx(st,{children:"Across the team"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Campaigns Active"}),e.jsx(ot,{children:"4"}),e.jsx(st,{children:"This quarter"})]})]}),e.jsx(Ho,{children:"Team Members"}),e.jsx(Uo,{children:[{name:"Nomad Labs",meta:"Content Agency · Contractor",badge:"Contractor",color:void 0},{name:"Elena Voss",meta:"Marketing Manager · Employee",badge:"Active",color:"#e3f2fd"},{name:"Oscar Tran",meta:"Growth · Employee",badge:"Active",color:"#e3f2fd"},{name:"Binta Diallo",meta:"Brand · Employee",badge:"Active",color:"#e3f2fd"}].map(n=>e.jsxs(Wo,{children:[e.jsxs(qo,{children:[e.jsx(Vo,{children:n.name}),e.jsx(Go,{children:n.meta})]}),e.jsx(Zo,{$color:n.color,children:n.badge})]},n.name))})]})}function wM(){return e.jsxs(Do,{children:[e.jsxs(zo,{children:[e.jsx(Fo,{children:"Operations"}),e.jsx(Oo,{children:"Operations department overview"})]}),e.jsxs(Bo,{children:[e.jsxs(nt,{children:[e.jsx(rt,{children:"Headcount"}),e.jsx(ot,{children:"18"}),e.jsx(st,{children:"Employees & contractors"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Open Roles"}),e.jsx(ot,{children:"2"}),e.jsx(st,{children:"Ops & logistics"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Avg Tenure"}),e.jsx(ot,{children:"3.1y"}),e.jsx(st,{children:"Most tenured dept"})]}),e.jsxs(nt,{children:[e.jsx(rt,{children:"On Leave"}),e.jsx(ot,{children:"1"}),e.jsx(st,{children:"Returning Apr 2"})]})]}),e.jsx(Ho,{children:"Team Members"}),e.jsx(Uo,{children:[{name:"David Chen",meta:"Operations Lead · Employee",badge:"Active",color:"#e3f2fd"},{name:"Fatou Mbaye",meta:"Logistics Manager · Employee",badge:"Active",color:"#e3f2fd"},{name:"Carlos Ibarra",meta:"IT Operations · Employee",badge:"Active",color:"#e3f2fd"},{name:"Ingrid Lund",meta:"Facilities · On leave",badge:"On leave",color:"#fff8e1"}].map(n=>e.jsxs(Wo,{children:[e.jsxs(qo,{children:[e.jsx(Vo,{children:n.name}),e.jsx(Go,{children:n.meta})]}),e.jsx(Zo,{$color:n.color,children:n.badge})]},n.name))})]})}const bM="/teambridge-module/assets/policy-icon-active-CqCS8_ex.svg",jM="/teambridge-module/assets/automation-icon-active-DlguOjgR.svg",kM="/teambridge-module/assets/marketplace-hero-bg-C1GqhBtg.svg",_M="/teambridge-module/assets/marketplace-hero-bg-dark-C2y1crjg.svg",CM="/teambridge-module/assets/shift-marketplace-l0-FnNJR.png",SM="/teambridge-module/assets/labor-cost-forecasting-DD8TkuU-.png",MM="/teambridge-module/assets/employee-availability-portal-DLFAUBVu.png",IM="/teambridge-module/assets/compliance-monitor-BExpYvGD.png",NM="/teambridge-module/assets/smart-time-clock-Bkyn1Jqj.png",AM="/teambridge-module/assets/recruiting-pipeline-dashboard-DMUDCsYZ.png",TM="/teambridge-module/assets/workforce-messaging-center-CD2jHoXm.png",LM="/teambridge-module/assets/client-staffing-portal-DZemUXpu.png",EM="/teambridge-module/assets/credential-tracker-BfqCrwdu.png",RM="/teambridge-module/assets/performance-insights-dashboard-CuH97YIs.png",rn=h.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`,fn=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,mn=h.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`,gn=h.p`
  margin: 0;
  font-size: 14px;
  color: var(--color-content-secondary, #475569);
`,Dn=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
`,ze=h.div`
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ue=h.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,We=h.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
`,Fe=h.div`
  font-size: 13px;
  color: var(--color-content-secondary, #475569);
`,Cp=h.div`
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
`,Sp=h.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--color-content-secondary, #475569);
`,Mp=h.div`
  font-size: 13px;
  max-width: 320px;
`,er=h.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
  margin-bottom: -8px;
`,hr=h.div`
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: 10px;
  overflow: hidden;
`,bt=h.div`
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
`,kt=h.div`font-weight: 500;`,_t=h.div`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,vt=h.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 500;
  background: ${n=>n.$color??"var(--color-bg-secondary, #f6f7f9)"};
  color: var(--color-content-secondary, #475569);
`;function v0(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Home"}),e.jsx(gn,{children:"Overview of your workspace activity"})]}),e.jsxs(Dn,{children:[e.jsxs(ze,{children:[e.jsx(Ue,{children:"Active Workers"}),e.jsx(We,{children:"142"}),e.jsx(Fe,{children:"Across 6 departments"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Open Tasks"}),e.jsx(We,{children:"38"}),e.jsx(Fe,{children:"12 due this week"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Pending Approvals"}),e.jsx(We,{children:"7"}),e.jsx(Fe,{children:"Awaiting your review"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Documents"}),e.jsx(We,{children:"94"}),e.jsx(Fe,{children:"4 require signatures"})]})]}),e.jsx(er,{children:"Recent Activity"}),e.jsxs(hr,{children:[e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"Sarah Kim onboarded"}),e.jsx(_t,{children:"Engineering · 2h ago"})]}),e.jsx(vt,{$color:"#e8f5e9",children:"Completed"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"Q4 Payroll processed"}),e.jsx(_t,{children:"Finance · 5h ago"})]}),e.jsx(vt,{$color:"#e3f2fd",children:"Processed"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"Policy update: PTO 2025"}),e.jsx(_t,{children:"HR · Yesterday"})]}),e.jsx(vt,{children:"Draft"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"NDA — Alex Torres"}),e.jsx(_t,{children:"Legal · 2d ago"})]}),e.jsx(vt,{$color:"#fff8e1",children:"Pending"})]})]})]})}function $M(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Inbox"}),e.jsx(gn,{children:"Notifications and items requiring your attention"})]}),e.jsxs(Dn,{children:[e.jsxs(ze,{children:[e.jsx(Ue,{children:"Unread"}),e.jsx(We,{children:"18"}),e.jsx(Fe,{children:"Since last visit"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Action Required"}),e.jsx(We,{children:"5"}),e.jsx(Fe,{children:"Approvals & reviews"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Mentions"}),e.jsx(We,{children:"3"}),e.jsx(Fe,{children:"In documents & tasks"})]})]}),e.jsx(er,{children:"Inbox"}),e.jsxs(hr,{children:[e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"Payroll approval needed"}),e.jsx(_t,{children:"From Finance · Now"})]}),e.jsx(vt,{$color:"#fce4ec",children:"Action required"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"New hire offer letter ready"}),e.jsx(_t,{children:"From HR · 30m ago"})]}),e.jsx(vt,{$color:"#fce4ec",children:"Action required"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"@mentioned in Policy draft"}),e.jsx(_t,{children:"From Legal · 2h ago"})]}),e.jsx(vt,{$color:"#e3f2fd",children:"Mention"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"Task assigned: Q1 review"}),e.jsx(_t,{children:"From Manager · 4h ago"})]}),e.jsx(vt,{children:"New"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"E-Sign complete: NDA"}),e.jsx(_t,{children:"System · Yesterday"})]}),e.jsx(vt,{$color:"#e8f5e9",children:"Complete"})]})]})]})}function PM(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Invoice"}),e.jsx(gn,{children:"Track and manage contractor invoices"})]}),e.jsxs(Dn,{children:[e.jsxs(ze,{children:[e.jsx(Ue,{children:"Pending Payment"}),e.jsx(We,{children:"$24.5k"}),e.jsx(Fe,{children:"6 invoices"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Paid This Month"}),e.jsx(We,{children:"$88.2k"}),e.jsx(Fe,{children:"23 invoices"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Overdue"}),e.jsx(We,{children:"$3.1k"}),e.jsx(Fe,{children:"2 invoices"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Disputes"}),e.jsx(We,{children:"1"}),e.jsx(Fe,{children:"Awaiting resolution"})]})]}),e.jsx(er,{children:"Recent Invoices"}),e.jsxs(hr,{children:[e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"INV-2024-089 · Alex Torres"}),e.jsx(_t,{children:"$4,200 · Due Mar 30"})]}),e.jsx(vt,{$color:"#fff8e1",children:"Pending"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"INV-2024-088 · Rahul Dev"}),e.jsx(_t,{children:"$7,500 · Due Apr 1"})]}),e.jsx(vt,{$color:"#fff8e1",children:"Pending"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"INV-2024-087 · Studio Nine"}),e.jsx(_t,{children:"$12,000 · Paid Mar 20"})]}),e.jsx(vt,{$color:"#e8f5e9",children:"Paid"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"INV-2024-086 · Nomad Labs"}),e.jsx(_t,{children:"$3,100 · Overdue Mar 15"})]}),e.jsx(vt,{$color:"#fce4ec",children:"Overdue"})]})]})]})}function DM(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"AI Home"}),e.jsx(gn,{children:"Your AI-powered workspace assistant"})]}),e.jsxs(Cp,{children:[e.jsx(Sp,{children:"Ask anything about your workforce"}),e.jsx(Mp,{children:"Summarize payroll trends, draft policy updates, answer compliance questions, and more."})]}),e.jsx(er,{children:"Suggested Prompts"}),e.jsxs(Dn,{children:[e.jsx(ze,{children:e.jsx(Fe,{children:'"Summarize headcount changes this quarter"'})}),e.jsx(ze,{children:e.jsx(Fe,{children:'"Draft a remote work policy update"'})}),e.jsx(ze,{children:e.jsx(Fe,{children:'"Which contractors have expiring contracts?"'})}),e.jsx(ze,{children:e.jsx(Fe,{children:'"Show payroll variance vs last month"'})})]})]})}const Yg=h(rn)`
  padding-bottom: var(--space-16, 64px);
`,zM=h(Yg)`
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
    background-image: url(${kM});
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
      background-image: url(${_M});
    }
  }
`,FM=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4, 16px);
  padding: var(--space-8, 32px) 0 var(--space-2, 8px);
  text-align: center;
`,OM=h.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl, 2.5rem);
  line-height: var(--line-height-tight, 1.1);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.02em);
  color: var(--color-content-primary);
`,BM=h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
  max-width: 560px;
`,HM=h.div`
  width: 100%;
  max-width: 720px;
  margin: var(--space-3, 12px) auto 0;
  position: relative;
`,UM=h.div`
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
`,WM=h.div`
  padding: var(--space-4, 16px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  color: var(--color-content-tertiary);
  text-align: center;
`,Kg=h.div`
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
`,wl=h.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  margin: var(--space-8, 32px) auto 0;
  width: 70%;
  max-width: 1280px;

  @media (max-width: 900px) {
    width: 100%;
  }
`,bl=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,jl=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`,yu=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1, 4px);
  margin-top: var(--space-1, 4px);
`,x0=h.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  margin-top: auto;
  padding-top: var(--space-2, 8px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`,kl=h.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-2xl, 1.5rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.01em);
  color: var(--color-content-primary);
`,qM=h.div`
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
`,VM=h(pr)`
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
`,GM=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`,ZM=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xl, 1.25rem);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-tertiary);
  text-align: center;
  min-width: 24px;
`,YM=h.div`
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
`,KM=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,QM=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  line-height: var(--line-height-relaxed, 1.45);
  color: var(--color-content-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,XM=h.span`
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
`;const wu=h.div`
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
`,bu=h.div`
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
    box-shadow var(--duration-slow, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)),
    transform var(--duration-slow, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1));

  &:hover {
    background: var(--color-bg-secondary);
    box-shadow: var(--shadow-below-high);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    transition-duration: var(--duration-fast, 120ms);
  }

  &:hover [data-role='featured-icon'] > * {
    transform: scale(1.12);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background var(--duration-fast, 120ms) var(--ease-default, ease);
    &:hover, &:active { transform: none; }
  }
`,ju=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-2, 8px);
`,ku=h.div`
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
`;const _u=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  min-width: 0;
  flex: 1;
`,Cu=h.div`
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
`,Su=h.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-primary);
`,Mu=h.p`
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
`,Ns=h.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;function Ip({color:n,size:s=40}){return e.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:e.jsx("circle",{cx:"20",cy:"20",r:"16",fill:n})})}function Np({color:n,size:s=40}){return e.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:e.jsx("rect",{x:"6",y:"6",width:"28",height:"28",rx:"4",fill:n})})}function Ka({color:n,size:s=40}){return e.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:e.jsx("path",{d:"M20 5 L36 33 L4 33 Z",fill:n})})}function Hl({color:n,size:s=40}){return e.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:e.jsx("path",{d:"M20 4 L34 12 L34 28 L20 36 L6 28 L6 12 Z",fill:n})})}function Ap({color:n,size:s=40}){return e.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:e.jsx("path",{d:"M20 4 L36 16 L30 34 L10 34 L4 16 Z",fill:n})})}function Tp({color:n,size:s=40}){return e.jsxs("svg",{viewBox:"0 0 40 40",width:s,height:s,children:[e.jsxs("g",{fill:n,children:[e.jsx("circle",{cx:"20",cy:"9",r:"6"}),e.jsx("circle",{cx:"31",cy:"20",r:"6"}),e.jsx("circle",{cx:"20",cy:"31",r:"6"}),e.jsx("circle",{cx:"9",cy:"20",r:"6"})]}),e.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#fff"})]})}function Lp({color:n,size:s=40}){return e.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:e.jsx("path",{d:"M14 4 L26 4 L36 14 L36 26 L26 36 L14 36 L4 26 L4 14 Z",fill:n})})}function Ep({color:n,size:s=40}){return e.jsx("svg",{viewBox:"0 0 40 40",width:s,height:s,children:e.jsx("path",{d:"M20 4 L36 20 L20 36 L4 20 Z",fill:n})})}const JM={"mp-shift-marketplace":n=>e.jsx(Ip,{color:"var(--color-blue-content-secondary, #4A8AB8)",size:n}),"mp-availability":n=>e.jsx(Hl,{color:"var(--color-green-content-secondary, #7BB97A)",size:n}),"mp-time-clock":n=>e.jsx(Ep,{color:"var(--color-orange-content-secondary, #E08B4A)",size:n}),"mp-messaging":n=>e.jsx(Tp,{color:"var(--color-pink-content-secondary, #E68FB6)",size:n}),"mp-client-portal":n=>e.jsx(Hl,{color:"var(--color-azure-content-secondary, #5B3DF0)",size:n}),"mp-labor-cost":n=>e.jsx(Np,{color:"var(--color-purple-content-secondary, #9C8AE0)",size:n}),"mp-compliance-monitor":n=>e.jsx(Lp,{color:"var(--color-red-content-secondary, #D9534F)",size:n}),"mp-recruiting":n=>e.jsx(Ap,{color:"var(--color-yellow-content-secondary, #E8C547)",size:n}),"mp-credential":n=>e.jsx(Ka,{color:"var(--color-matcha-content-secondary, #3CB6A8)",size:n}),"mp-performance":n=>e.jsx(Ka,{color:"var(--color-purple-content-secondary, #9C8AE0)",size:n})};function ir(n,s=16){const a=JM[n];return a?a(s):null}const As=[{id:"shift_marketplace",name:"Shift Marketplace",description:"Internal marketplace where employees can claim open shifts.",category:"Scheduling",targetUsers:["Managers","Employees"],coreFeatures:["Open shift board","Shift claim approvals","Real-time notifications","Eligibility filtering"],author:"Tito Goldstein",installs:"142",rating:4.9,shape:e.jsx(Ip,{color:"var(--color-blue-content-secondary, #4A8AB8)"}),preview:{tagline:"Let eligible workers claim open shifts faster.",recommendedFor:["staffing","hospitality","light industrial"],capabilities:["Open shift board","Employee shift claiming","Manager approval workflow","Eligibility rules","Real-time notifications","Shift fill-rate tracking"],businessValue:["Reduce manual scheduling work","Improve shift coverage","Increase employee flexibility"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"labor_cost_forecasting",name:"Labor Cost Forecasting",description:"Predict labor costs based on schedules, overtime, and demand.",category:"Analytics",targetUsers:["Operations","Finance"],coreFeatures:["Projected payroll calculations","Overtime risk alerts","Budget vs actual tracking","Department cost breakdowns"],author:"Simon Karlsson",installs:"87",rating:4.6,shape:e.jsx(Np,{color:"var(--color-purple-content-secondary, #9C8AE0)"}),preview:{tagline:"Forecast payroll costs before schedules are finalized.",recommendedFor:["finance teams","operations leaders","large hourly teams"],capabilities:["Projected labor cost","Overtime risk detection","Budget vs scheduled cost","Department cost breakdown","Location-level forecasting","Exportable reports"],businessValue:["Control labor spend","Prevent avoidable overtime","Improve budget planning"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"employee_availability_portal",name:"Employee Availability Portal",description:"Allow workers to manage and submit availability preferences.",category:"Workforce Management",targetUsers:["Employees"],coreFeatures:["Recurring availability","Time-off requests","Availability conflicts","Manager approvals"],author:"Renee Park",installs:"64",rating:4.5,shape:e.jsx(Hl,{color:"var(--color-green-content-secondary, #7BB97A)"}),preview:{tagline:"Let employees manage when they can work.",recommendedFor:["part-time teams","flexible scheduling teams","student workers"],capabilities:["Recurring availability","One-time availability changes","Time-off requests","Manager approvals","Conflict detection","Availability history"],businessValue:["Reduce scheduling conflicts","Improve employee satisfaction","Help managers build better schedules"],setupComplexity:"low",estimatedImpact:"medium",status:"recommended"}},{id:"compliance_monitor",name:"Compliance Monitor",description:"Track labor law violations and scheduling compliance issues.",category:"Compliance",targetUsers:["HR","Operations"],coreFeatures:["Missed break alerts","Overtime compliance","Predictive scheduling checks","Audit logs"],author:"Tito Goldstein",installs:"58",rating:4.7,shape:e.jsx(Lp,{color:"var(--color-red-content-secondary, #D9534F)"}),preview:{tagline:"Detect scheduling and labor compliance risks before they become issues.",recommendedFor:["large teams","regulated workforces","multi-state operations"],capabilities:["Overtime alerts","Missed break detection","Scheduling rule checks","Audit logs","Compliance reporting","Exception workflows"],businessValue:["Lower compliance risk","Create audit-ready records","Help managers act before violations occur"],setupComplexity:"high",estimatedImpact:"high",status:"recommended"}},{id:"smart_time_clock",name:"Smart Time Clock",description:"Mobile and kiosk-based clock-in system with GPS validation.",category:"Time Tracking",targetUsers:["Employees","Managers"],coreFeatures:["GPS clock-ins","Photo verification","Auto break tracking","Late arrival alerts"],author:"Marcus Chen",installs:"116",rating:4.8,shape:e.jsx(Ep,{color:"var(--color-orange-content-secondary, #E08B4A)"}),preview:{tagline:"Clock in with GPS, kiosk, and photo validation.",recommendedFor:["field teams","multi-location teams","hourly workforces"],capabilities:["Mobile clock-in","Kiosk mode","GPS validation","Photo verification","Late arrival alerts","Break tracking"],businessValue:["Reduce time theft","Improve payroll accuracy","Give managers real-time attendance visibility"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"recruiting_pipeline_dashboard",name:"Recruiting Pipeline Dashboard",description:"Manage applicants, interviews, and onboarding workflows.",category:"Hiring",targetUsers:["Recruiters","Managers"],coreFeatures:["Applicant tracking","Interview scheduling","Hiring stages","Offer management"],author:"Aisha Patel",installs:"42",rating:4.1,shape:e.jsx(Ap,{color:"var(--color-yellow-content-secondary, #E8C547)"}),preview:{tagline:"Track applicants from lead to active worker.",recommendedFor:["staffing agencies","high-volume hiring teams"],capabilities:["Applicant tracking","Hiring stages","Interview scheduling","Offer status","Onboarding handoff","Recruiter performance metrics"],businessValue:["Improve hiring visibility","Speed up onboarding","Reduce candidate drop-off"],setupComplexity:"high",estimatedImpact:"medium",status:"optional"}},{id:"workforce_messaging_center",name:"Workforce Messaging Center",description:"Centralized communication hub for workforce operations.",category:"Communication",targetUsers:["Managers","Employees"],coreFeatures:["Group messaging","Schedule announcements","Read receipts","Emergency alerts"],author:"Simon Karlsson",installs:"94",rating:4.4,shape:e.jsx(Tp,{color:"var(--color-pink-content-secondary, #E68FB6)"}),preview:{tagline:"Centralize team communication around shifts and operations.",recommendedFor:["distributed teams","field teams","large workforces"],capabilities:["Group announcements","Shift-specific messages","Read receipts","Emergency alerts","Manager-to-worker messaging","Message history"],businessValue:["Improve communication speed","Reduce missed updates","Keep operational messages tied to work"],setupComplexity:"medium",estimatedImpact:"medium",status:"recommended"}},{id:"client_staffing_portal",name:"Client Staffing Portal",description:"External-facing portal where clients request and monitor staffing.",category:"Customer Experience",targetUsers:["Clients"],coreFeatures:["Shift requests","Worker approvals","Live staffing updates","Invoice visibility"],author:"Daniela Cruz",installs:"31",rating:4.7,shape:e.jsx(Hl,{color:"var(--color-azure-content-secondary, #5B3DF0)"}),preview:{tagline:"Give clients a portal to request, approve, and track staffing.",recommendedFor:["staffing agencies","security","events","facilities"],capabilities:["Client shift requests","Worker approval visibility","Live staffing status","Request history","Basic invoice visibility","Client-specific permissions"],businessValue:["Improve client experience","Reduce back-and-forth communication","Increase visibility into staffing fulfillment"],setupComplexity:"high",estimatedImpact:"high",status:"recommended"}},{id:"credential_tracker",name:"Credential Tracker",description:"Track employee certifications, licenses, and expiration dates.",category:"Compliance",targetUsers:["HR","Compliance Teams"],coreFeatures:["Expiration reminders","Document uploads","Certification validation","Compliance reporting"],author:"Renee Park",installs:"49",rating:4.3,shape:e.jsx(Ka,{color:"var(--color-matcha-content-secondary, #3CB6A8)"}),preview:{tagline:"Track certifications, licenses, and required worker documents.",recommendedFor:["healthcare staffing","security","transportation","skilled labor"],capabilities:["Credential uploads","Expiration reminders","Approval workflows","Worker eligibility rules","Document status tracking","Compliance reports"],businessValue:["Avoid assigning unqualified workers","Reduce manual document tracking","Maintain compliance visibility"],setupComplexity:"medium",estimatedImpact:"medium",status:"recommended"}},{id:"performance_insights_dashboard",name:"Performance Insights Dashboard",description:"Measure workforce performance and operational efficiency.",category:"Analytics",targetUsers:["Executives","Managers"],coreFeatures:["Attendance scoring","Shift fulfillment metrics","Employee reliability rankings","Location performance analytics"],author:"Marcus Chen",installs:"73",rating:4,shape:e.jsx(Ka,{color:"var(--color-purple-content-secondary, #9C8AE0)"}),preview:{tagline:"Measure attendance, reliability, and workforce performance.",recommendedFor:["operations leaders","account managers","executives"],capabilities:["Attendance scoring","Reliability rankings","Shift fulfillment metrics","No-show tracking","Location performance","Manager dashboards"],businessValue:["Identify top performers","Spot operational issues","Improve workforce planning"],setupComplexity:"medium",estimatedImpact:"medium",status:"optional"}}],Ts=[{id:"auto_shift_optimizer",name:"Auto Shift Optimizer",description:"Automatically balances schedules based on labor demand, overtime risk, and worker availability.",category:"Scheduling",appType:"background",targetUsers:["System"],coreFeatures:["Auto-fill open shifts","Minimize overtime","Balance worker hours","Optimize labor coverage","Apply scheduling rules"],author:"Teambridge",installs:"128",rating:4.8,shape:e.jsx(Ip,{color:"var(--color-green-content-secondary, #7BB97A)"}),preview:{tagline:"Automatically balance schedules for cost and coverage.",recommendedFor:["staffing","hospitality","healthcare"],capabilities:["Auto-fill open shifts","Minimize overtime","Balance worker hours","Optimize labor coverage","Apply scheduling rules"],businessValue:["Reduce overtime spend","Improve coverage","Free up scheduler time"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"payroll_export_engine",name:"Payroll Export Engine",description:"Processes approved timesheets and generates payroll-ready exports automatically.",category:"Payroll",appType:"background",targetUsers:["System"],coreFeatures:["Aggregate timesheets","Calculate regular and overtime hours","Generate payroll exports","Validate missing punches","Detect payroll anomalies"],author:"Teambridge",installs:"109",rating:4.7,shape:e.jsx(Np,{color:"var(--color-matcha-content-secondary, #3CB6A8)"}),preview:{tagline:"Turn approved timesheets into payroll-ready exports.",recommendedFor:["staffing","finance","operations"],capabilities:["Aggregate timesheets","Calculate regular and overtime hours","Generate payroll exports","Validate missing punches","Detect payroll anomalies"],businessValue:["Cut manual payroll work","Reduce errors","Speed up payroll cycles"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"attendance_anomaly_detector",name:"Attendance Anomaly Detector",description:"Monitors attendance patterns and flags suspicious or unusual behavior automatically.",category:"Attendance",appType:"background",targetUsers:["System"],coreFeatures:["Detect repeated late arrivals","Identify missed punches","Flag unusual clock-in locations","Track no-show trends","Generate risk scores"],author:"Teambridge",installs:"74",rating:4.6,shape:e.jsx(Lp,{color:"var(--color-orange-content-secondary, #E08B4A)"}),preview:{tagline:"Surface attendance issues before they become a problem.",recommendedFor:["operations","compliance","staffing"],capabilities:["Detect repeated late arrivals","Identify missed punches","Flag unusual clock-in locations","Track no-show trends","Generate risk scores"],businessValue:["Reduce no-shows","Catch time-theft early","Improve workforce reliability"],setupComplexity:"low",estimatedImpact:"medium",status:"optional"}},{id:"credential_expiration_monitor",name:"Credential Expiration Monitor",description:"Automatically tracks certification expirations and prevents invalid worker assignments.",category:"Compliance",appType:"background",targetUsers:["System"],coreFeatures:["Monitor expiration dates","Send renewal reminders","Restrict non-compliant workers","Track uploaded documents","Generate compliance reports"],author:"Teambridge",installs:"63",rating:4.5,shape:e.jsx(Ka,{color:"var(--color-blue-content-secondary, #4A8AB8)"}),preview:{tagline:"Keep credentials current and assignments compliant.",recommendedFor:["healthcare","security","compliance"],capabilities:["Monitor expiration dates","Send renewal reminders","Restrict non-compliant workers","Track uploaded documents","Generate compliance reports"],businessValue:["Avoid compliance violations","Prevent invalid assignments","Automate renewal nudges"],setupComplexity:"low",estimatedImpact:"high",status:"recommended"}},{id:"smart_notification_router",name:"Smart Notification Router",description:"Routes notifications to the right employees based on urgency, role, and shift context.",category:"Communication",appType:"background",targetUsers:["System"],coreFeatures:["Priority-based notifications","Role-aware targeting","SMS and push delivery","Escalation workflows","Quiet-hour controls"],author:"Teambridge",installs:"88",rating:4.4,shape:e.jsx(Tp,{color:"var(--color-azure-content-secondary, #5B3DF0)"}),preview:{tagline:"Send the right message to the right people, automatically.",recommendedFor:["operations","communications","staffing"],capabilities:["Priority-based notifications","Role-aware targeting","SMS and push delivery","Escalation workflows","Quiet-hour controls"],businessValue:["Reduce noise","Faster response times","Better escalation paths"],setupComplexity:"low",estimatedImpact:"medium",status:"optional"}},{id:"invoice_generation_engine",name:"Invoice Generation Engine",description:"Automatically converts approved labor hours into client invoices.",category:"Billing",appType:"background",targetUsers:["System"],coreFeatures:["Generate invoices from shifts","Apply bill rates","Calculate overtime billing","Create invoice PDFs","Track invoice status"],author:"Teambridge",installs:"52",rating:4.3,shape:e.jsx(Ap,{color:"var(--color-pink-content-secondary, #E68FB6)"}),preview:{tagline:"Turn shifts into client invoices without manual entry.",recommendedFor:["staffing agencies","finance","operations"],capabilities:["Generate invoices from shifts","Apply bill rates","Calculate overtime billing","Create invoice PDFs","Track invoice status"],businessValue:["Faster billing cycles","Fewer billing errors","Better revenue visibility"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}},{id:"worker_matching_engine",name:"Worker Matching Engine",description:"Automatically recommends the best workers for open shifts using availability and performance data.",category:"Staffing",appType:"background",targetUsers:["System"],coreFeatures:["Skill-based matching","Availability filtering","Distance calculations","Performance-based recommendations","Compliance-aware matching"],author:"Teambridge",installs:"46",rating:4.2,shape:e.jsx(Ep,{color:"var(--color-pink-content-secondary, #E68FB6)"}),preview:{tagline:"Surface the best worker for every open shift.",recommendedFor:["staffing agencies","operations","recruiting"],capabilities:["Skill-based matching","Availability filtering","Distance calculations","Performance-based recommendations","Compliance-aware matching"],businessValue:["Better fill rates","Higher worker satisfaction","Reduce coordinator effort"],setupComplexity:"medium",estimatedImpact:"high",status:"recommended"}}],eI=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  width: 100%;
`,tI=h.div`
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
`,nI=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,rI=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  letter-spacing: var(--tracking-tight, -0.01em);
`,oI=h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`,sI=h.span`
  color: var(--color-yellow-content-secondary, #E8C547);
  font-size: var(--text-base, 1rem);
  line-height: 1;
`,aI=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`,iI=h.div`
  /* Plain pass-through wrapper. */
`,lI=h.div`
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
`,cI={shift_marketplace:CM,labor_cost_forecasting:SM,employee_availability_portal:MM,compliance_monitor:IM,smart_time_clock:NM,recruiting_pipeline_dashboard:AM,workforce_messaging_center:TM,client_staffing_portal:LM,credential_tracker:EM,performance_insights_dashboard:RM},dI=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;function uI({id:n,name:s}){const a=cI[n];return a?e.jsx(dI,{src:a,alt:s?`${s} preview`:"App preview"}):null}h.div`
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
`;const pI=h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`,hI=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1, 4px);
`,fI=h.div`
  margin: 0 0 var(--space-2, 8px) 0;
`;function _l({children:n}){return e.jsx(fI,{children:e.jsx(Qn,{as:"h4",children:n})})}const y0=h.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
`,w0=h.li`
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
`,mI=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5, 20px);
`,Iu=h.div`
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
`;const gI=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  text-transform: capitalize;
`,vI={low:1,medium:2,high:3},xI=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,yI=h.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`,wI=h.div`
  height: 6px;
  border-radius: var(--radius-xs, 2px);
  background: ${n=>n.$filled?n.$color==="green"?"var(--color-green-content-secondary, #7BB97A)":n.$color==="yellow"?"var(--color-yellow-content-secondary, #E8C547)":"var(--color-red-content-secondary, #D9534F)":"var(--color-bg-tertiary, #eef0f3)"};
`,bI=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  text-transform: capitalize;
`;function b0({value:n,higherIsBetter:s=!1}){const a=vI[n],i=s?n==="high"?"green":n==="medium"?"yellow":"red":n==="low"?"green":n==="medium"?"yellow":"red";return e.jsxs(xI,{children:[e.jsx(yI,{children:[1,2,3].map(c=>e.jsx(wI,{$filled:c<=a,$color:i},c))}),e.jsx(bI,{children:n})]})}const j0=h(Ee)`
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
`;function jI(n){const{onClose:s,isInstalled:a,onInstall:i,onUninstall:c,onOpenApp:u}=n,[f,g]=v.useState(n.app);v.useEffect(()=>{n.app&&g(n.app)},[n.app]);const m=n.app!==null,y=f;return y?e.jsxs(pp,{open:m,onClose:s,size:"lg","aria-label":`${y.name} preview`,children:[e.jsx(ec,{onClose:s,children:e.jsxs(eI,{children:[e.jsx(tI,{children:y.shape}),e.jsxs(nI,{children:[e.jsx(rI,{children:y.name}),e.jsxs(oI,{children:[e.jsx(sI,{"aria-hidden":!0,children:"★"}),e.jsx("span",{children:y.rating.toFixed(1)}),e.jsx("span",{"aria-hidden":!0,children:"·"}),e.jsxs("span",{children:[y.installs," installed"]})]})]}),y.preview.status==="recommended"&&e.jsx(pt,{size:"sm",variant:"subtle",color:"green",children:"Recommended"}),y.preview.status==="optional"&&e.jsx(pt,{size:"sm",variant:"subtle",color:"neutral",children:"Optional"})]})}),e.jsx(tc,{children:e.jsxs(aI,{children:[y.appType!=="background"&&e.jsx(iI,{children:e.jsx(lI,{children:e.jsx(uI,{id:y.id,name:y.name})})}),e.jsxs(mI,{children:[e.jsxs(Iu,{children:[e.jsx(Qn,{children:"Category"}),e.jsx(gI,{children:y.category})]}),e.jsxs(Iu,{children:[e.jsx(Qn,{children:"Setup"}),e.jsx(b0,{value:y.preview.setupComplexity})]}),e.jsxs(Iu,{children:[e.jsx(Qn,{children:"Impact"}),e.jsx(b0,{value:y.preview.estimatedImpact,higherIsBetter:!0})]})]}),e.jsxs("div",{children:[e.jsx(_l,{children:"Description"}),e.jsx(pI,{children:y.preview.tagline})]}),e.jsxs("div",{children:[e.jsx(_l,{children:"Recommended for"}),e.jsx(hI,{children:y.preview.recommendedFor.map(x=>e.jsx(pt,{size:"sm",variant:"outline",color:"neutral",children:x},x))})]}),e.jsxs("div",{children:[e.jsx(_l,{children:"Capabilities"}),e.jsx(y0,{children:y.preview.capabilities.map(x=>e.jsxs(w0,{children:[e.jsx(qt,{size:16}),e.jsx("span",{children:x})]},x))})]}),e.jsxs("div",{children:[e.jsx(_l,{children:"Business value"}),e.jsx(y0,{children:y.preview.businessValue.map(x=>e.jsxs(w0,{children:[e.jsx(Xl,{size:16}),e.jsx("span",{children:x})]},x))})]})]})}),e.jsx(nc,{children:a?e.jsxs(e.Fragment,{children:[e.jsx(Ee,{variant:"secondary",size:"md",onClick:()=>{c==null||c(y.id),s()},children:"Uninstall"}),e.jsx(j0,{variant:"primary",size:"md",trailingArtwork:e.jsx(Es,{size:14}),onClick:()=>{u==null||u(y.id),s()},children:"Open"})]}):e.jsx(j0,{variant:"primary",size:"md",trailingArtwork:e.jsx(Es,{size:14}),onClick:()=>{i==null||i(y.id),s()},children:"Use App"})})]}):null}function kI({installedAppIds:n=[],onInstallApp:s,onUninstallApp:a,onOpenApp:i}={}){const[c,u]=v.useState(""),[f,g]=v.useState(!1),[m,y]=v.useState(null),x=As,k=[...As,...Ts].slice().sort((j,_)=>parseInt(_.installs,10)-parseInt(j.installs,10)).slice(0,6),b=["compliance_monitor","credential_expiration_monitor","performance_insights_dashboard","auto_shift_optimizer"],C=[...As,...Ts],L=b.map(j=>C.find(_=>_.id===j)).filter(j=>!!j),S=c.trim(),I=S.length===0?[]:[...As,...Ts].filter(j=>j.name.toLowerCase().includes(S.toLowerCase())||j.description.toLowerCase().includes(S.toLowerCase())),M=f&&S.length>0,N=j=>{y(j),u(""),g(!1)};return e.jsxs(zM,{children:[e.jsxs(FM,{children:[e.jsx(OM,{children:"App Marketplace"}),e.jsx(BM,{children:"Discover shared workforce apps built by your team — combine forms, automations, and dashboards to run last-mile operations."}),e.jsxs(HM,{children:[e.jsx(rc,{size:"md",placeholder:"Search community apps",value:c,onChange:j=>u(j.target.value),onFocus:()=>g(!0),onBlur:()=>setTimeout(()=>g(!1),150)}),M&&e.jsx(UM,{onMouseDown:j=>j.preventDefault(),children:I.length===0?e.jsx(WM,{children:"No apps match your search"}):I.map(j=>e.jsx(pr,{size:"md",divider:!1,interactive:!0,onClick:_=>{_.preventDefault(),_.stopPropagation(),N(j)},label:j.name,description:j.description,leadingSlot:e.jsx(Kg,{children:e.jsx(Ns,{children:j.shape})}),trailingSlot:j.preview.status==="recommended"?e.jsx(pt,{size:"sm",variant:"subtle",color:"green",children:"Recommended"}):e.jsx(pt,{size:"sm",variant:"subtle",color:"neutral",children:"Optional"})},j.id))})]})]}),k.length>0&&e.jsxs(wl,{children:[e.jsxs(bl,{children:[e.jsx(kl,{children:"Popular"}),e.jsx(jl,{children:"Most installed apps across your workspace"})]}),e.jsx(qM,{children:k.map((j,_)=>e.jsx(VM,{size:"md",divider:!1,interactive:!0,onClick:()=>y(j),label:j.name,description:e.jsxs(KM,{children:[e.jsx(QM,{children:j.description}),e.jsxs(XM,{children:[e.jsx(Tl,{size:12}),j.installs," installed"]})]}),leadingSlot:e.jsxs(GM,{children:[e.jsx(ZM,{children:_+1}),e.jsx(YM,{"data-role":"popular-icon",children:e.jsx(Ns,{children:j.shape})})]})},j.id))})]}),L.length>0&&e.jsxs(wl,{children:[e.jsxs(bl,{children:[e.jsx(kl,{children:"Featured"}),e.jsx(jl,{children:"Curated picks across categories"})]}),e.jsx(wu,{children:L.map(j=>e.jsxs(bu,{onClick:()=>y(j),role:"button",tabIndex:0,children:[e.jsxs(ju,{children:[e.jsx(ku,{"data-role":"featured-icon",children:e.jsx(Ns,{children:j.shape})}),e.jsx(Ee,{size:"sm",variant:"secondary",disabled:n.includes(j.id),onClick:_=>{_.stopPropagation(),n.includes(j.id)||s==null||s(j.id)},children:n.includes(j.id)?"Installed":"Install"})]}),e.jsxs(_u,{children:[e.jsx(Cu,{children:e.jsx("strong",{children:j.category})}),e.jsx(Su,{children:j.name}),e.jsx(Mu,{children:j.description}),e.jsx(yu,{children:j.targetUsers.map(_=>e.jsx(pt,{size:"sm",variant:"outline",color:"neutral",children:_},_))}),e.jsxs(x0,{children:[e.jsx(Tl,{size:14}),j.installs," installs"]})]})]},j.name))})]}),x.length>0&&e.jsxs(wl,{children:[e.jsxs(bl,{children:[e.jsx(kl,{children:"Team apps"}),e.jsx(jl,{children:"Apps with a UI your team uses to run last-mile operations"})]}),e.jsx(wu,{children:x.map(j=>e.jsxs(bu,{onClick:()=>y(j),role:"button",tabIndex:0,children:[e.jsxs(ju,{children:[e.jsx(ku,{"data-role":"featured-icon",children:e.jsx(Ns,{children:j.shape})}),e.jsx(Ee,{size:"sm",variant:"secondary",disabled:n.includes(j.id),onClick:_=>{_.stopPropagation(),n.includes(j.id)||s==null||s(j.id)},children:n.includes(j.id)?"Installed":"Install"})]}),e.jsxs(_u,{children:[e.jsx(Cu,{children:e.jsx("strong",{children:j.category})}),e.jsx(Su,{children:j.name}),e.jsx(Mu,{children:j.description}),e.jsx(yu,{children:j.targetUsers.map(_=>e.jsx(pt,{size:"sm",variant:"outline",color:"neutral",children:_},_))}),e.jsxs(x0,{children:[e.jsx(Tl,{size:14}),j.installs," installs"]})]})]},j.id))})]}),e.jsxs(wl,{children:[e.jsxs(bl,{children:[e.jsx(kl,{children:"Background apps"}),e.jsx(jl,{children:"Automated services that run in the background — no UI required"})]}),e.jsx(wu,{children:Ts.map(j=>e.jsxs(bu,{onClick:()=>y(j),role:"button",tabIndex:0,children:[e.jsxs(ju,{children:[e.jsx(ku,{"data-role":"featured-icon",children:e.jsx(Ns,{children:j.shape})}),e.jsx(Ee,{size:"sm",variant:"secondary",disabled:n.includes(j.id),onClick:_=>{_.stopPropagation(),n.includes(j.id)||s==null||s(j.id)},children:n.includes(j.id)?"Installed":"Install"})]}),e.jsxs(_u,{children:[e.jsx(Cu,{children:e.jsx("strong",{children:j.category})}),e.jsx(Su,{children:j.name}),e.jsx(Mu,{children:j.description}),e.jsx(yu,{children:j.targetUsers.map(_=>e.jsx(pt,{size:"sm",variant:"outline",color:"neutral",children:_},_))})]})]},j.id))})]}),e.jsx(jI,{app:m,onClose:()=>y(null),isInstalled:m?n.includes(m.id):!1,onInstall:s,onUninstall:a,onOpenApp:i})]})}h.div`
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
`;const _I=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`,CI=h.div`
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
`;const k0=h.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  margin-top: var(--space-8, 32px);
`,SI=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,MI=h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`,II=h.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2, 8px);

  /* Match pin button to the Uninstall button height. */
  & > button[data-variant] {
    height: 24px;
    min-height: 24px;
  }
`,NI=h.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;
  color: ${n=>n.$pinned?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  opacity: ${n=>n.$pinned?1:.6};
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
`,_0=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  margin-bottom: var(--space-1, 4px);
`,C0=h.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`,S0=h.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3, 12px);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,AI=h(pr)`
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
`,M0=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2, 8px);
  padding: var(--space-8, 32px) var(--space-6, 24px);
  border-radius: var(--radius-md, 12px);
  border: 1px dashed var(--color-border-opaque);
  background: var(--color-bg-primary);
`,I0=h.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`,N0=h.p`
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
`;const Qg={shift_marketplace:"mp-shift-marketplace",employee_availability_portal:"mp-availability",smart_time_clock:"mp-time-clock",workforce_messaging_center:"mp-messaging",client_staffing_portal:"mp-client-portal",labor_cost_forecasting:"mp-labor-cost",compliance_monitor:"mp-compliance-monitor",recruiting_pipeline_dashboard:"mp-recruiting",credential_tracker:"mp-credential",performance_insights_dashboard:"mp-performance"},A0=Object.fromEntries(Object.entries(Qg).map(([n,s])=>[s,n]));function T0(n){var s;return(s=[...As,...Ts].find(a=>a.id===n))==null?void 0:s.name}function TI({onOpenCommunity:n,onOpenApp:s,pinnedAppIds:a=[],onTogglePin:i,installedAppIds:c=[],onUninstallApp:u,lastOpenedAtById:f={}}){const[g,m]=v.useState(""),[y,x]=v.useState(!1);v.useRef(null);const k=N=>{const j=g.trim().toLowerCase();return j.length===0?!0:N.name.toLowerCase().includes(j)||N.description.toLowerCase().includes(j)},b=new Set(c),C=[...As,...Ts],L=C.filter(N=>N.appType!=="background"&&b.has(N.id)&&k(N)),S=C.filter(N=>N.appType==="background"&&b.has(N.id)&&k(N));c.length;const I=N=>{if(!N)return null;const j=Date.now()-N;if(j<45e3)return"Just now";const _=Math.round(j/6e4);if(_<60)return`${_} ${_===1?"minute":"minutes"} ago`;const E=Math.round(_/60);if(E<24)return`${E} ${E===1?"hour":"hours"} ago`;const z=Math.round(E/24);if(z<7)return`${z} ${z===1?"day":"days"} ago`;const R=Math.round(z/7);return`${R} ${R===1?"week":"weeks"} ago`},M=N=>e.jsx(AI,{size:"lg",divider:!1,interactive:!0,onClick:()=>s==null?void 0:s(N.id),label:N.name,description:e.jsxs(SI,{children:[e.jsx("span",{children:N.description}),(()=>{const j=I(f[N.id]);return j?e.jsxs(MI,{"data-role":"installed-last-opened",children:[e.jsx(Ja,{size:12}),j]}):null})()]}),leadingSlot:e.jsx(Kg,{children:e.jsx(Ns,{children:N.shape})}),trailingSlot:e.jsxs(II,{children:[i&&(()=>{const j=Qg[N.id];if(!j)return null;const _=a.includes(j);return e.jsx(NI,{type:"button",$pinned:_,"aria-label":_?"Unpin from left nav":"Pin to left nav",title:_?"Unpin from left nav":"Pin to left nav",onClick:E=>{E.stopPropagation(),i(j)},children:e.jsx(up,{size:16,fill:_?"currentColor":"none"})})})(),e.jsx(Ee,{variant:"secondary",size:"sm",onClick:j=>{j.stopPropagation(),u==null||u(N.id)},children:"Uninstall"})]})},N.id);return e.jsxs(Yg,{children:[e.jsxs(_I,{children:[e.jsx(CI,{children:e.jsx(rc,{size:"md",placeholder:"Search installed apps",value:g,onChange:N=>m(N.target.value)})}),n&&e.jsx(Ee,{variant:"secondary",size:"md",onClick:n,trailingArtwork:e.jsx(Es,{size:14}),children:"App Marketplace"})]}),e.jsxs(k0,{children:[e.jsxs(_0,{children:[e.jsx(C0,{children:"Team apps"}),e.jsx(Eo,{variant:"neutral",children:L.length})]}),L.length===0?e.jsxs(M0,{children:[e.jsx(I0,{children:"No team apps installed yet"}),e.jsxs(N0,{children:["Browse the App Marketplace and click ",e.jsx("strong",{children:"Use App"})," on a team app to install it here."]}),n&&e.jsx(Ee,{variant:"secondary",size:"sm",onClick:n,trailingArtwork:e.jsx(Es,{size:14}),children:"Browse App Marketplace"})]}):e.jsx(S0,{children:L.map(N=>M(N))})]}),e.jsxs(k0,{children:[e.jsxs(_0,{children:[e.jsx(C0,{children:"Background apps"}),e.jsx(Eo,{variant:"neutral",children:S.length})]}),S.length===0?e.jsxs(M0,{children:[e.jsx(I0,{children:"No background apps installed yet"}),e.jsxs(N0,{children:["Browse the App Marketplace and click ",e.jsx("strong",{children:"Use App"})," on a background service to install it here."]}),n&&e.jsx(Ee,{variant:"secondary",size:"sm",onClick:n,trailingArtwork:e.jsx(Es,{size:14}),children:"Browse App Marketplace"})]}):e.jsx(S0,{children:S.map(N=>M(N))})]})]})}function LI({name:n}){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:n}),e.jsx(gn,{children:"One of your installed apps from Last Mile Apps."})]}),e.jsxs(Cp,{children:[e.jsx(Sp,{children:n}),e.jsx(Mp,{children:"This app's content will render here."})]})]})}function EI(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Custom App"}),e.jsx(gn,{children:"Your organization's custom-built application"})]}),e.jsxs(Cp,{children:[e.jsx(Sp,{children:"Custom App"}),e.jsx(Mp,{children:"This space is configured by your organization. Contact your admin to set up this module."})]})]})}function RI(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Add App"}),e.jsx(gn,{children:"Connect a new app to your workspace"})]}),e.jsx(Dn,{children:["HRIS Integration","Payroll Sync","ATS Connector","SSO Provider","Time Tracking","Benefits Admin"].map(n=>e.jsxs(ze,{children:[e.jsx(Ue,{children:"Integration"}),e.jsx(Fe,{children:n}),e.jsx(vt,{children:"Connect"})]},n))})]})}function $I(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Document Studio"}),e.jsx(gn,{children:"Create and manage employment documents"})]}),e.jsxs(Dn,{children:[e.jsxs(ze,{children:[e.jsx(Ue,{children:"Total Documents"}),e.jsx(We,{children:"247"}),e.jsx(Fe,{children:"Across all templates"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Drafts"}),e.jsx(We,{children:"12"}),e.jsx(Fe,{children:"In progress"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Sent for Signature"}),e.jsx(We,{children:"8"}),e.jsx(Fe,{children:"Awaiting completion"})]})]}),e.jsx(er,{children:"Recent Documents"}),e.jsxs(hr,{children:[e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"Offer Letter — Sarah Kim"}),e.jsx(_t,{children:"Offer Letter · Created today"})]}),e.jsx(vt,{$color:"#fff8e1",children:"Draft"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"Employment Contract — Dev Team"}),e.jsx(_t,{children:"Contract · Mar 22"})]}),e.jsx(vt,{$color:"#e3f2fd",children:"Sent"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"NDA — Alex Torres"}),e.jsx(_t,{children:"NDA · Mar 20"})]}),e.jsx(vt,{$color:"#e8f5e9",children:"Signed"})]}),e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"Contractor Agreement — Nomad Labs"}),e.jsx(_t,{children:"Agreement · Mar 18"})]}),e.jsx(vt,{$color:"#e8f5e9",children:"Signed"})]})]})]})}function PI(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Form"}),e.jsx(gn,{children:"Build and distribute forms across your organization"})]}),e.jsxs(Dn,{children:[e.jsxs(ze,{children:[e.jsx(Ue,{children:"Active Forms"}),e.jsx(We,{children:"18"}),e.jsx(Fe,{children:"Collecting responses"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Responses Today"}),e.jsx(We,{children:"34"}),e.jsx(Fe,{children:"Across all forms"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Completion Rate"}),e.jsx(We,{children:"91%"}),e.jsx(Fe,{children:"↑ 4% this week"})]})]}),e.jsx(er,{children:"Recent Forms"}),e.jsx(hr,{children:[{title:"New Hire Onboarding",responses:"12 responses",status:"Active"},{title:"Benefits Enrollment 2025",responses:"89 responses",status:"Active"},{title:"Equipment Request",responses:"7 responses",status:"Active"},{title:"Exit Interview",responses:"3 responses",status:"Closed"}].map(n=>e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:n.title}),e.jsx(_t,{children:n.responses})]}),e.jsx(vt,{$color:n.status==="Active"?"#e8f5e9":void 0,children:n.status})]},n.title))})]})}function DI(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Tasks"}),e.jsx(gn,{children:"Manage and track HR workflows"})]}),e.jsxs(Dn,{children:[e.jsxs(ze,{children:[e.jsx(Ue,{children:"My Tasks"}),e.jsx(We,{children:"14"}),e.jsx(Fe,{children:"5 due today"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Team Tasks"}),e.jsx(We,{children:"62"}),e.jsx(Fe,{children:"Across 4 assignees"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Completed"}),e.jsx(We,{children:"38"}),e.jsx(Fe,{children:"This month"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Overdue"}),e.jsx(We,{children:"3"}),e.jsx(Fe,{children:"Needs attention"})]})]}),e.jsx(er,{children:"Due Soon"}),e.jsx(hr,{children:[{title:"Complete I-9 verification — Sarah Kim",due:"Today",color:"#fce4ec"},{title:"Send equipment checklist",due:"Today",color:"#fce4ec"},{title:"Review offer letter — Jun Park",due:"Tomorrow",color:"#fff8e1"},{title:"Schedule orientation session",due:"Mar 28",color:"#fff8e1"},{title:"Update org chart",due:"Mar 30",color:void 0}].map(n=>e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:n.title}),e.jsxs(_t,{children:["Due ",n.due]})]}),e.jsx(vt,{$color:n.color,children:n.due})]},n.title))})]})}function zI(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Policy Engine"}),e.jsx(gn,{children:"Author, version, and distribute company policies"})]}),e.jsxs(Dn,{children:[e.jsxs(ze,{children:[e.jsx(Ue,{children:"Published Policies"}),e.jsx(We,{children:"43"}),e.jsx(Fe,{children:"Across 8 categories"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Under Review"}),e.jsx(We,{children:"6"}),e.jsx(Fe,{children:"Awaiting approval"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Acknowledgments"}),e.jsx(We,{children:"94%"}),e.jsx(Fe,{children:"Team completion rate"})]})]}),e.jsx(er,{children:"Recent Policies"}),e.jsx(hr,{children:[{title:"Remote Work Policy 2025",category:"Workplace",status:"Published",color:"#e8f5e9"},{title:"PTO & Leave Guidelines",category:"Benefits",status:"Published",color:"#e8f5e9"},{title:"Code of Conduct v3",category:"Compliance",status:"Under Review",color:"#fff8e1"},{title:"Data & Privacy Policy",category:"Legal",status:"Under Review",color:"#fff8e1"},{title:"Expense Reimbursement",category:"Finance",status:"Draft",color:void 0}].map(n=>e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:n.title}),e.jsx(_t,{children:n.category})]}),e.jsx(vt,{$color:n.color,children:n.status})]},n.title))})]})}function FI(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Automation"}),e.jsx(gn,{children:"Build and monitor automated HR workflows"})]}),e.jsxs(Dn,{children:[e.jsxs(ze,{children:[e.jsx(Ue,{children:"Active Automations"}),e.jsx(We,{children:"21"}),e.jsx(Fe,{children:"Running across modules"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Runs Today"}),e.jsx(We,{children:"148"}),e.jsx(Fe,{children:"0 errors"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Time Saved"}),e.jsx(We,{children:"12h"}),e.jsx(Fe,{children:"This week"})]})]}),e.jsx(er,{children:"Active Automations"}),e.jsx(hr,{children:[{title:"New hire onboarding sequence",trigger:"On hire date",runs:"3 today",color:"#e8f5e9"},{title:"Policy acknowledgment reminder",trigger:"Weekly · Mon 9am",runs:"89 this week",color:"#e8f5e9"},{title:"Payroll cutoff alert",trigger:"Monthly · 3 days before",runs:"1 this month",color:"#e8f5e9"},{title:"Contract expiry warning",trigger:"30 days before expiry",runs:"2 today",color:"#e8f5e9"}].map(n=>e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:n.title}),e.jsxs(_t,{children:[n.trigger," · ",n.runs]})]}),e.jsx(vt,{$color:n.color,children:"Active"})]},n.title))})]})}function OI(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Payroll"}),e.jsx(gn,{children:"Process and manage payroll for your workforce"})]}),e.jsxs(Dn,{children:[e.jsxs(ze,{children:[e.jsx(Ue,{children:"Next Run"}),e.jsx(We,{children:"Apr 1"}),e.jsx(Fe,{children:"6 days away"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Total Payroll"}),e.jsx(We,{children:"$214k"}),e.jsx(Fe,{children:"This cycle"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Employees"}),e.jsx(We,{children:"87"}),e.jsx(Fe,{children:"Full-time & part-time"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Contractors"}),e.jsx(We,{children:"24"}),e.jsx(Fe,{children:"Pending 3 invoices"})]})]}),e.jsx(er,{children:"Recent Payroll Runs"}),e.jsx(hr,{children:[{period:"Mar 1–15, 2025",total:"$106,400",status:"Processed",color:"#e8f5e9"},{period:"Feb 15–28, 2025",total:"$104,200",status:"Processed",color:"#e8f5e9"},{period:"Feb 1–14, 2025",total:"$103,800",status:"Processed",color:"#e8f5e9"},{period:"Jan 15–31, 2025",total:"$101,500",status:"Archived",color:void 0}].map(n=>e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:n.period}),e.jsx(_t,{children:n.total})]}),e.jsx(vt,{$color:n.color,children:n.status})]},n.period))})]})}function BI(){return e.jsxs(rn,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"E-Sign Studio"}),e.jsx(gn,{children:"Send, track, and collect electronic signatures"})]}),e.jsxs(Dn,{children:[e.jsxs(ze,{children:[e.jsx(Ue,{children:"Awaiting Signature"}),e.jsx(We,{children:"8"}),e.jsx(Fe,{children:"Sent to recipients"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Completed This Month"}),e.jsx(We,{children:"31"}),e.jsx(Fe,{children:"All signatures collected"})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:"Avg Turnaround"}),e.jsx(We,{children:"1.4d"}),e.jsx(Fe,{children:"From send to signed"})]})]}),e.jsx(er,{children:"Pending Signatures"}),e.jsx(hr,{children:[{title:"Offer Letter — Sarah Kim",sent:"Today",status:"Awaiting",color:"#fff8e1"},{title:"NDA — Rahul Dev",sent:"Mar 23",status:"Awaiting",color:"#fff8e1"},{title:"Contract — Studio Nine",sent:"Mar 21",status:"Awaiting",color:"#fff8e1"},{title:"Amendment — Alex Torres",sent:"Mar 20",status:"Signed",color:"#e8f5e9"},{title:"IP Agreement — Jun Park",sent:"Mar 19",status:"Signed",color:"#e8f5e9"}].map(n=>e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:n.title}),e.jsxs(_t,{children:["Sent ",n.sent]})]}),e.jsx(vt,{$color:n.color,children:n.status})]},n.title))})]})}const Qa=(n,s,a)=>Math.max(s,Math.min(a,n)),Xg=n=>(n=Qa(n,0,1),n*n*(3-2*n)),uc=n=>n>=48?1:n>=32?1.2:n>=24?1.5:n>=20?1.85:2.3;function HI(n){const s=(n||"#96B9FF").replace("#",""),a=parseInt(s.length===3?s.split("").map(i=>i+i).join(""):s,16);return(a>>16&255)+","+(a>>8&255)+","+(a&255)}function UI(n,s){return n==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:n==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:s,glow:!0}:n==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:s,glow:!0}}function pc(n,s,a){const{ctx:i,w:c,h:u}=n,f=c/2,g=u/2,y=Math.min(c,u)*.39*.2*(.9+.14*Math.sin(s*1.5));if(a.glow){const x=i.createRadialGradient(f,g,0,f,g,y*3);x.addColorStop(0,"rgba("+a.core+",0.55)"),x.addColorStop(1,"rgba("+a.accent+",0)"),i.fillStyle=x,i.beginPath(),i.arc(f,g,y*3,0,6.2832),i.fill()}i.fillStyle="rgba("+a.core+","+(a.glow?1:.95)+")",i.beginPath(),i.arc(f,g,Math.max(.8,y),0,6.2832),i.fill()}function Jg(n,s,a){const{ctx:i,w:c,h:u}=n,f=c/2,g=u/2,m=Math.min(c,u)*.39,y=n.state!=="idle",x=[[1.35,.3],[1.05,2.4]],k=s*(y?.5:.16),b=.42,C=Math.cos(b),L=Math.sin(b),S=Math.cos(k),I=Math.sin(k),M=m*.96,N=(X,Z,V)=>{const U=X*S+V*I,H=-X*I+V*S,ne=Z,K=ne*C-H*L,J=(ne*L+H*C+1)/2,q=.82+.18*J;return{x:f+U*M*q,y:g+K*M*q,d:J}},j=(X,Z,V)=>{const U=Math.cos(X),H=Math.sin(X)*Math.cos(Z),ne=Math.sin(X)*Math.sin(Z);return[U*Math.cos(V)+ne*Math.sin(V),H,-U*Math.sin(V)+ne*Math.cos(V)]};i.save(),i.globalCompositeOperation=a.glow?"lighter":"source-over",i.lineCap="round",i.lineJoin="round";const _=n.size>=24?64:40,E=y?.9:.3,z=_,R=6.2832,F=[];for(let X=0;X<x.length;X++){const Z=x[X][0],V=x[X][1],U=K=>{const Y=j(K,Z,V);return N(Y[0],Y[1],Y[2])},H=X%2?1:-1,ne=X*2+H*s*E;F.push({ptOf:U,head:ne,dir:H,hp:U(ne)})}F.sort((X,Z)=>X.hp.d-Z.hp.d);for(const X of F){const Z=Math.max(1.2,m*.05)*(.75+.35*X.hp.d),V=9,U=Math.ceil(z/V);i.lineCap="butt";for(let K=0;K<V;K++){const Y=K/V,J=(K+1)/V,q=1-(Y+J)/2,B=.66*q*q*(.45+.55*X.hp.d);i.strokeStyle="rgba("+a.dot+","+B+")",i.lineWidth=Z,i.beginPath();for(let $=0;$<=U;$++){const A=Y+(J-Y)*($/U),P=X.ptOf(X.head-X.dir*A*R);$===0?i.moveTo(P.x,P.y):i.lineTo(P.x,P.y)}i.stroke()}i.lineCap="round";const H=Math.max(.9,m*.062*uc(n.size)*(.65+.5*X.hp.d)),ne=.45+.55*X.hp.d;if(a.glow){const K=i.createRadialGradient(X.hp.x,X.hp.y,0,X.hp.x,X.hp.y,H*4.5);K.addColorStop(0,"rgba("+a.accent+","+.3*ne+")"),K.addColorStop(1,"rgba("+a.accent+",0)"),i.fillStyle=K,i.beginPath(),i.arc(X.hp.x,X.hp.y,H*4.5,0,6.2832),i.fill()}i.fillStyle="rgba("+a.dot+","+Math.min(1,ne+.1)+")",i.beginPath(),i.arc(X.hp.x,X.hp.y,H,0,6.2832),i.fill()}pc(n,s,a),i.restore()}function L0(n,s,a){const{ctx:i,w:c,h:u}=n,f=c/2,g=u/2,m=Math.min(c,u)*.39,y=n.state!=="idle",x=n.size>=32?10:n.size>=20?7:5,k=m*.82,b=y?s*.55:s*.22,C=Math.cos(b),L=Math.sin(b),S=.42,I=Math.cos(S),M=Math.sin(S);i.save(),i.globalCompositeOperation=a.glow?"lighter":"source-over";const N=[];for(let H=0;H<x;H++){const ne=1-(H+.5)/x*2,K=Math.sqrt(Math.max(0,1-ne*ne)),Y=H*2.39996,J=Math.cos(Y)*K,q=ne,B=Math.sin(Y)*K,$=J*C+B*L,A=-J*L+B*C,P=q*I-A*M,te=q*M+A*I,re=(te+1)/2,fe=.82+.18*re;N.push({x:f+$*k*fe,y:g+P*k*fe,d:re,k:H,vec:[$,P,te]})}N.sort((H,ne)=>H.d-ne.d);const j=H=>{const ne=(H[2]+1)/2,K=.82+.18*ne;return{x:f+H[0]*k*K,y:g+H[1]*k*K,d:ne}},_=(H,ne,K)=>{let Y=H[0]*ne[0]+H[1]*ne[1]+H[2]*ne[2];Y=Qa(Y,-1,1);const J=Math.acos(Y);if(J<.001)return[H[0],H[1],H[2]];const q=Math.sin(J),B=Math.sin((1-K)*J)/q,$=Math.sin(K*J)/q;return[H[0]*B+ne[0]*$,H[1]*B+ne[1]*$,H[2]*B+ne[2]*$]},E={};for(const H of N)E[H.k]=H;const R=s*(y?1.4:.5),F=Math.floor(R),X=R-F,Z=5,V=12;i.lineCap="round",i.lineJoin="round";const U=[{seed:1.7},{seed:9.3},{seed:21.5},{seed:34.8}];for(const H of U){const ne=Y=>{const J=Math.sin(Y*12.9898+H.seed)*43758.5453;return Math.floor((J-Math.floor(J))*x)},K=Y=>{let J=ne(Y);return J===ne(Y-1)&&(J=(J+1)%x),E[J]};for(let Y=Z-1;Y>=0;Y--){const J=F-Y;if(J<0)continue;const q=K(J),B=K(J+1);if(!q||!B||q===B)continue;const $=Y===0?X:1,A=j(_(q.vec,B.vec,$)),P=(q.d+A.d)/2,te=Y===0?1:Qa(1-(Y-1+X)/(Z-1),0,1),re=(a.glow?.6:.72)*te*(.4+.6*P);if(re<.02)continue;const fe=i.createLinearGradient(q.x,q.y,A.x,A.y);fe.addColorStop(0,"rgba("+a.dot+",0)"),fe.addColorStop(1,"rgba("+a.dot+","+re+")"),i.strokeStyle=fe,i.lineWidth=Math.max(1.2,m*.045)*(.7+.4*P),i.beginPath();for(let we=0;we<=V;we++){const ge=j(_(q.vec,B.vec,$*(we/V)));we===0?i.moveTo(ge.x,ge.y):i.lineTo(ge.x,ge.y)}i.stroke()}}for(const H of N){const ne=.5+.5*Math.sin(s*2-H.k*.9),K=(.18+.82*H.d)*(.62+.38*ne),Y=m*.058*uc(n.size)*(.6+.5*H.d);if(a.glow){const J=Y*4,q=i.createRadialGradient(H.x,H.y,0,H.x,H.y,J);q.addColorStop(0,"rgba("+a.accent+","+.24*K+")"),q.addColorStop(1,"rgba("+a.accent+",0)"),i.fillStyle=q,i.beginPath(),i.arc(H.x,H.y,J,0,6.2832),i.fill()}i.fillStyle="rgba("+a.dot+","+(.32+.68*K)+")",i.beginPath(),i.arc(H.x,H.y,Math.max(.9,Y),0,6.2832),i.fill()}pc(n,s,a),i.restore()}function WI(n,s,a){const{ctx:i,w:c,h:u,dpr:f}=n,g=c/2,m=u/2,y=Math.min(c,u)*.39,x=n.state!=="idle",k=n.size>=32?11:7,b=y*.12,C=y*.12,L=Xg(.5+.5*Math.sin(s*(x?1:.55))),S=x?.34+.66*L:.5+.12*L,I=Math.max(1*f,y*.052),M=-s*(x?.5:.16),N=Math.cos(M),j=Math.sin(M),_=.42,E=Math.cos(_),z=Math.sin(_);i.save(),i.globalCompositeOperation=a.glow?"lighter":"source-over",i.lineCap="round";const R=y*(.52+.44*S),F=Math.max(b+I,R-C),X=[];for(let Z=0;Z<k;Z++){const V=1-(Z+.5)/k*2,U=Math.sqrt(Math.max(0,1-V*V)),H=Z*2.39996,ne=Math.cos(H)*U,K=V,Y=Math.sin(H)*U,J=ne*N+Y*j,q=-ne*j+Y*N,B=K*E-q*z,A=(K*z+q*E+1)/2,P=.82+.18*A,te=.5+.5*Math.sin(s*1.6+Z*1.3);X.push({x0:g+J*b*P,y0:m+B*b*P,x1:g+J*F*P,y1:m+B*F*P,cx2:g+J*R*P,cy2:m+B*R*P,d:A,shim:te})}X.sort((Z,V)=>Z.d-V.d);for(const Z of X){const V=(x?.4+.45*S:.6)*(.4+.6*Z.d)*(.78+.22*Z.shim),U=i.createLinearGradient(Z.x0,Z.y0,Z.x1,Z.y1);U.addColorStop(0,"rgba("+a.dot+","+V+")"),U.addColorStop(1,"rgba("+a.accent+",0)"),i.strokeStyle=U,i.lineWidth=I*(.7+.5*Z.d),i.beginPath(),i.moveTo(Z.x0,Z.y0),i.lineTo(Z.x1,Z.y1),i.stroke();const H=Math.max(.9,y*.058*uc(n.size)*(.85+.3*S)*(.6+.5*Z.d));if(a.glow){const ne=i.createRadialGradient(Z.cx2,Z.cy2,0,Z.cx2,Z.cy2,H*5);ne.addColorStop(0,"rgba("+a.accent+","+.26*V+")"),ne.addColorStop(1,"rgba("+a.accent+",0)"),i.fillStyle=ne,i.beginPath(),i.arc(Z.cx2,Z.cy2,H*5,0,6.2832),i.fill()}i.fillStyle="rgba("+a.dot+","+Math.min(1,V+.1)+")",i.beginPath(),i.arc(Z.cx2,Z.cy2,H,0,6.2832),i.fill()}pc(n,s,a),i.restore()}function qI(n,s,a){const{ctx:i,w:c,h:u}=n,f=c/2,g=u/2,m=Math.min(c,u)*.39,y=n.state!=="idle",x=n.size>=32?58:n.size>=20?32:18,k=m*.78,b=y?s*.5:s*.2,C=Math.cos(b),L=Math.sin(b),S=.42,I=Math.cos(S),M=Math.sin(S),N=y?1:.4,j=(R,F)=>[Math.sin(R)*Math.cos(F),Math.cos(R),Math.sin(R)*Math.sin(F)],_=[j(1.4+.5*Math.sin(s*.5*N),s*.6*N),j(1.9+.4*Math.cos(s*.4*N),-s*.5*N+2)],E=.36;i.save(),i.globalCompositeOperation=a.glow?"lighter":"source-over";const z=[];for(let R=0;R<x;R++){const F=1-(R+.5)/x*2,X=Math.sqrt(Math.max(0,1-F*F)),Z=R*2.39996,V=Math.cos(Z)*X,U=F,H=Math.sin(Z)*X;let ne=0;for(const A of _){const P=V-A[0],te=U-A[1],re=H-A[2];ne+=Math.exp(-(P*P+te*te+re*re)/(2*E*E))}ne=Qa(ne,0,1);const K=V*C+H*L,Y=-V*L+H*C,J=U*I-Y*M,B=(U*M+Y*I+1)/2,$=.82+.18*B;z.push({x:f+K*k*$,y:g+J*k*$,d:B,inf:ne})}z.sort((R,F)=>R.d-F.d);for(const R of z){const F=Xg(R.inf),X=Math.max(.6,m*(.05+.06*F)*uc(n.size)*(.55+.5*R.d)),Z=(.16+.84*R.d)*(.45+.55*F),V=Math.abs(2*R.d-1),U=Math.atan2(R.y-g,R.x-f);i.fillStyle="rgba("+a.dot+","+Z+")",i.beginPath(),i.ellipse(R.x,R.y,Math.max(.35,X*V),X,U,0,6.2832),i.fill()}pc(n,s,a),i.restore()}const VI={orbit:Jg,circle:L0,lines:WI,magnetic:qI,bands:L0};function $s({mark:n="orbit",size:s=16,tone:a="light",state:i="active",motionSpeed:c=1,accent:u="#96B9FF",className:f,"aria-label":g}){const m=v.useRef(null);return v.useEffect(()=>{const y=m.current;if(!y)return;const x=y.getContext("2d",{willReadFrequently:!0});if(!x)return;const k=Math.min(2,window.devicePixelRatio||1),b=Math.max(2,Math.round(s*k)),C=b;y.width=b,y.height=C;const L={ctx:x,w:b,h:C,dpr:k,size:s,state:i},S=a==="light",I=UI(S?"onblack":a,HI(u)),M=VI[n]??Jg,N=26,j=30,_=38,E=Z=>{x.clearRect(0,0,b,C);const V=i==="static"?.62:Z;if(S&&(x.globalCompositeOperation="source-over",x.fillStyle="#000",x.fillRect(0,0,b,C)),M(L,V,I),S){const U=x.getImageData(0,0,b,C),H=U.data;for(let ne=0;ne<H.length;ne+=4){const K=H[ne]*.299+H[ne+1]*.587+H[ne+2]*.114;H[ne]=N,H[ne+1]=j,H[ne+2]=_,H[ne+3]=K}x.putImageData(U,0,0)}},z=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),R=Qa(c,.4,2);if(E(1.15),z||i==="static")return;let F=0;const X=Z=>{E(Z/1e3*R),F=requestAnimationFrame(X)};return F=requestAnimationFrame(X),()=>cancelAnimationFrame(F)},[n,s,a,i,c,u]),e.jsx("canvas",{ref:m,width:s,height:s,style:{width:s,height:s,display:"block",flexShrink:0},className:f,role:"img","aria-label":g})}const Gu={send:Qm,clock:Ja,done:qt,rate:cw,chart:Ha,edit:Ym,alert:dp},Ul={high:0,medium:1,low:2,none:3};h.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function e2(n){return n.status==="resolved"||n.status==="auto_resolved"||n.status==="workflow_available"?"green":n.severity==="high"?"orange":"slate"}const GI=h.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`,E0={needs_approval:{label:"Needs approval",tag:"warning"},recommended:{label:"Recommended",tag:"info"},in_progress:{label:"In progress",tag:"pending"},monitoring:{label:"Monitoring",tag:"neutral"},unresolved:{label:"Unresolved",tag:"warning"},resolved:{label:"Resolved",tag:"success"},auto_resolved:{label:"Auto-resolved",tag:"success"},workflow_available:{label:"Workflow ready",tag:"neutral"}},ZI=n=>n.status==="workflow_available"||n.status==="resolved"&&n.workflowOpportunity!=null,YI=n=>/^(review|adjust|revisit|update)\b/i.test(n),KI=["Revisit","Update","Resolve"],QI=n=>/,|\sand\s/.test(n),XI="Yes, do it all";h.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;const JI=h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;function eN({thread:n}){return(n.status==="resolved"||n.status==="auto_resolved")&&n.outcome?e.jsx(JI,{children:n.outcome}):null}const R0=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],tN=2800;function nN(){const[n,s]=v.useState(0);return v.useEffect(()=>{const a=setInterval(()=>s(i=>(i+1)%R0.length),tN);return()=>clearInterval(a)},[]),e.jsx(rN,{children:e.jsxs(oN,{children:[e.jsx($s,{mark:"circle",size:48,tone:"light",state:"active","aria-label":"Ultron"}),e.jsxs(sN,{children:[e.jsx(aN,{children:"Ultron"}),e.jsxs(iN,{role:"status","aria-live":"polite",children:[e.jsx(cN,{children:R0[n]},n),e.jsxs(uN,{"aria-hidden":"true",children:[e.jsx("span",{children:"."}),e.jsx("span",{children:"."}),e.jsx("span",{children:"."})]})]})]})]})})}const rN=h.div`
  font-family: var(--font-sans);
`,oN=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,sN=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,aN=h.span`
  min-width: 0;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,iN=h.div`
  display: flex;
  align-items: baseline;
  min-height: var(--space-4);
`,lN=io`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,cN=h.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  animation: ${lN} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,dN=io`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,uN=h.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${dN} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,Nu=[{id:"callout_recovery",name:"Employee Call-Out Recovery",title:"Maria Lopez called out of tomorrow’s RN shift",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria Lopez called out of her RN shift tomorrow at 8:00 AM.",assessment:"Coverage risk detected. No replacement assigned and shift begins in 18 hours.",recommendation:"Contact top replacement candidates and notify manager.",outcome:null,workflowOpportunity:"Automate future call-out recovery.",timeline:[{state:"detected",headline:"RN shift released for tomorrow morning",done:!0},{state:"assessment",headline:"Coverage is at risk",done:!0},{state:"recommendation",headline:"12 qualified replacements identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Contact candidates","Notify manager"],timestamp:"8m ago"},{id:"no_show",name:"Employee No Show",title:"John Smith failed to clock in for his shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"John Smith failed to clock in 20 minutes after shift start.",assessment:"Likely no-show. Coverage risk detected.",recommendation:"Contact employee, notify manager, begin replacement search.",outcome:null,workflowOpportunity:"Automate no-show response.",timeline:[{state:"detected",headline:"No clock-in 20 minutes after shift start",done:!0},{state:"assessment",headline:"Pattern matches a likely no-show",done:!0},{state:"recommendation",headline:"Outreach + replacement plan prepared",done:!0},{state:"approval",headline:"Approval required to begin recovery",done:!1}],actions:["Reach out to John","Notify manager","Start replacement search"],timestamp:"14m ago"},{id:"payroll_exception",name:"Payroll Exception",title:"Missing clock-out detected on a timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Employee clocked in but never clocked out.",assessment:"Payroll discrepancy detected.",recommendation:"Approve estimated end time.",outcome:null,workflowOpportunity:"Automate timesheet exception handling.",timeline:[{state:"detected",headline:"Open punch found on yesterday’s timesheet",done:!0},{state:"assessment",headline:"Estimated end time derived from schedule",done:!0},{state:"recommendation",headline:"Proposed correction ready for review",done:!0},{state:"approval",headline:"Approval required to correct payroll",done:!1}],actions:["Review","Approve End Time"],timestamp:"22m ago"},{id:"fill_risk",name:"Shift Unlikely To Fill",title:"Weekend RN shift unlikely to fill at current rate",capability:"Fill Optimization",status:"recommended",severity:"medium",event:"Weekend RN shift has remained open for 5 days.",assessment:"Fill probability is only 22% at current pay rate.",recommendation:"Increase pay by $3/hr and notify nearby qualified workers.",outcome:null,workflowOpportunity:"Auto-adjust rates when fill probability falls below threshold.",timeline:[{state:"detected",headline:"Shift open 5 days",done:!0},{state:"assessment",headline:"Fill probability 22% at current rate",done:!0},{state:"recommendation",headline:"Rate increase + targeted outreach proposed",done:!1}],actions:["Raise pay $3/hr","Notify nearby workers"],timestamp:"35m ago"},{id:"overtime_risk",name:"Overtime Risk",title:"Projected overtime exceeds budget this week",capability:"Labor Optimization",status:"recommended",severity:"medium",event:"Projected overtime exceeds budget by $4,200 this week.",assessment:"Two employees account for most projected overtime.",recommendation:"Rebalance schedules.",outcome:null,workflowOpportunity:"Automate overtime optimization recommendations.",timeline:[{state:"detected",headline:"Projected overtime $4,200 over budget",done:!0},{state:"assessment",headline:"Two employees drive most of the overage",done:!0},{state:"recommendation",headline:"Schedule rebalance plan prepared",done:!1}],actions:["Review Schedule","Rebalance Schedules"],timestamp:"1h ago"},{id:"order_fill_strategy",name:"Open Order Optimization",title:"High-priority facility order is not filling",capability:"Marketplace Optimization",status:"recommended",severity:"medium",event:"High-priority facility order is not filling.",assessment:"Pay rate is below local market average.",recommendation:"Increase rate and expand search radius.",outcome:null,workflowOpportunity:"Automate fill strategy optimization.",timeline:[{state:"detected",headline:"Priority order stalled",done:!0},{state:"assessment",headline:"Rate is below local market average",done:!0},{state:"recommendation",headline:"Rate + radius adjustment proposed",done:!1}],actions:["Raise the rate","Expand search radius"],timestamp:"1h ago"},{id:"candidate_match",name:"Strong Applicant Match",title:"New CNA applicant is a 92% match",capability:"Recruiting",status:"recommended",severity:"low",event:"New CNA applicant submitted an application.",assessment:"92% match for open CNA position.",recommendation:"Schedule interview.",outcome:null,workflowOpportunity:"Auto-advance qualified applicants.",timeline:[{state:"detected",headline:"New CNA application received",done:!0},{state:"assessment",headline:"92% match for open position",done:!0},{state:"recommendation",headline:"Interview recommended",done:!1}],actions:["Schedule Interview"],timestamp:"2h ago"},{id:"autonomous_callout",name:"Overnight Autonomous Recovery",title:"Shift covered automatically overnight",capability:"Autonomous Operations",status:"auto_resolved",severity:"high",event:"Employee called out at 2:00 AM.",assessment:"Coverage risk detected overnight.",recommendation:"No approval required based on configured policy.",outcome:"Replacement found in 17 minutes. Manager notified.",workflowOpportunity:"Autonomous staffing recovery enabled.",timeline:[{state:"detected",headline:"Call-out received at 2:00 AM",done:!0},{state:"assessment",headline:"Coverage risk + autonomous policy match",done:!0},{state:"execution",headline:"Contacted candidates and filled the shift",done:!0},{state:"resolution",headline:"Replacement confirmed · manager notified",done:!0}],actions:[],timestamp:"6h ago"},{id:"attendance_risk",name:"Attendance Risk Detected",title:"Attendance trend worsening for one employee",capability:"Workforce Insights",status:"monitoring",severity:"low",event:"Employee has 4 late arrivals this month.",assessment:"Attendance trend worsening.",recommendation:"Manager coaching conversation recommended.",outcome:null,workflowOpportunity:"Attendance escalation workflow.",timeline:[{state:"detected",headline:"4 late arrivals this month",done:!0},{state:"assessment",headline:"Trend is worsening month-over-month",done:!0},{state:"monitoring",headline:"Watching for further attendance slips",done:!1}],actions:["Open Coaching Note"],timestamp:"4h ago"},{id:"credential_expiring",name:"Credential Expiration",title:"RN license renewed before expiration",capability:"Compliance",status:"resolved",severity:"low",event:"RN license expires in 14 days.",assessment:"Future assignments may become non-compliant.",recommendation:"Send renewal reminder and notify manager.",outcome:"License renewed before expiration.",workflowOpportunity:"Automate credential reminders.",timeline:[{state:"detected",headline:"RN license expires in 14 days",done:!0},{state:"assessment",headline:"Upcoming assignments would be non-compliant",done:!0},{state:"recommendation",headline:"Renewal reminder sent to employee + manager",done:!0},{state:"resolution",headline:"License renewed before expiration",done:!0}],actions:["Send Reminder"],timestamp:"3h ago"},{id:"retention_risk",name:"Employee Retention Risk",title:"Top performer reduced availability by 60%",capability:"Employee Retention",status:"workflow_available",severity:"none",event:"Top-performing RN reduced availability by 60%.",assessment:"Potential retention risk detected.",recommendation:"Schedule manager check-in.",outcome:"Conversation scheduled.",workflowOpportunity:"Retention risk monitoring.",timeline:[{state:"detected",headline:"Availability dropped 60%",done:!0},{state:"assessment",headline:"Flagged as a retention risk",done:!0},{state:"recommendation",headline:"Manager check-in scheduled",done:!0},{state:"workflow",headline:"Recurring pattern ready to save as a workflow",done:!0}],actions:["Schedule Check-In"],timestamp:"Yesterday"},{id:"unfilled_shift",name:"Shift Still Unfilled",title:"Dana Whitfield's shift still has no replacement",capability:"Coverage Recovery",status:"unresolved",severity:"high",event:"Automated outreach closed with no acceptances.",assessment:"No candidates accepted; the shift remains uncovered and needs a decision.",recommendation:"Offer a $5/hr incentive or escalate to the on-call pool.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement search opened",done:!0},{state:"execution",headline:"Contacted 12 candidates — no acceptances",done:!0},{state:"assessment",headline:"Shift still uncovered — needs a decision",done:!1}],actions:["Revisit","Update","Resolve"],timestamp:"30m ago"}],Zu={callout_recovery:"Maria Lopez",no_show:"John Smith",payroll_exception:"Devon Carter",fill_risk:"Priya Nair",overtime_risk:"Marcus Lee",order_fill_strategy:"Elena Rossi",candidate_match:"Aisha Khan",autonomous_callout:"Nina Alvarez",attendance_risk:"Tyler Brooks",credential_expiring:"Robert Chen",retention_risk:"Sara Donovan",unfilled_shift:"Dana Whitfield"};function pN(n){const s=Zu[n.id];if(!s||n.title.startsWith(s))return n.title;const a=n.title.split(" ")[0]??"",c=a===a.toUpperCase()?n.title:n.title.charAt(0).toLowerCase()+n.title.slice(1);return`${s} ${c}`}const t2=n=>`https://i.pravatar.cc/80?u=${n}`,hN={callout_recovery:"Want me to contact the top replacement candidates and notify the manager?",no_show:"Want me to reach out to John, notify the manager, and start a replacement search?",payroll_exception:"Approve the estimated end time?",fill_risk:"Want me to raise pay by $3/hr and notify nearby qualified workers?",overtime_risk:"Want me to rebalance the schedules to cut the projected overtime?",order_fill_strategy:"Want me to raise the rate and expand the search radius?",candidate_match:"Want me to schedule an interview with this applicant?",credential_expiring:"Want me to send a renewal reminder and notify the manager?",attendance_risk:"Want me to open a coaching note for the manager?",retention_risk:"Want me to schedule a manager check-in?",autonomous_callout:"No action needed — Ultron handled this automatically.",unfilled_shift:"Want me to offer a $5/hr incentive and escalate to the on-call pool?"},n2={callout_recovery:[{icon:"send",headline:"Outreach sent to 12 candidates",detail:"Coverage requests delivered to qualified RNs."},{icon:"clock",headline:"Tracking responses",detail:"3 viewed · 1 interested · 0 accepted."},{icon:"done",headline:"Sarah Kim is the strongest match",detail:"Available, 94% match."}],no_show:[{icon:"send",headline:"Contacting John and replacements",detail:"Outreach sent; manager notified."},{icon:"clock",headline:"Tracking responses",detail:"Waiting on candidate confirmations."},{icon:"done",headline:"Replacement confirmed",detail:"Coverage secured for the shift."}],payroll_exception:[{icon:"clock",headline:"Estimating end time",detail:"Deriving from schedule and punch history."},{icon:"edit",headline:"Applying correction",detail:"Updating the open timesheet."},{icon:"done",headline:"Payroll corrected",detail:"Adjustment recorded for approval."}],fill_risk:[{icon:"rate",headline:"Raising pay by $3/hr",detail:"Updating the posting rate."},{icon:"send",headline:"Notifying nearby workers",detail:"Targeted outreach to qualified RNs."},{icon:"done",headline:"Two qualified RNs applied",detail:"Awaiting your approval."}],overtime_risk:[{icon:"chart",headline:"Rebalancing schedules",detail:"Shifting hours off two over-budget employees."},{icon:"send",headline:"Confirming swaps",detail:"Notifying affected employees."},{icon:"done",headline:"Overtime reduced",detail:"Projected overage down 35%."}],order_fill_strategy:[{icon:"rate",headline:"Raising rate & expanding radius",detail:"Updating the order parameters."},{icon:"send",headline:"Re-marketing the order",detail:"Reaching a wider candidate pool."},{icon:"done",headline:"Candidates applying",detail:"Three qualified candidates so far."}],candidate_match:[{icon:"clock",headline:"Finding an interview slot",detail:"Checking mutual availability."},{icon:"send",headline:"Sending the invite",detail:"Notifying the applicant and hiring manager."},{icon:"done",headline:"Interview completed — strong feedback",detail:"Ready for a decision."}],unfilled_shift:[{icon:"rate",headline:"Adding a $5/hr incentive",detail:"Updating the shift offer."},{icon:"send",headline:"Escalating to the on-call pool",detail:"Notifying available on-call RNs."},{icon:"done",headline:"On-call RN accepted",detail:"Coverage restored with the incentive."}]},r2={callout_recovery:{prompt:"Sarah Kim (94% match) is available. Assign her to the shift?",actions:["Review","Assign Sarah"],working:[{icon:"edit",headline:"Assigning Sarah to the shift",detail:""},{icon:"clock",headline:"Updating the schedule",detail:""},{icon:"done",headline:"Coverage confirmed",detail:""}],record:{eyebrow:"RN",title:"Sarah Kim",meta:["Los Angeles","4 yr Exp","Available immediately"],avatarSeed:"sarah_kim"}},fill_risk:{prompt:"Two RNs applied. Approve the top applicant for the shift?",actions:["Review","Approve Applicant"],working:[{icon:"edit",headline:"Approving the applicant",detail:""},{icon:"clock",headline:"Updating the schedule",detail:""},{icon:"done",headline:"Shift filled",detail:""}],record:{eyebrow:"RN",title:"Jordan Reyes",meta:["Top applicant","3 yr Exp","Available"],avatarSeed:"jordan_reyes"}},candidate_match:{prompt:"The interview went well. Send an offer to the candidate?",actions:["Review","Send Offer"],working:[{icon:"send",headline:"Sending the offer",detail:""},{icon:"clock",headline:"Awaiting acceptance",detail:""},{icon:"done",headline:"Offer accepted",detail:""}],record:{eyebrow:"CNA Applicant",title:"Aisha Khan",meta:["Interview: strong","2 yr Exp","Available"],avatarSeed:"candidate_match"}}},fN={callout_recovery:[{eyebrow:"RN",title:"Sarah Kim",meta:["94% match","Available now","Strong attendance"],avatarSeed:"sarah_kim"},{eyebrow:"RN",title:"James Carter",meta:["91% match","Available now","Good attendance"],avatarSeed:"james_carter"},{eyebrow:"RN",title:"Priya Patel",meta:["88% match","Available now","Within radius"],avatarSeed:"priya_patel"}],no_show:{eyebrow:"RN",title:"John Smith",meta:["No-show","Day shift","20m late"],avatarSeed:"no_show"},payroll_exception:{eyebrow:"Timesheet",title:"Devon Carter",meta:["Missing clock-out","Yesterday"],avatarSeed:"payroll_exception"},candidate_match:{eyebrow:"CNA Applicant",title:"Aisha Khan",meta:["92% match","2 yr Exp","Available"],avatarSeed:"candidate_match"},unfilled_shift:{eyebrow:"Open RN shift",title:"Saturday · 7:00 PM",meta:["Night","1 RN needed","No replacement"],avatarSeed:"unfilled_shift"}},$0={callout_recovery:{eyebrow:"RN · Assigned",title:"Sarah Kim",meta:["Coverage restored","Night shift","Tomorrow 8:00 AM"],avatarSeed:"sarah_kim"},no_show:{eyebrow:"RN · Replacement",title:"Priya Patel",meta:["Shift covered","Day shift"],avatarSeed:"priya_patel"},fill_risk:{eyebrow:"RN · Approved",title:"Jordan Reyes",meta:["Shift filled","3 yr Exp"],avatarSeed:"jordan_reyes"},candidate_match:{eyebrow:"CNA · Offer accepted",title:"Aisha Khan",meta:["Onboarding started","2 yr Exp"],avatarSeed:"candidate_match"},autonomous_callout:{eyebrow:"RN · Auto-assigned",title:"Daniel Brooks",meta:["ICU · Night shift","7:00 PM–7:00 AM","6 yr Exp"],avatarSeed:"auto_fill"}},mN={callout_recovery:[{icon:"clock",headline:"RN shift released for tomorrow morning",blocks:[{text:"Maria Lopez called out of her 8:00 AM RN shift, leaving it open."}]},{icon:"alert",headline:"Coverage is at risk",blocks:[{bullets:["Shift begins in 18 hours","No replacement currently assigned","Similar shifts typically require 4–6 hours to fill","Staffing levels would fall below target"]}]},{icon:"send",headline:"12 qualified replacements identified",blocks:[{text:"Ultron found employees that match role requirements, availability, attendance history, and commute distance."},{label:"Top Matches",bullets:["Sarah Kim — 94%","James Carter — 91%","Priya Patel — 88%"]},{label:"Matching Factors",checks:["RN qualified","Available during shift","Strong attendance history","Within commute radius"]}]},{icon:"done",headline:"Sarah Kim assigned — coverage restored",blocks:[{checks:["Shift assigned to Sarah Kim","Schedule updated","Manager notified"]}]}],autonomous_callout:[{icon:"clock",headline:"Call-out received at 2:00 AM",blocks:[{text:"Nina Alvarez reported she could not work her overnight RN shift."}]},{icon:"alert",headline:"Coverage risk + autonomous policy match",blocks:[{bullets:["Shift starts in under 5 hours","No replacement assigned","Unit would fall below minimum safe staffing",'Matches the "autonomous overnight recovery" policy']}]},{icon:"edit",headline:"Contacted candidates and filled the shift",blocks:[{text:"Ultron ranked qualified RNs by availability, attendance, and commute, then reached out automatically — no approval required under policy."},{label:"Outreach",bullets:["Messaged 8 qualified RNs","First positive reply in 9 min","Daniel Brooks accepted"]},{label:"Matching Factors",checks:["RN qualified","Available overnight","Strong attendance history","Within commute radius"]}]},{icon:"done",headline:"Replacement confirmed · manager notified",blocks:[{checks:["Shift assigned to Daniel Brooks","Schedule updated","Manager notified","Resolved in 17 minutes"]}]}],no_show:[{icon:"clock",headline:"No clock-in 20 minutes after shift start",blocks:[{text:"John Smith was scheduled at 7:00 AM and has not badged in or responded to the reminder."}]},{icon:"alert",headline:"Pattern matches a likely no-show",blocks:[{bullets:["2 no-shows in the last 30 days","No reply to the clock-in reminder","Past the 15-minute grace window"]}]},{icon:"send",headline:"Outreach + replacement plan prepared",blocks:[{text:"Ultron drafted outreach to John and lined up replacements in case he does not respond."},{label:"Replacement shortlist",bullets:["Priya Patel — available now","James Carter — available now"]}]},{icon:"edit",headline:"Approval required to begin recovery",blocks:[{text:"Awaiting approval to message John, alert the manager, and start the replacement search."}]}],payroll_exception:[{icon:"clock",headline:"Open punch found on yesterday’s timesheet",blocks:[{text:"Devon Carter clocked in at 9:02 AM but never recorded a clock-out."}]},{icon:"alert",headline:"Estimated end time derived from schedule",blocks:[{bullets:["Scheduled shift ended at 5:00 PM","No clock-out event recorded","Last badge activity at 4:54 PM"]}]},{icon:"send",headline:"Proposed correction ready for review",blocks:[{text:"Ultron proposes a 5:00 PM end time based on the posted schedule."},{label:"Proposed correction",checks:["End time set to 5:00 PM","8.0 hours logged","No overtime triggered"]}]},{icon:"edit",headline:"Approval required to correct payroll",blocks:[{text:"Approval required before the timesheet is corrected and sent to payroll."}]}],fill_risk:[{icon:"clock",headline:"Shift open 5 days",blocks:[{text:"A weekend RN shift has gone unclaimed for five days."}]},{icon:"alert",headline:"Fill probability 22% at current rate",blocks:[{bullets:["Comparable shifts pay $3–4/hr more","Only 4 qualified workers in range","Weekend demand is high"]}]},{icon:"send",headline:"Rate increase + targeted outreach proposed",blocks:[{text:"Ultron recommends a $3/hr increase plus outreach to nearby qualified RNs."},{label:"Projected impact",bullets:["Fill probability rises to ~68%","Est. added cost: $36 for the shift"]}]}],overtime_risk:[{icon:"clock",headline:"Projected overtime $4,200 over budget",blocks:[{text:"This week’s projected overtime is $4,200 above the labor budget."}]},{icon:"alert",headline:"Two employees drive most of the overage",blocks:[{label:"Top contributors",bullets:["Marcus Lee — 11 OT hrs","Dana Whitfield — 7 OT hrs"]}]},{icon:"send",headline:"Schedule rebalance plan prepared",blocks:[{text:"Ultron prepared a rebalance that shifts hours to under-utilized staff."},{label:"Plan",bullets:["Move 9 hrs to the part-time pool","Projected overtime down 35%"]}]}],order_fill_strategy:[{icon:"clock",headline:"Priority order stalled",blocks:[{text:"A high-priority facility order has received no applicants."}]},{icon:"alert",headline:"Rate is below local market average",blocks:[{bullets:["Rate is 12% below local market","Search radius capped at 15 mi","3 similar orders filled at higher rates"]}]},{icon:"send",headline:"Rate + radius adjustment proposed",blocks:[{text:"Ultron recommends raising the rate and widening the search radius."},{label:"Adjustment",bullets:["Rate +$2.50/hr","Radius 15 → 30 mi"]}]}],candidate_match:[{icon:"clock",headline:"New CNA application received",blocks:[{text:"Aisha Khan applied for the open CNA position."}]},{icon:"alert",headline:"92% match for open position",blocks:[{label:"Why it matches",checks:["CNA certified","2 yr experience","Within commute radius","Available for open shifts"]}]},{icon:"send",headline:"Interview recommended",blocks:[{text:"Ultron recommends scheduling an interview this week."}]}],credential_expiring:[{icon:"clock",headline:"RN license expires in 14 days",blocks:[{text:"Robert Chen’s RN license is set to expire in two weeks."}]},{icon:"alert",headline:"Upcoming assignments would be non-compliant",blocks:[{bullets:["3 upcoming shifts fall after the expiration date","Those assignments would be out of compliance"]}]},{icon:"send",headline:"Renewal reminder sent to employee + manager",blocks:[{text:"Reminders went to Robert and his manager with renewal instructions and a deadline."}]},{icon:"done",headline:"License renewed before expiration",blocks:[{checks:["License renewed","Compliance restored","Upcoming shifts cleared"]}]}],retention_risk:[{icon:"clock",headline:"Availability dropped 60%",blocks:[{text:"A top-performing RN cut their availability by 60% this month."}]},{icon:"alert",headline:"Flagged as a retention risk",blocks:[{bullets:["Availability down 60% month-over-month","Declined the last 3 offered shifts","Strong historical performer"]}]},{icon:"send",headline:"Manager check-in scheduled",blocks:[{text:"A check-in was scheduled so the manager can understand the change and respond early."}]},{icon:"done",headline:"Recurring pattern ready to save as a workflow",blocks:[{text:"This pattern recurs — Ultron can monitor it automatically as a saved workflow."}]}],attendance_risk:[{icon:"clock",headline:"4 late arrivals this month",blocks:[{text:"Tyler Brooks has arrived late four times this month."}]},{icon:"alert",headline:"Trend is worsening month-over-month",blocks:[{bullets:["Up from 1 late arrival last month","Averaging 12 minutes late","Concentrated on early shifts"]}]},{icon:"clock",headline:"Watching for further attendance slips",blocks:[{text:"Ultron is monitoring for further slips before recommending a coaching escalation."}]}],unfilled_shift:[{icon:"clock",headline:"Replacement search opened",blocks:[{text:"A replacement search opened for Dana Whitfield’s uncovered shift."}]},{icon:"edit",headline:"Contacted 12 candidates — no acceptances",blocks:[{text:"Automated outreach completed with no acceptances."},{label:"Outreach",bullets:["12 qualified candidates contacted","0 acceptances","Most common decline reason: distance"]}]},{icon:"alert",headline:"Shift still uncovered — needs a decision",blocks:[{text:"The shift remains uncovered and needs a decision — add an incentive or escalate to the on-call pool."}]}]},gN={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},Au={detected:n=>n.event,assessment:n=>n.assessment,recommendation:n=>n.recommendation,approval:n=>n.recommendation,execution:n=>n.recommendation,resolution:n=>n.outcome??n.recommendation,monitoring:n=>n.assessment,workflow:n=>n.workflowOpportunity??n.recommendation};function vN(n){return mN[n.id]??n.timeline.map(s=>{var i;const a=((i=Au[s.state])==null?void 0:i.call(Au,n))??n.assessment;return{icon:gN[s.state]??"clock",headline:s.headline,blocks:a?[{text:a}]:void 0}})}const xN={callout_recovery:"Sarah Kim assigned. Coverage restored.",no_show:"Replacement assigned and the shift is covered.",payroll_exception:"Estimated end time approved. Payroll corrected.",fill_risk:"Top applicant approved — shift filled.",overtime_risk:"Schedules rebalanced. Projected overtime down 35%.",order_fill_strategy:"Rate raised and radius expanded — three candidates applied.",candidate_match:"Offer accepted — candidate hired.",unfilled_shift:"On-call RN accepted with the incentive. Coverage restored."};function P0({record:n}){return e.jsxs(yN,{children:[e.jsx(ep,{size:"lg",src:t2(n.avatarSeed),name:n.title,alt:n.title}),e.jsxs(wN,{children:[e.jsx(bN,{children:n.eyebrow}),e.jsx(jN,{children:n.title}),e.jsx(kN,{children:n.meta.join(" · ")})]}),e.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:e.jsx(ip,{size:16})})]})}const yN=h.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  font-family: var(--font-sans);
`,wN=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  flex: 1;
`,bN=h.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,jN=h.span`
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,kN=h.span`
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-inverse-tertiary);
`,o2=["Thinking","Working","Processing"],s2=2400,_N=1e3;function CN(n){return Math.max(n,1)*s2+_N}function SN(n,s){switch(s.type){case"commit":return n.map(a=>a.id===s.threadId?{...a,status:"in_progress"}:a);case"reopen":return n.map(a=>a.id===s.threadId?{...a,status:"needs_approval"}:a);case"resolve":return n.map(a=>a.id===s.threadId?{...a,status:"resolved",outcome:xN[a.id]??a.outcome}:a)}}const MN=[{id:"needs_attention",label:"Needs attention",statuses:["needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function IN(){const[n,s]=v.useReducer(SN,Nu),{toast:a}=rg(),[i,c]=v.useState(()=>{var L;const C=Nu.find(S=>S.status==="needs_approval"||S.status==="recommended");return(C==null?void 0:C.id)??((L=Nu[0])==null?void 0:L.id)??null}),u=v.useMemo(()=>{const C=n.map((L,S)=>({item:L,index:S}));return MN.map(L=>({id:L.id,label:L.label,threads:C.filter(S=>L.statuses.includes(S.item.status)).sort((S,I)=>Ul[S.item.severity]-Ul[I.item.severity]||S.index-I.index).map(S=>S.item)}))},[n]),f=n.find(C=>C.id===i)??null,[g,m]=v.useState({}),y=i?g[i]??0:0;return{threads:n,groups:u,selectedId:i,selectedThread:f,selectedStage:y,stageById:g,setSelectedId:c,commit:(C,L)=>{const S=g[C]??0,I=r2[C],M=S===0&&!!I,N=S===1&&I?I.working:n2[C]??o2,j=CN(N.length);s({type:"commit",threadId:C}),a.success("Action sent",{description:`Ultron is executing: ${L}.`,size:"lg"}),setTimeout(()=>{M?(m(_=>({..._,[C]:1})),s({type:"reopen",threadId:C}),a.info("Your input needed",{description:"Ultron finished the first step and has a follow-up.",size:"lg"})):(s({type:"resolve",threadId:C}),a.success("Resolved",{description:"Ultron completed the work.",size:"lg"}))},j)},refine:C=>{a.info("Refinement coming soon",{description:`“${C}” opens a plan refinement surface — demo stub.`,size:"lg"})},saveWorkflow:C=>{a.success("Saved to workflows — demo stub",{description:C.workflowOpportunity??void 0,size:"lg"})}}}function NN({milestones:n}){return e.jsx(TN,{children:n.map((s,a)=>e.jsx(AN,{milestone:s,last:a===n.length-1},a))})}function AN({milestone:n,last:s}){var f;const a=!!((f=n.blocks)!=null&&f.length),[i,c]=v.useState(!0),u=Gu[n.icon]??Gu.clock;return e.jsxs(LN,{children:[e.jsxs(EN,{children:[e.jsx(RN,{"aria-hidden":"true",children:e.jsx(u,{size:16})}),!s&&e.jsx($N,{})]}),e.jsxs(PN,{$last:s,children:[e.jsxs(DN,{as:a?"button":"div",type:a?"button":void 0,$interactive:a,"aria-expanded":a?i:void 0,onClick:a?()=>c(g=>!g):void 0,children:[e.jsx(zN,{children:n.headline}),a&&e.jsx(FN,{"data-open":i||void 0,"aria-hidden":"true",children:e.jsx(nn,{size:14})})]}),a&&i&&e.jsx(ON,{children:n.blocks.map((g,m)=>e.jsxs(BN,{children:[g.text&&e.jsx(HN,{children:g.text}),g.label&&e.jsx(UN,{children:g.label}),g.bullets&&e.jsx(WN,{children:g.bullets.map((y,x)=>e.jsx("li",{children:y},x))}),g.checks&&e.jsx(qN,{children:g.checks.map((y,x)=>e.jsxs("li",{children:[e.jsx($n,{size:14}),e.jsx("span",{children:y})]},x))})]},m))})]})]})}const TN=h.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,LN=h.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,EN=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-4);
`,RN=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-secondary);
`,$N=h.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,PN=h.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${n=>n.$last?"0":"var(--space-4)"};
`,DN=h.div`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: ${n=>n.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,zN=h.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  line-height: var(--line-height-snug);
`,FN=h.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(180deg); }
`,ON=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`,BN=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,HN=h.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`,UN=h.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,WN=h.ul`
  margin: 0;
  padding-left: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  list-style: disc;

  & li {
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
`,qN=h.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  & li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
  & li svg {
    flex-shrink: 0;
    color: var(--color-success-content);
  }
`;function VN({thread:n,stage:s,expanded:a,onToggle:i,onAction:c,onRefinement:u,onSaveWorkflow:f}){const[g,m]=v.useState(!1),y=n.status==="needs_approval"||n.status==="recommended",x=y||n.status==="unresolved",k=n.status==="in_progress",b=n.status==="resolved"||n.status==="auto_resolved",C=r2[n.id],L=s===1&&!!C,S=L?C.prompt:hN[n.id]??n.recommendation,I=L?C.record:fN[n.id],M=I?Array.isArray(I)?I:[I]:[],N=L?C.working:n2[n.id]??o2.map(V=>({icon:"clock",headline:V,detail:""})),j=n.status==="unresolved"?KI:L?C.actions:n.actions,_=y&&QI(S),E=_?XI:j[j.length-1],z=_?[]:j.slice(0,-1),R=ZI(n),F=x||k||b||R,X=e2(n),Z=V=>{YI(V)?u(V):c(n.id,V)};return e.jsxs(ZN,{"data-tone":X,$expanded:a,children:[e.jsxs(YN,{type:"button","aria-expanded":a,"aria-label":a?"Collapse case":"Expand case",onClick:i,children:[e.jsxs(KN,{children:[e.jsx(ep,{size:"sm",src:t2(n.id),name:Zu[n.id],alt:Zu[n.id]??""}),e.jsxs(QN,{children:[e.jsx(XN,{children:pN(n)}),!a&&e.jsx(JN,{children:n.recommendation})]})]}),e.jsxs(eA,{children:[!y&&e.jsx(ro,{status:E0[n.status].tag,size:"sm",children:E0[n.status].label}),e.jsx(tA,{"aria-hidden":"true",children:a?e.jsx(zm,{size:16}):e.jsx(nn,{size:16})})]})]}),a&&b&&e.jsx(nA,{children:e.jsx(rA,{children:e.jsx(NN,{milestones:vN(n)})})}),a&&F&&e.jsxs(oA,{children:[x&&e.jsx(hA,{children:S}),x&&M.length>0&&e.jsx(pA,{children:M.map((V,U)=>e.jsx(P0,{record:V},U))}),k&&e.jsx(GN,{milestones:N}),b&&e.jsxs(e.Fragment,{children:[e.jsx(eN,{thread:n}),$0[n.id]&&e.jsx(P0,{record:$0[n.id]})]}),(x||R)&&e.jsxs(fA,{children:[x&&E&&e.jsx(D0,{variant:"primary",size:"sm",onClick:()=>Z(E),children:E}),x&&z.map(V=>e.jsx(D0,{variant:"tertiary",size:"sm",onClick:()=>Z(V),children:V},V)),x&&e.jsx(mA,{variant:"tertiary",size:"sm",onClick:()=>u("Other"),children:"Other"}),R&&(g?e.jsx(Ee,{variant:"secondary",size:"sm",leadingArtwork:e.jsx($n,{size:14}),trailingArtwork:e.jsx(Km,{size:14}),onClick:()=>f(n),children:"Saved"}):e.jsx(Ee,{variant:"secondary",size:"sm",leadingArtwork:e.jsx(ei,{size:14}),onClick:()=>{f(n),m(!0)},children:"Save as workflow"}))]})]})]})}function GN({milestones:n}){const[s,a]=v.useState(0);v.useEffect(()=>{if(s>=n.length-1)return;const u=setTimeout(()=>a(f=>f+1),s2);return()=>clearTimeout(u)},[s,n.length]);const i=n[Math.min(s,n.length-1)],c=Gu[i.icon];return e.jsx(sA,{role:"status","aria-live":"polite",children:e.jsxs(iA,{children:[e.jsx(lA,{"aria-hidden":"true",children:e.jsx(c,{size:16})}),e.jsxs(cA,{children:[i.headline,e.jsxs(uA,{"aria-hidden":"true",children:[e.jsx("span",{children:"."}),e.jsx("span",{children:"."}),e.jsx("span",{children:"."})]})]})]},s)})}const ZN=h.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  /* Collapsed cards sit flat (no shadow); an expanded card rests with a shadow.
     Hovering any card lifts it with an enhanced shadow + a subtle rise. */
  box-shadow: ${n=>n.$expanded?"var(--shadow-below-md)":"none"};
  overflow: hidden;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-below-high);
  }

  /* Gradient border ring: a 1px tonal line that fades right → left (full color
     at the right edge, transparent at the left). Painted on a ::before whose
     fill is masked to just the border band, so it respects the rounded corners
     (border-image would square them off). Only the expanded card paints it
     (darker -border-secondary, per data-tone below); collapsed cards stay
     borderless. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    pointer-events: none;
    transition: background var(--duration-fast) var(--ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
    &::before { transition: none; }
  }

  /* Semantic card tone: high severity → orange, resolved-family → green,
     everything else (medium / low / none) → slate. */
  /* Soft tonal glow layered ON TOP of the base bg (background-image only, so
     the base background-color from the Card rule is preserved). */
  &[data-tone='orange'] {
    background-image:
      radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-orange-bg-secondary) 18%, transparent) 0%, transparent 60%),
      linear-gradient(color-mix(in srgb, var(--color-orange-bg-secondary) 8%, transparent), color-mix(in srgb, var(--color-orange-bg-secondary) 8%, transparent));
    &::before { background: ${n=>n.$expanded?"linear-gradient(to left, var(--color-orange-border-secondary) 0%, color-mix(in srgb, var(--color-orange-border-secondary) 35%, transparent) 100%)":"transparent"}; }
  }
  &[data-tone='green'] {
    background-image:
      radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-green-bg-secondary) 18%, transparent) 0%, transparent 60%),
      linear-gradient(color-mix(in srgb, var(--color-green-bg-secondary) 8%, transparent), color-mix(in srgb, var(--color-green-bg-secondary) 8%, transparent));
    &::before { background: ${n=>n.$expanded?"linear-gradient(to left, var(--color-green-border-secondary) 0%, color-mix(in srgb, var(--color-green-border-secondary) 35%, transparent) 100%)":"transparent"}; }
  }
  &[data-tone='slate'] {
    background-image:
      radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-slate-bg-secondary) 18%, transparent) 0%, transparent 60%),
      linear-gradient(color-mix(in srgb, var(--color-slate-bg-secondary) 8%, transparent), color-mix(in srgb, var(--color-slate-bg-secondary) 8%, transparent));
    &::before { background: ${n=>n.$expanded?"linear-gradient(to left, var(--color-slate-border-secondary) 0%, color-mix(in srgb, var(--color-slate-border-secondary) 35%, transparent) 100%)":"transparent"}; }
  }
`,YN=h.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
  margin: 0;
  padding: var(--space-2) var(--space-3);
  background: transparent;
  border: none;
  border-radius: var(--radius-lg);
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;

  /* No background highlight — the hover affordance is the card's tonal border
     (see Card below). */
  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--color-border-focus);
  }
`,KN=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,QN=h.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,XN=h.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,JN=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-inverse-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eA=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,tA=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-tertiary);
`,nA=h.div`
  overflow: hidden;
`,rA=h.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,oA=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: var(--space-3);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,sA=h.div`
  font-family: var(--font-sans);
  overflow: hidden;
`,aA=io`
  from { opacity: 0; transform: translateY(var(--space-3)); }
  to   { opacity: 1; transform: translateY(0); }
`,iA=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  animation: ${aA} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,lA=h.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-content-secondary);
`,cA=h.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-tertiary);
`,dA=io`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,uA=h.span`
  & > span {
    animation: ${dA} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,pA=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,hA=h.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,fA=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
`,D0=h(Ee)`
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);

  /* Outlined (secondary) pills get a strong dark border. */
  &[data-variant='tertiary'] {
    border-color: var(--color-content-primary);
  }
`,mA=h(Ee)`
  border-radius: var(--radius-full);
  border-style: dashed;
  color: var(--color-content-secondary);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,gA={live:["needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},vA={live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."};function xA({threads:n,stageById:s,section:a,selectedId:i,onAction:c,onRefinement:u,onSaveWorkflow:f}){const g=n.map((b,C)=>({t:b,index:C})).filter(({t:b})=>gA[a].includes(b.status)).sort((b,C)=>Ul[b.t.severity]-Ul[C.t.severity]||b.index-C.index).map(({t:b})=>b.id),[m,y]=v.useState(()=>i??null),x=v.useRef({}),k=v.useRef(void 0);return v.useEffect(()=>{var b;if(k.current===void 0){k.current=i;return}!i||i===k.current||(k.current=i,y(i),(b=x.current[i])==null||b.scrollIntoView({behavior:"smooth",block:"start"}))},[i]),e.jsxs(yA,{children:[e.jsxs(kA,{children:[e.jsx(_A,{children:e.jsx(nN,{})}),e.jsx(CA,{"aria-hidden":"true"})]}),e.jsx(wA,{children:g.length===0?e.jsx(jA,{role:"status",children:vA[a]}):g.map(b=>{const C=n.find(L=>L.id===b);return C?e.jsx(bA,{ref:L=>{x.current[b]=L},children:e.jsx(VN,{thread:C,stage:s[b]??0,expanded:m===b,onToggle:()=>y(L=>L===b?null:b),onAction:c,onRefinement:u,onSaveWorkflow:f})},b):null})})]})}const yA=h.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: 0 var(--space-5) var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,wA=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,bA=h.div`
  scroll-margin-top: var(--space-5);
`,jA=h.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,kA=h.div`
  position: sticky;
  top: 0;
  z-index: 2;
`,_A=h.div`
  padding-top: var(--space-5);
  background: var(--color-bg-primary);
`,CA=h.div`
  height: 48px;
  background: linear-gradient(to bottom, var(--color-bg-primary) 0%, transparent 100%);
  pointer-events: none;
`,SA=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function MA(){return e.jsx(IA,{children:e.jsxs(NA,{children:[e.jsxs(AA,{children:[e.jsx($s,{mark:"circle",size:40,tone:"light",state:"active","aria-label":"Ultron"}),e.jsxs(TA,{children:[e.jsx(LA,{children:"Memory"}),e.jsx(EA,{children:"What Ultron has learned and carries between sessions."})]})]}),e.jsx(RA,{children:SA.map((n,s)=>e.jsxs($A,{children:[e.jsx(PA,{children:n.tag}),e.jsxs(DA,{children:[e.jsx(zA,{children:n.title}),e.jsx(FA,{children:n.detail})]})]},s))})]})})}const IA=h.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,NA=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,AA=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,TA=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,LA=h.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,EA=h.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,RA=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,$A=h.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,PA=h.span`
  flex-shrink: 0;
  padding: 2px var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-tertiary);
  color: var(--color-content-secondary);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,DA=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,zA=h.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,FA=h.span`
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;h.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;h.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-content-secondary);
`;h.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;h.div`
  padding: var(--space-1) var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;const Yu=[{id:"employees",label:"Employees",icon:e.jsx(Cr,{size:16})},{id:"shifts",label:"Shifts",icon:e.jsx(Ja,{size:16})},{id:"locations",label:"Locations",icon:e.jsx(Gm,{size:16})},{id:"timesheets",label:"Timesheets",icon:e.jsx(Sr,{size:16})},{id:"credentials",label:"Credentials",icon:e.jsx(Zm,{size:16})}];h.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;h.span`
  color: var(--color-content-secondary);
`;function OA({collectionId:n}){const s=Yu.find(a=>a.id===n)??Yu[0];return e.jsxs(BA,{children:[e.jsxs(HA,{children:[e.jsx(UA,{children:s.label}),e.jsx(Eo,{children:"Account database"})]}),e.jsxs(WA,{role:"status",children:[e.jsx(qA,{"aria-hidden":"true",children:e.jsx(Wm,{size:24})}),e.jsxs(VA,{children:[s.label," — demo stub"]}),e.jsxs(GA,{children:["Connect a data source to browse ",s.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const BA=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-8) var(--space-4);
  @media (min-width: 1001px) {
    padding-left: 120px;
    padding-right: 120px;
  }
  height: 100%;
  min-height: 0;
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,HA=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,UA=h.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,WA=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,qA=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,VA=h.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,GA=h.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`,ZA={erin:"persona-001",sched:"persona-002",onbi:"persona-003",cassie:"persona-004",dataops:"persona-005"};function Wl({personaId:n,personaName:s,size:a=32,className:i,style:c}){const u=n??(s?ZA[s.toLowerCase()]:void 0)??"persona-001",f=z0[u]??z0["persona-001"];return e.jsx(f,{size:a,className:i,style:c})}function YA({size:n,className:s,style:a}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 32 32",fill:"none",className:s,style:a,"aria-hidden":!0,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"pa-erin-body",x1:"16",y1:"2",x2:"16",y2:"30",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#FFB59A"}),e.jsx("stop",{offset:"1",stopColor:"#E96678"})]}),e.jsxs("linearGradient",{id:"pa-erin-screen",x1:"16",y1:"11",x2:"16",y2:"22",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#2A1320"}),e.jsx("stop",{offset:"1",stopColor:"#4A1D2E"})]})]}),e.jsx("rect",{x:"15.1",y:"2",width:"1.8",height:"3.2",rx:"0.9",fill:"#C24A5E"}),e.jsx("circle",{cx:"16",cy:"2.2",r:"1.6",fill:"#FFE2D0",stroke:"#C24A5E",strokeWidth:"0.6"}),e.jsx("rect",{x:"3",y:"5",width:"26",height:"24",rx:"6",fill:"url(#pa-erin-body)"}),e.jsx("path",{d:"M9 5h14a6 6 0 0 1 6 6v0.5H3V11a6 6 0 0 1 6-6z",fill:"white",fillOpacity:"0.22"}),e.jsx("rect",{x:"6.5",y:"11",width:"19",height:"11",rx:"3",fill:"url(#pa-erin-screen)"}),e.jsx("rect",{x:"6.5",y:"11",width:"19",height:"3.2",rx:"3",fill:"white",fillOpacity:"0.08"}),e.jsx("rect",{x:"10",y:"14.2",width:"4",height:"4.6",rx:"1.4",fill:"#FFE2D0"}),e.jsx("rect",{x:"18",y:"14.2",width:"4",height:"4.6",rx:"1.4",fill:"#FFE2D0"}),e.jsx("circle",{cx:"9",cy:"24",r:"1.3",fill:"#F8C2BB",fillOpacity:"0.7"}),e.jsx("circle",{cx:"23",cy:"24",r:"1.3",fill:"#F8C2BB",fillOpacity:"0.7"})]})}function KA({size:n,className:s,style:a}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 32 32",fill:"none",className:s,style:a,"aria-hidden":!0,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"pa-sched-body",x1:"16",y1:"2",x2:"16",y2:"30",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#5BE2D0"}),e.jsx("stop",{offset:"1",stopColor:"#1F8B9A"})]}),e.jsxs("radialGradient",{id:"pa-sched-face",cx:"16",cy:"16",r:"9",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#0E323A"}),e.jsx("stop",{offset:"1",stopColor:"#062028"})]})]}),e.jsx("path",{d:"M16 2.2L28 9v14L16 29.8 4 23V9l12-6.8z",fill:"url(#pa-sched-body)"}),e.jsx("path",{d:"M16 2.2L28 9 16 15.8 4 9l12-6.8z",fill:"white",fillOpacity:"0.18"}),e.jsx("path",{d:"M16 2.2L28 9v14L16 29.8 4 23V9l12-6.8z",stroke:"#0E575F",strokeOpacity:"0.35",strokeWidth:"0.8"}),e.jsx("circle",{cx:"16",cy:"17",r:"7.2",fill:"url(#pa-sched-face)"}),e.jsx("circle",{cx:"16",cy:"17",r:"7.2",stroke:"#5BE2D0",strokeOpacity:"0.45",strokeWidth:"0.6"}),e.jsx("rect",{x:"15.6",y:"10.6",width:"0.8",height:"1.6",rx:"0.4",fill:"#5BE2D0"}),e.jsx("rect",{x:"15.6",y:"21.8",width:"0.8",height:"1.6",rx:"0.4",fill:"#5BE2D0"}),e.jsx("rect",{x:"9.6",y:"16.6",width:"1.6",height:"0.8",rx:"0.4",fill:"#5BE2D0"}),e.jsx("rect",{x:"20.8",y:"16.6",width:"1.6",height:"0.8",rx:"0.4",fill:"#5BE2D0"}),e.jsx("rect",{x:"15.5",y:"13.2",width:"1",height:"4.2",rx:"0.5",fill:"#5BE2D0"}),e.jsx("rect",{x:"16",y:"16.6",width:"4",height:"1",rx:"0.5",fill:"#5BE2D0"}),e.jsx("circle",{cx:"16",cy:"17",r:"0.9",fill:"#A6F2E5"})]})}function QA({size:n,className:s,style:a}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 32 32",fill:"none",className:s,style:a,"aria-hidden":!0,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"pa-onbi-body",x1:"16",y1:"6",x2:"16",y2:"29",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#FFD479"}),e.jsx("stop",{offset:"1",stopColor:"#D87A1F"})]}),e.jsxs("linearGradient",{id:"pa-onbi-screen",x1:"16",y1:"12",x2:"16",y2:"23",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#2E1808"}),e.jsx("stop",{offset:"1",stopColor:"#5A3210"})]})]}),e.jsx("line",{x1:"16",y1:"3.4",x2:"16",y2:"6",stroke:"#A85812",strokeWidth:"1.3",strokeLinecap:"round"}),e.jsx("path",{d:"M16 1.4l0.65 1.55 1.55 0.45-1.55 0.45L16 5.4l-0.65-1.55-1.55-0.45 1.55-0.45z",fill:"#FFE89A",stroke:"#A85812",strokeWidth:"0.5",strokeLinejoin:"round"}),e.jsx("rect",{x:"2.5",y:"14",width:"3.6",height:"6.5",rx:"1.6",fill:"#A85812"}),e.jsx("rect",{x:"2.5",y:"14",width:"3.6",height:"2",rx:"1.6",fill:"white",fillOpacity:"0.18"}),e.jsx("rect",{x:"25.9",y:"14",width:"3.6",height:"6.5",rx:"1.6",fill:"#A85812"}),e.jsx("rect",{x:"25.9",y:"14",width:"3.6",height:"2",rx:"1.6",fill:"white",fillOpacity:"0.18"}),e.jsx("rect",{x:"6",y:"6",width:"20",height:"22",rx:"6",fill:"url(#pa-onbi-body)"}),e.jsx("path",{d:"M12 6h8a6 6 0 0 1 6 6v0.5H6V12a6 6 0 0 1 6-6z",fill:"white",fillOpacity:"0.22"}),e.jsx("rect",{x:"6",y:"6",width:"20",height:"22",rx:"6",stroke:"#A85812",strokeOpacity:"0.35",strokeWidth:"0.8"}),e.jsx("rect",{x:"8.5",y:"13",width:"15",height:"10",rx:"2.8",fill:"url(#pa-onbi-screen)"}),e.jsx("rect",{x:"8.5",y:"13",width:"15",height:"2.6",rx:"2.8",fill:"white",fillOpacity:"0.08"}),e.jsx("circle",{cx:"12.8",cy:"18",r:"1.7",fill:"#FFE89A"}),e.jsx("circle",{cx:"19.2",cy:"18",r:"1.7",fill:"#FFE89A"}),e.jsx("circle",{cx:"13.3",cy:"17.5",r:"0.55",fill:"white",fillOpacity:"0.95"}),e.jsx("circle",{cx:"19.7",cy:"17.5",r:"0.55",fill:"white",fillOpacity:"0.95"}),e.jsx("rect",{x:"13",y:"25",width:"6",height:"1.4",rx:"0.7",fill:"#FFE89A",fillOpacity:"0.85"})]})}function XA({size:n,className:s,style:a}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 32 32",fill:"none",className:s,style:a,"aria-hidden":!0,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"pa-cassie-body",x1:"16",y1:"3",x2:"16",y2:"29",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#C9A6FF"}),e.jsx("stop",{offset:"1",stopColor:"#6B3CC6"})]}),e.jsxs("linearGradient",{id:"pa-cassie-screen",x1:"16",y1:"12",x2:"16",y2:"22",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#1B0E33"}),e.jsx("stop",{offset:"1",stopColor:"#321855"})]})]}),e.jsx("path",{d:"M21 3.5h5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-2.4l-1.6 1.8 0.2-1.8H21A1.5 1.5 0 0 1 19.5 8V5A1.5 1.5 0 0 1 21 3.5z",fill:"#9D6BFF",stroke:"#5C2DAB",strokeOpacity:"0.5",strokeWidth:"0.6"}),e.jsx("circle",{cx:"22",cy:"6.5",r:"0.7",fill:"#FFFFFF"}),e.jsx("circle",{cx:"24",cy:"6.5",r:"0.7",fill:"#FFFFFF"}),e.jsx("circle",{cx:"26",cy:"6.5",r:"0.7",fill:"#FFFFFF"}),e.jsx("rect",{x:"3",y:"8",width:"26",height:"21",rx:"6",fill:"url(#pa-cassie-body)"}),e.jsx("path",{d:"M9 8h14a6 6 0 0 1 6 6v0.5H3V14a6 6 0 0 1 6-6z",fill:"white",fillOpacity:"0.18"}),e.jsx("rect",{x:"6",y:"13.5",width:"20",height:"9",rx:"3",fill:"url(#pa-cassie-screen)"}),e.jsx("rect",{x:"8.5",y:"17.5",width:"15",height:"1.2",rx:"0.6",fill:"#C9A6FF"}),e.jsx("rect",{x:"8.5",y:"17.5",width:"15",height:"1.2",rx:"0.6",fill:"white",fillOpacity:"0.35"}),e.jsx("circle",{cx:"6.5",cy:"26",r:"1",fill:"#FFFFFF",fillOpacity:"0.7"}),e.jsx("circle",{cx:"25.5",cy:"26",r:"1",fill:"#FFFFFF",fillOpacity:"0.7"})]})}function JA({size:n,className:s,style:a}){return e.jsxs("svg",{width:n,height:n,viewBox:"0 0 32 32",fill:"none",className:s,style:a,"aria-hidden":!0,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"pa-data-body",x1:"16",y1:"3",x2:"16",y2:"29",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#7AA0E8"}),e.jsx("stop",{offset:"1",stopColor:"#2A4A8E"})]}),e.jsxs("linearGradient",{id:"pa-data-face",x1:"16",y1:"13",x2:"16",y2:"22",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#0A1530"}),e.jsx("stop",{offset:"1",stopColor:"#152852"})]})]}),e.jsx("path",{d:"M7 3h18l4 4v18l-4 4H7l-4-4V7l4-4z",fill:"url(#pa-data-body)"}),e.jsx("path",{d:"M7 3h18l4 4-4 0.6H7L3 7l4-4z",fill:"white",fillOpacity:"0.22"}),e.jsxs("g",{stroke:"white",strokeOpacity:"0.16",strokeWidth:"0.6",children:[e.jsx("line",{x1:"3",y1:"11",x2:"29",y2:"11"}),e.jsx("line",{x1:"3",y1:"21",x2:"29",y2:"21"}),e.jsx("line",{x1:"11",y1:"3",x2:"11",y2:"29"}),e.jsx("line",{x1:"21",y1:"3",x2:"21",y2:"29"})]}),e.jsx("path",{d:"M7 3h18l4 4v18l-4 4H7l-4-4V7l4-4z",stroke:"#1A2F5C",strokeOpacity:"0.5",strokeWidth:"0.8",strokeLinejoin:"round"}),e.jsx("rect",{x:"6",y:"13",width:"20",height:"8",rx:"2",fill:"url(#pa-data-face)"}),e.jsx("rect",{x:"8",y:"16.4",width:"16",height:"1.6",rx:"0.8",fill:"#7AC8FF"}),e.jsx("rect",{x:"8",y:"16.4",width:"16",height:"0.6",rx:"0.3",fill:"white",fillOpacity:"0.5"}),e.jsx("circle",{cx:"9",cy:"25",r:"0.9",fill:"#7AC8FF"}),e.jsx("circle",{cx:"12",cy:"25",r:"0.9",fill:"#FFFFFF",fillOpacity:"0.4"}),e.jsx("circle",{cx:"23",cy:"25",r:"0.9",fill:"#FFFFFF",fillOpacity:"0.4"})]})}const z0={"persona-001":YA,"persona-002":KA,"persona-003":QA,"persona-004":XA,"persona-005":JA},eT=h.div`
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
`,tT=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding-right: 56px;
`,nT=h.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--color-content-primary, #151515);
`,rT=h.div`
  display: inline-flex;
  align-items: center;
  height: 24px;
  border: 1px solid var(--color-border-opaque, #dfdfdf);
  border-radius: var(--radius-button, 6px);
  background: var(--color-bg-primary, #fff);
  overflow: hidden;
  flex-shrink: 0;
`,oT=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
`,sT=h.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #1c222a);
  padding-right: 8px;
  white-space: nowrap;
`,aT=h.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--color-content-secondary, #475569);
  letter-spacing: -0.078px;
`,iT=h.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-content-tertiary, #87919f);
`,lT=h.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  pointer-events: none;

  svg { width: 100%; height: 100%; display: block; }
`;function cT({persona:n,onClick:s}){const a=n.voice.charAt(0).toUpperCase()+n.voice.slice(1);return e.jsxs(eT,{role:"button",tabIndex:0,onClick:()=>s(n.id),onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),s(n.id))},children:[e.jsxs(tT,{children:[e.jsx(nT,{children:n.name}),e.jsxs(rT,{children:[e.jsx(oT,{children:e.jsx(Dl,{size:12})}),e.jsx(sT,{children:a})]})]}),e.jsx(aT,{children:n.role}),e.jsx(iT,{children:n.description}),e.jsx(lT,{"aria-hidden":"true",children:e.jsx(Wl,{personaId:n.id,size:44})})]})}const dT=[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],uT=h.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`;function pT({id:n,initialValues:s,onSubmit:a}){const[i,c]=v.useState((s==null?void 0:s.name)??""),[u,f]=v.useState((s==null?void 0:s.role)??""),[g,m]=v.useState((s==null?void 0:s.voice)??""),[y,x]=v.useState((s==null?void 0:s.description)??"");function k(b){b.preventDefault(),a({name:i,role:u,voice:g,description:y})}return e.jsxs(uT,{id:n,onSubmit:k,children:[e.jsx(Fs,{label:"Name",required:!0,value:i,onChange:b=>c(b.target.value),placeholder:"e.g. HR Assistant"}),e.jsx(Fs,{label:"Role",required:!0,value:u,onChange:b=>f(b.target.value),placeholder:"e.g. Human Resources"}),e.jsx(En,{label:"Voice",required:!0,options:dT,value:g,onChange:m,placeholder:"Select a voice…"}),e.jsx(hp,{label:"Description",value:y,onChange:b=>x(b.target.value),placeholder:"What does this specialist do?",rows:3})]})}const F0="new-specialist-form",hT=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`,fT=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,mT=h.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`,gT=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-3, 12px);
`;function vT({onPersonaClick:n}){const[s,a]=v.useState(!1);function i(c){a(!1)}return e.jsxs(hT,{children:[e.jsxs(fT,{children:[e.jsx(mT,{children:"Personas"}),e.jsx(Ee,{variant:"primary",size:"sm",leadingArtwork:e.jsx(qs,{}),onClick:()=>a(!0),children:"New Persona"})]}),e.jsx(gT,{children:Nr.map(c=>e.jsx(cT,{persona:c,onClick:n},c.id))}),e.jsxs(pp,{open:s,onClose:()=>a(!1),size:"md",children:[e.jsx(ec,{onClose:()=>a(!1),children:"New Specialist"}),e.jsx(tc,{children:e.jsx(pT,{id:F0,onSubmit:i})}),e.jsxs(nc,{children:[e.jsx(Ee,{variant:"secondary",size:"sm",onClick:()=>a(!1),children:"Cancel"}),e.jsx(Ee,{variant:"primary",size:"sm",type:"submit",form:F0,children:"Create Specialist"})]})]})]})}const xT=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`,yT=h.label`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-primary, #151515);
  cursor: default;
`,wT=h.span`
  color: var(--color-content-error, #e5484d);
  margin-left: 2px;
`,bT=h.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 5px 8px;
  min-height: 36px;
  background: var(--color-bg-primary, #fff);
  border: 1px solid ${({$focused:n})=>n?"var(--color-border-focus, #446cff)":"var(--color-border-opaque, #cbd0d7)"};
  border-radius: var(--radius-button, 6px);
  box-shadow: ${({$focused:n})=>n?"0 0 0 3px color-mix(in srgb, var(--color-border-focus, #446cff) 18%, transparent)":"none"};
  cursor: text;
  transition:
    border-color var(--duration-fast, 120ms),
    box-shadow var(--duration-fast, 120ms);
`,jT=h.div`
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
`,kT=h.button`
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
`,_T=h.input`
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
`,CT=h.div`
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
`,O0=h.button`
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
`;function ST({label:n,required:s,value:a,onChange:i,suggestions:c=[],placeholder:u}){const[f,g]=v.useState(""),[m,y]=v.useState(!1),x=v.useRef(null),k=v.useRef(null),b=c.filter(M=>!a.includes(M)&&M.toLowerCase().includes(f.toLowerCase())),C=m&&(b.length>0||f.trim().length>0),L=v.useCallback(M=>{const N=M.trim();N&&!a.includes(N)&&i([...a,N]),g("")},[a,i]),S=v.useCallback(M=>{i(a.filter(N=>N!==M))},[a,i]);v.useEffect(()=>{const M=N=>{var j;(j=k.current)!=null&&j.contains(N.target)||y(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]);function I(M){M.key==="Enter"?(M.preventDefault(),f.trim()&&L(f)):M.key==="Backspace"&&f===""&&a.length>0&&S(a[a.length-1])}return e.jsxs(xT,{children:[n&&e.jsxs(yT,{onClick:()=>{var M;return(M=x.current)==null?void 0:M.focus()},children:[n,s&&e.jsx(wT,{"aria-hidden":"true",children:"*"})]}),e.jsxs(bT,{ref:k,$focused:m,onClick:()=>{var M;return(M=x.current)==null?void 0:M.focus()},children:[a.map(M=>e.jsxs(jT,{children:[M,e.jsx(kT,{type:"button","aria-label":`Remove ${M}`,onMouseDown:N=>{N.preventDefault(),S(M)},children:e.jsx(Vs,{size:10})})]},M)),e.jsx(_T,{ref:x,value:f,placeholder:a.length===0?u:"",onChange:M=>g(M.target.value),onKeyDown:I,onFocus:()=>y(!0)}),C&&e.jsxs(CT,{children:[b.map(M=>e.jsx(O0,{type:"button",onMouseDown:N=>{N.preventDefault(),L(M)},children:M},M)),f.trim()&&!a.includes(f.trim())&&!b.includes(f.trim())&&e.jsxs(O0,{type:"button",onMouseDown:M=>{M.preventDefault(),L(f)},children:["Add “",f.trim(),"”"]})]})]})]})}const Tu=5e5,he=[{id:"wf-001",name:"Employee Profile Updates",href:"/workflows/wf-001"},{id:"wf-002",name:"Benefits Enrollment",href:"/workflows/wf-002"},{id:"wf-003",name:"Shift Coverage & Swaps",href:"/workflows/wf-003"},{id:"wf-004",name:"Schedule Change Notifications",href:"/workflows/wf-004"},{id:"wf-005",name:"New Hire Onboarding Checklist",href:"/workflows/wf-005"},{id:"wf-006",name:"Document Collection & Compliance",href:"/workflows/wf-006"},{id:"wf-007",name:"Customer Ticket Triage",href:"/workflows/wf-007"},{id:"wf-008",name:"Weekly Data Audit",href:"/workflows/wf-008"},{id:"wf-009",name:"Record Cleanup & Dedup",href:"/workflows/wf-009"},{id:"wf-010",name:"Ops Reporting",href:"/workflows/wf-010"}],MT=[{id:"dep-001",personaId:"persona-001",workflow:he[0],status:"active",type:"engage"},{id:"dep-002",personaId:"persona-001",workflow:he[1],status:"active",type:"engage"},{id:"dep-003",personaId:"persona-001",workflow:he[7],status:"active",type:"engage_less"},{id:"dep-004",personaId:"persona-002",workflow:he[2],status:"active",type:"engage"},{id:"dep-005",personaId:"persona-002",workflow:he[3],status:"active",type:"engage"},{id:"dep-006",personaId:"persona-002",workflow:he[2],status:"paused",type:"engage_less"},{id:"dep-007",personaId:"persona-003",workflow:he[4],status:"active",type:"engage"},{id:"dep-008",personaId:"persona-003",workflow:he[5],status:"active",type:"engage_less"},{id:"dep-009",personaId:"persona-003",workflow:he[4],status:"active",type:"engage_less"},{id:"dep-010",personaId:"persona-004",workflow:he[6],status:"active",type:"engage"},{id:"dep-011",personaId:"persona-005",workflow:he[7],status:"active",type:"engage_less"},{id:"dep-012",personaId:"persona-005",workflow:he[8],status:"active",type:"engage_less"},{id:"dep-013",personaId:"persona-005",workflow:he[9],status:"active",type:"engage_less"}],Ps=[{id:"exec-001",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-09T14:05:00Z",trigger:{id:"trig-001",label:"Profile update request from Amy Chen",type:"form_submission"},workflow:he[0],steps:[{offsetMs:0,description:"Received profile update request form",toolCategory:"data_cleanup"},{offsetMs:800,description:"Validated new address and emergency contact",toolCategory:"data_cleanup"},{offsetMs:2400,description:"Sent confirmation to Amy via chat",toolCategory:"communication",channel:"chat"}],durationMs:3200,creditsUsed:350,goal:"Help employees update their profile information accurately",conversations:[{id:"conv-001",contactName:"Amy Chen",outcome:"goal_achieved",summary:"Erin helped Amy update her home address and emergency contact after her recent move.",thread:[{role:"agent",content:"Hi Amy! I received your profile update request. I see you want to change your home address and emergency contact. Let me pull up your current info."},{role:"user",content:"Yes, I moved last month. New address is 742 Evergreen Terrace, Springfield."},{role:"agent",content:"Got it! I've updated your address to 742 Evergreen Terrace, Springfield. I also see you want to update your emergency contact — who should that be?"},{role:"user",content:"My partner, Jordan Chen. Phone is 555-0147."},{role:"agent",content:"Done! Your emergency contact is now Jordan Chen at 555-0147. Both changes are saved. Is there anything else you need?"},{role:"user",content:"No, that's everything. Thanks!"}]},{id:"conv-002",contactName:"Marcus Rivera",outcome:"goal_achieved",summary:"Marcus updated his legal name and tax withholding with Erin's assistance.",thread:[{role:"agent",content:"Hi Marcus, I see you submitted a profile update. It looks like you want to change your legal name. I'll need to verify a few things first."},{role:"user",content:"Sure. My new legal name is Marcus A. Rivera. I also need to update my W-4 withholding."},{role:"agent",content:"I've updated your legal name. For the W-4 change, I'll need your new filing status and number of allowances."},{role:"user",content:"Married filing jointly, 2 allowances."},{role:"agent",content:"All set! Name updated and W-4 withholding changed to MFJ with 2 allowances. You'll see the payroll change reflected next pay cycle."}]}],outcomeSummaryFull:"Processed two employee profile updates: Amy Chen updated her address and emergency contact; Marcus Rivera updated his legal name and tax withholding. Both changes validated and saved.",feedback:"up"},{id:"exec-002",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-002",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-11T09:30:00Z",trigger:{id:"trig-002",label:"Open enrollment window reminder",type:"scheduled"},workflow:he[1],steps:[{offsetMs:0,description:"Triggered benefits enrollment outreach",toolCategory:"scheduling"},{offsetMs:500,description:"Identified 3 employees who haven't enrolled",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Sent reminders via email",toolCategory:"communication",channel:"email"},{offsetMs:3200,description:"Followed up with direct chat messages",toolCategory:"communication",channel:"chat"}],durationMs:4100,creditsUsed:500,goal:"Ensure all eligible employees complete benefits enrollment before the deadline",conversations:[{id:"conv-003",contactName:"Priya Patel",outcome:"goal_achieved",summary:"Priya completed her dental and vision enrollment after Erin walked her through the options.",thread:[{role:"agent",content:"Hi Priya! Just a reminder that open enrollment closes this Friday. I noticed you haven't selected your dental and vision plans yet. Would you like help choosing?"},{role:"user",content:"Oh I forgot about that. What are my options for dental?"},{role:"agent",content:"You have two dental options: Basic (covers preventive at 100%, major at 50%, $18/mo) or Premium (covers preventive at 100%, major at 80%, ortho included, $34/mo). Which sounds better for your needs?"},{role:"user",content:"I'll go with Premium since I might need braces next year."},{role:"agent",content:"Great choice! I've enrolled you in the Premium dental plan. For vision, the standard plan covers an annual exam and $150 toward frames. Want to add that too?"},{role:"user",content:"Yes, add the vision plan. Thanks for the help!"},{role:"agent",content:"You're all set! Premium dental + standard vision are now active. You'll get a confirmation email shortly."}]},{id:"conv-004",contactName:"Jake Morrison",outcome:"completed_no_action",summary:"Jake confirmed he intentionally opted out of supplemental benefits this year.",thread:[{role:"agent",content:"Hi Jake, this is a friendly reminder that benefits enrollment closes Friday. You haven't made any selections yet. Need any help?"},{role:"user",content:"No thanks, I'm staying on my spouse's plan this year. I don't need any of the supplemental options."},{role:"agent",content:"Understood! I'll mark you as intentionally opted out. If anything changes, you can always reach out before the deadline."}]},{id:"conv-005",contactName:"Taylor Kim",outcome:"in_progress",summary:"Taylor asked for more time to review options with their partner before deciding.",thread:[{role:"agent",content:"Hi Taylor! Open enrollment closes Friday. Would you like help selecting your benefits?"},{role:"user",content:"I need to talk to my partner first. Can I get back to you tomorrow?"},{role:"agent",content:"Of course! I'll follow up tomorrow afternoon. The deadline is Friday at 5 PM, so there's still time."}]}],outcomeSummaryFull:"Reached out to 3 employees about open enrollment. Priya Patel completed dental and vision enrollment. Jake Morrison confirmed intentional opt-out. Taylor Kim requested follow-up tomorrow.",feedback:null},{id:"exec-003",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-07T06:15:00Z",trigger:{id:"trig-003",label:"Weekly HR data audit scheduled",type:"scheduled"},workflow:he[7],steps:[{offsetMs:0,description:"Weekly HR data audit initiated",toolCategory:"scheduling"},{offsetMs:1500,description:"Scanned 850 employee records for missing fields",toolCategory:"data_cleanup"},{offsetMs:3800,description:"Found 6 records with outdated manager assignments",toolCategory:"data_cleanup"},{offsetMs:5200,description:"Auto-corrected 4 based on recent org chart changes",toolCategory:"data_cleanup"},{offsetMs:6100,description:"Flagged 2 records for manual HR review",toolCategory:"data_cleanup"},{offsetMs:6800,description:"Posted audit summary to #hr-ops channel",toolCategory:"communication",channel:"chat"}],durationMs:7200,creditsUsed:9660,status:"success",goal:"Identify and resolve data inconsistencies in HR employee records",outcomeSummaryFull:"Weekly HR data audit scanned 850 employee records. Found 6 with outdated manager assignments, auto-corrected 4 using the latest org chart, and flagged 2 for manual review. Summary posted to #hr-ops.",feedback:"up"},{id:"exec-004",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-13T11:00:00Z",trigger:{id:"trig-004",label:"Profile update request from Robin Lee",type:"form_submission"},workflow:he[0],steps:[{offsetMs:0,description:"Received profile update form",toolCategory:"data_cleanup"},{offsetMs:600,description:"Validated phone number format",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Sent confirmation via chat",toolCategory:"communication",channel:"chat"}],durationMs:1800,creditsUsed:270,goal:"Help employees update their profile information accurately",conversations:[{id:"conv-006",contactName:"Robin Lee",outcome:"goal_achieved",summary:"Robin updated their phone number and preferred pronouns.",thread:[{role:"agent",content:"Hi Robin! I got your profile update request. You want to change your phone number and add preferred pronouns, correct?"},{role:"user",content:"Yes! New phone is 555-0283 and pronouns are they/them."},{role:"agent",content:"Updated! Phone number is now 555-0283 and pronouns set to they/them. These will appear on your internal profile and directory listing."},{role:"user",content:"Perfect, thanks!"}]},{id:"conv-007",contactName:"Devon Okafor",outcome:"goal_achieved",summary:"Devon changed their direct deposit information with verification.",thread:[{role:"agent",content:"Hi Devon, I see a request to update your direct deposit info. For security, I'll need to verify your identity first. Can you confirm the last four digits of your SSN?"},{role:"user",content:"Last four is 7291."},{role:"agent",content:"Verified! Please share your new bank routing and account numbers."},{role:"user",content:"Routing: 021000021, Account: 483920174."},{role:"agent",content:"Your direct deposit has been updated. The change will take effect next pay period. You'll get a confirmation email."},{role:"user",content:"Great, appreciate it."}]}],outcomeSummaryFull:"Processed two profile updates: Robin Lee updated phone and pronouns; Devon Okafor updated direct deposit with identity verification. All changes saved successfully.",feedback:null},{id:"exec-005",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-14T06:15:00Z",trigger:{id:"trig-005",label:"Weekly HR data audit scheduled",type:"scheduled"},workflow:he[7],steps:[{offsetMs:0,description:"Weekly HR data audit initiated",toolCategory:"scheduling"},{offsetMs:1200,description:"Scanned 852 employee records",toolCategory:"data_cleanup"},{offsetMs:3100,description:"Found 3 records with missing department codes",toolCategory:"data_cleanup"},{offsetMs:4200,description:"All 3 auto-corrected using org chart",toolCategory:"data_cleanup"},{offsetMs:4900,description:"Posted audit summary to #hr-ops",toolCategory:"communication",channel:"chat"}],durationMs:5400,creditsUsed:8740,status:"success",goal:"Identify and resolve data inconsistencies in HR employee records",outcomeSummaryFull:"Weekly HR audit scanned 852 records. Found 3 with missing department codes; all were auto-corrected via org chart mapping. Zero manual flags this week.",feedback:null},{id:"exec-006",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-08T07:30:00Z",trigger:{id:"trig-006",label:"Shift coverage needed for warehouse team",type:"manager_request"},workflow:he[2],steps:[{offsetMs:0,description:"Received shift coverage request from manager",toolCategory:"scheduling"},{offsetMs:600,description:"Identified 5 eligible employees for the shift",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent coverage requests via SMS",toolCategory:"communication",channel:"sms"},{offsetMs:3800,description:"Processed responses and confirmed coverage",toolCategory:"scheduling"}],durationMs:4500,creditsUsed:590,goal:"Find replacement coverage for open shifts as quickly as possible",conversations:[{id:"conv-008",contactName:"Luis Hernandez",outcome:"goal_achieved",summary:"Luis agreed to cover the Saturday morning warehouse shift.",thread:[{role:"agent",content:"Hi Luis, there's an open shift this Saturday 6AM-2PM at the warehouse. Are you available to cover?"},{role:"user",content:"Yeah I can do that. Overtime rate?"},{role:"agent",content:"Yes, it qualifies for 1.5x overtime since it's your 6th day this week. I'll confirm you for the shift."},{role:"user",content:"Sounds good, sign me up."},{role:"agent",content:"You're confirmed for Saturday 6AM-2PM warehouse shift. I've notified your manager. Thanks, Luis!"}]},{id:"conv-009",contactName:"Mei Zhang",outcome:"completed_no_action",summary:"Mei was unavailable due to a family event but thanked Sched for asking.",thread:[{role:"agent",content:"Hi Mei, there's an open Saturday morning shift at the warehouse. Would you be able to cover 6AM-2PM?"},{role:"user",content:"Sorry, I have a family thing Saturday. Can't make it this time."},{role:"agent",content:"No problem at all! I'll check with others. Have a great weekend, Mei."}]},{id:"conv-010",contactName:"Andre Williams",outcome:"completed_no_action",summary:"Andre declined due to his child's soccer game.",thread:[{role:"agent",content:"Hi Andre, we have an open shift Saturday 6AM-2PM at the warehouse. Any chance you can cover?"},{role:"user",content:"My kid has a soccer game Saturday morning. Can't do it this week."},{role:"agent",content:"Totally understand! Thanks for letting me know. Enjoy the game!"}]}],outcomeSummaryFull:"Shift coverage request for Saturday warehouse shift. Contacted 3 eligible employees: Luis Hernandez accepted at overtime rate, Mei Zhang and Andre Williams were unavailable. Coverage secured.",feedback:"up"},{id:"exec-007",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-005",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-10T16:00:00Z",trigger:{id:"trig-007",label:"Manager updated next week schedule for retail team",type:"schedule_change"},workflow:he[3],steps:[{offsetMs:0,description:"Detected schedule changes for retail team",toolCategory:"scheduling"},{offsetMs:400,description:"Computed affected employees (4 shift changes)",toolCategory:"data_cleanup"},{offsetMs:1e3,description:"Sent personalized schedule update notifications",toolCategory:"communication",channel:"sms"},{offsetMs:2800,description:"Collected acknowledgments",toolCategory:"communication",channel:"sms"}],durationMs:3400,creditsUsed:460,goal:"Notify employees of schedule changes and collect acknowledgments",conversations:[{id:"conv-011",contactName:"Sam Torres",outcome:"goal_achieved",summary:"Sam acknowledged her new Tuesday start time.",thread:[{role:"agent",content:"Hi Sam, your shift next Tuesday has been updated. New time: 10AM-6PM (was 8AM-4PM). Please reply OK to acknowledge."},{role:"user",content:"OK, thanks for the heads up."}]},{id:"conv-012",contactName:"Nina Johansson",outcome:"goal_achieved",summary:"Nina confirmed her additional Thursday shift.",thread:[{role:"agent",content:"Hi Nina, you've been added to the Thursday closing shift next week (3PM-11PM). Can you confirm you're available?"},{role:"user",content:"That works for me. I'll be there."},{role:"agent",content:"Thanks, Nina! You're confirmed for Thursday 3PM-11PM."}]},{id:"conv-013",contactName:"Chris Dalton",outcome:"in_progress",summary:"Chris hasn't responded to the schedule change notification yet.",thread:[{role:"agent",content:"Hi Chris, your Wednesday shift has been moved to Thursday 8AM-4PM next week. Please reply to confirm."}]}],outcomeSummaryFull:"Notified 3 retail team members of schedule changes. Sam Torres and Nina Johansson acknowledged. Chris Dalton has not yet responded; follow-up queued for tomorrow morning.",feedback:null},{id:"exec-008",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-12T05:00:00Z",trigger:{id:"trig-008",label:"Weekly shift reconciliation for all locations",type:"scheduled"},workflow:he[2],steps:[{offsetMs:0,description:"Shift reconciliation job started",toolCategory:"scheduling"},{offsetMs:2e3,description:"Compared scheduled shifts vs time-clock entries for 120 employees",toolCategory:"data_cleanup"},{offsetMs:5500,description:"Detected 8 discrepancies across 3 locations",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Auto-resolved 5 minor clock-in rounding differences",toolCategory:"data_cleanup"},{offsetMs:8600,description:"Flagged 3 significant discrepancies for manager review",toolCategory:"data_cleanup"},{offsetMs:9200,description:"Sent reconciliation report to managers via email",toolCategory:"communication",channel:"email"}],durationMs:9800,creditsUsed:10890,status:"success",goal:"Reconcile scheduled shifts with actual time-clock entries to detect discrepancies",outcomeSummaryFull:"Weekly shift reconciliation compared 120 employees across 3 locations. Found 8 discrepancies: 5 auto-resolved (rounding differences), 3 flagged for manager review. Report emailed to location managers.",feedback:null},{id:"exec-009",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-14T10:20:00Z",trigger:{id:"trig-009",label:"Ponder detected potential scheduling conflict for next week",type:"ai_suggestion"},workflow:he[2],steps:[{offsetMs:0,description:"Ponder identified overlapping shift requests",toolCategory:"scheduling"},{offsetMs:800,description:"Analyzed swap options based on employee preferences",toolCategory:"data_cleanup"},{offsetMs:1600,description:"Proposed swap to affected employees via chat",toolCategory:"communication",channel:"chat"}],durationMs:2400,creditsUsed:400,goal:"Proactively resolve scheduling conflicts before they cause coverage gaps",conversations:[{id:"conv-014",contactName:"Luis Hernandez",outcome:"goal_achieved",summary:"Luis agreed to swap his Monday for Wednesday to resolve the conflict.",thread:[{role:"agent",content:"Hi Luis, I noticed a potential scheduling conflict next Monday — you and Mei are both assigned to the morning shift, but we only need one person. Would you be open to swapping to Wednesday morning instead?"},{role:"user",content:"Wednesday works fine for me. Go ahead and swap it."},{role:"agent",content:"Done! You're now scheduled for Wednesday morning instead of Monday. Mei will keep the Monday shift. Thanks for being flexible!"}]},{id:"conv-015",contactName:"Mei Zhang",outcome:"goal_achieved",summary:"Mei confirmed she's keeping her Monday shift as originally scheduled.",thread:[{role:"agent",content:"Hi Mei, just a heads up — I resolved a scheduling overlap for next Monday. You'll keep your morning shift as planned. No changes needed on your end."},{role:"user",content:"Great, thanks for sorting that out."}]}],outcomeSummaryFull:"Ponder detected a Monday shift overlap between Luis and Mei. Sched proposed a swap: Luis moved to Wednesday, Mei kept Monday. Both confirmed. Conflict resolved proactively.",feedback:"up"},{id:"exec-010",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-02T09:00:00Z",trigger:{id:"trig-010",label:"New hire start date: 3 employees joining April 2",type:"scheduled"},workflow:he[4],steps:[{offsetMs:0,description:"New hire onboarding triggered for 3 employees",toolCategory:"scheduling"},{offsetMs:500,description:"Generated personalized welcome packets",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Sent welcome messages via email",toolCategory:"communication",channel:"email"},{offsetMs:3200,description:"Followed up with checklist links via chat",toolCategory:"communication",channel:"chat"}],durationMs:4e3,creditsUsed:620,goal:"Guide new hires through their first-day onboarding checklist",conversations:[{id:"conv-016",contactName:"Aisha Mahmoud",outcome:"goal_achieved",summary:"Aisha completed all first-day onboarding tasks with Onbi's guidance.",thread:[{role:"agent",content:"Welcome to the team, Aisha! I'm Onbi, your onboarding assistant. I've sent your welcome packet to your email. Let's get you set up — first up, have you been able to log into the employee portal?"},{role:"user",content:"Thanks! Yes, I logged in this morning. What do I do next?"},{role:"agent",content:"Great! Next steps: (1) Complete your tax forms in the Benefits section, (2) Upload your ID photo for your badge, and (3) Review the employee handbook. I'll check in once you're through those."},{role:"user",content:"All done with those three! The handbook was really helpful."},{role:"agent",content:"Awesome work! Your first-day checklist is 100% complete. Tomorrow I'll walk you through your team-specific setup. Enjoy the rest of your first day!"}]},{id:"conv-017",contactName:"Ryan Brooks",outcome:"in_progress",summary:"Ryan completed portal login but hasn't finished tax forms yet.",thread:[{role:"agent",content:"Welcome, Ryan! I'm Onbi, here to help with onboarding. Have you had a chance to log into the employee portal?"},{role:"user",content:"Hey! Yes just got in. I'm having trouble with the tax form though — it's not loading right."},{role:"agent",content:"That sounds like a browser issue. Try clearing your cache or switching to Chrome. If it still doesn't work, I can send you a direct PDF link as a workaround."},{role:"user",content:"Let me try Chrome first. I'll message you back if it doesn't work."}]},{id:"conv-018",contactName:"Sofia Gutierrez",outcome:"goal_achieved",summary:"Sofia completed all onboarding steps and scheduled her team intro meeting.",thread:[{role:"agent",content:"Welcome aboard, Sofia! I'm your onboarding assistant. Ready to tackle your first-day checklist?"},{role:"user",content:"Absolutely! I already did the tax forms and uploaded my photo. What's left?"},{role:"agent",content:"You're ahead of the game! Just two more items: review the employee handbook and schedule your team intro meeting with your manager. Want me to help find a meeting time?"},{role:"user",content:"Yes please! Anytime tomorrow afternoon works for me."},{role:"agent",content:"I see your manager has tomorrow at 2PM open. I've booked a 30-minute intro meeting for you both. Handbook reviewed?"},{role:"user",content:"Yep, just finished reading it. All done!"},{role:"agent",content:"Your first-day onboarding is complete! Meeting set for tomorrow at 2PM. Great start, Sofia!"}]}],outcomeSummaryFull:"Onboarded 3 new hires on April 2. Aisha Mahmoud and Sofia Gutierrez completed all first-day tasks. Ryan Brooks is in progress (tax form loading issue). Sofia's team intro meeting scheduled.",feedback:"up"},{id:"exec-011",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-05T07:00:00Z",trigger:{id:"trig-011",label:"Compliance document audit for Q2 hires",type:"scheduled"},workflow:he[5],steps:[{offsetMs:0,description:"Document compliance audit started for Q2 hires",toolCategory:"scheduling"},{offsetMs:1800,description:"Checked I-9, W-4, and NDA status for 14 recent hires",toolCategory:"data_cleanup"},{offsetMs:3600,description:"Found 2 employees missing signed NDAs",toolCategory:"data_cleanup"},{offsetMs:4200,description:"Found 1 employee with incomplete I-9 Section 2",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Generated compliance exception report",toolCategory:"data_cleanup"},{offsetMs:5200,description:"Emailed report to HR compliance team",toolCategory:"communication",channel:"email"}],durationMs:5600,creditsUsed:8010,status:"success",goal:"Ensure all new hire documents are collected and compliant within required timeframes",outcomeSummaryFull:"Document audit for 14 Q2 hires: 2 missing signed NDAs (Ryan Brooks, Kenji Tanaka) and 1 incomplete I-9 Section 2 (Fatima Al-Said). Exception report sent to HR compliance team.",feedback:null},{id:"exec-012",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-009",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-10T08:00:00Z",trigger:{id:"trig-012",label:"Ponder detected stale onboarding checklists",type:"ai_suggestion"},workflow:he[4],steps:[{offsetMs:0,description:"Ponder flagged 3 checklists stale for >5 days",toolCategory:"scheduling"},{offsetMs:900,description:"Reviewed checklist completion status",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Two checklists at 80%+ completion, one at 40%",toolCategory:"data_cleanup"},{offsetMs:2400,description:"Sent nudge reminders to HR team via email",toolCategory:"communication",channel:"email"}],durationMs:2800,creditsUsed:3470,status:"in_progress",goal:"Ensure onboarding checklists are completed within the target timeframe",outcomeSummaryFull:"Ponder detected 3 onboarding checklists stale for over 5 days. Two are near completion (80%+), one is significantly behind (40%). Nudge reminders sent to HR team for follow-up.",feedback:null},{id:"exec-013",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-03T10:30:00Z",trigger:{id:"trig-013",label:"Day-2 onboarding follow-up triggered",type:"scheduled"},workflow:he[4],steps:[{offsetMs:0,description:"Day-2 onboarding follow-up initiated",toolCategory:"scheduling"},{offsetMs:400,description:"Checked incomplete items from day 1",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent follow-up messages via chat",toolCategory:"communication",channel:"chat"}],durationMs:1800,creditsUsed:310,goal:"Follow up with new hires who have incomplete onboarding items from day 1",conversations:[{id:"conv-019",contactName:"Ryan Brooks",outcome:"goal_achieved",summary:"Ryan completed his tax forms after receiving the direct PDF link.",thread:[{role:"agent",content:"Hey Ryan! Following up from yesterday. Were you able to get the tax form working in Chrome?"},{role:"user",content:"No luck with Chrome either. Can you send me that PDF link you mentioned?"},{role:"agent",content:"Sure! Here's the direct link to the fillable PDF: [link]. Fill it out, sign it, and upload it to the Documents section in your portal."},{role:"user",content:"That worked! Just uploaded the completed form."},{role:"agent",content:"I can see it in the system. Your day-1 checklist is now 100% complete! Today's items: (1) Complete your department safety training and (2) Set up your development environment. Ready to tackle those?"},{role:"user",content:"On it! Thanks for the help, Onbi."}]}],outcomeSummaryFull:"Day-2 follow-up: Ryan Brooks completed his tax forms via direct PDF workaround. His day-1 checklist is now at 100%. Day-2 items assigned.",feedback:null},{id:"exec-014",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-06T13:00:00Z",trigger:{id:"trig-014",label:"New support tickets received (batch of 4)",type:"ticket_created"},workflow:he[6],steps:[{offsetMs:0,description:"Received batch of 4 new support tickets",toolCategory:"communication"},{offsetMs:600,description:"Categorized tickets by priority and type",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Sent initial responses to customers via email",toolCategory:"communication",channel:"email"},{offsetMs:3800,description:"Engaged customers in live chat for urgent tickets",toolCategory:"communication",channel:"chat"}],durationMs:5200,creditsUsed:780,goal:"Triage incoming support tickets and provide timely first responses",conversations:[{id:"conv-020",contactName:"Martha Grant",outcome:"goal_achieved",summary:"Cassie resolved Martha's billing discrepancy by applying a credit.",thread:[{role:"agent",content:"Hi Martha, thanks for reaching out! I see your ticket about a billing discrepancy on your last invoice. Let me look into that right away."},{role:"user",content:"Yes, I was charged $149 but my plan is $99/month. This has happened two months in a row."},{role:"agent",content:"I found the issue — an add-on service was accidentally enabled on your account in February. I've removed it and applied a $100 credit for the overcharges. Your next invoice will reflect the correction."},{role:"user",content:"Thank you so much! That was fast."},{role:"agent",content:"Happy to help! You'll see the $100 credit on your next statement. Is there anything else I can assist with?"},{role:"user",content:"No, that's all. Thanks again!"}]},{id:"conv-021",contactName:"Derek Foster",outcome:"goal_achieved",summary:"Derek's login issue was resolved by resetting his MFA configuration.",thread:[{role:"agent",content:"Hi Derek, I see you're having trouble logging in. Can you tell me what error message you're seeing?"},{role:"user",content:"It says my MFA code is invalid every time I try. I changed phones last week."},{role:"agent",content:"That explains it — your MFA is still linked to your old device. I've reset your MFA configuration. You'll receive a setup email to register your new phone. Try that and let me know."},{role:"user",content:"Got the email and re-registered. I'm in now!"},{role:"agent",content:"Glad that worked! Your account is all set. Let me know if you need anything else."}]},{id:"conv-022",contactName:"Kelly Zhao",outcome:"in_progress",summary:"Kelly reported a data export bug that needs engineering investigation.",thread:[{role:"agent",content:"Hi Kelly, I received your ticket about the CSV export issue. Can you describe what's happening?"},{role:"user",content:"When I export my report to CSV, the date columns are all showing as Unix timestamps instead of readable dates."},{role:"agent",content:"Thanks for the details. I've been able to reproduce this on my end. This looks like it needs an engineering fix. I'm escalating to our dev team with priority P2. I'll keep you updated on the timeline."},{role:"user",content:"OK, appreciate you looking into it. How long does P2 usually take?"},{role:"agent",content:"P2 issues are typically resolved within 3-5 business days. I'll follow up with you by Friday with an update either way."}]}],outcomeSummaryFull:"Triaged 3 customer tickets. Martha Grant: billing credit applied, resolved. Derek Foster: MFA reset, resolved. Kelly Zhao: CSV export bug escalated to engineering as P2.",feedback:"up"},{id:"exec-015",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-09T10:00:00Z",trigger:{id:"trig-015",label:"Daily open-ticket follow-up check",type:"scheduled"},workflow:he[6],steps:[{offsetMs:0,description:"Daily open-ticket follow-up triggered",toolCategory:"scheduling"},{offsetMs:300,description:"Found 2 tickets awaiting customer response >24h",toolCategory:"data_cleanup"},{offsetMs:800,description:"Sent follow-up emails",toolCategory:"communication",channel:"email"}],durationMs:1200,creditsUsed:190,goal:"Follow up on open tickets that have been waiting for customer response",conversations:[{id:"conv-023",contactName:"Kelly Zhao",outcome:"goal_achieved",summary:"Kelly confirmed the CSV export fix is working after the patch.",thread:[{role:"agent",content:"Hi Kelly, following up on your CSV export issue. Our engineering team deployed a fix yesterday. Could you try exporting your report again?"},{role:"user",content:"Just tested it — dates are showing correctly now. Thanks!"},{role:"agent",content:"Wonderful! I'm closing this ticket as resolved. Don't hesitate to reach out if anything else comes up."}]},{id:"conv-024",contactName:"Omar Haddad",outcome:"completed_no_action",summary:"Omar said his issue resolved itself after a browser update.",thread:[{role:"agent",content:"Hi Omar, checking in on your ticket about the dashboard loading slowly. Are you still experiencing the issue?"},{role:"user",content:"Actually it started working fine after I updated Chrome. I think it was a browser thing."},{role:"agent",content:"Good to hear it's resolved! I'll close the ticket. Let us know if it happens again."}]}],outcomeSummaryFull:"Followed up on 2 open tickets. Kelly Zhao confirmed CSV export fix is working. Omar Haddad's dashboard issue self-resolved after browser update. Both tickets closed.",feedback:null},{id:"exec-016",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-12T14:30:00Z",trigger:{id:"trig-016",label:"Ponder detected usage drop for 2 accounts",type:"ai_suggestion"},workflow:he[6],steps:[{offsetMs:0,description:"Ponder flagged 2 accounts with 60%+ usage drop",toolCategory:"data_cleanup"},{offsetMs:400,description:"Reviewed account activity and recent tickets",toolCategory:"data_cleanup"},{offsetMs:1e3,description:"Sent proactive check-in emails",toolCategory:"communication",channel:"email"}],durationMs:1600,creditsUsed:250,goal:"Proactively reach out to accounts showing significant usage drops",conversations:[{id:"conv-025",contactName:"Evelyn Marsh",outcome:"goal_achieved",summary:"Evelyn appreciated the outreach; she was confused by the new UI and got help navigating it.",thread:[{role:"agent",content:"Hi Evelyn, I noticed your team's usage has dropped recently. Is everything working OK? We want to make sure you're getting the most out of the platform."},{role:"user",content:"Honestly, since the last update the new dashboard is confusing. I can't find the reports I used to run."},{role:"agent",content:"I totally understand — the reports moved to the Analytics tab in the new layout. Would you like me to walk you through the new navigation?"},{role:"user",content:"Yes, that would be great."},{role:"agent",content:"Here's a quick guide: Analytics > Custom Reports > select your template. Your saved reports are all still there. I've also pinned a shortcut to your dashboard sidebar so they're one click away."},{role:"user",content:"Oh perfect, found them! Thanks for reaching out."}]},{id:"conv-026",contactName:"Raj Patel",outcome:"in_progress",summary:"Raj mentioned his team is evaluating a competitor. Flagged for account management.",thread:[{role:"agent",content:"Hi Raj, I noticed your team's activity has been lower than usual lately. Wanted to check in — is there anything we can help with?"},{role:"user",content:"We're actually evaluating a few other tools right now. The pricing increase last quarter was a factor."},{role:"agent",content:"I appreciate your honesty. I'd like to connect you with our account manager to discuss options that might work better for your budget. Would that be OK?"},{role:"user",content:"Sure, have them reach out."}]}],outcomeSummaryFull:"Proactively contacted 2 accounts with usage drops. Evelyn Marsh: resolved UI confusion, pinned report shortcuts. Raj Patel: flagged for account manager outreach due to competitor evaluation.",feedback:"down"},{id:"exec-017",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-14T15:45:00Z",trigger:{id:"trig-017",label:"P1 support ticket: API outage reported",type:"ticket_created"},workflow:he[6],steps:[{offsetMs:0,description:"P1 ticket received: customer reporting API outage",toolCategory:"communication"},{offsetMs:200,description:"Checked internal status page — no known issues",toolCategory:"data_cleanup"},{offsetMs:600,description:"Initiated live chat with customer",toolCategory:"communication",channel:"chat"}],durationMs:980,creditsUsed:130,goal:"Respond to P1 tickets within 5 minutes and begin troubleshooting immediately",conversations:[{id:"conv-027",contactName:"Nadia Volkov",outcome:"in_progress",summary:"Nadia reported 500 errors on the API; Cassie escalated to on-call engineering.",thread:[{role:"agent",content:"Hi Nadia, I see you're reporting API errors. I'm looking into this right now. Can you share the specific endpoint and error codes you're seeing?"},{role:"user",content:"We're getting 500 errors on /api/v2/reports. Started about 20 minutes ago. It's blocking our production pipeline."},{role:"agent",content:"I've confirmed no issues on our public status page, which means this might be isolated. I'm escalating to our on-call engineer immediately with a P1 flag. They'll join this chat within 10 minutes. In the meantime, does your pipeline have a fallback to the v1 endpoint?"},{role:"user",content:"We can try v1 as a temporary workaround. Please keep me posted on the fix."}]}],outcomeSummaryFull:"P1 ticket from Nadia Volkov: 500 errors on /api/v2/reports. Internal status page clear. Escalated to on-call engineer. Customer using v1 fallback. Response time: under 2 minutes.",feedback:null},{id:"exec-018",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-07T06:00:00Z",trigger:{id:"trig-018",label:"Weekly data audit scheduled",type:"scheduled"},workflow:he[7],steps:[{offsetMs:0,description:"Weekly audit trigger fired",toolCategory:"scheduling"},{offsetMs:1200,description:"Scanned 2,400 employee records for inconsistencies",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Found 12 records with missing department codes",toolCategory:"data_cleanup"},{offsetMs:6200,description:"Auto-corrected 9 using org chart mapping",toolCategory:"data_cleanup"},{offsetMs:7800,description:"Flagged 3 ambiguous records for manual review",toolCategory:"data_cleanup"},{offsetMs:8400,description:"Generated audit report and posted to #data-ops",toolCategory:"communication",channel:"chat"}],durationMs:9200,creditsUsed:11980,status:"success",goal:"Identify and resolve data inconsistencies in employee records",outcomeSummaryFull:"Weekly data audit scanned 2,400 employee records. Found 12 with missing department codes, auto-corrected 9 using org chart data, and flagged 3 for manual review. Audit report posted to #data-ops.",feedback:"up"},{id:"exec-019",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-08T02:00:00Z",trigger:{id:"trig-019",label:"Nightly record deduplication job",type:"scheduled"},workflow:he[8],steps:[{offsetMs:0,description:"Nightly dedup job started",toolCategory:"scheduling"},{offsetMs:2200,description:"Compared 3,100 contact records using fuzzy matching",toolCategory:"data_cleanup"},{offsetMs:6400,description:"Identified 18 potential duplicate pairs",toolCategory:"data_cleanup"},{offsetMs:8100,description:"Auto-merged 14 high-confidence duplicates",toolCategory:"data_cleanup"},{offsetMs:9e3,description:"Queued 4 low-confidence pairs for human review",toolCategory:"data_cleanup"},{offsetMs:9600,description:"Updated dedup log and posted summary",toolCategory:"communication",channel:"chat"}],durationMs:1e4,creditsUsed:13220,status:"success",goal:"Eliminate duplicate contact records to maintain data integrity",outcomeSummaryFull:"Nightly dedup scanned 3,100 contact records. Found 18 potential duplicates: 14 auto-merged (high confidence), 4 queued for human review (low confidence). Dedup log updated.",feedback:null},{id:"exec-020",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-10T07:00:00Z",trigger:{id:"trig-020",label:"Weekly ops report generation",type:"scheduled"},workflow:he[9],steps:[{offsetMs:0,description:"Ops report generation started",toolCategory:"scheduling"},{offsetMs:800,description:"Aggregated metrics from 5 data sources",toolCategory:"data_cleanup"},{offsetMs:2400,description:"Computed week-over-week trends",toolCategory:"data_cleanup"},{offsetMs:3200,description:"Generated formatted report PDF",toolCategory:"data_cleanup"},{offsetMs:3800,description:"Emailed report to ops leadership",toolCategory:"communication",channel:"email"}],durationMs:4200,creditsUsed:5210,status:"success",goal:"Generate and distribute the weekly operations report to leadership",outcomeSummaryFull:"Weekly ops report generated: aggregated data from 5 sources, computed WoW trends, formatted PDF created and emailed to ops leadership.",feedback:null},{id:"exec-021",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-13T03:00:00Z",trigger:{id:"trig-021",label:"Ponder detected orphaned records in staging table",type:"ai_suggestion"},workflow:he[8],steps:[{offsetMs:0,description:"Ponder flagged 42 orphaned records in staging",toolCategory:"data_cleanup"},{offsetMs:1600,description:"Attempted to match orphans to master records",toolCategory:"data_cleanup"},{offsetMs:3200,description:"Matched 28 records, 14 remain unresolvable",toolCategory:"data_cleanup"},{offsetMs:3800,description:"Process halted: missing reference table access",toolCategory:"data_cleanup"}],durationMs:4e3,creditsUsed:6190,status:"incomplete",goal:"Clean up orphaned records in the staging table",outcomeSummaryFull:"Ponder detected 42 orphaned records in staging. Matched 28 to master records, but 14 remain unresolved. Process halted due to missing access to the customer reference table. Manual intervention required.",feedback:"down"},{id:"exec-022",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-14T06:00:00Z",trigger:{id:"trig-022",label:"Weekly data audit scheduled",type:"scheduled"},workflow:he[7],steps:[{offsetMs:0,description:"Weekly audit trigger fired",toolCategory:"scheduling"},{offsetMs:1400,description:"Scanned 2,412 employee records",toolCategory:"data_cleanup"},{offsetMs:4200,description:"Found 5 records with stale location data",toolCategory:"data_cleanup"},{offsetMs:5800,description:"Auto-corrected 3 based on recent office moves",toolCategory:"data_cleanup"},{offsetMs:6800,description:"Flagged 2 for manual review",toolCategory:"data_cleanup"}],durationMs:7400,creditsUsed:11060,status:"in_progress",goal:"Identify and resolve data inconsistencies in employee records",outcomeSummaryFull:"Weekly data audit scanned 2,412 records. Found 5 with stale location data: 3 auto-corrected, 2 flagged for review. Report generation pending — awaiting confirmation from ops lead before posting.",feedback:null},{id:"exec-023",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-01T10:15:00Z",trigger:{id:"trig-023",label:"Leave request submitted by Hannah Park",type:"form_submission"},workflow:he[0],steps:[{offsetMs:0,description:"Received PTO request form",toolCategory:"data_cleanup"},{offsetMs:700,description:"Checked accrual balance and blackout dates",toolCategory:"data_cleanup"},{offsetMs:1800,description:"Responded to employee via chat",toolCategory:"communication",channel:"chat"}],durationMs:2400,creditsUsed:290,goal:"Help employees understand and submit leave requests accurately",conversations:[{id:"conv-050",contactName:"Hannah Park",outcome:"goal_achieved",summary:"Hannah confirmed her PTO balance and submitted a 5-day request.",thread:[{role:"agent",content:"Hi Hannah! I see your PTO request for May 4-8. You currently have 72 hours accrued, which easily covers the 40 hours you're requesting."},{role:"user",content:"Perfect. Is that week OK to take off?"},{role:"agent",content:"It's outside any blackout windows, so you're good to go. I've routed the request to your manager for approval. You'll hear back within 2 business days."},{role:"user",content:"Thanks!"}]},{id:"conv-051",contactName:"Bryan Osei",outcome:"completed_no_action",summary:"Bryan learned he didn't have enough accrued time and withdrew the request.",thread:[{role:"agent",content:"Hi Bryan, I reviewed your leave request for 6 days next month. You currently have 32 hours accrued, which covers only 4 days."},{role:"user",content:"Ah, I didn't realize. Let me just withdraw it and plan for something shorter later."},{role:"agent",content:"No problem — I've withdrawn the request. You'll accrue another 16 hours by end of June if that helps with planning."}]}],outcomeSummaryFull:"Processed 2 leave requests. Hannah Park: 5-day PTO approved and routed to manager. Bryan Osei: withdrew request after learning of insufficient accrual.",feedback:null},{id:"exec-024",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-002",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-04T14:22:00Z",trigger:{id:"trig-024",label:"FSA question from employee chat",type:"inbound_message"},workflow:he[1],steps:[{offsetMs:0,description:"Inbound FSA question received",toolCategory:"communication"},{offsetMs:600,description:"Looked up current plan documents",toolCategory:"data_cleanup"},{offsetMs:1500,description:"Answered employee via chat",toolCategory:"communication",channel:"chat"}],durationMs:2100,creditsUsed:250,goal:"Answer benefits policy questions accurately and promptly",conversations:[{id:"conv-052",contactName:"Lena Ortiz",outcome:"goal_achieved",summary:"Lena got clarity on dependent-care FSA limits before submitting a claim.",thread:[{role:"agent",content:"Hi Lena! I got your question about the dependent-care FSA. What would you like to know?"},{role:"user",content:"What's the annual limit and can I use it for summer camp?"},{role:"agent",content:"The 2026 limit is $5,000 per household ($2,500 if married filing separately). Day camps qualify — overnight camps do not. Keep receipts and submit through the FSA portal."},{role:"user",content:"Exactly what I needed. Thanks!"}]}],outcomeSummaryFull:"Answered Lena Ortiz's dependent-care FSA question: confirmed $5,000 annual limit and that day camps are eligible expenses.",feedback:"up"},{id:"exec-025",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-001",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-11T16:40:00Z",trigger:{id:"trig-025",label:"Ponder flagged repeat questions about bereavement policy",type:"ai_suggestion"},workflow:he[0],steps:[{offsetMs:0,description:"Ponder detected 4 bereavement policy questions this week",toolCategory:"data_cleanup"},{offsetMs:900,description:"Drafted clarification message",toolCategory:"data_cleanup"},{offsetMs:2100,description:"Messaged affected employees via chat",toolCategory:"communication",channel:"chat"}],durationMs:2800,creditsUsed:370,goal:"Proactively clarify confusing policies when multiple employees ask similar questions",conversations:[{id:"conv-053",contactName:"Kim Alvarez",outcome:"goal_achieved",summary:"Kim got confirmation that bereavement leave covers her aunt.",thread:[{role:"agent",content:"Hi Kim, I wanted to follow up on your question about bereavement leave. Our policy covers immediate family including aunts and uncles — you're eligible for up to 3 paid days."},{role:"user",content:"Oh good. I'll submit the request today."},{role:"agent",content:"Take the time you need. If travel is involved I can also help route a request for an extra unpaid day."}]},{id:"conv-054",contactName:"Nate Holloway",outcome:"goal_achieved",summary:"Nate learned step-parent qualifies for bereavement under the policy.",thread:[{role:"agent",content:"Hi Nate, following up on your bereavement question. Step-parents are included in our policy's definition of immediate family — so you qualify for up to 5 days."},{role:"user",content:"Thank you, that's really helpful."}]}],outcomeSummaryFull:"Ponder flagged a pattern of bereavement policy questions. Erin proactively clarified coverage for Kim Alvarez (aunt) and Nate Holloway (step-parent). Both confirmed eligibility.",feedback:"up"},{id:"exec-026",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-06T05:45:00Z",trigger:{id:"trig-026",label:"Monthly role-title audit",type:"scheduled"},workflow:he[7],steps:[{offsetMs:0,description:"Role audit job started",toolCategory:"scheduling"},{offsetMs:1600,description:"Compared HRIS titles with org chart of record",toolCategory:"data_cleanup"},{offsetMs:3400,description:"Found 11 mismatches — titles vs compensation band",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Auto-corrected 7 based on approved promotions",toolCategory:"data_cleanup"},{offsetMs:5600,description:"Flagged 4 for comp-team review",toolCategory:"data_cleanup"}],durationMs:6100,creditsUsed:8230,status:"success",goal:"Keep job titles consistent with approved compensation bands",outcomeSummaryFull:"Monthly role audit found 11 title/band mismatches across 850 records. 7 were auto-corrected using the approved promotion log; 4 were escalated to the compensation team.",feedback:null},{id:"exec-027",specialistId:"persona-001",personaName:"Erin",deploymentId:"dep-003",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-12T08:30:00Z",trigger:{id:"trig-027",label:"Daily employment verification batch",type:"scheduled"},workflow:he[7],steps:[{offsetMs:0,description:"Verification batch started",toolCategory:"scheduling"},{offsetMs:1100,description:"Processed 18 incoming verification requests",toolCategory:"data_cleanup"},{offsetMs:2900,description:"Generated 18 standardized verification letters",toolCategory:"data_cleanup"},{offsetMs:3700,description:"Emailed letters to requesting parties",toolCategory:"communication",channel:"email"}],durationMs:4200,creditsUsed:5540,status:"success",goal:"Respond to third-party employment verification requests same-day",outcomeSummaryFull:"Processed 18 employment verification requests for mortgage, rental, and loan applications. All standardized letters generated and emailed same-day.",feedback:null},{id:"exec-028",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-02T12:10:00Z",trigger:{id:"trig-028",label:"Shift swap request from Tara Bishop",type:"form_submission"},workflow:he[2],steps:[{offsetMs:0,description:"Swap request received",toolCategory:"scheduling"},{offsetMs:500,description:"Identified eligible swap partners",toolCategory:"data_cleanup"},{offsetMs:1100,description:"Messaged candidates via SMS",toolCategory:"communication",channel:"sms"},{offsetMs:2400,description:"Confirmed accepted swap and updated schedule",toolCategory:"scheduling"}],durationMs:3e3,creditsUsed:410,goal:"Facilitate shift swaps between eligible employees",conversations:[{id:"conv-055",contactName:"Tara Bishop",outcome:"goal_achieved",summary:"Tara swapped her Friday closing for Tuesday morning.",thread:[{role:"agent",content:"Hi Tara, I received your swap request. I found 2 eligible partners. Sending requests now."},{role:"user",content:"Thanks, hoping someone can take Friday."},{role:"agent",content:"Jordan accepted the swap. You'll now work Tuesday 8AM-4PM instead of Friday closing."},{role:"user",content:"Perfect, thanks!"}]},{id:"conv-056",contactName:"Jordan Kwan",outcome:"goal_achieved",summary:"Jordan accepted the Friday closing shift in exchange.",thread:[{role:"agent",content:"Hi Jordan, Tara is looking to swap her Friday 3PM-11PM for your Tuesday 8AM-4PM. Interested?"},{role:"user",content:"Yes, that works for me."},{role:"agent",content:"Swap confirmed. You're on for Friday closing."}]}],outcomeSummaryFull:"Shift swap completed between Tara Bishop and Jordan Kwan. Tara moved from Friday closing to Tuesday morning. Schedule updated.",feedback:null},{id:"exec-029",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-005",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-05T09:20:00Z",trigger:{id:"trig-029",label:"Manager published new schedule — warehouse",type:"schedule_change"},workflow:he[3],steps:[{offsetMs:0,description:"Detected published schedule",toolCategory:"scheduling"},{offsetMs:500,description:"Computed per-employee deltas for 9 people",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Sent confirmation SMS to each affected employee",toolCategory:"communication",channel:"sms"}],durationMs:2600,creditsUsed:440,goal:"Make sure every employee acknowledges their upcoming schedule",conversations:[{id:"conv-057",contactName:"Isabel Moreno",outcome:"goal_achieved",summary:"Isabel confirmed her new schedule.",thread:[{role:"agent",content:"Hi Isabel, your warehouse schedule for next week: Mon/Wed/Fri 6AM-2PM. Reply OK to confirm."},{role:"user",content:"OK"}]},{id:"conv-058",contactName:"Wade Sullivan",outcome:"in_progress",summary:"Wade has not responded yet.",thread:[{role:"agent",content:"Hi Wade, you're scheduled Tues/Thurs/Sat 2PM-10PM next week. Reply OK to confirm."}]},{id:"conv-059",contactName:"Priya Natarajan",outcome:"goal_achieved",summary:"Priya acknowledged her updated hours.",thread:[{role:"agent",content:"Hi Priya, your updated schedule: Wed-Sun 10AM-6PM. Reply OK to confirm."},{role:"user",content:"OK thanks"}]}],outcomeSummaryFull:"Sent schedule confirmations to 3 warehouse team members. Isabel Moreno and Priya Natarajan confirmed. Wade Sullivan has not yet responded.",feedback:null},{id:"exec-030",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-004",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-08T18:45:00Z",trigger:{id:"trig-030",label:"Ponder predicted understaffing for tomorrow's dinner rush",type:"ai_suggestion"},workflow:he[2],steps:[{offsetMs:0,description:"Ponder flagged dinner-shift staffing gap",toolCategory:"scheduling"},{offsetMs:500,description:"Pulled list of eligible off-duty staff",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent coverage offers via SMS",toolCategory:"communication",channel:"sms"},{offsetMs:3200,description:"Confirmed two accepts",toolCategory:"scheduling"}],durationMs:3800,creditsUsed:480,goal:"Close predicted coverage gaps before the shift starts",conversations:[{id:"conv-060",contactName:"Riley McCabe",outcome:"goal_achieved",summary:"Riley picked up the 5-9PM dinner shift.",thread:[{role:"agent",content:"Hi Riley, tomorrow 5-9PM dinner shift needs coverage. Available?"},{role:"user",content:"Sure, I can do that."},{role:"agent",content:"You're on. Thanks, Riley!"}]},{id:"conv-061",contactName:"Deion Hart",outcome:"goal_achieved",summary:"Deion accepted a 6-10PM support shift.",thread:[{role:"agent",content:"Hey Deion, tomorrow 6-10PM we could use extra support. Can you cover?"},{role:"user",content:"Yep, sign me up."},{role:"agent",content:"Confirmed. Appreciate it!"}]}],outcomeSummaryFull:"Ponder predicted understaffing for tomorrow's dinner rush. Sched contacted 5 off-duty staff; Riley McCabe and Deion Hart accepted. Gap closed.",feedback:"up"},{id:"exec-031",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-03T04:30:00Z",trigger:{id:"trig-031",label:"Bi-weekly timecard audit",type:"scheduled"},workflow:he[2],steps:[{offsetMs:0,description:"Audit job started",toolCategory:"scheduling"},{offsetMs:1800,description:"Reviewed timecards for 220 hourly employees",toolCategory:"data_cleanup"},{offsetMs:5100,description:"Found 14 missed punches",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Auto-corrected 10 using scheduled-shift inference",toolCategory:"data_cleanup"},{offsetMs:8200,description:"Flagged 4 for manager confirmation",toolCategory:"data_cleanup"}],durationMs:8900,creditsUsed:11540,status:"success",goal:"Catch and resolve missing timecard punches before payroll runs",outcomeSummaryFull:"Bi-weekly timecard audit covered 220 hourly employees. 14 missed punches detected: 10 inferred from scheduled shifts, 4 flagged for manager review. Ready for payroll.",feedback:"up"},{id:"exec-032",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-09T04:00:00Z",trigger:{id:"trig-032",label:"Daily next-7-day shift gap scan",type:"scheduled"},workflow:he[2],steps:[{offsetMs:0,description:"Shift gap scan started",toolCategory:"scheduling"},{offsetMs:1400,description:"Analyzed forecasted demand vs published schedule",toolCategory:"data_cleanup"},{offsetMs:3600,description:"Found 6 under-staffed shift windows",toolCategory:"data_cleanup"},{offsetMs:4600,description:"Posted coverage needs to #scheduling channel",toolCategory:"communication",channel:"chat"}],durationMs:5200,creditsUsed:7500,status:"success",goal:"Identify shift gaps 7 days in advance so managers can act",outcomeSummaryFull:"Daily shift gap scan detected 6 under-staffed windows across next 7 days (3 dinner, 2 weekend morning, 1 overnight). Coverage needs posted for managers.",feedback:null},{id:"exec-033",specialistId:"persona-002",personaName:"Sched",deploymentId:"dep-006",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-15T05:00:00Z",trigger:{id:"trig-033",label:"Weekly reconciliation cross-location",type:"scheduled"},workflow:he[2],steps:[{offsetMs:0,description:"Reconciliation started",toolCategory:"scheduling"},{offsetMs:2100,description:"Pulled shift data from 4 of 5 locations",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Waiting on missing export from Store 17",toolCategory:"data_cleanup"}],durationMs:5100,creditsUsed:5290,status:"in_progress",goal:"Reconcile scheduled shifts with time-clock entries across all locations",outcomeSummaryFull:"Cross-location reconciliation running. 4 of 5 location exports received; waiting on Store 17 data before completing the compare.",feedback:null},{id:"exec-034",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-01T13:00:00Z",trigger:{id:"trig-034",label:"Missing documents reminder — day 4 new hires",type:"scheduled"},workflow:he[4],steps:[{offsetMs:0,description:"Day-4 doc check triggered",toolCategory:"scheduling"},{offsetMs:500,description:"Identified 2 new hires missing I-9 Section 2",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Sent reminders via email",toolCategory:"communication",channel:"email"}],durationMs:1900,creditsUsed:260,goal:"Ensure new hires complete compliance documents on time",conversations:[{id:"conv-062",contactName:"Kenji Tanaka",outcome:"goal_achieved",summary:"Kenji uploaded his I-9 supporting documents.",thread:[{role:"agent",content:"Hi Kenji! Friendly reminder — your I-9 Section 2 is due by end of week. You can upload a passport or license + SS card."},{role:"user",content:"Just uploaded my passport. Is that enough?"},{role:"agent",content:"Yes! Passport is a List A document and satisfies the I-9 on its own. You're all set."}]},{id:"conv-063",contactName:"Fatima Al-Said",outcome:"in_progress",summary:"Fatima said she'll upload her documents this evening.",thread:[{role:"agent",content:"Hi Fatima, just a reminder your I-9 Section 2 documents are still outstanding."},{role:"user",content:"Oh sorry — I'll upload them tonight when I get home."},{role:"agent",content:"No worries, thanks for the heads up!"}]}],outcomeSummaryFull:"Day-4 document reminders sent. Kenji Tanaka completed I-9 upload. Fatima Al-Said committed to upload tonight.",feedback:null},{id:"exec-035",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-07T10:15:00Z",trigger:{id:"trig-035",label:"Schedule orientation for April cohort",type:"scheduled"},workflow:he[4],steps:[{offsetMs:0,description:"Orientation scheduling triggered",toolCategory:"scheduling"},{offsetMs:700,description:"Checked facilitator availability",toolCategory:"data_cleanup"},{offsetMs:1600,description:"Sent invites to 5 new hires",toolCategory:"communication",channel:"email"}],durationMs:2300,creditsUsed:320,goal:"Book and confirm orientation sessions for new cohorts",conversations:[{id:"conv-064",contactName:"Gabriela Reyes",outcome:"goal_achieved",summary:"Gabriela confirmed her orientation slot.",thread:[{role:"agent",content:"Hi Gabriela! Welcome again. I'm scheduling orientation for April 14 at 9AM. Does that time work for you?"},{role:"user",content:"Yes that works!"},{role:"agent",content:"Great, invite sent. See you there!"}]},{id:"conv-065",contactName:"Theo Whitfield",outcome:"goal_achieved",summary:"Theo accepted the orientation invite.",thread:[{role:"agent",content:"Hi Theo! Orientation for your cohort is April 14, 9AM. Good to go?"},{role:"user",content:"All set."}]}],outcomeSummaryFull:"Orientation scheduled for April cohort on April 14 at 9AM. Gabriela Reyes and Theo Whitfield confirmed.",feedback:"up"},{id:"exec-036",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-007",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-11T14:30:00Z",trigger:{id:"trig-036",label:"Week-2 new hire check-in",type:"scheduled"},workflow:he[4],steps:[{offsetMs:0,description:"Week-2 check-in triggered",toolCategory:"scheduling"},{offsetMs:400,description:"Pulled progress status for each new hire",toolCategory:"data_cleanup"},{offsetMs:1100,description:"Sent check-in messages via chat",toolCategory:"communication",channel:"chat"}],durationMs:1700,creditsUsed:270,goal:"Check in with new hires 2 weeks in to surface blockers",conversations:[{id:"conv-066",contactName:"Aisha Mahmoud",outcome:"goal_achieved",summary:"Aisha reported a smooth onboarding so far.",thread:[{role:"agent",content:"Hi Aisha! It's been two weeks — how's it going? Anything you're stuck on?"},{role:"user",content:"Going great! My team has been super welcoming. No blockers."},{role:"agent",content:"Wonderful! I'll check back at the 30-day mark. Let me know anytime if something comes up."}]},{id:"conv-067",contactName:"Ryan Brooks",outcome:"goal_achieved",summary:"Ryan flagged a software access issue that Onbi routed to IT.",thread:[{role:"agent",content:"Hi Ryan, it's been 2 weeks — how are things going?"},{role:"user",content:"Pretty good. One thing: I still don't have access to the analytics tool."},{role:"agent",content:"Let me get that routed to IT right now. You should have access by end of day."},{role:"user",content:"Thanks!"}]}],outcomeSummaryFull:"Week-2 check-ins with 2 new hires. Aisha Mahmoud: smooth start, no blockers. Ryan Brooks: analytics tool access ticket created with IT.",feedback:null},{id:"exec-037",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-009",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-06T07:30:00Z",trigger:{id:"trig-037",label:"Weekly onboarding checklist audit",type:"scheduled"},workflow:he[4],steps:[{offsetMs:0,description:"Checklist audit started",toolCategory:"scheduling"},{offsetMs:1e3,description:"Reviewed 22 active onboarding plans",toolCategory:"data_cleanup"},{offsetMs:3100,description:"19 on-track, 3 behind schedule",toolCategory:"data_cleanup"},{offsetMs:4e3,description:"Generated audit summary",toolCategory:"data_cleanup"}],durationMs:4600,creditsUsed:5990,status:"success",goal:"Track onboarding progress across all active new hires",outcomeSummaryFull:"Audited 22 active onboarding plans. 19 on-track, 3 behind schedule (>3 days stale). Summary emailed to people-ops lead.",feedback:null},{id:"exec-038",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-13T07:00:00Z",trigger:{id:"trig-038",label:"Ponder flagged upcoming I-9 deadlines",type:"ai_suggestion"},workflow:he[5],steps:[{offsetMs:0,description:"Document validation sweep started",toolCategory:"scheduling"},{offsetMs:1200,description:"Cross-checked I-9 expirations against current employees",toolCategory:"data_cleanup"},{offsetMs:2800,description:"Found 4 records with re-verification due in 30 days",toolCategory:"data_cleanup"},{offsetMs:3700,description:"Generated re-verification task list for HR",toolCategory:"data_cleanup"}],durationMs:4200,creditsUsed:6470,status:"success",goal:"Catch expiring work authorizations before they lapse",outcomeSummaryFull:"Ponder flagged upcoming I-9 deadlines. Sweep found 4 employees whose work authorization re-verification is due in the next 30 days. Task list created for HR.",feedback:"up"},{id:"exec-039",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-14T07:45:00Z",trigger:{id:"trig-039",label:"Monthly compliance status check",type:"scheduled"},workflow:he[5],steps:[{offsetMs:0,description:"Compliance check started",toolCategory:"scheduling"},{offsetMs:1500,description:"Processed 40 of 68 training compliance records",toolCategory:"data_cleanup"},{offsetMs:3600,description:"LMS API rate limit hit — paused before completion",toolCategory:"data_cleanup"}],durationMs:3900,creditsUsed:4090,status:"incomplete",goal:"Verify all employees meet monthly compliance training requirements",outcomeSummaryFull:"Compliance status check processed 40 of 68 records before the LMS API rate limit blocked further reads. Remaining 28 will retry tonight.",feedback:null},{id:"exec-040",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-03T11:15:00Z",trigger:{id:"trig-040",label:"Inbound chat — how-to question",type:"inbound_message"},workflow:he[6],steps:[{offsetMs:0,description:"Inbound chat received",toolCategory:"communication"},{offsetMs:500,description:"Looked up related FAQ articles",toolCategory:"data_cleanup"},{offsetMs:1200,description:"Responded with walkthrough",toolCategory:"communication",channel:"chat"}],durationMs:1800,creditsUsed:200,goal:"Answer product how-to questions quickly using FAQ knowledge",conversations:[{id:"conv-068",contactName:"Harper Stone",outcome:"goal_achieved",summary:"Harper learned how to invite team members to a shared workspace.",thread:[{role:"agent",content:"Hi Harper! Happy to help — what are you trying to do?"},{role:"user",content:"How do I invite people to my workspace?"},{role:"agent",content:"Go to Settings > Members, click “Invite”, and enter their email. They'll get a link to join. You can also set their role there."},{role:"user",content:"Got it, thanks!"}]}],outcomeSummaryFull:"Harper Stone asked how to invite team members. Cassie walked through the Settings > Members flow. Resolved in chat.",feedback:"up"},{id:"exec-041",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-05T15:50:00Z",trigger:{id:"trig-041",label:"Refund request ticket",type:"ticket_created"},workflow:he[6],steps:[{offsetMs:0,description:"Refund ticket received",toolCategory:"communication"},{offsetMs:500,description:"Pulled customer billing history",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Issued pro-rated refund",toolCategory:"data_cleanup"},{offsetMs:2200,description:"Emailed confirmation",toolCategory:"communication",channel:"email"}],durationMs:2800,creditsUsed:320,goal:"Process straightforward refund requests same-day within policy",conversations:[{id:"conv-069",contactName:"Mira Okonkwo",outcome:"goal_achieved",summary:"Mira received a pro-rated refund for canceling her annual plan early.",thread:[{role:"agent",content:"Hi Mira, I see you're canceling and requesting a refund. Since you're 4 months into your annual plan, you're eligible for a pro-rated refund of $319.92."},{role:"user",content:"Sounds fair. Please process it."},{role:"agent",content:"Done! Refund of $319.92 will hit your card in 3-5 business days. Sorry to see you go — best of luck!"}]}],outcomeSummaryFull:"Processed pro-rated refund of $319.92 for Mira Okonkwo's annual plan cancellation. Confirmation emailed.",feedback:null},{id:"exec-042",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-08T09:30:00Z",trigger:{id:"trig-042",label:"Bug report from enterprise account",type:"ticket_created"},workflow:he[6],steps:[{offsetMs:0,description:"Bug report received",toolCategory:"communication"},{offsetMs:500,description:"Reproduced issue in staging",toolCategory:"data_cleanup"},{offsetMs:2200,description:"Filed engineering ticket",toolCategory:"data_cleanup"},{offsetMs:3100,description:"Updated customer via chat",toolCategory:"communication",channel:"chat"}],durationMs:3800,creditsUsed:440,goal:"Triage and file bug reports with enough detail for engineering",conversations:[{id:"conv-070",contactName:"Logan Pierce",outcome:"in_progress",summary:"Logan's chart rendering bug was reproduced and filed with engineering.",thread:[{role:"agent",content:"Hi Logan, thanks for the detailed bug report on the chart rendering. I was able to reproduce it — looks like it's triggered by datasets over 10k rows."},{role:"user",content:"Yeah we hit that threshold yesterday. Any ETA?"},{role:"agent",content:"I've filed ENG-4812 with priority P2. Expected fix in the next release. I'll keep you posted."},{role:"user",content:"Thanks!"}]}],outcomeSummaryFull:"Reproduced Logan Pierce's chart rendering bug at >10k rows. Filed ENG-4812 at P2. Customer updated with timeline.",feedback:null},{id:"exec-043",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-10T12:45:00Z",trigger:{id:"trig-043",label:"Account question from customer chat",type:"inbound_message"},workflow:he[6],steps:[{offsetMs:0,description:"Inbound chat received",toolCategory:"communication"},{offsetMs:400,description:"Reviewed account settings",toolCategory:"data_cleanup"},{offsetMs:1300,description:"Walked customer through the change",toolCategory:"communication",channel:"chat"}],durationMs:1900,creditsUsed:230,goal:"Help customers manage account details and settings",conversations:[{id:"conv-071",contactName:"Tessa Alvarado",outcome:"goal_achieved",summary:"Tessa updated her billing email successfully.",thread:[{role:"agent",content:"Hi Tessa! How can I help?"},{role:"user",content:"I need to change the email invoices go to."},{role:"agent",content:"Go to Billing > Contacts > Edit, then enter the new email. Want me to walk through it with you?"},{role:"user",content:"I found it — thanks, updated!"},{role:"agent",content:"Great! Next invoice will go to the new address."}]},{id:"conv-072",contactName:"Jin Park",outcome:"goal_achieved",summary:"Jin changed his workspace name with Cassie's guidance.",thread:[{role:"agent",content:"Hi Jin, what do you need help with?"},{role:"user",content:"Renaming my workspace. Where do I do that?"},{role:"agent",content:"Settings > Workspace > rename field at the top. Save and it'll update everywhere."},{role:"user",content:"Done. Thanks!"}]}],outcomeSummaryFull:"Helped 2 customers: Tessa Alvarado updated billing email; Jin Park renamed his workspace. Both resolved in chat.",feedback:null},{id:"exec-044",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"ponder",timestamp:"2026-04-12T10:00:00Z",trigger:{id:"trig-044",label:"Ponder detected cluster of duplicate FAQ questions",type:"ai_suggestion"},workflow:he[6],steps:[{offsetMs:0,description:"Ponder clustered 5 duplicate questions",toolCategory:"data_cleanup"},{offsetMs:600,description:"Drafted answer and reference link",toolCategory:"data_cleanup"},{offsetMs:1400,description:"Replied to affected users via email",toolCategory:"communication",channel:"email"}],durationMs:2e3,creditsUsed:290,goal:"Batch-resolve common FAQ questions efficiently",conversations:[{id:"conv-073",contactName:"Sasha Bellamy",outcome:"goal_achieved",summary:"Sasha got the SSO setup guide and confirmed completion.",thread:[{role:"agent",content:"Hi Sasha! I saw your question about SSO. Here's our updated setup guide that walks through Okta, Azure AD, and Google: [link]."},{role:"user",content:"Thanks, this is exactly what I needed."},{role:"agent",content:"Glad it helped! Ping me if you hit anything weird during setup."}]},{id:"conv-074",contactName:"Marcus Lin",outcome:"completed_no_action",summary:"Marcus already figured it out on his own but appreciated the link.",thread:[{role:"agent",content:"Hi Marcus, about your SSO question — here's the updated setup guide: [link]."},{role:"user",content:"Oh I worked it out last night, but thanks!"}]},{id:"conv-075",contactName:"Naomi Hughes",outcome:"in_progress",summary:"Naomi is still working through SSO config with her IT team.",thread:[{role:"agent",content:"Hi Naomi, saw your SSO question. Here's the setup guide: [link]. Let me know if you run into anything."},{role:"user",content:"Thanks, our IT is reviewing. Will follow up if we're stuck."}]}],outcomeSummaryFull:"Ponder clustered 3 SSO setup questions. Cassie proactively shared the updated guide. Sasha Bellamy resolved; Marcus Lin already done; Naomi Hughes in progress with IT.",feedback:"up"},{id:"exec-045",specialistId:"persona-004",personaName:"Cassie",deploymentId:"dep-010",deploymentType:"engage",activatedBy:"workflow",timestamp:"2026-04-13T16:20:00Z",trigger:{id:"trig-045",label:"Feature request submitted via in-app form",type:"form_submission"},workflow:he[6],steps:[{offsetMs:0,description:"Feature request received",toolCategory:"communication"},{offsetMs:500,description:"Logged in product feedback tracker",toolCategory:"data_cleanup"},{offsetMs:1100,description:"Thanked customer and explained next steps",toolCategory:"communication",channel:"email"}],durationMs:1700,creditsUsed:190,goal:"Route product feedback to the right team and close the loop with customers",conversations:[{id:"conv-076",contactName:"Owen Barrett",outcome:"goal_achieved",summary:"Owen got confirmation his feature request was logged for review.",thread:[{role:"agent",content:"Hi Owen! Thanks for the thoughtful request on custom export templates — I've logged it in our feedback tracker for the product team to review."},{role:"user",content:"Appreciate you taking it seriously. Any chance it'll be considered?"},{role:"agent",content:"The product team reviews requests monthly. I'll tag you when there's an update so you'll know either way."}]}],outcomeSummaryFull:"Owen Barrett's feature request (custom export templates) logged in product feedback tracker. Customer notified of the monthly review cadence.",feedback:null},{id:"exec-046",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-02T03:30:00Z",trigger:{id:"trig-046",label:"Nightly ETL validation run",type:"scheduled"},workflow:he[7],steps:[{offsetMs:0,description:"ETL validation started",toolCategory:"scheduling"},{offsetMs:2400,description:"Compared source vs warehouse row counts",toolCategory:"data_cleanup"},{offsetMs:5600,description:"Row counts match across 14 tables",toolCategory:"data_cleanup"},{offsetMs:7800,description:"Spot-checked 6 sampled columns for drift",toolCategory:"data_cleanup"},{offsetMs:9600,description:"Posted green-light summary",toolCategory:"communication",channel:"chat"}],durationMs:10200,creditsUsed:15200,status:"success",goal:"Verify nightly ETL completed correctly before downstream jobs run",outcomeSummaryFull:"Nightly ETL validation green across 14 tables. Row counts match source; sampled columns show no drift. Downstream reports cleared to run.",feedback:"up"},{id:"exec-047",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-04-04T02:00:00Z",trigger:{id:"trig-047",label:"Ponder suggested PII scan after schema change",type:"ai_suggestion"},workflow:he[7],steps:[{offsetMs:0,description:"PII scan started after schema change",toolCategory:"scheduling"},{offsetMs:3400,description:"Scanned 28 newly added columns",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Flagged 3 columns as likely PII (email, phone, DOB)",toolCategory:"data_cleanup"},{offsetMs:9600,description:"Applied masking policy to flagged columns",toolCategory:"data_cleanup"},{offsetMs:10800,description:"Logged compliance action in audit trail",toolCategory:"data_cleanup"}],durationMs:11400,creditsUsed:19240,status:"success",goal:"Detect and protect newly introduced PII columns automatically",outcomeSummaryFull:"Post-schema PII scan of 28 new columns. Flagged 3 as PII (email, phone, DOB) and applied masking policy. Audit trail updated.",feedback:"up"},{id:"exec-048",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-09T02:30:00Z",trigger:{id:"trig-048",label:"Nightly null normalization",type:"scheduled"},workflow:he[8],steps:[{offsetMs:0,description:"Null normalization job started",toolCategory:"scheduling"},{offsetMs:2100,description:"Scanned 4,200 records for string “null” / empty / N/A values",toolCategory:"data_cleanup"},{offsetMs:5400,description:"Normalized 312 records to SQL NULL",toolCategory:"data_cleanup"},{offsetMs:7200,description:"Re-ran downstream aggregations",toolCategory:"data_cleanup"}],durationMs:7900,creditsUsed:10190,status:"success",goal:"Normalize inconsistent null representations across tables",outcomeSummaryFull:"Nightly null normalization: scanned 4,200 records, converted 312 inconsistent null representations to SQL NULL, and re-ran downstream aggregations.",feedback:null},{id:"exec-049",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-11T07:30:00Z",trigger:{id:"trig-049",label:"Monthly ops report generation",type:"scheduled"},workflow:he[9],steps:[{offsetMs:0,description:"Monthly report generation started",toolCategory:"scheduling"},{offsetMs:1200,description:"Aggregated metrics from 8 data sources",toolCategory:"data_cleanup"},{offsetMs:3600,description:"Computed month-over-month trends",toolCategory:"data_cleanup"},{offsetMs:4800,description:"Generated formatted PDF and distribution list email",toolCategory:"communication",channel:"email"}],durationMs:5400,creditsUsed:8900,status:"success",goal:"Deliver the monthly operations report to executive distribution",outcomeSummaryFull:"Monthly ops report generated from 8 sources, MoM trends computed, PDF distributed to executive list.",feedback:null},{id:"exec-050",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-04-15T02:45:00Z",trigger:{id:"trig-050",label:"Nightly record cleanup",type:"scheduled"},workflow:he[8],steps:[{offsetMs:0,description:"Cleanup job started",toolCategory:"scheduling"},{offsetMs:2800,description:"Processed 1,600 of 3,200 records",toolCategory:"data_cleanup"},{offsetMs:6100,description:"Job still running at scheduled checkpoint",toolCategory:"data_cleanup"}],durationMs:6400,creditsUsed:6860,status:"in_progress",goal:"Clean up stale and malformed contact records nightly",outcomeSummaryFull:"Nightly cleanup job processed 1,600 of 3,200 records before the reporting checkpoint. Remaining records will complete in the continuation run.",feedback:null},{id:"exec-h01",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-01-09T03:00:00Z",trigger:{id:"trig-h01",label:"Weekly data audit",type:"scheduled"},workflow:he[7],steps:[{offsetMs:0,description:"Weekly audit batch",toolCategory:"data_cleanup"}],durationMs:5400,creditsUsed:14200,status:"success",goal:"Audit records weekly",outcomeSummaryFull:"Weekly audit completed.",feedback:"up"},{id:"exec-h02",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-01-17T11:20:00Z",trigger:{id:"trig-h02",label:"Document collection batch",type:"scheduled"},workflow:he[5],steps:[{offsetMs:0,description:"Collected onboarding docs",toolCategory:"data_cleanup"}],durationMs:4200,creditsUsed:16500,status:"success",goal:"Collect onboarding documents",outcomeSummaryFull:"All outstanding documents collected.",feedback:"up"},{id:"exec-h03",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-01-26T18:45:00Z",trigger:{id:"trig-h03",label:"Record cleanup",type:"scheduled"},workflow:he[8],steps:[{offsetMs:0,description:"Deduped contact records",toolCategory:"data_cleanup"}],durationMs:5100,creditsUsed:14800,status:"success",goal:"Dedup contact records",outcomeSummaryFull:"Merged 48 duplicate records.",feedback:null},{id:"exec-h04",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-02-03T04:00:00Z",trigger:{id:"trig-h04",label:"Weekly data audit",type:"scheduled"},workflow:he[7],steps:[{offsetMs:0,description:"Weekly audit batch",toolCategory:"data_cleanup"}],durationMs:5600,creditsUsed:13700,status:"success",goal:"Audit records weekly",outcomeSummaryFull:"Weekly audit completed.",feedback:"up"},{id:"exec-h05",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-02-11T08:15:00Z",trigger:{id:"trig-h05",label:"Ops reporting",type:"scheduled"},workflow:he[9],steps:[{offsetMs:0,description:"Generated ops report",toolCategory:"data_cleanup"}],durationMs:4800,creditsUsed:15200,status:"success",goal:"Generate ops report",outcomeSummaryFull:"Report generated and distributed.",feedback:"up"},{id:"exec-h06",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-02-19T10:00:00Z",trigger:{id:"trig-h06",label:"Document collection batch",type:"scheduled"},workflow:he[5],steps:[{offsetMs:0,description:"Collected onboarding docs",toolCategory:"data_cleanup"}],durationMs:4100,creditsUsed:13400,status:"success",goal:"Collect onboarding documents",outcomeSummaryFull:"All outstanding documents collected.",feedback:null},{id:"exec-h07",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"ponder",timestamp:"2026-02-25T21:30:00Z",trigger:{id:"trig-h07",label:"Record cleanup",type:"scheduled"},workflow:he[8],steps:[{offsetMs:0,description:"Deduped contact records",toolCategory:"data_cleanup"}],durationMs:5200,creditsUsed:12900,status:"incomplete",goal:"Dedup contact records",outcomeSummaryFull:"Partial cleanup — 65% of batch processed.",feedback:null},{id:"exec-h08",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-011",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-05T03:00:00Z",trigger:{id:"trig-h08",label:"Weekly data audit",type:"scheduled"},workflow:he[7],steps:[{offsetMs:0,description:"Weekly audit batch",toolCategory:"data_cleanup"}],durationMs:5400,creditsUsed:17600,status:"success",goal:"Audit records weekly",outcomeSummaryFull:"Weekly audit completed.",feedback:"up"},{id:"exec-h09",specialistId:"persona-003",personaName:"Onbi",deploymentId:"dep-008",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-12T14:10:00Z",trigger:{id:"trig-h09",label:"Document collection batch",type:"scheduled"},workflow:he[5],steps:[{offsetMs:0,description:"Collected onboarding docs",toolCategory:"data_cleanup"}],durationMs:4400,creditsUsed:18300,status:"success",goal:"Collect onboarding documents",outcomeSummaryFull:"All outstanding documents collected.",feedback:"up"},{id:"exec-h10",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-012",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-21T19:50:00Z",trigger:{id:"trig-h10",label:"Record cleanup",type:"scheduled"},workflow:he[8],steps:[{offsetMs:0,description:"Deduped contact records",toolCategory:"data_cleanup"}],durationMs:5300,creditsUsed:16800,status:"success",goal:"Dedup contact records",outcomeSummaryFull:"Merged 53 duplicate records.",feedback:null},{id:"exec-h11",specialistId:"persona-005",personaName:"DataOps",deploymentId:"dep-013",deploymentType:"engage_less",activatedBy:"workflow",timestamp:"2026-03-28T22:00:00Z",trigger:{id:"trig-h11",label:"Ops reporting",type:"scheduled"},workflow:he[9],steps:[{offsetMs:0,description:"Generated ops report",toolCategory:"data_cleanup"}],durationMs:4900,creditsUsed:17400,status:"success",goal:"Generate ops report",outcomeSummaryFull:"Report generated and distributed.",feedback:"up"}],ql=[{personaId:"persona-001",period:"7d",triggersReceived:12,triggersExecuted:9},{personaId:"persona-001",period:"prior_7d",triggersReceived:10,triggersExecuted:7},{personaId:"persona-001",period:"all",triggersReceived:248,triggersExecuted:201},{personaId:"persona-002",period:"7d",triggersReceived:8,triggersExecuted:6},{personaId:"persona-002",period:"prior_7d",triggersReceived:11,triggersExecuted:9},{personaId:"persona-002",period:"all",triggersReceived:173,triggersExecuted:141},{personaId:"persona-003",period:"7d",triggersReceived:6,triggersExecuted:5},{personaId:"persona-003",period:"prior_7d",triggersReceived:4,triggersExecuted:3},{personaId:"persona-003",period:"all",triggersReceived:96,triggersExecuted:82},{personaId:"persona-004",period:"7d",triggersReceived:15,triggersExecuted:12},{personaId:"persona-004",period:"prior_7d",triggersReceived:13,triggersExecuted:10},{personaId:"persona-004",period:"all",triggersReceived:312,triggersExecuted:254},{personaId:"persona-005",period:"7d",triggersReceived:9,triggersExecuted:8},{personaId:"persona-005",period:"prior_7d",triggersReceived:7,triggersExecuted:7},{personaId:"persona-005",period:"all",triggersReceived:186,triggersExecuted:165}],Zn=new Date("2026-04-15T00:00:00Z");function eo(n,s=Zn){const a=s,i=new Date(s);return n==="24h"&&i.setHours(i.getHours()-24),n==="7d"&&i.setDate(i.getDate()-7),n==="30d"&&i.setDate(i.getDate()-30),n==="all"&&i.setFullYear(i.getFullYear()-1),{from:i,to:a}}function Va(n,s=Zn){const{from:a,to:i}=eo(n,s),c=i.getTime()-a.getTime();return{from:new Date(a.getTime()-c),to:a}}function Ln(n,s){return n.filter(a=>{const i=new Date(a.timestamp).getTime();return i>=s.from.getTime()&&i<s.to.getTime()})}function a2(n,s){return s===0&&n===0?null:s===0?100:(n-s)/s*100}function Vl(n){let s=0;for(const a of n)a.deploymentType==="engage_less"?a.status==="success"&&(s+=1):s+=a.conversations.filter(i=>i.outcome==="goal_achieved").length;return s}function Gl(n){let s=0;for(const a of n)a.deploymentType==="engage_less"?s+=1:s+=a.conversations.length;return s}const IT={chat:"Post to channel",email:"Send email",sms:"Send SMS"},NT={posted:"Post to channel",post:"Post to channel",shared:"Post to channel",share:"Post to channel",notified:"Send notification",notify:"Send notification",emailed:"Send email",email:"Send email",sent:"Send message",send:"Send message",routed:"Route notification",pinged:"Send notification",messaged:"Send message",delivered:"Deliver message",distributed:"Distribute report",forwarded:"Forward message",broadcast:"Broadcast message"},AT={scanned:"Scan records",scan:"Scan records",compared:"Compare records",compare:"Compare records",checked:"Check records","cross-checked":"Cross-check records","spot-checked":"Spot-check records",reviewed:"Review records",review:"Review records",found:"Detect anomalies",detected:"Detect anomalies",detect:"Detect anomalies",identified:"Identify candidates",identify:"Identify candidates",flagged:"Flag for review",flag:"Flag for review",queued:"Queue for review","auto-corrected":"Auto-correct fields",corrected:"Auto-correct fields","auto-resolved":"Auto-resolve",resolved:"Auto-resolve","auto-merged":"Auto-merge duplicates",merged:"Merge records",matched:"Reconcile records",reconciled:"Reconcile records",validated:"Validate document",validate:"Validate document",verified:"Verify records",verification:"Verify records",verify:"Verify records",generated:"Generate report",generate:"Generate report",updated:"Update record",received:"Receive request",saved:"Save record",archived:"Archive record",applied:"Apply rules",apply:"Apply rules",recalculated:"Recalculate values",attempted:"Reconcile records",analyzed:"Analyze data",analyze:"Analyze data",aggregated:"Aggregate data",aggregate:"Aggregate data",computed:"Compute metrics",compute:"Compute metrics",collected:"Collect data",collect:"Collect data",pulled:"Pull data",pull:"Pull data",processed:"Process records",process:"Process records",deduped:"Dedupe records",dedupe:"Dedupe records",normalized:"Normalize fields",normalize:"Normalize fields",logged:"Log audit trail",log:"Log audit trail",redacted:"Redact PII",redact:"Redact PII",audit:"Audit records",audited:"Audit records",reconciliation:"Reconcile records","re-ran":"Re-run job",rerun:"Re-run job",halted:"Halt run",waiting:"Await dependency",await:"Await dependency"},TT={triggered:"Trigger run",trigger:"Trigger run",started:"Initiate run",start:"Initiate run",initiated:"Initiate run",initiate:"Initiate run",fired:"Trigger run",scheduled:"Schedule job",schedule:"Schedule job",dispatched:"Dispatch job",enqueued:"Enqueue job",ponder:"Trigger run",flagged:"Trigger run"},LT=new Set(["a","an","the","all","and","or","of","to","for","with","in","on","at","by"]);function i2(n){const s=n.toolCategory==="communication"?NT:n.toolCategory==="data_cleanup"?AT:TT,a=n.description.toLowerCase().replace(/[#,.]/g," ").split(/\s+/).filter(i=>i&&!LT.has(i)&&!/^\d+%?$/.test(i));for(const i of a)if(s[i])return s[i];return n.toolCategory==="communication"?n.channel?IT[n.channel]:"Send notification":n.toolCategory==="scheduling"?"Schedule job":"Inspect data"}for(const n of Ps)if(n.deploymentType==="engage_less")for(const s of n.steps)s.tool==null&&(s.tool=i2(s));const ET={"wf-005":"Run onboarding checklist","wf-006":"Validate document","wf-007":"Triage ticket","wf-008":"Run data audit","wf-009":"Run dedupe job","wf-010":"Generate ops report"};function RT(n){var a;const s=ET[n.workflow.id];return s||(((a=n.steps[0])==null?void 0:a.tool)??i2(n.steps[0]??{description:"",toolCategory:"data_cleanup"}))}function $T(n){return n==="success"?"Succeeded":n==="in_progress"?"In Progress":"Failed"}const Ku={hourlyRate:30},Lo=[{workflowId:"wf-001",goal:"Help employees update their profile information accurately",avgManualDurationMs:9e5,sampleSize:45,source:"historical"},{workflowId:"wf-001",goal:"Help employees understand and submit leave requests accurately",avgManualDurationMs:12e5,sampleSize:28,source:"historical"},{workflowId:"wf-001",goal:"Proactively clarify confusing policies when multiple employees ask similar questions",avgManualDurationMs:15e5,sampleSize:18,source:"estimate"},{workflowId:"wf-002",goal:"Ensure all eligible employees complete benefits enrollment before the deadline",avgManualDurationMs:18e5,sampleSize:22,source:"historical"},{workflowId:"wf-002",goal:"Answer benefits policy questions accurately and promptly",avgManualDurationMs:12e5,sampleSize:36,source:"historical"},{workflowId:"wf-003",goal:"Find replacement coverage for open shifts as quickly as possible",avgManualDurationMs:24e5,sampleSize:38,source:"historical"},{workflowId:"wf-003",goal:"Proactively resolve scheduling conflicts before they cause coverage gaps",avgManualDurationMs:18e5,sampleSize:60,source:"historical"},{workflowId:"wf-003",goal:"Facilitate shift swaps between eligible employees",avgManualDurationMs:15e5,sampleSize:33,source:"historical"},{workflowId:"wf-003",goal:"Reconcile scheduled shifts with actual time-clock entries to detect discrepancies",avgManualDurationMs:27e5,sampleSize:14,source:"estimate"},{workflowId:"wf-003",goal:"Close predicted coverage gaps before the shift starts",avgManualDurationMs:15e5,sampleSize:21,source:"historical"},{workflowId:"wf-004",goal:"Notify employees of schedule changes and collect acknowledgments",avgManualDurationMs:6e5,sampleSize:52,source:"historical"},{workflowId:"wf-004",goal:"Make sure every employee acknowledges their upcoming schedule",avgManualDurationMs:9e5,sampleSize:27,source:"historical"},{workflowId:"wf-005",goal:"Guide new hires through their first-day onboarding checklist",avgManualDurationMs:21e5,sampleSize:19,source:"historical"},{workflowId:"wf-005",goal:"Follow up with new hires who have incomplete onboarding items from day 1",avgManualDurationMs:15e5,sampleSize:25,source:"historical"},{workflowId:"wf-005",goal:"Check in with new hires 2 weeks in to surface blockers",avgManualDurationMs:12e5,sampleSize:17,source:"historical"},{workflowId:"wf-005",goal:"Ensure onboarding checklists are completed within the target timeframe",avgManualDurationMs:18e5,sampleSize:11,source:"estimate"},{workflowId:"wf-006",goal:"Collect onboarding documents",avgManualDurationMs:18e5,sampleSize:24,source:"historical"},{workflowId:"wf-006",goal:"Verify all employees meet monthly compliance training requirements",avgManualDurationMs:36e5,sampleSize:12,source:"estimate"},{workflowId:"wf-006",goal:"Catch expiring work authorizations before they lapse",avgManualDurationMs:15e5,sampleSize:8,source:"estimate"},{workflowId:"wf-007",goal:"Respond to P1 tickets within 5 minutes and begin troubleshooting immediately",avgManualDurationMs:9e5,sampleSize:80,source:"historical"},{workflowId:"wf-007",goal:"Triage incoming support tickets and provide timely first responses",avgManualDurationMs:72e4,sampleSize:64,source:"historical"},{workflowId:"wf-007",goal:"Process straightforward refund requests same-day within policy",avgManualDurationMs:9e5,sampleSize:40,source:"historical"},{workflowId:"wf-007",goal:"Batch-resolve common FAQ questions efficiently",avgManualDurationMs:6e5,sampleSize:55,source:"historical"},{workflowId:"wf-007",goal:"Route product feedback to the right team and close the loop with customers",avgManualDurationMs:12e5,sampleSize:22,source:"historical"},{workflowId:"wf-008",goal:"Audit records weekly",avgManualDurationMs:54e5,sampleSize:20,source:"historical"},{workflowId:"wf-008",goal:"Identify and resolve data inconsistencies in HR employee records",avgManualDurationMs:45e5,sampleSize:18,source:"historical"},{workflowId:"wf-008",goal:"Identify and resolve data inconsistencies in employee records",avgManualDurationMs:45e5,sampleSize:16,source:"historical"},{workflowId:"wf-009",goal:"Dedup contact records",avgManualDurationMs:27e5,sampleSize:15,source:"historical"},{workflowId:"wf-009",goal:"Eliminate duplicate contact records to maintain data integrity",avgManualDurationMs:27e5,sampleSize:12,source:"historical"},{workflowId:"wf-009",goal:"Clean up orphaned records in the staging table",avgManualDurationMs:18e5,sampleSize:10,source:"historical"},{workflowId:"wf-009",goal:"Normalize inconsistent null representations across tables",avgManualDurationMs:3e6,sampleSize:9,source:"estimate"},{workflowId:"wf-010",goal:"Generate ops report",avgManualDurationMs:36e5,sampleSize:18,source:"historical"},{workflowId:"wf-010",goal:"Generate and distribute the weekly operations report to leadership",avgManualDurationMs:45e5,sampleSize:14,source:"historical"},{workflowId:"wf-010",goal:"Deliver the monthly operations report to executive distribution",avgManualDurationMs:54e5,sampleSize:6,source:"estimate"}];function l2(n,s,a){return n.find(i=>i.workflowId===s&&i.goal===a)}function B0(n,s=Lo,a=Ku){let i=0,c=0,u=0;for(const m of n){const y=l2(s,m.workflow.id,m.goal);if(m.deploymentType==="engage_less"){if(m.status!=="success")continue;if(!y){u+=1;continue}i+=Math.max(y.avgManualDurationMs-m.durationMs,0),c+=1}else{const x=m.conversations.filter(C=>C.outcome==="goal_achieved").length;if(x===0)continue;if(!y){u+=x;continue}const k=m.durationMs/Math.max(1,m.conversations.length),b=Math.max(y.avgManualDurationMs-k,0);i+=b*x,c+=x}}const g=i/36e5*a.hourlyRate;return{totalTimeSavedMs:i,costSaved:g,goalsWithBaseline:c,goalsWithoutBaseline:u}}function PT(n,s,a=Lo){const i={};for(const c of n){const u=l2(a,c.workflow.id,c.goal);if(!u)continue;let f=0;if(c.deploymentType==="engage_less"){if(c.status!=="success")continue;f=Math.max(u.avgManualDurationMs-c.durationMs,0)}else{const m=c.conversations.filter(x=>x.outcome==="goal_achieved").length;if(m===0)continue;const y=c.durationMs/Math.max(1,c.conversations.length);f=Math.max(u.avgManualDurationMs-y,0)*m}if(f<=0)continue;const g=s(c.timestamp);i[g]=(i[g]??0)+f}return i}function DT(n){return`${Math.round(n)}%`}function zT(n,s){if(n===0)return 0;const a=n/Math.max(1,s);return a<=.25?1:a<=.5?2:a<=.75?3:4}function H0(n){const s=Math.max(0,Math.min(100,n))/100,a=Math.round(140+-72*s),i=Math.round(79+29*s),c=Math.round(226+29*s);return`rgb(${a}, ${i}, ${c})`}function FT(n){return n==="all"?"month":"day"}function U0(n,s){return s==="month"?n.toISOString().slice(0,7):n.toISOString().slice(0,10)}function W0(n,s){return s==="month"?n.toLocaleDateString("en-US",{month:"short",year:"2-digit"}):n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function OT(n,s,a){const i=[],c=new Date(n),u=new Date(s);if(a==="month")for(c.setUTCDate(1),c.setUTCHours(0,0,0,0),u.setUTCDate(1),u.setUTCHours(0,0,0,0);c<=u;)i.push(new Date(c)),c.setUTCMonth(c.getUTCMonth()+1);else for(c.setUTCHours(0,0,0,0),u.setUTCHours(0,0,0,0);c<=u;)i.push(new Date(c)),c.setUTCDate(c.getUTCDate()+1);return i}function q0({current:n,prior:s,invertDirection:a=!1}){const i=a2(n,s);if(i===null)return null;const c=i>0,u=c?"up":"down",f=a?!c:c,g=Math.abs(i)<.5?void 0:f?"positive":"negative",m=`${i>0?"+":""}${Math.abs(i).toFixed(1)}%`;return e.jsx(Jl,{mode:"trend",value:m,trend:u,severity:g})}const BT=h.div`
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
`;const V0=h.div`
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
`;const G0=h.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  background: ${n=>n.$secondary?"var(--color-bg-secondary, #f6f7f9)":"var(--color-bg-primary, #fff)"};
`,Z0=h.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-primary, #151515);
`,Y0=h.p`
  margin: 0;
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,HT=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-size: 13px;
  color: var(--color-content-tertiary, #87919f);
`,UT=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-4, 16px);
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,K0=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3, 12px);
  flex-wrap: wrap;
`,WT=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,qT=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,VT=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,GT=h.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 12px;
  flex: 1 1 auto;
  gap: 3px;
  background: var(--color-bg-tertiary);
  border-radius: 0;
  overflow: hidden;
`,ZT=h.div`
  width: ${n=>n.$pct}%;
  background: linear-gradient(to right, ${n=>n.$gradientStart}, ${n=>n.$gradientEnd});
  border-radius: 2px;
  opacity: ${n=>n.$muted?.2:1};
  transition: background 120ms ease, opacity 120ms ease, width 150ms ease;
  cursor: default;
  &:hover {
    background: ${n=>n.$color};
    opacity: 1;
  }
`,Rp=["var(--color-bg-tertiary, #f1f2f4)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%))"],YT=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
`,KT=h.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
`,QT=h.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 14px);
  grid-auto-columns: 14px;
  gap: 3px;
  flex-shrink: 0;
`,XT=h.div`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: ${n=>Rp[n.$level]};
  transition: background 120ms ease;
`,JT=h.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: flex-end;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 12px);
  color: var(--color-content-tertiary);
  margin-top: var(--space-2, 8px);
`,$a=h.span`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${n=>Rp[n.$level]};
`,Q0=h.div`
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
`,X0=h.span`
  font-size: var(--text-xs, 12px);
  color: rgba(255, 255, 255, 0.65);
`,J0=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-bg-always-light, #fff);
`,em=h.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${n=>n.$color};
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
  color: ${n=>n.$color};
`;function eL(){return e.jsx("svg",{width:"0",height:"0",style:{position:"absolute",width:0,height:0},"aria-hidden":"true",children:e.jsx("defs",{children:e.jsxs("linearGradient",{id:"ai-gradient-stroke",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:"#8c4fe2"}),e.jsx("stop",{offset:"100%",stopColor:"#446cff"})]})})})}function tL({personaId:n}){const[s]=v.useState("7d"),[a,i]=v.useState("7d"),[c,u]=v.useState(null),[f,g]=v.useState(null),m=v.useMemo(()=>Ps.filter(K=>K.specialistId===n),[n]),y=eo(s),x=Va(s),k=v.useMemo(()=>Ln(m,y),[m,s]),b=v.useMemo(()=>Ln(m,x),[m,s]),C=eo(a),L=Va(a),S=v.useMemo(()=>Ln(m,C),[m,a]),I=v.useMemo(()=>Ln(m,L),[m,a]),M=v.useMemo(()=>{let K=0,Y=0,J=0;for(const B of S)if(B.deploymentType==="engage")for(const $ of B.conversations)$.outcome==="goal_achieved"?K++:$.outcome==="completed_no_action"?Y++:$.outcome==="in_progress"&&J++;else B.status==="success"?K++:B.status==="incomplete"?Y++:B.status==="in_progress"&&J++;const q=K+Y+J;return{achieved:K,completedNoAction:Y,inProgress:J,total:q}},[S]),N=v.useMemo(()=>{const Y={};for(const te of m){const re=new Date(te.timestamp).toISOString().slice(0,10);Y[re]=(Y[re]??0)+1}const J=new Date(Zn);J.setUTCHours(0,0,0,0),J.setUTCDate(J.getUTCDate()+(6-J.getUTCDay()));const q=new Date(J);q.setUTCDate(q.getUTCDate()-363);const B=[],$=new Date(q);for(;$<=J;){const te=$.toISOString().slice(0,10);B.push({date:new Date($),iso:te,count:Y[te]??0}),$.setUTCDate($.getUTCDate()+1)}const A=[];for(let te=0;te<B.length;te+=7)A.push(B.slice(te,te+7));const P=Math.max(1,...B.map(te=>te.count));return{weeks:A,maxCount:P}},[m]),j=s,_=`prior_${s}`,E=ql.find(K=>K.personaId===n&&K.period===j),z=ql.find(K=>K.personaId===n&&K.period===_);E&&E.triggersReceived>0&&E.triggersExecuted/E.triggersReceived*100,z&&z.triggersReceived>0&&z.triggersExecuted/z.triggersReceived*100;const R=Vl(S),F=Vl(I),X=Gl(S),Z=Gl(I);k.filter(K=>K.steps.some(Y=>Y.toolCategory==="communication"&&Y.channel==="chat")).length,k.filter(K=>K.steps.some(Y=>Y.toolCategory==="communication"&&(Y.channel==="email"||Y.channel==="sms"))).length,b.filter(K=>K.steps.some(Y=>Y.toolCategory==="communication"&&Y.channel==="chat")).length,b.filter(K=>K.steps.some(Y=>Y.toolCategory==="communication"&&(Y.channel==="email"||Y.channel==="sms"))).length,k.reduce((K,Y)=>K+Y.creditsUsed,0),b.reduce((K,Y)=>K+Y.creditsUsed,0);const V=X>0?R/X*100:0,U=Z>0?F/Z*100:0,{rangeData:H,activeDays:ne}=v.useMemo(()=>{const K=FT(s),Y={};for(const $ of k){const A=U0(new Date($.timestamp),K);Y[A]||(Y[A]=[]),Y[A].push($.creditsUsed)}const q=OT(y.from,y.to,K).map($=>{const A=U0($,K),P=Y[A]??[];return P.length===0?{label:W0($,K),min:0,max:0,count:0,hasData:!1}:{label:W0($,K),min:Math.min(...P),max:Math.max(...P),count:P.length,hasData:!0}}),B=q.filter($=>$.hasData).length;return{rangeData:q,activeDays:B}},[k,s]);return e.jsxs(BT,{children:[e.jsx(eL,{}),e.jsxs(UT,{children:[e.jsxs(G0,{$secondary:!0,children:[e.jsxs(V0,{children:[e.jsxs("div",{children:[e.jsx(Z0,{children:"Success Rate"}),e.jsx(Y0,{children:"Breakdown by Achieved, Completed No Action, and In Progress"})]}),e.jsxs(tt,{value:a,onChange:K=>i(K),size:"sm",children:[e.jsx(tt.Item,{value:"24h",children:"24h"}),e.jsx(tt.Item,{value:"7d",children:"7d"}),e.jsx(tt.Item,{value:"30d",children:"30d"}),e.jsx(tt.Item,{value:"all",children:"All"})]})]}),M.total===0?e.jsx(HT,{children:"No goals in this period"}):(()=>{const K=M.achieved/M.total*100,Y=M.completedNoAction/M.total*100,J=M.inProgress/M.total*100,q=[{label:"Goal Achieved",value:M.achieved,color:"var(--Alloy-green-500)",pct:K,startPct:0,endPct:K,muted:!1},{label:"Completed No Action",value:M.completedNoAction,color:"var(--Alloy-slate-400, #9ca3af)",pct:Y,startPct:K,endPct:K+Y,muted:!0},{label:"In Progress",value:M.inProgress,color:"var(--Alloy-blue-500, #446cff)",pct:J,startPct:K+Y,endPct:K+Y+J,muted:!0}];return e.jsxs(e.Fragment,{children:[e.jsxs(K0,{children:[e.jsx(VT,{children:DT(V)}),e.jsx(q0,{current:V,prior:U})]}),e.jsx(GT,{role:"img","aria-label":`Goals by outcome: ${M.achieved} achieved, ${M.completedNoAction} completed with no action, ${M.inProgress} in progress`,onMouseLeave:()=>u(null),children:q.map(B=>e.jsx(ZT,{$pct:B.pct,$color:B.color,$gradientStart:H0(B.startPct),$gradientEnd:H0(B.endPct),$muted:B.muted,onMouseMove:$=>u({x:$.clientX,y:$.clientY,label:B.label,value:B.value,color:B.color})},B.label))})]})})()]}),e.jsxs(G0,{children:[e.jsx(V0,{children:e.jsxs("div",{children:[e.jsx(Z0,{children:"Specialist Activations"}),e.jsx(Y0,{children:"Daily activity over the past year"})]})}),e.jsxs(K0,{children:[e.jsx(WT,{children:((E==null?void 0:E.triggersExecuted)??0).toLocaleString("en-US")}),e.jsx(qT,{children:"Activations"}),e.jsx(q0,{current:(E==null?void 0:E.triggersExecuted)??0,prior:(z==null?void 0:z.triggersExecuted)??0})]}),e.jsxs(YT,{children:[e.jsx(KT,{children:e.jsx(QT,{role:"img","aria-label":`Daily activations heatmap with max ${N.maxCount} in a single day`,onMouseLeave:()=>g(null),children:N.weeks.flatMap((K,Y)=>K.map((J,q)=>{const B=zT(J.count,N.maxCount),$=J.date.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return e.jsx(XT,{$level:B,onMouseMove:A=>g({x:A.clientX,y:A.clientY,label:$,value:J.count,color:Rp[B]})},`${Y}-${q}`)}))})}),e.jsxs(JT,{children:[e.jsx("span",{children:"Less"}),e.jsx($a,{$level:0}),e.jsx($a,{$level:1}),e.jsx($a,{$level:2}),e.jsx($a,{$level:3}),e.jsx($a,{$level:4}),e.jsx("span",{children:"More"})]})]})]})]}),c&&e.jsxs(Q0,{style:{left:c.x,top:c.y},children:[e.jsx(X0,{children:c.label}),e.jsxs(J0,{children:[e.jsx(em,{$color:c.color}),c.value]})]}),f&&e.jsxs(Q0,{style:{left:f.x,top:f.y},children:[e.jsx(X0,{children:f.label}),e.jsxs(J0,{children:[e.jsx(em,{$color:f.color}),f.value," activation",f.value===1?"":"s"]})]})]})}const $p=new Date("2026-04-15T00:00:00Z");function Pp(n){return new Date(n).toLocaleString("en-US",{month:"numeric",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0})}function nL(n){const s=new Date(n),a=$p.getTime()-s.getTime(),i=Math.round(a/6e4),c=Math.round(a/36e5),u=Math.round(a/864e5);return a<6e4?"Just now":i<60?`${i} min ago`:c<24?c===1?"1 hour ago":`${c} hours ago`:u<7?u===1?"1 day ago":`${u} days ago`:s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function rL(n){return n.toLocaleString("en-US")}function oL(n){let s=0;for(let i=0;i<n.length;i++)s=s*31+n.charCodeAt(i)|0;return`https://i.pravatar.cc/48?img=${Math.abs(s)%70+1}`}const sL=h.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,aL=h.div`
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
    width: ${n=>(94/(n.$columnCount+1)).toFixed(4)}%;
  }
  & > table > thead > tr > th:nth-last-child(3),
  & > table > tbody > tr > td:nth-last-child(3) {
    width: ${n=>(94/(n.$columnCount+1)*3).toFixed(4)}%;
  }
  & > table > thead > tr > th:nth-last-child(2),
  & > table > tbody > tr > td:nth-last-child(2) {
    width: 6%;
  }
`,iL=h.tr`
  background: var(--color-bg-primary, #fff);
`,lL=h.td`
  text-align: center;
  color: var(--color-content-tertiary, #87919f);
  padding: 32px 16px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
`,to=h.div`
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
`;const cL=h.a`
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
`,dL=h(oo)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,uL=h.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--color-bg-tertiary, #f1f2f4);
`,pL=h.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,hL=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  min-width: 0;
`,Dp=h.button`
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
`;const c2=h.td`
  padding: var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  vertical-align: top;
`,d2=h.div`
  display: grid;
  grid-template-columns: ${n=>n.$stacked?"1fr":"1fr 1fr"};
  gap: var(--space-6, 24px);
  align-items: start;
`,u2=h.td`
  padding: 0 var(--space-6, 24px) var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
`,Zl=h.p`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-content-secondary, #475569);
`,fL=h.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  /* Fixed-width tags so ✓, single digits, and double digits all align */
  & > span {
    min-width: 28px;
    justify-content: center;
    text-align: center;
  }
`,p2=h.button`
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
`,h2=h.div`
  background: var(--color-bg-tertiary, #f1f2f4);
  border-radius: var(--radius-md, 8px);
  padding: var(--space-4, 16px);
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-content-secondary, #475569);
  white-space: pre-wrap;
`,f2=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`,m2=h.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,g2=h.div`
  /* Override alloy table backgrounds so the conversations table blends with the expanded row bg */
  table, thead, tbody, tr, th, td {
    background: transparent !important;
  }
`,mL=h.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`,gL=h.li`
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
`,vL=h.span`
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 11px;
  color: var(--color-content-tertiary, #87919f);
  white-space: nowrap;
  text-align: left;
`,xL=h.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-content-secondary, #475569);
`,yL=h(mL)`
  padding-left: 56px;
`;function wL({record:n}){const[s,a]=v.useState(!1),i=RT(n),c=$T(n.status),u=n.status==="success"?"success":n.status==="in_progress"?"info":"error";return e.jsx(g2,{children:e.jsxs(ni,{size:"sm",children:[e.jsx(ri,{children:e.jsxs(dr,{hoverable:!1,children:[e.jsx(tn,{children:"Tool"}),e.jsx(tn,{children:"Outcome"})]})}),e.jsxs(oi,{children:[e.jsxs(dr,{children:[e.jsx(Qt,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},onClick:()=>a(f=>!f),role:"button","aria-expanded":s,children:[e.jsx(Dp,{as:"span",style:{cursor:"inherit"},children:s?e.jsx(nn,{size:12}):e.jsx(Jn,{size:12})}),e.jsx(oo,{children:i})]})}),e.jsx(Qt,{children:e.jsx(ro,{size:"sm",status:u,children:c})})]}),s&&e.jsx("tr",{children:e.jsx("td",{colSpan:2,style:{padding:"8px 16px 16px"},children:e.jsx(bL,{children:n.outcomeSummaryFull})})})]})]})})}const bL=h.div`
  padding-left: 28px;
  font-size: var(--text-sm, 0.875rem);
  line-height: 1.5;
  color: var(--color-content-secondary, #475569);
`;function jL({thread:n}){return e.jsx(yL,{"aria-label":"Conversation turns",children:n.map((s,a)=>{const i=s.role==="agent";return e.jsxs(gL,{children:[e.jsx(vL,{children:i?"Agent":"User"}),e.jsx(xL,{children:s.content})]},a)})})}function kL({record:n}){if(n.deploymentType==="engage_less"){const u=n;return u.status==="success"?e.jsx(pt,{variant:"subtle",color:"green",size:"sm",children:e.jsx($n,{size:12})}):u.status==="in_progress"?e.jsx(pt,{variant:"subtle",color:"neutral",size:"sm",children:e.jsx($o,{size:12})}):null}const s=n,a=s.conversations.filter(u=>u.outcome==="goal_achieved").length,i=s.conversations.filter(u=>u.outcome==="completed_no_action").length,c=s.conversations.filter(u=>u.outcome==="in_progress").length;return e.jsxs(e.Fragment,{children:[c>0&&e.jsx(pt,{variant:"subtle",color:"blue",size:"sm",children:c}),i>0&&e.jsx(pt,{variant:"subtle",color:"neutral",size:"sm",children:i}),a>0&&e.jsx(pt,{variant:"subtle",color:"green",size:"sm",children:a}),a===0&&i===0&&c===0&&e.jsx(pt,{variant:"subtle",color:"neutral",size:"sm",children:"0"})]})}function _L({outcome:n}){switch(n){case"goal_achieved":return e.jsx(ro,{size:"sm",status:"success",children:"Goal Achieved"});case"completed_no_action":return e.jsx(ro,{size:"sm",status:"neutral",children:"Completed No Action"});case"in_progress":return e.jsx(ro,{size:"sm",status:"info",children:"In Progress"});default:return null}}function CL({record:n,mainColSpan:s,totalCols:a}){const[i,c]=v.useState(null),[u,f]=v.useState(!1),g=cc("(max-width: 1023px)"),m=Nr.find(b=>b.id===n.specialistId),y=b=>{c(C=>C===b?null:b)},x=e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[e.jsxs(to,{children:[e.jsx(Qn,{children:"Goal"}),e.jsx(Zl,{children:n.goal})]}),e.jsxs(to,{children:[e.jsx(Qn,{children:"Summary"}),e.jsx(Zl,{children:n.outcomeSummaryFull})]})]}),k=e.jsxs(to,{children:[e.jsx(Qn,{children:"Conversations"}),e.jsx(g2,{children:e.jsxs(ni,{size:"sm",children:[e.jsx(ri,{children:e.jsxs(dr,{hoverable:!1,children:[e.jsx(tn,{children:"User"}),e.jsx(tn,{children:"Outcome"})]})}),e.jsx(oi,{children:n.conversations.map(b=>e.jsxs(Rn.Fragment,{children:[e.jsxs(dr,{children:[e.jsx(Qt,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},onClick:()=>y(b.id),role:"button","aria-expanded":i===b.id,children:[e.jsx(Dp,{as:"span",style:{cursor:"inherit"},children:i===b.id?e.jsx(nn,{size:12}):e.jsx(Jn,{size:12})}),e.jsx(uL,{src:oL(b.contactName),alt:""}),e.jsx(oo,{children:b.contactName})]})}),e.jsx(Qt,{children:e.jsx(_L,{outcome:b.outcome})})]}),i===b.id&&e.jsx("tr",{children:e.jsx("td",{colSpan:2,style:{padding:"0 16px 16px"},children:e.jsx(jL,{thread:b.thread})})})]},b.id))})]})})]});return e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx(c2,{colSpan:a,children:e.jsxs(d2,{$stacked:g,children:[x,k]})})}),e.jsx("tr",{children:e.jsx(u2,{colSpan:a,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[e.jsxs(to,{children:[e.jsxs(p2,{onClick:()=>f(!u),children:[u?e.jsx(nn,{size:12}):e.jsx(Jn,{size:12}),"System Prompt"]}),u&&m&&e.jsx(h2,{children:m.configuration.instructions})]}),e.jsxs(f2,{children:[e.jsx(Ee,{size:"sm",variant:"secondary",leadingArtwork:e.jsx($o,{size:14}),onClick:()=>{},children:"Recalculate Outcome"}),e.jsxs(m2,{children:["Last calculated ",Pp($p.toISOString())]})]})]})})})]})}function SL({record:n,totalCols:s}){const[a,i]=v.useState(!1),c=cc("(max-width: 1023px)"),u=Nr.find(m=>m.id===n.specialistId),f=e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[e.jsxs(to,{children:[e.jsx(Qn,{children:"Goal"}),e.jsx(Zl,{children:n.goal})]}),e.jsxs(to,{children:[e.jsx(Qn,{children:"Summary"}),e.jsx(Zl,{children:n.outcomeSummaryFull})]})]}),g=e.jsxs(to,{children:[e.jsx(Qn,{children:"Tool calls"}),e.jsx(wL,{record:n})]});return e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx(c2,{colSpan:s,children:e.jsxs(d2,{$stacked:c,children:[f,g]})})}),e.jsx("tr",{children:e.jsx(u2,{colSpan:s,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6, 24px)"},children:[e.jsxs(to,{children:[e.jsxs(p2,{onClick:()=>i(!a),children:[a?e.jsx(nn,{size:12}):e.jsx(Jn,{size:12}),"System Prompt"]}),a&&u&&e.jsx(h2,{children:u.configuration.instructions})]}),e.jsxs(f2,{children:[e.jsx(Ee,{size:"sm",variant:"secondary",leadingArtwork:e.jsx($o,{size:14}),onClick:()=>{},children:"Recalculate Outcome"}),e.jsxs(m2,{children:["Last calculated ",Pp($p.toISOString())]})]})]})})})]})}function ML({record:n,expanded:s,onToggle:a,showPersonaColumn:i}){const c=n.deploymentType==="engage",u=i?6:5,f=u-1;return e.jsxs(e.Fragment,{children:[e.jsxs(dr,{hoverable:!0,children:[e.jsx(Qt,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(Dp,{"aria-label":s?"Collapse row":"Expand row","aria-expanded":s,onClick:a,children:s?e.jsx(nn,{size:14}):e.jsx(Jn,{size:14})}),e.jsx(oo,{variant:"secondary",title:Pp(n.timestamp),children:nL(n.timestamp)})]})}),i&&e.jsx(Qt,{children:e.jsxs(hL,{children:[e.jsx(pL,{"aria-hidden":"true",children:e.jsx(Wl,{personaName:n.personaName,size:24})}),e.jsx(oo,{children:n.personaName})]})}),e.jsx(Qt,{children:e.jsx(cL,{href:n.workflow.href,onClick:g=>g.stopPropagation(),title:n.workflow.name,children:n.workflow.name})}),e.jsx(Qt,{children:e.jsx(dL,{variant:"secondary",title:n.goal,children:n.goal})}),e.jsx(Qt,{children:e.jsx(oo,{variant:"secondary",children:rL(n.creditsUsed)})}),e.jsx(Qt,{align:"right",children:e.jsx(fL,{style:{justifyContent:"flex-end"},children:e.jsx(kL,{record:n})})})]}),s&&(c?e.jsx(CL,{record:n,mainColSpan:f,totalCols:u}):e.jsx(SL,{record:n,totalCols:u}))]})}const IL=[{value:"all",label:"All Personas"},...Nr.map(n=>({value:n.id,label:n.name}))],NL=[{value:"all",label:"All Types"},{value:"engage",label:"Engage"},{value:"engage_less",label:"Engage-less"}],AL=[{value:"all",label:"All Outcomes"},{value:"success",label:"Success"},{value:"in_progress",label:"In Progress"}],TL=[{value:"all",label:"All Sources"},{value:"workflow",label:"Workflow"},{value:"ponder",label:"Ponder"}];function LL(n,s){if(s==="all")return!0;if(n.deploymentType==="engage_less"){const i=n;return s==="success"?i.status==="success":s==="in_progress"?i.status==="in_progress":!0}const a=n;if(s==="success")return a.conversations.some(i=>i.outcome==="goal_achieved");if(s==="in_progress"){const i=a.conversations.some(u=>u.outcome==="goal_achieved"),c=a.conversations.some(u=>u.outcome==="in_progress");return!i&&c}return!0}function v2({specialistId:n,timeRange:s,deploymentTypeFilter:a="all",records:i,showFilters:c=!0}){const[u,f]=v.useState("all"),[g,m]=v.useState("all"),[y,x]=v.useState("all"),[k,b]=v.useState("all"),[C,L]=v.useState(null),S=v.useMemo(()=>{const _=eo(s),E=i??Ps.filter(z=>(!n||z.specialistId===n)&&(a==="all"||z.deploymentType===a));return Ln(E,_).sort((z,R)=>new Date(R.timestamp).getTime()-new Date(z.timestamp).getTime())},[n,s,a,i]),I=v.useMemo(()=>S.filter(_=>u==="all"||_.specialistId===u).filter(_=>g==="all"||_.deploymentType===g).filter(_=>LL(_,y)).filter(_=>k==="all"||_.activatedBy===k),[S,u,g,y,k]),M=!n,N=!n,j=N?6:5;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3, 12px)"},children:[c&&e.jsxs(sL,{children:[M&&e.jsx("div",{style:{width:160},children:e.jsx(En,{size:"sm",options:IL,value:u,onChange:f})}),e.jsx("div",{style:{width:150},children:e.jsx(En,{size:"sm",options:NL,value:g,onChange:m})}),e.jsx("div",{style:{width:150},children:e.jsx(En,{size:"sm",options:AL,value:y,onChange:x})}),e.jsx("div",{style:{width:150},children:e.jsx(En,{size:"sm",options:TL,value:k,onChange:b})})]}),e.jsx(aL,{$columnCount:j,children:e.jsxs(ni,{size:"sm",children:[e.jsx(ri,{children:e.jsxs(dr,{hoverable:!1,children:[e.jsx(tn,{children:"Time"}),N&&e.jsx(tn,{children:"Persona"}),e.jsx(tn,{children:"Workflow"}),e.jsx(tn,{children:"Goal"}),e.jsx(tn,{children:"Credits"}),e.jsx(tn,{align:"right",children:"Outcome"})]})}),e.jsx(oi,{children:I.length===0?e.jsx(iL,{children:e.jsx(lL,{colSpan:j,children:"No activity matches the current filters."})}):I.map(_=>e.jsx(ML,{record:_,expanded:C===_.id,onToggle:()=>L(E=>E===_.id?null:_.id),showPersonaColumn:N},_.id))})]})})]})}const EL=Array.from(new Set(Nr.map(n=>n.role)));function RL(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("path",{d:"M2 11.5L2.5 14l2.5-.5L13.414 5.086a1 1 0 0 0 0-1.414L12.328 2.586a1 1 0 0 0-1.414 0L2 11.5Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),e.jsx("path",{d:"M10 4l2 2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}const $L=[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],tm="edit-persona-form",PL=hC`
  [role="dialog"][aria-label="Edit Persona"] > div {
    overflow: visible !important;
  }
`,nm=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  min-height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`,DL=h.div`
  position: relative;
  background: var(--color-bg-secondary, #f6f7f9);
  border-radius: var(--radius-lg, 12px);
  padding: 20px;
  overflow: hidden;
  isolation: isolate;
`,zL=h.div`
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
`,FL=h.div`
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
`,OL=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  width: 60%;
  min-width: 0;
`,BL=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,HL=h.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--color-content-primary, #151515);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,UL=h.div`
  display: inline-flex;
  align-items: center;
  height: 20px;
  border: 1px solid var(--color-border-opaque, #cbd0d7);
  border-radius: var(--radius-button, 6px);
  overflow: hidden;
  flex-shrink: 0;
`,WL=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
`,qL=h.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #2b333f);
  padding-right: 6px;
  white-space: nowrap;
`,VL=h.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-content-secondary, #475569);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,GL=h.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-tertiary, #87919f);
`,ZL=h.button`
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
`,YL=h.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`,KL=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-4, 16px);
`,QL=h.div`
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg, 12px);
  background: var(--color-bg-secondary, #f6f7f9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
`,XL=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,JL=h.div`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-primary, #151515);
`,eE=h.div`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-xs, 12px);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--line-height-normal, 1.5);
  color: var(--color-content-tertiary, #87919f);
`,tE=h.button`
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
`;const nE=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5, 20px);
`,rE=h.a`
  color: var(--color-content-link, #446cff);
  text-decoration: none;
  font-weight: 500;
  &:hover { text-decoration: underline; }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
    border-radius: var(--radius-sm, 4px);
  }
`,oE=h.div`
  padding: 48px 0;
  text-align: center;
  font-size: 13px;
  color: var(--color-content-tertiary, #87919f);
`,sE=h.div`
  display: flex;
  gap: var(--space-1, 4px);
  border-bottom: 1px solid var(--color-border-secondary, #e2e4e8);
`,rm=h.button`
  all: unset;
  cursor: pointer;
  padding: var(--space-2, 8px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: ${n=>n.$active?600:400};
  line-height: 20px;
  color: ${n=>n.$active?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #87919f)"};
  border-bottom: 2px solid
    ${n=>n.$active?"var(--color-content-primary, #151515)":"transparent"};
  margin-bottom: -1px;
  transition: color 150ms ease, border-color 150ms ease;
  &:hover {
    color: var(--color-content-primary, #151515);
  }
`;function aE({personaId:n,onBack:s}){const a=Nr.find(H=>H.id===n),[i,c]=v.useState((a==null?void 0:a.name)??""),[u,f]=v.useState(a!=null&&a.role?[a.role]:[]),[g,m]=v.useState((a==null?void 0:a.description)??""),[y,x]=v.useState((a==null?void 0:a.voice)??"alloy"),[k,b]=v.useState(!1),[C,L]=v.useState("activities"),[S,I]=v.useState("7d"),[M,N]=v.useState(""),[j,_]=v.useState([]),[E,z]=v.useState("alloy"),[R,F]=v.useState("");if(!a)return e.jsx(nm,{children:e.jsx("p",{children:"Specialist not found."})});const X=y.charAt(0).toUpperCase()+y.slice(1);function Z(){N(i),_(u),z(y),F(g),b(!0)}function V(H){H.preventDefault(),c(M),f(j),m(R),x(E),b(!1)}const U=MT.filter(H=>H.personaId===n);return e.jsxs(nm,{children:[e.jsxs(DL,{children:[e.jsxs(OL,{children:[e.jsxs(BL,{children:[e.jsx(HL,{children:i}),e.jsxs(UL,{children:[e.jsx(WL,{children:e.jsx(Dl,{size:12})}),e.jsx(qL,{children:X})]}),e.jsx(ZL,{"aria-label":"Edit specialist",onClick:Z,children:e.jsx(RL,{})})]}),e.jsx(VL,{children:u.join(" · ")}),e.jsx(GL,{children:g})]}),e.jsx(zL,{"aria-hidden":"true",children:e.jsx(Wl,{personaId:n,size:240})}),e.jsx(FL,{"aria-hidden":"true"})]}),k&&e.jsx(PL,{}),e.jsxs(pp,{open:k,onClose:()=>b(!1),size:"md","aria-label":"Edit Persona",children:[e.jsx(ec,{onClose:()=>b(!1),children:"Edit Persona"}),e.jsx(tc,{style:{overflow:"visible"},children:e.jsxs(YL,{id:tm,onSubmit:V,children:[e.jsxs(KL,{children:[e.jsx(QL,{children:e.jsx(Wl,{personaId:n,size:64})}),e.jsxs(XL,{children:[e.jsx(JL,{children:"Profile image"}),e.jsx(eE,{children:"Recommended: 256×256px, PNG or JPG"}),e.jsx(tE,{type:"button",children:"Upload image"})]})]}),e.jsx(Fs,{label:"Name",required:!0,value:M,onChange:H=>N(H.target.value),placeholder:"e.g. HR Assistant"}),e.jsx(En,{label:"Voice",required:!0,size:"sm",leadingIcon:e.jsx(Dl,{size:14}),options:$L,value:E,onChange:z,placeholder:"Select a voice…"}),e.jsx(ST,{label:"Role",required:!0,value:j,onChange:_,suggestions:EL,placeholder:"Add a role tag…"}),e.jsx(hp,{label:"Description",required:!0,value:R,onChange:H=>F(H.target.value),placeholder:"e.g. Answers employee questions about benefits and policies.",rows:3})]})}),e.jsxs(nc,{children:[e.jsx(Ee,{variant:"destructive-secondary",size:"sm",style:{marginRight:"auto"},children:"Delete Persona"}),e.jsx(Ee,{variant:"secondary",size:"sm",onClick:()=>b(!1),children:"Cancel"}),e.jsx(Ee,{variant:"primary",size:"sm",type:"submit",form:tm,children:"Save"})]})]}),e.jsx(tL,{personaId:n}),e.jsxs(nE,{children:[e.jsxs(sE,{children:[e.jsx(rm,{$active:C==="activities",onClick:()=>L("activities"),children:"Activities"}),e.jsx(rm,{$active:C==="deployments",onClick:()=>L("deployments"),children:"Deployments"})]}),C==="deployments"&&e.jsx(e.Fragment,{children:U.length===0?e.jsx(oE,{children:"This persona hasn't been added to any workflows yet."}):e.jsxs(ni,{size:"md",children:[e.jsx(ri,{children:e.jsxs(dr,{hoverable:!1,children:[e.jsx(tn,{children:"Workflow"}),e.jsx(tn,{children:"Type"}),e.jsx(tn,{children:"Status"})]})}),e.jsx(oi,{children:U.map(H=>e.jsxs(dr,{children:[e.jsx(Qt,{children:e.jsx(rE,{href:H.workflow.href,children:e.jsx(oo,{children:H.workflow.name})})}),e.jsx(Qt,{children:e.jsx(pt,{size:"sm",color:H.type==="engage"?"purple":"grey",children:H.type==="engage"?"Engage":"Engage-less"})}),e.jsx(Qt,{children:e.jsx(ro,{size:"sm",status:H.status==="active"?"success":"warning",children:H.status==="active"?"Active":"Paused"})})]},H.id))})]})}),C==="activities"&&e.jsx(v2,{specialistId:n,timeRange:S})]})]})}const iE=h.div`
  position: relative;
  width: 100%;
  height: ${n=>n.$height}px;
`,lE=h.svg`
  display: block;
  font-family: var(--font-sans, Geist, sans-serif);
`,cE=h.line`
  stroke: var(--color-border-opaque, #e8eaee);
  stroke-width: 1;
  /* Match the morph duration + eased curve for a synchronized feel. */
  transition: y1 620ms cubic-bezier(0.77, 0, 0.175, 1),
              y2 620ms cubic-bezier(0.77, 0, 0.175, 1);
`,om=h.text`
  fill: var(--color-content-tertiary, #87919f);
  font-size: 11px;
  transition: x 620ms cubic-bezier(0.77, 0, 0.175, 1),
              y 620ms cubic-bezier(0.77, 0, 0.175, 1);
`,sm="#8c4fe2",Qu="#446cff",dE=h.path`
  fill: none;
  stroke: url(#chart-stroke);
  stroke-width: 2.5;
  stroke-linejoin: miter;
  stroke-linecap: butt;
`,uE=h.rect`
  fill: url(#chart-fill);
`,pE=h.circle`
  fill: ${Qu};
  stroke: var(--color-bg-primary, #ffffff);
  stroke-width: 2;
`,hE=h.rect`
  fill: transparent;
  cursor: pointer;
`,fE=h.div`
  position: absolute;
  left: ${n=>n.$x}px;
  top: ${n=>n.$y}px;
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
`,mE=h.div`
  font-weight: 600;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.65);
`,Lu=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  font-size: 11px;
  color: var(--color-bg-always-light, #ffffff);
`;function Eu(n){return n>=1e6?`${(n/1e6).toFixed(1)}M`:n>=1e3?`${(n/1e3).toFixed(n>=1e4?0:1)}k`:n.toLocaleString("en-US")}function gE(n){return n===0?"$0":n>=1e6?`$${(n/1e6).toFixed(1)}M`:n>=1e3?`$${Math.round(n/1e3)}K`:`$${Math.round(n)}`}function vE(n){if(n===0)return 0;const s=Math.pow(10,Math.floor(Math.log10(n))),a=[1,1.2,1.5,1.6,1.8,2,2.2,2.4,2.5,2.8,3,3.2,3.5,4,4.5,5,6,7,8,9,10],i=n/s;for(const c of a)if(c>=i)return c*s;return 10*s}function am(n,s){if(n.length===0)return new Array(s).fill(0);if(n.length===s)return n.slice();const a=[];for(let i=0;i<s;i++){const c=s===1?0:i/(s-1)*(n.length-1),u=Math.floor(c),f=Math.min(u+1,n.length-1),g=c-u;a.push(n[u]+(n[f]-n[u])*g)}return a}const xE=n=>n<.5?8*n*n*n*n:1-Math.pow(-2*n+2,4)/2;function yE({data:n,height:s=220}){const a=v.useRef(null),[i,c]=v.useState(600),[u,f]=v.useState(null);v.useEffect(()=>{if(!a.current)return;const $=new ResizeObserver(A=>{for(const P of A){const te=P.contentRect.width;te>0&&c(te)}});return $.observe(a.current),()=>$.disconnect()},[]);const[g,m]=v.useState(1),y=v.useRef(n),x=v.useRef(n);v.useEffect(()=>{var re;if(x.current===n)return;if(y.current=x.current,x.current=n,typeof window<"u"&&((re=window.matchMedia)!=null&&re.call(window,"(prefers-reduced-motion: reduce)").matches)){m(1);return}const $=performance.now(),A=620;m(0);let P;const te=fe=>{const we=Math.min(1,(fe-$)/A);m(xE(we)),we<1&&(P=requestAnimationFrame(te))};return P=requestAnimationFrame(te),()=>cancelAnimationFrame(P)},[n]);const k=g<1?y.current:n,b=44,C=0,L=20,S=20,I=Math.max(i-b-C,1),M=s-L-S,N=Math.max(k.length,n.length),j=am(k.map($=>$.hasData?$.max:0),N),_=am(n.map($=>$.hasData?$.max:0),N),E=j.map(($,A)=>$+(_[A]-$)*g),z=Math.max(...E,0),R=z>0?vE(z):10,F=4,X=Array.from({length:F+1},($,A)=>R*A/F),Z=$=>L+M-$/R*M,V=I/N,U=$=>b+V*$,H=$=>b+V*($+1),ne=(()=>{if(E.length===0)return"";const $=[];return E.forEach((A,P)=>{const te=Z(A),re=U(P),fe=H(P);$.push(`M ${re} ${te}`),$.push(`L ${fe} ${te}`)}),$.join(" ")})(),K=[];E.forEach(($,A)=>{if($<=0)return;const P=Z($),te=U(A),re=H(A);K.push({x:te,y:P,width:Math.max(re-te,0),height:L+M-P})});const Y=I/n.length,J=$=>b+Y*$,q=$=>b+Y*($+.5),B=u!==null?n[u]:null;return e.jsxs(iE,{ref:a,$height:s,children:[e.jsxs(lE,{width:i,height:s,viewBox:`0 0 ${i} ${s}`,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"chart-stroke",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:sm}),e.jsx("stop",{offset:"100%",stopColor:Qu})]}),e.jsxs("linearGradient",{id:"chart-fill",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:sm,stopOpacity:"0.3"}),e.jsx("stop",{offset:"100%",stopColor:Qu,stopOpacity:"0"})]})]}),X.map(($,A)=>e.jsxs("g",{children:[e.jsx(cE,{x1:0,x2:i-C,y1:Z($),y2:Z($)}),e.jsx(om,{x:0,y:Z($)-6,textAnchor:"start",children:gE($)})]},`t-${A}`)),K.map(($,A)=>e.jsx(uE,{x:$.x,y:$.y,width:$.width,height:$.height},`b-${A}`)),ne&&e.jsx(dE,{d:ne}),B&&u!==null&&B.hasData&&g===1&&e.jsx(pE,{cx:q(u),cy:Z(B.max),r:4}),g===1&&n.map(($,A)=>e.jsx(hE,{x:J(A),y:L,width:Y,height:M,onMouseEnter:()=>$.hasData&&f(A),onMouseLeave:()=>f(null)},`hit-${A}`)),(()=>{const A=Math.max(1,Math.ceil(45/Y)),P=n.length-1;return n.map((te,re)=>{const fe=re===0,we=re===P;if(!(fe||we)&&re%A!==0)return null;const Ae=fe?b:we?i-C:q(re),$e=fe?"start":we?"end":"middle";return e.jsx(om,{x:Ae,y:s-S+18,textAnchor:$e,children:te.label},`xl-${re}`)})})()]}),B&&u!==null&&B.hasData&&g===1&&e.jsxs(fE,{$x:q(u),$y:Z(B.max),children:[e.jsx(mE,{children:B.label}),B.min===B.max?e.jsxs(Lu,{children:[Eu(B.min)," credits"]}):e.jsxs(Lu,{children:[Eu(B.min)," – ",Eu(B.max)," credits"]}),e.jsxs(Lu,{children:[B.count," ",B.count===1?"run":"runs"]})]})]})}const wE=h.div`
  position: relative;
  width: 100%;
  height: ${n=>n.$height}px;
`,bE=h.svg`
  display: block;
  font-family: var(--font-sans, Geist, sans-serif);
`,jE=h.line`
  stroke: var(--color-border-opaque, #e8eaee);
  stroke-width: 1;
`,im=h.text`
  fill: var(--color-content-tertiary, #87919f);
  font-size: 11px;
`,lm="#8c4fe2",Xu="#446cff",kE=h.path`
  fill: none;
  stroke: url(#timesaved-stroke);
  stroke-width: 2.5;
  stroke-linejoin: miter;
  stroke-linecap: butt;
`,_E=h.rect`
  fill: url(#timesaved-fill);
`,CE=h.circle`
  fill: ${Xu};
  stroke: var(--color-bg-primary, #ffffff);
  stroke-width: 2;
`,SE=h.rect`
  fill: transparent;
  cursor: pointer;
`,ME=h.div`
  position: absolute;
  left: ${n=>n.$x}px;
  top: ${n=>n.$y}px;
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
`,IE=h.div`
  font-weight: 600;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.65);
`,NE=h.div`
  font-size: 11px;
  color: var(--color-bg-always-light, #ffffff);
`;function AE(n,s){if(s==="hour"){const i=n/36e5;return i===0?"0h":i>=10?`${Math.round(i)}h`:`${i.toFixed(1)}h`}const a=n/6e4;return a===0?"0m":`${Math.round(a)}m`}function TE(n){if(n<6e4)return`${Math.round(n/1e3)}s`;const s=Math.round(n/6e4);if(s<60)return`${s} min`;const a=Math.floor(s/60),i=s%60;return i===0?`${a}h`:`${a}h ${i}m`}function LE(n){if(n===0)return 0;const s=Math.pow(10,Math.floor(Math.log10(n))),a=[1,1.2,1.5,1.6,1.8,2,2.2,2.4,2.5,2.8,3,3.2,3.5,4,4.5,5,6,7,8,9,10],i=n/s;for(const c of a)if(c>=i)return c*s;return 10*s}function EE({data:n,unit:s,height:a=200}){const i=v.useRef(null),[c,u]=v.useState(600),[f,g]=v.useState(null);v.useEffect(()=>{if(!i.current)return;const U=new ResizeObserver(H=>{for(const ne of H){const K=ne.contentRect.width;K>0&&u(K)}});return U.observe(i.current),()=>U.disconnect()},[]);const m=44,y=0,x=20,k=20,b=Math.max(c-m-y,1),C=a-x-k,L=n.map(U=>U.savedMs),S=Math.max(0,...L),I=s==="hour"?36e5:5*6e4,M=S>0?LE(S):I,N=4,j=Array.from({length:N+1},(U,H)=>M*H/N),_=U=>x+C-U/M*C,E=b/Math.max(1,n.length),z=U=>m+E*U,R=U=>m+E*(U+1),F=U=>m+E*(U+.5),X=(()=>{if(n.length===0)return"";const U=[];return n.forEach((H,ne)=>{const K=_(H.savedMs),Y=z(ne),J=R(ne);U.push(`M ${Y} ${K}`),U.push(`L ${J} ${K}`)}),U.join(" ")})(),Z=[];n.forEach((U,H)=>{if(U.savedMs<=0)return;const ne=_(U.savedMs),K=z(H),Y=R(H);Z.push({x:K,y:ne,width:Math.max(Y-K,0),height:x+C-ne})});const V=f!==null?n[f]:null;return e.jsxs(wE,{ref:i,$height:a,children:[e.jsxs(bE,{width:c,height:a,viewBox:`0 0 ${c} ${a}`,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"timesaved-stroke",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:lm}),e.jsx("stop",{offset:"100%",stopColor:Xu})]}),e.jsxs("linearGradient",{id:"timesaved-fill",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:lm,stopOpacity:"0.3"}),e.jsx("stop",{offset:"100%",stopColor:Xu,stopOpacity:"0"})]})]}),j.map((U,H)=>e.jsxs("g",{children:[e.jsx(jE,{x1:0,x2:c-y,y1:_(U),y2:_(U)}),e.jsx(im,{x:0,y:_(U)-6,textAnchor:"start",children:AE(U,s)})]},`t-${H}`)),Z.map((U,H)=>e.jsx(_E,{x:U.x,y:U.y,width:U.width,height:U.height},`b-${H}`)),X&&e.jsx(kE,{d:X}),V&&f!==null&&V.savedMs>0&&e.jsx(CE,{cx:F(f),cy:_(V.savedMs),r:4}),n.map((U,H)=>e.jsx(SE,{x:z(H),y:x,width:E,height:C,onMouseEnter:()=>g(H),onMouseLeave:()=>g(null)},`hit-${H}`)),(()=>{const H=Math.max(1,Math.ceil(45/E)),ne=n.length-1;return n.map((K,Y)=>{const J=Y===0,q=Y===ne;if(!(J||q)&&Y%H!==0)return null;const $=J?m:q?c-y:F(Y),A=J?"start":q?"end":"middle";return e.jsx(im,{x:$,y:a-k+18,textAnchor:A,children:K.label},`xl-${Y}`)})})()]}),V&&f!==null&&V.savedMs>0&&e.jsxs(ME,{$x:F(f),$y:_(V.savedMs),children:[e.jsx(IE,{children:V.label}),e.jsxs(NE,{children:[TE(V.savedMs)," saved"]})]})]})}function cm(n){return`${Math.round(n)}%`}function RE(n,s){if(n===0)return 0;const a=n/Math.max(1,s);return a<=.25?1:a<=.5?2:a<=.75?3:4}function dm(n){const s=Math.max(0,Math.min(100,n))/100,a=Math.round(140+-72*s),i=Math.round(79+29*s),c=Math.round(226+29*s);return`rgb(${a}, ${i}, ${c})`}function $E(n){if(n<=0)return"0 min";const s=Math.round(n/6e4);if(s<60)return`${s} min`;const a=Math.floor(s/60),i=s%60;return a<24?i===0?`${a}h`:`${a}h ${i}m`:`${a} hours`}function PE(n){return n<1?"$0":n<1e3?`$${Math.round(n).toLocaleString("en-US")}`:`$${Math.round(n).toLocaleString("en-US")}`}const um=Lo.filter(n=>n.source==="historical").length,pm=Lo.filter(n=>n.source==="estimate").length;function Ru(n){return n==="all"?"month":"day"}function Ss(n,s){return s==="month"?n.toISOString().slice(0,7):n.toISOString().slice(0,10)}function Cl(n,s){return s==="month"?n.toLocaleDateString("en-US",{month:"short",year:"2-digit"}):n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function $u(n,s,a){const i=[],c=new Date(n),u=new Date(s);if(a==="month")for(c.setUTCDate(1),c.setUTCHours(0,0,0,0),u.setUTCDate(1),u.setUTCHours(0,0,0,0);c<=u;)i.push(new Date(c)),c.setUTCMonth(c.getUTCMonth()+1);else for(c.setUTCHours(0,0,0,0),u.setUTCHours(0,0,0,0);c<=u;)i.push(new Date(c)),c.setUTCDate(c.getUTCDate()+1);return i}function Sl({current:n,prior:s,invertDirection:a=!1}){const i=a2(n,s);if(i===null)return null;const c=i>0,u=c?"up":"down",f=a?!c:c,g=Math.abs(i)<.5?void 0:f?"positive":"negative",m=`${i>0?"+":""}${Math.abs(i).toFixed(1)}%`;return e.jsx(Jl,{mode:"trend",value:m,trend:u,severity:g})}const DE=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
`,zE=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,FE=h.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  font-family: var(--font-sans);
  font-size: var(--text-xs);  /* 12px — Alloy paragraph-sm */
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,OE=h.div`
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background: var(--color-bg-primary);
`,BE=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,HE=h.span`
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,UE=h.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-sans);
  font-size: var(--text-xs);  /* 12px — Alloy paragraph-sm */
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,WE=3,x2=`repeating-linear-gradient(
  to right,
  transparent 0,
  transparent 2px,
  var(--color-bg-primary, #fff) 2px,
  var(--color-bg-primary, #fff) ${WE}px
)`,qE=h.div`
  position: relative;
  width: 100%;
  height: 12px;
  /* Pull the bar up so the gap between the used/remaining labels and
     the track reads as 8px instead of the card's default 12px flex gap. */
  margin-top: -4px;
  background: ${x2}, var(--color-bg-tertiary);
  border-radius: 0;
  overflow: hidden;
`,VE=h.div`
  position: absolute;
  inset: 0 auto 0 0;
  width: ${n=>n.$pct}%;
  background: ${x2},
    var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%));
  border-radius: inherit;
`,GE=h.div`
  display: grid;
  /* minmax(0, 1fr) prevents columns from being expanded by wide chart
     content (default 1fr has a min of auto, which respects content size). */
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-4, 16px);
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,hm=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  flex-wrap: wrap;
`,fm=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);  /* 40px — Alloy heading-xl, matches HeroValue */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`,ZE=h.span`
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
  background: ${n=>n.$color};
`;h.span`
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;const YE=h.div`
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
`,KE=h.div`
  width: ${n=>n.$pct}%;
  background: linear-gradient(to right, ${n=>n.$gradientStart}, ${n=>n.$gradientEnd});
  border-radius: 2px;
  opacity: ${n=>n.$muted?.2:1};
  transition: background 120ms ease, opacity 120ms ease, width 150ms ease;
  cursor: default;
  /* Hover: segment transforms to its labeled outcome color
     (green = achieved, slate = no action, blue = in progress) and
     pops back to full opacity. */
  &:hover {
    background: ${n=>n.$color};
    opacity: 1;
  }
`,mm=h.div`
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
`,gm=h.span`
  font-size: var(--text-xs, 12px);
  color: rgba(255, 255, 255, 0.65);
`,vm=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-bg-always-light, #fff);
`,xm=h.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${n=>n.$color};
`,QE=h.span`
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
`;const zp=["var(--color-bg-tertiary, #f1f2f4)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%))"],XE=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
`,JE=h.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
`,eR=h.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 14px);
  grid-auto-columns: 14px;
  gap: 3px;
  flex-shrink: 0;
`,ym=h.div`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: ${n=>zp[n.$level]};
  transition: background 120ms ease;
`,tR=h.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: flex-end;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 12px);
  color: var(--color-content-tertiary);
  margin-top: var(--space-2, 8px);
`,Pa=h.span`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${n=>zp[n.$level]};
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
`;const Ml=h.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  /* $secondary cards use the Alloy recessed surface token for a
     subtle tonal break from the default white cards around them. */
  background: ${n=>n.$secondary?"var(--color-bg-secondary, #f6f7f9)":"var(--color-bg-primary, #fff)"};
`,Da=h.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-primary, #151515);
`,za=h.p`
  margin: 0;
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`,Il=h.div`
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
  color: ${n=>n.$color};
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
`;const nR=h.h3`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,rR=h.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,oR=h.div`
  margin-left: auto;
`,Nl=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3, 12px);
`;h(eg)`
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
`;function sR(){return e.jsx("svg",{width:"0",height:"0",style:{position:"absolute",width:0,height:0},"aria-hidden":"true",children:e.jsx("defs",{children:e.jsxs("linearGradient",{id:"ai-gradient-stroke",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:"#8c4fe2"}),e.jsx("stop",{offset:"100%",stopColor:"#446cff"})]})})})}const aR=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-5, 20px) var(--space-6, 24px);
`,iR=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3, 12px);
  flex-wrap: wrap;
`,lR=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`,cR=h.span`
  font-family: var(--font-sans);
  font-size: var(--text-xl, 20px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-secondary, #475569);
`,dR=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 12px);
  color: var(--color-content-tertiary, #87919f);
`,uR=[{value:"all",label:"All Types"},{value:"engage",label:"Engage"},{value:"engage_less",label:"Engage-less"}],pR=[{value:"all",label:"All Workflows"},...he.map(n=>({value:n.id,label:n.name}))],hR=[{value:"all",label:"All Outcomes"},{value:"success",label:"Success"},{value:"in_progress",label:"In Progress"}],fR=[{value:"all",label:"All Sources"},{value:"workflow",label:"Workflow"},{value:"ponder",label:"Ponder"}];function mR(){const[n,s]=v.useState("7d"),[a,i]=v.useState("7d"),[c,u]=v.useState("7d"),[f,g]=v.useState("7d"),[m,y]=v.useState("all"),[x,k]=v.useState("all"),[b,C]=v.useState("all"),[L,S]=v.useState("all"),[I,M]=v.useState(null),[N,j]=v.useState(null),_=v.useMemo(()=>Ps.filter(le=>{if(m!=="all"&&le.deploymentType!==m||x!=="all"&&le.workflow.id!==x||L!=="all"&&le.activatedBy!==L)return!1;if(b!=="all")if(le.deploymentType==="engage_less"){const de=le;if(b==="success"&&de.status!=="success"||b==="in_progress"&&de.status!=="in_progress")return!1}else{const de=le;if(b==="success"&&!de.conversations.some(Re=>Re.outcome==="goal_achieved"))return!1;if(b==="in_progress"){const Re=de.conversations.some(_e=>_e.outcome==="goal_achieved"),je=de.conversations.some(_e=>_e.outcome==="in_progress");if(Re||!je)return!1}}return!0}),[m,x,b,L]),E=eo(n),z=Va(n),R=v.useMemo(()=>Ln(_,E),[_,n]),F=v.useMemo(()=>Ln(_,z),[_,n]),X=eo(a),Z=v.useMemo(()=>Ln(_,X),[_,a]),V=eo(c),U=Va(c),H=v.useMemo(()=>Ln(_,V),[_,c]),ne=v.useMemo(()=>Ln(_,U),[_,c]),K="7d",Y=ql.filter(le=>le.period===K),J=ql.filter(le=>le.period===`prior_${K}`);Y.reduce((le,de)=>le+de.triggersReceived,0);const q=Y.reduce((le,de)=>le+de.triggersExecuted,0);J.reduce((le,de)=>le+de.triggersReceived,0);const B=J.reduce((le,de)=>le+de.triggersExecuted,0),$=Vl(H),A=Vl(ne),P=Gl(H),te=Gl(ne);R.filter(le=>le.steps.some(de=>de.toolCategory==="communication"&&de.channel==="chat")).length,R.filter(le=>le.steps.some(de=>de.toolCategory==="communication"&&(de.channel==="email"||de.channel==="sms"))).length,F.filter(le=>le.steps.some(de=>de.toolCategory==="communication"&&de.channel==="chat")).length,F.filter(le=>le.steps.some(de=>de.toolCategory==="communication"&&(de.channel==="email"||de.channel==="sms"))).length,R.reduce((le,de)=>le+de.creditsUsed,0),F.reduce((le,de)=>le+de.creditsUsed,0);const re=v.useMemo(()=>{const le=new Date(Date.UTC(Zn.getUTCFullYear(),Zn.getUTCMonth(),1)),de=new Date(Date.UTC(Zn.getUTCFullYear(),Zn.getUTCMonth()+1,1)),Re=new Date(Date.UTC(Zn.getUTCFullYear(),Zn.getUTCMonth()-1,1)),je=(Te,at)=>Ps.reduce((xt,$t)=>{const tr=new Date($t.timestamp).getTime();return tr>=Te.getTime()&&tr<at.getTime()?xt+$t.creditsUsed:xt},0),_e=je(le,de),Ce=je(Re,le),Je=Math.max(0,Tu-_e),et=Math.min(100,_e/Tu*100),Ze=le.toLocaleDateString("en-US",{month:"long",year:"numeric",timeZone:"UTC"}).toUpperCase(),Bt=Ce>0?(_e-Ce)/Ce*100:0,fr=de.getTime()-Zn.getTime(),zn=Math.floor(fr/864e5),lo=Math.floor(fr/36e5),Yo=zn>=1?`${zn} day${zn===1?"":"s"}`:lo>=1?`${lo} hour${lo===1?"":"s"}`:"less than an hour";return{used:_e,priorUsed:Ce,remaining:Je,pct:et,label:Ze,momDelta:Bt,resetsIn:Yo}},[]),fe=v.useMemo(()=>{const de={};for(const Ze of Ps){const Bt=new Date(Ze.timestamp).toISOString().slice(0,10);de[Bt]=(de[Bt]??0)+1}const Re=new Date(Zn);Re.setUTCHours(0,0,0,0),Re.setUTCDate(Re.getUTCDate()+(6-Re.getUTCDay()));const je=new Date(Re);je.setUTCDate(je.getUTCDate()-363);const _e=[],Ce=new Date(je);for(;Ce<=Re;){const Ze=Ce.toISOString().slice(0,10),Bt=de[Ze]??0;_e.push({date:new Date(Ce),iso:Ze,count:Bt,inRange:!0}),Ce.setUTCDate(Ce.getUTCDate()+1)}const Je=[];for(let Ze=0;Ze<_e.length;Ze+=7)Je.push(_e.slice(Ze,Ze+7));const et=Math.max(1,..._e.map(Ze=>Ze.count));return{weeks:Je,maxCount:et}},[]),we=v.useMemo(()=>{const le=Ru(n),de={};for(const Ze of R){const Bt=Ss(new Date(Ze.timestamp),le);de[Bt]=(de[Bt]??0)+1}const Re=$u(E.from,E.to,le),je=Re.map(Ze=>Cl(Ze,le)),_e=Re.map(Ze=>de[Ss(Ze,le)]??0),Ce=_e.filter(Ze=>Ze>0).length,Je=_e.reduce((Ze,Bt)=>Ze+Bt,0),et=Ce>0?Je/Ce:0;return{labels:je,data:_e,total:Je,avgPerDay:et}},[R,n]),ge=v.useMemo(()=>{let le=0,de=0,Re=0;for(const _e of H)if(_e.deploymentType==="engage")for(const Ce of _e.conversations)Ce.outcome==="goal_achieved"?le++:Ce.outcome==="completed_no_action"?de++:Ce.outcome==="in_progress"&&Re++;else _e.status==="success"?le++:_e.status==="incomplete"?de++:_e.status==="in_progress"&&Re++;const je=le+de+Re;return{achieved:le,completedNoAction:de,inProgress:Re,total:je}},[H]),{rangeData:Ae,activeDays:$e}=v.useMemo(()=>{const le=Ru(a),de={};for(const Ce of Z){const Je=Ss(new Date(Ce.timestamp),le);de[Je]||(de[Je]=[]),de[Je].push(Ce.creditsUsed)}const je=$u(X.from,X.to,le).map(Ce=>{const Je=Ss(Ce,le),et=de[Je]??[];return et.length===0?{label:Cl(Ce,le),min:0,max:0,count:0,hasData:!1}:{label:Cl(Ce,le),min:Math.min(...et),max:Math.max(...et),count:et.length,hasData:!0}}),_e=je.filter(Ce=>Ce.hasData).length;if(a==="all"&&_e>0){const Ce=je.findIndex(et=>et.hasData),Je=je.length-1-[...je].reverse().findIndex(et=>et.hasData);return{rangeData:je.slice(Ce,Je+1),activeDays:_e}}return{rangeData:je,activeDays:_e}},[Z,a]),se=eo(f),oe=Va(f),pe=v.useMemo(()=>Ln(_,se),[_,f]),xe=v.useMemo(()=>Ln(_,oe),[_,f]),Le=v.useMemo(()=>B0(pe,Lo,Ku),[pe]),Ge=v.useMemo(()=>B0(xe,Lo,Ku),[xe]),ht=v.useMemo(()=>{const le=Ru(f),de=PT(pe,je=>Ss(new Date(je),le),Lo);return $u(se.from,se.to,le).map(je=>({label:Cl(je,le),savedMs:de[Ss(je,le)]??0}))},[pe,f]),ft=Math.max(0,...ht.map(le=>le.savedMs))>=36e5?"hour":"min",mt=P>0?$/P*100:0,Ke=te>0?A/te*100:0;return e.jsxs(DE,{children:[e.jsx(sR,{}),e.jsxs(GE,{children:[e.jsxs(OE,{children:[e.jsxs(zE,{children:[e.jsxs("div",{children:[e.jsx(Da,{children:"Current Bill Period"}),e.jsxs(za,{children:["Resets in ",re.resetsIn]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"var(--space-3, 12px)",flexWrap:"wrap"},children:[e.jsx(BE,{children:cm(re.pct)}),e.jsxs(FE,{children:[e.jsx(Jl,{mode:"trend",value:`${re.momDelta>=0?"+":""}${re.momDelta.toFixed(1)}%`,trend:re.momDelta>=0?"up":"down",severity:Math.abs(re.momDelta)<.05?void 0:re.momDelta>=0?"negative":"positive"}),e.jsxs("span",{children:[re.momDelta>=0?"than":"less than"," last month:"," ",e.jsx(HE,{children:re.priorUsed.toLocaleString("en-US")})]})]})]})]}),e.jsxs(UE,{children:[e.jsxs("span",{children:[re.used.toLocaleString("en-US")," used"]}),e.jsxs("span",{children:[re.remaining.toLocaleString("en-US")," remaining"]})]}),e.jsx(qE,{role:"progressbar","aria-label":`Monthly credit usage for ${re.label}`,"aria-valuemin":0,"aria-valuemax":Tu,"aria-valuenow":re.used,children:e.jsx(VE,{$pct:re.pct})})]}),e.jsxs(Ml,{$secondary:!0,children:[e.jsxs(Nl,{children:[e.jsxs("div",{children:[e.jsx(Da,{children:"Success Rate"}),e.jsx(za,{children:"Breakdown by Achieved, Completed No Action, and In Progress"})]}),e.jsxs(tt,{value:c,onChange:le=>u(le),size:"sm",children:[e.jsx(tt.Item,{value:"24h",children:"24h"}),e.jsx(tt.Item,{value:"7d",children:"7d"}),e.jsx(tt.Item,{value:"30d",children:"30d"}),e.jsx(tt.Item,{value:"all",children:"All"})]})]}),ge.total===0?e.jsx(Il,{children:"No goals in this period"}):(()=>{const le=ge.achieved/ge.total*100,de=ge.completedNoAction/ge.total*100,Re=ge.inProgress/ge.total*100,je=[{label:"Goal Achieved",value:ge.achieved,color:"var(--Alloy-green-500)",pct:le,startPct:0,endPct:le,muted:!1},{label:"Completed No Action",value:ge.completedNoAction,color:"var(--Alloy-slate-400, #9ca3af)",pct:de,startPct:le,endPct:le+de,muted:!0},{label:"In Progress",value:ge.inProgress,color:"var(--Alloy-blue-500, #446cff)",pct:Re,startPct:le+de,endPct:le+de+Re,muted:!0}];return e.jsxs(e.Fragment,{children:[e.jsxs(hm,{children:[e.jsx(QE,{children:cm(mt)}),e.jsx(Sl,{current:mt,prior:Ke})]}),e.jsx(YE,{role:"img","aria-label":`Goals by outcome: ${ge.achieved} achieved, ${ge.completedNoAction} completed with no action, ${ge.inProgress} in progress`,onMouseLeave:()=>M(null),children:je.map(_e=>e.jsx(KE,{$pct:_e.pct,$color:_e.color,$gradientStart:dm(_e.startPct),$gradientEnd:dm(_e.endPct),$muted:_e.muted,onMouseMove:Ce=>M({x:Ce.clientX,y:Ce.clientY,label:_e.label,value:_e.value,color:_e.color})},_e.label))})]})})()]}),e.jsxs(Ml,{children:[e.jsxs(Nl,{children:[e.jsxs("div",{children:[e.jsx(Da,{children:"Credit Usage Over Time"}),e.jsx(za,{children:a==="all"?"Total credits consumed per month":"Total credits consumed per day"})]}),e.jsxs(tt,{value:a,onChange:le=>i(le),size:"sm",children:[e.jsx(tt.Item,{value:"24h",children:"24h"}),e.jsx(tt.Item,{value:"7d",children:"7d"}),e.jsx(tt.Item,{value:"30d",children:"30d"}),e.jsx(tt.Item,{value:"all",children:"All"})]})]}),$e<(a==="all"?1:3)?e.jsx(Il,{children:"Not enough activity yet to show trends"}):e.jsx(yE,{data:Ae,height:200})]}),e.jsxs(Ml,{children:[e.jsx(Nl,{children:e.jsxs("div",{children:[e.jsx(Da,{children:"Specialist Activations"}),e.jsx(za,{children:"Daily activity over the past year"})]})}),e.jsxs(hm,{children:[e.jsx(fm,{children:q.toLocaleString("en-US")}),e.jsx(ZE,{children:"Activations"}),e.jsx(Sl,{current:q,prior:B})]}),we.total===0?e.jsx(Il,{children:"No activations in this period"}):e.jsxs(XE,{children:[e.jsx(JE,{children:e.jsx(eR,{role:"img","aria-label":`Daily activations heatmap with max ${fe.maxCount} in a single day`,onMouseLeave:()=>j(null),children:fe.weeks.map((le,de)=>Array.from({length:7},(Re,je)=>{const _e=le[je];if(!_e)return e.jsx(ym,{$level:0},`${de}-${je}`);const Ce=RE(_e.count,fe.maxCount),Je=_e.date.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return e.jsx(ym,{$level:Ce,onMouseMove:et=>j({x:et.clientX,y:et.clientY,label:Je,value:_e.count,color:zp[Ce]})},`${de}-${je}`)}))})}),e.jsxs(tR,{children:[e.jsx("span",{children:"Less"}),e.jsx(Pa,{$level:0}),e.jsx(Pa,{$level:1}),e.jsx(Pa,{$level:2}),e.jsx(Pa,{$level:3}),e.jsx(Pa,{$level:4}),e.jsx("span",{children:"More"})]})]})]})]}),e.jsxs(Ml,{children:[e.jsxs(Nl,{children:[e.jsxs("div",{children:[e.jsx(Da,{children:"Time Saved"}),e.jsx(za,{children:"Estimated time saved by AI specialists vs manual task completion"})]}),e.jsxs(tt,{value:f,onChange:le=>g(le),size:"sm",children:[e.jsx(tt.Item,{value:"24h",children:"24h"}),e.jsx(tt.Item,{value:"7d",children:"7d"}),e.jsx(tt.Item,{value:"30d",children:"30d"}),e.jsx(tt.Item,{value:"all",children:"All"})]})]}),e.jsxs(aR,{children:[e.jsxs(iR,{children:[e.jsx(fm,{children:$E(Le.totalTimeSavedMs)}),e.jsx(Sl,{current:Le.totalTimeSavedMs,prior:Ge.totalTimeSavedMs})]}),e.jsxs(lR,{children:[e.jsxs(cR,{children:["≈ ",PE(Le.costSaved)," saved"]}),e.jsx(Sl,{current:Le.costSaved,prior:Ge.costSaved})]})]}),Le.totalTimeSavedMs===0?e.jsx(Il,{children:"No measurable time saved in this period"}):e.jsx(EE,{data:ht,unit:ft,height:200}),e.jsxs(dR,{children:[e.jsxs("span",{children:["Based on ",um," historical baseline",um===1?"":"s"," and ",pm," estimate",pm===1?"":"s","."]}),Le.goalsWithoutBaseline>0&&e.jsxs("span",{children:[Le.goalsWithoutBaseline," goal",Le.goalsWithoutBaseline===1?"":"s"," excluded — no manual baseline data available."]})]})]}),I&&e.jsxs(mm,{style:{left:I.x,top:I.y},children:[e.jsx(gm,{children:I.label}),e.jsxs(vm,{children:[e.jsx(xm,{$color:I.color}),I.value]})]}),N&&e.jsxs(mm,{style:{left:N.x,top:N.y},children:[e.jsx(gm,{children:N.label}),e.jsxs(vm,{children:[e.jsx(xm,{$color:N.color}),N.value," activation",N.value===1?"":"s"]})]}),e.jsx(nR,{children:"Activities"}),e.jsxs(rR,{children:[e.jsx("div",{style:{width:160},children:e.jsx(En,{size:"sm",options:uR,value:m,onChange:y})}),e.jsx("div",{style:{width:180},children:e.jsx(En,{size:"sm",options:pR,value:x,onChange:k})}),e.jsx("div",{style:{width:160},children:e.jsx(En,{size:"sm",options:hR,value:b,onChange:C})}),e.jsx("div",{style:{width:150},children:e.jsx(En,{size:"sm",options:fR,value:L,onChange:S})}),e.jsx(oR,{children:e.jsxs(tt,{value:n,onChange:le=>s(le),size:"sm",children:[e.jsx(tt.Item,{value:"24h",children:"24h"}),e.jsx(tt.Item,{value:"7d",children:"7d"}),e.jsx(tt.Item,{value:"30d",children:"30d"}),e.jsx(tt.Item,{value:"all",children:"All"})]})})]}),e.jsx(v2,{timeRange:n,records:_,showFilters:!1})]})}const gR=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  min-height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`;function vR(){return e.jsx(gR,{children:e.jsx(mR,{})})}function xR(n){const s=[n.activeId,n.secActiveId];return n.selectedPersonaId&&s.push("persona",n.selectedPersonaId),n.activePageId&&s.push("page",n.activePageId),"#"+s.map(encodeURIComponent).join("/")}function yR(n){const s=n.replace(/^#/,"").trim();if(!s)return{};const a=s.split("/").map(c=>{try{return decodeURIComponent(c)}catch{return c}}),i={};a[0]&&(i.activeId=a[0]),a[1]&&(i.secActiveId=a[1]);for(let c=2;c<a.length-1;c+=2){const u=a[c],f=a[c+1];u==="persona"?i.selectedPersonaId=f:u==="page"&&(i.activePageId=f)}return i}function wR(n,s){const a=v.useRef("");v.useEffect(()=>{const i=()=>{const u=yR(window.location.hash);u.activeId!==void 0&&s.setActiveId(u.activeId),u.secActiveId!==void 0&&s.setSecActiveId(u.secActiveId),s.setSelectedPersonaId(u.selectedPersonaId??null),s.setActivePageId(u.activePageId??null)};window.location.hash&&i();const c=()=>{window.location.hash!==a.current&&i()};return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),v.useEffect(()=>{const i=xR(n);i!==window.location.hash&&(a.current=i,window.history.replaceState(null,"",i))},[n.activeId,n.secActiveId,n.selectedPersonaId,n.activePageId])}const wm=[{id:"home",label:"Home",icon:e.jsx(LC,{})},{id:"engaged",label:"Engaged",icon:e.jsx(EC,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:e.jsx(RC,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:e.jsx($C,{})},{id:"ai-home",label:"AI Home",icon:e.jsx(PC,{})}],bR=[{id:"apps",label:"Apps",icon:e.jsx(DC,{})}],bm=[{id:"docs",label:"Document Studio",icon:e.jsx(zC,{})},{id:"form",label:"Form",icon:e.jsx(FC,{})},{id:"tasks",label:"Tasks",icon:e.jsx(OC,{})},{id:"policy",label:"Policy",icon:e.jsx(BC,{}),activeIcon:e.jsx("img",{src:bM,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:e.jsx(HC,{}),activeIcon:e.jsx("img",{src:jM,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:e.jsx(UC,{})},{id:"esign",label:"E-Sign Studio",icon:e.jsx(WC,{})}],Ls={home:{defaultId:"home-overview",entries:[{id:"home-overview",label:"Overview",icon:e.jsx(Co,{size:16})},{id:"home-activity",label:"Activity",icon:e.jsx(Vn,{size:16})},{id:"home-analytics",label:"Analytics",icon:e.jsx(Ha,{size:16})}]},engaged:{defaultId:"all-people",entries:[{id:"all-people",label:"All People",icon:e.jsx(Cr,{size:16})},{id:"contractors",label:"Contractors",icon:e.jsx(Yn,{size:16})},{id:"employees",label:"Employees",icon:e.jsx(Sr,{size:16})},{group:{id:"groups",label:"Groups",icon:e.jsx(au,{size:16}),children:[{id:"engineering",label:"Engineering",icon:e.jsx(ap,{size:16})},{id:"design",label:"Design",icon:e.jsx(Fm,{size:16})},{id:"marketing",label:"Marketing",icon:e.jsx(lw,{size:16})},{id:"operations",label:"Operations",icon:e.jsx(Ua,{size:16})}]}}]},inbox:{defaultId:"inbox-all",entries:[{id:"inbox-all",label:"All",icon:e.jsx(Vn,{size:16})},{id:"inbox-action",label:"Action Required",icon:e.jsx(qt,{size:16})},{id:"inbox-mentions",label:"Mentions",icon:e.jsx(Cr,{size:16})},{id:"inbox-notify",label:"Notifications",icon:e.jsx(Co,{size:16})}]},invoice:{defaultId:"invoice-all",entries:[{id:"invoice-all",label:"All Invoices",icon:e.jsx(Vn,{size:16})},{id:"invoice-pending",label:"Pending",icon:e.jsx(Sr,{size:16})},{id:"invoice-paid",label:"Paid",icon:e.jsx(qt,{size:16})},{id:"invoice-overdue",label:"Overdue",icon:e.jsx(Ha,{size:16})}]},"ai-home":{defaultId:"ai-new-chat",entries:[{id:"ai-new-chat",label:"New Chat",icon:e.jsx(Co,{size:16})},{id:"ai-history",label:"History",icon:e.jsx(Vn,{size:16})},{id:"ai-prompts",label:"Saved Prompts",icon:e.jsx(Sr,{size:16})},{group:{id:"ai-specialists",label:"Specialist",icon:e.jsx(Cr,{size:16}),children:[{id:"ai-personas",label:"Personas",icon:e.jsx(Cr,{size:16})}]}}]},apps:{defaultId:"my-apps",entries:[{group:{id:"mp-team-apps",label:"Team apps",icon:e.jsx(Cr,{size:16}),trailingBadge:e.jsx(pt,{size:"sm",variant:"subtle",color:"neutral",children:"5"}),children:[{id:"mp-shift-marketplace",label:"Shift Marketplace",icon:ir("mp-shift-marketplace"),pinnable:!0},{id:"mp-availability",label:"Employee Availability",icon:ir("mp-availability"),pinnable:!0},{id:"mp-time-clock",label:"Smart Time Clock",icon:ir("mp-time-clock"),pinnable:!0},{id:"mp-messaging",label:"Messaging Center",icon:ir("mp-messaging"),pinnable:!0},{id:"mp-client-portal",label:"Client Staffing Portal",icon:ir("mp-client-portal"),pinnable:!0}]}},{group:{id:"mp-background-apps",label:"Background apps",icon:e.jsx(Xl,{size:16}),trailingBadge:e.jsx(pt,{size:"sm",variant:"subtle",color:"neutral",children:"5"}),children:[{id:"mp-labor-cost",label:"Labor Cost Forecasting",icon:ir("mp-labor-cost"),pinnable:!0},{id:"mp-compliance-monitor",label:"Compliance Monitor",icon:ir("mp-compliance-monitor"),pinnable:!0},{id:"mp-recruiting",label:"Recruiting Pipeline",icon:ir("mp-recruiting"),pinnable:!0},{id:"mp-credential",label:"Credential Tracker",icon:ir("mp-credential"),pinnable:!0},{id:"mp-performance",label:"Performance Insights",icon:ir("mp-performance"),pinnable:!0}]}}]},"app-tool":{defaultId:"at-overview",entries:[{id:"at-overview",label:"Overview",icon:e.jsx(Co,{size:16})},{id:"at-config",label:"Configuration",icon:e.jsx(Ua,{size:16})},{id:"at-logs",label:"Logs",icon:e.jsx(Vn,{size:16})}]},"add-app":{defaultId:"aa-integrations",entries:[{id:"aa-integrations",label:"Integrations",icon:e.jsx(au,{size:16})},{id:"aa-import",label:"Import",icon:e.jsx(Yn,{size:16})},{id:"aa-oauth",label:"OAuth Apps",icon:e.jsx(Ua,{size:16})}]},docs:{defaultId:"docs-all",entries:[{id:"docs-all",label:"All Documents",icon:e.jsx(Vn,{size:16})},{id:"docs-drafts",label:"Drafts",icon:e.jsx(Sr,{size:16})},{id:"docs-sent",label:"Sent",icon:e.jsx(Yn,{size:16})},{id:"docs-signed",label:"Signed",icon:e.jsx(qt,{size:16})}]},form:{defaultId:"form-all",entries:[{id:"form-all",label:"All Forms",icon:e.jsx(Vn,{size:16})},{id:"form-active",label:"Active",icon:e.jsx(qt,{size:16})},{id:"form-drafts",label:"Drafts",icon:e.jsx(Sr,{size:16})},{id:"form-archived",label:"Archived",icon:e.jsx(Yn,{size:16})}]},tasks:{defaultId:"tasks-mine",entries:[{id:"tasks-mine",label:"My Tasks",icon:e.jsx(Co,{size:16})},{id:"tasks-team",label:"Team Tasks",icon:e.jsx(Cr,{size:16})},{id:"tasks-completed",label:"Completed",icon:e.jsx(qt,{size:16})},{id:"tasks-overdue",label:"Overdue",icon:e.jsx(Ha,{size:16})}]},policy:{defaultId:"policy-all",entries:[{id:"policy-all",label:"All Policies",icon:e.jsx(Vn,{size:16})},{id:"policy-published",label:"Published",icon:e.jsx(qt,{size:16})},{id:"policy-review",label:"Under Review",icon:e.jsx(Sr,{size:16})},{id:"policy-drafts",label:"Drafts",icon:e.jsx(Yn,{size:16})}]},automation:{defaultId:"auto-active",entries:[{id:"auto-active",label:"Active",icon:e.jsx(qt,{size:16})},{id:"auto-templates",label:"Templates",icon:e.jsx(au,{size:16})},{id:"auto-history",label:"History",icon:e.jsx(Vn,{size:16})}]},payroll:{defaultId:"pay-overview",entries:[{id:"pay-overview",label:"Overview",icon:e.jsx(Co,{size:16})},{id:"pay-employees",label:"Employees",icon:e.jsx(Cr,{size:16})},{id:"pay-contractors",label:"Contractors",icon:e.jsx(Yn,{size:16})},{id:"pay-history",label:"History",icon:e.jsx(Vn,{size:16})}]},esign:{defaultId:"esign-awaiting",entries:[{id:"esign-awaiting",label:"Awaiting Signature",icon:e.jsx(Sr,{size:16})},{id:"esign-completed",label:"Completed",icon:e.jsx(qt,{size:16})},{id:"esign-templates",label:"Templates",icon:e.jsx(Yn,{size:16})},{id:"esign-voided",label:"Voided",icon:e.jsx(Vn,{size:16})}]}};function jR(n,s,a,i,c=[],u){const f=Ls[n];if(!f)return[];const g=m=>{const y=c.includes(m);return e.jsx(kR,{type:"button",$pinned:y,"aria-label":y?"Unpin from sidebar":"Pin to sidebar",onClick:x=>{x.stopPropagation(),u==null||u(m)},children:e.jsx(up,{size:14})})};return f.entries.map(m=>{if("group"in m){const x=m.group;return{type:"group",group:{id:x.id,label:x.label,icon:x.icon,trailingBadge:x.trailingBadge,defaultExpanded:!0,children:x.children.map(k=>({id:k.id,label:k.label,icon:k.icon,isActive:!i&&s===k.id,onClick:()=>a(k.id),trailingSlot:k.pinnable&&u?g(k.id):void 0}))}}}if("kind"in m&&m.kind==="label")return{type:"label",label:{id:m.id,label:m.label}};const y=m;return{type:"single",item:{id:y.id,label:y.label,icon:y.icon,isActive:!i&&s===y.id,onClick:()=>a(y.id)}}})}const kR=h.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;
  color: ${n=>n.$pinned?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  opacity: ${n=>n.$pinned?1:.5};
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
`;function _R(n,s){const a=Ls[n];if(a)for(const i of a.entries)if("group"in i){for(const c of i.group.children)if(c.id===s)return{label:c.label,parentLabel:i.group.label}}else{if("kind"in i&&i.kind==="label")continue;if(i.id===s)return{label:i.label}}}const Pu={home:"Home",engaged:"Engaged",inbox:"Inbox",invoice:"Invoice","ai-home":"AI Home",apps:"Apps","app-tool":"Custom App","add-app":"Add App",docs:"Document Studio",form:"Form",tasks:"Tasks",policy:"Policy Engine",automation:"Automation",payroll:"Payroll",esign:"E-Sign Studio"},CR={needs_attention:e.jsx(dp,{size:16}),live:e.jsx($s,{mark:"lines",size:24,tone:"light",state:"active"}),resolved:e.jsx(qt,{size:16})},SR=[{id:"new",label:"New",variant:"secondary"},{id:"invite",label:"Invite",variant:"primary"}];function MR({secActiveId:n}){switch(n){case"contractors":return e.jsx(mM,{});case"employees":return e.jsx(gM,{});case"engineering":return e.jsx(vM,{});case"design":return e.jsx(xM,{});case"marketing":return e.jsx(yM,{});case"operations":return e.jsx(wM,{});default:return e.jsx(fM,{})}}function IR({secActiveId:n,selectedPersonaId:s,setSelectedPersonaId:a}){return v.useEffect(()=>{n!=="ai-personas"&&a(null)},[n]),n==="ai-personas"?s?e.jsx(aE,{personaId:s,onBack:()=>a(null)}):e.jsx(vT,{onPersonaClick:a}):e.jsx(DM,{})}const y2={shift_marketplace:"Shift Marketplace",labor_cost_forecasting:"Labor Cost Forecasting",employee_availability_portal:"Employee Availability Portal",compliance_monitor:"Compliance Monitor",smart_time_clock:"Smart Time Clock",recruiting_pipeline_dashboard:"Recruiting Pipeline Dashboard",workforce_messaging_center:"Workforce Messaging Center",client_staffing_portal:"Client Staffing Portal",credential_tracker:"Credential Tracker",performance_insights_dashboard:"Performance Insights Dashboard"};function NR({activeId:n,secActiveId:s,activePageId:a,selectedPersonaId:i,setSelectedPersonaId:c,onOpenCommunity:u,onOpenInstalled:f,onOpenApp:g,pinnedAppIds:m,onTogglePin:y,installedAppIds:x,onInstallApp:k,onUninstallApp:b,lastOpenedAtById:C}){switch(n){case"home":return e.jsx(v0,{});case"engaged":return e.jsx(MR,{secActiveId:s});case"inbox":return e.jsx($M,{});case"invoice":return e.jsx(PM,{});case"ai-home":return e.jsx(IR,{secActiveId:s,selectedPersonaId:i,setSelectedPersonaId:c});case"apps":if(s==="app-marketplace"&&!(a!=null&&a.startsWith("app:")))return e.jsx(kI,{installedAppIds:x,onInstallApp:k,onUninstallApp:b,onOpenApp:g});if(a!=null&&a.startsWith("app:")){const L=a.slice(4),S=y2[L]??"App";return e.jsx(LI,{name:S})}return e.jsx(TI,{onOpenCommunity:u,onOpenApp:g,pinnedAppIds:m,onTogglePin:y,installedAppIds:x,onUninstallApp:b,lastOpenedAtById:C});case"app-tool":return e.jsx(EI,{});case"add-app":return e.jsx(RI,{});case"docs":return e.jsx($I,{});case"form":return e.jsx(PI,{});case"tasks":return e.jsx(DI,{});case"policy":return e.jsx(zI,{});case"automation":return e.jsx(FI,{});case"payroll":return e.jsx(OI,{});case"esign":return e.jsx(BI,{});default:return e.jsx(v0,{})}}function AR(){const[n,s]=v.useState("home"),[a,i]=v.useState(Ls.home.defaultId),[c,u]=v.useState(""),[f,g]=v.useState(null),[m,y]=v.useState(null),[x,k]=v.useState([]),[b,C]=v.useState([]),[L,S]=v.useState({}),{toast:I}=rg(),M=se=>{const oe=b.includes(se);if(C(pe=>pe.includes(se)?pe:[...pe,se]),S(pe=>({...pe,[se]:Date.now()})),!oe){const pe=T0(se);I.success(pe?`${pe} added to My Apps`:"App added to My Apps")}},N=se=>{const oe=b.includes(se);if(C(pe=>pe.filter(xe=>xe!==se)),S(pe=>{const{[se]:xe,...Le}=pe;return Le}),oe){const pe=T0(se);I.info(pe?`${pe} removed from My Apps`:"App removed from My Apps")}},j=se=>{S(oe=>({...oe,[se]:Date.now()}))},[_,E]=v.useState("ultron"),[z,R]=v.useState("live"),[F,X]=v.useState("employees"),Z=IN(),[V,U]=v.useState({});v.useEffect(()=>{a&&U(se=>se[n]===a?se:{...se,[n]:a})},[n,a]),wR({activeId:n,secActiveId:a,selectedPersonaId:f,activePageId:m},{setActiveId:s,setSecActiveId:i,setSelectedPersonaId:g,setActivePageId:y});function H(se){const oe=Ls[se];s(se),i((oe==null?void 0:oe.defaultId)??""),y((oe==null?void 0:oe.defaultPageId)??null)}function ne(se){const oe=Ls[se],pe=V[se],xe=(oe==null?void 0:oe.defaultId)??"";s(se),i(pe??xe),y(pe?null:(oe==null?void 0:oe.defaultPageId)??null),g(null)}function K(se){i(se),y(null)}const Y=[...n==="apps"?[{id:"app-marketplace",label:"App Marketplace",icon:e.jsx(Cr,{size:16}),isActive:a==="app-marketplace",onClick:()=>{i("app-marketplace"),y(null)}}]:[],...n==="home"||n==="apps"?[]:[{id:"usage",label:"Usage",icon:e.jsx(Ha,{size:16}),isActive:m==="usage",onClick:()=>y("usage")}],...n==="home"?[{id:"memory",label:"Memory",icon:e.jsx(ei,{size:16}),isActive:_==="memory",onClick:()=>E("memory")}]:[],{id:"settings",label:"Settings",icon:e.jsx(Ua,{size:16})}],J=se=>se.map(oe=>({...oe,isActive:oe.id===n&&!(oe.id==="apps"&&(m!=null&&m.startsWith("app:"))),onClick:()=>H(oe.id)})),q=se=>{const oe=Ls.apps;if(oe){for(const pe of oe.entries)if("group"in pe){const xe=pe.group.children.find(Le=>Le.id===se);if(xe)return xe}}},B=se=>{var xe;const oe=!x.includes(se);k(Le=>Le.includes(se)?Le.filter(Ge=>Ge!==se):[...Le,se]);const pe=(xe=q(se))==null?void 0:xe.label;oe?I.success(pe?`${pe} pinned to sidebar`:"App pinned to sidebar"):I.info(pe?`${pe} unpinned from sidebar`:"App unpinned from sidebar")},$=se=>{s("apps"),i(se);const oe=A0[se];y(oe?`app:${oe}`:null)},A=x.map(se=>{const oe=q(se);if(!oe)return null;const pe=A0[se],xe=pe?`app:${pe}`:null;return{id:`pinned-${se}`,label:oe.label,icon:oe.icon,isActive:n==="apps"&&m===xe,onClick:()=>$(se)}}).filter(se=>se!==null),P=(()=>{const se=J(bR);if(A.length===0)return se;const oe=se.findIndex(pe=>pe.id==="apps");return oe===-1?[...se,...A]:[...se.slice(0,oe+1),...A,...se.slice(oe+1)]})(),te=_R(n,a),re=(()=>{if(m==="usage")return e.jsx(Is,{children:"Usage"});if(n==="home")return e.jsx(Is,{children:_==="memory"?"Memory":_==="account"?"Account database":"Ultron"});if(n==="apps"&&a==="app-marketplace"&&!(m!=null&&m.startsWith("app:")))return e.jsx(Fa,{separator:"chevron",items:[{label:"Apps",onClick:()=>{i("my-apps"),y(null)}},{label:"App Marketplace"}]});if(n==="apps"&&(m!=null&&m.startsWith("app:"))){const se=m.slice(4),oe=y2[se]??"App";return e.jsx(Fa,{separator:"chevron",items:[{label:"Apps",onClick:()=>y(null)},{label:oe}]})}if(n==="apps")return e.jsx(Is,{children:"Apps"});if(n==="ai-home"&&a==="ai-personas"&&f){const se=Nr.find(oe=>oe.id===f);return e.jsx(Fa,{separator:"chevron",items:[{label:"Personas",onClick:()=>g(null)},{label:(se==null?void 0:se.name)??"Persona"}]})}return te?te.parentLabel?e.jsx(Fa,{separator:"chevron",items:[{label:te.parentLabel},{label:te.label}]}):e.jsx(Is,{children:te.label}):e.jsx(Is,{children:Pu[n]??n})})(),fe=m==="usage"?"Usage":Pu[n]??n,we=m==="usage"?void 0:n==="apps"&&a==="app-marketplace"&&!(m!=null&&m.startsWith("app:"))?"App Marketplace":te?te.parentLabel?`${te.parentLabel} / ${te.label}`:te.label:void 0,ge=n==="home"?e.jsxs(tt,{size:"sm",value:_,onChange:se=>E(se),"aria-label":"Home view",children:[e.jsx(tt.Item,{value:"ultron",leadingIcon:e.jsx($s,{mark:"circle",size:16,tone:"light",state:"idle","aria-label":"Ultron"}),children:"Ultron"}),e.jsx(tt.Item,{value:"account",children:"Account DB"})]}):void 0,Ae=n!=="home"?[]:_==="account"?Yu.map(se=>({type:"single",item:{id:se.id,label:se.label,icon:se.icon,isActive:F===se.id,onClick:()=>X(se.id)}})):Z.groups.flatMap(se=>{if(se.id==="needs_attention")return[{type:"single",item:{id:"live-feed",label:"Live",icon:e.jsx($s,{mark:"circle",size:24,tone:"light",state:"active"}),isActive:_==="ultron"&&z==="live",onClick:()=>{E("ultron"),R("live"),se.threads[0]&&Z.setSelectedId(se.threads[0].id)}}}];const oe=se.id==="resolved"?"done":"working",pe={type:"group",group:{id:se.id,label:se.label,icon:CR[se.id],trailingBadge:e.jsx(Eo,{children:se.threads.length}),defaultExpanded:!0,outlined:!1,children:se.threads.map(xe=>({id:xe.id,label:xe.name,icon:oe==="working"?e.jsx($s,{mark:"orbit",size:24,tone:"light",state:xe.status==="in_progress"?"active":"idle","aria-label":"Working"}):e.jsx(GI,{"data-tone":e2(xe),"aria-hidden":"true"}),isActive:_==="ultron"&&z===oe&&Z.selectedId===xe.id,onClick:()=>{E("ultron"),R(oe),Z.setSelectedId(xe.id)}}))}};return se.id==="resolved"?[{type:"divider",id:"done-divider"},pe]:[pe]}),$e=[{id:"main",label:"Workspace",items:J(wm)},{id:"tools",label:"Tools",items:P},{id:"bottom",label:"Apps",items:J(bm)}];return e.jsx(hM,{items:J(wm),toolItems:P,bottomItems:J(bm),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:Pu[n]??n,menuEntries:n==="home"?Ae:jR(n,a,K,m!==null,x,B),menuHeader:void 0,pageEntries:Y,showSecondaryNav:n!=="apps",showTopNav:!(n==="home"&&_==="ultron"),showSearch:n!=="home",searchValue:c,onSearchChange:u,headerSlot:ge,heading:re,actions:n==="home"||n==="ai-home"||n==="apps"||m==="usage"?[]:SR,showActivityButton:!0,showPonderButton:!0,noBorder:n==="apps"&&a==="app-marketplace"&&!(m!=null&&m.startsWith("app:")),mobileNav:{activeId:n,secActiveId:a,activePageId:m,selectedPersonaId:f,moduleGroups:$e,primaryLabel:fe,secondaryLabel:we,onMobileNavigate:ne,onSelectPersona:g},children:m==="usage"?e.jsx(vR,{}):n==="home"?_==="memory"?e.jsx(MA,{}):_==="account"?e.jsx(OA,{collectionId:F}):e.jsx(xA,{threads:Z.threads,stageById:Z.stageById,section:z,selectedId:Z.selectedId,onAction:Z.commit,onRefinement:Z.refine,onSaveWorkflow:Z.saveWorkflow}):e.jsx(NR,{activeId:n,secActiveId:a,activePageId:m,selectedPersonaId:f,setSelectedPersonaId:g,onOpenCommunity:()=>{i("app-marketplace"),y(null)},onOpenInstalled:()=>y(null),onOpenApp:se=>{j(se),y(`app:${se}`)},pinnedAppIds:x,onTogglePin:B,installedAppIds:b,onInstallApp:M,onUninstallApp:N,lastOpenedAtById:L})})}jx.createRoot(document.getElementById("root")).render(e.jsx(Rn.StrictMode,{children:e.jsx(q6,{children:e.jsx(AR,{})})}));
