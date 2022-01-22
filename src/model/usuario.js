const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome: String,
    senha: String 
})

const usuario = mongoose.model('Usuario', DataSchema)
module.exports = usuario;