

import { question } from "readline-sync"

var lines = question().split('\n')

function main() {
  let entrada = lines[0].split(' ')
  const cedula = Number(entrada[0])
  
  const cedulas_de_cem = modulacao(cedula, 100, 'divisão')
  const cedulas_de_cem_resto = modulacao(cedula, 100, 'modular')
  const cedulas_de_cinquenta = modulacao(cedulas_de_cem_resto, 50, 'divisão')
  const cedulas_de_cinquenta_resto = modulacao(cedulas_de_cem_resto, 50, 'modular')
  const cedulas_de_vinte = modulacao(cedulas_de_cinquenta_resto, 20, 'divisão')
  const cedulas_de_vinte_resto = modulacao(cedulas_de_cinquenta_resto, 20, 'modular')
  const cedulas_de_dez = modulacao(cedulas_de_vinte_resto, 10, 'divisão')
  const cedulas_de_dez_resto = modulacao(cedulas_de_vinte_resto, 10, 'modular')
  const cedulas_de_cinco = modulacao(cedulas_de_dez_resto, 5, 'divisão')
  const cedulas_de_cinco_resto = modulacao(cedulas_de_dez_resto, 5, 'modular')
  const cedulas_de_dois = modulacao(cedulas_de_cinco_resto, 2, 'divisão')
  const cedulas_de_dois_resto = modulacao(cedulas_de_cinco_resto, 2, 'modular')
  
  const cedulas_de_um = modulacao(cedulas_de_dois_resto, 1, 'divisão')
  const cedulas_de_um_resto = modulacao(cedulas_de_dois_resto, 1, 'modular')
  
  const moedas_cinquenta = modulacao(cedulas_de_um_resto, 0.50, 'divisão')
  const moedas_cinquenta_resto = modulacao(cedulas_de_um_resto, 0.50, 'modular')
  const moedas_vinte_e_cinco = modulacao(moedas_cinquenta_resto, 0.25, 'divisão')
  const moedas_vinte_e_cinco_resto = modulacao(moedas_cinquenta_resto, 0.25, 'modular')
  const moedas_dez = modulacao(moedas_vinte_e_cinco_resto, 0.10, 'divisão')
  const moedas_dez_resto = modulacao(moedas_vinte_e_cinco_resto, 0.10, 'modular')
  const moedas_cinco = modulacao(moedas_dez_resto, 0.05, 'divisão')
  const moedas_cinco_resto = modulacao(moedas_dez_resto, 0.05, 'modular')
  const moedas_um = modulacao(moedas_cinco_resto, 0.01, 'divisão')
  
  exibir('NOTAS:')
  exibir(`${cedulas_de_cem} nota(s) de R$ 100.00`)
  exibir(`${cedulas_de_cinquenta} nota(s) de R$ 50.00`)
  exibir(`${cedulas_de_vinte} nota(s) de R$ 20.00`)
  exibir(`${cedulas_de_dez} nota(s) de R$ 10.00`)
  exibir(`${cedulas_de_cinco} nota(s) de R$ 5.00`)
  exibir(`${cedulas_de_dois} nota(s) de R$ 2.00`)
  exibir('MOEDAS:')
  exibir(`${cedulas_de_um} moeda(s) de R$ 1.00`)
  exibir(`${moedas_cinquenta} moeda(s) de R$ 0.50`)
  exibir(`${moedas_vinte_e_cinco} moeda(s) de R$ 0.25`)
  exibir(`${moedas_dez} moeda(s) de R$ 0.10`)
  exibir(`${moedas_cinco} moeda(s) de R$ 0.05`)
  exibir(`${moedas_um} moeda(s) de R$ 0.01`)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function modulacao(valor, modular, operacao) {
    if (operacao == 'divisão') {
      return Math.floor(valor / modular)
    } else {
      return valor % modular
    } 
}

main()
