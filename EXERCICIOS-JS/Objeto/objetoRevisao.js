// Objeto é uma coleção de partes chaves e valor
const produto = new Object
produto.nome = "CADEIRA"
produto['marca do produto'] = "Generica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89.590,
    proprietario: {
        nome: "Raul",
        idade: 59,
        endereço: {
            logradouro: "Quadra 804",
            casa: 12,
        }
    },
    condutores: [{
        nome: "Anderson",
        idade: 38,
    }],
    calcularValorSeguro: function () {
        //.....
    }
}
carro.proprietario.endereço.casa = 123 // Acessa o objeto atraves da notação ponto
console.log(carro)