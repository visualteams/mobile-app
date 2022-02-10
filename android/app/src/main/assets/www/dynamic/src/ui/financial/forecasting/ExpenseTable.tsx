function module(e,t,n){var l,a,i,r,c,o;n.link("react",{default:function(e){l=e}},0),n.link("@material-ui/core/Tooltip/Tooltip",{default:function(e){a=e}},1),n.link("@material-table/core",{default:function(e){i=e}},2),n.link("../../../lib/formatNumber",{default:function(e){r=e}},3),n.link("react-intl",{FormattedMessage:function(e){c=e},useIntl:function(e){o=e}},4);var d=function(e){var t=e.totalExpenses,n=e.totalExpenseLast3Month,d=e.totalExpensesUnplanned,s=e.totalExpensesBudgetAllocated,u=e.expensesUnplanned,m=e.totalExpensesForcastingTimeReal,E=e.numberMonthStartExercice,p,f=o().formatMessage,v=u.map((function(e){return l.createElement("div",{key:e.name},e.name)}));return l.createElement(i,{columns:[{title:f({id:"ExpenseTable.title"}),field:"title",headerStyle:{width:"100%"},cellStyle:{width:"100%"}},{title:f({id:"ExpenseTable.value"}),field:"value",headerStyle:{textAlign:"right"},cellStyle:{textAlign:"right"},render:function(e){return r(e.value)}},{title:f({id:"ExpenseTable.tendency"}),field:"tendance",headerStyle:{textAlign:"center"},cellStyle:{textAlign:"center"},render:function(e){if(!e.tendance)return null;var t=Number(e.tendance),n=t<0?"green":"red";return l.createElement("div",{style:{color:n}},t.toFixed(2),"%")}}],data:[{title:l.createElement(a,{title:v},l.createElement("div",{className:"have-tooltip"},f({id:"ExpenseTable.unplanned"}))),value:d},{title:l.createElement(a,{title:"."},l.createElement("div",{className:"have-tooltip"},f({id:"ExpenseTable.monthlyEstimated"}))),value:s/12},{title:l.createElement(a,{title:"."},l.createElement("div",{className:"have-tooltip"},l.createElement(c,{id:"ExpenseTable.MonthlyAverages"}))),value:n/3,tendance:n/3*100/(m/12)-100},{title:l.createElement(a,{title:E+" month"},l.createElement("div",{className:"have-tooltip"},l.createElement(c,{id:"ExpenseTable.MonthlyAverage"})," ",l.createElement(c,{id:"ExpenseTable.sinceBegginingOfExercise"}))),value:t/E,tendance:t/E*100/(m/12)-100}],options:{toolbar:!1,paging:!1,sorting:!1,padding:"dense"}})};n.exportDefault(d)}
