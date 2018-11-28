import React from 'react';
import Header from '../../components/Header'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }
  
  render() {
    const { isLogin } = this.state
    return (
      <div>
        {/* <button onClick={() => this.setState({isLogin: false})}>登出</button> */}
        {
          isLogin ? '' : (
            <Redirect to='/' />
          )
        }
      </div>
    )
  }
}