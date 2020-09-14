import { getProperty } from 'code_2/parseObject/getProperty'

export const getTags = (fn: Function): string[] => getProperty(fn, 'tags', [])
