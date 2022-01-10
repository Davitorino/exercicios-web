const peso1 = 1.0
const peso2 = Number('2.0') // Função Number transforma qualquer dado em numérico

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Avalia se é um valor inteiro
console.log(Number.isInteger(peso2)) // e devolve um dado booleano

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Define o número de casas decimais
console.log(media.toString()) // Transforma o dado em String
console.log(media.toString(2)) // Transforma o dado em binário
console.log(typeof media)
console.log(typeof Number)