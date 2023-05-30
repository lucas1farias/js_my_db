

// ANTIGO
// function inverter(alvo) {
//   let string = ''
//   let contador = 0
//   for (let i = 0; i < alvo.length; i++) {
//     string += alvo[alvo.length - 1 - contador]
//     contador++
//   }
//   return string
// }

function inverter(alvo, eh_array=false) {
  const array = []
  let string = ''
  if (!eh_array) {
    for (let i = alvo.length - 1; i >= 0; i--) {
      string += alvo[i]
    }
    return string
  }
  else {
    for (let i = alvo.length - 1; i >= 0; i--) {
      array.push(alvo[i])
    }
    return array
  }

}

console.log(inverter('texto'))
console.log(inverter(['t', 'e', 'x', 't', 'o'], true))
