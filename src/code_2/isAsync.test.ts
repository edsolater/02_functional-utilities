import { isAsync } from './isAsync'

const testAsync = async (params: any) => {
  return 3
}
const testPromiseFunction = (params: any) => Promise.resolve(3)

test('基础案例', () => {
  expect(isAsync(testAsync)).toBe(true)
  expect(isAsync(testPromiseFunction)).toBe(true)
})
