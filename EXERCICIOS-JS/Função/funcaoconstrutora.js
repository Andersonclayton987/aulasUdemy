function carro(velocidadeMaxima = 200, delta = 5) { //Delta nesta situação quer dizer que irá aumentar de 5 em 5 ate 200
    let velocidadeAtual = 0 //atributo privado ou seja um atributo que pertence apenas ao escopo desta função

    this.acelerar = function () { //Torna-se um mêtodo público quando é usado o this que torna algo visivel fora do escopo
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }

    }
    this.getVelocidadeAtual = function () { // get irá pegar o valor de velocidadeAtual
        return velocidadeAtual
    }
}

const uno = new carro // new serve para estanciar uma função já criada, para que seja colocado novos parâmetros
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 30)
ferrari.acelerar() // todo as vezes que ela for chamada será acrescentado mas 30 de delta
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())