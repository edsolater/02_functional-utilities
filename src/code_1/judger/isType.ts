/**以上判断的万能版，需要2个参数，一般不用 */
export const isType = (judger: (val: any) => boolean) => (val: any) => judger(val)
