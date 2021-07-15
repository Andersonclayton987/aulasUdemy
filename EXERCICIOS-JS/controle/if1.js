function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado' + nota)
    }
} // Nesta função só vai retornar se a nota for >= a 7. Cso contrário não retorna nada.

soBoaNoticia(8.1)
soBoaNoticia(6.9)

function seForVerdade(valor) {
    if (valor) {
        console.log('É verdade...' + valor)
    }
} // Neste caso vai considerar o valor passado.

seForVerdade()
seForVerdade(null)
seForVerdade(NaN)
seForVerdade(-1)
seForVerdade(0)
seForVerdade('')
seForVerdade(' ')