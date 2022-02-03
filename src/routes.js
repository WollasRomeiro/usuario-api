const express = require('express');
const { update } = require('./controller/usuariocontroller');
const usuariocontroller = require('./controller/usuariocontroller');

const routes = express.Router();

routes.get('/', function(req,res){
    res.json({message: "Bem vindo ao Back End"})
})

routes.get('/usuario', usuariocontroller.index)
routes.get('/usuario/:_id', usuariocontroller.detail)
routes.post('/usuario', usuariocontroller.store)
routes.delete('/usuario/:_id', usuariocontroller.delete)
routes.put('/usuario', usuariocontroller.update)


module.exports = routes;
