type Arr = readonly unknown[]
/**
 * @deprecated 这不就是bind吗？
 * @param fn 
 * @param headArgs 
 */
export const partialCall = <T extends Arr, U extends Arr, R>(
  fn: (...args: [...T, ...U]) => R,
  ...headArgs: T
) => (...tailArgs: U) => fn(...headArgs, ...tailArgs)
