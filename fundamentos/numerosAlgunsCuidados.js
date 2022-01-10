console.log(7 / 0)  // Devolve um valor "infinity"

/* 
Pode se calcular String com number desde que a String
contenha um número
*/
console.log("10" / 2)
console.log("Show!" * 2)

// Dará um valor aproximado (imprecisão) para otimização da velocidade
console.log(0.1 + 0.7) 

// console.log(10.toString())
console.log((10.345).toFixed(2))

/*
A soma não sera feita porque o sinal de mais serve também para
concatenação, e como a String tem preferência a concatenação que será
feita ao invés da soma
*/
console.log('3' + 2)
console.log(3 + 2)