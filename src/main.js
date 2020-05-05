import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import { fb } from "./firebase";
import VueFirestore from "vue-firestore";

import "popper.js";
import "bootstrap";
import "./assets/app.scss";
import Swal from "sweetalert2";

Vue.use(VueFirestore, {
  key: "id", // the name of the property. Default is '.key'.
  enumerable: true, //  whether it is enumerable or not. Default is true.
});
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

window.Toast = Toast;

Vue.use(VueFirestore);

import Vue2Filters from "vue2-filters";
Vue.use(Vue2Filters);

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("product-list", require("./sections/ProductList.vue").default);
Vue.component("add-to-cart", require("./components/AddToCart.vue").default);
Vue.component("mini-cart", require("./components/MiniCart.vue").default);
Vue.config.productionTip = false;

let app = "";
fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next("/");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});
