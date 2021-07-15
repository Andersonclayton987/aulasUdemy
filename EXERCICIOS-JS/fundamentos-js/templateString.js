const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' // Na string não pode quebrar a linha.
const template = `
Olá 
${nome}!`           

console.log(concatenacao, template)

// No Template a linha pode ser interpolada ou seja quebrada. No Template string se abre e fecha com o simbolo da crase `.    
// Uma expressão dentro de uma template string começa com $ {} e dentro das chaves coloca-se a sua expressão, em via de regra usa-se para nome de variável.
// Dentro de uma template string pode ser chamada uma expressão.

console.log(`1 + 1 = ${1 + 1}`)

// Na Tamplete string também pode ser usada uma função
    
const up = texto => texto.toUpperCase()
console.log(`Ei.... ${up('cuidado seu mané')}!`)
