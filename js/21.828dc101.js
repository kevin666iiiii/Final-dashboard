"use strict";(self["webpackChunkexcel_demo"]=self["webpackChunkexcel_demo"]||[]).push([[21],{21021:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",[e("a-breadcrumb",{attrs:{separator:""}},[e("a-breadcrumb-item",{attrs:{href:""}},[e("a-icon",{attrs:{type:"arrow-left"},on:{click:function(e){return t.$router.back()}}}),e("a-breadcrumb-separator",[t._v(" ")])],1),e("a-breadcrumb-item",{attrs:{href:""}},[e("router-link",{attrs:{to:"/home"}},[e("span",[t._v("Home")])]),e("a-breadcrumb-separator")],1),e("a-breadcrumb-item",{attrs:{href:""}},[e("router-link",{attrs:{to:"/sessions"}},[e("span",[t._v("Sessions")])]),e("a-breadcrumb-separator")],1),e("a-breadcrumb-item",[e("strong",[t._v("Sessions Detail")])])],1)],1),t._m(0),e("div",{staticClass:"session-card"},[e("div",[e("h2",[t._v("ID:"+t._s(t.detailInfo.sessionId))])]),e("div",{staticClass:"card-info"},[e("div",{staticClass:"card-info-left"},[e("span",[t._v("Tutor: "+t._s(t.detailInfo.tutor))]),e("span",[t._v("Student: "+t._s(t.detailInfo.student))]),e("span",[t._v("Subject: "+t._s(t.detailInfo.subject))]),e("span",[t._v("Date: "+t._s(t.detailInfo.date))])]),e("div",{staticClass:"card-info-right"},[e("strong",{staticStyle:{color:"#a9a9a9"}},[t._v("Risk Areas:  ")]),t._l(t.detailInfo.riskyAreas,(function(a,s){return e("a-tag",{key:s},[t._v(t._s(a))])}))],2)]),e("a-divider"),e("div",{staticClass:"audio-player"},[e("audio",{attrs:{id:"audio",src:"path_to_your_audio_file.mp3"}}),e("a-button",{attrs:{id:"play-pause-button",shape:"circle",icon:"caret-right"}}),t._m(1),t._m(2),t._m(3)],1)],1),e("div",[e("div",{staticClass:"tab-container"},[e("a-tabs",{attrs:{"default-active-key":"1"},on:{change:t.renderChart}},[t.detailInfo.sessionGeneral?e("a-tab-pane",{key:"1",attrs:{tab:"Session General"}},[e("a-card",{staticClass:"content-card",attrs:{title:"Ai-Generated Summary"}},[e("span",[t._v(t._s(t.detailInfo.sessionGeneral.aiSummary))])]),e("a-card",{staticClass:"content-card",attrs:{title:"Student's Desired Outcome"}},[e("span",[t._v(t._s(t.detailInfo.sessionGeneral.desiredOutcome))])]),e("a-card",{staticClass:"content-card",attrs:{title:"Learning Activities"}},[e("a-tabs",{attrs:{type:"card"}},[e("a-tab-pane",{key:"1",attrs:{tab:"Activity 1"}},[t._v(" "+t._s(t.detailInfo.sessionGeneral.activities[0])+" ")]),e("a-tab-pane",{key:"2",attrs:{tab:"Activity 2"}},[t._v(" "+t._s(t.detailInfo.sessionGeneral.activities[1])+" ")]),e("a-tab-pane",{key:"3",attrs:{tab:"Activity 3"}},[t._v(" "+t._s(t.detailInfo.sessionGeneral.activities[2])+" ")]),e("a-tab-pane",{key:"4",attrs:{tab:"Activity 4"}},[t._v(" "+t._s(t.detailInfo.sessionGeneral.activities[3])+" ")]),e("a-tab-pane",{key:"5",attrs:{tab:"Activity 5"}},[t._v(" "+t._s(t.detailInfo.sessionGeneral.activities[4])+" ")])],1)],1),e("a-card",{attrs:{title:"Interaction Trend"}},[e("div",[e("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"echartsDom"}})]),e("div",{staticStyle:{"margin-top":"50px"}},[e("ul",t._l(t.detailInfo.sessionGeneral.interactionTrend.analysis,(function(a,s){return e("li",{key:s},[e("strong",[t._v(t._s(a))])])})),0)])])],1):t._e(),t.detailInfo.tutorPerformance?e("a-tab-pane",{key:"2",attrs:{tab:"Tutor Performance"}},[e("a-card",{staticClass:"content-card",attrs:{title:"Ai-Generated Summary"}},[e("span",[t._v(t._s(t.detailInfo.tutorPerformance.aiSummary))])]),e("a-card",{staticClass:"content-card",attrs:{title:"Session Timeline"}},[e("div",{staticClass:"heatmap"},[t._l(t.detailInfo.tutorPerformance.sessionTimeline.categories,(function(a,s){return e("div",{key:s,staticClass:"row"},[e("div",{staticClass:"category"},[t._v(t._s(a.name))]),t._l(t.blocks,(function(s,i){return e("a-tooltip",{key:i,attrs:{placement:"top",overlayClassName:"draw_atooltip"}},[a.values[i]?e("template",{slot:"title"},[e("div",[t._v("Score: "+t._s(a.score))]),e("div",[t._v("Percentile: "+t._s(a.percentile)+"%")])]):t._e(),e("div",{class:t.getClass(a.values[i])})],2)}))],2)})),e("div",{staticClass:"timeline-footer"},[e("div",{staticClass:"time-legend"},[t._v("Time(min):")]),e("div",{staticClass:"time"},t._l(t.detailInfo.tutorPerformance.sessionTimeline.time,(function(a){return e("div",{key:a},[t._v(t._s(a))])})),0)]),e("div",{staticClass:"legend"},[e("div",[t._v("Normal")]),t._l(4,(function(t,a){return e("div",{key:a,class:`level-${a}`,staticStyle:{width:"20px",height:"20px",margin:"0 4px 0 4px","border-radius":"4px"}})})),e("div",[t._v("Abnormal")])],2)],2)]),e("div",{staticClass:"rating-container"},[e("a-tabs",{attrs:{"default-active-key":"1","tab-position":"left"},on:{change:t.renderChart}},[e("a-tab-pane",{key:"1",attrs:{tab:"Instructional Delivery"}},[e("div",{staticClass:"rating-head"},[e("div",[e("span",{staticClass:"rating-text"},[t._v("Rating: ")]),e("strong",{staticClass:"rating-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.instructionalDelivery.rating))])]),e("div",{staticClass:"rating-process-container"},[e("div",{staticClass:"rating-process-title"},[t._v("Ranking compared to all sessions")]),e("div",{staticClass:"rating-process"},[e("a-progress",{attrs:{percent:t.detailInfo.tutorPerformance.rating.instructionalDelivery.allSessionRanking,strokeColor:"#91d5ff"}})],1)]),e("div",{staticClass:"rating-process-container"},[e("div",{staticClass:"rating-process-title"},[t._v("Ranking compared to this tutor's all other sessions")]),e("a-progress",{attrs:{percent:t.detailInfo.tutorPerformance.rating.instructionalDelivery.tutorSessionRanking,strokeColor:"#91d5ff"}})],1)]),e("a-divider"),e("div",{staticClass:"rating-body"},[e("div",[e("div",[e("a-progress",{attrs:{width:200,strokeColor:"#91d5ff",type:"circle",percent:t.detailInfo.tutorPerformance.rating.instructionalDelivery.correctExplanation},scopedSlots:t._u([{key:"format",fn:function(a){return[e("p",[e("strong",[t._v("Explanation")])]),e("p",[e("strong",[t._v("Correctness")])]),e("div",[t._v(t._s(a)+" %")])]}}],null,!1,977655547)})],1),e("div",[e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-blue"}),e("span",{staticClass:"legend-text"},[t._v("Correct Explanation")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.instructionalDelivery.correctExplanation)+"%")])]),e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-grey"}),e("span",{staticClass:"legend-text"},[t._v("Incorrect Explanation")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.instructionalDelivery.incorrectExplanation)+"%")])])])]),e("div",[e("div",[e("a-progress",{attrs:{width:200,strokeColor:"#91d5ff",type:"circle",percent:t.detailInfo.tutorPerformance.rating.instructionalDelivery.alignedExplanation},scopedSlots:t._u([{key:"format",fn:function(a){return[e("p",[e("strong",[t._v("Explanation")])]),e("p",[e("strong",[t._v("Alignment")])]),e("div",[t._v(t._s(a)+" %")])]}}],null,!1,1335258577)})],1),e("div",[e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-blue"}),e("span",{staticClass:"legend-text"},[t._v("Aligned Explanation")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.instructionalDelivery.alignedExplanation)+"%")])]),e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-grey"}),e("span",{staticClass:"legend-text"},[t._v("Unaligned Explanation")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.instructionalDelivery.unalignedExplanation)+"%")])])])]),e("div",[e("div",[e("a-progress",{attrs:{width:200,strokeColor:"#91d5ff",type:"circle",percent:t.detailInfo.tutorPerformance.rating.instructionalDelivery.effectiveQuestions},scopedSlots:t._u([{key:"format",fn:function(a){return[e("p",[e("strong",[t._v("Effective")])]),e("p",[e("strong",[t._v("Questions")])]),e("div",[t._v(t._s(a)+" %")])]}}],null,!1,647390509)})],1),e("div",[e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-blue"}),e("span",{staticClass:"legend-text"},[t._v("Effective Questions")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.instructionalDelivery.effectiveQuestions)+"%")])]),e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-grey"}),e("span",{staticClass:"legend-text"},[t._v("Ineffective Questions")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.instructionalDelivery.ineffectiveQuestions)+"%")])])])])])],1),e("a-tab-pane",{key:"2",attrs:{tab:"Tech & Tool Usage"}},[e("div",{staticClass:"rating-head"},[e("div",[e("span",{staticClass:"rating-text"},[t._v("Rating: ")]),e("strong",{staticClass:"rating-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.techToolUsage.rating))])]),e("div",{staticClass:"rating-process-container"},[e("div",{staticClass:"rating-process-title"},[t._v("Ranking compared to all sessions")]),e("div",{staticClass:"rating-process"},[e("a-progress",{attrs:{percent:t.detailInfo.tutorPerformance.rating.techToolUsage.allSessionRanking,strokeColor:"#91d5ff"}})],1)]),e("div",{staticClass:"rating-process-container"},[e("div",{staticClass:"rating-process-title"},[t._v("Ranking compared to this tutor's all other sessions")]),e("a-progress",{attrs:{percent:t.detailInfo.tutorPerformance.rating.techToolUsage.tutorSessionRanking,strokeColor:"#91d5ff"}})],1)])]),e("a-tab-pane",{key:"3",attrs:{tab:"Feedback Quality"}},[e("div",{staticClass:"rating-head"},[e("div",[e("span",{staticClass:"rating-text"},[t._v("Rating: ")]),e("strong",{staticClass:"rating-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.feedbackQuality.rating))])]),e("div",{staticClass:"rating-process-container"},[e("div",{staticClass:"rating-process-title"},[t._v("Ranking compared to all sessions")]),e("div",{staticClass:"rating-process"},[e("a-progress",{attrs:{percent:t.detailInfo.tutorPerformance.rating.feedbackQuality.allSessionRanking,strokeColor:"#91d5ff"}})],1)]),e("div",{staticClass:"rating-process-container"},[e("div",{staticClass:"rating-process-title"},[t._v("Ranking compared to this tutor's all other sessions")]),e("a-progress",{attrs:{percent:t.detailInfo.tutorPerformance.rating.feedbackQuality.tutorSessionRanking,strokeColor:"#91d5ff"}})],1)]),e("a-divider"),e("div",{staticClass:"rating-body"},[e("div",[e("div",[e("circle-process",{attrs:{percent1:t.detailInfo.tutorPerformance.rating.feedbackQuality.negativeFeedback,percent1Color:"#f5f5f5",percent2:t.detailInfo.tutorPerformance.rating.feedbackQuality.neutralFeedback,percent2Color:"#91d5ff",percent3Color:"#40a9ff",percent3:t.detailInfo.tutorPerformance.rating.feedbackQuality.positiveFeedback,size:206}},[e("div",{staticStyle:{"margin-bottom":"12px"}},[e("div",{staticStyle:{"font-size":"8px","font-weight":"bold"}},[t._v("Tone of "),e("br"),t._v("Feedback")])])])],1),e("div",{staticStyle:{"text-align":"center"}},[e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-deep-blue"}),e("span",{staticClass:"legend-text"},[t._v("Positive")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.feedbackQuality.positiveFeedback)+"%")])]),e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-blue"}),e("span",{staticClass:"legend-text"},[t._v("Neutral")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.feedbackQuality.neutralFeedback)+"%")])]),e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-grey"}),e("span",{staticClass:"legend-text"},[t._v("Negative")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.feedbackQuality.negativeFeedback)+"%")])])])]),e("div",[e("div",[e("a-progress",{attrs:{width:200,strokeColor:"#91d5ff",type:"circle",percent:t.detailInfo.tutorPerformance.rating.feedbackQuality.effectivePositive},scopedSlots:t._u([{key:"format",fn:function(a){return[e("p",[e("strong",[t._v("Effective Positive")])]),e("p",[e("strong",[t._v("Feedback")])]),e("div",[t._v(t._s(a)+" %")])]}}],null,!1,3685446354)})],1),e("div",[e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-blue"}),e("span",{staticClass:"legend-text"},[t._v("Effective Positive")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.feedbackQuality.effectivePositive)+"%")])]),e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-grey"}),e("span",{staticClass:"legend-text"},[t._v("Ineffective Positive")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.feedbackQuality.ineffectivePositive)+"%")])])])]),e("div",[e("div",[e("a-progress",{attrs:{width:200,strokeColor:"#91d5ff",type:"circle",percent:t.detailInfo.tutorPerformance.rating.feedbackQuality.effectiveNegative},scopedSlots:t._u([{key:"format",fn:function(a){return[e("p",[e("strong",[t._v("Effective Negative")])]),e("p",[e("strong",[t._v("Feedback")])]),e("div",[t._v(t._s(a)+" %")])]}}],null,!1,2092278682)})],1),e("div",[e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-blue"}),e("span",{staticClass:"legend-text"},[t._v("Effective Negative")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.feedbackQuality.effectiveNegative)+"%")])]),e("div",{staticClass:"legend-container"},[e("div",{staticClass:"dot dot-light-grey"}),e("span",{staticClass:"legend-text"},[t._v("Ineffective Negative")]),e("span",{staticClass:"legend-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.feedbackQuality.ineffectiveNegative)+"%")])])])])])],1),e("a-tab-pane",{key:"4",attrs:{tab:"Social-Emotional Teaching"}},[e("div",{staticClass:"rating-head"},[e("div",[e("span",{staticClass:"rating-text"},[t._v("Rating: ")]),e("strong",{staticClass:"rating-value"},[t._v(t._s(t.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.rating))])]),e("div",{staticClass:"rating-process-container"},[e("div",{staticClass:"rating-process-title"},[t._v("Ranking compared to all sessions")]),e("div",{staticClass:"rating-process"},[e("a-progress",{attrs:{percent:t.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.allSessionRanking,strokeColor:"#91d5ff"}})],1)]),e("div",{staticClass:"rating-process-container"},[e("div",{staticClass:"rating-process-title"},[t._v("Ranking compared to this tutor's all other sessions")]),e("a-progress",{attrs:{percent:t.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.tutorSessionRanking,strokeColor:"#91d5ff"}})],1)]),e("a-divider"),e("div",{staticStyle:{"margin-top":"50px"}},[e("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"echartsDom2"}}),e("div",[e("strong",[t._v("Exaples of extreme conditions:")]),e("ul",t._l(t.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.analysis,(function(a,s){return e("li",{key:s},[e("strong",[t._v(t._s(a))])])})),0)])])],1)],1)],1)],1):t._e()],1)],1)])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title-container"},[e("span",{staticClass:"title"},[t._v("Session Detail")]),e("span",{staticClass:"description"},[t._v("Include general descriptive information and tutor performance scores")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"time-info"},[e("span",{attrs:{id:"current-time"}},[t._v("00:00")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"timeline"},[e("input",{attrs:{type:"range",id:"seek-bar",value:"0"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"time-info"},[e("span",{attrs:{id:"duration"}},[t._v("1:56:30")])])}],n=a(89671),r=a(86456),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-progress-circle"},[e("svg",{staticClass:"progress-svg",attrs:{width:t.size,height:t.size,viewBox:"0 0 100 100"}},[e("circle",{staticClass:"progress-bg",attrs:{cx:"50",cy:"50",r:"45",fill:"none","stroke-width":t.strokeWidth,"stroke-linecap":"round"}}),e("circle",{staticClass:"progress-segment segment-1",attrs:{cx:"50",cy:"50",r:"45",fill:"none","stroke-width":t.strokeWidth,stroke:t.percent1Color,"stroke-dasharray":t.segment1+" 282","stroke-dashoffset":0,"stroke-linecap":"round"}}),e("circle",{staticClass:"progress-segment segment-2",attrs:{cx:"50",cy:"50",r:"45",fill:"none","stroke-width":t.strokeWidth,stroke:t.percent2Color,"stroke-dasharray":t.segment2+" 282","stroke-dashoffset":t.dashOffset2,"stroke-linecap":"round"}}),e("circle",{staticClass:"progress-segment segment-3",attrs:{cx:"50",cy:"50",r:"45",fill:"none","stroke-width":t.strokeWidth,stroke:t.percent3Color,"stroke-dasharray":t.segment3+" 282","stroke-dashoffset":t.dashOffset3,"stroke-linecap":"round"}}),e("foreignObject",{attrs:{x:"0",y:"0",width:"100",height:"100"}},[e("div",{staticClass:"progress-text"},[t._t("default")],2)])])])},l=[],c={name:"CustomProgressCircle",props:{percent1:{type:Number,required:!0},percent1Color:{type:String,default:"#ff4d4f"},percent2:{type:Number,required:!0},percent2Color:{type:String,default:"#faad14"},percent3:{type:Number,required:!0},percent3Color:{type:String,default:"#52c41a"},size:{type:Number,default:120},strokeWidth:{type:Number,default:6}},computed:{segment1(){return 282*this.percent1/100},segment2(){return 282*this.percent2/100},segment3(){return 282*this.percent3/100},dashOffset2(){return-this.segment1},dashOffset3(){return-(this.segment1+this.segment2)}}},d=c,v=a(81656),f=(0,v.A)(d,o,l,!1,null,"ca471964",null),g=f.exports,u={name:"sessionDetail",components:{circleProcess:g},data(){return{sessionId:null,detailInfo:{},myChart:null,myChart2:null,categories:[{name:"Instruction Delivery",values:[0,2,1,0,0,0,0,2,0,0,1,0,0,0,0,2,1,0,0,3,0]},{name:"Tech & Tool Usage",values:[0,0,0,0,1,0,0,2,0,1,1,0,0,2,0,0,1,0,0,3,0]},{name:"Feedback Quality",values:[0,1,0,0,2,0,0,2,0,0,0,1,0,3,0,0,2,0,0,2,0]},{name:"Social-Emotional Teaching",values:[0,2,0,0,1,0,0,2,0,0,1,0,0,3,0,0,2,0,0,2,0]}],blocks:Array.from({length:21},((t,e)=>e)),times:Array.from({length:21},((t,e)=>(2*e).toString().padStart(2,"0")))}},methods:{loadData(){let t=`/Final-dashboard/json/sessiondetail/sd_${this.sessionId}.json`;(0,r.T)(t).then((t=>{this.detailInfo=t.data,this.renderChart()}))},initChart(){let t=this.myChart,e=this.myChart,a=document.getElementById("echartsDom"),s=document.getElementById("echartsDom2");if(a&&!t&&(t=n.Ts(a)),s&&!e&&(e=n.Ts(s)),t){let e=["Student","Tutor"];var i={tooltip:{trigger:"axis"},legend:{data:e},xAxis:{name:"Time（Minutes）",nameLocation:"middle",nameGap:40,nameTextStyle:{fontWeight:"bold",fontSize:16},type:"category",boundaryGap:!1,data:this.detailInfo.sessionGeneral.interactionTrend.time},yAxis:{name:"Number of Utterances",nameLocation:"middle",nameTextStyle:{fontWeight:"bold",fontSize:16},nameGap:50,type:"value"},series:[{name:e[0],type:"line",stack:"Total",data:this.detailInfo.sessionGeneral.interactionTrend.studentUtterances},{name:e[1],type:"line",stack:"Total",data:this.detailInfo.sessionGeneral.interactionTrend.tutorUtterances}]};t.setOption(i)}if(e){let t=["Student","Tutor"];var r={tooltip:{trigger:"axis"},legend:{data:t},xAxis:{name:"Time（Minutes）",nameLocation:"middle",nameGap:40,nameTextStyle:{fontWeight:"bold",fontSize:16},type:"category",boundaryGap:!1,data:this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.time},yAxis:{name:"Sum of sentiment",nameLocation:"middle",nameTextStyle:{fontWeight:"bold",fontSize:16},nameGap:50,type:"value"},series:[{name:t[0],type:"line",stack:"Total",data:this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.studentUtterances},{name:t[1],type:"line",stack:"Total",data:this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.tutorUtterances}]};e.setOption(r)}},renderChart(){this.$nextTick((()=>{this.initChart()}))},getClass(t){return["block",`level-${t}`]}},mounted(){this.sessionId=this.$route.query.sessionId,this.loadData()}},p=u,m=(0,v.A)(p,s,i,!1,null,"3c22199e",null),_=m.exports}}]);
//# sourceMappingURL=21.828dc101.js.map