import { getGreeting } from './getGreeting.js'
import { replaceName } from './replaceName.js'

const old = getGreeting('euler.')
console.log(old)
const neww = replaceName(old, 'euler', 'Leibniz')

console.log(neww)
console.log(neww)

console.log([3, 2, 1, 15, 4, 34213423].sort((a, b) => a - b))
const test = ('b' + 'a' + +'a' + 'a').toLowerCase()
console.log(test)
