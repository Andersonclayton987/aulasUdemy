// Função factory é uma função que retorna um objeto
// Factory Simples
function criarPessoa() {
    return {
        nome: "Anderson",
        peso: 99.9,
        idade: 38
    }
}
console.log(criarPessoa())