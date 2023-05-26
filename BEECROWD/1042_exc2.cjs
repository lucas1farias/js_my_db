

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const num_a = entrada(lines, 'int')
  const num_b = entrada(lines, 'int')
  const num_c = entrada(lines, 'int')
  
  const valores_posicao_origem = [num_a, num_b, num_c]
  const valores_ordenados = maior_de_tres(num_a, num_b, num_c)
  
  for (let i of valores_ordenados) {
    exibir(i)
  }

  exibir('')

  for (let i of valores_posicao_origem) {
    exibir(i)
  }
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

function comparar_dois(num_a, num_b) {
  return num_a > num_b
}

function maior_de_tres(num_a, num_b, num_c) {
  let resultado = []
  const ids = [num_a, num_b, num_c]

  const comparacoes = [
    comparar_dois(num_a, num_b),
    comparar_dois(num_a, num_c),
    comparar_dois(num_b, num_a),
    comparar_dois(num_b, num_c),
    comparar_dois(num_c, num_a),
    comparar_dois(num_c, num_b),
  ]
  
  let a = `${comparacoes[0]} ${comparacoes[1]}`
  let b = `${comparacoes[2]} ${comparacoes[3]}`
  let c = `${comparacoes[4]} ${comparacoes[5]}`

  if (a.length === 11) {
    resultado.push(num_a)
  } if (b.length === 11) {
    resultado.push(num_b)
  } if (c.length === 11) {
    resultado.push(num_c)
  }

  if (a.length === 10) {
    resultado.push(num_a)
  } if (b.length === 10) {
    resultado.push(num_b)
  } if (c.length === 10) {
    resultado.push(num_c)
  } 

  if (a.length === 9) {
    resultado.push(num_a)
  } if (b.length === 9) {
    resultado.push(num_b)
  } if (c.length === 9) {
    resultado.push(num_c)
  } 
  
  return resultado
}

main()
