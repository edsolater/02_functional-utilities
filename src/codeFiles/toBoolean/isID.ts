import isHexString from './isHexString'
import isNumber from './isNumber'

const isID = (val: unknown) => isNumber(val) || isHexString(val)
export default isID
