import { partialCall } from './partialCall'

const add = (a: number, b: string) => a + b
const testFn = partialCall(add, 3)
const testFn2 = add.bind(undefined, 3)

test('基础案例', () => {
  expect(testFn('1')).toBe(add(3, '1'))
  expect(testFn2('1')).toBe(add(3, '1'))
})
