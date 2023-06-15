

// Mapear que recria uma coleção passada como parâmetro
// Outra opção: não usar um array vazio e alterar a própria coleção e retorná-la
function mapear(criterio, colecao) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao); i++) {
    array[array_i] = criterio(colecao[i])
    array_i++
  }
  return array
}

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function criterio_incrementar(i) {
  return i = i + 1
}

const rank = [1, 2, 3]
console.log(mapear(criterio_incrementar, rank))
