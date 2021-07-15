// função anônima é uma função sem none
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(5, 6, soma)
imprimirResultado(4, 9, function (x, y) { // Nesta caso foi passada uma função anônima dentro da função imprimirResultado
    return x - y
})

imprimirResultado(4, 9, (x, y) => x * y) // Uma função arrow é sempre anônima

const pessoa = {
    falar: function () {
        console.log('Opá que burro da zero para ele')
    }
}
pessoa.falar()