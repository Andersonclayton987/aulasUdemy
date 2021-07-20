// Classe em JS é convertido em uma função
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Bem vindo", 123) // new retona um objeto criado atrves de uma função
const aula2 = new Aula("Ate Breve", 456)
console.log(aula1, aula2)

/*Quando temos uma função construtora usamos o operador "NEW" para instaciar o objeto apartir da função criada também faz que o
protótipo do objeto criado aponta para a função.
*/