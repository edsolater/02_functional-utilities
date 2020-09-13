import { areEqualArray } from 'code_1/equal/areEqualArray'

export const areEntriesEqual = (val1: {} | object, val2: {} | object) =>
  areEqualArray(Object.entries(val1).flat(), Object.entries(val2).flat())
