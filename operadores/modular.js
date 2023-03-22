

// FUNÇÃO 1: Verificar se valores são divisíveis
// FUNÇÃO 2: Criar loops mais lentos

// FUNÇÃO 1
console.log(`34 é divisível por 17? ${(34 % 17 === 0 ? 'sim' : 'não')}`)
console.log(`34 é divisível por 3? ${34 % 3 === 0 ? 'sim' : 'não'}`)
console.log(34 % 17)
console.log(34 % 3)

// FUNÇÃO 2
let counter = 0
let loopEnd = 0
do {
  counter++

  // Valor mínimo testado que altera a velocidade: 100.000.000
  if(counter % 100000000 === 0) {
    loopEnd++
    console.log('O código está em Javascript')
  }
  
} while(loopEnd < 3)
