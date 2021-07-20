// Herança é a capacidade que o objeto filho tem de receber do objeto pai atributos e comportamentos para reusar.

const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)