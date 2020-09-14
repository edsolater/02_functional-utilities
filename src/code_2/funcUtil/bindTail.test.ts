import bindTail from './bindTail'

const add = (a: string, b: number, c: number, d: number = 3) => a + b + c
const foo = bindTail(add, 3, 3, 4)

test('基础案例', () => {
  expect(foo('2')).toBe(add('2', 3, 3, 4))
  expect(foo.name).toBe(`[bindTail] ${add.name}`)
})
