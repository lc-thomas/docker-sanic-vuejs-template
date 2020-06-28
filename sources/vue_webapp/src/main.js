// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/* Notifications */
import VueAWN from "vue-awesome-notifications"
let options = {}
Vue.use(VueAWN, options)

/* KeenUI */
//import KeenUI from 'keen-ui';
//import 'keen-ui/dist/keen-ui.css';
import KeenUI from 'keen-ui/src/index';
// Here define components global options
Vue.use(KeenUI, {
    UiTooltip: { 
      position: 'top'
    },
    UiButton: {
      iconPosition: 'right'
    }
  }
)

/* Running Vue */
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router,
  components: { App }
}).$mount('#app')

