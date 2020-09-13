import { isObject } from '../code_1/isObject'

export const isObjectLiteral = (val: any) => isObject(val) && val.constructor === Object
