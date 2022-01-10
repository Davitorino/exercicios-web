let tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

let linhaEX = tabuleiro[0].length - 2
let colunaEX = tabuleiro.length - 2

for (let i = 0; i < tabuleiro.length; i++){
    for (let j = 0; j < linhaEX; j++){
        let cell = tabuleiro[i][j]
        if (cell !== 0) {
            if (cell === tabuleiro[i][j+1] && cell === tabuleiro[i][j+2]){
                console.log(`3 em linha encontrado na coordenada ${i+1}:${j+1}!!`)
            }
        }
    }
}

for (let i = 0; i < colunaEX; i++){
    for (let j = 0; j < tabuleiro[0].length; j++){
        let cell = tabuleiro[i][j]
        if (cell !== 0) {
            if (cell === tabuleiro[i+1][j] && cell === tabuleiro[i+2][j]){
                console.log(`3 em linha encontrado na coordenada ${i+1}:${j+1}!!`)
            }
        }
    }
}

for (let i = 0; i < colunaEX; i++){
    for (let j = 0; j < linhaEX; j++){
        let cell = tabuleiro[i][j]
        if (cell !== 0) {
            if (cell === tabuleiro[i+1][j+1] && cell === tabuleiro[i+2][j+2]){
                console.log(`3 em linha encontrado na coordenada ${i+1}:${j+1}!!`)
            }
        }
    }
}

for (let i = 0; i < colunaEX; i++){
    for (let j = 2; j < tabuleiro[0].length; j++){
        let cell = tabuleiro[i][j]
        if (cell !== 0) {
            if (cell === tabuleiro[i+1][j-1] && cell === tabuleiro[i+2][j-2]){
                console.log(`3 em linha encontrado na coordenada ${i+1}:${j+1}!!`)
            }
        }
    }
}