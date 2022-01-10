// novo recusro do EC2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/*
* O operador destructuring retira atributos do objeto 
* escolhido e os transforma em variáveis.
*/
const { nome, idade } = pessoa 
console.log(nome, idade)

// Faz a mesma coisa da sentença anterior só que armazenando em variáveis com outros nomes.
const { nome: n, idade: i } = pessoa
console.log(n, i)

/* 
* 'bemHumorada' não existe no objeto mas vai retornar o valor padrão
*  que foi atribuido a ela, no caso o 'true'.
*/
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)
