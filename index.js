console.log('hi node.')

function getGreeting(name = 'stranger') {
  return `hi ${name}!`
}

function replaceName(text, name, newName) {
  return text.replaceAll(name, newName)
}

const old = getGreeting('john')
console.log(old)
const neww = replaceName(old, 'john', 'markus')

console.log(neww)
