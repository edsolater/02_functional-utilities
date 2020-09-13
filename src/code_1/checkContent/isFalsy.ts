import { isTruthy } from './isTruthy'

export const isFalsy = (val1: unknown) => !isTruthy(val1)
