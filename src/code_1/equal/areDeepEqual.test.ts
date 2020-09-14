import areDeepEqual from './areDeepEqual'

test('基础案例', () => {
  expect(areDeepEqual([1, 2], [1, 2])).toBe(true)
  expect(areDeepEqual([1, 2], [1, 3])).toBe(false)
  expect(areDeepEqual([], [])).toBe(true)
  expect(areDeepEqual([1, 2], [1, 2, 4])).toBe(false)
  expect(areDeepEqual([1, 2, []], [1, 2, []])).toBe(true)
})
