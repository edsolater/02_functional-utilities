const isSet = (obj: any): obj is Set<unknown> => obj instanceof Set
export default isSet
