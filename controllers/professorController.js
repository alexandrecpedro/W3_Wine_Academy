const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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
}

module.exports = professorController;