function module(t,n,e){var u;e.link("moment",{default:function(t){u=t}},0);var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=t.hours?t.hours.map((function(t){return n&&!t.billable?0:u.utc(t.endDate).diff(u.utc(t.startDate),"seconds")})):[];return e.reduce((function(t,n){return t+n}),0)};e.exportDefault(r)}

