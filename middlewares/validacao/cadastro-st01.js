const {check} = require('express-validator');

const validateRegisterCadastro = (request, response, next) => {
    let {email, password, confirm_password} = request.body;
    // Busca se há email cadastrado pelo usuário
    const emailEncontrado = usuarios.find(emailUsuario => emailUsuario.email == email);
    // Busca se há senha cadastrado pelo usuário
    const senha = usuarios.find(senhaUsuario => senhaUsuario.password == password);
    if (email.trim() == "" || password.trim() == "" || confirm_password.trim() == "") {
        return response.render('cadastro-st-1', { erro: 'Preencha todos os campos obrigatórios!' });
    } else if ((emailEncontrado && emailEncontrado !== undefined)) {
        return response.render('cadastro-st-1', { erro: 'Usuário já cadastrado!' });
    } else {
        check(email).isEmail().withMessage('Preencha com um email válido').bail();
        check(password).isLength({min: 8}).withMessage('A senha deve conter no mínimo 8 caracteres').bail();
        check(confirm_password).isLength({min: 8}).withMessage('A senha deve conter no mínimo 8 caracteres').bail();
        check(confirm_password).compareSync(confirm_password, password).withMessage('A senha está incorreta! Tente novamente').bail()
        next()
    }
}

module.exports = validateRegisterCadastro;