

function trocar_especifico(alvo, velho, novo, eh_array=false) {
  let string = ''
  const array = []
  if (!eh_array) {
    for (let i = 0; i < alvo.length; i++) {
      alvo[i] === velho ? string += novo : string += alvo[i]
    }
    return string
  }
  else {
    for (let i = 0; i < alvo.length; i++) {
      alvo[i] === velho ? array.push(novo) : array.push(alvo[i])
    }
    return array
  }
}

const string = 'Javascript'
const array = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
console.log(trocar_especifico(string, 'a', '@'))
console.log(trocar_especifico(array, 'a', '@', true))
