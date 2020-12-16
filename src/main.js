import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios';
import dayjs from "dayjs"
Vue.prototype.dayjs = dayjs;
Vue.prototype.$axios = axios;



import moment from "moment";
Vue.prototype.$moment = moment;
moment.locale("zh-cn");
Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
