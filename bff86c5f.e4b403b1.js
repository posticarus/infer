(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),o=(n(0),n(298)),i={id:"eradicate",title:"Infer : Eradicate"},l={id:"version-0.17.0/eradicate",isDocsHomePage:!1,title:"Infer : Eradicate",description:'"I call it my billion-dollar mistake. It was the invention of the null',source:"@site/versioned_docs/version-0.17.0/01-eradicate.md",permalink:"/docs/0.17.0/eradicate",version:"0.17.0",sidebar:"version-0.17.0/docs",previous:{title:"Infer : AI",permalink:"/docs/0.17.0/checkers"},next:{title:"Infer : AL",permalink:"/docs/0.17.0/linters"},latestVersionMainDocPermalink:"/docs/getting-started"},c=[{value:"What is Infer:Eradicate?",id:"what-is-infereradicate",children:[]},{value:"What is the @Nullable convention?",id:"what-is-the-nullable-convention",children:[]},{value:"What is annotated?",id:"what-is-annotated",children:[]},{value:"How is Infer:Eradicate invoked?",id:"how-is-infereradicate-invoked",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'"I call it my billion-dollar mistake. It was the invention of the null\nreference in 1965."'),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Tony_Hoare"}),"Tony Hoare"))),Object(o.b)("h3",{id:"what-is-infereradicate"},"What is Infer:Eradicate?"),Object(o.b)("p",null,"Infer:Eradicate is a type checker for @Nullable annotations for Java. It is part\nof the Infer static analysis suite of tools. The goal is to eradicate null\npointer exceptions."),Object(o.b)("a",{href:"https://developer.android.com/reference/android/support/annotation/Nullable.html"},"@Nullable"),"annotations denote that a parameter, field or the return value of a method can be null. When decorating a parameter, this denotes that the parameter can legitimately be null and the method will need to deal with it. When decorating a method, this denotes the method might legitimately return null.",Object(o.b)("p",null,"Starting from @Nullable-annotated programs, the checker performs a flow\nsensitive analysis to propagate the nullability through assignments and calls,\nand flags errors for unprotected accesses to nullable values or\ninconsistent/missing annotations. It can also be used to add annotations to a\npreviously un-annotated program."),Object(o.b)("h3",{id:"what-is-the-nullable-convention"},"What is the @Nullable convention?"),Object(o.b)("p",null,"If you say nothing, you're saying that the value cannot be null. This is the\nrecommended option when possible:"),Object(o.b)("p",null,"Program safely, annotate nothing!"),Object(o.b)("p",null,"When this cannot be done, add a @Nullable annotation before the type to indicate\nthat the value can be null."),Object(o.b)("h3",{id:"what-is-annotated"},"What is annotated?"),Object(o.b)("p",null,"Annotations are placed at the interface of method calls and field accesses:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parameters and return type of a method declaration."),Object(o.b)("li",{parentName:"ul"},"Field declarations.")),Object(o.b)("p",null,"Local variable declarations are not annotated: their nullability is inferred."),Object(o.b)("h3",{id:"how-is-infereradicate-invoked"},"How is Infer:Eradicate invoked?"),Object(o.b)("p",null,"Eradicate can be invoked by adding the option ",Object(o.b)("inlineCode",{parentName:"p"},"--eradicate")," to the checkers mode\nas in this example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -a checkers --eradicate -- javac Test.java\n")),Object(o.b)("p",null,"The checker will report an error on the following program that accesses a\nnullable value without null check:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  int getLength(@Nullable String s) {\n    return s.length();\n  }\n}\n")),Object(o.b)("p",null,"But it will not report an error on this guarded dereference:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  int getLength(@Nullable String s) {\n    if (s != null) {\n      return s.length();\n    } else {\n      return -1;\n    }\n  }\n}\n")),Object(o.b)("p",null,"Eradicate reports the following ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/eradicate-warnings"}),"warnings"),"."))}u.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);