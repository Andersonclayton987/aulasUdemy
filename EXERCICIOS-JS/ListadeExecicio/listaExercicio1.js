//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
function operacoes(a, b) {
    return {
        soma: a + b,
        divisao: a / b,
        multip: a * b,
        subtra: a - b,
    }
}
console.log(operacoes(10, 20))

function calcularOperacoes(operador1, operador2) {
    console.log(operador1 + operador2, operador1 - operador2, operador1 * operador2, operador1 / operador2);
}

calcularOperacoes(5, 10)

/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).*/
function triangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return "EQUILÁTERO"
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return "ISÓSCELES"
    } else {
        return "ESCALENO"
    }
}
console.log(triangulo(2, 3, 5))
console.log(triangulo(2, 2, 4))
console.log(triangulo(2, 2, 2))

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
function expoente(base, expoente) {
    resultado = base ** expoente
    return resultado
}
console.log(expoente(3, 5))

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
function divisao(dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo / divisor))
    console.log(`Resultado ${Math.floor(dividendo / divisor)}`) // Pode ser concatenado com Template string
    console.log("Resto: " + dividendo % divisor) // Pode ser concatenado com Template string
    console.log(`Resto ${dividendo % divisor}`) // % => Resto da divisão
}
divisao(13, 9)

/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)

