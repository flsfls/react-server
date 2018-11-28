import { CHANGE_LOGIN } from './constants'

const changeLogin = (value) => ({
  type: 'CHANGE_LOGIN',
  value,
})

export const login = () => {
  return (dispatch, getState, aixosInstance) => {
    return aixosInstance.get('/api/login.json?secret=abcd')
    .then((res) => {
      dispatch(changeLogin(true))
    })
  }
}

export const logout = () => {
  return (dispatch, getState, aixosInstance) => {
    return aixosInstance.get('/api/logout.json?secret=abcd')
    .then((res) => {
      dispatch(changeLogin(false))
    })
  }
}

export const getHeaderInfo = () => {
  return (dispatch, getState, aixosInstance) => {
    return aixosInstance.get('/api/isLogin.json?secret=abcd').then((res) => {
      dispatch(changeLogin(res.data.data.login))
    })
  }
}