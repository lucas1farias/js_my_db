

/*

*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const salario = entrada(lines, 'float')
  
  const novo_salario = reajuste(salario)
  const topicos = ['Novo salario: ', 'Reajuste ganho: ', 'Em percentual: ']
  
  exibir(topicos[0] + decimal(novo_salario[2], 2))
  exibir(topicos[1] + decimal(novo_salario[1], 2))
  exibir(topicos[2] + novo_salario[0], 2)
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

function numero_entre(ref, min, max) {
  return ref >= min && ref <= max
} 

function decimal(num, casas) {
  return parseFloat(num).toFixed(casas)
}

function reajuste(salario) {
  let indice = []
  let novo_salario = 0
  let reajuste = 0
  
  if (numero_entre(salario, 0, 400.00)) {
    indice.push('15 %')
    reajuste = porcentagem(salario, 15)
    novo_salario = salario + reajuste
  }
  else if (numero_entre(salario, 400.01, 800.00)) {
    indice.push('12 %')
    reajuste = porcentagem(salario, 12)
    novo_salario = salario + reajuste
  }
  else if (numero_entre(salario, 800.01, 1200.00)) {
    indice.push('10 %')
    reajuste = porcentagem(salario, 10)
    novo_salario = salario + reajuste
  }
  else if (numero_entre(salario, 1200.01, 2000.00)) {
    indice.push('7 %')
    reajuste = porcentagem(salario, 7)
    novo_salario = salario + reajuste
  } else if (salario > 2000.00) {
    indice.push('4 %')
    reajuste = porcentagem(salario, 4)
    novo_salario = salario + reajuste
  }
  indice.push(reajuste)
  indice.push(novo_salario)
  return indice
}

function porcentagem(v, taxa) {
  return v * (taxa / 100)
}

main()
