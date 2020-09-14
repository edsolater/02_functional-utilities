const hasProperty = (obj: object, propName: string) => propName in obj
export default hasProperty
export const hasPropertyCurried = (propName: string) => (obj: object) => hasProperty(obj, propName)
