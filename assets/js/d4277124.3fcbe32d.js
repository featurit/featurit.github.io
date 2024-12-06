"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[312],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(6540);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(r),b=s,y=p["".concat(c,".").concat(b)]||p[b]||f[b]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(8168),s=(r(6540),r(5680));const i={sidebar_position:2},a="Stickiness Attributes",o={unversionedId:"best-practices/stickiness-attributes",id:"best-practices/stickiness-attributes",title:"Stickiness Attributes",description:"Stickiness attributes are user attributes that are used to persistently assign a user to a specific rollout or version.",source:"@site/docs/best-practices/stickiness-attributes.md",sourceDirName:"best-practices",slug:"/best-practices/stickiness-attributes",permalink:"/best-practices/stickiness-attributes",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Naming Features",permalink:"/best-practices/naming-features"}},c={},u=[],l={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,s.yg)(p,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"stickiness-attributes"},"Stickiness Attributes"),(0,s.yg)("p",null,"Stickiness attributes are user attributes that are used to persistently assign a user to a specific rollout or version."),(0,s.yg)("p",null,"Stickiness attributes are used to ensure that a user will experience rollouts, progresive deploys and versions in a consistent way. This can be important when a feature is deployed in stages, or when different versions of a feature are made available to different users."),(0,s.yg)("p",null,"In most of the cases stickiness attribute can be user IDs but sometimes we may chose another attribute."),(0,s.yg)("p",null,"For example lets imagine we have a streaming service for companies. We want to try a new feature and we roll out it for 5% of one country userbase, but we want that given any company all of the employees see the feature or none of them do."),(0,s.yg)("p",null,"In this case we will use the company id as a rollout stickiness atribute. This way all users of 5% of companyies of the segmented country will be able to see the new feature."),(0,s.yg)("p",null,"If we increase progresively to 20% of companyies the rollout but at some point we rollback to 5%, the same 5% of companyies will be able to keep seing the feature."))}f.isMDXComponent=!0}}]);