let valor // Sem valor atribuido, não inicializada
console.log(valor) // Por não ter valor atribuido, o valor padrão é undefined
// console.log(valor2) - Vai gerar erro por nem ter sido declarada (is not defined)

valor = null // Ausência de valor nem endereço de memória, mas foi inicializada
console.log(valor)
// console.log(valor.toString()) - Vai gerrar erro, null não tem referência para o "toString"

/* 
* Usar o null quando quiser "zerar" uma variável ou constante do tipo referência,
* e deixar o undefined somente para uso da máquina.
*/

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Não fazer isso, usar  0 ou null quando preciso
console.log(!!produto.preco)
// delete produto.preco - usado para tirar o atributo de um objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)