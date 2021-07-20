//Object.create
const pai = { nome: "Anderson", corCabelo: "Castanho", ideda: 38 }

const filha1 = Object.create(pai) // Object.create define que o protótipo é o objeto que foi passado como parâmetro ele já consegue localiza o atributo
filha1.nome = "Ana"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: "Mariana", writable: false, enumerable: true }
})
console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // Identifica se determinado atributo pertence ao objeto ou veio por herança
        console.log(key) : console.log(`Por herança: ${key}`)
}