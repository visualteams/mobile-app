function module(n,t,e){var i,o,c,r,a,d,f;e.export({checkAndRunInterval:function(){return l}}),e.link("date-fns",{differenceInSeconds:function(n){i=n}},0),e.link("../ui/App",{dispatch:function(n){o=n},getState:function(n){c=n}},1),e.link("../reducers/videoinfo",{SET_DURATION:function(n){r=n},SET_PLAYED_SECONDS:function(n){a=n}},2),e.link("../db/crm/goals/index",{default:function(n){d=n}},3);var l=function(n){var t,e=(c()||{}).videoinfo,l=d.findOne(n,{fields:{startRecordingAt:1,stopRecordingAt:1}});l&&e.live&&(f&&clearInterval(f),l.stopRecordingAt||null===l.startRecordingAt||(f=setInterval((function(){var n=i(new Date,l.startRecordingAt);o({type:r,payload:n}),o({type:a,payload:n})}),1e3)))}}
