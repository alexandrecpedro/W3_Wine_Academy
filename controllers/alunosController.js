const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Aluno = require('../database/models/Aluno');

const alunosController = {   
    // cursos: (req,res) => {
    //     return res.render("curso-videos", {title:"W3 - Bemvindo Usuario", cursos})
    // },
    index: (req, res) => {
        Aluno.findAll().then(aluno=> {
            res.json(aluno);
        })
    },
    create: (req, res) => {
        Aluno.create({
            nome: req.body.nome
        }).then(aluno => {
            res.json(aluno);
        })
    },
    id: (req, res) => {
        Aluno.findByPk(req.params.id).then(aluno=> {
            res.json(aluno);
        })
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

module.exports=alunosController