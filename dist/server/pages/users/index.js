exports.ids = [4];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/index.vue?vue&type=template&id=7c2e4acc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-screen h-screen bg-teal-400 text-white text-2xl"
  }, [_vm._ssrNode("<span>" + _vm._ssrEscape(" " + _vm._s(_vm.pageTitle) + " ") + "</span> <ul>" + _vm._ssrList(_vm.users, function (user) {
    return "<li><a href=\"#\">" + _vm._ssrEscape(_vm._s(user.name)) + "</a></li>";
  }) + "</ul>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/users/index.vue?vue&type=template&id=7c2e4acc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/index.vue?vue&type=script&lang=js&
/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  async asyncData({
    $axios
  }) {
    const users = await $axios.$get('https://jsonplaceholder.typicode.com/users');
    return {
      users
    };
  },
  data() {
    return {
      pageTitle: 'User page'
    };
  },
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user);
    }
  }
});
// CONCATENATED MODULE: ./pages/users/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/users/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2c2df70a"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map