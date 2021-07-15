// Call Back chamar de volta
// Callback é usado para chamar de volta uma determinada função

const fabricantes = ["Mercedes", "FORD", 'BMW', "Toyota"]
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) // Imprime o indice e o nome que estão dentro do array com uma template string
} // ".forEach - é uma função "

fabricantes.forEach(imprimir) // Imprime o indice e o nome que estão ddentro do array
fabricantes.forEach(fabricantes => console.log(fabricantes)) // Chamada sendo feita por uma função arrow