

// Definir se número é par ou ímpar

function oddEven({number}) {
  let numberClass = number % 2 === 0
  switch(numberClass) {
    case true:
      numberClass = 'par'
      break
    case false:
      numberClass = 'ímpar'
      break
  }
  return numberClass
}

console.log(oddEven({number: 1}))
console.log(oddEven({number: 2}))
