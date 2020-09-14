export const bindFunctionName = <F extends Function>(func: F, name: string): F => {
  const temp = {
    [name]: (...args) => func(...args)
  }
  return temp[name] as any
}
