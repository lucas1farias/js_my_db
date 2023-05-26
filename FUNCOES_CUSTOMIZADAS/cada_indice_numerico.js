

function eh_string_numerica(string) {
  return string >= '0' && string <= '9'
}

function cada_indice_numerico(alvo, funcao) {
  const lista = []
  let string_numerica = ''
  let decimal = false

  for (let i = 0; i < alvo.length; i++) {
    const char = alvo[i]

    if (funcao(char) || (char === '.' && !decimal)) {
      string_numerica += char
      if (char === '.') {
        decimal = true
      }
    } 
    else if (string_numerica !== '') {
      lista.push(parseFloat(string_numerica))
      string_numerica = ''
      decimal = false
    }
  }

  if (string_numerica !== '') {
    lista.push(parseFloat(string_numerica))
  }

  return lista
}

function fatiar(alvo, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += alvo[i]
  }
  return string
}

function cada_indice_numerico_v2(alvo, separador, funcao) {
  const lista = []
  let a = 0
  for (let i = 0; i <= alvo.length - 1; i++) {
    if (alvo[i] === separador) {
      lista.push(Number(funcao(alvo, a, i - 1)))
      a = i + 1
    }
  }
  return lista
}

const string_numerica = '1 1.2 1.25 10 10.100'
const string_numerica_lista_a = cada_indice_numerico(string_numerica, eh_string_numerica)
const string_numerica_lista_b = cada_indice_numerico_v2(string_numerica + ' ', ' ', fatiar)
console.log(string_numerica_lista_a)
console.log(string_numerica_lista_b)
