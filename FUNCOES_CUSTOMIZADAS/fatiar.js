

function fatiar(alvo, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += alvo[i]
  }
  return string
}

function fatiar(alvo, min, max, eh_array=false) {
  let string = ''
  const array = []
  if (!eh_array) {
    for (let i = min; i <= max; i++) {
      string += alvo[i]
    }
    return string
  }
  else {
    for (let i = min; i <= max; i++) {
      array.push(alvo[i])
    }
    return array
  }
}

const alvo = 'Javascript'
const java = fatiar(alvo, 0, 3)
const script = fatiar(alvo, 4, alvo.length - 1)
const person = fatiar(['f', 'u', 'l', 'a', 'n', 'o'], 3, 5)

console.log(java)
console.log(script)
console.log(person)
