# Array
## Interview
### flatten [数组扁平化]
```js
const flatten = (arr, depth = Infinity) => {
  return arr.flat(depth)
}

const flatten = (arr) => {
  return [].concat(...arr.map(item => Array.isArray(item) ? flatten(item): item))
}

const flatten = (arr) => {
  return arr.reduce((result, item) => 
    result.concat(Array.isArray(item) ? flatten(item): item), [])
}
```

### unique [数组去重]
```js
const unique = (arr) => {
  return new Set([...arr])
}

const unique = (arr) => {
  const obj = {}
  return arr.filter(item => {
    return typeof item === 'object' && JSON.stringify(item) !== 'null' ?
      ( obj.hasOwnProperty(Object.keys(item).sort().map(ele => `${ele}${item[ele]}`).join(''))?
          false :
          obj[Object.keys(item).sort().map(ele =>`${ele}${item[ele]}`).join('')] = true
      ):
      (
        obj.hasOwnProperty(typeof item + item) ?
        false: 
        obj[typeof item + item] = true
      )
  })
}
```
## methods
```js
Array.from()                    
Array.isArray()                 
Array.of()                      

Array.prototype.push()
Array.prototype.pop()
Array.prototype.unshift()
Array.prototype.shift()
Array.prototype.sort()
Array.prototype.reverse()
Array.prototype.splice()
Array.prototype.copyWithin()    
Array.prototype.fill()   

Array.prototype.join()
Array.prototype.slice()
Array.prototype.concat()
Array.prototype.toString()
Array.prototype.toLocaleString()

Array.prototype.map()
Array.prototype.filter()
Array.prototype.forEach()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.every()
Array.prototype.some()
Array.prototype.indexOf()
Array.prototype.lastIndexOf()
Array.prototype.find()          
Array.prototype.findIndex()     
Array.prototype.entries()       
Array.prototype.values()        
Array.prototype.keys()          
Array.prototype.includes() 
Array.prototype.flat()          
Array.prototype.flatMap()       
```

### Array.from()
`Array.from() `方法可以从一个类数组对象（拥有 length 属性和若干索引属性的任意对象）或可迭代对象创建一个新的，浅拷贝的数组实例。
```js
Array.from(arrayLike, mapFn, thisArg)
```
```js
Array.from('foo');                                  // [ "f", "o", "o" ]
Array.from(new Set(['foo', 'bar', 'baz']));         // [ "foo", "bar", "baz" ]
Array.from(new Map([[1, 2], [2, 4], [4, 8]]));      // [[1, 2], [2, 4], [4, 8]]
const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());                        // ['a', 'b'];
Array.from(mapper.keys());                          // ['1', '2'];

function f() { return Array.from(arguments); }
f(1, 2, 3);                                         // [ 1, 2, 3 ]  (arguments 类数组对象)

Array.from([1, 2, 3], x => x + x);                  // [2, 4, 6]  等同于下面的执行语句
Array.from([1, 2, 3]).map(x => x + x);

const range = (start, stop, step) => 
  Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
range(0, 4, 1);                                     // [0, 1, 2, 3, 4] 
range(1, 10, 2);                                    // [1, 3, 5, 7, 9]
```

### Array.isArray()
`Array.isArray()`用于确定传递的值是否是一个 Array。 返回值: `Boolean`
```js
Array.isArray(any)                                // Boolean
```
```js
Array.isArray([]);                                  // true
Array.isArray(new Array());                         // true
Array.isArray(Array.prototype);                     // true
```
::: tip
当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.
:::

### Array.of()
`Array.of()`方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
```js
Array.of(element0, element1, ..., elementN)
```
```js
Array.of(1);                          // [1] 
Array.of(1, 2, 3);                    // [1, 2, 3]
Array.of(undefined);                   // [undefined]
Array(1);                             // [ empty ]
Array(1, 2, 3);                       // [1, 2, 3]
```
兼容性
```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```
### 操作（原数组）方法
#### push, pop, unshift, shift
```js
const arr = [1,2,3,4]
arr.push('a','b','d')         // 在数组尾部添加元素，返回数组长度。 (对原数组操作)
// 7 
// arr [1,2,3,4,'a','b','d']
arr.pop()                     // 删除数组最后一个元素， 返回被删除的元素。
// 'd'
// arr [1,2,3,4,'a','b']
arr.unshift('a','b','c')      // 在数组头部添加元素，返回数组长度。
// 9
// arr ['a','b','c',1,2,3,4,'a','b']
arr.shift()                   // 删除数组第一个元素， 返回被删除的元素。
// 'a'
// arr ['b','c',1,2,3,4,'a','b']
```
#### sort 
`sort()` 方法用`原地算法 (in-place algorithm)`对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
::: tip
由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
:::
```js
const arr =  [11, 2,'5',7, 5, 34]
arr.sort()                  // [11, 2, 34, "5", 5, 7] 
arr.sort((a,b) => a-b)      // [2, "5", 5, 7, 11, 34]
arr.sort((a,b) => b-a)      // [34, 11, 7, "5", 5, 2]
```
#### reverse
#### splice
#### copyWithin
#### fill

### 访问方法
#### join
```js
```
#### slice
#### concat
#### toString
#### toLocaleString
### 遍历方法

```js
const arr = [1,2,3,4,5]
arr.forEach((current,index,array) => { console.log(current) }) 
// 与 map() 或者 reduce() 不同的是，它总是返回 undefined 值，不可链式调用。
// 不会改变原数组，也就是调用它的数组（尽管 callback 函数在被调用时可能会改变原数组）。
// 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。
// 若需要提前终止循环，你可以使用：every(), some(), find(), findIndex()

// 关于链式调用 解释
arr.filter(f => f > 2).map(i => i * 2)   // [6, 8, 10]  

// 无法跳出循环体 解释
arr.forEach(item => {
  if(item > 3) {
    console.log('我还在forEach循环体中')
    return
  }
  console.log(item)
})        // 1,2,3,'我还在forEach循环体中','我还在forEach循环体中'


// forEach, map 如何跳出循环体
try {
  arr.forEach(item => {
    if(item >= 3) {
      throw new Error('超出3了')
    }
  })
}catch(e) {

}

```

