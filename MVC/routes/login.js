const express = require('express');
const router = express.Router();
const loginController = require("../controllers/loginController")

// router.get("/",(req,res)=>{
//      res.render("curso-videos",{title:"Cursos"})
// })

//router.get("/usuario-cadastrado/curso-videos", loginController.cursos)
router.get("/cadastro-st", loginController.step01)
// router.get("/cadastro-st-2", loginController.step02)
// router.get("/cadastro-st-3", loginController.step03)
// router.get("/cadastro-st-4", loginController.step04)

module.exports = router;

