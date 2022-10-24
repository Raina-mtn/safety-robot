import {lineOptions,locationList} from '@/utils/config'
const userList = [{name:'张三', phone:'137599884658', org: '默认部门',id:1},{name:'李四', phone:'137599456343', org: '默认部门', id:2}]
export const orgList = [{
  "id": "1",
  "parentId": "0",
  "path": "/0/",
  "level": 0,
  "sort": 100,
  "name": "申昊科技新办公大楼",
  "memo": "23",
  "createTime": "2022-05-31 19:15:51",
  "createBy": "1",
  "updateTime": "2022-09-16 13:44:53",
  "updateBy": "1",
  "archive": false,
  "subList": [
    {
      "id": "9",
      "parentId": "1",
      "path": "/0/1/",
      "level": 1,
      "sort": 100,
      "name": "12",
      "memo": null,
      "createTime": "2022-08-25 15:06:25",
      "createBy": "1",
      "updateTime": "2022-08-25 15:06:25",
      "updateBy": "1",
      "archive": false,
      "subList": [],
      "naviList": [],
      "editor": null,
      "parent": null
    },
    {
      "id": "7",
      "parentId": "1",
      "path": "/0/1/",
      "level": 1,
      "sort": 100,
      "name": "东侧走道",
      "memo": null,
      "createTime": "2022-05-31 19:17:56",
      "createBy": "1",
      "updateTime": "2022-05-31 19:17:56",
      "updateBy": "1",
      "archive": false,
      "subList": [],
      "naviList": [],
      "editor": null,
      "parent": null
    },
    {
      "id": "2",
      "parentId": "1",
      "path": "/0/1/",
      "level": 1,
      "sort": 100,
      "name": "南大门",
      "memo": null,
      "createTime": "2022-05-31 19:16:07",
      "createBy": "1",
      "updateTime": "2022-05-31 19:16:07",
      "updateBy": "1",
      "archive": false,
      "subList": [
        {
          "id": "8",
          "parentId": "2",
          "path": "/0/1/2/",
          "level": 2,
          "sort": 100,
          "name": "大厅",
          "memo": null,
          "createTime": "2022-05-31 19:18:40",
          "createBy": "1",
          "updateTime": "2022-05-31 19:18:40",
          "updateBy": "1",
          "archive": false,
          "subList": [],
          "naviList": [],
          "editor": null,
          "parent": null
        }
      ],
      "naviList": [],
      "editor": null,
      "parent": null
    },
    {
      "id": "3",
      "parentId": "1",
      "path": "/0/1/",
      "level": 1,
      "sort": 100,
      "name": "西门",
      "memo": null,
      "createTime": "2022-05-31 19:16:14",
      "createBy": "1",
      "updateTime": "2022-05-31 19:16:14",
      "updateBy": "1",
      "archive": false,
      "subList": [
        {
          "id": "4",
          "parentId": "3",
          "path": "/0/1/3/",
          "level": 2,
          "sort": 100,
          "name": "车库入口",
          "memo": null,
          "createTime": "2022-05-31 19:16:25",
          "createBy": "1",
          "updateTime": "2022-05-31 19:16:25",
          "updateBy": "1",
          "archive": false,
          "subList": [
            {
              "id": "6",
              "parentId": "4",
              "path": "/0/1/3/4/",
              "level": 3,
              "sort": 100,
              "name": "车库右入口",
              "memo": null,
              "createTime": "2022-05-31 19:17:31",
              "createBy": "1",
              "updateTime": "2022-05-31 19:17:31",
              "updateBy": "1",
              "archive": false,
              "subList": [],
              "naviList": [],
              "editor": null,
              "parent": null
            },
            {
              "id": "5",
              "parentId": "4",
              "path": "/0/1/3/4/",
              "level": 3,
              "sort": 100,
              "name": "车库左入口",
              "memo": null,
              "createTime": "2022-05-31 19:17:15",
              "createBy": "1",
              "updateTime": "2022-05-31 19:17:15",
              "updateBy": "1",
              "archive": false,
              "subList": [],
              "naviList": [],
              "editor": null,
              "parent": null
            }
          ],
          "naviList": [],
          "editor": null,
          "parent": null
        }
      ],
      "naviList": [],
      "editor": null,
      "parent": null
    }
  ],
  "naviList": [],
  "editor": null,
  "parent": null
}]
export const apiGetUserListMock = (data) =>new Promise((resolve)=>{
  resolve({data: userList})
})
export const apiGetlineListMock = (data) =>new  Promise((resolve)=>{
  resolve({data: lineOptions})
})
export const apiGetStationListMock = (data) =>new  Promise((resolve=>{
  resolve({data: locationList})
}))