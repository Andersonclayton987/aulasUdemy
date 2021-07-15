function teste1(num) {
    if (num > 7) {
        console.log(num)
        console.log('Final')
    }
}
teste1(6)
teste1(8.1)

function teste2(num) {
    if (num > 7); { //CUIDADO, não usar pornto e virgula com bloco de controle
        console.log(num)
    }
}
teste2(6)
teste2(8) // Irá retornar os dois valores, pois o ponto e virgula separa o bloco.

function teste2(num) {
    if (num > 7) { //FORMA CORRETA
        console.log(num)
    }
}
teste2(6)
teste2(8)