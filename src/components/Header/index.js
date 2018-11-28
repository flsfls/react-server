import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

 const Header = (props) => {
   const { login } = props
   return (
     <div>
       <Link to='/'>Home</Link>
       <br/>
       {
         login ? (
          <React.Fragment>
            <Link to='/list'>List</Link>  
            <br/>
            <Link to='/logout'>Logout</Link>
            <br/>
          </React.Fragment>
         ) : <Link to='/login'>Login</Link>
       }
              
     </div>
   )
 }

 export default connect(state => state.header)(Header)
 