const {check} = require('express-validator');

// Middleware - validação de login
const validateRegisterLogin = (request, response, next) => {
    let {email, password} = request.body;
    // Busca se há email cadastrado pelo usuário
    const emailEncontrado = usuarios.find(emailUsuario => emailUsuario.email == email);
    // Busca se há senha cadastrado pelo usuário
    const senha = usuarios.find(senhaUsuario => senhaUsuario.password == password);
    if (email.trim() == "" || password.trim() == "") {
        // Retorna mensagem de erro
        return response.render('login', { erro: 'Preencha todos os campos obrigatórios!' });
    } else if ((emailEncontrado && emailEncontrado !== undefined) && (senha && senha !== undefined)){
        check(email).isEmail().withMessage('Deve preencher com um email válido').bail();
        check(password).isLength({min: 8}).withMessage('A senha deve conter no mínimo 8 caracteres').bail();
    } else {
        next();
    }
}

module.exports = validateRegisterLogin;