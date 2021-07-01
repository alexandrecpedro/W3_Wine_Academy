const fs = require("fs")
const path = require("path")
const { uuid } = require("uuidv4")
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Curso = require('../database/models/Curso');

// const cursosPath = path.join("cursos.json")
// let cursos = fs.readFileSync(cursosPath, { encoding:"utf-8" })
// cursos = JSON.parse(cursos)

const adminController = {
    index:(req,res)=>{
        return res.render("admin",{title:"W3 - ACADEMIA"})
    },
    servicos:(req,res)=>{
        return res.render("servicos",{title:"W3 - ACADEMIA",cursos})
    },
    cadastro:(req,res)=>{
        return res.render("cadastro",{title:"W3 - ACADEMIA"})
    },
    salvar: async (req,res)=>{
        let {nome, professor, puesto, descricao, link} = req.body;
        let ilustracao = req.file.filename;
        /*adiciona novo servicio no array*/
        await Curso.create({nome, professor, puesto, descricao, link, ilustracao})
        // cursos.push({ id: uuid(), nome, professor, puesto, descricao, link, ilustracao })
        // /*convrtir array para json */
        // let dadosJson = JSON.stringify(cursos)
        // /*salva json atualizado no arquivo */
        // fs.writeFileSync(cursosPath, dadosJson)
        return res.redirect("/admin/servicos")
    },
    editar: async (req,res)=>{
        let {id} = req.params;
        let cursoEncontrado = await Curso.findByPk(id)
        // let cursoEncontrado = cursos.find(curso => curso.id == id)
        return res.render("cadastroEditar", {title:"W3 - ACADEMIA",curso:cursoEncontrado})
    },
    atualizar: async (req,res)=>{
        let {id} = req.params;
        let {nome, professor, puesto, descricao, link } = req.body;
        let cursoEncontrado = await Curso.update({nome, professor, puesto, descricao, link}, {where:{id_curso: id}})
        // let cursoEncontrado = cursos.find(curso => curso.id == id)
        // cursoEncontrado.nome = nome;
        // cursoEncontrado.professor = professor;
        // cursoEncontrado.puesto = puesto;
        // cursoEncontrado.descricao = descricao;
        // cursoEncontrado.link = link;
        /*verifica si tem imagem nova*/ 
        if(req.file){
            cursoEncontrado = Curso.update({ilustracao: req.file.filename}, {where: {id_curso: id}})
            // cursoEncontrado.ilustracao=req.file.filename;
        }
        // /*convrtir array para json */
        // let dadosJson = JSON.stringify(cursos)
        // /*salva json atualizado no arquivo */
        // fs.writeFileSync(cursosPath,dadosJson)
        return res.redirect("/admin/servicos")
    },
    excluir: async (req, res) => {
        let {id} = req.params;
        let cursoEncontrado = await Curso.destroy({where: {id_curso: id}})
        // let cursoEncontrado = cursos.find(curso => curso.id == id)
        return res.render('cadastroExcluir', { title: 'Excluir Serviço', curso: cursoEncontrado });
    },
    remover: (req, res) => {
        let {id} = req.params;
        let cursoEncontrado = await Curso.destroy({where: {id_curso: id}})
        // let cursoIndex = cursos.findIndex((curso) => curso.id == id);
        // cursos.splice(cursoIndex, 1);        
        // let dadosJson = JSON.stringify(cursos);        
        // fs.writeFileSync(cursosPath, dadosJson);    
        return res.redirect('/admin/servicos/');
    }
}

module.exports = adminController