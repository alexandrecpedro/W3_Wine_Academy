const express = require('express');
const router = express.Router();
const institucionalController = require("../controllers/institucionalController")
const usuariosController = require("../controllers/usuariosController")

/* GET home page. */
router.get('/', institucionalController.index)
router.get('/cursos', institucionalController.cursos)
router.get('/planos', institucionalController.planos)
router.post('/planos', institucionalController.planosform)
router.get('/sobre', institucionalController.sobre)
router.get('/login', usuariosController.login)



module.exports = router;
