(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{263:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(9),o=(t(0),t(298)),i={id:"analyzing-apps-or-projects",title:"Analyzing apps or projects"},c={id:"analyzing-apps-or-projects",isDocsHomePage:!1,title:"Analyzing apps or projects",description:"To analyze files with Infer you can use the compilers javac and clang. You",source:"@site/docs/01-analyzing-apps-or-projects.md",permalink:"/docs/next/analyzing-apps-or-projects",version:"next",sidebar:"docs",previous:{title:"Infer workflow",permalink:"/docs/next/infer-workflow"},next:{title:"Recommended flow for CI",permalink:"/docs/next/steps-for-ci"},latestVersionMainDocPermalink:"/docs/getting-started"},l=[{value:"ant",id:"ant",children:[]},{value:"Buck",id:"buck",children:[]},{value:"cmake",id:"cmake",children:[]},{value:"Gradle",id:"gradle",children:[]},{value:"Make",id:"make",children:[]},{value:"Maven",id:"maven",children:[]},{value:"Xcodebuild",id:"xcodebuild",children:[]},{value:"xctool",id:"xctool",children:[]},{value:"Using a compilation database",id:"using-a-compilation-database",children:[]},{value:"Other build systems",id:"other-build-systems",children:[]}],s={rightToc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To analyze files with Infer you can use the compilers ",Object(o.b)("inlineCode",{parentName:"p"},"javac")," and ",Object(o.b)("inlineCode",{parentName:"p"},"clang"),". You\ncan also use Infer with ",Object(o.b)("inlineCode",{parentName:"p"},"gcc"),", however, internally Infer will use ",Object(o.b)("inlineCode",{parentName:"p"},"clang")," to\ncompile your code. So, it may not work if your code does not compile with\n",Object(o.b)("inlineCode",{parentName:"p"},"clang"),"."),Object(o.b)("p",null,"Moreover, you can run Infer with a variety of build systems. Notice that you can\nrun infer faster by running the compilation command in parallel, e.g.\n",Object(o.b)("inlineCode",{parentName:"p"},"infer run -- make -j8"),". Please also take into account that if you wish to\nanalyze a project, you should probably do ",Object(o.b)("inlineCode",{parentName:"p"},"clean")," beforehand so that the\ncompiler compiles all the files and so Infer also analyses all the files (see\nthe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"infer-workflow"}),"previous section"),")."),Object(o.b)("p",null,"Here is an overview of the build systems supported by Infer. You can get more\ninformation about how a particular build system is supported by looking at the\nSYNOPSIS section of the infer-capture manual: ",Object(o.b)("inlineCode",{parentName:"p"},"infer capture --help"),"."),Object(o.b)("h3",{id:"ant"},"ant"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- ant\n")),Object(o.b)("h3",{id:"buck"},"Buck"),Object(o.b)("p",null,"Running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- buck <buck target>\n")),Object(o.b)("p",null,"will compute the list of Infer warnings in the targets passed as argument."),Object(o.b)("p",null,"Running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- buck --deep <buck target>\n")),Object(o.b)("p",null,"will compute the list of Infer warnings in the targets passed as argument and\nall the transitive dependencies."),Object(o.b)("p",null,"The distinction between ",Object(o.b)("inlineCode",{parentName:"p"},"--deep")," and the normal Buck complation mode is only\nsupported for Java projects. For the other kinds of projects, the ",Object(o.b)("inlineCode",{parentName:"p"},"--deep"),"\noption has no effect."),Object(o.b)("h3",{id:"cmake"},"cmake"),Object(o.b)("p",null,"The most robust way is to have ",Object(o.b)("inlineCode",{parentName:"p"},"cmake")," generate a compilation database that can\nbe then processed by Infer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd build\ncmake -DCMAKE_EXPORT_COMPILE_COMMANDS=1 ..\ncd ..\ninfer run --compilation-database build/compile_commands.json\n")),Object(o.b)("p",null,"Alternatively, one can trick ",Object(o.b)("inlineCode",{parentName:"p"},"cmake")," into using infer instead of the system's\ncompilers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd build\ninfer compile -- cmake ..\ninfer run -- make -j 4\n")),Object(o.b)("h3",{id:"gradle"},"Gradle"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'infer run -- gradle <gradle task, e.g. "build">\ninfer run -- ./gradlew <gradle task, e.g. "build">\n')),Object(o.b)("h3",{id:"make"},"Make"),Object(o.b)("p",null,"Infer can analyze projects that compile with ",Object(o.b)("inlineCode",{parentName:"p"},"make")," by switching the compilers\n(for C/C++/Objective-C or Java) called by ",Object(o.b)("inlineCode",{parentName:"p"},"make")," with infer wrappers. This\ndoesn't always work, for instance if the Makefiles hardcode the absolute paths\nto the compilers (eg, if ",Object(o.b)("inlineCode",{parentName:"p"},"make")," calls ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/bin/gcc")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"gcc"),"). This is\nbecause this integration works by modifying ",Object(o.b)("inlineCode",{parentName:"p"},"PATH")," under the hood."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- make <make target>\n")),Object(o.b)("h3",{id:"maven"},"Maven"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- mvn <maven target>\n")),Object(o.b)("h3",{id:"xcodebuild"},"Xcodebuild"),Object(o.b)("p",null,"The most robust way is to generate a compilation database, then pass that\ndatabase to Infer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"xcodebuild <your build options> | tee xcodebuild.log\nxcpretty -r json-compilation-database -o compile_commands.json < xcodebuild.log > /dev/null\ninfer run --skip-analysis-in-path Pods --clang-compilation-db-files-escaped compile_commands.json\n")),Object(o.b)("p",null,"See also\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/infer/issues/9#issuecomment-280121791"}),"this comment on GitHub"),"."),Object(o.b)("p",null,"Infer also provides a direct integration to xcodebuild that swaps the compiler\nused by xcodebuild under the hood. For instance, for an iOS app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- xcodebuild -target <target name> -configuration <build configuration> -sdk iphonesimulator\n")),Object(o.b)("p",null,"There is an alternative xcodebuild integration that uses ",Object(o.b)("inlineCode",{parentName:"p"},"xcpretty")," under the\nhood; use it by passing ",Object(o.b)("inlineCode",{parentName:"p"},"--xcpretty")," to infer."),Object(o.b)("h3",{id:"xctool"},"xctool"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"xctool")," to generate a compilation database then pass it to infer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"xctool.sh <your build options> -reporter json-compilation-database:compile_commands.json\ninfer run --skip-analysis-in-path Pods --clang-compilation-db-files-escaped compile_commands.json\n")),Object(o.b)("p",null,"See also\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/infer/issues/9#issuecomment-280121791"}),"this comment on GitHub"),"."),Object(o.b)("h3",{id:"using-a-compilation-database"},"Using a compilation database"),Object(o.b)("p",null,"Many build systems like cmake, Xcode or Buck generate compilation databases.\ninfer is able to use this database directly, simplifying its usage."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer --compilation-database compile_commands.json\n")),Object(o.b)("h3",{id:"other-build-systems"},"Other build systems"),Object(o.b)("p",null,"If infer doesn't recognize your build system, you will get an error like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ infer run -- foo\nUsage Error: Unsupported build command foo\n")),Object(o.b)("p",null,"If your build system behaves like one of the above, you can tell infer to use\nthe same integration with ",Object(o.b)("inlineCode",{parentName:"p"},"--force-integration"),". For instance this will proceed\nas if ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," was working the same way as ",Object(o.b)("inlineCode",{parentName:"p"},"make"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run --force-integration make -- foo\n")),Object(o.b)("p",null,"If your build system is more exotic, and it doesn't support outputting\ncompilation databases, please let us know by\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/infer/issues/new"}),"opening an issue"),"."))}b.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);