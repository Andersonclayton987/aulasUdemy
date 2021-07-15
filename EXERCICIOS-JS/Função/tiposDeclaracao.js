console.log(soma(3, 9))
// function declaration - Forma padrão de chama uma função. Neste tipo de função ela já pode ser chamada na antes de ser declarada
function soma(x, y) {
    return x + y
}

//function expression - Neste tipo não se pode chamar a função antes da declaração - Esta função é anônima
const sub = function (x, y) {
    return x - y
}
console.log(sub(10, 7))

//namede function expression - Neste tipo a função recebe um nome - Esta função é nomeada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(4, 8))