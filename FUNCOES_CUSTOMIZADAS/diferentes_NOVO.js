

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function contido(procurado, colecao) {
  for (let i = 0; i < len(colecao); i++) {
    if (colecao[i] === procurado) {
      return true
    }
  }
  return false
}

// Função principal (auxiliar de "contido_SEM_ORDEM")
function diferentes(colecao) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao); i++) {
    if (!contido(colecao[i], array)) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}
