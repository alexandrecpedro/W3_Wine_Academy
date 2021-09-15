const planos = require("../public/services/planos");
require("dotenv").config();
const nodemailer = require("nodemailer");

const institucionalController = {
    index: (req,res) => {
        return res.render("index", {title:"W3 - Home"});
    },
    cursos: (req,res) => {
        return res.render("cursos", {title:"W3 - Cursos"});
    },
    planos: (req,res) => {        
        return res.render("planos", {planos, title:"W3 - Nossos Planos"});
    },
    planosform: (req,res) => {                
        console.log(req.body);
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.PASSWORD
            }
        });
        let mailOptions = {
            from:req.body.email ,             
            to:process.env.EMAIL ,
            subject:`Message from ${req.body.nome}`,
            text: `${req.body.email} - ${req.body.cidade} - ${req.body.tel} - ${req.body.mensaje}`
        };
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log('Error al enviar',err);
            } else {
            console.log('Email enviado!!!');
            }
        });
        return res.redirect("/planos");
    },
    sobre: (req,res) => {
        return res.render("sobre", {title:"W3 - Sobre nós"});
    },
    login: (req,res) => {
        return res.render("login", {title:"W3 - Login"});
    }
}

module.exports = institucionalController;