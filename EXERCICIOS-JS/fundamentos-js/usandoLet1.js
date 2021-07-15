var numero = 1
{
    let numero = 2 // A variável let tem seu escopo apenas dentro do bloco, ou seja como tem escopo diferente será mostrado os valores 1 e 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)

// Variáveis definidas com var tem escopo global e de função
// Variáveis defininas com let tem escopo globol de função e bloco