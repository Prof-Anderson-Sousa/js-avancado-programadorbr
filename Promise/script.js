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

function inserirUsuario(nome){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            usuarios.push(nome)

            let error = true

            if(!error){
                resolve()
            }else{
                reject({msg: "Erro de qualquer coisa"})
            }
        },1000)
    })
    return promise
}

function listarUsuarios(){
    console.log(usuarios)
}

inserirUsuario("João").then(listarUsuarios).catch((error)=>{
    console.log(error.msg)
})
