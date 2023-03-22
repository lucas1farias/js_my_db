

// Substituir ou remover dados de uma string
// Funciona somente se for feita em outra var (usando 1 alvo)

// Usando para extrair mais de um dado/caracter
let job = 'Developer'
let jobEdited = job.replace('eloper', '')
console.log(jobEdited)

// Usando para substituir um caracter
// ignorar "toFixed"
let value = 9.2
let valueCurrency = value.toFixed(2).replace('.', ',')
console.log(valueCurrency)
