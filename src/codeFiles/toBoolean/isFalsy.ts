import isTruthy from './isTruthy'

const isFalsy = (val1: unknown) => !isTruthy(val1)
export default isFalsy
