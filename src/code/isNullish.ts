import { isNull } from "./isNull";
import { isUndefined } from "./isUndefined";

export const isNullish = (val: unknown) => isNull(val) || isUndefined(val);