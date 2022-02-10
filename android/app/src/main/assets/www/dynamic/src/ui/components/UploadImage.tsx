function module(e,t,n){var i,l,a,o,r,c,u,s,d,f,m,g,p,h,v,E;n.link("@babel/runtime/helpers/slicedToArray",{default:function(e){i=e}},0),n.link("react",{default:function(e){l=e},useState:function(e){a=e}},0),n.link("react-intl",{FormattedMessage:function(e){o=e},useIntl:function(e){r=e}},1),n.link("react-cropper",{default:function(e){c=e}},2),n.link("react-toastify",{toast:function(e){u=e}},3),n.link("clsx",{default:function(e){s=e}},4),n.link("@material-ui/core/Button/Button",{default:function(e){d=e}},5),n.link("@material-ui/icons/Backup",{default:function(e){f=e}},6),n.link("@material-ui/icons/Clear",{default:function(e){m=e}},7),n.link("@material-ui/core",{Dialog:function(e){g=e},DialogActions:function(e){p=e},DialogContent:function(e){h=e},makeStyles:function(e){v=e}},8),n.link("cropperjs/dist/cropper.css"),n.link("@visualteams/ui-kit/colors",{default:function(e){E=e}},9);var b=null,y=80,k=v({root:{marginTop:16,textAlign:"left",alignContent:"center",display:"flex",flexDirection:"column",justifyContent:"space-between",width:"fit-content"},container:{border:"1px solid "+E.grey,borderRadius:4,backgroundColor:E.totalLine,display:"flex",flexDirection:"row",alignItems:"center",height:y,overflow:"hidden"},buttonContainer:{height:y},button:{display:"flex",justifyContent:"center",alignItems:"center",height:"50%",paddingLeft:16,paddingRight:16,cursor:"pointer","&:hover":{color:E.primary}},buttonDelete:{"&:hover":{color:E.danger}}}),C=function(e){var t=e.value,n=e.id,v=e.label,E=e.ratio,C=void 0===E?1:E,x=e.width,w=void 0===x?"auto":x,D=e.height,R=void 0===D?y*C:D,j=e.onSave,A=e.placeholderImg,I=a(""),B=i(I,2),F=B[0],N=B[1],L,z=r().formatMessage,S=k(),T=function(){if(b){var e=b.getCroppedCanvas().toDataURL();j({base64:e,width:w,height:R}),N("")}},U=function(e){var t,n;e.preventDefault();var i=(null==e||null===(t=e.dataTransfer)||void 0===t?void 0:t.files)||(null==e||null===(n=e.target)||void 0===n?void 0:n.files),l;if(RegExp("image/","g").test(i[0].type)){if(i.length>0){var a=new FileReader;a.onload=function(){N(a.result)},a.readAsDataURL(i[0])}}else u.success({message:z({id:"Upload.ErrorExtensionImage"})})},M=function(){return j({base64:null,width:w,height:R})},q=function(){return N("")};return l.createElement("div",{className:S.root},!!v&&l.createElement("div",{style:{marginBottom:8}},l.createElement("label",null,v)),l.createElement("div",{className:S.container},l.createElement("label",{htmlFor:"button-file"+n,style:{display:"contents",cursor:"pointer"}},l.createElement("img",{src:t||A,style:{width:w,height:R,objectFit:"cover"},loading:"lazy"})),l.createElement("div",{className:S.buttonContainer},l.createElement("label",{htmlFor:"button-file"+n},l.createElement("div",{className:S.button,style:{height:t?"50%":"100%"}},l.createElement("input",{style:{display:"none"},id:"button-file"+n,type:"file",accept:".jpg,.jpeg,.png",onChange:U}),l.createElement(f,null))),t&&l.createElement("div",{className:s([S.button,S.buttonDelete]),onClick:M},l.createElement(m,null)))),!!F&&l.createElement(g,{open:!0},l.createElement(h,null,l.createElement("div",null,l.createElement(c,{style:{height:200,width:"100%"},autoCrop:!0,preview:".img-preview",guides:!1,cropBoxResizable:!0,src:F,onInitialized:function(e){b=e}}))),l.createElement(p,null,l.createElement(d,{variant:"text",onClick:q},l.createElement(o,{id:"Actions.Cancel"})),l.createElement(d,{onClick:T},l.createElement(o,{id:"Actions.save"})))))};n.exportDefault(C)}
