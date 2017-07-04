webpackJsonp([64],{1257:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("component-view",{attrs:{doc:e.doc}},[a("v-alert",{attrs:{info:"info",value:"true"},slot:"top"},[e._v("If you are looking for "),a("strong",[e._v("Grid lists")]),e._v(", please navigate "),a("router-link",{staticClass:"white--text",attrs:{to:"/components/grid-lists"}},[e._v("here")]),e._v(".")],1),a("v-card",{staticClass:"my-5",slot:"top"},[a("v-table-overflow",[a("table",{staticClass:"table"},[a("caption",{staticClass:"mt-3"},[a("strong",[e._v("Material Design Viewport Breakpoints")])]),a("thead",[a("tr",{staticClass:"text-xs-left"},[a("th",[e._v("Device")]),a("th",[e._v("Types")]),a("th",[e._v("Range")])])]),a("tbody",[a("tr",[a("td",[a("v-icon",{staticClass:"mr-3"},[e._v("phone_iphone")]),a("span",[e._v("Extra small")])],1),a("td",[e._v("small to large handset")]),a("td",[e._v("< 600px")])]),a("tr",[a("td",[a("v-icon",{staticClass:"mr-3"},[e._v("tablet")]),a("span",[e._v("Small")])],1),a("td",[e._v("small to medium tablet")]),a("td",[e._v("600px > < 1024px")])]),a("tr",[a("td",[a("v-icon",{staticClass:"mr-3"},[e._v("laptop")]),a("span",[e._v("Medium")])],1),a("td",[e._v("large tablet to laptop")]),a("td",[e._v("1024px > < 1440px")])]),a("tr",[a("td",[a("v-icon",{staticClass:"mr-3"},[e._v("desktop_windows")]),a("span",[e._v("Large")])],1),a("td",[e._v("desktop")]),a("td",[e._v("1440px > < 1920px")])]),a("tr",[a("td",[a("v-icon",{staticClass:"mr-3"},[e._v("tv")]),a("span",[e._v("Extra large")])],1),a("td",[e._v("4k and ultra-wides")]),a("td",[e._v("> 1920px")])])])])])],1)],1)},staticRenderFns:[]}},718:function(e,t,a){var s=a(10)(a(916),a(1257),null,null,null);e.exports=s.exports},916:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{doc:{title:"Grid",component:"grid",edit:"GridView",desc:"Vuetify.js uses a 12 point grid system. The grid is used to layout an application's content and contains 5 types of media breakpoints. The 5 ranges of breakpoints are used for targeting specific screen sizes or orientations.",examples:[{header:"Grid",file:"grid/1",desc:"The <code>v-container</code> can be used for a center focused page, or given the <code>fluid</code> prop to extend its full width. <code>v-layout</code> is used for separating sections and contains the <code>v-flex</code>. The structure of your layout will be as follows, <strong>v-layout</strong> &raquo; <strong>v-flex</strong>."},{header:"Offset",file:"grid/2",desc:"Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes."},{header:"Order",file:"grid/3",desc:"You can control the ordering of grid items. As with offsets, you can set different orders for different sizes"},{header:"Direction and Align",file:"grid/4",desc:"Designate the direction and alignment in a variety of ways."},{header:"Row and column based on breakpoint",file:"grid/5",desc:"Dynamically change your layout based upon resolution. <strong>(resize your screen and watch the layout change on small breakpoints)</strong>"}],props:{"v-container":{params:[["fluid","Boolean","False","Removes viewport size breakpoints"],["grid-list-{xs through xl}","Boolean","False","Sets the gutter between grid list items ranging from 1px to 24px"]]},"v-layout":{params:[["reverse","Boolean","False","Reverses the currently selected direction (column, row)."],["justify-space-around","Boolean","False","Justify content to the space around."],["justify-space-between","Boolean","False","Justify content to the space between."],["justify-center","Boolean","False","Justify content to the center.."],["justify-start","Boolean","False","Space between child elements."],["justify-end","Boolean","False","Space between child elements."],["align-center","Boolean","False","Align items to the center."],["align-baseline","Boolean","False","Align items to the baseline."],["align-start","Boolean","False","Align items to the start."],["align-end","Boolean","False","Align items to the end."],["wrap","Boolean","False","Allows children to wrap within the container if the elements use more than 100%."]]},"v-flex":{params:[["xs(1-12)","Boolean","False","xs:extra small, sm:small, md:medium, lg:large, xl:extra large - 1 through 12"],["offset-[size](1-12)","Boolean","False","offset-xs:extra small, offset-sm:small, offset-md:medium, offset-lg:large, offset-xl:extra large. Example: offset-xs3"],["order-[size](1-12)","Boolean","False","order-xs:extra small, order-sm:small, order-md:medium, order-lg:large, order-xl:extra large. Example: order-xs1"],["fill-height","Boolean","False","Make sure that col element height is filled with parent and child. Important for Safari/Firefox if children is column element."]]}},slots:{"v-container":{default:!0},"v-layout":{default:!0},"v-flex":{default:!0}},functional:{grid:{params:[["v-content","The main content wrapper for your application"],["v-spacer","Spacer for flexbox grids"]]}}}}}}}});