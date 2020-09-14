const isGenerator = (val: any) => val.constructor.name === 'GeneratorFunction'
export default isGenerator
