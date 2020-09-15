/**
 * 从函数名中提取tags。（tags代表对原函数做过的“手脚”， 例如： 柯里化过的函数会被打上，柯里化的TAG）
 * @param fn 目标
 */
const getTags = (fn: Function): string[] => Array.from(fn.name.match(/(?<=\[)\w+(?=\])/g) ?? [])

export default getTags
