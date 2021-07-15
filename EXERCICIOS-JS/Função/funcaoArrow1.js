// Função arrow é sempre anônima, para chamar ela é necessário depis é necessário armazenar ela numa constante

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
} // Se colocar o bloco {} o return é obrigátorio ser colocado

dobro = a => 2 * a // Sem o Bloco o "return" está implícto, não é necessário coloca-lo
console.log(dobro(Math.PI))

let ola = function () { // Função sem parâmetros
    return "Ola"
}

ola = () => "Ola" // 
console.log(ola())