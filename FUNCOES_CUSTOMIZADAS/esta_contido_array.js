

function esta_contido(menor, maior) {
  let igual = 0
  let c_menor = 0
  for (let i = 0; i <= maior.length; i++) {
    const fim_maior = i >= maior.length
    const fim_menor = c_menor >= menor.length
    const similaridade = menor[c_menor] === maior[i]
    if (fim_maior) {
      i = 0
      c_menor++
    }
    if (similaridade) {
      igual++
    }
    if (fim_menor) {
      break
    }
  }
  return igual >= menor.length ? true : false
}

// serve para arrays numéricos
// só serve para strings se for verificar caracteres fora de sequência
// ex: "la" está em "lucasf" -> true ("la" em sequência = false)
function esta_contido(alvo, ref) {
  const array = []
  let c_menor = 0
  let igual = 0
  for (let i = 0; i <= ref.length; i++) {
    const fim_menor = c_menor >= alvo.length
    const fim_maior = i >= ref.length
    const similaridade = alvo[c_menor] === ref[i]
    if (fim_maior) {
      i = -1
      c_menor++
    }
    if (similaridade) {
      igual++
      array.push(ref[i])
    }
    if (fim_menor) {
      break
    }
  }
  return {
    comparados: `${alvo} vs ${ref}`,
    similaridade: igual,
    prova: array,
    resultado: igual >= alvo.length ? true : false
  }
}

// const a = [2, 3, 5, 7]
// const b = [2, 3, 7]
// const c = [2, 3, 5, 7]
// const d = [2, 3, 5, 7, 11]

// console.log(`B está contido no A? ${esta_contido(b, a)}`)
// console.log(`C está contido no A? ${esta_contido(c, a)}`)
// console.log(`D está contido no A? ${esta_contido(d, a)}`)
const a = [2, 3, 5, 7, 11]
const b = [2]
const c = [2, 3]
const d = [2, 3, 5]
const e = [2, 3, 5, 7]
const f = [2, 3, 5, 7, 11]
const g = [2, 3, 5, 7, 11, 13]

console.log(
  [
    esta_contido(b, a), esta_contido(c, a), esta_contido(d, a),
    esta_contido(e, a), esta_contido(f, a), esta_contido(g, a),
  ]
)
