import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
        <ul>
          <Link to='/register'>  <li>Register</li>  </Link>
          <Link to='/login'>  <li>Login</li>  </Link>
        </ul>
    </div>
  )
}
