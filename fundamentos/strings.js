const escola = "Cod3r"

console.log(escola.charAt(4))//Retorna o caractere do índice escolhido
console.log(escola.charAt(5))//Não retorna erro, mas um espaço vazio
console.log(escola.charCodeAt(3))//Retorna o valor da tabela unicode
console.log(escola.indexOf('r'))//Retorna a posição do índice escolhido

//Retorna a String a partir do(s) índice(s) escolhido(s)
console.log(escola.substring(1))
console.log(escola.substring(0, 3))//Não inclui o valor do índice 3

//Concatena valores
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

//Troca de lugar o índice escolhido pelo valor escolhido
console.log(escola.replace(3, 'e'))

//Separa a String a partir do valor escolhido e a transforma em um array
console.log('Ana,Maria,Pedro'.split(','))