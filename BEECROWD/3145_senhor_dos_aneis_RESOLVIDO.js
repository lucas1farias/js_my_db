

/*
dividir a distância em kilômetros de Vila dos Hobbits até a Montanha Solitária 
pela quantidade de pessoas que vão na aventura

a quantidade de pessoas é o número de anões + 2

N = quantidade de anões que Gandalf conseguiu para ajudar na aventura
X = distância de Vila dos Hobbits até a Montanha Solitária.

2 4
13 1000

1.00
66.67
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

function main() {
    const dados = cada_i_inteiro(tornar_lista(lines.shift() + ' ', ' ', fatiar))
    const calculo = decimal(obter_distancia(dados[1], dados[0] + 2), 2)
    exibir(calculo)
}

function exibir(txt) {
  console.log(txt)
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

function obter_distancia(dist, qtd) {
  return dist / qtd
}

function decimal(num, casas) {
  return parseFloat(num).toFixed(casas)
}

main()
