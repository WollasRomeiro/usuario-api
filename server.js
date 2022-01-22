const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require('cors')
const path = ("path")
const mongoose = require("mongoose")

const routes = require("./src/routes")

const app = express()

mongoose.connect('mongodb://localhost:27017/CursoMongoDb', {
    useUnifiedTopology:true,
    useNewUrlParser:true,
}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log('Mongo Db conectado com sucesso')
    }
})
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3003,function(){
    console.log("Servidor iniciou com sucesso")
})
