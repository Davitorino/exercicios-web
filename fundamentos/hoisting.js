console.log('a =', a)
var a = 2 // A declaração da variável é jogada para cima, mas sem atribuir o valor
console.log('a =', a)

console.log('b =', b)
let b = 2 // Não ocorre hoisting, devolve um erro
console.log('b =', b)