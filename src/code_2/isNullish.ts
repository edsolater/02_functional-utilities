import { isNull } from '../code_1/isNull'
import { isUndefined } from '../code_1/isUndefined'

export const isNullish = (val: unknown) => isNull(val) || isUndefined(val)
