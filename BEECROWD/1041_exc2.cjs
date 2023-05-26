

/*
Exemplo de Entrada	Exemplo de Saída
4.5 -2.2            Q4
0.1 0.1             Q1
0.0 0.0             Origem
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const x = entrada(lines, 'float')
  const y = entrada(lines, 'float')
  const quadrante = obter_quadrante(x, y)
  exibir(quadrante)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function entrada(fonte, tipo) {
  if (tipo == 'str') {
    return fonte.shift()
  } else if (tipo == 'int') {
    return parseInt(fonte.shift())
  } else if (tipo == 'float') {
    return parseFloat(fonte.shift())
  } 
}

function eh_positivo(num) {
  return num > 0
}

function eh_negativo(num) {
  return num < 0
}

function eh_neutro(num) {
  return num === 0
}

function eh_diferente(num, alvo) {
  return num != alvo
}

function obter_quadrante(vx, vy) {
  let respostas = ['Q1', 'Q2', 'Q3', 'Q4', 'Origem', 'Eixo Y', 'Eixo X']
  let resultado = ''
    
  if (eh_positivo(vx) && eh_positivo(vy)) {
    resultado = respostas[0]
  } else if (eh_negativo(vx) && eh_negativo(vy)) {
    resultado = respostas[2]
  } else if (eh_positivo(vx) && (eh_negativo(vy))) {
    resultado = respostas[3]
  } else if (eh_negativo(vx) && eh_positivo(vy)) {
    resultado = respostas[1]
  } else if (eh_neutro(vx) && eh_neutro(vy)) {
    resultado = respostas[4]
  } else if (eh_neutro(vx) && eh_diferente(vy, 0)) {
    resultado = respostas[5]
  } else if (eh_diferente(vx, 0) && eh_neutro(vy)) {
    resultado = respostas[6]
  }

  return resultado
}

main()
