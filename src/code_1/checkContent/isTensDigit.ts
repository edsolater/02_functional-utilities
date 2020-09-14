import isInt from '../checkType/isInt'

const isTensDigit = (n: number) => isInt(n) && String(n).length === 2
export default isTensDigit
