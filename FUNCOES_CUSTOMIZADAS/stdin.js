

function fatiar(alvo, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += alvo[i]
  }
  return string
}

function tornar_lista(alvo, separador, funcao) {
  let lista_str = []
  let a = 0
  
  for (let i = 0; i < alvo.length; i++) {
    if (alvo[i] === separador) {
      lista_str.push(funcao(alvo, a, i - 1))
      a = i + 1
    }
  }

  return lista_str
}

function tornar_string(alvo, separador) {
  let string = ''
  
  for (let i = 0; i < alvo.length; i++) {
    // Não colocar o separador no índice inicial
    if (alvo[i] != separador && i == 0) {
      string += alvo[i]
    }
    // Colocar nos demais
    else if (alvo[i] != separador && i != 0) {
      string += separador + alvo[i]
    }
  }
  return string
}

var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\r').join('').split('\n')
var lines2 = tornar_lista(tornar_string(tornar_lista(input + '\r', '\r', fatiar), '') + '\n', '\n', fatiar)

console.log(lines)
console.log(lines2)
console.log(lines[0])
console.log(lines2[0])

/*
6 9 22 15
14 40 12 60

*/
