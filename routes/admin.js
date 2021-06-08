const express = require("express")
const multer = require('multer'); // chama modulo multer (upload)
const path = require("path") //chama cuando pido upload de arquivo
const router = express.Router()
const adminController = require("../controllers/adminController")

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

router.get("/",adminController.index)
router.get("/servicos",adminController.servicos)
router.get("/servicos/cadastro",adminController.cadastro)
router.post("/servicos/cadastro", upload.single("ilustracao"), adminController.salvar)
router.get("/servicos/editar/:id",adminController.editar)
router.put("/servicos/editar/:id", upload.single("ilustracao"), adminController.atualizar)



module.exports = router