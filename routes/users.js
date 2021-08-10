var express = require('express');
var router = express.Router();
const usuariosController = require("../controllers/usuariosController")
const validaEmailRepetido=require("../middlewares/validacao/validaCadastro")
const loginUsuario=require("../middlewares/loginUsuario")
//orden validaLogin a partir de donde comienza a validar


router.get('/cadastro',  validaEmailRepetido, usuariosController.cadastro)
router.post('/cadastro', validaEmailRepetido, usuariosController.salvar)
router.get('/playlist/curso-videos', loginUsuario, usuariosController.cursos)
router.get('/login', usuariosController.login)
router.post('/login',usuariosController.autenticacao)


module.exports = router;


