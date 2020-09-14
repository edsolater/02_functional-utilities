import areEntriesEqual from './areEntriesEqual'

test('基础案例', () => {
  expect(areEntriesEqual([1, 2], [1, 2])).toBe(true)
  expect(areEntriesEqual({ a: 3 }, { a: 3 })).toBe(true)
  expect(areEntriesEqual({ a: 3 }, { a: 3, b: 2 })).toBe(false)
})
