

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const linha_a = entrada(lines, 'str')
  const linha_b = entrada(lines, 'str')
  const linha_c = entrada(lines, 'str')
  const linha_d = entrada(lines, 'str')
  
  const dia_inicial = inteiro(linha_a.split(' ')[1])
  const dia_final = inteiro(linha_c.split(' ')[1])
  
  const data_inicial = str_p_int(linha_b.split(':'))
  const data_final = str_p_int(linha_d.split(':'))
  
  data_inicial.push(dia_inicial)
  data_final.push(dia_final)
  
  const data_inicial_seg = obter_duracao(data_inicial)
  const data_final_seg = obter_duracao(data_final)
  
  let tempo_corrido = data_final_seg - data_inicial_seg
  
  const duracao_dia = reverter_seg(tempo_corrido, 0)
  tempo_corrido = reduzir_seg(tempo_corrido, [24, 60, 60])
  
  const duracao_hora = reverter_seg(tempo_corrido, 1)
  tempo_corrido = reduzir_seg(tempo_corrido, [1, 60, 60])
  
  const duracao_min = reverter_seg(tempo_corrido, 2)
  tempo_corrido = reduzir_seg(tempo_corrido, [1, 1, 60])
  
  const duracao_seg = tempo_corrido
  const duracao = `${duracao_dia} dia(s)\n${duracao_hora} hora(s)\n${duracao_min} minuto(s)\n${duracao_seg} segundo(s)`
  
  exibir(duracao)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function entrada(fonte, tipo) {
  if (tipo == 'str') {
    return fonte.shift().trim()
  } else if (tipo == 'int') {
    return parseInt(fonte.shift())
  } else if (tipo == 'float') {
    return parseFloat(fonte.shift())
  } 
}

function inteiro(num) {
  return parseInt(num)
}

function str_p_int(colecao) {
  let dados_convertidos = []
  for (let i = 0; i < colecao.length; i++) {
    dados_convertidos.push(parseInt(colecao[i]))
  }
  return dados_convertidos
}

function obter_duracao(colecao) {
  const seg = colecao[2]
  const min = colecao[1] * 60
  const h = colecao[0] * 60 * 60
  const dia = colecao[3] * 24 * 60 * 60
  
  return seg + min + h + dia
}

function reverter_seg(t, tipo_tempo) {
  if (tipo_tempo == 0) {
    return Math.floor(t / (24 * 60 * 60))
  } else if (tipo_tempo == 1) {
    return Math.floor(t / (60 * 60))
  } else if (tipo_tempo == 2) {
    return Math.floor(t / 60)
  }
  
}

function reduzir_seg(alvo, colecao) {
  let segundo_sobras = 0
  segundo_sobras -= Math.floor(alvo % (colecao[0] * colecao[1] * colecao[2]))
  return Math.abs(segundo_sobras)
}

main()
