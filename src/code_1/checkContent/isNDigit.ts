import isInt from '../checkType/isInt'

const isNDigit = (n: number, digit: number) => isInt(n) && String(n).length === digit
export default isNDigit
