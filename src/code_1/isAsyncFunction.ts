import { isFunction } from './isFunction'

/**
 * 检查函数是否由async关键字构建
 */

export const isAsyncFunction = (val: any) =>
  isFunction(val) && val.constructor.name === 'AsyncFunction'
