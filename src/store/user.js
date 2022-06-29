
import { defineStore } from "pinia";
import { constantRoutes } from '@/router/config'
import router, { resetRouter } from '@/router'
import {apiLogin, apiUserInfo} from '@/api/interface/index.js'

export const userStore = defineStore({
  id: 'user', // 必须指明唯一的pinia仓库的id
  state: () => ({
    token: '', // 登录令牌
    userInfo: {}, // 用户信息
    routes: constantRoutes,
    asyncRoutes: []
  }),
  actions: {
    // 登录
    async login(userInfo) {
      const  { data }  = await apiLogin(userInfo)
      this.token = data
      return data
    },

    // 退出
    logout({ commit }) {
      resetRouter()
      router.push(`/login?redirect=${router.app.$route.fullPath}`)
    }, 

    // 获取用户信息
    async getInfo() {
      const { data } = await apiUserInfo()
      this.userInfo = data
      return data
    },

    // 生成路由
    async setAsyncRoutes( asyncRoutes){
      this.asyncRoutes = asyncRoutes
      this.routes = constantRoutes.concat(asyncRoutes)
      return asyncRoutes
    },

    // 重置
    resetUserInfo(){
      this.token = '' // 登录令牌
      this.userInfo = {} // 用户信息
      this.routes = constantRoutes
      this.asyncRoutes = []
    }
  },
  getters: {
    userName: (state) => state.userInfo.userName
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'sh_smart_trans_user',
        storage: localStorage,
        paths: ['token', 'userInfo']
      }
    ]
  }
})
