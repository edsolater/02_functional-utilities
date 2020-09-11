import isNullish from "./isNullish"

test("对于nullish值", () => {
  expect(isNullish(undefined)).toBe(true)
  expect(isNullish(null)).toBe(true)
})
test("对于其他任何非nullish值", () => {
  expect(isNullish(true)).toBe(false)
  expect(isNullish(false)).toBe(false)
  expect(isNullish(1)).toBe(false)
  expect(isNullish(0)).toBe(false)
  expect(isNullish('')).toBe(false)
  expect(isNullish('sd')).toBe(false)
  expect(isNullish([])).toBe(false)
})