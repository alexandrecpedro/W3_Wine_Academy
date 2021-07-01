const express = require('express');
const router = express.Router();
const path = require("path") //chama cuando pido upload de arquivo
const Aluno = require('../database/models/Aluno');
const alunosController = require('../controllers/alunosController');

// http://localhost:3000/w3/alunos
router.get('/', alunosController.index);
router.post('/', alunosController.create);
router.get('/:id', alunosController.id);

// router.get("/servicos",adminController.servicos)
// router.get("/servicos/cadastro",adminController.cadastro)
// router.post("/servicos/cadastro", upload.single("ilustracao"), adminController.salvar)
// router.get("/servicos/editar/:id",adminController.editar)
// router.put("/servicos/editar/:id", upload.single("ilustracao"), adminController.atualizar)
// router.get('/servicos/excluir/:id', adminController.excluir);
// router.delete('/servicos/excluir/:id', adminController.remover);


module.exports = router