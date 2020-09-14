import { applyFuncName } from './applyFuncName'
const testFn = () => {}

test('基础案例', () => {
  const namedFn = applyFuncName('test', testFn)
  expect(namedFn.name).toBe('test')
})
