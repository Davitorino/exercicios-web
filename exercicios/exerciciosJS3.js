// 21)
function planoDeSaude (idade) {
    if (idade < 10) {
        return 180
    } else if (idade >= 10 && idade <= 30) {
        return 150
    } else if (idade > 30 && idade <= 60) {
        return 195
    } else if (idade > 60) {
        return 230
    } else {
        return 'Informe uma idade válida.'
    }
}

console.log(planoDeSaude(53))

// 22)
function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + 0,05)**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))

// 23)
function mediaPonderada(codigo, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1, nota2, nota3)
    notas.sort((a, b) => a < b ? 1 : -1)
    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

mediaPonderada(123, 2.8, 6, 3.5)

// 24)
function helloWorld(num) {
    let contador = 0
    while (contador < num) {
        console.log('Hello World!')
        contador++
    }
}

helloWorld(11)

// 25)
function contador(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}

contador(50)

// 26)
function pares(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

pares(100)

// 27)
function crescimento(altura1, taxa1, altura2, taxa2) {
    const criança1 = {altura: altura1, taxa: taxa1}
    const criança2 = {altura: altura2, taxa: taxa2}
    let anos = 0
    if (altura1 !== altura2) {
        let maisBaixa = (altura1 > altura2) ? criança2 : criança1
        let maisAlta = (altura1 < altura2) ? criança2 : criança1
        if (maisBaixa.taxa > maisAlta.taxa) {
            while (maisBaixa.altura <= maisAlta.altura) {
                maisBaixa.altura += maisBaixa.taxa
                anos++
            }
            console.log(`A criança mais baixa passará a mais alta em ${anos} anos!`)
        }
    }
}

crescimento(150, 2, 130, 4)

// 28)
function parEImpar(numeros) {
    let pares = 0
    let impares = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`São ${pares} pares e ${impares} impares.`)
}

parEImpar([4, 6, 11, 60, 73, 1])

// 29)
function numsNoIntervalo(array) {
    let qntDentro = 0
    let qntFora = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10 && array[i] <= 20) {
            qntDentro++
        } else {
            qntFora++
        }
    }
    console.log(`São ${qntDentro} dentro do intervalo e ${qntFora} fora dele.`)
}

numsNoIntervalo([ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21])

// 30)
function maiorEmMenor(array) {
    let maior = array[0]
    let menor = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        } else if (array[i] < menor) {
            menor = array[i]
        }
    }
    return [maior, menor]
}

console.log(maiorEmMenor([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]))