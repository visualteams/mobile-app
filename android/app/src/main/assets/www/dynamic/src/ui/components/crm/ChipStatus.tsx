function module(e,t,n){var l,a,i;n.link("react",{default:function(e){l=e}},0),n.link("@material-ui/icons/Label",{default:function(e){a=e}},1),n.link("../../../db/crm/projectstatus",{default:function(e){i=e}},2);var r=function(e){var t=e.statusId,n=i.findOne({_id:t})||{};return l.createElement("div",{style:{display:"flex",alignItems:"center"}},l.createElement(a,{style:{color:n.color,width:16}})," ",n.name)};n.exportDefault(r)}
