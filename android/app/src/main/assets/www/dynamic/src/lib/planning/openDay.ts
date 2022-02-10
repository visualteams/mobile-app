function module(e,n,t){var a;t.link("moment",{default:function(e){a=e}},0);var i=function(e){var n=e.userId,t=e.day;Session.set("Planning-dateSelected",a.utc(t).startOf("day").toISOString()),Session.set("Planning-userSelected",n)};t.exportDefault(i)}

