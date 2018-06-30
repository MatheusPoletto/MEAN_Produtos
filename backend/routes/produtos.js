var express = require('express');
var router = express.Router();
var Produto = require('../models/produtos');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET lista produtos */
router.get('/listar', function(req, res, next) {
    Produto.find({}).exec((err, users) => {
      res.json(users);
    });
});

/* POST cadastra produto */
router.post('/cadastrar', function(req, res, next) {
    var produto = new Produto(req.body);
    produto.criado_em = new Date();
    produto.alterado_em = new Date();
    produto.save(err => {
      res.json({message: 'Criado'});
    });
});

/* PUT altera produto */
router.put('/alterar/:id', function(req, res) {
    var produto = req.body;
    produto.alterado_em = new Date();
    Produto.update({_id: req.params.id}, produto, function(err, data) {
      res.json({message: 'Alterado'});
    });
});

/* DELETE remove produto */
router.delete('/remover/:id', function(req, res) {
    Produto.remove({_id: req.params.id}, function(err, data) {
      res.json({message: 'Removido'});
    });
  });



module.exports = router;
