// Array é um objeto especial que organiza seus dados atravês de um indice que começa de Zero(0) é uma estrura dinâmica
console.log(typeof Array, typeof new Object)

let aprovados = new Array("Bia", "Carlos", "Anderson")
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Anderson"]
console.log(aprovados[0]) // Acessando atráves do indice
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Undefined pois não existe o indec 4

aprovados.push("Mari")// push irá adcionar um novo elemento no array
console.log(aprovados.length)// length irá mostra o tamanho do array
console.log(aprovados)
aprovados[9] = "Gabi" // Outra maneira de adcionar elemento no array, as outras posições irão ficar vazias(empty)

console.log(aprovados.sort()) // Ordena o array
console.log(aprovados)

delete aprovados[2] // Deleta o indice 3 mas não ordena o array
aprovados.splice(1, 1, "Elemento1", 'ELEMENTO7')/* Splice serve para adcionar, remover ou adcionar e remover ao mesmo tempo elementos, 
0s primeiro elemento é o indice, o segundo é a quantidade e depois será a quantidade que será adcionada no array*/
console.log(aprovados)