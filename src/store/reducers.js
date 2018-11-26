import { GET_DATA } from './constants'

const initialHomeState = {
  name: 'init',
}

export const homeReducer = (state=initialHomeState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {...state, name: action.payload}
      break;
    default:
      return {...state};
  }
}

