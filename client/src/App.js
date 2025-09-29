import React, {useState, createContext} from 'react'

import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Nav } from './Nav'
import Register from './Register'
import Login from './Login'
import MyProfile from './MyProfile'

export const store = createContext();


const App = () => {
  const [token, setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token, setToken]}>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path = '/register' Component={Register} />
        <Route path = '/login' Component={Login} />
        <Route path = '/myProfile' Component={MyProfile} />

      </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App