(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(1),n=r(6),o=(r(0),r(116));const i={id:"introduction",title:"Studies Introduction",sidebar_label:"Introduction"},s={unversionedId:"user_guide/sidebar/common/studies/introduction",id:"user_guide/sidebar/common/studies/introduction",isDocsHomePage:!1,title:"Studies Introduction",description:"This solution enables an organization to provide researchers with a centralized location to search for data sets (studies) and deploy research workspaces with them. Researchers can access a portal, quickly find data that they are interested in and with a few clicks be analyzing it in SageMaker Notebooks, for example.",source:"@site/docs/user_guide/sidebar/common/studies/introduction.md",slug:"/user_guide/sidebar/common/studies/introduction",permalink:"/docs/user_guide/sidebar/common/studies/introduction",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Dashboard",permalink:"/docs/user_guide/sidebar/common/dashboard/introduction"},next:{title:"Creating a Study",permalink:"/docs/user_guide/sidebar/common/studies/creating_a_study"}},c=[],d={rightToc:c};function l(e){let t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This solution enables an organization to provide researchers with a centralized location to search for data sets (studies) and deploy research workspaces with them. Researchers can access a portal, quickly find data that they are interested in and with a few clicks be analyzing it in SageMaker Notebooks, for example."),Object(o.b)("p",null,"This solution allows an organization to provide access to their data sets, or a subset of their data sets, to external organizations in a controlled way. Further to this, the external organization can use their own AWS account for the research workspace and access the data in the hosting organization."),Object(o.b)("p",null,"A user can mount zero or more Studies from each of the levels to their ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/user_guide/sidebar/common/workspaces/introduction"}),"Workspaces"),"."),Object(o.b)("p",null,"There are 3 types of Studies available."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("strong",{parentName:"td"},"My Studies")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Studies that are only available to the user that created them. A user can use this to work on datasets that are exclusive to them or that are used specifically for their research. Users can also grant permission to other users in order to allow them access to their studies.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("strong",{parentName:"td"},"Organization Studies")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Studies that have been shared with the Organization. These could be data that had been collected by efforts of the organization or are licensed to the organization. It is possible to grant or deny users access to this data in order to comply with regulations or licensing restrictions on the data.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("strong",{parentName:"td"},"Open Data")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The solution provides access to AWS Open Data Data Sets by frequently scanning the set of AWS Open Datasets and adding new datasets to this category. This can include the 1000 genomes and other datasets openly available through Amazon.")))),Object(o.b)("p",null,"All Study data is stored in the ",Object(o.b)("strong",{parentName:"p"},"studydata"),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/deployment/reference/aws_services"}),"S3 Bucket"),"."))}l.isMDXComponent=!0},116:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),p=a,h=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return r?n.a.createElement(h,s(s({ref:t},d),{},{components:r})):n.a.createElement(h,s({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);