export const isNull = (val: unknown) => val === null
export const isUndefined = (val: unknown) => val === undefined
export const isNullish = (val: unknown) => isNull(val) || isUndefined(val)
/* -------------------------------------------------------------------------- */
export const isBoolean = (val: unknown) => typeof val === "boolean"
export const isTrue = (val: unknown) => val === true
export const isFalse = (val: unknown) => val === false
/* -------------------------------------------------------------------------- */
export const isNumber = (val: unknown) => typeof val === "number"
export const isInt = Number.isInteger
export const isFinite = Number.isFinite
export const isInfinity = (val: unknown) =>
  val === Infinity || val === -Infinity
export const isZero = (val: unknown) => val === 0
export const isNaN = Number.isNaN
/* -------------------------------------------------------------------------- */
export const isString = (val: unknown) => typeof val === "string"
export const isEmptyString = (val: unknown) => val === ""
/**
 * 检验其是否由0-9/A-Z/a-z组成
 */
export const isHexString = (val: unknown) =>
  isString(val) && (val as string).match(/^[0-9a-fA-F]*$/) !== null


/* -------------------------------以下是高级部分------------------------------------------- */


export const isID = (val: unknown) => isNumber(val) || isHexString(val)
