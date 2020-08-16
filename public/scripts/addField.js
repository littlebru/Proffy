document.querySelector("#add-time")
.addEventListener('click', cloneField);

// Função: clona a seção de horario na tela
function cloneField() {

    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
    
    const fields = newFieldContainer.querySelectorAll('input');

    // limpando os campos
    fields.forEach(function(field) {
        field.value = "";
    });

    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}