class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
/*extends => é a forma no âmmbito de sintaxe de classe de definir que uma determindade classe tem outra classe como protótipo ou que uma determinda função
gerada a partir daquela classe terá como protótipo uma outra função que será gerada a partir da classe avo*/
class Pai extends Avo {
    constructor(sobrenome, profissa = "Professo") {
        super(sobrenome) // super => é usado para chamar a classe pai
        this.profissa = profissa
    }
}
class Filho extends Pai {
    constructor() {
        super("Silva")
    }
}

const filho = new Filho
console.log(filho)