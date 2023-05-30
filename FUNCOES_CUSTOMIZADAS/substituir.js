

function substituir_seguidos(alvo, min, max, substituto) {
  let string = ''
  min === 0 ? min = -1 : null
  for (let i = 0; i < alvo.length; i++) {
    i <= min ? string += alvo[i] : null
    i > min && i < max ? string += '' : null
    i === max ? string += substituto : null
    i > min && i > max ? string += alvo[i] : null
  }
  return string
}

const js = 'Javascript'
console.log(substituir_seguidos(js, 0, 3, 'Python'))
console.log(substituir_seguidos(js, 0, 3, ''))
console.log(substituir_seguidos(js, 2, js.length - 1, '_'))
