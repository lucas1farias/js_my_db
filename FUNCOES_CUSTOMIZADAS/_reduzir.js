

function reduzir(criterio, colecao, vi) {
  let acumulador = vi
  for (let i = 0; i < len(colecao); i++) {
    acumulador = criterio(colecao[i], acumulador)
  }
  return acumulador
}

function criterio_somar(i, acumulado) {
  return acumulado + i
}

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

const rank = [1, 2, 3]
console.log(reduzir(criterio_somar, rank, 0))
