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
主要用来对服务端和客户端，请求不同api的处理


# 6-5 使用renderRoutes方法实现对多级路由的支持

import { renderRoutes } from "react-router-config";


# 6-6 登陆功能的制作
# 6-7 登陆接口打通



# 6-8 登陆状态切换
bug: 刷新页面的时候，登陆状态不稳定切换
1. 刚进入页面，处于非登陆状态
2. 用户点击登陆按钮，进行登陆操作
 （1）浏览器发请求给node.js服务器
  （2）转发给api服务器，进行登陆
  （3）api服务器生成cookie
   (4) 浏览器上存在了cookie, 登陆成功
3. 当用户重新刷新页面的时候
 （1）浏览器去请求html(携带了cookie)
  （2）node.js服务器进行服务端渲染
  （3）进行服务端渲染，首先要去api服务器取数据（没有携带cookie)


# 6-9 解决登陆cookie传递问题
思路：在node请求中，加入cookie,修改serverInstance



# 7-1
共用的参数，可以利用axios这么传
const instance = axios.create({
  baseURL: '/',
  params: { secret: 'abcdefg'}, // 
})


# 7-2 借助context实现404
注意要在这个生命周期处理

componentWillMount() {
  const { staticContext } = this.props
  staticContext && (staticContext.Not_Found = true)
}



# 7-3 实现服务端301重定向
避免在没登陆情况下，会发起要登陆验证过的路由请求， Doc可以看到请求
在遇到Redirect组件， StaticRouter结合renderRoutes，会自动把Redirect信息塞到context，
{
  action: 'REPLACE',
  location: {...},
  url: '/',         //要跳转的路由
}
if (context.action === 'REPLACE') {
  res.redirect(301, context.url)
}




# 7-4 数据请求失败下promise处理
思路: 在每个loadData外层再包个promise, 就算请求失败，catch也执行resolve