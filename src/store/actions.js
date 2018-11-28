import { GET_DATA } from './constants'

// export const getData = () => {
//   return (dispatch, action) => {
//     return new Promise((resolve, reject) => {
//       resolve(1)
//     }).then(res => {
//       dispatch({type: GET_DATA, payload: res})
//     })
//   }
// }

export const getData = () => {
  return (dispatch, getState, aixosInstance) => {
    return aixosInstance.get('/api/getData').then((res) => {
      dispatch({type: GET_DATA, payload: res.data})
    })
  }
}