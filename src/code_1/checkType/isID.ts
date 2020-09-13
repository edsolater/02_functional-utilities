import { isHexString } from './isHexString'
import { isNumber } from './isNumber'

export const isID = (val: unknown) => isNumber(val) || isHexString(val)
