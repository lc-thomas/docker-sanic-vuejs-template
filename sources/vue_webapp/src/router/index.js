import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AnotherPage from '@/components/AnotherPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/anotherPage',
      name: 'AnotherPage',
      component: AnotherPage
    }
  ]
})
