import inRange from './inRange'

test('基础案例', () => {
  expect(inRange(1, 2)(1.5)).toBe(true)
  expect(inRange(-1, 2)(100)).toBe(false)
})
