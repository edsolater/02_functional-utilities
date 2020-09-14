import { bindTail } from './bindTail'
import { getTags } from './getTags'

const add = (a: string, b: number, c: number, d: number = 3) => a + b + c
const foo = bindTail(add, 3, 3, 4)

test('基础案例', () => {
  expect(foo.name).toBe(`[bindTail] ${add.name}`)
  expect(getTags(foo)).toEqual(['bindTail'])
  expect(getTags(add)).toEqual([])
})
