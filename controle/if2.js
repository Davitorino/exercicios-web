function teste1(num) {
    if(num > 7) // só a primeira sentença de código fica associada a um if sem bloco
        console.log(num)
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ;, não usar com estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)