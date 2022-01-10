const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice) {
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir) //chama a função imprimir para cada elemento do array
fabricantes.forEach((fabricante) => console.log(fabricante))