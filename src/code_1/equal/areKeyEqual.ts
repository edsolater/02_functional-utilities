import { areEqualArray } from 'code_1/equal/areEqualArray'

export const areKeyEqual = (val1: {} | object, val2: {} | object) =>
  areEqualArray(Object.keys(val1), Object.keys(val2))
