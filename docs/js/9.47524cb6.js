(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"4c1d":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("q-layout",{attrs:{view:"HHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(a){e.leftDrawerOpen=!e.leftDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1),n("q-toolbar-title",[e._v("\n        QIconPicker "),n("span",{staticClass:"text-subtitle2"},[e._v("v"+e._s(e.version))])]),n("q-space"),n("q-btn",{attrs:{flat:"",round:"",icon:e.$q.dark.isActive?"brightness_2":"brightness_5"},on:{click:function(a){return e.$q.dark.toggle()}}}),e.$q.screen.width>500?n("div",[e._v("Quasar v"+e._s(e.$q.version))]):e._e()],1)],1),n("q-drawer",{staticClass:"menu",attrs:{"show-if-above":"",bordered:"",width:350,"aria-label":"Menu"},model:{value:e.leftDrawerOpen,callback:function(a){e.leftDrawerOpen=a},expression:"leftDrawerOpen"}},[n("div",{staticClass:"col-12"},[n("q-expansion-item",{attrs:{"expand-separator":"","default-opened":"",group:"somegroup",icon:"fas fa-cogs",label:"Playground",caption:"Play with properties"}},[n("q-separator"),n("playground")],1),n("q-expansion-item",{attrs:{"expand-separator":"",group:"somegroup",icon:"fas fa-link",label:"Essential Links"}},[n("q-separator"),n("essential-links")],1),n("q-separator")],1)]),n("q-page-container",[n("router-view")],1)],1)},r=[],o=n("384e"),s={name:"IconPickerLayout",components:{playground:function(){return n.e(8).then(n.bind(null,"2937"))},"essential-links":function(){return n.e(0).then(n.bind(null,"4bd0"))}},data:function(){return{version:o["b"],leftDrawerOpen:this.$q.platform.is.desktop}}},i=s,l=n("2877"),c=n("eebe"),p=n.n(c),u=n("4d5a"),d=n("e359"),b=n("65c6"),f=n("9c40"),q=n("0016"),w=n("6ac5"),v=n("2c91"),g=n("9404"),k=n("3b73"),m=n("eb85"),h=n("09e3"),Q=Object(l["a"])(i,t,r,!1,null,null,null);a["default"]=Q.exports;p()(Q,"components",{QLayout:u["a"],QHeader:d["a"],QToolbar:b["a"],QBtn:f["a"],QIcon:q["a"],QToolbarTitle:w["a"],QSpace:v["a"],QDrawer:g["a"],QExpansionItem:k["a"],QSeparator:m["a"],QPageContainer:h["a"]})}}]);