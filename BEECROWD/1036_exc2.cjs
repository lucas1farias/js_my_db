

/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. 
Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, 
caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". 
Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, 
com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

Exemplos de Entrada	Exemplos de Saída
10.0 20.1 5.1       R1 = -0.29788 R2 = -1.71212
0.0 20.0 5.0        Impossivel calcular
10.3 203.0 5.0      R1 = -0.02466 R2 = -19.68408
10.0 3.0 5.0        Impossivel calcular
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const num_a = entrada(lines, 'float')
  const num_b = entrada(lines, 'float')
  const num_c = entrada(lines, 'float')
  
  const raizes = 'R1 R2'.split(' ')
  const calculo = bhaskara(num_a, num_b, num_c)
  const relatorio = eh_positivo(calculo[0]) && eh_positivo(calculo[1])
  const resultados = [decimal(calculo[1], 5), decimal(calculo[0], 5)]
  const equals = ' = '
  
  let resultado_formatado = ''
  for (let i = 0; i < resultados.length; i++) {
    if (relatorio) {
      resultado_formatado = raizes[i] + equals + -resultados[i] // resultados deve ser negativado
      exibir(resultado_formatado)
    } else {
      msg_tratamento('Impossivel calcular')
      break
    }
  }
}

function bhaskara(a, b, c) {
  const delta = (b ** 2) - 4 * a * c

  if (b > 0) {
    b = b
  } else {
    b = -b
  }

  const divisor = 2 * a
  const raiz_delta = Math.sqrt(delta)
  const x_one = (b + raiz_delta) / divisor
  const x_two = (b - raiz_delta) / divisor
  
  return [x_one, x_two]
}

function decimal(n, casas) {
  return n.toFixed(casas)
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

function msg_tratamento(msg) {
  console.log(msg)
}

function eh_positivo(n) {
  return n > 0
}

main()