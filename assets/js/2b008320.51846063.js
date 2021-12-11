"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[8449],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||i;return t?r.createElement(p,a(a({ref:n},u),{},{components:t})):r.createElement(p,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4146:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},l="Lines of Code",s={unversionedId:"metrics/lines-of-code",id:"metrics/lines-of-code",title:"Lines of Code",description:"The lines of code are the total number of lines in a method (or function). The comment lines, and the blank lines are also counted. A longer method is often difficult to maintain, tend to do a lot of things and can make it hard following what's going on.",source:"@site/docs/metrics/lines-of-code.md",sourceDirName:"metrics",slug:"/metrics/lines-of-code",permalink:"/docs/metrics/lines-of-code",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/metrics/lines-of-code.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Halstead Volume",permalink:"/docs/metrics/halstead-volume"},next:{title:"Maintainability Index",permalink:"/docs/metrics/maintainability-index"}},u=[{value:"Config example",id:"config-example",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lines-of-code"},"Lines of Code"),(0,i.kt)("p",null,"The lines of code are the total number of lines in a method (or ",(0,i.kt)("em",{parentName:"p"},"function"),"). The comment lines, and the blank lines are also counted. A longer method is often difficult to maintain, tend to do a lot of things and can make it hard following what's going on."),(0,i.kt)("h2",{id:"config-example"},"Config example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  metrics:\n    ...\n    lines-of-code: 100\n    ...\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"  MetricComputationResult<int> computeImplementation(\n    Declaration node,\n    Iterable<ScopedClassDeclaration> classDeclarations,\n    Iterable<ScopedFunctionDeclaration> functionDeclarations,\n    InternalResolvedUnitResult source,\n  ) =>\n      MetricComputationResult(\n        value: 1 +\n            source.lineInfo.getLocation(node.endToken.offset).lineNumber -\n            source.lineInfo.getLocation(node.beginToken.offset).lineNumber,\n      );\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Lines of Code")," for the example function is ",(0,i.kt)("strong",{parentName:"p"},"11"),"."))}f.isMDXComponent=!0}}]);