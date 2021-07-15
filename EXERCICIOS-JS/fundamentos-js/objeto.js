const prod1 = {} // Um par de chaves representa uma objeto vazio. O objeto em Js é uma coleção de chaves e valores que pode ser um número, texto, uma função e etc.
prod1.nome = 'SS21 Ultra'
prod1.preco = 7895.56
prod1.marca = "Samsung"
prod1.operadora = 'Claro'
prod1 ['Desconto'] = 0.40 // Evitar atributos com espaço.

console.log(prod1) // Dentro de um objeto só pode ter um identificador único, neste caso (prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    cor: 'Azul',
    obj: {
        marca: 'Colombo',
        data: '12 de agosto de 2021',
        obj1:{
            Tem:100,
            mes:"Janeiro",
            
            
        }
    }

} 
console.log(prod2)  // Já cria o objeto com seus valores dentro, é necessário separar os valores com virgula. Foram criados vários objetos dentro do objeto principal.