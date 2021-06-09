// Importar módulo 'bcrypt' para criptografar senhas
const bcrypt = require('bcrypt');
// Instalação de módulo 'fs' para manipulação de arquivos
const fs = require('fs')
// Módulo nativo para manipulação de arquivos
const path = require('path')
// Instalação de módulo 'uuidv4' para gerar ID
const { uuid } = require('uuidv4')

// Caminho do arquivo JSON
const usuariosPath = path.join('usuarios.json')
// Pegando conteúdo do arquivo JSON
let usuarios = fs.readFileSync(usuariosPath, { encoding: 'utf-8'})
// Convertendo arquivo JSON em um array - Método Parse
usuarios = JSON.parse(usuarios)

const usuariosController = {
    // métodos dentro do objeto
    // método CADASTRO
    cadastro: (request, response) => {
        return response.render('cadastro', { titulo: 'Cadastre-se' })
    },
    // método SALVAR - recebe informações enviadas e as salva
    salvar: (request, response) => {
        let { nome, email, senha } = request.body;
        const senhaCrypt = bcrypt.hashSync(senha, 10);

         // Adiciona o novo usuario na lista para o JSON
         usuarios.push({ id: uuid(), nome, email, senha: senhaCrypt })
         // Converter o array para json
         let dadosJson = JSON.stringify(usuarios)
         // Salva json atualizado no arquivo
         fs.writeFileSync(usuariosPath, dadosJson)
         
         // Redireciona para a lista de serviços
         return response.redirect('/login')
    },
    // método LOGIN
    login: (request, response) => {
        // Renderiza a view login
        return response.render('login', { titulo: 'Login' })
    }
}

module.exports = usuariosController