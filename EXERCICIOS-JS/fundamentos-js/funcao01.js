function imprimirSoma(a, b) {
    console.log (a + b)
}

imprimirSoma(2, 3)

function soma(a, b=0) {
    return a + b
}
console.log(soma(9))  //Quando é colocado o =0 o valor padrão será zero e se receber variável=1 irá recebr 1.