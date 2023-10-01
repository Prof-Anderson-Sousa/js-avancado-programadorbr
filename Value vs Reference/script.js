// Dessa forma quando reatribuo a idade em alunoB, ela também se modifica em alunoA - Objeto

// let alunoA = {nome:"Igor", idade:"15"};
// let alunoB = alunoA;
// alunoB.idade = 25;

// console.log(alunoA);
// console.log(alunoB);

// ---------------------------------------------------- //

// Copia e Substituição - Dessa forma quando reatribuo a idade em alunoB, ela não se modifica em alunoA - Tipo Primitivo

// let idadeA = 15;
// let idadeB = idadeA;
// idadeB = 10;

// console.log(idadeA);
// console.log(idadeB);

// ---------------------------------------------------- //

//  Dessa forma ele atribui Joao também a turmaA

// let turmaA = [" Igor", "Jose", "Paula"];

// let turmaB = turmaA;

// turmaB.push("Joao");

// ---------------------------------------------------- //

// Copia e Adição de Elemento - Com Array

// let turmaA = [" Igor", "Jose", "Paula"];

// let turmaB = turmaA.slice();

// turmaB.push("Joao");

// ---------------------------------------------------- //

// Copia e Modificação de Atributo de Objeto

let alunoA = {nome:"Igor", idade:15};

let alunoB = Object.assign({},alunoA); // OU {...alunoA}

alunoB.idade = 25;

console.log(alunoA)
console.log(alunoB)

// Relembrando:

// Atribuição por valor, faz uma cópia do elemento original,
// e qualquer alteração na cópia não vai refletir no original.

// Atribuição por referência, não faz cópia, é como se desse um novo apelido para o objeto original. Qualquer modificação no novo elemento altera também o original.
