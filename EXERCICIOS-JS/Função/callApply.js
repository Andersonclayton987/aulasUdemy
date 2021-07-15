function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4598.99,
    desc: 0.15,
    imposto: 0.27,
    getPreco // Método adcionado
}

console.log(produto.getPreco())

console.log(getPreco.call(produto)) // Chamando com o call os parâmetros serão passados diretamente na função sendo o primeiro o contexto pode ser nulo, alguma const, varial ou global
console.log(getPreco.call(produto, 0.19, "$"))


console.log(getPreco.apply(produto)) // chamada com apply os o contexto fica na função e os parâmetros estarão dentro de um array
console.log(getPreco.apply(produto[0.18, 0.27, "$"]))