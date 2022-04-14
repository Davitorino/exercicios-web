const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(res => {
  const funcionarios = res.data
  const chinesas = funcionarios.filter(f => (
    f.pais === 'China' && f.genero == 'F'
  ))
  const menorSalario =  chinesas.reduce((acc, crr) => (
    acc.salario > crr.salario ? crr : acc
  ))
  console.log(menorSalario)
})