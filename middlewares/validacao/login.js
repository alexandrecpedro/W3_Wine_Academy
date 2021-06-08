const {check} = require('express-validator');

// Middleware - validação de cadastro de serviço
const validateRegisterLogin = [
    check('email')
    .notEmpty().withMessage('Deve preencher o email').bail()
    .isEmail().withMessage('Deve preencher com um email válido').bail(),
    check('password')
    .notEmpty().withMessage('Digite sua senha').bail()
    .isLength({min: 8}).withMessage('A senha deve conter no mínimo 8 caracteres').bail()
]

module.exports = validateRegisterLogin;