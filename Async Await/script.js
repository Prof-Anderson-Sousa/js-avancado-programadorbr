let usuarios = ["Anderson", "Felipe", "Carla", "Tiago", "Karol", "Victor"]

function inserirUsuario(nome){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            usuarios.push(nome)

            let error = false

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

async function executar(){
    await inserirUsuario("Igor")
    listarUsuarios()
}

executar()
