const fs = require("fs")
const path = require("path")

const cursosPath = path.join("cursos.json")
let cursos = fs.readFileSync(cursosPath, { encoding:"utf-8" })
cursos = JSON.parse(cursos)

const loginController = {   
    // cursos: (req,res) => {
    //     return res.render("curso-videos", {title:"W3 - Bemvindo Usuario", cursos})
    // },
    step01: (req,res) =>{
        return res.render("cadastro-st", {title:"W3 - Bem-vindo, Usuário"})
    }
    // step02: (req,res) =>{
    //     return res.render("cadastro-st-2", {title:"W3 - Bemvindo Usuario"})
    // },
    // step03: (req,res) =>{
    //     return res.render("cadastro-st-3", {title:"W3 - Bemvindo Usuario"})
    // },
    // step04: (req,res) =>{
    //     return res.render("cadastro-st-4", {title:"W3 - Bemvindo Usuario"})
    // }
}

module.exports=loginController