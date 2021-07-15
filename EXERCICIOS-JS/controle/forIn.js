const notas = [6.7, 8.2, 9.3, 10, 5.3]

for (let i in notas) {
    console.log(i, notas[i]) //"i" de indice do array
}

const pessoa = {
    nome: 'Anderson',
    sobrenome: "Clayton",
    idade: 38,
    peso: 99.3,
    cor: 'Branca'
}// Objeto pessoa
for (let atributo in pessoa) { //in "de"
    console.log(`${atributo} = ${pessoa[atributo]}`)
}