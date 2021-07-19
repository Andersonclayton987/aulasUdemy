const pessoa = {
    nome: "Anderson",
    idade: 38,
    peso: 98,
}

console.log(Object.keys(pessoa)) //Pega todas as chaves do objeto
console.log(Object.values(pessoa)) //Pega os valores do objeto
console.log(Object.entries(pessoa)) // Pega as chaves e os valores do objeto
//Object.assign() Irá pegar vários objetos para concatenar e os atributos repetidos serão subescritos sendo que o valor do último será escrito
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 2 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)


Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "01/02/1998"
}) //Define a propriedade de um objeto
pessoa.dataNascimento = "01/02/2020"
console.log(pessoa.dataNascimento)