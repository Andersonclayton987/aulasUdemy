Number.prototype.entre = function (inicio, fim) { // Foi criada uma função "entre"
    return this >= inicio && this <= fim
} // Função "entre" para retornar um valor entre dois valores

const imprimaResultado = function (nota) { // Função "If Else If"
    if (nota.entre(9, 10)) {
        console.log('PARABENS VOCÊ ESTA NO QUADRO DE HONRA!!!!')
    } else if (nota.entre(7, 8.99)) { // else if => Caso contrário
        console.log('PARABENS APROVADO!!')
    } else if (nota.entre(4.99, 6.99)) {
        console.log('RECUPERAÇÃO, Estuda ')
    } else if (nota.entre(0, 4.98)) {
        console.log('REPROVADO, fica para a próxima vez!')
    } else {
        console.log("NOTA INVÁLIDA, DIGITE UM VALOR CORRETO")
    } // Maneira de encadiar múltiplas funções com If e Else. Nesta função entar apenas em um bloco.
}

imprimaResultado(10)
imprimaResultado(8.55)
imprimaResultado(6.3)
imprimaResultado(4.97)
imprimaResultado(-1) // Irá retornar "NOTA Inválida", pois os valores tem que estar entre 0 até o 10.