import { createStore, applyMiddleware, combineReducers } from 'redux'
import Thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { homeReducer } from './reducers'
import clientAxios from '../client/request'
import serverAxios from '../server/request'
import { reducer as headerReducer } from '../components/Header/store'
const rootReducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
})

// 单例模式
//  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk, logger)))

//  export default store

export const getStore = (req) => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk.withExtraArgument(serverAxios(req)), logger)))
}

export const getClientStore = () => {
  const defautlStore = window.context.state
  return createStore(rootReducer, defautlStore, composeWithDevTools(applyMiddleware(Thunk.withExtraArgument(clientAxios), logger)))
}
