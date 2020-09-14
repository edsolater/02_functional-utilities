/**
 * 简单地取对象的属性。
 * 但是能取对象中没有的属性，也不会报错。
 * 且提供默认值参数
 * @param obj 对象
 * @param prop 属性
 * @param fallback 默认值
 * @example
 * const a = getProperty({ a: 3, b: true }, 'c', 4) // TYPE: 4
 * const ab = getProperty({ a: 3, b: true }, 'c') // TYPE: undefined
 * const abc = getProperty({ a: 3, b: true }, 'a') // TYPE: number
 */
export const getProperty = <O extends object, P extends keyof O | string, B = undefined>(
  obj: O,
  prop: P,
  fallback?: B
): P extends keyof O ? O[P] : B extends undefined ? undefined : NonNullable<B> =>
  (obj as any)[prop] ?? fallback

const a = getProperty({ a: 3, b: true }, 'c', 4)
const ab = getProperty({ a: 3, b: true }, 'c')
const abc = getProperty({ a: 3, b: true }, 'a')
