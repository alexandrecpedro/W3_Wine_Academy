const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {Professor} = require('../database/models');

const professorController = {       
    index: async (req, res) => {        
        const professores = await Professor.findAll();
        return res.json(professores);
    },
    create: async (req, res) => {
        let {
            nome,
            sobrenome,
            email,
            password,
            puesto,
            valor_hora            
        } = req.body;

        const professor = await Professor.create({
            nome,
            sobrenome,
            email,
            password,
            puesto,
            valor_hora
        });

        return res.send("profe cadastrado");
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

module.exports=professorController