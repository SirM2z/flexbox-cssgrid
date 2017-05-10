import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import {
  Select,
  Option,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  Slider
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
