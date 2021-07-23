
Array.prototype.forEach2 = function (callback) { // Foi criada uma função "forEach" no prototype de Array. a função criada recebe um "callback"
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


const aprovados = ["Anderson", 'Mari', 'Gabi', 'Luana']
aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
