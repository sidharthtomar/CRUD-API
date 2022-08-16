
const express = require('express')
const bodyparser = require('body-parser')


const usersRoutes = require('./routes/users.js')
const app =express();



const port = 5000;


app.use(bodyparser.json())

app.use('/users',usersRoutes)

app.get('/',(req,res)=>{
    console.log('Test')
   res.send('Hello from homepage')

})


app.listen(port,function(){
    console.log(`Serveer running on port: http://localhost:${port}`)
})





