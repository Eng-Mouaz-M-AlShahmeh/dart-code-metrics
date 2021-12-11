"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[4808],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7271:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={},l="No magic number",u={unversionedId:"rules/common/no-magic-number",id:"rules/common/no-magic-number",title:"No magic number",description:"Configurable",source:"@site/docs/rules/common/no-magic-number.md",sourceDirName:"rules/common",slug:"/rules/common/no-magic-number",permalink:"/docs/rules/common/no-magic-number",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/no-magic-number.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"No equal then else",permalink:"/docs/rules/common/no-equal-then-else"},next:{title:"No object declaration",permalink:"/docs/rules/common/no-object-declaration"}},s=[{value:"Rule id",id:"rule-id",children:[],level:2},{value:"Severity",id:"severity",children:[],level:2},{value:"Description",id:"description",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Config example",id:"config-example",children:[],level:2}],m={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no-magic-number"},"No magic number"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,o.kt)("h2",{id:"rule-id"},"Rule id"),(0,o.kt)("p",null,"no-magic-number"),(0,o.kt)("h2",{id:"severity"},"Severity"),(0,o.kt)("p",null,"Warning"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Warns against using number literals outside of named constants or variables. Exceptions are made for common constants (by default: -1, 0 and 1) and for literals inside ",(0,o.kt)("inlineCode",{parentName:"p"},"DateTime")," constructor as there is no way to create ",(0,o.kt)("inlineCode",{parentName:"p"},"const DateTime")," and extracting each ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," argument to separate named constant is far too inconvenient."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"double circleArea(double radius) => 3.14 * pow(radius, 2); // warns against 3.14\n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"const pi = 3.14;\ndouble circleArea(double radius) => pi * pow(radius, 2); // using named constant so no warning\n")),(0,o.kt)("p",null,"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"...\nfinal finalPrice = cart.productCount > 4 // warns against 4\n  ? cart.totalPrice - (cart.totalPrice * 0.25); // warns against 0.25\n  : cart.totalPrice\n...\n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"...\nconst productCountThresholdForDiscount = 4;\nconst discount = 0.25;\nfinal finalPrice = cart.productCount > productCountThresholdForDiscount\n  ? cart.totalPrice - (cart.totalPrice * discount);\n  : cart.totalPrice\n...\n")),(0,o.kt)("p",null,"Exception:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"final someDay = DateTime(2006, 12, 1); // DateTime has no const constructor\n")),(0,o.kt)("h2",{id:"config-example"},"Config example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - no-magic-number:\n        allowed: [3.14, 100, 12]\n")))}p.isMDXComponent=!0}}]);