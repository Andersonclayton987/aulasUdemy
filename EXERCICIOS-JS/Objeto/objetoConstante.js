// pessoa aponta para um objeto
const pessoa = { nome: "Pedro" }
pessoa.nome = "Ana"
console.log(pessoa)

Object.freeze(pessoa)// Impede que seja atribuido, adcionado ou deletado um novo atributo ao objeto pessoa ou seja o objeto se torna uma constante
const pessoaConst = Object.freeze({ nome: 'Anderson' })
console.log(pessoaConst)