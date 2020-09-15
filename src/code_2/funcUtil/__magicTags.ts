//#
//#专用于储存一些“魔法”的标签
//#用于标识函数是否被处理过，
//

const funcTags = {
  // 柯里化过的
  CURRIED: 'curried',
  // 绑定了尾部参数的
  BINDTAIL: 'bindTail'
}
export default funcTags