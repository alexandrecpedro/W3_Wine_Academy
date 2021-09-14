const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {Curso} = require('../database/models');

const cursoController = {       
    index: async (req, res) => {        
        const cursos = await Curso.findAll();
        return res.json(cursos);
    },
    create: async (req, res) => {
        let {
            nome,
            descricao,
            carga_horaria,
            link,
            area_estudo_id,
            ilustracao
        } = req.body;

        const curso = await Curso.create({
            nome,
            descricao,
            carga_horaria,
            link,
            area_estudo_id,
            ilustracao
        });

        return res.send("curso cadastrado");
    }
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

module.exports=cursoController