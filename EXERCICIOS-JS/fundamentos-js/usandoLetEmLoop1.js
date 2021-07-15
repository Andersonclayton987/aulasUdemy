// No let a variável só estará disponivel dentro do bloco

for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('I = ', i) // Nesta linha dará erro, pois o let só resolve o que esta dentro do bloco.