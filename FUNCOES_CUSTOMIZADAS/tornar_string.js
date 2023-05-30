

function tornar_string(alvo, separador) {
  let string = ''
  for (let i = 0; i < alvo.length; i++) {
    i === 0 ? string += alvo[i] : string += separador + alvo[i]
  }
  return string
}

function tornar_string_generico(alvo) {
  let string = ''
  for (let i of alvo) {
    string += i
  }
  return string
}

const array = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
console.log(tornar_string(array, '.'))
console.log(tornar_string_generico(array))
