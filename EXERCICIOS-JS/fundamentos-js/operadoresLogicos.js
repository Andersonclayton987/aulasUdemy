// V e V ->(e) Todos os operadores tem que ser verdadeiro para o resultado seja verdadeiro
// V ou F ->(ou) Basta apenas um ser verdadeiro para que seja Verdadeiro.
// V xor V ->( ou, ou) Se todos os operadores forem falsos ou verdadeiros o resulta será FALSO. Para ser verdadeiro um dos operadores tem que ser diferente.
//!v -> F A negação inverte o operador
//!f -> V

function compra(tr1, tr2) {
    const coms = tr1 || tr2
    const comt50 = tr1 && tr2
    const comp32 = !!(tr1 ^ tr2) // ou exclusivo - bitwise -> !! converte para booleano
    const comp33 = tr1 != tr2 // tr1 for diferente de tr2 - outra maneira de verificar ou exclusiva
    const mans = !coms // difentes

    return {coms, comt50, comp32, comp33, mans}
}
console.log(compra(true, true))
console.log(compra(true, false))
console.log(compra(false, true))
console.log(compra(false, false))
