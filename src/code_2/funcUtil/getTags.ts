export const getTags = (fn: Function): string[] =>
  Array.from(fn.name.match(/(?<=\[)\w+(?=\])/g) ?? [])
