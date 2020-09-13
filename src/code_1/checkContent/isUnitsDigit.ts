import { isInt } from '../checkType/isInt'

export const isUnitsDigit = (n: number) => isInt(n) && String(n).length === 1
