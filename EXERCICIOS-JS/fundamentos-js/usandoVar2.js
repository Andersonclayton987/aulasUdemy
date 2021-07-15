var numero = 1 
{
    var numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)  // Fuja do escopo global principalmente quando estiver trabalhando no Browser (Front-end)
// Sera mostrado o número 2 pois como a variável não esta dentro de uma função ela será substituida.