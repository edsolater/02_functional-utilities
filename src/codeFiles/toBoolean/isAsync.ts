import isAsyncFunction from './isAsyncFunction'
import isFunction from './isFunction'
import isPromsie from './isPromsie'
/**
 * 检查函数是否返回Promise
 * 注意：这会使非async关键字构建的函数运行一次。
 */
const isAsync = (val: any) => isFunction(val) && (isAsyncFunction(val) || isPromsie(val()))
export default isAsync