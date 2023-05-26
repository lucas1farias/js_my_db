

/*
400.00

Novo salario: 460.00
Reajuste ganho: 60.00
Em percentual: 15 %

800.01

Novo salario: 880.01
Reajuste ganho: 80.00
Em percentual: 10 %

2000.00

Novo salario: 2140.00
Reajuste ganho: 140.00
Em percentual: 7 %
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const h_inicio = entrada(lines, 'int')
  const h_fim = entrada(lines, 'int')
  const h_final = calcular_tempo_simples(h_inicio, h_fim)
  const saida = `O JOGO DUROU ${h_final} HORA(S)`
  exibir(saida)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function entrada(fonte, tipo) {
  if (tipo == 'str') {
    return fonte.shift().trim()
  } else if (tipo == 'int') {
    return parseInt(fonte.shift())
  } else if (tipo == 'float') {
    return parseFloat(fonte.shift())
  } 
}

function calcular_tempo_simples(h_inicio, h_fim) {
  const dia_inteiro = 24
  let hora_contada = 0

  if (h_inicio > h_fim) {
    hora_contada = dia_inteiro - h_inicio + h_fim
  } if (h_inicio === h_fim) {
    hora_contada = 24
  } if (h_fim > h_inicio) {
    hora_contada = h_fim - h_inicio
  }
  return hora_contada
}

main()
