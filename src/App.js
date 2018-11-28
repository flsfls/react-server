import React from 'react';
import Header from './components/Header'
import { renderRoutes } from "react-router-config";
import Routes from './Routes'
import { actions } from './components/Header/store'

const App = (props) => {
  // console.log('props', props.route)
  return (
    <div>
      <Header />
      {/* {renderRoutes(Routes[0].routes)} */}
      {renderRoutes(props.route.routes)}
    </div>
  )
}
App.loadData = (store) => {
  // return store.dispatch(getHeaderInfo())    // 少了return, 这里会导致promise是undefined
}
export default App;