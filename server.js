const express = require('express')
const path = require('path')
const cors = require('cors')
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
server.listen(process.env.PORT,process.env.HOST,()=>{
    console.log(`serving font awesome icons on http://${process.env.HOST}:${process.env.PORT}/`)
})
