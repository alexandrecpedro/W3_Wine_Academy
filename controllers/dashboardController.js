const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {Aluno,Professor,Curso} = require('../database/models');

const dasboardController = {
    index: (req,res)=>{
        return res.render('dashboard', {title:"W3 - Dashboard General"});
    },
    
    aluno: async (req, res) => {     
        const alunos = await Aluno.findAll({
            limit: 5,
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return res.render('dashboardAlunos', {title:"W3 - Dashboard Alunos",alunos});
    },
    alunoNovo: (req,res)=>{
        return res.render('createAluno', {title:"W3 - Dashboard Alunos"});
    },
    alunoCreate: async (req, res) => {
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
        return res.redirect('/database/dashboard/aluno');
        
    },

    professor: async (req, res) => {     
        const professores = await Professor.findAll({
            limit: 5,
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return res.render('dashboardProfessores', {title:"W3 - Dashboard Professores",professores});
    },
    professorNovo: (req,res)=>{
        return res.render('createProfessor', {title:"W3 - Dashboard Professores"});
    },
    professorCreate: async (req, res) => {
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

        return res.redirect('/database/dashboard/professor');
    },

    curso: async (req, res) => {     
        const cursos = await Curso.findAll({
            limit: 5,
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return res.render('dashboardCursos', {title:"W3 - Dashboard Cursos",cursos});
    },
    cursoNovo: (req,res)=>{
        return res.render('createCurso', {title:"W3 - Dashboard Cursos"});
    },
    cursoCreate: async (req, res) => {
        let {
            nome,
            descricao,
            carga_horaria,
            link,
            area_estudo_id
        } = req.body;

        const curso = await Curso.create({
            nome,
            descricao,
            carga_horaria,
            link,
            area_estudo_id
        });

        return res.redirect('/database/dashboard/curso');
    }

}
module.exports=dasboardController