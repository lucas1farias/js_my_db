

// Normalmente, em filtragem, o critério a ser julgado tende a ser fixo
// Mas pode haver casos em que seja preciso uma comparação com um valor dinâmico
function filtrar_v2(criterio, colecao, extra) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao); i++) {
    if (criterio(colecao[i], extra)) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}

function criterio_eh_maior_que_n(i, n) {
  return i > n
}

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

const rank = [1, 2, 3]
console.log(filtrar_v2(criterio_eh_maior_que_n, rank, 2))
