import { hasProperty } from './hasProperty'

const foo = { a: 3 }
const foo2 = () => {}
foo2.a = 3
test('基础案例', () => {
  expect(hasProperty('a')(foo)).toBe(true)
  expect(hasProperty('b')(foo)).toBe(false)
  expect(hasProperty('a')(foo2)).toBe(true)
})
