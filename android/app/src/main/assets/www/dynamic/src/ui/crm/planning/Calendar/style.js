function module(e,r,n){var o,a;n.export({useStyles:function(){return i}}),n.link("@material-ui/core/styles/makeStyles",{default:function(e){o=e}},0),n.link("./Calendar",{firstColumnWidth:function(e){a=e}},1);var t="rgba(0, 0, 0, 0.04)",i=o({root:{width:"calc(100% - 2px)",background:"#fff",border:"1px solid gray",position:"relative",overflowY:"auto",overflowX:"hidden",transform:"translate3d(0, 0, 0)"},userColContainer:{position:"fixed",overflow:"hidden",paddingTop:40,background:"#ffffff",zIndex:30,"& .user-col":{minHeight:100,backgroundColor:t,"& > div":{marginLeft:5}}},lineSpacer:{height:40},rowCalendarBackground:{backgroundColor:t,minHeight:100,position:"fixed",left:0,width:"100%"},rowCalendar:{minHeight:100},usersContainer:{transform:"translate3d(0,0,0)"},toolbarFloating:{position:"fixed",bottom:20,right:20,zIndex:999,display:"flex",alignItems:"center","& > div":{margin:16}},weekEnd:{backgroundImage:"linear-gradient(45deg, transparent 40%, #e8e3e3 40%, #e8e3e3 50%, transparent 50%, transparent 90%, #e8e3e3 90%, #e8e3e3 100%)",backgroundSize:"7.07px 7.07px"},today:{backgroundColor:"rgba(74, 136, 242, 0.1)"},rowsContainer:{marginLeft:a}})}
