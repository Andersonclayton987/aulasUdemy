const carrinho = [
    '{"nome": "Boracha", "preco": 3.45}', // Formato JSON
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kil Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObj = json => JSON.parse(json) // Converte um texto para Objeto
const apenasPreco = produto => produto.preco // Cria uma const que recebe um arrow function de produto que ira retornar o preço

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)