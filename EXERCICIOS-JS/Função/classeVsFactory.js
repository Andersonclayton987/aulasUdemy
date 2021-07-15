class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    falar() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}
const p1 = new pessoa("Anderson", 38)
const p2 = new pessoa("Crsitiane", 35)
const p3 = new pessoa("Mariana", 13)
const p4 = new pessoa("Gabriela", 8)
p1.falar()
p2.falar()
p3.falar()
p4.falar()

// Funão Factory
const pessoa1 = (nome, idade) => {
    return {
        fala: () => console.log(`Meu nome é ${nome} e minha idade é ${idade}`)
    }
}
const p5 = pessoa1("Neide", 38)
const p6 = pessoa1("Joaquim", 35)
const p7 = pessoa1("Fatima", 13)
const p8 = pessoa1("Fernanda", 8)
p5.fala()
p6.fala()
p7.fala()
p8.fala()