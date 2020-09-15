import isArray from 'codeFiles/toBoolean/isArray'
const isSet = (obj: any): obj is Set<unknown> => obj instanceof Set
const isMap = (obj: any): obj is Map<unknown, unknown> => obj instanceof Map

const getLength = (obj: unknown[] | Set<unknown> | Map<unknown, unknown> | object) => {
  if (isArray(obj)) {
    return obj.length
  } else if (isSet(obj) || isMap(obj)) {
    return obj.size
  } else {
    return Object.keys(obj).length
  }
}
export default getLength
