(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f7d9a0b"],{"4a31":function(e,t,a){"use strict";a("b312")},"5fdb":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount,"page-size":e.pageSize,"current-page":e.currentPage,"page-sizes":[10,20,50,100]},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})},n=[],o=(a("c5f6"),{props:{totalCount:{type:Number,default:10},pageSize:{type:Number,default:10},tableData:{type:Array,default:function(){return[]}},defaultData:{type:Boolean,default:!1}},data:function(){return{tableView:[],currentPage:1}},watch:{defaultData:function(e){this.handleCurrentChange(1)}},methods:{handleCurrentChange:function(e){e=1!==e?(e-1)*this.pageSize:0;var t=this.tableData.length;t>e+this.pageSize?this.tableView=this.tableData.slice(e,e+this.pageSize):this.tableView=this.tableData.slice(e,this.tableData.length),this.$emit("tables",this.tableView)},handleSizeChange:function(e){this.$emit("handleSizeChange",e)}}}),l=o,r=a("2877"),s=Object(r["a"])(l,i,n,!1,null,null,null);t["a"]=s.exports},a2a2:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",[a("el-input",{staticStyle:{width:"300px",float:"right","margin-bottom":"10px"},attrs:{placeholder:"请输入操作名称","prefix-icon":"el-icon-search",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.diagnosisNameSearch(t)}},model:{value:e.diagnosisName,callback:function(t){e.diagnosisName=t},expression:"diagnosisName"}})],1),e._v(" "),a("el-table",{staticStyle:{width:"100%",margin:"10px 0"},attrs:{data:e.tableView,"header-cell-style":{background:"#F5F7FA",color:"#000",fontWeight:"900"}}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"操作名称","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.editData(t.row)}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"版本号","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"描述","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"maintainer",label:"维护者","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"更新时间",formatter:e.formatter,"show-overflow-tooltip":""}})],1),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"20px 0"}},[a("pagination",{staticClass:"page",attrs:{"total-count":e.pagination.total,"page-size":e.pagination.pageSize,"table-data":e.operationsData2},on:{tables:e.tables,handleSizeChange:e.handleSizeChange}})],1),e._v(" "),a("edit",{ref:"edit"})],1)},n=[],o=(a("7f7f"),a("c356")),l=a("edb5"),r=a("5fdb"),s=a("ed08"),c={components:{edit:l["a"],pagination:r["a"]},props:{},data:function(){return{activeName:"all",diagnosisName:"",operationsData:[],operationsData2:[],tableView:[],isLoading:!1,pagination:{currentPage:1,pageSize:10,total:0}}},created:function(){},mounted:function(){this.operationsFn()},methods:{operationsFn:function(){var e=this;this.isLoading=!0,Object(o["a"])({}).then((function(t){if(t.success){if(e.tableView=[],e.pagination.total=t.data.length,t.data.length>=e.pagination.pageSize)for(var a=0;a<e.pagination.pageSize;a++)e.tableView.push(t.data[a]);else e.tableView=t.data;e.operationsData=t.data,e.operationsData2=t.data}e.isLoading=!1})).catch((function(){e.isLoading=!1}))},operationsFn2:function(){if(this.tableView=[],this.pagination.total=this.operationsData2.length,this.operationsData2.length>=this.pagination.pageSize)for(var e=0;e<this.pagination.pageSize;e++)this.tableView.push(this.operationsData2[e]);else this.tableView=this.operationsData2},diagnosisNameSearch:function(){var e=this;this.operationsData2=this.operationsData.filter((function(t){return-1!==t.name.indexOf(e.diagnosisName)})),this.operationsFn2()},editData:function(e){this.$refs.edit.openDrawer(e)},delData:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleSizeChange:function(e){this.pagination.pageSize=e,this.operationsFn2()},handleCurrentChange:function(e){this.pagination.currentPage=e},formatter:function(e){return Object(s["e"])(e.time||"","{y}-{m}-{d} {h}:{i}:{s}")},tables:function(e){this.tableView=e}}},u=c,p=a("2877"),d=Object(p["a"])(u,i,n,!1,null,"4f14f983",null);t["default"]=d.exports},b312:function(e,t,a){},c356:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("b775");function n(e){return Object(i["a"])({url:"/v1/operations",method:"get",params:e})}},edb5:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-drawer",{attrs:{title:"操作详情",visible:e.drawer,"before-close":e.handleClose,size:800},on:{"update:visible":function(t){e.drawer=t}}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("el-tabs",{on:{"tab-click":e.tabsClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"操作详情",name:"details"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"YAML",name:"YAML"}})],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"details"===e.activeName,expression:"activeName === 'details'"}]},[a("el-form",{ref:"form",staticStyle:{"padding-right":"20px"},attrs:{disabled:"",model:e.form,"label-width":"95px"}},[a("el-form-item",{attrs:{label:"操作名称:"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"版本:"}},[a("el-input",{model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间:"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"操作人:"}},[a("el-input",{model:{value:e.form.maintainer,callback:function(t){e.$set(e.form,"maintainer",t)},expression:"form.maintainer"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"要求:"}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),e.form.detail.spec.processor?a("el-form-item",{staticStyle:{margin:"0"},attrs:{label:"参数列表:"}}):e._e(),e._v(" "),e.form.detail.spec.processor?a("div",{staticStyle:{margin:"0 0 20px 20px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:e.tableData,"header-cell-style":{background:"#F5F7FA",color:"#000",fontWeight:"900"}}},[a("el-table-column",{attrs:{prop:"name",label:"名称",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"value",label:"值",align:"center","show-overflow-tooltip":""}})],1)],1):e._e()],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"YAML"===e.activeName,expression:"activeName === 'YAML'"}]},[a("div",{staticClass:"updateDAGDataBox"},[a("pre",{attrs:{id:"updateDAGData"}})])])])],1)},n=[],o=(a("7f7f"),a("a481"),{components:{},props:{},data:function(){return{activeName:"details",drawer:!1,form:{detail:{spec:{processor:{}}}},tableData:[{name:"名称",value:"值"}]}},created:function(){},mounted:function(){},methods:{openDrawer:function(e){if(this.drawer=!0,this.form=e,this.tableData=[],e.detail&&e.detail.spec&&e.detail.spec.processor){var t=e.detail.spec.processor;if(t.HTTPServer)this.tableData=[{name:"HTTPServer",value:t["HTTPServer"]},{name:"timeoutSeconds",value:t["timeoutSeconds"]}];else if(t.HTTPServer)this.tableData=[{name:"ScriptRunner",value:t["ScriptRunner"]},{name:"timeoutSeconds",value:t["timeoutSeconds"]}];else for(var a in t)this.tableData.push({name:a,value:t[a]})}},syntaxHighlight:function(e){return"string"!==typeof e&&(e=JSON.stringify(e,void 0,2)),e=e.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,(function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"}))},tabsClick:function(e){console.log(e.name,document.getElementById("updateDAGData"),"val"),"YAML"===e.name&&(document.getElementById("updateDAGData").innerHTML=this.syntaxHighlight(this.form.detail))},closeDrawer:function(){this.drawer=!1},handleClose:function(e){e()}}}),l=o,r=(a("4a31"),a("2877")),s=Object(r["a"])(l,i,n,!1,null,"6c83b684",null);t["a"]=s.exports}}]);