

import { question } from "readline-sync"

var lines = question().split('\n')

function main() {
  let entrada = lines[0].split(' ')
  let cedula = Number(entrada[0])
  
  const cem = distribuir_cedula(cedula, 100)
  cedula = reduzir(cedula, cem, 100)
  
  const cinquenta = distribuir_cedula(cedula, 50)
  cedula = reduzir(cedula, cinquenta, 50)

  const vinte = distribuir_cedula(cedula, 20)
  cedula = reduzir(cedula, vinte, 20)

  const dez = distribuir_cedula(cedula, 10)
  cedula = reduzir(cedula, dez, 10)

  const cinco = distribuir_cedula(cedula, 5)
  cedula = reduzir(cedula, cinco, 5)

  const dois = distribuir_cedula(cedula, 2)
  cedula = reduzir(cedula, dois, 2)

  const um = distribuir_cedula(cedula, 1)
  cedula = reduzir(cedula, um, 1)

  const moedas_cinquenta = distribuir_cedula(cedula, 0.50)
  cedula = reduzir(cedula, moedas_cinquenta, 0.50)

  const moedas_vinte_cinco = distribuir_cedula(cedula, 0.25)
  cedula = reduzir(cedula, moedas_vinte_cinco, 0.25)

  const moedas_dez = distribuir_cedula(cedula, 0.10)
  cedula = reduzir(cedula, moedas_dez, 0.10)

  const moedas_cinco = distribuir_cedula(cedula, 0.05)
  cedula = reduzir(cedula, moedas_cinco, 0.05)

  const moedas_um = distribuir_cedula(cedula, 0.01)
  cedula = reduzir(cedula, moedas_um, 0.01)
  
  exibir('NOTAS:')
  exibir(`${cem} nota(s) de R$ 100.00`)
  exibir(`${cinquenta} nota(s) de R$ 50.00`)
  exibir(`${vinte} nota(s) de R$ 20.00`)
  exibir(`${dez} nota(s) de R$ 10.00`)
  exibir(`${cinco} nota(s) de R$ 5.00`)
  exibir(`${dois} nota(s) de R$ 2.00`)
  exibir('MOEDAS:')
  exibir(`${um} moeda(s) de R$ 1.00`)
  exibir(`${moedas_cinquenta} moeda(s) de R$ 0.50`)
  exibir(`${moedas_vinte_cinco} moeda(s) de R$ 0.25`)
  exibir(`${moedas_dez} moeda(s) de R$ 0.10`)
  exibir(`${moedas_cinco} moeda(s) de R$ 0.05`)
  exibir(`${moedas_um} moeda(s) de R$ 0.01`)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function distribuir_cedula(valor, modular) {
  if (valor >= 1) {
    return Math.floor(Number(valor / modular))
  } else {
    return Math.floor(Number(valor / modular) + 0.001)
  }
}

function reduzir(n_alvo, decrementador, multiplicador) {
  n_alvo -= decrementador * multiplicador
  return n_alvo
}

main()
