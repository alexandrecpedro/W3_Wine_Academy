const express = require('express');
const router = express.Router();
const institucionalController = require("../controllers/institucionalController")
const { check } = require("express-validator")
const validateRegisterLogin = require("../middlewares/validacao/login")

/* GET home page. */
router.get('/', institucionalController.index)
router.get('/cursos', institucionalController.cursos)
router.get('/planos', institucionalController.planos)
router.get('/sobre', institucionalController.sobre)
router.get('/login', validateRegisterLogin, institucionalController.login)



module.exports = router;
