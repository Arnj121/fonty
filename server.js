const express = require('express')
const path = require('path')
const cors = require('cors')
const dns = require('node:dns')
const os = require('node:os')
require('dotenv').config()
const corsoptions ={
    origin:'*',
    optionsSuccessStatus:200
}
const server = express()
server.use(cors(corsoptions))
server.use('/public',express.static(path.join(__dirname,'static')))
server.use('/',express.static(path.join(__dirname,'static')))
server.get('/test',(req,res)=>{
	res.send({'msg':'recieving'})})

dns.lookup(os.hostname(),{'family':4},(err,addr)=>{
    server.listen(process.env.PORT,addr,()=>{
        console.log(`serving font awesome icons on http://${addr}:${process.env.PORT}/`)
    })
})

