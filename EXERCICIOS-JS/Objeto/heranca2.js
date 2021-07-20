// Cadeia de protótipos (prototype chain)
// super => chama o método do protótipo
// __proto__, Obs: underline, Underline PROTO Underline, Underline

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: "B" }
const filho = { __proto__: pai, attr3: "C" }

console.log(filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, // Shadowing = Sombreamento de váriaveis de escopo mas abrangente
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`// super faz referência ao método
    }
}

Object.setPrototypeOf(ferrari, carro) // Poder ser usado _proto_ ou setPrototypeOf
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
console.log(volvo.status())
//ferrari.acelerarMais(345) // Vai até no max definido
ferrari.acelerarMais(323)
console.log(ferrari.status())