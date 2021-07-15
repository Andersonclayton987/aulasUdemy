const pessoa = {
    saudacao: 'Bom Dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar() // O this esta sendo usado para acessar o objeto pessoa
falar() // Nesta caso dará erro

const falarDePessoa = pessoa.falar.bind() // Você passa uma objeto que e para ser resolvido o this. Quem é o this dentro da função falar?
falarDePessoa()