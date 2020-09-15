const tail = <T extends unknown[]>(arr: Partial<[any, ...T]>): T => arr.slice(1) as T
export default tail
