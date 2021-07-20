function MeuObjeto() { }
console.log(MeuObjeto.prototype)

/* Quando é criado um Objeto apartir de uma função contrutora usando o new, o protótipo do objeto automaticamente aponta para a função que foi
criada*/

//Prototype => É a ideia de ter um link para outros objetos que irá pesquisar na cedeia de protótipos procurando por funções ou atributos.

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = "Anderson"
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia coisa linda ${this.nome}!`)
}

obj1.falar()
