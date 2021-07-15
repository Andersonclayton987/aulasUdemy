function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () { // "setInterval" ela é usada para dispara uma outra função apartir de um determinado intervalo passado
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //"1000" Valor passado em milisegundos
}

new pessoa


function pessoa() {
    this.idade = 0

    const self = this // Recurso que troca o this pelo self pare evitar as variações que ocorre com o this
    setInterval(function () { // "setInterval" ela é usada para dispara uma outra função apartir de um determinado intervalo passado
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
