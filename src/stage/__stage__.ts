import { isObject } from 'code_1/isObject'

export const areSame = Object.is
export const areEqual = (val1: unknown, val2: unknown) => {
  //TODO
}
export const areDeepEqual = (val1: unknown, val2: unknown) => {
  //TODO
}

export const areEqualArray = (val1: unknown[], val2: unknown[]) => {
  if (!areLengthEqual(val1, val2)) return false
  return val1.every((i, idx) => i == val2[idx])
}

export const areLengthEqual = (val1: {} | object, val2: {} | object) => {
  if (!isObject(val1) || !isObject(val2)) return false
  // TODO: isObject 少了把值限定成object的功能
  const aLength = (val1 as any).length ?? (val1 as any).size
  const bLength = (val2 as any).length ?? (val2 as any).size
  return aLength === bLength
}
export const areSizeEqual = areLengthEqual
export const areKeyEqual = (val1: {} | object, val2: {} | object) =>
  areEqualArray(Object.keys(val1), Object.keys(val2))
export const areValueEqual = (val1: {} | object, val2: {} | object) =>
  areEqualArray(Object.values(val1), Object.values(val2))
