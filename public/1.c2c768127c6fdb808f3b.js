webpackJsonp([1],{1036:function(e,t,s){var n=s(984);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s(458)("0858088e",n,!0)},1276:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view",attrs:{id:"elevation-view"}},[s("v-layout",{attrs:{"column-xs":"column-xs","row-sm":"row-sm"}},[s("v-flex",{attrs:{xs12:"xs12",sm8:"sm8",md12:"md12"}},[s("section-def",[s("dt",{slot:"title"},[e._v("Elevation")]),s("dd",{slot:"desc"},[e._v("The elevation helpers allow you to control relative depth, or distance, between two surfaces along the z-axis.")])])],1),s("ad")],1),s("section",[s("h6",[e._v("Variants")]),e._m(0),s("h6",[e._v("Playground")]),s("v-container",{attrs:{fluid:"fluid"}},[s("v-layout",{attrs:{row:"row"}},[s("v-flex",{attrs:{xs4:"xs4"}},[s("v-select",{attrs:{label:"Select elevation",items:e.elevations,"item-text":"text","item-value":"class","return-object":"return-object"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),s("v-flex",{attrs:{xs6:"xs6","offset-xs1":"offset-xs1"}},[s("v-card",{class:e.example.classes},[s("v-card-text",[s("p",{staticClass:"text-xs-center ma-0"},[e._v(e._s(e.example.elevation))])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"mb-5"},[e._v("There's a total of 25 elevation levels. You can set an element's elevation by using the class "),s("code",[e._v("elevation-N")]),e._v(", where N is a integer between 0-24 corresponding to the desired elevation.")])}]}},712:function(e,t,s){function n(e){s(1036)}var a=s(10)(s(910),s(1276),n,null,null);e.exports=a.exports},753:function(e,t,s){e.exports={default:s(754),__esModule:!0}},754:function(e,t,s){s(161),s(756),e.exports=s(31).Array.from},755:function(e,t,s){"use strict";var n=s(58),a=s(113);e.exports=function(e,t,s){t in e?n.f(e,t,a(0,s)):e[t]=s}},756:function(e,t,s){"use strict";var n=s(59),a=s(57),o=s(75),l=s(158),i=s(157),r=s(114),c=s(755),v=s(160);a(a.S+a.F*!s(159)(function(e){Array.from(e)}),"Array",{from:function(e){var t,s,a,u,f=o(e),d="function"==typeof this?this:Array,x=arguments.length,m=x>1?arguments[1]:void 0,p=void 0!==m,h=0,_=v(f);if(p&&(m=n(m,x>2?arguments[2]:void 0,2)),void 0==_||d==Array&&i(_))for(t=r(f.length),s=new d(t);t>h;h++)c(s,h,p?m(f[h],h):f[h]);else for(u=_.call(f),s=new d;!(a=u.next()).done;h++)c(s,h,p?l(u,m,[a.value,h],!0):a.value);return s.length=h,s}})},910:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(753),a=s.n(n);t.default={name:"elevation-view",data:function(){return{example:{classes:[],elevation:""},elevations:a()(Array(25).keys()).map(function(e){return{text:"elevation-"+e,class:'class="elevation-'+e+'"'}}),selected:{text:"elevation-1",class:'class="elevation-1"'}}},watch:{selected:function(){this.example={classes:[this.selected.text],elevation:this.selected.class}}},mounted:function(){this.selected=this.elevations[1]}}},984:function(e,t,s){t=e.exports=s(457)(void 0),t.push([e.i,"#display-view .toolbar{height:64px}",""])}});