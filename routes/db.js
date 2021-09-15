const axios = require("axios")
var express = require('express');
const path = require('path');
const alunoController = require('../controllers/alunoController');
const professorController = require("../controllers/professorController")
const cursoController = require("../controllers/cursoController")
const areaController = require("../controllers/areaController")
const modalidadeController = require("../controllers/modalidadeController")
const dashboardController = require("../controllers/dashboardController")
const multer = require('multer');
var router = express.Router();

const storage = multer.diskStorage({
    /** destino do upload */
    destination: (req, file, cb) => {
        /** guarda arquivos na pasta /uploads */
        cb(null, path.join('uploads'));
    },
    /** nome do upload */
    filename: (req, file, cb) => {
        /** salva arquivo com nome do campo + data e hora + extensão */
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});

/** usando configuração como storage do multer */
const upload = multer({ storage: storage });

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
router.get("/dashboard/aluno/editar/:id",dashboardController.alunoEditar)
router.put("/dashboard/aluno/editar/:id", dashboardController.alunoAtualizar)
router.delete('/dashboard/aluno/excluir/:id', dashboardController.alunoDelete)


router.get("/dashboard/professor", dashboardController.professor)
router.get("/dashboard/professornovo", dashboardController.professorNovo)
router.post("/dashboard/professor", dashboardController.professorCreate)
router.get("/dashboard/professor/editar/:id",dashboardController.professorEditar)
router.put("/dashboard/professor/editar/:id", dashboardController.professorAtualizar)
router.delete('/dashboard/professor/excluir/:id', dashboardController.professorDelete)


router.get("/dashboard/curso", dashboardController.curso)
router.get("/dashboard/cursonovo", dashboardController.cursoNovo)
router.post("/dashboard/curso", upload.single("ilustracao"), dashboardController.cursoCreate)
router.get("/dashboard/curso/editar/:id",dashboardController.cursoEditar)
router.put("/dashboard/curso/editar/:id", upload.single("ilustracao"), dashboardController.cursoAtualizar)
router.delete('/dashboard/curso/excluir/:id', dashboardController.cursoDelete)

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