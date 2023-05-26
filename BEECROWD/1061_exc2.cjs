

/*
Dia 5
08 : 12 : 23
Dia 9
06 : 13 : 23

3 dia(s)
22 hora(s)
1 minuto(s)
0 segundo(s)
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const a = entrada(lines, 'str')
  const b = entrada(lines, 'str')
  const c = entrada(lines, 'str')
  const d = entrada(lines, 'str')
  
  const dia_inicial = inteiro(a.split(' ')[1])
  const data_inicial = str_p_int(b.split(':'))
  const dia_final = inteiro(c.split(' ')[1])
  const data_final = str_p_int(d.split(':'))
  
  const resultado = calcular_tempo(data_inicial, data_final, dia_inicial, dia_final)
  const rotulos = `${resultado[0]} dia (s)\n${resultado[1]} hora (s)\n${resultado[2]} minuto (s)\n${resultado[3]} segundo (s)`
  
  exibir(rotulos)
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

function str_p_int(colecao) {
  let dados_convertidos = []
  for (let i = 0; i < colecao.length; i++) {
    dados_convertidos.push(parseInt(colecao[i]))
  }
  return dados_convertidos
}

function inteiro(num) {
  return parseInt(num)
}

function calcular_tempo(dta, dtb, di, df) {
  const dia_inteiro = 24
  const hora_inteira = 60
  let dia = 0

  if (dtb[0] >= dta[0] && dtb[1] >= dta[1] && dtb[2] >= dta[2]) {
    dia = df - di
  } else {
    dia = (df - di) - 1
  }
  
  let diferenca = 0
  let horas = 0
  let minutos = 0
  let segundos = 0

  if (dta[0] > dtb[0]) {
    diferenca = dta[0] - dtb[0]
    horas = dia_inteiro - diferenca
  } 
  
  else if (dta[0] < dtb[0]) {
    diferenca = dtb[0] - dta[0]
    horas = dia_inteiro + diferenca
  } 
  
  else {
    horas = dia_inteiro
  }

  
  if (dta[1] > dtb[1]) {
    diferenca = dta[1] - dtb[1]
    minutos = hora_inteira - diferenca
  } 
  
  else if (dta[1] < dtb[1]) {
    diferenca = dtb[1] - dta[1]
    minutos = diferenca
  } 
  
  else {
    minutos = 0
  }

  
  if (dta[2] > dtb[2]) {
    diferenca = dta[2] - dtb[2]
    minutos = hora_inteira - diferenca
  } 
  
  else if (dta[2] < dtb[2]) {
    diferenca = dtb[2] - dta[2]
    
    if (hora_inteira + diferenca > hora_inteira) {
      minutos = minutos + 1
      segundos = hora_inteira - diferenca
    } else {
      segundos = diferenca
    }
  } 
  
  else {
    segundos = 0
  }
  return [dia, horas, minutos, segundos]
}

main()
