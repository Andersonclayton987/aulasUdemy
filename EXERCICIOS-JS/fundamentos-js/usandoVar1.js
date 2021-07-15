// Quando uma variável é definida dentro de uma função ela será visível apenas dentro do bloco da função
function teste() {
    var local = 'Brasília'
    console.log(local)
}
teste()
// console.log(local) se ficar fora do bloco da erro
// window é um objeto global, será visível em qualquer lugara da aplicação
// Uma variável que esta fora de uma função sempre estara dentro de um window window é um bjeto global do browser
