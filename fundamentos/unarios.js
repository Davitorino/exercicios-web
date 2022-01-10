let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

// A primeira comparação vai dar true porque o decremento num2-- só e feito depois.
console.log(++num1 === num2--)
console.log(num1 === num2)