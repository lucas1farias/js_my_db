

function rgb() {
  const inks = [...Array(256).keys()]
  
  let red = Math.floor(Math.random() * inks.length - 0)
  let green = Math.floor(Math.random() * inks.length - 0)
  let blue =Math.floor(Math.random() * inks.length - 0)

  return `rgba(${inks[red]},${inks[green]},${inks[blue]})`
}

for(let i = 0; i < 1; i++) {
  console.log(rgb())
}
