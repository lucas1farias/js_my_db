

import { question } from "readline-sync"

function n_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function tamanho_colecao(colecao) {
  let contador = 0
  for (let i of colecao) {
    contador++
  }
  return contador
}

function entrada_num(txt) {
  return Number(question(txt))
}

function embaralhar(colecao, a) {
  let motor = 0
  while (motor < tamanho_colecao(colecao)) {
    let pos_inicial = colecao[a]
    let i = n_aleatorio(0, tamanho_colecao(colecao))
    colecao[a] = colecao[i]
    colecao[i] = pos_inicial
    motor++
  }
  return colecao
}

function fatiar(colecao, min, max, eh_array=false) {
  if (!eh_array) {
    let string = ''
    for (let i = min; i <= max; i++) {
      string += colecao[i]
    }
    return string
  }
  else {
    const array = []
    let array_i = 0
    for (let i = min; i <= max; i++) {
      array[array_i] = colecao[i]
      array_i++
    }
    return array
  }
  
}

function string_numerica_p_lista(criterio, colecao, separador) {
  const array = []
  let pos = 0
  let localizador = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (colecao[i] === separador) {
      array[pos] = Number(criterio(colecao, localizador, i - 1))
      localizador = i + 1
      pos++
    }
  }
  return array
}

const a = '1,2,10,10.1'
console.log(string_numerica_p_lista(fatiar, a + ',', ','))
