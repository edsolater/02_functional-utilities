import isInt from '../checkType/isInt'

const isNDigit = (n: number, digit: number) => isInt(n) && String(n).length === digit
export default isNDigit
export const isNDigitCurried = (digit: number) => (n: number) => isNDigit(n, digit)
