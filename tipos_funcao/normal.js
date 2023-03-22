

function say(msg) {
  return msg
}

function say2({msg}) {
  return msg
}

console.log(say('Js is cool'))
console.log(say2({msg: 'Js is nice'}))
