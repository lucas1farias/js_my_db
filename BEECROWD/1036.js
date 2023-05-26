

/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. 
Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, 
caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". 
Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, 
com uma mensagem correspondente conforme exemplo abaixo. 
Imprima sempre o final de linha após cada mensagem.

Exemplos de Entrada	Exemplos de Saída
10.0 20.1 5.1       R1 = -0.29788  R2 = -1.71212
0.0 20.0 5.0        Impossivel calcular

10.0 20.1 5.1  ... R1 = -0.29788 ... R2 = -1.71212
0.0 20.0 5.0   ... Impossivel calcular
10.3 203.0 5.0 ... R1 = -0.02466 ... R2 = -19.68408
10.0 3.0 5.0   ... Impossivel calcular
*/

import { question } from "readline-sync"

var lines = question().split('\n')

function main() {
  let entrada = lines[0].split(' ')
  const num_a = Number(entrada[0])
  const num_b = Number(entrada[1])
  const num_c = Number(entrada[2])
  
  const rotulos = 'R1 R2'.split(' ')
  const calculo = bhaskara(num_a, num_b, num_c)
  const relatorio = verificar_se_positivo(calculo.x1) && verificar_se_positivo(calculo.x2)
  const resultado = `${decimal(calculo.x2, 5)} ${decimal(calculo.x1, 5)}`.split(' ')
  const equals = ' = '
  
  let resultado_formatado = ''
  for (let motor = 0; motor < resultado.length; motor++) {
    if (relatorio) {
      resultado_formatado = rotulos[motor] + equals + -resultado[motor]
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
  
  return {
    'x1': x_one,
    'x2': x_two
  }
}

function decimal(n, casas) {
  return n.toFixed(casas)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function msg_tratamento(msg) {
  console.log(msg)
}

function verificar_se_positivo(n) {
  return n > 0
}

main()
