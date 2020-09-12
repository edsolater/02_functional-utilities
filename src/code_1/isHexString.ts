import { isString } from "./isString";

/**
 * 检验其是否由0-9/A-Z/a-z组成
 */

export const isHexString = (val: unknown) => isString(val) && (val as string).match(/^[0-9a-fA-F]*$/) !== null;
