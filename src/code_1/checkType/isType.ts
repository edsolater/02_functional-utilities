/**以上判断的万能版，需要2个参数，一般不用 */
export const isType = (val: any, judger: (val: any) => boolean) => judger(val)
export const isTypeCurried = (judger: (val: any) => boolean) => (val: any) => isType(val, judger)
