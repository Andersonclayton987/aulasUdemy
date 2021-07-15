// Notação Ponto é quando você acessa membros de uma função ou objeto
console.log(typeof console)
console.log(Math.ceil(6.1)) // Aredoda para cima

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome // this. significa que o nome associado ao objeto que for criado aparti da função relacionada será público. Ficará visível fora da função.
    this.exec = function() {
        console.log('Executar')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj ('Mesa')
console.log(obj2.nome)
console.log(obj3. nome)
obj3.exec() //