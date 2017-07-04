webpackJsonp([7],{1021:function(e,t,a){var o=a(969);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(458)("08a6c0a4",o,!0)},1135:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("component-view",{attrs:{doc:e.doc}})},staticRenderFns:[]}},740:function(e,t,a){function o(e){a(1021)}var s=a(10)(a(938),a(1135),o,null,null);e.exports=s.exports},938:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tabs-view",data:function(){return{doc:{component:"tabs",edit:"TabsView",title:"Tabs",desc:"The <code>v-tabs</code> component is used for hiding content behind a selectable item. This can also be used as a psuedo-navigation for a page, where the tabs are links and the tab-items are the content.",examples:[{header:"Toolbar tabs",file:"tabs/1",desc:"The <code>v-tabs</code> component is highly customizable to suit your needs. You can get and set the currently active tab by using the <code>v-model</code> prop on the <code>v-tabs</code> component."},{header:"Centered tabs",file:"tabs/2",desc:"Tabs can be centered by using the <code>centered</code> prop. Here we have also applied the <code>fixed</code> prop which gives all tab items a fixed size, regardless of content."},{header:"Content",file:"tabs/3",desc:"Tabs are not the only thing you can put inside the <code>v-tabs</code> component. In this example we've also added a toolbar."},{header:"With search",file:"tabs/4",desc:"Here is another example of additional content inside the <code>v-tabs</code> component."},{header:"Icons",file:"tabs/5",desc:"By using the <code>icons</code> prop you can add icons to each tab item."},{header:"Desktop tabs",file:"tabs/6"},{header:"Grow",file:"tabs/7",desc:"The <code>grow</code> prop will make the tab items take up all available space."},{header:"Pagination",file:"tabs/8",desc:"If the tab items overflow their container, pagination controls will appear."},{header:"Disabled scroll",file:"tabs/9",desc:"You can disable the pagination controls by setting the <code>scrollable</code> prop to <code>false</code>. This also has the effect of removing the margins around the tab item container."}],props:{"v-tabs":{shared:["theme"],params:[["centered","Boolean","False","Centers the tabs"],["fixed","Boolean","False","Items have a fixed size"],["grow","Boolean","False","Items fill available space"],["icons","Boolean","False","Applies the tabs--icons class"],["scrollable","Boolean","True","Displays pagination controls when content overflows"]],model:{type:["String"],default:"-",description:"Current selected tab"}},"v-tabs-bar":{params:[]},"v-tabs-item":{shared:["router"],params:[["activeClass","String","toolbar__item--active","Class to apply for the active toolbar item"]]},"v-tabs-content":{params:[["id","String","Required","The content id"],["transition","String","v-tab-transition","Sets the default transition"],["reverse-transition","String","v-tab-reverse-transition","Sets the reverse transition"]]}},functional:{"v-tabs-bar":{params:[["v-tabs-slider",".tabs__slider"]]}},events:{"v-tabs":{params:[["input","String","Current active tab"]]}}}}}}},969:function(e,t,a){t=e.exports=a(457)(void 0),t.push([e.i,"#components-tabs-view .tabs{margin:1rem 0}",""])}});