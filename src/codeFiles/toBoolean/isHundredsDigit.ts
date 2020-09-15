import isInt from './isInt'

const isHundredsDigit = (n: number) => isInt(n) && String(n).length === 3
export default isHundredsDigit
