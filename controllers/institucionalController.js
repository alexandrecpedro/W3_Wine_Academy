const institucionalController = {
    index: (req,res) => {
        return res.render("index", {title:"W3 - Home"})
    },
    cursos: (req,res) => {
        return res.render("cursos", {title:"W3 - Cursos"})
    },
    planos: (req,res) => {
        return res.render("planos", {title:"W3 - Nossos Planos"})
    },
    sobre: (req,res) => {
        return res.render("sobre", {title:"W3 - Sobre nós"})
    },
    login: (req,res) => {
        return res.render("login", {title:"W3 - Login"})
    }
}

module.exports=institucionalController