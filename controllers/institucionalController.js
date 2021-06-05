const institucionalController = {
    index: (request, response) => {
        return response.render('index', { titulo: 'Home' });
    },
    sobre: (request, response) => {
        return response.render('sobre', { titulo: 'Sobre'});
    },
    servicos: (request, response) => {
        /** renderiza a view Serviços e passa titulo e lista de serviços cadastrados */
        return response.render('servicos', { titulo: 'Serviços', servicos });
    },
    contato: (request, response) => {