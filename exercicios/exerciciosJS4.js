// 31)
function numDeNegativos(array) {
    let contador = 0
    for (num of array) {
        if (num < 0) {
            contador++
        }
    }
    return contador
}

console.log(numDeNegativos([10, 5, -7, 3, -1, 3, -11, -20, 6, 9]))

// 32)
function mediaArray (array) {
    let soma = 0
    for (num of array) {
        soma += num
    }
    return soma/array.length
}

console.log(mediaArray([1, 2, 3, 4, 5]))

// 33)
let arrayInteiros = [1, 2, 3, 4]
let arrayStrings = ['a', 'b', 'c', 'd']
let arrayDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar() {
    let resultado = []
    for (array of arguments) {
        resultado = resultado.concat(array)
    }
    return resultado
}

console.log(concatenar(arrayInteiros, arrayStrings))
console.log(concatenar(arrayStrings, arrayDouble))

// 34)
function contem (string1, string2) {
    const menorString = (string1.length > string2.length ? string2.toLowerCase() : string1.toLowerCase())
    const maiorString = (string2.length < string1.length ? string1.toLowerCase() : string2.toLowerCase())
    let resultado = true
    for (let letra of menorString) {
        if (maiorString.includes(letra) == false) {
            resultado = false
            break
        }
    }
    return resultado
}

console.log(contem ('abd', 'ceba'))

// 35)
let arrayPilha = [1, 2, 3, 4, 5]
let arrayAdiciona = [6, 7, 8, 9, 10]
function adiciona(array) {
    for (num of array) {
        console.log(num)
    }
    arrayPilha = arrayPilha.concat(array)
    console.log(arrayPilha, array)
}

adiciona(arrayAdiciona)

// 36)
function calculo1(array, num) {
    let resultado = []
    for (valor of array) {
        resultado.push(valor * num)
    }
    return resultado
}

function calculo(array, num) {
    let resultado = []
    if (num > 5) {
        for (valor of array) {
            resultado.push(valor * num)
        }
    }
    return resultado
}

// 37)
function progressaoAritmetica (num, a1, razao) {
    let somaTotal = 0
    let progressao = a1
    for (let i = 0; i < num; i++) {
        console.log(progressao)
        somaTotal += progressao
        progressao += razao
    }
    console.log(somaTotal)
}

function progressaoGeometrica (num, a1, razao) {
    let somaTotal = 0
    let progressao = a1
    for (let i = 0; i < num; i++) {
        console.log(progressao)
        somaTotal += progressao
        progressao *= razao
    }
    console.log(somaTotal)
}

progressaoAritmetica(10, 10, 15)
progressaoGeometrica(10, 5, 3)

function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)

// 38)
function imparesApenas (inicio = 0, fim = 100) {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio]
    }
    console.log(inicio, fim)
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

imparesApenas(3, 10)
imparesApenas(12, 4)

// 39)
function trocaVetor (vetorA, vetorB) {
    for (let i = 0; i < vetorA.length; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
    }
    console.log(vetorA, vetorB)
}

trocaVetor([1, 2, 3], [4, 5, 6])

// 40)
function conceitoNotas(array) {
    let conceitos = []
    array.forEach(function (nota, index) {
        if (nota >= 0 && nota < 5) {
            conceitos.push('D')
        } else if (nota >= 5 && nota < 7) {
            conceitos.push('B')
        } else if (nota >= 7 && nota < 9) {
            conceitos.push('B')
        } else if (nota >= 9 && nota <= 10) {
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida.')
        }
    })
    return conceitos
}

console.log(conceitoNotas([10, 13, 9, 8.2, 2.5, 7.7, 6.8]))