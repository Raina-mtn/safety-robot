import request from '@/api/baseHttp/index.js'
// 创建场站
export const apiGetUser = (data) => request({
  url: '/user/base-info',
  method: 'post',
  data
}).then(res => {
  return res
})
// 创建场站
export const apiCreateStation = (data) => request({
  url: '/station/create',
  method: 'post',
  data
}).then(res => {
  return res
})
// 机器人场站
export const apiGetStation = (data) => request({
  url: '/station/get',
  method: 'post',
  data
}).then(res => {
  return res
})
// 机器人场站列表查询
export const apiGetStationList = (data) => request({
  url: '/station/list',
  method: 'post',
  data
}).then(res => {
  return res
})
// 机器人场站列表更新
export const apiUpdateStation = (data) => request({
  url: '/station/update',
  method: 'post',
  data
}).then(res => {
  return res
})