// Break funciona para switch, while e for, já o Continue só para for e while
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
        /* 
        * O comando break não age em cima de uma estrutura de controle if,
        * ele vai procurar o bloco for, switch ou while mas próximo e agir
        * em cima dele.
        */
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
        /* 
        * O comando break não age em cima de uma estrutura de controle if,
        * ele vai procurar o bloco for ou while mas próximo e agir em cima
        * dele.
        */
    }
    console.log(`${y} = ${nums[y]}`)
}

/*
* O comando Break quebra a repetição e sai do laço, enquanto o comando
* Continue só pula a repetição da condição declarada.
*/

// 'externo' é o rótulo da estrutura de controle
externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')