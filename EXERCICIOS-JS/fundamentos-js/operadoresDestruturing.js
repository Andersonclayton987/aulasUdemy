// Operador de desestruturação - Ele tira da estrutura(Função(), objeto{}, Array[]) algo.
// Se for uma função usa-se (), se for Objeto {}, Array [].
const pessoa  = {
    nome: 'Anderson',
    idade: 38,
    endereço: {
        logradouro: 'Quadra 804 Conjunto 11 casa 12',
        numero: 12
    } //Objeto
}

const {nome, idade} = pessoa // Tire de dentro do Objeto os atributos nome e idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // Tire das estrutura objeto o atributo nome e crie uma variável n e i.
console.log(n, i)

const {sobrenome, bemhumorada} = pessoa // Será dado o avlor undefined, pois não existe os atributos apontados
console.log(sobrenome, bemhumorada)

const {endereço: {logradouro, numero, cep}} = pessoa // Irá tirar os atributos do objeto que esta dentro do objeto.
console.log(logradouro, numero, cep)

// Usando o Array com o operador Destruturing

const[a] = [10]
console.log(a)

const [n1, , n3, n4, n5, , n6 = 0] = [10,7,5,9,4]
console.log(n1,n3,n4,)

const[,[,nota]] = [[,8,7], [4,5,6]]// Neste array foi ignorado o primeiro elemento e dentro do segundo array e foi ignorado o priemeiro e atribuido valor ao segundo.
console.log(nota)

// Usando Função com o operador Destruturing

function rand({ min = 0, max = 1000}) {
    const valor= Math.random() * (max - min) + min
    return Math.floor(valor) // Math.Floor aredonda para cima.
}
const obj = {max:50, min:40}
console.log(rand(obj))

// Usando o Array com o operador Destruturing

function rand([min=0, max=1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand( [, 10]))
console.log(rand([]))
//console.log(rand()) // Erro de indefined







