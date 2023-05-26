

function diferentes(alvo, dados=true) {
  let contador = 0
  let diferentes = []

  for (let externo = 0; externo < alvo.length; externo++) {
    let diferente = true

    // Onde se acha os números !=
    for (let interno = 0; interno < externo; interno++) {
      if (alvo[interno] === alvo[externo]) {
        // console.log(alvo[interno], '===', alvo[externo])
        diferente = false
        break
      }
    }

    if (diferente) {
      contador++
      diferentes.push(alvo[externo])
    }
  }
  
  return dados ? diferentes : contador
}

const ex_a = diferentes([3, 2, 3, 1], false)
const ex_b = diferentes(['0',  '5', '12', '41', '7', '5', '41'], false)
const ex_c = diferentes([3, 2, 3, 1])
const ex_d = diferentes(['0',  '5', '12', '41', '7', '5', '41'])

console.log(ex_a)
console.log(ex_b)
console.log(ex_c)
console.log(ex_d)
