function module(e,n,t){var l,u,a,i,o,s,c,r;t.link("react",{default:function(e){l=e}},0),t.link("react-intl",{useIntl:function(e){u=e}},1),t.link("../../components/TabbarPage",{default:function(e){a=e}},2),t.link("./customersList",{default:function(e){i=e}},3),t.link("./CustomersResume",{default:function(e){o=e}},4),t.link("../../../lib/users/haveSub",{default:function(e){s=e}},5),t.link("../../../lib/users/haveRights",{default:function(e){c=e}},6),t.link("../../../constants/ROLES",{ROLES:function(e){r=e}},7);var f=function(){var e,n=u().formatMessage,t=[{label:n({id:"Customer.ListMenu"}),content:l.createElement(i,null)}];return c(r.ACCESS_CUSTOMERS_STATS)&&t.push({label:n({id:"Customer.Rapport"}),content:l.createElement(o,null),isBlocked:!s("standard")}),l.createElement(a,{pages:t})};t.exportDefault(f)}
