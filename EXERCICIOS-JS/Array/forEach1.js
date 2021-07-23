// For Each percorre o array

const aprovados = ["Anderson", 'Mari', 'Gabi', 'Luana']
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
aprovados.forEach(indice => console.log(indice))