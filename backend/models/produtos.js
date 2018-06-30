var mongoose = require('mongoose');

var schemaProdutos = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    criado_em: Date,
    alterado_em: Date
});

//Adiciona S automático -> collection Produtos
module.exports = mongoose.model('Produto', schemaProdutos);