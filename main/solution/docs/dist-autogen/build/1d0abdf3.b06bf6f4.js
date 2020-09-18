(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(0),n(116));const i={id:"summary",title:"Summary",sidebar_label:"Summary"},l={unversionedId:"deployment/summary",id:"deployment/summary",isDocsHomePage:!1,title:"Summary",description:"This solution has been designed from the ground up to be easy to install and get running quickly. To deploy this solution the Serverless Framework is used.",source:"@site/docs/deployment/summary.md",slug:"/deployment/summary",permalink:"/docs/deployment/summary",version:"current",sidebar_label:"Summary",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Deploying Updates",permalink:"/docs/deployment/redeployment"}},c=[],s={rightToc:c};function u(e){let t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This solution has been designed from the ground up to be easy to install and get running quickly. To deploy this solution the Serverless Framework is used."),Object(o.b)("p",null,"The solution contains 5 serverless projects:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Serverless Project"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"solution/backend/"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Code for the Backend API and Services.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"solution/infrastructure/"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Code for the creation of the AWS Infrastructure required.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"solution/machine-images/"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The machine images for the Research Workspaces.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"solution/post-deployment/"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Code that executes upon the completion of the deployment of the solution to seed data bases and configure some options.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"solution/ui/"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Code the the web-based user interface.")))),Object(o.b)("p",null,"The solution also includes a Continuous Integration/Continuous Delivery feature:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"cicd/cicd-pipeline/serverless.yml"),Object(o.b)("li",{parentName:"ul"},"cicd/cicd-source/serverless.yml")),Object(o.b)("p",null,"A solution installation can be run from your laptop or an EC2 instance\nand involves the following stages that will be described in detail in this section of the documentation and its sub-sections:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If deploying from EC2, create an instance with an appropriate\ninstance profile"),Object(o.b)("li",{parentName:"ul"},"Installing Node and some Node-based software on your local machine\nor EC2 instance"),Object(o.b)("li",{parentName:"ul"},"Downloading and unpacking the solution code"),Object(o.b)("li",{parentName:"ul"},"Choosing a stage name"),Object(o.b)("li",{parentName:"ul"},"Optionally editing a configuration file"),Object(o.b)("li",{parentName:"ul"},"Running the main installation script ",Object(o.b)("inlineCode",{parentName:"li"},"environment-deploy.sh")),Object(o.b)("li",{parentName:"ul"},"Running the post-deployment script ",Object(o.b)("inlineCode",{parentName:"li"},"master-account-deploy.sh")),Object(o.b)("li",{parentName:"ul"},"Log in and add an AWS account to your solution deployment"),Object(o.b)("li",{parentName:"ul"},"Create local user accounts")))}u.isMDXComponent=!0}}]);