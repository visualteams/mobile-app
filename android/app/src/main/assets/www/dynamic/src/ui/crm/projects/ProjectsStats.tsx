function module(t,e,n){var a,o,l,i,r,u,c,d,s,f,m,b,S,p,I,k,E,D,h,j,P,v;n.link("@babel/runtime/helpers/objectSpread2",{default:function(t){a=t}},0),n.link("@babel/runtime/helpers/slicedToArray",{default:function(t){o=t}},1),n.link("react",{default:function(t){l=t},useEffect:function(t){i=t},useState:function(t){r=t}},0),n.link("react-meteor-hooks",{useMethod:function(t){u=t}},1),n.link("react-intl",{useIntl:function(t){c=t}},2),n.link("meteor/react-meteor-data",{withTracker:function(t){d=t}},3),n.link("@material-ui/core/Tooltip",{default:function(t){s=t}},4),n.link("../../../lib",{fetch:function(t){f=t},getDurationDays:function(t){m=t},getDurationHours:function(t){b=t}},5),n.link("../../../db/crm/projects",{default:function(t){S=t}},6),n.link("../../../lib/formatNumber",{default:function(t){p=t}},7),n.link("../../components/MainLoader",{default:function(t){I=t}},8),n.link("../../components/crm/ChipProject",{default:function(t){k=t}},9),n.link("../../../lib/users/getUsername",{default:function(t){E=t}},10),n.link("../../components/TableStat/TableStat",{default:function(t){D=t}},11),n.link("../../components/TableStat/DateStat",{default:function(t){h=t}},12),n.link("../../../lib/hooks/useDatePredefined",{default:function(t){j=t}},13),n.link("moment",{default:function(t){P=t}},14),n.link("../../../constants/FINANCES",{EnumChoice:function(t){v=t}},15);var B=function(){var t=u("teams.projects.statsByDate"),e=r(v.INVOICE_AND_PRODUCT),n=o(e,2),a=n[0],d=n[1],f=j("month"),S=f.dateStartInit,B=f.dateEndInit,N=f.duration,T=r([]),y=o(T,2),g=y[0],A=y[1],C=r(S),O=o(C,2),H=O[0],R=O[1],L=r(B),M=o(L,2),_=M[0],x=M[1],F,U=c().formatMessage,V=[{title:U({id:"Stats.Project"}),field:"name",render:function(t){return t.userId?E(t.userId):t.projectId?l.createElement(k,{projectId:t.projectId}):t.name}},{title:U({id:"Stats.NumberHours"}),field:"totalInSecond",render:function(t){return l.createElement(s,{title:m(t.totalInSecond)+" "+U({id:"ReportsWeekly.days"})},l.createElement("div",{className:"have-tooltip"},b(t.totalInSecond)))},defaultSort:"desc"},{title:U({id:"Stats.TotalAmount"}),field:"amountPeriod",render:function(t){return p(t.amountPeriod)}},{title:U({id:"Stats.ADR"}),field:"tjm",render:function(t){var e=m(t.totalInSecond);return e?p(t.amountPeriod/e):0}},{title:U({id:"Stats.NumberHoursBillable"}),field:"totalInSecondBillable",render:function(t){return l.createElement(s,{title:m(t.totalInSecondBillable)+" "+U({id:"ReportsWeekly.days"})},l.createElement("div",{className:"have-tooltip"},b(t.totalInSecondBillable)))},defaultSort:"desc"},{title:U({id:"Stats.TotalAmountONHoursBillable"}),field:"amountPeriodBillable",render:function(t){return p(t.amountPeriodBillable)}},{title:U({id:"Stats.ADRONHoursBillable"}),field:"tjm",render:function(t){var e=m(t.totalInSecondBillable);return e?p(t.amountPeriodBillable/e):0}}];i((function(){t.call({startDate:P.utc(H).startOf("days").toDate(),endDate:P.utc(_).endOf("days").toDate(),projectIds:g,choice:a})}),[H,_,g.length,a]);var W=l.createElement("div",{style:{marginTop:32,marginBottom:32}},l.createElement(h,{dateEndInit:B,dateStartInit:S,dateStart:H,setDateStart:R,dateEnd:_,setDateEnd:x,projectIds:g,setProjectIds:A,duration:N,choice:a,setValueChoices:d}));return l.createElement(l.Fragment,null,W,l.createElement("br",null),t.isLoading||!t.data?l.createElement(I,null):l.createElement(D,{columns:V,entries:t.data.timePerProject,activeTotalfooter:!0,xLabel:U({id:"Sidebar.Projects"}),formatter:function(t){return p(t)}}))};n.exportDefault(d((function(){var t;return{optionsProjects:f(S,{},{sort:{name:1}}).map((function(t){return a(a({},t),{},{label:t.name,value:t._id})}))}}))(B))}
