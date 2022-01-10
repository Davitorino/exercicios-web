let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//! significa negação (não), ele inverte a lógica

// Situações que retornam valor verdadeiro
console.log('os verdadeiros:')
console.log(!!3) // Número inteiros
console.log(!!-1)
console.log(!!' ') // Strings com espaço ou algum texto/caractere
console.log(!!'teste')
console.log(!![]) // Arrays vazios
console.log(!!{}) // Objetos vazios
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // Atribuições que retornam true

// Situações que retornam valor falso
console.log('os falsos:')
console.log(!!0)
console.log(!!'') // String vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Atribuições que retornam false

console.log('pra finalizar:')

// Vai retornar true se tiver algum valor verdadeiro
console.log(!!('' || null || 0 || ' '))

// Retorna o único/primeiro valor verdadeiro encontrado
console.log('' || null || 0 || 'epa')

let nome = ''
console.log(nome || "Desconhecido")