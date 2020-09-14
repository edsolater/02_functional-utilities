export const hasProperty = (obj: object, propName: string) => propName in obj
export const hasPropertyCurried = (propName: string) => (obj: object) => hasProperty(obj, propName)
