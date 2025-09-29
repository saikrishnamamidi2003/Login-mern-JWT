import axios from 'axios'
import React, {useState, useContext} from 'react'
import { store } from './App'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState({
        email : '',
        password : '',
    })
    const changeHandler = e =>{
        setData({...data, [e.target.name]: e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/Login', data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
       return <Navigate to = '/myProfile' />
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>        
                <input type = "email" onChange={changeHandler} name = "email" placeholder='email'></input><br/>
                <input type = "password" onChange={changeHandler} name = "password" placeholder='password'></input><br/>
                <input type='submit' value = "Login"></input>
            </form>
        </center>
    </div>
  )
}

export default Login