

// Converter um valor de hora e minuto p/ minutos

const getMinute = (hour, min) => {
  const hourToMinute = 60
  const calculus = (hour * hourToMinute) + min
  return calculus  
}

console.log(getMinute(6, 22))
