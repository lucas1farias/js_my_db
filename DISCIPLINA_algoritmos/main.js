

import {question} from "readline-sync"

/*
11. Gerar N grupos de T tamanhos. Não repetir valores
0. Sair (mensagem automática de tchau)
*/

function main() {
  let entrada = undefined
  let vetor_main = []
  let vetor_secundario = undefined
  
  while (entrada != 0) {
    entrada = entrada_num(menu())

    if (entrada === 1) {
      vetor_main = novo_vetor('Digite um valor N p/ definir o tamanho do vetor >>> ')
      procedimento_padrao()
    }
    else if (entrada === 2) {
      vetor_main = novo_vetor_um_por_um(
        'Digite qtd. de número que o vetor deve ter >>> ', 'Digite o valor do vetor atual >>> '
      )
      procedimento_padrao()
    }
    else if (entrada === 3) {
      vetor_main = vetor_aleatorio(
        'Valor do TAMANHO do vetor >>> ', 
        'Valor MÍNIMO anexado ao vetor >>> ',
        'Valor MÁXIMO anexado ao vetor (valor não inclusivo, ex.: se 4, então usar 5) >>> ',
      )
      procedimento_padrao()
    }
    else if (entrada === 4) {
      console.log(tamanho_colecao(vetor_main) === 0 ? '\n========== AVISO ==========\nO vetor está vazio' : vetor_main)
      procedimento_padrao()
    }
    else if (entrada === 5) {
      vetor_main = cada_indice_vetor_elevado(
        vetor_main, 'Digite o valor da potência que elevará cada índice do vetor >>> '
      )
      procedimento_padrao()
    }
    else if (entrada === 6) {
      console.log(contar(vetor_main))
      procedimento_padrao()
    }
    else if (entrada === 7) {
      console.log(somar(vetor_main))
      procedimento_padrao()
    }
    else if (entrada === 8) {
      const media_todos_indices = reduzir(criterio_somar, vetor_main, 0) / tamanho_colecao(vetor_main)
      const todos_positivos = filtrar(vetor_main, criterio_eh_positivo)
      const media_positivos = reduzir(criterio_somar, todos_positivos, 0) / tamanho_colecao(todos_positivos)
      const todos_negativos = filtrar(vetor_main, criterio_eh_negativo)
      const media_negativos = reduzir(criterio_somar, todos_negativos, 0) / tamanho_colecao(todos_negativos)
      const medias = `
      ========== MEDIAS ==========
      Vetor:                              ${vetor_main}
      Média de todos os números no vetor: ${media_todos_indices}
      Todos os números positivos:         ${todos_positivos}
      Média de todos os números +:        ${media_positivos}
      Todos os números negativos:         ${todos_negativos}
      Média de todos os números -:        ${media_negativos}
      `
      const mediana_todos = mediana(ordenar(criterio_maior_igual, vetor_main, 0, tamanho_colecao(vetor_main) - 1))
      const mediana_positivos = mediana(ordenar(criterio_maior_igual, todos_positivos, 0, tamanho_colecao(todos_positivos) - 1))
      const mediana_negativos = mediana(ordenar(criterio_maior_igual, todos_negativos, 0, tamanho_colecao(todos_negativos) - 1))
      const medianas = `
      ========== MEDIANAS ==========
      Vetor:                                  ${vetor_main}
      Mediana de todos os números no vetor:   ${mediana_todos}
      Vetor dos +:                            ${ordenar(criterio_maior_igual, todos_positivos, 0, tamanho_colecao(todos_positivos) - 1)}
      Mediana de todos os números + no vetor: ${mediana_positivos}
      Vetor dos -:                            ${ordenar(criterio_maior_igual, todos_negativos, 0, tamanho_colecao(todos_negativos) - 1)}                          
      Mediana de todos os números - no vetor: ${mediana_negativos}
      `
      console.log(medias)
      console.log(medianas)
    }
    else if (entrada === 9) {
      vetor_main = ordenar(criterio_maior_igual, vetor_main, 0, tamanho_colecao(vetor_main) - 1)
      const maior_valor = indice_especifico(vetor_main, tamanho_colecao(vetor_main) - 1)
      const menor_valor = indice_especifico(vetor_main, 0)
      console.log(`\n========== MAIOR VALOR ==========\nVetor: ${vetor_main}\nMaior: ${maior_valor}`)
      console.log(`\n========== MENOR VALOR ==========\nVetor: ${vetor_main}\nMenor: ${menor_valor}`)
    }
    else if (entrada === 10) {
      um_positivo_um_negativo(vetor_main)
    }
    else if (entrada === 11) {
      // ausente
    }
    else if (entrada === 12) {
      vetor_secundario = vetor_aleatorio(
        'Valor do TAMANHO do vetor >>> ', 
        'Valor MÍNIMO anexado ao vetor >>> ',
        'Valor MÁXIMO anexado ao vetor (valor não inclusivo, ex.: se 4, então usar 5) >>> ',
      )
      console.log('\n========== RESULTADO ==========')
      console.log(similaridade(vetor_secundario, vetor_main, 'Os vetores são iguais', 'Os vetores são diferentes'))
      console.log(vetor_main)
      console.log(vetor_secundario)
      procedimento_padrao()
    }
    else if (entrada === 13) {
      maiores_vetores(vetor_main, 'Quantos números MAIORES formam o rank? >>> ')
      procedimento_padrao()
    }
    else if (entrada === 14) {
      menores_vetores(vetor_main, 'Quantos números MENORES formam o rank? >>> ')
      procedimento_padrao()
    }
    else if (entrada === 15) {
      vetor_main = valores_acima_media(vetor_main)
      procedimento_padrao()
    }
    else if (entrada === 16) {
      // 16. Média dos números positivos múltiplos de dois + produto acumulado dos números negativos pares / 2
      const pares_multiplos_dois = filtrar(vetor_main, criterio_eh_multiplo_dois)
      const pares_multiplos_dois_media = reduzir(criterio_somar, pares_multiplos_dois, 0) / tamanho_colecao(pares_multiplos_dois)
      const pares_negativos = filtrar(vetor_main, criterio_eh_par_negativo)
      const pares_negativos_metade = mapear_v3(pares_negativos, 2, criterio_reducao_metade)
      const pares_negativos_metade_produto_acumulado = reduzir(criterio_multiplicar, pares_negativos_metade, 1)
      const resultado = pares_multiplos_dois_media + pares_negativos_metade_produto_acumulado
      const relatorio = `
      ========== RELATÓRIO ==========
      Números pares multiplos de 2 encontrados:             ${pares_multiplos_dois}
      Média dos pares multiplos de 2 encontrados:           ${pares_multiplos_dois_media}
      Pares negativos:                                      ${pares_negativos}
      Pares negativos / 2:                                  ${pares_negativos_metade}
      Produto acumulado dos pares negativos:                ${pares_negativos_metade_produto_acumulado}
      Média dos pares múltiplos de 2 + pares negativos / 2: ${resultado}
      `
      console.log(relatorio)
      procedimento_padrao()
    }
    else if (entrada === 17) {
      vetor_main = modificar_vetor_via_criterios(vetor_main)
      procedimento_padrao()
    }
    else if (entrada === 18) {
      vetor_main = modificar_vetor_via_criterios(vetor_main, false)
      procedimento_padrao()
    }
    else if (entrada === 19) {
      const m = entrada_num('Informe um valor M para procurar seus múltiplos >>> ')
      const n = entrada_num('Informe um valor N para procurar seus múltiplos >>> ')
      const multiplos_m = filtrar_v2(criterio_eh_multiplo, vetor_main, m)
      const multiplos_n = filtrar_v2(criterio_eh_multiplo, vetor_main, n)
      const multiplos_m_n = diferentes(string_numerica_p_lista(fatiar, multiplos_m + ',' + multiplos_n, ','))
      const resultado = `
      ========== MÚLTIPLOS DE ${m} e ${n} ==========
      Vetor:             ${vetor_main}
      Múltiplos de ${m}: ${diferentes(multiplos_m)}
      Múltiplos de ${n}: ${diferentes(multiplos_n)}
      
      Múltiplos de ${m} e ${n}:`
      console.log(resultado)
      console.log('    ', multiplos_m_n)
      procedimento_padrao()
    }
  }
}

function entrada_num(txt) {
  return Number(question(txt))
}

function menu() {
  return `
  \n========== BEM-VINDO ==========
  0 - Sair
  3 - Preencher vetor automaticamente
  4 - Ver valores do vetor
  19 - Remover múltiplos de N e M
  >>> `
  // return `
  // \n========== BEM-VINDO ==========
  // 0 - Sair
  // 1 - Gerar vetor com N valores
  // 2 - Gerar vetor com N valores 1 por 1
  // 3 - Preencher vetor automaticamente
  // 4 - Ver valores do vetor
  // 5 - Elevar valores a potência N
  // 6 - Contar números (-, 0, +)
  // 7 - Somar números (- e +)
  // 8 - Soma media e mediana (todos, +, -)
  // 9 - Maior e menor valor do vetor
  // 10 - Sortear dois números: (+, -)
  // 12 - Comparar vetores
  // 13 - Verificar N vetores maiores
  // 14 - Verificar N vetores menores
  // 15 - Ver valores acima da média do vetor
  // 16 - Cálculo complexo
  // 17 - Ordenar crescente com critérios
  // 18 - Ordenar decrescente com critérios
  // 19 - Remover múltiplos de N e M
  // >>> `
}

function limpar_terminal() {
  console.clear()
}

function continuar() {
  return question('\n===== DIGITE ENTER PARA VOLTAR AO MENU =====\n')
}

function procedimento_padrao() {
  continuar()
  limpar_terminal()
}

function n_aleatorio(max, min) {
  return Math.floor(Math.random() * (max - min) + min)
}

function novo_vetor(txt) {
  const entrada = entrada_num(txt)
  let vetor_sem_valores = Array(entrada)
  let vetor = mapear(vetor_sem_valores, entrada, criterio_igualar)
  return vetor
}

function novo_vetor_um_por_um(txt_a, txt_b) {
  const entrada = entrada_num(txt_a)
  let vetor_a_ser_preenchido = Array(entrada)
  for (let i = 0; i < entrada; i++) {
    let velor_vetor = entrada_num(txt_b)
    vetor_a_ser_preenchido[i] = velor_vetor
  }
  return vetor_a_ser_preenchido
}

function vetor_aleatorio(txt_a, txt_b, txt_c) {
  const tamanho_vetor = entrada_num(txt_a)
  const valor_inicial = entrada_num(txt_b)
  const valor_limite = entrada_num(txt_c)
  let vetor_a_ser_preenchido = Array(tamanho_vetor)
  for (let i = 0; i < tamanho_vetor; i++) {
    vetor_a_ser_preenchido[i] = n_aleatorio(valor_inicial, valor_limite)
  }
  return vetor_a_ser_preenchido
}

function cada_indice_vetor_elevado(vetor, txt_a) {
  const valor_potencia = entrada_num(txt_a)
  const novo_vetor = mapear(vetor, valor_potencia, criterio_elevar_potencia)
  return novo_vetor
}

function contar(colecao) {
  let negativos = 0
  let nulos = 0
  let positivos = 0
  for (let i of colecao) {
    i < 0 ? negativos++ : null
    i === 0 ? nulos++ : null
    i > 0 ? positivos++ : null
  }
  return `
  \n========== QUANTIDADES DOS NÚMEROS ==========
  Vetor:             ${colecao}
  Número negativos:  ${negativos}
  Números neutros:   ${nulos}
  Números positivos: ${positivos}
  `
}

function somar(colecao) {
  let soma_negativos = 0
  let soma_positivos = 0
  let soma_todos = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    colecao[i] < 0 ? soma_negativos += colecao[i] : null
    colecao[i] > 0 ? soma_positivos += colecao[i] : null
    soma_todos += colecao[i]
  }
  return `
  \n========== SOMA DOS NÚMEROS ==========
  Vetor:                     ${colecao}
  Número negativos somados:  ${soma_negativos}
  Números positivos somados: ${soma_positivos}
  Todos os números somados:  ${soma_todos}
  `
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

function mediana(colecao) {
  let i = 0
  if (tamanho_colecao_eh_par(colecao)) {
    i = obter_indice_central_se_par(colecao)
    const indiceA = indice_especifico(colecao, i)
    const indiceB = indice_especifico(colecao, i - 1)
    const resultado = (indiceA + indiceB) / 2
    return resultado
  } else {
    i = obter_indice_central_se_impar(colecao)
    return colecao[i]
  }
}

function um_positivo_um_negativo(colecao) {
  let n1 = indice_especifico(colecao, n_aleatorio(0, tamanho_colecao(colecao) - 1))
  let n2 = indice_especifico(colecao, n_aleatorio(0, tamanho_colecao(colecao) - 1))
  let positivos = 0
  let negativos = 0
  let relatorio = '\n========== NÚMEROS =========='
  relatorio += `\nVetor: ${colecao}`
  
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    colecao[i] > 0 ? positivos++ : null
    colecao[i] < 0 ? negativos++ : null
  }

  if (positivos == 0) {
    relatorio += `\nNúmero positivo sorteado: não há números positivos no vetor`
  }
  if (negativos == 0) {
    relatorio += `\nNúmero negativo sorteado: não há números negativos no vetor`
  }
  if (positivos !== 0 && negativos !== 0) {
    while (n1 <= 0) {
      n1 = indice_especifico(colecao, n_aleatorio(0, tamanho_colecao(colecao) - 1))
    }
    relatorio += `\nNúmero positivo sorteado: ${n1}`
    while (n2 >= 0) {
      n2 = indice_especifico(colecao, n_aleatorio(0, tamanho_colecao(colecao) - 1))
    }
    relatorio += `\nNúmero negativo sorteado: ${n2}`
  }
  console.log(relatorio)
  procedimento_padrao()
}

// 12
function similaridade(menor, maior, msg, msg_erro) {
  let contador = 0
  for (let i = 0; i < tamanho_colecao(maior); i++) {
    maior[i] === menor[i] ? contador++ : null
  }
  return contador === tamanho_colecao(menor) ? msg : msg_erro
}

// 13. Top N maiores números
function maiores_vetores(vetor, txt) {
  let vetor_ordenado = vetor
  const qtd_nums_rank = entrada_num(txt)
  vetor_ordenado = ordenar(criterio_maior_igual, vetor, 0, tamanho_colecao(vetor) - 1)
  let contador = 1
  let relatorio = '\n========== RELATÓRIO =========='
  relatorio += `\n${qtd_nums_rank} maiores números`
  relatorio += `\nVetor: ${vetor_ordenado}`
  relatorio += `\nRANK: `
  for (let i = qtd_nums_rank; i > 0; i--) {
    relatorio += ` ${vetor_ordenado[tamanho_colecao(vetor_ordenado) - contador]} `
    contador++
  }
  console.log(relatorio)
}

// 14. Top N menores números
function menores_vetores(vetor, txt) {
  let vetor_ordenado = vetor
  const qtd_nums_rank = entrada_num(txt)
  vetor_ordenado = ordenar(criterio_maior_igual, vetor, 0, tamanho_colecao(vetor) - 1)
  let contador = 0
  let relatorio = '\n========== RELATÓRIO =========='
  relatorio += `\n${qtd_nums_rank} menores números`
  relatorio += `\nVetor: ${vetor_ordenado}`
  relatorio += `\nRANK: `
  for (let i = 0; i < qtd_nums_rank; i++) {
    relatorio += ` ${indice_especifico(vetor_ordenado, contador)} `
    contador++
  }
  console.log(relatorio)
}

// 15. Listar valor médio, e listar números maiores que a Média e Menores que a Média
function valores_acima_media(vetor) {
  let soma_cada_indice = 0
  let acima_da_media = []
  let indice = 0
  let relatorio = '========== VALORES ACIMA DA MÉDIA =========='
  relatorio += `\nVetor: ${vetor}`
  
  for (let i = 0; i < tamanho_colecao(vetor); i++) {
      soma_cada_indice += vetor[i]
  }
  
  const media = soma_cada_indice / tamanho_colecao(vetor)
  relatorio += `\nMédia: ${media}`
  
  for (let i = 0; i < tamanho_colecao(vetor); i++) {
    if (vetor[i] > media) {
      acima_da_media[indice] = vetor[i]
      indice++
    }
  }
  relatorio += `\nValores acima da média: ${acima_da_media}`
  console.log(relatorio)
}

// 18 e 19
function modificar_vetor_via_criterios(vetor, crescente=true) {
  const menu = `
  ========== MENU ==========
  QUAL O CRITÉRIO DE ORDENAMENTO?
  1 - Ordenar todos sem filtrar
  2 - Ordenar filtrando os pares
  3 - Ordenar filtrando os ímpares 
  4 - Ordenar filtrando os positivos
  5 - Ordenar filtrando os negativos
  6 - Ordenar por múltiplo
  >>> `

  if (crescente) {
    const criterio = entrada_num(menu)

    if (criterio === 1) {
      const antes = vetor
      vetor = ordenar(criterio_maior_igual, vetor, 0, tamanho_colecao(vetor) - 1)
      console.log('\n========== VETOR ORDENADO CRESCENTE ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    } 
    else if (criterio === 2) {
      const antes = vetor
      const vetor_filtrado = filtrar(vetor, criterio_eh_par)
      vetor = ordenar(criterio_maior_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO CRESCENTE COM OS PARES ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 3) {
      const antes = vetor
      const vetor_filtrado = filtrar(vetor, criterio_eh_impar)
      vetor = ordenar(criterio_maior_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO CRESCENTE COM OS ÍMPARES ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 4) {
      const antes = vetor
      const vetor_filtrado = filtrar(vetor, criterio_eh_positivo)
      vetor = ordenar(criterio_maior_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO CRESCENTE COM OS POSITIVOS ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 5) {
      const antes = vetor
      const vetor_filtrado = filtrar(vetor, criterio_eh_negativo)
      vetor = ordenar(criterio_maior_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO CRESCENTE COM OS NEGATIVOS ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 6) {
      const multiplo = entrada_num('Informe o multiplo a ser comparado >>> ')
      const antes = vetor
      const vetor_filtrado = filtrar_v2(criterio_eh_multiplo, vetor, multiplo)
      vetor = ordenar(criterio_maior_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log(`\n========== VETOR ORDENADO CRESCENTE COM OS MÚLTIPLOS ========== ${multiplo}`)
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
  }
  else {
    const criterio = entrada_num(menu)

    if (criterio === 1) {
      const antes = vetor
      vetor = ordenar(criterio_menor_igual, vetor, 0, tamanho_colecao(vetor) - 1)
      console.log('\n========== VETOR ORDENADO DECRESCENTE ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    } 
    else if (criterio === 2) {
      const antes = vetor
      const vetor_filtrado = filtrar(vetor, criterio_eh_par)
      vetor = ordenar(criterio_menor_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO DECRESCENTE COM OS PARES ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 3) {
      const antes = vetor
      const vetor_filtrado = filtrar(vetor, criterio_eh_impar)
      vetor = ordenar(criterio_menor_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO DECRESCENTE COM OS ÍMPARES ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 4) {
      const antes = vetor
      const vetor_filtrado = filtrar(vetor, criterio_eh_positivo)
      vetor = ordenar(criterio_menor_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO DECRESCENTE COM OS POSITIVOS ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 5) {
      const antes = vetor
      const vetor_filtrado = filtrar(vetor, criterio_eh_negativo)
      vetor = ordenar(criterio_menor_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO DECRESCENTE COM OS NEGATIVOS ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 6) {
      const multiplo = entrada_num('Informe o multiplo a ser comparado >>> ')
      const antes = vetor
      const vetor_filtrado = filtrar_v2(criterio_eh_multiplo, vetor, multiplo)
      vetor = ordenar(criterio_menor_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log(`\n========== VETOR ORDENADO DECRESCENTE COM OS MÚLTIPLOS DE ${multiplo} ==========`)
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
  }
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

// Similar ao slice
function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
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

function criterio_menor_igual(a, b) {
  return a >= b
}

function criterio_igualar(i, b) {
  i = b
  return i
}

function criterio_elevar_potencia(i, pot) {
  return Math.pow(i, pot)
}

// filtragem
function criterio_eh_positivo(i) {
  return i > 0
}

// filtragem
function criterio_eh_negativo(i) {
  return i < 0
}

function criterio_eh_multiplo_dois(indice) {
  /*
  ========== PARâMETROS ==========
  indice: representa um índice de um vetor, onde esse valor é percorrido de 1 até ele mesmo

  Os dados são colocados num array
  Este array é percorrido e, se nele existe "indice" incluso, então: "indice" é múltiplo de "multiplo"
  Ex: vetor = [11]
  Na função: indice = 11 ... multiplo = 6 (valor fixo)
  Temos "multiplo" multiplicando a progressão de "indice" até ele mesmo
  OPERAÇÃO: [ multiplo * i ], ou seja: (6 * 1), (6 * 2) ... (6 * 11)
  array = [todos os valores da OPERAÇÃO]
  Se "array" possui um valor igual a "indice", então "indice" é múltiplo de "multiplo"
  Pois: "valor" * "multiplo" = "indice"
  11 não é múltiplo de 6, pois nenhum valor da progressão de 1 até 11 * 6, que gera o valor 11
  12 é múltiplo de 6, pois há um valor da progressão de 1 até 11 * 6, que gera o valor 12: neste caso, (6 * 2 = 12)
  */
  const multiplo = 2
  const array = []
  let array_indice = 0
  for (let i = 1; i <= indice; i++) {
    array[array_indice] = multiplo * i
    array_indice++
  }
  // console.log(array)
  for (let i = 0; i < tamanho_colecao(array); i++) {
    if (array[i] === indice) {
      return true
    }
  }
  return false
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

// filtragem
function criterio_eh_par_negativo(i) {
  return i < 0 && i % 2 === 0
}

// mapeamento
function criterio_reducao_metade(i, ref) {
  return i / ref
}

// reduzir
function criterio_somar(a, b) {
  return a + b
}

// reduzir
function criterio_multiplicar(a, b) {
  return a * b
}

// filtragem
function criterio_eh_par(i) {
  return i % 2 === 0 && i !== 0
}

// filtragem
function criterio_eh_impar(i) {
  return i % 2 !== 0
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

function filtrar_v2(criterio, colecao, extra) {
  const array = []
  let indice = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (criterio(colecao[i], extra)) {
      array[indice] = colecao[i]
      indice++
    }
  }
  return array
}

function mapear(colecao, ref, criterio) {
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    colecao[i] = criterio(colecao[i], ref)
  }
  return colecao
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

function mapear_v3(colecao, ref, criterio) {
  let array = []
  let indice = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    array[indice] = criterio(colecao[i], ref)
    indice++
  }
  return array
}

function reduzir(criterio, colecao, vi) {
  let acumulador = vi
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    acumulador = criterio(acumulador, colecao[i])
  }
  return acumulador
}

main()
