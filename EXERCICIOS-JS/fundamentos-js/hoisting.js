// O Hoisting é quando uma a variável (var) estar declarada em outro local e acaba indo para o top (subindo). Hoisting significa JOGA PARA CIMA.
// Dentro da função também se repete. Não ocorre o Hoisting no let.

console.log('a =', a)
var a = 2
console.log('a =', a)

function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}