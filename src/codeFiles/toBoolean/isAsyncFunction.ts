import isFunction from './isFunction'

/**
 * 检查函数是否由async关键字构建
 */

const isAsyncFunction = (val: any) => isFunction(val) && val.constructor.name === 'AsyncFunction'
export default isAsyncFunction
