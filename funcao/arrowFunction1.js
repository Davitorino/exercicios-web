let dobro = function (a) {
    return 2 * a
}

/*
* função arrow sempre é anônima, tendo que ser armazenada em 
* uma variável ou constante para ser chamar depois.
*/ 
dobro = (a) => {
    return 2 * a
} 

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())