const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //axios é um client HTTP que faz requisições para obter informações de algo que esta remoto

//Fazer uma função para mostrar a chinesas com o menor salário

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => { // get obtem uma informação do servidor
    const funcionarios = response.data
    console.log(funcionarios)


    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})

