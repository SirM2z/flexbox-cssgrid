import Vue from 'vue'
import router from './router'
import App from './App'
import hljs from 'highlight.js'

Vue.config.productionTip = false

Vue.prototype.hljs = hljs

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
} from 'element-ui'
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Slider)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)

router.afterEach((route) => {
  document.title = route.meta.title
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
