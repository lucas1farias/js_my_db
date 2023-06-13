

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador ++
  }
  return contador
}

// Antes estava <= no loop 1
function contido_com_ordem(menor, maior) {
  for (let i = 0; i < len(maior) - len(menor); i++) {
    let ok = true
    for (let e = 0; e < len(menor); e++) {
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

console.log(contido_com_ordem('java', 'javascript'))
console.log(contido_com_ordem('java.', 'javascript'))
console.log(contido_com_ordem('java ', 'javascript'))
console.log(contido_com_ordem('jaav', 'javascript'))
