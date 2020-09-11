import { isHexString, isID, isNullish } from "./judgerType"

test("是否可以作为ID", () => {
  expect(isID("2ad4")).toBe(true)
  expect(isID("2ggd4")).toBe(false)
  expect(isID(0)).toBe(true)
  expect(isID(2)).toBe(true)
  expect(isID([])).toBe(false)
})
