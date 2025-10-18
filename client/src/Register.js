import axios from 'axios'
import React, {useState} from 'react'

const Register = () => {
    const [data, setData] = useState({
        userName : '',
        email : '',
        password : '',
        confirmpassword : ''
    })
    const changeHandler = e =>{
        setData({...data, [e.target.name]: e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/register', data).then(
            res => alert(res.data)
        )
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <input type = "text" onChange={changeHandler} name = "userName" placeholder='userName'></input><br/>
                <input type = "email" onChange={changeHandler} name = "email" placeholder='email'></input><br/>
                <input type = "password" onChange={changeHandler} name = "password" placeholder='password'></input><br/>
                <input type = "password" onChange={changeHandler} name = "confirmPassword" placeholder='confirmPassword'></input><br/>
                <input type='submit' value = "Register"></input>
            </form>
        </center>
    </div>
  )
}

export default Register