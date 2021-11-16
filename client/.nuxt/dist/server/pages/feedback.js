exports.ids = [12];
exports.modules = {

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1caddce3", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact-form{margin-top:50px}.contact-form h1{text-align:center;margin-bottom:15px}.contact-form form{width:800px;margin:0 auto;display:grid;grid-template-columns:repeat(2,1fr)}.contact-form form input[type=text]{margin-top:15px;margin-right:10px;height:45px;width:400px;font-size:16px;color:#404041;border:1px solid #dfeeff;border-radius:6px;box-sizing:border-box;padding:0 20px}.contact-form form textarea{margin-top:10px;grid-column:1/3}.contact-form form input[type=submit]{margin-top:15px;line-height:0;grid-column:1/3;justify-self:center}.contact-form form input:nth-child(5){grid-column:1/3}.contact-form form input:nth-child(6){justify-self:center;grid-column:1/3;margin-top:20px;height:40px;width:130px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/feedback.vue?vue&type=template&id=2e012485&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"contact-form"},[_vm._ssrNode("<h1>Напишите нам и мы вам ответим</h1> "),_vm._ssrNode("<form action>","</form>",[_vm._ssrNode("<input type=\"text\" placeholder=\"Ваше имя*\" required=\"required\""+(_vm._ssrAttr("value",(_vm.name)))+"> <input type=\"text\" placeholder=\"Ваша компания\""+(_vm._ssrAttr("value",(_vm.company)))+"> <input type=\"text\" placeholder=\"Ваш телефон*\" required=\"required\""+(_vm._ssrAttr("value",(_vm.phone)))+"> <input type=\"text\" placeholder=\"Ваш e-mail*\" required=\"required\""+(_vm._ssrAttr("value",(_vm.email)))+"> <input type=\"text\" placeholder=\"Тема для обсужденя\""+(_vm._ssrAttr("value",(_vm.subject)))+"> "),_c('b-form-textarea',{attrs:{"id":"textarea","placeholder":"Сообщение","rows":"3","max-rows":"6"},model:{value:(_vm.text),callback:function ($$v) {_vm.text=$$v},expression:"text"}}),_vm._ssrNode(" <input type=\"submit\" value=\"Отправить\" class=\"btn\">")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/feedback.vue?vue&type=template&id=2e012485&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/feedback.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//
/* harmony default export */ var feedbackvue_type_script_lang_js_ = ({
  name: "about",
  layout: "main",

  data() {
    return {
      name: "",
      subject: "",
      email: "",
      company: "",
      phone: "",
      text: ""
    };
  },

  methods: {
    sendMail() {
      this.$axios.$post('api//email/sendEmail', {
        name: this.name,
        company: this.company,
        phone: this.phone,
        text: this.text,
        author: this.email,
        subject: this.subject
      });
      this.name = "";
      this.subject = "";
      this.email = "";
    }

  }
});
// CONCATENATED MODULE: ./pages/feedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_feedbackvue_type_script_lang_js_ = (feedbackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/feedback.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_feedbackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "68a84926"
  
)

/* harmony default export */ var feedback = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=feedback.js.map