

/*
Leia um valor inteiro entre 1 e 12, inclusive. 
Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, 
em inglês, com a primeira letra maiúscula.

Entrada
A entrada contém um único valor inteiro.

Saída
Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.

Exemplo de Entrada	Exemplo de Saída
4                   April
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const mes = entrada(lines, 'int')

  const meses = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]

  const indice_mes = obter_mes(mes, meses)
  const mes_identificado = meses[indice_mes - 1]
  
  exibir(mes_identificado)
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

function obter_mes(id_mes, colecao) {
  for (let i = 0; i < colecao.length + 1; i++) {
    if (id_mes == i) {
      return i
    }
  }
}

main()