const express = require('express');
const router = express.Router();
const loginController = require("../controllers/cadastroController")

router.get("/cadastro-st", loginController.step01)

module.exports = router;

