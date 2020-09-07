/**
 * **pure** 比较函数
 * 比较两者值的长度是否相等（两者必须都有length属性）
 * @param a 两者之一
 * @param b 两者之一
 * @example
 * isEqualLength('ef','hh') // false
 */
export const isEqualLength = (
  a: { length: number },
  b: { length: number }
): boolean => a.length === b.length
