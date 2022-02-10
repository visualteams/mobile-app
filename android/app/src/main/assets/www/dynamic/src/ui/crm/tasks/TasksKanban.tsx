function module(e,t,n){var r,a,i,l,o,u,s,c,d,f,m,k,p,h,g,v;n.link("@babel/runtime/helpers/extends",{default:function(e){r=e}},0),n.link("@babel/runtime/regenerator",{default:function(e){a=e}},1),n.link("lodash/sortBy",{default:function(e){i=e}},0),n.link("react",{default:function(e){l=e}},1),n.link("react-trello",{default:function(e){o=e}},2),n.link("react-intl",{FormattedMessage:function(e){u=e},useIntl:function(e){s=e}},3),n.link("meteor/meteor",{Meteor:function(e){c=e}},4),n.link("@material-ui/core/styles/makeStyles",{default:function(e){d=e}},5),n.link("@visualteams/ui-kit/colors",{default:function(e){f=e}},6),n.link("../../../lib/time",{secondsToHms:function(e){m=e}},7),n.link("./CustomCard",{default:function(e){k=e}},8),n.link("./withTasks",{default:function(e){p=e}},9),n.link("../../components/Button",{default:function(e){h=e}},10),n.link("../../../lib/whiteOrBlack",{default:function(e){g=e}},11),n.link("../../../constants/ROLES",{ROLES:function(e){v=e}},12);var E=250,b=d({laneHeader:{cursor:"move",display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:4,borderBottom:"1px solid "+f.secondary},subTitleLane:{fontSize:10,marginLeft:16}}),y=function(e){var t=e.tasks,n=e.tasksStatus,d=e.onEdit,p=e.onAdd,y,x=s().formatMessage,w=b(),C=function(e){var t=e.title,n=e.color,r=e.cards,a=e.id,i=r.map((function(e){var t;return null!==(t=e.task)&&void 0!==t&&t.estimatedTime?e.task.estimatedTime:0})),o=function(e,t){return e+t},s=i.length>0?i.reduce(o):0;return l.createElement("div",{className:w.laneHeader},l.createElement("div",null,l.createElement("div",{style:{fontWeight:600,display:"flex",alignItems:"center"}},l.createElement("div",{style:{borderRadius:"50%",backgroundColor:n,color:g(n),width:12,height:12,marginRight:4}}),x({id:t})),l.createElement("div",{className:w.subTitleLane},r.length," ",l.createElement(u,{id:"Trello.cards"}),", ",m(s))),l.createElement("div",null,l.createElement(h,{color:"primary",variant:"outlined",size:"small",onClick:function(){return p({taskstatusId:a})},restrictedFeature:v.MANAGE_TASK},"+")))},L={lanes:[]};n.forEach(function(){function e(e){var n,r;return a.async(function(){function a(a){for(;;)switch(a.prev=a.next){case 0:n=i(t.filter((function(t){return t.taskstatusId===e._id})),"order"),r=n.map((function(e){return{task:e,id:e._id}})),L.lanes.push({id:e._id,title:e.name,color:e.color,cards:r});case 3:case"end":return a.stop()}}return a}(),null,null,null,Promise)}return e}());var T=function(){function e(e,t,n,r){return a.async(function(){function t(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.awrap(c.promise("tasks.update",{_id:e},{taskstatusId:n,position:r}).catch((function(e){return Alert.error(x({id:"Trello.ErrorCreate"})+e)})));case 2:return t.next=4,a.awrap(c.promise("tasks.move",e,r));case 4:case"end":return t.stop()}}return t}(),null,null,null,Promise)}return e}(),S=function(){function e(e,t,r){return a.async(function(){function a(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",c.promise("taskStatus.move",r.id,n[e],n[t]));case 1:case"end":return a.stop()}}return a}(),null,null,null,Promise)}return e}(),A="calc(100vh - 176px)";return l.createElement(o,{style:{backgroundColor:"transparent",height:"auto",margin:0,padding:0},data:L,draggable:!0,components:{Card:function(e){return l.createElement(k,r({},e,{onClick:d}))},LaneHeader:C,AddCardLink:function(){return null}},laneStyle:{height:A,maxHeight:A,background:"#efefef",border:"1px solid "+f.totalLine,maxWidth:E,width:E,minWidth:E},handleDragEnd:T,handleLaneDragEnd:S})};n.exportDefault(p(y))}
