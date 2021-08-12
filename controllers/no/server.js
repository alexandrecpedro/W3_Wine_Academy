/*
require("dotenv").config()
const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: process.env.EMAIL, 
    to: "martinembon@hotmail.com",
    subject: 'Test',
    text: 'Vamos!!'
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log('Error al enviar',err);
    } else {
    console.log('Email enviado!!!');
}
});

*/