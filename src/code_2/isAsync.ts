import { isAsyncFunction } from '../code_1/isAsyncFunction'
import { isFunction } from '../code_1/isFunction'
import { isPromsie } from '../code_1/isPromsie'

/**
 * 检查函数是否返回Promise
 * 注意：这会使非async关键字构建的函数运行一次。
 */

export const isAsync = (val: any) => isFunction(val) && (isAsyncFunction(val) || isPromsie(val()))