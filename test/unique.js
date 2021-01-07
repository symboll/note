
const unique = (arr) => {
  const map = new Map()

  return arr.filter(item => {
    return typeof item === 'object' && JSON.stringify(item) !== null ? 
      (map.get(Object.keys(item).sort().map(i => i+ item[i]).join('')) ? 
        false:
        map.set(Object.keys(item).sort().map(i => i+ item[i]).join(''), true)
      ):
      (
        map.get(typeof item + item) ?
        false:
        map.set(typeof item + item, true)
      )
  })
}

// const arr = [1,2,'1', 1, { name: 'zhangsan' }, { id: 1, name: 'zhangsan' }, {name: 'zhangsan', id: 1}]

// console.log(unique(arr))