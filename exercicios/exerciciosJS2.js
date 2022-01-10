// 11)
function bissexto (ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 400 === 0) {
        return true
    } else if (ano % 100 === 0) {
        return false
    } else if (ano % 4 === 0) {
        return true
    } else {
        return false
    }
}

console.log(bissexto(2020))

// 12)
function fatorial (num) {
    let fatorial = 1
    if (num < 0) {
        console.log('Numero negativo!')
    } else {
        for (i = num ; i > 0; i--) {
            fatorial *= i
        }
        console.log(`O fatorial de ${num} é ${fatorial}.`)
    }
}

fatorial(4)

// OU

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))

// 13)
function diaDaSemana (dia) {
    switch (dia) {
        case 1: case 7:
            console.log('Final de Semana!')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia de Semana!')
            break
        default:
            console.log('Dia inválido.')
    }
}

diaDaSemana(4)

// 14)
function frutasDisponiveis (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos essa fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

frutasDisponiveis('kiwi')

// 15)
function compraDeAutomovel (automovel) {
    switch (automovel) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.')
    }
}

compraDeAutomovel('hatch')

// 16)
function operacoesSwitch (num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Operação inválida.'
    }
}

console.log(operacoesSwitch(2, '+', 3))

// 17)
function planoDeTrabalho (plano, salarioAtual) {
    switch (plano) {
        case 'A':
            console.log(`Seu novo salário é de R$${salarioAtual * 1.1}!`)
            break
        case 'B':
            console.log(`Seu novo salário é de R$${salarioAtual * 1.15}!`)
            break
        case 'C':
            console.log(`Seu novo salário é de R$${salarioAtual * 1.2}!`)
            break
        default:
            console.log('Plano de trabalho inválido.')
    }
}

planoDeTrabalho('B', 1000)

// 18)
function numPorExtenso (num) {
    switch (num) {
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('Número fora do intervalo.')
    }
}

numPorExtenso(0)

// 19)
function calcularVenda (codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log(`${quantidade} Cachorro quente por ${3 * quantidade} reais.`)
            break
        case 200:
            console.log(`${quantidade} Hambúrguer simples por ${4 * quantidade} reais.`)
            break
        case 300:
            console.log(`${quantidade} Cheeseburguer por ${5.5 * quantidade} reais.`)
            break
        case 400:
            console.log(`${quantidade} Bauru por ${7.5 * quantidade} reais.`)
            break
        case 500:
            console.log(`${quantidade} Refri por ${3.5 * quantidade} reais.`)
            break
        case 600:
            console.log(`${quantidade} Suco por ${2.8 * quantidade} reais.`)
            break
        default:
            console.log('Produto inválido.')
    }
}

calcularVenda(100, 2)

// 20)
function numDeNotas (valor) {
    let cont100 = 0 
    let cont50 = 0 
    let cont10 = 0 
    let cont5 = 0 
    let cont1 = 0
    while (valor > 0) {
        if (valor > 100) {
            valor -= 100
            cont100++
        } else if (valor > 50) {
            valor -= 50
            cont50++
        } else if (valor > 10) {
            valor -= 10
            cont10++
        } else if (valor > 10) {
            valor -= 5
            cont5++
        } else {
            valor -= 1
            cont1++
        }
    }
    if (cont100 > 0) {
        console.log(`${cont100} nota(s) de R$100`)
    }
    if (cont50 > 0) {
        console.log(`${cont50} nota(s) de R$50`)
    }
    if (cont10) {
        console.log(`${cont10} nota(s) de R$10`)
    }
    if (cont5) {
        console.log(`${cont5} nota(s) de R$5`)
    }
    if (cont1) {
        console.log(`${cont1} nota(s) de R$1`)
    }
}

numDeNotas(153)