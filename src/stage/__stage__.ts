export const isArray = Array.isArray

export const isFunction = (val: any) => typeof val === "function"

export const isObject = (val: any) => typeof val === "object" && val !== null

export const isObjectLiteral = (val: any) =>
  isObject(val) && val.constructor === Object

export const isGenerator = (val: any) =>
  val.constructor.name === "GeneratorFunction"

export const isIterable = (val: any) =>
  isObject(val) && typeof val[Symbol.iterator] === "function"

export const isPromsie = (val: any) => val instanceof Promise

/**
 * 检查函数是否由async关键字构建
 */
export const isAsyncFunction = (val: any) =>
  isFunction(val) && val.constructor.name === "AsyncFunction"
/**
 * 检查函数是否返回Promise
 * 注意：这会使非async关键字构建的函数运行一次。
 */
export const isAsync = (val: any) =>
  isFunction(val) && (isAsyncFunction(val) || isPromsie(val()))

/**以上判断的万能版，需要2个参数，一般不用 */
export const isType = (judger: Function) => (val: any) => judger(val)
