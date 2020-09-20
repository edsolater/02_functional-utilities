type ConditionPair<T> = [
  matchTarget: any | ((val: T) => boolean),
  returnValue: any | ((val: T) => any)
]
/**
 * 多重判断
 * @param val 需要判断的值
 * @param conditionPairs [判断条件，条件命中时的返回]
 * @param defaultValue 默认值
 * @example
 * const foo = match('hello', [
 *  ['hello', true],
 *  ['world', false]
 * ], false)
 * console.log(foo) // true
 *
 * const foo = match('hello', [
 *  [(val) => val == 'hello', () => true],
 *  [(val) => val == 'world', () => false]
 * ], false)
 * console.log(foo) // true
 *
 */
const match = <T, U>(val: T, conditionPairs: ConditionPair<T>[], defaultValue?: U) => {
  for (const conditionPair of conditionPairs) {
    const [matchTarget, returnValue] = conditionPair
    const isMatched = typeof matchTarget === 'function' ? matchTarget(val) : val === matchTarget
    if (isMatched) return typeof returnValue === 'function' ? returnValue(val) : returnValue
  }
  return defaultValue
}

export default match
