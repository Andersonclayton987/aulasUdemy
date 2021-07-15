// JS não tem exponenciação, para realizar é necessário usar o Objeto MATH.
// Math.pow é a função que calcula a potenciação.

const raio = 5.6 
const area = Math.PI * Math.pow(raio, 2)

console.log(area.toFixed(3))
console.log(typeof Math)