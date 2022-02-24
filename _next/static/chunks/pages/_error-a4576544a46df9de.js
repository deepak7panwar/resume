(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820,651],{9651:function(a,b,c){"use strict";var d=c(3227),e=c(8361),f=c(5971),g=c(2715),h=c(1193);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var i=k(c(7294)),j=k(c(2717));function k(a){return a&&a.__esModule?a:{"default":a}}var l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function m(a){var b=a.res,c=a.err;return{statusCode:b&&b.statusCode?b.statusCode:c?c.statusCode:404}}var n=function(a){f(m,a);var b,c,k=(b=m,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,d=h(b);if(c){var e=h(this).constructor;a=Reflect.construct(d,arguments,e)}else a=d.apply(this,arguments);return g(this,a)});function m(){return d(this,m),k.apply(this,arguments)}return e(m,[{key:"render",value:function(){var a=this.props.statusCode,b=this.props.title||l[a]||"An unexpected error has occurred";return i.default.createElement("div",{style:o.error},i.default.createElement(j.default,null,i.default.createElement("title",null,a?"".concat(a,": ").concat(b):"Application error: a client-side exception has occurred")),i.default.createElement("div",null,i.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),a?i.default.createElement("h1",{style:o.h1},a):null,i.default.createElement("div",{style:o.desc},i.default.createElement("h2",{style:o.h2},this.props.title||a?b:i.default.createElement(i.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),m}(i.default.Component);n.displayName="ErrorPage",n.getInitialProps=m,n.origGetInitialProps=m,b.default=n;var o={error:{color:"#000",background:"#fff",fontFamily:"-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif",height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},8e3:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d,e=((d=c(7294))&&d.__esModule?d:{"default":d}).default.createContext({});b.AmpStateContext=e},5646:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=g,b.useAmp=function(){return g(e.default.useContext(f.AmpStateContext))};var d,e=(d=c(7294))&&d.__esModule?d:{"default":d},f=c(8e3);function g(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},2717:function(a,b,c){"use strict";var d=c(930);function e(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var f,g=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(7294)),h=(f=c(1585))&&f.__esModule?f:{"default":f},i=c(8e3),j=c(5850),k=c(5646);function l(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0],b=[g.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(g.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===g.default.Fragment?a.concat(g.default.Children.toArray(b.props.children).reduce(function(a,b){return"string"==typeof b||"number"==typeof b?a:a.concat(b)},[])):a.concat(b)}var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,f,h,i;return a.reduce(function(a,b){var c=g.default.Children.toArray(b.props.children);return a.concat(c)},[]).reduce(m,[]).reverse().concat(l(b.inAmpMode)).filter((c=new Set(),f=new Set(),h=new Set(),i={},function(a){var b=!0,d=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){d=!0;var e=a.key.slice(a.key.indexOf("$")+1);c.has(e)?b=!1:c.add(e)}switch(a.type){case"title":case"base":f.has(a.type)?b=!1:f.add(a.type);break;case"meta":for(var g=0,j=n.length;g<j;g++){var k=n[g];if(a.props.hasOwnProperty(k))if("charSet"===k)h.has(k)?b=!1:h.add(k);else{var l=a.props[k],m=i[k]||new Set();("name"!==k||!d)&&m.has(l)?b=!1:(m.add(l),i[k]=m)}}break}return b})).reverse().map(function(a,c){var f=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var h=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?e(Object(c),!0).forEach(function(b){d(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},a.props||{});return h["data-href"]=h.href,h.href=void 0,h["data-optimized-fonts"]=!0,g.default.cloneElement(a,h)}return g.default.cloneElement(a,{key:f})})}b.default=function(a){var b=a.children,c=g.useContext(i.AmpStateContext),d=g.useContext(j.HeadManagerContext);return g.default.createElement(h.default,{reduceComponentsToState:o,headManager:d,inAmpMode:k.isInAmpMode(c)},b)}},1585:function(a,b,c){"use strict";var d=c(7980),e=c(3227),f=c(8361),g=c(2191),h=c(5971),i=c(2715),j=c(1193);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var k=function(a){h(k,a);var b,c,g=(b=k,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,d=j(b);if(c){var e=j(this).constructor;a=Reflect.construct(d,arguments,e)}else a=d.apply(this,arguments);return i(this,a)});function k(a){var b;return e(this,k),(b=g.call(this,a)).emitChange=function(){b._hasHeadManager&&b.props.headManager.updateHead(b.props.reduceComponentsToState(d(b.props.headManager.mountedInstances),b.props))},b._hasHeadManager=b.props.headManager&&b.props.headManager.mountedInstances,b}return f(k,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),k}(function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(7294)).Component);b.default=k},4977:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return c(9651)}])}},function(a){a.O(0,[774,888,179],function(){return a(a.s=4977)}),_N_E=a.O()}])