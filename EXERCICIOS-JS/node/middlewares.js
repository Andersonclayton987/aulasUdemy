// Padrão middleware = O objeto é importante pois irá passar de um para o outro

const { copyFileSync } = require("fs")

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'Mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'Mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
