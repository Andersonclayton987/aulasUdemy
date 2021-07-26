//Criando o funcionamento do map

Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Boracha", "preco": 3.45}', // Formato JSON
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kil Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObj = json => JSON.parse(json) // Converte um texto para Objeto
const apenasPreco = produto => produto.preco // Cria uma const que recebe um arrow function de produto que ira retornar o preço

const resultado = carrinho.map2(paraObj).map2(apenasPreco)
console.log(resultado)