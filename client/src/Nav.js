import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './App'
export const Nav = () => {
  const [token, setToken] = useContext(store)
  return (
    <div>
      {!token &&
        <ul>
          <Link to='/register'>  <li>Register</li>  </Link>
          <Link to='/login'>  <li>Login</li>  </Link>
        </ul>
      }
    </div>
  )
}
