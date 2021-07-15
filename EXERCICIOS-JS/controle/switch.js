const imprimaResultado = function (nota) {
    switch (Math.floor(nota)) {//Math floor arredonda pra cima. Lembrando que switch não retorna Falso ou Verdadeiro, ele retorna valores
        case 10:
        case 9:
            console.log('Quadro de honra')
            break // Serve para que seja executado apenas o case que atende ao valor passada, caso não tenha ele irá executar todos os "case"
        case 8: case 7: // Pode ser colocado em linha diferentes ou na mesma linha
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 3: case 1: // No case tem que ser na sequencia, não pode ter intervalos entre os valores
            console.log('Reprovado')
            break // Causa a saída do bloco apenas, passando para o próximo bloco
        default: // default é colocado apenas no final, porém não é necessário o uso dele
            console.log('Nota invalida')
    }
    console.log('Fim')
}

imprimaResultado(10)
imprimaResultado(8.9)
imprimaResultado(6)
imprimaResultado(5.9)
imprimaResultado(4)
imprimaResultado(2.9)

