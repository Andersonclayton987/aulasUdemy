// Factory
function produto(nome, preco) {
    return {
        nome,
        preco,
        deconto: 0.1
    }
}
console.log(produto("Notebook", 2999.90))
console.log(produto("Tablet", 1230.00))
console.log(produto("Monitor", 890.90))
console.log(produto("Celular", 1200.90))