function waitFor(time = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve()
    }, time)
  })
}

// waitFor()
//   .then(() => console.log('Executando promise...'))
//   .then(waitFor)
//   .then(() => console.log('Executando promise...'))
//   .then(waitFor)
//   .then(() => console.log('Executando promise...'))
//   .then(waitFor)

async function executar() {
  await waitFor(1500)
  console.log('Async/Await 1...')
  
  await waitFor(1500)
  console.log('Async/Await 2...')

  await waitFor(1500)
  console.log('Async/Await 3...')
}

executar()