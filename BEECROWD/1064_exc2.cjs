

/*
7
-5
6
-3.4
4.6
12

4 valores positivos
7.4
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const va = entrada(lines, 'float')
  const vb = entrada(lines, 'float')
  const vc = entrada(lines, 'float')
  const vd = entrada(lines, 'float')
  const ve = entrada(lines, 'float')
  const vf = entrada(lines, 'float')
  
  const parametros = str_p_int([va, vb, vc, vd, ve, vf])
  const inteiros_positivos_encontrados = obter_classe(parametros)
  const valor_media = media(obter_numeros_positivos([va, vb, vc, vd, ve, vf]))
  const saida = `${inteiros_positivos_encontrados} valores positivos`
  exibir(saida)
  exibir(valor_media)
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

function eh_positivo(num) {
  if (num > 0) {
    return 2
  } else if (num < 0) {
    return 3
  } else {
    return null
  }
}

function eh_positivo_simples(num) {
  return num > 0
}

function obter_classe(colecao) {
  let resultados = []
  
  for(let i = 0; i < colecao.length; i++) {
    resultados.push(eh_positivo(colecao[i]))
  }

  const positivos = resultados.filter((i) => {return i === 2})
  
  return positivos.length
}

function str_p_int(colecao) {
  let dados_convertidos = []
  for (let i = 0; i < colecao.length; i++) {
    dados_convertidos.push(parseInt(colecao[i]))
  }
  return dados_convertidos
}

function decimal(num, casas) {
  return parseFloat(num).toFixed(casas)
}

function obter_numeros_positivos(colecao) {
  let num_positivos = []
  for(let i = 0; i < colecao.length; i++) {
    if (eh_positivo_simples(colecao[i]))
    num_positivos.push(colecao[i])
  }
  return num_positivos
}

function media(colecao) {
  let contador = 0
  
  for (let i = 0; i < colecao.length; i++) {
    contador += colecao[i]
  }

  return decimal(contador / colecao.length, 1)
}

main()
