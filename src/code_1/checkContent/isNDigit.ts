import { isInt } from '../checkType/isInt'

export const isNDigit = (n: number, digit: number) => isInt(n) && String(n).length === digit
export const isNDigitCurried = (digit: number) => (n: number) => isNDigit(n, digit)
