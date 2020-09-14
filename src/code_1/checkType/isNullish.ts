import isNull from './isNull'
import isUndefined from './isUndefined'

const isNullish = (val: unknown) => isNull(val) || isUndefined(val)
export default isNullish
