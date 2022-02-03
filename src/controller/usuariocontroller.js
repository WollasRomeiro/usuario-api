const { update } = require('../model/usuario');
const usuario = require('../model/usuario');

module.exports = {
    async index(req,res){
        const usuarios = await usuario.find();
        res.json(usuarios)
    },

    async detail(req,res){
        const {_id} = req.params
        console.log(_id)
        const usuarios = await usuario.findOne({_id: _id});
        res.json(usuarios)
    },    
    
    async store(req,res){   
            const {nome, senha} = req.body;

            let datacreate = {}

            datacreate = {
                nome, senha
            }
            const usuarios = await usuario.create(datacreate);
            res.json(usuarios)
    },

    async delete(req,res){
        const {_id} = req.params
        const usuarios = await usuario.findByIdAndDelete({_id});
        res.json(usuarios)
    },

    async update(req,res){   
        const { _id, nome, senha } = req.body;

        let dataCreate = {}

        dataCreate = {
           nome, senha
        }
        const usuarios = await usuario.findByIdAndUpdate({_id}, dataCreate, {new:true});
        res.json(usuarios)
     },
}   