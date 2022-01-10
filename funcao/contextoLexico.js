const valor = 'Global'

function minhaFuncao () {
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao() // A função carrega consigo o local/contexto léxico onde foi definida
}

exec()