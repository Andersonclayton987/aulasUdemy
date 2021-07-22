/* JSON é um formato textual que é diferente da notação literal do objeto. É um formato de dados. É um formato que todas as linguagem consegue ler. Serve para
compartilhamento de dados entre sistemas*/
const obj = {
    a: 1, b: 2, c: 3, soma() { return a + b + c }
}
console.log(JSON.stringify(obj)) // A função irá sumir porque o JSON é textual

console.log(JSON.parse('{"a":1,"b":2,"c":3}')) //Todo nome de atributo deve estar em aspas duplas