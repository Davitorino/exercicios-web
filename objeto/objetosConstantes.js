// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'} -gera erro

// Congela o objeto, não pondendo ter seus valores alterados
Object.freeze(pessoa)

pessoa.nome = 'Ana' // vai ser 'ignorado'
pessoa.end = 'Rua ABC' // também vai
delete pessoa.nome // também vai

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) // cria um objeto constante
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)