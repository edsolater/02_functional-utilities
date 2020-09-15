const getLast = <T, U extends unknown[]>(arr: [...U, T]): T => arr[arr.length - 1] as T
export default getLast
