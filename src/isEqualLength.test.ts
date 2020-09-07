import { isEqualLength } from "./isEqualLength"

test("basic", () => {
  expect(isEqualLength([2, 3], [4, 5])).toBe(true)
})
