

function fatiar(alvo, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += alvo[i]
  }
  return string
}

function tornar_lista(alvo, separador, funcao) {
  let array = []
  let a = 0
  for (let i = 0; i < alvo.length; i++) {
    if (alvo[i] === separador) {
      array.push(funcao(alvo, a, i - 1))
      a = i + 1
    }
  }
  return array
}

function tornar_lista_generico(alvo) {
  const array = []
  for (let i of alvo) {
    array.push(i)
  }
  return array
}

const string = 'Java_script'
console.log(tornar_lista(string + '_', '_', fatiar))
console.log(tornar_lista_generico(string))
