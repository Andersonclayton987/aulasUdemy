/* filter => Serve para filtrar um array. Ele retorna verdadeiro ou falso ou seja se for True o array resultante terá o elemento, 
porem se for falso False não terá o elemento*/

const produto = [
    { nome: 'Notebook', preco: 2999, fragil: true },
    { nome: "Ipad", preco: 5999, fragil: true },
    { nome: 'Copo de Vidro', preco: 3.99, fragil: true },
    { nome: " copo de plastico", preco: 1.99, fragil: false },
    { nome: 'Madeira', preco: 599, fragil: false }

]
console.log(produto.filter(function (p) {
    return false
}))
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produto.filter(caro).filter(fragil))