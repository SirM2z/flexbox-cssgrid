import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import hljs from "highlight.js";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.hljs = hljs;

import {
  Select,
  Option,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  Slider,
  Table,
  TableColumn,
  Card
} from "element-ui";
Vue.use(Row);
Vue.use(Col);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Slider);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Card);

router.afterEach(route => {
  document.title = route.meta.title;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
