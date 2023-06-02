

function esta_contido(menor, maior) {
  for (let i = 0; i <= maior.length - menor.length; i++) {
    let ok = true
    
    for (let e = 0; e < menor.length; e++) {
      if (menor[e] !== maior[i + e]) {
        ok = false
        break
      }
    }
    
    if (ok) {
      return true
    }
  }
  return false
}

const java = 'sc'
const js = 'Javascript'
console.log(esta_contido(java, js))
