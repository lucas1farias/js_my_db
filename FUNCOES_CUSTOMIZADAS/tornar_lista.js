

function fatiar(alvo, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += alvo[i]
  }
  return string
}

function tornar_lista(alvo, separador, funcao) {
  let lista_str = []
  let a = 0
  
  for (let i = 0; i <= alvo.length - 1; i++) {
    if (alvo[i] === separador) {
      lista_str.push(funcao(alvo, a, i - 1))
      a = i + 1
    }
  }

  return lista_str
}

const alvo = 'Java_script'
const alvo_lista = tornar_lista(alvo + '_', '_', fatiar)
console.log(alvo_lista)
