

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
  }
  return string
}

function nova_string(colecao, separador) {
  let string = ''
  for (let i = 0; i < len(colecao); i++) {
    i === 0 ? string+= colecao[i] : string += separador + colecao[i]
  }
  return string
}

function nova_lista(funcao, colecao, separador) {
  const array = []
  let array_i = 0
  let pos = 0
  for (let i = 0; i < len(colecao); i++) {
    if (colecao[i] === separador) {
      array[array_i] = funcao(colecao, pos, i - 1)
      array_i++
      pos = i + 1
    }
  }
  return array
}

// Comum
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\r').join('').split('\n')

// Customizado
let a = nova_lista(fatiar, input + '\r', '\r')
let b = nova_string(a, '')
let lines2 = nova_lista(fatiar, b + '\n', '\n')

console.log(lines)
console.log(lines2)
