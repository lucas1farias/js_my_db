

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const lado_a = entrada(lines, 'float')
  const lado_b = entrada(lines, 'float')
  const lado_c = entrada(lines, 'float')
  
  const rotulos = ['Area = ', 'Perimetro = ']
  const eh_triangulo = condicao_existencia(lado_a, lado_b, lado_c)
  
  if (eh_triangulo) {
    const triangulo_perimetro = decimal(obter_perimetro_triangulo(lado_a, lado_b, lado_c), 1)
    exibir(rotulos[1] + triangulo_perimetro)
  } else {
    const area_trapezio = decimal(obter_area_trapezio(lado_a, lado_b, lado_c), 1)
    exibir(rotulos[0] + area_trapezio)
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

function eh_maior(num1, num2) {
  return num1 > num2
}

function condicao_existencia(tl1, tl2, tl3) {
    const condicoes = [eh_maior(tl1 + tl2, tl3), eh_maior(tl2 + tl3, tl1), eh_maior(tl1 + tl3, tl2),]
    return condicoes[0] && condicoes[1] && condicoes[2] ? true : false
}

function obter_area_trapezio(base_min, base_max, alt) {
  return ((base_max + base_min) * alt) / 2
}

function obter_perimetro_triangulo(tl1, tl2, tl3) {
  return tl1 + tl2 + tl3
}

function decimal(num, casas) {
  return parseFloat(num).toFixed(casas)
}

main()
