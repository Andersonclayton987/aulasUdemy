//Função construtora
// É necessário colocar o this.
function pessoa(nome, idade, peso, cor) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.cor = cor

    this.falar = function () {
        console.log(`Meu nome é: ${this.nome}, minha idade é: ${this.idade}, meu peso é KG: ${this.peso} e minha cor é: ${this.cor}`)
    }
}
const p1 = new pessoa("Anderson", 38, 99.80, "Branca")
p1.falar()