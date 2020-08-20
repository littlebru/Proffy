const Database = require('./db.js');
const createProffy = require('./createProffy');

Database.then(async (db) => {
    // inserir dados

    proffyValue = {
        name: "Kizzy Terra",
        avatar: "https://avatars2.githubusercontent.com/u/6809851?s=460&u=5ed0fa96e62c2bfde59b9d8d6aa736659027a5ec&v=4",
        whatsapp: "1234-5678",
        bio: "Entusiasta das melhores tecnologias de matemática avançada. Apaixonada por gerar cálculos malucos e muito divertidos, vou te ensinar matemática da maneira mais divertida possível."
    }

    classValue = {
        subject: 7,
        cost: "20,00",
        // o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [  
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

   //await createProffy(db, {proffyValue, classValue, classScheduleValues});

   // consultar os dados inseridos

   // todos os proffys
    const selectedAllProffys = await db.all("SELECT * FROM proffys");
    console.log(selectedAllProffys);

    // consultar as classes de um determinado professor
    // e trazer os dados do professor
    const selectProffyClasses = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
        `);
    console.log(selectProffyClasses);

    // consultando dados dentro de um periodo de tempo (x-horas - y-horas)
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= 530
        AND class_schedule.time_to > 1300;
    `);

    console.log(selectClassesSchedule)


});