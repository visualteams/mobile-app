function module(e,n,t){var l,i,o,c,u,a,r,d,f,s,m,k,b,g,E,p,A,v,y,T,I,h;t.link("@babel/runtime/helpers/slicedToArray",{default:function(e){l=e}},0),t.link("react",{default:function(e){i=e},useEffect:function(e){o=e}},0),t.link("meteor/react-meteor-data",{useTracker:function(e){c=e}},1),t.link("react-router-dom",{useLocation:function(e){u=e},useParams:function(e){a=e}},2),t.link("meteor/meteor",{Meteor:function(e){r=e}},3),t.link("@material-ui/core/CircularProgress/CircularProgress",{default:function(e){d=e}},4),t.link("./RoomNotExist",{default:function(e){f=e}},5),t.link("./ActionBar",{default:function(e){s=e}},6),t.link("./Notes",{default:function(e){m=e}},7),t.link("./Timeline",{default:function(e){k=e}},8),t.link("./Video",{default:function(e){b=e}},9),t.link("./RefusedReplay",{default:function(e){g=e}},10),t.link("../App",{dispatch:function(e){E=e},useGlobalState:function(e){p=e}},11),t.link("../../reducers/name",{SET_NAME:function(e){A=e}},12),t.link("../../db/crm/goals/index",{default:function(e){v=e}},13),t.link("querystring",{"*":function(e){y=e}},14),t.link("../globalTeamId",{globalLoader:function(e){T=e},globalTeamId:function(e){I=e}},15),t.link("../../lib/hooks/useMobile",{default:function(e){h=e}},16);var M=function(){var e=p("videoinfo"),n,t=l(e,1)[0].live,M=p("ui"),x,L=l(M,1)[0],N=L.actionBar,P=L.notes,R=p("user"),S,q=l(R,1)[0].codeAccess,B=u(),C,D=a().id,_,G=h().isMobile,O=y.parse(B.search.replace("?","")),V=c((function(){return v.findOne(D,{fields:{attendees:1,teamId:1}})}),[]),j;return o((function(){I.get()?(r.subscribe("teams.goals.get",D,I.get(),(function(){E({type:A,payload:D})})),G&&(document.querySelector("body").id="forceLandscape")):T.loadAllData()}),[I.get()]),D?V?(null==V?void 0:V.attendees.find((function(e){return e.codeAccess===q||e.codeAccess===(null==O?void 0:O.codeAccess)})))||r.userId()?i.createElement("div",null,i.createElement(b,{goalId:V._id,codeAccess:null==O?void 0:O.codeAccess}),null!==t&&V&&N&&i.createElement(s,{live:!1}),V&&i.createElement(k,null),P&&V&&i.createElement(m,null)):i.createElement(g,null):i.createElement(f,null):i.createElement(d,null)};t.exportDefault(i.memo(M))}
