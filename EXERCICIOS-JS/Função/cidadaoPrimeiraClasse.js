// Função em JS é First-Class Object (Citizens)
// Higher-order function = Função de alta ordem
// Função pode ser tratada como um dado.

//Forma literal de um função
function fun1() { }

//Armazenando uma função em uma variável
const fun2 = function () { }

// Armazenando uma função em um array
const array = [function (a, b) { returna + b }, fun1, fun2]

// Armazenando uma função em um objeto
const obj = {} // Criou um objeto
obj.falar = function () { return 'Opa' } // Dentro do Objeto foi colocada uma função ".falar"
console.log(obj.falar())

//Passa uma função como parâmetro para outra função
function run(fun) { // Foi criada uma função "run" e como parâmetro foi recebida outra função "fun"
    fun()
}
run(function () { console.log('Executando um teste') })

// Uma Função pode retornar ou conter uma função
function soma(a, b) { // Foi criada uma função soma que recebe dois parâmetros
    return function (c) { // No return foi criada uma segunda função que recebe um outro parâmetro para depois retorna o valo 
        console.log(a + b + c)
    }
}
soma(2, 4)(5) // Passando os parâmetros da primeira e da segunda função para chamar diretamente

const soma1 = soma(2, 4) // Foi armazenado o resultado da primeira função dentro de uma constante
soma1(5) // Depois pode ser usada a constante para continuar na segunda função  
