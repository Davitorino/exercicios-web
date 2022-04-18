// tagged template - processar template string dentro de função
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const aluno = 'Diego'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)