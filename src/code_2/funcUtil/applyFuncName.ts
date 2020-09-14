export const applyFuncName = <F extends Function>(name: string, func: F): F => {
  const temp = {
    [name]: (...args) => func(...args)
  }
  return temp[name] as any
}
