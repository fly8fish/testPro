import { login, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    user: {},
    roles: [],
    // 第一次加载菜单时用到
    loadMenus: false
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_LOAD_MENUS: (state, loadMenus) => {
      state.loadMenus = loadMenus
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const rememberMe = userInfo.rememberMe
      return new Promise((resolve, reject) => {
        const res = {
          'token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU2MTQ1NTcxMywiaWF0IjoxNTYxNDM0MTEzfQ.u51V6XB8k0aykfLC9FpZnk7Z9XmHRBthwwCrPMxe04Q7vF_dEcqqeYT4VZHtCBJOeoZADpmZaPJdfUPlbnR0fg',
          'user': {
            'username': 'admin',
            'avatar': 'https://i.loli.net/2019/04/04/5ca5b971e1548.jpeg',
            'email': 'admin@eladmin.net',
            'phone': '18888888888',
            'dept': '研发部',
            'job': '全栈开发',
            'enabled': true,
            'createTime': 1534986716000,
            'roles': ['ADMIN']
          }}
        setToken(res.token, rememberMe)
        commit('SET_TOKEN', res.token)
        setUserInfo(res.user, commit)
        commit('SET_LOAD_MENUS', true)
        resolve()
      })
    },

    // Login({ commit }, userInfo) {
    //   const username = userInfo.username
    //   const password = userInfo.password
    //   const rememberMe = userInfo.rememberMe
    //   return new Promise((resolve, reject) => {
    //     login(username, password).then(res => {
    //       setToken(res.token, rememberMe)
    //       commit('SET_TOKEN', res.token)
    //       setUserInfo(res.user, commit)
    //       // 第一次加载菜单时用到， 具体见 src 目录下的 permission.js
    //       commit('SET_LOAD_MENUS', true)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          setUserInfo(res, commit)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resolve()
      })
    },

    updateLoadMenus({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOAD_MENUS', false)
      })
    }
  }
}

export const setUserInfo = (res, commit) => {
  // 如果没有任何权限，则赋予一个默认的权限，避免请求死循环
  if (res.roles.length === 0) {
    commit('SET_ROLES', ['ROLE_SYSTEM_DEFAULT'])
  } else {
    commit('SET_ROLES', res.roles)
  }
  commit('SET_USER', res)
}

export default user
