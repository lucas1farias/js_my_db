

// Usado no BeeCrowd em casas de teste: int = parada
// Com base no (int) remove do "stdin" a qtd. de linhas em (int)
function criar_lista(alvo, parada) {
  let lista = []
  for (let i = 0; i < parada; i++) {
    lista.push(alvo.shift())
  }
  return lista
}

// ========== EXEMPLO ==========
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
  const qtd_testes = parseInt(lines.shift()) // Fora do loop
  let motor = 0
  
  
  while (motor < qtd_testes) {
    const qtd_pessoas = parseInt(lines.shift())
    
    const linguas = criar_lista(lines, qtd_pessoas) // Função usada

    const lingua_usada = lingua_preferencial(linguas, 'ingles')
    exibir(lingua_usada)
    
    motor++
  }
}
