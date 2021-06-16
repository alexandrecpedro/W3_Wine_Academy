const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")
const { uuid } = require("uuidv4")
const cursosPath = path.join("cursos.json")
let cursos = fs.readFileSync(cursosPath, { encoding:"utf-8" })
cursos = JSON.parse(cursos)

const usuariosPath = path.join("usuarios.json")
let usuarios = fs.readFileSync(usuariosPath, { encoding:"utf-8" })
usuarios = JSON.parse(usuarios)

const usuariosController = {
    login: (req,res) => {
        return res.render("login", {title:"W3 - Login"})
    },
    autenticacao: (req,res) => {
        const {email, password} = req.body
        const usuarioEncontrado = usuarios.find((usuario => usuario.email == email))
        if(usuarioEncontrado && bcrypt.compareSync(password, usuarioEncontrado.password)){
            /**usuario atenticoado */
            /**cria sessao e guarda info de usuario */
            req.session.usuarioLogado = usuarioEncontrado            
            console.log(usuarioEncontrado)            
            res.redirect("/login/curso-videos")
            
        } else {
            /**usuario nao atenticado */
            console.log("no encontrado")
            res.redirect("/login")
        }
    },    
    cadastro: (req,res) => {
        return res.render("cadastro-st", {title:"W3 - Bemvindo Usuario"})
    },
    salvar: (req,res) => {
        const {nome, data_nasc, identidade, orgao,edocivil, genero,telefone,cep,endereco,bairro,numero,complemento,logradouro,email, password} = req.body
        const senhaCrypt = bcrypt.hashSync(password,10);
        usuarios.push({id:uuid(), nome, data_nasc, identidade,orgao,edocivil,genero,telefone,cep,endereco,bairro,numero,complemento,logradouro, email, password: senhaCrypt})
        let dadosJson = JSON.stringify(usuarios)        
        fs.writeFileSync(usuariosPath, dadosJson)
        return res.redirect("/login")
    },
    cursos: (req,res) => {
         return res.render("curso-videos", {title:"W3 - Bemvindo Usuario", cursos})
     }

}

module.exports = usuariosController;
