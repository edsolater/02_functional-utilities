//@ts-nocheck
import isObject from './isObject'
import isPromsie from './isPromsie'
import areSame from './areSame'
import areKeyEqual from './areKeyEqual'

const areDeepEqual = (val1: unknown, val2: unknown) => {
  if (areSame(val1, val2)) return true
  if (isObject(val1) && !isPromsie(val1) && isObject(val2) && !isPromsie(val2)) {
    if (!areKeyEqual(val1, val2)) return false
    return Object.keys(val1).every(key => areDeepEqual(val1[key], val2[key]))
  }
  return false
}
export default areDeepEqual
