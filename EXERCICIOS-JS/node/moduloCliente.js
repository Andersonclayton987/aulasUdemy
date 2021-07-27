// Usando o sistema de módulos do Node
//npm é responsável por baixar uma determinada biblioteca de terceiro
//require é usado para acessaro o arquivo exportado
const moduloA = require('./moduloA') // './ desta forma esta sendo referenciado um módulo que está presente dentro do sistema e para isso é usando o camiho relativo
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloB.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
