const proffys = [
    {
        name: "Bruna Gomes",
        avatar: "https://avatars3.githubusercontent.com/u/41810923?s=460&u=4afb4ae090bcc485afc7bccc181bc56f3ef5ff9f&v=4",
        whatsapp: "4002-8922",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20,00",
        weekday: [
            1,
            3,
            5,
        ] ,
        time_from: [
            720 // segundos
        ],
        time_to:[
            1220    // segundos
        ]
    },
    {
    name: "Kizzy Terra",
    avatar: "https://avatars2.githubusercontent.com/u/6809851?s=460&u=5ed0fa96e62c2bfde59b9d8d6aa736659027a5ec&v=4",
    whatsapp: "1234-5678",
    bio: "Entusiasta das melhores tecnologias de matemática avançada. Apaixonada por gerar cálculos malucos e muito divertidos, vou te ensinar matemática da maneira mais divertida possível.",
    subject: "Matemática",
    cost: "20,00",
    weekday: [
        1,
        3,
        5,
    ] ,
    time_from: [
        720 // segundos
    ],
    time_to:[
        1220    // segundos
    ]
    }
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
"Quimica",
];

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
];

function getSubject (subjectNumber){
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition];
}

function pageLanding(req, res){
    return res.render("index.html");
}
function pageStudy(req, res){
    const filters = req.query;

    return res.render("study.html", {
        proffys,
        filters,
        subjects,
        weekdays,
    });
}
function pageGiveClasses(req, res){
    const data = req.query;
    
    const isEmpty = Object.keys(data).length == 0   // transforma os valores em um array

    // se tiver dados, enviar os dados
    if (!isEmpty) {

        data.subject = getSubject(data.subject);

        proffys.push(data);

        return res.redirect("/study");
    }

    // senão, mostrar a página
    return res.render("give-classes.html", {
        subjects,
        weekdays,
    });
}
const express = require('express');
const server = express();

// configurando o nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

});

server

// configurando arquivos estáticos (css, scripts, images)
.use(express.static("public"))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// start do servidor
.listen(5500);
