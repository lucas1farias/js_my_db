

/*
1 1 1
1 1 1

1 2 5
9 6 11

1 2 12
6 9 10
*/

var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\r').join('').split('\n')

function main() {
  const container_atribs = cada_indice_inteiro(lines.shift().split(' '))
  const navio_atribs = cada_indice_inteiro(lines.shift().split(' '))

  if (
    eh_maior_igual(navio_atribs[0], container_atribs[0]) &&
    eh_maior_igual(navio_atribs[1], container_atribs[1]) &&
    eh_maior_igual(navio_atribs[2], container_atribs[2]) 
  ) {
    const qtd_containers = calcular_proporcao(navio_atribs, container_atribs)
    exibir(qtd_containers)
  } else {
    exibir(0)
  }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function tornar_inteiro(alvo) {
  return parseInt(alvo)
}

function cada_indice_inteiro(iteravel) {
  lista_de_inteiros = []

  for (let i = 0; i < iteravel.length; i++) {
    if (iteravel[i] != ' ') {
      lista_de_inteiros.push(tornar_inteiro(iteravel[i]))
    }
  }

  return lista_de_inteiros
}

function eh_maior_igual(alvo, ref) {
  return alvo >= ref
}

function calculo_preciso(alvo, ref) {
  return Math.floor(alvo / ref)
}

function calcular_proporcao(alvo, ref) {
  let qtd_containers = 1
  
  for (let i = 0; i < alvo.length; i++) {
    qtd_containers *= (calculo_preciso(alvo[i], ref[i]))
  }
  return qtd_containers
}

main()
