// A classe é convertida em uma função
class Lancamento {
    constructor(nome = "Generico", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { // "..." Três ponto é uma opreador que aceita parâmetros variáveis
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidade = 0
        this.lancamentos.forEach(l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }
}
const salario = new Lancamento("Salario", 4500)
const conTLuz = new Lancamento("Luz", -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, conTLuz)
console.log(contas.sumario())