const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {Aluno} = require('../database/models');

const alunoController = {       
    index: async (req, res) => {        
        const alunos = await Aluno.findAll();
        return res.json(alunos);
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

        return res.redirect('/dashboardAluno');
    },
    // create: (req, res) => {
    //     Aluno.create({
    //         nome: req.body.nome
    //     }).then(aluno => {
    //         res.json(aluno);
    //     })
    // },
    // id: (req, res) => {
    //     Aluno.findByPk(req.params.id).then(aluno=> {
    //         res.json(aluno);
    //     })
    // }
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

module.exports=alunoController