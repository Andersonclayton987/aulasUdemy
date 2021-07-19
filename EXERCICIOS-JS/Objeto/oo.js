//Procedural => O foco é na função que manipula dados.
// Os dados podem ser globais ou internos da função
processmaneto(valor1, valor2, valor3)

//OO => Dados e dentro dos dados temos funções
//O objeto recebe valores ou seja atributos e tem funções que são invocados apartir dos dados
objeto = {
    valor1,
    valor2,
    valor3,
    processmaneto() {
        //......
    }
}
objeto.processmaneto()

//PRINCÍPIOS IMPORTANTES:
//Abstração => É você pegar um objeto do mundo real e entender como traduzir esse objeto para dentro do seu sistema de forma simples.
//Encapsulamento => São todos detalhes da implementação que estão escondidos e são mostrado apenas o necessário para que o sistema possa ser usado.
//Herança => É quando são recebidos atributos e comportamentos de um objeto pai. Relação "É UM....". "TEM UM" é uma composição
//Polimorfismo => Significa múltiplas formas. Dentro do conceito genêrico você pode atribuir mais conceitos abstratos, ou seja uma classe filha pode ser referenciada pela classe pai.

