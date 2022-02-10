function module(e,t,n){var i,r,o,l,u,a,c,s,d,f,m,p,E,A,k,h,v,g,x,C,D,O,T,b,L,S,y,N,F,M,P,R;n.link("@babel/runtime/regenerator",{default:function(e){i=e}},0),n.link("@babel/runtime/helpers/slicedToArray",{default:function(e){r=e}},1),n.link("react",{default:function(e){o=e},useState:function(e){l=e}},0),n.link("moment",{default:function(e){u=e}},1),n.link("react-intl",{FormattedMessage:function(e){a=e},useIntl:function(e){c=e}},2),n.link("meteor/meteor",{Meteor:function(e){s=e}},3),n.link("react-toastify",{toast:function(e){d=e}},4),n.link("material-ui-confirm",{useConfirm:function(e){f=e}},5),n.link("meteor/react-meteor-data",{useTracker:function(e){m=e}},6),n.link("@material-ui/core/IconButton",{default:function(e){p=e}},7),n.link("@material-ui/icons/Edit",{default:function(e){E=e}},8),n.link("@material-ui/icons/Delete",{default:function(e){A=e}},9),n.link("@material-ui/core",{Tooltip:function(e){k=e}},10),n.link("@material-ui/icons/FilterList",{default:function(e){h=e}},11),n.link("../../../db/financial/documents/schema",{default:function(e){v=e}},12),n.link("../../../lib/formatNumber",{default:function(e){g=e}},13),n.link("../../../lib/dates/displayDate",{default:function(e){x=e},DateFormat:function(e){C=e}},14),n.link("../../components/Button",{default:function(e){D=e}},15),n.link("../../components/crm/MaterialTable",{default:function(e){O=e}},16),n.link("../../components/Financial/Documents/AddFormDocuments",{default:function(e){T=e},wrapperAmountOperationsOther:function(e){b=e}},17),n.link("../../../constants/FINANCES",{EnumDocument:function(e){L=e}},18),n.link("../../components/FilterColumns",{default:function(e){S=e}},19),n.link("../../../lib/table/alterColumns",{default:function(e){y=e}},20),n.link("../../../db/financial/documents",{default:function(e){N=e}},21),n.link("../../../lib/meteorHelpers",{useCursor:function(e){F=e}},22),n.link("../../../db/financial/accountingCode",{default:function(e){M=e}},23),n.link("../../../lib/users/haveRights",{default:function(e){P=e}},24),n.link("../../../constants/ROLES",{ROLES:function(e){R=e}},25);var I=function(){var e=l(["amountHourly","invoicesId"]),t=r(e,2),n=t[0],I=t[1],Y=l(!1),H=r(Y,2),_=H[0],w=H[1],z=c(),B=z.locale,G=z.formatMessage,U=f(),j=l(null),q=r(j,2),J=q[0],K=q[1],Q=F((function(){return N.find()})),V=m((function(){return M.find().fetch()}),[]),W=[{field:"documentType",title:G({id:"ListExpensesOthers.document"}),lookup:[{id:L.SALE,name:G({id:"ListExpenseNatures.Sales"})},{id:L.PURCHASE,name:G({id:"ListExpenseNatures.Purchases"})}].reduce((function(e,t){return e[t.id]=t.name,e}),{})},{field:"documentDate",title:G({id:"ListExpensesOthers.date"}),type:"date",defaultSort:"desc",customSort:function(e,t){var n=u.utc(e.documentDate,"YYYY-MM-DD"),i=u.utc(t.documentDate,"YYYY-MM-DD");return n.isBefore(i)?-1:n.isAfter(i)?1:0},render:function(e){return x(e.documentDate,C.DATEONLY)}},{field:"description",title:G({id:"ListExpensesOthers.description"})},{field:"preTaxAmount",title:G({id:"ListExpensesOthers.preTaxAmount"}),render:function(e){return e.preTaxAmount?g(e.documentType===L.PURCHASE?-e.preTaxAmount:e.preTaxAmount,2):""}},{field:"totalAmount",title:G({id:"ListExpensesOthers.amount"}),render:function(e){return g(b(e,e.documentType).totalAmount,2)}},{field:"paidDate",title:G({id:"ListExpensesOthers.paidDate"}),type:"date",render:function(e){return e.paidDate&&x(e.paidDate,C.DATEONLY)}},{field:"accountingCode",title:G({id:"ListExpensesOthers.AccountingCode"}),render:function(e){var t,n,i,r,o=!(null==e||null===(t=e.details)||void 0===t||null===(n=t[0])||void 0===n||!n.accountingCode)&&(null==V?void 0:V.find((function(t){var n,i;return t.code===String(null==e||null===(n=e.details)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.accountingCode)})));return o?o.code+" - "+o.name:null==e||null===(i=e.details)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.accountingCode}},{title:G({id:"Table.Actions"}),field:"",align:"right",render:function(e){return e.externalId||!P(R.MANAGE_OPERATIONS)?o.createElement("div",null,o.createElement(k,{title:"Import API"},o.createElement("div",null,"🔒"))):o.createElement("div",null,o.createElement(p,{style:{cursor:"pointer"},onClick:function(){return K(e)}},o.createElement(E,null)),o.createElement(p,{style:{cursor:"pointer"},onClick:function(){return Z(e)}},o.createElement(A,{color:"error"})))}}],X=function(e){var t;K({documentType:e,preTaxAmount:0,totalAmount:0})},Z=function(){function e(e){return i.async(function(){function t(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.awrap(U());case 2:return t.prev=2,t.next=5,i.awrap(s.promise("financialDocuments.delete",{_id:e._id}));case 5:d.success(G({id:"success"})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),console.error(t.t0),d.error(G({id:"error"}));case 12:case"end":return t.stop()}}return t}(),null,null,[[2,8]],Promise)}return e}(),$=function(){return K(null)};return o.createElement(o.Fragment,null,J&&o.createElement(T,{open:!!J,model:J,onClose:$}),o.createElement(O,{data:Q.fetch(),title:G({id:"ListExpensesOthers.TitlePage"}),columns:y(W,n),schema:v,lang:B,options:{search:!1,columnsButton:!1,filtering:_},components:{Actions:function(){return o.createElement("div",null,o.createElement(S,{style:{marginRight:16},columns:y(W,n),onColumnsChanged:I}),o.createElement(D,{id:"button-filter-project",onClick:function(){return w(!_)},size:"small",color:_?"secondary":"default",variant:"outlined"},o.createElement(h,{fontSize:"small"}),o.createElement(a,{id:"Actions.Filtrer"})),o.createElement(D,{color:"secondary",onClick:function(){return X(L.SALE)},"data-testid":"button-add",style:{marginRight:16,marginLeft:16},size:"large",restrictedFeature:R.MANAGE_OPERATIONS},o.createElement(a,{id:"ExpensesOthers.AddSale"})),o.createElement(D,{onClick:function(){return X(L.PURCHASE)},"data-testid":"button-add",size:"large",restrictedFeature:R.MANAGE_OPERATIONS},o.createElement(a,{id:"ExpensesOthers.AddPurchase"})))}}}))};n.exportDefault(I)}
