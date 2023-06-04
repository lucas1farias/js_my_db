

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

function indice_especifico(colecao, i) {
  return colecao[i]
}

function realocar(colecao, b, a) {
  const pos_inicial = colecao[a]
  colecao[a] = colecao[b]
  colecao[b] = pos_inicial
}

function particionar(criterio, colecao, esquerda, direita) {
  const ref = colecao[direita]
  let menor_pos_nova = esquerda - 1
  for (let menor_pos_antiga = esquerda; menor_pos_antiga < direita; menor_pos_antiga++) {
    if (criterio(colecao[menor_pos_antiga], ref)) {
      menor_pos_nova++
      realocar(colecao, menor_pos_antiga, menor_pos_nova)
    }
  }
  realocar(colecao, direita, menor_pos_nova + 1)
  return menor_pos_nova + 1
}

function ordenar(criterio, colecao, esquerda, direita) {
  if (esquerda < direita) {
    const ref_anterior = particionar(criterio, colecao, esquerda, direita)
    ordenar(criterio, colecao, esquerda, ref_anterior - 1)
    ordenar(criterio, colecao, ref_anterior + 1, direita)
  }
  return colecao
}

function criterio_maior_igual(a, b) {
  return a <= b
}

function calculo_complexo(vetor) {
  let soma_cada_indice = 0
  for (let i = 0; i < tamanho_colecao(vetor); i++) {
    // 3 > 0 -> 3 mult. 2 -> 
    if (vetor[i] > 0 && vetor[i] % 2 === 0) {
      soma_cada_indice += vetor[i]
    }
    console.log('---o ', soma_cada_indice)
  }
}

function criterio_multiplo(indice, multiplo) {
  /*
  Indice: um índice de um vetor, onde esse valor é percorrido de 1 até ele mesmo
  Os dados são colocados num array
  Este array é percorrido e, se nele existe "indice" incluso, então: "indice" é múltiplo de "multiplo"
  Ex: vetor = [11]
  Na função: indice = 11 ... multiplo = 6 (valor fixo)
  Temos "multiplo" multiplciando a progressão de "indice" até "indice"
  OPERAÇÃO: [ multiplo * i ], ou seja: (6 * 1), (6 * 2) ... (6 * 11)
  array = [todos os valores da OPERAÇÃO]
  Se "array" possui um valor igual a "indice", então "indice" é múltiplo de "multiplo"
  Pois: "valor" * "multiplo" = "indice"
  11 não é múltiplo de 6, pois nenhum valor multiplicado por 6 até 11 gera o valor 11
  12 é múltiplo de 6, pois um valor multiplicado por 6 até 12 gera o valor 12: 6 * 2 = 12
  */
  const array = []
  let array_indice = 0
  for (let i = 1; i <= indice; i++) {
    array[array_indice] = multiplo * i
    array_indice++
  }
  console.log(array)
  for (let i = 0; i < tamanho_colecao(array); i++) {
    if (array[i] === indice) {
      return true
    }
  }
  return false
}

function mapear_v2(colecao, ref, criterio) {
  const array = []
  let indice = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (criterio(colecao[i], ref)) {
      array[indice] = colecao[i]
      indice++
    }
  }
  return array
}

function criterio_eh_par_negativo(i) {
  return i < 0 && i % 2 === 0
}

function filtrar(colecao, criterio) {
  const array = []
  let indice = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (criterio(colecao[i])) {
      array[indice] = colecao[i]
      indice++
    }
  }
  return array
}

function criterio_somar(a, b) {
  return a + b
}

function tamanho_colecao_eh_par(colecao) {
  return tamanho_colecao(colecao) % 2 === 0
}

function obter_indice_central_se_par(colecao) {
  return tamanho_colecao(colecao) / 2
}

function obter_indice_central_se_impar(colecao) {
  return Math.floor(tamanho_colecao(colecao) / 2)
}

function reduzir(criterio, colecao, vi) {
  let acumulador = vi
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    acumulador = criterio(acumulador, colecao[i])
  }
  return acumulador
}

function criterio_eh_multiplo(indice, multiplo) {
  const array = []
  let array_indice = 0
  // Para "indice" positivo
  if (indice > 0) {
    for (let i = 1; i <= indice; i++) {
      array[array_indice] = multiplo * i
      array_indice++
    }
  }
  // Para "indice" negativo
  // Se não for "-i", os valores (- * -) se tornam positivos, nunca achando o múltiplo negativo
  else if (indice < 0) {
    for (let i = indice; i < 0; i++) {
      array[array_indice] = multiplo * -i
      array_indice++
    }
  }
  
  for (let i = 0; i < tamanho_colecao(array); i++) {
    if (array[i] === indice) {
      return true
    }
  }
  return false
}

function criterio_eh_multiplo_m_n(indice, m, n, qtd_giros) {
  let motor = 0
  let resultado = []
  let resultado_indice = 0
  
  while (motor < qtd_giros) {
    let multiplo = undefined
    let array = []
    let array_indice = 0
    
    // Para "indice" positivo
    if (indice > 0) {
      for (let i = 1; i <= indice; i++) {
        array[array_indice] = m * i
        array_indice++
      }
    }
    // Para "indice" negativo
    // Se não for "-i", os valores (- * -) se tornam positivos, nunca achando o múltiplo negativo
    else if (indice < 0) {
      for (let i = indice; i < 0; i++) {
        array[array_indice] = m * -i
        array_indice++
      }
    }
    
    for (let i = 0; i < tamanho_colecao(array); i++) {
      if (array[i] === indice) {
        multiplo = true
      }
      else {
        multiplo = false
      }
    }
    resultado[resultado_indice] = multiplo
    m = n
    motor++
  }
  
}

function filtrar_v3(criterio, colecao, extra_a) {
  const array = []
  let indice = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (criterio(colecao[i], extra_a)) {
      array[indice] = colecao[i]
      indice++
    }
  }
  return array
}

function diferentes(colecao) {
  const array = []
  let array_i = 0
  for (let e = 0; e < tamanho_colecao(colecao); e++) {
    let dif = true
    for (let i = 0; i < e; i++) {
      if (colecao[i] === colecao[e]) {
        dif = false
        break
      }
    }
    if (dif) {
      array[array_i] = colecao[e]
      array_i++
    }
  }
  return array
}

function eh_string_numerica(string) {
  return string >= '0' && string <= '9'
}

function fatiar(alvo, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += alvo[i]
  }
  return string
}

function string_numerica_p_lista(criterio, colecao, separador) {
  const array = []
  let pos = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (colecao[i] === separador) {
      array.push(Number(criterio(colecao, pos, i - 1)))
      pos = i + 1
    }
  }
  return array
}

const a = [-1, -3, 0, 1, 7, -5, -1]
const b = [1, 2, 3]
const c = [-1, -5, 0, 1, 5]
const d = [4, 11, 9, 12]
const e = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
const multiplos_m = filtrar_v3(criterio_eh_multiplo, e, 2)
const multiplos_n = filtrar_v3(criterio_eh_multiplo, e, 3)
// console.log(multiplos_m + ',' + multiplos_n)
// console.log(diferentes([1, 2, 3, 1]))
const valores = '-1,-6,7,4,6,2,6,2,2,-3,7,2,-6,4,7' // 4,6,2,6,2,2,2,4,6,6
console.log(diferentes(string_numerica_p_lista(fatiar, valores, ',')))
