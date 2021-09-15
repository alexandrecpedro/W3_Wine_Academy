const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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
}

module.exports = cursoController;