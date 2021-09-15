const fs = require("fs");
const path = require("path");

const usuariosPath = path.join("usuarios.json");
let usuarios = fs.readFileSync(usuariosPath, { encoding:"utf-8" });
usuarios = JSON.parse(usuarios);

const usuario = (req,res,next) => {
    let errores = [];
    let {email} = req.body;
    const emailEncontrado = usuarios.find(emailUsuario=> emailUsuario.email == email);
    if (emailEncontrado && emailEncontrado!== undefined){
        errores.push("Email já existe");
        console.log(errores);            
    } else {
        next();
    }
}

module.exports = usuario;