

const brazilianMoneyFormat = value => `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`

let moneyAmount = 72
console.log(`O valor de ${moneyAmount} reais convertido, se torna: ${brazilianMoneyFormat(value=moneyAmount)}`)
