function Pessoa () {
    this.idade = 0

    // this com arrow function não varia
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
console.log(Pessoa)