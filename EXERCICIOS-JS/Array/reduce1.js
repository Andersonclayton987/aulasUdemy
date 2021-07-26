// redunce => É uma função que serve para transformar um array em um número, sting, ou em outro array
const alunos = [
    { nome: 'Anderson', nota: 9.8, bolsista: true },
    { noma: "Gabi", nota: 7.9, bolsista: false },
    { nome: "Mari", nota: 6.9, bolsista: false },
    { nome: "Cris", nota: 9.5, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atua) {
    console.log(acumulador, atua)
    return acumulador + atua
}, 0)

console.log(resultado)