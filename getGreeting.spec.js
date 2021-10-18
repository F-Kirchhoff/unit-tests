import { describe, it } from '@jest/globals'
import { getGreeting } from './getGreeting.js'

const names = ['Leonardo', 'name', '@tribal', 'something dumb']

describe('getGreeting', () => {
  it('returns a string "hi stranger!" if called without arguments', () => {
    const result = getGreeting()
    expect(result).toBe('hi stranger!')
  })
  names.forEach(name => {
    it(`returns a string "hi ${name}!" if called with input ${name}`, () => {
      const result = getGreeting(`${name}`)
      expect(result).toBe(`hi ${name}!`)
    })
  })
  it('Returns "Hello Coach" when called with getGreeting("Jerry")', () => {
    const result = getGreeting('Jerry')
    expect(result).toBe('Hello Coach')
  })
})
