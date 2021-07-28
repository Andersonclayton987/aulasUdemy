const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
} // Escrevendo um arquivo usando  o writeFile e o stringify junto com o JSON salva o arquivo no formato de string do JSON
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo SALVO')
})