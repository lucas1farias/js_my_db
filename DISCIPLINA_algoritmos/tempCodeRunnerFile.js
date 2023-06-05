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