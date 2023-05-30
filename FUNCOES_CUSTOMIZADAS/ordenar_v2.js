

function eh_maior(a, b) {
  return a > b
}

function ordenar(vetor, funcao_comparativa, reverso=false) {
  const array = Array(vetor.length)
  let atual = 0
  let contador = 0
  for (let i = 0; i < vetor.length; i++) {
    const i_atual_comparado_a_todos = i >= vetor.length - 1
    const todos_comparados = atual >= vetor.length
    funcao_comparativa(vetor[atual], vetor[i]) ? contador++ : null
    if (i_atual_comparado_a_todos) {
      array[contador] = vetor[atual]
      i = -1
      atual++
      contador = 0
    }
    if (todos_comparados) {
      break
    }
  }
  if (reverso) {
    const array_inverso = []
    for (let i = array.length - 1; i >= 0; i--) {
      array_inverso.push(array[i])
    }
    return array_inverso
  }
  return array
}

const n = [11, 3, 2, 7, 5]
console.log(ordenar(n, eh_maior))
console.log(ordenar(n, eh_maior, true))
console.log(ordenar('python', eh_maior))
