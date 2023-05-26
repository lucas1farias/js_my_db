

/*
2
3
portugues
chines
portugues
2
espanhol
espanhol

3
[portugues, chines, portugues]
2
[espanhol, espanhol]
*/

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

function main() {
  const qtd_testes = parseInt(lines.shift())
  let motor = 0
  
  while (motor < qtd_testes) {
    const qtd_pessoas = parseInt(lines.shift())
    
    const linguas = criar_lista(lines, qtd_pessoas)

    const lingua_usada = lingua_preferencial(linguas, 'ingles')
    exibir(lingua_usada)
    
    motor++
  }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function criar_lista(alvo, parada) {
  let lista = []
  for (let i = 0; i < parada; i++) {
    lista.push(alvo.shift())
  }
  return lista
}

function lingua_preferencial(iteravel, lingua_padrao) {
  let inicio = 0
  let lingua = 0
  let lingua_nome = ''
  
  for (let i = 0; i < iteravel.length; i++) {
    if (iteravel[inicio] == iteravel[i]) {
      lingua++
      lingua_nome = iteravel[i]
    } 
    else {
      lingua_nome = iteravel[i]
    }
  }
  return lingua == iteravel.length ? lingua_nome : lingua_padrao
}

main()
