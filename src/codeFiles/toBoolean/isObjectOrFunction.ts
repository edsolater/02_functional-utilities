import isFunction from './isFunction'
import isObject from './isObject'

const isObjectOrFunction = (val: any) => isObject(val) || isFunction(val)
export default isObjectOrFunction
