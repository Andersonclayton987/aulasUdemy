const escola = 'Cod3r7'

console.log(escola.charAt(4)) // Vai dar a letra que esta no indice 4 dentro da string
console.log(escola.charAt(5)) // Se tiver fora do indice vai retornar um valor vazio
console.log(escola.charCodeAt(3)) // Mostra a valor do indice 3 na tabela unicode ou Ask
console.log(escola.indexOf('3')) // Retorna onde esta o digito dentro das aspas na palavra.
console.log(escola.substring(1)) // Significa que irá mostra apartir do indice 1 ate o final da string.
console.log(escola.substring(0, 3)) // Irá do indice Zero até o três sem incluir o indice três.
console.log('Escola '.concat(escola).concat("!")) // Junta um valor literal que não esta armazenado em uma variálve com outras variáves.
console.log('Escola' + escola + "!")  // Outra maneira de juntar variáves com string
console.log(escola.replace(3, 'e')) // Vai substituir o número que estiver na string por uma letra que estiver entre aspas.
console.log(escola.replace(/\w/g, 'R')) // o comando /\w/g irá substituir todos os digitos pelo digito entre aspas da constante relacionada.
console.log('Ana,MAria,Pedro'.split(',')) // Muda um string separadas por virgulas por uma estrutura de Arreio que é um  agrupador de variáveis com posições com espaço para colocar um valor