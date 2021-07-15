let isAtivo = false
console.log(isAtivo)

isAtivo = true // VERDADEIRO
console.log(isAtivo) // isAtivo num contexto de uma situação de VERDADEIRO ou FALSO é Verdadeiro. Porém pode ser convertido para Falso de usar uma negação !
isAtivo = 1 // Verdadeiro
console.log(!isAtivo) // Torna-se Falso. ! Negação
console.log(!!isAtivo) // Torna-se Verdadeiro. !! duas negações volta ao original.

console.log('Os verdadeiros...') // Situações que não é VERDADEIRO OU FALSO, mas no contexto requerido vai ser verdadeiro.
console.log(!!3) // Todos o núemro inteiros são verdadeiros com excessão do 0 (Zero).
console.log(!!-1)
console.log(!!' ') // Espaço vazio ou algum texto é verdadeiro
console.log(!! []) // Array
console.log(!!{}) // Objeto literal também é verdadeiro
console.log(!!Infinity) 
console.log(!!(isAtivo = true)) // Atribuição

console.log('Os falsos..')
console.log(!!0)
console.log(!!"") // string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Atribuição

console.log('Para finalizar') // Expressão lógica com relação ao OU ||.
console.log(!!('' || null || 0 || " ")) // || ou. Pelo menos um dentro da expressão tem que ser verdadeiro 

let nome = ""
console.log(nome || 'Desconhecido') // Caso o nome não esteja valido (False) imprima Desconhecido, caso nome esteja válido (True) imprima o nome.


