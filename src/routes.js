const express = require('express');
const usuariocontroller = require('./controller/usuariocontroller');

const routes = express.Router();

routes.get('/', function(req,res){
    res.json({message: "Bem vindo ao Back End"})
})

routes.get('/usuario', usuariocontroller.index)

module.exports = routes;
