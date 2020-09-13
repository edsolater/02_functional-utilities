import { isInt } from '../checkType/isInt'

export const isTensDigit = (n: number) => isInt(n) && String(n).length === 2
