import isNullish from './isNullish'

const isMeaningful = (val: any) => !isNullish(val)
export default isMeaningful
