"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},a="Troubleshooting problems with the client",l={unversionedId:"faq/client-issues",id:"faq/client-issues",title:"Troubleshooting problems with the client",description:"If your client or launcher is not launching or is misbehaving, try one of the steps below to try to resolve the issue. Also make sure to check logs for presence of any Exception or ERROR:.",source:"@site/docs/faq/client-issues.md",sourceDirName:"faq",slug:"/faq/client-issues",permalink:"/faq/client-issues",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/faq/"},next:{title:"GPU FAQ",permalink:"/faq/gpu-faq"}},s={},c=[{value:"javax.net.ssl.SSLHandshakeException: PKIX path building failed",id:"javaxnetsslsslhandshakeexception-pkix-path-building-failed",level:3},{value:"java.net.ProtocolException on Mac OSX",id:"javanetprotocolexception-on-mac-osx",level:3},{value:"Deleting the cache (Last Precaution)",id:"deleting-the-cache-last-precaution",level:3}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting-problems-with-the-client"},"Troubleshooting problems with the client"),(0,r.kt)("p",null,"If your client or launcher is not launching or is misbehaving, try one of the steps below to try to resolve the issue. Also make sure to check logs for presence of any Exception or ERROR:."),(0,r.kt)("p",null,"To find logs, do one of the following things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"%userprofile%\\.ikov\\logs")," on Windows or ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.ikov/logs")," on Linux and macOS.")),(0,r.kt)("h1",{id:"client-not-launching"},"Client not launching"),(0,r.kt)("p",null,"If you see error fetching bootstrap in launcher.log you are unable to connect to Ikov servers to get the bootstrap for startup. The error will be accompanied by an exception"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ConnectException: Connection timed out - this is caused by either a firewall blocking the connection or a routing issue, try adding an exception in your firewall for runelite, reseting/changing your current network."),(0,r.kt)("li",{parentName:"ul"},"IOException: Server returned HTTP response code: 403 - this means the server has seen your request but is denying you, in our case that would be cloudflare intentionally blocking your connection for whatever reason.")),(0,r.kt)("h3",{id:"javaxnetsslsslhandshakeexception-pkix-path-building-failed"},"javax.net.ssl.SSLHandshakeException: PKIX path building failed"),(0,r.kt)("p",null,"Some software or certificate installed on your computer is interrupting the secure connection to download the launcher bootstrap. This may be caused by antivirus software, a root certificate (such as those which may be installed on computers used for work), or any number of other sources. To circumvent this, you can try adjusting your antivirus settings or disabling them temporarily or, if no other workaround will work, by using the --insecure-skip-tls-verification launcher flag."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Option 1 "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Go to the ikov launcher and Right click "Properties".'),(0,r.kt)("li",{parentName:"ul"},'Go to "Shortcut" and type at the target bar ',(0,r.kt)("inlineCode",{parentName:"li"},"--insecure-skip-tls-verification")," behind the URL."),(0,r.kt)("li",{parentName:"ul"},"Save en retry to launch the game")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Options 2 "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the certificate from Ikov"),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://ikov.io/download"},"ikov.io/download")),(0,r.kt)("li",{parentName:"ul"},"Go to the Keychain (Lock) next to the URL "),(0,r.kt)("li",{parentName:"ul"},"Go to Security "),(0,r.kt)("li",{parentName:"ul"},"Go to Certificate is valid"),(0,r.kt)("li",{parentName:"ul"},"Go to Details and export the certificate"),(0,r.kt)("li",{parentName:"ul"},"Install the Certificate on your Local computer."),(0,r.kt)("li",{parentName:"ul"},"Check if the download/install is working"),(0,r.kt)("li",{parentName:"ul"},"if not, remove Ikov and install it again.")),(0,r.kt)("h3",{id:"javanetprotocolexception-on-mac-osx"},"java.net.ProtocolException on Mac OSX"),(0,r.kt)("p",null,"This is caused by having SOCKS proxy enabled on your network settings"),(0,r.kt)("h3",{id:"deleting-the-cache-last-precaution"},"Deleting the cache (Last Precaution)"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"%userprofile%\\.ikov\\")," on Windows or ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.ikov/")," on Linux and macOS, then delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"cache")," folder. Do not delete anything else as you may find you'll lose RuneLite settings and saved credentials."))}h.isMDXComponent=!0}}]);