let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // O "global" é o objeto globla dentro do Node

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // Vai dar "false" pois com o .bind irá apontar para obj e não para o objeto global
comparaComThis(obj) // "true" porque esta apontado para a const obj e não mais para o global