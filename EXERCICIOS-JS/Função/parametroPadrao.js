// Estrategia para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 // a = a ou recebe 1 caso não seja passado nenhum argumento
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(4), soma1(4, 2, 3))
// No primerio caso vai retorna o valor padrão que seria a soma dos três argumentos, pois a função soma1 esta vazia.
// No segundo caso seria apenas substituido o argumento de "a" por 4 e seria somado ou outros dois argumentos
// No terceiro caso foram passados todos os três argumentos que serão substituidos.

// Estrategia 2, 3 e 4 para gera um valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // a recede a "!== istritamente diferente" "?". Se a não receber valor a será igual a 1
    b = 1 in arguments ? b : 1 // Dentro de "in arguments" existe o indice 1, se não pege o valor padrão de "b" que é 1
    c = isNaN(c) ? 1 : c // Testando se uma variável passado é "isNaN". Se a variavél passada é isNaN retorne o valor padrão de "c" que é 1
    return a + b + c
}
console.log(soma1(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão ES-2015
function soma3(a = 2, b = 2, c = 2) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(2, 6, 9), soma3(0, 0, 0))