# String
## properties & methods
```js
属性
String length
方法
String.raw()
String.fromCharCode()
String.fromCodePoint()

String.prototype.match()
String.prototype.matchAll()
String.prototype.replace()
String.prototype.replaceAll()
String.prototype.search()
String.prototype.split()

String.prototype[@@iterator]()
String.prototype.charAt()
String.prototype.charCodeAt()
String.prototype.codePointAt()

String.prototype.includes()
String.prototype.indexOf()
String.prototype.lastIndexOf()

String.prototype.localeCompare()
String.prototype.normalize()
String.prototype.repeat()
String.prototype.slice()
String.prototype.concat()
String.prototype.substring()

String.prototype.padEnd()
String.prototype.padStart()

String.prototype.startsWith()
String.prototype.endsWith()

String.prototype.toUpperCase()
String.prototype.toLowerCase()
String.prototype.toLocaleLowerCase()
String.prototype.toLocaleUpperCase()

String.prototype.trim()
String.prototype.trimEnd()
String.prototype.trimStart()

String.prototype.toString()
String.prototype.valueOf()
```

## 与RegExp相关
:::danger 重点
- String.prototype.match() 
- String.prototype.matchAll() 
- String.prototype.search()
- 如果传入一个非正则表达式对象 regexp，则会使用 new RegExp(regexp) 隐式地将其转换为正则表达式对象。
:::
### String.prototype.match() & String.prototype.matchAll()
`match() `方法检索返回一个字符串匹配正则表达式的结果。<br/>
`matchAll()`方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
```js{1,14}
str.match(pattern)

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const pattern = /[A-Z]/g;
const found = paragraph.match(pattern);      // ["T", "I"]

// 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
// 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有如下所述的其他属性。
// - groups: 一个捕获组数组 或 undefined（如果没有定义命名捕获组）。
// - index: 匹配的结果的开始位置
// - input: 搜索的字符串.
// 一个Array，其内容取决于global（g）标志的存在与否，如果未找到匹配则为null。

str.matchAll(pattern)

const pattern = /t(e)(st(\d?))/g;
const str = 'test1test2';
const found = Array.from(str.matchAll(pattern))
// [
//  ["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined], 
//  ["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]
// ]
// 返回值:  一个迭代器（不可重用，结果耗尽需要再次调用方法，获取一个新的迭代器）。
```
:::tip 提示
- 如果正则表达式不包含 g 标志，str.match() 将返回与 RegExp.exec(). 相同的结果。
- 如果没有 /g 标志，matchAll 会抛出异常。
:::
`如果使用 matchAll ，就可以不必使用 while 循环加 exec 方式（且正则表达式需使用 /g 标志）。使用 matchAll 会得到一个迭代器的返回值，配合 for...of, array spread, 或者 Array.from() 可以更方便实现功能：`<br/>
`matchAll 的另外一个亮点是更好地获取捕获组。因为当使用 match() 和 /g 标志方式获取匹配信息时，捕获组会被忽略：`
```js
var pattern = /t(e)(st(\d?))/g;
var str = 'test1test2';
str.match(pattern);   
// Array ['test1', 'test2']

[...str.matchAll(regexp)];
// [
//  ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4],
//  ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
// ]
```
### String.prototype.replace() & String.prototype.replaceAll()
`replace()` 方法返回一个由替换值`replacement`替换`部分`或`所有`的模式（pattern）匹配项后的`新字符串`。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。<br/>
`replaceAll()` 方法返回一个新字符串，新字符串`所有`满足 pattern 的部分都已被replacement 替换。pattern可以是一个字符串或一个 RegExp， replacement可以是一个字符串或一个在每次匹配被调用的函数。
:::tip 区别
replace 与 replaceAll 的区别
- replace 如果pattern是字符串，则仅替换第一个匹配项。
- replaceAll替换所有
:::

```js
// 该方法并不改变调用它的字符串本身，而只是返回一个新的替换后的字符串。

str.replace(regexp|substr, newSubStr|function)
str.replaceAll(regexp|substr, newSubstr|function)
```
`使用字符串作为参数 newSubStr: 用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。`
| 变量名        | 代表的值           | 
|:------------- |:-------------| 
| $$ | 插入一个 "$"。| 
| $& | 插入匹配的子串。|   
| $` | 插入当前匹配的子串左边的内容。|   
| $' | 插入当前匹配的子串右边的内容。|   
| $n | 假如第一个参数是 RegExp对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从1开始。如果不存在第 n个分组，那么将会把匹配到到内容替换为字面量。比如不存在第3个分组，就会用“$3”替换匹配到的内容。|   
| $\<Name\> |  这里Name 是一个分组名称。如果在正则表达式中并不存在分组（或者没有匹配），这个变量将被处理为空字符串。只有在支持命名分组捕获的浏览器中才能使用。|   

`指定一个函数作为参数 function: 一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。`
| 变量名        | 代表的值           | 
|:------------- |:-------------| 
| match | 匹配的子串。（对应于上述的$&。）| 
| p1,p2, ... | 假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）例如，如果是用 /(\a+)(\b+)/ 这个来匹配，p1 就是匹配的 \a+，p2 就是匹配的 \b+。 |   
| offset | 匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 'abcd'，匹配到的子字符串是 'bc'，那么这个参数将会是 1）|   
| string | 被匹配的原字符串。|   
| NamedCaptureGroup | 命名捕获组匹配的对象 | 


```js{1,2}
// inpout  get-element-by-id
// output  getElementById

function localeUpperCase (str) {
  const pattern = /-[a-zA-Z]/g
  return str.replace(pattern, (match) => match.slice(1).toLocaleUpperCase())
}
```
```js{1,2}
// input: abc123def456
// output: 123abc456def

function exchange (str) {
  const pattern = /([a-zA-Z]+)([1-9]+)/g
  return str.replace(pattern, (match, p1, p2) => {
    return `${p2}${p1}`
  })
}

function exchange (str) {
  const pattern = /([a-zA-Z]+)([1-9]+)/g
  return str.replace(pattern, "$2$1");
}
```

### String.prototype.search()
`search()` 方法执行正则表达式和 String 对象之间的一个搜索匹配。
```js{1}
str.search(pattern)
// 返回值
// 如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1。
```
:::tip 提示
- search()类似于正则表达式的 test() 方法。
- 当要了解更多匹配信息时，可使用 match()（但会更慢一些），该方法类似于正则表达式的 exec() 方法。
:::
### String.prototype.split()
`split()`方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 
```js
str.split([separator[, limit]])

`separator`
// 如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。
// 如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。
`limit`
// 一个整数，限定返回的分割片段数量。
```
```js
note:
// 当字符串为空时，split() 返回一个包含一个空字符串的数组，而不是一个空数组
// 如果字符串和分隔符都是空字符串，则返回一个空数组
const str = ''
str.split('')   // []
str.split()     // ['']


const str = "Hello 1 word. Sentence number 2.";
str.split(/(\d)/);   //["Hello ", "1", " word. Sentence number ", "2", "."]
str.split(/\d/);     //["Hello ", " word. Sentence number ", "."]

const str = 'abcdef'
str.split('',4)  //  ["a", "b", "c", "d"]
str.split('')    //  ["a", "b", "c", "d", "e", "f"]
str.split()      //  ["abcdef"]
```

## Rare Api
### String.prototype.localeCompare()
`localeCompare()`方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。<br/>
当 引用字符串 在 比较字符串 前面时返回 `-1` <br/>
当 引用字符串 在 比较字符串 后面时返回 `1 ` <br/>
相同位置时返回` 0`
```js
referenceStr.localeCompare(compareString[, locales[, options]])

// 新的 locales 、 options 参数能让应用程序定制函数的行为即指定用来排序的语言。 
// locales 和 options 参数是依赖于具体实现的，在旧的实现中这两个参数是完全被忽略的。
```
```js
'a'.localeCompare('c');   // -1  'a'是引用字符串， 'c'是比较字符串
'd'.localeCompare('c');   // 1
```

### String.prototype.normalize()
`normalize()` 方法会按照指定的一种 Unicode 正规形式将当前字符串正规化。（如果该值不是字符串，则首先将其转换为一个字符串）。
```js
str.normalize([form])
```
### String.prototype.repeat()
`repeat() `构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。
```js
str.repeat(count)
//count:  介于 0 和 +Infinity 之间的整数。表示在新构造的字符串中重复了多少遍原字符串。
```
```js
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
"abc".repeat(1/0)    // RangeError:  repeat count must be positive and less than inifinity
```

### String.prototype.padStart() & String.prototype.padEnd()

`padStart()`方法用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。<br/>
`padEnd()`  方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。
```js
str.padStart(targetLength [, padString])
str.padEnd(targetLength [, padString])

// targetLength
// 当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
// padString 可选
// 填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的缺省值为 " "（U+0020）。
```

```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"

'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
```