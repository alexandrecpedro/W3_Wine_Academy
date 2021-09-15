const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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
    }
}

module.exports = alunoController;