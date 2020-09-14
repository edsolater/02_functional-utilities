const inChoices = <T extends any>(choices: T[]) => (val: T) => choices.includes(val)
export default inChoices
