import isObject from '../checkType/isObject'
import isPromsie from '../checkType/isPromsie'
import areEntriesEqual from './areEntriesEqual'
import areSame from './areSame'

const areShallowEqual = (val1: unknown, val2: unknown) => {
  if (areSame(val1, val2)) return true
  if (isObject(val1) && !isPromsie(val1) && isObject(val2) && !isPromsie(val2))
    return areEntriesEqual(val1 as object, val2 as object)
  return false
}
export default areShallowEqual

