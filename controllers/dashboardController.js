const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { Aluno, Professor, Curso, ModalidadePago, AreaEstudo, Plano } = require('../database/models');

const dashboardController = {
    index: (req, res) => {
        return res.render('dashboard', { title: "W3 - Dashboard General" });
    },

    aluno: async (req, res) => {
        const alunos = await Aluno.findAll({
            limit: 5,
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return res.render('dashboardAlunos', { title: "W3 - Dashboard Alunos", alunos });
    },
    alunoNovo: (req, res) => {
        return res.render('createAluno', { title: "W3 - Dashboard Alunos" });
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
    alunoEditar: async (req,res)=>{
        let {id} = req.params;
        let alunoEncontrado = await Aluno.findByPk(id)
        return res.render("dashboardAlunoEditar", {title:"W3 - ACADEMIA",aluno:alunoEncontrado})
    },
    alunoAtualizar: async (req,res)=>{
        let {id} = req.params;
        let {nome, sobrenome, email, password, data_nasc, cpf, nacionalidade, edocivil, telefone, celular} = req.body;
        let alunoEncontrado = await Aluno.update({nome, sobrenome, email, password, data_nasc, cpf, nacionalidade, edocivil, telefone, celular}, {where:{id}})
        return res.redirect('/database/dashboard/aluno')
    },
    alunoDelete: async (req, res) => {
        let {id} = req.params;
        let alunoEncontrado = await Aluno.destroy({where: {id}})
        return res.redirect('/database/dashboard/aluno');
    },
    professor: async (req, res) => {
        const professores = await Professor.findAll({
            limit: 5,
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return res.render('dashboardProfessores', { title: "W3 - Dashboard Professores", professores });
    },
    professorNovo: (req, res) => {
        return res.render('createProfessor', { title: "W3 - Dashboard Professores" });
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
    professorEditar: async (req,res)=>{
        let {id} = req.params;
        let professorEncontrado = await Professor.findByPk(id)
        return res.render("dashboardProfessorEditar", {title:"W3 - ACADEMIA",professor:professorEncontrado})
    },
    professorAtualizar: async (req,res)=>{
        let {id} = req.params;
        let {nome, sobrenome, email, password, puesto, valor_hora} = req.body;
        let professorEncontrado = await Professor.update({nome, sobrenome, email, password, puesto, valor_hora}, {where:{id}})
        return res.redirect('/database/dashboard/professor')
    },
    professorDelete: async (req, res) => {
        let {id} = req.params;
        let professorEncontrado = await Professor.destroy({where: {id}})
        return res.redirect('/database/dashboard/professor');
    },
    curso: async (req, res) => {
        const cursos = await Curso.findAll({
            limit: 5,
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return res.render('dashboardCursos', { title: "W3 - Dashboard Cursos", cursos });
    },
    cursoNovo: (req, res) => {
        return res.render('createCurso', { title: "W3 - Dashboard Cursos" });
    },
    cursoCreate: async (req, res) => {
        let {
            nome,
            descricao,
            carga_horaria,
            link,
            area_estudo_id,
        } = req.body;
        let ilustracao = req.file.filename;

        const curso = await Curso.create({
            nome,
            descricao,
            carga_horaria,
            link,
            area_estudo_id,
            ilustracao
        });
        return res.redirect('/database/dashboard/curso');
    },
    cursoEditar: async (req,res)=>{
        let {id} = req.params;
        let cursoEncontrado = await Curso.findByPk(id)
        // let cursoEncontrado = cursos.find(curso => curso.id == id)
        return res.render("dashboardCursoEditar", {title:"W3 - ACADEMIA",curso:cursoEncontrado})
    },
    cursoAtualizar: async (req,res)=>{
        let {id} = req.params;
        let {nome, descricao, carga_horaria, link, ilustracao, area_estudo_id} = req.body;
        let cursoEncontrado = await Curso.update({nome, descricao, carga_horaria, link, ilustracao, area_estudo_id}, {where:{id}})
        /* let cursoEncontrado = cursos.find(curso => curso.id == id)
        cursoEncontrado.nome = nome;
        cursoEncontrado.professor = professor;
        cursoEncontrado.puesto = puesto;
        cursoEncontrado.descricao = descricao;
        cursoEncontrado.link = link; */
        /*verifica si tem imagem nova*/ 
        if(req.file){
            cursoEncontrado = Curso.update({ilustracao: req.file.filename}, {where: {id}})
            // cursoEncontrado.ilustracao=req.file.filename;
        }
        // /*convrtir array para json */
         /* let dadosJson = JSON.stringify(cursos) */
        // /*salva json atualizado no arquivo */
         /* fs.writeFileSync(cursosPath,dadosJson) */
        return res.redirect('/database/dashboard/curso')
    },
    cursoDelete: async (req, res) => {
        let {id} = req.params;
        let cursoEncontrado = await Curso.destroy({where: {id}})
        return res.redirect('/database/dashboard/curso');
    },
    //mod
    modalidade: async (req, res) => {
        const modalidades = await ModalidadePago.findAll({
            limit: 5,
            order: [
                ['createdAt', 'ASC']
            ]
        });

        return res.render('dashboardModalidade', { title: "W3 - Dashboard Pagamento", modalidades });
    
    },
    modalidadeNovo: (req, res) => {
        return res.render('createModalidade', { title: "W3 - Dashboard Pagamento" });
    },
    modalidadeCreate: async (req, res) => {
        let {
            modalidade
        } = req.body;

        const modalidades = await ModalidadePago.create({
            modalidade
        });

        return res.redirect('/database/dashboard/modalidade-pago');
    },

    //Area
    area: async (req, res) => {
        const areas = await AreaEstudo.findAll({
            limit: 5,
            order: [
                ['createdAt', 'ASC']
            ]
        });

        return res.render('dashboardAreas', { title: "W3 - Dashboard Areas", areas });
    
    },
    areaNova: (req, res) => {
        return res.render('createArea', { title: "W3 - Dashboard Areas" });
    },
    areaCreate: async (req, res) => {
        let { area } = req.body;
        const areas = await AreaEstudo.create({ area });
        return res.redirect('/database/dashboard/area');
    },
    //Plano
    plano: async (req, res) => {
        const planos = await Plano.findAll({
        limit: 5,
        order: [
            ['createdAt', 'DESC']
        ]
    });
    return res.render('dashboardPlanos', { title: "W3 - Dashboard Planos", planos});
    },
    planoNovo: (req, res) => {
        return res.render('createPlano', { title: "W3 - Dashboard Planos" });
    },
    planoCreate: async (req, res) => {
        let { plano } = req.body;
        const planos = await Plano.create({ plano });
        return res.redirect('/database/dashboard/plano');
    }
}
module.exports = dashboardController;