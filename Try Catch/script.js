let nome = ""

if (nome == "") {
    throw "O nome não pode ser vazio";
}

try {
    if(nome == ""){
        throw "O nome não pode ser vazio"
    }

    console.log(nome)
} catch(erro){
    console.log("Houve um erro",erro)
} finally {
    console.log("Boa Tarde")
}

