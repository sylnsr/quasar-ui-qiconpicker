(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d226926"],{e8da:function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <q-input v-model="filter" label="Filter" outlined clearable class="q-ma-md" />\n    <q-icon-picker\n      v-model="value"\n      icon-set="material-icons"\n      :filter="filter"\n      :pagination.sync="pagination"\n      style="height: 220px;"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value: \'\',\n      filter: \'\',\n      pagination: {\n        itemsPerPage: 60,\n        page: 0\n      }\n    }\n  }\n}\n<\/script>\n'}}]);