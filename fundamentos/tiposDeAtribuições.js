const a = {name: 'teste'}
console.log(a)

const b = a // Atribuição por referência
console.log(b)
b.name = 'Opa'
/* 
* Nesse tipo de atribuição, as duas constantes armazenam
* o mesmo endereço de memória, que aponta para o mesmo objeto. 
* Sendo assim, o valor dos atributos do objeto pode ser alterado
* chamando qualquer uma das constantes.
*/
console.log(a)
console.log(b)

let c = 3
let d = c // Atribuição por valor
d++
console.log(d)
console.log(c)
/* Nesse caso, por estar trabalhando com tipos primitivos, o que 
* acontece é uma cópia do valor de uma variável para outra. Sendo
* assim, cada uma das variáveis vai armazenar o seu próprio dado,
* independentemente da outra, diferente do que acontece com os 
* objetos.
*/