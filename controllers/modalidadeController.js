const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {ModalidadePago} = require('../database/models');

const modalidadeController = {       
    index: async (req, res) => {        
        const modalidades = await ModalidadePago.findAll();
        return res.render("dashboardModalidade",{title:"Modalidade"});
    },
    create: async (req, res) => {
        let { modalidade } = req.body;
        const modalidades = await ModalidadePago.create({ modalidade });
        return res.send("modalidade cadastrada");
    }
}

module.exports = modalidadeController;