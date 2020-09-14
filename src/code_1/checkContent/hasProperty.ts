export const hasProperty = (propName: string) => (obj: object) => propName in obj
const original = (propName: string, target: object) => propName in target
