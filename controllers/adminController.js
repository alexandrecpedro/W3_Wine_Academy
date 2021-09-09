const fs = require("fs")
const path = require("path")
const { uuid } = require("uuidv4")
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Curso = require('../database/models/Curso');

const cursosPath = path.join("cursos.json")
let cursos = fs.readFileSync(cursosPath, { encoding:"utf-8" })
cursos = JSON.parse(cursos)

const adminController = {
    index:(req,res)=>{
        return res.render("admin",{title:"W3 - ACADEMIA"})
    },
    servicos: async (req,res)=>{
        // let curso = await Curso.findAll();
        return res.render("servicos",{title:"W3 - ACADEMIA",cursos})
    },
    cadastro:(req,res)=>{
        return res.render("cadastro",{title:"W3 - ACADEMIA"})
    },
    // salvar: async (req,res)=>{
    //     const { nome, professor, puesto, descricao, link } = req.body;
    //     const ilustracao = req.file.filename;
    //     const curso = await Curso.create({nome, descricao, carga_horaria, link, ilustracao});
    //     /*adiciona novo servicio no array*/
    //     // cursos.push({ id: uuid(), nome, professor, puesto, descricao, link, ilustracao })
    //     /*convrtir array para json */
    //     // let dadosJson = JSON.stringify(cursos)
    //     /*salva json atualizado no arquivo */
    //     // fs.writeFileSync(cursosPath, dadosJson)
    //     console.log("Curso cadastrado com sucesso")
    //     return res.redirect('/admin/servicos');
    // },
    salvar: async (req, res) => {
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

        // return res.send("curso cadastado");
        return res.redirect('/admin/servicos');
    },
    editar: async (req,res)=>{
        let {id} = req.params;
        let cursoEncontrado = await Curso.findByPk(id)
        // let cursoEncontrado = cursos.find(curso => curso.id == id)
        return res.render("cadastroEditar", {title:"W3 - ACADEMIA",curso:cursoEncontrado})
    },
    atualizar: async (req,res)=>{
        let {id} = req.params;
        let {nome, professor, descricao, puesto, link, ilustracao} = req.body;
        let cursoEncontrado = await Curso.update({nome, descricao, carga_horaria, link, ilustracao}, {where:{id}})
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
        return res.redirect("/admin/servicos")
    },
    excluir: async (req, res) => {
        let {id} = req.params;
        let cursoEncontrado = await Curso.destroy({where: {id}})
        // let cursoEncontrado = cursos.find(curso => curso.id == id)
        return res.render('cadastroExcluir', { title: 'Excluir Serviço', curso: cursoEncontrado });
    },
    remover: async (req, res) => {
        let {id} = req.params;
        let cursoEncontrado = await Curso.destroy({where: {id}})
         /* let cursoIndex = cursos.findIndex((curso) => curso.id == id);
         cursos.splice(cursoIndex, 1);        
         let dadosJson = JSON.stringify(cursos);        
         fs.writeFileSync(cursosPath, dadosJson);   */  
        return res.redirect('/admin/servicos/');
    }
}

module.exports = adminController