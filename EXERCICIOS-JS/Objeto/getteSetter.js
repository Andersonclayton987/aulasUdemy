const sequencia = {
    _valor: 1, //'_' é uma convensão que indica que a variável passada irá ser acessada apenas dentro do objeto definido
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor=100
console.log(sequencia.valor, sequencia.valor)
sequencia.valor=90 // Vai ignorar um valor abaixo do passado
console.log(sequencia.valor, sequencia.valor)
