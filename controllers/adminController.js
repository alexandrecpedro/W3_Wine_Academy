const fs = require("fs");
const path = require("path");
const { uuid } = require("uuidv4");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Curso = require('../database/models/Curso');

const cursosPath = path.join("cursos.json");
let cursos = fs.readFileSync(cursosPath, { encoding:"utf-8" });
cursos = JSON.parse(cursos);

const adminController = {
    index:(req,res)=>{
        return res.render("admin",{title:"W3 - ACADEMIA"});
    },
    servicos: async (req,res)=>{
        return res.render("servicos",{title:"W3 - ACADEMIA",cursos});
    },
    cadastro:(req,res)=>{
        return res.render("cadastro",{title:"W3 - ACADEMIA"});
    },
    salvar: async (req, res) => {
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
        return res.redirect('/admin/servicos');
    },
    editar: async (req,res)=>{
        let {id} = req.params;
        let cursoEncontrado = await Curso.findByPk(id);
        return res.render("cadastroEditar", {title:"W3 - ACADEMIA",curso:cursoEncontrado});
    },
    atualizar: async (req,res)=>{
        let {id} = req.params;
        let {nome, professor, descricao, puesto, link, ilustracao} = req.body;
        let cursoEncontrado = await Curso.update({nome, descricao, carga_horaria, link, ilustracao}, {where:{id}});
        if(req.file){
            cursoEncontrado = Curso.update({ilustracao: req.file.filename}, {where: {id}});
        }
        return res.redirect("/admin/servicos");
    },
    excluir: async (req, res) => {
        let {id} = req.params;
        let cursoEncontrado = await Curso.destroy({where: {id}});
        return res.render('cadastroExcluir', { title: 'Excluir Serviço', curso: cursoEncontrado });
    },
    remover: async (req, res) => {
        let {id} = req.params;
        let cursoEncontrado = await Curso.destroy({where: {id}});
        return res.redirect('/admin/servicos/');
    }
}

module.exports = adminController;