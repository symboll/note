# Map
`Map`结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。

```js
// 数组/具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数。
const set = new Set([['foo', 1],['bar', 2]])
const map = new Map(set);
map.get('foo') // 1
```
```js
// 如果对同一个键多次赋值，后面的值将覆盖前面的值。
const map = new Map();
map.set(1, 'aaa').set(1, 'bbb');
map.get(1) // "bbb"
```

### Map 实例的属性和方法 
```js
Map.prototype.size      // 属性返回 Map 结构的成员总数。

Map.prototype.set(key, value)
Map.prototype.get(key)
Map.prototype.has(key)
Map.prototype.delete(key)
Map.prototype.clear()

// 遍历方法
Map.prototype.keys()        // 返回键名的遍历器。
Map.prototype.values()      // 返回键值的遍历器。
Map.prototype.entries()     // 返回所有成员的遍历器。
Map.prototype.forEach()     // 遍历 Map 的所有成员。
```

```js
map[Symbol.iterator] === map.entries   // true
```

```js
// Map => Array
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
```
# WeakMap
`WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合。
```js
// WeakMap与Map的区别有两点。
1. WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
2. WeakMap的键名所指向的对象，不计入垃圾回收机制。
3. 没有遍历操作（即没有`keys()`、`values()`和`entries()`方法），也没有size属性。
4. 无法清空，即不支持clear方法。

WeakMap只有四个方法可用：`get()、set()、has()、delete()`
```