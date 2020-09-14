import isInt from '../checkType/isInt'

const isHundredsDigit = (n: number) => isInt(n) && String(n).length === 3
export default isHundredsDigit
