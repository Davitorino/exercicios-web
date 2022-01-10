function Pessoa() {
    this.idade = 0

    // comumente chamada de self mas não é obrigatório
    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) 
}

new Pessoa