

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function diferentes(colecao) {
  const array = []
  let array_i = 0
  for (let e = 0; e < len(colecao); e++) {
    let dif = true
    for (let i = 0; i < e; i++) {
      if (colecao[i] === colecao[e]) {
        dif = false
        break
      }
    }
    if (dif) {
      array[array_i] = colecao[e]
      array_i++
    }
  }
  return array
}

const a = [3, 2, 3, 1]
const b = ['0',  '5', '12', '41', '7', '5', '41']

console.log(diferentes(a))
console.log(diferentes(b))
