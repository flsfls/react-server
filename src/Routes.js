import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import App from './App'
import NotFound from './containers/NotFound'

// export default (
//     <div>
//       <Route path='/' exact component={Home}></Route>
//       <Route path='/login' exact component={Login}></Route>
//     </div>
// )
export default [{
  path: '/',
  component: App,
  loadData: App.loadData,
  routes: [
    {
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home',
    },
    {
      path: '/login',
      component: Login,
      exact: true,
      key: 'login'
    },
    {
      component: NotFound,
    }
  ]
}]
// export default [
//   {
//       path: '/',
//       component: Home,
//       exact: true,
//       loadData: Home.loadData,
//       key: 'home',
//       // routes: [{
//       //   path: '/test',
//       //   component: Login,
//       //   exact: true,
//       //   key: 'test'
//       // }]
//   },
//   {
//     path: '/login',
//     component: Login,
//     exact: true,
//     key: 'login'
//   }
// ]

