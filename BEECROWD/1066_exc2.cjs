

/*
-5  
0   
-3  
-4  
12

3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const v1 = entrada(lines, 'int')
  const v2 = entrada(lines, 'int')
  const v3 = entrada(lines, 'int')
  const v4 = entrada(lines, 'int')
  const v5 = entrada(lines, 'int')

  const topicos = [' valor(es) par(es)', ' valor(es) impar(es)', ' valor(es) positivo(s)', ' valor(es) negativo(s)']
  const contagem = obter_classe([v1, v2, v3, v4, v5])
  
  for (let i = 0; i < topicos.length; i++) {
    exibir(contagem[i] + topicos[i])
  }
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

function eh_par(num) {
  if (num % 2 === 0) {
    return 0
  } else {
    return 1
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

function obter_classe(colecao) {
  let resultados = []
  
  for(let i = 0; i < colecao.length; i++) {
    resultados.push(eh_par(colecao[i]))
    resultados.push(eh_positivo(colecao[i]))
  }

  const pares = resultados.filter((i) => {return i === 0})
  const impares = resultados.filter((i) => {return i === 1})
  const positivos = resultados.filter((i) => {return i === 2})
  const negativos = resultados.filter((i) => {return i === 3})

  return [pares.length, impares.length, positivos.length, negativos.length]
}

main()
