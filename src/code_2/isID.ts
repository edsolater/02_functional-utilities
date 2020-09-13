import { isHexString } from '../code_1/isHexString'
import { isNumber } from '../code_1/isNumber'

export const isID = (val: unknown) => isNumber(val) || isHexString(val)
