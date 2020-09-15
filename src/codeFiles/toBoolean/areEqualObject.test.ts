import areEqualObject from './areEqualObject'

test('基础案例', () => {
  expect(areEqualObject({ a: 1 }, { a: 1 })).toBe(true)
  expect(areEqualObject({ a: 1 }, { a: 1, b: 2 })).toBe(false)
  expect(areEqualObject([1], [1])).toBe(true)
  expect(areEqualObject([1], [2])).toBe(false)
})
