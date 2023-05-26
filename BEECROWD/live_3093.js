

/*
3
AJ23456QK
AJ23456Q
QJJJJ754AK
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');
console.log('========== STDIN ==========')
console.log(lines)

function main() {
  
  while (lines.length != 0) {
    let n_testes = parseInt(lines.shift())
    console.log('========== TESTES ==========', n_testes)
    const jogadas = criar_lista(lines, n_testes)
    iterar_sobre(jogadas, vai_ganhar_pontos, 'Aaah muleke', 'Ooo raca viu')
  }
}

function exibir(txt) {
  console.log(txt)
}

function criar_lista(alvo, parada) {
  let array = []
  for (let i = 0; i < parada; i++) {
      array.push(alvo.shift())
  }
  return array
}

function iterar_sobre(alvo, funcao, msg_sucesso, msg_falha) {
  for (let i = 0; i < alvo.length; i++) {
    exibir(`${funcao(alvo[i]) ? msg_sucesso : msg_falha}`)
  }
}

function vai_ganhar_pontos(colecao) {
  let contador = 0
  for (let i = 0; i < colecao.length; i++) {
    if (colecao[i] === 'Q') {
      contador++
    } else if (colecao[i] === 'J') {
      contador++
    } else if (colecao[i] === 'K') {
      contador++
    } else if (colecao[i] === 'A') {
      contador++
    }
  }
  console.log(colecao)
  return contador >= 4 ? true : false
}

main()
