

function inverter_txt(alvo) {
  let string = ''
  let contador = 0
  for (let i = 0; i < alvo.length; i++) {
    // console.log(`string += alvo[${alvo.length} - 1 - ${contador}]`)
    string += alvo[alvo.length - 1 - contador]
    contador++
  }
  return string
}

console.log(inverter_txt('texto'))
