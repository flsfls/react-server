import { createStore, applyMiddleware, combineReducers } from 'redux'
import Thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { homeReducer } from './reducers'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const rootReducer = combineReducers({
  homeReducer,
})

// 单例模式
//  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk, logger)))

//  export default store

export const getStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk.withExtraArgument(serverAxios), logger)))
}

export const getClientStore = () => {
  const defautlStore = window.context.state
  return createStore(rootReducer, defautlStore, composeWithDevTools(applyMiddleware(Thunk.withExtraArgument(clientAxios), logger)))
}
