

// Reduzir dados de um array quando um critério for satisfeito
function filtrar(criterio, colecao) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao); i++) {
    if (criterio(colecao[i])) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}

function criterio_maior_que_zero_ou_um(i) {
  return i > 0 && i > 1
}

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

const rank = [1, 2, 3]
console.log(filtrar(criterio_maior_que_zero_ou_um, rank))
