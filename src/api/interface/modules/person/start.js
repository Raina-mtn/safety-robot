import request from '@/api/baseHttp/index.js'
// 开启流程
export const startFlow = (data) => request({
  url: '/flow/start',
  method: 'post',
  data
}).then(res => {
  return res
})


// 获取所有用户
export const getUserList = () => request({
  url: '/flow-user/listUser',
  method: 'post'
}).then(res => {
  return res
})
