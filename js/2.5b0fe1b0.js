"use strict";(self["webpackChunkexcel_demo"]=self["webpackChunkexcel_demo"]||[]).push([[2],{73002:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",[a("a-breadcrumb",{attrs:{separator:""}},[a("a-breadcrumb-item",{attrs:{href:""}},[a("a-icon",{attrs:{type:"arrow-left"},on:{click:function(a){return t.$router.back()}}}),a("a-breadcrumb-separator",[t._v(" ")])],1),a("a-breadcrumb-item",{attrs:{href:""}},[a("router-link",{attrs:{to:"/home"}},[a("span",[t._v("Home")])]),a("a-breadcrumb-separator")],1),a("a-breadcrumb-item",[a("strong",[t._v("Tutors")])])],1)],1),a("div",{staticClass:"condition-container"},[t._m(0),a("div",[a("a-input-search",{attrs:{placeholder:"Search data by tutor",size:"large",allowClear:""},on:{search:t.handleSearch},model:{value:t.queryParam.tutor,callback:function(a){t.$set(t.queryParam,"tutor",a)},expression:"queryParam.tutor"}},[a("a-button",{attrs:{slot:"enterButton"},slot:"enterButton"},[a("a-icon",{attrs:{type:"search"}})],1)],1)],1)]),a("div",{staticClass:"table-container"},[a("a-table",{attrs:{rowKey:(t,a)=>a,columns:t.tableColumns,"data-source":t.tableData,pagination:!1,scroll:{y:350}},scopedSlots:t._u([{key:"action",fn:function(e,r){return a("a",{},[a("a-button",{attrs:{type:"default",size:"small"},on:{click:function(a){return t.toDetail(r)}}},[t._v("View Details")])],1)}}])})],1),a("div",{staticClass:"footer-container"},[a("div",[a("a-button",{staticClass:"footer-btn",attrs:{type:"default"}},[t._v("Export")]),a("a-button",{staticClass:"footer-btn",attrs:{type:"default"}},[t._v("Upload")])],1),a("div",[a("a-pagination",{attrs:{"page-size":t.pageSize,total:t.totalRecords,"show-less-items":""},on:{change:t.getTableData},model:{value:t.pageNo,callback:function(a){t.pageNo=a},expression:"pageNo"}})],1)])])},s=[function(){var t=this,a=t._self._c;return a("div",[a("span",{staticClass:"title"},[t._v("Tutors")]),a("span",{staticClass:"description"},[t._v("Customized filter to find the risky sessions")])])}],o=(e(44114),e(86456)),n={name:"tutors",data(){return{pageNo:1,pageSize:15,totalRecords:0,queryParam:{tutor:""},tableData:[],tableColumns:[{title:"Tutor",dataIndex:"tutor"},{title:"Subjects",dataIndex:"subjects",ellipsis:!0,customRender:function(t,a){return t.join(", ")}},{title:"",dataIndex:"",align:"right",scopedSlots:{customRender:"action"}}]}},mounted(){this.getTableData()},methods:{getTableData(){(0,o.T)("/json/tutorList.json").then((t=>{this.tableData=[];let a=t.data;a=this.filterData(a),this.totalRecords=a.length,a=a.slice((this.pageNo-1)*this.pageSize,this.pageNo*this.pageSize),this.tableData=a}))},filterData(t){let a=this.queryParam.tutor,e=t;return a&&(e=e.filter((t=>t.tutor.toLowerCase().includes(a.toLowerCase())))),e},handleSearch(){this.pageNo=1,this.getTableData()},toDetail(t){this.$router.push({path:"/tutors/tutorDetail",query:{tutorId:t.tutorId}})}}},i=n,l=e(81656),u=(0,l.A)(i,r,s,!1,null,"2a21504a",null),c=u.exports},86456:function(t,a,e){e.d(a,{T:function(){return s}});var r=e(94373);function s(t){return r.A.get(t)}}}]);
//# sourceMappingURL=2.5b0fe1b0.js.map