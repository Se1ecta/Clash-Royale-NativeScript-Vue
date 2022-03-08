import Vue from "nativescript-vue";
import VueDevtools from "nativescript-vue-devtools";
import store from "./store";
import Navigator from "nativescript-vue-navigator";
import { routes } from "./routes";

Vue.use(Navigator, { routes });

if (TNS_ENV !== "production") {
  Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";

Vue.registerElement(
  "RadSideDrawer",
  () => require("nativescript-ui-sidedrawer").RadSideDrawer
);

new Vue({
  store,
  render: (h) => h("Navigator", { attrs: { defaultRoute: "/" } }),
}).$start();
