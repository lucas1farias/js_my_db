

/*
6 9 22 15
14 40 12 60

// function formar_triangulo(iteravel, msg, msg_erro) {
//   let ultimo_indice = iteravel[iteravel.length - 1]
//   let n_ultimo_indice = iteravel.length - 1
//   let soma = 0
  
//   for (let i = 0; i < n_ultimo_indice; i++) {
//     soma += iteravel[i]
//   }

//   soma = soma / 2
  
//   return soma >= ultimo_indice ? msg : msg_erro
// }
*/

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

function main() {
  while (lines.length != 0) {
    const varetas = lines.shift()
    
    const varestas_lista = tornar_lista(varetas, ' ')
    const varetas_lista_int = cada_indice_inteiro(varestas_lista)
    const parametro = formar_triangulo(
      varetas_lista_int[0], varetas_lista_int[1], varetas_lista_int[2], varetas_lista_int[3]
    )
    
    exibir(condicao_de_linha(parametro, 'S', 'N'))
  }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function tornar_lista(alvo, separador) {
  return alvo.split(separador)
}

function cada_indice_inteiro(iteravel) {
  let nova_lista = []
  for (let i = 0; i < iteravel.length; i++) {
    nova_lista.push(parseInt(iteravel[i]))
  }
  return nova_lista
}

function formar_triangulo(a, b, c, d) {
  if (a + b > c && b + c > a && c + a > b) {
    return true
  } else if (a + b > d && b + d > a && d + a > b) {
    return true
  } else if (a + d > c && d + c > a && c + a > d) {
    return true
  } else if (d + b > c && b + c > d && c + d > b) {
    return true
  }
}

function condicao_de_linha(alvo, msg_a, msg_b) {
  return alvo ? msg_a : msg_b
}

main()
