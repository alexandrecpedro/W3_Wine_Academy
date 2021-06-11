const { Router } = require('express');
var express = require('express');
const usuariosController = require('../controllers/usuariosController');
var router = express.Router();
// Chama middleware - validação de usuário
const validateLogin = require('../middlewares/auth')

// Rota para páginas de Cadastro e de Login
//(A) MÉTODO GET
// (1) http://localhost:3000/cadastro
router.get('/cadastro', usuariosController.cadastro)
// (2) http://localhost:3000/login
router.get('/login', validateLogin, usuariosController.login)

// (B) MÉTODO POST
// (1) http://localhost:3000/cadastro
router.post('/cadastro', usuariosController.salvar)
// (2) http://localhost:3000/login
router.post('/login', validateLogin, usuariosController.autenticacao)

module.exports = router;
