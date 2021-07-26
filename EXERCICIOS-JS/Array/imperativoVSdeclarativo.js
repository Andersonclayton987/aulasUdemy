const alunos = [
    { nome: 'Anderson', nota: 9.8, bolsista: true },
    { noma: "Gabi", nota: 7.9, bolsista: false },
    { nome: "Mari", nota: 6.9, bolsista: false },
    { nome: "Cris", nota: 9.5, bolsista: true }
]
//Imperativa
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)