import React, {useContext, useStat, useEffect} from 'react'
import { store } from './App'
import { redirect } from 'react-router-dom'
const MyProfile = () => {
    const [token, setToken] = useContext(store)
    useEffect(() =>{
        
    }, [])
    if(!token){
        return <redirect to = '/login' />
    }
  return (
    <div>
        <center>
            welcome to dashboard..
        </center>
    </div>
  )
}

export default MyProfile