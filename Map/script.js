function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("Léo", 44),
    novoAluno("Marcia", 29),
    novoAluno("Maria", 35)
]

function alunoDaquiA5Anos(aluno){
    aluno.idade += 5;
    return aluno;
}

console.log(alunos.map(alunoDaquiA5Anos));