// Funcionamento do filter
Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) { // Desta maniera todo o array será percorrido
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }

    }
    return newArray

}




const produto = [
    { nome: 'Notebook', preco: 2999, fragil: true },
    { nome: "Ipad", preco: 5999, fragil: true },
    { nome: 'Copo de Vidro', preco: 3.99, fragil: true },
    { nome: " copo de plastico", preco: 1.99, fragil: false },
    { nome: 'Madeira', preco: 599, fragil: false }

]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produto.filter2(caro).filter2(fragil))