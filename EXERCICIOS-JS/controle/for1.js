// Tanto no "while" como no "for" será dado os mesmo valores

let contador = 1 // O "while" é composto pela declaração da variável, expressão e o incremento
while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) { // O "for" é composto pela declaração da variável, expressão e o incremento
    console.log(`i = ${i}`)
}

const notas = [6.7, 8.2, 9.3, 5.2, 6.3]
for (let i = 0; i < notas.length; i++) { //.length verifica o tamanho do array. Lembrando que o primeiro elemento do array é o Zero "0"
    console.log(`Nota = ${notas[i]}`)
}
