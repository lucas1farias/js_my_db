

function esta_contido(menor, maior, msg=true, msg_erro=false) {
  let similaridades = 0
  let c_menor = 0

  for (let i = 0; i <= maior.length; i++) {
    // Quando o maior for completamente percorrido, resetar ele e ++ o contador do menor
    if (i >= maior.length) {
      i = 0
      c_menor++
    }
    // Batendo um valor de menor com o maior, é encontrada uma similaridade
    if (menor[c_menor] == maior[i]) {
      similaridades++
    }
    // Todos os índices do menor foram percorridos, então encerra-se o procedimento
    if (c_menor == menor.length) {
      break
    }
  }
  return similaridades >= menor.length ? msg : msg_erro
}

const a = [2, 3, 5, 7]
const b = [2, 3, 7]
const c = [2, 3, 5, 7]
const d = [2, 3, 5, 7, 11]

console.log(`B está contido no A? ${esta_contido(b, a,)}`)
console.log(`C está contido no A? ${esta_contido(c, a,)}`)
console.log(`D está contido no A? ${esta_contido(d, a,)}`)
