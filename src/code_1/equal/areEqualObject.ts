import { isObject } from '../checkType/isObject'
import { areEqualArray } from './areEqualArray'

export const areEqualObject = (val1: object, val2: object) =>
  isObject(val1) &&
  isObject(val2) &&
  areEqualArray(Object.entries(val1).flat(), Object.entries(val2).flat())
