import isObject from './isObject'

const isObjectLiteral = (val: any) => isObject(val) && val.constructor === Object
export default isObjectLiteral
