import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'

export const menuListMap = [
  { name: '行为分析', path: '/components', redirect: 'noredirect', component: Layout, alwaysShow: true, meta: { title: '行为分析', icon: 'zujian' },
    children: [
      { name: '观看行为', path: 'behavior', component: () => import('@/views/behavior/index'), meta: { title: '观看行为', icon: 'icon' }}
    ]
  },
  { name: '版本管理', path: '/version', redirect: 'noredirect', component: Layout, alwaysShow: true, meta: { title: '版本管理', icon: 'system' },
    children: [
      { name: '升级包上传', path: 'uploadpack', component: () => import('@/views/version/uploadPack/index'), meta: { title: '升级包上传', icon: 'peoples' }},
      { name: '升级包管理', path: 'managepack', component: () => import('@/views/version/managePack/index'), meta: { title: '升级包管理', icon: 'role' }},
      { name: '升级包详情', path: 'packdetail', hidden: true, component: () => import('@/views/version/managePack/packDetail/index'), meta: { title: '升级包详情', icon: 'role' }},
      { name: '当前配置', path: 'currently', component: () => import('@/views/version/currently/index'), meta: { title: '当前配置', icon: 'permission' }}
    ]
  },
  { name: '系统监控', path: '/monitor', redirect: 'noredirect', component: Layout, alwaysShow: true, meta: { title: '系统监控', icon: 'monitor' },
    children: [
      { name: '操作日志', path: 'logs', component: () => import('@/views/monitor/log/index'), meta: { title: '操作日志', icon: 'log' }},
      { name: '异常日志', path: 'errorLog', component: () => import('@/views/monitor/log/errorLog'), meta: { title: '异常日志', icon: 'error' }}
    ]
  },
  { name: '系统管理', path: '/system', redirect: 'noredirect', component: Layout, alwaysShow: true, meta: { title: '系统管理', icon: 'redis' },
    children: [
      { name: '用户管理', path: 'user', component: () => import('@/views/system/user/index'), meta: { title: '用户管理', icon: 'peoples' }}
    ]
  },
  { name: '测试', path: '/test', redirect: 'noredirect', component: Layout, alwaysShow: true, meta: { title: '测试', icon: 'redis' },
    children: [
      { name: 'test', path: 'test', component: () => import('@/views/test/test'), meta: { title: '测试', icon: 'peoples' }}
    ]
  },
  {
    name: '软探针数据分析', path: '/softdataAna', redirect: 'noredirect', component: Layout, alwaysShow: true, meta: { title: '软探针数据分析', icon: 'location' },
    children: [
      { name: '用户数据分析', path: 'user', component: () => import('@/views/softDataAnalysis/user/index'), meta: { title: '用户数据分析', icon: 'dot' }},
      { name: '地市数据分析', path: 'city', component: () => import('@/views/softDataAnalysis/city/index'), meta: { title: '地市数据分析', icon: 'dot' }},
      { name: '质差用户输出', path: 'quality', component: () => import('@/views/softDataAnalysis/quality/index'), meta: { title: '质差用户输出', icon: 'dot' }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
