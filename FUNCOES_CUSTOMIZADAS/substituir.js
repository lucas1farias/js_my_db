

function substituir(alvo, min, max, particula) {
  let string = ''

  if (min == 0) {
    min = -1
  }
  
  for (let i = 0; i <= alvo.length - 1; i++) {
    if (i <= min) {
      string += alvo[i]
    }
    if (i >= min && i < max) {
      string += ''
    }
    if (i == max) {
      string += particula
    }
    if (i > min && i > max) {
      string += alvo[i]
    }
  }
  
  return string
}

const js = 'Javascript'
console.log(substituir(js, 0, 3, 'Python'))
