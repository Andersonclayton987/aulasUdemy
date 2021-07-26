const alunos = [
    { nome: 'Anderson', nota: 9.8, bolsista: true },
    { noma: "Gabi", nota: 7.9, bolsista: false },
    { nome: "Mari", nota: 6.9, bolsista: false },
    { nome: "Cris", nota: 9.5, bolsista: true }
]
// Desafio 01: Todos os alunos são bolsistas?
const todoBolsista = (resultado, bolsista) => resultado && bolsista // && e
console.log(alunos.map(a => a.bolsista).reduce(todoBolsista))

// Desafio 01: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista // || ou
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))