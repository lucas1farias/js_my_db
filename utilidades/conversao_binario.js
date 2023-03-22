

function binToDecimal(bin) {
  let dec = 0;

  for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) {
    dec += bin[c] * Math.pow(2, i);
    console.log(`bin[${c}] * Math.pow(2, ${i}) -> ${bin[c]} * ${Math.pow(2, i)}`)
  }

  return dec;
}

console.log(
  binToDecimal('1001'),
  binToDecimal('1101010') === parseInt('1101010', 2)
)
