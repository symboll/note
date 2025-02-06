# Array
```js
// 静态属性
get Array[@@species]

// 静态方法
Array.from()               
Array.fromAsync()     
Array.isArray()                 
Array.of()          

// 实例属性
Array.prototype[@@unscopables]
Array.prototype.length

// 实例方法 - 操作原数组
Array.prototype.push()
Array.prototype.pop()
Array.prototype.unshift()
Array.prototype.shift()
Array.prototype.sort()
Array.prototype.reverse()
Array.prototype.splice()
Array.prototype.copyWithin()    
Array.prototype.fill()   

// 实例方法 - 不操作原数组
Array.prototype.at()      // ES13 - 2022
Array.prototype.join()
Array.prototype.slice()
Array.prototype.concat()

// 实例方法 - 遍历方法
Array.prototype.map()
Array.prototype.every()
Array.prototype.some()
Array.prototype.forEach()
Array.prototype.filter()
Array.prototype.reduce()
Array.prototype.reduceRight()

// 实例方法 - 查找方法
Array.prototype.includes()   // ES7 - 2016
Array.prototype.indexOf()
Array.prototype.lastIndexOf()
Array.prototype.find()          
Array.prototype.findIndex()     
Array.prototype.findLast()
Array.prototype.findLastIndex()

// 实例方法 - 迭代方法
Array.prototype.entries()       
Array.prototype.values()        
Array.prototype.keys()          

// 实例方法 - 扁平方法
Array.prototype.flat()       // ES10 - 2019
Array.prototype.flatMap()    // ES10 - 2019

// 实例方法 - 继承方法
Array.prototype.toString()
Array.prototype.toLocaleString()
```
## 静态属性
### get Array[@@species]
`Array[@@species]` 访问器属性返回 Array 的构造函数。
```js
// syntax
Array[Symbol.species]      // ƒ Array() { [native code] }
```

## 静态方法
### Array.from()
`Array.from() `方法可以从一个类数组对象（拥有 length 属性和若干索引属性的任意对象）或可迭代对象创建一个新的，浅拷贝的数组实例。
```js
// syntax
Array.from(arrayLike, mapFn, thisArg)

// example
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

const range = (start, stop, step) =>  Array.from(
  { length: (stop - start) / step + 1 }, 
  (_, i) => start + (i * step)
);
range(0, 4, 1);                                     // [0, 1, 2, 3, 4] 
range(1, 10, 2);                                    // [1, 3, 5, 7, 9]
```
### Array.fromAsync()
`Array.fromAsync()` 静态方法可以由一个异步可迭代对象、可迭代对象或类数组对象创建一个**新的、浅拷贝的 Array实例**。
```js
// syntax
Array.fromAsync(arrayLike, mapFn?, thisArg?)
// example
// 从产生 promise 的同步可迭代对象创建数组
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
```
##### compare
```js
与 Promise.all() 的比较
Array.fromAsync() 会依次等待对象中产生的每个值兑现。Promise.all() 会并行等待所有值兑现。

function* makeAsyncIterable() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time("Array.fromAsync() time");
  await Array.fromAsync(makeAsyncIterable());
  console.timeEnd("Array.fromAsync() time");
  // Array.fromAsync() time: 503.610ms

  console.time("Promise.all() time");
  await Promise.all(makeAsyncIterable());
  console.timeEnd("Promise.all() time");
  // Promise.all() time: 101.728ms
})();
```


### Array.isArray()
`Array.isArray()`用于确定传递的值是否是一个 Array。 返回值: `Boolean`
```js
// syntax
Array.isArray(any)                                // Boolean

// example
Array.isArray([]);                                  // true
Array.isArray(new Array());                         // true
Array.isArray(Array.prototype);                     // true
```
::: tip 提示
当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.
:::
```js
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
const arr = new xArray(1,2,3); // [1,2,3]

// 正确检查 Array
Array.isArray(arr);     // true
arr instanceof Array;   // false
```

### Array.of()
`Array.of()`方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
```js
// syntax
Array.of(element0, element1, ..., elementN)

// example
Array.of(1);                          // [1] 
Array.of(1, 2, 3);                    // [1, 2, 3]
Array.of(undefined);                  // [undefined]
Array(1);                             // [ empty ]
Array(1, 2, 3);                       // [1, 2, 3]

// 兼容性
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```
## 实例属性
### Array.prototype[@@unscopables]
```js
console.log(Array.prototype[Symbol.unscopables])
// [Object: null prototype] {
//   copyWithin: true,
//   entries: true,
//   fill: true,
//   find: true,
//   findIndex: true,
//   flat: true,
//   flatMap: true,
//   includes: true,
//   keys: true,
//   values: true,
//   at: true,   
//   findLast: true,
//   findLastIndex: true
// }
```
### Array.prototype.length
## 实例方法 - 操作原数组
### push(),pop(),unshift(),shift()
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
### sort() 
`sort()` 方法用`原地算法 (in-place algorithm)`对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
::: tip 提示
由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
:::
```js
// syntax
sort((a, b) => { /* … */ } )

// example
const arr =  [11, 2,'5',7, 5, 34]
arr.sort()                  // [11, 2, 34, "5", 5, 7] 
arr.sort((a,b) => a-b)      // [2, "5", 5, 7, 11, 34]
arr.sort((a,b) => b-a)      // [34, 11, 7, "5", 5, 2]
```
### reverse()
`reverse()` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
```js
// syntax
reverse()

// example
const arr = [1, 2, 3];
arr.reverse();
console.log(arr);      // [3, 2, 1]

const arrLike = {0: 1, 1: 2, 2: 3, length: 3};
Array.prototype.reverse.call(arrLike);
console.log(arrLike);  // {0: 3, 1: 2, 2: 1, length: 3}

```
### splice()
`splice() `方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
```js
// syntax
splice(start, deleteCount, item1, item2, ...itemN)

// example
const fish = ['angel', 'clown', 'drum', 'sturgeon'];
const removed = fish.splice(2, 1, "trumpet");
// fish:   ['angel', 'clown', 'trumpet', 'sturgeon']
// removed ['drum']
```
### copyWithin()
`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，**不会改变原数组的长度**。
```js
// syntax
copyWithin(target, [start, [end]])     
// target: 复制序列到该位置。如果是负数，target 将从末尾开始计算。如果 target 大于等于 arr.length，将不会发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length
// start: 开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。如果 start 被忽略，copyWithin 将会从 0 开始复制。
// end: 开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）

// example
[1, 2, 3, 4, 5].copyWithin(-2)          // [1, 2, 3, 1, 2]
[1, 2, 3, 4, 5].copyWithin(0, 3)        // [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)     // [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)  // [1, 2, 3, 3, 4]
[].copyWithin.call({length: 5, 3: 1}, 0, 3);   // {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
const i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);                                          // Int32Array [3, 4, 5, 4, 5]
// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);   // Int32Array [4, 2, 3, 4, 5]
```
### fill()
`fill()` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。**不包括终止索引**。
```js
// syntax
fill(value, [start, [end]])

// example
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

const arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果 fill 的参数为引用类型，会导致都执行同一个引用类型
// 如 arr[0] === arr[1] 为 true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```
## 实例方法 - 不操作原数组
### at()
`at()` 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。
```js
// syntax
at(index)     // 匹配给定索引的数组中的元素。如果找不到指定的索引，则返回 undefined。

// example
const cart = ['apple', 'banana', 'pear'];
cart.at(1)     // 'apple'
cart.at(-1)    // 'pear'
cart.at(10)    // undefined
cart.at(-10)   // undefined
```
### join()
`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
```js
arr.join([separator])       /// separator 默认 ','
```

```js
const arr = [1, 'a', true, undefined, null, 12n, { name: "zhangsan" }]
const str = arr.join()   // str: "1,a,true,,,12,[object Object]"
```

:::danger 重点
如果一个元素为 undefined 或 null，则它会被转换为空字符串。
如果一个元素为 Symboll 则会报错。
:::

#### 连接类数组对象
```js
function f() {
  const str = Array.prototype.join.call(arguments);
  console.log(str); // '1,a,true'
}
f(1, 'a', true);
```

### slice()
### concat()

## 实例方法 - 遍历方法
### map(), every(), some(), forEach(), filter()

### reduce() && reduceRight()
```js
Array.prototype.myReduce = function (callback, initialValue) {
  if(typeof callback !== 'function') { throw new Error('xxx') }
  const arr = this
  if(!initialValue){
    initialValue = arr.shift()
  }
  let acc = initialValue
  const length = arr.length
  for(let i = 0; i < length; i++) {
    acc = callback(acc, arr[i], i, arr)
  }
  return acc
}

//  test
const arr = [1,2,3,4,5,6,7]
const sum1 = arr.reduce((acc, cur, index, arr ) => {
  return acc + cur
}, 0)
const sum2 = arr.myReduce((acc, cur, index, arr ) => {
  return acc + cur
}, 0)
console.log('1',sum1)
console.log('2',sum2)

```
## 实例方法 - 查找方法
### includes() 
### indexOf() && lastIndexOf()
### find() && findIndex()  
### findLast() &&  findLastIndex()   

## 实例方法 - 迭代方法
### entries() && values() && keys()          

## 实例方法 - 扁平方法
### flat() && flatMap()   
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
## 实例方法 - 继承方法
### toString() && toLocaleString()
