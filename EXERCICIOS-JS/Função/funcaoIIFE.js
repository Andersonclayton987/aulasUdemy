// IIFE => Immediately Invoked Function Expression (Função expressa imediatamente invocada)
// Funcao alto invocada, mesmo sendo uma função anônima na hora da declarção já é chamada.
// Porem tudo que for criado dentro do seu escopo ira pertencer apenas a função
// Usada quando se quer fugir do escopo global

(function () {
    console.log("Será executada")
    console.log("Foge do escopo global")
})() // Estrutura do IIFE ´Ela fica  entre parenteses.