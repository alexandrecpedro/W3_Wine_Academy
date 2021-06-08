const fs = require("fs")
const path = require("path")
const { uuid } = require("uuidv4")

const cursosPath = path.join("cursos.json")
let cursos = fs.readFileSync(cursosPath, { encoding:"utf-8" })
cursos = JSON.parse(cursos)

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
    salvar:(req,res)=>{
        let {nome, professor, puesto, descricao, link} = req.body;
        let ilustracao = req.file.filename;
        /*adiciona novo servicio no array*/
        cursos.push({ id: uuid(), nome, professor, puesto, descricao, link, ilustracao })
        /*convrtir array para json */
        let dadosJson = JSON.stringify(cursos)
        /*salva json atualizado no arquivo */
        fs.writeFileSync(cursosPath, dadosJson)
        return res.redirect("/admin/servicos")
    },
    editar:(req,res)=>{
        let {id} = req.params;
        let cursoEncontrado = cursos.find(curso => curso.id == id)
        return res.render("cadastroEditar", {title:"W3 - ACADEMIA",curso:cursoEncontrado})
    },
    atualizar:(req,res)=>{
        let {id} = req.params;
        let {nome, professor, puesto, descricao, link } = req.body;
        let cursoEncontrado = cursos.find(curso => curso.id == id)
        cursoEncontrado.nome = nome;
        cursoEncontrado.professor = professor;
        cursoEncontrado.puesto = puesto;
        cursoEncontrado.descricao = descricao;
        cursoEncontrado.link = link;
        /*verifica si tem imagem nova*/ 
        if(req.file){
            cursoEncontrado.ilustracao=req.file.filename;
        }
        /*convrtir array para json */
        let dadosJson = JSON.stringify(cursos)
        /*salva json atualizado no arquivo */
        fs.writeFileSync(cursosPath,dadosJson)
        return res.redirect("/admin/servicos")
    }

}

module.exports = adminController