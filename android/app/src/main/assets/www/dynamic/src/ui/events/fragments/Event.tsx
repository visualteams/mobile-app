function module(e,t,n){var i,o,a,l,r,c,u,s,f,m,d;n.link("@babel/runtime/helpers/slicedToArray",{default:function(e){i=e}},0),n.link("react",{default:function(e){o=e},useState:function(e){a=e}},0),n.link("material-ui-confirm",{useConfirm:function(e){l=e}},1),n.link("meteor/meteor",{Meteor:function(e){r=e}},2),n.link("@material-ui/core/styles/makeStyles",{default:function(e){c=e}},3),n.link("@material-ui/icons/Edit",{default:function(e){u=e}},4),n.link("@material-ui/icons/Delete",{default:function(e){s=e}},5),n.link("../../App",{useGlobalState:function(e){f=e}},6),n.link("../../../lib/time",{secondsToHms:function(e){m=e}},7),n.link("./EditTag",{default:function(e){d=e}},8);var p=c({root:{cursor:"pointer","&:hover":{fontWeight:500}},timeDisplay:{color:"#04a6fc"},actions:{marginLeft:8,marginRight:8,"&:hover":{color:"#04a6fc !important"}}}),k=function(e){var t=e.event,n=e.goalId,c=f("videoinfo"),k,y=i(c,1)[0].playerRef,v=a(!1),g=i(v,2),h=g[0],E=g[1],S=l(),C=p(),b=function(e){return function(){y&&(y.currentTime(parseInt(String(e),0)),y.play())}},D=function(){var e={goalId:n,event:t};return S({description:"Are you sure you want delete this highlight ?"}).then((function(){return r.promise("events.delete",e)}))},I=function(){E(!0)};return h?o.createElement(d,{goalId:n,event:t,onCancel:function(){return E(!1)}}):o.createElement("div",{className:C.root},o.createElement("span",{onClick:b(t.time),key:t._id},t.description," ",o.createElement("span",{className:C.timeDisplay},"[",m(t.time),"]")),o.createElement("span",{onClick:I,className:C.actions},o.createElement(u,{style:{fontSize:16}})),o.createElement("span",{onClick:D,className:C.actions,style:{color:"red"}},o.createElement(s,{style:{fontSize:16}})))};n.exportDefault(o.memo(k))}
