const express = require('express');
const router = express.Router();
const institucionalController = require("../controllers/institucionalController")

/* GET home page. */
router.get('/', institucionalController.index)
router.get('/cursos', institucionalController.cursos)
router.get('/planos', institucionalController.planos)
router.get('/sobre', institucionalController.sobre)
router.get('/login', institucionalController.login)



module.exports = router;
