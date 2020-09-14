import { isFunction } from './isFunction'
import { isObject } from './isObject'

export const isObjectOrFunction = (val: any) => isObject(val) || isFunction(val)
