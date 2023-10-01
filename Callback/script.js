// Exemplo 01
function ola(){
    console.log("Olá")
}

function tchau(){
    console.log("Tchau")
}

function saudacao(s, nome){
    s()
    console.log(nome)
}

saudacao(tchau,"Anderson")

// Exemplo 02
let usuarios = ["Anderson", "Felipe", "Carla", "Tiago", "Karol", "Victor"]

function inserirUsuario(nome, callback){
    setTimeout(()=>{
        usuarios.push(nome)
        callback()
    },1000)
}

function listarUsuarios(){
    console.log(usuarios)
}

inserirUsuario("João", listarUsuarios)
