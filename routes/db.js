var express = require('express');
const alunoController = require('../controllers/alunoController');
const professorController = require("../controllers/professorController")
const cursoController = require("../controllers/cursoController")
const areaController = require("../controllers/areaController")
const modalidadeController = require("../controllers/modalidadeController")
const dashboardController = require("../controllers/dashboardController")
var router = express.Router();


// http://localhost:3000/alunos
router.get('/alunos', alunoController.index);
router.post('/alunos',alunoController.create)

router.get('/professor', professorController.index);
router.post('/professor', professorController.create);

router.get('/curso', cursoController.index);
router.post('/curso', cursoController.create);

router.get('/area', areaController.index);
router.post('/area', areaController.create);

router.get('/modalidade-pago', modalidadeController.index);
router.post('/modalidade-pago', modalidadeController.create);

router.get("/dashboard/", dashboardController.index)

router.get("/dashboard/aluno", dashboardController.aluno)
router.get("/dashboard/alunonovo", dashboardController.alunoNovo)
router.post("/dashboard/aluno", dashboardController.alunoCreate)


router.get("/dashboard/professor", dashboardController.professor)
router.get("/dashboard/professornovo", dashboardController.professorNovo)
router.post("/dashboard/professor", dashboardController.professorCreate)


router.get("/dashboard/curso", dashboardController.curso)
router.get("/dashboard/cursonovo", dashboardController.cursoNovo)
router.post("/dashboard/curso", dashboardController.cursoCreate)

router.get("/dashboard/modalidade-pago", dashboardController.modalidade)
router.get("/dashboard/modalidade-nova", dashboardController.modalidadeNovo)
router.post("/dashboard/modalidade-pago", dashboardController.modalidadeCreate)

router.get("/dashboard/area", dashboardController.area)
router.get("/dashboard/areanova", dashboardController.areaNova)
router.post("/dashboard/area", dashboardController.areaCreate)

router.get("/dashboard/plano", dashboardController.plano)
router.get("/dashboard/planonovo", dashboardController.planoNovo)
router.post("/dashboard/plano", dashboardController.planoCreate)


module.exports = router;