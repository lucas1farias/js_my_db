

function vetor_indefinido(qtd) {
  const array = []
  let array_i = 0
  for (let i = 0; i < qtd; i++) {
    array[array_i] = undefined
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

const vetor_vazio = vetor_indefinido(3)
const vetor_com_dados = [1, 2, 3]
console.log(vetor_vazio)
let vetor_vazio_i = 0
for (let i = 0; i < len(vetor_vazio); i++) {
  vetor_vazio[vetor_vazio_i] = vetor_com_dados[vetor_vazio_i]
  vetor_vazio_i++
}
console.log(vetor_vazio)