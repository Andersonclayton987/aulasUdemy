// Armazenando uma função dentro de uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável. =>arrow function
const soma =(a, b) => {
    return a + b
}
console.log(soma(2, 3))

// Retorno implícito. Forma reduzida de criar uma função de única linha
const subtracao = (a , b) => a - b
console.log(subtracao(5 , 10))
