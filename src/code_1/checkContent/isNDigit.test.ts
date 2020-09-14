import { isNDigitCurried } from './isNDigit'

test('基础案例', () => {
  expect(isNDigitCurried(4)(1000)).toBe(true)
  expect(isNDigitCurried(5)(21000)).toBe(true)
})
