import Vue from 'vue'
import Router from 'vue-router'

import index from '@/page/index'

// 文档
import basePageOne from '@/page/basePage/basePageOne'
import basePageTwo from '@/page/basePage/basePageTwo'
import basePageThree from '@/page/basePage/basePageThree'
import basePageFour from '@/page/basePage/basePageFour'
import basePageFive from '@/page/basePage/basePageFive'
import basePageSix from '@/page/basePage/basePageSix'
import basePageSeven from '@/page/basePage/basePageSeven'
import basePageEight from '@/page/basePage/basePageEight'
import basePageNine from '@/page/basePage/basePageNine'

// js 代码
import jsPageOne from '@/page/jsPage/jsPageOne'


// css代码
import csPageOne from '@/page/csPage/csPageOne'

// 学习资料
import JPageOne from '@/page/javaScript/pageOne'
import JPageTwo from '@/page/javaScript/pageTwo'
import JPageThree from '@/page/javaScript/pageThree'
import JPageFour from '@/page/javaScript/pageFour'
import JPageFive from '@/page/javaScript/pageFive'
import JPageSix from '@/page/javaScript/pageSix'
import JPageSeven from '@/page/javaScript/pageSeven'
import JPageEight from '@/page/javaScript/pageEight'


// 解决方案
import bookMark from '@/page/solveQuestion/bookmark'




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
    },
    {
      path: '/basePageEight',
      name: 'basePageEight',
      component: basePageEight,
    },
    {
      path: '/basePageNine',
      name: 'basePageNine',
      component: basePageNine,
    },
    // jsPageOne
    {
      path: '/jsPageOne',
      name: 'jsPageOne',
      component: jsPageOne,
    },


    //csPage
    {
      path: '/csPageOne',
      name: 'csPageOne',
      component: csPageOne,
    },




    // 学习资料
    {
      path: '/JPageOne',
      name: 'JPageOne',
      component: JPageOne,
    },
    {
      path: '/JPageTwo',
      name: 'JPageTwo',
      component: JPageTwo,
    },
    {
      path: '/JPageThree',
      name: 'JPageThree',
      component: JPageThree,
    },
    {
      path: '/JPageFour',
      name: 'JPageFour',
      component: JPageFour,
    },
    {
      path: '/JPageFive',
      name: 'JPageFive',
      component: JPageFive,
    },
    {
      path: '/JPageSix',
      name: 'JPageSix',
      component: JPageSix,
    },
    {
      path: '/JPageSeven',
      name: 'JPageSeven',
      component: JPageSeven,
    },
    {
      path: '/JPageEight',
      name: 'JPageEight',
      component: JPageEight,
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: bookMark,
    }
  ]
})
