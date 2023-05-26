

/*
ENTRADA:  7.0 5.0 7.0  SAÍDA: TRIANGULO ACUTANGULO  TRIANGULO ISOSCELES
          6.0 6.0 10.0        TRIANGULO OBTUSANGULO TRIANGULO ISOSCELES
          6.0 6.0 6.0         TRIANGULO ACUTANGULO  TRIANGULO EQUILATERO
          5.0 7.0 2.0         NAO FORMA TRIANGULO
          6.0 8.0 10.0        TRIANGULO RETANGULO
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const a = entrada(lines, 'float')
  const b = entrada(lines, 'float')
  const c = entrada(lines, 'float')
  
  const msg_erro = 'NAO FORMA TRIANGULO'
  const dados_decrescentes = maior_de_tres(a, b, c)
  const eh_triangulo = condicao_existencia(dados_decrescentes[0], dados_decrescentes[1], dados_decrescentes[2])
  
  if (eh_triangulo) {
    tipo_triangulo(dados_decrescentes[0], dados_decrescentes[1], dados_decrescentes[2])
  } else {
    exibir(msg_erro)
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

function comparar_dois(num_a, num_b) {
  return num_a > num_b
}

function maior_de_tres(num_a, num_b, num_c) {
  let resultado = []
  const ids = [num_a, num_b, num_c]

  const comparacoes = [
    comparar_dois(num_a, num_b),
    comparar_dois(num_a, num_c),
    comparar_dois(num_b, num_a),
    comparar_dois(num_b, num_c),
    comparar_dois(num_c, num_a),
    comparar_dois(num_c, num_b),
  ]
  
  let a = `${comparacoes[0]} ${comparacoes[1]}`
  let b = `${comparacoes[2]} ${comparacoes[3]}`
  let c = `${comparacoes[4]} ${comparacoes[5]}`
  
  if (a.length === 9) {
    resultado.push(num_a)
  } if (b.length === 9) {
    resultado.push(num_b)
  } if (c.length === 9) {
    resultado.push(num_c)
  } 

  if (a.length === 10) {
    resultado.push(num_a)
  } if (b.length === 10) {
    resultado.push(num_b)
  } if (c.length === 10) {
    resultado.push(num_c)
  } 

  if (a.length === 11) {
    resultado.push(num_a)
  } if (b.length === 11) {
    resultado.push(num_b)
  } if (c.length === 11) {
    resultado.push(num_c)
  }

  return resultado
}

function eh_maior(num1, num2) {
  return num1 > num2
}

function condicao_existencia(tl1, tl2, tl3) {
  const condicoes = [eh_maior(tl1 + tl2, tl3), eh_maior(tl2 + tl3, tl1), eh_maior(tl1 + tl3, tl2),]
  return condicoes[0] && condicoes[1] && condicoes[2] ? true : false
}

function dois_iguais(n1, n2, n3) {
  let contador = 0
  
  if (n1 === n2) {
    contador++
  } if (n2 === n3) {
    contador++
  }

  if (contador === 1) {
    return 2
  } else if (contador === 2) {
    return 3
  }
}

function tipo_triangulo(a1, a2, a3) {
  
  const tipo_retangulo = (a1 ** 2) === (a2 ** 2) + (a3 ** 2)
  const tipo_obtusangulo = (a1 ** 2) > (a2 ** 2) + (a3 ** 2)
  const tipo_acutangulo = (a1 ** 2) < (a2 ** 2) + (a3 ** 2)
  const tipo_equilatero = dois_iguais(a1, a2, a3) === 3
  const tipo_isosceles = dois_iguais(a1, a2, a3) === 2

  const triangulos = [tipo_retangulo, tipo_obtusangulo, tipo_acutangulo, tipo_equilatero, tipo_isosceles]
  const triangulos_nomes = [
    'TRIANGULO RETANGULO', 'TRIANGULO OBTUSANGULO', 'TRIANGULO ACUTANGULO', 'TRIANGULO EQUILATERO', 'TRIANGULO ISOSCELES' 
  ]
  
  resultados = []

  for (let i = 0; i < triangulos.length; i++) {
    if (triangulos[i]) {
      resultados.push(triangulos_nomes[i])
    }
  }

  for (let i = 0; i < resultados.length; i++) {
    console.log(resultados[i])
  }
  
}

main()
