import { isObject } from './isObject'

export const isObjectLiteral = (val: any) => isObject(val) && val.constructor === Object
