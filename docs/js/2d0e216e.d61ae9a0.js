(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e216e"],{"7ce1":function(n,e,i){"use strict";i.r(e),e["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <div class="wrapper">\n      <q-icon-picker\n        v-model="value"\n        icon-set="material-icons"\n        :pagination.sync="pagination"\n        :pagination-props="{\n          \'max-pages\': 5,\n          \'input\': true,\n          \'color\': \'yellow-10\',\n          \'input-class\': \'text-yellow-10\'\n        }"\n        class="container"\n        style="height: 400px;"\n      >\n        <template #icon="name">\n          <q-btn\n            :label="name"\n            :icon="name"\n            no-caps\n            no-wrap\n            align="left"\n            style="width: 32%"\n            class="q-ma-xs ellipsis col-4 icon-item"\n          />\n        </template>\n      </q-icon-picker>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value: \'\',\n      pagination: {\n        itemsPerPage: 24,\n        page: 0\n      }\n    }\n  }\n}\n<\/script>\n\n<style lang="sass">\n.wrapper\n  background: linear-gradient(#3D4246,#24282B)\n  border-radius: 4px\n  border-top: 1px solid #53575C\n  border-left: 1px solid #53575C\n  box-shadow: 1px 1px #17191C,0 0 10px #323338\n  padding: 8px\n  padding-bottom: 12px\n\n.container\n  border: 1px solid #0F1014\n  border-radius: 3px\n  background: #0F1014\n\n.icon-item\n  display: inline-flex\n  float: left\n  height: 36px\n  max-height: 36px\n  color: #D9D9D9\n  text-align: center\n  text-shadow: 0 1px #0F1014\n  display: table\n  background: linear-gradient(#44494F,#2F3237)\n  border-radius: 3px\n  border-right: 1px solid #0F1014\n  border-bottom: 1px solid #0F1014\n  border-top: 1px solid #53575C\n  border-left: 1px solid #53575C\n  box-shadow: 1px 1px #17191C\n  cursor: pointer\n</style>\n'}}]);