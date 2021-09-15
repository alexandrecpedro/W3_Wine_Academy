const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const { uuid } = require("uuidv4");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Aluno, Curso, Endereco} = require('../database/models');

const cursosPath = path.join("cursos.json");
let cursos = fs.readFileSync(cursosPath, { encoding: "utf-8" });
cursos = JSON.parse(cursos);

const usuariosPath = path.join("usuarios.json");
let usuarios = fs.readFileSync(usuariosPath, { encoding: "utf-8" });
usuarios = JSON.parse(usuarios);

const usuariosController = {
    login: (req, res) => {
        return res.render("login", { title: "W3 - Login" });
    },
    autenticacao: async (req, res) => {
        const { email, password } = req.body;
        console.log(req.body);
        let usuarioEncontrado = await Aluno.findOne({where: {email: email} });
        if (usuarioEncontrado && password == usuarioEncontrado.password) {
            req.session.usuarioLogado = usuarioEncontrado;
            const bemvindo = usuarioEncontrado.email;
            console.log(bemvindo);
            return res.redirect("/aluno/playlist/curso-videos");
        } else {
            console.log("não encontrado");
            res.render("usuario404", { title: "W3 - Usuario no encontrado" });
        }
    },
    cadastro: (req, res) => {
        return res.render("cadastro-st", { title: "W3 - Bem-vindo, Usuário" });
    },
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
    cursos: async (req, res) => {
        let cursos = await Curso.findAll();
        return res.render("curso-videos", { title: "W3 - Bem-vindo, Usuário", cursos });
    }
}

module.exports = usuariosController;