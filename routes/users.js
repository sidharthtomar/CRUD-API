const  Router  = require('express');
const express = require('express');
const { route } = require('express/lib/application');
const { v4: uuidv4 } = require('uuid');
uuidv4();



const router = express.Router();

let users =[ 

]


// all routes in here are starting with users

router.get('/',(req,res)=>{
    res.send(users)
   console.log(users)
})


router.post('/',(req,res)=>{
    console.log("Post request reached")
   const adduser = req.body;
    //users.push(adduser);
    //const userwithID = {...user,id:uuidv4()};
    users.push({...adduser,id:uuidv4()});
    res.send(`user with the firstname:${adduser.Firstname}is added to the database`)
    res.send('Post req reached')
})

router.get('/:id',(req,res)=>{
    //console.log(req.params);
    const { id } = req.params
    const foundUser = users.find((adduser)=>adduser.id===id);
    res.send(foundUser)
})


router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    users = users.filter((adduser)=>adduser.id!==id);
    res.send(users)
})




router.patch('/:id',(req,res)=>{
    const{id} = req.params;
    const adduser = users.find((adduser)=>adduser.id===id);
    const{Firstname,Lastname,Age} = req.body;
    if(Firstname){
        adduser.Firstname = Firstname;
    }
    if(Lastname){
        adduser.Lastname = Lastname;
    }
    if(Age){
        adduser.Age = Age;
    }
    res.send(`the give ${id} has been updated`)

})









module.exports = router;