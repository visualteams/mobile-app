function module(e,n,t){var r,i,l,u,o,c,a,s,m,d,f,k,p,E,g,h,b,y;t.link("@babel/runtime/regenerator",{default:function(e){r=e}},0),t.link("@babel/runtime/helpers/extends",{default:function(e){i=e}},1),t.link("@babel/runtime/helpers/objectSpread2",{default:function(e){l=e}},2),t.link("@babel/runtime/helpers/slicedToArray",{default:function(e){u=e}},3),t.link("react",{"*":function(e){o=e}},0),t.link("react-intl",{FormattedMessage:function(e){c=e}},1),t.link("react",{useEffect:function(e){a=e},useState:function(e){s=e}},2),t.link("material-ui-confirm",{useConfirm:function(e){m=e}},3),t.link("meteor/meteor",{Meteor:function(e){d=e}},4),t.link("@material-ui/core/Grid",{default:function(e){f=e}},5),t.link("@material-ui/core/styles/makeStyles",{default:function(e){k=e}},6),t.link("@visualteams/ui-kit/colors",{default:function(e){p=e}},7),t.link("../components/Button",{default:function(e){E=e}},8),t.link("./FolderCard",{default:function(e){g=e}},9),t.link("./AddFormFolder",{default:function(e){h=e}},10),t.link("../../constants/ROLES",{ROLES:function(e){b=e}},11),t.link("../../lib/hooks/useMobile",{default:function(e){y=e}},12);var v=k({title:{fontSize:18,fontWeight:500,color:p.primary}}),w=function(){var e=s(!1),n=u(e,2),t=n[0],k=n[1],p=s({}),w=u(p,2),x=w[0],F=w[1],S=s([]),C=u(S,2),_=C[0],A=C[1],D=v(),I=m(),M,K=y().isMobile;a((function(){T()}),[]);var T=function(){function e(){return r.async(function(){function e(e){for(;;)switch(e.prev=e.next){case 0:return k(!1),e.abrupt("return",d.promise("knowledge.read",{selector:{parentId:null}}).then(A));case 2:case"end":return e.stop()}}return e}(),null,null,null,Promise)}return e}(),W=function(){F({}),k(!0)},j=function(e){var n=l(l({},e),{},{parentId:null});return n._id?d.promise("knowledge.update",n._id,n).then(T):d.promise("knowledge.create",n).then(T)},G=function(e){return function(){F(e),k(!0)}},L=function(e){return function(){return I().then(function(){function n(){return r.async(function(){function n(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.awrap(d.promise("knowledge.delete",{_id:e._id}));case 2:return n.abrupt("return",T());case 3:case"end":return n.stop()}}return n}(),null,null,null,Promise)}return n}())}},N=function(){return o.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100%"}},o.createElement("img",{src:"/images/wiki.svg",width:300}),o.createElement("br",null),o.createElement("br",null),o.createElement("div",{style:{fontWeight:600}},o.createElement(c,{id:"Knowledge.noFolders"})),o.createElement("br",null),o.createElement(E,{variant:"outlined",onClick:W},o.createElement(c,{id:"Knowledge.AddFirstTheme"})))};return o.createElement(o.Fragment,null,o.createElement(h,{open:!!t,model:x,onClose:function(){return k(!1)},onSubmit:j}),o.createElement(f,{container:!0,spacing:0,style:{height:"100%"}},o.createElement(f,{item:!0,xs:12,sm:10},0===_.length&&o.createElement(N,null),_.length>0&&o.createElement(f,{container:!0,spacing:K?1:4,style:{padding:32}},_.map((function(e){return o.createElement(f,{key:e._id,item:!0,xs:6,sm:6,md:4,lg:3},o.createElement(g,i({},e,{onEdit:G(e),onDelete:L(e)})))})))),o.createElement(f,{item:!0,xs:12,sm:2,style:{background:"white",padding:32}},o.createElement("div",{className:D.title},o.createElement(c,{id:"DocumentDisplayer.actions"})),o.createElement(E,{onClick:W,restrictedFeature:b.MANAGE_WIKI},o.createElement(c,{id:"Knowledge.createTheme"})))))};t.exportDefault(w)}
