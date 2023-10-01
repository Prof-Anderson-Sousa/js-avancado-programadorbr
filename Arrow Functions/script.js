//xxxxxxxx_Parte_01_xxxxxxxxx

// Função Normal
function dobro(x){
    console.log(2 * x)
}

// Função Sem Nome
let triplo = function(x){
    console.log(3 * x)
}

// Arrow Function
let quadruplo = x => (4 * x)

dobro(15)
triplo(15)
console.log(quadruplo(15))

//xxxxxxxx_Parte_02_xxxxxxxxx

//let calc = () => 2 * this.x

let calc = function(){
    return 2 * this.x
}

//  Criando Objeto
let numero = {
    x: 50,
    d: calc
}

console.log(numero.d())