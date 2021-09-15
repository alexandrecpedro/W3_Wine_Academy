const express = require('express');
const axios = require('axios');

const router = express.Router();
const institucionalController = require("../controllers/institucionalController")
const usuariosController = require("../controllers/usuariosController")
const mongoose = require("mongoose")

/* GET home page. */
router.get('/', institucionalController.index)
router.get('/cursos', institucionalController.cursos)
router.get('/planos', institucionalController.planos)
router.post('/planos', institucionalController.planosform)
router.get('/sobre', institucionalController.sobre)
router.get('/login', usuariosController.login)

mongoose.connect("MONGO_URI=mongodb+srv://MartinEmbon:Dianakupervaser5@cluster0.fal8x.mongodb.net/leadsDB?retryWrites=true&w=majority")

const leadsSchema = {
  emailId:String
}
const Lead = mongoose.model("Lead",leadsSchema)

router.post("/lead",(req,res)=>{
  let newLead=new Lead({
    emailId:req.body.emailId
  })
  newLead.save()    
  res.redirect("/cursos")
})

/*
axios.post('https://5kx0mg69vc.execute-api.sa-east-1.amazonaws.com/digital/lead', {
    emailId: emailId
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
---- OK ROUTE ---
router.post("/lead",(req,res)=>{   
    
    axios.post('https://5kx0mg69vc.execute-api.sa-east-1.amazonaws.com/digital/lead', {    
    emailId: req.body.emailId,
  })   
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
})
*/
module.exports = router;