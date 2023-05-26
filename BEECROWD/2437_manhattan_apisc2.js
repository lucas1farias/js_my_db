

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

function main() {
  const coordenadas = cada_indice_inteiro(tornar_lista(lines.shift(), ' '))
  const distancia = calculo_manhattan(coordenadas[0], coordenadas[1], coordenadas[2], coordenadas[3])
  console.log(distancia)
}

function tornar_lista(alvo, separador) {
  return alvo.split(separador)
}

function cada_indice_inteiro(alvo) {
  let nova_lista = []
  for (let i = 0; i < alvo.length; i++) {
    nova_lista.push(parseInt(alvo[i]))
  }
  return nova_lista
}

function calculo_manhattan(xref, yref, xfim, yfim) {
  return Math.sqrt((xfim - xref) ** 2) + Math.sqrt((yfim - yref) ** 2)
}

main()
