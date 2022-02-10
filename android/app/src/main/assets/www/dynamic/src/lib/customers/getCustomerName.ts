function module(n,e,u){var o;u.link("../../db/crm/customers",{default:function(n){o=n}},0);var i=function(n){var e=o.findOne({_id:n},{fields:{name:1}});return(null==e?void 0:e.name)||"Anonymous"};u.exportDefault(i)}

