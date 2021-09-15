const express = require("express");
const multer = require('multer');
const path = require("path");
const router = express.Router();
const adminController = require("../controllers/adminController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join('uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.get("/",adminController.index);
router.get("/servicos",adminController.servicos);
router.get("/servicos/cadastro",adminController.cadastro);
router.post("/servicos/cadastro", upload.single("ilustracao"), adminController.salvar);
router.get("/servicos/editar/:id",adminController.editar);
router.put("/servicos/editar/:id", upload.single("ilustracao"), adminController.atualizar);
router.get('/servicos/excluir/:id', adminController.excluir);
router.delete('/servicos/excluir/:id', adminController.remover);

module.exports = router;