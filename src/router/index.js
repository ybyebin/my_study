import Vue from 'vue'
import Router from 'vue-router'

import index from '@/page/index'
import basePageOne from '@/page/basePageOne'
import basePageTwo from '@/page/basePageTwo'
import basePageThree from '@/page/basePageThree'
import basePageFour from '@/page/basePageFour'
import basePageFive from '@/page/basePageFive'
import basePageSix from '@/page/basePageSix'
import basePageSeven from '@/page/basePageSeven'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/basePageOne',
      name: 'basePageOne',
      component: basePageOne,
    },
    {
      path: '/basePageTwo',
      name: 'basePageTwo',
      component: basePageTwo,
    },
    {
      path: '/basePageThree',
      name: 'basePageThree',
      component: basePageThree,
    },
    {
      path: '/basePageFour',
      name: 'basePageFour',
      component: basePageFour,
    },
    {
      path: '/basePageFive',
      name: 'basePageFive',
      component: basePageFive,
    },
    {
      path: '/basePageSix',
      name: 'basePageSix',
      component: basePageSix,
    },
    {
      path: '/basePageSeven',
      name: 'basePageSeven',
      component: basePageSeven,
    }
  ]
})
