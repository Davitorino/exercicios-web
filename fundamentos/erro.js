function tratarErroELancar (erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    throw { // devolve uma mensagem para o erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUppercase() + '!!!')
    } catch (e) { // faz a captura do erro gerado
        tratarErroELancar(e)
    } finally { // sempre será executado, mesmo não tendo erro
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj) 