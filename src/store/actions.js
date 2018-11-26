import { GET_DATA } from './constants'
import Axios from 'axios'
import clientAxios from '../client/request'
import serverAxios from '../server/request'
// export const getData = () => {
//   return (dispatch, action) => {
//     return new Promise((resolve, reject) => {
//       resolve(1)
//     }).then(res => {
//       dispatch({type: GET_DATA, payload: res})
//     })
//   }
// }

export const getData = (server) => {
  const request = server ? serverAxios : clientAxios
  return (dispatch, action) => {
    return request.get('/api/getData?name=123').then((res) => {
      dispatch({type: GET_DATA, payload: res.data})
    })
  }
}