

// FUNÇÃO 1: Cria um número flutuante maior que zero e menor que 1
// FUNÇÃO 2: Cria um "range" de números (necessita "Math.floor()")

// FUNÇÃO 1
let floatingNumber = Math.random()
console.log(floatingNumber)
console.log(floatingNumber.toFixed(2))

// FUNÇÃO 2
// Quando "Math.random" possui apenas 1 par: (min: 0) (max: inteiro - 1)
for (let i = 0; i < 10; i++) {
  let range0To5 = Math.floor(Math.random() * 6)
  console.log('=====', range0To5, '=====')
}

// Quando "Math.random" possui 2 pars: (min: valor fora) (max: valor dentro)
for (let i = 0; i < 10; i++) {
  let range1To5 = Math.floor(Math.random() * 5) + 1
  console.log('_____', range1To5, '_____')
}
