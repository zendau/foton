exports.ids = [8];
exports.modules = {

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6f99b839", content, true, context)
};

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_vue_vue_type_style_index_0_id_0a476e84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_vue_vue_type_style_index_0_id_0a476e84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_vue_vue_type_style_index_0_id_0a476e84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_vue_vue_type_style_index_0_id_0a476e84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_vue_vue_type_style_index_0_id_0a476e84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".form-container[data-v-0a476e84]{width:600px;margin:30px auto 0}.form-select[data-v-0a476e84]{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn[data-v-0a476e84]{padding:0;margin:0 auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/delete.vue?vue&type=template&id=0a476e84&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-container"},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit.apply(null, arguments)}}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedId),expression:"selectedId"}],staticClass:"form-select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.selectedId=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.items),function(item){return _c('option',{key:item.id,attrs:{"value":""},domProps:{"value":item.id}},[_vm._v(_vm._s(item.title))])}),0),_vm._v(" "),_c('b-button',{staticClass:"btn",attrs:{"type":"submit","variant":"primary"}},[_vm._v("Удалить")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/delete.vue?vue&type=template&id=0a476e84&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/delete.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var deletevue_type_script_lang_js_ = ({
  name: "delete.vue",
  layout: "admin",

  data() {
    return {
      selectedId: null,
      items: [],
      title: ""
    };
  },

  async mounted() {
    this.items = await this.$axios.$get('http://localhost:8080/catalog/getAllItems');
  },

  methods: {
    onSubmit() {
      console.log(this.selectedId);
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/delete.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_deletevue_type_script_lang_js_ = (deletevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/delete.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_deletevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0a476e84",
  "6367d679"
  
)

/* harmony default export */ var admin_delete = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=delete.js.map