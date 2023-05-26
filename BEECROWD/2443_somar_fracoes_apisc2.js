

var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\r').join('').split('\n')


function main() {
  const fracoes = cada_indice_inteiro(tornar_lista(lines.shift(), ' '))
  const divisores = calcular_minimo_divisor_comum([fracoes[1], fracoes[3]])
  const dividendo_a = (divisores / fracoes[1]) * fracoes[0]
  const dividendo_b = (divisores / fracoes[3]) * fracoes[2]
  
  const fracao = [dividendo_a + dividendo_b, divisores]
  console.log(somar_duas_fracoes(fracao))
}

function tornar_string(alvo, separador) {
  return alvo.join(separador)
}

function tornar_lista(alvo, separador) {
  return alvo.split(separador)
}

function cada_indice_inteiro(alvo) {
  let nova_lista = []
  for (let i = 0; i < alvo.length; i++) {
    nova_lista.push(parseInt(alvo[i]))
  }
  return nova_lista
}

function minimo_divisor_comum(divisor) {
  for (let i = 1; i <= divisor; i++) {
    if (divisor % i == 0 && i != 1) {
      return i
    }
  }
}

function calcular_minimo_divisor_comum(alvo) {
  let contador = 1
  for (let i = 0; i < alvo.length; i++) {
    // comparar o divisor do primeiro com o segundo se "i" estiver no primeiro divisor
    // eles sendo iguais, significa que o mmc será o próprio divisor
    // para evitar erros, multiplica-se por 1
    if (alvo[i] == alvo[i + 1] && alvo[i] != alvo.length) {
      contador *= 1
    } else {
      contador *= minimo_divisor_comum(alvo[i])
    }
  }
  return contador
}

function somar_duas_fracoes(alvo) {
  for (let i = 0; i < alvo.length; i++) {
    if (alvo[i] % 2 == 0 && alvo[i + 1] % 2 == 0) {
      alvo[i] /= 2
      alvo[i + 1] /= 2
    }
    if (alvo[i] % 3 == 0 && alvo[i + 1] % 3 == 0) {  
      alvo[i] /= 3
      alvo[i + 1] /= 3
    }
    if (alvo[i] % 5 == 0 && alvo[i + 1] % 5 == 0) {
      alvo[i] /= 5
      alvo[i + 1] /= 5
    }
    if (alvo[i] % 7 == 0 && alvo[i + 1] % 7 == 0) { 
      alvo[i] /= 7
      alvo[i + 1] /= 7
    }
  }
  return tornar_string(alvo, ' ')
}

main()
