const auth = (request, response, next) => {
    if (request.session.usuarioLogado && request.session.usuarioLogado !== undefined) {
        next()
    } else {
        return response.render("usuario404", {title: '404'});
    }
}

module.exports = auth;