// Fla


const escola = [{
    nome: 'TurmaM1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.1
    }]
}, {

    nome: 'TurmaT1',
    alunos: [{
        nome: 'João',
        nota: 8.1
    }, {
        nome: 'Felipe',
        nota: 9.1
    }]

}]

const getNota = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNota)

const nota1 = escola.map(getNotaTurma)
console.log(nota1)