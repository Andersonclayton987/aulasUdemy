const notas = [7.7, 8.1, 6.5, 7.3, 7.8, 9.0, 6.5, 5.2, 8.6]

//Sem callback

let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


// Com Callback
notasBaixas2 = notas.filter(function (nota) {
    return nota < 6
})
console.log(notasBaixas2)

// Callback com arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// Callback criando com uma função
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)