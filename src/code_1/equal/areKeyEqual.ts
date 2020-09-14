import areEqualArray from './areEqualArray'

const areKeyEqual = (val1: {} | object, val2: {} | object) =>
  areEqualArray(Object.keys(val1), Object.keys(val2))
export default areKeyEqual