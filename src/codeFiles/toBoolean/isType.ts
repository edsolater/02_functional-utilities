/**以上判断的万能版，需要2个参数，一般不用 */
const isType = (val: any, judger: (val: any) => boolean) => judger(val)
export default isType

