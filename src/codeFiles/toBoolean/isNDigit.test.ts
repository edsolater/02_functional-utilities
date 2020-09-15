import isNDigit from './isNDigit'

test('基础案例', () => {
  expect(isNDigit(1000, 4)).toBe(true)
  expect(isNDigit(21000, 5)).toBe(true)
})
