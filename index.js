import { getGreeting } from './getGreeting.js'
import { replaceName } from './replaceName.js'

const old = getGreeting('john')
console.log(old)
const neww = replaceName(old, 'john', 'markus')

console.log(neww)
