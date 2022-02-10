function module(e,n,r){var t;r.link("../users/getUsername",{default:function(e){t=e}},0);var u=function(e){return"group"===e.type?"#"+e.name:(e.usersId||[]).filter((function(e){return e!==Meteor.userId()})).map((function(e){return t(e)})).join(",");var n,r};r.exportDefault(u)}

