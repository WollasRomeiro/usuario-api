const usuario = require('../model/usuario');

module.exports = {
    async index(req,res){
        console.log('============')
        const usuarios = await usuario.find();
        res.json(usuarios)
    }
}