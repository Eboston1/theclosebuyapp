import Vue from 'vue'
import Router from 'vue-router'
import userlocation from '@/pages/userlocation'
import closebuy from '@/pages/closebuy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: userlocation
    },
    {
      path: '/close-buy',
      component: closebuy
    }
  ]
})
