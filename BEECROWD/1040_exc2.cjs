

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
    const n1 = entrada(lines, 'float')
    const n2 = entrada(lines, 'float')
    const n3 = entrada(lines, 'float')
    const n4 = entrada(lines, 'float')
    
    let msg_media_aluno_etapa_a = ''
    let msg_media_final = ''
    let msg_nota_exame_final = ''
    
    const peso_n1 = 2
    const peso_n2 = 3
    const peso_n3 = 4
    const peso_n4 = 1
    
    const tipos = [0, 1, 2]
    const situacoes = ['Aluno aprovado.', 'Aluno em exame.', 'Aluno reprovado.']
    const resultados = ['Media:', 'Media final: ', 'Nota do exame: ']
    
    const media = Number(media_ponderada(
      `${n1} ${n2} ${n3} ${n4}`,
      `${peso_n1} ${peso_n2} ${peso_n3} ${peso_n4}`
    ))
    
    const situacao_aluno = situacao(parseFloat(media))
    
    if (situacao_aluno == tipos[0]) {
      msg_media_aluno_etapa_a = resultados[0] + ` ${decimal(media, 1)}`
      exibir(msg_media_aluno_etapa_a)
      exibir(situacoes[0])
    } 
    if (situacao_aluno == tipos[1]) {
      msg_media_aluno_etapa_a = resultados[0] + ` ${decimal(media, 1)}`
      exibir(msg_media_aluno_etapa_a)
      exibir(situacoes[1])

      let lines2 = input.split(' ')
      let entrada = `${lines2}`.split('\n')
      const nota_exame_final = parseFloat(entrada['1'])
      const media_final = media_comum((media + nota_exame_final), 2)
      
      msg_nota_exame_final = resultados[2] + `${decimal(nota_exame_final, 1)}`
      msg_media_final = resultados[1] + `${decimal(media_final, 1)}`
      
      const aluno_aprovado = comparar_dois(media_final, 5, '>=')
      const aluno_situacao = aluno_aprovado ? situacoes[0] : situacoes[2]

      // console.log('---> ', msg_nota_exame_final)
      exibir(msg_nota_exame_final)
      exibir(aluno_situacao)
      exibir(msg_media_final)
    } 
    if (situacao_aluno == tipos[2]) {
      msg_media_aluno_etapa_a = resultados[0] + ` ${decimal(media, 1)}`
      exibir(msg_media_aluno_etapa_a)
      exibir(situacoes[2])
    }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function entrada(fonte, tipo) {
  if (tipo == 'str') {
    return fonte.shift()
  } else if (tipo == 'int') {
    return parseInt(fonte.shift())
  } else if (tipo == 'float') {
    return parseFloat(fonte.shift())
  } 
}

function media_comum(num, qtd) {
  return num / qtd
}

function media_ponderada(texto_valores, texto_pesos) {
  let n_lista = texto_valores.split(' ')
  let n_pesos = texto_pesos.split(' ')
  let notas_somadas = 0
  let soma_pesos = 0
  let soma_dividendos_e_seus_pesos = 0
  
  for (let i = 0; i < n_lista.length; i++) {
    n_lista[i] = parseFloat(n_lista[i])
  }

  for (let i = 0; i < n_pesos.length; i++) {
    n_pesos[i] = parseFloat(n_pesos[i])
  }
  
  for (let i = 0; i < n_lista.length; i++) {
    notas_somadas += n_lista[i]
  }

  for (let i = 0; i < n_pesos.length; i++) {
    soma_pesos += n_pesos[i]
  }

  for (let i = 0; i < n_lista.length; i++) {
    let calculo = n_lista[i] * n_pesos[i]
    soma_dividendos_e_seus_pesos += calculo
  }
  
  return decimal(soma_dividendos_e_seus_pesos / soma_pesos, 1)
}

function decimal(n, casas) {
  return n.toFixed(casas)
}

function eh_menor(n, ref) {
  return n < ref
}

function comparar_dois(d1, d2, operador) {
  if (operador === '>') {
    return d1 > d2
  }
  else if (operador === '<') {
    return d1 < d2
  }
  else if (operador === '>=') {
    return d1 >= d2
  }
  else if (operador === '<=') {
    return d1 <= d2
  } 
  else if (operador === '!=') {
    return d1 != d2
  }
}

function numero_entre(valor_ref, min, max) {
  return valor_ref >= min && valor_ref <= max
}

function situacao(n) {
  
  let situacao = ''

  if (eh_menor(n, 5)) {
    situacao = 2
  } if (numero_entre(n, 5.0, 6.9)) {
    situacao = 1
  } if (n >= 7) {
    situacao = 0
  }
  return situacao
}

main()
