export type Arr = readonly unknown[]
/**
 * @deprecated 这不就是原生的bind吗？
 */
export const bindHead = <T extends Arr, U extends Arr, R>(
  fn: (...args: [...T, ...U]) => R,
  ...headArgs: T
) => (...tailArgs: U) => fn(...headArgs, ...tailArgs)
