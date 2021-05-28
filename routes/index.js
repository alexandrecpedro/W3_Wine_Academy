const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController')
const servicosController = require('../controllers/servicosController')
const institucionalController = require('../controllers/institucionalController')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Petshop' });
// });

// Rotas para páginas institucionais (Trabalhe Conosco, Sobre, etc)
// (1) http://localhost:3000/
router.get('/', institucionalController.index)
// (2) http://localhost:3000/sobre
router.get('/sobre', institucionalController.sobre);
// (3) http://localhost:3000/contato
router.get('/contato', institucionalController.contato)
// (4) Rota para '/servicos' que retorna o método servicos da institucionalController
router.get('/servicos', institucionalController.servicos)

// Rota para '/pets' que retorna o método index da petsController
router.get('/pets', petsController.index)
// Rota para '/pets/:nome' que retorna o método show da petsController
router.get('/pets/:nome', petsController.show)

module.exports = router;
