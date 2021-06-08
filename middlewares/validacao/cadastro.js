const {check} = require('express-validator');

// Middleware - validação de cadastro de serviço
const validateRegisterCadastro = [
    check('email')
    .notEmpty().withMessage('Deve preencher o email').bail()
    .isEmail().withMessage('Deve preencher com um email válido').bail(),
    check('password')
    .notEmpty().withMessage('Digite sua senha').bail()
    .isLength({min: 8}).withMessage('A senha deve conter no mínimo 8 caracteres').bail(),
    check('confirm_password')
    .notEmpty().withMessage('Digite novamente a sua senha').bail()
    .isLength({min: 8}).withMessage('A senha deve conter no mínimo 8 caracteres').bail()
    .compareSync(confirm_password, password).withMessage('A senha está incorreta! Tente novamente').bail()
]

module.exports = validateRegisterCadastro;