import isObject from './isObject'

const isIterable = (val: any) => isObject(val) && typeof val[Symbol.iterator] === 'function'
export default isIterable
