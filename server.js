const express = require('express')
const path = require('path')
const cors = require('cors')
const corsoptions ={
    origin:'*',
    optionsSuccessStatus:200
}
const server = express()
server.use(cors(corsoptions))
server.use('/public',express.static(path.join(__dirname,'static')))
server.use('/',express.static(path.join(__dirname,'static')))
server.listen(2045,()=>{
    console.log('serving font awesome icons')
})
