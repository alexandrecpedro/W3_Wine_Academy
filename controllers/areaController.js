const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {AreaEstudo} = require('../database/models');

const areaController = {       
    index: async (req, res) => {        
        const areas = await AreaEstudo.findAll();
        return res.json(areas);
    },
    create: async (req, res) => {
        let {
            area
        } = req.body;
        const areas = await AreaEstudo.create({
          area
        });
        return res.send("area cadastrada");
    }
}

module.exports = areaController;