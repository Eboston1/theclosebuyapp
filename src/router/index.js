import Vue from 'vue'
import Router from 'vue-router'
import UserLocation from './src/pages/UserLocation.Vue'
import CloseBuy from './src/pages/CloseBuy.Vue'

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
