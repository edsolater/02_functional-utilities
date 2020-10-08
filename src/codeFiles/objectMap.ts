/**
 * 纯函数
 *
 * 基于对象的每一个value，映射， 返回新的对象
 * 该对象有相同的属性数量
 *
 * 类似于array.protoype.map
 * @param target 目标对象
 * @param mapperFn 映射函数
 */
const objectMap = <T extends object, U>(
  target: T,
  mapperFn: (entry: [key: keyof T, value: T[keyof T]], index: number) => [key: string, value: U]
) => {
  //@ts-ignore
  return Object.fromEntries(Object.entries(target).map(mapperFn))
}

export default objectMap
