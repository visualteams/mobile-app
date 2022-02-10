function module(n,a,e){var t,r,o;e.link("./PluginComponent",{default:function(n){t=n}},0),e.link("react",{default:function(n){r=n}},1),e.link("querystring",{"*":function(n){o=n}},2);var u=function(n){var a=n.match,e=a.params.name,u=a.params.route,c=o.parse(location.search.replace("?",""));return r.createElement(t,{name:e,component:u,data:c})};e.exportDefault(u)}

