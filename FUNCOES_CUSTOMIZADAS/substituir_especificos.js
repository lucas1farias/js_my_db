

function substituir_repetidos(alvo, removivel, substituto, eh_array=false) {
  let string = ''
  const array = []
  if (!eh_array) {
    for (let i = 0; i < alvo.length; i++) {
      alvo[i] === removivel ? string += substituto : string += alvo[i]
    }
    return string
  }
  else {
    for (let i = 0; i < alvo.length; i++) {
      alvo[i] === removivel ? array.push(substituto) : array.push(alvo[i])
    }
    return array
  }
}

function substituir_repetidos_light(alvo, repetido, novo) {
  let string = ''
  for (let i = 0; i < alvo.length; i++) {
    alvo[i] === repetido ? string += novo : string += alvo[i]
  }
  return string
}

const string = 'J v script'
console.log(string)
console.log(substituir_repetidos(string, ' ', 'a'))
const array = [0, 1, 2, 3]
console.log(substituir_repetidos(array, 0, '=>', true))
