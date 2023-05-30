

function diferentes(alvo) {
  const array = []
  for (let e = 0; e < alvo.length; e++) {
    let dif = true
    for (let i = 0; i < e; i++) {
      if (alvo[i] === alvo[e]) {
        dif = false
        break
      }
    }
    dif ? array.push(alvo[e]) : null
  }
  return array
}

const a = [3, 2, 3, 1]
const b = ['0',  '5', '12', '41', '7', '5', '41']

console.log(diferentes(a))
console.log(diferentes(b))
