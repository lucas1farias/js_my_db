

/*
João quer montar um painel de leds contendo diversos números. 
Ele não possui muitos leds, e não tem certeza se conseguirá montar o número desejado. 
Considerando a configuração dos leds dos números abaixo, faça um algoritmo que ajude João a 
descobrir a quantidade de leds necessário para montar o valor.

Obs.: Para programadores de Javascript, recomenda-se o uso de "input.trim().split('\n')" para evitar erros conhecidos.

===== Imagem apresentada no problema =====
1234567890

Entrada
A entrada contém um inteiro N
  {{{ (1 ≤ N ≤ 1000) }}} correspondente ao {{{ número de casos de teste }}}, 
seguido de N linhas, 
  cada linha contendo um número {{{ 1 ≤ V ≤ 10 ** 100 }}} correspondente ao valor que João quer montar com os leds.

Saída
Para cada caso de teste, imprima uma linha contendo o número de leds que João precisa para montar o valor desejado, 
seguido da palavra "leds".

Ex. Entrada	Ex. Saída
3                   
115380      27 leds
2819311     29 leds
23456       25 leds           
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const entradas = lines
  const num_testes = parseInt(lines[0])
  const condicao_a = numero_entre(parseInt(num_testes), 1, 1000)

  if (condicao_a) {

    for (let i = 1; i <= num_testes; i++) {
      const [codigo] = entradas[i].split('\n').map(s => s.trim())
      const valor_codigo = numero_entre(parseInt(codigo), 1, 10 ** 100)
      
      if (valor_codigo) {
        const codigos_int = mudar_tipo(codigo, 'int')
        const leds_encontrados = obter_qtd_leds(codigos_int)
        const saida = `${leds_encontrados} leds`
        exibir(saida)
      }
    }
  }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function numero_entre(ref, min, max) {
  return ref >= min && ref <= max
}

function mudar_tipo(colecao, tipo) {
  let inteiros = []

  if (tipo === 'int') {
    for (let i = 0; i < colecao.length; i++) {
      inteiros.push(parseInt(colecao[i]))
    }
  }
  
  return inteiros
}

function range(min, max) {
  let caixa = []
  for (let i = min; i <= max; i++) {
    caixa.push(i)
  }
  return caixa
}

function obter_qtd_leds(colecao) {
  const leds = [2, 5, 5, 4, 5, 6, 3, 7, 6, 6]
  let nums = range(1, 9)
  nums.push(0)
  
  let leds_qtd = 0
  for (let i = 0; i < colecao.length; i++) {
    if (colecao[i] === nums[0]) {
      leds_qtd += 2
    } else if (colecao[i] === nums[1] || colecao[i] === nums[2] || colecao[i] === nums[4]) {
      leds_qtd += 5
    } else if (colecao[i] === nums[3]) {
      leds_qtd += 4
    } else if (colecao[i] === nums[5] || colecao[i] === nums[8] || colecao[i] === nums[9]) {
      leds_qtd += 6
    } else if (colecao[i] === nums[6]) {
      leds_qtd += 3
    } else if (colecao[i] === nums[7]) {
      leds_qtd += 7
    }
  }

  return leds_qtd
}

main()
