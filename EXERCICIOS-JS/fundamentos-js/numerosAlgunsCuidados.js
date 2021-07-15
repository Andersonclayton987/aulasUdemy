console.log(7 / 0)  // Qualquer núemro dividido por 0 gera Infinito
console.log( "10" / 2)  // Operações com tipos String respeitando o formato do número são geradas
console.log("Show" *2) // String com letras dão erro NaN
console.log(0.1 + 0.7) // Devido a especificação gera uma imprecisão 0.79999999999
// console.log(10.toString()) // Gera um erro NaN
console.log((10.345).toFixed(2)) // É necessário e estar dentro de paranteses para funcionar
console.log('3' + 2) // Irá concatenar ou seja juntar, a sring tem preferência
console.log('3' - 2) // Será feita a subtração