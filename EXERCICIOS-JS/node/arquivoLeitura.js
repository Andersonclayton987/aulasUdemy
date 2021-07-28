const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
//Ler um arquivo sincrono, causa grande impacto no event loop
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Leitura assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//Acessando de forma mas simples
const config = require('./arquivo.json')
console.log(config.db)


// Lendo os arquivos
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})