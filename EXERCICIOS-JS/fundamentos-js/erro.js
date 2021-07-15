function trataErro (erro){
    throw new Error('......') // Lança um erro.
}

function imprime (obj) {
    try{
    console.log(obj.name.toUpperCase()+ '!!!!!')
    } // Bloco que pode gerar algum tipo de erro
    catch(e) {
        trataErro(e)
        } // Tratar o erro crinado um objeto, lancar um tipo etc.
    finally {
          console.log('Final')
      }  // Sempre será finalizado
    
} // try -> Tentar

const obj = {nome:"Roberto"}
imprime(obj)