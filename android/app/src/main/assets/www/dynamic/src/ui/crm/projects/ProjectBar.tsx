function module(e,n,t){var l,a,i,u,o,r,c,s;t.link("react",{default:function(e){l=e}},0),t.link("react-intl",{useIntl:function(e){a=e}},1),t.link("react-router-dom",{useHistory:function(e){i=e}},2),t.link("../../components/crm/ChipProject",{default:function(e){u=e}},3),t.link("../../components/TabbarPage",{default:function(e){o=e}},4),t.link("../../../lib/users/haveSub",{default:function(e){r=e}},5),t.link("../../../lib/users/haveRights",{default:function(e){c=e}},6),t.link("../../../constants/ROLES",{ROLES:function(e){s=e}},7);var f=function(e){var n=e.projectId,t,f=a().formatMessage,v=i(),d=function(e,t){return v.push("/teams/projects/"+n+"/"+t)},k=v.location.pathname.split("/")[4],p=[{label:f({id:"ProjectOverview.Resume"}),content:null,value:"resume"}];return c(s.READ_TASK)&&(p.push({label:f({id:"ProjectOverview.Tasks"}),content:null,value:"tasks"}),p.push({label:f({id:"ProjectOverview.Kanban"}),content:null,value:"kanban",isBlocked:!r("standard")})),c(s.MANAGE_PROJECT)&&p.push({label:f({id:"ProjectOverview.Configuration"}),content:null,value:"settings"}),l.createElement("div",null,l.createElement(o,{onClick:d,value:k,pages:p,rightContent:l.createElement(u,{projectId:n,disableLink:!0})}))};t.exportDefault(f)}
