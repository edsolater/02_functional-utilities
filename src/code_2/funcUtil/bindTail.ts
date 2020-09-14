import { getProperty } from 'code_2/parseObject/getProperty'
import { bindFunctionName } from './bindFunctionName'
import { bindFunctionProperty } from './bindFunctionProperty'

export type Arr = readonly unknown[]

/**
 * 绑定除第一传参以外的其他传参，返回新的函数
 * 一般用于绑定特定的函数配置
 * @param fn 目标函数
 * @param tailArgs 函数的第二传参、第三传参、第四传参……
 * @example
 * const add = (a: string, b: number, c: number ,d: number) => a + b + c
 * const foo = bindTail(add, 3, 3) // foo :: string -> number
 * const foo2 = bindTail(add, 3, 3, 4) // foo :: string -> number
 */
export const bindTail = <T, U extends Arr, R>(fn: (...args: [T, ...U]) => R, ...tailArgs: U) =>
  bindFunctionProperty(
    bindFunctionName((head: T) => fn(head, ...tailArgs), `[bindTail] ${fn.name}`),
    { tags: [...getProperty(fn, 'tags', []), 'bindTail'] }
  )
