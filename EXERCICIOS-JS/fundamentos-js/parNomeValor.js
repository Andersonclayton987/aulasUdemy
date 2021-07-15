// Um objeto é uma coleção de chave valor.
const saudade= "olá"  // Contexto léxico ou seja em que lugar a variável foi definida

function exec() {
    const saudade = 'Fala'  // Contexto léxico a const foi definida dentro da função. Mesmo com o mesmo nome, estão em contexto diferentes, não gera conflito.
    return saudade
}
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
        endereco: {
            logradouro: 'Rua Muito legal',
            numero: 23
        }
}
console.log(saudade); // Variável
console.log(exec()) // Função
console.log(cliente)  //Objeto
