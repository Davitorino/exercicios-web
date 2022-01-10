const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// Usado para evitar muitas concatenações
const template = `
Olá ${nome}! eu ${nome} tenho que ${nome}`

console.log(concatenacao, template)

//Podem ser usadas expressões
console.log(`1 + 1 = ${1 + 1}`)
console.log(`Olá ${nome}! eu ${nome} tenho que ${nome}`)