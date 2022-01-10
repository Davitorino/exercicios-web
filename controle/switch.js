const imprimirResultado = function(nota) {
    switch(Math.floor(nota)) {
        case 10: // Não fazer nada no case 10, passa direto para o case 9 e o executa
        case 9:
            console.log('Quadro de Honra') // Expressão válida pro case 9 e 10
            break // Usar o break depois de cada case para não executar todas as sentenças abaixo
        case 8: case 7: // Mesma funcionalidade do case 9 e 10 só que na mesma linha
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // Para valores inválidos
            console.log('Nota inválida') // Não precisa usar break no último
    }
    console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)