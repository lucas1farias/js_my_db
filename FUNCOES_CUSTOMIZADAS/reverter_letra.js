

function fatiar(alvo, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += alvo[i]
  }
  return string
}

function tornar_lista(alvo, separador, funcao) {
  let lista_str = []
  let a = 0
  
  for (let i = 0; i < alvo.length; i++) {
    if (alvo[i] === separador) {
      lista_str.push(funcao(alvo, a, i - 1))
      a = i + 1
    }
  }

  return lista_str
}

function obter_codigo(char) {
  return char.charCodeAt(0)
}

function obter_letra(codigo) {
  return String.fromCharCode(codigo)
}

// Requerimentos: obter_código, obter_letra (outras funções aqui são apenas complementos)
function reverter_letra(char, tipo) {
  return tipo == 0 ? obter_letra(obter_codigo(char) - 32) : obter_letra(obter_codigo(char) + 32)
}

function repetir_funcao(alvo, funcao) {
  let array = []
  for (let i = 0; i < alvo.length; i++) {
    array.push(funcao(alvo[i], 0))
  }
  return array
}

const letras = tornar_lista('a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z' + '.', '.', fatiar)
const letras_maiusculas = repetir_funcao(letras, reverter_letra)
console.log(letras_maiusculas)
