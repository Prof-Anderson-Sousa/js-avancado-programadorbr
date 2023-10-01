function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("Léo", 45),
    novoAluno("Marcia", 29),
    novoAluno("Maria", 35)
]

function idadeDaTurma(nomezao, aluno){
    return nomezao + aluno.nome;
}

console.log( alunos.reduce(idadeDaTurma, "alguma coisa antes") )
console.log(23+45+29+35)