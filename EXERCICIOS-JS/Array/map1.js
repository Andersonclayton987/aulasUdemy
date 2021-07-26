/*Função Map existe dentro dele uma laço que vai ser executado fazendo para fazer uma  transformação no array. A ideia é mapear um array para outro array do mesmo tamanho
com os dados transformados. Seuge a seguinte regra, uma array com três elementos será transformado em outro arrya com três elementos porém com os dados transformados. 
O map não modifica o array original, ele cria um novo*/
const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function (e) {
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10 // aarrow function tem o "return" implícito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ",")}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)