import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login',
    meta: { title: '登录', noCache: true },
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: 'dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: '首页',
  //       meta: { title: '首页', icon: 'index', noCache: true, affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: 'home',
  //   children: [
  //     {
  //       path: 'home',
  //       component: () => import('@/views/home/index'),
  //       name: '首页',
  //       meta: { title: '首页', icon: 'index', noCache: true, affix: true }
  //     }
  //   ]
  // },
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/index/index'),
        name: '首页',
        meta: { title: '首页', icon: 'monitor', noCache: true, affix: true }
      }
    ]
  },
  { name: '用户分析', path: '/terminal', redirect: 'noredirect', component: Layout, alwaysShow: true, meta: { title: '用户分析', icon: 'sys-tools', noCache: true, affix: true },
    children: [
      { name: '整体概况', path: 'terminal', component: () => import('@/views/system/terminal/index'), meta: { title: '整体概况', icon: 'index' }},
      { name: '终端信息', path: 'overall', component: () => import('@/views/system/userAnalysis/index'), meta: { title: '终端信息', icon: 'sqlMonitor' }}
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'center',
        component: () => import('@/views/system/user/center'),
        name: '个人中心',
        meta: { title: '个人中心', icon: 'user' }
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
