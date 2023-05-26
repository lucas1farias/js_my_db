

/*
2 3 5  (quantidade p/ fazer um bolo)
4 6 10 (2) bolos
4 6 9  (1) bolos (por causa de 9/5 < 2)
*/

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

function main() {
    const ingredientes = cada_indice_inteiro(tornar_lista(lines.shift(), ' '))
    const qtd_bolos = monitorar_ingredientes(ingredientes[0], ingredientes[1], ingredientes[2])
    
    exibir(qtd_bolos)
}

function exibir(conteudo) {
    console.log(conteudo)
}

function tornar_lista(alvo, separador) {
    return alvo.split(separador)
}

function tornar_inteiro(alvo) {
  return parseInt(alvo)
}

function cada_indice_inteiro(iteravel) {
  let lista_de_inteiros = []

  for (let i = 0; i < iteravel.length; i++) {
    lista_de_inteiros.push(tornar_inteiro(iteravel[i]))
  }
  return lista_de_inteiros
}

function eh_maior_igual(alvo, ref) {
  return alvo >= ref
}

function monitorar_ingredientes(item_a, item_b, item_c) {
  const [a, b, c] = [2, 3, 5]
  let contador = 0
  
  while (eh_maior_igual(item_a, a) && eh_maior_igual(item_b, b) && eh_maior_igual(item_c, c)) {
    item_a -= a
    item_b -= b
    item_c -= c
    contador++
  }
  return contador
}

main()
