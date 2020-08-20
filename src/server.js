const express = require('express');
const server = express();

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages');

// configurando o nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
    watch: true,
});

server

// recebendo os dados do req.body
.use(express.urlencoded({extended: true}))

// configurando arquivos estáticos (css, scripts, images)
.use(express.static("public"))

// rotas da aplicação (funcionalidade do express)
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// endereço de start do servidor
.listen(5500);
