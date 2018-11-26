是在Home下面创建一个store文件夹
 store
    action.js
    constants.js
    index.js
    reducer.js


    reducer.js

      import { GET_DATA } from './constants'

      const initState = {
        name: 'init',
      }

      export const homeReducer = (state=initState, action) => {
        switch (action.type) {
          case GET_DATA:
            return {...state, name: action.payload}
            break;
          default:
            return {...state};
        }
      }

    index.js
      import reducer from './reducer'

      export default reducer










5-10 
server
item.route.loadData(store)

// 存在异步，所以打印没值
console.log('store', store.getState())

home
  store.dispath(getData())

action.js

const  changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

dispath((changeList(list)))


// 解决异步
(1) export const getData = () => {
  return (dispatch, action) => {
    return new Promise((resolve, reject) => {
      resolve(1)
    }).then(res => {
      dispatch({type: GET_DATA, payload: res})
    })
  }
}

(2) return store.dispath(getData())


(3) utils.js




会出现一种情况，服务端已经更改数据成功，拿到name: 1,
但是很快会重新被覆盖，成为客户端对初始值, name: init,
这就是下节对知识点，数据的脱水和注水



# 6-1 使用proxy代理，让中间层承担数据获取职责
yarn add express-http-proxy

用的时候，总是报错，连状态码都没有，只好先用res.send()先返回这个api路由的请求

问题： 当把服务端对路由loadData()的处理，客户端标签页总是在加载中(一直转) ？
下节内容


# 6-2 服务端请求和客户端请求对不同处理
（1）浏览器运行
/api/getData, 表示 http://localhost:3008/api/getData

（2）服务端运行
/api/getData, 表示服务器根目录下/api/getData

解决：
在getData方法里，根据server 布尔值，来请求不同的url



# 6-3 axios中instance的使用
6-2节对解决方法太low了，这节改版方法
主要用aixos中对baseURL



# 6-4 巧用redux-thunk中的withExtraArgument
后面三分钟可以听听，关于中间层渲染


# 6-5 使用renderRoutes方法实现对多级路由的支持

import { renderRoutes } from "react-router-config";
