function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // passa o contexto em que a função deve ser executada
console.assert(getPreco.apply(carro)) // ^

// parâmetros passados diretamente no call, o primeiro sempre é o contexto de execução
console.log(getPreco.call(carro, 0.17, '$'))
// no caso do aplly, os parâmetros devem ser passados dentro de uma array
console.log(getPreco.apply(global, [0.17, "$"]))