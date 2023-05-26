

var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\r').join('').split('\n')

function main() {
  const inteiros = cada_i_inteiro(tornar_lista(lines.shift() + ' ', ' ', fatiar))
  const maior_entre_dois = maior(inteiros[0], inteiros[1])
  const maior_entre_tres = maior(maior_entre_dois, inteiros[2])
  const saida = `${maior_entre_tres} eh o maior`
  console.log(saida)
}

function fatiar(alvo, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += alvo[i]
  }
  return string
}

function tornar_lista(alvo, separador, funcao) {
  let lista = []
  let a = 0
  for (let i = 0; i <= alvo.length; i++) {
    if (alvo[i] === separador) {
      lista.push(funcao(alvo, a, i - 1))
      a = i + 1
    }
  }
  return lista
}

function cada_i_inteiro(alvo) {
  let lista = []
  for (let i = 0; i <= alvo.length - 1; i++) {
    lista.push(parseInt(alvo[i]))
  }
  return lista
}

function maior(a, b) {
  return (a + b + Math.abs(a - b)) / 2
}

main()
