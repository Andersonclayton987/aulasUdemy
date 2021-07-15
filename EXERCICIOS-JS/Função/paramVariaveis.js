// O fato de uma função não ter paramentro não indica que você não possa passa-los

function soma() {
    let soma = 0
    for (i in arguments) { // Nesta caso esta sendo feito um for com o 'i' indice array de 'arguments'
        soma += arguments[i] // soma "recebe uma atribuição aditiva +="" 'arguments é um array interno de uma função que tem todos os argumentos passados
    }
    return soma
}
// Com o "arguments" pode ser passado vários argumetos
console.log(soma()) // Valor zero pois não tem argumento
console.log(soma(1))
console.log(soma(1, 4, 5, 10, 3.3, 4.8))
console.log(soma('a', 'b', 'd'))