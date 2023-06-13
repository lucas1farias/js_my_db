

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function n_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// É preciso definir um ponto inicial (a), que pode ser qualquer índice
// Quanto mais perto do 0, mais embaralhamentos
function embaralhar(colecao, a=0) {
  let volta = 0
  while (volta < len(colecao)) {
    let pos_inicial = colecao[a]
    let i = n_aleatorio(0, len(colecao))
    colecao[a] = colecao[i]
    colecao[i] = pos_inicial
    volta++
  }
  return colecao
}

const rank = [1, 2, 3, 4, 5, 6, 7]
console.log(rank)
embaralhar(rank, 0)
console.log(rank)
