/**
 * 以上判断的万能版，需要2个参数，一般不用
 * @deprecated
 * @param val 值
 * @param judger 判定机制
 */
const isType = (val: any, judger: (val: any) => boolean) => judger(val)
export default isType

