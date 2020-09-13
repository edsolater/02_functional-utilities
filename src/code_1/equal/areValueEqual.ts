import { areEqualArray } from 'code_1/equal/areEqualArray'

export const areValueEqual = (val1: {} | object, val2: {} | object) =>
  areEqualArray(Object.values(val1), Object.values(val2))
