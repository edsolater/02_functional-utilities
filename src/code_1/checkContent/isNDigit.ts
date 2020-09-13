import { isInt } from '../checkType/isInt'

export const isNDigit = (digit: number) => (n: number) => isInt(n) && String(n).length === digit
