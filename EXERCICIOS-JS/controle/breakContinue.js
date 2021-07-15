// Break não influência em um bloco do tipo if, apenas no switch, em laço for e dentro do while.
// O continue influência dentro de um laço for e dentro do while.

const nuns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nuns) { // "x" indice do array
    if (x == 5) { //break pode ser usado na mesma linha quando tem apenas um linha de código. Porem a boa prática é coloca-lo dentro de um bloco
        break
    }
    console.log(`x = ${nuns[x]}`)
} // O break causa um desvio de fluxo para fora do laço corrente mais próximo que ele interage no caso switch, for e while

for (y in nuns) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nuns[y]}`)
} // O continue apenas interrompe a continuação corrente e vai para a próxima repetição

