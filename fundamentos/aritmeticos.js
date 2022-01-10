const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2 // devolve o resto da divisão
const exp = 3 ** 2 // exponenciação, 3 elevado a 2
let base = 2
base **= 3 // utiliza o valor da variável como base e o valor atribuido como expoente

console.log(soma, subtracao, multiplicacao, divisao, modulo, exp, base)

/*
* d++ postfix
* ++d prefix
* a + b infix
* -a operador unário
* c + d operador binário
*/