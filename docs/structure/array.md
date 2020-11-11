## Array


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


Array.prototype.copyWithin()    // es6
Array.prototype.fill()          // es6
Array.prototype.includes()      // es7
Array.prototype.flat()          // es10
Array.prototype.flatMap()       // es10
```

## Array.from()
`Array.from() `方法可以从一个类数组对象（拥有 length 属性和若干索引属性的任意对象）或可迭代对象创建一个新的，浅拷贝的数组实例。

```js{1}
Array.from(arrayLike, mapFn, thisArg)

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

## Array.isArray()
`Array.isArray()`用于确定传递的值是否是一个 Array。 返回值: `Boolean`
```js
Array.isArray([]);                                  // true
Array.isArray(new Array());                         // true
Array.isArray(Array.prototype);                     // true
```
::: tip
当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.
:::

## Array.of()
`Array.of()`方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
```js
Array.of(1);                          // [1] 
Array.of(1, 2, 3);                    // [1, 2, 3]
Array.of(undefined);                  // [undefined]
Array(1);                             // [ empty ]
Array(1, 2, 3);                       // [1, 2, 3]
```
兼容
```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```