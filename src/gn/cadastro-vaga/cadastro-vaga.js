var vagas = {
    "data": [
        {
            "id": 1,
            "tipo": "voluntário",
            "quando": "segunda-ferira, manhã",
            "desc": "precso de alguém para preparar as refeições",
            "necessidade": "não"
        }
    ]
}

var db = JSON.parse(localStorage.getItem('db_vagas'));

if(!db){
    db = vagas
};

function inserevaga(vaga){

    if(db.data.length - 1 != 0)
    novoId = db.data[db.data.length - 1].id + 1;

    let novaVaga = {
        "id": novoId,
        "tipo": vaga.tipo,
        "quando": vaga.quando,
        "desc": vaga.desc,
        "necessidade": vaga.necessidade
    };

    db.data.push(novaVaga);
    displayMessage("Vaga cadastrada com sucesso!")

    localStorage.setItem('db_vagas', JSON.stringify(db));
}



