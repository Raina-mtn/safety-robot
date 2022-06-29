
import request from '@/api/baseHttp/index.js'
// 菜单列表
export const apiGetMenuList = () => request({
  url: '/user/base-info',
  method: 'post'
}).then(res => {
  return res
})