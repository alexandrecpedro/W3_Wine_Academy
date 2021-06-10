const { Router } = require('express');
var express = require('express');
const usuariosController = require('../controllers/usuariosController');
var router = express.Router();

// Rota para páginas de Cadastro e de Login
//(A) MÉTODO GET
// (1) http://localhost:3000/cadastro
router.get('/cadastro', usuariosController.cadastro)
// (2) http://localhost:3000/login
router.get('/login', usuariosController.login)

// (B) MÉTODO POST
// (1) http://localhost:3000/cadastro
router.post('/cadastro', usuariosController.salvar)
// (2) http://localhost:3000/login
router.post('/login', usuariosController.autenticacao)

module.exports = router;
