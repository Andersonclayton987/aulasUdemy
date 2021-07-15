const valores = [7.7, 8.9 ,6.3, 9.2] // Neste array temos 4 elementos que são separados por virgulas.
console.log(valores [0], valores[1], valores [2], valores[3])  // Vai acessar todos os elemnetos.
console.log(valores[3], valores[1]) // acessa os valores definidos

valores[10] = 10  //Foi atribuido um nova valor
console.log(valores) // Irá mostrar todos os elementos. OBS: <6empty items> esta mostrando a quantidade de itens vazios
console.log(valores.length) // Acessa a quantidade de elementos de um array

valores.push({id: 3},false, null, 'teste') // Adciona novos elementos no array. OBS: Evitar colocar muitos dados dentro de um array, deve-se ser criado um array para cada grupo.
console.log(valores)

console.log(valores.pop()) // retira o último elemento do array e retorna ele.
delete valores[0] // Retira o primeiro elemento

console.log(typeof valores) // Mostra o tipo. Array é um objeto