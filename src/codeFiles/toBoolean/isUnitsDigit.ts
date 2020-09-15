import isInt from './isInt'

const isUnitsDigit = (n: number) => isInt(n) && String(n).length === 1
export default isUnitsDigit
