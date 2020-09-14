import areEqualArray from './areEqualArray'

const areValueEqual = (val1: {} | object, val2: {} | object) =>
  areEqualArray(Object.values(val1), Object.values(val2))
export default areValueEqual
