// Contexto Léxico é como as coisas foram declaradas dentro da linguagem

const valor = "global"
function minhaFuncao() { // Local de definição da const valor.
    console.log(valor)
}

function exec() { // Por causa do contexto léxico a função será chamada no local onde ela foi definida
    const valor = "local"
    minhaFuncao()
}

exec()