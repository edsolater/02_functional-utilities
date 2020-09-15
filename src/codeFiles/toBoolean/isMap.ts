const isMap = (obj: any): obj is Map<unknown, unknown> => obj instanceof Map
export default isMap
