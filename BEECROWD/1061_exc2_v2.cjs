

/*
  Dia 5 ... 08:12:23
  Dia 9 ... 06:13:23

  3 dia(s)
  22 hora(s)
  1 minuto(s)
  0 segundo(s)
  
1. Eu estou tentando resolver uma questão que calcula a duração de um evento na plataforma "Beecrowd"
2. Eis aqui o meu código

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const a = entrada(lines, 'str')
  const b = entrada(lines, 'str')
  const c = entrada(lines, 'str')
  const d = entrada(lines, 'str')
  
  const dia_inicial = inteiro(a.split(' ')[1])
  const dia_final = inteiro(c.split(' ')[1])
  
  const data_inicial = str_p_int(b.split(':'))
  const data_final = str_p_int(d.split(':'))
  
  const dias_corridos = obter_dias(data_inicial, data_final, dia_inicial, dia_final)
  
  const data_inicial_em_segundos = obter_segundos(data_inicial[0], 0) + obter_segundos(data_inicial[1], 1) + data_inicial[2]
  const data_final_em_segundos = obter_segundos(data_final[0], 0) + obter_segundos(data_final[1], 1) + data_final[2]
  
  const datas_subt = Math.abs(data_inicial_em_segundos - data_final_em_segundos)
  const datas_soma = Math.abs(data_inicial_em_segundos + data_final_em_segundos)
  const dia_inteiro = obter_segundos(24, 0)
  
  let tempo_corrido = 0
  if (datas_soma > dia_inteiro) {
    tempo_corrido = dia_inteiro + datas_subt
  } else {
    tempo_corrido = dia_inteiro - datas_subt
  }
  const duracao = converter_segundos(tempo_corrido)
  
  const saida = `${dias_corridos} dia(s)\n${duracao[0]} hora(s)\n${duracao[1]} minuto(s)\n${duracao[2]} segundo(s)`
  
  exibir(saida)
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

function obter_dias(data_inicial, data_final, dia_inicial, dia_final) {
  
  const dia_inteiro = 24
  const hora_inteira = 60
  let dia = 0
  
  let data_final_hora_pelo_menos_igual = data_final[0] >= data_inicial[0]
  let data_final_minuto_pelo_menos_igual = data_final[1] >= data_inicial[1]
  let data_final_segundo_pelo_menos_igual = data_final[2] >= data_inicial[2]
  
  if (data_final_hora_pelo_menos_igual && data_final_minuto_pelo_menos_igual && data_final_segundo_pelo_menos_igual) {
    dia = dia_final - dia_inicial
  } else {
    dia = (dia_final - dia_inicial) - 1
  }
  return dia
}

function obter_segundos(dado_de_tempo, tipo) {
  if (tipo == 0) {
    return dado_de_tempo * 3600
  } else if (tipo == 1) {
    return dado_de_tempo * 60
  }
}

function converter_segundos(t) {
  let hora = 0
  let min = 0
  let seg = 0

  while (t >= 0) {
    if (t > 3600) {
      t -= 3600
      hora++
    }
    
    if (t > 60) {
      t -= 60
      min++
    } 
    
    if (t <= 60) {
      seg = t
      break
    }
  }

  let relatorio = [hora, min, seg]
  
  if (relatorio[1] == 60) {
    relatorio[1] = 0
    relatorio[0] += 1
  } if (relatorio[2] == 60) {
    relatorio[2] = 0
    relatorio[1] += 1
  }
  return relatorio
}

main()

3. Ao submeter, a plataforma me informa "wrong answer 5%" e exibe dois exemplos de erro

Meu código: 21 hora(s) 62 minuto(s)
Código esperado: 22 hora(s) 2 minuto(s)

Meu código: 23 hora(s) 59 minuto(s)
Código esperado: 0 hora(s) 0 minuto(s)

4. O que há de incorreto no meu código?
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const a = entrada(lines, 'str')
  const b = entrada(lines, 'str')
  const c = entrada(lines, 'str')
  const d = entrada(lines, 'str')
  
  const dia_inicial = inteiro(a.split(' ')[1])
  const dia_final = inteiro(c.split(' ')[1])
  
  const data_inicial = str_p_int(b.split(':'))
  const data_final = str_p_int(d.split(':'))
  
  const dias_corridos = obter_dias(data_inicial, data_final, dia_inicial, dia_final)
  
  const data_inicial_em_segundos = obter_segundos(data_inicial[0], 0) + obter_segundos(data_inicial[1], 1) + data_inicial[2]
  const data_final_em_segundos = obter_segundos(data_final[0], 0) + obter_segundos(data_final[1], 1) + data_final[2]
  
  const datas_subt = Math.abs(data_inicial_em_segundos - data_final_em_segundos)
  const datas_soma = Math.abs(data_inicial_em_segundos + data_final_em_segundos)
  const dia_inteiro = obter_segundos(24, 0)
  
  let tempo_corrido = 0
  if (datas_soma > dia_inteiro) {
    tempo_corrido = dia_inteiro + datas_subt
  } else {
    tempo_corrido = dia_inteiro - datas_subt
  }
  const duracao = converter_segundos(tempo_corrido)
  
  const saida = `${dias_corridos} dia(s)\n${duracao[0]} hora(s)\n${duracao[1]} minuto(s)\n${duracao[2]} segundo(s)`
  
  exibir(saida)
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

function obter_dias(data_inicial, data_final, dia_inicial, dia_final) {
  
  const dia_inteiro = 24
  const hora_inteira = 60
  let dia = 0
  
  let data_final_hora_pelo_menos_igual = data_final[0] >= data_inicial[0]
  let data_final_minuto_pelo_menos_igual = data_final[1] >= data_inicial[1]
  let data_final_segundo_pelo_menos_igual = data_final[2] >= data_inicial[2]
  
  if (data_final_hora_pelo_menos_igual && data_final_minuto_pelo_menos_igual && data_final_segundo_pelo_menos_igual) {
    dia = dia_final - dia_inicial
  } else {
    dia = (dia_final - dia_inicial) - 1
  }
  return dia
}

function obter_segundos(dado_de_tempo, tipo) {
  if (tipo == 0) {
    return dado_de_tempo * 3600
  } else if (tipo == 1) {
    return dado_de_tempo * 60
  }
}

function converter_segundos(t) {
  let hora = 0
  let min = 0
  let seg = 0

  while (t >= 0) {
    if (t > 3600) {
      t -= 3600
      hora++
    }
    
    if (t > 60) {
      t -= 60
      min++
    } 
    
    if (t <= 60) {
      seg = t
      break
    }
  }

  let relatorio = [hora, min, seg]
  
  if (relatorio[2] == 60) {
    relatorio[1] += 1
    relatorio[2] = 0
  }

  if (relatorio[2] > 60) {
    relatorio[1] += (relatorio[2] - 60)
    relatorio[2] = 0
  }

  if (relatorio[1] == 60) {
    relatorio[1] = 0
    relatorio[0] += 1
  }

  if (relatorio[1] > 60) {
    relatorio[1] = (relatorio[1] - 60)
    relatorio[0] += 1
  }

  return relatorio
}

main()