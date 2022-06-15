# CustomArrayFn

```js
function find(data) {
  function customArrayFn () {}
  const fnList = []

  function typeJudge (any) {
    const toString = Object.prototype.toString
    return toString.call(any).slice(8, -1).toLowerCase()
  }

  if(!Array.isArray(data)) { throw new Error('params must be array') }

  customArrayFn.prototype.where = function (condition) {
    fnList.push( this._where.bind(this, condition))
    return this
  }

  customArrayFn.prototype._where = function (condition) {
    const keys = Object.keys(condition)
    for(let key of keys) {
      if(typeJudge(condition[key]) === 'regexp') {
        data = data.filter(item => {
          if(condition[key].test(item[key])) {
            return item
          }
          return null
        })
      }else if(typeJudge(condition[key]) === 'string'){
        data = data.filter(item => item[key] == condition[key])
      }
    }
  }

  customArrayFn.prototype.orderBy = function (key, desc) {
    fnList.push( this._orderBy.bind(this, key, desc))
    return this
  }
  customArrayFn.prototype._orderBy = function (key, desc) {
    data = data.sort((a, b) => {
      if(desc) {
        return b[key] - a[key]
      }
      return a[key] - b[key]
    })
  }
  customArrayFn.prototype.groupBy = function (key) {
    fnList.push(this._groupBy.bind(this, key))
    return this
  }
  customArrayFn.prototype._groupBy = function (key) {
    const map = new Map()
    for(let item of  data) {
      if (!map.get(item[key])) {
        map.set(item[key], [])
      }
      map.get(item[key]).push(item)
    }
    let arr = []
    for(let key of map) {
      arr.push(key[1])
    }
    data = arr
  }
  
  customArrayFn.prototype.execute = function () {
    for (let key of fnList) {
      key()
    }
    return data
  }

  let proto = customArrayFn.prototype
  return  {
    ...proto
  }
}

const data = [
  { userId: 8, title: 'title1' },
  { userId: 11, title: 'other' },
  { userId: 15, title: null },
  { userId: 19, title: 'title2' },
];

const result = find(data)
  .where({
    title: /\d$/,
  })
  .orderBy('userId')
  .execute();
console.log('result:', result);
```