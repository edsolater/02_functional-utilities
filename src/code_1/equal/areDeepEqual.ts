//@ts-nocheck
import { areSame } from 'code_1/equal/areSame'
import { isObject } from 'code_1/checkType/isObject'
import { isPromsie } from 'code_1/checkType/isPromsie'
import { areKeyEqual } from './areKeyEqual'

export const areDeepEqual = (val1: unknown, val2: unknown) => {
  if (areSame(val1, val2)) return true
  if (isObject(val1) && !isPromsie(val1) && isObject(val2) && !isPromsie(val2)) {
    if (!areKeyEqual(val1, val2)) return false
    return Object.keys(val1).every(key => areDeepEqual(val1[key], val2[key]))
  }
  return false
}

console.log(areDeepEqual([1, 2], [1, 2]))