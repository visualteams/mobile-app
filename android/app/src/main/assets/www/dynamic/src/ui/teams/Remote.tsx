function module(e,t,n){var l,i,a,r,u,o,c,s,m,d,f,E,k,v;n.link("@babel/runtime/helpers/slicedToArray",{default:function(e){l=e}},0),n.link("react",{default:function(e){i=e},useState:function(e){a=e}},0),n.link("../events/RoomDisplayer",{default:function(e){r=e}},1),n.link("react-intl",{FormattedMessage:function(e){u=e}},2),n.link("react-router-dom",{useHistory:function(e){o=e}},3),n.link("@material-ui/lab/Alert/Alert",{default:function(e){c=e}},4),n.link("@material-ui/core/Grid",{default:function(e){s=e}},5),n.link("../../lib/getAllUsersInTeam",{default:function(e){m=e}},6),n.link("../components/UserCard",{default:function(e){d=e}},7),n.link("../../lib/users/haveRights",{default:function(e){f=e}},8),n.link("../../constants/ROLES",{ROLES:function(e){E=e}},9),n.link("../components/Button",{default:function(e){k=e}},10),n.link("../Title",{default:function(e){v=e}},11);var p=function(){var e=a(!0),t=l(e,2),n=t[0],p=t[1],b=o(),g=m(),R=function(){b.push("/settings/users")};return i.createElement("div",null,i.createElement("div",{id:"room-div"},i.createElement(v,null,i.createElement(u,{id:"Rooms.InternalMeeting",defaultMessage:"Vos salles de réunions internes"})),n&&i.createElement(c,{severity:"info",variant:"filled",style:{position:"absolute",bottom:16,width:"calc(100% - 32px)"},onClose:function(){return p(!1)}},i.createElement(u,{id:"Rooms.ExplainsPermanent"})),i.createElement("br",null),i.createElement(r,null)),i.createElement("br",null)," ",i.createElement("br",null),i.createElement("div",null,i.createElement(v,null,i.createElement(u,{id:"Rooms.Team",defaultMessage:"Mon équipe"})),i.createElement("br",null),i.createElement(s,{container:!0,spacing:2},g.map((function(e){return i.createElement(s,{key:e._id,item:!0},i.createElement(d,{userId:e._id}))})),f(E.MANAGE_USERS)&&i.createElement(s,{item:!0},i.createElement("div",{style:{display:"flex",alignItems:"center",height:"100%"}},i.createElement(k,{onClick:R,variant:"outlined"},i.createElement(u,{id:"Rooms.Invite",defaultMessage:"Ajouter un collaborateur"})))))))};n.exportDefault(p)}
