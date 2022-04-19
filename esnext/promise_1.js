const firstIndex = elm => elm[0]
const lowerCase = letter => letter.toLowerCase()

new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(firstIndex)
  .then(firstIndex)
  .then(lowerCase)
  .then(console.log)