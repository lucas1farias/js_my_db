

// 3 funções que permitem o funcionamento de "contido_sem_ordem"
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

// Essa função é aplicada a maior coleção (quando ela possui dados repetidos)
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

// Função principal
function contido_sem_ordem(colecao_menor, colecao_maior) {
  let contador = 0
  for (let e = 0; e < len(colecao_maior); e++) {
    for (let i = 0; i < len(colecao_menor); i++) {
      colecao_menor[i] === colecao_maior[e] ? contador++ : null
      // console.log(colecao_menor[i], colecao_maior[e], colecao_menor[i] == colecao_maior[e])
    }
  }
  return contador == len(colecao_menor) ? true : false
}

const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
const alfabeto_e_numeros = 'abcdefghijklmnopqrstuvwxyz0123456789'
console.log(contido_sem_ordem('ba', diferentes('banana')))
console.log(contido_sem_ordem('ban', diferentes('banana')))
console.log(contido_sem_ordem('bax', diferentes('banana')))
console.log(contido_sem_ordem('str', diferentes('sortear')))
console.log(contido_sem_ordem('strj', diferentes('sortear')))
console.log(contido_sem_ordem(alfabeto, diferentes(alfabeto_e_numeros)))
console.log(contido_sem_ordem(alfabeto + '.', diferentes(alfabeto_e_numeros)))