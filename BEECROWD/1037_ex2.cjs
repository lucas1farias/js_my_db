

/*
Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos 
([0,25], (25,50], (50,75], (75,100]) este valor se encontra. 
Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
    [0,25]  indica valores entre 0 e 25.0000, inclusive eles.
    (25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000
    (50,75] indica valores maiores que 50 Ex: 50.0000001 até o valor 70.0000000
    (75,100] indica valores maiores que 75 Ex: 70.0000001 até o valor 100.0000000

Entrada: O arquivo de entrada contém um número com ponto flutuante qualquer.

Saída: A saída deve ser uma mensagem conforme exemplo abaixo.

Exemplo de Entrada: 25.01	 Exemplo de Saída: Intervalo (25,50]
                    25.00                    Intervalo [0,25]
                    100.00                   Intervalo (75,100]
                    -25.02                   Fora de intervalo
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
    const n = entrada(lines, 'float')
    const intervalo_n = intervalo(n)
    exibir(intervalo_n)
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

function comparar_dois(d1, d2, operador) {
    if (operador === '>') {
      return d1 > d2
    }
    else if (operador === '<') {
      return d1 < d2
    }
    else if (operador === '>=') {
      return d1 >= d2
    }
    else if (operador === '<=') {
      return d1 <= d2
    } 
    else if (operador === '!=') {
      return d1 != d2
    }
}

function intervalo(n) {
  const intervalos = '[0,25] (25,50] (50,75] (75,100]'.split(' ')
  const saida = 'Intervalo '
  let resultado = 0
  
  if (comparar_dois(n, 0, '>=') && comparar_dois(n, 25.0000, '<=')) {
    resultado = saida + intervalos[0]
  }
  else if (comparar_dois(n, 25.00001, '>=') && comparar_dois(n, 50.0000000, '<=')) {
    resultado = saida + intervalos[1]
  }
  else if (comparar_dois(n, 50.0000001, '>=') && comparar_dois(n, 70.0000000, '<=')) {
    resultado = saida + intervalos[2]
  }
  else if (comparar_dois(n, 70.0000001, '>=') && comparar_dois(n, 100.0000000, '<=')) {
    resultado = saida + intervalos[3]
  } else {
    resultado = 'Fora de intervalo'
  }
  return resultado
}

main()
