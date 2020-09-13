import { isObject } from 'code_1/judger/isObject'

/* -------------------------------------------------------------------------- */

export const areLengthEqual = (val1: {} | object, val2: {} | object) => {
  if (!isObject(val1) || !isObject(val2)) return false
  // TODO: isObject 少了把值限定成object的功能
  const aLength = (val1 as any).length ?? (val1 as any).size ?? Object.keys(val1).length
  const bLength = (val2 as any).length ?? (val2 as any).size ?? Object.keys(val2).length
  return aLength === bLength
}
