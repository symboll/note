const { unique2 } = require('./unique')
const { flatten4 } = require('./flatten')
// const testArr = [
//   { name: 'zhangsan', age: 18 },
//   { age: 18, name: 'zhangsan' },
//   null,
//   null,
//   NaN,
//   NaN,
//   3,4,5,'3'
// ]

// console.log(unique2(testArr))

const testArr = [[1,2,3],4,[5,6, [7],8, [9, [10],11]]]

console.log(flatten4(testArr))