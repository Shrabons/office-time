const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("server all right")
})

app.listen('5000', ()=> console.log("server runing port 5000"))