(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d3ae0d8"],{"026c":function(t,i,e){},6826:function(t,i,e){"use strict";var n=e("026c"),o=e.n(n);o.a},"9dc0":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"preview-vditor",attrs:{"element-loading-text":"正在努力，请稍候..."}},[e("div",{staticClass:"vditor-preview",attrs:{id:"j-preview-vditor"}})])},o=[],a=e("ff41"),r=e.n(a),s={name:"PreviewVditor",data:function(){return{isLoading:!0}},props:{pdata:{type:String,required:!0,default:""}},created:function(){this.$utils.updateHtmlStyle()},components:{},mounted:function(){this.initVditor(),this.$utils.hideVditorTextarea()},methods:{initVditor:function(){var t=this,i={width:"61.8%",mode:"sv",preview:{delay:1e3,show:!0}};this.vditor=new r.a("j-preview-vditor",i),this.vditor.setValue(this.pdata),this.$nextTick((function(){t.isLoading=!1}))}}},d=s,c=(e("6826"),e("0c7c")),u=Object(c["a"])(d,n,o,!1,null,null,null);i["a"]=u.exports},"9dd8":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"export-page"},[e("div",{staticClass:"button-group"},[e("el-button",{attrs:{round:""},on:{click:t.onBackToMainPage}},[t._v("返回主页")]),e("el-button",{attrs:{round:"",type:"primary"},on:{click:t.onExportBtnClick}},[t._v("生成导出")])],1),e("PreviewVditor",{attrs:{pdata:t.pdata}})],1)},o=[],a=e("d67e"),r=e.n(a),s=e("9dc0"),d={name:"export-pdf",data:function(){return{isLoading:!0,pdata:localStorage.getItem("vditorvditor")}},created:function(){},components:{PreviewVditor:s["a"]},mounted:function(){},methods:{exportAndDownloadPdf:function(t,i){var e=this,n=window.devicePixelRatio,o={margin:1,filename:i,html2canvas:{scale:n},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};r()().set(o).from(t).save().then((function(){e.isLoading=!1}))},onBackToMainPage:function(){this.$router.push("/")},onExportBtnClick:function(){this.isLoading=!0;var t=document.getElementsByClassName("vditor-preview")[0],i=this.$utils.getExportFileName();this.exportAndDownloadPdf(t,i)}}},c=d,u=e("0c7c"),l=Object(u["a"])(c,n,o,!1,null,null,null);i["default"]=l.exports}}]);