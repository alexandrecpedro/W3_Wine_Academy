const bcrypt = require('bcrypt')
const fs = require("fs")
const path = require("path")
const { uuid } = require('uuidv4')

const cursosPath = path.join("cursos.json")
let cursos = fs.readFileSync(cursosPath, { encoding:"utf-8" })
cursos = JSON.parse(cursos)

const loginController = {
    index: (req,res) => {
        return res.render("curso-videos", {title:"W3 - Bem-vindo, Usuário", cursos})
    },
    step01: (req,res) =>{
        return res.render("cadastro-st-1", {title:"W3 - Bem-vindo, Usuário"})
    },
    step02: (req,res) =>{
        return res.render("cadastro-st-2", {title:"W3 - Bem-vindo, Usuário"})
    },
    step03: (req,res) =>{
        return res.render("cadastro-st-3", {title:"W3 - Bem-vindo, Usuário"})
    },
    step04: (req,res) =>{
        return res.render("cadastro-st-4", {title:"W3 - Bem-vindo, Usuário"})
    }
}

module.exports=loginController