// 1)
function operacoes (num1, num2) {
    console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2 )
}

operacoes(1, 2)

// 2)
function triangulos (l1, l2, l3) {
    if ( l1 === l2 && l2 === l3) {
        return 'Equilátero'
    } else if (l1 !== l2 && l2 !== l3 && l1 !== l3) {
        return 'Escaleno'
    } else {
        return 'Isóceles'
    }
}

console.log(triangulos(1, 1, 1))
console.log(triangulos(1, 2, 3))
console.log(triangulos(1, 2, 2))

// 3)
function exponenciacao(base, expoente) {
    return base ** expoente
}

console.log(exponenciacao(2, 2))

// 4)
function divisao (dividendo, divisor) {
    console.log(dividendo / divisor)
    console.log(dividendo % divisor)
}

divisao(2, 1)

// 5)
function dinheiroCerto (dinheiro) {
    return `R$${dinheiro.toFixed(2).replace('.',',')}`
}
const valor = 0.1 + 0.2
console.log(dinheiroCerto(valor))

// 6)
function jurosSimples (capitalInicial, taxa, tempo) {
    const juros = capitalInicial * taxa * tempo
    console.log((capitalInicial + juros).toFixed(2)) 
}

function jurosComposto (capitalInicial, taxa, tempo) {
    const montante = capitalInicial * ((1 + taxa) ** tempo)
    console.log(montante.toFixed(2))
}

jurosSimples(400, 0.1, 5)
jurosComposto(400, 0.1, 5)

// 7)
function bhaskara (a, b, c) {
    let resultados = []
    let delta = b ** 2 - 4 * a * c
    let result1, result2
    if (delta < 0) {
        console.log('Delta é negativo.')
    } else {
        result1 = (-b + Math.sqrt(delta)) / (2 * a)
        result2 = (-b - Math.sqrt(delta)) / (2 * a)
        resultados.push(result1, result2)
        console.log(resultados)
    }
}

bhaskara(2, -8, 52)

// 8)
function jogos (pontuacoes) {
    const arrPontos = pontuacoes.split(' ')
    let recordesBatidos = 0
    let recordeAtual = arrPontos[0]
    let piorPontuacao = arrPontos[0]
    let piorJogo = 1
    for (let i = 1; i < arrPontos.length; i++) {
        if (arrPontos[i] > recordeAtual) {
            recordesBatidos++
            recordeAtual = arrPontos[i]
        } else if (arrPontos[i] < piorPontuacao) {
            piorPontuacao = arrPontos[i]
            piorJogo = i + 1
        }
    }
    return [recordesBatidos, piorJogo]
}

console.log(jogos('30 40 20 4 51 25 42 38 56 0'))

// 9)
function arredondamentoDeNotas (nota) {
    let notaArredondada
    if (nota < 40) {
        console.log('Reprovado com nota ' + nota)
    } else {
        if (((Math.ceil(nota / 5)) * 5) - nota < 4) {
            notaArredondada = (Math.ceil(nota / 5)) * 5
            console.log('Aprovado com nota ' + notaArredondada)
        } else {
            console.log('Aprovado com nota ' + nota)
        }
    }
}

arredondamentoDeNotas(38)

// 10)
function divisivelPor3 (num) {
    return (num % 3 === 0) ? true : false
}

console.log(divisivelPor3(3))


