import Vue from "vue";
import ALIProduct from "./Product.vue";
import ALIBanner from "./Banner.vue";

const Components = {
  ALIProduct,
  ALIBanner
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;