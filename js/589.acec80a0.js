"use strict";(self["webpackChunkvue3_ts_cms"]=self["webpackChunkvue3_ts_cms"]||[]).push([[589],{9589:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var n=a(3083),l=a(5166),o=a(3396),r=a(7139);const i={class:"departmentmanager"};function d(e,t,a,d,c,p){const m=(0,o.up)("ac-page-search"),f=l.Z,s=n.Z;return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(m,{"search-form-config":e.formConfig,onResetBtnClick:e.handleResetClick,onQueryBtnClick:e.handleQueryClick},null,8,["search-form-config","onResetBtnClick","onQueryBtnClick"]),(0,o.Wm)(f,{"page-name":"department",ref:"acPageContentRef","content-table-config":e.tableConfig,onCreateBtnClick:e.handleCreateClick,onEditBtnClick:e.handleEditClick},{parentId:(0,o.w5)((t=>[(0,o.Uk)((0,r.zw)(e.mapIdToLeaderName(t.row.parentId)),1)])),_:1},8,["content-table-config","onCreateBtnClick","onEditBtnClick"]),(0,o.Wm)(s,{"modal-config":e.modalConfigRef,"default-info":e.defaultInfo,ref:"acModalRef","page-name":"department"},null,8,["modal-config","default-info"])])}var c=a(8706),p=a(846),m=a(7046),f=a(8673);const s={title:"部门列表",propList:[{prop:"name",label:"部门名称",minWidth:"100",slotName:"name"},{prop:"leader",label:"部门领导",minWidth:"100",slotName:"leader"},{prop:"parentId",label:"上级",minWidth:"100",slotName:"parentId"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0,showFooter:!0},u={formItems:[{field:"name",type:"input",label:"部门名称",placeholder:"请输入部门名称"},{field:"leader",type:"input",label:"部门领导",placeholder:"请输入部门领导"},{field:"parentId",type:"select",label:"选择上级",placeholder:"请选择上级",options:[]}],colLayout:{span:24},itemStyle:{}},h={formItems:[{field:"name",type:"input",label:"部门名称",placeholder:"请输入部门名称"},{field:"leader",type:"input",label:"部门领导",placeholder:"请输入部门领导"},{field:"createAt",type:"datepicker",label:"创建时间",placeholder:"请选择创建时间",otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}],labelWidth:"120px",itemStyle:{padding:"10px 40px"}};var C=a(9599),g=a(7416),k=a(4870),b=(0,o.aZ)({name:"DepartmentManager",components:{AcPageContent:p.Z,AcPageModal:m.Z,AcPageSearch:f.Z},setup(){const[e,t,a,n]=(0,C.S)(),[l,o,r]=(0,g.Y)(),i=(0,c.oR)(),d=(0,k.Fl)((()=>{const e=u.formItems.find((e=>"parentId"===e.field));return e.options=i.state.entireUser.map((e=>({title:e.name,value:e.id}))),u})),p=e=>{const t=i.state.entireUser.find((t=>t.id===e));return t?.name};return{tableConfig:s,modalConfigRef:d,acModalRef:e,defaultInfo:t,handleCreateClick:a,handleEditClick:n,formConfig:h,acPageContentRef:l,handleResetClick:o,handleQueryClick:r,mapIdToLeaderName:p}}}),y=a(89);const I=(0,y.Z)(b,[["render",d]]);var R=I}}]);
//# sourceMappingURL=589.acec80a0.js.map