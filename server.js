const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');

const RegisterUser = require('./model');

const middleware = require('./middleware');

const jwt = require('jsonwebtoken');
mongoose.connect("mongodb+srv://saikrishnamamidi2003_db_user:Saikrishna%40123@cluster0.j90sct6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
}).then(
    ()=>{

        console.log("db connected")
    }
).catch(err=> console.error("❌ MongoDB Error:", err));

app.use(express.json());

app.use(cors({origin : "*"}));

app.post('/register', async(req, res)=>{
    console.log("Request Body:", req.body);  
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
        return res.status(500).send('Internal server Error')
    }
});

// ...existing code...

app.get('/data', (req, res) => {
    res.send('Data route is working!');
});

// ...existing code...

app.post('/login', async(req, res) => {
    //console.log("Request Body:", req.body);  
    try{
        const {email, password} = req.body;
        let exist = await RegisterUser.findOne({email});
        if(!exist){
            return res.status(400).send('User Not Found');
        }
        if(exist.password != password){
            return res.status(400).send('Invalid');
        }
        let payload = {
            user : {
                id : exist.id
            }
        }
        jwt.sign(payload, 'jwtSecret', {expiresIn:3600000}, 
            (err, token) =>{
                if(err) throw err;
                return res.json({token})
            }
        )
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('server Error');
    }
});

app.get('/myProfile', middleware, async(req, res) => {
    try{
        let exist = await RegisterUser.findById(req.user.id);
        if(!exist){
            return res.status(400).send('User not found');
        }
        res.json(exist);
    }
    catch(err)
{
        console.log(err);
        return res.status(500).send('server Error');
    }
});




app.listen(5000, ()=> {
    console.log('server running...')
})




