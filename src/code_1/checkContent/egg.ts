import { isInt } from '../checkType/isInt'

export const isTruthy = (val1: unknown) => Boolean(val1)
export const isFalsy = (val1: unknown) => !isTruthy(val1)

export const isUnitsDigit = (n: number) => isInt(n) && String(n).length === 1
export const isTensDigit = (n: number) => isInt(n) && String(n).length === 2
export const isHundredsDigit = (n: number) => isInt(n) && String(n).length === 3
export const isNDigit = (digit: number) => (n: number) => isInt(n) && String(n).length === digit

export const inRange = (left: number, right: number) => (n: number) => left < n && n <= right
export const inRangeBothSideOpened = (left: number, right: number) => (n: number) =>
  left < n && n < right
export const inRangeBothSideClosed = (left: number, right: number) => (n: number) =>
  left <= n && n <= right
export const inChoices = <T extends any>(choices: T[]) => (val: T) => choices.includes(val)
