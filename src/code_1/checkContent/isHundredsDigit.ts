import { isInt } from '../checkType/isInt'

export const isHundredsDigit = (n: number) => isInt(n) && String(n).length === 3
