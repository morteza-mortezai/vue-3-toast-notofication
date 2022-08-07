import type { App } from "vue";
import ToastNotVue from "./components/ToastNot.vue";

export default {
  install: (app: App) => {
    app.component("ToastNot", ToastNotVue);
  },
};
