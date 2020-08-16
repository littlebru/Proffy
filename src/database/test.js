const database = require('./db.js');
const createProffy = require('./createProffy');

database.then(() => {
    // inserir dados

    proffyValue = {
        name: "Kizzy Terra",
        avatar: "https://avatars2.githubusercontent.com/u/6809851?s=460&u=5ed0fa96e62c2bfde59b9d8d6aa736659027a5ec&v=4",
        whatsapp: "1234-5678",
        bio: "Entusiasta das melhores tecnologias de matemática avançada. Apaixonada por gerar cálculos malucos e muito divertidos, vou te ensinar matemática da maneira mais divertida possível."
    }

    classValue = {
        subject: "Matemática",
        cost: "20,00",
        // o proffy_id virá pelo banco de dados
    }

    classScheduleValue = [  
        // class_id virá pelo banco de dados após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 530,
            time_to: 1340
        },
    ]

    //createProffy(database, {proffyValue, classValue, classScheduleValue});

});