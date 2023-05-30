

function novo_vetor(qtd) {
  return Array(qtd)
}

function eh_maior(a, b) {
  return a > b
}

function diferentes(alvo) {
  const array = []
  for (let e = 0; e < alvo.length; e++) {
    let dif = true
    for (let i = 0; i < e; i++) {
      if (alvo[i] === alvo[e]) {
        dif = false
        break
      }
    }
    dif ? array.push(alvo[e]) : null
  }
  return array
}

function ordenar(vetor) {
  let array = novo_vetor(vetor.length)
  let atual = 0
  let contador = 0
  
  for (let i = 0; i < vetor.length; i++) {
    const i_atual_comparado_a_todos = i >= vetor.length - 1
    const todos_comparados = atual >= vetor.length
    
    eh_maior(vetor[atual], vetor[i]) && vetor[atual] !== vetor[i] ? contador++ : null
    
    if (i_atual_comparado_a_todos) {
      // botar o valor na posição onde deveria estar, resetar e fazer o mesmo com todos
      array[contador] = vetor[atual] 
      i = -1
      atual++
      contador = 0
    }
    
    if (todos_comparados) {
      break
    }
  }
  return array
}

function inverter(alvo, eh_array=false) {
  let string = ''
  const array = []

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

const n = [11, 3, 2, 7, 5]
console.log(ordenar(diferentes(n)))
console.log(inverter(ordenar(diferentes(n)), true))
const js = 'Javascript'
console.log(ordenar(diferentes(js)))
