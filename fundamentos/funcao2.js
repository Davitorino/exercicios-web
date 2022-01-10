// Armazenado uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenado uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Função arrow com retorno implícito
const subtração = (a, b) => a - b
console.log(subtração(3, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')