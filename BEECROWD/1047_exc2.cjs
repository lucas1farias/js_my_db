

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const h_inicio = entrada(lines, 'int')
  const m_inicio = entrada(lines, 'int')
  const h_fim = entrada(lines, 'int')
  const m_fim = entrada(lines, 'int')
  const h_final = calcular_tempo(h_inicio, m_inicio, h_fim, m_fim)
  const saida = `O JOGO DUROU ${h_final[0]} HORA(S) E ${h_final[1]} MINUTO(S)`
  exibir(saida)
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

function calcular_tempo(h_inicio, m_inicio, h_fim, m_fim) {
  const meia_noite = 24
  const minuto = 60
  let hora_contada = 0
  let minuto_contado = 0

  if (h_fim > h_inicio && m_fim > m_inicio) {
    hora_contada = h_fim - h_inicio
    minuto_contado = m_fim - m_inicio
  } 
  if (h_fim > h_inicio && m_fim === m_inicio) {
    hora_contada = h_fim - h_inicio
    minuto_contado = 0
  }
  if (h_fim > h_inicio && m_fim < m_inicio) {
    hora_contada = (h_fim - h_inicio) - 1
    minuto_contado = minuto - (m_inicio - m_fim)
  }
  if (h_fim == h_inicio && m_fim > m_inicio) {
    hora_contada = 0
    minuto_contado = m_fim - m_inicio
  }
  if (h_fim == h_inicio && m_fim < m_inicio) {
    hora_contada = meia_noite - 1
    minuto_contado = minuto - (m_inicio - m_fim)
  }
  if (h_fim === h_inicio && m_fim === m_inicio) {
    hora_contada = meia_noite
    minuto_contado = 0
  }
  if (h_fim < h_inicio && m_fim > m_inicio) {
    hora_contada = meia_noite - (h_inicio - h_fim)
    minuto_contado = m_fim - m_inicio
  }
  if (h_fim < h_inicio && m_fim === m_inicio) {
    hora_contada = meia_noite - (h_inicio - h_fim)
    minuto_contado = 0
  }
  if (h_fim < h_inicio && m_fim < m_inicio) {
    hora_contada = meia_noite - (h_inicio - h_fim) - 1
    minuto_contado = minuto - (m_inicio - m_fim)
  }
  
  return [hora_contada, minuto_contado]
}

main()
