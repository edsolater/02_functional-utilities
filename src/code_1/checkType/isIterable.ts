import { isObject } from './isObject'

export const isIterable = (val: any) => isObject(val) && typeof val[Symbol.iterator] === 'function'
