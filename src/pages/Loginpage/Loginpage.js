import React, { Component } from 'react'
import Login from '../../components/Login/Login'

  import './Loginpage.scss'


class Loginpage extends Component {
  state = {}

  render() {
    return (
      
      <div className="LoginpageStyles">
        <Login></Login>
      </div>
    )
  }
}

export default Loginpage
