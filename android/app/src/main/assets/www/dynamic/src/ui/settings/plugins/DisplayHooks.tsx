function module(e,n,t){var o,u,l,a,i,r;t.link("@babel/runtime/helpers/slicedToArray",{default:function(e){o=e}},0),t.link("react",{default:function(e){u=e},useEffect:function(e){l=e},useState:function(e){a=e}},0),t.link("meteor/meteor",{Meteor:function(e){i=e}},1),t.link("./PluginComponent",{default:function(e){r=e}},2);var c=function(e){var n=e.hookName,t=e.wrapperComponent,c=void 0===t?"span":t,f=e.data,p=a([]),m=o(p,2),s=m[0],d=m[1];return l((function(){n&&i.promise("plugins.getHooks",n).then(d)}),[n]),0===s.length?null:u.createElement("span",null,s.map((function(e){return u.createElement(c,{key:e.plugin+e.route,plugin:e.plugin},u.createElement(r,{name:e.plugin,component:e.route,data:f}))})))};t.exportDefault(c)}
