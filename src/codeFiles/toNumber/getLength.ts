import isArray from '../toBoolean/isArray'
import isMap from '../toBoolean/isMap'
import isSet from '../toBoolean/isSet'
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
