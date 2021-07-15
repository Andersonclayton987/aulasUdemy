const imprime = function (nota) {
    if (nota >= 7) {
        console.log("Aprovado seu abestado")
    } else {
        console.log('REPROVADO seu MANE!!!!!!!!')
    }
}

imprime(9)
imprime(7.1)
imprime(6.9)
imprime(5)
imprime('Epa...') // CUIDADO, o JS é fracamente tipado