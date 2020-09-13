import { isNDigit } from './isNDigit'

test('基础案例', () => {
  expect(isNDigit(4)(1000)).toBe(true)
  expect(isNDigit(5)(21000)).toBe(true)
})
