const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const cursosPath = path.join("cursos.json")
let cursos = fs.readFileSync(cursosPath, { encoding:"utf-8" })
cursos = JSON.parse(cursos)

const loginController = {   
    step01: (req,res) =>{
        return res.render("cadastro-st", {title:"W3 - Bem-vindo, Usuário"})
    }    
}

module.exports=loginController