import { isObject } from '../code_1/isObject'

export const isIterable = (val: any) => isObject(val) && typeof val[Symbol.iterator] === 'function'
