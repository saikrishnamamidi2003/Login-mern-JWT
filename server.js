const express = require('express');
const app = express();

const RegisterUser = require('./model');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://saikrishnamamidi2003_db_user:Saikrishna%40123@cluster0.j90sct6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{
        console.log("db connected")
    }
)

app.use(express.json());

app.post('/register', async(req, res)=>{
    try{
        const {userName, email, password, confirmPassword} = req.body;
        let exist = await RegisterUser.findOne({email : email})
        if(exist){
            return res.status(400).send('User Already exists')
        }
        if(password != confirmPassword){
            return res.status(400).send('Passwords are not matching');
        }
        let newUser = new RegisterUser({
            userName, 
            email, 
            password, 
            confirmPassword
        })
        await newUser.save();
        res.status(200).send('Registered successfully')
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Internel server Error')
    }
})

app.listen(5000, ()=> {
    console.log('server running...')
})