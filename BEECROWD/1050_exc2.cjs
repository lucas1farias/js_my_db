

/*

*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const codigo_ddd = entrada(lines, 'int')
  
  const ddd_lista = [61, 71, 11, 21, 32, 19, 27, 31]
  const ddd_cidades = [
    'Brasilia', 'Salvador', 'Sao Paulo', 'Rio de Janeiro',
    'Juiz de Fora', 'Campinas', 'Vitoria', 'Belo Horizonte'
  ]
  
  const indice_ddd = obter_ddd(ddd_lista, codigo_ddd)
  const ddd_nao_cadastrado = 'DDD nao cadastrado'
  
  if (indice_ddd != undefined) {
    exibir(ddd_cidades[indice_ddd])
  } else {
    exibir(ddd_nao_cadastrado)
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

function obter_ddd(grupo, n_alvo) {
  for (let i = 0; i < grupo.length; i++) {
    if (n_alvo === grupo[i]) {
      return i
    }
  }
}

main()
