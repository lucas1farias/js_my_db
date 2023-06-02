

function realocar(alvo, b, a) {
  const pos_inicial = alvo[a]
  alvo[a] = alvo[b]
  alvo[b] = pos_inicial
}

function fatiar(alvo, min, max, eh_array=false) {
  if (!eh_array) {
    let string = ''
    for (let i = min; i <= max; i++) {
      string += alvo[i]
    }
    return string
  }
  else {
    const array = []
    for (let i = min; i <= max; i++) {
      array.push(alvo[i])
    }
    return array
  }
}

// Mínimo: 1 => Máximo: 2 (mais do que dois parâmetros torna a processo muito complexo)
// Ao invés de criar mais de 2 parâmetros para um critério, criar critérios separados
// Exemplo: criterio_ascii_segunda_letra
function criterio_ascii_ultima_letra(alvo, ref) {
  const ultima_letra = fatiar(alvo, alvo.length - 1, alvo.length - 1)
  const ultima_letra_ref = fatiar(ref, ref.length - 1, ref.length - 1)
  return ultima_letra.charCodeAt(0) <= ultima_letra_ref.charCodeAt(0) ? true : false
}

function criterio_menor_igual(a, b) {
  return a <= b
}

function criterio_maior_igual(a, b) {
  return a >= b
}

// Critérios de 1 parâmetro (não chegam na função ordenar)
function criterio_palavras_tamanho_par(alvo) {
  return alvo.length % 2 === 0
}

function criterio_palavras_tamanho_impar(alvo) {
  return alvo.length % 2 !== 0
}

/*
function particionar(alvo, esquerda, direita, criterio, a, b) {
  const ref = alvo[direita]
  let menor_pos_nova = esquerda - 1
  for (let menor_pos_antiga = esquerda; menor_pos_antiga < direita; menor_pos_antiga++) {
    // alvo[menor_pos_antiga] <= ref
    const ultima_letra = fatiar(alvo[menor_pos_antiga], alvo[menor_pos_antiga].length - 1, alvo[menor_pos_antiga].length - 1)
    const ultima_letra_ref = fatiar(ref, ref.length - 1, ref.length - 1)
    if (criterio_ascii(ultima_letra, ultima_letra_ref)) {
      menor_pos_nova++
      realocar(alvo, menor_pos_antiga, menor_pos_nova)
    }
  }
  realocar(alvo, direita, menor_pos_nova + 1)
  return menor_pos_nova + 1
}
*/

function particionar_simples(alvo, esquerda, direita, criterio) {
  let menor_pos_nova = esquerda - 1
  
  for (let menor_pos_antiga = esquerda; menor_pos_antiga < direita; menor_pos_antiga++) {
    if (criterio(alvo[menor_pos_antiga])) {
      menor_pos_nova++
      realocar(alvo, menor_pos_antiga, menor_pos_nova)
    }
  }
  
  realocar(alvo, direita, menor_pos_nova + 1)
  return alvo
}

function particionar(alvo, esquerda, direita, criterio) {
  const ref = alvo[direita]
  let menor_pos_nova = esquerda - 1
  
  for (let menor_pos_antiga = esquerda; menor_pos_antiga < direita; menor_pos_antiga++) {
    if (criterio(alvo[menor_pos_antiga], ref)) {
      menor_pos_nova++
      realocar(alvo, menor_pos_antiga, menor_pos_nova)
    }
  }
  
  realocar(alvo, direita, menor_pos_nova + 1)
  return menor_pos_nova + 1
}

function ordenar(alvo, esquerda, direita, criterio) {
  if (esquerda < direita) {
    const ref_anterior = particionar(alvo, esquerda, direita, criterio)
    ordenar(alvo, esquerda, ref_anterior - 1, criterio)
    ordenar(alvo, ref_anterior + 1, direita, criterio)
  } 
}

const pessoas = ['Carolini', 'Ane', 'Bianco', 'Paulu', 'Carla']
console.log('Original: ', pessoas)

particionar_simples(pessoas, 0, pessoas.length - 1, criterio_palavras_tamanho_par)
console.log('Ordenado por tamanho par: ', pessoas)

particionar_simples(pessoas, 0, pessoas.length - 1, criterio_palavras_tamanho_impar)
console.log('Ordenado por tamanho ímpar:', pessoas)

ordenar(pessoas, 0, pessoas.length - 1, criterio_menor_igual)
console.log('Ordenado por maior igual :', pessoas)

ordenar(pessoas, 0, pessoas.length - 1, criterio_maior_igual)
console.log('Ordenado por menor igual :', pessoas)

ordenar(pessoas, 0, pessoas.length - 1, criterio_ascii_ultima_letra)
console.log('Ordenado pela última letra :', pessoas)

const nums = [7, 2, 11, 5, 3]
console.log('Original: ', nums)
ordenar(nums, 0, nums.length - 1, criterio_menor_igual)
console.log('Ordenado crescente: ', nums)
ordenar(nums, 0, nums.length - 1, criterio_maior_igual)
console.log('Ordenado decrescente: ', nums)
