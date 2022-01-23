import Vue from 'vue'
import Router from 'vue-router'
import UserLocation from './components/UserLocation.Vue'
import CloseBuy from './components/CloseBuy.Vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: UserLocation
    },
    {
      path: '/close-buy',
      component: CloseBuy
    }
  ]
})
