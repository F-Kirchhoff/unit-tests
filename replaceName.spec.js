import { describe, expect, it } from '@jest/globals'
import { replaceName } from './replaceName'

describe('replaceName', () => {
  it('returns Hello Alex when called with replaceName("Hello Jane","Jane","Alex")', () => {
    const result = replaceName('Hello Jane', 'Jane', 'Alex')
    expect(result).toBe('Hello Alex')
  })
  it('returns "Alex, do you live in Alexandria?" when called with replaceName("Jane, do you live in Janeandria?", "Jane", "Alex") ', () => {
    const result = replaceName(
      'Jane, do you live in Janeandria?',
      'Jane',
      'Alex'
    )
    expect(result).toBe('Alex, do you live in Alexandria?')
  })
})
