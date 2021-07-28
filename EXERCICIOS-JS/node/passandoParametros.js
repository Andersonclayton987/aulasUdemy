// Como passar um parâmetro para um módulo

module.exports = function(...nomes){ // ...nomes é um argumento variável, neste caso poderá passar quantos nomes quiser
    return nomes.map(nome => `Uma boa semana para você ${nome}!`) 
}