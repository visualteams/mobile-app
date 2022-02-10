function module(e,t,n){var i,o,r,a,c,l,u,d,s,f,m,g,p,v,k,A,E,b,h,R;n.link("@babel/runtime/helpers/slicedToArray",{default:function(e){i=e}},0),n.link("react",{default:function(e){o=e},useState:function(e){r=e}},0),n.link("meteor/react-meteor-data",{useTracker:function(e){a=e}},1),n.link("material-ui-confirm",{useConfirm:function(e){c=e}},2),n.link("react-router-dom",{useParams:function(e){l=e}},3),n.link("meteor/meteor",{Meteor:function(e){u=e}},4),n.link("@material-ui/core/Tooltip",{default:function(e){d=e}},5),n.link("@material-ui/icons/InsertDriveFile",{default:function(e){s=e}},6),n.link("@material-ui/icons/AddLocation",{default:function(e){f=e}},7),n.link("@material-ui/core/styles/makeStyles",{default:function(e){m=e}},8),n.link("./fragments/DialogAddTag",{default:function(e){g=e}},9),n.link("../../db/crm/goals/index",{default:function(e){p=e}},10),n.link("../../reducers/ui",{SET_NOTES:function(e){v=e}},11),n.link("../App",{dispatch:function(e){k=e},useGlobalState:function(e){A=e}},12),n.link("react-intl",{useIntl:function(e){E=e}},13),n.link("../../lib/users/haveRights",{default:function(e){b=e}},14),n.link("../../constants/ROLES",{ROLES:function(e){h=e}},15),n.link("../../lib/hooks/useMobile",{default:function(e){R=e}},16);var S=m({root:function(e){var t=e.isMobile;return{position:"fixed",top:t?"45vw":"50vh",right:t?void 0:0,left:t?"calc(100vh - 48px)":void 0,zIndex:200}},recordPuce:function(e){var t=e.isMobile;return{width:t?16:20,height:t?16:20,borderRadius:"50%",marginRight:8}},recordBox:function(e){var t=e.isMobile;return{width:"fit-content",display:"flex",justifyContent:"center",alignItems:"center",background:"white",borderBottomLeftRadius:4,borderBottomRightRadius:4,padding:4,cursor:"pointer",opacity:.8,margin:t?void 0:"0 auto",float:t?"right":void 0,fontSize:t?9:12}}}),B=function(e){var t=e.live,n=A("ui"),m,B=i(n,1)[0].notes,x,y=l().id,N=a((function(){return p.findOne(y)}),[y]),T=c(),C=r(!1),M=i(C,2),I=M[0],L=M[1],w,z=E().formatMessage,O,P=R().isMobile,D=S({isMobile:P}),U=u.user(),j=function(){return k({type:v,payload:!B})},F=function(){return L(!0)},G=function(){return L(!1)},H=function(){N.startRecordingAt?T({description:z({id:"ActionBar.confirmStopRecording"}),confirmationText:z({id:"ActionBar.Stop"})}).then((function(){return u.promise("events.stopRecording",{name:y})})):T({description:z({id:"ActionBar.confirmStartRecording"}),confirmationText:z({id:"ActionBar.Start"})}).then((function(){return u.promise("events.startRecording",{name:y})}))},_=N.startRecordingAt&&!N.stopRecordingAt,q=z(_?{id:"ActionBar.recordingInProgress"}:{id:"ActionBar.notRecording"}),J=z(_?{id:"ActionBar.Stop"}:{id:"ActionBar.Start"});return o.createElement("div",{className:D.root},t&&o.createElement("div",{style:{position:"fixed",top:0,left:0,right:0}},o.createElement(d,{title:J,disableHoverListener:!b(h.USER)},o.createElement("div",{onClick:function(){return!N.stopRecordingAt&&b(h.USER)&&H()},className:D.recordBox},o.createElement("div",{className:D.recordPuce,style:{backgroundColor:_?"red":"gray"}}),o.createElement("div",null,q)))),o.createElement("div",{className:"iconContainer"},U&&(!t||t&&_)&&o.createElement("div",null,o.createElement(d,{title:z(B?{id:"ActionBar.closeNotes"}:{id:"ActionBar.takeNotes"})},o.createElement(s,{fontSize:"large",className:"iconAction "+(B&&"iconAction--activate"),onClick:j}))),o.createElement("br",null),U&&(!t||t&&_)&&o.createElement("div",null,o.createElement(d,{title:z({id:"ActionBar.addATag"})},o.createElement(f,{fontSize:"large",className:"iconAction",onClick:F})))),I&&o.createElement(g,{open:!0,onClose:G}))};n.exportDefault(o.memo(B))}
