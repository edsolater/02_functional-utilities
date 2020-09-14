type Arr = readonly unknown[]

export const partialCall = <T extends Arr, U extends Arr, R>(
  fn: (...args: [...T, ...U]) => R,
  ...headArgs: T
) => (...tailArgs: U) => fn(...headArgs, ...tailArgs)
