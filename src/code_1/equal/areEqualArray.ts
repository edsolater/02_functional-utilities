import areLengthEqual from './areLengthEqual'

const areEqualArray = (val1: unknown[], val2: unknown[]) => {
  if (!areLengthEqual(val1, val2)) return false
  return val1.every((i, idx) => i == val2[idx])
}

export default areEqualArray