(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(116));const c={id:"prereq_commands",title:"Prerequisite Software",sidebar_label:"Prerequisite Software"},l={unversionedId:"deployment/pre_deployment/prereq_commands",id:"deployment/pre_deployment/prereq_commands",isDocsHomePage:!1,title:"Prerequisite Software",description:"Required Tools",source:"@site/docs/deployment/pre_deployment/prereq_commands.md",slug:"/deployment/pre_deployment/prereq_commands",permalink:"/docs/deployment/pre_deployment/prereq_commands",version:"current",sidebar_label:"Prerequisite Software",sidebar:"docs",previous:{title:"Prerequisites",permalink:"/docs/deployment/pre_deployment/prerequisites"},next:{title:"Deployment Instance",permalink:"/docs/deployment/pre_deployment/deployment_instance"}},i=[{value:"Required Tools",id:"required-tools",children:[]},{value:"Installing PNPM, Serverless Framework &amp; Hygen CLI",id:"installing-pnpm-serverless-framework--hygen-cli",children:[]},{value:"AWS Account &amp; Access",id:"aws-account--access",children:[]}],s={rightToc:i};function p(e){let t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"required-tools"},"Required Tools"),Object(o.b)("p",null,"Before you can build this solution, you need the following tools installed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Node.js (10.15.x or later) (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/"}),"https://nodejs.org/"),")"),Object(o.b)("li",{parentName:"ul"},"AWS Command Line Interface (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://aws.amazon.com/cli/"}),"https://aws.amazon.com/cli/"),")"),Object(o.b)("li",{parentName:"ul"},"PNPM (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://pnpm.js.org/"}),"https://pnpm.js.org/"),")"),Object(o.b)("li",{parentName:"ul"},"Serverless Framework (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.serverless.com"}),"http://www.serverless.com"),")"),Object(o.b)("li",{parentName:"ul"},"Hygen CLI (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.hygen.io"}),"http://www.hygen.io"),")")),Object(o.b)("p",null,"Install the most commonly used prerequisites the following way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-{.sh}"}),"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash\nsource .bashrc\nnvm install 12\nnpm install -g serverless pnpm hygen DELETEME\n")),Object(o.b)("h2",{id:"installing-pnpm-serverless-framework--hygen-cli"},"Installing PNPM, Serverless Framework & Hygen CLI"),Object(o.b)("p",null,"Execute the following command to install PNPM, Serverless Framework and Hygen CLI on the machine you will be using to deploy the solution from:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install -g serverless pnpm hygen\n")),Object(o.b)("h2",{id:"aws-account--access"},"AWS Account & Access"),Object(o.b)("p",null,"You will need to create a new AWS account or have an existing AWS account to deploy this solution into."),Object(o.b)("p",null,"With that account you will also need to create an IAM user and set up a named profile on your development machine with the appropriate access keys and permissions to deploy resources in to the account. The credentials should be saved in \u2018~/.aws/credentials\u2019, as this is where the framework will look in order to deploy. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For more information on how to configure AWS CLI profiles see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"}),"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"),"."))))}p.isMDXComponent=!0}}]);