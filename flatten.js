const flatten = (arr, depth = Infinity) => {
  return arr.flat(depth)
}


const flatten2 = (arr) => {
  return [].concat(...arr.map(item => Array.isArray(item) ? flatten2(item): item))
}

const flatten3 = (arr) => {
  return arr.reduce((result, item) => result.concat(Array.isArray(item) ? flatten3(item): item), [])
}

const flatten4 = (arr) => {
  const stack = []
  while (arr.length) {
    const item = arr.pop()
    if(Array.isArray(item)) {
      arr.push(...item)
    }else {
      stack.push(item)
    }
  }
  return stack.reverse()
}


module.exports = {
  flatten,
  flatten2,
  flatten3,
  flatten4
}

