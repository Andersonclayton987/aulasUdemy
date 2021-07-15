const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger (peso1))
console.log(Number.isInteger(peso2))

const avaliação1 = 9.872
const avaliação2 = 7.526

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso1 + peso2)

console.log('Sua média é', media)
console.log(media)
console.log(media.toFixed(2)) // Mostra a quantidade de casas decimais
console.log(media.toString()) // Converte para String
console.log(media.toString(2)) // Transforma em binário
console.log(typeof media) // Mostra o tipo
console.log(typeof Number) // Number é uma função