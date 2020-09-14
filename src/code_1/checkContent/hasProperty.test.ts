import { hasPropertyCurried } from './hasProperty'

const foo = { a: 3 }
const foo2 = () => {}
foo2.a = 3
test('基础案例', () => {
  expect(hasPropertyCurried('a')(foo)).toBe(true)
  expect(hasPropertyCurried('b')(foo)).toBe(false)
  expect(hasPropertyCurried('a')(foo2)).toBe(true)
})
