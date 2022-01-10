function soma() {
    let soma = 0
    /* 
    * Arguments é um array interno que toda função tem, onde 
    * dentro dele é guardado todo parâmetro passado para a função.
    */
    for (let i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste')) // Vai fazer a soma númerica e depois concatenar com a String.
console.log(soma('a', 'b', 'c'))