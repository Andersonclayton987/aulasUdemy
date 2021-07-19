//FORMA DE CRIAÇÂO DE OBJETOS

//Usando a notação literal de objeto
const obejeto1 = {}
console.log(obejeto1)

// Objeto em JS
const obejeto2 = new Object
console.log(obejeto2)

//Função construtora
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto("Notebook", 2.999, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario("João", 7523, 4)
const f2 = criarFuncionario("Ana", 1589, 2)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou JSON"}')
console.log(fromJSON.info)