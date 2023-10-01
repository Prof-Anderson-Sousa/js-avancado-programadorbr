function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("Léo", 44),
    novoAluno("Marcia", 29),
    novoAluno("Maria", 35)
]

// Forma Báscia de Filtragem
// for(let aluno of alunos){
//     if(aluno.idade < 30){
//         console.log(aluno.nome)
//     }
// }

// Utilizando Filter
function temMenosde30(aluno){
    return aluno.idade < 30
}

function temMaisde30(aluno){
    return aluno.idade > 30
}

// let alunosComMenosde30 = alunos.filter(temMenosde30)
// let alunosComMaisde30 = alunos.filter(temMaisde30)

// console.log(alunosComMenosde30)
// console.log(alunosComMaisde30)


console.log(alunos.filter(temMaisde30))