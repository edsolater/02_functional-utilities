import areEqualArray from './areEqualArray'

const areEntriesEqual = (val1: {} | object, val2: {} | object) =>
  areEqualArray(Object.entries(val1).flat(), Object.entries(val2).flat())
export default areEntriesEqual