

// Esse recurso só funciona mediante instalação de uma biblioteca
// Esse recurso só funciona se o arquivo que usa os inputs for executado em terminal
// INSTALAÇÃO || npm install readline-sync (na raiz do projeto)
// EXECUÇÃO   || node nome_do_arquivo.js

class Imc {
  constructor() {
    // Biblioteca em uso (é inserido numa variável o comando necessário p/ chamar inputs)
    this.input = require('readline-sync')
    
    // Inputs: string, Number, Number
    // Anteriormente, os inputs eram apenas "+this.input.question()" e o tratamento se dava em "if"
    // Ao mudar p/ "this.input.questionFloat", os dados de input ganham um tratamento automático, ignorando o "if"
    this.name = this.input.question('Digite seu nome ---> ')
    this.weight = this.input.questionFloat('Digite seu peso ---> ')
    this.height = this.input.questionFloat('Digite sua altura (em metros) ---> ')
    
    // Cálculo
    this.imc = this.calculate()
    
    // Tratamento e resultado
    this.msg = undefined
    if (this.imc === 'NaN') {
      this.msg = 'Seu imc não pôde ser calculado!'
    } else {
      this.msg = `Olá, ${this.name}. Seu resultado de imc: ${this.calculate()}`
    }
  }

  calculate() {
    let calculus = this.weight / (this.height * this.height)
    return calculus.toFixed(2)
  }
}

let imc = new Imc()
console.log(imc.msg)
