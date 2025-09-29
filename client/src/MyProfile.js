import React, {useContext, useState, useEffect} from 'react'
import { store } from './App'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
const MyProfile = () => {
    const [token, setToken] = useContext(store);
    const [data, setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:5000/myProfile', {
          headers: {
            'x-token' : token
          }
        }).then((res) => setData(res.data))   // fixed here
      .catch((err) => console.log(err));
    }, [token])
    if(!token){
        return <Navigate to = '/login' />
    }
  return (
    <div>
      {
        <center>
        {data ? (
          <>
            welcome user : {data.userName} <br />
            <button onClick={() => setToken(null)}>Logout</button>
          </>
        ) : (
          "Loading..."
        )}
      </center>
      }
    </div>
  )
}

export default MyProfile