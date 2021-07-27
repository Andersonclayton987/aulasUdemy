// Acessando um arquivo que esta dentro de várias subpastas
// ../ sai de uma pasta => ../ sai de outra pasta. Exemplo ../../ => está saindo de duas pastas

const moduloA = require('../../moduloA')
console.log(moduloA.ola)