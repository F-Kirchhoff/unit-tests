import { getGreeting } from './getGreeting.js'
import { replaceName } from './replaceName.js'

const old = getGreeting('euler.')
console.log(old)
const neww = replaceName(old, 'euler', 'Leibniz')

console.log(neww)
