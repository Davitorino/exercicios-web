const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // Retorna o tamanho do array

valores.push({id: 3}, false, null, 'teste') // Adiciona novos valores ao array
console.log(valores)

console.log(valores.pop()) // Retorna o último valor do array e exclue ele
delete valores[0] // Exclue o valor no array do índice escolhido
console.log(valores)

console.log(typeof valores)
