const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const { uuid } = require("uuidv4");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Aluno} = require('../database/models');
const Endereco = require('../database/models/Endereco');
const Curso = require('../database/models/Curso');

const cursosPath = path.join("cursos.json")
let cursos = fs.readFileSync(cursosPath, {
    encoding: "utf-8"
})
cursos = JSON.parse(cursos)

const usuariosPath = path.join("usuarios.json")
let usuarios = fs.readFileSync(usuariosPath, {
    encoding: "utf-8"
})
usuarios = JSON.parse(usuarios)

const usuariosController = {
    login: (req, res) => {
        return res.render("login", {
            title: "W3 - Login"
        })
    },
    autenticacao: async (req, res) => {
        const { email, password } = req.body;
        let usuarioEncontrado = await Aluno.findOne({where: {email: email} });
        // const usuarioEncontrado = usuarios.find((usuario => usuario.email == email))
        // if(usuarioEncontrado && bcrypt.compareSync(password, usuarioEncontrado.password)){
        if(usuarioEncontrado){
        // if (usuarioEncontrado && bcrypt.compareSync(password, usuarioEncontrado.password)) {
            /**usuario atenticoado */
            /**cria sessao e guarda info de usuario */
            // req.session.usuarioLogado = usuarioEncontrado;
            // const bemvindo = usuarioEncontrado.email;
            // console.log(bemvindo);
            return res.redirect("/aluno/playlist/curso-videos")
        } else {
            console.log("não encontrado")
            res.render("usuario404", {
                title: "W3 - Usuario no encontrado"
            })
        }
    },
    cadastro: (req, res) => {
        return res.render("cadastro-st", {
            title: "W3 - Bem-vindo, Usuário"
        })
    },
    /* salvar: async (req,res) => {
        const {nome, apelido, data_nasc, identidade,orgao,edocivil,genero,cep,endereco,numero,logradouro, bairro, cidade, uf, telefone, celular, email, password} = req.body        
        const senhaCrypt = bcrypt.hashSync(password,10);
        //let aluno = await Aluno.create({nome, apelido, email, password: senhaCrypt, data_nasc, cpf: identidade, nacionalidade: orgao, edocivil, genero, telefone, celular})
        //let aluno_end = await Endereco.create({apelido, cep, endereco, numero, complemento:logradouro, bairro, cidade, uf, ativo})
        usuarios.push({id:uuid(), nome, data_nasc, identidade,orgao,edocivil,genero,cep,endereco,numero,logradouro, bairro, cidade, uf, telefone, email, password: senhaCrypt})
        let dadosJson = JSON.stringify(usuarios)        
        fs.writeFileSync(usuariosPath, dadosJson)
        return res.redirect("/login")
    }, */
    create: async (req, res) => {
        let {
            nome,
            sobrenome,
            email,
            password,
            data_nasc,
            cpf,
            nacionalidade,
            edocivil,
            genero,
            telefone,
            celular
        } = req.body;

        const aluno = await Aluno.create({
            nome,
            sobrenome,
            email,
            password,
            data_nasc,
            cpf,
            nacionalidade,
            edocivil,
            genero,
            telefone,
            celular
        });

        return res.redirect('/login');
    },
    cursos: (req, res) => {
        // let curso = await Curso.findAll()
        return res.render("curso-videos", {
            title: "W3 - Bem-vindo, Usuário",
            cursos
        })
    }
}

module.exports = usuariosController;