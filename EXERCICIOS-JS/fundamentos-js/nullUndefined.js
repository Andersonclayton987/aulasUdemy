let valor // Não inicializada
console.log(valor) // O valor por padrão sera Undefinedpois a variável não foi definida

valor = null  // Não existe nem valor ou endereço apontado para algum local de memória. Null Ausência de valor. Sempre use Null para zerar o valor de uma variável.
console.log(valor)

// console.log(valor.toStrin()) // Erro. Não será possivel, acessar algo que esta nulo.

const produto = {} //Objeto não definido
console.log(produto.preco)
console.log(produto) // Objeto vai estar vazio pois não foi definido o objeto
produto.preco = null
console.log(produto)

// OBS: Não usar Undefined para zerar o valor de alguma variável, sempre usar Null. 
// O comando correto para apagar uma valor é (delete produto.preco)
