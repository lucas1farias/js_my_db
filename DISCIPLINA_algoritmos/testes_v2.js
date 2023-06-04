

function tamanho_colecao(colecao) {
  let contador = 0
  for (let i of colecao) {
    contador++
  }
  return contador
}

function criterio_eh_multiplo(indice, multiplo) {
  const array = []
  let array_indice = 0
  // Para "indice" positivo
  if (indice > 0) {
    for (let i = 1; i <= indice; i++) {
      array[array_indice] = multiplo * i
      array_indice++
    }
  }
  // Para "indice" negativo
  // Se não for "-i", os valores (- * -) se tornam positivos, nunca achando o múltiplo negativo
  else if (indice < 0) {
    for (let i = indice; i < 0; i++) {
      array[array_indice] = multiplo * -i
      array_indice++
    }
  }
  
  for (let i = 0; i < tamanho_colecao(array); i++) {
    if (array[i] === indice) {
      return true
    }
  }
  return false
}

function filtrar_v2(criterio, colecao, extra) {
  const array = []
  let indice = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (criterio(colecao[i], extra)) {
      array[indice] = colecao[i]
      indice++
    }
  }
  return array
}

const a = [2, 4, 6, 7]
console.log(filtrar_v2(criterio_eh_multiplo, a, 2))
console.log()