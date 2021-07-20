// object.preventExtensions => Evita que o obejto seja estendido ou seja não poder ser aumentado o número de atributos. Pode apenas ser deletado ou modificados
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "PROMOÇÃO"
})
console.log("Extensível:", Object.preventExtensions(produto))

produto.nome = "Borracha" // Alterou o produto, o que não é permitido a o aumento de atributos
produto.descrição = "Borracha escola Branca" // Não existe então nia vai surtit efeito
delete produto.tag
console.log(produto)

//object.seal => Selar significa que no objeto não poderá ser excluído ou adcionado novos atributos, porém os existente podem ser modificados
const pessoa = { nome: "Anderson", idade: 38 }
Object.seal(pessoa)
console.log("Selado", Object.seal(pessoa))

pessoa.sobrenome = "Silva" // Não existe, logo não é modificado
delete pessoa.nome // Não poder ser deletado
pessoa.idade = 29 // Existe, logo pode ser mudaddo
console.log(pessoa)

//Object.freeze => Atributos não poder ser nem modificados, nem adcionados e nem excluídos ou seja é uma constante