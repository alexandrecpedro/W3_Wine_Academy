const auth = (request, response, next) => {
    // Verificar se existe a session usuarioLogado
    if (request.session.usuarioLogado && request.session.usuarioLogado !== undefined) {
        // Se o usuário estiver logado: next()
        next()
    } else {
        // Se não estiver logado, redireciona para /login
        return response.redirect('/login')
    }
}

module.exports = auth