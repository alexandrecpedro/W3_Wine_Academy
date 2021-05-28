// Chama módulo Express
const express = require('express');
// Chama módulo que gerencia rotas
const router = express.Router();
// Chama o controller servicosController
const servicosController = require('../controllers/servicosController');

// Rotas para páginas administrativas
// A) MÉTODO GET
// (1) http://localhost:3000/admin
router.get('/', (req, res, next) => {
    res.render('admin', { titulo: 'Painel Administrativo' });
});
// (2) http://localhost:3000/admin/servicos
router.get('/servicos', servicosController.index);
// (3) http://localhost:3000/admin/servicos/cadastro
router.get('/servicos/cadastro', servicosController.cadastro);
// B) MÉTODO POST
// (1) http://localhost:3000/admin/servicos/cadastro
router.post('/servicos/cadastro', servicosController.salvar);

// Exportando rotas a serem utilizadas
module.exports = router;