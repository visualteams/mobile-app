function module(e,n,t){var a,r,l,i,u,o,c,f,m,d,s,p,v;t.link("@babel/runtime/regenerator",{default:function(e){a=e}},0),t.link("@babel/runtime/helpers/slicedToArray",{default:function(e){r=e}},1),t.link("react",{default:function(e){l=e},useEffect:function(e){i=e},useState:function(e){u=e}},0),t.link("bee-plugin",{default:function(e){o=e}},1),t.link("meteor/meteor",{Meteor:function(e){c=e}},2),t.link("@material-ui/core/Select",{default:function(e){f=e}},3),t.link("@material-ui/core/InputLabel",{default:function(e){m=e}},4),t.link("@material-ui/core/MenuItem",{default:function(e){d=e}},5),t.link("@material-ui/core/TextField",{default:function(e){s=e}},6),t.link("@material-ui/core/FormControl/FormControl",{default:function(e){p=e}},7),t.link("../../../public/assets/template",{default:function(e){v=e}},8);var b="",g=function(){var e=u(null),n=r(e,2),t=n[0],g=n[1],k=u(""),h=r(k,2),_=h[0],y=h[1],E=u([]),j=r(E,2),F=j[0],S=j[1],x=function(e){return b=e,y(e)};i((function(){C()}),[]),i((function(){t&&c.promise("getBeeToken").then((function(e){var n=new o(JSON.parse(e)),a,r={uid:"replay-admin",container:"bee-plugin-container",language:"fr-FR",mergeTags:[{name:"Date de la conference",value:"[conference_date]"},{name:"Heure de la conference",value:"[conference_hour]"},{name:"Nom de la conference",value:"[conference_name]"},{name:"URL de la conference",value:"[conference_link]"},{name:"URL du replay de la conférence",value:"[conference_link_replay]"},{name:"Nom de l'organisation",value:"[company_name]"},{name:"Lien d'invitation dans l'organisation",value:"[invitation_link]"}],onSave:function(e,n){t&&c.promise("mails.update",{_id:t._id,jsonFile:e,htmlContent:n,subject:b}).then((function(){C().then((function(){return Alert.success("Sucessfully edited")}))})).catch((function(){Alert.error("Error")}))},onError:console.error};n.start(r,t.jsonFile?JSON.parse(t.jsonFile):v)}))}),[t]);var C=function(){function e(){var e;return a.async(function(){function n(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.awrap(c.promise("mails.list"));case 2:e=n.sent,S(e),t||(g(e[0]),x(e[0].subject||""));case 5:case"end":return n.stop()}}return n}(),null,null,null,Promise)}return e}(),T=function(e){var n=e.target.value,t=F.find((function(e){return e._id===n}));t&&(g(t),x(t.subject||""))};return l.createElement("div",null,l.createElement("div",{style:{display:"flex",alignItems:"center"}},l.createElement(p,null,l.createElement(m,null,"Mail"),l.createElement(f,{value:t?t._id:"",onChange:T,inputProps:{name:"emailId",id:"email-id"},autoWidth:!0},F.map((function(e){return l.createElement(d,{key:e._id,value:e._id},e.type)}))))),l.createElement(s,{label:"Subject",value:_,inputProps:{name:"subject",id:"subject"},fullWidth:!0,onChange:function(e){var n=e.currentTarget.value;return x(n)}}),l.createElement("br",null),l.createElement("br",null),t&&l.createElement("div",{key:t._id,id:"bee-plugin-container",style:{width:"100%",height:"750px"}}))};t.exportDefault(l.memo(g))}
