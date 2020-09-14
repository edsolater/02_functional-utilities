import areLengthEqual from './areLengthEqual'

test('基础案例', () => {
  expect(areLengthEqual([1, 2], [1, 2])).toBe(true)
  expect(areLengthEqual({ a: 2 }, { b: 3 })).toBe(true)
  expect(areLengthEqual({ a: 2 }, { b: 3, d: 5 })).toBe(false)
})
