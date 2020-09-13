import { isObject } from 'code_1/judger/isObject'
import { isPromsie } from 'code_1/judger/isPromsie'

export const areEqualArray = (val1: unknown[], val2: unknown[]) => {
  if (!areLengthEqual(val1, val2)) return false
  return val1.every((i, idx) => i == val2[idx])
}

/* -------------------------------------------------------------------------- */

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
export const areEntriesEqual = (val1: {} | object, val2: {} | object) =>
  areEqualArray(Object.entries(val1).flat(), Object.entries(val2).flat())

/* -------------------------------------------------------------------------- */

export const areSame = Object.is
export const areEqual = (val1: unknown, val2: unknown) => {
  if (areSame(val1, val2)) return true
  if (isObject(val1) && !isPromsie(val1) && isObject(val2) && !isPromsie(val2))
    return areEntriesEqual(val1 as object, val2 as object)
  return false
}
export const areDeepEqual = (val1: unknown, val2: unknown) => {
  if (areSame(val1, val2)) return true
  if (isObject(val1) && !isPromsie(val1) && isObject(val2) && !isPromsie(val2))
    return areDeepEqual(val1, val2)
  return false
}
