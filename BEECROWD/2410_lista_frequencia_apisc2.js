

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n')

function main() {
  const n_alunos = parseInt(lines.shift())
  const numeros_da_lista = capturar_frequencias(lines, n_alunos)
  const numeros_nao_repetidos = filtrar_unicos(numeros_da_lista)
    
  console.log(numeros_nao_repetidos)
}

function capturar_frequencias(alvo, contador) {
  let nova_lista = []
  for (let i = 0; i < contador; i++) {
    nova_lista.push(alvo.shift())
  }
  return nova_lista
}

function filtrar_unicos(iteravel) {
  let contador = 0
  const unicos = []
  
  for (let i = 0; i < iteravel.length; i++) {
    let unico = true
    
    for (let j = 0; j < unicos.length; j++) {
      if (iteravel[i] === unicos[j]) {
        unico = false
        break
      }
    }

    if (unico) {
      unicos.push(iteravel[i])
      contador++
    }
  }
  
  return contador
}

main()
