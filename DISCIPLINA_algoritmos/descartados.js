

function media(colecao) {
  let soma_cada_indice = 0
  let positivos = 0
  let negativos = 0
  let relatorio = '\n========== MÉDIA DOS NÚMEROS =========='
  
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    soma_cada_indice += colecao[i]
  }
  relatorio += `\nVetor: ${colecao}`
  relatorio += `\nMedia de todos: ${soma_cada_indice / tamanho_colecao(colecao)}`
  soma_cada_indice = 0
  
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (colecao[i] > 0) {
      soma_cada_indice += colecao[i]
      positivos++
    }
  }
  relatorio += `\nMedia dos positivos: ${soma_cada_indice / positivos}`
  soma_cada_indice = 0

  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (colecao[i] < 0) {
      soma_cada_indice += colecao[i]
      negativos++
    }
  }
  relatorio += `\nMedia de negativos: ${soma_cada_indice / negativos}`
  return relatorio
}

function mediana(colecao, funcao, criterio) {
  let relatorio = '\n========== MEDIANAS =========='
  funcao(criterio, colecao, 0, tamanho_colecao(colecao) - 1)
  
  let par_centro = tamanho_colecao(colecao) / 2
  let impar_centro = Math.floor(tamanho_colecao(colecao) / 2)
  let eh_par = tamanho_colecao(colecao) % 2 === 0
  
  relatorio += `\nTodos os números ordenados: ${colecao}`
  
  if (eh_par) {
    relatorio += `\nMediana de todos: ${(colecao[par_centro] + colecao[par_centro - 1]) / 2}`
  }
  else {
    relatorio += `\nMediana de todos: ${colecao[impar_centro]}`
  }
  
  let qtd_positivos = 0
  let positivos_indice = 0
  const positivos = []
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (colecao[i] > 0) {
      positivos[positivos_indice] = colecao[i]
      positivos_indice++
      qtd_positivos++
    }
  }
  funcao(criterio, positivos, 0, tamanho_colecao(positivos) - 1)
  
  relatorio += `\nTodos os números positivos ordenados: ${positivos}`

  par_centro = tamanho_colecao(positivos) / 2
  impar_centro = Math.floor(tamanho_colecao(positivos) / 2)
  eh_par = tamanho_colecao(positivos) % 2 === 0

  if (eh_par) {
    relatorio += `\nMediana dos positivos: ${(positivos[par_centro] + positivos[par_centro - 1]) / 2}`
  }
  else {
    relatorio += `\nMediana dos positivos: ${positivos[impar_centro]}`
  }
  
  let qtd_negativos = 0
  let negativos_indice = 0
  const negativos = []
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (colecao[i] < 0) {
      negativos[negativos_indice] = colecao[i]
      negativos_indice++
      qtd_negativos++
    }
  }
  funcao(criterio, negativos, 0, tamanho_colecao(negativos) - 1)
  
  relatorio += `\nTodos os números negativos ordenados: ${negativos}`

  par_centro = tamanho_colecao(negativos) / 2
  impar_centro = Math.floor(tamanho_colecao(negativos) / 2)
  eh_par = tamanho_colecao(negativos) % 2 === 0

  if (eh_par) {
    relatorio += `\nMediana dos negativos: ${(negativos[par_centro] + negativos[par_centro - 1]) / 2}`
  }
  else {
    relatorio += `\nMediana dos negativos: ${negativos[impar_centro]}`
  }
  return relatorio
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

// let array_principal = []
// let array_principal_indice = 0
// for (let i = 0; i < range_valores; i++) {
//   array_principal[array_principal_indice] = i
//   array_principal_indice++
// }
// array_principal = embaralhar(array_principal, 0)
// const resultado = `
// ========== AGRUPAMENTO DE VETORES ==========
// Quantidade de grupos: ${qtd_grupos}
// Divisão dos grupos: ${tamanhos}
// Números distintos: ${range_valores}`
// console.log(resultado)
// console.log(array_principal)

/*
Faça uma Aplicação com MENU que:

1. Gerar vetor N posições, pedir valor padrão
Pedi N ao usuário e gera um vetor com todas as posições vazia (None ou undefined) ou com valor padrão se fornecido
python: vetor = [None] * N
javascript: vetor = Arrays(N)
Em seguida, use sua função mapear para preencher com o valor padrão, ou seja, transformar cada item no valor que o usuário pediu

2. Preencher vetor manualmente item a item
Pedi ao usuário sequencialmente cada dos valores (somente números)

3. Preencher vetor automaticamente
Peça ao usuário valores Mínimos e Máximos 

4. Mostrar vetor
Mostra os elementos do vetor

5. Transformar vetor: elevar a potência N
Substitui cada item por seu quadrado se expoente for 2, por exemplo

6. Contar: Positivos, Negativos e Zeros

7. Somatório: De todos, Dos Negativos e dos Positivos
Exibir as 3 informações sobre os valores

8. Exibir Média e Mediana: De Todos, Dos Positivos e Dos Negativos

9. Exibir Maior e Menor número

10. Sortear dois números: um positivo e um negativo

11. Gerar N grupos de T tamanhos. Não repetir valores

12. Pedir um novo vetor e verificar se está 100% presente nos números do sistema (e na mesma ordem)

13. Top N maiores números

14. Top N menores números

15. Listar valor médio, e listar números maiores que a Média e Menores que a Média

17. Somatório da Média dos Números Positivos múltiplos dois COM o Produto acumulado dos números negativos pares reduzidos à metade

18. Ordenar os números em ordem crescente: 
Pergunta se: todos, ou apenas pares, ou impares, ou positivos ou negativos, ou ainda apenas os múltiplos (positivos ou negativos) de N

19. Ordenar em ordem decrescente
Pergunta se: todos, ou apenas pares, ou impares, ou positivos ou negativos, ou ainda apenas os múltiplos (positivos ou negativos) de N

20. Eliminar números múltiplos de N e M (simultaneamente)
*/
