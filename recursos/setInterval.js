

// Criar um loop sem usar sintaxe "while" e "do while"
// Para um loop ter fim, ele precisa de 2 aspectos:
// Estar instanciado numa var
// Contar uma condição de parada no loop p/ ativar "clearInterval"

let properties = ['left', 'center', 'right']
// Cessador do loop
let counter = 0

let tester = setInterval(() => {
  counter = counter + 1
  let index = Math.floor(Math.random() * 3 - 0)
  console.log([counter, properties[index]])
  // Como parar, parada
  if(counter === 5) {
    clearInterval(tester)
  }
  // Velocidade do loop (1s = 1000)
}, 1000)
