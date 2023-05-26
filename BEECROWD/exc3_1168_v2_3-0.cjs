

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

let i = 0
let N = parseInt(lines.shift()) 

function main() {
  while (i < N) {
    const codigo = lines.shift()
    const codigos_int = mudar_tipo(codigo, 'int')
    const leds_encontrados = obter_qtd_leds(codigos_int)
    const saida = `${leds_encontrados} leds`
    exibir(saida)
    i++
  }
}

function exibir(conteudo) {
  console.log(conteudo)
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
