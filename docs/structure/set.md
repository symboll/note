# Set

`Set`本身是一个构造函数，用来生成`Set`数据结构。
```js
Object.prototype.toString.call(Set)    //  [Object Function] 

const s = new Set();
Object.prototype.toString.call(s)    //  [Object Set] 
```
`Set`函数可以接受一个数组（或者具有`iterable`接口的其他数据结构）作为参数，用来初始化。 
```js
const set = new Set([1, 2, 3, 4, 4]);
[...set]   // [1,2,3,4]

const set = new Set('abcb')
[...set]   // ['a', 'b', 'c']
```

```js
// 去除数组的重复成员
[...new Set(array)]
Array.from(new Set(array));
```
### Set 实例的属性和方法 
```js
// 实例属性
Set.prototype.constructor      // 构造函数，默认就是Set函数。
const set = new Set()
set.constructor === Set        // true

Set.prototype.size             // 返回Set实例的成员总数。

// 方法  【 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。】
// 操作方法 [add, delete, has, clear]
Set.prototype.add(value)       // 添加某个值，返回 Set 结构本身。
Set.prototype.delete(value)    // 删除某个值，返回一个布尔值，表示删除是否成功。
Set.prototype.has(value)       // 返回一个布尔值，表示该值是否为Set的成员。
Set.prototype.clear()          // 清除所有成员，没有返回值。


// 遍历方法 [keys, values, entries, forEach]
Set.prototype.keys()           // 返回键名的遍历器
Set.prototype.values()         // 返回键值的遍历器
Set.prototype.entries()        // 返回键值对的遍历器
Set.prototype.forEach()        // 使用回调函数遍历每个成员
```
`keys`方法、`values`方法、`entries`方法返回的都是遍历器对象。
`keys`方法和`values`方法的行为完全一致。
::: tip
`Set` 结构的实例默认可遍历，它的默认遍历器生成函数就是它的`values`方法。
:::
```js
Set.prototype[Symbol.iterator] === Set.prototype.values    // true
```

# WeakSet
`WeakSet`结构与`Set`类似，也是不重复的值的集合。
```js
// WeakSet 与 Set 有两个区别 
1. WeakSet 的成员只能是对象，而不能是其他类型的值。
2. WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用。ES6 规定 WeakSet 不可遍历。

WeakSet 结构三个方法。
WeakSet.prototype.add(value) 
WeakSet.prototype.delete(value)
WeakSet.prototype.has(value)
```
::: tip
WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
:::